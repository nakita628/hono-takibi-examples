import { createRoute, z } from '@hono/zod-openapi'

const DatasetNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('DatasetName')

const DatasetArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\-]*:[0-9]{12}:dataset\/.+/)
  .min(20)
  .max(2048)
  .openapi('DatasetArn')

const DatasetStatusSchema = z
  .enum(['CREATED', 'INGESTION_IN_PROGRESS', 'ACTIVE'])
  .openapi('DatasetStatus')

const CreateDatasetResponseSchema = z
  .object({
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset being created. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the dataset being created. ',
    }),
    Status: DatasetStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the <code>CreateDataset</code> operation. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDatasetResponse')

const InlineDataSchemaSchema = z.string().min(1).max(1000000).openapi('InlineDataSchema')

const DatasetSchemaSchema = z
  .object({
    InlineDataSchema: InlineDataSchemaSchema.exactOptional().openapi({ description: ' ' }),
  })
  .openapi({
    description: 'Provides information about the data schema used with the given dataset. ',
    required: [],
  })
  .openapi('DatasetSchema')

const NameOrArnSchema = z
  .string()
  .regex(/^[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,2048}$/)
  .min(1)
  .max(2048)
  .openapi('NameOrArn')

const IdempotenceTokenSchema = z
  .string()
  .regex(/\p{ASCII}{1,256}/u)
  .min(1)
  .max(256)
  .openapi('IdempotenceToken')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/[\s\w+-=\.:\/@]*/)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.openapi({ description: 'The key for the specified tag. ' }),
    Value: TagValueSchema.openapi({ description: 'The value for the specified tag. ' }),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A tag is a key-value pair that can be added to a resource as metadata. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateDatasetRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.openapi({
      description: 'The name of the dataset being created. ',
    }),
    DatasetSchema: DatasetSchemaSchema.exactOptional().openapi({
      description:
        'A JSON description of the data that is in each time series dataset, including names, column names, and data types. ',
    }),
    ServerSideKmsKeyId: NameOrArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment. ',
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        ' A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Any tags associated with the ingested data described in the dataset. ',
    }),
  })
  .openapi({ required: ['DatasetName', 'ClientToken'], title: 'CreateDatasetRequest' })
  .openapi('CreateDatasetRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const InferenceSchedulerArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\-]*:[0-9]{12}:inference-scheduler\/.+/)
  .min(20)
  .max(2048)
  .openapi('InferenceSchedulerArn')

const InferenceSchedulerNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('InferenceSchedulerName')

const InferenceSchedulerStatusSchema = z
  .enum(['PENDING', 'RUNNING', 'STOPPING', 'STOPPED'])
  .openapi('InferenceSchedulerStatus')

const CreateInferenceSchedulerResponseSchema = z
  .object({
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the inference scheduler being created. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of inference scheduler being created. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the <code>CreateInferenceScheduler</code> operation. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateInferenceSchedulerResponse')

const ModelNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('ModelName')

const DataDelayOffsetInMinutesSchema = z.int().min(0).max(60).openapi('DataDelayOffsetInMinutes')

const DataUploadFrequencySchema = z
  .enum(['PT5M', 'PT10M', 'PT15M', 'PT30M', 'PT1H'])
  .openapi('DataUploadFrequency')

const S3BucketSchema = z
  .string()
  .regex(/^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3PrefixSchema = z
  .string()
  .regex(/(^$)|([\u0009\u000A\u000D\u0020-\u00FF]{1,1023}\/$)/)
  .min(0)
  .max(1024)
  .openapi('S3Prefix')

const InferenceS3InputConfigurationSchema = z
  .object({
    Bucket: S3BucketSchema.openapi({
      description: 'The bucket containing the input dataset for the inference. ',
    }),
    Prefix: S3PrefixSchema.exactOptional().openapi({
      description: 'The prefix for the S3 bucket used for the input data for the inference. ',
    }),
  })
  .openapi({
    required: ['Bucket'],
    description:
      ' Specifies configuration information for the input data for the inference, including input data S3 location. ',
  })
  .openapi('InferenceS3InputConfiguration')

const TimeZoneOffsetSchema = z
  .string()
  .regex(/^(\+|\-)[0-9]{2}\:[0-9]{2}$/)
  .openapi('TimeZoneOffset')

const FileNameTimestampFormatSchema = z
  .string()
  .regex(/^EPOCH|yyyy-MM-dd-HH-mm-ss|yyyyMMddHHmmss$/)
  .openapi('FileNameTimestampFormat')

const ComponentTimestampDelimiterSchema = z
  .string()
  .regex(/^(\-|\_|\s)?$/)
  .min(0)
  .max(1)
  .openapi('ComponentTimestampDelimiter')

const InferenceInputNameConfigurationSchema = z
  .object({
    TimestampFormat: FileNameTimestampFormatSchema.exactOptional().openapi({
      description:
        'The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-). ',
    }),
    ComponentTimestampDelimiter: ComponentTimestampDelimiterSchema.exactOptional().openapi({
      description: 'Indicates the delimiter character used between items in the data. ',
    }),
  })
  .openapi({
    description:
      'Specifies configuration information for the input data for the inference, including timestamp format and delimiter. ',
    required: [],
  })
  .openapi('InferenceInputNameConfiguration')

const InferenceInputConfigurationSchema = z
  .object({
    S3InputConfiguration: InferenceS3InputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies configuration information for the input data for the inference, including Amazon S3 location of input data.',
    }),
    InputTimeZoneOffset: TimeZoneOffsetSchema.exactOptional().openapi({
      description:
        'Indicates the difference between your time zone and Coordinated Universal Time (UTC).',
    }),
    InferenceInputNameConfiguration: InferenceInputNameConfigurationSchema.exactOptional().openapi({
      description:
        'Specifies configuration information for the input data for the inference, including timestamp format and delimiter. ',
    }),
  })
  .openapi({
    description:
      'Specifies configuration information for the input data for the inference, including Amazon S3 location of input data.. ',
    required: [],
  })
  .openapi('InferenceInputConfiguration')

const InferenceS3OutputConfigurationSchema = z
  .object({
    Bucket: S3BucketSchema.openapi({
      description: ' The bucket containing the output results from the inference ',
    }),
    Prefix: S3PrefixSchema.exactOptional().openapi({
      description: ' The prefix for the S3 bucket used for the output results from the inference. ',
    }),
  })
  .openapi({
    required: ['Bucket'],
    description:
      ' Specifies configuration information for the output results from the inference, including output S3 location. ',
  })
  .openapi('InferenceS3OutputConfiguration')

const InferenceOutputConfigurationSchema = z
  .object({
    S3OutputConfiguration: InferenceS3OutputConfigurationSchema.openapi({
      description:
        ' Specifies configuration information for the output results from for the inference, output S3 location. ',
    }),
    KmsKeyId: NameOrArnSchema.exactOptional().openapi({
      description: 'The ID number for the AWS KMS key used to encrypt the inference output. ',
    }),
  })
  .openapi({
    required: ['S3OutputConfiguration'],
    description:
      ' Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. ',
  })
  .openapi('InferenceOutputConfiguration')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:iam::[0-9]{12}:role\/.+/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const CreateInferenceSchedulerRequestSchema = z
  .object({
    ModelName: ModelNameSchema.openapi({
      description:
        'The name of the previously trained ML model being used to create the inference scheduler. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.openapi({
      description: 'The name of the inference scheduler being created. ',
    }),
    DataDelayOffsetInMinutes: DataDelayOffsetInMinutesSchema.exactOptional().openapi({
      description:
        '<p>The interval (in minutes) of planned delay at the start of each inference segment. For example, if inference is set to run every ten minutes, the delay is set to five minutes and the time is 09:08. The inference scheduler will wake up at the configured interval (which, without a delay configured, would be 09:10) plus the additional five minute delay time (so 09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the same frequency, so that you don\'t have to stop and restart the scheduler when uploading new data.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding the inference process</a>.</p>',
    }),
    DataUploadFrequency: DataUploadFrequencySchema.openapi({
      description:
        '<p> How often data is uploaded to the source Amazon S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment runs inference on your data.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding the inference process</a>.</p>',
    }),
    DataInputConfiguration: InferenceInputConfigurationSchema.openapi({
      description:
        'Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. ',
    }),
    DataOutputConfiguration: InferenceOutputConfigurationSchema.openapi({
      description:
        'Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output. ',
    }),
    RoleArn: IamRoleArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference. ',
    }),
    ServerSideKmsKeyId: NameOrArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment. ',
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        ' A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'Any tags associated with the inference scheduler. ',
    }),
  })
  .openapi({
    required: [
      'ModelName',
      'InferenceSchedulerName',
      'DataUploadFrequency',
      'DataInputConfiguration',
      'DataOutputConfiguration',
      'RoleArn',
      'ClientToken',
    ],
    title: 'CreateInferenceSchedulerRequest',
  })
  .openapi('CreateInferenceSchedulerRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const LabelIdSchema = z
  .string()
  .regex(/[A-Fa-f0-9]{0,32}/)
  .max(32)
  .openapi('LabelId')

const CreateLabelResponseSchema = z
  .object({
    LabelId: LabelIdSchema.exactOptional().openapi({
      description: ' The ID of the label that you have created. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateLabelResponse')

const LabelGroupNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('LabelGroupName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const LabelRatingSchema = z.enum(['ANOMALY', 'NO_ANOMALY', 'NEUTRAL']).openapi('LabelRating')

const FaultCodeSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,100}/u)
  .min(1)
  .max(100)
  .openapi('FaultCode')

const CommentsSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,2560}/u)
  .min(1)
  .max(2560)
  .openapi('Comments')

const EquipmentSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,200}/u)
  .min(1)
  .max(200)
  .openapi('Equipment')

const CreateLabelRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description:
        '<p> The name of a group of labels. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data. </p>',
    }),
    StartTime: TimestampSchema.openapi({ description: ' The start time of the labeled event. ' }),
    EndTime: TimestampSchema.openapi({ description: ' The end time of the labeled event. ' }),
    Rating: LabelRatingSchema.openapi({
      description: ' Indicates whether a labeled event represents an anomaly. ',
    }),
    FaultCode: FaultCodeSchema.exactOptional().openapi({
      description:
        '<p> Provides additional information about the label. The fault code must be defined in the FaultCodes attribute of the label group.</p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data. </p>',
    }),
    Notes: CommentsSchema.exactOptional().openapi({
      description:
        '<p> Metadata providing additional information about the label. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    Equipment: EquipmentSchema.exactOptional().openapi({
      description:
        '<p> Indicates that a label pertains to a particular piece of equipment. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        ' A unique identifier for the request to create a label. If you do not set the client request token, Lookout for Equipment generates one. ',
    }),
  })
  .openapi({
    required: ['LabelGroupName', 'StartTime', 'EndTime', 'Rating', 'ClientToken'],
    title: 'CreateLabelRequest',
  })
  .openapi('CreateLabelRequest')

const LabelGroupArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\-]*:[0-9]{12}:label-group\/.+/)
  .min(20)
  .max(2048)
  .openapi('LabelGroupArn')

const CreateLabelGroupResponseSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description:
        ' The name of the label group that you have created. Data in this field will be retained for service usage. Follow best practices for the security of your data. ',
    }),
    LabelGroupArn: LabelGroupArnSchema.exactOptional().openapi({
      description: ' The ARN of the label group that you have created. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateLabelGroupResponse')

const FaultCodesSchema = z.array(FaultCodeSchema).min(0).max(50).openapi('FaultCodes')

const CreateLabelGroupRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description:
        '<p> Names a group of labels.</p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data. </p>',
    }),
    FaultCodes: FaultCodesSchema.exactOptional().openapi({
      description:
        '<p> The acceptable fault codes (indicating the type of anomaly associated with the label) that can be used with this label group.</p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        ' A unique identifier for the request to create a label group. If you do not set the client request token, Lookout for Equipment generates one. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description:
        '<p> Tags that provide metadata about the label group you are creating. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
  })
  .openapi({ required: ['LabelGroupName', 'ClientToken'], title: 'CreateLabelGroupRequest' })
  .openapi('CreateLabelGroupRequest')

const ModelArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\-]*:[0-9]{12}:model\/.+/)
  .min(20)
  .max(2048)
  .openapi('ModelArn')

const ModelStatusSchema = z.enum(['IN_PROGRESS', 'SUCCESS', 'FAILED']).openapi('ModelStatus')

const CreateModelResponseSchema = z
  .object({
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the model being created. ',
    }),
    Status: ModelStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the <code>CreateModel</code> operation. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateModelResponse')

const DatasetIdentifierSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('DatasetIdentifier')

const LabelsS3InputConfigurationSchema = z
  .object({
    Bucket: S3BucketSchema.openapi({
      description: 'The name of the S3 bucket holding the label data. ',
    }),
    Prefix: S3PrefixSchema.exactOptional().openapi({
      description: ' The prefix for the S3 bucket used for the label data. ',
    }),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'The location information (prefix and bucket name) for the s3 location being used for label data. ',
  })
  .openapi('LabelsS3InputConfiguration')

const LabelsInputConfigurationSchema = z
  .object({
    S3InputConfiguration: LabelsS3InputConfigurationSchema.exactOptional().openapi({
      description: 'Contains location information for the S3 location being used for label data. ',
    }),
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The name of the label group to be used for label data. ',
    }),
  })
  .openapi({
    description:
      'Contains the configuration information for the S3 location being used to hold label data. ',
    required: [],
  })
  .openapi('LabelsInputConfiguration')

const TargetSamplingRateSchema = z
  .enum([
    'PT1S',
    'PT5S',
    'PT10S',
    'PT15S',
    'PT30S',
    'PT1M',
    'PT5M',
    'PT10M',
    'PT15M',
    'PT30M',
    'PT1H',
  ])
  .openapi('TargetSamplingRate')

const DataPreProcessingConfigurationSchema = z
  .object({
    TargetSamplingRate: TargetSamplingRateSchema.exactOptional().openapi({
      description:
        '<p>The sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>',
    }),
  })
  .openapi({
    description:
      '<p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>',
    required: [],
  })
  .openapi('DataPreProcessingConfiguration')

const OffConditionSchema = z.string().min(1).max(2048).openapi('OffCondition')

const CreateModelRequestSchema = z
  .object({
    ModelName: ModelNameSchema.openapi({ description: 'The name for the ML model to be created.' }),
    DatasetName: DatasetIdentifierSchema.openapi({
      description: 'The name of the dataset for the ML model being created. ',
    }),
    DatasetSchema: DatasetSchemaSchema.exactOptional().openapi({
      description: 'The data schema for the ML model being created. ',
    }),
    LabelsInputConfiguration: LabelsInputConfigurationSchema.exactOptional().openapi({
      description:
        "The input configuration for the labels being used for the ML model that's being created. ",
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        'A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one. ',
    }),
    TrainingDataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the time reference in the dataset that should be used to begin the subset of training data for the ML model. ',
    }),
    TrainingDataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the time reference in the dataset that should be used to end the subset of training data for the ML model. ',
    }),
    EvaluationDataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the time reference in the dataset that should be used to begin the subset of evaluation data for the ML model. ',
    }),
    EvaluationDataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference in the dataset that should be used to end the subset of evaluation data for the ML model. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the ML model. ',
    }),
    DataPreProcessingConfiguration: DataPreProcessingConfigurationSchema.exactOptional().openapi({
      description:
        '<p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>',
    }),
    ServerSideKmsKeyId: NameOrArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: ' Any tags associated with the ML model being created. ',
    }),
    OffCondition: OffConditionSchema.exactOptional().openapi({
      description:
        'Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.',
    }),
  })
  .openapi({ required: ['ModelName', 'DatasetName', 'ClientToken'], title: 'CreateModelRequest' })
  .openapi('CreateModelRequest')

const DeleteDatasetRequestSchema = z
  .object({
    DatasetName: DatasetIdentifierSchema.openapi({
      description: 'The name of the dataset to be deleted. ',
    }),
  })
  .openapi({ required: ['DatasetName'], title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const InferenceSchedulerIdentifierSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('InferenceSchedulerIdentifier')

const DeleteInferenceSchedulerRequestSchema = z
  .object({
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler to be deleted. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'DeleteInferenceSchedulerRequest' })
  .openapi('DeleteInferenceSchedulerRequest')

const DeleteLabelRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description:
        ' The name of the label group that contains the label that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data. ',
    }),
    LabelId: LabelIdSchema.openapi({
      description: ' The ID of the label that you want to delete. ',
    }),
  })
  .openapi({ required: ['LabelGroupName', 'LabelId'], title: 'DeleteLabelRequest' })
  .openapi('DeleteLabelRequest')

const DeleteLabelGroupRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description:
        ' The name of the label group that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data. ',
    }),
  })
  .openapi({ required: ['LabelGroupName'], title: 'DeleteLabelGroupRequest' })
  .openapi('DeleteLabelGroupRequest')

const DeleteModelRequestSchema = z
  .object({
    ModelName: ModelNameSchema.openapi({ description: 'The name of the ML model to be deleted. ' }),
  })
  .openapi({ required: ['ModelName'], title: 'DeleteModelRequest' })
  .openapi('DeleteModelRequest')

const IngestionJobIdSchema = z
  .string()
  .regex(/[A-Fa-f0-9]{0,32}/)
  .max(32)
  .openapi('IngestionJobId')

const KeyPatternSchema = z.string().min(1).max(2048).openapi('KeyPattern')

const IngestionS3InputConfigurationSchema = z
  .object({
    Bucket: S3BucketSchema.openapi({
      description: 'The name of the S3 bucket used for the input data for the data ingestion. ',
    }),
    Prefix: S3PrefixSchema.exactOptional().openapi({
      description:
        'The prefix for the S3 location being used for the input data for the data ingestion. ',
    }),
    KeyPattern: KeyPatternSchema.exactOptional().openapi({
      description:
        ' Pattern for matching the Amazon S3 files which will be used for ingestion. If no KeyPattern is provided, we will use the default hierarchy file structure, which is same as KeyPattern {prefix}/{component_name}/* ',
    }),
  })
  .openapi({
    required: ['Bucket'],
    description:
      ' Specifies S3 configuration information for the input data for the data ingestion job. ',
  })
  .openapi('IngestionS3InputConfiguration')

const IngestionInputConfigurationSchema = z
  .object({
    S3InputConfiguration: IngestionS3InputConfigurationSchema.openapi({
      description:
        'The location information for the S3 bucket used for input data for the data ingestion. ',
    }),
  })
  .openapi({
    required: ['S3InputConfiguration'],
    description:
      ' Specifies configuration information for the input data for the data ingestion job, including input data S3 location. ',
  })
  .openapi('IngestionInputConfiguration')

const IngestionJobStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCESS', 'FAILED'])
  .openapi('IngestionJobStatus')

const BoundedLengthStringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,5000}/u)
  .min(1)
  .max(5000)
  .openapi('BoundedLengthString')

const IntegerSchema = z.int().openapi('Integer')

const MissingCompleteSensorDataSchema = z
  .object({
    AffectedSensorCount: IntegerSchema.openapi({
      description: ' Indicates the number of sensors that have data missing completely. ',
    }),
  })
  .openapi({
    required: ['AffectedSensorCount'],
    description:
      ' Entity that comprises information on sensors that have sensor data completely missing. ',
  })
  .openapi('MissingCompleteSensorData')

const SensorsWithShortDateRangeSchema = z
  .object({
    AffectedSensorCount: IntegerSchema.openapi({
      description: ' Indicates the number of sensors that have less than 90 days of data. ',
    }),
  })
  .openapi({
    required: ['AffectedSensorCount'],
    description: ' Entity that comprises information on sensors that have shorter date range. ',
  })
  .openapi('SensorsWithShortDateRange')

const InsufficientSensorDataSchema = z
  .object({
    MissingCompleteSensorData: MissingCompleteSensorDataSchema.openapi({
      description:
        ' Parameter that describes the total number of sensors that have data completely missing for it. ',
    }),
    SensorsWithShortDateRange: SensorsWithShortDateRangeSchema.openapi({
      description:
        ' Parameter that describes the total number of sensors that have a short date range of less than 90 days of data overall. ',
    }),
  })
  .openapi({
    required: ['MissingCompleteSensorData', 'SensorsWithShortDateRange'],
    description:
      ' Entity that comprises aggregated information on sensors having insufficient data. ',
  })
  .openapi('InsufficientSensorData')

const MissingSensorDataSchema = z
  .object({
    AffectedSensorCount: IntegerSchema.openapi({
      description: ' Indicates the number of sensors that have atleast some data missing. ',
    }),
    TotalNumberOfMissingValues: IntegerSchema.openapi({
      description: ' Indicates the total number of missing values across all the sensors. ',
    }),
  })
  .openapi({
    required: ['AffectedSensorCount', 'TotalNumberOfMissingValues'],
    description: ' Entity that comprises aggregated information on sensors having missing data. ',
  })
  .openapi('MissingSensorData')

const InvalidSensorDataSchema = z
  .object({
    AffectedSensorCount: IntegerSchema.openapi({
      description: ' Indicates the number of sensors that have at least some invalid values. ',
    }),
    TotalNumberOfInvalidValues: IntegerSchema.openapi({
      description: ' Indicates the total number of invalid values across all the sensors. ',
    }),
  })
  .openapi({
    required: ['AffectedSensorCount', 'TotalNumberOfInvalidValues'],
    description:
      ' Entity that comprises aggregated information on sensors having insufficient data. ',
  })
  .openapi('InvalidSensorData')

const UnsupportedTimestampsSchema = z
  .object({
    TotalNumberOfUnsupportedTimestamps: IntegerSchema.openapi({
      description:
        ' Indicates the total number of unsupported timestamps across the ingested data. ',
    }),
  })
  .openapi({
    required: ['TotalNumberOfUnsupportedTimestamps'],
    description:
      ' Entity that comprises information abount unsupported timestamps in the dataset. ',
  })
  .openapi('UnsupportedTimestamps')

const DuplicateTimestampsSchema = z
  .object({
    TotalNumberOfDuplicateTimestamps: IntegerSchema.openapi({
      description: ' Indicates the total number of duplicate timestamps. ',
    }),
  })
  .openapi({
    required: ['TotalNumberOfDuplicateTimestamps'],
    description: ' Entity that comprises information abount duplicate timestamps in the dataset. ',
  })
  .openapi('DuplicateTimestamps')

const DataQualitySummarySchema = z
  .object({
    InsufficientSensorData: InsufficientSensorDataSchema.openapi({
      description:
        ' Parameter that gives information about insufficient data for sensors in the dataset. This includes information about those sensors that have complete data missing and those with a short date range. ',
    }),
    MissingSensorData: MissingSensorDataSchema.openapi({
      description:
        ' Parameter that gives information about data that is missing over all the sensors in the input data. ',
    }),
    InvalidSensorData: InvalidSensorDataSchema.openapi({
      description:
        ' Parameter that gives information about data that is invalid over all the sensors in the input data. ',
    }),
    UnsupportedTimestamps: UnsupportedTimestampsSchema.openapi({
      description:
        ' Parameter that gives information about unsupported timestamps in the input data. ',
    }),
    DuplicateTimestamps: DuplicateTimestampsSchema.openapi({
      description:
        ' Parameter that gives information about duplicate timestamps in the input data. ',
    }),
  })
  .openapi({
    required: [
      'InsufficientSensorData',
      'MissingSensorData',
      'InvalidSensorData',
      'UnsupportedTimestamps',
      'DuplicateTimestamps',
    ],
    description:
      ' DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps. ',
  })
  .openapi('DataQualitySummary')

const S3KeySchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,1024}[^\/]$/u)
  .min(1)
  .max(1024)
  .openapi('S3Key')

const S3ObjectSchema = z
  .object({
    Bucket: S3BucketSchema.openapi({ description: 'The name of the specific S3 bucket. ' }),
    Key: S3KeySchema.openapi({
      description:
        'The AWS Key Management Service (AWS KMS) key being used to encrypt the S3 object. Without this key, data in the bucket is not accessible. ',
    }),
  })
  .openapi({
    required: ['Bucket', 'Key'],
    description: 'Contains information about an S3 bucket. ',
  })
  .openapi('S3Object')

const ListOfDiscardedFilesSchema = z.array(S3ObjectSchema).min(0).openapi('ListOfDiscardedFiles')

const IngestedFilesSummarySchema = z
  .object({
    TotalNumberOfFiles: IntegerSchema.openapi({
      description: 'Indicates the total number of files that were submitted for ingestion.',
    }),
    IngestedNumberOfFiles: IntegerSchema.openapi({
      description: 'Indicates the number of files that were successfully ingested.',
    }),
    DiscardedFiles: ListOfDiscardedFilesSchema.exactOptional().openapi({
      description:
        'Indicates the number of files that were discarded. A file could be discarded because its format is invalid (for example, a jpg or pdf) or not readable.',
    }),
  })
  .openapi({
    required: ['TotalNumberOfFiles', 'IngestedNumberOfFiles'],
    description:
      'Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.',
  })
  .openapi('IngestedFilesSummary')

const DataSizeInBytesSchema = z.int().min(0).openapi('DataSizeInBytes')

const DescribeDataIngestionJobResponseSchema = z
  .object({
    JobId: IngestionJobIdSchema.exactOptional().openapi({
      description: 'Indicates the job ID of the data ingestion job. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job. ',
    }),
    IngestionInputConfiguration: IngestionInputConfigurationSchema.exactOptional().openapi({
      description:
        'Specifies the S3 location configuration for the data input for the data ingestion job. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of an IAM role with permission to access the data source being ingested. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'The time at which the data ingestion job was created. ',
    }),
    Status: IngestionJobStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the <code>DataIngestionJob</code> operation. ',
    }),
    FailedReason: BoundedLengthStringSchema.exactOptional().openapi({
      description: 'Specifies the reason for failure when a data ingestion job has failed. ',
    }),
    DataQualitySummary: DataQualitySummarySchema.exactOptional().openapi({
      description:
        ' Gives statistics about a completed ingestion job. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps. ',
    }),
    IngestedFilesSummary: IngestedFilesSummarySchema.exactOptional(),
    StatusDetail: BoundedLengthStringSchema.exactOptional().openapi({
      description:
        ' Provides details about status of the ingestion job that is currently in progress. ',
    }),
    IngestedDataSize: DataSizeInBytesSchema.exactOptional().openapi({
      description: ' Indicates the size of the ingested dataset. ',
    }),
    DataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the earliest timestamp corresponding to data that was successfully ingested during this specific ingestion job. ',
    }),
    DataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the latest timestamp corresponding to data that was successfully ingested during this specific ingestion job. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDataIngestionJobResponse')

const DescribeDataIngestionJobRequestSchema = z
  .object({
    JobId: IngestionJobIdSchema.openapi({ description: 'The job ID of the data ingestion job. ' }),
  })
  .openapi({ required: ['JobId'], title: 'DescribeDataIngestionJobRequest' })
  .openapi('DescribeDataIngestionJobRequest')

const KmsKeyArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:kms:[a-z0-9\-]*:\d{12}:[\w\-\/]+/)
  .min(1)
  .max(1024)
  .openapi('KmsKeyArn')

const DescribeDatasetResponseSchema = z
  .object({
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset being described. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset being described. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'Specifies the time the dataset was created in Lookout for Equipment. ',
    }),
    LastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: 'Specifies the time the dataset was last updated, if it was. ',
    }),
    Status: DatasetStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the dataset. ',
    }),
    Schema: InlineDataSchemaSchema.exactOptional().openapi({
      description:
        'A JSON description of the data that is in each time series dataset, including names, column names, and data types. ',
    }),
    ServerSideKmsKeyId: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment. ',
    }),
    IngestionInputConfiguration: IngestionInputConfigurationSchema.exactOptional().openapi({
      description:
        'Specifies the S3 location configuration for the data input for the data ingestion job. ',
    }),
    DataQualitySummary: DataQualitySummarySchema.exactOptional().openapi({
      description:
        ' Gives statistics associated with the given dataset for the latest successful associated ingestion job id. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps. ',
    }),
    IngestedFilesSummary: IngestedFilesSummarySchema.exactOptional().openapi({
      description:
        ' IngestedFilesSummary associated with the given dataset for the latest successful associated ingestion job id. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of the IAM role that you are using for this the data ingestion job. ',
    }),
    DataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the earliest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset. ',
    }),
    DataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the latest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeDatasetResponse')

const DescribeDatasetRequestSchema = z
  .object({
    DatasetName: DatasetIdentifierSchema.openapi({
      description: 'The name of the dataset to be described. ',
    }),
  })
  .openapi({ required: ['DatasetName'], title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const LatestInferenceResultSchema = z.enum(['ANOMALOUS', 'NORMAL']).openapi('LatestInferenceResult')

const DescribeInferenceSchedulerResponseSchema = z
  .object({
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the ML model of the inference scheduler being described. ',
    }),
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model of the inference scheduler being described. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler being described. ',
    }),
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the inference scheduler being described. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the inference scheduler. ',
    }),
    DataDelayOffsetInMinutes: DataDelayOffsetInMinutesSchema.exactOptional().openapi({
      description:
        " A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.",
    }),
    DataUploadFrequency: DataUploadFrequencySchema.exactOptional().openapi({
      description:
        'Specifies how often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'Specifies the time at which the inference scheduler was created. ',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      description:
        'Specifies the time at which the inference scheduler was last updated, if it was. ',
    }),
    DataInputConfiguration: InferenceInputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. ',
    }),
    DataOutputConfiguration: InferenceOutputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies information for the output results for the inference scheduler, including the output S3 location. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler being described. ',
    }),
    ServerSideKmsKeyId: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment. ',
    }),
    LatestInferenceResult: LatestInferenceResultSchema.exactOptional().openapi({
      description:
        'Indicates whether the latest execution for the inference scheduler was Anomalous (anomalous events found) or Normal (no anomalous events found).',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeInferenceSchedulerResponse')

const DescribeInferenceSchedulerRequestSchema = z
  .object({
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler being described. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'DescribeInferenceSchedulerRequest' })
  .openapi('DescribeInferenceSchedulerRequest')

const DescribeLabelResponseSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The name of the requested label group. ',
    }),
    LabelGroupArn: LabelGroupArnSchema.exactOptional().openapi({
      description: ' The ARN of the requested label group. ',
    }),
    LabelId: LabelIdSchema.exactOptional().openapi({
      description: ' The ID of the requested label. ',
    }),
    StartTime: TimestampSchema.exactOptional().openapi({
      description: ' The start time of the requested label. ',
    }),
    EndTime: TimestampSchema.exactOptional().openapi({
      description: ' The end time of the requested label. ',
    }),
    Rating: LabelRatingSchema.exactOptional().openapi({
      description: ' Indicates whether a labeled event represents an anomaly. ',
    }),
    FaultCode: FaultCodeSchema.exactOptional().openapi({
      description:
        '<p> Indicates the type of anomaly associated with the label. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    Notes: CommentsSchema.exactOptional().openapi({
      description:
        '<p>Metadata providing additional information about the label.</p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    Equipment: EquipmentSchema.exactOptional().openapi({
      description: ' Indicates that a label pertains to a particular piece of equipment. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label was created. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeLabelResponse')

const DescribeLabelRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description: ' Returns the name of the group containing the label. ',
    }),
    LabelId: LabelIdSchema.openapi({ description: ' Returns the ID of the label. ' }),
  })
  .openapi({ required: ['LabelGroupName', 'LabelId'], title: 'DescribeLabelRequest' })
  .openapi('DescribeLabelRequest')

const DescribeLabelGroupResponseSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The name of the label group. ',
    }),
    LabelGroupArn: LabelGroupArnSchema.exactOptional().openapi({
      description: ' The ARN of the label group. ',
    }),
    FaultCodes: FaultCodesSchema.exactOptional().openapi({
      description:
        ' Codes indicating the type of anomaly associated with the labels in the lagbel group. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label group was created. ',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label group was updated. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeLabelGroupResponse')

const DescribeLabelGroupRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description: ' Returns the name of the label group. ',
    }),
  })
  .openapi({ required: ['LabelGroupName'], title: 'DescribeLabelGroupRequest' })
  .openapi('DescribeLabelGroupRequest')

const ModelMetricsSchema = z.string().min(1).max(50000).openapi('ModelMetrics')

const DescribeModelResponseSchema = z
  .object({
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model being described. ',
    }),
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the ML model being described. ',
    }),
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset being used by the ML being described. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resouce Name (ARN) of the dataset used to create the ML model being described. ',
    }),
    Schema: InlineDataSchemaSchema.exactOptional().openapi({
      description:
        'A JSON description of the data that is in each time series dataset, including names, column names, and data types. ',
    }),
    LabelsInputConfiguration: LabelsInputConfigurationSchema.exactOptional().openapi({
      description:
        'Specifies configuration information about the labels input, including its S3 location. ',
    }),
    TrainingDataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference in the dataset that was used to begin the subset of training data for the ML model. ',
    }),
    TrainingDataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference in the dataset that was used to end the subset of training data for the ML model. ',
    }),
    EvaluationDataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference in the dataset that was used to begin the subset of evaluation data for the ML model. ',
    }),
    EvaluationDataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference in the dataset that was used to end the subset of evaluation data for the ML model. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of a role with permission to access the data source for the ML model being described. ',
    }),
    DataPreProcessingConfiguration: DataPreProcessingConfigurationSchema.exactOptional().openapi({
      description:
        '<p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>',
    }),
    Status: ModelStatusSchema.exactOptional().openapi({
      description:
        'Specifies the current status of the model being described. Status describes the status of the most recent action of the model. ',
    }),
    TrainingExecutionStartTime: TimestampSchema.exactOptional().openapi({
      description: 'Indicates the time at which the training of the ML model began. ',
    }),
    TrainingExecutionEndTime: TimestampSchema.exactOptional().openapi({
      description: 'Indicates the time at which the training of the ML model was completed. ',
    }),
    FailedReason: BoundedLengthStringSchema.exactOptional().openapi({
      description:
        'If the training of the ML model failed, this indicates the reason for that failure. ',
    }),
    ModelMetrics: ModelMetricsSchema.exactOptional().openapi({
      description:
        "The Model Metrics show an aggregated summary of the model's performance within the evaluation time range. This is the JSON content of the metrics created when evaluating the model. ",
    }),
    LastUpdatedTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the last time the ML model was updated. The type of update is not specified. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'Indicates the time and date at which the ML model was created. ',
    }),
    ServerSideKmsKeyId: KmsKeyArnSchema.exactOptional().openapi({
      description:
        'Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment. ',
    }),
    OffCondition: OffConditionSchema.exactOptional().openapi({
      description:
        'Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeModelResponse')

const DescribeModelRequestSchema = z
  .object({
    ModelName: ModelNameSchema.openapi({
      description: 'The name of the ML model to be described. ',
    }),
  })
  .openapi({ required: ['ModelName'], title: 'DescribeModelRequest' })
  .openapi('DescribeModelRequest')

const NextTokenSchema = z
  .string()
  .regex(/\p{ASCII}{0,8192}/u)
  .max(8192)
  .openapi('NextToken')

const DataIngestionJobSummarySchema = z
  .object({
    JobId: IngestionJobIdSchema.exactOptional().openapi({
      description: 'Indicates the job ID of the data ingestion job. ',
    }),
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset used for the data ingestion job. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the dataset used in the data ingestion job. ',
    }),
    IngestionInputConfiguration: IngestionInputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies information for the input data for the data inference job, including data Amazon S3 location parameters. ',
    }),
    Status: IngestionJobStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the data ingestion job. ',
    }),
  })
  .openapi({
    description:
      'Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status. ',
    required: [],
  })
  .openapi('DataIngestionJobSummary')

const DataIngestionJobSummariesSchema = z
  .array(DataIngestionJobSummarySchema)
  .openapi('DataIngestionJobSummaries')

const ListDataIngestionJobsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of data ingestion jobs. ',
    }),
    DataIngestionJobSummaries: DataIngestionJobSummariesSchema.exactOptional().openapi({
      description:
        'Specifies information about the specific data ingestion job, including dataset name and status. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDataIngestionJobsResponse')

const MaxResultsSchema = z.int().min(1).max(500).openapi('MaxResults')

const ListDataIngestionJobsRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset being used for the data ingestion job. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of data ingestion jobs. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of data ingestion jobs to list. ',
    }),
    Status: IngestionJobStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the data ingestion job. ',
    }),
  })
  .openapi({ title: 'ListDataIngestionJobsRequest', required: [] })
  .openapi('ListDataIngestionJobsRequest')

const DatasetSummarySchema = z
  .object({
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the specified dataset. ',
    }),
    Status: DatasetStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the dataset. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'The time at which the dataset was created in Amazon Lookout for Equipment. ',
    }),
  })
  .openapi({
    description:
      'Contains information about the specific data set, including name, ARN, and status. ',
    required: [],
  })
  .openapi('DatasetSummary')

const DatasetSummariesSchema = z.array(DatasetSummarySchema).openapi('DatasetSummaries')

const ListDatasetsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of datasets. ',
    }),
    DatasetSummaries: DatasetSummariesSchema.exactOptional().openapi({
      description:
        'Provides information about the specified dataset, including creation time, dataset ARN, and status. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDatasetsResponse')

const ListDatasetsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of datasets. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of datasets to list. ',
    }),
    DatasetNameBeginsWith: DatasetNameSchema.exactOptional().openapi({
      description: 'The beginning of the name of the datasets to be listed. ',
    }),
  })
  .openapi({ title: 'ListDatasetsRequest', required: [] })
  .openapi('ListDatasetsRequest')

const EventDurationInSecondsSchema = z.int().min(0).openapi('EventDurationInSeconds')

const InferenceEventSummarySchema = z
  .object({
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of the inference scheduler being used for the inference event. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler being used for the inference events. ',
    }),
    EventStartTime: TimestampSchema.exactOptional().openapi({
      description: 'Indicates the starting time of an inference event. ',
    }),
    EventEndTime: TimestampSchema.exactOptional().openapi({
      description: 'Indicates the ending time of an inference event. ',
    }),
    Diagnostics: ModelMetricsSchema.exactOptional().openapi({
      description:
        ' An array which specifies the names and values of all sensors contributing to an inference event.',
    }),
    EventDurationInSeconds: EventDurationInSecondsSchema.exactOptional().openapi({
      description: ' Indicates the size of an inference event in seconds. ',
    }),
  })
  .openapi({
    description:
      'Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on.',
    required: [],
  })
  .openapi('InferenceEventSummary')

const InferenceEventSummariesSchema = z
  .array(InferenceEventSummarySchema)
  .openapi('InferenceEventSummaries')

const ListInferenceEventsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of inference executions. ',
    }),
    InferenceEventSummaries: InferenceEventSummariesSchema.exactOptional().openapi({
      description:
        'Provides an array of information about the individual inference events returned from the <code>ListInferenceEvents</code> operation, including scheduler used, event start time, event end time, diagnostics, and so on. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListInferenceEventsResponse')

const ListInferenceEventsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of inference events.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'Specifies the maximum number of inference events to list. ',
    }),
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler for the inference events listed. ',
    }),
    IntervalStartTime: TimestampSchema.openapi({
      description:
        ' Lookout for Equipment will return all the inference events with an end time equal to or greater than the start time given.',
    }),
    IntervalEndTime: TimestampSchema.openapi({
      description:
        'Returns all the inference events with an end start time equal to or greater than less than the end time given',
    }),
  })
  .openapi({
    required: ['InferenceSchedulerName', 'IntervalStartTime', 'IntervalEndTime'],
    title: 'ListInferenceEventsRequest',
  })
  .openapi('ListInferenceEventsRequest')

const InferenceExecutionStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCESS', 'FAILED'])
  .openapi('InferenceExecutionStatus')

const InferenceExecutionSummarySchema = z
  .object({
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model being used for the inference execution. ',
    }),
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the ML model used for the inference execution. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler being used for the inference execution. ',
    }),
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of the inference scheduler being used for the inference execution. ',
    }),
    ScheduledStartTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the start time at which the inference scheduler began the specific inference execution. ',
    }),
    DataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the time reference in the dataset at which the inference execution began. ',
    }),
    DataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        'Indicates the time reference in the dataset at which the inference execution stopped. ',
    }),
    DataInputConfiguration: InferenceInputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location. ',
    }),
    DataOutputConfiguration: InferenceOutputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies configuration information for the output results from for the inference execution, including the output Amazon S3 location. ',
    }),
    CustomerResultObject: S3ObjectSchema.exactOptional().openapi({ description: ' ' }),
    Status: InferenceExecutionStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the inference execution. ',
    }),
    FailedReason: BoundedLengthStringSchema.exactOptional().openapi({
      description: ' Specifies the reason for failure when an inference execution has failed. ',
    }),
  })
  .openapi({
    description:
      'Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on. ',
    required: [],
  })
  .openapi('InferenceExecutionSummary')

const InferenceExecutionSummariesSchema = z
  .array(InferenceExecutionSummarySchema)
  .openapi('InferenceExecutionSummaries')

const ListInferenceExecutionsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of inference executions. ',
    }),
    InferenceExecutionSummaries: InferenceExecutionSummariesSchema.exactOptional().openapi({
      description:
        'Provides an array of information about the individual inference executions returned from the <code>ListInferenceExecutions</code> operation, including model used, inference scheduler, data configuration, and so on. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListInferenceExecutionsResponse')

const ListInferenceExecutionsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of inference executions.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'Specifies the maximum number of inference executions to list. ',
    }),
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler for the inference execution listed. ',
    }),
    DataStartTimeAfter: TimestampSchema.exactOptional().openapi({
      description:
        'The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the inference execution. ',
    }),
    DataEndTimeBefore: TimestampSchema.exactOptional().openapi({
      description:
        'The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the inference execution. ',
    }),
    Status: InferenceExecutionStatusSchema.exactOptional().openapi({
      description: 'The status of the inference execution. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'ListInferenceExecutionsRequest' })
  .openapi('ListInferenceExecutionsRequest')

const InferenceSchedulerSummarySchema = z
  .object({
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model used for the inference scheduler. ',
    }),
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of the ML model used by the inference scheduler. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler. ',
    }),
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the inference scheduler. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the inference scheduler. ',
    }),
    DataDelayOffsetInMinutes: DataDelayOffsetInMinutesSchema.exactOptional().openapi({
      description:
        "A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if an offset delay time of five minutes was selected, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data. ",
    }),
    DataUploadFrequency: DataUploadFrequencySchema.exactOptional().openapi({
      description:
        'How often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes. ',
    }),
    LatestInferenceResult: LatestInferenceResultSchema.exactOptional().openapi({
      description:
        'Indicates whether the latest execution for the inference scheduler was Anomalous (anomalous events found) or Normal (no anomalous events found).',
    }),
  })
  .openapi({
    description:
      'Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. ',
    required: [],
  })
  .openapi('InferenceSchedulerSummary')

const InferenceSchedulerSummariesSchema = z
  .array(InferenceSchedulerSummarySchema)
  .openapi('InferenceSchedulerSummaries')

const ListInferenceSchedulersResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of inference schedulers. ',
    }),
    InferenceSchedulerSummaries: InferenceSchedulerSummariesSchema.exactOptional().openapi({
      description:
        'Provides information about the specified inference scheduler, including data upload frequency, model name and ARN, and status. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListInferenceSchedulersResponse')

const ListInferenceSchedulersRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of inference schedulers. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of inference schedulers to list. ',
    }),
    InferenceSchedulerNameBeginsWith: InferenceSchedulerIdentifierSchema.exactOptional().openapi({
      description: 'The beginning of the name of the inference schedulers to be listed. ',
    }),
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model used by the inference scheduler to be listed. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Specifies the current status of the inference schedulers to list.',
    }),
  })
  .openapi({ title: 'ListInferenceSchedulersRequest', required: [] })
  .openapi('ListInferenceSchedulersRequest')

const LabelGroupSummarySchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The name of the label group. ',
    }),
    LabelGroupArn: LabelGroupArnSchema.exactOptional().openapi({
      description: ' The ARN of the label group. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label group was created. ',
    }),
    UpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label group was updated. ',
    }),
  })
  .openapi({ description: ' Contains information about the label group. ', required: [] })
  .openapi('LabelGroupSummary')

const LabelGroupSummariesSchema = z.array(LabelGroupSummarySchema).openapi('LabelGroupSummaries')

const ListLabelGroupsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of label groups. ',
    }),
    LabelGroupSummaries: LabelGroupSummariesSchema.exactOptional().openapi({
      description: ' A summary of the label groups. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLabelGroupsResponse')

const ListLabelGroupsRequestSchema = z
  .object({
    LabelGroupNameBeginsWith: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The beginning of the name of the label groups to be listed. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of label groups. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of label groups to list. ',
    }),
  })
  .openapi({ title: 'ListLabelGroupsRequest', required: [] })
  .openapi('ListLabelGroupsRequest')

const LabelSummarySchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.exactOptional().openapi({
      description: ' The name of the label group. ',
    }),
    LabelId: LabelIdSchema.exactOptional().openapi({ description: ' The ID of the label. ' }),
    LabelGroupArn: LabelGroupArnSchema.exactOptional().openapi({
      description: ' The ARN of the label group. ',
    }),
    StartTime: TimestampSchema.exactOptional().openapi({
      description: ' The timestamp indicating the start of the label. ',
    }),
    EndTime: TimestampSchema.exactOptional().openapi({
      description: ' The timestamp indicating the end of the label. ',
    }),
    Rating: LabelRatingSchema.exactOptional().openapi({
      description: ' Indicates whether a labeled event represents an anomaly. ',
    }),
    FaultCode: FaultCodeSchema.exactOptional().openapi({
      description:
        '<p> Indicates the type of anomaly associated with the label. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
    Equipment: EquipmentSchema.exactOptional().openapi({
      description: ' Indicates that a label pertains to a particular piece of equipment. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time at which the label was created. ',
    }),
  })
  .openapi({ description: ' Information about the label. ', required: [] })
  .openapi('LabelSummary')

const LabelSummariesSchema = z.array(LabelSummarySchema).openapi('LabelSummaries')

const ListLabelsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of datasets. ',
    }),
    LabelSummaries: LabelSummariesSchema.exactOptional().openapi({
      description: ' A summary of the items in the label group. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLabelsResponse')

const ListLabelsRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description: ' Retruns the name of the label group. ',
    }),
    IntervalStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Returns all the labels with a end time equal to or later than the start time given. ',
    }),
    IntervalEndTime: TimestampSchema.exactOptional().openapi({
      description: ' Returns all labels with a start time earlier than the end time given. ',
    }),
    FaultCode: FaultCodeSchema.exactOptional().openapi({
      description: ' Returns labels with a particular fault code. ',
    }),
    Equipment: EquipmentSchema.exactOptional().openapi({
      description: ' Lists the labels that pertain to a particular piece of equipment. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of label groups. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of labels to list. ',
    }),
  })
  .openapi({ required: ['LabelGroupName'], title: 'ListLabelsRequest' })
  .openapi('ListLabelsRequest')

const ModelSummarySchema = z
  .object({
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model. ',
    }),
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the ML model. ',
    }),
    DatasetName: DatasetNameSchema.exactOptional().openapi({
      description: 'The name of the dataset being used for the ML model. ',
    }),
    DatasetArn: DatasetArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the dataset used to create the model. ',
    }),
    Status: ModelStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the ML model. ',
    }),
    CreatedAt: TimestampSchema.exactOptional().openapi({
      description: 'The time at which the specific model was created. ',
    }),
  })
  .openapi({
    description:
      'Provides information about the specified ML model, including dataset and model names and ARNs, as well as status. ',
    required: [],
  })
  .openapi('ModelSummary')

const ModelSummariesSchema = z.array(ModelSummarySchema).openapi('ModelSummaries')

const ListModelsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of ML models. ',
    }),
    ModelSummaries: ModelSummariesSchema.exactOptional().openapi({
      description:
        'Provides information on the specified model, including created time, model and dataset ARNs, and status. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListModelsResponse')

const ListModelsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' An opaque pagination token indicating where to continue the listing of ML models. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: ' Specifies the maximum number of ML models to list. ',
    }),
    Status: ModelStatusSchema.exactOptional().openapi({
      description: 'The status of the ML model. ',
    }),
    ModelNameBeginsWith: ModelNameSchema.exactOptional().openapi({
      description: 'The beginning of the name of the ML models being listed. ',
    }),
    DatasetNameBeginsWith: DatasetNameSchema.exactOptional().openapi({
      description: 'The beginning of the name of the dataset of the ML models to be listed. ',
    }),
  })
  .openapi({ title: 'ListModelsRequest', required: [] })
  .openapi('ListModelsRequest')

const ComponentNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z._\-]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('ComponentName')

const SensorNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z:#$.\-_]{1,200}$/)
  .min(1)
  .max(200)
  .openapi('SensorName')

const BooleanSchema = z.boolean().openapi('Boolean')

const FloatSchema = z.float32().openapi('Float')

const CountPercentSchema = z
  .object({
    Count: IntegerSchema.openapi({
      description: ' Indicates the count of occurences of the given statistic. ',
    }),
    Percentage: FloatSchema.openapi({
      description: ' Indicates the percentage of occurances of the given statistic. ',
    }),
  })
  .openapi({
    required: ['Count', 'Percentage'],
    description: ' Entity that comprises information of count and percentage. ',
  })
  .openapi('CountPercent')

const StatisticalIssueStatusSchema = z
  .enum(['POTENTIAL_ISSUE_DETECTED', 'NO_ISSUE_DETECTED'])
  .openapi('StatisticalIssueStatus')

const CategoricalValuesSchema = z
  .object({
    Status: StatisticalIssueStatusSchema.openapi({
      description:
        ' Indicates whether there is a potential data issue related to categorical values. ',
    }),
    NumberOfCategory: IntegerSchema.exactOptional().openapi({
      description: ' Indicates the number of categories in the data. ',
    }),
  })
  .openapi({
    required: ['Status'],
    description: ' Entity that comprises information on categorical values in data. ',
  })
  .openapi('CategoricalValues')

const MultipleOperatingModesSchema = z
  .object({
    Status: StatisticalIssueStatusSchema.openapi({
      description:
        ' Indicates whether there is a potential data issue related to having multiple operating modes. ',
    }),
  })
  .openapi({
    required: ['Status'],
    description: ' Entity that comprises information on operating modes in data. ',
  })
  .openapi('MultipleOperatingModes')

const LargeTimestampGapsSchema = z
  .object({
    Status: StatisticalIssueStatusSchema.openapi({
      description:
        ' Indicates whether there is a potential data issue related to large gaps in timestamps. ',
    }),
    NumberOfLargeTimestampGaps: IntegerSchema.exactOptional().openapi({
      description: ' Indicates the number of large timestamp gaps, if there are any. ',
    }),
    MaxTimestampGapInDays: IntegerSchema.exactOptional().openapi({
      description: ' Indicates the size of the largest timestamp gap, in days. ',
    }),
  })
  .openapi({
    required: ['Status'],
    description:
      ' Entity that comprises information on large gaps between consecutive timestamps in data. ',
  })
  .openapi('LargeTimestampGaps')

const MonotonicitySchema = z.enum(['DECREASING', 'INCREASING', 'STATIC']).openapi('Monotonicity')

const MonotonicValuesSchema = z
  .object({
    Status: StatisticalIssueStatusSchema.openapi({
      description:
        ' Indicates whether there is a potential data issue related to having monotonic values. ',
    }),
    Monotonicity: MonotonicitySchema.exactOptional().openapi({
      description:
        ' Indicates the monotonicity of values. Can be INCREASING, DECREASING, or STATIC. ',
    }),
  })
  .openapi({
    required: ['Status'],
    description: ' Entity that comprises information on monotonic values in the data. ',
  })
  .openapi('MonotonicValues')

const SensorStatisticsSummarySchema = z
  .object({
    ComponentName: ComponentNameSchema.exactOptional().openapi({
      description:
        ' Name of the component to which the particular sensor belongs for which the statistics belong to. ',
    }),
    SensorName: SensorNameSchema.exactOptional().openapi({
      description: ' Name of the sensor that the statistics belong to. ',
    }),
    DataExists: BooleanSchema.exactOptional().openapi({
      description:
        ' Parameter that indicates whether data exists for the sensor that the statistics belong to. ',
    }),
    MissingValues: CountPercentSchema.exactOptional().openapi({
      description:
        ' Parameter that describes the total number of, and percentage of, values that are missing for the sensor that the statistics belong to. ',
    }),
    InvalidValues: CountPercentSchema.exactOptional().openapi({
      description:
        ' Parameter that describes the total number of, and percentage of, values that are invalid for the sensor that the statistics belong to. ',
    }),
    InvalidDateEntries: CountPercentSchema.exactOptional().openapi({
      description:
        ' Parameter that describes the total number of invalid date entries associated with the sensor that the statistics belong to. ',
    }),
    DuplicateTimestamps: CountPercentSchema.exactOptional().openapi({
      description:
        ' Parameter that describes the total number of duplicate timestamp records associated with the sensor that the statistics belong to. ',
    }),
    CategoricalValues: CategoricalValuesSchema.exactOptional().openapi({
      description:
        ' Parameter that describes potential risk about whether data associated with the sensor is categorical. ',
    }),
    MultipleOperatingModes: MultipleOperatingModesSchema.exactOptional().openapi({
      description:
        ' Parameter that describes potential risk about whether data associated with the sensor has more than one operating mode. ',
    }),
    LargeTimestampGaps: LargeTimestampGapsSchema.exactOptional().openapi({
      description:
        ' Parameter that describes potential risk about whether data associated with the sensor contains one or more large gaps between consecutive timestamps. ',
    }),
    MonotonicValues: MonotonicValuesSchema.exactOptional().openapi({
      description:
        ' Parameter that describes potential risk about whether data associated with the sensor is mostly monotonic. ',
    }),
    DataStartTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference to indicate the beginning of valid data associated with the sensor that the statistics belong to. ',
    }),
    DataEndTime: TimestampSchema.exactOptional().openapi({
      description:
        ' Indicates the time reference to indicate the end of valid data associated with the sensor that the statistics belong to. ',
    }),
  })
  .openapi({
    description:
      ' Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor. ',
    required: [],
  })
  .openapi('SensorStatisticsSummary')

const SensorStatisticsSummariesSchema = z
  .array(SensorStatisticsSummarySchema)
  .openapi('SensorStatisticsSummaries')

const ListSensorStatisticsResponseSchema = z
  .object({
    SensorStatisticsSummaries: SensorStatisticsSummariesSchema.exactOptional().openapi({
      description:
        'Provides ingestion-based statistics regarding the specified sensor with respect to various validation types, such as whether data exists, the number and percentage of missing values, and the number and percentage of duplicate timestamps. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of sensor statistics. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSensorStatisticsResponse')

const ListSensorStatisticsRequestSchema = z
  .object({
    DatasetName: DatasetNameSchema.openapi({
      description: ' The name of the dataset associated with the list of Sensor Statistics. ',
    }),
    IngestionJobId: IngestionJobIdSchema.exactOptional().openapi({
      description:
        ' The ingestion job id associated with the list of Sensor Statistics. To get sensor statistics for a particular ingestion job id, both dataset name and ingestion job id must be submitted as inputs. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'Specifies the maximum number of sensors for which to retrieve statistics. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An opaque pagination token indicating where to continue the listing of sensor statistics. ',
    }),
  })
  .openapi({ required: ['DatasetName'], title: 'ListSensorStatisticsRequest' })
  .openapi('ListSensorStatisticsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.exactOptional().openapi({
      description: ' Any tags associated with the resource. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceArnSchema = z.string().min(1).max(1011).openapi('AmazonResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is the focus of the <code>ListTagsForResource</code> operation. ',
    }),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartDataIngestionJobResponseSchema = z
  .object({
    JobId: IngestionJobIdSchema.exactOptional().openapi({
      description: 'Indicates the job ID of the data ingestion job. ',
    }),
    Status: IngestionJobStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the <code>StartDataIngestionJob</code> operation. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartDataIngestionJobResponse')

const StartDataIngestionJobRequestSchema = z
  .object({
    DatasetName: DatasetIdentifierSchema.openapi({
      description: 'The name of the dataset being used by the data ingestion job. ',
    }),
    IngestionInputConfiguration: IngestionInputConfigurationSchema.openapi({
      description:
        ' Specifies information for the input data for the data ingestion job, including dataset S3 location. ',
    }),
    RoleArn: IamRoleArnSchema.openapi({
      description:
        ' The Amazon Resource Name (ARN) of a role with permission to access the data source for the data ingestion job. ',
    }),
    ClientToken: IdempotenceTokenSchema.openapi({
      description:
        ' A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one. ',
    }),
  })
  .openapi({
    required: ['DatasetName', 'IngestionInputConfiguration', 'RoleArn', 'ClientToken'],
    title: 'StartDataIngestionJobRequest',
  })
  .openapi('StartDataIngestionJobRequest')

const StartInferenceSchedulerResponseSchema = z
  .object({
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the ML model being used by the inference scheduler. ',
    }),
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model being used by the inference scheduler. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler being started. ',
    }),
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the inference scheduler being started. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the inference scheduler. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartInferenceSchedulerResponse')

const StartInferenceSchedulerRequestSchema = z
  .object({
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler to be started. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'StartInferenceSchedulerRequest' })
  .openapi('StartInferenceSchedulerRequest')

const StopInferenceSchedulerResponseSchema = z
  .object({
    ModelArn: ModelArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the ML model used by the inference scheduler being stopped. ',
    }),
    ModelName: ModelNameSchema.exactOptional().openapi({
      description: 'The name of the ML model used by the inference scheduler being stopped. ',
    }),
    InferenceSchedulerName: InferenceSchedulerNameSchema.exactOptional().openapi({
      description: 'The name of the inference scheduler being stopped. ',
    }),
    InferenceSchedulerArn: InferenceSchedulerArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the inference schedule being stopped. ',
    }),
    Status: InferenceSchedulerStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the inference scheduler. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('StopInferenceSchedulerResponse')

const StopInferenceSchedulerRequestSchema = z
  .object({
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler to be stopped. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'StopInferenceSchedulerRequest' })
  .openapi('StopInferenceSchedulerRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the specific resource to which the tag should be associated. ',
    }),
    Tags: TagListSchema.openapi({
      description:
        'The tag or tags to be associated with a specific resource. Both the tag key and value are specified. ',
    }),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the resource to which the tag is currently associated. ',
    }),
    TagKeys: TagKeyListSchema.openapi({
      description: 'Specifies the key of the tag to be removed from a specified resource. ',
    }),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateInferenceSchedulerRequestSchema = z
  .object({
    InferenceSchedulerName: InferenceSchedulerIdentifierSchema.openapi({
      description: 'The name of the inference scheduler to be updated. ',
    }),
    DataDelayOffsetInMinutes: DataDelayOffsetInMinutesSchema.exactOptional().openapi({
      description:
        " A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.",
    }),
    DataUploadFrequency: DataUploadFrequencySchema.exactOptional().openapi({
      description:
        'How often data is uploaded to the source S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes. ',
    }),
    DataInputConfiguration: InferenceInputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies information for the input data for the inference scheduler, including delimiter, format, and dataset location. ',
    }),
    DataOutputConfiguration: InferenceOutputConfigurationSchema.exactOptional().openapi({
      description:
        ' Specifies information for the output results from the inference scheduler, including the output S3 location. ',
    }),
    RoleArn: IamRoleArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler. ',
    }),
  })
  .openapi({ required: ['InferenceSchedulerName'], title: 'UpdateInferenceSchedulerRequest' })
  .openapi('UpdateInferenceSchedulerRequest')

const UpdateLabelGroupRequestSchema = z
  .object({
    LabelGroupName: LabelGroupNameSchema.openapi({
      description: ' The name of the label group to be updated. ',
    }),
    FaultCodes: FaultCodesSchema.exactOptional().openapi({
      description:
        '<p> Updates the code indicating the type of anomaly associated with the label. </p> <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>',
    }),
  })
  .openapi({ required: ['LabelGroupName'], title: 'UpdateLabelGroupRequest' })
  .openapi('UpdateLabelGroupRequest')

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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset',
  description:
    'Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. ',
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
      'X-Amz-Target': z
        .literal('AWSLookoutEquipmentFrontendService.CreateDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.CreateDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler',
    description:
      ' Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. ',
    operationId: 'CreateInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.CreateInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateInferenceSchedulerResponseSchema } },
      },
      480: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel',
  description: ' Creates a label for an event. ',
  operationId: 'CreateLabel',
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
        .literal('AWSLookoutEquipmentFrontendService.CreateLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.CreateLabel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateLabelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLabelResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup',
  description: ' Creates a group of labels. ',
  operationId: 'CreateLabelGroup',
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
        .literal('AWSLookoutEquipmentFrontendService.CreateLabelGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.CreateLabelGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLabelGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLabelGroupResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel',
  description:
    "<p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>",
  operationId: 'CreateModel',
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
        .literal('AWSLookoutEquipmentFrontendService.CreateModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.CreateModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateModelRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateModelResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset',
  description:
    " Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. ",
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
      'X-Amz-Target': z
        .literal('AWSLookoutEquipmentFrontendService.DeleteDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.DeleteDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler',
    description:
      'Deletes an inference scheduler that has been set up. Already processed output results are not affected. ',
    operationId: 'DeleteInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel',
  description: ' Deletes a label. ',
  operationId: 'DeleteLabel',
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
        .literal('AWSLookoutEquipmentFrontendService.DeleteLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.DeleteLabel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteLabelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup',
  description: ' Deletes a group of labels. ',
  operationId: 'DeleteLabelGroup',
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
        .literal('AWSLookoutEquipmentFrontendService.DeleteLabelGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.DeleteLabelGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLabelGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel',
  description:
    'Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. ',
  operationId: 'DeleteModel',
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
        .literal('AWSLookoutEquipmentFrontendService.DeleteModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.DeleteModel'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteModelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob',
    description:
      'Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.',
    operationId: 'DescribeDataIngestionJob',
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
          .literal('AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeDataIngestionJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeDataIngestionJobResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset',
  description:
    'Provides a JSON description of the data in each time series dataset, including names, column names, and data types.',
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
      'X-Amz-Target': z
        .literal('AWSLookoutEquipmentFrontendService.DescribeDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.DescribeDataset'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler',
    description:
      ' Specifies information about the inference scheduler being used, including name, model, status, and associated metadata ',
    operationId: 'DescribeInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeInferenceSchedulerResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel',
  description: ' Returns the name of the label. ',
  operationId: 'DescribeLabel',
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
        .literal('AWSLookoutEquipmentFrontendService.DescribeLabel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.DescribeLabel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLabelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLabelResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup',
  description: ' Returns information about the label group. ',
  operationId: 'DescribeLabelGroup',
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
        .literal('AWSLookoutEquipmentFrontendService.DescribeLabelGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.DescribeLabelGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLabelGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLabelGroupResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel',
  description:
    'Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. ',
  operationId: 'DescribeModel',
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
        .literal('AWSLookoutEquipmentFrontendService.DescribeModel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.DescribeModel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeModelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeModelResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs',
    description:
      'Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. ',
    operationId: 'ListDataIngestionJobs',
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
          .literal('AWSLookoutEquipmentFrontendService.ListDataIngestionJobs')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'],
              },
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
        content: { 'application/json': { schema: ListDataIngestionJobsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListDataIngestionJobsResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets',
  description:
    'Lists all datasets currently available in your account, filtering on the dataset name. ',
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
      'X-Amz-Target': z
        .literal('AWSLookoutEquipmentFrontendService.ListDatasets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.ListDatasets'] },
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
      content: { 'application/json': { schema: ListDatasetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents',
    description:
      ' Lists all inference events that have been found for the specified inference scheduler. ',
    operationId: 'ListInferenceEvents',
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
          .literal('AWSLookoutEquipmentFrontendService.ListInferenceEvents')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListInferenceEvents'],
              },
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
        content: { 'application/json': { schema: ListInferenceEventsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListInferenceEventsResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions',
    description:
      ' Lists all inference executions that have been performed by the specified inference scheduler. ',
    operationId: 'ListInferenceExecutions',
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
          .literal('AWSLookoutEquipmentFrontendService.ListInferenceExecutions')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListInferenceExecutions'],
              },
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
        content: { 'application/json': { schema: ListInferenceExecutionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListInferenceExecutionsResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers',
    description:
      'Retrieves a list of all inference schedulers currently available for your account. ',
    operationId: 'ListInferenceSchedulers',
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
          .literal('AWSLookoutEquipmentFrontendService.ListInferenceSchedulers')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'],
              },
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
        content: { 'application/json': { schema: ListInferenceSchedulersRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListInferenceSchedulersResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups',
  description: ' Returns a list of the label groups. ',
  operationId: 'ListLabelGroups',
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
        .literal('AWSLookoutEquipmentFrontendService.ListLabelGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.ListLabelGroups'],
            },
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
      content: { 'application/json': { schema: ListLabelGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLabelGroupsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels',
  description: ' Provides a list of labels. ',
  operationId: 'ListLabels',
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
        .literal('AWSLookoutEquipmentFrontendService.ListLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.ListLabels'] },
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
    body: { content: { 'application/json': { schema: ListLabelsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLabelsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels',
  description:
    'Generates a list of all models in the account, including model name and ARN, dataset, and status. ',
  operationId: 'ListModels',
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
        .literal('AWSLookoutEquipmentFrontendService.ListModels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.ListModels'] },
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
    body: { content: { 'application/json': { schema: ListModelsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListModelsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics',
    description:
      ' Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. ',
    operationId: 'ListSensorStatistics',
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
          .literal('AWSLookoutEquipmentFrontendService.ListSensorStatistics')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListSensorStatistics'],
              },
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
        content: { 'application/json': { schema: ListSensorStatisticsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListSensorStatisticsResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource',
    description: 'Lists all the tags for a specified resource, including key and value. ',
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
          .literal('AWSLookoutEquipmentFrontendService.ListTagsForResource')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.ListTagsForResource'],
              },
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
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob',
    description:
      'Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. ',
    operationId: 'StartDataIngestionJob',
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
          .literal('AWSLookoutEquipmentFrontendService.StartDataIngestionJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.StartDataIngestionJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartDataIngestionJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartDataIngestionJobResponseSchema } },
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
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler',
    description: 'Starts an inference scheduler. ',
    operationId: 'StartInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.StartInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.StartInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartInferenceSchedulerResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler',
    description: 'Stops an inference scheduler. ',
    operationId: 'StopInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.StopInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.StopInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StopInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StopInferenceSchedulerResponseSchema } },
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
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource',
  description:
    'Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. ',
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
        .literal('AWSLookoutEquipmentFrontendService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.TagResource'] },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource',
  description: 'Removes a specific tag from a given resource. The tag is specified by its key. ',
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
        .literal('AWSLookoutEquipmentFrontendService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSLookoutEquipmentFrontendService.UntagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler',
    description: 'Updates an inference scheduler. ',
    operationId: 'UpdateInferenceScheduler',
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
          .literal('AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateInferenceSchedulerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup',
  description: ' Updates the label group. ',
  operationId: 'UpdateLabelGroup',
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
        .literal('AWSLookoutEquipmentFrontendService.UpdateLabelGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSLookoutEquipmentFrontendService.UpdateLabelGroup'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLabelGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
