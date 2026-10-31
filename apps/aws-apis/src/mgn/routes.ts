import { createRoute, z } from '@hono/zod-openapi'

const ApplicationHealthStatusSchema = z
  .enum(['HEALTHY', 'LAGGING', 'ERROR'])
  .openapi('ApplicationHealthStatus')

const ISO8601DatetimeStringSchema = z
  .string()
  .regex(
    /^[1-9][0-9]*-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?Z$/,
  )
  .min(19)
  .max(32)
  .openapi('ISO8601DatetimeString')

const ApplicationProgressStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
  .openapi('ApplicationProgressStatus')

const PositiveIntegerSchema = z.int().min(0).openapi('PositiveInteger')

const ApplicationAggregatedStatusSchema = z
  .object({
    healthStatus: ApplicationHealthStatusSchema.and(
      z.any().openapi({ description: 'Application aggregated status health status.' }),
    ).exactOptional(),
    lastUpdateDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Application aggregated status last update dateTime.' }),
    ).exactOptional(),
    progressStatus: ApplicationProgressStatusSchema.and(
      z.any().openapi({ description: 'Application aggregated status progress status.' }),
    ).exactOptional(),
    totalSourceServers: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Application aggregated status total source servers amount.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Application aggregated status.', required: [] })
  .openapi('ApplicationAggregatedStatus')

const ApplicationIDSchema = z
  .string()
  .regex(/^app-[0-9a-zA-Z]{17}$/)
  .length(21)
  .openapi('ApplicationID')

const ARNSchema = z.string().min(20).max(2048).openapi('ARN')

const ApplicationDescriptionSchema = z
  .string()
  .regex(/^[^\x00]*$/)
  .min(0)
  .max(600)
  .openapi('ApplicationDescription')

const BooleanSchema = z.boolean().openapi('Boolean')

const ApplicationNameSchema = z
  .string()
  .regex(/^[^\s\x00]( *[^\s\x00])*$/)
  .min(1)
  .max(256)
  .openapi('ApplicationName')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagsMapSchema = z.record(z.string(), TagValueSchema).openapi('TagsMap')

const WaveIDSchema = z
  .string()
  .regex(/^wave-[0-9a-zA-Z]{17}$/)
  .length(22)
  .openapi('WaveID')

const ApplicationSchema = z
  .object({
    applicationAggregatedStatus: ApplicationAggregatedStatusSchema.and(
      z.any().openapi({ description: 'Application aggregated status.' }),
    ).exactOptional(),
    applicationID: ApplicationIDSchema.and(
      z.any().openapi({ description: 'Application ID.' }),
    ).exactOptional(),
    arn: ARNSchema.and(z.any().openapi({ description: 'Application ARN.' })).exactOptional(),
    creationDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Application creation dateTime.' }),
    ).exactOptional(),
    description: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Application description.' }),
    ).exactOptional(),
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Application archival status.' }),
    ).exactOptional(),
    lastModifiedDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Application last modified dateTime.' }),
    ).exactOptional(),
    name: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Application name.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(z.any().openapi({ description: 'Application tags.' })).exactOptional(),
    waveID: WaveIDSchema.and(
      z.any().openapi({ description: 'Application wave ID.' }),
    ).exactOptional(),
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
    healthStatus: WaveHealthStatusSchema.and(
      z.any().openapi({ description: 'Wave aggregated status health status.' }),
    ).exactOptional(),
    lastUpdateDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Wave aggregated status last update dateTime.' }),
    ).exactOptional(),
    progressStatus: WaveProgressStatusSchema.and(
      z.any().openapi({ description: 'Wave aggregated status progress status.' }),
    ).exactOptional(),
    replicationStartedDateTime: ISO8601DatetimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'DateTime marking when the first source server in the wave started replication.',
        }),
    ).exactOptional(),
    totalApplications: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Wave aggregated status total applications amount.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Wave aggregated status.', required: [] })
  .openapi('WaveAggregatedStatus')

const WaveSchema = z
  .object({
    arn: ARNSchema.and(z.any().openapi({ description: 'Wave ARN.' })).exactOptional(),
    creationDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Wave creation dateTime.' }),
    ).exactOptional(),
    description: WaveDescriptionSchema.and(
      z.any().openapi({ description: 'Wave description.' }),
    ).exactOptional(),
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Wave archival status.' }),
    ).exactOptional(),
    lastModifiedDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Wave last modified dateTime.' }),
    ).exactOptional(),
    name: WaveNameSchema.and(z.any().openapi({ description: 'Wave name.' })).exactOptional(),
    tags: TagsMapSchema.and(z.any().openapi({ description: 'Wave tags.' })).exactOptional(),
    waveAggregatedStatus: WaveAggregatedStatusSchema.and(
      z.any().openapi({ description: 'Wave aggregated status.' }),
    ).exactOptional(),
    waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Wave')

const AssociateApplicationsResponseSchema = z.object({}).openapi('AssociateApplicationsResponse')

const AssociateSourceServersResponseSchema = z.object({}).openapi('AssociateSourceServersResponse')

const SourceServerIDSchema = z
  .string()
  .regex(/^s-[0-9a-zA-Z]{17}$/)
  .length(19)
  .openapi('SourceServerID')

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
    error: DataReplicationErrorStringSchema.and(
      z.any().openapi({ description: 'Error in data replication.' }),
    ).exactOptional(),
    rawError: LargeBoundedStringSchema.and(
      z.any().openapi({ description: 'Error in data replication.' }),
    ).exactOptional(),
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
    name: DataReplicationInitiationStepNameSchema.and(
      z.any().openapi({ description: 'Request to query data initiation step name.' }),
    ).exactOptional(),
    status: DataReplicationInitiationStepStatusSchema.and(
      z.any().openapi({ description: 'Request to query data initiation status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Data replication initiation step.', required: [] })
  .openapi('DataReplicationInitiationStep')

const DataReplicationInitiationStepsSchema = z
  .array(DataReplicationInitiationStepSchema)
  .openapi('DataReplicationInitiationSteps')

const DataReplicationInitiationSchema = z
  .object({
    nextAttemptDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Request to query next data initiation date and time.' }),
    ).exactOptional(),
    startDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Request to query data initiation start date and time.' }),
    ).exactOptional(),
    steps: DataReplicationInitiationStepsSchema.and(
      z.any().openapi({ description: 'Request to query data initiation steps.' }),
    ).exactOptional(),
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

const BoundedStringSchema = z.string().min(0).max(256).openapi('BoundedString')

const DataReplicationInfoReplicatedDiskSchema = z
  .object({
    backloggedStorageBytes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Request to query data replication backlog size in bytes.' }),
    ).exactOptional(),
    deviceName: BoundedStringSchema.and(
      z.any().openapi({ description: 'Request to query device name.' }),
    ).exactOptional(),
    replicatedStorageBytes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Request to query amount of data replicated in bytes.' }),
    ).exactOptional(),
    rescannedStorageBytes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Request to query amount of data rescanned in bytes.' }),
    ).exactOptional(),
    totalStorageBytes: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Request to query total amount of data replicated in bytes.' }),
    ).exactOptional(),
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
    dataReplicationError: DataReplicationErrorSchema.and(
      z.any().openapi({ description: 'Error in obtaining data replication info.' }),
    ).exactOptional(),
    dataReplicationInitiation: DataReplicationInitiationSchema.and(
      z
        .any()
        .openapi({ description: 'Request to query whether data replication has been initiated.' }),
    ).exactOptional(),
    dataReplicationState: DataReplicationStateSchema.and(
      z.any().openapi({ description: 'Request to query the data replication state.' }),
    ).exactOptional(),
    etaDateTime: ISO8601DatetimeStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to query the time when data replication will be complete.',
        }),
    ).exactOptional(),
    lagDuration: ISO8601DurationStringSchema.and(
      z.any().openapi({ description: 'Request to query data replication lag duration.' }),
    ).exactOptional(),
    lastSnapshotDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Request to query data replication last snapshot time.' }),
    ).exactOptional(),
    replicatedDisks: DataReplicationInfoReplicatedDisksSchema.and(
      z.any().openapi({ description: 'Request to query disks replicated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Request data replication info.', required: [] })
  .openapi('DataReplicationInfo')

const EC2InstanceIDSchema = z
  .string()
  .regex(/^i-[0-9a-fA-F]{8,}$/)
  .min(0)
  .max(255)
  .openapi('EC2InstanceID')

const FirstBootSchema = z.enum(['WAITING', 'SUCCEEDED', 'UNKNOWN', 'STOPPED']).openapi('FirstBoot')

const JobIDSchema = z
  .string()
  .regex(/^mgnjob-[0-9a-zA-Z]{17}$/)
  .length(24)
  .openapi('JobID')

const LaunchedInstanceSchema = z
  .object({
    ec2InstanceID: EC2InstanceIDSchema.and(
      z.any().openapi({ description: 'Launched instance EC2 ID.' }),
    ).exactOptional(),
    firstBoot: FirstBootSchema.and(
      z.any().openapi({ description: 'Launched instance first boot.' }),
    ).exactOptional(),
    jobID: JobIDSchema.and(
      z.any().openapi({ description: 'Launched instance Job ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Launched instance.', required: [] })
  .openapi('LaunchedInstance')

const LifeCycleLastCutoverFinalizedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle Cutover finalized date and time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle Cutover finalized', required: [] })
  .openapi('LifeCycleLastCutoverFinalized')

const LifeCycleLastCutoverInitiatedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
    jobID: JobIDSchema.and(
      z.any().openapi({ description: 'Lifecycle last Cutover initiated by Job ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Cutover initiated.', required: [] })
  .openapi('LifeCycleLastCutoverInitiated')

const LifeCycleLastCutoverRevertedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle last Cutover reverted API call date time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Cutover reverted.', required: [] })
  .openapi('LifeCycleLastCutoverReverted')

const LifeCycleLastCutoverSchema = z
  .object({
    finalized: LifeCycleLastCutoverFinalizedSchema.and(
      z.any().openapi({ description: 'Lifecycle Cutover finalized date and time.' }),
    ).exactOptional(),
    initiated: LifeCycleLastCutoverInitiatedSchema.and(
      z.any().openapi({ description: 'Lifecycle last Cutover initiated.' }),
    ).exactOptional(),
    reverted: LifeCycleLastCutoverRevertedSchema.and(
      z.any().openapi({ description: 'Lifecycle last Cutover reverted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Cutover .', required: [] })
  .openapi('LifeCycleLastCutover')

const LifeCycleLastTestFinalizedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle Test failed API call date and time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Test finalized.', required: [] })
  .openapi('LifeCycleLastTestFinalized')

const LifeCycleLastTestInitiatedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test initiated API call date and time.' }),
    ).exactOptional(),
    jobID: JobIDSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test initiated Job ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Test initiated.', required: [] })
  .openapi('LifeCycleLastTestInitiated')

const LifeCycleLastTestRevertedSchema = z
  .object({
    apiCallDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test reverted API call date and time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle last Test reverted.', required: [] })
  .openapi('LifeCycleLastTestReverted')

const LifeCycleLastTestSchema = z
  .object({
    finalized: LifeCycleLastTestFinalizedSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test finalized.' }),
    ).exactOptional(),
    initiated: LifeCycleLastTestInitiatedSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test initiated.' }),
    ).exactOptional(),
    reverted: LifeCycleLastTestRevertedSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test reverted.' }),
    ).exactOptional(),
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
    addedToServiceDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle added to service data and time.' }),
    ).exactOptional(),
    elapsedReplicationDuration: ISO8601DurationStringSchema.and(
      z.any().openapi({ description: 'Lifecycle elapsed time and duration.' }),
    ).exactOptional(),
    firstByteDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle replication initiation date and time.' }),
    ).exactOptional(),
    lastCutover: LifeCycleLastCutoverSchema.and(
      z.any().openapi({ description: 'Lifecycle last Cutover.' }),
    ).exactOptional(),
    lastSeenByServiceDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Lifecycle last seen date and time.' }),
    ).exactOptional(),
    lastTest: LifeCycleLastTestSchema.and(
      z.any().openapi({ description: 'Lifecycle last Test.' }),
    ).exactOptional(),
    state: LifeCycleStateSchema.and(
      z.any().openapi({ description: 'Lifecycle state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lifecycle.', required: [] })
  .openapi('LifeCycle')

const ReplicationTypeSchema = z
  .enum(['AGENT_BASED', 'SNAPSHOT_SHIPPING'])
  .openapi('ReplicationType')

const CPUSchema = z
  .object({
    cores: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The number of CPU cores on the source server.' }),
    ).exactOptional(),
    modelName: BoundedStringSchema.and(
      z.any().openapi({ description: "The source server's CPU model name." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Source server CPU information.', required: [] })
  .openapi('CPU')

const CpusSchema = z.array(CPUSchema).min(0).max(256).openapi('Cpus')

const DiskSchema = z
  .object({
    bytes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'The amount of storage on the disk in bytes.' }),
    ).exactOptional(),
    deviceName: BoundedStringSchema.and(
      z.any().openapi({ description: 'The disk or device name.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The disk identifier.', required: [] })
  .openapi('Disk')

const DisksSchema = z.array(DiskSchema).min(0).max(1000).openapi('Disks')

const IdentificationHintsSchema = z
  .object({
    awsInstanceID: EC2InstanceIDSchema.and(
      z.any().openapi({ description: 'AWS Instance ID identification hint.' }),
    ).exactOptional(),
    fqdn: BoundedStringSchema.and(
      z.any().openapi({ description: 'FQDN address identification hint.' }),
    ).exactOptional(),
    hostname: BoundedStringSchema.and(
      z.any().openapi({ description: 'Hostname identification hint.' }),
    ).exactOptional(),
    vmPath: BoundedStringSchema.and(
      z.any().openapi({ description: 'vCenter VM path identification hint.' }),
    ).exactOptional(),
    vmWareUuid: BoundedStringSchema.and(
      z.any().openapi({ description: 'vmWare UUID identification hint.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Identification hints.', required: [] })
  .openapi('IdentificationHints')

const IPsListSchema = z.array(BoundedStringSchema).openapi('IPsList')

const NetworkInterfaceSchema = z
  .object({
    ips: IPsListSchema.and(
      z.any().openapi({ description: 'Network interface IPs.' }),
    ).exactOptional(),
    isPrimary: BooleanSchema.and(
      z.any().openapi({ description: 'Network interface primary IP.' }),
    ).exactOptional(),
    macAddress: BoundedStringSchema.and(
      z.any().openapi({ description: 'Network interface Mac address.' }),
    ).exactOptional(),
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
    fullString: BoundedStringSchema.and(
      z.any().openapi({ description: 'OS full string.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Operating System.', required: [] })
  .openapi('OS')

const EC2InstanceTypeSchema = z.string().min(0).max(255).openapi('EC2InstanceType')

const SourcePropertiesSchema = z
  .object({
    cpus: CpusSchema.and(z.any().openapi({ description: 'Source Server CPUs.' })).exactOptional(),
    disks: DisksSchema.and(
      z.any().openapi({ description: 'Source Server disks.' }),
    ).exactOptional(),
    identificationHints: IdentificationHintsSchema.and(
      z.any().openapi({ description: 'Source server identification hints.' }),
    ).exactOptional(),
    lastUpdatedDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Source server last update date and time.' }),
    ).exactOptional(),
    networkInterfaces: NetworkInterfacesSchema.and(
      z.any().openapi({ description: 'Source server network interfaces.' }),
    ).exactOptional(),
    os: OSSchema.and(z.any().openapi({ description: 'Source server OS.' })).exactOptional(),
    ramBytes: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Source server RAM in bytes.' }),
    ).exactOptional(),
    recommendedInstanceType: EC2InstanceTypeSchema.and(
      z.any().openapi({ description: 'Source server recommended instance type.' }),
    ).exactOptional(),
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
    applicationID: ApplicationIDSchema.and(
      z.any().openapi({ description: 'Source server application ID.' }),
    ).exactOptional(),
    arn: ARNSchema.and(z.any().openapi({ description: 'Source server ARN.' })).exactOptional(),
    dataReplicationInfo: DataReplicationInfoSchema.and(
      z.any().openapi({ description: 'Source server data replication info.' }),
    ).exactOptional(),
    fqdnForActionFramework: BoundedStringSchema.and(
      z.any().openapi({ description: 'Source server fqdn for action framework.' }),
    ).exactOptional(),
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Source server archived status.' }),
    ).exactOptional(),
    launchedInstance: LaunchedInstanceSchema.and(
      z.any().openapi({ description: 'Source server launched instance.' }),
    ).exactOptional(),
    lifeCycle: LifeCycleSchema.and(
      z.any().openapi({ description: 'Source server lifecycle state.' }),
    ).exactOptional(),
    replicationType: ReplicationTypeSchema.and(
      z.any().openapi({ description: 'Source server replication type.' }),
    ).exactOptional(),
    sourceProperties: SourcePropertiesSchema.and(
      z.any().openapi({ description: 'Source server properties.' }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Source server ID.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Source server Tags.' }),
    ).exactOptional(),
    userProvidedID: BoundedStringSchema.and(
      z.any().openapi({ description: 'Source server user provided ID.' }),
    ).exactOptional(),
    vcenterClientID: VcenterClientIDSchema.and(
      z.any().openapi({ description: 'Source server vCenter client id.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceServer')

const ChangeServerLifeCycleStateSourceServerLifecycleStateSchema = z
  .enum(['READY_FOR_TEST', 'READY_FOR_CUTOVER', 'CUTOVER'])
  .openapi('ChangeServerLifeCycleStateSourceServerLifecycleState')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const BootModeSchema = z.enum(['LEGACY_BIOS', 'UEFI']).openapi('BootMode')

const EC2LaunchConfigurationTemplateIDSchema = z
  .string()
  .regex(/^lt-[0-9a-z]{17}$/)
  .length(20)
  .openapi('EC2LaunchConfigurationTemplateID')

const VolumeTypeSchema = z
  .enum(['io1', 'io2', 'gp3', 'gp2', 'st1', 'sc1', 'standard'])
  .openapi('VolumeType')

const LaunchTemplateDiskConfSchema = z
  .object({
    iops: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Launch template disk iops configuration.' }),
    ).exactOptional(),
    throughput: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Launch template disk throughput configuration.' }),
    ).exactOptional(),
    volumeType: VolumeTypeSchema.and(
      z.any().openapi({ description: 'Launch template disk volume type configuration.' }),
    ).exactOptional(),
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
    osByol: BooleanSchema.and(
      z.any().openapi({ description: 'Configure BYOL OS licensing.' }),
    ).exactOptional(),
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

const JmesPathStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_\[\]]+)*$/)
  .min(1)
  .max(1011)
  .openapi('JmesPathString')

const SsmExternalParameterSchema = z
  .object({
    dynamicPath: JmesPathStringSchema.and(
      z
        .any()
        .openapi({ description: 'AWS Systems Manager Document external parameters dynamic path.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'AWS Systems Manager Document external parameter.', required: [] })
  .openapi('SsmExternalParameter')

const SsmDocumentExternalParametersSchema = z
  .record(z.string(), SsmExternalParameterSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 20)
  .openapi('SsmDocumentExternalParameters')

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
    parameterName: SsmParameterStoreParameterNameSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Parameter Store parameter name.' }),
    ),
    parameterType: SsmParameterStoreParameterTypeSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Parameter Store parameter type.' }),
    ),
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
    actionName: BoundedStringSchema.and(
      z.any().openapi({ description: 'User-friendly name for the AWS Systems Manager Document.' }),
    ),
    externalParameters: SsmDocumentExternalParametersSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Document external parameters.' }),
    ).exactOptional(),
    mustSucceedForCutover: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'If true, Cutover will not be enabled if the document has failed.',
        }),
    ).exactOptional(),
    parameters: SsmDocumentParametersSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Document parameters.' }),
    ).exactOptional(),
    ssmDocumentName: SsmDocumentNameSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Document name or full ARN.' }),
    ),
    timeoutSeconds: StrictlyPositiveIntegerSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Document timeout seconds.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionName', 'ssmDocumentName'],
    description: 'AWS Systems Manager Document.',
  })
  .openapi('SsmDocument')

const SsmDocumentsSchema = z.array(SsmDocumentSchema).min(0).max(10).openapi('SsmDocuments')

const PostLaunchActionsSchema = z
  .object({
    cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.and(
      z.any().openapi({ description: "AWS Systems Manager Command's CloudWatch log group name." }),
    ).exactOptional(),
    deployment: PostLaunchActionsDeploymentTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Deployment type in which AWS Systems Manager Documents will be executed.',
        }),
    ).exactOptional(),
    s3LogBucket: S3LogBucketNameSchema.and(
      z.any().openapi({ description: "AWS Systems Manager Command's logs S3 log bucket." }),
    ).exactOptional(),
    s3OutputKeyPrefix: BoundedStringSchema.and(
      z.any().openapi({ description: "AWS Systems Manager Command's logs S3 output key prefix." }),
    ).exactOptional(),
    ssmDocuments: SsmDocumentsSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Documents.' }),
    ).exactOptional(),
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
    arn: ARNSchema.and(
      z.any().openapi({ description: 'ARN of the Launch Configuration Template.' }),
    ).exactOptional(),
    associatePublicIpAddress: BooleanSchema.and(
      z.any().openapi({ description: 'Associate public Ip address.' }),
    ).exactOptional(),
    bootMode: BootModeSchema.and(
      z.any().openapi({ description: 'Launch configuration template boot mode.' }),
    ).exactOptional(),
    copyPrivateIp: BooleanSchema.and(
      z.any().openapi({ description: 'Copy private Ip.' }),
    ).exactOptional(),
    copyTags: BooleanSchema.and(z.any().openapi({ description: 'Copy tags.' })).exactOptional(),
    ec2LaunchTemplateID: EC2LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'EC2 launch template ID.' }),
    ).exactOptional(),
    enableMapAutoTagging: BooleanSchema.and(
      z.any().openapi({ description: 'Enable map auto tagging.' }),
    ).exactOptional(),
    largeVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Large volume config.' }),
    ).exactOptional(),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'ID of the Launch Configuration Template.' }),
    ),
    launchDisposition: LaunchDispositionSchema.and(
      z.any().openapi({ description: 'Launch disposition.' }),
    ).exactOptional(),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.and(
      z.any().openapi({ description: 'Launch configuration template map auto tagging MPE ID.' }),
    ).exactOptional(),
    postLaunchActions: PostLaunchActionsSchema.and(
      z.any().openapi({ description: 'Post Launch Actions of the Launch Configuration Template.' }),
    ).exactOptional(),
    smallVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Small volume config.' }),
    ).exactOptional(),
    smallVolumeMaxSize: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Small volume maximum size.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags of the Launch Configuration Template.' }),
    ).exactOptional(),
    targetInstanceTypeRightSizingMethod: TargetInstanceTypeRightSizingMethodSchema.and(
      z.any().openapi({ description: 'Target instance type right-sizing method.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['launchConfigurationTemplateID'] })
  .openapi('LaunchConfigurationTemplate')

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
    arn: ARNSchema.and(
      z.any().openapi({ description: 'Replication Configuration template ARN.' }),
    ).exactOptional(),
    associateDefaultSecurityGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Replication Configuration template associate default Application Migration Service Security group.',
        }),
    ).exactOptional(),
    bandwidthThrottling: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Replication Configuration template bandwidth throttling.' }),
    ).exactOptional(),
    createPublicIP: BooleanSchema.and(
      z.any().openapi({ description: 'Replication Configuration template create Public IP.' }),
    ).exactOptional(),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.and(
      z.any().openapi({ description: 'Replication Configuration template data plane routing.' }),
    ).exactOptional(),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Replication Configuration template use default large Staging Disk type.',
        }),
    ).exactOptional(),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.and(
      z.any().openapi({ description: 'Replication Configuration template EBS encryption.' }),
    ).exactOptional(),
    ebsEncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration template EBS encryption key ARN.' }),
    ).exactOptional(),
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'Replication Configuration template ID.' }),
    ),
    replicationServerInstanceType: EC2InstanceTypeSchema.and(
      z.any().openapi({ description: 'Replication Configuration template server instance type.' }),
    ).exactOptional(),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration template server Security Groups IDs.' }),
    ).exactOptional(),
    stagingAreaSubnetId: SubnetIDSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration template Staging Area subnet ID.' }),
    ).exactOptional(),
    stagingAreaTags: TagsMapSchema.and(
      z.any().openapi({ description: 'Replication Configuration template Staging Area Tags.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Replication Configuration template Tags.' }),
    ).exactOptional(),
    useDedicatedReplicationServer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Replication Configuration template use Dedicated Replication Server.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['replicationConfigurationTemplateID'] })
  .openapi('ReplicationConfigurationTemplate')

const DeleteApplicationResponseSchema = z.object({}).openapi('DeleteApplicationResponse')

const DeleteJobResponseSchema = z.object({}).openapi('DeleteJobResponse')

const DeleteLaunchConfigurationTemplateResponseSchema = z
  .object({})
  .openapi('DeleteLaunchConfigurationTemplateResponse')

const DeleteReplicationConfigurationTemplateResponseSchema = z
  .object({})
  .openapi('DeleteReplicationConfigurationTemplateResponse')

const DeleteSourceServerResponseSchema = z.object({}).openapi('DeleteSourceServerResponse')

const DeleteWaveResponseSchema = z.object({}).openapi('DeleteWaveResponse')

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
    conversionServerID: EC2InstanceIDSchema.and(
      z.any().openapi({ description: 'Job Event conversion Server ID.' }),
    ).exactOptional(),
    rawError: LargeBoundedStringSchema.and(
      z.any().openapi({ description: 'Job error.' }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Job Event Source Server ID.' }),
    ).exactOptional(),
    targetInstanceID: EC2InstanceIDSchema.and(
      z.any().openapi({ description: 'Job Event Target instance ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Job log data', required: [] })
  .openapi('JobLogEventData')

const JobLogSchema = z
  .object({
    event: JobLogEventSchema.and(
      z.any().openapi({ description: 'Job log event.' }),
    ).exactOptional(),
    eventData: JobLogEventDataSchema.and(
      z.any().openapi({ description: 'Job event data' }),
    ).exactOptional(),
    logDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Job log event date and time.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Job log.', required: [] })
  .openapi('JobLog')

const JobLogsSchema = z.array(JobLogSchema).openapi('JobLogs')

const PaginationTokenSchema = z.string().min(0).max(2048).openapi('PaginationToken')

const DescribeJobLogItemsResponseSchema = z
  .object({
    items: JobLogsSchema.and(
      z.any().openapi({ description: 'Request to describe Job log response items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to describe Job log response next token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobLogItemsResponse')

const InitiatedBySchema = z
  .enum(['START_TEST', 'START_CUTOVER', 'DIAGNOSTIC', 'TERMINATE'])
  .openapi('InitiatedBy')

const LaunchStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'LAUNCHED', 'FAILED', 'TERMINATED'])
  .openapi('LaunchStatus')

const PostLaunchActionExecutionStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCESS', 'FAILED'])
  .openapi('PostLaunchActionExecutionStatus')

const SsmDocumentTypeSchema = z.enum(['AUTOMATION', 'COMMAND']).openapi('SsmDocumentType')

const JobPostLaunchActionsLaunchStatusSchema = z
  .object({
    executionID: BoundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.",
        }),
    ).exactOptional(),
    executionStatus: PostLaunchActionExecutionStatusSchema.and(
      z.any().openapi({ description: "AWS Systems Manager Document's execution status." }),
    ).exactOptional(),
    failureReason: BoundedStringSchema.and(
      z.any().openapi({ description: "AWS Systems Manager Document's failure reason." }),
    ).exactOptional(),
    ssmDocument: SsmDocumentSchema.and(
      z
        .any()
        .openapi({
          description: "AWS Systems Manager's Document of the of the Job Post Launch Actions.",
        }),
    ).exactOptional(),
    ssmDocumentType: SsmDocumentTypeSchema.and(
      z.any().openapi({ description: 'AWS Systems Manager Document type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Launch Status of the Job Post Launch Actions.', required: [] })
  .openapi('JobPostLaunchActionsLaunchStatus')

const PostLaunchActionsLaunchStatusListSchema = z
  .array(JobPostLaunchActionsLaunchStatusSchema)
  .openapi('PostLaunchActionsLaunchStatusList')

const PostLaunchActionsStatusSchema = z
  .object({
    postLaunchActionsLaunchStatusList: PostLaunchActionsLaunchStatusListSchema.and(
      z.any().openapi({ description: 'List of Post Launch Action status.' }),
    ).exactOptional(),
    ssmAgentDiscoveryDatetime: ISO8601DatetimeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Status of the Post Launch Actions running on the Test or Cutover instance.',
    required: [],
  })
  .openapi('PostLaunchActionsStatus')

const ParticipatingServerSchema = z
  .object({
    launchStatus: LaunchStatusSchema.and(
      z.any().openapi({ description: 'Participating server launch status.' }),
    ).exactOptional(),
    launchedEc2InstanceID: EC2InstanceIDSchema.and(
      z.any().openapi({ description: "Participating server's launched ec2 instance ID." }),
    ).exactOptional(),
    postLaunchActionsStatus: PostLaunchActionsStatusSchema.and(
      z.any().openapi({ description: "Participating server's Post Launch Actions Status." }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Participating server Source Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], description: 'Server participating in Job.' })
  .openapi('ParticipatingServer')

const ParticipatingServersSchema = z
  .array(ParticipatingServerSchema)
  .openapi('ParticipatingServers')

const JobStatusSchema = z.enum(['PENDING', 'STARTED', 'COMPLETED']).openapi('JobStatus')

const JobTypeSchema = z.enum(['LAUNCH', 'TERMINATE']).openapi('JobType')

const JobSchema = z
  .object({
    arn: ARNSchema.and(
      z.any().openapi({ description: 'the ARN of the specific Job.' }),
    ).exactOptional(),
    creationDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Job creation time.' }),
    ).exactOptional(),
    endDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Job end time.' }),
    ).exactOptional(),
    initiatedBy: InitiatedBySchema.and(
      z.any().openapi({ description: 'Job initiated by field.' }),
    ).exactOptional(),
    jobID: JobIDSchema.and(z.any().openapi({ description: 'Job ID.' })),
    participatingServers: ParticipatingServersSchema.and(
      z.any().openapi({ description: 'Servers participating in a specific Job.' }),
    ).exactOptional(),
    status: JobStatusSchema.and(z.any().openapi({ description: 'Job status.' })).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags associated with specific Job.' }),
    ).exactOptional(),
    type: JobTypeSchema.and(z.any().openapi({ description: 'Job type.' })).exactOptional(),
  })
  .openapi({ required: ['jobID'], description: 'Job.' })
  .openapi('Job')

const JobsListSchema = z.array(JobSchema).openapi('JobsList')

const DescribeJobsResponseSchema = z
  .object({
    items: JobsListSchema.and(
      z.any().openapi({ description: 'Request to describe Job log items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to describe Job response by next token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobsResponse')

const DescribeJobsRequestFiltersJobIDsSchema = z
  .array(JobIDSchema)
  .min(0)
  .max(1000)
  .openapi('DescribeJobsRequestFiltersJobIDs')

const LaunchConfigurationTemplatesSchema = z
  .array(LaunchConfigurationTemplateSchema)
  .min(0)
  .max(200)
  .openapi('LaunchConfigurationTemplates')

const DescribeLaunchConfigurationTemplatesResponseSchema = z
  .object({
    items: LaunchConfigurationTemplatesSchema.and(
      z
        .any()
        .openapi({
          description: 'List of items returned by DescribeLaunchConfigurationTemplates.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Next pagination token returned from DescribeLaunchConfigurationTemplates.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLaunchConfigurationTemplatesResponse')

const ReplicationConfigurationTemplatesSchema = z
  .array(ReplicationConfigurationTemplateSchema)
  .openapi('ReplicationConfigurationTemplates')

const DescribeReplicationConfigurationTemplatesResponseSchema = z
  .object({
    items: ReplicationConfigurationTemplatesSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to describe Replication Configuration template by items.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to describe Replication Configuration template by next token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReplicationConfigurationTemplatesResponse')

const SourceServersListSchema = z.array(SourceServerSchema).openapi('SourceServersList')

const DescribeSourceServersResponseSchema = z
  .object({
    items: SourceServersListSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list by item.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers next token.' }),
    ).exactOptional(),
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
    arn: ARNSchema.and(z.any().openapi({ description: 'Arn of vCenter client.' })).exactOptional(),
    datacenterName: BoundedStringSchema.and(
      z.any().openapi({ description: 'Datacenter name of vCenter client.' }),
    ).exactOptional(),
    hostname: BoundedStringSchema.and(
      z.any().openapi({ description: 'Hostname of vCenter client .' }),
    ).exactOptional(),
    lastSeenDatetime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Last seen time of vCenter client.' }),
    ).exactOptional(),
    sourceServerTags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags for Source Server of vCenter client.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags for vCenter client.' }),
    ).exactOptional(),
    vcenterClientID: VcenterClientIDSchema.and(
      z.any().openapi({ description: 'ID of vCenter client.' }),
    ).exactOptional(),
    vcenterUUID: BoundedStringSchema.and(
      z.any().openapi({ description: 'Vcenter UUID of vCenter client.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'vCenter client.', required: [] })
  .openapi('VcenterClient')

const VcenterClientListSchema = z.array(VcenterClientSchema).openapi('VcenterClientList')

const DescribeVcenterClientsResponseSchema = z
  .object({
    items: VcenterClientListSchema.and(
      z.any().openapi({ description: 'List of items returned by DescribeVcenterClients.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({ description: 'Next pagination token returned from DescribeVcenterClients.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeVcenterClientsResponse')

const DisassociateApplicationsResponseSchema = z
  .object({})
  .openapi('DisassociateApplicationsResponse')

const DisassociateSourceServersResponseSchema = z
  .object({})
  .openapi('DisassociateSourceServersResponse')

const SmallBoundedStringSchema = z.string().min(0).max(128).openapi('SmallBoundedString')

const LaunchConfigurationSchema = z
  .object({
    bootMode: BootModeSchema.and(
      z.any().openapi({ description: 'Launch configuration boot mode.' }),
    ).exactOptional(),
    copyPrivateIp: BooleanSchema.and(
      z.any().openapi({ description: 'Copy Private IP during Launch Configuration.' }),
    ).exactOptional(),
    copyTags: BooleanSchema.and(
      z.any().openapi({ description: 'Copy Tags during Launch Configuration.' }),
    ).exactOptional(),
    ec2LaunchTemplateID: BoundedStringSchema.and(
      z.any().openapi({ description: 'Launch configuration EC2 Launch template ID.' }),
    ).exactOptional(),
    enableMapAutoTagging: BooleanSchema.and(
      z.any().openapi({ description: 'Enable map auto tagging.' }),
    ).exactOptional(),
    launchDisposition: LaunchDispositionSchema.and(
      z.any().openapi({ description: 'Launch disposition for launch configuration.' }),
    ).exactOptional(),
    licensing: LicensingSchema.and(
      z.any().openapi({ description: 'Launch configuration OS licensing.' }),
    ).exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.and(
      z.any().openapi({ description: 'Map auto tagging MPE ID.' }),
    ).exactOptional(),
    name: SmallBoundedStringSchema.and(
      z.any().openapi({ description: 'Launch configuration name.' }),
    ).exactOptional(),
    postLaunchActions: PostLaunchActionsSchema.exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Launch configuration Source Server ID.' }),
    ).exactOptional(),
    targetInstanceTypeRightSizingMethod: TargetInstanceTypeRightSizingMethodSchema.and(
      z
        .any()
        .openapi({ description: 'Launch configuration Target instance type right sizing method.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LaunchConfiguration')

const ReplicationConfigurationReplicatedDiskStagingDiskTypeSchema = z
  .enum(['AUTO', 'GP2', 'IO1', 'SC1', 'ST1', 'STANDARD', 'GP3', 'IO2'])
  .openapi('ReplicationConfigurationReplicatedDiskStagingDiskType')

const ReplicationConfigurationReplicatedDiskSchema = z
  .object({
    deviceName: BoundedStringSchema.and(
      z.any().openapi({ description: 'Replication Configuration replicated disk device name.' }),
    ).exactOptional(),
    iops: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Replication Configuration replicated disk IOPs.' }),
    ).exactOptional(),
    isBootDisk: BooleanSchema.and(
      z.any().openapi({ description: 'Replication Configuration replicated disk boot disk.' }),
    ).exactOptional(),
    stagingDiskType: ReplicationConfigurationReplicatedDiskStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration replicated disk staging disk type.' }),
    ).exactOptional(),
    throughput: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Replication Configuration replicated disk throughput.' }),
    ).exactOptional(),
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
    associateDefaultSecurityGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Replication Configuration associate default Application Migration Service Security Group.',
        }),
    ).exactOptional(),
    bandwidthThrottling: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Replication Configuration set bandwidth throttling.' }),
    ).exactOptional(),
    createPublicIP: BooleanSchema.and(
      z.any().openapi({ description: 'Replication Configuration create Public IP.' }),
    ).exactOptional(),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.and(
      z.any().openapi({ description: 'Replication Configuration data plane routing.' }),
    ).exactOptional(),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration use default large Staging Disks.' }),
    ).exactOptional(),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.and(
      z.any().openapi({ description: 'Replication Configuration EBS encryption.' }),
    ).exactOptional(),
    ebsEncryptionKeyArn: ARNSchema.and(
      z.any().openapi({ description: 'Replication Configuration EBS encryption key ARN.' }),
    ).exactOptional(),
    name: SmallBoundedStringSchema.and(
      z.any().openapi({ description: 'Replication Configuration name.' }),
    ).exactOptional(),
    replicatedDisks: ReplicationConfigurationReplicatedDisksSchema.and(
      z.any().openapi({ description: 'Replication Configuration replicated disks.' }),
    ).exactOptional(),
    replicationServerInstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration Replication Server instance type.' }),
    ).exactOptional(),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.and(
      z
        .any()
        .openapi({
          description: 'Replication Configuration Replication Server Security Group IDs.',
        }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Replication Configuration Source Server ID.' }),
    ).exactOptional(),
    stagingAreaSubnetId: SubnetIDSchema.and(
      z.any().openapi({ description: 'Replication Configuration Staging Area subnet ID.' }),
    ).exactOptional(),
    stagingAreaTags: TagsMapSchema.and(
      z.any().openapi({ description: 'Replication Configuration Staging Area tags.' }),
    ).exactOptional(),
    useDedicatedReplicationServer: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Replication Configuration use Dedicated Replication Server.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReplicationConfiguration')

const InitializeServiceResponseSchema = z.object({}).openapi('InitializeServiceResponse')

const ApplicationsListSchema = z.array(ApplicationSchema).openapi('ApplicationsList')

const ListApplicationsResponseSchema = z
  .object({
    items: ApplicationsListSchema.and(
      z.any().openapi({ description: 'Applications list.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Response next token.' }),
    ).exactOptional(),
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
    rawError: LargeBoundedStringSchema.and(
      z.any().openapi({ description: 'Export errors data raw error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Export errors data.', required: [] })
  .openapi('ExportErrorData')

const ExportTaskErrorSchema = z
  .object({
    errorData: ExportErrorDataSchema.and(
      z.any().openapi({ description: 'Export task error data.' }),
    ).exactOptional(),
    errorDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Export task error datetime.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Export task error.', required: [] })
  .openapi('ExportTaskError')

const ExportErrorsSchema = z.array(ExportTaskErrorSchema).openapi('ExportErrors')

const ListExportErrorsResponseSchema = z
  .object({
    items: ExportErrorsSchema.and(
      z.any().openapi({ description: 'List export errors response items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List export errors response next token.' }),
    ).exactOptional(),
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
    applicationsCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Export task summary applications count.' }),
    ).exactOptional(),
    serversCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Export task summary servers count.' }),
    ).exactOptional(),
    wavesCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Export task summary waves count.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Export task summary.', required: [] })
  .openapi('ExportTaskSummary')

const ExportTaskSchema = z
  .object({
    creationDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Export task creation datetime.' }),
    ).exactOptional(),
    endDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Export task end datetime.' }),
    ).exactOptional(),
    exportID: ExportIDSchema.and(
      z.any().openapi({ description: 'Export task id.' }),
    ).exactOptional(),
    progressPercentage: FloatSchema.and(
      z.any().openapi({ description: 'Export task progress percentage.' }),
    ).exactOptional(),
    s3Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'Export task s3 bucket.' }),
    ).exactOptional(),
    s3BucketOwner: AccountIDSchema.and(
      z.any().openapi({ description: 'Export task s3 bucket owner.' }),
    ).exactOptional(),
    s3Key: S3KeySchema.and(z.any().openapi({ description: 'Export task s3 key.' })).exactOptional(),
    status: ExportStatusSchema.and(
      z.any().openapi({ description: 'Export task status.' }),
    ).exactOptional(),
    summary: ExportTaskSummarySchema.and(
      z.any().openapi({ description: 'Export task summary.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Export task.', required: [] })
  .openapi('ExportTask')

const ExportsListSchema = z.array(ExportTaskSchema).openapi('ExportsList')

const ListExportsResponseSchema = z
  .object({
    items: ExportsListSchema.and(
      z.any().openapi({ description: 'List export response items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List export response next token.' }),
    ).exactOptional(),
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
    applicationID: ApplicationIDSchema.and(
      z.any().openapi({ description: 'Import error data application ID.' }),
    ).exactOptional(),
    ec2LaunchTemplateID: BoundedStringSchema.and(
      z.any().openapi({ description: 'Import error data ec2 LaunchTemplate ID.' }),
    ).exactOptional(),
    rawError: LargeBoundedStringSchema.and(
      z.any().openapi({ description: 'Import error data raw error.' }),
    ).exactOptional(),
    rowNumber: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import error data row number.' }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Import error data source server ID.' }),
    ).exactOptional(),
    waveID: WaveIDSchema.and(
      z.any().openapi({ description: 'Import error data wave id.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import error data.', required: [] })
  .openapi('ImportErrorData')

const ImportErrorTypeSchema = z
  .enum(['VALIDATION_ERROR', 'PROCESSING_ERROR'])
  .openapi('ImportErrorType')

const ImportTaskErrorSchema = z
  .object({
    errorData: ImportErrorDataSchema.and(
      z.any().openapi({ description: 'Import task error data.' }),
    ).exactOptional(),
    errorDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Import task error datetime.' }),
    ).exactOptional(),
    errorType: ImportErrorTypeSchema.and(
      z.any().openapi({ description: 'Import task error type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task error.', required: [] })
  .openapi('ImportTaskError')

const ImportErrorsSchema = z.array(ImportTaskErrorSchema).openapi('ImportErrors')

const ListImportErrorsResponseSchema = z
  .object({
    items: ImportErrorsSchema.and(
      z.any().openapi({ description: 'List imports errors response items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List imports errors response next token.' }),
    ).exactOptional(),
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
    s3Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'S3 bucket source s3 bucket.' }),
    ),
    s3BucketOwner: AccountIDSchema.and(
      z.any().openapi({ description: 'S3 bucket source s3 bucket owner.' }),
    ).exactOptional(),
    s3Key: S3KeySchema.and(z.any().openapi({ description: 'S3 bucket source s3 key.' })),
  })
  .openapi({ required: ['s3Bucket', 's3Key'], description: 'S3 bucket source.' })
  .openapi('S3BucketSource')

const ImportStatusSchema = z
  .enum(['PENDING', 'STARTED', 'FAILED', 'SUCCEEDED'])
  .openapi('ImportStatus')

const ImportTaskSummaryApplicationsSchema = z
  .object({
    createdCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summary applications created count.' }),
    ).exactOptional(),
    modifiedCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summary applications modified count.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task summary applications.', required: [] })
  .openapi('ImportTaskSummaryApplications')

const ImportTaskSummaryServersSchema = z
  .object({
    createdCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summary servers created count.' }),
    ).exactOptional(),
    modifiedCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summary servers modified count.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task summary servers.', required: [] })
  .openapi('ImportTaskSummaryServers')

const ImportTaskSummaryWavesSchema = z
  .object({
    createdCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summery waves created count.' }),
    ).exactOptional(),
    modifiedCount: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Import task summery waves modified count.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task summery waves.', required: [] })
  .openapi('ImportTaskSummaryWaves')

const ImportTaskSummarySchema = z
  .object({
    applications: ImportTaskSummaryApplicationsSchema.and(
      z.any().openapi({ description: 'Import task summary applications.' }),
    ).exactOptional(),
    servers: ImportTaskSummaryServersSchema.and(
      z.any().openapi({ description: 'Import task summary servers.' }),
    ).exactOptional(),
    waves: ImportTaskSummaryWavesSchema.and(
      z.any().openapi({ description: 'Import task summary waves.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task summary.', required: [] })
  .openapi('ImportTaskSummary')

const ImportTaskSchema = z
  .object({
    creationDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Import task creation datetime.' }),
    ).exactOptional(),
    endDateTime: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Import task end datetime.' }),
    ).exactOptional(),
    importID: ImportIDSchema.and(
      z.any().openapi({ description: 'Import task id.' }),
    ).exactOptional(),
    progressPercentage: FloatSchema.and(
      z.any().openapi({ description: 'Import task progress percentage.' }),
    ).exactOptional(),
    s3BucketSource: S3BucketSourceSchema.and(
      z.any().openapi({ description: 'Import task s3 bucket source.' }),
    ).exactOptional(),
    status: ImportStatusSchema.and(
      z.any().openapi({ description: 'Import task status.' }),
    ).exactOptional(),
    summary: ImportTaskSummarySchema.and(
      z.any().openapi({ description: 'Import task summary.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Import task.', required: [] })
  .openapi('ImportTask')

const ImportListSchema = z.array(ImportTaskSchema).openapi('ImportList')

const ListImportsResponseSchema = z
  .object({
    items: ImportListSchema.and(
      z.any().openapi({ description: 'List import response items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List import response next token.' }),
    ).exactOptional(),
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
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action ID.' }),
    ).exactOptional(),
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action name.' }),
    ).exactOptional(),
    active: BooleanSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action active status.' }),
    ).exactOptional(),
    category: ActionCategorySchema.and(
      z.any().openapi({ description: 'Source server post migration custom action category.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action description.' }),
    ).exactOptional(),
    documentIdentifier: BoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action document identifier.',
        }),
    ).exactOptional(),
    documentVersion: DocumentVersionSchema.and(
      z
        .any()
        .openapi({ description: 'Source server post migration custom action document version.' }),
    ).exactOptional(),
    externalParameters: SsmDocumentExternalParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action external parameters.',
        }),
    ).exactOptional(),
    mustSucceedForCutover: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action must succeed for cutover.',
        }),
    ).exactOptional(),
    order: OrderTypeSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action order.' }),
    ).exactOptional(),
    parameters: SsmDocumentParametersSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action parameters.' }),
    ).exactOptional(),
    timeoutSeconds: StrictlyPositiveIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Source server post migration custom action timeout in seconds.' }),
    ).exactOptional(),
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
    items: SourceServerActionDocumentsSchema.and(
      z.any().openapi({ description: 'List of source server post migration custom actions.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned when listing source server post migration custom actions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSourceServerActionsResponse')

const ActionIDsSchema = z.array(ActionIDSchema).min(0).max(100).openapi('ActionIDs')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'List tags for resource response.' }),
    ).exactOptional(),
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
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Template post migration custom action ID.' }),
    ).exactOptional(),
    actionName: BoundedStringSchema.and(
      z.any().openapi({ description: 'Template post migration custom action name.' }),
    ).exactOptional(),
    active: BooleanSchema.and(
      z.any().openapi({ description: 'Template post migration custom action active status.' }),
    ).exactOptional(),
    category: ActionCategorySchema.and(
      z.any().openapi({ description: 'Template post migration custom action category.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'Template post migration custom action description.' }),
    ).exactOptional(),
    documentIdentifier: BoundedStringSchema.and(
      z
        .any()
        .openapi({ description: 'Template post migration custom action document identifier.' }),
    ).exactOptional(),
    documentVersion: DocumentVersionSchema.and(
      z.any().openapi({ description: 'Template post migration custom action document version.' }),
    ).exactOptional(),
    externalParameters: SsmDocumentExternalParametersSchema.and(
      z
        .any()
        .openapi({ description: 'Template post migration custom action external parameters.' }),
    ).exactOptional(),
    mustSucceedForCutover: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Template post migration custom action must succeed for cutover.',
        }),
    ).exactOptional(),
    operatingSystem: OperatingSystemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Operating system eligible for this template post migration custom action.',
        }),
    ).exactOptional(),
    order: OrderTypeSchema.and(
      z.any().openapi({ description: 'Template post migration custom action order.' }),
    ).exactOptional(),
    parameters: SsmDocumentParametersSchema.and(
      z.any().openapi({ description: 'Template post migration custom action parameters.' }),
    ).exactOptional(),
    timeoutSeconds: StrictlyPositiveIntegerSchema.and(
      z.any().openapi({ description: 'Template post migration custom action timeout in seconds.' }),
    ).exactOptional(),
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
    items: TemplateActionDocumentsSchema.and(
      z.any().openapi({ description: 'List of template post migration custom actions.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Next token returned when listing template post migration custom actions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTemplateActionsResponse')

const WavesListSchema = z.array(WaveSchema).openapi('WavesList')

const ListWavesResponseSchema = z
  .object({
    items: WavesListSchema.and(z.any().openapi({ description: 'Waves list.' })).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Response next token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWavesResponse')

const RemoveSourceServerActionResponseSchema = z
  .object({})
  .openapi('RemoveSourceServerActionResponse')

const RemoveTemplateActionResponseSchema = z.object({}).openapi('RemoveTemplateActionResponse')

const StartCutoverResponseSchema = z
  .object({
    job: JobSchema.and(
      z.any().openapi({ description: 'Start Cutover Job response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartCutoverResponse')

const StartExportResponseSchema = z
  .object({
    exportTask: ExportTaskSchema.and(
      z.any().openapi({ description: 'Start export response export task.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Start export response.', required: [] })
  .openapi('StartExportResponse')

const StartImportResponseSchema = z
  .object({
    importTask: ImportTaskSchema.and(
      z.any().openapi({ description: 'Start import response import task.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Start import response.', required: [] })
  .openapi('StartImportResponse')

const StartTestResponseSchema = z
  .object({
    job: JobSchema.and(
      z.any().openapi({ description: 'Start Test Job response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTestResponse')

const TerminateTargetInstancesResponseSchema = z
  .object({
    job: JobSchema.and(
      z.any().openapi({ description: 'Terminate Target instance Job response.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TerminateTargetInstancesResponse')

const TagKeySchema = z.string().min(0).max(256).openapi('TagKey')

const ApplicationIDsSchema = z.array(ApplicationIDSchema).min(1).max(50).openapi('ApplicationIDs')

const ArchiveApplicationRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
  })
  .openapi({ required: ['applicationID'], title: 'ArchiveApplicationRequest' })
  .openapi('ArchiveApplicationRequest')

const ArchiveWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })) })
  .openapi({ required: ['waveID'], title: 'ArchiveWaveRequest' })
  .openapi('ArchiveWaveRequest')

const AssociateApplicationsRequestSchema = z
  .object({
    applicationIDs: ApplicationIDsSchema.and(
      z.any().openapi({ description: 'Application IDs list.' }),
    ),
    waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })),
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
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
    sourceServerIDs: AssociateSourceServersRequestSourceServerIDsSchema.and(
      z.any().openapi({ description: 'Source server IDs list.' }),
    ),
  })
  .openapi({
    required: ['applicationID', 'sourceServerIDs'],
    title: 'AssociateSourceServersRequest',
  })
  .openapi('AssociateSourceServersRequest')

const ChangeServerLifeCycleStateSourceServerLifecycleSchema = z
  .object({
    state: ChangeServerLifeCycleStateSourceServerLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The request to change the source server migration lifecycle state.',
        }),
    ),
  })
  .openapi({
    required: ['state'],
    description: 'The request to change the source server migration lifecycle state.',
  })
  .openapi('ChangeServerLifeCycleStateSourceServerLifecycle')

const ChangeServerLifeCycleStateRequestSchema = z
  .object({
    lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycleSchema.and(
      z
        .any()
        .openapi({
          description: 'The request to change the source server migration lifecycle state.',
        }),
    ),
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The request to change the source server migration lifecycle state by source server ID.',
        }),
    ),
  })
  .openapi({
    required: ['lifeCycle', 'sourceServerID'],
    title: 'ChangeServerLifeCycleStateRequest',
  })
  .openapi('ChangeServerLifeCycleStateRequest')

const ClientIdempotencyTokenSchema = z.string().min(0).max(64).openapi('ClientIdempotencyToken')

const CreateApplicationRequestSchema = z
  .object({
    description: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Application description.' }),
    ).exactOptional(),
    name: ApplicationNameSchema.and(z.any().openapi({ description: 'Application name.' })),
    tags: TagsMapSchema.and(z.any().openapi({ description: 'Application tags.' })).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateApplicationRequest' })
  .openapi('CreateApplicationRequest')

const CreateLaunchConfigurationTemplateRequestSchema = z
  .object({
    associatePublicIpAddress: BooleanSchema.and(
      z.any().openapi({ description: 'Associate public Ip address.' }),
    ).exactOptional(),
    bootMode: BootModeSchema.and(
      z.any().openapi({ description: 'Launch configuration template boot mode.' }),
    ).exactOptional(),
    copyPrivateIp: BooleanSchema.and(
      z.any().openapi({ description: 'Copy private Ip.' }),
    ).exactOptional(),
    copyTags: BooleanSchema.and(z.any().openapi({ description: 'Copy tags.' })).exactOptional(),
    enableMapAutoTagging: BooleanSchema.and(
      z.any().openapi({ description: 'Enable map auto tagging.' }),
    ).exactOptional(),
    largeVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Large volume config.' }),
    ).exactOptional(),
    launchDisposition: LaunchDispositionSchema.and(
      z.any().openapi({ description: 'Launch disposition.' }),
    ).exactOptional(),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.and(
      z.any().openapi({ description: 'Launch configuration template map auto tagging MPE ID.' }),
    ).exactOptional(),
    postLaunchActions: PostLaunchActionsSchema.and(
      z.any().openapi({ description: 'Launch configuration template post launch actions.' }),
    ).exactOptional(),
    smallVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Small volume config.' }),
    ).exactOptional(),
    smallVolumeMaxSize: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Small volume maximum size.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to associate tags during creation of a Launch Configuration Template.',
        }),
    ).exactOptional(),
    targetInstanceTypeRightSizingMethod: TargetInstanceTypeRightSizingMethodSchema.and(
      z.any().openapi({ description: 'Target instance type right-sizing method.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateLaunchConfigurationTemplateRequest', required: [] })
  .openapi('CreateLaunchConfigurationTemplateRequest')

const CreateReplicationConfigurationTemplateRequestSchema = z
  .object({
    associateDefaultSecurityGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to associate the default Application Migration Service Security group with the Replication Settings template.',
        }),
    ),
    bandwidthThrottling: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure bandwidth throttling during Replication Settings template creation.',
        }),
    ),
    createPublicIP: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to create Public IP during Replication Settings template creation.',
        }),
    ),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure data plane routing during Replication Settings template creation.',
        }),
    ),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure the default large staging disk EBS volume type during Replication Settings template creation.',
        }),
    ),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure EBS encryption during Replication Settings template creation.',
        }),
    ),
    ebsEncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure an EBS encryption key during Replication Settings template creation.',
        }),
    ).exactOptional(),
    replicationServerInstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure the Replication Server instance type during Replication Settings template creation.',
        }),
    ),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure the Replication Server Security group ID during Replication Settings template creation.',
        }),
    ),
    stagingAreaSubnetId: SubnetIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure the Staging Area subnet ID during Replication Settings template creation.',
        }),
    ),
    stagingAreaTags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to configure Staging Area tags during Replication Settings template creation.',
        }),
    ),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to configure tags during Replication Settings template creation.',
        }),
    ).exactOptional(),
    useDedicatedReplicationServer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to use Dedicated Replication Servers during Replication Settings template creation.',
        }),
    ),
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
    description: WaveDescriptionSchema.and(
      z.any().openapi({ description: 'Wave description.' }),
    ).exactOptional(),
    name: WaveNameSchema.and(z.any().openapi({ description: 'Wave name.' })),
    tags: TagsMapSchema.and(z.any().openapi({ description: 'Wave tags.' })).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateWaveRequest' })
  .openapi('CreateWaveRequest')

const DeleteApplicationRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
  })
  .openapi({ required: ['applicationID'], title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const DeleteJobRequestSchema = z
  .object({
    jobID: JobIDSchema.and(
      z.any().openapi({ description: 'Request to delete Job from service by Job ID.' }),
    ),
  })
  .openapi({ required: ['jobID'], title: 'DeleteJobRequest' })
  .openapi('DeleteJobRequest')

const DeleteLaunchConfigurationTemplateRequestSchema = z
  .object({
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'ID of resource to be deleted.' }),
    ),
  })
  .openapi({
    required: ['launchConfigurationTemplateID'],
    title: 'DeleteLaunchConfigurationTemplateRequest',
  })
  .openapi('DeleteLaunchConfigurationTemplateRequest')

const DeleteReplicationConfigurationTemplateRequestSchema = z
  .object({
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to delete Replication Configuration Template from service by Replication Configuration Template ID.',
        }),
    ),
  })
  .openapi({
    required: ['replicationConfigurationTemplateID'],
    title: 'DeleteReplicationConfigurationTemplateRequest',
  })
  .openapi('DeleteReplicationConfigurationTemplateRequest')

const DeleteSourceServerRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({ description: 'Request to delete Source Server from service by Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'DeleteSourceServerRequest' })
  .openapi('DeleteSourceServerRequest')

const DeleteVcenterClientRequestSchema = z
  .object({
    vcenterClientID: VcenterClientIDSchema.and(
      z.any().openapi({ description: 'ID of resource to be deleted.' }),
    ),
  })
  .openapi({ required: ['vcenterClientID'], title: 'DeleteVcenterClientRequest' })
  .openapi('DeleteVcenterClientRequest')

const DeleteWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })) })
  .openapi({ required: ['waveID'], title: 'DeleteWaveRequest' })
  .openapi('DeleteWaveRequest')

const MaxResultsTypeSchema = z.int().min(1).max(1000).openapi('MaxResultsType')

const DescribeJobLogItemsRequestSchema = z
  .object({
    jobID: JobIDSchema.and(z.any().openapi({ description: 'Request to describe Job log job ID.' })),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'Request to describe Job log item maximum results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to describe Job log next token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['jobID'], title: 'DescribeJobLogItemsRequest' })
  .openapi('DescribeJobLogItemsRequest')

const DescribeJobsRequestFiltersSchema = z
  .object({
    fromDate: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Request to describe Job log filters by date.' }),
    ).exactOptional(),
    jobIDs: DescribeJobsRequestFiltersJobIDsSchema.and(
      z.any().openapi({ description: 'Request to describe Job log filters by job ID.' }),
    ).exactOptional(),
    toDate: ISO8601DatetimeStringSchema.and(
      z.any().openapi({ description: 'Request to describe job log items by last date.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Request to describe Job log filters.', required: [] })
  .openapi('DescribeJobsRequestFilters')

const DescribeJobsRequestSchema = z
  .object({
    filters: DescribeJobsRequestFiltersSchema.and(
      z.any().openapi({ description: 'Request to describe Job log filters.' }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'Request to describe job log items by max results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to describe job log items by next token.' }),
    ).exactOptional(),
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
    launchConfigurationTemplateIDs: LaunchConfigurationTemplateIDsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Request to filter Launch Configuration Templates list by Launch Configuration Template ID.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum results to be returned in DescribeLaunchConfigurationTemplates.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Next pagination token returned from DescribeLaunchConfigurationTemplates.',
        }),
    ).exactOptional(),
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
    maxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to describe Replication Configuration template by max results.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to describe Replication Configuration template by next token.',
        }),
    ).exactOptional(),
    replicationConfigurationTemplateIDs: ReplicationConfigurationTemplateIDsSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to describe Replication Configuration template by template IDs.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeReplicationConfigurationTemplatesRequest', required: [] })
  .openapi('DescribeReplicationConfigurationTemplatesRequest')

const DescribeSourceServersRequestFiltersSchema = z
  .object({
    applicationIDs: DescribeSourceServersRequestApplicationIDsSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list by application IDs.' }),
    ).exactOptional(),
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list by archived.' }),
    ).exactOptional(),
    lifeCycleStates: LifeCycleStatesSchema.and(
      z
        .any()
        .openapi({ description: 'Request to filter Source Servers list by life cycle states.' }),
    ).exactOptional(),
    replicationTypes: ReplicationTypesSchema.and(
      z
        .any()
        .openapi({ description: 'Request to filter Source Servers list by replication type.' }),
    ).exactOptional(),
    sourceServerIDs: DescribeSourceServersRequestFiltersIDsSchema.and(
      z
        .any()
        .openapi({ description: 'Request to filter Source Servers list by Source Server ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Request to filter Source Servers list.', required: [] })
  .openapi('DescribeSourceServersRequestFilters')

const DescribeSourceServersRequestSchema = z
  .object({
    filters: DescribeSourceServersRequestFiltersSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list.' }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list by maximum results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request to filter Source Servers list by next token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSourceServersRequest', required: [] })
  .openapi('DescribeSourceServersRequest')

const DescribeVcenterClientsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeVcenterClientsRequest' })
  .openapi('DescribeVcenterClientsRequest')

const DisassociateApplicationsRequestSchema = z
  .object({
    applicationIDs: ApplicationIDsSchema.and(
      z.any().openapi({ description: 'Application IDs list.' }),
    ),
    waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })),
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
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
    sourceServerIDs: DisassociateSourceServersRequestSourceServerIDsSchema.and(
      z.any().openapi({ description: 'Source server IDs list.' }),
    ),
  })
  .openapi({
    required: ['applicationID', 'sourceServerIDs'],
    title: 'DisassociateSourceServersRequest',
  })
  .openapi('DisassociateSourceServersRequest')

const DisconnectFromServiceRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({ description: 'Request to disconnect Source Server from service by Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'DisconnectFromServiceRequest' })
  .openapi('DisconnectFromServiceRequest')

const FinalizeCutoverRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Request to finalize Cutover by Source Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'FinalizeCutoverRequest' })
  .openapi('FinalizeCutoverRequest')

const GetLaunchConfigurationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({
          description: 'Request to get Launch Configuration information by Source Server ID.',
        }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'GetLaunchConfigurationRequest' })
  .openapi('GetLaunchConfigurationRequest')

const GetReplicationConfigurationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({ description: 'Request to get Replication Configuration by Source Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'GetReplicationConfigurationRequest' })
  .openapi('GetReplicationConfigurationRequest')

const InitializeServiceRequestSchema = z
  .object({})
  .openapi({ title: 'InitializeServiceRequest' })
  .openapi('InitializeServiceRequest')

const ListApplicationsRequestFiltersSchema = z
  .object({
    applicationIDs: ApplicationIDsFilterSchema.and(
      z.any().openapi({ description: 'Filter applications list by application ID.' }),
    ).exactOptional(),
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Filter applications list by archival status.' }),
    ).exactOptional(),
    waveIDs: WaveIDsFilterSchema.and(
      z.any().openapi({ description: 'Filter applications list by wave ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Applications list filters.', required: [] })
  .openapi('ListApplicationsRequestFilters')

const ListApplicationsRequestSchema = z
  .object({
    filters: ListApplicationsRequestFiltersSchema.and(
      z.any().openapi({ description: 'Applications list filters.' }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'Maximum results to return when listing applications.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request next token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationsRequest', required: [] })
  .openapi('ListApplicationsRequest')

const ListExportErrorsRequestSchema = z
  .object({
    exportID: ExportIDSchema.and(
      z.any().openapi({ description: 'List export errors request export id.' }),
    ),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'List export errors request max results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List export errors request next token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['exportID'],
    title: 'ListExportErrorsRequest',
    description: 'List export errors request.',
  })
  .openapi('ListExportErrorsRequest')

const ListExportsRequestFiltersSchema = z
  .object({
    exportIDs: ListExportsRequestFiltersExportIDsSchema.and(
      z.any().openapi({ description: 'List exports request filters export ids.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'List exports request filters.', required: [] })
  .openapi('ListExportsRequestFilters')

const ListExportsRequestSchema = z
  .object({
    filters: ListExportsRequestFiltersSchema.exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'List export request max results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List export request next token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExportsRequest', description: 'List export request.', required: [] })
  .openapi('ListExportsRequest')

const ListImportErrorsRequestSchema = z
  .object({
    importID: ImportIDSchema.and(
      z.any().openapi({ description: 'List import errors request import id.' }),
    ),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'List import errors request max results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List import errors request next token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['importID'],
    title: 'ListImportErrorsRequest',
    description: 'List import errors request.',
  })
  .openapi('ListImportErrorsRequest')

const ListImportsRequestFiltersSchema = z
  .object({
    importIDs: ImportIDsFilterSchema.and(
      z.any().openapi({ description: 'List imports request filters import IDs.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'List imports request filters.', required: [] })
  .openapi('ListImportsRequestFilters')

const ListImportsRequestSchema = z
  .object({
    filters: ListImportsRequestFiltersSchema.and(
      z.any().openapi({ description: 'List imports request filters.' }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'List imports request max results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'List imports request next token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListImportsRequest', description: 'List imports request.', required: [] })
  .openapi('ListImportsRequest')

const SourceServerActionsRequestFiltersSchema = z
  .object({
    actionIDs: ActionIDsSchema.and(
      z
        .any()
        .openapi({
          description: 'Action IDs to filter source server post migration custom actions by.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Source server post migration custom action filters.', required: [] })
  .openapi('SourceServerActionsRequestFilters')

const ListSourceServerActionsRequestSchema = z
  .object({
    filters: SourceServerActionsRequestFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters to apply when listing source server post migration custom actions.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum amount of items to return when listing source server post migration custom actions.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token to use when listing source server post migration custom actions.',
        }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(z.any().openapi({ description: 'Source server ID.' })),
  })
  .openapi({ required: ['sourceServerID'], title: 'ListSourceServerActionsRequest' })
  .openapi('ListSourceServerActionsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TemplateActionsRequestFiltersSchema = z
  .object({
    actionIDs: ActionIDsSchema.and(
      z
        .any()
        .openapi({
          description: 'Action IDs to filter template post migration custom actions by.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Template post migration custom action filters.', required: [] })
  .openapi('TemplateActionsRequestFilters')

const ListTemplateActionsRequestSchema = z
  .object({
    filters: TemplateActionsRequestFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters to apply when listing template post migration custom actions.',
        }),
    ).exactOptional(),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'Launch configuration template ID.' }),
    ),
    maxResults: MaxResultsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum amount of items to return when listing template post migration custom actions.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Next token to use when listing template post migration custom actions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['launchConfigurationTemplateID'], title: 'ListTemplateActionsRequest' })
  .openapi('ListTemplateActionsRequest')

const ListWavesRequestFiltersSchema = z
  .object({
    isArchived: BooleanSchema.and(
      z.any().openapi({ description: 'Filter waves list by archival status.' }),
    ).exactOptional(),
    waveIDs: WaveIDsFilterSchema.and(
      z.any().openapi({ description: 'Filter waves list by wave ID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Waves list filters.', required: [] })
  .openapi('ListWavesRequestFilters')

const ListWavesRequestSchema = z
  .object({
    filters: ListWavesRequestFiltersSchema.and(
      z.any().openapi({ description: 'Waves list filters.' }),
    ).exactOptional(),
    maxResults: MaxResultsTypeSchema.and(
      z.any().openapi({ description: 'Maximum results to return when listing waves.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Request next token.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListWavesRequest', required: [] })
  .openapi('ListWavesRequest')

const MarkAsArchivedRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Mark as archived by Source Server ID.' }),
    ),
  })
  .openapi({ required: ['sourceServerID'], title: 'MarkAsArchivedRequest' })
  .openapi('MarkAsArchivedRequest')

const PutSourceServerActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action ID.' }),
    ),
    actionName: ActionNameSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action name.' }),
    ),
    active: BooleanSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action active status.' }),
    ).exactOptional(),
    category: ActionCategorySchema.and(
      z.any().openapi({ description: 'Source server post migration custom action category.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action description.' }),
    ).exactOptional(),
    documentIdentifier: BoundedStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action document identifier.',
        }),
    ),
    documentVersion: DocumentVersionSchema.and(
      z
        .any()
        .openapi({ description: 'Source server post migration custom action document version.' }),
    ).exactOptional(),
    externalParameters: SsmDocumentExternalParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action external parameters.',
        }),
    ).exactOptional(),
    mustSucceedForCutover: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server post migration custom action must succeed for cutover.',
        }),
    ).exactOptional(),
    order: OrderTypeSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action order.' }),
    ),
    parameters: SsmDocumentParametersSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action parameters.' }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(z.any().openapi({ description: 'Source server ID.' })),
    timeoutSeconds: StrictlyPositiveIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Source server post migration custom action timeout in seconds.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['actionID', 'actionName', 'documentIdentifier', 'order', 'sourceServerID'],
    title: 'PutSourceServerActionRequest',
  })
  .openapi('PutSourceServerActionRequest')

const PutTemplateActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Template post migration custom action ID.' }),
    ),
    actionName: BoundedStringSchema.and(
      z.any().openapi({ description: 'Template post migration custom action name.' }),
    ),
    active: BooleanSchema.and(
      z.any().openapi({ description: 'Template post migration custom action active status.' }),
    ).exactOptional(),
    category: ActionCategorySchema.and(
      z.any().openapi({ description: 'Template post migration custom action category.' }),
    ).exactOptional(),
    description: ActionDescriptionSchema.and(
      z.any().openapi({ description: 'Template post migration custom action description.' }),
    ).exactOptional(),
    documentIdentifier: BoundedStringSchema.and(
      z
        .any()
        .openapi({ description: 'Template post migration custom action document identifier.' }),
    ),
    documentVersion: DocumentVersionSchema.and(
      z.any().openapi({ description: 'Template post migration custom action document version.' }),
    ).exactOptional(),
    externalParameters: SsmDocumentExternalParametersSchema.and(
      z
        .any()
        .openapi({ description: 'Template post migration custom action external parameters.' }),
    ).exactOptional(),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'Launch configuration template ID.' }),
    ),
    mustSucceedForCutover: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Template post migration custom action must succeed for cutover.',
        }),
    ).exactOptional(),
    operatingSystem: OperatingSystemStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Operating system eligible for this template post migration custom action.',
        }),
    ).exactOptional(),
    order: OrderTypeSchema.and(
      z.any().openapi({ description: 'Template post migration custom action order.' }),
    ),
    parameters: SsmDocumentParametersSchema.and(
      z.any().openapi({ description: 'Template post migration custom action parameters.' }),
    ).exactOptional(),
    timeoutSeconds: StrictlyPositiveIntegerSchema.and(
      z.any().openapi({ description: 'Template post migration custom action timeout in seconds.' }),
    ).exactOptional(),
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
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Source server post migration custom action ID to remove.' }),
    ),
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({
          description: 'Source server ID of the post migration custom action to remove.',
        }),
    ),
  })
  .openapi({ required: ['actionID', 'sourceServerID'], title: 'RemoveSourceServerActionRequest' })
  .openapi('RemoveSourceServerActionRequest')

const RemoveTemplateActionRequestSchema = z
  .object({
    actionID: ActionIDSchema.and(
      z.any().openapi({ description: 'Template post migration custom action ID to remove.' }),
    ),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'Launch configuration template ID of the post migration custom action to remove.',
        }),
    ),
  })
  .openapi({
    required: ['actionID', 'launchConfigurationTemplateID'],
    title: 'RemoveTemplateActionRequest',
  })
  .openapi('RemoveTemplateActionRequest')

const RetryDataReplicationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Retry data replication for Source Server ID.' }),
    ),
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
    sourceServerIDs: StartCutoverRequestSourceServerIDsSchema.and(
      z.any().openapi({ description: 'Start Cutover by Source Server IDs.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Start Cutover by Tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'StartCutoverRequest' })
  .openapi('StartCutoverRequest')

const StartExportRequestSchema = z
  .object({
    s3Bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'Start export request s3 bucket.' }),
    ),
    s3BucketOwner: AccountIDSchema.and(
      z.any().openapi({ description: 'Start export request s3 bucket owner.' }),
    ).exactOptional(),
    s3Key: S3KeySchema.and(z.any().openapi({ description: 'Start export request s3key.' })),
  })
  .openapi({
    required: ['s3Bucket', 's3Key'],
    title: 'StartExportRequest',
    description: 'Start export request.',
  })
  .openapi('StartExportRequest')

const StartImportRequestSchema = z
  .object({
    clientToken: ClientIdempotencyTokenSchema.and(
      z.any().openapi({ description: 'Start import request client token.' }),
    ).exactOptional(),
    s3BucketSource: S3BucketSourceSchema.and(
      z.any().openapi({ description: 'Start import request s3 bucket source.' }),
    ),
  })
  .openapi({
    required: ['s3BucketSource'],
    title: 'StartImportRequest',
    description: 'Start import request.',
  })
  .openapi('StartImportRequest')

const StartReplicationRequestSchema = z
  .object({
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'ID of source server on which to start replication.' }),
    ),
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
    sourceServerIDs: StartTestRequestSourceServerIDsSchema.and(
      z.any().openapi({ description: 'Start Test for Source Server IDs.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Start Test by Tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'StartTestRequest' })
  .openapi('StartTestRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({ tags: TagsMapSchema.and(z.any().openapi({ description: 'Tag resource by Tags.' })) })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TerminateTargetInstancesRequestSourceServerIDsSchema = z
  .array(SourceServerIDSchema)
  .min(1)
  .max(200)
  .openapi('TerminateTargetInstancesRequestSourceServerIDs')

const TerminateTargetInstancesRequestSchema = z
  .object({
    sourceServerIDs: TerminateTargetInstancesRequestSourceServerIDsSchema.and(
      z.any().openapi({ description: 'Terminate Target instance by Source Server IDs.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Terminate Target instance by Tags.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sourceServerIDs'], title: 'TerminateTargetInstancesRequest' })
  .openapi('TerminateTargetInstancesRequest')

const UnarchiveApplicationRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
  })
  .openapi({ required: ['applicationID'], title: 'UnarchiveApplicationRequest' })
  .openapi('UnarchiveApplicationRequest')

const UnarchiveWaveRequestSchema = z
  .object({ waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })) })
  .openapi({ required: ['waveID'], title: 'UnarchiveWaveRequest' })
  .openapi('UnarchiveWaveRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationRequestSchema = z
  .object({
    applicationID: ApplicationIDSchema.and(z.any().openapi({ description: 'Application ID.' })),
    description: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: 'Application description.' }),
    ).exactOptional(),
    name: ApplicationNameSchema.and(
      z.any().openapi({ description: 'Application name.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['applicationID'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const UpdateLaunchConfigurationRequestSchema = z
  .object({
    bootMode: BootModeSchema.and(
      z.any().openapi({ description: 'Update Launch configuration boot mode request.' }),
    ).exactOptional(),
    copyPrivateIp: BooleanSchema.and(
      z.any().openapi({ description: 'Update Launch configuration copy Private IP request.' }),
    ).exactOptional(),
    copyTags: BooleanSchema.and(
      z.any().openapi({ description: 'Update Launch configuration copy Tags request.' }),
    ).exactOptional(),
    enableMapAutoTagging: BooleanSchema.and(
      z.any().openapi({ description: 'Enable map auto tagging.' }),
    ).exactOptional(),
    launchDisposition: LaunchDispositionSchema.and(
      z.any().openapi({ description: 'Update Launch configuration launch disposition request.' }),
    ).exactOptional(),
    licensing: LicensingSchema.and(
      z.any().openapi({ description: 'Update Launch configuration licensing request.' }),
    ).exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.and(
      z.any().openapi({ description: 'Launch configuration map auto tagging MPE ID.' }),
    ).exactOptional(),
    name: SmallBoundedStringSchema.and(
      z.any().openapi({ description: 'Update Launch configuration name request.' }),
    ).exactOptional(),
    postLaunchActions: PostLaunchActionsSchema.exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'Update Launch configuration by Source Server ID request.' }),
    ),
    targetInstanceTypeRightSizingMethod: TargetInstanceTypeRightSizingMethodSchema.and(
      z
        .any()
        .openapi({
          description: 'Update Launch configuration Target instance right sizing request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['sourceServerID'], title: 'UpdateLaunchConfigurationRequest' })
  .openapi('UpdateLaunchConfigurationRequest')

const UpdateLaunchConfigurationTemplateRequestSchema = z
  .object({
    associatePublicIpAddress: BooleanSchema.and(
      z.any().openapi({ description: 'Associate public Ip address.' }),
    ).exactOptional(),
    bootMode: BootModeSchema.and(
      z.any().openapi({ description: 'Launch configuration template boot mode.' }),
    ).exactOptional(),
    copyPrivateIp: BooleanSchema.and(
      z.any().openapi({ description: 'Copy private Ip.' }),
    ).exactOptional(),
    copyTags: BooleanSchema.and(z.any().openapi({ description: 'Copy tags.' })).exactOptional(),
    enableMapAutoTagging: BooleanSchema.and(
      z.any().openapi({ description: 'Enable map auto tagging.' }),
    ).exactOptional(),
    largeVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Large volume config.' }),
    ).exactOptional(),
    launchConfigurationTemplateID: LaunchConfigurationTemplateIDSchema.and(
      z.any().openapi({ description: 'Launch Configuration Template ID.' }),
    ),
    launchDisposition: LaunchDispositionSchema.and(
      z.any().openapi({ description: 'Launch disposition.' }),
    ).exactOptional(),
    licensing: LicensingSchema.exactOptional(),
    mapAutoTaggingMpeID: TagValueSchema.and(
      z.any().openapi({ description: 'Launch configuration template map auto tagging MPE ID.' }),
    ).exactOptional(),
    postLaunchActions: PostLaunchActionsSchema.and(
      z
        .any()
        .openapi({ description: 'Post Launch Action to execute on the Test or Cutover instance.' }),
    ).exactOptional(),
    smallVolumeConf: LaunchTemplateDiskConfSchema.and(
      z.any().openapi({ description: 'Small volume config.' }),
    ).exactOptional(),
    smallVolumeMaxSize: PositiveIntegerSchema.and(
      z.any().openapi({ description: 'Small volume maximum size.' }),
    ).exactOptional(),
    targetInstanceTypeRightSizingMethod: TargetInstanceTypeRightSizingMethodSchema.and(
      z.any().openapi({ description: 'Target instance type right-sizing method.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['launchConfigurationTemplateID'],
    title: 'UpdateLaunchConfigurationTemplateRequest',
  })
  .openapi('UpdateLaunchConfigurationTemplateRequest')

const UpdateReplicationConfigurationRequestSchema = z
  .object({
    associateDefaultSecurityGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration associate default Application Migration Service Security group request.',
        }),
    ).exactOptional(),
    bandwidthThrottling: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration bandwidth throttling request.' }),
    ).exactOptional(),
    createPublicIP: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration create Public IP request.' }),
    ).exactOptional(),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration data plane routing request.' }),
    ).exactOptional(),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration use default large Staging Disk type request.',
        }),
    ).exactOptional(),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.and(
      z.any().openapi({ description: 'Update replication configuration EBS encryption request.' }),
    ).exactOptional(),
    ebsEncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration EBS encryption key ARN request.',
        }),
    ).exactOptional(),
    name: SmallBoundedStringSchema.and(
      z.any().openapi({ description: 'Update replication configuration name request.' }),
    ).exactOptional(),
    replicatedDisks: ReplicationConfigurationReplicatedDisksSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration replicated disks request.' }),
    ).exactOptional(),
    replicationServerInstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration Replication Server instance type request.',
        }),
    ).exactOptional(),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration Replication Server Security Groups IDs request.',
        }),
    ).exactOptional(),
    sourceServerID: SourceServerIDSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration Source Server ID request.' }),
    ),
    stagingAreaSubnetId: SubnetIDSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration Staging Area subnet request.' }),
    ).exactOptional(),
    stagingAreaTags: TagsMapSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration Staging Area Tags request.' }),
    ).exactOptional(),
    useDedicatedReplicationServer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration use dedicated Replication Server request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['sourceServerID'], title: 'UpdateReplicationConfigurationRequest' })
  .openapi('UpdateReplicationConfigurationRequest')

const UpdateReplicationConfigurationTemplateRequestSchema = z
  .object({
    arn: ARNSchema.and(
      z.any().openapi({ description: 'Update replication configuration template ARN request.' }),
    ).exactOptional(),
    associateDefaultSecurityGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration template associate default Application Migration Service Security group request.',
        }),
    ).exactOptional(),
    bandwidthThrottling: PositiveIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template bandwidth throttling request.',
        }),
    ).exactOptional(),
    createPublicIP: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template create Public IP request.',
        }),
    ).exactOptional(),
    dataPlaneRouting: ReplicationConfigurationDataPlaneRoutingSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template data plane routing request.',
        }),
    ).exactOptional(),
    defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration template use default large Staging Disk type request.',
        }),
    ).exactOptional(),
    ebsEncryption: ReplicationConfigurationEbsEncryptionSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template EBS encryption request.',
        }),
    ).exactOptional(),
    ebsEncryptionKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template EBS encryption key ARN request.',
        }),
    ).exactOptional(),
    replicationConfigurationTemplateID: ReplicationConfigurationTemplateIDSchema.and(
      z
        .any()
        .openapi({ description: 'Update replication configuration template template ID request.' }),
    ),
    replicationServerInstanceType: EC2InstanceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration template Replication Server instance type request.',
        }),
    ).exactOptional(),
    replicationServersSecurityGroupsIDs: ReplicationServersSecurityGroupsIDsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration template Replication Server Security groups IDs request.',
        }),
    ).exactOptional(),
    stagingAreaSubnetId: SubnetIDSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template Staging Area subnet ID request.',
        }),
    ).exactOptional(),
    stagingAreaTags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Update replication configuration template Staging Area Tags request.',
        }),
    ).exactOptional(),
    useDedicatedReplicationServer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Update replication configuration template use dedicated Replication Server request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['replicationConfigurationTemplateID'],
    title: 'UpdateReplicationConfigurationTemplateRequest',
  })
  .openapi('UpdateReplicationConfigurationTemplateRequest')

const UpdateSourceServerReplicationTypeRequestSchema = z
  .object({
    replicationType: ReplicationTypeSchema.and(
      z.any().openapi({ description: 'Replication type to which to update source server.' }),
    ),
    sourceServerID: SourceServerIDSchema.and(
      z.any().openapi({ description: 'ID of source server on which to update replication type.' }),
    ),
  })
  .openapi({
    required: ['replicationType', 'sourceServerID'],
    title: 'UpdateSourceServerReplicationTypeRequest',
  })
  .openapi('UpdateSourceServerReplicationTypeRequest')

const UpdateWaveRequestSchema = z
  .object({
    description: WaveDescriptionSchema.and(
      z.any().openapi({ description: 'Wave description.' }),
    ).exactOptional(),
    name: WaveNameSchema.and(z.any().openapi({ description: 'Wave name.' })).exactOptional(),
    waveID: WaveIDSchema.and(z.any().openapi({ description: 'Wave ID.' })),
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
                  state: ChangeServerLifeCycleStateSourceServerLifecycleStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The request to change the source server migration lifecycle state.',
                      }),
                  ).exactOptional(),
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
                  iops: PositiveIntegerSchema.and(
                    z.any().openapi({ description: 'Launch template disk iops configuration.' }),
                  ).exactOptional(),
                  throughput: PositiveIntegerSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk throughput configuration.' }),
                  ).exactOptional(),
                  volumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk volume type configuration.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Launch template disk configuration.', required: [] }),
              launchDisposition: z
                .enum(['STOPPED', 'STARTED'])
                .exactOptional()
                .openapi({ description: 'Launch disposition.' }),
              licensing: z
                .object({
                  osByol: BooleanSchema.and(
                    z.any().openapi({ description: 'Configure BYOL OS licensing.' }),
                  ).exactOptional(),
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
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's CloudWatch log group name.",
                      }),
                  ).exactOptional(),
                  deployment: PostLaunchActionsDeploymentTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Deployment type in which AWS Systems Manager Documents will be executed.',
                      }),
                  ).exactOptional(),
                  s3LogBucket: S3LogBucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 log bucket.",
                      }),
                  ).exactOptional(),
                  s3OutputKeyPrefix: BoundedStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 output key prefix.",
                      }),
                  ).exactOptional(),
                  ssmDocuments: SsmDocumentsSchema.and(
                    z.any().openapi({ description: 'AWS Systems Manager Documents.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Post Launch Actions to executed on the Test or Cutover instance.',
                  required: [],
                }),
              smallVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.and(
                    z.any().openapi({ description: 'Launch template disk iops configuration.' }),
                  ).exactOptional(),
                  throughput: PositiveIntegerSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk throughput configuration.' }),
                  ).exactOptional(),
                  volumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk volume type configuration.' }),
                  ).exactOptional(),
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
                  fromDate: ISO8601DatetimeStringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Request to describe Job log filters by date.' }),
                  ).exactOptional(),
                  jobIDs: DescribeJobsRequestFiltersJobIDsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Request to describe Job log filters by job ID.' }),
                  ).exactOptional(),
                  toDate: ISO8601DatetimeStringSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Request to describe job log items by last date.' }),
                  ).exactOptional(),
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
                  applicationIDs: DescribeSourceServersRequestApplicationIDsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Request to filter Source Servers list by application IDs.',
                      }),
                  ).exactOptional(),
                  isArchived: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Request to filter Source Servers list by archived.',
                      }),
                  ).exactOptional(),
                  lifeCycleStates: LifeCycleStatesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Request to filter Source Servers list by life cycle states.',
                      }),
                  ).exactOptional(),
                  replicationTypes: ReplicationTypesSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Request to filter Source Servers list by replication type.',
                      }),
                  ).exactOptional(),
                  sourceServerIDs: DescribeSourceServersRequestFiltersIDsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Request to filter Source Servers list by Source Server ID.',
                      }),
                  ).exactOptional(),
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
                  applicationIDs: ApplicationIDsFilterSchema.and(
                    z.any().openapi({ description: 'Filter applications list by application ID.' }),
                  ).exactOptional(),
                  isArchived: BooleanSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Filter applications list by archival status.' }),
                  ).exactOptional(),
                  waveIDs: WaveIDsFilterSchema.and(
                    z.any().openapi({ description: 'Filter applications list by wave ID.' }),
                  ).exactOptional(),
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
                  exportIDs: ListExportsRequestFiltersExportIDsSchema.and(
                    z.any().openapi({ description: 'List exports request filters export ids.' }),
                  ).exactOptional(),
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
                  importIDs: ImportIDsFilterSchema.and(
                    z.any().openapi({ description: 'List imports request filters import IDs.' }),
                  ).exactOptional(),
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
                  actionIDs: ActionIDsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Action IDs to filter source server post migration custom actions by.',
                      }),
                  ).exactOptional(),
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
                  actionIDs: ActionIDsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Action IDs to filter template post migration custom actions by.',
                      }),
                  ).exactOptional(),
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
                  isArchived: BooleanSchema.and(
                    z.any().openapi({ description: 'Filter waves list by archival status.' }),
                  ).exactOptional(),
                  waveIDs: WaveIDsFilterSchema.and(
                    z.any().openapi({ description: 'Filter waves list by wave ID.' }),
                  ).exactOptional(),
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
                  s3Bucket: S3BucketNameSchema.and(
                    z.any().openapi({ description: 'S3 bucket source s3 bucket.' }),
                  ).exactOptional(),
                  s3BucketOwner: AccountIDSchema.and(
                    z.any().openapi({ description: 'S3 bucket source s3 bucket owner.' }),
                  ).exactOptional(),
                  s3Key: S3KeySchema.and(
                    z.any().openapi({ description: 'S3 bucket source s3 key.' }),
                  ).exactOptional(),
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
                  osByol: BooleanSchema.and(
                    z.any().openapi({ description: 'Configure BYOL OS licensing.' }),
                  ).exactOptional(),
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
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's CloudWatch log group name.",
                      }),
                  ).exactOptional(),
                  deployment: PostLaunchActionsDeploymentTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Deployment type in which AWS Systems Manager Documents will be executed.',
                      }),
                  ).exactOptional(),
                  s3LogBucket: S3LogBucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 log bucket.",
                      }),
                  ).exactOptional(),
                  s3OutputKeyPrefix: BoundedStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 output key prefix.",
                      }),
                  ).exactOptional(),
                  ssmDocuments: SsmDocumentsSchema.and(
                    z.any().openapi({ description: 'AWS Systems Manager Documents.' }),
                  ).exactOptional(),
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
                  iops: PositiveIntegerSchema.and(
                    z.any().openapi({ description: 'Launch template disk iops configuration.' }),
                  ).exactOptional(),
                  throughput: PositiveIntegerSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk throughput configuration.' }),
                  ).exactOptional(),
                  volumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk volume type configuration.' }),
                  ).exactOptional(),
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
                  osByol: BooleanSchema.and(
                    z.any().openapi({ description: 'Configure BYOL OS licensing.' }),
                  ).exactOptional(),
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
                  cloudWatchLogGroupName: CloudWatchLogGroupNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's CloudWatch log group name.",
                      }),
                  ).exactOptional(),
                  deployment: PostLaunchActionsDeploymentTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Deployment type in which AWS Systems Manager Documents will be executed.',
                      }),
                  ).exactOptional(),
                  s3LogBucket: S3LogBucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 log bucket.",
                      }),
                  ).exactOptional(),
                  s3OutputKeyPrefix: BoundedStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: "AWS Systems Manager Command's logs S3 output key prefix.",
                      }),
                  ).exactOptional(),
                  ssmDocuments: SsmDocumentsSchema.and(
                    z.any().openapi({ description: 'AWS Systems Manager Documents.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Post Launch Actions to executed on the Test or Cutover instance.',
                  required: [],
                }),
              smallVolumeConf: z
                .object({
                  iops: PositiveIntegerSchema.and(
                    z.any().openapi({ description: 'Launch template disk iops configuration.' }),
                  ).exactOptional(),
                  throughput: PositiveIntegerSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk throughput configuration.' }),
                  ).exactOptional(),
                  volumeType: VolumeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Launch template disk volume type configuration.' }),
                  ).exactOptional(),
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
