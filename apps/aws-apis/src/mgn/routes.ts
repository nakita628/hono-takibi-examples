import { createRoute, z } from '@hono/zod-openapi'

const ARNSchema = z.string().min(20).max(2048).openapi('ARN')

const ISO8601DatetimeStringSchema = z
  .string()
  .regex(
    /^[1-9][0-9]*-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?Z$/,
  )
  .min(19)
  .max(32)
  .openapi('ISO8601DatetimeString')

const InitiatedBySchema = z
  .enum(['START_TEST', 'START_CUTOVER', 'DIAGNOSTIC', 'TERMINATE'])
  .openapi('InitiatedBy')

const JobIDSchema = z
  .string()
  .regex(/^mgnjob-[0-9a-zA-Z]{17}$/)
  .length(24)
  .openapi('JobID')

const LaunchStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'LAUNCHED', 'FAILED', 'TERMINATED'])
  .openapi('LaunchStatus')

const EC2InstanceIDSchema = z
  .string()
  .regex(/^i-[0-9a-fA-F]{8,}$/)
  .min(0)
  .max(255)
  .openapi('EC2InstanceID')

const BoundedStringSchema = z.string().min(0).max(256).openapi('BoundedString')

const PostLaunchActionExecutionStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCESS', 'FAILED'])
  .openapi('PostLaunchActionExecutionStatus')

const JmesPathStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_\[\]]+)*$/)
  .min(1)
  .max(1011)
  .openapi('JmesPathString')

const SsmExternalParameterSchema = z
  .object({
    dynamicPath: JmesPathStringSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Document external parameters dynamic path.',
    }),
  })
  .openapi({ description: 'AWS Systems Manager Document external parameter.', required: [] })
  .openapi('SsmExternalParameter')

const SsmDocumentExternalParametersSchema = z
  .record(z.string(), SsmExternalParameterSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('SsmDocumentExternalParameters')

const BooleanSchema = z.boolean().openapi('Boolean')

const SsmParameterStoreParameterNameSchema = z
  .string()
  .regex(/^([A-Za-z0-9_\.-])+$/)
  .min(1)
  .max(1011)
  .openapi('SsmParameterStoreParameterName')

const SsmParameterStoreParameterTypeSchema = z
  .literal('STRING')
  .openapi('SsmParameterStoreParameterType')

const SsmParameterStoreParameterSchema = z
  .object({
    parameterName: SsmParameterStoreParameterNameSchema.openapi({
      description: 'AWS Systems Manager Parameter Store parameter name.',
    }),
    parameterType: SsmParameterStoreParameterTypeSchema.openapi({
      description: 'AWS Systems Manager Parameter Store parameter type.',
    }),
  })
  .openapi({
    required: ['parameterName', 'parameterType'],
    description: 'AWS Systems Manager Parameter Store parameter.',
  })
  .openapi('SsmParameterStoreParameter')

const SsmParameterStoreParametersSchema = z
  .array(SsmParameterStoreParameterSchema)
  .min(0)
  .max(10)
  .openapi('SsmParameterStoreParameters')

const SsmDocumentParametersSchema = z
  .record(z.string(), SsmParameterStoreParametersSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('SsmDocumentParameters')

const SsmDocumentNameSchema = z
  .string()
  .regex(/^([A-Za-z0-9\/:_\.-])+$/)
  .min(3)
  .max(172)
  .openapi('SsmDocumentName')

const StrictlyPositiveIntegerSchema = z.int().min(1).openapi('StrictlyPositiveInteger')

const SsmDocumentSchema = z
  .object({
    actionName: BoundedStringSchema.openapi({
      description: 'User-friendly name for the AWS Systems Manager Document.',
    }),
    externalParameters: SsmDocumentExternalParametersSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Document external parameters.',
    }),
    mustSucceedForCutover: BooleanSchema.exactOptional().openapi({
      description: 'If true, Cutover will not be enabled if the document has failed.',
    }),
    parameters: SsmDocumentParametersSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Document parameters.',
    }),
    ssmDocumentName: SsmDocumentNameSchema.openapi({
      description: 'AWS Systems Manager Document name or full ARN.',
    }),
    timeoutSeconds: StrictlyPositiveIntegerSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Document timeout seconds.',
    }),
  })
  .openapi({
    required: ['actionName', 'ssmDocumentName'],
    description: 'AWS Systems Manager Document.',
  })
  .openapi('SsmDocument')

const SsmDocumentTypeSchema = z.enum(['AUTOMATION', 'COMMAND']).openapi('SsmDocumentType')

const JobPostLaunchActionsLaunchStatusSchema = z
  .object({
    executionID: BoundedStringSchema.exactOptional().openapi({
      description:
        "AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.",
    }),
    executionStatus: PostLaunchActionExecutionStatusSchema.exactOptional().openapi({
      description: "AWS Systems Manager Document's execution status.",
    }),
    failureReason: BoundedStringSchema.exactOptional().openapi({
      description: "AWS Systems Manager Document's failure reason.",
    }),
    ssmDocument: SsmDocumentSchema.exactOptional().openapi({
      description: "AWS Systems Manager's Document of the of the Job Post Launch Actions.",
    }),
    ssmDocumentType: SsmDocumentTypeSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Document type.',
    }),
  })
  .openapi({ description: 'Launch Status of the Job Post Launch Actions.', required: [] })
  .openapi('JobPostLaunchActionsLaunchStatus')

const PostLaunchActionsLaunchStatusListSchema = z
  .array(JobPostLaunchActionsLaunchStatusSchema)
  .openapi('PostLaunchActionsLaunchStatusList')

const PostLaunchActionsStatusSchema = z
  .object({
    postLaunchActionsLaunchStatusList:
      PostLaunchActionsLaunchStatusListSchema.exactOptional().openapi({
        description: 'List of Post Launch Action status.',
      }),
    ssmAgentDiscoveryDatetime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description:
        'Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.',
    }),
  })
  .openapi({
    description: 'Status of the Post Launch Actions running on the Test or Cutover instance.',
    required: [],
  })
  .openapi('PostLaunchActionsStatus')

const SourceServerIDSchema = z
  .string()
  .regex(/^s-[0-9a-zA-Z]{17}$/)
  .length(19)
  .openapi('SourceServerID')

type ParticipatingServerType = {
  launchStatus?: z.infer<typeof LaunchStatusSchema> & unknown
  launchedEc2InstanceID?: z.infer<typeof EC2InstanceIDSchema> & unknown
  postLaunchActionsStatus?: z.infer<typeof PostLaunchActionsStatusSchema> & unknown
  sourceServerID: z.infer<typeof SourceServerIDSchema> & unknown
}

const ParticipatingServerSchema: z.ZodType<ParticipatingServerType> = z
  .object({
    launchStatus: LaunchStatusSchema.exactOptional().openapi({
      description: 'Participating server launch status.',
    }),
    launchedEc2InstanceID: EC2InstanceIDSchema.exactOptional().openapi({
      description: "Participating server's launched ec2 instance ID.",
    }),
    postLaunchActionsStatus: PostLaunchActionsStatusSchema.exactOptional().openapi({
      description: "Participating server's Post Launch Actions Status.",
    }),
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Participating server Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], description: 'Server participating in Job.' })
  .openapi('ParticipatingServer')

type ParticipatingServersType = z.infer<typeof ParticipatingServerSchema>[]

const ParticipatingServersSchema: z.ZodType<ParticipatingServersType> = z
  .array(ParticipatingServerSchema)
  .openapi('ParticipatingServers')

const JobStatusSchema = z.enum(['PENDING', 'STARTED', 'COMPLETED']).openapi('JobStatus')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagsMapSchema = z.record(z.string(), TagValueSchema).openapi('TagsMap')

const JobTypeSchema = z.enum(['LAUNCH', 'TERMINATE']).openapi('JobType')

type JobType = {
  arn?: z.infer<typeof ARNSchema> & unknown
  creationDateTime?: z.infer<typeof ISO8601DatetimeStringSchema> & unknown
  endDateTime?: z.infer<typeof ISO8601DatetimeStringSchema> & unknown
  initiatedBy?: z.infer<typeof InitiatedBySchema> & unknown
  jobID: z.infer<typeof JobIDSchema> & unknown
  participatingServers?: z.infer<typeof ParticipatingServersSchema> & unknown
  status?: z.infer<typeof JobStatusSchema> & unknown
  tags?: z.infer<typeof TagsMapSchema> & unknown
  type?: z.infer<typeof JobTypeSchema> & unknown
}

const JobSchema: z.ZodType<JobType> = z
  .object({
    arn: ARNSchema.exactOptional().openapi({ description: 'the ARN of the specific Job.' }),
    creationDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Job creation time.',
    }),
    endDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Job end time.',
    }),
    initiatedBy: InitiatedBySchema.exactOptional().openapi({
      description: 'Job initiated by field.',
    }),
    jobID: JobIDSchema.openapi({ description: 'Job ID.' }),
    participatingServers: ParticipatingServersSchema.exactOptional().openapi({
      description: 'Servers participating in a specific Job.',
    }),
    status: JobStatusSchema.exactOptional().openapi({ description: 'Job status.' }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Tags associated with specific Job.',
    }),
    type: JobTypeSchema.exactOptional().openapi({ description: 'Job type.' }),
  })
  .openapi({ required: ['jobID'], description: 'Job.' })
  .openapi('Job')

type JobsListType = z.infer<typeof JobSchema>[]

const JobsListSchema: z.ZodType<JobsListType> = z.array(JobSchema).openapi('JobsList')

const PaginationTokenSchema = z.string().min(0).max(2048).openapi('PaginationToken')

type DescribeJobsResponseType = {
  items?: z.infer<typeof JobsListSchema> & unknown
  nextToken?: z.infer<typeof PaginationTokenSchema> & unknown
}

const BootModeSchema = z.enum(['LEGACY_BIOS', 'UEFI']).openapi('BootMode')

const EC2LaunchConfigurationTemplateIDSchema = z
  .string()
  .regex(/^lt-[0-9a-z]{17}$/)
  .length(20)
  .openapi('EC2LaunchConfigurationTemplateID')

const PositiveIntegerSchema = z.int().min(0).openapi('PositiveInteger')

const VolumeTypeSchema = z
  .enum(['io1', 'io2', 'gp3', 'gp2', 'st1', 'sc1', 'standard'])
  .openapi('VolumeType')

const LaunchTemplateDiskConfSchema = z
  .object({
    iops: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Launch template disk iops configuration.',
    }),
    throughput: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Launch template disk throughput configuration.',
    }),
    volumeType: VolumeTypeSchema.exactOptional().openapi({
      description: 'Launch template disk volume type configuration.',
    }),
  })
  .openapi({ description: 'Launch template disk configuration.', required: [] })
  .openapi('LaunchTemplateDiskConf')

const LaunchConfigurationTemplateIDSchema = z
  .string()
  .regex(/^lct-[0-9a-zA-Z]{17}$/)
  .length(21)
  .openapi('LaunchConfigurationTemplateID')

const LaunchDispositionSchema = z.enum(['STOPPED', 'STARTED']).openapi('LaunchDisposition')

const LicensingSchema = z
  .object({
    osByol: BooleanSchema.exactOptional().openapi({ description: 'Configure BYOL OS licensing.' }),
  })
  .openapi({ description: 'Configure Licensing.', required: [] })
  .openapi('Licensing')

const CloudWatchLogGroupNameSchema = z
  .string()
  .regex(/^[\.\-_\/#A-Za-z0-9]+$/)
  .min(1)
  .max(512)
  .openapi('CloudWatchLogGroupName')

const PostLaunchActionsDeploymentTypeSchema = z
  .enum(['TEST_AND_CUTOVER', 'CUTOVER_ONLY', 'TEST_ONLY'])
  .openapi('PostLaunchActionsDeploymentType')

const S3LogBucketNameSchema = z.string().min(3).max(63).openapi('S3LogBucketName')

const SsmDocumentsSchema = z.array(SsmDocumentSchema).min(0).max(10).openapi('SsmDocuments')

const PostLaunchActionsSchema = z
  .object({
    cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.exactOptional().openapi({
      description: "AWS Systems Manager Command's CloudWatch log group name.",
    }),
    deployment: PostLaunchActionsDeploymentTypeSchema.exactOptional().openapi({
      description: 'Deployment type in which AWS Systems Manager Documents will be executed.',
    }),
    s3LogBucket: S3LogBucketNameSchema.exactOptional().openapi({
      description: "AWS Systems Manager Command's logs S3 log bucket.",
    }),
    s3OutputKeyPrefix: BoundedStringSchema.exactOptional().openapi({
      description: "AWS Systems Manager Command's logs S3 output key prefix.",
    }),
    ssmDocuments: SsmDocumentsSchema.exactOptional().openapi({
      description: 'AWS Systems Manager Documents.',
    }),
  })
  .openapi({
    description: 'Post Launch Actions to executed on the Test or Cutover instance.',
    required: [],
  })
  .openapi('PostLaunchActions')

const TargetInstanceTypeRightSizingMethodSchema = z
  .enum(['NONE', 'BASIC'])
  .openapi('TargetInstanceTypeRightSizingMethod')

const LaunchConfigurationTemplateSchema = z
  .object({
    arn: ARNSchema.exactOptional().openapi({
      description: 'ARN of the Launch Configuration Template.',
    }),
    associatePublicIpAddress: BooleanSchema.exactOptional().openapi({
      description: 'Associate public Ip address.',
    }),
    bootMode: BootModeSchema.exactOptional().openapi({
      description: 'Launch configuration template boot mode.',
    }),
    copyPrivateIp: BooleanSchema.exactOptional().openapi({ description: 'Copy private Ip.' }),
    copyTags: BooleanSchema.exactOptional().openapi({ description: 'Copy tags.' }),
    ec2LaunchTemplateID: EC2LaunchConfigurationTemplateIDSchema.exactOptional().openapi({
      description: 'EC2 launch template ID.',
    }),
    enableMapAutoTagging: BooleanSchema.exactOptional().openapi({
      description: 'Enable map auto tagging.',
    }),
    largeVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Large volume config.',
    }),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description: 'ID of the Launch Configuration Template.',
    }),
    launchDisposition: LaunchDispositionSchema.exactOptional().openapi({
      description: 'Launch disposition.',
    }),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.exactOptional().openapi({
      description: 'Launch configuration template map auto tagging MPE ID.',
    }),
    postLaunchActions: PostLaunchActionsSchema.exactOptional().openapi({
      description: 'Post Launch Actions of the Launch Configuration Template.',
    }),
    smallVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Small volume config.',
    }),
    smallVolumeMaxSize: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Small volume maximum size.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Tags of the Launch Configuration Template.',
    }),
    targetInstanceTypeRightSizingMethod:
      TargetInstanceTypeRightSizingMethodSchema.exactOptional().openapi({
        description: 'Target instance type right-sizing method.',
      }),
  })
  .openapi({ required: ['launchConfigurationTemplateID'] })
  .openapi('LaunchConfigurationTemplate')

type LaunchConfigurationTemplatesType = z.infer<typeof LaunchConfigurationTemplateSchema>[]

const LaunchConfigurationTemplatesSchema: z.ZodType<LaunchConfigurationTemplatesType> = z
  .array(LaunchConfigurationTemplateSchema)
  .min(0)
  .max(200)
  .openapi('LaunchConfigurationTemplates')

type DescribeLaunchConfigurationTemplatesResponseType = {
  items?: z.infer<typeof LaunchConfigurationTemplatesSchema> & unknown
  nextToken?: z.infer<typeof PaginationTokenSchema> & unknown
}

type StartCutoverResponseType = { job?: z.infer<typeof JobSchema> & unknown }

type StartTestResponseType = { job?: z.infer<typeof JobSchema> & unknown }

type TerminateTargetInstancesResponseType = { job?: z.infer<typeof JobSchema> & unknown }

const ApplicationHealthStatusSchema = z
  .enum(['HEALTHY', 'LAGGING', 'ERROR'])
  .openapi('ApplicationHealthStatus')

const ApplicationProgressStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
  .openapi('ApplicationProgressStatus')

const ApplicationAggregatedStatusSchema = z
  .object({
    healthStatus: ApplicationHealthStatusSchema.exactOptional().openapi({
      description: 'Application aggregated status health status.',
    }),
    lastUpdateDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Application aggregated status last update dateTime.',
    }),
    progressStatus: ApplicationProgressStatusSchema.exactOptional().openapi({
      description: 'Application aggregated status progress status.',
    }),
    totalSourceServers: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Application aggregated status total source servers amount.',
    }),
  })
  .openapi({ description: 'Application aggregated status.', required: [] })
  .openapi('ApplicationAggregatedStatus')

const ApplicationIDSchema = z
  .string()
  .regex(/^app-[0-9a-zA-Z]{17}$/)
  .length(21)
  .openapi('ApplicationID')

const ApplicationDescriptionSchema = z
  .string()
  .regex(/^[^\x00]*$/)
  .min(0)
  .max(600)
  .openapi('ApplicationDescription')

const ApplicationNameSchema = z
  .string()
  .regex(/^[^\s\x00]( *[^\s\x00])*$/)
  .min(1)
  .max(256)
  .openapi('ApplicationName')

const WaveIDSchema = z
  .string()
  .regex(/^wave-[0-9a-zA-Z]{17}$/)
  .length(22)
  .openapi('WaveID')

const ApplicationSchema = z
  .object({
    applicationAggregatedStatus: ApplicationAggregatedStatusSchema.exactOptional().openapi({
      description: 'Application aggregated status.',
    }),
    applicationID: ApplicationIDSchema.exactOptional().openapi({ description: 'Application ID.' }),
    arn: ARNSchema.exactOptional().openapi({ description: 'Application ARN.' }),
    creationDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Application creation dateTime.',
    }),
    description: ApplicationDescriptionSchema.exactOptional().openapi({
      description: 'Application description.',
    }),
    isArchived: BooleanSchema.exactOptional().openapi({
      description: 'Application archival status.',
    }),
    lastModifiedDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Application last modified dateTime.',
    }),
    name: ApplicationNameSchema.exactOptional().openapi({ description: 'Application name.' }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Application tags.' }),
    waveID: WaveIDSchema.exactOptional().openapi({ description: 'Application wave ID.' }),
  })
  .openapi({ required: [] })
  .openapi('Application')

const UninitializedAccountExceptionSchema = z.any().openapi('UninitializedAccountException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const WaveDescriptionSchema = z
  .string()
  .regex(/^[^\x00]*$/)
  .min(0)
  .max(600)
  .openapi('WaveDescription')

const WaveNameSchema = z
  .string()
  .regex(/^[^\s\x00]( *[^\s\x00])*$/)
  .min(1)
  .max(256)
  .openapi('WaveName')

const WaveHealthStatusSchema = z.enum(['HEALTHY', 'LAGGING', 'ERROR']).openapi('WaveHealthStatus')

const WaveProgressStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
  .openapi('WaveProgressStatus')

const WaveAggregatedStatusSchema = z
  .object({
    healthStatus: WaveHealthStatusSchema.exactOptional().openapi({
      description: 'Wave aggregated status health status.',
    }),
    lastUpdateDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Wave aggregated status last update dateTime.',
    }),
    progressStatus: WaveProgressStatusSchema.exactOptional().openapi({
      description: 'Wave aggregated status progress status.',
    }),
    replicationStartedDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'DateTime marking when the first source server in the wave started replication.',
    }),
    totalApplications: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Wave aggregated status total applications amount.',
    }),
  })
  .openapi({ description: 'Wave aggregated status.', required: [] })
  .openapi('WaveAggregatedStatus')

const WaveSchema = z
  .object({
    arn: ARNSchema.exactOptional().openapi({ description: 'Wave ARN.' }),
    creationDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Wave creation dateTime.',
    }),
    description: WaveDescriptionSchema.exactOptional().openapi({
      description: 'Wave description.',
    }),
    isArchived: BooleanSchema.exactOptional().openapi({ description: 'Wave archival status.' }),
    lastModifiedDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Wave last modified dateTime.',
    }),
    name: WaveNameSchema.exactOptional().openapi({ description: 'Wave name.' }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Wave tags.' }),
    waveAggregatedStatus: WaveAggregatedStatusSchema.exactOptional().openapi({
      description: 'Wave aggregated status.',
    }),
    waveID: WaveIDSchema.exactOptional().openapi({ description: 'Wave ID.' }),
  })
  .openapi({ required: [] })
  .openapi('Wave')

const AssociateApplicationsResponseSchema = z
  .looseObject({})
  .openapi('AssociateApplicationsResponse')

const AssociateSourceServersResponseSchema = z
  .looseObject({})
  .openapi('AssociateSourceServersResponse')

const DataReplicationErrorStringSchema = z
  .enum([
    'AGENT_NOT_SEEN',
    'SNAPSHOTS_FAILURE',
    'NOT_CONVERGING',
    'UNSTABLE_NETWORK',
    'FAILED_TO_CREATE_SECURITY_GROUP',
    'FAILED_TO_LAUNCH_REPLICATION_SERVER',
    'FAILED_TO_BOOT_REPLICATION_SERVER',
    'FAILED_TO_AUTHENTICATE_WITH_SERVICE',
    'FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE',
    'FAILED_TO_CREATE_STAGING_DISKS',
    'FAILED_TO_ATTACH_STAGING_DISKS',
    'FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT',
    'FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER',
    'FAILED_TO_START_DATA_TRANSFER',
    'UNSUPPORTED_VM_CONFIGURATION',
    'LAST_SNAPSHOT_JOB_FAILED',
  ])
  .openapi('DataReplicationErrorString')

const LargeBoundedStringSchema = z.string().min(0).max(65536).openapi('LargeBoundedString')

const DataReplicationErrorSchema = z
  .object({
    error: DataReplicationErrorStringSchema.exactOptional().openapi({
      description: 'Error in data replication.',
    }),
    rawError: LargeBoundedStringSchema.exactOptional().openapi({
      description: 'Error in data replication.',
    }),
  })
  .openapi({ description: 'Error in data replication.', required: [] })
  .openapi('DataReplicationError')

const DataReplicationInitiationStepNameSchema = z
  .enum([
    'WAIT',
    'CREATE_SECURITY_GROUP',
    'LAUNCH_REPLICATION_SERVER',
    'BOOT_REPLICATION_SERVER',
    'AUTHENTICATE_WITH_SERVICE',
    'DOWNLOAD_REPLICATION_SOFTWARE',
    'CREATE_STAGING_DISKS',
    'ATTACH_STAGING_DISKS',
    'PAIR_REPLICATION_SERVER_WITH_AGENT',
    'CONNECT_AGENT_TO_REPLICATION_SERVER',
    'START_DATA_TRANSFER',
  ])
  .openapi('DataReplicationInitiationStepName')

const DataReplicationInitiationStepStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'SKIPPED'])
  .openapi('DataReplicationInitiationStepStatus')

const DataReplicationInitiationStepSchema = z
  .object({
    name: DataReplicationInitiationStepNameSchema.exactOptional().openapi({
      description: 'Request to query data initiation step name.',
    }),
    status: DataReplicationInitiationStepStatusSchema.exactOptional().openapi({
      description: 'Request to query data initiation status.',
    }),
  })
  .openapi({ description: 'Data replication initiation step.', required: [] })
  .openapi('DataReplicationInitiationStep')

const DataReplicationInitiationStepsSchema = z
  .array(DataReplicationInitiationStepSchema)
  .openapi('DataReplicationInitiationSteps')

const DataReplicationInitiationSchema = z
  .object({
    nextAttemptDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to query next data initiation date and time.',
    }),
    startDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to query data initiation start date and time.',
    }),
    steps: DataReplicationInitiationStepsSchema.exactOptional().openapi({
      description: 'Request to query data initiation steps.',
    }),
  })
  .openapi({ description: 'Data replication initiation.', required: [] })
  .openapi('DataReplicationInitiation')

const DataReplicationStateSchema = z
  .enum([
    'STOPPED',
    'INITIATING',
    'INITIAL_SYNC',
    'BACKLOG',
    'CREATING_SNAPSHOT',
    'CONTINUOUS',
    'PAUSED',
    'RESCAN',
    'STALLED',
    'DISCONNECTED',
    'PENDING_SNAPSHOT_SHIPPING',
    'SHIPPING_SNAPSHOT',
  ])
  .openapi('DataReplicationState')

const ISO8601DurationStringSchema = z.string().min(1).max(64).openapi('ISO8601DurationString')

const DataReplicationInfoReplicatedDiskSchema = z
  .object({
    backloggedStorageBytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Request to query data replication backlog size in bytes.',
    }),
    deviceName: BoundedStringSchema.exactOptional().openapi({
      description: 'Request to query device name.',
    }),
    replicatedStorageBytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Request to query amount of data replicated in bytes.',
    }),
    rescannedStorageBytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Request to query amount of data rescanned in bytes.',
    }),
    totalStorageBytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Request to query total amount of data replicated in bytes.',
    }),
  })
  .openapi({ description: 'Request to query disks replicated.', required: [] })
  .openapi('DataReplicationInfoReplicatedDisk')

const DataReplicationInfoReplicatedDisksSchema = z
  .array(DataReplicationInfoReplicatedDiskSchema)
  .min(0)
  .max(60)
  .openapi('DataReplicationInfoReplicatedDisks')

const DataReplicationInfoSchema = z
  .object({
    dataReplicationError: DataReplicationErrorSchema.exactOptional().openapi({
      description: 'Error in obtaining data replication info.',
    }),
    dataReplicationInitiation: DataReplicationInitiationSchema.exactOptional().openapi({
      description: 'Request to query whether data replication has been initiated.',
    }),
    dataReplicationState: DataReplicationStateSchema.exactOptional().openapi({
      description: 'Request to query the data replication state.',
    }),
    etaDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to query the time when data replication will be complete.',
    }),
    lagDuration: ISO8601DurationStringSchema.exactOptional().openapi({
      description: 'Request to query data replication lag duration.',
    }),
    lastSnapshotDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to query data replication last snapshot time.',
    }),
    replicatedDisks: DataReplicationInfoReplicatedDisksSchema.exactOptional().openapi({
      description: 'Request to query disks replicated.',
    }),
  })
  .openapi({ description: 'Request data replication info.', required: [] })
  .openapi('DataReplicationInfo')

const FirstBootSchema = z.enum(['WAITING', 'SUCCEEDED', 'UNKNOWN', 'STOPPED']).openapi('FirstBoot')

const LaunchedInstanceSchema = z
  .object({
    ec2InstanceID: EC2InstanceIDSchema.exactOptional().openapi({
      description: 'Launched instance EC2 ID.',
    }),
    firstBoot: FirstBootSchema.exactOptional().openapi({
      description: 'Launched instance first boot.',
    }),
    jobID: JobIDSchema.exactOptional().openapi({ description: 'Launched instance Job ID.' }),
  })
  .openapi({ description: 'Launched instance.', required: [] })
  .openapi('LaunchedInstance')

const LifeCycleLastCutoverFinalizedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle Cutover finalized date and time.',
    }),
  })
  .openapi({ description: 'Lifecycle Cutover finalized', required: [] })
  .openapi('LifeCycleLastCutoverFinalized')

const LifeCycleLastCutoverInitiatedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({ description: '<p/>' }),
    jobID: JobIDSchema.exactOptional().openapi({
      description: 'Lifecycle last Cutover initiated by Job ID.',
    }),
  })
  .openapi({ description: 'Lifecycle last Cutover initiated.', required: [] })
  .openapi('LifeCycleLastCutoverInitiated')

const LifeCycleLastCutoverRevertedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle last Cutover reverted API call date time.',
    }),
  })
  .openapi({ description: 'Lifecycle last Cutover reverted.', required: [] })
  .openapi('LifeCycleLastCutoverReverted')

const LifeCycleLastCutoverSchema = z
  .object({
    finalized: LifeCycleLastCutoverFinalizedSchema.exactOptional().openapi({
      description: 'Lifecycle Cutover finalized date and time.',
    }),
    initiated: LifeCycleLastCutoverInitiatedSchema.exactOptional().openapi({
      description: 'Lifecycle last Cutover initiated.',
    }),
    reverted: LifeCycleLastCutoverRevertedSchema.exactOptional().openapi({
      description: 'Lifecycle last Cutover reverted.',
    }),
  })
  .openapi({ description: 'Lifecycle last Cutover .', required: [] })
  .openapi('LifeCycleLastCutover')

const LifeCycleLastTestFinalizedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle Test failed API call date and time.',
    }),
  })
  .openapi({ description: 'Lifecycle last Test finalized.', required: [] })
  .openapi('LifeCycleLastTestFinalized')

const LifeCycleLastTestInitiatedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle last Test initiated API call date and time.',
    }),
    jobID: JobIDSchema.exactOptional().openapi({
      description: 'Lifecycle last Test initiated Job ID.',
    }),
  })
  .openapi({ description: 'Lifecycle last Test initiated.', required: [] })
  .openapi('LifeCycleLastTestInitiated')

const LifeCycleLastTestRevertedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle last Test reverted API call date and time.',
    }),
  })
  .openapi({ description: 'Lifecycle last Test reverted.', required: [] })
  .openapi('LifeCycleLastTestReverted')

const LifeCycleLastTestSchema = z
  .object({
    finalized: LifeCycleLastTestFinalizedSchema.exactOptional().openapi({
      description: 'Lifecycle last Test finalized.',
    }),
    initiated: LifeCycleLastTestInitiatedSchema.exactOptional().openapi({
      description: 'Lifecycle last Test initiated.',
    }),
    reverted: LifeCycleLastTestRevertedSchema.exactOptional().openapi({
      description: 'Lifecycle last Test reverted.',
    }),
  })
  .openapi({ description: 'Lifecycle last Test.', required: [] })
  .openapi('LifeCycleLastTest')

const LifeCycleStateSchema = z
  .enum([
    'STOPPED',
    'NOT_READY',
    'READY_FOR_TEST',
    'TESTING',
    'READY_FOR_CUTOVER',
    'CUTTING_OVER',
    'CUTOVER',
    'DISCONNECTED',
    'DISCOVERED',
    'PENDING_INSTALLATION',
  ])
  .openapi('LifeCycleState')

const LifeCycleSchema = z
  .object({
    addedToServiceDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle added to service data and time.',
    }),
    elapsedReplicationDuration: ISO8601DurationStringSchema.exactOptional().openapi({
      description: 'Lifecycle elapsed time and duration.',
    }),
    firstByteDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle replication initiation date and time.',
    }),
    lastCutover: LifeCycleLastCutoverSchema.exactOptional().openapi({
      description: 'Lifecycle last Cutover.',
    }),
    lastSeenByServiceDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Lifecycle last seen date and time.',
    }),
    lastTest: LifeCycleLastTestSchema.exactOptional().openapi({
      description: 'Lifecycle last Test.',
    }),
    state: LifeCycleStateSchema.exactOptional().openapi({ description: 'Lifecycle state.' }),
  })
  .openapi({ description: 'Lifecycle.', required: [] })
  .openapi('LifeCycle')

const ReplicationTypeSchema = z
  .enum(['AGENT_BASED', 'SNAPSHOT_SHIPPING'])
  .openapi('ReplicationType')

const CPUSchema = z
  .object({
    cores: PositiveIntegerSchema.exactOptional().openapi({
      description: 'The number of CPU cores on the source server.',
    }),
    modelName: BoundedStringSchema.exactOptional().openapi({
      description: "The source server's CPU model name.",
    }),
  })
  .openapi({ description: 'Source server CPU information.', required: [] })
  .openapi('CPU')

const CpusSchema = z.array(CPUSchema).min(0).max(256).openapi('Cpus')

const DiskSchema = z
  .object({
    bytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'The amount of storage on the disk in bytes.',
    }),
    deviceName: BoundedStringSchema.exactOptional().openapi({
      description: 'The disk or device name.',
    }),
  })
  .openapi({ description: 'The disk identifier.', required: [] })
  .openapi('Disk')

const DisksSchema = z.array(DiskSchema).min(0).max(1000).openapi('Disks')

const IdentificationHintsSchema = z
  .object({
    awsInstanceID: EC2InstanceIDSchema.exactOptional().openapi({
      description: 'AWS Instance ID identification hint.',
    }),
    fqdn: BoundedStringSchema.exactOptional().openapi({
      description: 'FQDN address identification hint.',
    }),
    hostname: BoundedStringSchema.exactOptional().openapi({
      description: 'Hostname identification hint.',
    }),
    vmPath: BoundedStringSchema.exactOptional().openapi({
      description: 'vCenter VM path identification hint.',
    }),
    vmWareUuid: BoundedStringSchema.exactOptional().openapi({
      description: 'vmWare UUID identification hint.',
    }),
  })
  .openapi({ description: 'Identification hints.', required: [] })
  .openapi('IdentificationHints')

const IPsListSchema = z.array(BoundedStringSchema).openapi('IPsList')

const NetworkInterfaceSchema = z
  .object({
    ips: IPsListSchema.exactOptional().openapi({ description: 'Network interface IPs.' }),
    isPrimary: BooleanSchema.exactOptional().openapi({
      description: 'Network interface primary IP.',
    }),
    macAddress: BoundedStringSchema.exactOptional().openapi({
      description: 'Network interface Mac address.',
    }),
  })
  .openapi({ description: 'Network interface.', required: [] })
  .openapi('NetworkInterface')

const NetworkInterfacesSchema = z
  .array(NetworkInterfaceSchema)
  .min(0)
  .max(32)
  .openapi('NetworkInterfaces')

const OSSchema = z
  .object({
    fullString: BoundedStringSchema.exactOptional().openapi({ description: 'OS full string.' }),
  })
  .openapi({ description: 'Operating System.', required: [] })
  .openapi('OS')

const EC2InstanceTypeSchema = z.string().min(0).max(255).openapi('EC2InstanceType')

const SourcePropertiesSchema = z
  .object({
    cpus: CpusSchema.exactOptional().openapi({ description: 'Source Server CPUs.' }),
    disks: DisksSchema.exactOptional().openapi({ description: 'Source Server disks.' }),
    identificationHints: IdentificationHintsSchema.exactOptional().openapi({
      description: 'Source server identification hints.',
    }),
    lastUpdatedDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Source server last update date and time.',
    }),
    networkInterfaces: NetworkInterfacesSchema.exactOptional().openapi({
      description: 'Source server network interfaces.',
    }),
    os: OSSchema.exactOptional().openapi({ description: 'Source server OS.' }),
    ramBytes: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Source server RAM in bytes.',
    }),
    recommendedInstanceType: EC2InstanceTypeSchema.exactOptional().openapi({
      description: 'Source server recommended instance type.',
    }),
  })
  .openapi({ description: 'Source server properties.', required: [] })
  .openapi('SourceProperties')

const VcenterClientIDSchema = z
  .string()
  .regex(/^vcc-[0-9a-zA-Z]{17}$/)
  .length(21)
  .openapi('VcenterClientID')

const SourceServerSchema = z
  .object({
    applicationID: ApplicationIDSchema.exactOptional().openapi({
      description: 'Source server application ID.',
    }),
    arn: ARNSchema.exactOptional().openapi({ description: 'Source server ARN.' }),
    dataReplicationInfo: DataReplicationInfoSchema.exactOptional().openapi({
      description: 'Source server data replication info.',
    }),
    fqdnForActionFramework: BoundedStringSchema.exactOptional().openapi({
      description: 'Source server fqdn for action framework.',
    }),
    isArchived: BooleanSchema.exactOptional().openapi({
      description: 'Source server archived status.',
    }),
    launchedInstance: LaunchedInstanceSchema.exactOptional().openapi({
      description: 'Source server launched instance.',
    }),
    lifeCycle: LifeCycleSchema.exactOptional().openapi({
      description: 'Source server lifecycle state.',
    }),
    replicationType: ReplicationTypeSchema.exactOptional().openapi({
      description: 'Source server replication type.',
    }),
    sourceProperties: SourcePropertiesSchema.exactOptional().openapi({
      description: 'Source server properties.',
    }),
    sourceServerID: SourceServerIDSchema.exactOptional().openapi({
      description: 'Source server ID.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Source server Tags.' }),
    userProvidedID: BoundedStringSchema.exactOptional().openapi({
      description: 'Source server user provided ID.',
    }),
    vcenterClientID: VcenterClientIDSchema.exactOptional().openapi({
      description: 'Source server vCenter client id.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SourceServer')

const ChangeServerLifeCycleStateSourceServerLifecycleStateSchema = z
  .enum(['READY_FOR_TEST', 'READY_FOR_CUTOVER', 'CUTOVER'])
  .openapi('ChangeServerLifeCycleStateSourceServerLifecycleState')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ReplicationConfigurationDataPlaneRoutingSchema = z
  .enum(['PRIVATE_IP', 'PUBLIC_IP'])
  .openapi('ReplicationConfigurationDataPlaneRouting')

const ReplicationConfigurationDefaultLargeStagingDiskTypeSchema = z
  .enum(['GP2', 'ST1', 'GP3'])
  .openapi('ReplicationConfigurationDefaultLargeStagingDiskType')

const ReplicationConfigurationEbsEncryptionSchema = z
  .enum(['DEFAULT', 'CUSTOM'])
  .openapi('ReplicationConfigurationEbsEncryption')

const ReplicationConfigurationTemplateIDSchema = z
  .string()
  .regex(/^rct-[0-9a-zA-Z]{17}$/)
  .length(21)
  .openapi('ReplicationConfigurationTemplateID')

const SecurityGroupIDSchema = z
  .string()
  .regex(/^sg-[0-9a-fA-F]{8,}$/)
  .min(0)
  .max(255)
  .openapi('SecurityGroupID')

const ReplicationServersSecurityGroupsIDsSchema = z
  .array(SecurityGroupIDSchema)
  .min(0)
  .max(32)
  .openapi('ReplicationServersSecurityGroupsIDs')

const SubnetIDSchema = z
  .string()
  .regex(/^subnet-[0-9a-fA-F]{8,}$/)
  .min(0)
  .max(255)
  .openapi('SubnetID')

const ReplicationConfigurationTemplateSchema = z
  .object({
    arn: ARNSchema.exactOptional().openapi({
      description: 'Replication Configuration template ARN.',
    }),
    associateDefaultSecurityGroup: BooleanSchema.exactOptional().openapi({
      description:
        'Replication Configuration template associate default Application Migration Service Security group.',
    }),
    bandwidthThrottling: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Replication Configuration template bandwidth throttling.',
    }),
    createPublicIP: BooleanSchema.exactOptional().openapi({
      description: 'Replication Configuration template create Public IP.',
    }),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.exactOptional().openapi({
      description: 'Replication Configuration template data plane routing.',
    }),
    defaultLargeStagingDiskType:
      ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.exactOptional().openapi({
        description: 'Replication Configuration template use default large Staging Disk type.',
      }),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.exactOptional().openapi({
      description: 'Replication Configuration template EBS encryption.',
    }),
    ebsEncryptionKeyArn: ARNSchema.exactOptional().openapi({
      description: 'Replication Configuration template EBS encryption key ARN.',
    }),
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.openapi({
      description: 'Replication Configuration template ID.',
    }),
    replicationServerInstanceType: EC2InstanceTypeSchema.exactOptional().openapi({
      description: 'Replication Configuration template server instance type.',
    }),
    replicationServersSecurityGroupsIDs:
      ReplicationServersSecurityGroupsIDsSchema.exactOptional().openapi({
        description: 'Replication Configuration template server Security Groups IDs.',
      }),
    stagingAreaSubnetId: SubnetIDSchema.exactOptional().openapi({
      description: 'Replication Configuration template Staging Area subnet ID.',
    }),
    stagingAreaTags: TagsMapSchema.exactOptional().openapi({
      description: 'Replication Configuration template Staging Area Tags.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Replication Configuration template Tags.',
    }),
    useDedicatedReplicationServer: BooleanSchema.exactOptional().openapi({
      description: 'Replication Configuration template use Dedicated Replication Server.',
    }),
  })
  .openapi({ required: ['replicationConfigurationTemplateID'] })
  .openapi('ReplicationConfigurationTemplate')

const DeleteApplicationResponseSchema = z.looseObject({}).openapi('DeleteApplicationResponse')

const DeleteJobResponseSchema = z.looseObject({}).openapi('DeleteJobResponse')

const DeleteLaunchConfigurationTemplateResponseSchema = z
  .looseObject({})
  .openapi('DeleteLaunchConfigurationTemplateResponse')

const DeleteReplicationConfigurationTemplateResponseSchema = z
  .looseObject({})
  .openapi('DeleteReplicationConfigurationTemplateResponse')

const DeleteSourceServerResponseSchema = z.looseObject({}).openapi('DeleteSourceServerResponse')

const DeleteWaveResponseSchema = z.looseObject({}).openapi('DeleteWaveResponse')

const JobLogEventSchema = z
  .enum([
    'JOB_START',
    'SERVER_SKIPPED',
    'CLEANUP_START',
    'CLEANUP_END',
    'CLEANUP_FAIL',
    'SNAPSHOT_START',
    'SNAPSHOT_END',
    'SNAPSHOT_FAIL',
    'USING_PREVIOUS_SNAPSHOT',
    'CONVERSION_START',
    'CONVERSION_END',
    'CONVERSION_FAIL',
    'LAUNCH_START',
    'LAUNCH_FAILED',
    'JOB_CANCEL',
    'JOB_END',
  ])
  .openapi('JobLogEvent')

const JobLogEventDataSchema = z
  .object({
    conversionServerID: EC2InstanceIDSchema.exactOptional().openapi({
      description: 'Job Event conversion Server ID.',
    }),
    rawError: LargeBoundedStringSchema.exactOptional().openapi({ description: 'Job error.' }),
    sourceServerID: SourceServerIDSchema.exactOptional().openapi({
      description: 'Job Event Source Server ID.',
    }),
    targetInstanceID: EC2InstanceIDSchema.exactOptional().openapi({
      description: 'Job Event Target instance ID.',
    }),
  })
  .openapi({ description: 'Job log data', required: [] })
  .openapi('JobLogEventData')

const JobLogSchema = z
  .object({
    event: JobLogEventSchema.exactOptional().openapi({ description: 'Job log event.' }),
    eventData: JobLogEventDataSchema.exactOptional().openapi({ description: 'Job event data' }),
    logDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Job log event date and time.',
    }),
  })
  .openapi({ description: 'Job log.', required: [] })
  .openapi('JobLog')

const JobLogsSchema = z.array(JobLogSchema).openapi('JobLogs')

const DescribeJobLogItemsResponseSchema = z
  .object({
    items: JobLogsSchema.exactOptional().openapi({
      description: 'Request to describe Job log response items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe Job log response next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobLogItemsResponse')

const DescribeJobsResponseSchema: z.ZodType<DescribeJobsResponseType> = z
  .object({
    items: JobsListSchema.exactOptional().openapi({
      description: 'Request to describe Job log items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe Job response by next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobsResponse')

const DescribeJobsRequestFiltersJobIDsSchema = z
  .array(JobIDSchema)
  .min(0)
  .max(1000)
  .openapi('DescribeJobsRequestFiltersJobIDs')

const DescribeLaunchConfigurationTemplatesResponseSchema: z.ZodType<DescribeLaunchConfigurationTemplatesResponseType> =
  z
    .object({
      items: LaunchConfigurationTemplatesSchema.exactOptional().openapi({
        description: 'List of items returned by DescribeLaunchConfigurationTemplates.',
      }),
      nextToken: PaginationTokenSchema.exactOptional().openapi({
        description: 'Next pagination token returned from DescribeLaunchConfigurationTemplates.',
      }),
    })
    .openapi({ required: [] })
    .openapi('DescribeLaunchConfigurationTemplatesResponse')

const ReplicationConfigurationTemplatesSchema = z
  .array(ReplicationConfigurationTemplateSchema)
  .openapi('ReplicationConfigurationTemplates')

const DescribeReplicationConfigurationTemplatesResponseSchema = z
  .object({
    items: ReplicationConfigurationTemplatesSchema.exactOptional().openapi({
      description: 'Request to describe Replication Configuration template by items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe Replication Configuration template by next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeReplicationConfigurationTemplatesResponse')

const SourceServersListSchema = z.array(SourceServerSchema).openapi('SourceServersList')

const DescribeSourceServersResponseSchema = z
  .object({
    items: SourceServersListSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by item.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeSourceServersResponse')

const DescribeSourceServersRequestApplicationIDsSchema = z
  .array(ApplicationIDSchema)
  .min(0)
  .max(200)
  .openapi('DescribeSourceServersRequestApplicationIDs')

const LifeCycleStatesSchema = z
  .array(LifeCycleStateSchema)
  .min(0)
  .max(10)
  .openapi('LifeCycleStates')

const ReplicationTypesSchema = z
  .array(ReplicationTypeSchema)
  .min(0)
  .max(2)
  .openapi('ReplicationTypes')

const DescribeSourceServersRequestFiltersIDsSchema = z
  .array(SourceServerIDSchema)
  .min(0)
  .max(200)
  .openapi('DescribeSourceServersRequestFiltersIDs')

const VcenterClientSchema = z
  .object({
    arn: ARNSchema.exactOptional().openapi({ description: 'Arn of vCenter client.' }),
    datacenterName: BoundedStringSchema.exactOptional().openapi({
      description: 'Datacenter name of vCenter client.',
    }),
    hostname: BoundedStringSchema.exactOptional().openapi({
      description: 'Hostname of vCenter client .',
    }),
    lastSeenDatetime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Last seen time of vCenter client.',
    }),
    sourceServerTags: TagsMapSchema.exactOptional().openapi({
      description: 'Tags for Source Server of vCenter client.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Tags for vCenter client.' }),
    vcenterClientID: VcenterClientIDSchema.exactOptional().openapi({
      description: 'ID of vCenter client.',
    }),
    vcenterUUID: BoundedStringSchema.exactOptional().openapi({
      description: 'Vcenter UUID of vCenter client.',
    }),
  })
  .openapi({ description: 'vCenter client.', required: [] })
  .openapi('VcenterClient')

const VcenterClientListSchema = z.array(VcenterClientSchema).openapi('VcenterClientList')

const DescribeVcenterClientsResponseSchema = z
  .object({
    items: VcenterClientListSchema.exactOptional().openapi({
      description: 'List of items returned by DescribeVcenterClients.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next pagination token returned from DescribeVcenterClients.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeVcenterClientsResponse')

const DisassociateApplicationsResponseSchema = z
  .looseObject({})
  .openapi('DisassociateApplicationsResponse')

const DisassociateSourceServersResponseSchema = z
  .looseObject({})
  .openapi('DisassociateSourceServersResponse')

const SmallBoundedStringSchema = z.string().min(0).max(128).openapi('SmallBoundedString')

const LaunchConfigurationSchema = z
  .object({
    bootMode: BootModeSchema.exactOptional().openapi({
      description: 'Launch configuration boot mode.',
    }),
    copyPrivateIp: BooleanSchema.exactOptional().openapi({
      description: 'Copy Private IP during Launch Configuration.',
    }),
    copyTags: BooleanSchema.exactOptional().openapi({
      description: 'Copy Tags during Launch Configuration.',
    }),
    ec2LaunchTemplateID: BoundedStringSchema.exactOptional().openapi({
      description: 'Launch configuration EC2 Launch template ID.',
    }),
    enableMapAutoTagging: BooleanSchema.exactOptional().openapi({
      description: 'Enable map auto tagging.',
    }),
    launchDisposition: LaunchDispositionSchema.exactOptional().openapi({
      description: 'Launch disposition for launch configuration.',
    }),
    licensing: LicensingSchema.exactOptional().openapi({
      description: 'Launch configuration OS licensing.',
    }),
    mapAutoTaggingMpeID: TagValueSchema.exactOptional().openapi({
      description: 'Map auto tagging MPE ID.',
    }),
    name: SmallBoundedStringSchema.exactOptional().openapi({
      description: 'Launch configuration name.',
    }),
    postLaunchActions: PostLaunchActionsSchema.exactOptional(),
    sourceServerID: SourceServerIDSchema.exactOptional().openapi({
      description: 'Launch configuration Source Server ID.',
    }),
    targetInstanceTypeRightSizingMethod:
      TargetInstanceTypeRightSizingMethodSchema.exactOptional().openapi({
        description: 'Launch configuration Target instance type right sizing method.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LaunchConfiguration')

const ReplicationConfigurationReplicatedDiskStagingDiskTypeSchema = z
  .enum(['AUTO', 'GP2', 'IO1', 'SC1', 'ST1', 'STANDARD', 'GP3', 'IO2'])
  .openapi('ReplicationConfigurationReplicatedDiskStagingDiskType')

const ReplicationConfigurationReplicatedDiskSchema = z
  .object({
    deviceName: BoundedStringSchema.exactOptional().openapi({
      description: 'Replication Configuration replicated disk device name.',
    }),
    iops: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Replication Configuration replicated disk IOPs.',
    }),
    isBootDisk: BooleanSchema.exactOptional().openapi({
      description: 'Replication Configuration replicated disk boot disk.',
    }),
    stagingDiskType:
      ReplicationConfigurationReplicatedDiskStagingDiskTypeSchema.exactOptional().openapi({
        description: 'Replication Configuration replicated disk staging disk type.',
      }),
    throughput: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Replication Configuration replicated disk throughput.',
    }),
  })
  .openapi({ description: 'Replication Configuration replicated disk.', required: [] })
  .openapi('ReplicationConfigurationReplicatedDisk')

const ReplicationConfigurationReplicatedDisksSchema = z
  .array(ReplicationConfigurationReplicatedDiskSchema)
  .min(0)
  .max(60)
  .openapi('ReplicationConfigurationReplicatedDisks')

const ReplicationConfigurationSchema = z
  .object({
    associateDefaultSecurityGroup: BooleanSchema.exactOptional().openapi({
      description:
        'Replication Configuration associate default Application Migration Service Security Group.',
    }),
    bandwidthThrottling: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Replication Configuration set bandwidth throttling.',
    }),
    createPublicIP: BooleanSchema.exactOptional().openapi({
      description: 'Replication Configuration create Public IP.',
    }),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.exactOptional().openapi({
      description: 'Replication Configuration data plane routing.',
    }),
    defaultLargeStagingDiskType:
      ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.exactOptional().openapi({
        description: 'Replication Configuration use default large Staging Disks.',
      }),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.exactOptional().openapi({
      description: 'Replication Configuration EBS encryption.',
    }),
    ebsEncryptionKeyArn: ARNSchema.exactOptional().openapi({
      description: 'Replication Configuration EBS encryption key ARN.',
    }),
    name: SmallBoundedStringSchema.exactOptional().openapi({
      description: 'Replication Configuration name.',
    }),
    replicatedDisks: ReplicationConfigurationReplicatedDisksSchema.exactOptional().openapi({
      description: 'Replication Configuration replicated disks.',
    }),
    replicationServerInstanceType: EC2InstanceTypeSchema.exactOptional().openapi({
      description: 'Replication Configuration Replication Server instance type.',
    }),
    replicationServersSecurityGroupsIDs:
      ReplicationServersSecurityGroupsIDsSchema.exactOptional().openapi({
        description: 'Replication Configuration Replication Server Security Group IDs.',
      }),
    sourceServerID: SourceServerIDSchema.exactOptional().openapi({
      description: 'Replication Configuration Source Server ID.',
    }),
    stagingAreaSubnetId: SubnetIDSchema.exactOptional().openapi({
      description: 'Replication Configuration Staging Area subnet ID.',
    }),
    stagingAreaTags: TagsMapSchema.exactOptional().openapi({
      description: 'Replication Configuration Staging Area tags.',
    }),
    useDedicatedReplicationServer: BooleanSchema.exactOptional().openapi({
      description: 'Replication Configuration use Dedicated Replication Server.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ReplicationConfiguration')

const InitializeServiceResponseSchema = z.looseObject({}).openapi('InitializeServiceResponse')

const ApplicationsListSchema = z.array(ApplicationSchema).openapi('ApplicationsList')

const ListApplicationsResponseSchema = z
  .object({
    items: ApplicationsListSchema.exactOptional().openapi({ description: 'Applications list.' }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Response next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationsResponse')

const ApplicationIDsFilterSchema = z
  .array(ApplicationIDSchema)
  .min(0)
  .max(200)
  .openapi('ApplicationIDsFilter')

const WaveIDsFilterSchema = z.array(WaveIDSchema).min(0).max(200).openapi('WaveIDsFilter')

const ExportErrorDataSchema = z
  .object({
    rawError: LargeBoundedStringSchema.exactOptional().openapi({
      description: 'Export errors data raw error.',
    }),
  })
  .openapi({ description: 'Export errors data.', required: [] })
  .openapi('ExportErrorData')

const ExportTaskErrorSchema = z
  .object({
    errorData: ExportErrorDataSchema.exactOptional().openapi({
      description: 'Export task error data.',
    }),
    errorDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Export task error datetime.',
    }),
  })
  .openapi({ description: 'Export task error.', required: [] })
  .openapi('ExportTaskError')

const ExportErrorsSchema = z.array(ExportTaskErrorSchema).openapi('ExportErrors')

const ListExportErrorsResponseSchema = z
  .object({
    items: ExportErrorsSchema.exactOptional().openapi({
      description: 'List export errors response items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List export errors response next token.',
    }),
  })
  .openapi({ description: 'List export errors response.', required: [] })
  .openapi('ListExportErrorsResponse')

const ExportIDSchema = z
  .string()
  .regex(/^export-[0-9a-zA-Z]{17}$/)
  .length(24)
  .openapi('ExportID')

const FloatSchema = z.float32().openapi('Float')

const S3BucketNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9.\-_]{1,255}$/)
  .openapi('S3BucketName')

const AccountIDSchema = z
  .string()
  .regex(/[0-9]{12,}/)
  .length(12)
  .openapi('AccountID')

const S3KeySchema = z
  .string()
  .regex(/^[^\x00]{1,1020}\.csv$/)
  .openapi('S3Key')

const ExportStatusSchema = z
  .enum(['PENDING', 'STARTED', 'FAILED', 'SUCCEEDED'])
  .openapi('ExportStatus')

const ExportTaskSummarySchema = z
  .object({
    applicationsCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Export task summary applications count.',
    }),
    serversCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Export task summary servers count.',
    }),
    wavesCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Export task summary waves count.',
    }),
  })
  .openapi({ description: 'Export task summary.', required: [] })
  .openapi('ExportTaskSummary')

const ExportTaskSchema = z
  .object({
    creationDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Export task creation datetime.',
    }),
    endDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Export task end datetime.',
    }),
    exportID: ExportIDSchema.exactOptional().openapi({ description: 'Export task id.' }),
    progressPercentage: FloatSchema.exactOptional().openapi({
      description: 'Export task progress percentage.',
    }),
    s3Bucket: S3BucketNameSchema.exactOptional().openapi({ description: 'Export task s3 bucket.' }),
    s3BucketOwner: AccountIDSchema.exactOptional().openapi({
      description: 'Export task s3 bucket owner.',
    }),
    s3Key: S3KeySchema.exactOptional().openapi({ description: 'Export task s3 key.' }),
    status: ExportStatusSchema.exactOptional().openapi({ description: 'Export task status.' }),
    summary: ExportTaskSummarySchema.exactOptional().openapi({
      description: 'Export task summary.',
    }),
  })
  .openapi({ description: 'Export task.', required: [] })
  .openapi('ExportTask')

const ExportsListSchema = z.array(ExportTaskSchema).openapi('ExportsList')

const ListExportsResponseSchema = z
  .object({
    items: ExportsListSchema.exactOptional().openapi({
      description: 'List export response items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List export response next token.',
    }),
  })
  .openapi({ description: 'List export response.', required: [] })
  .openapi('ListExportsResponse')

const ListExportsRequestFiltersExportIDsSchema = z
  .array(ExportIDSchema)
  .min(0)
  .max(10)
  .openapi('ListExportsRequestFiltersExportIDs')

const ImportErrorDataSchema = z
  .object({
    applicationID: ApplicationIDSchema.exactOptional().openapi({
      description: 'Import error data application ID.',
    }),
    ec2LaunchTemplateID: BoundedStringSchema.exactOptional().openapi({
      description: 'Import error data ec2 LaunchTemplate ID.',
    }),
    rawError: LargeBoundedStringSchema.exactOptional().openapi({
      description: 'Import error data raw error.',
    }),
    rowNumber: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import error data row number.',
    }),
    sourceServerID: SourceServerIDSchema.exactOptional().openapi({
      description: 'Import error data source server ID.',
    }),
    waveID: WaveIDSchema.exactOptional().openapi({ description: 'Import error data wave id.' }),
  })
  .openapi({ description: 'Import error data.', required: [] })
  .openapi('ImportErrorData')

const ImportErrorTypeSchema = z
  .enum(['VALIDATION_ERROR', 'PROCESSING_ERROR'])
  .openapi('ImportErrorType')

const ImportTaskErrorSchema = z
  .object({
    errorData: ImportErrorDataSchema.exactOptional().openapi({
      description: 'Import task error data.',
    }),
    errorDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Import task error datetime.',
    }),
    errorType: ImportErrorTypeSchema.exactOptional().openapi({
      description: 'Import task error type.',
    }),
  })
  .openapi({ description: 'Import task error.', required: [] })
  .openapi('ImportTaskError')

const ImportErrorsSchema = z.array(ImportTaskErrorSchema).openapi('ImportErrors')

const ListImportErrorsResponseSchema = z
  .object({
    items: ImportErrorsSchema.exactOptional().openapi({
      description: 'List imports errors response items.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List imports errors response next token.',
    }),
  })
  .openapi({ description: 'List imports errors response.', required: [] })
  .openapi('ListImportErrorsResponse')

const ImportIDSchema = z
  .string()
  .regex(/^import-[0-9a-zA-Z]{17}$/)
  .length(24)
  .openapi('ImportID')

const S3BucketSourceSchema = z
  .object({
    s3Bucket: S3BucketNameSchema.openapi({ description: 'S3 bucket source s3 bucket.' }),
    s3BucketOwner: AccountIDSchema.exactOptional().openapi({
      description: 'S3 bucket source s3 bucket owner.',
    }),
    s3Key: S3KeySchema.openapi({ description: 'S3 bucket source s3 key.' }),
  })
  .openapi({ required: ['s3Bucket', 's3Key'], description: 'S3 bucket source.' })
  .openapi('S3BucketSource')

const ImportStatusSchema = z
  .enum(['PENDING', 'STARTED', 'FAILED', 'SUCCEEDED'])
  .openapi('ImportStatus')

const ImportTaskSummaryApplicationsSchema = z
  .object({
    createdCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summary applications created count.',
    }),
    modifiedCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summary applications modified count.',
    }),
  })
  .openapi({ description: 'Import task summary applications.', required: [] })
  .openapi('ImportTaskSummaryApplications')

const ImportTaskSummaryServersSchema = z
  .object({
    createdCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summary servers created count.',
    }),
    modifiedCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summary servers modified count.',
    }),
  })
  .openapi({ description: 'Import task summary servers.', required: [] })
  .openapi('ImportTaskSummaryServers')

const ImportTaskSummaryWavesSchema = z
  .object({
    createdCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summery waves created count.',
    }),
    modifiedCount: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Import task summery waves modified count.',
    }),
  })
  .openapi({ description: 'Import task summery waves.', required: [] })
  .openapi('ImportTaskSummaryWaves')

const ImportTaskSummarySchema = z
  .object({
    applications: ImportTaskSummaryApplicationsSchema.exactOptional().openapi({
      description: 'Import task summary applications.',
    }),
    servers: ImportTaskSummaryServersSchema.exactOptional().openapi({
      description: 'Import task summary servers.',
    }),
    waves: ImportTaskSummaryWavesSchema.exactOptional().openapi({
      description: 'Import task summary waves.',
    }),
  })
  .openapi({ description: 'Import task summary.', required: [] })
  .openapi('ImportTaskSummary')

const ImportTaskSchema = z
  .object({
    creationDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Import task creation datetime.',
    }),
    endDateTime: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Import task end datetime.',
    }),
    importID: ImportIDSchema.exactOptional().openapi({ description: 'Import task id.' }),
    progressPercentage: FloatSchema.exactOptional().openapi({
      description: 'Import task progress percentage.',
    }),
    s3BucketSource: S3BucketSourceSchema.exactOptional().openapi({
      description: 'Import task s3 bucket source.',
    }),
    status: ImportStatusSchema.exactOptional().openapi({ description: 'Import task status.' }),
    summary: ImportTaskSummarySchema.exactOptional().openapi({
      description: 'Import task summary.',
    }),
  })
  .openapi({ description: 'Import task.', required: [] })
  .openapi('ImportTask')

const ImportListSchema = z.array(ImportTaskSchema).openapi('ImportList')

const ListImportsResponseSchema = z
  .object({
    items: ImportListSchema.exactOptional().openapi({ description: 'List import response items.' }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List import response next token.',
    }),
  })
  .openapi({ description: 'List import response.', required: [] })
  .openapi('ListImportsResponse')

const ImportIDsFilterSchema = z.array(ImportIDSchema).min(0).max(10).openapi('ImportIDsFilter')

const ActionIDSchema = z
  .string()
  .regex(/[0-9a-zA-Z]$/)
  .min(1)
  .max(64)
  .openapi('ActionID')

const ActionNameSchema = z
  .string()
  .regex(/^[^\s\x00]( *[^\s\x00])*$/)
  .min(1)
  .max(256)
  .openapi('ActionName')

const ActionCategorySchema = z
  .enum([
    'DISASTER_RECOVERY',
    'OPERATING_SYSTEM',
    'LICENSE_AND_SUBSCRIPTION',
    'VALIDATION',
    'OBSERVABILITY',
    'SECURITY',
    'NETWORKING',
    'CONFIGURATION',
    'BACKUP',
    'OTHER',
  ])
  .openapi('ActionCategory')

const ActionDescriptionSchema = z
  .string()
  .regex(/^[0-9a-zA-Z ():\/.,'-_#*; ]*$/)
  .min(0)
  .max(256)
  .openapi('ActionDescription')

const DocumentVersionSchema = z
  .string()
  .regex(/^(\$DEFAULT|\$LATEST|[0-9]+)$/)
  .openapi('DocumentVersion')

const OrderTypeSchema = z.int().min(1001).max(10000).openapi('OrderType')

const SourceServerActionDocumentSchema = z
  .object({
    actionID: ActionIDSchema.exactOptional().openapi({
      description: 'Source server post migration custom action ID.',
    }),
    actionName: ActionNameSchema.exactOptional().openapi({
      description: 'Source server post migration custom action name.',
    }),
    active: BooleanSchema.exactOptional().openapi({
      description: 'Source server post migration custom action active status.',
    }),
    category: ActionCategorySchema.exactOptional().openapi({
      description: 'Source server post migration custom action category.',
    }),
    description: ActionDescriptionSchema.exactOptional().openapi({
      description: 'Source server post migration custom action description.',
    }),
    documentIdentifier: BoundedStringSchema.exactOptional().openapi({
      description: 'Source server post migration custom action document identifier.',
    }),
    documentVersion: DocumentVersionSchema.exactOptional().openapi({
      description: 'Source server post migration custom action document version.',
    }),
    externalParameters: SsmDocumentExternalParametersSchema.exactOptional().openapi({
      description: 'Source server post migration custom action external parameters.',
    }),
    mustSucceedForCutover: BooleanSchema.exactOptional().openapi({
      description: 'Source server post migration custom action must succeed for cutover.',
    }),
    order: OrderTypeSchema.exactOptional().openapi({
      description: 'Source server post migration custom action order.',
    }),
    parameters: SsmDocumentParametersSchema.exactOptional().openapi({
      description: 'Source server post migration custom action parameters.',
    }),
    timeoutSeconds: StrictlyPositiveIntegerSchema.exactOptional().openapi({
      description: 'Source server post migration custom action timeout in seconds.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SourceServerActionDocument')

const SourceServerActionDocumentsSchema = z
  .array(SourceServerActionDocumentSchema)
  .min(0)
  .max(100)
  .openapi('SourceServerActionDocuments')

const ListSourceServerActionsResponseSchema = z
  .object({
    items: SourceServerActionDocumentsSchema.exactOptional().openapi({
      description: 'List of source server post migration custom actions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next token returned when listing source server post migration custom actions.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSourceServerActionsResponse')

const ActionIDsSchema = z.array(ActionIDSchema).min(0).max(100).openapi('ActionIDs')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'List tags for resource response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const OperatingSystemStringSchema = z
  .string()
  .regex(/^(linux|windows)$/)
  .openapi('OperatingSystemString')

const TemplateActionDocumentSchema = z
  .object({
    actionID: ActionIDSchema.exactOptional().openapi({
      description: 'Template post migration custom action ID.',
    }),
    actionName: BoundedStringSchema.exactOptional().openapi({
      description: 'Template post migration custom action name.',
    }),
    active: BooleanSchema.exactOptional().openapi({
      description: 'Template post migration custom action active status.',
    }),
    category: ActionCategorySchema.exactOptional().openapi({
      description: 'Template post migration custom action category.',
    }),
    description: ActionDescriptionSchema.exactOptional().openapi({
      description: 'Template post migration custom action description.',
    }),
    documentIdentifier: BoundedStringSchema.exactOptional().openapi({
      description: 'Template post migration custom action document identifier.',
    }),
    documentVersion: DocumentVersionSchema.exactOptional().openapi({
      description: 'Template post migration custom action document version.',
    }),
    externalParameters: SsmDocumentExternalParametersSchema.exactOptional().openapi({
      description: 'Template post migration custom action external parameters.',
    }),
    mustSucceedForCutover: BooleanSchema.exactOptional().openapi({
      description: 'Template post migration custom action must succeed for cutover.',
    }),
    operatingSystem: OperatingSystemStringSchema.exactOptional().openapi({
      description: 'Operating system eligible for this template post migration custom action.',
    }),
    order: OrderTypeSchema.exactOptional().openapi({
      description: 'Template post migration custom action order.',
    }),
    parameters: SsmDocumentParametersSchema.exactOptional().openapi({
      description: 'Template post migration custom action parameters.',
    }),
    timeoutSeconds: StrictlyPositiveIntegerSchema.exactOptional().openapi({
      description: 'Template post migration custom action timeout in seconds.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TemplateActionDocument')

const TemplateActionDocumentsSchema = z
  .array(TemplateActionDocumentSchema)
  .min(0)
  .max(100)
  .openapi('TemplateActionDocuments')

const ListTemplateActionsResponseSchema = z
  .object({
    items: TemplateActionDocumentsSchema.exactOptional().openapi({
      description: 'List of template post migration custom actions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next token returned when listing template post migration custom actions.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTemplateActionsResponse')

const WavesListSchema = z.array(WaveSchema).openapi('WavesList')

const ListWavesResponseSchema = z
  .object({
    items: WavesListSchema.exactOptional().openapi({ description: 'Waves list.' }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Response next token.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListWavesResponse')

const RemoveSourceServerActionResponseSchema = z
  .looseObject({})
  .openapi('RemoveSourceServerActionResponse')

const RemoveTemplateActionResponseSchema = z.looseObject({}).openapi('RemoveTemplateActionResponse')

const StartCutoverResponseSchema: z.ZodType<StartCutoverResponseType> = z
  .object({
    job: JobSchema.exactOptional().openapi({ description: 'Start Cutover Job response.' }),
  })
  .openapi({ required: [] })
  .openapi('StartCutoverResponse')

const StartExportResponseSchema = z
  .object({
    exportTask: ExportTaskSchema.exactOptional().openapi({
      description: 'Start export response export task.',
    }),
  })
  .openapi({ description: 'Start export response.', required: [] })
  .openapi('StartExportResponse')

const StartImportResponseSchema = z
  .object({
    importTask: ImportTaskSchema.exactOptional().openapi({
      description: 'Start import response import task.',
    }),
  })
  .openapi({ description: 'Start import response.', required: [] })
  .openapi('StartImportResponse')

const StartTestResponseSchema: z.ZodType<StartTestResponseType> = z
  .object({ job: JobSchema.exactOptional().openapi({ description: 'Start Test Job response.' }) })
  .openapi({ required: [] })
  .openapi('StartTestResponse')

const TerminateTargetInstancesResponseSchema: z.ZodType<TerminateTargetInstancesResponseType> = z
  .object({
    job: JobSchema.exactOptional().openapi({
      description: 'Terminate Target instance Job response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TerminateTargetInstancesResponse')

const TagKeySchema = z.string().min(0).max(256).openapi('TagKey')

const ApplicationIDsSchema = z.array(ApplicationIDSchema).min(1).max(50).openapi('ApplicationIDs')

const ArchiveApplicationRequestSchema = z
  .object({ applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }) })
  .openapi({ required: ['applicationID'], title: 'ArchiveApplicationRequest' })
  .openapi('ArchiveApplicationRequest')

const ArchiveWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }) })
  .openapi({ required: ['waveID'], title: 'ArchiveWaveRequest' })
  .openapi('ArchiveWaveRequest')

const AssociateApplicationsRequestSchema = z
  .object({
    applicationIDs: ApplicationIDsSchema.openapi({ description: 'Application IDs list.' }),
    waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }),
  })
  .openapi({ required: ['applicationIDs', 'waveID'], title: 'AssociateApplicationsRequest' })
  .openapi('AssociateApplicationsRequest')

const AssociateSourceServersRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(50)
  .openapi('AssociateSourceServersRequestSourceServerIDs')

const AssociateSourceServersRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }),
    sourceServerIDs: AssociateSourceServersRequestSourceServerIDsSchema.openapi({
      description: 'Source server IDs list.',
    }),
  })
  .openapi({
    required: ['applicationID', 'sourceServerIDs'],
    title: 'AssociateSourceServersRequest',
  })
  .openapi('AssociateSourceServersRequest')

const ChangeServerLifeCycleStateSourceServerLifecycleSchema = z
  .object({
    state: ChangeServerLifeCycleStateSourceServerLifecycleStateSchema.openapi({
      description: 'The request to change the source server migration lifecycle state.',
    }),
  })
  .openapi({
    required: ['state'],
    description: 'The request to change the source server migration lifecycle state.',
  })
  .openapi('ChangeServerLifeCycleStateSourceServerLifecycle')

const ChangeServerLifeCycleStateRequestSchema = z
  .object({
    lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycleSchema.openapi({
      description: 'The request to change the source server migration lifecycle state.',
    }),
    sourceServerID: SourceServerIDSchema.openapi({
      description:
        'The request to change the source server migration lifecycle state by source server ID.',
    }),
  })
  .openapi({
    required: ['lifeCycle', 'sourceServerID'],
    title: 'ChangeServerLifeCycleStateRequest',
  })
  .openapi('ChangeServerLifeCycleStateRequest')

const ClientIdempotencyTokenSchema = z.string().min(0).max(64).openapi('ClientIdempotencyToken')

const CreateApplicationRequestSchema = z
  .object({
    description: ApplicationDescriptionSchema.exactOptional().openapi({
      description: 'Application description.',
    }),
    name: ApplicationNameSchema.openapi({ description: 'Application name.' }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Application tags.' }),
  })
  .openapi({ required: ['name'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateLaunchConfigurationTemplateRequestSchema = z
  .object({
    associatePublicIpAddress: BooleanSchema.exactOptional().openapi({
      description: 'Associate public Ip address.',
    }),
    bootMode: BootModeSchema.exactOptional().openapi({
      description: 'Launch configuration template boot mode.',
    }),
    copyPrivateIp: BooleanSchema.exactOptional().openapi({ description: 'Copy private Ip.' }),
    copyTags: BooleanSchema.exactOptional().openapi({ description: 'Copy tags.' }),
    enableMapAutoTagging: BooleanSchema.exactOptional().openapi({
      description: 'Enable map auto tagging.',
    }),
    largeVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Large volume config.',
    }),
    launchDisposition: LaunchDispositionSchema.exactOptional().openapi({
      description: 'Launch disposition.',
    }),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.exactOptional().openapi({
      description: 'Launch configuration template map auto tagging MPE ID.',
    }),
    postLaunchActions: PostLaunchActionsSchema.exactOptional().openapi({
      description: 'Launch configuration template post launch actions.',
    }),
    smallVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Small volume config.',
    }),
    smallVolumeMaxSize: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Small volume maximum size.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Request to associate tags during creation of a Launch Configuration Template.',
    }),
    targetInstanceTypeRightSizingMethod:
      TargetInstanceTypeRightSizingMethodSchema.exactOptional().openapi({
        description: 'Target instance type right-sizing method.',
      }),
  })
  .openapi({ title: 'CreateLaunchConfigurationTemplateRequest', required: [] })
  .openapi('CreateLaunchConfigurationTemplateRequest')

const CreateReplicationConfigurationTemplateRequestSchema = z
  .object({
    associateDefaultSecurityGroup: BooleanSchema.openapi({
      description:
        'Request to associate the default Application Migration Service Security group with the Replication Settings template.',
    }),
    bandwidthThrottling: PositiveIntegerSchema.openapi({
      description:
        'Request to configure bandwidth throttling during Replication Settings template creation.',
    }),
    createPublicIP: BooleanSchema.openapi({
      description: 'Request to create Public IP during Replication Settings template creation.',
    }),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.openapi({
      description:
        'Request to configure data plane routing during Replication Settings template creation.',
    }),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.openapi({
      description:
        'Request to configure the default large staging disk EBS volume type during Replication Settings template creation.',
    }),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.openapi({
      description:
        'Request to configure EBS encryption during Replication Settings template creation.',
    }),
    ebsEncryptionKeyArn: ARNSchema.exactOptional().openapi({
      description:
        'Request to configure an EBS encryption key during Replication Settings template creation.',
    }),
    replicationServerInstanceType: EC2InstanceTypeSchema.openapi({
      description:
        'Request to configure the Replication Server instance type during Replication Settings template creation.',
    }),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.openapi({
      description:
        'Request to configure the Replication Server Security group ID during Replication Settings template creation.',
    }),
    stagingAreaSubnetId: SubnetIDSchema.openapi({
      description:
        'Request to configure the Staging Area subnet ID during Replication Settings template creation.',
    }),
    stagingAreaTags: TagsMapSchema.openapi({
      description:
        'Request to configure Staging Area tags during Replication Settings template creation.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Request to configure tags during Replication Settings template creation.',
    }),
    useDedicatedReplicationServer: BooleanSchema.openapi({
      description:
        'Request to use Dedicated Replication Servers during Replication Settings template creation.',
    }),
  })
  .openapi({
    required: [
      'associateDefaultSecurityGroup',
      'bandwidthThrottling',
      'createPublicIP',
      'dataPlaneRouting',
      'defaultLargeStagingDiskType',
      'ebsEncryption',
      'replicationServerInstanceType',
      'replicationServersSecurityGroupsIDs',
      'stagingAreaSubnetId',
      'stagingAreaTags',
      'useDedicatedReplicationServer',
    ],
    title: 'CreateReplicationConfigurationTemplateRequest',
  })
  .openapi('CreateReplicationConfigurationTemplateRequest')

const CreateWaveRequestSchema = z
  .object({
    description: WaveDescriptionSchema.exactOptional().openapi({
      description: 'Wave description.',
    }),
    name: WaveNameSchema.openapi({ description: 'Wave name.' }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Wave tags.' }),
  })
  .openapi({ required: ['name'], title: 'CreateWaveRequest' })
  .openapi('CreateWaveRequest')

const DeleteApplicationRequestSchema = z
  .object({ applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }) })
  .openapi({ required: ['applicationID'], title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteJobRequestSchema = z
  .object({
    jobID: JobIDSchema.openapi({ description: 'Request to delete Job from service by Job ID.' }),
  })
  .openapi({ required: ['jobID'], title: 'DeleteJobRequest' })
  .openapi('DeleteJobRequest')

const DeleteLaunchConfigurationTemplateRequestSchema = z
  .object({
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description: 'ID of resource to be deleted.',
    }),
  })
  .openapi({
    required: ['launchConfigurationTemplateID'],
    title: 'DeleteLaunchConfigurationTemplateRequest',
  })
  .openapi('DeleteLaunchConfigurationTemplateRequest')

const DeleteReplicationConfigurationTemplateRequestSchema = z
  .object({
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.openapi({
      description:
        'Request to delete Replication Configuration Template from service by Replication Configuration Template ID.',
    }),
  })
  .openapi({
    required: ['replicationConfigurationTemplateID'],
    title: 'DeleteReplicationConfigurationTemplateRequest',
  })
  .openapi('DeleteReplicationConfigurationTemplateRequest')

const DeleteSourceServerRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Request to delete Source Server from service by Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'DeleteSourceServerRequest' })
  .openapi('DeleteSourceServerRequest')

const DeleteVcenterClientRequestSchema = z
  .object({
    vcenterClientID: VcenterClientIDSchema.openapi({
      description: 'ID of resource to be deleted.',
    }),
  })
  .openapi({ required: ['vcenterClientID'], title: 'DeleteVcenterClientRequest' })
  .openapi('DeleteVcenterClientRequest')

const DeleteWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }) })
  .openapi({ required: ['waveID'], title: 'DeleteWaveRequest' })
  .openapi('DeleteWaveRequest')

const MaxResultsTypeSchema = z.int().min(1).max(1000).openapi('MaxResultsType')

const DescribeJobLogItemsRequestSchema = z
  .object({
    jobID: JobIDSchema.openapi({ description: 'Request to describe Job log job ID.' }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Request to describe Job log item maximum results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe Job log next token.',
    }),
  })
  .openapi({ required: ['jobID'], title: 'DescribeJobLogItemsRequest' })
  .openapi('DescribeJobLogItemsRequest')

const DescribeJobsRequestFiltersSchema = z
  .object({
    fromDate: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to describe Job log filters by date.',
    }),
    jobIDs: DescribeJobsRequestFiltersJobIDsSchema.exactOptional().openapi({
      description: 'Request to describe Job log filters by job ID.',
    }),
    toDate: ISO8601DatetimeStringSchema.exactOptional().openapi({
      description: 'Request to describe job log items by last date.',
    }),
  })
  .openapi({ description: 'Request to describe Job log filters.', required: [] })
  .openapi('DescribeJobsRequestFilters')

const DescribeJobsRequestSchema = z
  .object({
    filters: DescribeJobsRequestFiltersSchema.exactOptional().openapi({
      description: 'Request to describe Job log filters.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Request to describe job log items by max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe job log items by next token.',
    }),
  })
  .openapi({ title: 'DescribeJobsRequest', required: [] })
  .openapi('DescribeJobsRequest')

const LaunchConfigurationTemplateIDsSchema = z
  .array(LaunchConfigurationTemplateIDSchema)
  .min(0)
  .max(200)
  .openapi('LaunchConfigurationTemplateIDs')

const DescribeLaunchConfigurationTemplatesRequestSchema = z
  .object({
    launchConfigurationTemplateIDs: LaunchConfigurationTemplateIDsSchema.exactOptional().openapi({
      description:
        'Request to filter Launch Configuration Templates list by Launch Configuration Template ID.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Maximum results to be returned in DescribeLaunchConfigurationTemplates.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next pagination token returned from DescribeLaunchConfigurationTemplates.',
    }),
  })
  .openapi({ title: 'DescribeLaunchConfigurationTemplatesRequest', required: [] })
  .openapi('DescribeLaunchConfigurationTemplatesRequest')

const ReplicationConfigurationTemplateIDsSchema = z
  .array(ReplicationConfigurationTemplateIDSchema)
  .min(0)
  .max(200)
  .openapi('ReplicationConfigurationTemplateIDs')

const DescribeReplicationConfigurationTemplatesRequestSchema = z
  .object({
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Request to describe Replication Configuration template by max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to describe Replication Configuration template by next token.',
    }),
    replicationConfigurationTemplateIDs:
      ReplicationConfigurationTemplateIDsSchema.exactOptional().openapi({
        description: 'Request to describe Replication Configuration template by template IDs.',
      }),
  })
  .openapi({ title: 'DescribeReplicationConfigurationTemplatesRequest', required: [] })
  .openapi('DescribeReplicationConfigurationTemplatesRequest')

const DescribeSourceServersRequestFiltersSchema = z
  .object({
    applicationIDs: DescribeSourceServersRequestApplicationIDsSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by application IDs.',
    }),
    isArchived: BooleanSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by archived.',
    }),
    lifeCycleStates: LifeCycleStatesSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by life cycle states.',
    }),
    replicationTypes: ReplicationTypesSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by replication type.',
    }),
    sourceServerIDs: DescribeSourceServersRequestFiltersIDsSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by Source Server ID.',
    }),
  })
  .openapi({ description: 'Request to filter Source Servers list.', required: [] })
  .openapi('DescribeSourceServersRequestFilters')

const DescribeSourceServersRequestSchema = z
  .object({
    filters: DescribeSourceServersRequestFiltersSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by maximum results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request to filter Source Servers list by next token.',
    }),
  })
  .openapi({ title: 'DescribeSourceServersRequest', required: [] })
  .openapi('DescribeSourceServersRequest')

const DescribeVcenterClientsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DescribeVcenterClientsRequest' })
  .openapi('DescribeVcenterClientsRequest')

const DisassociateApplicationsRequestSchema = z
  .object({
    applicationIDs: ApplicationIDsSchema.openapi({ description: 'Application IDs list.' }),
    waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }),
  })
  .openapi({ required: ['applicationIDs', 'waveID'], title: 'DisassociateApplicationsRequest' })
  .openapi('DisassociateApplicationsRequest')

const DisassociateSourceServersRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(50)
  .openapi('DisassociateSourceServersRequestSourceServerIDs')

const DisassociateSourceServersRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }),
    sourceServerIDs: DisassociateSourceServersRequestSourceServerIDsSchema.openapi({
      description: 'Source server IDs list.',
    }),
  })
  .openapi({
    required: ['applicationID', 'sourceServerIDs'],
    title: 'DisassociateSourceServersRequest',
  })
  .openapi('DisassociateSourceServersRequest')

const DisconnectFromServiceRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Request to disconnect Source Server from service by Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'DisconnectFromServiceRequest' })
  .openapi('DisconnectFromServiceRequest')

const FinalizeCutoverRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Request to finalize Cutover by Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'FinalizeCutoverRequest' })
  .openapi('FinalizeCutoverRequest')

const GetLaunchConfigurationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Request to get Launch Configuration information by Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'GetLaunchConfigurationRequest' })
  .openapi('GetLaunchConfigurationRequest')

const GetReplicationConfigurationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Request to get Replication Configuration by Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'GetReplicationConfigurationRequest' })
  .openapi('GetReplicationConfigurationRequest')

const InitializeServiceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'InitializeServiceRequest' })
  .openapi('InitializeServiceRequest')

const ListApplicationsRequestFiltersSchema = z
  .object({
    applicationIDs: ApplicationIDsFilterSchema.exactOptional().openapi({
      description: 'Filter applications list by application ID.',
    }),
    isArchived: BooleanSchema.exactOptional().openapi({
      description: 'Filter applications list by archival status.',
    }),
    waveIDs: WaveIDsFilterSchema.exactOptional().openapi({
      description: 'Filter applications list by wave ID.',
    }),
  })
  .openapi({ description: 'Applications list filters.', required: [] })
  .openapi('ListApplicationsRequestFilters')

const ListApplicationsRequestSchema = z
  .object({
    filters: ListApplicationsRequestFiltersSchema.exactOptional().openapi({
      description: 'Applications list filters.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Maximum results to return when listing applications.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request next token.',
    }),
  })
  .openapi({ title: 'ListApplicationsRequest', required: [] })
  .openapi('ListApplicationsRequest')

const ListExportErrorsRequestSchema = z
  .object({
    exportID: ExportIDSchema.openapi({ description: 'List export errors request export id.' }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'List export errors request max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List export errors request next token.',
    }),
  })
  .openapi({
    required: ['exportID'],
    title: 'ListExportErrorsRequest',
    description: 'List export errors request.',
  })
  .openapi('ListExportErrorsRequest')

const ListExportsRequestFiltersSchema = z
  .object({
    exportIDs: ListExportsRequestFiltersExportIDsSchema.exactOptional().openapi({
      description: 'List exports request filters export ids.',
    }),
  })
  .openapi({ description: 'List exports request filters.', required: [] })
  .openapi('ListExportsRequestFilters')

const ListExportsRequestSchema = z
  .object({
    filters: ListExportsRequestFiltersSchema.exactOptional(),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'List export request max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List export request next token.',
    }),
  })
  .openapi({ title: 'ListExportsRequest', description: 'List export request.', required: [] })
  .openapi('ListExportsRequest')

const ListImportErrorsRequestSchema = z
  .object({
    importID: ImportIDSchema.openapi({ description: 'List import errors request import id.' }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'List import errors request max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List import errors request next token.',
    }),
  })
  .openapi({
    required: ['importID'],
    title: 'ListImportErrorsRequest',
    description: 'List import errors request.',
  })
  .openapi('ListImportErrorsRequest')

const ListImportsRequestFiltersSchema = z
  .object({
    importIDs: ImportIDsFilterSchema.exactOptional().openapi({
      description: 'List imports request filters import IDs.',
    }),
  })
  .openapi({ description: 'List imports request filters.', required: [] })
  .openapi('ListImportsRequestFilters')

const ListImportsRequestSchema = z
  .object({
    filters: ListImportsRequestFiltersSchema.exactOptional().openapi({
      description: 'List imports request filters.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'List imports request max results.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'List imports request next token.',
    }),
  })
  .openapi({ title: 'ListImportsRequest', description: 'List imports request.', required: [] })
  .openapi('ListImportsRequest')

const SourceServerActionsRequestFiltersSchema = z
  .object({
    actionIDs: ActionIDsSchema.exactOptional().openapi({
      description: 'Action IDs to filter source server post migration custom actions by.',
    }),
  })
  .openapi({ description: 'Source server post migration custom action filters.', required: [] })
  .openapi('SourceServerActionsRequestFilters')

const ListSourceServerActionsRequestSchema = z
  .object({
    filters: SourceServerActionsRequestFiltersSchema.exactOptional().openapi({
      description: 'Filters to apply when listing source server post migration custom actions.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description:
        'Maximum amount of items to return when listing source server post migration custom actions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next token to use when listing source server post migration custom actions.',
    }),
    sourceServerID: SourceServerIDSchema.openapi({ description: 'Source server ID.' }),
  })
  .openapi({ required: ['sourceServerID'], title: 'ListSourceServerActionsRequest' })
  .openapi('ListSourceServerActionsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TemplateActionsRequestFiltersSchema = z
  .object({
    actionIDs: ActionIDsSchema.exactOptional().openapi({
      description: 'Action IDs to filter template post migration custom actions by.',
    }),
  })
  .openapi({ description: 'Template post migration custom action filters.', required: [] })
  .openapi('TemplateActionsRequestFilters')

const ListTemplateActionsRequestSchema = z
  .object({
    filters: TemplateActionsRequestFiltersSchema.exactOptional().openapi({
      description: 'Filters to apply when listing template post migration custom actions.',
    }),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description: 'Launch configuration template ID.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description:
        'Maximum amount of items to return when listing template post migration custom actions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Next token to use when listing template post migration custom actions.',
    }),
  })
  .openapi({ required: ['launchConfigurationTemplateID'], title: 'ListTemplateActionsRequest' })
  .openapi('ListTemplateActionsRequest')

const ListWavesRequestFiltersSchema = z
  .object({
    isArchived: BooleanSchema.exactOptional().openapi({
      description: 'Filter waves list by archival status.',
    }),
    waveIDs: WaveIDsFilterSchema.exactOptional().openapi({
      description: 'Filter waves list by wave ID.',
    }),
  })
  .openapi({ description: 'Waves list filters.', required: [] })
  .openapi('ListWavesRequestFilters')

const ListWavesRequestSchema = z
  .object({
    filters: ListWavesRequestFiltersSchema.exactOptional().openapi({
      description: 'Waves list filters.',
    }),
    maxResults: MaxResultsTypeSchema.exactOptional().openapi({
      description: 'Maximum results to return when listing waves.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description: 'Request next token.',
    }),
  })
  .openapi({ title: 'ListWavesRequest', required: [] })
  .openapi('ListWavesRequest')

const MarkAsArchivedRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Mark as archived by Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'MarkAsArchivedRequest' })
  .openapi('MarkAsArchivedRequest')

const PutSourceServerActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.openapi({
      description: 'Source server post migration custom action ID.',
    }),
    actionName: ActionNameSchema.openapi({
      description: 'Source server post migration custom action name.',
    }),
    active: BooleanSchema.exactOptional().openapi({
      description: 'Source server post migration custom action active status.',
    }),
    category: ActionCategorySchema.exactOptional().openapi({
      description: 'Source server post migration custom action category.',
    }),
    description: ActionDescriptionSchema.exactOptional().openapi({
      description: 'Source server post migration custom action description.',
    }),
    documentIdentifier: BoundedStringSchema.openapi({
      description: 'Source server post migration custom action document identifier.',
    }),
    documentVersion: DocumentVersionSchema.exactOptional().openapi({
      description: 'Source server post migration custom action document version.',
    }),
    externalParameters: SsmDocumentExternalParametersSchema.exactOptional().openapi({
      description: 'Source server post migration custom action external parameters.',
    }),
    mustSucceedForCutover: BooleanSchema.exactOptional().openapi({
      description: 'Source server post migration custom action must succeed for cutover.',
    }),
    order: OrderTypeSchema.openapi({
      description: 'Source server post migration custom action order.',
    }),
    parameters: SsmDocumentParametersSchema.exactOptional().openapi({
      description: 'Source server post migration custom action parameters.',
    }),
    sourceServerID: SourceServerIDSchema.openapi({ description: 'Source server ID.' }),
    timeoutSeconds: StrictlyPositiveIntegerSchema.exactOptional().openapi({
      description: 'Source server post migration custom action timeout in seconds.',
    }),
  })
  .openapi({
    required: ['actionID', 'actionName', 'documentIdentifier', 'order', 'sourceServerID'],
    title: 'PutSourceServerActionRequest',
  })
  .openapi('PutSourceServerActionRequest')

const PutTemplateActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.openapi({ description: 'Template post migration custom action ID.' }),
    actionName: BoundedStringSchema.openapi({
      description: 'Template post migration custom action name.',
    }),
    active: BooleanSchema.exactOptional().openapi({
      description: 'Template post migration custom action active status.',
    }),
    category: ActionCategorySchema.exactOptional().openapi({
      description: 'Template post migration custom action category.',
    }),
    description: ActionDescriptionSchema.exactOptional().openapi({
      description: 'Template post migration custom action description.',
    }),
    documentIdentifier: BoundedStringSchema.openapi({
      description: 'Template post migration custom action document identifier.',
    }),
    documentVersion: DocumentVersionSchema.exactOptional().openapi({
      description: 'Template post migration custom action document version.',
    }),
    externalParameters: SsmDocumentExternalParametersSchema.exactOptional().openapi({
      description: 'Template post migration custom action external parameters.',
    }),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description: 'Launch configuration template ID.',
    }),
    mustSucceedForCutover: BooleanSchema.exactOptional().openapi({
      description: 'Template post migration custom action must succeed for cutover.',
    }),
    operatingSystem: OperatingSystemStringSchema.exactOptional().openapi({
      description: 'Operating system eligible for this template post migration custom action.',
    }),
    order: OrderTypeSchema.openapi({ description: 'Template post migration custom action order.' }),
    parameters: SsmDocumentParametersSchema.exactOptional().openapi({
      description: 'Template post migration custom action parameters.',
    }),
    timeoutSeconds: StrictlyPositiveIntegerSchema.exactOptional().openapi({
      description: 'Template post migration custom action timeout in seconds.',
    }),
  })
  .openapi({
    required: [
      'actionID',
      'actionName',
      'documentIdentifier',
      'launchConfigurationTemplateID',
      'order',
    ],
    title: 'PutTemplateActionRequest',
  })
  .openapi('PutTemplateActionRequest')

const RemoveSourceServerActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.openapi({
      description: 'Source server post migration custom action ID to remove.',
    }),
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Source server ID of the post migration custom action to remove.',
    }),
  })
  .openapi({ required: ['actionID', 'sourceServerID'], title: 'RemoveSourceServerActionRequest' })
  .openapi('RemoveSourceServerActionRequest')

const RemoveTemplateActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.openapi({
      description: 'Template post migration custom action ID to remove.',
    }),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description:
        'Launch configuration template ID of the post migration custom action to remove.',
    }),
  })
  .openapi({
    required: ['actionID', 'launchConfigurationTemplateID'],
    title: 'RemoveTemplateActionRequest',
  })
  .openapi('RemoveTemplateActionRequest')

const RetryDataReplicationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Retry data replication for Source Server ID.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'RetryDataReplicationRequest' })
  .openapi('RetryDataReplicationRequest')

const SsmDocumentParameterNameSchema = z
  .string()
  .regex(/^([A-Za-z0-9])+$/)
  .min(1)
  .max(1011)
  .openapi('SsmDocumentParameterName')

const StartCutoverRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(200)
  .openapi('StartCutoverRequestSourceServerIDs')

const StartCutoverRequestSchema = z
  .object({
    sourceServerIDs: StartCutoverRequestSourceServerIDsSchema.openapi({
      description: 'Start Cutover by Source Server IDs.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Start Cutover by Tags.' }),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'StartCutoverRequest' })
  .openapi('StartCutoverRequest')

const StartExportRequestSchema = z
  .object({
    s3Bucket: S3BucketNameSchema.openapi({ description: 'Start export request s3 bucket.' }),
    s3BucketOwner: AccountIDSchema.exactOptional().openapi({
      description: 'Start export request s3 bucket owner.',
    }),
    s3Key: S3KeySchema.openapi({ description: 'Start export request s3key.' }),
  })
  .openapi({
    required: ['s3Bucket', 's3Key'],
    title: 'StartExportRequest',
    description: 'Start export request.',
  })
  .openapi('StartExportRequest')

const StartImportRequestSchema = z
  .object({
    clientToken: ClientIdempotencyTokenSchema.exactOptional().openapi({
      description: 'Start import request client token.',
    }),
    s3BucketSource: S3BucketSourceSchema.openapi({
      description: 'Start import request s3 bucket source.',
    }),
  })
  .openapi({
    required: ['s3BucketSource'],
    title: 'StartImportRequest',
    description: 'Start import request.',
  })
  .openapi('StartImportRequest')

const StartReplicationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'ID of source server on which to start replication.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'StartReplicationRequest' })
  .openapi('StartReplicationRequest')

const StartTestRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(200)
  .openapi('StartTestRequestSourceServerIDs')

const StartTestRequestSchema = z
  .object({
    sourceServerIDs: StartTestRequestSourceServerIDsSchema.openapi({
      description: 'Start Test for Source Server IDs.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({ description: 'Start Test by Tags.' }),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'StartTestRequest' })
  .openapi('StartTestRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({ tags: TagsMapSchema.openapi({ description: 'Tag resource by Tags.' }) })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TerminateTargetInstancesRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(200)
  .openapi('TerminateTargetInstancesRequestSourceServerIDs')

const TerminateTargetInstancesRequestSchema = z
  .object({
    sourceServerIDs: TerminateTargetInstancesRequestSourceServerIDsSchema.openapi({
      description: 'Terminate Target instance by Source Server IDs.',
    }),
    tags: TagsMapSchema.exactOptional().openapi({
      description: 'Terminate Target instance by Tags.',
    }),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'TerminateTargetInstancesRequest' })
  .openapi('TerminateTargetInstancesRequest')

const UnarchiveApplicationRequestSchema = z
  .object({ applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }) })
  .openapi({ required: ['applicationID'], title: 'UnarchiveApplicationRequest' })
  .openapi('UnarchiveApplicationRequest')

const UnarchiveWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }) })
  .openapi({ required: ['waveID'], title: 'UnarchiveWaveRequest' })
  .openapi('UnarchiveWaveRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.openapi({ description: 'Application ID.' }),
    description: ApplicationDescriptionSchema.exactOptional().openapi({
      description: 'Application description.',
    }),
    name: ApplicationNameSchema.exactOptional().openapi({ description: 'Application name.' }),
  })
  .openapi({ required: ['applicationID'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const UpdateLaunchConfigurationRequestSchema = z
  .object({
    bootMode: BootModeSchema.exactOptional().openapi({
      description: 'Update Launch configuration boot mode request.',
    }),
    copyPrivateIp: BooleanSchema.exactOptional().openapi({
      description: 'Update Launch configuration copy Private IP request.',
    }),
    copyTags: BooleanSchema.exactOptional().openapi({
      description: 'Update Launch configuration copy Tags request.',
    }),
    enableMapAutoTagging: BooleanSchema.exactOptional().openapi({
      description: 'Enable map auto tagging.',
    }),
    launchDisposition: LaunchDispositionSchema.exactOptional().openapi({
      description: 'Update Launch configuration launch disposition request.',
    }),
    licensing: LicensingSchema.exactOptional().openapi({
      description: 'Update Launch configuration licensing request.',
    }),
    mapAutoTaggingMpeID: TagValueSchema.exactOptional().openapi({
      description: 'Launch configuration map auto tagging MPE ID.',
    }),
    name: SmallBoundedStringSchema.exactOptional().openapi({
      description: 'Update Launch configuration name request.',
    }),
    postLaunchActions: PostLaunchActionsSchema.exactOptional(),
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Update Launch configuration by Source Server ID request.',
    }),
    targetInstanceTypeRightSizingMethod:
      TargetInstanceTypeRightSizingMethodSchema.exactOptional().openapi({
        description: 'Update Launch configuration Target instance right sizing request.',
      }),
  })
  .openapi({ required: ['sourceServerID'], title: 'UpdateLaunchConfigurationRequest' })
  .openapi('UpdateLaunchConfigurationRequest')

const UpdateLaunchConfigurationTemplateRequestSchema = z
  .object({
    associatePublicIpAddress: BooleanSchema.exactOptional().openapi({
      description: 'Associate public Ip address.',
    }),
    bootMode: BootModeSchema.exactOptional().openapi({
      description: 'Launch configuration template boot mode.',
    }),
    copyPrivateIp: BooleanSchema.exactOptional().openapi({ description: 'Copy private Ip.' }),
    copyTags: BooleanSchema.exactOptional().openapi({ description: 'Copy tags.' }),
    enableMapAutoTagging: BooleanSchema.exactOptional().openapi({
      description: 'Enable map auto tagging.',
    }),
    largeVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Large volume config.',
    }),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.openapi({
      description: 'Launch Configuration Template ID.',
    }),
    launchDisposition: LaunchDispositionSchema.exactOptional().openapi({
      description: 'Launch disposition.',
    }),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.exactOptional().openapi({
      description: 'Launch configuration template map auto tagging MPE ID.',
    }),
    postLaunchActions: PostLaunchActionsSchema.exactOptional().openapi({
      description: 'Post Launch Action to execute on the Test or Cutover instance.',
    }),
    smallVolumeConf: LaunchTemplateDiskConfSchema.exactOptional().openapi({
      description: 'Small volume config.',
    }),
    smallVolumeMaxSize: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Small volume maximum size.',
    }),
    targetInstanceTypeRightSizingMethod:
      TargetInstanceTypeRightSizingMethodSchema.exactOptional().openapi({
        description: 'Target instance type right-sizing method.',
      }),
  })
  .openapi({
    required: ['launchConfigurationTemplateID'],
    title: 'UpdateLaunchConfigurationTemplateRequest',
  })
  .openapi('UpdateLaunchConfigurationTemplateRequest')

const UpdateReplicationConfigurationRequestSchema = z
  .object({
    associateDefaultSecurityGroup: BooleanSchema.exactOptional().openapi({
      description:
        'Update replication configuration associate default Application Migration Service Security group request.',
    }),
    bandwidthThrottling: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Update replication configuration bandwidth throttling request.',
    }),
    createPublicIP: BooleanSchema.exactOptional().openapi({
      description: 'Update replication configuration create Public IP request.',
    }),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.exactOptional().openapi({
      description: 'Update replication configuration data plane routing request.',
    }),
    defaultLargeStagingDiskType:
      ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.exactOptional().openapi({
        description:
          'Update replication configuration use default large Staging Disk type request.',
      }),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.exactOptional().openapi({
      description: 'Update replication configuration EBS encryption request.',
    }),
    ebsEncryptionKeyArn: ARNSchema.exactOptional().openapi({
      description: 'Update replication configuration EBS encryption key ARN request.',
    }),
    name: SmallBoundedStringSchema.exactOptional().openapi({
      description: 'Update replication configuration name request.',
    }),
    replicatedDisks: ReplicationConfigurationReplicatedDisksSchema.exactOptional().openapi({
      description: 'Update replication configuration replicated disks request.',
    }),
    replicationServerInstanceType: EC2InstanceTypeSchema.exactOptional().openapi({
      description: 'Update replication configuration Replication Server instance type request.',
    }),
    replicationServersSecurityGroupsIDs:
      ReplicationServersSecurityGroupsIDsSchema.exactOptional().openapi({
        description:
          'Update replication configuration Replication Server Security Groups IDs request.',
      }),
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'Update replication configuration Source Server ID request.',
    }),
    stagingAreaSubnetId: SubnetIDSchema.exactOptional().openapi({
      description: 'Update replication configuration Staging Area subnet request.',
    }),
    stagingAreaTags: TagsMapSchema.exactOptional().openapi({
      description: 'Update replication configuration Staging Area Tags request.',
    }),
    useDedicatedReplicationServer: BooleanSchema.exactOptional().openapi({
      description: 'Update replication configuration use dedicated Replication Server request.',
    }),
  })
  .openapi({ required: ['sourceServerID'], title: 'UpdateReplicationConfigurationRequest' })
  .openapi('UpdateReplicationConfigurationRequest')

const UpdateReplicationConfigurationTemplateRequestSchema = z
  .object({
    arn: ARNSchema.exactOptional().openapi({
      description: 'Update replication configuration template ARN request.',
    }),
    associateDefaultSecurityGroup: BooleanSchema.exactOptional().openapi({
      description:
        'Update replication configuration template associate default Application Migration Service Security group request.',
    }),
    bandwidthThrottling: PositiveIntegerSchema.exactOptional().openapi({
      description: 'Update replication configuration template bandwidth throttling request.',
    }),
    createPublicIP: BooleanSchema.exactOptional().openapi({
      description: 'Update replication configuration template create Public IP request.',
    }),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.exactOptional().openapi({
      description: 'Update replication configuration template data plane routing request.',
    }),
    defaultLargeStagingDiskType:
      ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.exactOptional().openapi({
        description:
          'Update replication configuration template use default large Staging Disk type request.',
      }),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.exactOptional().openapi({
      description: 'Update replication configuration template EBS encryption request.',
    }),
    ebsEncryptionKeyArn: ARNSchema.exactOptional().openapi({
      description: 'Update replication configuration template EBS encryption key ARN request.',
    }),
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.openapi({
      description: 'Update replication configuration template template ID request.',
    }),
    replicationServerInstanceType: EC2InstanceTypeSchema.exactOptional().openapi({
      description:
        'Update replication configuration template Replication Server instance type request.',
    }),
    replicationServersSecurityGroupsIDs:
      ReplicationServersSecurityGroupsIDsSchema.exactOptional().openapi({
        description:
          'Update replication configuration template Replication Server Security groups IDs request.',
      }),
    stagingAreaSubnetId: SubnetIDSchema.exactOptional().openapi({
      description: 'Update replication configuration template Staging Area subnet ID request.',
    }),
    stagingAreaTags: TagsMapSchema.exactOptional().openapi({
      description: 'Update replication configuration template Staging Area Tags request.',
    }),
    useDedicatedReplicationServer: BooleanSchema.exactOptional().openapi({
      description:
        'Update replication configuration template use dedicated Replication Server request.',
    }),
  })
  .openapi({
    required: ['replicationConfigurationTemplateID'],
    title: 'UpdateReplicationConfigurationTemplateRequest',
  })
  .openapi('UpdateReplicationConfigurationTemplateRequest')

const UpdateSourceServerReplicationTypeRequestSchema = z
  .object({
    replicationType: ReplicationTypeSchema.openapi({
      description: 'Replication type to which to update source server.',
    }),
    sourceServerID: SourceServerIDSchema.openapi({
      description: 'ID of source server on which to update replication type.',
    }),
  })
  .openapi({
    required: ['replicationType', 'sourceServerID'],
    title: 'UpdateSourceServerReplicationTypeRequest',
  })
  .openapi('UpdateSourceServerReplicationTypeRequest')

const UpdateWaveRequestSchema = z
  .object({
    description: WaveDescriptionSchema.exactOptional().openapi({
      description: 'Wave description.',
    }),
    name: WaveNameSchema.exactOptional().openapi({ description: 'Wave name.' }),
    waveID: WaveIDSchema.openapi({ description: 'Wave ID.' }),
  })
  .openapi({ required: ['waveID'], title: 'UpdateWaveRequest' })
  .openapi('UpdateWaveRequest')

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

export const postArchiveApplicationRoute = createRoute({
  method: 'post',
  path: '/ArchiveApplication',
  description: 'Archive application.',
  operationId: 'ArchiveApplication',
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
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
            })
            .openapi({ required: ['applicationID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postArchiveWaveRoute = createRoute({
  method: 'post',
  path: '/ArchiveWave',
  description: 'Archive wave.',
  operationId: 'ArchiveWave',
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
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WaveSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postAssociateApplicationsRoute = createRoute({
  method: 'post',
  path: '/AssociateApplications',
  description: 'Associate applications to wave.',
  operationId: 'AssociateApplications',
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
              applicationIDs: z
                .array(ApplicationIDSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Application IDs list.' }),
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['applicationIDs', 'waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateApplicationsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postAssociateSourceServersRoute = createRoute({
  method: 'post',
  path: '/AssociateSourceServers',
  description: 'Associate source servers to application.',
  operationId: 'AssociateSourceServers',
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
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
              sourceServerIDs: z
                .array(SourceServerIDSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Source server IDs list.' }),
            })
            .openapi({ required: ['applicationID', 'sourceServerIDs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateSourceServersResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postChangeServerLifeCycleStateRoute = createRoute({
  method: 'post',
  path: '/ChangeServerLifeCycleState',
  description:
    'Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)',
  operationId: 'ChangeServerLifeCycleState',
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
              lifeCycle: z
                .object({
                  state:
                    ChangeServerLifeCycleStateSourceServerLifecycleStateSchema.exactOptional().openapi(
                      {
                        description:
                          'The request to change the source server migration lifecycle state.',
                      },
                    ),
                })
                .openapi({
                  description: 'The request to change the source server migration lifecycle state.',
                  required: [],
                }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description:
                    'The request to change the source server migration lifecycle state by source server ID.',
                }),
            })
            .openapi({ required: ['lifeCycle', 'sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCreateApplicationRoute = createRoute({
  method: 'post',
  path: '/CreateApplication',
  description: 'Create application.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .regex(/^[^\x00]*$/)
                .min(0)
                .max(600)
                .exactOptional()
                .openapi({ description: 'Application description.' }),
              name: z
                .string()
                .regex(/^[^\s\x00]( *[^\s\x00])*$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Application name.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'Application tags.' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCreateLaunchConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/CreateLaunchConfigurationTemplate',
  description: 'Creates a new Launch Configuration Template.',
  operationId: 'CreateLaunchConfigurationTemplate',
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
              associatePublicIpAddress: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Associate public Ip address.' }),
              bootMode: z
                .enum(['LEGACY_BIOS', 'UEFI'])
                .exactOptional()
                .openapi({ description: 'Launch configuration template boot mode.' }),
              copyPrivateIp: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Copy private Ip.' }),
              copyTags: z.boolean().exactOptional().openapi({ description: 'Copy tags.' }),
              enableMapAutoTagging: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable map auto tagging.' }),
              largeVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk iops configuration.',
                  }),
                  throughput: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk throughput configuration.',
                  }),
                  volumeType: VolumeTypeSchema.exactOptional().openapi({
                    description: 'Launch template disk volume type configuration.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Launch template disk configuration.', required: [] }),
              launchDisposition: z
                .enum(['STOPPED', 'STARTED'])
                .exactOptional()
                .openapi({ description: 'Launch disposition.' }),
              licensing: z
                .object({
                  osByol: BooleanSchema.exactOptional().openapi({
                    description: 'Configure BYOL OS licensing.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Configure Licensing.', required: [] }),
              mapAutoTaggingMpeID: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Launch configuration template map auto tagging MPE ID.' }),
              postLaunchActions: z
                .object({
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's CloudWatch log group name.",
                  }),
                  deployment: PostLaunchActionsDeploymentTypeSchema.exactOptional().openapi({
                    description:
                      'Deployment type in which AWS Systems Manager Documents will be executed.',
                  }),
                  s3LogBucket: S3LogBucketNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 log bucket.",
                  }),
                  s3OutputKeyPrefix: BoundedStringSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 output key prefix.",
                  }),
                  ssmDocuments: SsmDocumentsSchema.exactOptional().openapi({
                    description: 'AWS Systems Manager Documents.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Post Launch Actions to executed on the Test or Cutover instance.',
                  required: [],
                }),
              smallVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk iops configuration.',
                  }),
                  throughput: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk throughput configuration.',
                  }),
                  volumeType: VolumeTypeSchema.exactOptional().openapi({
                    description: 'Launch template disk volume type configuration.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Launch template disk configuration.', required: [] }),
              smallVolumeMaxSize: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({ description: 'Small volume maximum size.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Request to associate tags during creation of a Launch Configuration Template.',
                }),
              targetInstanceTypeRightSizingMethod: z
                .enum(['NONE', 'BASIC'])
                .exactOptional()
                .openapi({ description: 'Target instance type right-sizing method.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: LaunchConfigurationTemplateSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postCreateReplicationConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/CreateReplicationConfigurationTemplate',
  description: 'Creates a new ReplicationConfigurationTemplate.',
  operationId: 'CreateReplicationConfigurationTemplate',
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
              associateDefaultSecurityGroup: z
                .boolean()
                .openapi({
                  description:
                    'Request to associate the default Application Migration Service Security group with the Replication Settings template.',
                }),
              bandwidthThrottling: z
                .int()
                .min(0)
                .openapi({
                  description:
                    'Request to configure bandwidth throttling during Replication Settings template creation.',
                }),
              createPublicIP: z
                .boolean()
                .openapi({
                  description:
                    'Request to create Public IP during Replication Settings template creation.',
                }),
              dataPlaneRouting: z
                .enum(['PRIVATE_IP', 'PUBLIC_IP'])
                .openapi({
                  description:
                    'Request to configure data plane routing during Replication Settings template creation.',
                }),
              defaultLargeStagingDiskType: z
                .enum(['GP2', 'ST1', 'GP3'])
                .openapi({
                  description:
                    'Request to configure the default large staging disk EBS volume type during Replication Settings template creation.',
                }),
              ebsEncryption: z
                .enum(['DEFAULT', 'CUSTOM'])
                .openapi({
                  description:
                    'Request to configure EBS encryption during Replication Settings template creation.',
                }),
              ebsEncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Request to configure an EBS encryption key during Replication Settings template creation.',
                }),
              replicationServerInstanceType: z
                .string()
                .min(0)
                .max(255)
                .openapi({
                  description:
                    'Request to configure the Replication Server instance type during Replication Settings template creation.',
                }),
              replicationServersSecurityGroupsIDs: z
                .array(SecurityGroupIDSchema)
                .min(0)
                .max(32)
                .openapi({
                  description:
                    'Request to configure the Replication Server Security group ID during Replication Settings template creation.',
                }),
              stagingAreaSubnetId: z
                .string()
                .regex(/^subnet-[0-9a-fA-F]{8,}$/)
                .min(0)
                .max(255)
                .openapi({
                  description:
                    'Request to configure the Staging Area subnet ID during Replication Settings template creation.',
                }),
              stagingAreaTags: z
                .record(z.string(), TagValueSchema)
                .openapi({
                  description:
                    'Request to configure Staging Area tags during Replication Settings template creation.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Request to configure tags during Replication Settings template creation.',
                }),
              useDedicatedReplicationServer: z
                .boolean()
                .openapi({
                  description:
                    'Request to use Dedicated Replication Servers during Replication Settings template creation.',
                }),
            })
            .openapi({
              required: [
                'associateDefaultSecurityGroup',
                'bandwidthThrottling',
                'createPublicIP',
                'dataPlaneRouting',
                'defaultLargeStagingDiskType',
                'ebsEncryption',
                'replicationServerInstanceType',
                'replicationServersSecurityGroupsIDs',
                'stagingAreaSubnetId',
                'stagingAreaTags',
                'useDedicatedReplicationServer',
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
      content: { 'application/json': { schema: ReplicationConfigurationTemplateSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postCreateWaveRoute = createRoute({
  method: 'post',
  path: '/CreateWave',
  description: 'Create wave.',
  operationId: 'CreateWave',
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
              description: z
                .string()
                .regex(/^[^\x00]*$/)
                .min(0)
                .max(600)
                .exactOptional()
                .openapi({ description: 'Wave description.' }),
              name: z
                .string()
                .regex(/^[^\s\x00]( *[^\s\x00])*$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Wave name.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'Wave tags.' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: WaveSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/DeleteApplication',
  description: 'Delete application.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
            })
            .openapi({ required: ['applicationID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteJobRoute = createRoute({
  method: 'post',
  path: '/DeleteJob',
  description: 'Deletes a single Job by ID.',
  operationId: 'DeleteJob',
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
              jobID: z
                .string()
                .regex(/^mgnjob-[0-9a-zA-Z]{17}$/)
                .length(24)
                .openapi({ description: 'Request to delete Job from service by Job ID.' }),
            })
            .openapi({ required: ['jobID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteLaunchConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/DeleteLaunchConfigurationTemplate',
  description: 'Deletes a single Launch Configuration Template by ID.',
  operationId: 'DeleteLaunchConfigurationTemplate',
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
              launchConfigurationTemplateID: z
                .string()
                .regex(/^lct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'ID of resource to be deleted.' }),
            })
            .openapi({ required: ['launchConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLaunchConfigurationTemplateResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteReplicationConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/DeleteReplicationConfigurationTemplate',
  description: 'Deletes a single Replication Configuration Template by ID',
  operationId: 'DeleteReplicationConfigurationTemplate',
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
              replicationConfigurationTemplateID: z
                .string()
                .regex(/^rct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({
                  description:
                    'Request to delete Replication Configuration Template from service by Replication Configuration Template ID.',
                }),
            })
            .openapi({ required: ['replicationConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: {
        'application/json': { schema: DeleteReplicationConfigurationTemplateResponseSchema },
      },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteSourceServerRoute = createRoute({
  method: 'post',
  path: '/DeleteSourceServer',
  description: 'Deletes a single source server by ID.',
  operationId: 'DeleteSourceServer',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Request to delete Source Server from service by Server ID.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSourceServerResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDeleteVcenterClientRoute = createRoute({
  method: 'post',
  path: '/DeleteVcenterClient',
  description: 'Deletes a given vCenter client by ID.',
  operationId: 'DeleteVcenterClient',
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
              vcenterClientID: z
                .string()
                .regex(/^vcc-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'ID of resource to be deleted.' }),
            })
            .openapi({ required: ['vcenterClientID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDeleteWaveRoute = createRoute({
  method: 'post',
  path: '/DeleteWave',
  description: 'Delete wave.',
  operationId: 'DeleteWave',
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
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWaveResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDescribeJobLogItemsRoute = createRoute({
  method: 'post',
  path: '/DescribeJobLogItems',
  description: 'Retrieves detailed job log items with paging.',
  operationId: 'DescribeJobLogItems',
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
              jobID: z
                .string()
                .regex(/^mgnjob-[0-9a-zA-Z]{17}$/)
                .length(24)
                .openapi({ description: 'Request to describe Job log job ID.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Request to describe Job log item maximum results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Request to describe Job log next token.' }),
            })
            .openapi({ required: ['jobID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobLogItemsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeJobsRoute = createRoute({
  method: 'post',
  path: '/DescribeJobs',
  description:
    'Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.',
  operationId: 'DescribeJobs',
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
                .object({
                  fromDate: ISO8601DatetimeStringSchema.exactOptional().openapi({
                    description: 'Request to describe Job log filters by date.',
                  }),
                  jobIDs: DescribeJobsRequestFiltersJobIDsSchema.exactOptional().openapi({
                    description: 'Request to describe Job log filters by job ID.',
                  }),
                  toDate: ISO8601DatetimeStringSchema.exactOptional().openapi({
                    description: 'Request to describe job log items by last date.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Request to describe Job log filters.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Request to describe job log items by max results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Request to describe job log items by next token.' }),
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
      content: { 'application/json': { schema: DescribeJobsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeLaunchConfigurationTemplatesRoute = createRoute({
  method: 'post',
  path: '/DescribeLaunchConfigurationTemplates',
  description:
    'Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs',
  operationId: 'DescribeLaunchConfigurationTemplates',
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
              launchConfigurationTemplateIDs: z
                .array(LaunchConfigurationTemplateIDSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'Request to filter Launch Configuration Templates list by Launch Configuration Template ID.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum results to be returned in DescribeLaunchConfigurationTemplates.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Next pagination token returned from DescribeLaunchConfigurationTemplates.',
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
      content: {
        'application/json': { schema: DescribeLaunchConfigurationTemplatesResponseSchema },
      },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeReplicationConfigurationTemplatesRoute = createRoute({
  method: 'post',
  path: '/DescribeReplicationConfigurationTemplates',
  description: 'Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.',
  operationId: 'DescribeReplicationConfigurationTemplates',
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
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Request to describe Replication Configuration template by max results.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Request to describe Replication Configuration template by next token.',
                }),
              replicationConfigurationTemplateIDs: z
                .array(ReplicationConfigurationTemplateIDSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'Request to describe Replication Configuration template by template IDs.',
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
      content: {
        'application/json': { schema: DescribeReplicationConfigurationTemplatesResponseSchema },
      },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeSourceServersRoute = createRoute({
  method: 'post',
  path: '/DescribeSourceServers',
  description: 'Retrieves all SourceServers or multiple SourceServers by ID.',
  operationId: 'DescribeSourceServers',
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
                .object({
                  applicationIDs:
                    DescribeSourceServersRequestApplicationIDsSchema.exactOptional().openapi({
                      description: 'Request to filter Source Servers list by application IDs.',
                    }),
                  isArchived: BooleanSchema.exactOptional().openapi({
                    description: 'Request to filter Source Servers list by archived.',
                  }),
                  lifeCycleStates: LifeCycleStatesSchema.exactOptional().openapi({
                    description: 'Request to filter Source Servers list by life cycle states.',
                  }),
                  replicationTypes: ReplicationTypesSchema.exactOptional().openapi({
                    description: 'Request to filter Source Servers list by replication type.',
                  }),
                  sourceServerIDs:
                    DescribeSourceServersRequestFiltersIDsSchema.exactOptional().openapi({
                      description: 'Request to filter Source Servers list by Source Server ID.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Request to filter Source Servers list.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'Request to filter Source Servers list by maximum results.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Request to filter Source Servers list by next token.' }),
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
      content: { 'application/json': { schema: DescribeSourceServersResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getDescribeVcenterClientsRoute = createRoute({
  method: 'get',
  path: '/DescribeVcenterClients',
  description: 'Returns a list of the installed vCenter clients.',
  operationId: 'DescribeVcenterClients',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum results to be returned in DescribeVcenterClients.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      nextToken: z
        .string()
        .min(0)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Next pagination token to be provided for DescribeVcenterClients.',
            schema: { type: 'string', minLength: 0, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVcenterClientsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDisassociateApplicationsRoute = createRoute({
  method: 'post',
  path: '/DisassociateApplications',
  description: 'Disassociate applications from wave.',
  operationId: 'DisassociateApplications',
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
              applicationIDs: z
                .array(ApplicationIDSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Application IDs list.' }),
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['applicationIDs', 'waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateApplicationsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDisassociateSourceServersRoute = createRoute({
  method: 'post',
  path: '/DisassociateSourceServers',
  description: 'Disassociate source servers from application.',
  operationId: 'DisassociateSourceServers',
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
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
              sourceServerIDs: z
                .array(SourceServerIDSchema)
                .min(1)
                .max(50)
                .openapi({ description: 'Source server IDs list.' }),
            })
            .openapi({ required: ['applicationID', 'sourceServerIDs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateSourceServersResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDisconnectFromServiceRoute = createRoute({
  method: 'post',
  path: '/DisconnectFromService',
  description:
    'Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.',
  operationId: 'DisconnectFromService',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Request to disconnect Source Server from service by Server ID.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postFinalizeCutoverRoute = createRoute({
  method: 'post',
  path: '/FinalizeCutover',
  description:
    'Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.',
  operationId: 'FinalizeCutover',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'Request to finalize Cutover by Source Server ID.' }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postGetLaunchConfigurationRoute = createRoute({
  method: 'post',
  path: '/GetLaunchConfiguration',
  description: 'Lists all LaunchConfigurations available, filtered by Source Server IDs.',
  operationId: 'GetLaunchConfiguration',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description:
                    'Request to get Launch Configuration information by Source Server ID.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LaunchConfigurationSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postGetReplicationConfigurationRoute = createRoute({
  method: 'post',
  path: '/GetReplicationConfiguration',
  description: 'Lists all ReplicationConfigurations, filtered by Source Server ID.',
  operationId: 'GetReplicationConfiguration',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Request to get Replication Configuration by Source Server ID.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplicationConfigurationSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postInitializeServiceRoute = createRoute({
  method: 'post',
  path: '/InitializeService',
  description: 'Initialize Application Migration Service.',
  operationId: 'InitializeService',
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
    204: {
      description: 'Success',
      content: { 'application/json': { schema: InitializeServiceResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postListApplicationsRoute = createRoute({
  method: 'post',
  path: '/ListApplications',
  description: 'Retrieves all applications or multiple applications by ID.',
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
                .object({
                  applicationIDs: ApplicationIDsFilterSchema.exactOptional().openapi({
                    description: 'Filter applications list by application ID.',
                  }),
                  isArchived: BooleanSchema.exactOptional().openapi({
                    description: 'Filter applications list by archival status.',
                  }),
                  waveIDs: WaveIDsFilterSchema.exactOptional().openapi({
                    description: 'Filter applications list by wave ID.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Applications list filters.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Maximum results to return when listing applications.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Request next token.' }),
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
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
  },
})

export const postListExportErrorsRoute = createRoute({
  method: 'post',
  path: '/ListExportErrors',
  description: 'List export errors.',
  operationId: 'ListExportErrors',
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
              exportID: z
                .string()
                .regex(/^export-[0-9a-zA-Z]{17}$/)
                .length(24)
                .openapi({ description: 'List export errors request export id.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'List export errors request max results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'List export errors request next token.' }),
            })
            .openapi({ required: ['exportID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExportErrorsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListExportsRoute = createRoute({
  method: 'post',
  path: '/ListExports',
  description: 'List exports.',
  operationId: 'ListExports',
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
                .object({
                  exportIDs: ListExportsRequestFiltersExportIDsSchema.exactOptional().openapi({
                    description: 'List exports request filters export ids.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'List exports request filters.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'List export request max results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'List export request next token.' }),
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
      content: { 'application/json': { schema: ListExportsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
  },
})

export const postListImportErrorsRoute = createRoute({
  method: 'post',
  path: '/ListImportErrors',
  description: 'List import errors.',
  operationId: 'ListImportErrors',
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
              importID: z
                .string()
                .regex(/^import-[0-9a-zA-Z]{17}$/)
                .length(24)
                .openapi({ description: 'List import errors request import id.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'List import errors request max results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'List import errors request next token.' }),
            })
            .openapi({ required: ['importID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImportErrorsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListImportsRoute = createRoute({
  method: 'post',
  path: '/ListImports',
  description: 'List imports.',
  operationId: 'ListImports',
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
                .object({
                  importIDs: ImportIDsFilterSchema.exactOptional().openapi({
                    description: 'List imports request filters import IDs.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'List imports request filters.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'List imports request max results.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'List imports request next token.' }),
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
      content: { 'application/json': { schema: ListImportsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListSourceServerActionsRoute = createRoute({
  method: 'post',
  path: '/ListSourceServerActions',
  description: 'List source server post migration custom actions.',
  operationId: 'ListSourceServerActions',
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
                .object({
                  actionIDs: ActionIDsSchema.exactOptional().openapi({
                    description:
                      'Action IDs to filter source server post migration custom actions by.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action filters.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum amount of items to return when listing source server post migration custom actions.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Next token to use when listing source server post migration custom actions.',
                }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'Source server ID.' }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSourceServerActionsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'List all tags for your Application Migration Service resources.',
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
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'List tags for resource request by ARN.',
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.',
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
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'Tag resource by ARN.',
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
                .record(z.string(), TagValueSchema)
                .openapi({ description: 'Tag resource by Tags.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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

export const postListTemplateActionsRoute = createRoute({
  method: 'post',
  path: '/ListTemplateActions',
  description: 'List template post migration custom actions.',
  operationId: 'ListTemplateActions',
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
                .object({
                  actionIDs: ActionIDsSchema.exactOptional().openapi({
                    description: 'Action IDs to filter template post migration custom actions by.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Template post migration custom action filters.',
                  required: [],
                }),
              launchConfigurationTemplateID: z
                .string()
                .regex(/^lct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Launch configuration template ID.' }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum amount of items to return when listing template post migration custom actions.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Next token to use when listing template post migration custom actions.',
                }),
            })
            .openapi({ required: ['launchConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTemplateActionsResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postListWavesRoute = createRoute({
  method: 'post',
  path: '/ListWaves',
  description: 'Retrieves all waves or multiple waves by ID.',
  operationId: 'ListWaves',
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
                .object({
                  isArchived: BooleanSchema.exactOptional().openapi({
                    description: 'Filter waves list by archival status.',
                  }),
                  waveIDs: WaveIDsFilterSchema.exactOptional().openapi({
                    description: 'Filter waves list by wave ID.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Waves list filters.', required: [] }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Maximum results to return when listing waves.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Request next token.' }),
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
      content: { 'application/json': { schema: ListWavesResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
  },
})

export const postMarkAsArchivedRoute = createRoute({
  method: 'post',
  path: '/MarkAsArchived',
  description:
    'Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.',
  operationId: 'MarkAsArchived',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'Mark as archived by Source Server ID.' }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postPutSourceServerActionRoute = createRoute({
  method: 'post',
  path: '/PutSourceServerAction',
  description: 'Put source server post migration custom action.',
  operationId: 'PutSourceServerAction',
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
              actionID: z
                .string()
                .regex(/[0-9a-zA-Z]$/)
                .min(1)
                .max(64)
                .openapi({ description: 'Source server post migration custom action ID.' }),
              actionName: z
                .string()
                .regex(/^[^\s\x00]( *[^\s\x00])*$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Source server post migration custom action name.' }),
              active: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action active status.',
                }),
              category: z
                .enum([
                  'DISASTER_RECOVERY',
                  'OPERATING_SYSTEM',
                  'LICENSE_AND_SUBSCRIPTION',
                  'VALIDATION',
                  'OBSERVABILITY',
                  'SECURITY',
                  'NETWORKING',
                  'CONFIGURATION',
                  'BACKUP',
                  'OTHER',
                ])
                .exactOptional()
                .openapi({ description: 'Source server post migration custom action category.' }),
              description: z
                .string()
                .regex(/^[0-9a-zA-Z ():\/.,'-_#*; ]*$/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action description.',
                }),
              documentIdentifier: z
                .string()
                .min(0)
                .max(256)
                .openapi({
                  description: 'Source server post migration custom action document identifier.',
                }),
              documentVersion: z
                .string()
                .regex(/^(\$DEFAULT|\$LATEST|[0-9]+)$/)
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action document version.',
                }),
              externalParameters: z
                .record(z.string(), SsmExternalParameterSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action external parameters.',
                }),
              mustSucceedForCutover: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Source server post migration custom action must succeed for cutover.',
                }),
              order: z
                .int()
                .min(1001)
                .max(10000)
                .openapi({ description: 'Source server post migration custom action order.' }),
              parameters: z
                .record(z.string(), SsmParameterStoreParametersSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({ description: 'Source server post migration custom action parameters.' }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'Source server ID.' }),
              timeoutSeconds: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'Source server post migration custom action timeout in seconds.',
                }),
            })
            .openapi({
              required: ['actionID', 'actionName', 'documentIdentifier', 'order', 'sourceServerID'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerActionDocumentSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postPutTemplateActionRoute = createRoute({
  method: 'post',
  path: '/PutTemplateAction',
  description: 'Put template post migration custom action.',
  operationId: 'PutTemplateAction',
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
              actionID: z
                .string()
                .regex(/[0-9a-zA-Z]$/)
                .min(1)
                .max(64)
                .openapi({ description: 'Template post migration custom action ID.' }),
              actionName: z
                .string()
                .min(0)
                .max(256)
                .openapi({ description: 'Template post migration custom action name.' }),
              active: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Template post migration custom action active status.' }),
              category: z
                .enum([
                  'DISASTER_RECOVERY',
                  'OPERATING_SYSTEM',
                  'LICENSE_AND_SUBSCRIPTION',
                  'VALIDATION',
                  'OBSERVABILITY',
                  'SECURITY',
                  'NETWORKING',
                  'CONFIGURATION',
                  'BACKUP',
                  'OTHER',
                ])
                .exactOptional()
                .openapi({ description: 'Template post migration custom action category.' }),
              description: z
                .string()
                .regex(/^[0-9a-zA-Z ():\/.,'-_#*; ]*$/)
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Template post migration custom action description.' }),
              documentIdentifier: z
                .string()
                .min(0)
                .max(256)
                .openapi({
                  description: 'Template post migration custom action document identifier.',
                }),
              documentVersion: z
                .string()
                .regex(/^(\$DEFAULT|\$LATEST|[0-9]+)$/)
                .exactOptional()
                .openapi({
                  description: 'Template post migration custom action document version.',
                }),
              externalParameters: z
                .record(z.string(), SsmExternalParameterSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({
                  description: 'Template post migration custom action external parameters.',
                }),
              launchConfigurationTemplateID: z
                .string()
                .regex(/^lct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Launch configuration template ID.' }),
              mustSucceedForCutover: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Template post migration custom action must succeed for cutover.',
                }),
              operatingSystem: z
                .string()
                .regex(/^(linux|windows)$/)
                .exactOptional()
                .openapi({
                  description:
                    'Operating system eligible for this template post migration custom action.',
                }),
              order: z
                .int()
                .min(1001)
                .max(10000)
                .openapi({ description: 'Template post migration custom action order.' }),
              parameters: z
                .record(z.string(), SsmParameterStoreParametersSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 20)
                .exactOptional()
                .openapi({ description: 'Template post migration custom action parameters.' }),
              timeoutSeconds: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description: 'Template post migration custom action timeout in seconds.',
                }),
            })
            .openapi({
              required: [
                'actionID',
                'actionName',
                'documentIdentifier',
                'launchConfigurationTemplateID',
                'order',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplateActionDocumentSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postRemoveSourceServerActionRoute = createRoute({
  method: 'post',
  path: '/RemoveSourceServerAction',
  description: 'Remove source server post migration custom action.',
  operationId: 'RemoveSourceServerAction',
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
              actionID: z
                .string()
                .regex(/[0-9a-zA-Z]$/)
                .min(1)
                .max(64)
                .openapi({
                  description: 'Source server post migration custom action ID to remove.',
                }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Source server ID of the post migration custom action to remove.',
                }),
            })
            .openapi({ required: ['actionID', 'sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveSourceServerActionResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRemoveTemplateActionRoute = createRoute({
  method: 'post',
  path: '/RemoveTemplateAction',
  description: 'Remove template post migration custom action.',
  operationId: 'RemoveTemplateAction',
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
              actionID: z
                .string()
                .regex(/[0-9a-zA-Z]$/)
                .min(1)
                .max(64)
                .openapi({ description: 'Template post migration custom action ID to remove.' }),
              launchConfigurationTemplateID: z
                .string()
                .regex(/^lct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({
                  description:
                    'Launch configuration template ID of the post migration custom action to remove.',
                }),
            })
            .openapi({ required: ['actionID', 'launchConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveTemplateActionResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postRetryDataReplicationRoute = createRoute({
  method: 'post',
  path: '/RetryDataReplication',
  description:
    'Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.',
  operationId: 'RetryDataReplication',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'Retry data replication for Source Server ID.' }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postStartCutoverRoute = createRoute({
  method: 'post',
  path: '/StartCutover',
  description:
    'Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.',
  operationId: 'StartCutover',
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
              sourceServerIDs: z
                .array(SourceServerIDSchema)
                .min(1)
                .max(200)
                .openapi({ description: 'Start Cutover by Source Server IDs.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'Start Cutover by Tags.' }),
            })
            .openapi({ required: ['sourceServerIDs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartCutoverResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postStartExportRoute = createRoute({
  method: 'post',
  path: '/StartExport',
  description: 'Start export.',
  operationId: 'StartExport',
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
              s3Bucket: z
                .string()
                .regex(/^[a-zA-Z0-9.\-_]{1,255}$/)
                .openapi({ description: 'Start export request s3 bucket.' }),
              s3BucketOwner: z
                .string()
                .regex(/[0-9]{12,}/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'Start export request s3 bucket owner.' }),
              s3Key: z
                .string()
                .regex(/^[^\x00]{1,1020}\.csv$/)
                .openapi({ description: 'Start export request s3key.' }),
            })
            .openapi({ required: ['s3Bucket', 's3Key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartExportResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postStartImportRoute = createRoute({
  method: 'post',
  path: '/StartImport',
  description: 'Start import.',
  operationId: 'StartImport',
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
                .min(0)
                .max(64)
                .exactOptional()
                .openapi({ description: 'Start import request client token.' }),
              s3BucketSource: z
                .object({
                  s3Bucket: S3BucketNameSchema.exactOptional().openapi({
                    description: 'S3 bucket source s3 bucket.',
                  }),
                  s3BucketOwner: AccountIDSchema.exactOptional().openapi({
                    description: 'S3 bucket source s3 bucket owner.',
                  }),
                  s3Key: S3KeySchema.exactOptional().openapi({
                    description: 'S3 bucket source s3 key.',
                  }),
                })
                .openapi({ description: 'S3 bucket source.', required: [] }),
            })
            .openapi({ required: ['s3BucketSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartImportResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postStartReplicationRoute = createRoute({
  method: 'post',
  path: '/StartReplication',
  description: 'Starts replication for SNAPSHOT_SHIPPING agents.',
  operationId: 'StartReplication',
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
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({ description: 'ID of source server on which to start replication.' }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postStartTestRoute = createRoute({
  method: 'post',
  path: '/StartTest',
  description:
    'Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.',
  operationId: 'StartTest',
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
              sourceServerIDs: z
                .array(SourceServerIDSchema)
                .min(1)
                .max(200)
                .openapi({ description: 'Start Test for Source Server IDs.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'Start Test by Tags.' }),
            })
            .openapi({ required: ['sourceServerIDs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartTestResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postTerminateTargetInstancesRoute = createRoute({
  method: 'post',
  path: '/TerminateTargetInstances',
  description:
    'Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.',
  operationId: 'TerminateTargetInstances',
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
              sourceServerIDs: z
                .array(SourceServerIDSchema)
                .min(1)
                .max(200)
                .openapi({ description: 'Terminate Target instance by Source Server IDs.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({ description: 'Terminate Target instance by Tags.' }),
            })
            .openapi({ required: ['sourceServerIDs'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: TerminateTargetInstancesResponseSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUnarchiveApplicationRoute = createRoute({
  method: 'post',
  path: '/UnarchiveApplication',
  description: 'Unarchive application.',
  operationId: 'UnarchiveApplication',
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
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
            })
            .openapi({ required: ['applicationID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postUnarchiveWaveRoute = createRoute({
  method: 'post',
  path: '/UnarchiveWave',
  description: 'Unarchive wave.',
  operationId: 'UnarchiveWave',
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
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WaveSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    'Deletes the specified set of tags from the specified set of Application Migration Service resources.',
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
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'Untag resource by ARN.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'Untag resource by Keys.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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

export const postUpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/UpdateApplication',
  description: 'Update application.',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              applicationID: z
                .string()
                .regex(/^app-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Application ID.' }),
              description: z
                .string()
                .regex(/^[^\x00]*$/)
                .min(0)
                .max(600)
                .exactOptional()
                .openapi({ description: 'Application description.' }),
              name: z
                .string()
                .regex(/^[^\s\x00]( *[^\s\x00])*$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Application name.' }),
            })
            .openapi({ required: ['applicationID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApplicationSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUpdateLaunchConfigurationRoute = createRoute({
  method: 'post',
  path: '/UpdateLaunchConfiguration',
  description: 'Updates multiple LaunchConfigurations by Source Server ID.',
  operationId: 'UpdateLaunchConfiguration',
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
              bootMode: z
                .enum(['LEGACY_BIOS', 'UEFI'])
                .exactOptional()
                .openapi({ description: 'Update Launch configuration boot mode request.' }),
              copyPrivateIp: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Update Launch configuration copy Private IP request.' }),
              copyTags: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Update Launch configuration copy Tags request.' }),
              enableMapAutoTagging: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable map auto tagging.' }),
              launchDisposition: z
                .enum(['STOPPED', 'STARTED'])
                .exactOptional()
                .openapi({
                  description: 'Update Launch configuration launch disposition request.',
                }),
              licensing: z
                .object({
                  osByol: BooleanSchema.exactOptional().openapi({
                    description: 'Configure BYOL OS licensing.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Configure Licensing.', required: [] }),
              mapAutoTaggingMpeID: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Launch configuration map auto tagging MPE ID.' }),
              name: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Update Launch configuration name request.' }),
              postLaunchActions: z
                .object({
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's CloudWatch log group name.",
                  }),
                  deployment: PostLaunchActionsDeploymentTypeSchema.exactOptional().openapi({
                    description:
                      'Deployment type in which AWS Systems Manager Documents will be executed.',
                  }),
                  s3LogBucket: S3LogBucketNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 log bucket.",
                  }),
                  s3OutputKeyPrefix: BoundedStringSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 output key prefix.",
                  }),
                  ssmDocuments: SsmDocumentsSchema.exactOptional().openapi({
                    description: 'AWS Systems Manager Documents.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Post Launch Actions to executed on the Test or Cutover instance.',
                  required: [],
                }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Update Launch configuration by Source Server ID request.',
                }),
              targetInstanceTypeRightSizingMethod: z
                .enum(['NONE', 'BASIC'])
                .exactOptional()
                .openapi({
                  description: 'Update Launch configuration Target instance right sizing request.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LaunchConfigurationSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUpdateLaunchConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/UpdateLaunchConfigurationTemplate',
  description: 'Updates an existing Launch Configuration Template by ID.',
  operationId: 'UpdateLaunchConfigurationTemplate',
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
              associatePublicIpAddress: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Associate public Ip address.' }),
              bootMode: z
                .enum(['LEGACY_BIOS', 'UEFI'])
                .exactOptional()
                .openapi({ description: 'Launch configuration template boot mode.' }),
              copyPrivateIp: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Copy private Ip.' }),
              copyTags: z.boolean().exactOptional().openapi({ description: 'Copy tags.' }),
              enableMapAutoTagging: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable map auto tagging.' }),
              largeVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk iops configuration.',
                  }),
                  throughput: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk throughput configuration.',
                  }),
                  volumeType: VolumeTypeSchema.exactOptional().openapi({
                    description: 'Launch template disk volume type configuration.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Launch template disk configuration.', required: [] }),
              launchConfigurationTemplateID: z
                .string()
                .regex(/^lct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({ description: 'Launch Configuration Template ID.' }),
              launchDisposition: z
                .enum(['STOPPED', 'STARTED'])
                .exactOptional()
                .openapi({ description: 'Launch disposition.' }),
              licensing: z
                .object({
                  osByol: BooleanSchema.exactOptional().openapi({
                    description: 'Configure BYOL OS licensing.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Configure Licensing.', required: [] }),
              mapAutoTaggingMpeID: z
                .string()
                .min(0)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Launch configuration template map auto tagging MPE ID.' }),
              postLaunchActions: z
                .object({
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's CloudWatch log group name.",
                  }),
                  deployment: PostLaunchActionsDeploymentTypeSchema.exactOptional().openapi({
                    description:
                      'Deployment type in which AWS Systems Manager Documents will be executed.',
                  }),
                  s3LogBucket: S3LogBucketNameSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 log bucket.",
                  }),
                  s3OutputKeyPrefix: BoundedStringSchema.exactOptional().openapi({
                    description: "AWS Systems Manager Command's logs S3 output key prefix.",
                  }),
                  ssmDocuments: SsmDocumentsSchema.exactOptional().openapi({
                    description: 'AWS Systems Manager Documents.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Post Launch Actions to executed on the Test or Cutover instance.',
                  required: [],
                }),
              smallVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk iops configuration.',
                  }),
                  throughput: PositiveIntegerSchema.exactOptional().openapi({
                    description: 'Launch template disk throughput configuration.',
                  }),
                  volumeType: VolumeTypeSchema.exactOptional().openapi({
                    description: 'Launch template disk volume type configuration.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Launch template disk configuration.', required: [] }),
              smallVolumeMaxSize: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({ description: 'Small volume maximum size.' }),
              targetInstanceTypeRightSizingMethod: z
                .enum(['NONE', 'BASIC'])
                .exactOptional()
                .openapi({ description: 'Target instance type right-sizing method.' }),
            })
            .openapi({ required: ['launchConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LaunchConfigurationTemplateSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUpdateReplicationConfigurationRoute = createRoute({
  method: 'post',
  path: '/UpdateReplicationConfiguration',
  description: 'Allows you to update multiple ReplicationConfigurations by Source Server ID.',
  operationId: 'UpdateReplicationConfiguration',
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
              associateDefaultSecurityGroup: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration associate default Application Migration Service Security group request.',
                }),
              bandwidthThrottling: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration bandwidth throttling request.',
                }),
              createPublicIP: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration create Public IP request.',
                }),
              dataPlaneRouting: z
                .enum(['PRIVATE_IP', 'PUBLIC_IP'])
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration data plane routing request.',
                }),
              defaultLargeStagingDiskType: z
                .enum(['GP2', 'ST1', 'GP3'])
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration use default large Staging Disk type request.',
                }),
              ebsEncryption: z
                .enum(['DEFAULT', 'CUSTOM'])
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration EBS encryption request.',
                }),
              ebsEncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration EBS encryption key ARN request.',
                }),
              name: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({ description: 'Update replication configuration name request.' }),
              replicatedDisks: z
                .array(ReplicationConfigurationReplicatedDiskSchema)
                .min(0)
                .max(60)
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration replicated disks request.',
                }),
              replicationServerInstanceType: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration Replication Server instance type request.',
                }),
              replicationServersSecurityGroupsIDs: z
                .array(SecurityGroupIDSchema)
                .min(0)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration Replication Server Security Groups IDs request.',
                }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'Update replication configuration Source Server ID request.',
                }),
              stagingAreaSubnetId: z
                .string()
                .regex(/^subnet-[0-9a-fA-F]{8,}$/)
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration Staging Area subnet request.',
                }),
              stagingAreaTags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration Staging Area Tags request.',
                }),
              useDedicatedReplicationServer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration use dedicated Replication Server request.',
                }),
            })
            .openapi({ required: ['sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplicationConfigurationSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUpdateReplicationConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/UpdateReplicationConfigurationTemplate',
  description: 'Updates multiple ReplicationConfigurationTemplates by ID.',
  operationId: 'UpdateReplicationConfigurationTemplate',
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
              arn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Update replication configuration template ARN request.' }),
              associateDefaultSecurityGroup: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template associate default Application Migration Service Security group request.',
                }),
              bandwidthThrottling: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template bandwidth throttling request.',
                }),
              createPublicIP: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template create Public IP request.',
                }),
              dataPlaneRouting: z
                .enum(['PRIVATE_IP', 'PUBLIC_IP'])
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template data plane routing request.',
                }),
              defaultLargeStagingDiskType: z
                .enum(['GP2', 'ST1', 'GP3'])
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template use default large Staging Disk type request.',
                }),
              ebsEncryption: z
                .enum(['DEFAULT', 'CUSTOM'])
                .exactOptional()
                .openapi({
                  description: 'Update replication configuration template EBS encryption request.',
                }),
              ebsEncryptionKeyArn: z
                .string()
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template EBS encryption key ARN request.',
                }),
              replicationConfigurationTemplateID: z
                .string()
                .regex(/^rct-[0-9a-zA-Z]{17}$/)
                .length(21)
                .openapi({
                  description: 'Update replication configuration template template ID request.',
                }),
              replicationServerInstanceType: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template Replication Server instance type request.',
                }),
              replicationServersSecurityGroupsIDs: z
                .array(SecurityGroupIDSchema)
                .min(0)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template Replication Server Security groups IDs request.',
                }),
              stagingAreaSubnetId: z
                .string()
                .regex(/^subnet-[0-9a-fA-F]{8,}$/)
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template Staging Area subnet ID request.',
                }),
              stagingAreaTags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template Staging Area Tags request.',
                }),
              useDedicatedReplicationServer: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Update replication configuration template use dedicated Replication Server request.',
                }),
            })
            .openapi({ required: ['replicationConfigurationTemplateID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReplicationConfigurationTemplateSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUpdateSourceServerReplicationTypeRoute = createRoute({
  method: 'post',
  path: '/UpdateSourceServerReplicationType',
  description:
    'Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.',
  operationId: 'UpdateSourceServerReplicationType',
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
              replicationType: z
                .enum(['AGENT_BASED', 'SNAPSHOT_SHIPPING'])
                .openapi({ description: 'Replication type to which to update source server.' }),
              sourceServerID: z
                .string()
                .regex(/^s-[0-9a-zA-Z]{17}$/)
                .length(19)
                .openapi({
                  description: 'ID of source server on which to update replication type.',
                }),
            })
            .openapi({ required: ['replicationType', 'sourceServerID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SourceServerSchema } },
    },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postUpdateWaveRoute = createRoute({
  method: 'post',
  path: '/UpdateWave',
  description: 'Update wave.',
  operationId: 'UpdateWave',
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
              description: z
                .string()
                .regex(/^[^\x00]*$/)
                .min(0)
                .max(600)
                .exactOptional()
                .openapi({ description: 'Wave description.' }),
              name: z
                .string()
                .regex(/^[^\s\x00]( *[^\s\x00])*$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Wave name.' }),
              waveID: z
                .string()
                .regex(/^wave-[0-9a-zA-Z]{17}$/)
                .length(22)
                .openapi({ description: 'Wave ID.' }),
            })
            .openapi({ required: ['waveID'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WaveSchema } } },
    480: {
      description: 'UninitializedAccountException',
      content: { 'application/json': { schema: UninitializedAccountExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
