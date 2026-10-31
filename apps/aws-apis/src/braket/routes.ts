import { createRoute, z } from '@hono/zod-openapi'

const S3PathSchema = z
  .string()
  .regex(/^(https|s3):\/\/([^\/]+)\/?(.*)$/)
  .min(0)
  .max(1024)
  .openapi('S3Path')

const S3DataSourceSchema = z
  .object({
    s3Uri: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Depending on the value specified for the <code>S3DataType</code>, identifies either a key name prefix or a manifest that locates the S3 data source.',
        }),
    ),
  })
  .openapi({
    required: ['s3Uri'],
    description: 'Information about the data stored in Amazon S3 used by the Amazon Braket job.',
  })
  .openapi('S3DataSource')

type DataSourceType = {
  s3DataSource: z.infer<typeof S3DataSourceSchema> & { [key: string]: unknown }
}

const CancellationStatusSchema = z.enum(['CANCELLING', 'CANCELLED']).openapi('CancellationStatus')

const JobArnSchema = z
  .string()
  .regex(/^arn:aws[a-z\-]*:braket:[a-z0-9\-]*:[0-9]{12}:job\/.*$/)
  .openapi('JobArn')

const CancelJobResponseSchema = z
  .object({
    cancellationStatus: CancellationStatusSchema.and(
      z.any().openapi({ description: 'The status of the job cancellation request.' }),
    ),
    jobArn: JobArnSchema.and(z.any().openapi({ description: 'The ARN of the Amazon Braket job.' })),
  })
  .openapi({ required: ['cancellationStatus', 'jobArn'] })
  .openapi('CancelJobResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const QuantumTaskArnSchema = z.string().min(1).max(256).openapi('QuantumTaskArn')

const CancelQuantumTaskResponseSchema = z
  .object({
    cancellationStatus: CancellationStatusSchema.and(
      z.any().openapi({ description: 'The status of the cancellation request.' }),
    ),
    quantumTaskArn: QuantumTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN of the task.' }),
    ),
  })
  .openapi({ required: ['cancellationStatus', 'quantumTaskArn'] })
  .openapi('CancelQuantumTaskResponse')

const CreateJobResponseSchema = z
  .object({
    jobArn: JobArnSchema.and(
      z.any().openapi({ description: 'The ARN of the Amazon Braket job created.' }),
    ),
  })
  .openapi({ required: ['jobArn'] })
  .openapi('CreateJobResponse')

const UriSchema = z
  .string()
  .regex(/\d{10,14}\.dkr\.ecr.[a-z0-9-]+\.amazonaws\.com\/.+(@sha256)?:.+/)
  .min(1)
  .max(255)
  .openapi('Uri')

const ContainerImageSchema = z
  .object({
    uri: UriSchema.and(z.any().openapi({ description: 'The URI locating the container image.' })),
  })
  .openapi({
    required: ['uri'],
    description: 'The container image used to create an Amazon Braket job.',
  })
  .openapi('ContainerImage')

const CompressionTypeSchema = z.enum(['NONE', 'GZIP']).openapi('CompressionType')

const StringSchema = z.string().openapi('String')

const ScriptModeConfigSchema = z
  .object({
    compressionType: CompressionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of compression used by the Python scripts for an Amazon Braket job.',
        }),
    ).exactOptional(),
    entryPoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the Python script that serves as the entry point for an Amazon Braket job.',
        }),
    ),
    s3Uri: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI that specifies the S3 path to the Python script module that contains the training script used by an Amazon Braket job.',
        }),
    ),
  })
  .openapi({
    required: ['entryPoint', 's3Uri'],
    description:
      'Contains information about the Python scripts used for entry and by an Amazon Braket job.',
  })
  .openapi('ScriptModeConfig')

const String4096Schema = z.string().min(1).max(4096).openapi('String4096')

const String256Schema = z.string().min(1).max(256).openapi('String256')

const HyperParametersValueStringSchema = z
  .string()
  .min(1)
  .max(2500)
  .openapi('HyperParametersValueString')

const InputFileConfigChannelNameStringSchema = z
  .string()
  .regex(/^[A-Za-z0-9\.\-_]+$/)
  .min(1)
  .max(64)
  .openapi('InputFileConfigChannelNameString')

const DataSourceSchema: z.ZodType<DataSourceType> = z
  .lazy(() =>
    z
      .object({
        s3DataSource: S3DataSourceSchema.and(
          z
            .any()
            .openapi({
              description:
                'Information about the data stored in Amazon S3 used by the Amazon Braket job.',
            }),
        ),
      })
      .openapi({
        required: ['s3DataSource'],
        description: 'Information about the source of the data used by the Amazon Braket job.',
      }),
  )
  .openapi('DataSource')

const InputFileConfigSchema = z
  .object({
    channelName: InputFileConfigChannelNameStringSchema.and(
      z
        .any()
        .openapi({ description: 'A named input source that an Amazon Braket job can consume.' }),
    ),
    contentType: String256Schema.and(
      z.any().openapi({ description: 'The MIME type of the data.' }),
    ).exactOptional(),
    dataSource: DataSourceSchema.and(
      z.any().openapi({ description: 'The location of the channel data.' }),
    ),
  })
  .openapi({
    required: ['channelName', 'dataSource'],
    description:
      'A list of parameters that specify the input channels, type of input data, and where it is located.',
  })
  .openapi('InputFileConfig')

const InstanceConfigInstanceCountIntegerSchema = z
  .int()
  .min(1)
  .openapi('InstanceConfigInstanceCountInteger')

const InstanceTypeSchema = z
  .enum([
    'ml.m4.xlarge',
    'ml.m4.2xlarge',
    'ml.m4.4xlarge',
    'ml.m4.10xlarge',
    'ml.m4.16xlarge',
    'ml.g4dn.xlarge',
    'ml.g4dn.2xlarge',
    'ml.g4dn.4xlarge',
    'ml.g4dn.8xlarge',
    'ml.g4dn.12xlarge',
    'ml.g4dn.16xlarge',
    'ml.m5.large',
    'ml.m5.xlarge',
    'ml.m5.2xlarge',
    'ml.m5.4xlarge',
    'ml.m5.12xlarge',
    'ml.m5.24xlarge',
    'ml.c4.xlarge',
    'ml.c4.2xlarge',
    'ml.c4.4xlarge',
    'ml.c4.8xlarge',
    'ml.p2.xlarge',
    'ml.p2.8xlarge',
    'ml.p2.16xlarge',
    'ml.p3.2xlarge',
    'ml.p3.8xlarge',
    'ml.p3.16xlarge',
    'ml.p3dn.24xlarge',
    'ml.p4d.24xlarge',
    'ml.c5.xlarge',
    'ml.c5.2xlarge',
    'ml.c5.4xlarge',
    'ml.c5.9xlarge',
    'ml.c5.18xlarge',
    'ml.c5n.xlarge',
    'ml.c5n.2xlarge',
    'ml.c5n.4xlarge',
    'ml.c5n.9xlarge',
    'ml.c5n.18xlarge',
  ])
  .openapi('InstanceType')

const InstanceConfigVolumeSizeInGbIntegerSchema = z
  .int()
  .min(1)
  .openapi('InstanceConfigVolumeSizeInGbInteger')

const String2048Schema = z.string().min(1).max(2048).openapi('String2048')

const JobStoppingConditionMaxRuntimeInSecondsIntegerSchema = z
  .int()
  .min(1)
  .max(432000)
  .openapi('JobStoppingConditionMaxRuntimeInSecondsInteger')

const DeviceRetiredExceptionSchema = z.any().openapi('DeviceRetiredException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CreateQuantumTaskResponseSchema = z
  .object({
    quantumTaskArn: QuantumTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN of the task created by the request.' }),
    ),
  })
  .openapi({ required: ['quantumTaskArn'] })
  .openapi('CreateQuantumTaskResponse')

const DeviceOfflineExceptionSchema = z.any().openapi('DeviceOfflineException')

const DeviceArnSchema = z.string().min(1).max(256).openapi('DeviceArn')

const JsonValueSchema = z.string().openapi('JsonValue')

const DeviceStatusSchema = z.enum(['ONLINE', 'OFFLINE', 'RETIRED']).openapi('DeviceStatus')

const DeviceTypeSchema = z.enum(['QPU', 'SIMULATOR']).openapi('DeviceType')

const GetDeviceResponseSchema = z
  .object({
    deviceArn: DeviceArnSchema.and(z.any().openapi({ description: 'The ARN of the device.' })),
    deviceCapabilities: JsonValueSchema.and(
      z.any().openapi({ description: 'Details about the capabilities of the device.' }),
    ),
    deviceName: StringSchema.and(z.any().openapi({ description: 'The name of the device.' })),
    deviceStatus: DeviceStatusSchema.and(
      z.any().openapi({ description: 'The status of the device.' }),
    ),
    deviceType: DeviceTypeSchema.and(z.any().openapi({ description: 'The type of the device.' })),
    providerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the partner company for the device.' }),
    ),
  })
  .openapi({
    required: [
      'deviceArn',
      'deviceCapabilities',
      'deviceName',
      'deviceStatus',
      'deviceType',
      'providerName',
    ],
  })
  .openapi('GetDeviceResponse')

const AlgorithmSpecificationSchema = z
  .object({
    containerImage: ContainerImageSchema.and(
      z.any().openapi({ description: 'The container image used to create an Amazon Braket job.' }),
    ).exactOptional(),
    scriptModeConfig: ScriptModeConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Configures the paths to the Python scripts used for entry and training.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.',
    required: [],
  })
  .openapi('AlgorithmSpecification')

const IntegerSchema = z.int().openapi('Integer')

const JobCheckpointConfigSchema = z
  .object({
    localPath: String4096Schema.and(
      z
        .any()
        .openapi({
          description:
            '(Optional) The local directory where checkpoints are written. The default directory is <code>/opt/braket/checkpoints/</code>.',
        }),
    ).exactOptional(),
    s3Uri: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the S3 path where you want Amazon Braket to store checkpoints. For example, <code>s3://bucket-name/key-name-prefix</code>.',
        }),
    ),
  })
  .openapi({
    required: ['s3Uri'],
    description: 'Contains information about the output locations for job checkpoint data.',
  })
  .openapi('JobCheckpointConfig')

const SyntheticTimestampDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('SyntheticTimestampDateTime')

const DeviceConfigSchema = z
  .object({
    device: String256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The primary quantum processing unit (QPU) or simulator used to create and run an Amazon Braket job.',
        }),
    ),
  })
  .openapi({
    required: ['device'],
    description:
      'Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.',
  })
  .openapi('DeviceConfig')

const JobEventTypeSchema = z
  .enum([
    'WAITING_FOR_PRIORITY',
    'QUEUED_FOR_EXECUTION',
    'STARTING_INSTANCE',
    'DOWNLOADING_DATA',
    'RUNNING',
    'DEPRIORITIZED_DUE_TO_INACTIVITY',
    'UPLOADING_RESULTS',
    'COMPLETED',
    'FAILED',
    'MAX_RUNTIME_EXCEEDED',
    'CANCELLED',
  ])
  .openapi('JobEventType')

const JobEventDetailsMessageStringSchema = z
  .string()
  .min(0)
  .max(2500)
  .openapi('JobEventDetailsMessageString')

const JobEventDetailsSchema = z
  .object({
    eventType: JobEventTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of event that occurred related to the Amazon Braket job.',
        }),
    ).exactOptional(),
    message: JobEventDetailsMessageStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message describing the event that occurred related to the Amazon Braket job.',
        }),
    ).exactOptional(),
    timeOfEvent: SyntheticTimestampDateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'TThe type of event that occurred related to the Amazon Braket job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the type and time events occurred related to the Amazon Braket job.',
    required: [],
  })
  .openapi('JobEventDetails')

const JobEventsSchema = z.array(JobEventDetailsSchema).min(0).max(20).openapi('JobEvents')

const String1024Schema = z.string().min(1).max(1024).openapi('String1024')

const HyperParametersSchema = z
  .record(z.string(), HyperParametersValueStringSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('HyperParameters')

const InputConfigListSchema = z.array(InputFileConfigSchema).openapi('InputConfigList')

const InstanceConfigSchema = z
  .object({
    instanceCount: InstanceConfigInstanceCountIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures the number of resource instances to use while running an Amazon Braket job on Amazon Braket. The default value is 1.',
        }),
    ).exactOptional(),
    instanceType: InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configures the type resource instances to use while running an Amazon Braket hybrid job.',
        }),
    ),
    volumeSizeInGb: InstanceConfigVolumeSizeInGbIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The size of the storage volume, in GB, that user wants to provision.',
        }),
    ),
  })
  .openapi({
    required: ['instanceType', 'volumeSizeInGb'],
    description:
      'Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.',
  })
  .openapi('InstanceConfig')

const GetJobResponseJobNameStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,50}$/)
  .min(1)
  .max(50)
  .openapi('GetJobResponseJobNameString')

const JobOutputDataConfigSchema = z
  .object({
    kmsKeyId: String2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the job training artifacts at rest using Amazon S3 server-side encryption.',
        }),
    ).exactOptional(),
    s3Path: S3PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the S3 path where you want Amazon Braket to store the job training artifacts. For example, <code>s3://bucket-name/key-name-prefix</code>.',
        }),
    ),
  })
  .openapi({
    required: ['s3Path'],
    description:
      'Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.',
  })
  .openapi('JobOutputDataConfig')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
  .openapi('RoleArn')

const JobPrimaryStatusSchema = z
  .enum(['QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLING', 'CANCELLED'])
  .openapi('JobPrimaryStatus')

const JobStoppingConditionSchema = z
  .object({
    maxRuntimeInSeconds: JobStoppingConditionMaxRuntimeInSecondsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum length of time, in seconds, that an Amazon Braket job can run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies limits for how long an Amazon Braket job can run. ',
    required: [],
  })
  .openapi('JobStoppingCondition')

const TagsMapSchema = z.record(z.string(), StringSchema).openapi('TagsMap')

const GetJobResponseSchema = z
  .object({
    algorithmSpecification: AlgorithmSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Definition of the Amazon Braket job created. Specifies the container image the job uses, information about the Python scripts used for entry and training, and the user-defined metrics used to evaluation the job.',
        }),
    ),
    billableDuration: IntegerSchema.and(
      z.any().openapi({ description: 'The billable time the Amazon Braket job used to complete.' }),
    ).exactOptional(),
    checkpointConfig: JobCheckpointConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the output locations for job checkpoint data.',
        }),
    ).exactOptional(),
    createdAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job was created.' }),
    ),
    deviceConfig: DeviceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The quantum processing unit (QPU) or simulator used to run the Amazon Braket job.',
        }),
    ).exactOptional(),
    endedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job ended.' }),
    ).exactOptional(),
    events: JobEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the type and time events occurred related to the Amazon Braket job.',
        }),
    ).exactOptional(),
    failureReason: String1024Schema.and(
      z
        .any()
        .openapi({
          description: 'A description of the reason why an Amazon Braket job failed, if it failed.',
        }),
    ).exactOptional(),
    hyperParameters: HyperParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the traiing job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.',
        }),
    ).exactOptional(),
    inputDataConfig: InputConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parameters that specify the name and type of input data and where it is located.',
        }),
    ).exactOptional(),
    instanceConfig: InstanceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource instances to use while running the hybrid job on Amazon Braket.',
        }),
    ),
    jobArn: JobArnSchema.and(z.any().openapi({ description: 'The ARN of the Amazon Braket job.' })),
    jobName: GetJobResponseJobNameStringSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Braket job.' }),
    ),
    outputDataConfig: JobOutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the S3 location where job artifacts are stored and the encryption key used to store them there.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the s3 buckets of a user.',
        }),
    ),
    startedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job was started.' }),
    ).exactOptional(),
    status: JobPrimaryStatusSchema.and(
      z.any().openapi({ description: 'The status of the Amazon Braket job.' }),
    ),
    stoppingCondition: JobStoppingConditionSchema.and(
      z
        .any()
        .openapi({
          description: 'The user-defined criteria that specifies when to stop a job running.',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'algorithmSpecification',
      'createdAt',
      'instanceConfig',
      'jobArn',
      'jobName',
      'outputDataConfig',
      'roleArn',
      'status',
    ],
  })
  .openapi('GetJobResponse')

const LongSchema = z.int().openapi('Long')

const QuantumTaskStatusSchema = z
  .enum(['CREATED', 'QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLING', 'CANCELLED'])
  .openapi('QuantumTaskStatus')

const GetQuantumTaskResponseSchema = z
  .object({
    createdAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The time at which the task was created.' }),
    ),
    deviceArn: DeviceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the device the task was run on.' }),
    ),
    deviceParameters: JsonValueSchema.and(
      z.any().openapi({ description: 'The parameters for the device on which the task ran.' }),
    ),
    endedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The time at which the task ended.' }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z.any().openapi({ description: 'The reason that a task failed.' }),
    ).exactOptional(),
    jobArn: JobArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the Amazon Braket job associated with the quantum task.',
        }),
    ).exactOptional(),
    outputS3Bucket: StringSchema.and(
      z.any().openapi({ description: 'The S3 bucket where task results are stored.' }),
    ),
    outputS3Directory: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The folder in the S3 bucket where task results are stored.' }),
    ),
    quantumTaskArn: QuantumTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN of the task.' }),
    ),
    shots: LongSchema.and(
      z.any().openapi({ description: 'The number of shots used in the task.' }),
    ),
    status: QuantumTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the task.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'The tags that belong to this task.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'createdAt',
      'deviceArn',
      'deviceParameters',
      'outputS3Bucket',
      'outputS3Directory',
      'quantumTaskArn',
      'shots',
      'status',
    ],
  })
  .openapi('GetQuantumTaskResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Displays the key, value pairs of tags associated with this resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const DeviceSummarySchema = z
  .object({
    deviceArn: DeviceArnSchema.and(z.any().openapi({ description: 'The ARN of the device.' })),
    deviceName: StringSchema.and(z.any().openapi({ description: 'The name of the device.' })),
    deviceStatus: DeviceStatusSchema.and(
      z.any().openapi({ description: 'The status of the device.' }),
    ),
    deviceType: DeviceTypeSchema.and(z.any().openapi({ description: 'The type of the device.' })),
    providerName: StringSchema.and(z.any().openapi({ description: 'The provider of the device.' })),
  })
  .openapi({
    required: ['deviceArn', 'deviceName', 'deviceStatus', 'deviceType', 'providerName'],
    description: 'Includes information about the device.',
  })
  .openapi('DeviceSummary')

const DeviceSummaryListSchema = z.array(DeviceSummarySchema).openapi('DeviceSummaryList')

const SearchDevicesResponseSchema = z
  .object({
    devices: DeviceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>DeviceSummary</code> objects for devices that match the specified filter values.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue results where the previous request ended.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['devices'] })
  .openapi('SearchDevicesResponse')

const SearchDevicesFilterNameStringSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi('SearchDevicesFilterNameString')

const SearchDevicesFilterValuesListSchema = z
  .array(String256Schema)
  .min(1)
  .max(10)
  .openapi('SearchDevicesFilterValuesList')

const SearchDevicesFilterSchema = z
  .object({
    name: SearchDevicesFilterNameStringSchema.and(
      z.any().openapi({ description: 'The name to use to filter results.' }),
    ),
    values: SearchDevicesFilterValuesListSchema.and(
      z.any().openapi({ description: 'The values to use to filter results.' }),
    ),
  })
  .openapi({
    required: ['name', 'values'],
    description: 'The filter to use for searching devices.',
  })
  .openapi('SearchDevicesFilter')

const JobSummarySchema = z
  .object({
    createdAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job was created.' }),
    ),
    device: String256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Provides summary information about the primary device used by an Amazon Braket job.',
        }),
    ),
    endedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job ended.' }),
    ).exactOptional(),
    jobArn: JobArnSchema.and(z.any().openapi({ description: 'The ARN of the Amazon Braket job.' })),
    jobName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Braket job.' }),
    ),
    startedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The date and time that the Amazon Braket job was started.' }),
    ).exactOptional(),
    status: JobPrimaryStatusSchema.and(
      z.any().openapi({ description: 'The status of the Amazon Braket job.' }),
    ),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['createdAt', 'device', 'jobArn', 'jobName', 'status'],
    description: 'Provides summary information about an Amazon Braket job.',
  })
  .openapi('JobSummary')

const JobSummaryListSchema = z.array(JobSummarySchema).openapi('JobSummaryList')

const SearchJobsResponseSchema = z
  .object({
    jobs: JobSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>JobSummary</code> objects for devices that match the specified filter values.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results, or <code>null</code> if there are no additional results. Use the token value in a subsequent request to continue results where the previous request ended.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['jobs'] })
  .openapi('SearchJobsResponse')

const String64Schema = z.string().min(1).max(64).openapi('String64')

const SearchJobsFilterOperatorSchema = z
  .enum(['LT', 'LTE', 'EQUAL', 'GT', 'GTE', 'BETWEEN', 'CONTAINS'])
  .openapi('SearchJobsFilterOperator')

const SearchJobsFilterValuesListSchema = z
  .array(String256Schema)
  .min(1)
  .max(10)
  .openapi('SearchJobsFilterValuesList')

const SearchJobsFilterSchema = z
  .object({
    name: String64Schema.and(
      z.any().openapi({ description: 'The name to use for the jobs filter.' }),
    ),
    operator: SearchJobsFilterOperatorSchema.and(
      z.any().openapi({ description: 'An operator to use for the jobs filter.' }),
    ),
    values: SearchJobsFilterValuesListSchema.and(
      z.any().openapi({ description: 'The values to use for the jobs filter.' }),
    ),
  })
  .openapi({
    required: ['name', 'operator', 'values'],
    description: 'A filter used to search for Amazon Braket jobs.',
  })
  .openapi('SearchJobsFilter')

const QuantumTaskSummarySchema = z
  .object({
    createdAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The time at which the task was created.' }),
    ),
    deviceArn: DeviceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the device the task ran on.' }),
    ),
    endedAt: SyntheticTimestampDateTimeSchema.and(
      z.any().openapi({ description: 'The time at which the task finished.' }),
    ).exactOptional(),
    outputS3Bucket: StringSchema.and(
      z.any().openapi({ description: 'The S3 bucket where the task result file is stored..' }),
    ),
    outputS3Directory: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The folder in the S3 bucket where the task result file is stored.',
        }),
    ),
    quantumTaskArn: QuantumTaskArnSchema.and(
      z.any().openapi({ description: 'The ARN of the task.' }),
    ),
    shots: LongSchema.and(z.any().openapi({ description: 'The shots used for the task.' })),
    status: QuantumTaskStatusSchema.and(
      z.any().openapi({ description: 'The status of the task.' }),
    ),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Displays the key, value pairs of tags associated with this quantum task.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'createdAt',
      'deviceArn',
      'outputS3Bucket',
      'outputS3Directory',
      'quantumTaskArn',
      'shots',
      'status',
    ],
    description: 'Includes information about a quantum task.',
  })
  .openapi('QuantumTaskSummary')

const QuantumTaskSummaryListSchema = z
  .array(QuantumTaskSummarySchema)
  .openapi('QuantumTaskSummaryList')

const SearchQuantumTasksResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue results where the previous request ended.',
        }),
    ).exactOptional(),
    quantumTasks: QuantumTaskSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>QuantumTaskSummary</code> objects for tasks that match the specified filters.',
        }),
    ),
  })
  .openapi({ required: ['quantumTasks'] })
  .openapi('SearchQuantumTasksResponse')

const SearchQuantumTasksFilterOperatorSchema = z
  .enum(['LT', 'LTE', 'EQUAL', 'GT', 'GTE', 'BETWEEN'])
  .openapi('SearchQuantumTasksFilterOperator')

const SearchQuantumTasksFilterValuesListSchema = z
  .array(String256Schema)
  .min(1)
  .max(10)
  .openapi('SearchQuantumTasksFilterValuesList')

const SearchQuantumTasksFilterSchema = z
  .object({
    name: String64Schema.and(
      z.any().openapi({ description: 'The name of the device used for the task.' }),
    ),
    operator: SearchQuantumTasksFilterOperatorSchema.and(
      z.any().openapi({ description: 'An operator to use in the filter.' }),
    ),
    values: SearchQuantumTasksFilterValuesListSchema.and(
      z.any().openapi({ description: 'The values to use for the filter.' }),
    ),
  })
  .openapi({
    required: ['name', 'operator', 'values'],
    description: 'A filter to use to search for tasks.',
  })
  .openapi('SearchQuantumTasksFilter')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const CancelJobRequestSchema = z
  .object({})
  .openapi({ title: 'CancelJobRequest' })
  .openapi('CancelJobRequest')

const CancelQuantumTaskRequestSchema = z
  .object({
    clientToken: String64Schema.and(
      z.any().openapi({ description: 'The client token associated with the request.' }),
    ),
  })
  .openapi({ required: ['clientToken'], title: 'CancelQuantumTaskRequest' })
  .openapi('CancelQuantumTaskRequest')

const CreateJobRequestInputDataConfigListSchema = z
  .array(InputFileConfigSchema)
  .min(0)
  .max(20)
  .openapi('CreateJobRequestInputDataConfigList')

const CreateJobRequestJobNameStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,50}$/)
  .min(1)
  .max(50)
  .openapi('CreateJobRequestJobNameString')

const CreateJobRequestSchema = z
  .object({
    algorithmSpecification: AlgorithmSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Definition of the Amazon Braket job to be created. Specifies the container image the job uses and information about the Python scripts used for entry and training.',
        }),
    ),
    checkpointConfig: JobCheckpointConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the output locations for job checkpoint data.',
        }),
    ).exactOptional(),
    clientToken: String64Schema.and(
      z
        .any()
        .openapi({
          description: 'A unique token that guarantees that the call to this API is idempotent.',
        }),
    ),
    deviceConfig: DeviceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The quantum processing unit (QPU) or simulator used to create an Amazon Braket job.',
        }),
    ),
    hyperParameters: HyperParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.',
        }),
    ).exactOptional(),
    inputDataConfig: CreateJobRequestInputDataConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parameters that specify the name and type of input data and where it is located.',
        }),
    ).exactOptional(),
    instanceConfig: InstanceConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration of the resource instances to use while running the hybrid job on Amazon Braket.',
        }),
    ),
    jobName: CreateJobRequestJobNameStringSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Braket job.' }),
    ),
    outputDataConfig: JobOutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the S3 location where you want to store job artifacts and the encryption key used to store them.',
        }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.",
        }),
    ),
    stoppingCondition: JobStoppingConditionSchema.and(
      z
        .any()
        .openapi({
          description: ' The user-defined criteria that specifies when a job stops running.',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'algorithmSpecification',
      'clientToken',
      'deviceConfig',
      'instanceConfig',
      'jobName',
      'outputDataConfig',
      'roleArn',
    ],
    title: 'CreateJobRequest',
  })
  .openapi('CreateJobRequest')

const CreateQuantumTaskRequestDeviceParametersStringSchema = z
  .string()
  .min(1)
  .max(48000)
  .openapi('CreateQuantumTaskRequestDeviceParametersString')

const JobTokenSchema = z.string().min(1).max(128).openapi('JobToken')

const CreateQuantumTaskRequestOutputS3BucketStringSchema = z
  .string()
  .min(3)
  .max(63)
  .openapi('CreateQuantumTaskRequestOutputS3BucketString')

const CreateQuantumTaskRequestOutputS3KeyPrefixStringSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('CreateQuantumTaskRequestOutputS3KeyPrefixString')

const CreateQuantumTaskRequestShotsLongSchema = z
  .int()
  .min(0)
  .openapi('CreateQuantumTaskRequestShotsLong')

const CreateQuantumTaskRequestSchema = z
  .object({
    action: JsonValueSchema.and(
      z.any().openapi({ description: 'The action associated with the task.' }),
    ),
    clientToken: String64Schema.and(
      z.any().openapi({ description: 'The client token associated with the request.' }),
    ),
    deviceArn: DeviceArnSchema.and(
      z.any().openapi({ description: 'The ARN of the device to run the task on.' }),
    ),
    deviceParameters: CreateQuantumTaskRequestDeviceParametersStringSchema.and(
      z.any().openapi({ description: 'The parameters for the device to run the task on.' }),
    ).exactOptional(),
    jobToken: JobTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for an Amazon Braket job that associates it with the quantum task.',
        }),
    ).exactOptional(),
    outputS3Bucket: CreateQuantumTaskRequestOutputS3BucketStringSchema.and(
      z.any().openapi({ description: 'The S3 bucket to store task result files in.' }),
    ),
    outputS3KeyPrefix: CreateQuantumTaskRequestOutputS3KeyPrefixStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The key prefix for the location in the S3 bucket to store task results in.',
        }),
    ),
    shots: CreateQuantumTaskRequestShotsLongSchema.and(
      z.any().openapi({ description: 'The number of shots to use for the task.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: "Tags to be added to the quantum task you're creating." }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'action',
      'clientToken',
      'deviceArn',
      'outputS3Bucket',
      'outputS3KeyPrefix',
      'shots',
    ],
    title: 'CreateQuantumTaskRequest',
  })
  .openapi('CreateQuantumTaskRequest')

const GetDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeviceRequest' })
  .openapi('GetDeviceRequest')

const GetJobRequestSchema = z
  .object({})
  .openapi({ title: 'GetJobRequest' })
  .openapi('GetJobRequest')

const GetQuantumTaskRequestSchema = z
  .object({})
  .openapi({ title: 'GetQuantumTaskRequest' })
  .openapi('GetQuantumTaskRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const SearchDevicesRequestFiltersListSchema = z
  .array(SearchDevicesFilterSchema)
  .min(0)
  .max(10)
  .openapi('SearchDevicesRequestFiltersList')

const SearchDevicesRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('SearchDevicesRequestMaxResultsInteger')

const SearchDevicesRequestSchema = z
  .object({
    filters: SearchDevicesRequestFiltersListSchema.and(
      z.any().openapi({ description: 'The filter values to use to search for a device.' }),
    ),
    maxResults: SearchDevicesRequestMaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filters'], title: 'SearchDevicesRequest' })
  .openapi('SearchDevicesRequest')

const SearchJobsRequestFiltersListSchema = z
  .array(SearchJobsFilterSchema)
  .min(0)
  .max(10)
  .openapi('SearchJobsRequestFiltersList')

const SearchJobsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('SearchJobsRequestMaxResultsInteger')

const SearchJobsRequestSchema = z
  .object({
    filters: SearchJobsRequestFiltersListSchema.and(
      z.any().openapi({ description: 'The filter values to use when searching for a job.' }),
    ),
    maxResults: SearchJobsRequestMaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in the response.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filters'], title: 'SearchJobsRequest' })
  .openapi('SearchJobsRequest')

const SearchQuantumTasksRequestFiltersListSchema = z
  .array(SearchQuantumTasksFilterSchema)
  .min(0)
  .max(10)
  .openapi('SearchQuantumTasksRequestFiltersList')

const SearchQuantumTasksRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('SearchQuantumTasksRequestMaxResultsInteger')

const SearchQuantumTasksRequestSchema = z
  .object({
    filters: SearchQuantumTasksRequestFiltersListSchema.and(
      z.any().openapi({ description: 'Array of <code>SearchQuantumTasksFilter</code> objects.' }),
    ),
    maxResults: SearchQuantumTasksRequestMaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'Maximum number of results to return in the response.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filters'], title: 'SearchQuantumTasksRequest' })
  .openapi('SearchQuantumTasksRequest')

const TagKeysSchema = z.array(StringSchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Specify the tags to add to the resource.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const putJobJobArnCancelRoute = createRoute({
  method: 'put',
  path: '/job/{jobArn}/cancel',
  description: 'Cancels an Amazon Braket job.',
  operationId: 'CancelJob',
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
      jobArn: z
        .string()
        .regex(/^arn:aws[a-z\-]*:braket:[a-z0-9\-]*:[0-9]{12}:job\/.*$/)
        .openapi({
          param: {
            name: 'jobArn',
            in: 'path',
            required: true,
            description: 'The ARN of the Amazon Braket job to cancel.',
            schema: {
              type: 'string',
              pattern: '^arn:aws[a-z\\-]*:braket:[a-z0-9\\-]*:[0-9]{12}:job/.*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const putQuantumTaskQuantumTaskArnCancelRoute = createRoute({
  method: 'put',
  path: '/quantum-task/{quantumTaskArn}/cancel',
  description: 'Cancels the specified task.',
  operationId: 'CancelQuantumTask',
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
      quantumTaskArn: z
        .string()
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'quantumTaskArn',
            in: 'path',
            required: true,
            description: 'The ARN of the task to cancel.',
            schema: { type: 'string', minLength: 1, maxLength: 256 },
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
                .min(1)
                .max(64)
                .openapi({ description: 'The client token associated with the request.' }),
            })
            .openapi({ required: ['clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelQuantumTaskResponseSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postJobRoute = createRoute({
  method: 'post',
  path: '/job',
  description: 'Creates an Amazon Braket job.',
  operationId: 'CreateJob',
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
              algorithmSpecification: z
                .object({
                  containerImage: ContainerImageSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The container image used to create an Amazon Braket job.',
                      }),
                  ).exactOptional(),
                  scriptModeConfig: ScriptModeConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configures the paths to the Python scripts used for entry and training.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.',
                  required: [],
                }),
              checkpointConfig: z
                .object({
                  localPath: String4096Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '(Optional) The local directory where checkpoints are written. The default directory is <code>/opt/braket/checkpoints/</code>.',
                      }),
                  ).exactOptional(),
                  s3Uri: S3PathSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the S3 path where you want Amazon Braket to store checkpoints. For example, <code>s3://bucket-name/key-name-prefix</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the output locations for job checkpoint data.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'A unique token that guarantees that the call to this API is idempotent.',
                }),
              deviceConfig: z
                .object({
                  device: String256Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The primary quantum processing unit (QPU) or simulator used to create and run an Amazon Braket job.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.',
                  required: [],
                }),
              hyperParameters: z
                .record(z.string(), HyperParametersValueStringSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 100)
                .exactOptional()
                .openapi({
                  description:
                    'Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.',
                }),
              inputDataConfig: z
                .array(InputFileConfigSchema)
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'A list of parameters that specify the name and type of input data and where it is located.',
                }),
              instanceConfig: z
                .object({
                  instanceCount: InstanceConfigInstanceCountIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configures the number of resource instances to use while running an Amazon Braket job on Amazon Braket. The default value is 1.',
                      }),
                  ).exactOptional(),
                  instanceType: InstanceTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Configures the type resource instances to use while running an Amazon Braket hybrid job.',
                      }),
                  ).exactOptional(),
                  volumeSizeInGb: InstanceConfigVolumeSizeInGbIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The size of the storage volume, in GB, that user wants to provision.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.',
                  required: [],
                }),
              jobName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,50}$/)
                .min(1)
                .max(50)
                .openapi({ description: 'The name of the Amazon Braket job.' }),
              outputDataConfig: z
                .object({
                  kmsKeyId: String2048Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the job training artifacts at rest using Amazon S3 server-side encryption.',
                      }),
                  ).exactOptional(),
                  s3Path: S3PathSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the S3 path where you want Amazon Braket to store the job training artifacts. For example, <code>s3://bucket-name/key-name-prefix</code>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.',
                  required: [],
                }),
              roleArn: z
                .string()
                .regex(/^arn:aws[a-z\-]*:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+$/)
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.",
                }),
              stoppingCondition: z
                .object({
                  maxRuntimeInSeconds: JobStoppingConditionMaxRuntimeInSecondsIntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum length of time, in seconds, that an Amazon Braket job can run.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies limits for how long an Amazon Braket job can run. ',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.',
                }),
            })
            .openapi({
              required: [
                'algorithmSpecification',
                'clientToken',
                'deviceConfig',
                'instanceConfig',
                'jobName',
                'outputDataConfig',
                'roleArn',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
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
      description: 'DeviceRetiredException',
      content: { 'application/json': { schema: DeviceRetiredExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postQuantumTaskRoute = createRoute({
  method: 'post',
  path: '/quantum-task',
  description: 'Creates a quantum task.',
  operationId: 'CreateQuantumTask',
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
              action: z.string().openapi({ description: 'The action associated with the task.' }),
              clientToken: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'The client token associated with the request.' }),
              deviceArn: z
                .string()
                .min(1)
                .max(256)
                .openapi({ description: 'The ARN of the device to run the task on.' }),
              deviceParameters: z
                .string()
                .min(1)
                .max(48000)
                .exactOptional()
                .openapi({ description: 'The parameters for the device to run the task on.' }),
              jobToken: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'The token for an Amazon Braket job that associates it with the quantum task.',
                }),
              outputS3Bucket: z
                .string()
                .min(3)
                .max(63)
                .openapi({ description: 'The S3 bucket to store task result files in.' }),
              outputS3KeyPrefix: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The key prefix for the location in the S3 bucket to store task results in.',
                }),
              shots: z
                .int()
                .min(0)
                .openapi({ description: 'The number of shots to use for the task.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: "Tags to be added to the quantum task you're creating." }),
            })
            .openapi({
              required: [
                'action',
                'clientToken',
                'deviceArn',
                'outputS3Bucket',
                'outputS3KeyPrefix',
                'shots',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateQuantumTaskResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'DeviceOfflineException',
      content: { 'application/json': { schema: DeviceOfflineExceptionSchema } },
    },
    483: {
      description: 'DeviceRetiredException',
      content: { 'application/json': { schema: DeviceRetiredExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getDeviceDeviceArnRoute = createRoute({
  method: 'get',
  path: '/device/{deviceArn}',
  description:
    '<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>',
  operationId: 'GetDevice',
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
      deviceArn: z
        .string()
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'deviceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the device to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getJobJobArnRoute = createRoute({
  method: 'get',
  path: '/job/{jobArn}',
  description: 'Retrieves the specified Amazon Braket job.',
  operationId: 'GetJob',
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
      jobArn: z
        .string()
        .regex(/^arn:aws[a-z\-]*:braket:[a-z0-9\-]*:[0-9]{12}:job\/.*$/)
        .openapi({
          param: {
            name: 'jobArn',
            in: 'path',
            required: true,
            description: 'The ARN of the job to retrieve.',
            schema: {
              type: 'string',
              pattern: '^arn:aws[a-z\\-]*:braket:[a-z0-9\\-]*:[0-9]{12}:job/.*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getQuantumTaskQuantumTaskArnRoute = createRoute({
  method: 'get',
  path: '/quantum-task/{quantumTaskArn}',
  description: 'Retrieves the specified quantum task.',
  operationId: 'GetQuantumTask',
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
      quantumTaskArn: z
        .string()
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'quantumTaskArn',
            in: 'path',
            required: true,
            description: 'the ARN of the task to retrieve.',
            schema: { type: 'string', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQuantumTaskResponseSchema } },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Shows the tags associated with this resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'Specify the <code>resourceArn</code> for the resource whose tags to display.',
            schema: { type: 'string' },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Add a tag to the specified resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'Specify the <code>resourceArn</code> of the resource to which a tag will be added.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({ description: 'Specify the tags to add to the resource.' }),
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
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDevicesRoute = createRoute({
  method: 'post',
  path: '/devices',
  description: 'Searches for devices using the specified filters.',
  operationId: 'SearchDevices',
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
              filters: z
                .array(SearchDevicesFilterSchema)
                .min(0)
                .max(10)
                .openapi({ description: 'The filter values to use to search for a device.' }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.',
                }),
            })
            .openapi({ required: ['filters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchDevicesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  description: 'Searches for Amazon Braket jobs that match the specified filter values.',
  operationId: 'SearchJobs',
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
              filters: z
                .array(SearchJobsFilterSchema)
                .min(0)
                .max(10)
                .openapi({ description: 'The filter values to use when searching for a job.' }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return in the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.',
                }),
            })
            .openapi({ required: ['filters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchJobsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postQuantumTasksRoute = createRoute({
  method: 'post',
  path: '/quantum-tasks',
  description: 'Searches for tasks that match the specified filter values.',
  operationId: 'SearchQuantumTasks',
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
              filters: z
                .array(SearchQuantumTasksFilterSchema)
                .min(0)
                .max(10)
                .openapi({
                  description: 'Array of <code>SearchQuantumTasksFilter</code> objects.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Maximum number of results to return in the response.' }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.',
                }),
            })
            .openapi({ required: ['filters'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchQuantumTasksResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Remove tags from a resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'Specify the <code>resourceArn</code> for the resource from which to remove the tags.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'Specify the keys for the tags to remove from the resource.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
