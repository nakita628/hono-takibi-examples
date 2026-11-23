import { createRoute, z } from '@hono/zod-openapi'

const AppIdSchema = z.string().openapi('AppId')

const RoleNameSchema = z.string().openapi('RoleName')

const AutoLaunchSchema = z.boolean().openapi('AutoLaunch')

const ServerGroupIdSchema = z.string().openapi('ServerGroupId')

const LaunchOrderSchema = z.int().openapi('LaunchOrder')

const ServerIdSchema = z.string().openapi('ServerId')

const ServerTypeSchema = z.literal('VIRTUAL_MACHINE').openapi('ServerType')

const VmManagerIdSchema = z.string().openapi('VmManagerId')

const VmIdSchema = z.string().openapi('VmId')

const VmServerAddressSchema = z
  .object({
    vmManagerId: VmManagerIdSchema.exactOptional().openapi({
      description: 'The ID of the VM manager.',
    }),
    vmId: VmIdSchema.exactOptional().openapi({ description: 'The ID of the VM.' }),
  })
  .openapi({ description: 'Represents a VM server location.', required: [] })
  .openapi('VmServerAddress')

const VmNameSchema = z.string().openapi('VmName')

const VmManagerNameSchema = z.string().openapi('VmManagerName')

const VmManagerTypeSchema = z.enum(['VSPHERE', 'SCVMM', 'HYPERV-MANAGER']).openapi('VmManagerType')

const VmPathSchema = z.string().openapi('VmPath')

const VmServerSchema = z
  .object({
    vmServerAddress: VmServerAddressSchema.exactOptional().openapi({
      description: 'The VM server location.',
    }),
    vmName: VmNameSchema.exactOptional().openapi({ description: 'The name of the VM.' }),
    vmManagerName: VmManagerNameSchema.exactOptional().openapi({
      description: 'The name of the VM manager.',
    }),
    vmManagerType: VmManagerTypeSchema.exactOptional().openapi({
      description: 'The type of VM management product.',
    }),
    vmPath: VmPathSchema.exactOptional().openapi({
      description: 'The VM folder path in the vCenter Server virtual machine inventory tree.',
    }),
  })
  .openapi({ description: 'Represents a VM server.', required: [] })
  .openapi('VmServer')

const ReplicationJobIdSchema = z.string().openapi('ReplicationJobId')

const ReplicationJobTerminatedSchema = z.boolean().openapi('ReplicationJobTerminated')

const ServerSchema = z
  .object({
    serverId: ServerIdSchema.exactOptional().openapi({ description: 'The ID of the server.' }),
    serverType: ServerTypeSchema.exactOptional().openapi({ description: 'The type of server.' }),
    vmServer: VmServerSchema.exactOptional().openapi({
      description: 'Information about the VM server.',
    }),
    replicationJobId: ReplicationJobIdSchema.exactOptional().openapi({
      description: 'The ID of the replication job.',
    }),
    replicationJobTerminated: ReplicationJobTerminatedSchema.exactOptional().openapi({
      description: 'Indicates whether the replication job is deleted or failed.',
    }),
  })
  .openapi({ description: 'Represents a server.', required: [] })
  .openapi('Server')

const LogicalIdSchema = z.string().openapi('LogicalId')

const VPCSchema = z.string().openapi('VPC')

const SubnetSchema = z.string().openapi('Subnet')

const SecurityGroupSchema = z.string().openapi('SecurityGroup')

const EC2KeyNameSchema = z.string().openapi('EC2KeyName')

const S3BucketNameSchema = z.string().min(3).max(63).openapi('S3BucketName')

const S3KeyNameSchema = z.string().max(1024).openapi('S3KeyName')

const S3LocationSchema = z
  .object({
    bucket: S3BucketNameSchema.exactOptional().openapi({
      description: 'The Amazon S3 bucket name.',
    }),
    key: S3KeyNameSchema.exactOptional().openapi({ description: 'The Amazon S3 bucket key.' }),
  })
  .openapi({ description: 'Location of an Amazon S3 object.', required: [] })
  .openapi('S3Location')

const UserDataSchema = z
  .object({
    s3Location: S3LocationSchema.exactOptional().openapi({
      description: 'Amazon S3 location of the user-data script.',
    }),
  })
  .openapi({
    description:
      'A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.',
    required: [],
  })
  .openapi('UserData')

const InstanceTypeSchema = z.string().openapi('InstanceType')

const AssociatePublicIpAddressSchema = z.boolean().openapi('AssociatePublicIpAddress')

const ScriptTypeSchema = z.enum(['SHELL_SCRIPT', 'POWERSHELL_SCRIPT']).openapi('ScriptType')

const ServerLaunchConfigurationSchema = z
  .object({
    server: ServerSchema.exactOptional().openapi({
      description: 'The ID of the server with which the launch configuration is associated.',
    }),
    logicalId: LogicalIdSchema.exactOptional().openapi({
      description: 'The logical ID of the server in the CloudFormation template.',
    }),
    vpc: VPCSchema.exactOptional().openapi({
      description: 'The ID of the VPC into which the server should be launched.',
    }),
    subnet: SubnetSchema.exactOptional().openapi({
      description: 'The ID of the subnet the server should be launched into.',
    }),
    securityGroup: SecurityGroupSchema.exactOptional().openapi({
      description: 'The ID of the security group that applies to the launched server.',
    }),
    ec2KeyName: EC2KeyNameSchema.exactOptional().openapi({
      description:
        'The name of the Amazon EC2 SSH key to be used for connecting to the launched server.',
    }),
    userData: UserDataSchema.exactOptional().openapi({
      description: 'Location of the user-data script to be executed when launching the server.',
    }),
    instanceType: InstanceTypeSchema.exactOptional().openapi({
      description: 'The instance type to use when launching the server.',
    }),
    associatePublicIpAddress: AssociatePublicIpAddressSchema.exactOptional().openapi({
      description:
        'Indicates whether a publicly accessible IP address is created when launching the server.',
    }),
    iamInstanceProfileName: RoleNameSchema.exactOptional().openapi({
      description: 'The name of the IAM instance profile.',
    }),
    configureScript: S3LocationSchema.exactOptional(),
    configureScriptType: ScriptTypeSchema.exactOptional().openapi({
      description: 'The type of configuration script.',
    }),
  })
  .openapi({ description: 'Launch configuration for a server.', required: [] })
  .openapi('ServerLaunchConfiguration')

const ServerLaunchConfigurationsSchema = z
  .array(ServerLaunchConfigurationSchema)
  .openapi('ServerLaunchConfigurations')

const ServerGroupLaunchConfigurationSchema = z
  .object({
    serverGroupId: ServerGroupIdSchema.exactOptional().openapi({
      description: 'The ID of the server group with which the launch configuration is associated.',
    }),
    launchOrder: LaunchOrderSchema.exactOptional().openapi({
      description: 'The launch order of servers in the server group.',
    }),
    serverLaunchConfigurations: ServerLaunchConfigurationsSchema.exactOptional().openapi({
      description: 'The launch configuration for servers in the server group.',
    }),
  })
  .openapi({ description: 'Launch configuration for a server group.', required: [] })
  .openapi('ServerGroupLaunchConfiguration')

const ServerGroupLaunchConfigurationsSchema = z
  .array(ServerGroupLaunchConfigurationSchema)
  .openapi('ServerGroupLaunchConfigurations')

type GetAppLaunchConfigurationResponseType = {
  appId?: z.infer<typeof AppIdSchema>
  roleName?: z.infer<typeof RoleNameSchema>
  autoLaunch?: z.infer<typeof AutoLaunchSchema>
  serverGroupLaunchConfigurations?: z.infer<typeof ServerGroupLaunchConfigurationsSchema>
}

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const FrequencySchema = z.int().openapi('Frequency')

const RunOnceSchema = z.boolean().openapi('RunOnce')

const LicenseTypeSchema = z.enum(['AWS', 'BYOL']).openapi('LicenseType')

const NumberOfRecentAmisToKeepSchema = z.int().openapi('NumberOfRecentAmisToKeep')

const EncryptedSchema = z.boolean().openapi('Encrypted')

const KmsKeyIdSchema = z.string().openapi('KmsKeyId')

const ServerReplicationParametersSchema = z
  .object({
    seedTime: TimestampSchema.exactOptional().openapi({
      description: 'The seed time for creating a replication job for the server.',
    }),
    frequency: FrequencySchema.exactOptional().openapi({
      description: 'The frequency of creating replication jobs for the server.',
    }),
    runOnce: RunOnceSchema.exactOptional().openapi({
      description: 'Indicates whether to run the replication job one time.',
    }),
    licenseType: LicenseTypeSchema.exactOptional().openapi({
      description: 'The license type for creating a replication job for the server.',
    }),
    numberOfRecentAmisToKeep: NumberOfRecentAmisToKeepSchema.exactOptional().openapi({
      description:
        'The number of recent AMIs to keep when creating a replication job for this server.',
    }),
    encrypted: EncryptedSchema.exactOptional().openapi({
      description: 'Indicates whether the replication job produces encrypted AMIs.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description:
        "<p>The ID of the KMS key for replication jobs that produce encrypted AMIs. This value can be any of the following:</p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to the KMS key ID</p> </li> <li> <p>ARN referring to the KMS key alias</p> </li> </ul> <p>If encrypted is enabled but a KMS key ID is not specified, the customer's default KMS key for Amazon EBS is used.</p>",
    }),
  })
  .openapi({ description: 'The replication parameters for replicating a server.', required: [] })
  .openapi('ServerReplicationParameters')

const ServerReplicationConfigurationSchema = z
  .object({
    server: ServerSchema.exactOptional().openapi({
      description: 'The ID of the server with which this replication configuration is associated.',
    }),
    serverReplicationParameters: ServerReplicationParametersSchema.exactOptional().openapi({
      description: 'The parameters for replicating the server.',
    }),
  })
  .openapi({ description: 'Replication configuration of a server.', required: [] })
  .openapi('ServerReplicationConfiguration')

const ServerReplicationConfigurationsSchema = z
  .array(ServerReplicationConfigurationSchema)
  .openapi('ServerReplicationConfigurations')

const ServerGroupReplicationConfigurationSchema = z
  .object({
    serverGroupId: ServerGroupIdSchema.exactOptional().openapi({
      description:
        'The ID of the server group with which this replication configuration is associated.',
    }),
    serverReplicationConfigurations: ServerReplicationConfigurationsSchema.exactOptional().openapi({
      description: 'The replication configuration for servers in the server group.',
    }),
  })
  .openapi({ description: 'Replication configuration for a server group.', required: [] })
  .openapi('ServerGroupReplicationConfiguration')

const ServerGroupReplicationConfigurationsSchema = z
  .array(ServerGroupReplicationConfigurationSchema)
  .openapi('ServerGroupReplicationConfigurations')

type GetAppReplicationConfigurationResponseType = {
  serverGroupReplicationConfigurations?: z.infer<typeof ServerGroupReplicationConfigurationsSchema>
}

const ValidationIdSchema = z
  .string()
  .regex(/^val-[0-9a-f]{17}$/)
  .openapi('ValidationId')

const NonEmptyStringWithMaxLen255Schema = z
  .string()
  .regex(/^[\S]+$/)
  .min(1)
  .max(255)
  .openapi('NonEmptyStringWithMaxLen255')

const AppValidationStrategySchema = z.literal('SSM').openapi('AppValidationStrategy')

const SourceSchema = z
  .object({ s3Location: S3LocationSchema.exactOptional() })
  .openapi({ description: 'Contains the location of a validation script.', required: [] })
  .openapi('Source')

const InstanceIdSchema = z
  .string()
  .regex(/(^i-(\w{8}|\w{17})$)|(^mi-\w{17}$)/)
  .openapi('InstanceId')

const CommandSchema = z.string().min(1).max(64000).openapi('Command')

const ExecutionTimeoutSecondsSchema = z.int().min(60).max(28800).openapi('ExecutionTimeoutSeconds')

const BucketNameSchema = z.string().openapi('BucketName')

const SSMValidationParametersSchema = z
  .object({
    source: SourceSchema.exactOptional().openapi({
      description: 'The location of the validation script.',
    }),
    instanceId: InstanceIdSchema.exactOptional().openapi({
      description:
        'The ID of the instance. The instance must have the following tag: UserForSMSApplicationValidation=true.',
    }),
    scriptType: ScriptTypeSchema.exactOptional().openapi({
      description: 'The type of validation script.',
    }),
    command: CommandSchema.exactOptional().openapi({
      description: 'The command to run the validation script.',
    }),
    executionTimeoutSeconds: ExecutionTimeoutSecondsSchema.exactOptional().openapi({
      description: 'The timeout interval, in seconds.',
    }),
    outputS3BucketName: BucketNameSchema.exactOptional().openapi({
      description: 'The name of the S3 bucket for output.',
    }),
  })
  .openapi({ description: 'Contains validation parameters.', required: [] })
  .openapi('SSMValidationParameters')

const AppValidationConfigurationSchema = z
  .object({
    validationId: ValidationIdSchema.exactOptional().openapi({
      description: 'The ID of the validation.',
    }),
    name: NonEmptyStringWithMaxLen255Schema.exactOptional().openapi({
      description: 'The name of the configuration.',
    }),
    appValidationStrategy: AppValidationStrategySchema.exactOptional().openapi({
      description: 'The validation strategy.',
    }),
    ssmValidationParameters: SSMValidationParametersSchema.exactOptional().openapi({
      description: 'The validation parameters.',
    }),
  })
  .openapi({ description: 'Configuration for validating an application.', required: [] })
  .openapi('AppValidationConfiguration')

const AppValidationConfigurationsSchema = z
  .array(AppValidationConfigurationSchema)
  .openapi('AppValidationConfigurations')

const ServerValidationStrategySchema = z.literal('USERDATA').openapi('ServerValidationStrategy')

const UserDataValidationParametersSchema = z
  .object({
    source: SourceSchema.exactOptional().openapi({
      description: 'The location of the validation script.',
    }),
    scriptType: ScriptTypeSchema.exactOptional().openapi({
      description: 'The type of validation script.',
    }),
  })
  .openapi({ description: 'Contains validation parameters.', required: [] })
  .openapi('UserDataValidationParameters')

const ServerValidationConfigurationSchema = z
  .object({
    server: ServerSchema.exactOptional(),
    validationId: ValidationIdSchema.exactOptional().openapi({
      description: 'The ID of the validation.',
    }),
    name: NonEmptyStringWithMaxLen255Schema.exactOptional().openapi({
      description: 'The name of the configuration.',
    }),
    serverValidationStrategy: ServerValidationStrategySchema.exactOptional().openapi({
      description: 'The validation strategy.',
    }),
    userDataValidationParameters: UserDataValidationParametersSchema.exactOptional().openapi({
      description: 'The validation parameters.',
    }),
  })
  .openapi({ description: 'Configuration for validating an instance.', required: [] })
  .openapi('ServerValidationConfiguration')

const ServerValidationConfigurationsSchema = z
  .array(ServerValidationConfigurationSchema)
  .openapi('ServerValidationConfigurations')

const ServerGroupValidationConfigurationSchema = z
  .object({
    serverGroupId: ServerGroupIdSchema.exactOptional().openapi({
      description: 'The ID of the server group.',
    }),
    serverValidationConfigurations: ServerValidationConfigurationsSchema.exactOptional().openapi({
      description: 'The validation configuration.',
    }),
  })
  .openapi({ description: 'Configuration for validating an instance.', required: [] })
  .openapi('ServerGroupValidationConfiguration')

const ServerGroupValidationConfigurationsSchema = z
  .array(ServerGroupValidationConfigurationSchema)
  .openapi('ServerGroupValidationConfigurations')

type GetAppValidationConfigurationResponseType = {
  appValidationConfigurations?: z.infer<typeof AppValidationConfigurationsSchema>
  serverGroupValidationConfigurations?: z.infer<typeof ServerGroupValidationConfigurationsSchema>
}

type PutAppLaunchConfigurationRequestType = {
  appId?: z.infer<typeof AppIdSchema>
  roleName?: z.infer<typeof RoleNameSchema>
  autoLaunch?: z.infer<typeof AutoLaunchSchema>
  serverGroupLaunchConfigurations?: z.infer<typeof ServerGroupLaunchConfigurationsSchema>
}

type PutAppReplicationConfigurationRequestType = {
  appId?: z.infer<typeof AppIdSchema>
  serverGroupReplicationConfigurations?: z.infer<typeof ServerGroupReplicationConfigurationsSchema>
}

const AppIdWithValidationSchema = z
  .string()
  .regex(/^app-[0-9a-f]{17}$/)
  .openapi('AppIdWithValidation')

type PutAppValidationConfigurationRequestType = {
  appId: z.infer<typeof AppIdWithValidationSchema>
  appValidationConfigurations?: z.infer<typeof AppValidationConfigurationsSchema>
  serverGroupValidationConfigurations?: z.infer<typeof ServerGroupValidationConfigurationsSchema>
}

const ImportedAppIdSchema = z.string().openapi('ImportedAppId')

const AppNameSchema = z.string().openapi('AppName')

const AppDescriptionSchema = z.string().openapi('AppDescription')

const AppStatusSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'DELETED', 'DELETE_FAILED'])
  .openapi('AppStatus')

const AppStatusMessageSchema = z.string().openapi('AppStatusMessage')

const AppReplicationConfigurationStatusSchema = z
  .enum(['NOT_CONFIGURED', 'CONFIGURED'])
  .openapi('AppReplicationConfigurationStatus')

const AppReplicationStatusSchema = z
  .enum([
    'READY_FOR_CONFIGURATION',
    'CONFIGURATION_IN_PROGRESS',
    'CONFIGURATION_INVALID',
    'READY_FOR_REPLICATION',
    'VALIDATION_IN_PROGRESS',
    'REPLICATION_PENDING',
    'REPLICATION_IN_PROGRESS',
    'REPLICATED',
    'PARTIALLY_REPLICATED',
    'DELTA_REPLICATION_IN_PROGRESS',
    'DELTA_REPLICATED',
    'DELTA_REPLICATION_FAILED',
    'REPLICATION_FAILED',
    'REPLICATION_STOPPING',
    'REPLICATION_STOP_FAILED',
    'REPLICATION_STOPPED',
  ])
  .openapi('AppReplicationStatus')

const AppReplicationStatusMessageSchema = z.string().openapi('AppReplicationStatusMessage')

const AppLaunchConfigurationStatusSchema = z
  .enum(['NOT_CONFIGURED', 'CONFIGURED'])
  .openapi('AppLaunchConfigurationStatus')

const AppLaunchStatusSchema = z
  .enum([
    'READY_FOR_CONFIGURATION',
    'CONFIGURATION_IN_PROGRESS',
    'CONFIGURATION_INVALID',
    'READY_FOR_LAUNCH',
    'VALIDATION_IN_PROGRESS',
    'LAUNCH_PENDING',
    'LAUNCH_IN_PROGRESS',
    'LAUNCHED',
    'PARTIALLY_LAUNCHED',
    'DELTA_LAUNCH_IN_PROGRESS',
    'DELTA_LAUNCH_FAILED',
    'LAUNCH_FAILED',
    'TERMINATE_IN_PROGRESS',
    'TERMINATE_FAILED',
    'TERMINATED',
  ])
  .openapi('AppLaunchStatus')

const AppLaunchStatusMessageSchema = z.string().openapi('AppLaunchStatusMessage')

const StackNameSchema = z.string().openapi('StackName')

const StackIdSchema = z.string().openapi('StackId')

const LaunchDetailsSchema = z
  .object({
    latestLaunchTime: TimestampSchema.exactOptional().openapi({
      description: 'The latest time that this application was launched successfully.',
    }),
    stackName: StackNameSchema.exactOptional().openapi({
      description: 'The name of the latest stack launched for this application.',
    }),
    stackId: StackIdSchema.exactOptional().openapi({
      description: 'The ID of the latest stack launched for this application.',
    }),
  })
  .openapi({ description: 'Details about the latest launch of an application.', required: [] })
  .openapi('LaunchDetails')

const TotalServerGroupsSchema = z.int().openapi('TotalServerGroups')

const TotalServersSchema = z.int().openapi('TotalServers')

const AppSummarySchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({
      description: 'The unique ID of the application.',
    }),
    importedAppId: ImportedAppIdSchema.exactOptional().openapi({
      description: 'The ID of the application.',
    }),
    name: AppNameSchema.exactOptional().openapi({ description: 'The name of the application.' }),
    description: AppDescriptionSchema.exactOptional().openapi({
      description: 'The description of the application.',
    }),
    status: AppStatusSchema.exactOptional().openapi({ description: 'Status of the application.' }),
    statusMessage: AppStatusMessageSchema.exactOptional().openapi({
      description: 'A message related to the status of the application',
    }),
    replicationConfigurationStatus: AppReplicationConfigurationStatusSchema.exactOptional().openapi(
      { description: 'Status of the replication configuration.' },
    ),
    replicationStatus: AppReplicationStatusSchema.exactOptional().openapi({
      description: 'The replication status of the application.',
    }),
    replicationStatusMessage: AppReplicationStatusMessageSchema.exactOptional().openapi({
      description: 'A message related to the replication status of the application.',
    }),
    latestReplicationTime: TimestampSchema.exactOptional().openapi({
      description: "The timestamp of the application's most recent successful replication.",
    }),
    launchConfigurationStatus: AppLaunchConfigurationStatusSchema.exactOptional().openapi({
      description: 'Status of the launch configuration.',
    }),
    launchStatus: AppLaunchStatusSchema.exactOptional().openapi({
      description: 'The launch status of the application.',
    }),
    launchStatusMessage: AppLaunchStatusMessageSchema.exactOptional().openapi({
      description: 'A message related to the launch status of the application.',
    }),
    launchDetails: LaunchDetailsSchema.exactOptional().openapi({
      description: 'Details about the latest launch of the application.',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: 'The creation time of the application.',
    }),
    lastModified: TimestampSchema.exactOptional().openapi({
      description: 'The last modified time of the application.',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        "The name of the service role in the customer's account used by Server Migration Service.",
    }),
    totalServerGroups: TotalServerGroupsSchema.exactOptional().openapi({
      description: 'The number of server groups present in the application.',
    }),
    totalServers: TotalServersSchema.exactOptional().openapi({
      description: 'The number of servers present in the application.',
    }),
  })
  .openapi({ description: 'Information about the application.', required: [] })
  .openapi('AppSummary')

const ServerGroupNameSchema = z.string().openapi('ServerGroupName')

const ServerListSchema = z.array(ServerSchema).openapi('ServerList')

const ServerGroupSchema = z
  .object({
    serverGroupId: ServerGroupIdSchema.exactOptional().openapi({
      description: 'The ID of a server group.',
    }),
    name: ServerGroupNameSchema.exactOptional().openapi({
      description: 'The name of a server group.',
    }),
    serverList: ServerListSchema.exactOptional().openapi({
      description: 'The servers that belong to a server group.',
    }),
  })
  .openapi({ description: 'Logical grouping of servers.', required: [] })
  .openapi('ServerGroup')

const ServerGroupsSchema = z.array(ServerGroupSchema).openapi('ServerGroups')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.exactOptional().openapi({ description: 'The tag key.' }),
    value: TagValueSchema.exactOptional().openapi({ description: 'The tag value.' }),
  })
  .openapi({ description: 'Key/value pair that can be assigned to an application.', required: [] })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const CreateAppResponseSchema = z
  .object({
    appSummary: AppSummarySchema.exactOptional().openapi({
      description: 'A summary description of the application.',
    }),
    serverGroups: ServerGroupsSchema.exactOptional().openapi({
      description: 'The server groups included in the application.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags associated with the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateAppResponse')

const ClientTokenSchema = z.string().openapi('ClientToken')

const CreateAppRequestSchema = z
  .object({
    name: AppNameSchema.exactOptional().openapi({
      description: 'The name of the new application.',
    }),
    description: AppDescriptionSchema.exactOptional().openapi({
      description: 'The description of the new application',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        "The name of the service role in the customer's account to be used by Server Migration Service.",
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        'A unique, case-sensitive identifier that you provide to ensure the idempotency of application creation.',
    }),
    serverGroups: ServerGroupsSchema.exactOptional().openapi({
      description: 'The server groups to include in the application.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags to be associated with the application.',
    }),
  })
  .openapi({ title: 'CreateAppRequest', required: [] })
  .openapi('CreateAppRequest')

const UnauthorizedOperationExceptionSchema = z.any().openapi('UnauthorizedOperationException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const MissingRequiredParameterExceptionSchema = z.any().openapi('MissingRequiredParameterException')

const InternalErrorSchema = z.any().openapi('InternalError')

const OperationNotPermittedExceptionSchema = z.any().openapi('OperationNotPermittedException')

const CreateReplicationJobResponseSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.exactOptional().openapi({
      description: 'The unique identifier of the replication job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateReplicationJobResponse')

const DescriptionSchema = z.string().openapi('Description')

const CreateReplicationJobRequestSchema = z
  .object({
    serverId: ServerIdSchema.openapi({ description: 'The ID of the server.' }),
    seedReplicationTime: TimestampSchema.openapi({ description: 'The seed replication time.' }),
    frequency: FrequencySchema.exactOptional().openapi({
      description: 'The time between consecutive replication runs, in hours.',
    }),
    runOnce: RunOnceSchema.exactOptional().openapi({
      description: 'Indicates whether to run the replication job one time.',
    }),
    licenseType: LicenseTypeSchema.exactOptional().openapi({
      description:
        'The license type to be used for the AMI created by a successful replication run.',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description: 'The name of the IAM role to be used by the Server Migration Service.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication job.',
    }),
    numberOfRecentAmisToKeep: NumberOfRecentAmisToKeepSchema.exactOptional().openapi({
      description:
        'The maximum number of SMS-created AMIs to retain. The oldest is deleted after the maximum number is reached and a new AMI is created.',
    }),
    encrypted: EncryptedSchema.exactOptional().openapi({
      description: 'Indicates whether the replication job produces encrypted AMIs.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description:
        "<p>The ID of the KMS key for replication jobs that produce encrypted AMIs. This value can be any of the following:</p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to the KMS key ID</p> </li> <li> <p>ARN referring to the KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the customer's default KMS key for Amazon EBS is used. </p>",
    }),
  })
  .openapi({ required: ['serverId', 'seedReplicationTime'], title: 'CreateReplicationJobRequest' })
  .openapi('CreateReplicationJobRequest')

const ServerCannotBeReplicatedExceptionSchema = z.any().openapi('ServerCannotBeReplicatedException')

const ReplicationJobAlreadyExistsExceptionSchema = z
  .any()
  .openapi('ReplicationJobAlreadyExistsException')

const NoConnectorsAvailableExceptionSchema = z.any().openapi('NoConnectorsAvailableException')

const TemporarilyUnavailableExceptionSchema = z.any().openapi('TemporarilyUnavailableException')

const DeleteAppResponseSchema = z.looseObject({}).openapi('DeleteAppResponse')

const ForceStopAppReplicationSchema = z.boolean().openapi('ForceStopAppReplication')

const ForceTerminateAppSchema = z.boolean().openapi('ForceTerminateApp')

const DeleteAppRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
    forceStopAppReplication: ForceStopAppReplicationSchema.exactOptional().openapi({
      description:
        'Indicates whether to stop all replication jobs corresponding to the servers in the application while deleting the application.',
    }),
    forceTerminateApp: ForceTerminateAppSchema.exactOptional().openapi({
      description:
        'Indicates whether to terminate the stack corresponding to the application while deleting the application.',
    }),
  })
  .openapi({ title: 'DeleteAppRequest', required: [] })
  .openapi('DeleteAppRequest')

const DeleteAppLaunchConfigurationResponseSchema = z
  .looseObject({})
  .openapi('DeleteAppLaunchConfigurationResponse')

const DeleteAppLaunchConfigurationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'DeleteAppLaunchConfigurationRequest', required: [] })
  .openapi('DeleteAppLaunchConfigurationRequest')

const DeleteAppReplicationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('DeleteAppReplicationConfigurationResponse')

const DeleteAppReplicationConfigurationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'DeleteAppReplicationConfigurationRequest', required: [] })
  .openapi('DeleteAppReplicationConfigurationRequest')

const DeleteAppValidationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('DeleteAppValidationConfigurationResponse')

const DeleteAppValidationConfigurationRequestSchema = z
  .object({
    appId: AppIdWithValidationSchema.openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ required: ['appId'], title: 'DeleteAppValidationConfigurationRequest' })
  .openapi('DeleteAppValidationConfigurationRequest')

const DeleteReplicationJobResponseSchema = z.looseObject({}).openapi('DeleteReplicationJobResponse')

const DeleteReplicationJobRequestSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.openapi({
      description: 'The ID of the replication job.',
    }),
  })
  .openapi({ required: ['replicationJobId'], title: 'DeleteReplicationJobRequest' })
  .openapi('DeleteReplicationJobRequest')

const ReplicationJobNotFoundExceptionSchema = z.any().openapi('ReplicationJobNotFoundException')

const DeleteServerCatalogResponseSchema = z.looseObject({}).openapi('DeleteServerCatalogResponse')

const DeleteServerCatalogRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteServerCatalogRequest' })
  .openapi('DeleteServerCatalogRequest')

const DisassociateConnectorResponseSchema = z
  .looseObject({})
  .openapi('DisassociateConnectorResponse')

const ConnectorIdSchema = z.string().openapi('ConnectorId')

const DisassociateConnectorRequestSchema = z
  .object({ connectorId: ConnectorIdSchema.openapi({ description: 'The ID of the connector.' }) })
  .openapi({ required: ['connectorId'], title: 'DisassociateConnectorRequest' })
  .openapi('DisassociateConnectorRequest')

const GenerateChangeSetResponseSchema = z
  .object({
    s3Location: S3LocationSchema.exactOptional().openapi({
      description: 'The location of the Amazon S3 object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GenerateChangeSetResponse')

const OutputFormatSchema = z.enum(['JSON', 'YAML']).openapi('OutputFormat')

const GenerateChangeSetRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({
      description: 'The ID of the application associated with the change set.',
    }),
    changesetFormat: OutputFormatSchema.exactOptional().openapi({
      description: 'The format for the change set.',
    }),
  })
  .openapi({ title: 'GenerateChangeSetRequest', required: [] })
  .openapi('GenerateChangeSetRequest')

const GenerateTemplateResponseSchema = z
  .object({
    s3Location: S3LocationSchema.exactOptional().openapi({
      description: 'The location of the Amazon S3 object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GenerateTemplateResponse')

const GenerateTemplateRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({
      description: 'The ID of the application associated with the CloudFormation template.',
    }),
    templateFormat: OutputFormatSchema.exactOptional().openapi({
      description: 'The format for generating the CloudFormation template.',
    }),
  })
  .openapi({ title: 'GenerateTemplateRequest', required: [] })
  .openapi('GenerateTemplateRequest')

const GetAppResponseSchema = z
  .object({
    appSummary: AppSummarySchema.exactOptional().openapi({
      description: 'Information about the application.',
    }),
    serverGroups: ServerGroupsSchema.exactOptional().openapi({
      description: 'The server groups that belong to the application.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags associated with the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAppResponse')

const GetAppRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'GetAppRequest', required: [] })
  .openapi('GetAppRequest')

const GetAppLaunchConfigurationResponseSchema: z.ZodType<GetAppLaunchConfigurationResponseType> = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        "The name of the service role in the customer's account that CloudFormation uses to launch the application.",
    }),
    autoLaunch: AutoLaunchSchema.exactOptional().openapi({
      description:
        'Indicates whether the application is configured to launch automatically after replication is complete.',
    }),
    serverGroupLaunchConfigurations: ServerGroupLaunchConfigurationsSchema.exactOptional().openapi({
      description: 'The launch configurations for server groups in this application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAppLaunchConfigurationResponse')

const GetAppLaunchConfigurationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'GetAppLaunchConfigurationRequest', required: [] })
  .openapi('GetAppLaunchConfigurationRequest')

const GetAppReplicationConfigurationResponseSchema: z.ZodType<GetAppReplicationConfigurationResponseType> =
  z
    .object({
      serverGroupReplicationConfigurations:
        ServerGroupReplicationConfigurationsSchema.exactOptional().openapi({
          description:
            'The replication configurations associated with server groups in this application.',
        }),
    })
    .openapi({ required: [] })
    .openapi('GetAppReplicationConfigurationResponse')

const GetAppReplicationConfigurationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'GetAppReplicationConfigurationRequest', required: [] })
  .openapi('GetAppReplicationConfigurationRequest')

const GetAppValidationConfigurationResponseSchema: z.ZodType<GetAppValidationConfigurationResponseType> =
  z
    .object({
      appValidationConfigurations: AppValidationConfigurationsSchema.exactOptional().openapi({
        description: 'The configuration for application validation.',
      }),
      serverGroupValidationConfigurations:
        ServerGroupValidationConfigurationsSchema.exactOptional().openapi({
          description: 'The configuration for instance validation.',
        }),
    })
    .openapi({ required: [] })
    .openapi('GetAppValidationConfigurationResponse')

const GetAppValidationConfigurationRequestSchema = z
  .object({
    appId: AppIdWithValidationSchema.openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ required: ['appId'], title: 'GetAppValidationConfigurationRequest' })
  .openapi('GetAppValidationConfigurationRequest')

const ValidationStatusSchema = z
  .enum(['READY_FOR_VALIDATION', 'PENDING', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('ValidationStatus')

const ValidationStatusMessageSchema = z.string().max(2500).openapi('ValidationStatusMessage')

const SSMOutputSchema = z
  .object({ s3Location: S3LocationSchema.exactOptional() })
  .openapi({ description: 'Contains the location of validation output.', required: [] })
  .openapi('SSMOutput')

const AppValidationOutputSchema = z
  .object({
    ssmOutput: SSMOutputSchema.exactOptional().openapi({
      description: 'Output from using SSM to validate the application.',
    }),
  })
  .openapi({ description: 'Output from validating an application.', required: [] })
  .openapi('AppValidationOutput')

const ServerValidationOutputSchema = z
  .object({ server: ServerSchema.exactOptional() })
  .openapi({ description: 'Contains output from validating an instance.', required: [] })
  .openapi('ServerValidationOutput')

const ValidationOutputSchema = z
  .object({
    validationId: ValidationIdSchema.exactOptional().openapi({
      description: 'The ID of the validation.',
    }),
    name: NonEmptyStringWithMaxLen255Schema.exactOptional().openapi({
      description: 'The name of the validation.',
    }),
    status: ValidationStatusSchema.exactOptional().openapi({
      description: 'The status of the validation.',
    }),
    statusMessage: ValidationStatusMessageSchema.exactOptional().openapi({
      description: 'The status message.',
    }),
    latestValidationTime: TimestampSchema.exactOptional().openapi({
      description: 'The latest time that the validation was performed.',
    }),
    appValidationOutput: AppValidationOutputSchema.exactOptional().openapi({
      description: 'The output from validating an application.',
    }),
    serverValidationOutput: ServerValidationOutputSchema.exactOptional().openapi({
      description: 'The output from validation an instance.',
    }),
  })
  .openapi({ description: 'Contains validation output.', required: [] })
  .openapi('ValidationOutput')

const ValidationOutputListSchema = z.array(ValidationOutputSchema).openapi('ValidationOutputList')

const GetAppValidationOutputResponseSchema = z
  .object({
    validationOutputList: ValidationOutputListSchema.exactOptional().openapi({
      description: 'The validation output.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAppValidationOutputResponse')

const GetAppValidationOutputRequestSchema = z
  .object({
    appId: AppIdWithValidationSchema.openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ required: ['appId'], title: 'GetAppValidationOutputRequest' })
  .openapi('GetAppValidationOutputRequest')

const ConnectorVersionSchema = z.string().openapi('ConnectorVersion')

const ConnectorStatusSchema = z.enum(['HEALTHY', 'UNHEALTHY']).openapi('ConnectorStatus')

const ConnectorCapabilitySchema = z
  .enum(['VSPHERE', 'SCVMM', 'HYPERV-MANAGER', 'SNAPSHOT_BATCHING', 'SMS_OPTIMIZED'])
  .openapi('ConnectorCapability')

const ConnectorCapabilityListSchema = z
  .array(ConnectorCapabilitySchema)
  .openapi('ConnectorCapabilityList')

const IpAddressSchema = z.string().openapi('IpAddress')

const MacAddressSchema = z.string().openapi('MacAddress')

const ConnectorSchema = z
  .object({
    connectorId: ConnectorIdSchema.exactOptional().openapi({
      description: 'The ID of the connector.',
    }),
    version: ConnectorVersionSchema.exactOptional().openapi({
      description: 'The connector version.',
    }),
    status: ConnectorStatusSchema.exactOptional().openapi({
      description: 'The status of the connector.',
    }),
    capabilityList: ConnectorCapabilityListSchema.exactOptional().openapi({
      description: 'The capabilities of the connector.',
    }),
    vmManagerName: VmManagerNameSchema.exactOptional().openapi({
      description: 'The name of the VM manager.',
    }),
    vmManagerType: VmManagerTypeSchema.exactOptional().openapi({
      description: 'The VM management product.',
    }),
    vmManagerId: VmManagerIdSchema.exactOptional().openapi({
      description: 'The ID of the VM manager.',
    }),
    ipAddress: IpAddressSchema.exactOptional().openapi({
      description: 'The IP address of the connector.',
    }),
    macAddress: MacAddressSchema.exactOptional().openapi({
      description: 'The MAC address of the connector.',
    }),
    associatedOn: TimestampSchema.exactOptional().openapi({
      description: 'The time the connector was associated.',
    }),
  })
  .openapi({ description: 'Represents a connector.', required: [] })
  .openapi('Connector')

const ConnectorListSchema = z.array(ConnectorSchema).openapi('ConnectorList')

const NextTokenSchema = z.string().openapi('NextToken')

const GetConnectorsResponseSchema = z
  .object({
    connectorList: ConnectorListSchema.exactOptional().openapi({
      description: 'Information about the registered connectors.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token required to retrieve the next set of results. This value is null when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectorsResponse')

const MaxResultsSchema = z.int().openapi('MaxResults')

const GetConnectorsRequestSchema = z
  .object({
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next set of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
    }),
  })
  .openapi({ title: 'GetConnectorsRequest', required: [] })
  .openapi('GetConnectorsRequest')

const AmiIdSchema = z.string().openapi('AmiId')

const ReplicationJobStateSchema = z
  .enum([
    'PENDING',
    'ACTIVE',
    'FAILED',
    'DELETING',
    'DELETED',
    'COMPLETED',
    'PAUSED_ON_FAILURE',
    'FAILING',
  ])
  .openapi('ReplicationJobState')

const ReplicationJobStatusMessageSchema = z.string().openapi('ReplicationJobStatusMessage')

const ReplicationRunIdSchema = z.string().openapi('ReplicationRunId')

const ReplicationRunStateSchema = z
  .enum(['PENDING', 'MISSED', 'ACTIVE', 'FAILED', 'COMPLETED', 'DELETING', 'DELETED'])
  .openapi('ReplicationRunState')

const ReplicationRunTypeSchema = z.enum(['ON_DEMAND', 'AUTOMATIC']).openapi('ReplicationRunType')

const ReplicationRunStageSchema = z.string().openapi('ReplicationRunStage')

const ReplicationRunStageProgressSchema = z.string().openapi('ReplicationRunStageProgress')

const ReplicationRunStageDetailsSchema = z
  .object({
    stage: ReplicationRunStageSchema.exactOptional().openapi({
      description: 'The current stage of a replication run.',
    }),
    stageProgress: ReplicationRunStageProgressSchema.exactOptional().openapi({
      description: 'The progress of the current stage of a replication run.',
    }),
  })
  .openapi({ description: 'Details of the current stage of a replication run.', required: [] })
  .openapi('ReplicationRunStageDetails')

const ReplicationRunStatusMessageSchema = z.string().openapi('ReplicationRunStatusMessage')

const ReplicationRunSchema = z
  .object({
    replicationRunId: ReplicationRunIdSchema.exactOptional().openapi({
      description: 'The ID of the replication run.',
    }),
    state: ReplicationRunStateSchema.exactOptional().openapi({
      description: 'The state of the replication run.',
    }),
    type: ReplicationRunTypeSchema.exactOptional().openapi({
      description: 'The type of replication run.',
    }),
    stageDetails: ReplicationRunStageDetailsSchema.exactOptional().openapi({
      description: 'Details about the current stage of the replication run.',
    }),
    statusMessage: ReplicationRunStatusMessageSchema.exactOptional().openapi({
      description: 'The description of the current status of the replication job.',
    }),
    amiId: AmiIdSchema.exactOptional().openapi({
      description: 'The ID of the Amazon Machine Image (AMI) from the replication run.',
    }),
    scheduledStartTime: TimestampSchema.exactOptional().openapi({
      description: 'The start time of the next replication run.',
    }),
    completedTime: TimestampSchema.exactOptional().openapi({
      description: 'The completion time of the last replication run.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication run.',
    }),
    encrypted: EncryptedSchema.exactOptional().openapi({
      description: 'Indicates whether the replication run should produce an encrypted AMI.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description:
        "<p>The ID of the KMS key for replication jobs that produce encrypted AMIs. This value can be any of the following:</p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to the KMS key ID</p> </li> <li> <p>ARN referring to the KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the customer's default KMS key for Amazon EBS is used. </p>",
    }),
  })
  .openapi({ description: 'Represents a replication run.', required: [] })
  .openapi('ReplicationRun')

const ReplicationRunListSchema = z.array(ReplicationRunSchema).openapi('ReplicationRunList')

const ReplicationJobSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.exactOptional().openapi({
      description: 'The ID of the replication job.',
    }),
    serverId: ServerIdSchema.exactOptional().openapi({ description: 'The ID of the server.' }),
    serverType: ServerTypeSchema.exactOptional().openapi({ description: 'The type of server.' }),
    vmServer: VmServerSchema.exactOptional().openapi({
      description: 'Information about the VM server.',
    }),
    seedReplicationTime: TimestampSchema.exactOptional().openapi({
      description: 'The seed replication time.',
    }),
    frequency: FrequencySchema.exactOptional().openapi({
      description: 'The time between consecutive replication runs, in hours.',
    }),
    runOnce: RunOnceSchema.exactOptional().openapi({
      description: 'Indicates whether to run the replication job one time.',
    }),
    nextReplicationRunStartTime: TimestampSchema.exactOptional().openapi({
      description: 'The start time of the next replication run.',
    }),
    licenseType: LicenseTypeSchema.exactOptional().openapi({
      description:
        'The license type to be used for the AMI created by a successful replication run.',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description: 'The name of the IAM role to be used by Server Migration Service.',
    }),
    latestAmiId: AmiIdSchema.exactOptional().openapi({
      description: 'The ID of the latest Amazon Machine Image (AMI).',
    }),
    state: ReplicationJobStateSchema.exactOptional().openapi({
      description: 'The state of the replication job.',
    }),
    statusMessage: ReplicationJobStatusMessageSchema.exactOptional().openapi({
      description: 'The description of the current status of the replication job.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication job.',
    }),
    numberOfRecentAmisToKeep: NumberOfRecentAmisToKeepSchema.exactOptional().openapi({
      description:
        "The number of recent AMIs to keep in the customer's account for a replication job. By default, the value is set to zero, meaning that all AMIs are kept.",
    }),
    encrypted: EncryptedSchema.exactOptional().openapi({
      description: 'Indicates whether the replication job should produce encrypted AMIs.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description:
        "<p>The ID of the KMS key for replication jobs that produce encrypted AMIs. This value can be any of the following: </p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to the KMS key ID</p> </li> <li> <p>ARN referring to the KMS key alias</p> </li> </ul> <p>If encrypted is enabled but a KMS key ID is not specified, the customer's default KMS key for Amazon EBS is used.</p>",
    }),
    replicationRunList: ReplicationRunListSchema.exactOptional().openapi({
      description: 'Information about the replication runs.',
    }),
  })
  .openapi({ description: 'Represents a replication job.', required: [] })
  .openapi('ReplicationJob')

const ReplicationJobListSchema = z.array(ReplicationJobSchema).openapi('ReplicationJobList')

const GetReplicationJobsResponseSchema = z
  .object({
    replicationJobList: ReplicationJobListSchema.exactOptional().openapi({
      description: 'Information about the replication jobs.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token required to retrieve the next set of results. This value is null when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetReplicationJobsResponse')

const GetReplicationJobsRequestSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.exactOptional().openapi({
      description: 'The ID of the replication job.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next set of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
    }),
  })
  .openapi({ title: 'GetReplicationJobsRequest', required: [] })
  .openapi('GetReplicationJobsRequest')

const GetReplicationRunsResponseSchema = z
  .object({
    replicationJob: ReplicationJobSchema.exactOptional().openapi({
      description: 'Information about the replication job.',
    }),
    replicationRunList: ReplicationRunListSchema.exactOptional().openapi({
      description: 'Information about the replication runs.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token required to retrieve the next set of results. This value is null when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetReplicationRunsResponse')

const GetReplicationRunsRequestSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.openapi({
      description: 'The ID of the replication job.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next set of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
    }),
  })
  .openapi({ required: ['replicationJobId'], title: 'GetReplicationRunsRequest' })
  .openapi('GetReplicationRunsRequest')

const ServerCatalogStatusSchema = z
  .enum(['NOT_IMPORTED', 'IMPORTING', 'AVAILABLE', 'DELETED', 'EXPIRED'])
  .openapi('ServerCatalogStatus')

const GetServersResponseSchema = z
  .object({
    lastModifiedOn: TimestampSchema.exactOptional().openapi({
      description: 'The time when the server was last modified.',
    }),
    serverCatalogStatus: ServerCatalogStatusSchema.exactOptional().openapi({
      description: 'The status of the server catalog.',
    }),
    serverList: ServerListSchema.exactOptional().openapi({
      description: 'Information about the servers.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token required to retrieve the next set of results. This value is null when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetServersResponse')

const VmServerAddressListSchema = z.array(VmServerAddressSchema).openapi('VmServerAddressList')

const GetServersRequestSchema = z
  .object({
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next set of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to return in a single call. The default value is 50. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
    }),
    vmServerAddressList: VmServerAddressListSchema.exactOptional().openapi({
      description: 'The server addresses.',
    }),
  })
  .openapi({ title: 'GetServersRequest', required: [] })
  .openapi('GetServersRequest')

const ImportAppCatalogResponseSchema = z.looseObject({}).openapi('ImportAppCatalogResponse')

const ImportAppCatalogRequestSchema = z
  .object({
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        'The name of the service role. If you omit this parameter, we create a service-linked role for Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy and trust policy</a> described in the <i>Migration Hub User Guide</i>.',
    }),
  })
  .openapi({ title: 'ImportAppCatalogRequest', required: [] })
  .openapi('ImportAppCatalogRequest')

const ImportServerCatalogResponseSchema = z.looseObject({}).openapi('ImportServerCatalogResponse')

const ImportServerCatalogRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ImportServerCatalogRequest' })
  .openapi('ImportServerCatalogRequest')

const LaunchAppResponseSchema = z.looseObject({}).openapi('LaunchAppResponse')

const LaunchAppRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'LaunchAppRequest', required: [] })
  .openapi('LaunchAppRequest')

const AppsSchema = z.array(AppSummarySchema).openapi('Apps')

const ListAppsResponseSchema = z
  .object({
    apps: AppsSchema.exactOptional().openapi({ description: 'The application summaries.' }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The token required to retrieve the next set of results. This value is null when there are no more results to return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAppsResponse')

const AppIdsSchema = z.array(AppIdSchema).openapi('AppIds')

const ListAppsRequestSchema = z
  .object({
    appIds: AppIdsSchema.exactOptional().openapi({ description: 'The unique application IDs.' }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token for the next set of results.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to return in a single call. The default value is 100. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. ',
    }),
  })
  .openapi({ title: 'ListAppsRequest', required: [] })
  .openapi('ListAppsRequest')

const NotifyAppValidationOutputResponseSchema = z
  .looseObject({})
  .openapi('NotifyAppValidationOutputResponse')

const NotificationContextSchema = z
  .object({
    validationId: ValidationIdSchema.exactOptional().openapi({
      description: 'The ID of the validation.',
    }),
    status: ValidationStatusSchema.exactOptional().openapi({
      description: 'The status of the validation.',
    }),
    statusMessage: ValidationStatusMessageSchema.exactOptional().openapi({
      description: 'The status message.',
    }),
  })
  .openapi({ description: 'Contains the status of validating an application.', required: [] })
  .openapi('NotificationContext')

const NotifyAppValidationOutputRequestSchema = z
  .object({
    appId: AppIdWithValidationSchema.openapi({ description: 'The ID of the application.' }),
    notificationContext: NotificationContextSchema.exactOptional().openapi({
      description: 'The notification information.',
    }),
  })
  .openapi({ required: ['appId'], title: 'NotifyAppValidationOutputRequest' })
  .openapi('NotifyAppValidationOutputRequest')

const PutAppLaunchConfigurationResponseSchema = z
  .looseObject({})
  .openapi('PutAppLaunchConfigurationResponse')

const PutAppLaunchConfigurationRequestSchema: z.ZodType<PutAppLaunchConfigurationRequestType> = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        "The name of service role in the customer's account that CloudFormation uses to launch the application.",
    }),
    autoLaunch: AutoLaunchSchema.exactOptional().openapi({
      description:
        'Indicates whether the application is configured to launch automatically after replication is complete.',
    }),
    serverGroupLaunchConfigurations: ServerGroupLaunchConfigurationsSchema.exactOptional().openapi({
      description:
        'Information about the launch configurations for server groups in the application.',
    }),
  })
  .openapi({ title: 'PutAppLaunchConfigurationRequest', required: [] })
  .openapi('PutAppLaunchConfigurationRequest')

const PutAppReplicationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('PutAppReplicationConfigurationResponse')

const PutAppReplicationConfigurationRequestSchema: z.ZodType<PutAppReplicationConfigurationRequestType> =
  z
    .object({
      appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
      serverGroupReplicationConfigurations:
        ServerGroupReplicationConfigurationsSchema.exactOptional().openapi({
          description:
            'Information about the replication configurations for server groups in the application.',
        }),
    })
    .openapi({ title: 'PutAppReplicationConfigurationRequest', required: [] })
    .openapi('PutAppReplicationConfigurationRequest')

const PutAppValidationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('PutAppValidationConfigurationResponse')

const PutAppValidationConfigurationRequestSchema: z.ZodType<PutAppValidationConfigurationRequestType> =
  z
    .object({
      appId: AppIdWithValidationSchema.openapi({ description: 'The ID of the application.' }),
      appValidationConfigurations: AppValidationConfigurationsSchema.exactOptional().openapi({
        description: 'The configuration for application validation.',
      }),
      serverGroupValidationConfigurations:
        ServerGroupValidationConfigurationsSchema.exactOptional().openapi({
          description: 'The configuration for instance validation.',
        }),
    })
    .openapi({ required: ['appId'], title: 'PutAppValidationConfigurationRequest' })
    .openapi('PutAppValidationConfigurationRequest')

const StartAppReplicationResponseSchema = z.looseObject({}).openapi('StartAppReplicationResponse')

const StartAppReplicationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'StartAppReplicationRequest', required: [] })
  .openapi('StartAppReplicationRequest')

const StartOnDemandAppReplicationResponseSchema = z
  .looseObject({})
  .openapi('StartOnDemandAppReplicationResponse')

const StartOnDemandAppReplicationRequestSchema = z
  .object({
    appId: AppIdSchema.openapi({ description: 'The ID of the application.' }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication run.',
    }),
  })
  .openapi({ required: ['appId'], title: 'StartOnDemandAppReplicationRequest' })
  .openapi('StartOnDemandAppReplicationRequest')

const StartOnDemandReplicationRunResponseSchema = z
  .object({
    replicationRunId: ReplicationRunIdSchema.exactOptional().openapi({
      description: 'The ID of the replication run.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartOnDemandReplicationRunResponse')

const StartOnDemandReplicationRunRequestSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.openapi({
      description: 'The ID of the replication job.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication run.',
    }),
  })
  .openapi({ required: ['replicationJobId'], title: 'StartOnDemandReplicationRunRequest' })
  .openapi('StartOnDemandReplicationRunRequest')

const ReplicationRunLimitExceededExceptionSchema = z
  .any()
  .openapi('ReplicationRunLimitExceededException')

const DryRunOperationExceptionSchema = z.any().openapi('DryRunOperationException')

const StopAppReplicationResponseSchema = z.looseObject({}).openapi('StopAppReplicationResponse')

const StopAppReplicationRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'StopAppReplicationRequest', required: [] })
  .openapi('StopAppReplicationRequest')

const TerminateAppResponseSchema = z.looseObject({}).openapi('TerminateAppResponse')

const TerminateAppRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
  })
  .openapi({ title: 'TerminateAppRequest', required: [] })
  .openapi('TerminateAppRequest')

const UpdateAppResponseSchema = z
  .object({
    appSummary: AppSummarySchema.exactOptional().openapi({
      description: 'A summary description of the application.',
    }),
    serverGroups: ServerGroupsSchema.exactOptional().openapi({
      description: 'The updated server groups in the application.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags associated with the application.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAppResponse')

const UpdateAppRequestSchema = z
  .object({
    appId: AppIdSchema.exactOptional().openapi({ description: 'The ID of the application.' }),
    name: AppNameSchema.exactOptional().openapi({
      description: 'The new name of the application.',
    }),
    description: AppDescriptionSchema.exactOptional().openapi({
      description: 'The new description of the application.',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description:
        "The name of the service role in the customer's account used by Server Migration Service.",
    }),
    serverGroups: ServerGroupsSchema.exactOptional().openapi({
      description: 'The server groups in the application to update.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags to associate with the application.',
    }),
  })
  .openapi({ title: 'UpdateAppRequest', required: [] })
  .openapi('UpdateAppRequest')

const UpdateReplicationJobResponseSchema = z.looseObject({}).openapi('UpdateReplicationJobResponse')

const UpdateReplicationJobRequestSchema = z
  .object({
    replicationJobId: ReplicationJobIdSchema.openapi({
      description: 'The ID of the replication job.',
    }),
    frequency: FrequencySchema.exactOptional().openapi({
      description: 'The time between consecutive replication runs, in hours.',
    }),
    nextReplicationRunStartTime: TimestampSchema.exactOptional().openapi({
      description: 'The start time of the next replication run.',
    }),
    licenseType: LicenseTypeSchema.exactOptional().openapi({
      description:
        'The license type to be used for the AMI created by a successful replication run.',
    }),
    roleName: RoleNameSchema.exactOptional().openapi({
      description: 'The name of the IAM role to be used by Server Migration Service.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the replication job.',
    }),
    numberOfRecentAmisToKeep: NumberOfRecentAmisToKeepSchema.exactOptional().openapi({
      description:
        'The maximum number of SMS-created AMIs to retain. The oldest is deleted after the maximum number is reached and a new AMI is created.',
    }),
    encrypted: EncryptedSchema.exactOptional().openapi({
      description:
        'When true, the replication job produces encrypted AMIs. For more information, <code>KmsKeyId</code>.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description:
        "<p>The ID of the KMS key for replication jobs that produce encrypted AMIs. This value can be any of the following:</p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to the KMS key ID</p> </li> <li> <p>ARN referring to the KMS key alias</p> </li> </ul> <p>If encrypted is enabled but a KMS key ID is not specified, the customer's default KMS key for Amazon EBS is used.</p>",
    }),
  })
  .openapi({ required: ['replicationJobId'], title: 'UpdateReplicationJobRequest' })
  .openapi('UpdateReplicationJobRequest')

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

export const postXAmzTargetAWSServerMigrationServiceV20161024CreateAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp',
  description:
    'Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.',
  operationId: 'CreateApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.CreateApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.CreateApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob',
    description:
      'Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).',
    operationId: 'CreateReplicationJob',
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
          .literal('AWSServerMigrationService_V2016_10_24.CreateReplicationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.CreateReplicationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateReplicationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateReplicationJobResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      484: {
        description: 'ServerCannotBeReplicatedException',
        content: { 'application/json': { schema: ServerCannotBeReplicatedExceptionSchema } },
      },
      485: {
        description: 'ReplicationJobAlreadyExistsException',
        content: { 'application/json': { schema: ReplicationJobAlreadyExistsExceptionSchema } },
      },
      486: {
        description: 'NoConnectorsAvailableException',
        content: { 'application/json': { schema: NoConnectorsAvailableExceptionSchema } },
      },
      487: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      488: {
        description: 'TemporarilyUnavailableException',
        content: { 'application/json': { schema: TemporarilyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp',
  description:
    'Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.',
  operationId: 'DeleteApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.DeleteApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.DeleteApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
    description: 'Deletes the launch configuration for the specified application.',
    operationId: 'DeleteAppLaunchConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteAppLaunchConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteAppLaunchConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
    description: 'Deletes the replication configuration for the specified application.',
    operationId: 'DeleteAppReplicationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteAppReplicationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteAppReplicationConfigurationResponseSchema },
        },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
    description: 'Deletes the validation configuration for the specified application.',
    operationId: 'DeleteAppValidationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteAppValidationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteAppValidationConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob',
    description:
      '<p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>',
    operationId: 'DeleteReplicationJob',
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
          .literal('AWSServerMigrationService_V2016_10_24.DeleteReplicationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteReplicationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteReplicationJobResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      484: {
        description: 'ReplicationJobNotFoundException',
        content: { 'application/json': { schema: ReplicationJobNotFoundExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog',
    description: 'Deletes all servers from your server catalog.',
    operationId: 'DeleteServerCatalog',
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
          .literal('AWSServerMigrationService_V2016_10_24.DeleteServerCatalog')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteServerCatalogRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteServerCatalogResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector',
    description:
      '<p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>',
    operationId: 'DisassociateConnector',
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
          .literal('AWSServerMigrationService_V2016_10_24.DisassociateConnector')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.DisassociateConnector'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DisassociateConnectorRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateConnectorResponseSchema } },
      },
      480: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      481: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet',
  description:
    'Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.',
  operationId: 'GenerateChangeSet',
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
        .literal('AWSServerMigrationService_V2016_10_24.GenerateChangeSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.GenerateChangeSet'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GenerateChangeSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateChangeSetResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate',
  description:
    'Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.',
  operationId: 'GenerateTemplate',
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
        .literal('AWSServerMigrationService_V2016_10_24.GenerateTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.GenerateTemplate'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GenerateTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateTemplateResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GetAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp',
  description: 'Retrieve information about the specified application.',
  operationId: 'GetApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.GetApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.GetApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration',
    description:
      'Retrieves the application launch configuration associated with the specified application.',
    operationId: 'GetAppLaunchConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAppLaunchConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAppLaunchConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
    description:
      'Retrieves the application replication configuration associated with the specified application.',
    operationId: 'GetAppReplicationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAppReplicationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAppReplicationConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
    description: 'Retrieves information about a configuration for validating an application.',
    operationId: 'GetAppValidationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAppValidationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAppValidationConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput',
    description: 'Retrieves output from validating an application.',
    operationId: 'GetAppValidationOutput',
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
          .literal('AWSServerMigrationService_V2016_10_24.GetAppValidationOutput')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetAppValidationOutputRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetAppValidationOutputResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors',
  description: 'Describes the connectors registered with the Server Migration Service.',
  operationId: 'GetConnectors',
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
        .literal('AWSServerMigrationService_V2016_10_24.GetConnectors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.GetConnectors'],
            },
          },
        }),
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
      content: { 'application/json': { schema: GetConnectorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectorsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs',
  description: 'Describes the specified replication job or all of your replication jobs.',
  operationId: 'GetReplicationJobs',
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
        .literal('AWSServerMigrationService_V2016_10_24.GetReplicationJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.GetReplicationJobs'],
            },
          },
        }),
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
      content: { 'application/json': { schema: GetReplicationJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReplicationJobsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns',
  description: 'Describes the replication runs for the specified replication job.',
  operationId: 'GetReplicationRuns',
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
        .literal('AWSServerMigrationService_V2016_10_24.GetReplicationRuns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.GetReplicationRuns'],
            },
          },
        }),
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
      content: { 'application/json': { schema: GetReplicationRunsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReplicationRunsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024GetServersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers',
  description:
    '<p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>',
  operationId: 'GetServers',
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
        .literal('AWSServerMigrationService_V2016_10_24.GetServers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.GetServers'] },
          },
        }),
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
    body: { content: { 'application/json': { schema: GetServersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog',
  description: 'Allows application import from Migration Hub.',
  operationId: 'ImportAppCatalog',
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
        .literal('AWSServerMigrationService_V2016_10_24.ImportAppCatalog')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.ImportAppCatalog'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportAppCatalogRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportAppCatalogResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog',
    description:
      '<p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>',
    operationId: 'ImportServerCatalog',
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
          .literal('AWSServerMigrationService_V2016_10_24.ImportServerCatalog')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.ImportServerCatalog'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ImportServerCatalogRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ImportServerCatalogResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      484: {
        description: 'NoConnectorsAvailableException',
        content: { 'application/json': { schema: NoConnectorsAvailableExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSServerMigrationServiceV20161024LaunchAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp',
  description: 'Launches the specified application as a stack in CloudFormation.',
  operationId: 'LaunchApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.LaunchApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.LaunchApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LaunchAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LaunchAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024ListAppsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps',
  description: 'Retrieves summaries for all applications.',
  operationId: 'ListApps',
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
        .literal('AWSServerMigrationService_V2016_10_24.ListApps')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.ListApps'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListAppsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAppsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput',
    description:
      'Provides information to Server Migration Service about whether application validation is successful.',
    operationId: 'NotifyAppValidationOutput',
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
          .literal('AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: NotifyAppValidationOutputRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: NotifyAppValidationOutputResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration',
    description: 'Creates or updates the launch configuration for the specified application.',
    operationId: 'PutAppLaunchConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutAppLaunchConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutAppLaunchConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
    description: 'Creates or updates the replication configuration for the specified application.',
    operationId: 'PutAppReplicationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutAppReplicationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutAppReplicationConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
    description: 'Creates or updates a validation configuration for the specified application.',
    operationId: 'PutAppValidationConfiguration',
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
          .literal('AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PutAppValidationConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutAppValidationConfigurationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication',
    description:
      'Starts replicating the specified application by creating replication jobs for each server in the application.',
    operationId: 'StartAppReplication',
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
          .literal('AWSServerMigrationService_V2016_10_24.StartAppReplication')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.StartAppReplication'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartAppReplicationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartAppReplicationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
    description: 'Starts an on-demand replication run for the specified application.',
    operationId: 'StartOnDemandAppReplication',
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
          .literal('AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartOnDemandAppReplicationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartOnDemandAppReplicationResponseSchema } },
      },
      480: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      483: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      484: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
    description:
      '<p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>',
    operationId: 'StartOnDemandReplicationRun',
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
          .literal('AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartOnDemandReplicationRunRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartOnDemandReplicationRunResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      483: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      484: {
        description: 'ReplicationRunLimitExceededException',
        content: { 'application/json': { schema: ReplicationRunLimitExceededExceptionSchema } },
      },
      485: {
        description: 'DryRunOperationException',
        content: { 'application/json': { schema: DryRunOperationExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication',
  description:
    'Stops replicating the specified application by deleting the replication job for each server in the application.',
  operationId: 'StopAppReplication',
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
        .literal('AWSServerMigrationService_V2016_10_24.StopAppReplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.StopAppReplication'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopAppReplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopAppReplicationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024TerminateAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp',
  description: 'Terminates the stack for the specified application.',
  operationId: 'TerminateApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.TerminateApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSServerMigrationService_V2016_10_24.TerminateApp'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateAppRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TerminateAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024UpdateAppRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp',
  description: 'Updates the specified application.',
  operationId: 'UpdateApp',
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
        .literal('AWSServerMigrationService_V2016_10_24.UpdateApp')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSServerMigrationService_V2016_10_24.UpdateApp'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAppResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'MissingRequiredParameterException',
      content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
    },
    483: {
      description: 'InternalError',
      content: { 'application/json': { schema: InternalErrorSchema } },
    },
    484: {
      description: 'OperationNotPermittedException',
      content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob',
    description: 'Updates the specified settings for the specified replication job.',
    operationId: 'UpdateReplicationJob',
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
          .literal('AWSServerMigrationService_V2016_10_24.UpdateReplicationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateReplicationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateReplicationJobResponseSchema } },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'MissingRequiredParameterException',
        content: { 'application/json': { schema: MissingRequiredParameterExceptionSchema } },
      },
      482: {
        description: 'OperationNotPermittedException',
        content: { 'application/json': { schema: OperationNotPermittedExceptionSchema } },
      },
      483: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
      484: {
        description: 'ServerCannotBeReplicatedException',
        content: { 'application/json': { schema: ServerCannotBeReplicatedExceptionSchema } },
      },
      485: {
        description: 'ReplicationJobNotFoundException',
        content: { 'application/json': { schema: ReplicationJobNotFoundExceptionSchema } },
      },
      486: {
        description: 'InternalError',
        content: { 'application/json': { schema: InternalErrorSchema } },
      },
      487: {
        description: 'TemporarilyUnavailableException',
        content: { 'application/json': { schema: TemporarilyUnavailableExceptionSchema } },
      },
    },
  })
