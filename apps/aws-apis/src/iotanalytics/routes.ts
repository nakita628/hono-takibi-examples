import { createRoute, z } from '@hono/zod-openapi'

const DatasetActionNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+$/)
  .min(1)
  .max(128)
  .openapi('DatasetActionName')

const SqlQuerySchema = z.string().openapi('SqlQuery')

const OffsetSecondsSchema = z.int().openapi('OffsetSeconds')

const TimeExpressionSchema = z.string().openapi('TimeExpression')

const DeltaTimeSchema = z
  .object({
    offsetSeconds: OffsetSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds of estimated in-flight lag time of message data. When you create dataset contents using message data from a specified timeframe, some message data might still be in flight when processing begins, and so do not arrive in time to be processed. Use this field to make allowances for the in flight time of your message data, so that data not processed from a previous timeframe is included with the next timeframe. Otherwise, missed message data would be excluded from processing during the next timeframe too, because its timestamp places it within the previous timeframe.',
        }),
    ),
    timeExpression: TimeExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An expression by which the time of the message data might be determined. This can be the name of a timestamp field or a SQL expression that is used to derive the time the message data was generated.',
        }),
    ),
  })
  .openapi({
    required: ['offsetSeconds', 'timeExpression'],
    description:
      'Used to limit data to that which has arrived since the last execution of the action.',
  })
  .openapi('DeltaTime')

const QueryFilterSchema = z
  .object({
    deltaTime: DeltaTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to limit data to that which has arrived since the last execution of the action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.',
    required: [],
  })
  .openapi('QueryFilter')

const QueryFiltersSchema = z.array(QueryFilterSchema).min(0).max(1).openapi('QueryFilters')

const SqlQueryDatasetActionSchema = z
  .object({
    sqlQuery: SqlQuerySchema.and(z.any().openapi({ description: 'A SQL query string.' })),
    filters: QueryFiltersSchema.and(
      z.any().openapi({ description: 'Prefilters applied to message data.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sqlQuery'], description: 'The SQL query to modify the message.' })
  .openapi('SqlQueryDatasetAction')

const ImageSchema = z.string().max(255).openapi('Image')

const RoleArnSchema = z.string().min(20).max(2048).openapi('RoleArn')

const ComputeTypeSchema = z.enum(['ACU_1', 'ACU_2']).openapi('ComputeType')

const VolumeSizeInGBSchema = z.int().min(1).max(50).openapi('VolumeSizeInGB')

const ResourceConfigurationSchema = z
  .object({
    computeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the compute resource used to execute the <code>containerAction</code>. Possible values are: <code>ACU_1</code> (vCPU=4, memory=16 GiB) or <code>ACU_2</code> (vCPU=8, memory=32 GiB).',
        }),
    ),
    volumeSizeInGB: VolumeSizeInGBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The size, in GB, of the persistent storage available to the resource instance used to execute the <code>containerAction</code> (min: 1, max: 50).',
        }),
    ),
  })
  .openapi({
    required: ['computeType', 'volumeSizeInGB'],
    description:
      'The configuration of the resource used to execute the <code>containerAction</code>.',
  })
  .openapi('ResourceConfiguration')

const VariableNameSchema = z.string().min(1).max(256).openapi('VariableName')

const StringValueSchema = z.string().min(0).max(1024).openapi('StringValue')

const DoubleValueSchema = z.float64().openapi('DoubleValue')

const DatasetNameSchema = z
  .string()
  .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
  .min(1)
  .max(128)
  .openapi('DatasetName')

const DatasetContentVersionValueSchema = z
  .object({
    datasetName: DatasetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dataset whose latest contents are used as input to the notebook or application.',
        }),
    ),
  })
  .openapi({
    required: ['datasetName'],
    description:
      'The dataset whose latest contents are used as input to the notebook or application.',
  })
  .openapi('DatasetContentVersionValue')

const OutputFileNameSchema = z
  .string()
  .regex(/[\w\.-]{1,255}/)
  .openapi('OutputFileName')

const OutputFileUriValueSchema = z
  .object({
    fileName: OutputFileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI of the location where dataset contents are stored, usually the URI of a file in an S3 bucket.',
        }),
    ),
  })
  .openapi({
    required: ['fileName'],
    description: 'The value of the variable as a structure that specifies an output file URI.',
  })
  .openapi('OutputFileUriValue')

const VariableSchema = z
  .object({
    name: VariableNameSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    stringValue: StringValueSchema.and(
      z.any().openapi({ description: 'The value of the variable as a string.' }),
    ).exactOptional(),
    doubleValue: DoubleValueSchema.and(
      z.any().openapi({ description: 'The value of the variable as a double (numeric).' }),
    ).exactOptional(),
    datasetContentVersionValue: DatasetContentVersionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the variable as a structure that specifies a dataset content version.',
        }),
    ).exactOptional(),
    outputFileUriValue: OutputFileUriValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the variable as a structure that specifies an output file URI.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    description:
      'An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.',
  })
  .openapi('Variable')

const VariablesSchema = z.array(VariableSchema).min(0).max(50).openapi('Variables')

const ContainerDatasetActionSchema = z
  .object({
    image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Docker container stored in your account. The Docker container contains an application and required support libraries and is used to generate dataset contents.',
        }),
    ),
    executionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that gives permission to the system to access required resources to run the <code>containerAction</code>. This includes, at minimum, permission to retrieve the dataset contents that are the input to the containerized application.',
        }),
    ),
    resourceConfiguration: ResourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the resource that executes the <code>containerAction</code>.',
        }),
    ),
    variables: VariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values of variables used in the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['image', 'executionRoleArn', 'resourceConfiguration'],
    description:
      'Information required to run the <code>containerAction</code> to produce dataset contents.',
  })
  .openapi('ContainerDatasetAction')

type DatasetActionType = {
  actionName?: z.infer<typeof DatasetActionNameSchema> & { [key: string]: unknown }
  queryAction?: z.infer<typeof SqlQueryDatasetActionSchema> & { [key: string]: unknown }
  containerAction?: z.infer<typeof ContainerDatasetActionSchema> & { [key: string]: unknown }
}

const UnlimitedRetentionPeriodSchema = z.boolean().openapi('UnlimitedRetentionPeriod')

const RetentionPeriodInDaysSchema = z.int().min(1).openapi('RetentionPeriodInDays')

type RetentionPeriodType = {
  unlimited?: z.infer<typeof UnlimitedRetentionPeriodSchema> & { [key: string]: unknown }
  numberOfDays?: z.infer<typeof RetentionPeriodInDaysSchema> & { [key: string]: unknown }
}

const S3PathChannelMessageSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/_!'(){}\*\s\.\-\=\:]+$/)
  .min(1)
  .max(1024)
  .openapi('S3PathChannelMessage')

const S3PathChannelMessagesSchema = z
  .array(S3PathChannelMessageSchema)
  .min(1)
  .max(100)
  .openapi('S3PathChannelMessages')

type ChannelMessagesType = {
  s3Paths?: z.infer<typeof S3PathChannelMessagesSchema> & { [key: string]: unknown }
}

const MessageIdSchema = z
  .string()
  .regex(/\p{ASCII}*/u)
  .min(1)
  .max(128)
  .openapi('MessageId')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const BatchPutMessageErrorEntrySchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the message that caused the error. See the value corresponding to the <code>messageId</code> key in the message object.',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The code associated with the error.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The message associated with the error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains informations about errors.', required: [] })
  .openapi('BatchPutMessageErrorEntry')

const BatchPutMessageErrorEntriesSchema = z
  .array(BatchPutMessageErrorEntrySchema)
  .openapi('BatchPutMessageErrorEntries')

const BatchPutMessageResponseSchema = z
  .object({
    batchPutMessageErrorEntries: BatchPutMessageErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of any errors encountered when sending the messages to the channel.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchPutMessageResponse')

const MessagePayloadSchema = z.string().openapi('MessagePayload')

const MessageSchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID you want to assign to the message. Each <code>messageId</code> must be unique within each batch sent.',
        }),
    ),
    payload: MessagePayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The payload of the message. This can be a JSON string or a base64-encoded string representing binary data, in which case you must decode it by means of a pipeline activity.',
        }),
    ),
  })
  .openapi({ required: ['messageId', 'payload'], description: 'Information about a message.' })
  .openapi('Message')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const CancelPipelineReprocessingResponseSchema = z
  .object({})
  .openapi('CancelPipelineReprocessingResponse')

const ChannelNameSchema = z
  .string()
  .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
  .min(1)
  .max(128)
  .openapi('ChannelName')

const ChannelArnSchema = z.string().openapi('ChannelArn')

const RetentionPeriodSchema: z.ZodType<RetentionPeriodType> = z
  .lazy(() =>
    z
      .object({
        unlimited: UnlimitedRetentionPeriodSchema.and(
          z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
        ).exactOptional(),
        numberOfDays: RetentionPeriodInDaysSchema.and(
          z
            .any()
            .openapi({
              description:
                'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
  )
  .openapi('RetentionPeriod')

const CreateChannelResponseSchema = z
  .object({
    channelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    channelArn: ChannelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'How long, in days, message data is kept for the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateChannelResponse')

const ServiceManagedChannelS3StorageSchema = z
  .object({})
  .openapi({
    description:
      "Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created.",
  })
  .openapi('ServiceManagedChannelS3Storage')

const BucketNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9.\-_]*$/)
  .min(3)
  .max(255)
  .openapi('BucketName')

const S3KeyPrefixSchema = z
  .string()
  .regex(/^[a-zA-Z0-9!_.*'()\/{}:-]*\/$/)
  .min(1)
  .max(255)
  .openapi('S3KeyPrefix')

const CustomerManagedChannelS3StorageSchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket in which channel data is stored.' }),
    ),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The prefix used to create the keys of the channel data objects. Each object in an S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.',
        }),
    ),
  })
  .openapi({
    required: ['bucket', 'roleArn'],
    description:
      "Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.",
  })
  .openapi('CustomerManagedChannelS3Storage')

const TagKeySchema = z.string().min(1).max(256).openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(z.any().openapi({ description: "The tag's key." })),
    value: TagValueSchema.and(z.any().openapi({ description: "The tag's value." })),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'A set of key-value pairs that are used to manage the resource.',
  })
  .openapi('Tag')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DatasetArnSchema = z.string().openapi('DatasetArn')

const CreateDatasetResponseSchema = z
  .object({
    datasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    datasetArn: DatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({ description: 'How long, in days, dataset contents are kept for the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const DatasetActionSchema: z.ZodType<DatasetActionType> = z
  .lazy(() =>
    z
      .object({
        actionName: DatasetActionNameSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name of the dataset action by which dataset contents are automatically created.',
            }),
        ).exactOptional(),
        queryAction: SqlQueryDatasetActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'An <code>SqlQueryDatasetAction</code> object that uses an SQL query to automatically create dataset contents.',
            }),
        ).exactOptional(),
        containerAction: ContainerDatasetActionSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information that allows the system to run a containerized application to create the dataset contents. The application must be in a Docker container along with any required support libraries.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.',
        required: [],
      }),
  )
  .openapi('DatasetAction')

const ScheduleExpressionSchema = z.string().openapi('ScheduleExpression')

const ScheduleSchema = z
  .object({
    expression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expression that defines when to trigger an update. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a> in the <i>Amazon CloudWatch Events User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The schedule for when to trigger an update.', required: [] })
  .openapi('Schedule')

const TriggeringDatasetSchema = z
  .object({
    name: DatasetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the dataset whose content generation triggers the new dataset content generation.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description:
      'Information about the dataset whose content generation triggers the new dataset content generation.',
  })
  .openapi('TriggeringDataset')

const DatasetTriggerSchema = z
  .object({
    schedule: ScheduleSchema.and(
      z.any().openapi({ description: 'The Schedule when the trigger is initiated.' }),
    ).exactOptional(),
    dataset: TriggeringDatasetSchema.and(
      z
        .any()
        .openapi({
          description:
            "The dataset whose content creation triggers the creation of this dataset's contents.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.',
    required: [],
  })
  .openapi('DatasetTrigger')

const EntryNameSchema = z.string().openapi('EntryName')

const IotEventsInputNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(128)
  .openapi('IotEventsInputName')

const IotEventsDestinationConfigurationSchema = z
  .object({
    inputName: IotEventsInputNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the IoT Events input to which dataset contents are delivered.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to deliver dataset contents to an IoT Events input.',
        }),
    ),
  })
  .openapi({
    required: ['inputName', 'roleArn'],
    description: 'Configuration information for delivery of dataset contents to IoT Events.',
  })
  .openapi('IotEventsDestinationConfiguration')

const BucketKeyExpressionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9!_.*'()\/{}:-]*$/)
  .min(1)
  .max(255)
  .openapi('BucketKeyExpression')

const GlueTableNameSchema = z
  .string()
  .min(1)
  .max(150)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('GlueTableName')

const GlueDatabaseNameSchema = z
  .string()
  .min(1)
  .max(150)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('GlueDatabaseName')

const GlueConfigurationSchema = z
  .object({
    tableName: GlueTableNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the table in your Glue Data Catalog that is used to perform the ETL operations. An Glue Data Catalog table contains partitioned data and descriptions of data sources and targets.',
        }),
    ),
    databaseName: GlueDatabaseNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the database in your Glue Data Catalog in which the table is located. An Glue Data Catalog database contains metadata tables.',
        }),
    ),
  })
  .openapi({
    required: ['tableName', 'databaseName'],
    description:
      'Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.',
  })
  .openapi('GlueConfiguration')

const S3DestinationConfigurationSchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the S3 bucket to which dataset contents are delivered.',
        }),
    ),
    key: BucketKeyExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The key of the dataset contents object in an S3 bucket. Each object has a key that is a unique identifier. Each object has exactly one key.</p> <p>You can create a unique key with the following options:</p> <ul> <li> <p>Use <code>!{iotanalytics:scheduleTime}</code> to insert the time of a scheduled SQL query run.</p> </li> <li> <p>Use <code>!{iotanalytics:versionId}</code> to insert a unique hash that identifies a dataset content.</p> </li> <li> <p>Use <code>!{iotanalytics:creationTime}</code> to insert the creation time of a dataset content.</p> </li> </ul> <p>The following example creates a unique key for a CSV file: <code>dataset/mydataset/!{iotanalytics:scheduleTime}/!{iotanalytics:versionId}.csv</code> </p> <note> <p>If you don't use <code>!{iotanalytics:versionId}</code> to specify the key, you might get duplicate keys. For example, you might have two dataset contents with the same <code>scheduleTime</code> but different <code>versionId</code>s. This means that one dataset content overwrites the other. </p> </note>",
        }),
    ),
    glueConfiguration: GlueConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 and Glue resources.',
        }),
    ),
  })
  .openapi({
    required: ['bucket', 'key', 'roleArn'],
    description:
      'Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).',
  })
  .openapi('S3DestinationConfiguration')

const DatasetContentDeliveryDestinationSchema = z
  .object({
    iotEventsDestinationConfiguration: IotEventsDestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information for delivery of dataset contents to IoT Events.',
        }),
    ).exactOptional(),
    s3DestinationConfiguration: S3DestinationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information for delivery of dataset contents to Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The destination to which dataset contents are delivered.',
    required: [],
  })
  .openapi('DatasetContentDeliveryDestination')

const DatasetContentDeliveryRuleSchema = z
  .object({
    entryName: EntryNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset content delivery rules entry.' }),
    ).exactOptional(),
    destination: DatasetContentDeliveryDestinationSchema.and(
      z.any().openapi({ description: 'The destination to which dataset contents are delivered.' }),
    ),
  })
  .openapi({
    required: ['destination'],
    description:
      'When dataset contents are created, they are delivered to destination specified here.',
  })
  .openapi('DatasetContentDeliveryRule')

const UnlimitedVersioningSchema = z.boolean().openapi('UnlimitedVersioning')

const MaxVersionsSchema = z.int().min(1).max(1000).openapi('MaxVersions')

const LateDataRuleNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+$/)
  .min(1)
  .max(128)
  .openapi('LateDataRuleName')

const SessionTimeoutInMinutesSchema = z.int().min(1).max(60).openapi('SessionTimeoutInMinutes')

const DeltaTimeSessionWindowConfigurationSchema = z
  .object({
    timeoutInMinutes: SessionTimeoutInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A time interval. You can use <code>timeoutInMinutes</code> so that IoT Analytics can batch up late data notifications that have been generated since the last execution. IoT Analytics sends one batch of notifications to Amazon CloudWatch Events at one time.</p> <p>For more information about how to write a timestamp expression, see <a href="https://prestodb.io/docs/0.172/functions/datetime.html">Date and Time Functions and Operators</a>, in the <i>Presto 0.172 Documentation</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['timeoutInMinutes'],
    description:
      '<p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>IoT Analytics User Guide</i>.</p>',
  })
  .openapi('DeltaTimeSessionWindowConfiguration')

const LateDataRuleConfigurationSchema = z
  .object({
    deltaTimeSessionWindowConfiguration: DeltaTimeSessionWindowConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The information needed to configure a delta time session window.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The information needed to configure a delta time session window.',
    required: [],
  })
  .openapi('LateDataRuleConfiguration')

const LateDataRuleSchema = z
  .object({
    ruleName: LateDataRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the late data rule.' }),
    ).exactOptional(),
    ruleConfiguration: LateDataRuleConfigurationSchema.and(
      z.any().openapi({ description: 'The information needed to configure the late data rule.' }),
    ),
  })
  .openapi({
    required: ['ruleConfiguration'],
    description:
      'A structure that contains the name and configuration information of a late data rule.',
  })
  .openapi('LateDataRule')

const DatasetContentVersionSchema = z.string().min(7).max(36).openapi('DatasetContentVersion')

const CreateDatasetContentResponseSchema = z
  .object({
    versionId: DatasetContentVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version ID of the dataset contents that are being created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetContentResponse')

const DatastoreNameSchema = z
  .string()
  .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
  .min(1)
  .max(128)
  .openapi('DatastoreName')

const DatastoreArnSchema = z.string().openapi('DatastoreArn')

const CreateDatastoreResponseSchema = z
  .object({
    datastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The name of the data store.' }),
    ).exactOptional(),
    datastoreArn: DatastoreArnSchema.and(
      z.any().openapi({ description: 'The ARN of the data store.' }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({ description: 'How long, in days, message data is kept for the data store.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDatastoreResponse')

const ServiceManagedDatastoreS3StorageSchema = z
  .object({})
  .openapi({
    description:
      "Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created. ",
  })
  .openapi('ServiceManagedDatastoreS3Storage')

const CustomerManagedDatastoreS3StorageSchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon S3 bucket where your data is stored.' }),
    ),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.',
        }),
    ),
  })
  .openapi({
    required: ['bucket', 'roleArn'],
    description:
      "S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. ",
  })
  .openapi('CustomerManagedDatastoreS3Storage')

const IotSiteWiseCustomerManagedDatastoreS3StorageSchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: ' The name of the Amazon S3 bucket where your data is stored. ' }),
    ),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucket'],
    description:
      " Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. ",
  })
  .openapi('IotSiteWiseCustomerManagedDatastoreS3Storage')

const DatastoreIotSiteWiseMultiLayerStorageSchema = z
  .object({
    customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3StorageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. ',
        }),
    ),
  })
  .openapi({
    required: ['customerManagedS3Storage'],
    description:
      " Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. ",
  })
  .openapi('DatastoreIotSiteWiseMultiLayerStorage')

const JsonConfigurationSchema = z
  .object({})
  .openapi({ description: 'Contains the configuration information of the JSON format.' })
  .openapi('JsonConfiguration')

const ColumnNameSchema = z
  .string()
  .regex(/^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$/)
  .min(1)
  .max(255)
  .openapi('ColumnName')

const ColumnDataTypeSchema = z
  .string()
  .min(1)
  .max(131072)
  .openapi({ 'x-pattern': '^[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*$' })
  .openapi('ColumnDataType')

const ColumnSchema = z
  .object({
    name: ColumnNameSchema.and(z.any().openapi({ description: 'The name of the column.' })),
    type: ColumnDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data. For more information about the supported data types, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html">Common data types</a> in the <i>Glue Developer Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'type'],
    description: 'Contains information about a column that stores your data.',
  })
  .openapi('Column')

const ColumnsSchema = z.array(ColumnSchema).openapi('Columns')

const SchemaDefinitionSchema = z
  .object({
    columns: ColumnsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies one or more columns that store your data.</p> <p>Each schema can have up to 100 columns. Each column can have up to 100 nested types.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information needed to define a schema.', required: [] })
  .openapi('SchemaDefinition')

const ParquetConfigurationSchema = z
  .object({
    schemaDefinition: SchemaDefinitionSchema.and(
      z.any().openapi({ description: 'Information needed to define a schema.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of the Parquet format.',
    required: [],
  })
  .openapi('ParquetConfiguration')

const PartitionAttributeNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+$/)
  .min(1)
  .max(128)
  .openapi('PartitionAttributeName')

const PartitionSchema = z
  .object({
    attributeName: PartitionAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the attribute that defines a partition dimension. ',
        }),
    ),
  })
  .openapi({
    required: ['attributeName'],
    description: ' A partition dimension defined by an attribute. ',
  })
  .openapi('Partition')

const TimestampFormatSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s\[\]_,.'\/:-]*$/)
  .min(1)
  .max(50)
  .openapi('TimestampFormat')

const TimestampPartitionSchema = z
  .object({
    attributeName: PartitionAttributeNameSchema.and(
      z
        .any()
        .openapi({ description: ' The attribute name of the partition defined by a timestamp. ' }),
    ),
    timestampFormat: TimestampFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp format of a partition defined by a timestamp. The default format is seconds since epoch (January 1, 1970 at midnight UTC time). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['attributeName'],
    description: ' A partition dimension defined by a timestamp attribute. ',
  })
  .openapi('TimestampPartition')

const DatastorePartitionSchema = z
  .object({
    attributePartition: PartitionSchema.and(
      z
        .any()
        .openapi({
          description: ' A partition dimension defined by an <code>attributeName</code>. ',
        }),
    ).exactOptional(),
    timestampPartition: TimestampPartitionSchema.and(
      z.any().openapi({ description: ' A partition dimension defined by a timestamp attribute. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. ',
    required: [],
  })
  .openapi('DatastorePartition')

const PartitionsSchema = z.array(DatastorePartitionSchema).min(0).max(25).openapi('Partitions')

const PipelineNameSchema = z
  .string()
  .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
  .min(1)
  .max(128)
  .openapi('PipelineName')

const PipelineArnSchema = z.string().openapi('PipelineArn')

const CreatePipelineResponseSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ).exactOptional(),
    pipelineArn: PipelineArnSchema.and(
      z.any().openapi({ description: 'The ARN of the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePipelineResponse')

const ActivityNameSchema = z.string().min(1).max(128).openapi('ActivityName')

const ChannelActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the channel activity.' }),
    ),
    channelName: ChannelNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the channel from which the messages are processed.' }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'channelName'],
    description: 'The activity that determines the source of the messages to be processed.',
  })
  .openapi('ChannelActivity')

const LambdaNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('LambdaName')

const ActivityBatchSizeSchema = z.int().min(1).max(1000).openapi('ActivityBatchSize')

const LambdaActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the lambda activity.' }),
    ),
    lambdaName: LambdaNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Lambda function that is run on the message.' }),
    ),
    batchSize: ActivityBatchSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of messages passed to the Lambda function for processing.</p> <p>The Lambda function must be able to process all of these messages within five minutes, which is the maximum timeout duration for Lambda functions.</p>',
        }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'lambdaName', 'batchSize'],
    description: 'An activity that runs a Lambda function to modify the message.',
  })
  .openapi('LambdaActivity')

const DatastoreActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the datastore activity.' }),
    ),
    datastoreName: DatastoreNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the data store where processed messages are stored.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'datastoreName'],
    description: 'The datastore activity that specifies where to store the processed data.',
  })
  .openapi('DatastoreActivity')

const AttributeNameSchema = z.string().min(1).max(256).openapi('AttributeName')

const AttributeNameMappingSchema = z
  .record(z.string(), AttributeNameSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('AttributeNameMapping')

const AddAttributesActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the addAttributes activity.' }),
    ),
    attributes: AttributeNameMappingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of 1-50 <code>AttributeNameMapping</code> objects that map an existing attribute to a new attribute.</p> <note> <p>The existing attributes remain in the message, so if you want to remove the originals, use <code>RemoveAttributeActivity</code>.</p> </note>',
        }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attributes'],
    description:
      'An activity that adds other attributes based on existing attributes in the message.',
  })
  .openapi('AddAttributesActivity')

const AttributeNamesSchema = z.array(AttributeNameSchema).min(1).max(50).openapi('AttributeNames')

const RemoveAttributesActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>removeAttributes</code> activity.' }),
    ),
    attributes: AttributeNamesSchema.and(
      z.any().openapi({ description: 'A list of 1-50 attributes to remove from the message.' }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attributes'],
    description: 'An activity that removes attributes from a message.',
  })
  .openapi('RemoveAttributesActivity')

const SelectAttributesActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>selectAttributes</code> activity.' }),
    ),
    attributes: AttributeNamesSchema.and(
      z.any().openapi({ description: 'A list of the attributes to select from the message.' }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attributes'],
    description:
      'Used to create a new message using only the specified attributes from the original message.',
  })
  .openapi('SelectAttributesActivity')

const FilterExpressionSchema = z.string().min(1).max(256).openapi('FilterExpression')

const FilterActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the filter activity.' }),
    ),
    filter: FilterExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An expression that looks like a SQL WHERE clause that must return a Boolean value. Messages that satisfy the condition are passed to the next activity. ',
        }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'filter'],
    description: 'An activity that filters a message based on its attributes.',
  })
  .openapi('FilterActivity')

const MathExpressionSchema = z.string().min(1).max(256).openapi('MathExpression')

const MathActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the math activity.' }),
    ),
    attribute: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the attribute that contains the result of the math operation.',
        }),
    ),
    math: MathExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An expression that uses one or more existing attributes and must return an integer value.',
        }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attribute', 'math'],
    description:
      "An activity that computes an arithmetic expression using the message's attributes.",
  })
  .openapi('MathActivity')

const DeviceRegistryEnrichActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the <code>deviceRegistryEnrich</code> activity.' }),
    ),
    attribute: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute that is added to the message.' }),
    ),
    thingName: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IoT device whose registry information is added to the message.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the role that allows access to the device's registry information.",
        }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attribute', 'thingName', 'roleArn'],
    description: 'An activity that adds data from the IoT device registry to your message.',
  })
  .openapi('DeviceRegistryEnrichActivity')

const DeviceShadowEnrichActivitySchema = z
  .object({
    name: ActivityNameSchema.and(
      z.any().openapi({ description: 'The name of the <code>deviceShadowEnrich</code> activity.' }),
    ),
    attribute: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the attribute that is added to the message.' }),
    ),
    thingName: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IoT device whose shadow information is added to the message.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({ description: "The ARN of the role that allows access to the device's shadow." }),
    ),
    next: ActivityNameSchema.and(
      z.any().openapi({ description: 'The next activity in the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'attribute', 'thingName', 'roleArn'],
    description:
      'An activity that adds information from the IoT Device Shadow service to a message.',
  })
  .openapi('DeviceShadowEnrichActivity')

const PipelineActivitySchema = z
  .object({
    channel: ChannelActivitySchema.and(
      z.any().openapi({ description: 'Determines the source of the messages to be processed.' }),
    ).exactOptional(),
    lambda: LambdaActivitySchema.and(
      z.any().openapi({ description: 'Runs a Lambda function to modify the message.' }),
    ).exactOptional(),
    datastore: DatastoreActivitySchema.and(
      z.any().openapi({ description: 'Specifies where to store the processed message data.' }),
    ).exactOptional(),
    addAttributes: AddAttributesActivitySchema.and(
      z
        .any()
        .openapi({
          description: 'Adds other attributes based on existing attributes in the message.',
        }),
    ).exactOptional(),
    removeAttributes: RemoveAttributesActivitySchema.and(
      z.any().openapi({ description: 'Removes attributes from a message.' }),
    ).exactOptional(),
    selectAttributes: SelectAttributesActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to create a new message using only the specified attributes from the original message. ',
        }),
    ).exactOptional(),
    filter: FilterActivitySchema.and(
      z.any().openapi({ description: 'Filters a message based on its attributes.' }),
    ).exactOptional(),
    math: MathActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            "Computes an arithmetic expression using the message's attributes and adds it to the message.",
        }),
    ).exactOptional(),
    deviceRegistryEnrich: DeviceRegistryEnrichActivitySchema.and(
      z.any().openapi({ description: 'Adds data from the IoT device registry to your message.' }),
    ).exactOptional(),
    deviceShadowEnrich: DeviceShadowEnrichActivitySchema.and(
      z
        .any()
        .openapi({
          description: 'Adds information from the IoT Device Shadow service to a message.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An activity that performs a transformation on a message.',
    required: [],
  })
  .openapi('PipelineActivity')

const ChannelStorageSchema = z
  .object({
    serviceManagedS3: ServiceManagedChannelS3StorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created.",
        }),
    ).exactOptional(),
    customerManagedS3: CustomerManagedChannelS3StorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Used to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.",
    required: [],
  })
  .openapi('ChannelStorage')

const ChannelStatusSchema = z.enum(['CREATING', 'ACTIVE', 'DELETING']).openapi('ChannelStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ChannelSchema = z
  .object({
    name: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    storage: ChannelStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You can't change this storage option after the channel is created.",
        }),
    ).exactOptional(),
    arn: ChannelArnSchema.and(
      z.any().openapi({ description: 'The ARN of the channel.' }),
    ).exactOptional(),
    status: ChannelStatusSchema.and(
      z.any().openapi({ description: 'The status of the channel.' }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z.any().openapi({ description: 'How long, in days, message data is kept for the channel.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the channel was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the channel was last updated.' }),
    ).exactOptional(),
    lastMessageArrivalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time when a new message arrived in the channel.</p> <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p> <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.',
    required: [],
  })
  .openapi('Channel')

const SizeInBytesSchema = z.float64().openapi('SizeInBytes')

const EstimatedResourceSizeSchema = z
  .object({
    estimatedSizeInBytes: SizeInBytesSchema.and(
      z.any().openapi({ description: 'The estimated size of the resource, in bytes.' }),
    ).exactOptional(),
    estimatedOn: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the estimate of the size of the resource was made.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The estimated size of the resource.', required: [] })
  .openapi('EstimatedResourceSize')

const ChannelStatisticsSchema = z
  .object({
    size: EstimatedResourceSizeSchema.and(
      z.any().openapi({ description: 'The estimated size of the channel.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Statistics information about the channel.', required: [] })
  .openapi('ChannelStatistics')

const DescribeChannelResponseSchema = z
  .object({
    channel: ChannelSchema.and(
      z.any().openapi({ description: 'An object that contains information about the channel.' }),
    ).exactOptional(),
    statistics: ChannelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Statistics about the channel. Included if the <code>includeStatistics</code> parameter is set to <code>true</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChannelResponse')

const DatasetActionsSchema = z.array(DatasetActionSchema).length(1).openapi('DatasetActions')

const DatasetTriggersSchema = z.array(DatasetTriggerSchema).min(0).max(5).openapi('DatasetTriggers')

const DatasetContentDeliveryRulesSchema = z
  .array(DatasetContentDeliveryRuleSchema)
  .min(0)
  .max(20)
  .openapi('DatasetContentDeliveryRules')

const DatasetStatusSchema = z.enum(['CREATING', 'ACTIVE', 'DELETING']).openapi('DatasetStatus')

const VersioningConfigurationSchema = z
  .object({
    unlimited: UnlimitedVersioningSchema.and(
      z.any().openapi({ description: 'If true, unlimited versions of dataset contents are kept.' }),
    ).exactOptional(),
    maxVersions: MaxVersionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'How many versions of dataset contents are kept. The <code>unlimited</code> parameter must be <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the versioning of dataset contents.', required: [] })
  .openapi('VersioningConfiguration')

const LateDataRulesSchema = z.array(LateDataRuleSchema).length(1).openapi('LateDataRules')

const DatasetSchema = z
  .object({
    name: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    arn: DatasetArnSchema.and(
      z.any().openapi({ description: 'The ARN of the dataset.' }),
    ).exactOptional(),
    actions: DatasetActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DatasetAction</code> objects that automatically create the dataset contents.',
        }),
    ).exactOptional(),
    triggers: DatasetTriggersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DatasetTrigger</code> objects that specify when the dataset is automatically updated.',
        }),
    ).exactOptional(),
    contentDeliveryRules: DatasetContentDeliveryRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'When dataset contents are created they are delivered to destinations specified here.',
        }),
    ).exactOptional(),
    status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the dataset was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the dataset was updated.' }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description: 'Optional. How long, in days, message data is kept for the dataset.',
        }),
    ).exactOptional(),
    versioningConfiguration: VersioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. How many versions of dataset contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the <code>retentionPeriod</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions"> Keeping Multiple Versions of IoT Analytics datasets</a> in the <i>IoT Analytics User Guide</i>.',
        }),
    ).exactOptional(),
    lateDataRules: LateDataRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a dataset.', required: [] })
  .openapi('Dataset')

const DescribeDatasetResponseSchema = z
  .object({
    dataset: DatasetSchema.and(
      z.any().openapi({ description: 'An object that contains information about the dataset.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const DatastoreStorageSchema = z
  .object({
    serviceManagedS3: ServiceManagedDatastoreS3StorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
    customerManagedS3: CustomerManagedDatastoreS3StorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
    iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            " Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
    required: [],
  })
  .openapi('DatastoreStorage')

const DatastoreStatusSchema = z.enum(['CREATING', 'ACTIVE', 'DELETING']).openapi('DatastoreStatus')

const FileFormatConfigurationSchema = z
  .object({
    jsonConfiguration: JsonConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of the JSON format.' }),
    ).exactOptional(),
    parquetConfiguration: ParquetConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of the Parquet format.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
    required: [],
  })
  .openapi('FileFormatConfiguration')

const DatastorePartitionsSchema = z
  .object({
    partitions: PartitionsSchema.and(
      z.any().openapi({ description: ' A list of partition dimensions in a data store. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Contains information about the partition dimensions in a data store. ',
    required: [],
  })
  .openapi('DatastorePartitions')

const DatastoreSchema = z
  .object({
    name: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The name of the data store.' }),
    ).exactOptional(),
    storage: DatastoreStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
    arn: DatastoreArnSchema.and(
      z.any().openapi({ description: 'The ARN of the data store.' }),
    ).exactOptional(),
    status: DatastoreStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of a data store:</p> <dl> <dt>CREATING</dt> <dd> <p>The data store is being created.</p> </dd> <dt>ACTIVE</dt> <dd> <p>The data store has been created and can be used.</p> </dd> <dt>DELETING</dt> <dd> <p>The data store is being deleted.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in days, message data is kept for the data store. When <code>customerManagedS3</code> storage is selected, this parameter is ignored.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the data store was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the data store was updated.' }),
    ).exactOptional(),
    lastMessageArrivalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time when a new message arrived in the data store.</p> <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p> <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>',
        }),
    ).exactOptional(),
    fileFormatConfiguration: FileFormatConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
        }),
    ).exactOptional(),
    datastorePartitions: DatastorePartitionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains information about the partition dimensions in a data store. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a data store.', required: [] })
  .openapi('Datastore')

const DatastoreStatisticsSchema = z
  .object({
    size: EstimatedResourceSizeSchema.and(
      z.any().openapi({ description: 'The estimated size of the data store.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Statistical information about the data store.', required: [] })
  .openapi('DatastoreStatistics')

const DescribeDatastoreResponseSchema = z
  .object({
    datastore: DatastoreSchema.and(
      z.any().openapi({ description: 'Information about the data store.' }),
    ).exactOptional(),
    statistics: DatastoreStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional statistical information about the data store. Included if the <code>includeStatistics</code> parameter is set to <code>true</code> in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatastoreResponse')

const LoggingLevelSchema = z.literal('ERROR').openapi('LoggingLevel')

const LoggingEnabledSchema = z.boolean().openapi('LoggingEnabled')

const LoggingOptionsSchema = z
  .object({
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants permission to IoT Analytics to perform logging.',
        }),
    ),
    level: LoggingLevelSchema.and(
      z.any().openapi({ description: 'The logging level. Currently, only ERROR is supported.' }),
    ),
    enabled: LoggingEnabledSchema.and(
      z.any().openapi({ description: 'If true, logging is enabled for IoT Analytics.' }),
    ),
  })
  .openapi({
    required: ['roleArn', 'level', 'enabled'],
    description: 'Information about logging options.',
  })
  .openapi('LoggingOptions')

const DescribeLoggingOptionsResponseSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z
        .any()
        .openapi({ description: 'The current settings of the IoT Analytics logging options.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLoggingOptionsResponse')

const PipelineActivitiesSchema = z
  .array(PipelineActivitySchema)
  .min(1)
  .max(25)
  .openapi('PipelineActivities')

const ReprocessingIdSchema = z.string().openapi('ReprocessingId')

const ReprocessingStatusSchema = z
  .enum(['RUNNING', 'SUCCEEDED', 'CANCELLED', 'FAILED'])
  .openapi('ReprocessingStatus')

const ReprocessingSummarySchema = z
  .object({
    id: ReprocessingIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>reprocessingId</code> returned by <code>StartPipelineReprocessing</code>.',
        }),
    ).exactOptional(),
    status: ReprocessingStatusSchema.and(
      z.any().openapi({ description: 'The status of the pipeline reprocessing.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the pipeline reprocessing was created.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about pipeline reprocessing.', required: [] })
  .openapi('ReprocessingSummary')

const ReprocessingSummariesSchema = z
  .array(ReprocessingSummarySchema)
  .openapi('ReprocessingSummaries')

const PipelineSchema = z
  .object({
    name: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ).exactOptional(),
    arn: PipelineArnSchema.and(
      z.any().openapi({ description: 'The ARN of the pipeline.' }),
    ).exactOptional(),
    activities: PipelineActivitiesSchema.and(
      z
        .any()
        .openapi({ description: 'The activities that perform transformations on the messages.' }),
    ).exactOptional(),
    reprocessingSummaries: ReprocessingSummariesSchema.and(
      z.any().openapi({ description: 'A summary of information about the pipeline reprocessing.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the pipeline was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the pipeline was updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a pipeline.', required: [] })
  .openapi('Pipeline')

const DescribePipelineResponseSchema = z
  .object({
    pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>Pipeline</code> object that contains information about the pipeline.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePipelineResponse')

const PresignedURISchema = z.string().openapi('PresignedURI')

const DatasetEntrySchema = z
  .object({
    entryName: EntryNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset item.' }),
    ).exactOptional(),
    dataURI: PresignedURISchema.and(
      z.any().openapi({ description: 'The presigned URI of the dataset item.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The reference to a dataset entry.', required: [] })
  .openapi('DatasetEntry')

const DatasetEntriesSchema = z.array(DatasetEntrySchema).openapi('DatasetEntries')

const DatasetContentStateSchema = z
  .enum(['CREATING', 'SUCCEEDED', 'FAILED'])
  .openapi('DatasetContentState')

const ReasonSchema = z.string().openapi('Reason')

const DatasetContentStatusSchema = z
  .object({
    state: DatasetContentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the dataset contents. Can be one of READY, CREATING, SUCCEEDED, or FAILED.',
        }),
    ).exactOptional(),
    reason: ReasonSchema.and(
      z.any().openapi({ description: 'The reason the dataset contents are in this state.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The state of the dataset contents and the reason they are in this state.',
    required: [],
  })
  .openapi('DatasetContentStatus')

const GetDatasetContentResponseSchema = z
  .object({
    entries: DatasetEntriesSchema.and(
      z.any().openapi({ description: 'A list of <code>DatasetEntry</code> objects.' }),
    ).exactOptional(),
    timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the request was made.' }),
    ).exactOptional(),
    status: DatasetContentStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset content.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDatasetContentResponse')

const ServiceManagedChannelS3StorageSummarySchema = z
  .object({})
  .openapi({ description: 'Used to store channel data in an S3 bucket managed by IoT Analytics.' })
  .openapi('ServiceManagedChannelS3StorageSummary')

const CustomerManagedChannelS3StorageSummarySchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket in which channel data is stored.' }),
    ).exactOptional(),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The prefix used to create the keys of the channel data objects. Each object in an S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a forward slash (/).',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Used to store channel data in an S3 bucket that you manage.',
    required: [],
  })
  .openapi('CustomerManagedChannelS3StorageSummary')

const ChannelStorageSummarySchema = z
  .object({
    serviceManagedS3: ServiceManagedChannelS3StorageSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Used to store channel data in an S3 bucket managed by IoT Analytics.',
        }),
    ).exactOptional(),
    customerManagedS3: CustomerManagedChannelS3StorageSummarySchema.and(
      z
        .any()
        .openapi({ description: 'Used to store channel data in an S3 bucket that you manage.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Where channel data is stored.', required: [] })
  .openapi('ChannelStorageSummary')

const ChannelSummarySchema = z
  .object({
    channelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ).exactOptional(),
    channelStorage: ChannelStorageSummarySchema.and(
      z.any().openapi({ description: 'Where channel data is stored.' }),
    ).exactOptional(),
    status: ChannelStatusSchema.and(
      z.any().openapi({ description: 'The status of the channel.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the channel was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the channel was updated.' }),
    ).exactOptional(),
    lastMessageArrivalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time when a new message arrived in the channel.</p> <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p> <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of information about a channel.', required: [] })
  .openapi('ChannelSummary')

const ChannelSummariesSchema = z.array(ChannelSummarySchema).openapi('ChannelSummaries')

const NextTokenSchema = z.string().openapi('NextToken')

const ListChannelsResponseSchema = z
  .object({
    channelSummaries: ChannelSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>ChannelSummary</code> objects.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const DatasetContentSummarySchema = z
  .object({
    version: DatasetContentVersionSchema.and(
      z.any().openapi({ description: 'The version of the dataset contents.' }),
    ).exactOptional(),
    status: DatasetContentStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset contents.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The actual time the creation of the dataset contents was started.',
        }),
    ).exactOptional(),
    scheduleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the creation of the dataset contents was scheduled to start.',
        }),
    ).exactOptional(),
    completionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time the dataset content status was updated to SUCCEEDED or FAILED.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about dataset contents.', required: [] })
  .openapi('DatasetContentSummary')

const DatasetContentSummariesSchema = z
  .array(DatasetContentSummarySchema)
  .openapi('DatasetContentSummaries')

const ListDatasetContentsResponseSchema = z
  .object({
    datasetContentSummaries: DatasetContentSummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'Summary information about dataset contents that have been created.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetContentsResponse')

const DatasetActionTypeSchema = z.enum(['QUERY', 'CONTAINER']).openapi('DatasetActionType')

const DatasetActionSummarySchema = z
  .object({
    actionName: DatasetActionNameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the action that automatically creates the dataset's contents.",
        }),
    ).exactOptional(),
    actionType: DatasetActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of action by which the dataset's contents are automatically created.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Information about the action that automatically creates the dataset's contents.",
    required: [],
  })
  .openapi('DatasetActionSummary')

const DatasetActionSummariesSchema = z
  .array(DatasetActionSummarySchema)
  .length(1)
  .openapi('DatasetActionSummaries')

const DatasetSummarySchema = z
  .object({
    datasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ).exactOptional(),
    status: DatasetStatusSchema.and(
      z.any().openapi({ description: 'The status of the dataset.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the dataset was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the dataset was updated.' }),
    ).exactOptional(),
    triggers: DatasetTriggersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of triggers. A trigger causes dataset content to be populated at a specified time interval or when another dataset is populated. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects',
        }),
    ).exactOptional(),
    actions: DatasetActionSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>DataActionSummary</code> objects.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of information about a dataset.', required: [] })
  .openapi('DatasetSummary')

const DatasetSummariesSchema = z.array(DatasetSummarySchema).openapi('DatasetSummaries')

const ListDatasetsResponseSchema = z
  .object({
    datasetSummaries: DatasetSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>DatasetSummary</code> objects.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetsResponse')

const ServiceManagedDatastoreS3StorageSummarySchema = z
  .object({})
  .openapi({
    description: 'Contains information about the data store that is managed by IoT Analytics.',
  })
  .openapi('ServiceManagedDatastoreS3StorageSummary')

const CustomerManagedDatastoreS3StorageSummarySchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon S3 bucket where your data is stored.' }),
    ).exactOptional(),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the data store that you manage.',
    required: [],
  })
  .openapi('CustomerManagedDatastoreS3StorageSummary')

const IotSiteWiseCustomerManagedDatastoreS3StorageSummarySchema = z
  .object({
    bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: ' The name of the Amazon S3 bucket where your data is stored. ' }),
    ).exactOptional(),
    keyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains information about the data store that you manage, which stores data used by IoT SiteWise. ',
    required: [],
  })
  .openapi('IotSiteWiseCustomerManagedDatastoreS3StorageSummary')

const DatastoreIotSiteWiseMultiLayerStorageSummarySchema = z
  .object({
    customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3StorageSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains information about the data store that you manage, which stores data used by IoT SiteWise. ',
    required: [],
  })
  .openapi('DatastoreIotSiteWiseMultiLayerStorageSummary')

const DatastoreStorageSummarySchema = z
  .object({
    serviceManagedS3: ServiceManagedDatastoreS3StorageSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Used to store data in an Amazon S3 bucket managed by IoT Analytics.',
        }),
    ).exactOptional(),
    customerManagedS3: CustomerManagedDatastoreS3StorageSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Used to store data in an Amazon S3 bucket managed by IoT Analytics.',
        }),
    ).exactOptional(),
    iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorageSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            ' Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about your data store.', required: [] })
  .openapi('DatastoreStorageSummary')

const FileFormatTypeSchema = z.enum(['JSON', 'PARQUET']).openapi('FileFormatType')

const DatastoreSummarySchema = z
  .object({
    datastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The name of the data store.' }),
    ).exactOptional(),
    datastoreStorage: DatastoreStorageSummarySchema.and(
      z.any().openapi({ description: 'Where data in a data store is stored.' }),
    ).exactOptional(),
    status: DatastoreStatusSchema.and(
      z.any().openapi({ description: 'The status of the data store.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the data store was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last time the data store was updated.' }),
    ).exactOptional(),
    lastMessageArrivalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last time when a new message arrived in the data store.</p> <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p> <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>',
        }),
    ).exactOptional(),
    fileFormatType: FileFormatTypeSchema.and(
      z.any().openapi({ description: 'The file format of the data in the data store.' }),
    ).exactOptional(),
    datastorePartitions: DatastorePartitionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains information about the partition dimensions in a data store. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of information about a data store.', required: [] })
  .openapi('DatastoreSummary')

const DatastoreSummariesSchema = z.array(DatastoreSummarySchema).openapi('DatastoreSummaries')

const ListDatastoresResponseSchema = z
  .object({
    datastoreSummaries: DatastoreSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>DatastoreSummary</code> objects.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDatastoresResponse')

const PipelineSummarySchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ).exactOptional(),
    reprocessingSummaries: ReprocessingSummariesSchema.and(
      z.any().openapi({ description: 'A summary of information about the pipeline reprocessing.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the pipeline was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the pipeline was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A summary of information about a pipeline.', required: [] })
  .openapi('PipelineSummary')

const PipelineSummariesSchema = z.array(PipelineSummarySchema).openapi('PipelineSummaries')

const ListPipelinesResponseSchema = z
  .object({
    pipelineSummaries: PipelineSummariesSchema.and(
      z.any().openapi({ description: 'A list of <code>PipelineSummary</code> objects.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to retrieve the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPipelinesResponse')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags (metadata) that you have assigned to the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const MessagePayloadsSchema = z
  .array(MessagePayloadSchema)
  .min(1)
  .max(10)
  .openapi('MessagePayloads')

const LogResultSchema = z.string().openapi('LogResult')

const RunPipelineActivityResponseSchema = z
  .object({
    payloads: MessagePayloadsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The enriched or transformed sample message payloads as base64-encoded strings. (The results of running the pipeline activity on each input sample message payload, encoded in base64.)',
        }),
    ).exactOptional(),
    logResult: LogResultSchema.and(
      z
        .any()
        .openapi({
          description: 'In case the pipeline activity fails, the log message that is generated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RunPipelineActivityResponse')

const SampleChannelDataResponseSchema = z
  .object({
    payloads: MessagePayloadsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of message samples. Each sample message is returned as a base64-encoded string.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SampleChannelDataResponse')

const StartPipelineReprocessingResponseSchema = z
  .object({
    reprocessingId: ReprocessingIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the pipeline reprocessing activity that was started.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartPipelineReprocessingResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const MessagesSchema = z.array(MessageSchema).openapi('Messages')

const BatchPutMessageRequestSchema = z
  .object({
    channelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel where the messages are sent.' }),
    ),
    messages: MessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>',
        }),
    ),
  })
  .openapi({ required: ['channelName', 'messages'], title: 'BatchPutMessageRequest' })
  .openapi('BatchPutMessageRequest')

const CancelPipelineReprocessingRequestSchema = z
  .object({})
  .openapi({ title: 'CancelPipelineReprocessingRequest' })
  .openapi('CancelPipelineReprocessingRequest')

const ChannelMessagesSchema: z.ZodType<ChannelMessagesType> = z
  .lazy(() =>
    z
      .object({
        s3Paths: S3PathChannelMessagesSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>Specifies one or more keys that identify the Amazon Simple Storage Service (Amazon S3) objects that save your channel messages.</p> <p>You must use the full path for the key.</p> <p>Example path: <code>channel/mychannel/__dt=2020-02-29 00:00:00/1582940490000_1582940520000_123456789012_mychannel_0_2118.0.json.gz</code> </p>',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Specifies one or more sets of channel messages.', required: [] }),
  )
  .openapi('ChannelMessages')

const CreateChannelRequestSchema = z
  .object({
    channelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the channel.' }),
    ),
    channelStorage: ChannelStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You can't change this storage option after the channel is created.",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in days, message data is kept for the channel. When <code>customerManagedS3</code> storage is selected, this parameter is ignored.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Metadata which can be used to manage the channel.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['channelName'], title: 'CreateChannelRequest' })
  .openapi('CreateChannelRequest')

const CreateDatasetContentRequestSchema = z
  .object({
    versionId: DatasetContentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateDatasetContentRequest', required: [] })
  .openapi('CreateDatasetContentRequest')

const CreateDatasetRequestSchema = z
  .object({
    datasetName: DatasetNameSchema.and(
      z.any().openapi({ description: 'The name of the dataset.' }),
    ),
    actions: DatasetActionsSchema.and(
      z.any().openapi({ description: 'A list of actions that create the dataset contents.' }),
    ),
    triggers: DatasetTriggersSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of triggers. A trigger causes dataset contents to be populated at a specified time interval or when another dataset's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.",
        }),
    ).exactOptional(),
    contentDeliveryRules: DatasetContentDeliveryRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'When dataset contents are created, they are delivered to destinations specified here.',
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. How long, in days, versions of dataset contents are kept for the dataset. If not specified or set to <code>null</code>, versions of dataset contents are retained for at most 90 days. The number of versions of dataset contents retained is determined by the <code>versioningConfiguration</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions"> Keeping Multiple Versions of IoT Analytics datasets</a> in the <i>IoT Analytics User Guide</i>.',
        }),
    ).exactOptional(),
    versioningConfiguration: VersioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. How many versions of dataset contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the <code>retentionPeriod</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the <i>IoT Analytics User Guide</i>.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Metadata which can be used to manage the dataset.' }),
    ).exactOptional(),
    lateDataRules: LateDataRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['datasetName', 'actions'], title: 'CreateDatasetRequest' })
  .openapi('CreateDatasetRequest')

const CreateDatastoreRequestSchema = z
  .object({
    datastoreName: DatastoreNameSchema.and(
      z.any().openapi({ description: 'The name of the data store.' }),
    ),
    datastoreStorage: DatastoreStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long, in days, message data is kept for the data store. When <code>customerManagedS3</code> storage is selected, this parameter is ignored.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Metadata which can be used to manage the data store.' }),
    ).exactOptional(),
    fileFormatConfiguration: FileFormatConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
        }),
    ).exactOptional(),
    datastorePartitions: DatastorePartitionsSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains information about the partition dimensions in a data store. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['datastoreName'], title: 'CreateDatastoreRequest' })
  .openapi('CreateDatastoreRequest')

const CreatePipelineRequestSchema = z
  .object({
    pipelineName: PipelineNameSchema.and(
      z.any().openapi({ description: 'The name of the pipeline.' }),
    ),
    pipelineActivities: PipelineActivitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda unctions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>',
        }),
    ),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'Metadata which can be used to manage the pipeline.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['pipelineName', 'pipelineActivities'], title: 'CreatePipelineRequest' })
  .openapi('CreatePipelineRequest')

const DeleteChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteChannelRequest' })
  .openapi('DeleteChannelRequest')

const DeleteDatasetContentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDatasetContentRequest' })
  .openapi('DeleteDatasetContentRequest')

const DeleteDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const DeleteDatastoreRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDatastoreRequest' })
  .openapi('DeleteDatastoreRequest')

const DeletePipelineRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePipelineRequest' })
  .openapi('DeletePipelineRequest')

const IncludeStatisticsFlagSchema = z.boolean().openapi('IncludeStatisticsFlag')

const DescribeChannelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChannelRequest' })
  .openapi('DescribeChannelRequest')

const DescribeDatasetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const DescribeDatastoreRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDatastoreRequest' })
  .openapi('DescribeDatastoreRequest')

const DescribeLoggingOptionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLoggingOptionsRequest' })
  .openapi('DescribeLoggingOptionsRequest')

const DescribePipelineRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePipelineRequest' })
  .openapi('DescribePipelineRequest')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const GetDatasetContentRequestSchema = z
  .object({})
  .openapi({ title: 'GetDatasetContentRequest' })
  .openapi('GetDatasetContentRequest')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const ListChannelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListChannelsRequest' })
  .openapi('ListChannelsRequest')

const ListDatasetContentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatasetContentsRequest' })
  .openapi('ListDatasetContentsRequest')

const ListDatasetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatasetsRequest' })
  .openapi('ListDatasetsRequest')

const ListDatastoresRequestSchema = z
  .object({})
  .openapi({ title: 'ListDatastoresRequest' })
  .openapi('ListDatastoresRequest')

const ListPipelinesRequestSchema = z
  .object({})
  .openapi({ title: 'ListPipelinesRequest' })
  .openapi('ListPipelinesRequest')

const ResourceArnSchema = z.string().min(20).max(2048).openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const MaxMessagesSchema = z.int().min(1).max(10).openapi('MaxMessages')

const PutLoggingOptionsRequestSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z.any().openapi({ description: 'The new values of the IoT Analytics logging options.' }),
    ),
  })
  .openapi({ required: ['loggingOptions'], title: 'PutLoggingOptionsRequest' })
  .openapi('PutLoggingOptionsRequest')

const RunPipelineActivityRequestSchema = z
  .object({
    pipelineActivity: PipelineActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The pipeline activity that is run. This must not be a channel activity or a data store activity because these activities are used in a pipeline only to load the original message and to store the (possibly) transformed message. If a Lambda activity is specified, only short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be used.',
        }),
    ),
    payloads: MessagePayloadsSchema.and(
      z
        .any()
        .openapi({
          description: 'The sample message payloads on which the pipeline activity is run.',
        }),
    ),
  })
  .openapi({ required: ['pipelineActivity', 'payloads'], title: 'RunPipelineActivityRequest' })
  .openapi('RunPipelineActivityRequest')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const SampleChannelDataRequestSchema = z
  .object({})
  .openapi({ title: 'SampleChannelDataRequest' })
  .openapi('SampleChannelDataRequest')

const StartPipelineReprocessingRequestSchema = z
  .object({
    startTime: StartTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>',
        }),
    ).exactOptional(),
    endTime: EndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>',
        }),
    ).exactOptional(),
    channelMessages: ChannelMessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies one or more sets of channel messages that you want to reprocess.</p> <p>If you use the <code>channelMessages</code> object, you must not specify a value for <code>startTime</code> and <code>endTime</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartPipelineReprocessingRequest', required: [] })
  .openapi('StartPipelineReprocessingRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The new or modified tags for the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateChannelRequestSchema = z
  .object({
    channelStorage: ChannelStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. You can't change this storage option after the channel is created.",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            "How long, in days, message data is kept for the channel. The retention period can't be updated if the channel's Amazon S3 storage is customer-managed.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateChannelRequest', required: [] })
  .openapi('UpdateChannelRequest')

const UpdateDatasetRequestSchema = z
  .object({
    actions: DatasetActionsSchema.and(
      z.any().openapi({ description: 'A list of <code>DatasetAction</code> objects.' }),
    ),
    triggers: DatasetTriggersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.',
        }),
    ).exactOptional(),
    contentDeliveryRules: DatasetContentDeliveryRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'When dataset contents are created, they are delivered to destinations specified here.',
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({ description: 'How long, in days, dataset contents are kept for the dataset.' }),
    ).exactOptional(),
    versioningConfiguration: VersioningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. How many versions of dataset contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the <code>retentionPeriod</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the <i>IoT Analytics User Guide</i>.',
        }),
    ).exactOptional(),
    lateDataRules: LateDataRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['actions'], title: 'UpdateDatasetRequest' })
  .openapi('UpdateDatasetRequest')

const UpdateDatastoreRequestSchema = z
  .object({
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            "How long, in days, message data is kept for the data store. The retention period can't be updated if the data store's Amazon S3 storage is customer-managed.",
        }),
    ).exactOptional(),
    datastoreStorage: DatastoreStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
        }),
    ).exactOptional(),
    fileFormatConfiguration: FileFormatConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDatastoreRequest', required: [] })
  .openapi('UpdateDatastoreRequest')

const UpdatePipelineRequestSchema = z
  .object({
    pipelineActivities: PipelineActivitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['pipelineActivities'], title: 'UpdatePipelineRequest' })
  .openapi('UpdatePipelineRequest')

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

export const postMessagesBatchRoute = createRoute({
  method: 'post',
  path: '/messages/batch',
  description: 'Sends messages to a channel.',
  operationId: 'BatchPutMessage',
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
              channelName: z
                .string()
                .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the channel where the messages are sent.' }),
              messages: z
                .array(MessageSchema)
                .openapi({
                  description:
                    '<p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>',
                }),
            })
            .openapi({ required: ['channelName', 'messages'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchPutMessageResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deletePipelinesPipelineNameReprocessingReprocessingIdRoute = createRoute({
  method: 'delete',
  path: '/pipelines/{pipelineName}/reprocessing/{reprocessingId}',
  description: 'Cancels the reprocessing of data through the pipeline.',
  operationId: 'CancelPipelineReprocessing',
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
      pipelineName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'pipelineName',
            in: 'path',
            required: true,
            description: 'The name of pipeline for which data reprocessing is canceled.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
      reprocessingId: z
        .string()
        .openapi({
          param: {
            name: 'reprocessingId',
            in: 'path',
            required: true,
            description:
              'The ID of the reprocessing task (returned by <code>StartPipelineReprocessing</code>).',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelPipelineReprocessingResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getChannelsRoute = createRoute({
  method: 'get',
  path: '/channels',
  description: 'Retrieves a list of channels.',
  operationId: 'ListChannels',
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
            description: 'The token for the next set of results.',
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postChannelsRoute = createRoute({
  method: 'post',
  path: '/channels',
  description:
    'Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.',
  operationId: 'CreateChannel',
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
              channelName: z
                .string()
                .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the channel.' }),
              channelStorage: z
                .object({
                  serviceManagedS3: ServiceManagedChannelS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created.",
                      }),
                  ).exactOptional(),
                  customerManagedS3: CustomerManagedChannelS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.",
                  required: [],
                }),
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
              tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Metadata which can be used to manage the channel.' }),
            })
            .openapi({ required: ['channelName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getDatasetsRoute = createRoute({
  method: 'get',
  path: '/datasets',
  description: 'Retrieves information about datasets.',
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
            description: 'The token for the next set of results.',
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDatasetsRoute = createRoute({
  method: 'post',
  path: '/datasets',
  description:
    'Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.',
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
              datasetName: z
                .string()
                .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the dataset.' }),
              actions: z
                .array(DatasetActionSchema)
                .length(1)
                .openapi({ description: 'A list of actions that create the dataset contents.' }),
              triggers: z
                .array(DatasetTriggerSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "A list of triggers. A trigger causes dataset contents to be populated at a specified time interval or when another dataset's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.",
                }),
              contentDeliveryRules: z
                .array(DatasetContentDeliveryRuleSchema)
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'When dataset contents are created, they are delivered to destinations specified here.',
                }),
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
              versioningConfiguration: z
                .object({
                  unlimited: UnlimitedVersioningSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'If true, unlimited versions of dataset contents are kept.',
                      }),
                  ).exactOptional(),
                  maxVersions: MaxVersionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'How many versions of dataset contents are kept. The <code>unlimited</code> parameter must be <code>false</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the versioning of dataset contents.',
                  required: [],
                }),
              tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Metadata which can be used to manage the dataset.' }),
              lateDataRules: z
                .array(LateDataRuleSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
                }),
            })
            .openapi({ required: ['datasetName', 'actions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetNameContentRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetName}/content',
  description: 'Retrieves the contents of a dataset as presigned URIs.',
  operationId: 'GetDatasetContent',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset whose contents are retrieved.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .min(7)
        .max(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'versionId',
            in: 'query',
            required: false,
            description:
              'The version of the dataset whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed dataset. If not specified, "$LATEST_SUCCEEDED" is the default.',
            schema: { type: 'string', minLength: 7, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDatasetContentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDatasetsDatasetNameContentRoute = createRoute({
  method: 'post',
  path: '/datasets/{datasetName}/content',
  description:
    'Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).',
  operationId: 'CreateDatasetContent',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              versionId: z
                .string()
                .min(7)
                .max(36)
                .exactOptional()
                .openapi({
                  description:
                    'The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
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
      content: { 'application/json': { schema: CreateDatasetContentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDatasetsDatasetNameContentRoute = createRoute({
  method: 'delete',
  path: '/datasets/{datasetName}/content',
  description: 'Deletes the content of the specified dataset.',
  operationId: 'DeleteDatasetContent',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset whose content is deleted.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .min(7)
        .max(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'versionId',
            in: 'query',
            required: false,
            description:
              'The version of the dataset whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.',
            schema: { type: 'string', minLength: 7, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDatastoresRoute = createRoute({
  method: 'get',
  path: '/datastores',
  description: 'Retrieves a list of data stores.',
  operationId: 'ListDatastores',
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
            description: 'The token for the next set of results.',
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatastoresResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDatastoresRoute = createRoute({
  method: 'post',
  path: '/datastores',
  description: 'Creates a data store, which is a repository for messages.',
  operationId: 'CreateDatastore',
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
              datastoreName: z
                .string()
                .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the data store.' }),
              datastoreStorage: z
                .object({
                  serviceManagedS3: ServiceManagedDatastoreS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                  customerManagedS3: CustomerManagedDatastoreS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                  iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          " Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
                  required: [],
                }),
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
              tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Metadata which can be used to manage the data store.' }),
              fileFormatConfiguration: z
                .object({
                  jsonConfiguration: JsonConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Contains the configuration information of the JSON format.',
                      }),
                  ).exactOptional(),
                  parquetConfiguration: ParquetConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the configuration information of the Parquet format.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
                  required: [],
                }),
              datastorePartitions: z
                .object({
                  partitions: PartitionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: ' A list of partition dimensions in a data store. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Contains information about the partition dimensions in a data store. ',
                  required: [],
                }),
            })
            .openapi({ required: ['datastoreName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatastoreResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getPipelinesRoute = createRoute({
  method: 'get',
  path: '/pipelines',
  description: 'Retrieves a list of pipelines.',
  operationId: 'ListPipelines',
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
            description: 'The token for the next set of results.',
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPipelinesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPipelinesRoute = createRoute({
  method: 'post',
  path: '/pipelines',
  description:
    'Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.',
  operationId: 'CreatePipeline',
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
              pipelineName: z
                .string()
                .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the pipeline.' }),
              pipelineActivities: z
                .array(PipelineActivitySchema)
                .min(1)
                .max(25)
                .openapi({
                  description:
                    '<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda unctions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>',
                }),
              tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({ description: 'Metadata which can be used to manage the pipeline.' }),
            })
            .openapi({ required: ['pipelineName', 'pipelineActivities'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePipelineResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getChannelsChannelNameRoute = createRoute({
  method: 'get',
  path: '/channels/{channelName}',
  description: 'Retrieves information about a channel.',
  operationId: 'DescribeChannel',
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
      channelName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'channelName',
            in: 'path',
            required: true,
            description: 'The name of the channel whose information is retrieved.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      includeStatistics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatistics',
            in: 'query',
            required: false,
            description:
              "If true, additional statistical information about the channel is included in the response. This feature can't be used with a channel whose S3 storage is customer-managed.",
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putChannelsChannelNameRoute = createRoute({
  method: 'put',
  path: '/channels/{channelName}',
  description: 'Used to update the settings of a channel.',
  operationId: 'UpdateChannel',
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
      channelName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'channelName',
            in: 'path',
            required: true,
            description: 'The name of the channel to be updated.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              channelStorage: z
                .object({
                  serviceManagedS3: ServiceManagedChannelS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created.",
                      }),
                  ).exactOptional(),
                  customerManagedS3: CustomerManagedChannelS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.",
                  required: [],
                }),
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteChannelsChannelNameRoute = createRoute({
  method: 'delete',
  path: '/channels/{channelName}',
  description: 'Deletes the specified channel.',
  operationId: 'DeleteChannel',
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
      channelName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'channelName',
            in: 'path',
            required: true,
            description: 'The name of the channel to delete.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetNameRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetName}',
  description: 'Retrieves information about a dataset.',
  operationId: 'DescribeDataset',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset whose information is retrieved.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putDatasetsDatasetNameRoute = createRoute({
  method: 'put',
  path: '/datasets/{datasetName}',
  description: 'Updates the settings of a dataset.',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset to update.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actions: z
                .array(DatasetActionSchema)
                .length(1)
                .openapi({ description: 'A list of <code>DatasetAction</code> objects.' }),
              triggers: z
                .array(DatasetTriggerSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.',
                }),
              contentDeliveryRules: z
                .array(DatasetContentDeliveryRuleSchema)
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'When dataset contents are created, they are delivered to destinations specified here.',
                }),
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
              versioningConfiguration: z
                .object({
                  unlimited: UnlimitedVersioningSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'If true, unlimited versions of dataset contents are kept.',
                      }),
                  ).exactOptional(),
                  maxVersions: MaxVersionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'How many versions of dataset contents are kept. The <code>unlimited</code> parameter must be <code>false</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the versioning of dataset contents.',
                  required: [],
                }),
              lateDataRules: z
                .array(LateDataRuleSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.',
                }),
            })
            .openapi({ required: ['actions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDatasetsDatasetNameRoute = createRoute({
  method: 'delete',
  path: '/datasets/{datasetName}',
  description:
    '<p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>',
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
    params: z.object({
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset to delete.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDatastoresDatastoreNameRoute = createRoute({
  method: 'get',
  path: '/datastores/{datastoreName}',
  description: 'Retrieves information about a data store.',
  operationId: 'DescribeDatastore',
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
      datastoreName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datastoreName',
            in: 'path',
            required: true,
            description: 'The name of the data store',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      includeStatistics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatistics',
            in: 'query',
            required: false,
            description:
              "If true, additional statistical information about the data store is included in the response. This feature can't be used with a data store whose S3 storage is customer-managed.",
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatastoreResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putDatastoresDatastoreNameRoute = createRoute({
  method: 'put',
  path: '/datastores/{datastoreName}',
  description: 'Used to update the settings of a data store.',
  operationId: 'UpdateDatastore',
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
      datastoreName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datastoreName',
            in: 'path',
            required: true,
            description: 'The name of the data store to be updated.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              retentionPeriod: z
                .object({
                  unlimited: UnlimitedRetentionPeriodSchema.and(
                    z.any().openapi({ description: 'If true, message data is kept indefinitely.' }),
                  ).exactOptional(),
                  numberOfDays: RetentionPeriodInDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of days that message data is kept. The <code>unlimited</code> parameter must be false.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'How long, in days, message data is kept.', required: [] }),
              datastoreStorage: z
                .object({
                  serviceManagedS3: ServiceManagedDatastoreS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                  customerManagedS3: CustomerManagedDatastoreS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                  iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          " Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. ",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. ",
                  required: [],
                }),
              fileFormatConfiguration: z
                .object({
                  jsonConfiguration: JsonConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Contains the configuration information of the JSON format.',
                      }),
                  ).exactOptional(),
                  parquetConfiguration: ParquetConfigurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains the configuration information of the Parquet format.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can\'t change the file format after you create the data store.</p>',
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
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDatastoresDatastoreNameRoute = createRoute({
  method: 'delete',
  path: '/datastores/{datastoreName}',
  description: 'Deletes the specified data store.',
  operationId: 'DeleteDatastore',
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
      datastoreName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datastoreName',
            in: 'path',
            required: true,
            description: 'The name of the data store to delete.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPipelinesPipelineNameRoute = createRoute({
  method: 'get',
  path: '/pipelines/{pipelineName}',
  description: 'Retrieves information about a pipeline.',
  operationId: 'DescribePipeline',
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
      pipelineName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'pipelineName',
            in: 'path',
            required: true,
            description: 'The name of the pipeline whose information is retrieved.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePipelineResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putPipelinesPipelineNameRoute = createRoute({
  method: 'put',
  path: '/pipelines/{pipelineName}',
  description:
    'Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.',
  operationId: 'UpdatePipeline',
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
      pipelineName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'pipelineName',
            in: 'path',
            required: true,
            description: 'The name of the pipeline to update.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pipelineActivities: z
                .array(PipelineActivitySchema)
                .min(1)
                .max(25)
                .openapi({
                  description:
                    '<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>',
                }),
            })
            .openapi({ required: ['pipelineActivities'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deletePipelinesPipelineNameRoute = createRoute({
  method: 'delete',
  path: '/pipelines/{pipelineName}',
  description: 'Deletes the specified pipeline.',
  operationId: 'DeletePipeline',
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
      pipelineName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'pipelineName',
            in: 'path',
            required: true,
            description: 'The name of the pipeline to delete.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLoggingRoute = createRoute({
  method: 'get',
  path: '/logging',
  description: 'Retrieves the current settings of the IoT Analytics logging options.',
  operationId: 'DescribeLoggingOptions',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoggingOptionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putLoggingRoute = createRoute({
  method: 'put',
  path: '/logging',
  description:
    '<p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>',
  operationId: 'PutLoggingOptions',
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
              loggingOptions: z
                .object({
                  roleArn: RoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the role that grants permission to IoT Analytics to perform logging.',
                      }),
                  ).exactOptional(),
                  level: LoggingLevelSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The logging level. Currently, only ERROR is supported.',
                      }),
                  ).exactOptional(),
                  enabled: LoggingEnabledSchema.and(
                    z
                      .any()
                      .openapi({ description: 'If true, logging is enabled for IoT Analytics.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Information about logging options.', required: [] }),
            })
            .openapi({ required: ['loggingOptions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDatasetsDatasetNameContentsRoute = createRoute({
  method: 'get',
  path: '/datasets/{datasetName}/contents',
  description: 'Lists information about dataset contents that have been created.',
  operationId: 'ListDatasetContents',
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
      datasetName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'datasetName',
            in: 'path',
            required: true,
            description: 'The name of the dataset whose contents information you want to list.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
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
            description: 'The token for the next set of results.',
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      scheduledOnOrAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduledOnOrAfter',
            in: 'query',
            required: false,
            description:
              'A filter to limit results to those dataset contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      scheduledBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'scheduledBefore',
            in: 'query',
            required: false,
            description:
              'A filter to limit results to those dataset contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetContentsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags#resourceArn',
  description: 'Lists the tags (metadata) that you have assigned to the resource.',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource whose tags you want to list.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags#resourceArn',
  description:
    'Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource whose tags you want to modify.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(TagSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'The new or modified tags for the resource.' }),
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postPipelineactivitiesRunRoute = createRoute({
  method: 'post',
  path: '/pipelineactivities/run',
  description: 'Simulates the results of running a pipeline activity on a message payload.',
  operationId: 'RunPipelineActivity',
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
              pipelineActivity: z
                .object({
                  channel: ChannelActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Determines the source of the messages to be processed.',
                      }),
                  ).exactOptional(),
                  lambda: LambdaActivitySchema.and(
                    z
                      .any()
                      .openapi({ description: 'Runs a Lambda function to modify the message.' }),
                  ).exactOptional(),
                  datastore: DatastoreActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies where to store the processed message data.',
                      }),
                  ).exactOptional(),
                  addAttributes: AddAttributesActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Adds other attributes based on existing attributes in the message.',
                      }),
                  ).exactOptional(),
                  removeAttributes: RemoveAttributesActivitySchema.and(
                    z.any().openapi({ description: 'Removes attributes from a message.' }),
                  ).exactOptional(),
                  selectAttributes: SelectAttributesActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Used to create a new message using only the specified attributes from the original message. ',
                      }),
                  ).exactOptional(),
                  filter: FilterActivitySchema.and(
                    z.any().openapi({ description: 'Filters a message based on its attributes.' }),
                  ).exactOptional(),
                  math: MathActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Computes an arithmetic expression using the message's attributes and adds it to the message.",
                      }),
                  ).exactOptional(),
                  deviceRegistryEnrich: DeviceRegistryEnrichActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Adds data from the IoT device registry to your message.',
                      }),
                  ).exactOptional(),
                  deviceShadowEnrich: DeviceShadowEnrichActivitySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Adds information from the IoT Device Shadow service to a message.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An activity that performs a transformation on a message.',
                  required: [],
                }),
              payloads: z
                .array(MessagePayloadSchema)
                .min(1)
                .max(10)
                .openapi({
                  description: 'The sample message payloads on which the pipeline activity is run.',
                }),
            })
            .openapi({ required: ['pipelineActivity', 'payloads'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RunPipelineActivityResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getChannelsChannelNameSampleRoute = createRoute({
  method: 'get',
  path: '/channels/{channelName}/sample',
  description:
    'Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.',
  operationId: 'SampleChannelData',
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
      channelName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'channelName',
            in: 'path',
            required: true,
            description: 'The name of the channel whose message samples are retrieved.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    query: z.object({
      maxMessages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxMessages',
            in: 'query',
            required: false,
            description:
              'The number of sample messages to be retrieved. The limit is 10. The default is also 10.',
            schema: { type: 'integer', minimum: 1, maximum: 10 },
          },
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description: 'The start of the time window from which sample messages are retrieved.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description: 'The end of the time window from which sample messages are retrieved.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SampleChannelDataResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPipelinesPipelineNameReprocessingRoute = createRoute({
  method: 'post',
  path: '/pipelines/{pipelineName}/reprocessing',
  description: 'Starts the reprocessing of raw message data through the pipeline.',
  operationId: 'StartPipelineReprocessing',
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
      pipelineName: z
        .string()
        .regex(/(^(?!_{2}))(^[a-zA-Z0-9_]+$)/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'pipelineName',
            in: 'path',
            required: true,
            description: 'The name of the pipeline on which to start reprocessing.',
            schema: {
              type: 'string',
              pattern: '(^(?!_{2}))(^[a-zA-Z0-9_]+$)',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              startTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>',
                }),
              endTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>',
                }),
              channelMessages: z
                .object({
                  s3Paths: S3PathChannelMessagesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies one or more keys that identify the Amazon Simple Storage Service (Amazon S3) objects that save your channel messages.</p> <p>You must use the full path for the key.</p> <p>Example path: <code>channel/mychannel/__dt=2020-02-29 00:00:00/1582940490000_1582940520000_123456789012_mychannel_0_2118.0.json.gz</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies one or more sets of channel messages.',
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
      content: { 'application/json': { schema: StartPipelineReprocessingResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags#resourceArn&tagKeys',
  description: 'Removes the given tags (metadata) from the resource.',
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
    query: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The ARN of the resource whose tags you want to remove.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
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
            description: 'The keys of those tags which you want to remove.',
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
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
