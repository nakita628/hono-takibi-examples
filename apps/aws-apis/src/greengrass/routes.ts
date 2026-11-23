import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const FunctionIsolationModeSchema = z
  .enum(['GreengrassContainer', 'NoContainer'])
  .openapi({
    description:
      'Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.',
  })
  .openapi('FunctionIsolationMode')

const IntegerSchema = z.int().openapi('Integer')

const FunctionRunAsConfigSchema = z
  .object({
    Gid: IntegerSchema.exactOptional().openapi({
      description: 'The group ID whose permissions are used to run a Lambda function.',
    }),
    Uid: IntegerSchema.exactOptional().openapi({
      description: 'The user ID whose permissions are used to run a Lambda function.',
    }),
  })
  .openapi({
    description:
      "Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.",
    required: [],
  })
  .openapi('FunctionRunAsConfig')

const FunctionDefaultExecutionConfigSchema = z
  .object({
    IsolationMode: FunctionIsolationModeSchema.exactOptional(),
    RunAs: FunctionRunAsConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Configuration information that specifies how a Lambda function runs. ',
    required: [],
  })
  .openapi('FunctionDefaultExecutionConfig')

const FunctionDefaultConfigSchema = z
  .object({ Execution: FunctionDefaultExecutionConfigSchema.exactOptional() })
  .openapi({
    description:
      'The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.',
    required: [],
  })
  .openapi('FunctionDefaultConfig')

const EncodingTypeSchema = z.enum(['binary', 'json']).openapi('EncodingType')

const BooleanSchema = z.boolean().openapi('Boolean')

const FunctionExecutionConfigSchema = z
  .object({
    IsolationMode: FunctionIsolationModeSchema.exactOptional(),
    RunAs: FunctionRunAsConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Configuration information that specifies how a Lambda function runs. ',
    required: [],
  })
  .openapi('FunctionExecutionConfig')

const PermissionSchema = z
  .enum(['ro', 'rw'])
  .openapi({ description: 'The type of permission a function has to access a resource.' })
  .openapi('Permission')

const ResourceAccessPolicySchema = z
  .object({
    Permission: PermissionSchema.exactOptional().openapi({
      description:
        "The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).",
    }),
    ResourceId: StringSchema.openapi({
      description:
        'The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)',
    }),
  })
  .openapi({
    required: ['ResourceId'],
    description: 'A policy used by the function to access a resource.',
  })
  .openapi('ResourceAccessPolicy')

const ListOfResourceAccessPolicySchema = z
  .array(ResourceAccessPolicySchema)
  .openapi('ListOfResourceAccessPolicy')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const FunctionConfigurationEnvironmentSchema = z
  .object({
    AccessSysfs: BooleanSchema.exactOptional().openapi({
      description:
        "If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.",
    }),
    Execution: FunctionExecutionConfigSchema.exactOptional().openapi({
      description: 'Configuration related to executing the Lambda function',
    }),
    ResourceAccessPolicies: ListOfResourceAccessPolicySchema.exactOptional().openapi({
      description:
        'A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.',
    }),
    Variables: MapOfStringSchema.exactOptional().openapi({
      description: "Environment variables for the Lambda function's configuration.",
    }),
  })
  .openapi({ description: 'The environment configuration of the function.', required: [] })
  .openapi('FunctionConfigurationEnvironment')

const FunctionConfigurationSchema = z
  .object({
    EncodingType: EncodingTypeSchema.exactOptional().openapi({
      description:
        "The expected encoding type of the input payload for the function. The default is ''json''.",
    }),
    Environment: FunctionConfigurationEnvironmentSchema.exactOptional().openapi({
      description: 'The environment configuration of the function.',
    }),
    ExecArgs: StringSchema.exactOptional().openapi({ description: 'The execution arguments.' }),
    Executable: StringSchema.exactOptional().openapi({
      description: 'The name of the function executable.',
    }),
    MemorySize: IntegerSchema.exactOptional().openapi({
      description:
        'The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.',
    }),
    Pinned: BooleanSchema.exactOptional().openapi({
      description:
        'True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.',
    }),
    Timeout: IntegerSchema.exactOptional().openapi({
      description:
        'The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.',
    }),
    FunctionRuntimeOverride: StringSchema.exactOptional().openapi({
      description:
        'The Lambda runtime supported by Greengrass which is to be used instead of the one specified in the Lambda function.',
    }),
  })
  .openapi({ description: 'The configuration of the Lambda function.', required: [] })
  .openapi('FunctionConfiguration')

const FunctionSchema = z
  .object({
    FunctionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the Lambda function.',
    }),
    FunctionConfiguration: FunctionConfigurationSchema.exactOptional().openapi({
      description: 'The configuration of the Lambda function.',
    }),
    Id: StringSchema.openapi({
      description:
        "A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.",
    }),
  })
  .openapi({ required: ['Id'], description: 'Information about a Lambda function.' })
  .openapi('Function')

const ListOfFunctionSchema = z.array(FunctionSchema).openapi('ListOfFunction')

const FunctionDefinitionVersionSchema = z
  .object({
    DefaultConfig: FunctionDefaultConfigSchema.exactOptional().openapi({
      description:
        'The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.',
    }),
    Functions: ListOfFunctionSchema.exactOptional().openapi({
      description: 'A list of Lambda functions in this function definition version.',
    }),
  })
  .openapi({ description: 'Information about a function definition version.', required: [] })
  .openapi('FunctionDefinitionVersion')

type GetFunctionDefinitionVersionResponseType = {
  Arn?: z.infer<typeof StringSchema>
  CreationTimestamp?: z.infer<typeof StringSchema>
  Definition?: z.infer<typeof FunctionDefinitionVersionSchema>
  Id?: z.infer<typeof StringSchema>
  NextToken?: z.infer<typeof StringSchema>
  Version?: z.infer<typeof StringSchema>
}

const TagsSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: 'The key-value pair for the resource tag.' })
  .openapi('Tags')

type CreateFunctionDefinitionRequestType = {
  InitialVersion?: z.infer<typeof FunctionDefinitionVersionSchema>
  Name?: z.infer<typeof StringSchema>
  tags?: z.infer<typeof TagsSchema>
}

const AssociateRoleToGroupResponseSchema = z
  .object({
    AssociatedAt: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the role ARN was associated with the group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateRoleToGroupResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const AssociateServiceRoleToAccountResponseSchema = z
  .object({
    AssociatedAt: StringSchema.exactOptional().openapi({
      description: 'The time when the service role was associated with the account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AssociateServiceRoleToAccountResponse')

const CreateConnectorDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectorDefinitionResponse')

const ConnectorSchema = z
  .object({
    ConnectorArn: StringSchema.openapi({ description: 'The ARN of the connector.' }),
    Id: StringSchema.openapi({
      description:
        'A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.',
    }),
    Parameters: MapOfStringSchema.exactOptional().openapi({
      description: 'The parameters or configuration that the connector uses.',
    }),
  })
  .openapi({
    required: ['ConnectorArn', 'Id'],
    description:
      'Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.',
  })
  .openapi('Connector')

const ListOfConnectorSchema = z.array(ConnectorSchema).openapi('ListOfConnector')

const CreateConnectorDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectorDefinitionVersionResponse')

const CreateCoreDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateCoreDefinitionResponse')

const CoreSchema = z
  .object({
    CertificateArn: StringSchema.openapi({
      description: 'The ARN of the certificate associated with the core.',
    }),
    Id: StringSchema.openapi({
      description:
        "A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.",
    }),
    SyncShadow: BooleanSchema.exactOptional().openapi({
      description: "If true, the core's local shadow is automatically synced with the cloud.",
    }),
    ThingArn: StringSchema.openapi({ description: 'The ARN of the thing which is the core.' }),
  })
  .openapi({
    required: ['ThingArn', 'Id', 'CertificateArn'],
    description: 'Information about a core.',
  })
  .openapi('Core')

const ListOfCoreSchema = z.array(CoreSchema).openapi('ListOfCore')

const CreateCoreDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateCoreDefinitionVersionResponse')

const CreateDeploymentResponseSchema = z
  .object({
    DeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the deployment.',
    }),
    DeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the deployment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDeploymentResponse')

const CreateDeviceDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDeviceDefinitionResponse')

const DeviceSchema = z
  .object({
    CertificateArn: StringSchema.openapi({
      description: 'The ARN of the certificate associated with the device.',
    }),
    Id: StringSchema.openapi({
      description:
        "A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.",
    }),
    SyncShadow: BooleanSchema.exactOptional().openapi({
      description:
        "If true, the device's local shadow will be automatically synced with the cloud.",
    }),
    ThingArn: StringSchema.openapi({ description: 'The thing ARN of the device.' }),
  })
  .openapi({
    required: ['ThingArn', 'Id', 'CertificateArn'],
    description: 'Information about a device.',
  })
  .openapi('Device')

const ListOfDeviceSchema = z.array(DeviceSchema).openapi('ListOfDevice')

const CreateDeviceDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDeviceDefinitionVersionResponse')

const CreateFunctionDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateFunctionDefinitionResponse')

const CreateFunctionDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateFunctionDefinitionVersionResponse')

const CreateGroupResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupResponse')

const CreateGroupCertificateAuthorityResponseSchema = z
  .object({
    GroupCertificateAuthorityArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the group certificate authority.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupCertificateAuthorityResponse')

const CreateGroupVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupVersionResponse')

const CreateLoggerDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLoggerDefinitionResponse')

const LoggerComponentSchema = z.enum(['GreengrassSystem', 'Lambda']).openapi('LoggerComponent')

const LoggerLevelSchema = z.enum(['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']).openapi('LoggerLevel')

const LoggerTypeSchema = z.enum(['FileSystem', 'AWSCloudWatch']).openapi('LoggerType')

const LoggerSchema = z
  .object({
    Component: LoggerComponentSchema.openapi({
      description: 'The component that will be subject to logging.',
    }),
    Id: StringSchema.openapi({
      description:
        "A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.",
    }),
    Level: LoggerLevelSchema.openapi({ description: 'The level of the logs.' }),
    Space: IntegerSchema.exactOptional().openapi({
      description:
        'The amount of file space, in KB, to use if the local file system is used for logging purposes.',
    }),
    Type: LoggerTypeSchema.openapi({ description: 'The type of log output which will be used.' }),
  })
  .openapi({
    required: ['Type', 'Level', 'Id', 'Component'],
    description: 'Information about a logger',
  })
  .openapi('Logger')

const ListOfLoggerSchema = z.array(LoggerSchema).openapi('ListOfLogger')

const CreateLoggerDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateLoggerDefinitionVersionResponse')

const CreateResourceDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateResourceDefinitionResponse')

const GroupOwnerSettingSchema = z
  .object({
    AutoAddGroupOwner: BooleanSchema.exactOptional().openapi({
      description:
        'If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.',
    }),
    GroupOwner: StringSchema.exactOptional().openapi({
      description:
        'The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.',
    }),
  })
  .openapi({ description: 'Group owner related settings for local resources.', required: [] })
  .openapi('GroupOwnerSetting')

const LocalDeviceResourceDataSchema = z
  .object({
    GroupOwnerSetting: GroupOwnerSettingSchema.exactOptional().openapi({
      description: 'Group/owner related settings for local resources.',
    }),
    SourcePath: StringSchema.exactOptional().openapi({
      description:
        "The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.",
    }),
  })
  .openapi({ description: 'Attributes that define a local device resource.', required: [] })
  .openapi('LocalDeviceResourceData')

const LocalVolumeResourceDataSchema = z
  .object({
    DestinationPath: StringSchema.exactOptional().openapi({
      description: 'The absolute local path of the resource inside the Lambda environment.',
    }),
    GroupOwnerSetting: GroupOwnerSettingSchema.exactOptional().openapi({
      description:
        'Allows you to configure additional group privileges for the Lambda process. This field is optional.',
    }),
    SourcePath: StringSchema.exactOptional().openapi({
      description:
        "The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.",
    }),
  })
  .openapi({ description: 'Attributes that define a local volume resource.', required: [] })
  .openapi('LocalVolumeResourceData')

const ResourceDownloadOwnerSettingSchema = z
  .object({
    GroupOwner: StringSchema.openapi({
      description:
        "The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.",
    }),
    GroupPermission: PermissionSchema.openapi({
      description:
        "The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).",
    }),
  })
  .openapi({
    required: ['GroupOwner', 'GroupPermission'],
    description: 'The owner setting for downloaded machine learning resources.',
  })
  .openapi('ResourceDownloadOwnerSetting')

const S3MachineLearningModelResourceDataSchema = z
  .object({
    DestinationPath: StringSchema.exactOptional().openapi({
      description: 'The absolute local path of the resource inside the Lambda environment.',
    }),
    OwnerSetting: ResourceDownloadOwnerSettingSchema.exactOptional(),
    S3Uri: StringSchema.exactOptional().openapi({
      description:
        'The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.',
    }),
  })
  .openapi({
    description: 'Attributes that define an Amazon S3 machine learning resource.',
    required: [],
  })
  .openapi('S3MachineLearningModelResourceData')

const SageMakerMachineLearningModelResourceDataSchema = z
  .object({
    DestinationPath: StringSchema.exactOptional().openapi({
      description: 'The absolute local path of the resource inside the Lambda environment.',
    }),
    OwnerSetting: ResourceDownloadOwnerSettingSchema.exactOptional(),
    SageMakerJobArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the Amazon SageMaker training job that represents the source model.',
    }),
  })
  .openapi({
    description: 'Attributes that define an Amazon SageMaker machine learning resource.',
    required: [],
  })
  .openapi('SageMakerMachineLearningModelResourceData')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const SecretsManagerSecretResourceDataSchema = z
  .object({
    ARN: StringSchema.exactOptional().openapi({
      description:
        "The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.",
    }),
    AdditionalStagingLabelsToDownload: ListOfStringSchema.exactOptional().openapi({
      description:
        "Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.",
    }),
  })
  .openapi({
    description:
      'Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.',
    required: [],
  })
  .openapi('SecretsManagerSecretResourceData')

const ResourceDataContainerSchema = z
  .object({
    LocalDeviceResourceData: LocalDeviceResourceDataSchema.exactOptional().openapi({
      description: 'Attributes that define the local device resource.',
    }),
    LocalVolumeResourceData: LocalVolumeResourceDataSchema.exactOptional().openapi({
      description: 'Attributes that define the local volume resource.',
    }),
    S3MachineLearningModelResourceData:
      S3MachineLearningModelResourceDataSchema.exactOptional().openapi({
        description: 'Attributes that define an Amazon S3 machine learning resource.',
      }),
    SageMakerMachineLearningModelResourceData:
      SageMakerMachineLearningModelResourceDataSchema.exactOptional().openapi({
        description: 'Attributes that define an Amazon SageMaker machine learning resource.',
      }),
    SecretsManagerSecretResourceData:
      SecretsManagerSecretResourceDataSchema.exactOptional().openapi({
        description:
          'Attributes that define a secret resource, which references a secret from AWS Secrets Manager.',
      }),
  })
  .openapi({
    description:
      "A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.",
    required: [],
  })
  .openapi('ResourceDataContainer')

const ResourceSchema = z
  .object({
    Id: StringSchema.openapi({
      description:
        "The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.",
    }),
    Name: StringSchema.openapi({
      description:
        "The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.",
    }),
    ResourceDataContainer: ResourceDataContainerSchema.openapi({
      description: 'A container of data for all resource types.',
    }),
  })
  .openapi({
    required: ['ResourceDataContainer', 'Id', 'Name'],
    description: 'Information about a resource.',
  })
  .openapi('Resource')

const ListOfResourceSchema = z.array(ResourceSchema).openapi('ListOfResource')

const CreateResourceDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateResourceDefinitionVersionResponse')

const CreateSoftwareUpdateJobResponseSchema = z
  .object({
    IotJobArn: StringSchema.exactOptional().openapi({
      description: 'The IoT Job ARN corresponding to this update.',
    }),
    IotJobId: StringSchema.exactOptional().openapi({
      description: 'The IoT Job Id corresponding to this update.',
    }),
    PlatformSoftwareVersion: StringSchema.exactOptional().openapi({
      description: 'The software version installed on the device or devices after the update.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSoftwareUpdateJobResponse')

const CreateSubscriptionDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSubscriptionDefinitionResponse')

const SubscriptionSchema = z
  .object({
    Id: StringSchema.openapi({
      description:
        "A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.",
    }),
    Source: StringSchema.openapi({
      description:
        "The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.",
    }),
    Subject: StringSchema.openapi({ description: 'The MQTT topic used to route the message.' }),
    Target: StringSchema.openapi({
      description:
        "Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.",
    }),
  })
  .openapi({
    required: ['Target', 'Id', 'Subject', 'Source'],
    description: 'Information about a subscription.',
  })
  .openapi('Subscription')

const ListOfSubscriptionSchema = z.array(SubscriptionSchema).openapi('ListOfSubscription')

const CreateSubscriptionDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSubscriptionDefinitionVersionResponse')

const DeleteConnectorDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteConnectorDefinitionResponse')

const DeleteCoreDefinitionResponseSchema = z.looseObject({}).openapi('DeleteCoreDefinitionResponse')

const DeleteDeviceDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteDeviceDefinitionResponse')

const DeleteFunctionDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteFunctionDefinitionResponse')

const DeleteGroupResponseSchema = z.looseObject({}).openapi('DeleteGroupResponse')

const DeleteLoggerDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteLoggerDefinitionResponse')

const DeleteResourceDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteResourceDefinitionResponse')

const DeleteSubscriptionDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteSubscriptionDefinitionResponse')

const DisassociateRoleFromGroupResponseSchema = z
  .object({
    DisassociatedAt: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the role was disassociated from the group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateRoleFromGroupResponse')

const DisassociateServiceRoleFromAccountResponseSchema = z
  .object({
    DisassociatedAt: StringSchema.exactOptional().openapi({
      description: 'The time when the service role was disassociated from the account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DisassociateServiceRoleFromAccountResponse')

const GetAssociatedRoleResponseSchema = z
  .object({
    AssociatedAt: StringSchema.exactOptional().openapi({
      description: 'The time when the role was associated with the group.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the role that is associated with the group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAssociatedRoleResponse')

const BulkDeploymentMetricsSchema = z
  .object({
    InvalidInputRecords: IntegerSchema.exactOptional().openapi({
      description:
        "The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.",
    }),
    RecordsProcessed: IntegerSchema.exactOptional().openapi({
      description:
        'The total number of group records from the input file that have been processed so far, or attempted.',
    }),
    RetryAttempts: IntegerSchema.exactOptional().openapi({
      description:
        "The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.",
    }),
  })
  .openapi({
    description: 'Relevant metrics on input records processed during bulk deployment.',
    required: [],
  })
  .openapi('BulkDeploymentMetrics')

const BulkDeploymentStatusSchema = z
  .enum(['Initializing', 'Running', 'Completed', 'Stopping', 'Stopped', 'Failed'])
  .openapi({ description: 'The current status of the bulk deployment.' })
  .openapi('BulkDeploymentStatus')

const ErrorDetailSchema = z
  .object({
    DetailedErrorCode: StringSchema.exactOptional().openapi({
      description: 'A detailed error code.',
    }),
    DetailedErrorMessage: StringSchema.exactOptional().openapi({
      description: 'A detailed error message.',
    }),
  })
  .openapi({ description: 'Details about the error.', required: [] })
  .openapi('ErrorDetail')

const ErrorDetailsSchema = z
  .array(ErrorDetailSchema)
  .openapi({ description: 'A list of error details.' })
  .openapi('ErrorDetails')

const GetBulkDeploymentStatusResponseSchema = z
  .object({
    BulkDeploymentMetrics: BulkDeploymentMetricsSchema.exactOptional().openapi({
      description: 'Relevant metrics on input records processed during bulk deployment.',
    }),
    BulkDeploymentStatus: BulkDeploymentStatusSchema.exactOptional().openapi({
      description: 'The status of the bulk deployment.',
    }),
    CreatedAt: StringSchema.exactOptional().openapi({
      description: 'The time, in ISO format, when the deployment was created.',
    }),
    ErrorDetails: ErrorDetailsSchema.exactOptional().openapi({ description: 'Error details' }),
    ErrorMessage: StringSchema.exactOptional().openapi({ description: 'Error message' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBulkDeploymentStatusResponse')

const ConnectivityInfoSchema = z
  .object({
    HostAddress: StringSchema.exactOptional().openapi({
      description: 'The endpoint for the Greengrass core. Can be an IP address or DNS.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the connectivity information.',
    }),
    Metadata: StringSchema.exactOptional().openapi({ description: 'Metadata for this endpoint.' }),
    PortNumber: IntegerSchema.exactOptional().openapi({
      description: 'The port of the Greengrass core. Usually 8883.',
    }),
  })
  .openapi({ description: "Information about a Greengrass core's connectivity.", required: [] })
  .openapi('ConnectivityInfo')

const ListOfConnectivityInfoSchema = z
  .array(ConnectivityInfoSchema)
  .openapi('ListOfConnectivityInfo')

const GetConnectivityInfoResponseSchema = z
  .object({
    ConnectivityInfo: ListOfConnectivityInfoSchema.exactOptional().openapi({
      description: 'Connectivity info list.',
    }),
    Message: StringSchema.exactOptional().openapi({
      xml: { name: 'message' },
      description: 'A message about the connectivity info request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectivityInfoResponse')

const GetConnectorDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectorDefinitionResponse')

const ConnectorDefinitionVersionSchema = z
  .object({
    Connectors: ListOfConnectorSchema.exactOptional().openapi({
      description:
        'A list of references to connectors in this version, with their corresponding configuration settings.',
    }),
  })
  .openapi({
    description:
      'Information about the connector definition version, which is a container for connectors.',
    required: [],
  })
  .openapi('ConnectorDefinitionVersion')

const GetConnectorDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the connector definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the connector definition version was created.',
    }),
    Definition: ConnectorDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the connector definition version.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the connector definition version.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the connector definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConnectorDefinitionVersionResponse')

const GetCoreDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreDefinitionResponse')

const CoreDefinitionVersionSchema = z
  .object({
    Cores: ListOfCoreSchema.exactOptional().openapi({
      description: 'A list of cores in the core definition version.',
    }),
  })
  .openapi({ description: 'Information about a core definition version.', required: [] })
  .openapi('CoreDefinitionVersion')

const GetCoreDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the core definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the core definition version was created.',
    }),
    Definition: CoreDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the core definition version.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the core definition version.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the core definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetCoreDefinitionVersionResponse')

const DeploymentTypeSchema = z
  .enum(['NewDeployment', 'Redeployment', 'ResetDeployment', 'ForceResetDeployment'])
  .openapi({
    description:
      "The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.",
  })
  .openapi('DeploymentType')

const GetDeploymentStatusResponseSchema = z
  .object({
    DeploymentStatus: StringSchema.exactOptional().openapi({
      description:
        "The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.",
    }),
    DeploymentType: DeploymentTypeSchema.exactOptional().openapi({
      description: 'The type of the deployment.',
    }),
    ErrorDetails: ErrorDetailsSchema.exactOptional().openapi({ description: 'Error details' }),
    ErrorMessage: StringSchema.exactOptional().openapi({ description: 'Error message' }),
    UpdatedAt: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the deployment status was updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentStatusResponse')

const GetDeviceDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceDefinitionResponse')

const DeviceDefinitionVersionSchema = z
  .object({
    Devices: ListOfDeviceSchema.exactOptional().openapi({
      description: 'A list of devices in the definition version.',
    }),
  })
  .openapi({ description: 'Information about a device definition version.', required: [] })
  .openapi('DeviceDefinitionVersion')

const GetDeviceDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the device definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the device definition version was created.',
    }),
    Definition: DeviceDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the device definition version.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the device definition version.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the device definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceDefinitionVersionResponse')

const GetFunctionDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetFunctionDefinitionResponse')

const GetFunctionDefinitionVersionResponseSchema: z.ZodType<GetFunctionDefinitionVersionResponseType> =
  z
    .object({
      Arn: StringSchema.exactOptional().openapi({
        description: 'The ARN of the function definition version.',
      }),
      CreationTimestamp: StringSchema.exactOptional().openapi({
        description:
          'The time, in milliseconds since the epoch, when the function definition version was created.',
      }),
      Definition: FunctionDefinitionVersionSchema.exactOptional().openapi({
        description: 'Information on the definition.',
      }),
      Id: StringSchema.exactOptional().openapi({
        description: 'The ID of the function definition version.',
      }),
      NextToken: StringSchema.exactOptional().openapi({
        description:
          "The token for the next set of results, or ''null'' if there are no additional results.",
      }),
      Version: StringSchema.exactOptional().openapi({
        description: 'The version of the function definition version.',
      }),
    })
    .openapi({ required: [] })
    .openapi('GetFunctionDefinitionVersionResponse')

const GetGroupResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetGroupResponse')

const GetGroupCertificateAuthorityResponseSchema = z
  .object({
    GroupCertificateAuthorityArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the certificate authority for the group.',
    }),
    GroupCertificateAuthorityId: StringSchema.exactOptional().openapi({
      description: 'The ID of the certificate authority for the group.',
    }),
    PemEncodedCertificate: StringSchema.exactOptional().openapi({
      description: 'The PEM encoded certificate for the group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetGroupCertificateAuthorityResponse')

const GetGroupCertificateConfigurationResponseSchema = z
  .object({
    CertificateAuthorityExpiryInMilliseconds: StringSchema.exactOptional().openapi({
      description:
        'The amount of time remaining before the certificate authority expires, in milliseconds.',
    }),
    CertificateExpiryInMilliseconds: StringSchema.exactOptional().openapi({
      description: 'The amount of time remaining before the certificate expires, in milliseconds.',
    }),
    GroupId: StringSchema.exactOptional().openapi({
      description: 'The ID of the group certificate configuration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetGroupCertificateConfigurationResponse')

const GroupVersionSchema = z
  .object({
    ConnectorDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the connector definition version for this group.',
    }),
    CoreDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the core definition version for this group.',
    }),
    DeviceDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the device definition version for this group.',
    }),
    FunctionDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the function definition version for this group.',
    }),
    LoggerDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the logger definition version for this group.',
    }),
    ResourceDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the resource definition version for this group.',
    }),
    SubscriptionDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the subscription definition version for this group.',
    }),
  })
  .openapi({ description: 'Information about a group version.', required: [] })
  .openapi('GroupVersion')

const GetGroupVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the group version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the group version was created.',
    }),
    Definition: GroupVersionSchema.exactOptional().openapi({
      description: 'Information about the group version definition.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the group that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the group version.' }),
  })
  .openapi({ required: [] })
  .openapi('GetGroupVersionResponse')

const GetLoggerDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLoggerDefinitionResponse')

const LoggerDefinitionVersionSchema = z
  .object({
    Loggers: ListOfLoggerSchema.exactOptional().openapi({ description: 'A list of loggers.' }),
  })
  .openapi({ description: 'Information about a logger definition version.', required: [] })
  .openapi('LoggerDefinitionVersion')

const GetLoggerDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the logger definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the logger definition version was created.',
    }),
    Definition: LoggerDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the logger definition version.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the logger definition version.',
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the logger definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetLoggerDefinitionVersionResponse')

const GetResourceDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetResourceDefinitionResponse')

const ResourceDefinitionVersionSchema = z
  .object({
    Resources: ListOfResourceSchema.exactOptional().openapi({
      description: 'A list of resources.',
    }),
  })
  .openapi({ description: 'Information about a resource definition version.', required: [] })
  .openapi('ResourceDefinitionVersion')

const GetResourceDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'Arn of the resource definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the resource definition version was created.',
    }),
    Definition: ResourceDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the definition.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the resource definition version.',
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the resource definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetResourceDefinitionVersionResponse')

const GetServiceRoleForAccountResponseSchema = z
  .object({
    AssociatedAt: StringSchema.exactOptional().openapi({
      description: 'The time when the service role was associated with the account.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the role which is associated with the account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetServiceRoleForAccountResponse')

const GetSubscriptionDefinitionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSubscriptionDefinitionResponse')

const SubscriptionDefinitionVersionSchema = z
  .object({
    Subscriptions: ListOfSubscriptionSchema.exactOptional().openapi({
      description: 'A list of subscriptions.',
    }),
  })
  .openapi({ description: 'Information about a subscription definition version.', required: [] })
  .openapi('SubscriptionDefinitionVersion')

const GetSubscriptionDefinitionVersionResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the subscription definition version.',
    }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the subscription definition version was created.',
    }),
    Definition: SubscriptionDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the subscription definition version.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the subscription definition version.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The version of the subscription definition version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSubscriptionDefinitionVersionResponse')

const ConfigurationSyncStatusSchema = z
  .enum(['InSync', 'OutOfSync'])
  .openapi('ConfigurationSyncStatus')

const TelemetrySchema = z.enum(['On', 'Off']).openapi('Telemetry')

const TelemetryConfigurationSchema = z
  .object({
    ConfigurationSyncStatus: ConfigurationSyncStatusSchema.exactOptional().openapi({
      description:
        'Synchronization status of the device reported configuration with the desired configuration.',
    }),
    Telemetry: TelemetrySchema.openapi({ description: 'Configure telemetry to be on or off.' }),
  })
  .openapi({
    required: ['Telemetry'],
    description: 'Configuration settings for running telemetry.',
  })
  .openapi('TelemetryConfiguration')

const RuntimeConfigurationSchema = z
  .object({
    TelemetryConfiguration: TelemetryConfigurationSchema.exactOptional().openapi({
      description: 'Configuration for telemetry service.',
    }),
  })
  .openapi({ description: 'Runtime configuration for a thing.', required: [] })
  .openapi('RuntimeConfiguration')

const GetThingRuntimeConfigurationResponseSchema = z
  .object({
    RuntimeConfiguration: RuntimeConfigurationSchema.exactOptional().openapi({
      description: 'Runtime configuration for a thing.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetThingRuntimeConfigurationResponse')

const BulkDeploymentResultSchema = z
  .object({
    CreatedAt: StringSchema.exactOptional().openapi({
      description: 'The time, in ISO format, when the deployment was created.',
    }),
    DeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the group deployment.',
    }),
    DeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the group deployment.',
    }),
    DeploymentStatus: StringSchema.exactOptional().openapi({
      description:
        "The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.",
    }),
    DeploymentType: DeploymentTypeSchema.exactOptional().openapi({
      description: 'The type of the deployment.',
    }),
    ErrorDetails: ErrorDetailsSchema.exactOptional().openapi({
      description: 'Details about the error.',
    }),
    ErrorMessage: StringSchema.exactOptional().openapi({
      description: 'The error message for a failed deployment',
    }),
    GroupArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the Greengrass group.',
    }),
  })
  .openapi({
    description: 'Information about an individual group deployment in a bulk deployment operation.',
    required: [],
  })
  .openapi('BulkDeploymentResult')

const BulkDeploymentResultsSchema = z
  .array(BulkDeploymentResultSchema)
  .openapi('BulkDeploymentResults')

const ListBulkDeploymentDetailedReportsResponseSchema = z
  .object({
    Deployments: BulkDeploymentResultsSchema.exactOptional().openapi({
      description: 'A list of the individual group deployments in the bulk deployment operation.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBulkDeploymentDetailedReportsResponse')

const BulkDeploymentSchema = z
  .object({
    BulkDeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the bulk deployment.',
    }),
    BulkDeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the bulk deployment.',
    }),
    CreatedAt: StringSchema.exactOptional().openapi({
      description: 'The time, in ISO format, when the deployment was created.',
    }),
  })
  .openapi({
    description:
      'Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.',
    required: [],
  })
  .openapi('BulkDeployment')

const BulkDeploymentsSchema = z.array(BulkDeploymentSchema).openapi('BulkDeployments')

const ListBulkDeploymentsResponseSchema = z
  .object({
    BulkDeployments: BulkDeploymentsSchema.exactOptional().openapi({
      description: 'A list of bulk deployments.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBulkDeploymentsResponse')

const VersionInformationSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the version.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the version was created.',
    }),
    Id: StringSchema.exactOptional().openapi({
      description: 'The ID of the parent definition that the version is associated with.',
    }),
    Version: StringSchema.exactOptional().openapi({ description: 'The ID of the version.' }),
  })
  .openapi({ description: 'Information about a version.', required: [] })
  .openapi('VersionInformation')

const ListOfVersionInformationSchema = z
  .array(VersionInformationSchema)
  .openapi('ListOfVersionInformation')

const ListConnectorDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListConnectorDefinitionVersionsResponse')

const DefinitionInformationSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the definition.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the definition was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the definition.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description:
        'The time, in milliseconds since the epoch, when the definition was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the definition.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'Tag(s) attached to the resource arn.',
    }),
  })
  .openapi({ description: 'Information about a definition.', required: [] })
  .openapi('DefinitionInformation')

const ListOfDefinitionInformationSchema = z
  .array(DefinitionInformationSchema)
  .openapi('ListOfDefinitionInformation')

const ListConnectorDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListConnectorDefinitionsResponse')

const ListCoreDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListCoreDefinitionVersionsResponse')

const ListCoreDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListCoreDefinitionsResponse')

const DeploymentSchema = z
  .object({
    CreatedAt: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the deployment was created.',
    }),
    DeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the deployment.',
    }),
    DeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the deployment.',
    }),
    DeploymentType: DeploymentTypeSchema.exactOptional().openapi({
      description: 'The type of the deployment.',
    }),
    GroupArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the group for this deployment.',
    }),
  })
  .openapi({ description: 'Information about a deployment.', required: [] })
  .openapi('Deployment')

const DeploymentsSchema = z.array(DeploymentSchema).openapi('Deployments')

const ListDeploymentsResponseSchema = z
  .object({
    Deployments: DeploymentsSchema.exactOptional().openapi({
      description: 'A list of deployments for the requested groups.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDeploymentsResponse')

const ListDeviceDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceDefinitionVersionsResponse')

const ListDeviceDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceDefinitionsResponse')

const ListFunctionDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionDefinitionVersionsResponse')

const ListFunctionDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFunctionDefinitionsResponse')

const GroupCertificateAuthorityPropertiesSchema = z
  .object({
    GroupCertificateAuthorityArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the certificate authority for the group.',
    }),
    GroupCertificateAuthorityId: StringSchema.exactOptional().openapi({
      description: 'The ID of the certificate authority for the group.',
    }),
  })
  .openapi({ description: 'Information about a certificate authority for a group.', required: [] })
  .openapi('GroupCertificateAuthorityProperties')

const ListOfGroupCertificateAuthorityPropertiesSchema = z
  .array(GroupCertificateAuthorityPropertiesSchema)
  .openapi('ListOfGroupCertificateAuthorityProperties')

const ListGroupCertificateAuthoritiesResponseSchema = z
  .object({
    GroupCertificateAuthorities:
      ListOfGroupCertificateAuthorityPropertiesSchema.exactOptional().openapi({
        description: 'A list of certificate authorities associated with the group.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListGroupCertificateAuthoritiesResponse')

const ListGroupVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListGroupVersionsResponse')

const GroupInformationSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({ description: 'The ARN of the group.' }),
    CreationTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the group was created.',
    }),
    Id: StringSchema.exactOptional().openapi({ description: 'The ID of the group.' }),
    LastUpdatedTimestamp: StringSchema.exactOptional().openapi({
      description: 'The time, in milliseconds since the epoch, when the group was last updated.',
    }),
    LatestVersion: StringSchema.exactOptional().openapi({
      description: 'The ID of the latest version associated with the group.',
    }),
    LatestVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the latest version associated with the group.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the group.' }),
  })
  .openapi({ description: 'Information about a group.', required: [] })
  .openapi('GroupInformation')

const ListOfGroupInformationSchema = z
  .array(GroupInformationSchema)
  .openapi('ListOfGroupInformation')

const ListGroupsResponseSchema = z
  .object({
    Groups: ListOfGroupInformationSchema.exactOptional().openapi({
      description: 'Information about a group.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsResponse')

const ListLoggerDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLoggerDefinitionVersionsResponse')

const ListLoggerDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListLoggerDefinitionsResponse')

const ListResourceDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListResourceDefinitionVersionsResponse')

const ListResourceDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListResourceDefinitionsResponse')

const ListSubscriptionDefinitionVersionsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
    Versions: ListOfVersionInformationSchema.exactOptional().openapi({
      description: 'Information about a version.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSubscriptionDefinitionVersionsResponse')

const ListSubscriptionDefinitionsResponseSchema = z
  .object({
    Definitions: ListOfDefinitionInformationSchema.exactOptional().openapi({
      description: 'Information about a definition.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      description:
        "The token for the next set of results, or ''null'' if there are no additional results.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSubscriptionDefinitionsResponse')

const ListTagsForResourceResponseSchema = z
  .object({ tags: TagsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResetDeploymentsResponseSchema = z
  .object({
    DeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the deployment.',
    }),
    DeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the deployment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ResetDeploymentsResponse')

const StartBulkDeploymentResponseSchema = z
  .object({
    BulkDeploymentArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the bulk deployment.',
    }),
    BulkDeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the bulk deployment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartBulkDeploymentResponse')

const StopBulkDeploymentResponseSchema = z.looseObject({}).openapi('StopBulkDeploymentResponse')

const UpdateConnectivityInfoResponseSchema = z
  .object({
    Message: StringSchema.exactOptional().openapi({
      xml: { name: 'message' },
      description: 'A message about the connectivity info update request.',
    }),
    Version: StringSchema.exactOptional().openapi({
      description: 'The new version of the connectivity info.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectivityInfoResponse')

const UpdateConnectorDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateConnectorDefinitionResponse')

const UpdateCoreDefinitionResponseSchema = z.looseObject({}).openapi('UpdateCoreDefinitionResponse')

const UpdateDeviceDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateDeviceDefinitionResponse')

const UpdateFunctionDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateFunctionDefinitionResponse')

const UpdateGroupResponseSchema = z.looseObject({}).openapi('UpdateGroupResponse')

const UpdateGroupCertificateConfigurationResponseSchema = z
  .object({
    CertificateAuthorityExpiryInMilliseconds: StringSchema.exactOptional().openapi({
      description:
        'The amount of time remaining before the certificate authority expires, in milliseconds.',
    }),
    CertificateExpiryInMilliseconds: StringSchema.exactOptional().openapi({
      description: 'The amount of time remaining before the certificate expires, in milliseconds.',
    }),
    GroupId: StringSchema.exactOptional().openapi({
      description: 'The ID of the group certificate configuration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateGroupCertificateConfigurationResponse')

const UpdateLoggerDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateLoggerDefinitionResponse')

const UpdateResourceDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateResourceDefinitionResponse')

const UpdateSubscriptionDefinitionResponseSchema = z
  .looseObject({})
  .openapi('UpdateSubscriptionDefinitionResponse')

const UpdateThingRuntimeConfigurationResponseSchema = z
  .looseObject({})
  .openapi('UpdateThingRuntimeConfigurationResponse')

const AssociateRoleToGroupRequestSchema = z
  .object({
    RoleArn: StringSchema.openapi({
      description:
        'The ARN of the role you wish to associate with this group. The existence of the role is not validated.',
    }),
  })
  .openapi({ required: ['RoleArn'], title: 'AssociateRoleToGroupRequest' })
  .openapi('AssociateRoleToGroupRequest')

const AssociateServiceRoleToAccountRequestSchema = z
  .object({
    RoleArn: StringSchema.openapi({
      description: 'The ARN of the service role you wish to associate with your account.',
    }),
  })
  .openapi({ required: ['RoleArn'], title: 'AssociateServiceRoleToAccountRequest' })
  .openapi('AssociateServiceRoleToAccountRequest')

const CreateConnectorDefinitionRequestSchema = z
  .object({
    InitialVersion: ConnectorDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the connector definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the connector definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateConnectorDefinitionRequest', required: [] })
  .openapi('CreateConnectorDefinitionRequest')

const CreateConnectorDefinitionVersionRequestSchema = z
  .object({
    Connectors: ListOfConnectorSchema.exactOptional().openapi({
      description:
        'A list of references to connectors in this version, with their corresponding configuration settings.',
    }),
  })
  .openapi({ title: 'CreateConnectorDefinitionVersionRequest', required: [] })
  .openapi('CreateConnectorDefinitionVersionRequest')

const CreateCoreDefinitionRequestSchema = z
  .object({
    InitialVersion: CoreDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the core definition.',
    }),
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the core definition.' }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({
    title: 'CreateCoreDefinitionRequest',
    description: 'Information needed to create a core definition.',
    required: [],
  })
  .openapi('CreateCoreDefinitionRequest')

const CreateCoreDefinitionVersionRequestSchema = z
  .object({
    Cores: ListOfCoreSchema.exactOptional().openapi({
      description: 'A list of cores in the core definition version.',
    }),
  })
  .openapi({ title: 'CreateCoreDefinitionVersionRequest', required: [] })
  .openapi('CreateCoreDefinitionVersionRequest')

const CreateDeploymentRequestSchema = z
  .object({
    DeploymentId: StringSchema.exactOptional().openapi({
      description: 'The ID of the deployment if you wish to redeploy a previous deployment.',
    }),
    DeploymentType: DeploymentTypeSchema.openapi({
      description:
        "The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.",
    }),
    GroupVersionId: StringSchema.exactOptional().openapi({
      description: 'The ID of the group version to be deployed.',
    }),
  })
  .openapi({ required: ['DeploymentType'], title: 'CreateDeploymentRequest' })
  .openapi('CreateDeploymentRequest')

const CreateDeviceDefinitionRequestSchema = z
  .object({
    InitialVersion: DeviceDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the device definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the device definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateDeviceDefinitionRequest', required: [] })
  .openapi('CreateDeviceDefinitionRequest')

const CreateDeviceDefinitionVersionRequestSchema = z
  .object({
    Devices: ListOfDeviceSchema.exactOptional().openapi({
      description: 'A list of devices in the definition version.',
    }),
  })
  .openapi({ title: 'CreateDeviceDefinitionVersionRequest', required: [] })
  .openapi('CreateDeviceDefinitionVersionRequest')

const CreateFunctionDefinitionRequestSchema: z.ZodType<CreateFunctionDefinitionRequestType> = z
  .object({
    InitialVersion: FunctionDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the function definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the function definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateFunctionDefinitionRequest', required: [] })
  .openapi('CreateFunctionDefinitionRequest')

const CreateFunctionDefinitionVersionRequestSchema = z
  .object({
    DefaultConfig: FunctionDefaultConfigSchema.exactOptional().openapi({
      description:
        'The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.',
    }),
    Functions: ListOfFunctionSchema.exactOptional().openapi({
      description: 'A list of Lambda functions in this function definition version.',
    }),
  })
  .openapi({
    title: 'CreateFunctionDefinitionVersionRequest',
    description: 'Information needed to create a function definition version.',
    required: [],
  })
  .openapi('CreateFunctionDefinitionVersionRequest')

const CreateGroupCertificateAuthorityRequestSchema = z
  .looseObject({})
  .openapi({ title: 'CreateGroupCertificateAuthorityRequest' })
  .openapi('CreateGroupCertificateAuthorityRequest')

const CreateGroupRequestSchema = z
  .object({
    InitialVersion: GroupVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the group.',
    }),
    Name: StringSchema.openapi({ description: 'The name of the group.' }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ required: ['Name'], title: 'CreateGroupRequest' })
  .openapi('CreateGroupRequest')

const CreateGroupVersionRequestSchema = z
  .object({
    ConnectorDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the connector definition version for this group.',
    }),
    CoreDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the core definition version for this group.',
    }),
    DeviceDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the device definition version for this group.',
    }),
    FunctionDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the function definition version for this group.',
    }),
    LoggerDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the logger definition version for this group.',
    }),
    ResourceDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the resource definition version for this group.',
    }),
    SubscriptionDefinitionVersionArn: StringSchema.exactOptional().openapi({
      description: 'The ARN of the subscription definition version for this group.',
    }),
  })
  .openapi({ title: 'CreateGroupVersionRequest', required: [] })
  .openapi('CreateGroupVersionRequest')

const CreateLoggerDefinitionRequestSchema = z
  .object({
    InitialVersion: LoggerDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the logger definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the logger definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateLoggerDefinitionRequest', required: [] })
  .openapi('CreateLoggerDefinitionRequest')

const CreateLoggerDefinitionVersionRequestSchema = z
  .object({
    Loggers: ListOfLoggerSchema.exactOptional().openapi({ description: 'A list of loggers.' }),
  })
  .openapi({ title: 'CreateLoggerDefinitionVersionRequest', required: [] })
  .openapi('CreateLoggerDefinitionVersionRequest')

const CreateResourceDefinitionRequestSchema = z
  .object({
    InitialVersion: ResourceDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the resource definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the resource definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateResourceDefinitionRequest', required: [] })
  .openapi('CreateResourceDefinitionRequest')

const CreateResourceDefinitionVersionRequestSchema = z
  .object({
    Resources: ListOfResourceSchema.exactOptional().openapi({
      description: 'A list of resources.',
    }),
  })
  .openapi({ title: 'CreateResourceDefinitionVersionRequest', required: [] })
  .openapi('CreateResourceDefinitionVersionRequest')

const S3UrlSignerRoleSchema = z
  .string()
  .openapi({
    description:
      'The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.',
  })
  .openapi('S3UrlSignerRole')

const SoftwareToUpdateSchema = z
  .enum(['core', 'ota_agent'])
  .openapi({ description: 'The piece of software on the Greengrass core that will be updated.' })
  .openapi('SoftwareToUpdate')

const UpdateAgentLogLevelSchema = z
  .enum(['NONE', 'TRACE', 'DEBUG', 'VERBOSE', 'INFO', 'WARN', 'ERROR', 'FATAL'])
  .openapi({
    description:
      'The minimum level of log statements that should be logged by the OTA Agent during an update.',
  })
  .openapi('UpdateAgentLogLevel')

const UpdateTargetsSchema = z
  .array(StringSchema)
  .openapi({
    description:
      'The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.',
  })
  .openapi('UpdateTargets')

const UpdateTargetsArchitectureSchema = z
  .enum(['armv6l', 'armv7l', 'x86_64', 'aarch64'])
  .openapi({ description: 'The architecture of the cores which are the targets of an update.' })
  .openapi('UpdateTargetsArchitecture')

const UpdateTargetsOperatingSystemSchema = z
  .enum(['ubuntu', 'raspbian', 'amazon_linux', 'openwrt'])
  .openapi({ description: 'The operating system of the cores which are the targets of an update.' })
  .openapi('UpdateTargetsOperatingSystem')

const CreateSoftwareUpdateJobRequestSchema = z
  .object({
    S3UrlSignerRole: S3UrlSignerRoleSchema,
    SoftwareToUpdate: SoftwareToUpdateSchema,
    UpdateAgentLogLevel: UpdateAgentLogLevelSchema.exactOptional(),
    UpdateTargets: UpdateTargetsSchema,
    UpdateTargetsArchitecture: UpdateTargetsArchitectureSchema,
    UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystemSchema,
  })
  .openapi({
    required: [
      'S3UrlSignerRole',
      'UpdateTargetsArchitecture',
      'SoftwareToUpdate',
      'UpdateTargets',
      'UpdateTargetsOperatingSystem',
    ],
    title: 'CreateSoftwareUpdateJobRequest',
  })
  .openapi('CreateSoftwareUpdateJobRequest')

const CreateSubscriptionDefinitionRequestSchema = z
  .object({
    InitialVersion: SubscriptionDefinitionVersionSchema.exactOptional().openapi({
      description: 'Information about the initial version of the subscription definition.',
    }),
    Name: StringSchema.exactOptional().openapi({
      description: 'The name of the subscription definition.',
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ title: 'CreateSubscriptionDefinitionRequest', required: [] })
  .openapi('CreateSubscriptionDefinitionRequest')

const CreateSubscriptionDefinitionVersionRequestSchema = z
  .object({
    Subscriptions: ListOfSubscriptionSchema.exactOptional().openapi({
      description: 'A list of subscriptions.',
    }),
  })
  .openapi({ title: 'CreateSubscriptionDefinitionVersionRequest', required: [] })
  .openapi('CreateSubscriptionDefinitionVersionRequest')

const DeleteConnectorDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteConnectorDefinitionRequest' })
  .openapi('DeleteConnectorDefinitionRequest')

const DeleteCoreDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteCoreDefinitionRequest' })
  .openapi('DeleteCoreDefinitionRequest')

const DeleteDeviceDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteDeviceDefinitionRequest' })
  .openapi('DeleteDeviceDefinitionRequest')

const DeleteFunctionDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteFunctionDefinitionRequest' })
  .openapi('DeleteFunctionDefinitionRequest')

const DeleteGroupRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteGroupRequest' })
  .openapi('DeleteGroupRequest')

const DeleteLoggerDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteLoggerDefinitionRequest' })
  .openapi('DeleteLoggerDefinitionRequest')

const DeleteResourceDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteResourceDefinitionRequest' })
  .openapi('DeleteResourceDefinitionRequest')

const DeleteSubscriptionDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteSubscriptionDefinitionRequest' })
  .openapi('DeleteSubscriptionDefinitionRequest')

const DisassociateRoleFromGroupRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateRoleFromGroupRequest' })
  .openapi('DisassociateRoleFromGroupRequest')

const DisassociateServiceRoleFromAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateServiceRoleFromAccountRequest' })
  .openapi('DisassociateServiceRoleFromAccountRequest')

const GetAssociatedRoleRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAssociatedRoleRequest' })
  .openapi('GetAssociatedRoleRequest')

const GetBulkDeploymentStatusRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetBulkDeploymentStatusRequest' })
  .openapi('GetBulkDeploymentStatusRequest')

const GetConnectivityInfoRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectivityInfoRequest' })
  .openapi('GetConnectivityInfoRequest')

const GetConnectorDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectorDefinitionRequest' })
  .openapi('GetConnectorDefinitionRequest')

const GetConnectorDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConnectorDefinitionVersionRequest' })
  .openapi('GetConnectorDefinitionVersionRequest')

const GetCoreDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreDefinitionRequest' })
  .openapi('GetCoreDefinitionRequest')

const GetCoreDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetCoreDefinitionVersionRequest' })
  .openapi('GetCoreDefinitionVersionRequest')

const GetDeploymentStatusRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDeploymentStatusRequest' })
  .openapi('GetDeploymentStatusRequest')

const GetDeviceDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDeviceDefinitionRequest' })
  .openapi('GetDeviceDefinitionRequest')

const GetDeviceDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDeviceDefinitionVersionRequest' })
  .openapi('GetDeviceDefinitionVersionRequest')

const GetFunctionDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetFunctionDefinitionRequest' })
  .openapi('GetFunctionDefinitionRequest')

const GetFunctionDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetFunctionDefinitionVersionRequest' })
  .openapi('GetFunctionDefinitionVersionRequest')

const GetGroupCertificateAuthorityRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetGroupCertificateAuthorityRequest' })
  .openapi('GetGroupCertificateAuthorityRequest')

const GetGroupCertificateConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetGroupCertificateConfigurationRequest' })
  .openapi('GetGroupCertificateConfigurationRequest')

const GetGroupRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetGroupRequest' })
  .openapi('GetGroupRequest')

const GetGroupVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetGroupVersionRequest' })
  .openapi('GetGroupVersionRequest')

const GetLoggerDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetLoggerDefinitionRequest' })
  .openapi('GetLoggerDefinitionRequest')

const GetLoggerDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetLoggerDefinitionVersionRequest' })
  .openapi('GetLoggerDefinitionVersionRequest')

const GetResourceDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetResourceDefinitionRequest' })
  .openapi('GetResourceDefinitionRequest')

const GetResourceDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetResourceDefinitionVersionRequest' })
  .openapi('GetResourceDefinitionVersionRequest')

const GetServiceRoleForAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetServiceRoleForAccountRequest' })
  .openapi('GetServiceRoleForAccountRequest')

const GetSubscriptionDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSubscriptionDefinitionRequest' })
  .openapi('GetSubscriptionDefinitionRequest')

const GetSubscriptionDefinitionVersionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSubscriptionDefinitionVersionRequest' })
  .openapi('GetSubscriptionDefinitionVersionRequest')

const GetThingRuntimeConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetThingRuntimeConfigurationRequest' })
  .openapi('GetThingRuntimeConfigurationRequest')

const ListBulkDeploymentDetailedReportsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListBulkDeploymentDetailedReportsRequest' })
  .openapi('ListBulkDeploymentDetailedReportsRequest')

const ListBulkDeploymentsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListBulkDeploymentsRequest' })
  .openapi('ListBulkDeploymentsRequest')

const ListConnectorDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListConnectorDefinitionVersionsRequest' })
  .openapi('ListConnectorDefinitionVersionsRequest')

const ListConnectorDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListConnectorDefinitionsRequest' })
  .openapi('ListConnectorDefinitionsRequest')

const ListCoreDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListCoreDefinitionVersionsRequest' })
  .openapi('ListCoreDefinitionVersionsRequest')

const ListCoreDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListCoreDefinitionsRequest' })
  .openapi('ListCoreDefinitionsRequest')

const ListDeploymentsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListDeploymentsRequest' })
  .openapi('ListDeploymentsRequest')

const ListDeviceDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListDeviceDefinitionVersionsRequest' })
  .openapi('ListDeviceDefinitionVersionsRequest')

const ListDeviceDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListDeviceDefinitionsRequest' })
  .openapi('ListDeviceDefinitionsRequest')

const ListFunctionDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListFunctionDefinitionVersionsRequest' })
  .openapi('ListFunctionDefinitionVersionsRequest')

const ListFunctionDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListFunctionDefinitionsRequest' })
  .openapi('ListFunctionDefinitionsRequest')

const ListGroupCertificateAuthoritiesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListGroupCertificateAuthoritiesRequest' })
  .openapi('ListGroupCertificateAuthoritiesRequest')

const ListGroupVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListGroupVersionsRequest' })
  .openapi('ListGroupVersionsRequest')

const ListGroupsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListGroupsRequest' })
  .openapi('ListGroupsRequest')

const ListLoggerDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListLoggerDefinitionVersionsRequest' })
  .openapi('ListLoggerDefinitionVersionsRequest')

const ListLoggerDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListLoggerDefinitionsRequest' })
  .openapi('ListLoggerDefinitionsRequest')

const ListResourceDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListResourceDefinitionVersionsRequest' })
  .openapi('ListResourceDefinitionVersionsRequest')

const ListResourceDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListResourceDefinitionsRequest' })
  .openapi('ListResourceDefinitionsRequest')

const ListSubscriptionDefinitionVersionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListSubscriptionDefinitionVersionsRequest' })
  .openapi('ListSubscriptionDefinitionVersionsRequest')

const ListSubscriptionDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListSubscriptionDefinitionsRequest' })
  .openapi('ListSubscriptionDefinitionsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResetDeploymentsRequestSchema = z
  .object({
    Force: BooleanSchema.exactOptional().openapi({
      description: 'If true, performs a best-effort only core reset.',
    }),
  })
  .openapi({
    title: 'ResetDeploymentsRequest',
    description: 'Information needed to reset deployments.',
    required: [],
  })
  .openapi('ResetDeploymentsRequest')

const StartBulkDeploymentRequestSchema = z
  .object({
    ExecutionRoleArn: StringSchema.openapi({
      description:
        "The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.",
    }),
    InputFileUri: StringSchema.openapi({
      description:
        "The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.",
    }),
    tags: TagsSchema.exactOptional().openapi({ description: 'Tag(s) to add to the new resource.' }),
  })
  .openapi({ required: ['ExecutionRoleArn', 'InputFileUri'], title: 'StartBulkDeploymentRequest' })
  .openapi('StartBulkDeploymentRequest')

const StopBulkDeploymentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'StopBulkDeploymentRequest' })
  .openapi('StopBulkDeploymentRequest')

const TagResourceRequestSchema = z
  .object({ tags: TagsSchema.exactOptional() })
  .openapi({
    title: 'TagResourceRequest',
    description: 'A map of the key-value pairs for the resource tag.',
    required: [],
  })
  .openapi('TagResourceRequest')

const TelemetryConfigurationUpdateSchema = z
  .object({
    Telemetry: TelemetrySchema.openapi({ description: 'Configure telemetry to be on or off.' }),
  })
  .openapi({
    required: ['Telemetry'],
    description: 'Configuration settings for running telemetry.',
  })
  .openapi('TelemetryConfigurationUpdate')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectivityInfoRequestSchema = z
  .object({
    ConnectivityInfo: ListOfConnectivityInfoSchema.exactOptional().openapi({
      description: 'A list of connectivity info.',
    }),
  })
  .openapi({
    title: 'UpdateConnectivityInfoRequest',
    description: 'Connectivity information.',
    required: [],
  })
  .openapi('UpdateConnectivityInfoRequest')

const UpdateConnectorDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateConnectorDefinitionRequest', required: [] })
  .openapi('UpdateConnectorDefinitionRequest')

const UpdateCoreDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateCoreDefinitionRequest', required: [] })
  .openapi('UpdateCoreDefinitionRequest')

const UpdateDeviceDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateDeviceDefinitionRequest', required: [] })
  .openapi('UpdateDeviceDefinitionRequest')

const UpdateFunctionDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateFunctionDefinitionRequest', required: [] })
  .openapi('UpdateFunctionDefinitionRequest')

const UpdateGroupCertificateConfigurationRequestSchema = z
  .object({
    CertificateExpiryInMilliseconds: StringSchema.exactOptional().openapi({
      description: 'The amount of time remaining before the certificate expires, in milliseconds.',
    }),
  })
  .openapi({ title: 'UpdateGroupCertificateConfigurationRequest', required: [] })
  .openapi('UpdateGroupCertificateConfigurationRequest')

const UpdateGroupRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateGroupRequest', required: [] })
  .openapi('UpdateGroupRequest')

const UpdateLoggerDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateLoggerDefinitionRequest', required: [] })
  .openapi('UpdateLoggerDefinitionRequest')

const UpdateResourceDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateResourceDefinitionRequest', required: [] })
  .openapi('UpdateResourceDefinitionRequest')

const UpdateSubscriptionDefinitionRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({ description: 'The name of the definition.' }),
  })
  .openapi({ title: 'UpdateSubscriptionDefinitionRequest', required: [] })
  .openapi('UpdateSubscriptionDefinitionRequest')

const UpdateThingRuntimeConfigurationRequestSchema = z
  .object({
    TelemetryConfiguration: TelemetryConfigurationUpdateSchema.exactOptional().openapi({
      description: 'Configuration for telemetry service.',
    }),
  })
  .openapi({ title: 'UpdateThingRuntimeConfigurationRequest', required: [] })
  .openapi('UpdateThingRuntimeConfigurationRequest')

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

export const getGreengrassGroupsGroupIdRoleRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/role',
  description: 'Retrieves the role associated with a particular group.',
  operationId: 'GetAssociatedRole',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssociatedRoleResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putGreengrassGroupsGroupIdRoleRoute = createRoute({
  method: 'put',
  path: '/greengrass/groups/{GroupId}/role',
  description:
    "Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.",
  operationId: 'AssociateRoleToGroup',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RoleArn: z
                .string()
                .openapi({
                  description:
                    'The ARN of the role you wish to associate with this group. The existence of the role is not validated.',
                }),
            })
            .openapi({ required: ['RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateRoleToGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteGreengrassGroupsGroupIdRoleRoute = createRoute({
  method: 'delete',
  path: '/greengrass/groups/{GroupId}/role',
  description: 'Disassociates the role from a group.',
  operationId: 'DisassociateRoleFromGroup',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateRoleFromGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassServiceroleRoute = createRoute({
  method: 'get',
  path: '/greengrass/servicerole',
  description: 'Retrieves the service role that is attached to your account.',
  operationId: 'GetServiceRoleForAccount',
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
      content: { 'application/json': { schema: GetServiceRoleForAccountResponseSchema } },
    },
    480: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putGreengrassServiceroleRoute = createRoute({
  method: 'put',
  path: '/greengrass/servicerole',
  description:
    "Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.",
  operationId: 'AssociateServiceRoleToAccount',
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
              RoleArn: z
                .string()
                .openapi({
                  description:
                    'The ARN of the service role you wish to associate with your account.',
                }),
            })
            .openapi({ required: ['RoleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateServiceRoleToAccountResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteGreengrassServiceroleRoute = createRoute({
  method: 'delete',
  path: '/greengrass/servicerole',
  description:
    'Disassociates the service role from your account. Without a service role, deployments will not work.',
  operationId: 'DisassociateServiceRoleFromAccount',
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
      content: { 'application/json': { schema: DisassociateServiceRoleFromAccountResponseSchema } },
    },
    480: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionConnectorsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/connectors',
  description: 'Retrieves a list of connector definitions.',
  operationId: 'ListConnectorDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectorDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionConnectorsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/connectors',
  description:
    "Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.",
  operationId: 'CreateConnectorDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Connectors: ListOfConnectorSchema.exactOptional().openapi({
                    description:
                      'A list of references to connectors in this version, with their corresponding configuration settings.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Information about the connector definition version, which is a container for connectors.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the connector definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateConnectorDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions',
  description:
    'Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.',
  operationId: 'ListConnectorDefinitionVersions',
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
      ConnectorDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectorDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the connector definition.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectorDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions',
  description: 'Creates a version of a connector definition which has already been defined.',
  operationId: 'CreateConnectorDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      ConnectorDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectorDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the connector definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Connectors: z
                .array(ConnectorSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of references to connectors in this version, with their corresponding configuration settings.',
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
      content: { 'application/json': { schema: CreateConnectorDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionCoresRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/cores',
  description: 'Retrieves a list of core definitions.',
  operationId: 'ListCoreDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCoreDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionCoresRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/cores',
  description:
    "Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.",
  operationId: 'CreateCoreDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Cores: ListOfCoreSchema.exactOptional().openapi({
                    description: 'A list of cores in the core definition version.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a core definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the core definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateCoreDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/cores/{CoreDefinitionId}/versions',
  description: 'Lists the versions of a core definition.',
  operationId: 'ListCoreDefinitionVersions',
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
      CoreDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'CoreDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the core definition.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCoreDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/cores/{CoreDefinitionId}/versions',
  description:
    'Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.',
  operationId: 'CreateCoreDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      CoreDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'CoreDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the core definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Cores: z
                .array(CoreSchema)
                .exactOptional()
                .openapi({ description: 'A list of cores in the core definition version.' }),
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
      content: { 'application/json': { schema: CreateCoreDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassGroupsGroupIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/deployments',
  description: 'Returns a history of deployments for the group.',
  operationId: 'ListDeployments',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeploymentsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassGroupsGroupIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/greengrass/groups/{GroupId}/deployments',
  description:
    "Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.",
  operationId: 'CreateDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeploymentId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the deployment if you wish to redeploy a previous deployment.',
                }),
              DeploymentType: z
                .enum(['NewDeployment', 'Redeployment', 'ResetDeployment', 'ForceResetDeployment'])
                .openapi({
                  description:
                    "The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.",
                }),
              GroupVersionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the group version to be deployed.' }),
            })
            .openapi({ required: ['DeploymentType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionDevicesRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/devices',
  description: 'Retrieves a list of device definitions.',
  operationId: 'ListDeviceDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionDevicesRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/devices',
  description:
    "Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.",
  operationId: 'CreateDeviceDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Devices: ListOfDeviceSchema.exactOptional().openapi({
                    description: 'A list of devices in the definition version.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a device definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the device definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateDeviceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/devices/{DeviceDefinitionId}/versions',
  description: 'Lists the versions of a device definition.',
  operationId: 'ListDeviceDefinitionVersions',
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
      DeviceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'DeviceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the device definition.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/devices/{DeviceDefinitionId}/versions',
  description: 'Creates a version of a device definition that has already been defined.',
  operationId: 'CreateDeviceDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      DeviceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'DeviceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the device definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Devices: z
                .array(DeviceSchema)
                .exactOptional()
                .openapi({ description: 'A list of devices in the definition version.' }),
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
      content: { 'application/json': { schema: CreateDeviceDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionFunctionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/functions',
  description: 'Retrieves a list of Lambda function definitions.',
  operationId: 'ListFunctionDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionFunctionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/functions',
  description:
    "Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.",
  operationId: 'CreateFunctionDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  DefaultConfig: FunctionDefaultConfigSchema.exactOptional().openapi({
                    description:
                      'The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.',
                  }),
                  Functions: ListOfFunctionSchema.exactOptional().openapi({
                    description: 'A list of Lambda functions in this function definition version.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a function definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the function definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateFunctionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/functions/{FunctionDefinitionId}/versions',
  description: 'Lists the versions of a Lambda function definition.',
  operationId: 'ListFunctionDefinitionVersions',
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
      FunctionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'FunctionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the Lambda function definition.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFunctionDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/functions/{FunctionDefinitionId}/versions',
  description: 'Creates a version of a Lambda function definition that has already been defined.',
  operationId: 'CreateFunctionDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      FunctionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'FunctionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the Lambda function definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DefaultConfig: z
                .object({ Execution: FunctionDefaultExecutionConfigSchema.exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.',
                  required: [],
                }),
              Functions: z
                .array(FunctionSchema)
                .exactOptional()
                .openapi({
                  description: 'A list of Lambda functions in this function definition version.',
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
      content: { 'application/json': { schema: CreateFunctionDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassGroupsRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups',
  description: 'Retrieves a list of groups.',
  operationId: 'ListGroups',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
  },
})

export const postGreengrassGroupsRoute = createRoute({
  method: 'post',
  path: '/greengrass/groups',
  description:
    "Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.",
  operationId: 'CreateGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  ConnectorDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the connector definition version for this group.',
                  }),
                  CoreDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the core definition version for this group.',
                  }),
                  DeviceDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the device definition version for this group.',
                  }),
                  FunctionDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the function definition version for this group.',
                  }),
                  LoggerDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the logger definition version for this group.',
                  }),
                  ResourceDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the resource definition version for this group.',
                  }),
                  SubscriptionDefinitionVersionArn: StringSchema.exactOptional().openapi({
                    description: 'The ARN of the subscription definition version for this group.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Information about a group version.', required: [] }),
              Name: z.string().openapi({ description: 'The name of the group.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassGroupsGroupIdCertificateauthoritiesRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/certificateauthorities',
  description: 'Retrieves the current CAs for a group.',
  operationId: 'ListGroupCertificateAuthorities',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupCertificateAuthoritiesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGreengrassGroupsGroupIdCertificateauthoritiesRoute = createRoute({
  method: 'post',
  path: '/greengrass/groups/{GroupId}/certificateauthorities',
  description:
    'Creates a CA for the group. If a CA already exists, it will rotate the existing CA.',
  operationId: 'CreateGroupCertificateAuthority',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupCertificateAuthorityResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassGroupsGroupIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/versions',
  description: 'Lists the versions of a group.',
  operationId: 'ListGroupVersions',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroupVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassGroupsGroupIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/groups/{GroupId}/versions',
  description: 'Creates a version of a group which has already been defined.',
  operationId: 'CreateGroupVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConnectorDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the connector definition version for this group.',
                }),
              CoreDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ARN of the core definition version for this group.' }),
              DeviceDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the device definition version for this group.',
                }),
              FunctionDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the function definition version for this group.',
                }),
              LoggerDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the logger definition version for this group.',
                }),
              ResourceDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the resource definition version for this group.',
                }),
              SubscriptionDefinitionVersionArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The ARN of the subscription definition version for this group.',
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
      content: { 'application/json': { schema: CreateGroupVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionLoggersRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/loggers',
  description: 'Retrieves a list of logger definitions.',
  operationId: 'ListLoggerDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLoggerDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionLoggersRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/loggers',
  description:
    "Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.",
  operationId: 'CreateLoggerDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Loggers: ListOfLoggerSchema.exactOptional().openapi({
                    description: 'A list of loggers.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a logger definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the logger definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateLoggerDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions',
  description: 'Lists the versions of a logger definition.',
  operationId: 'ListLoggerDefinitionVersions',
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
      LoggerDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'LoggerDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the logger definition.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLoggerDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions',
  description: 'Creates a version of a logger definition that has already been defined.',
  operationId: 'CreateLoggerDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      LoggerDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'LoggerDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the logger definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Loggers: z
                .array(LoggerSchema)
                .exactOptional()
                .openapi({ description: 'A list of loggers.' }),
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
      content: { 'application/json': { schema: CreateLoggerDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionResourcesRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/resources',
  description: 'Retrieves a list of resource definitions.',
  operationId: 'ListResourceDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionResourcesRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/resources',
  description:
    "Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.",
  operationId: 'CreateResourceDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Resources: ListOfResourceSchema.exactOptional().openapi({
                    description: 'A list of resources.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a resource definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the resource definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateResourceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/resources/{ResourceDefinitionId}/versions',
  description: 'Lists the versions of a resource definition.',
  operationId: 'ListResourceDefinitionVersions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      ResourceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ResourceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the resource definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceDefinitionVersionsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/resources/{ResourceDefinitionId}/versions',
  description: 'Creates a version of a resource definition that has already been defined.',
  operationId: 'CreateResourceDefinitionVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      ResourceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ResourceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the resource definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Resources: z
                .array(ResourceSchema)
                .exactOptional()
                .openapi({ description: 'A list of resources.' }),
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
      content: { 'application/json': { schema: CreateResourceDefinitionVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassUpdatesRoute = createRoute({
  method: 'post',
  path: '/greengrass/updates',
  description:
    'Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.',
  operationId: 'CreateSoftwareUpdateJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              S3UrlSignerRole: z
                .string()
                .openapi({
                  description:
                    'The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.',
                }),
              SoftwareToUpdate: z
                .enum(['core', 'ota_agent'])
                .openapi({
                  description: 'The piece of software on the Greengrass core that will be updated.',
                }),
              UpdateAgentLogLevel: z
                .enum(['NONE', 'TRACE', 'DEBUG', 'VERBOSE', 'INFO', 'WARN', 'ERROR', 'FATAL'])
                .exactOptional()
                .openapi({
                  description:
                    'The minimum level of log statements that should be logged by the OTA Agent during an update.',
                }),
              UpdateTargets: z
                .array(StringSchema)
                .openapi({
                  description:
                    'The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.',
                }),
              UpdateTargetsArchitecture: z
                .enum(['armv6l', 'armv7l', 'x86_64', 'aarch64'])
                .openapi({
                  description: 'The architecture of the cores which are the targets of an update.',
                }),
              UpdateTargetsOperatingSystem: z
                .enum(['ubuntu', 'raspbian', 'amazon_linux', 'openwrt'])
                .openapi({
                  description:
                    'The operating system of the cores which are the targets of an update.',
                }),
            })
            .openapi({
              required: [
                'S3UrlSignerRole',
                'SoftwareToUpdate',
                'UpdateTargets',
                'UpdateTargetsArchitecture',
                'UpdateTargetsOperatingSystem',
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
      content: { 'application/json': { schema: CreateSoftwareUpdateJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/subscriptions',
  description: 'Retrieves a list of subscription definitions.',
  operationId: 'ListSubscriptionDefinitions',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSubscriptionDefinitionsResponseSchema } },
    },
  },
})

export const postGreengrassDefinitionSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/greengrass/definition/subscriptions',
  description:
    "Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.",
  operationId: 'CreateSubscriptionDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              InitialVersion: z
                .object({
                  Subscriptions: ListOfSubscriptionSchema.exactOptional().openapi({
                    description: 'A list of subscriptions.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about a subscription definition version.',
                  required: [],
                }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the subscription definition.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
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
      content: { 'application/json': { schema: CreateSubscriptionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions',
    description: 'Lists the versions of a subscription definition.',
    operationId: 'ListSubscriptionDefinitionVersions',
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
              required: false,
              description: 'The maximum number of results to be returned per request.',
              schema: { type: 'string' },
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        SubscriptionDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'SubscriptionDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the subscription definition.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListSubscriptionDefinitionVersionsResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const postGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute =
  createRoute({
    method: 'post',
    path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions',
    description: 'Creates a version of a subscription definition which has already been defined.',
    operationId: 'CreateSubscriptionDefinitionVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amzn-Client-Token': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'X-Amzn-Client-Token',
              in: 'header',
              required: false,
              description: 'A client token used to correlate requests and responses.',
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        SubscriptionDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'SubscriptionDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the subscription definition.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Subscriptions: z
                  .array(SubscriptionSchema)
                  .exactOptional()
                  .openapi({ description: 'A list of subscriptions.' }),
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
          'application/json': { schema: CreateSubscriptionDefinitionVersionResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassDefinitionConnectorsConnectorDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
  description: 'Retrieves information about a connector definition.',
  operationId: 'GetConnectorDefinition',
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
      ConnectorDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectorDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the connector definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectorDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionConnectorsConnectorDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
  description: 'Updates a connector definition.',
  operationId: 'UpdateConnectorDefinition',
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
      ConnectorDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectorDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the connector definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateConnectorDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionConnectorsConnectorDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/connectors/{ConnectorDefinitionId}',
  description: 'Deletes a connector definition.',
  operationId: 'DeleteConnectorDefinition',
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
      ConnectorDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ConnectorDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the connector definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectorDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionCoresCoreDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/cores/{CoreDefinitionId}',
  description: 'Retrieves information about a core definition version.',
  operationId: 'GetCoreDefinition',
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
      CoreDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'CoreDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the core definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionCoresCoreDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/cores/{CoreDefinitionId}',
  description: 'Updates a core definition.',
  operationId: 'UpdateCoreDefinition',
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
      CoreDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'CoreDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the core definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateCoreDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionCoresCoreDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/cores/{CoreDefinitionId}',
  description: 'Deletes a core definition.',
  operationId: 'DeleteCoreDefinition',
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
      CoreDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'CoreDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the core definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCoreDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionDevicesDeviceDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/devices/{DeviceDefinitionId}',
  description: 'Retrieves information about a device definition.',
  operationId: 'GetDeviceDefinition',
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
      DeviceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'DeviceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the device definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionDevicesDeviceDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/devices/{DeviceDefinitionId}',
  description: 'Updates a device definition.',
  operationId: 'UpdateDeviceDefinition',
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
      DeviceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'DeviceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the device definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateDeviceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionDevicesDeviceDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/devices/{DeviceDefinitionId}',
  description: 'Deletes a device definition.',
  operationId: 'DeleteDeviceDefinition',
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
      DeviceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'DeviceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the device definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeviceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionFunctionsFunctionDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/functions/{FunctionDefinitionId}',
  description:
    'Retrieves information about a Lambda function definition, including its creation time and latest version.',
  operationId: 'GetFunctionDefinition',
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
      FunctionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'FunctionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the Lambda function definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFunctionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionFunctionsFunctionDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/functions/{FunctionDefinitionId}',
  description: 'Updates a Lambda function definition.',
  operationId: 'UpdateFunctionDefinition',
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
      FunctionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'FunctionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the Lambda function definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateFunctionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionFunctionsFunctionDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/functions/{FunctionDefinitionId}',
  description: 'Deletes a Lambda function definition.',
  operationId: 'DeleteFunctionDefinition',
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
      FunctionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'FunctionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the Lambda function definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFunctionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}',
  description: 'Retrieves information about a group.',
  operationId: 'GetGroup',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/groups/{GroupId}',
  description: 'Updates a group.',
  operationId: 'UpdateGroup',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/groups/{GroupId}',
  description: 'Deletes a group.',
  operationId: 'DeleteGroup',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGroupResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionLoggersLoggerDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/loggers/{LoggerDefinitionId}',
  description: 'Retrieves information about a logger definition.',
  operationId: 'GetLoggerDefinition',
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
      LoggerDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'LoggerDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the logger definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLoggerDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionLoggersLoggerDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/loggers/{LoggerDefinitionId}',
  description: 'Updates a logger definition.',
  operationId: 'UpdateLoggerDefinition',
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
      LoggerDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'LoggerDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the logger definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateLoggerDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionLoggersLoggerDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/loggers/{LoggerDefinitionId}',
  description: 'Deletes a logger definition.',
  operationId: 'DeleteLoggerDefinition',
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
      LoggerDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'LoggerDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the logger definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLoggerDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionResourcesResourceDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/resources/{ResourceDefinitionId}',
  description:
    'Retrieves information about a resource definition, including its creation time and latest version.',
  operationId: 'GetResourceDefinition',
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
      ResourceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ResourceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the resource definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionResourcesResourceDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/resources/{ResourceDefinitionId}',
  description: 'Updates a resource definition.',
  operationId: 'UpdateResourceDefinition',
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
      ResourceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ResourceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the resource definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateResourceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionResourcesResourceDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/resources/{ResourceDefinitionId}',
  description: 'Deletes a resource definition.',
  operationId: 'DeleteResourceDefinition',
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
      ResourceDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'ResourceDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the resource definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourceDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
  description: 'Retrieves information about a subscription definition.',
  operationId: 'GetSubscriptionDefinition',
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
      SubscriptionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the subscription definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSubscriptionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute = createRoute({
  method: 'put',
  path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
  description: 'Updates a subscription definition.',
  operationId: 'UpdateSubscriptionDefinition',
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
      SubscriptionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the subscription definition.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the definition.' }),
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
      content: { 'application/json': { schema: UpdateSubscriptionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}',
  description: 'Deletes a subscription definition.',
  operationId: 'DeleteSubscriptionDefinition',
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
      SubscriptionDefinitionId: z
        .string()
        .openapi({
          param: {
            name: 'SubscriptionDefinitionId',
            in: 'path',
            required: true,
            description: 'The ID of the subscription definition.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSubscriptionDefinitionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassBulkDeploymentsBulkDeploymentIdStatusRoute = createRoute({
  method: 'get',
  path: '/greengrass/bulk/deployments/{BulkDeploymentId}/status',
  description: 'Returns the status of a bulk deployment.',
  operationId: 'GetBulkDeploymentStatus',
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
      BulkDeploymentId: z
        .string()
        .openapi({
          param: {
            name: 'BulkDeploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the bulk deployment.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBulkDeploymentStatusResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassThingsThingNameConnectivityInfoRoute = createRoute({
  method: 'get',
  path: '/greengrass/things/{ThingName}/connectivityInfo',
  description: 'Retrieves the connectivity information for a core.',
  operationId: 'GetConnectivityInfo',
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
      ThingName: z
        .string()
        .openapi({
          param: {
            name: 'ThingName',
            in: 'path',
            required: true,
            description: 'The thing name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectivityInfoResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putGreengrassThingsThingNameConnectivityInfoRoute = createRoute({
  method: 'put',
  path: '/greengrass/things/{ThingName}/connectivityInfo',
  description:
    'Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.',
  operationId: 'UpdateConnectivityInfo',
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
      ThingName: z
        .string()
        .openapi({
          param: {
            name: 'ThingName',
            in: 'path',
            required: true,
            description: 'The thing name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConnectivityInfo: z
                .array(ConnectivityInfoSchema)
                .exactOptional()
                .openapi({ description: 'A list of connectivity info.' }),
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
      content: { 'application/json': { schema: UpdateConnectivityInfoResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}',
    description:
      'Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.',
    operationId: 'GetConnectorDefinitionVersion',
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
        ConnectorDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'ConnectorDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the connector definition.',
              schema: { type: 'string' },
            },
          }),
        ConnectorDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'ConnectorDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetConnectorDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}',
    description: 'Retrieves information about a core definition version.',
    operationId: 'GetCoreDefinitionVersion',
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
        CoreDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'CoreDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the core definition.',
              schema: { type: 'string' },
            },
          }),
        CoreDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'CoreDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetCoreDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status',
  description: 'Returns the status of a deployment.',
  operationId: 'GetDeploymentStatus',
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
      DeploymentId: z
        .string()
        .openapi({
          param: {
            name: 'DeploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment.',
            schema: { type: 'string' },
          },
        }),
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentStatusResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}',
    description: 'Retrieves information about a device definition version.',
    operationId: 'GetDeviceDefinitionVersion',
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
        DeviceDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'DeviceDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the device definition.',
              schema: { type: 'string' },
            },
          }),
        DeviceDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'DeviceDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetDeviceDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}',
    description:
      'Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.',
    operationId: 'GetFunctionDefinitionVersion',
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
        FunctionDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'FunctionDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the Lambda function definition.',
              schema: { type: 'string' },
            },
          }),
        FunctionDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'FunctionDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetFunctionDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}',
    description: 'Retreives the CA associated with a group. Returns the public key of the CA.',
    operationId: 'GetGroupCertificateAuthority',
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
        CertificateAuthorityId: z
          .string()
          .openapi({
            param: {
              name: 'CertificateAuthorityId',
              in: 'path',
              required: true,
              description: 'The ID of the certificate authority.',
              schema: { type: 'string' },
            },
          }),
        GroupId: z
          .string()
          .openapi({
            param: {
              name: 'GroupId',
              in: 'path',
              required: true,
              description: 'The ID of the Greengrass group.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetGroupCertificateAuthorityResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute = createRoute(
  {
    method: 'get',
    path: '/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry',
    description: 'Retrieves the current configuration for the CA used by the group.',
    operationId: 'GetGroupCertificateConfiguration',
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
        GroupId: z
          .string()
          .openapi({
            param: {
              name: 'GroupId',
              in: 'path',
              required: true,
              description: 'The ID of the Greengrass group.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetGroupCertificateConfigurationResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  },
)

export const putGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute = createRoute(
  {
    method: 'put',
    path: '/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry',
    description: 'Updates the Certificate expiry time for a group.',
    operationId: 'UpdateGroupCertificateConfiguration',
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
        GroupId: z
          .string()
          .openapi({
            param: {
              name: 'GroupId',
              in: 'path',
              required: true,
              description: 'The ID of the Greengrass group.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                CertificateExpiryInMilliseconds: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The amount of time remaining before the certificate expires, in milliseconds.',
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
          'application/json': { schema: UpdateGroupCertificateConfigurationResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  },
)

export const getGreengrassGroupsGroupIdVersionsGroupVersionIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/groups/{GroupId}/versions/{GroupVersionId}',
  description: 'Retrieves information about a group version.',
  operationId: 'GetGroupVersion',
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
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
      GroupVersionId: z
        .string()
        .openapi({
          param: {
            name: 'GroupVersionId',
            in: 'path',
            required: true,
            description:
              "The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGroupVersionResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}',
    description: 'Retrieves information about a logger definition version.',
    operationId: 'GetLoggerDefinitionVersion',
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
        LoggerDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'LoggerDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the logger definition.',
              schema: { type: 'string' },
            },
          }),
        LoggerDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'LoggerDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLoggerDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}',
    description:
      'Retrieves information about a resource definition version, including which resources are included in the version.',
    operationId: 'GetResourceDefinitionVersion',
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
        ResourceDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'ResourceDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the resource definition.',
              schema: { type: 'string' },
            },
          }),
        ResourceDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'ResourceDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetResourceDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}',
    description: 'Retrieves information about a subscription definition version.',
    operationId: 'GetSubscriptionDefinitionVersion',
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
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              required: false,
              description:
                "The token for the next set of results, or ''null'' if there are no additional results.",
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        SubscriptionDefinitionId: z
          .string()
          .openapi({
            param: {
              name: 'SubscriptionDefinitionId',
              in: 'path',
              required: true,
              description: 'The ID of the subscription definition.',
              schema: { type: 'string' },
            },
          }),
        SubscriptionDefinitionVersionId: z
          .string()
          .openapi({
            param: {
              name: 'SubscriptionDefinitionVersionId',
              in: 'path',
              required: true,
              description:
                "The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetSubscriptionDefinitionVersionResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
    },
  })

export const getGreengrassThingsThingNameRuntimeconfigRoute = createRoute({
  method: 'get',
  path: '/greengrass/things/{ThingName}/runtimeconfig',
  description: 'Get the runtime configuration of a thing.',
  operationId: 'GetThingRuntimeConfiguration',
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
      ThingName: z
        .string()
        .openapi({
          param: {
            name: 'ThingName',
            in: 'path',
            required: true,
            description: 'The thing name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetThingRuntimeConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putGreengrassThingsThingNameRuntimeconfigRoute = createRoute({
  method: 'put',
  path: '/greengrass/things/{ThingName}/runtimeconfig',
  description: 'Updates the runtime configuration of a thing.',
  operationId: 'UpdateThingRuntimeConfiguration',
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
      ThingName: z
        .string()
        .openapi({
          param: {
            name: 'ThingName',
            in: 'path',
            required: true,
            description: 'The thing name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TelemetryConfiguration: z
                .object({
                  Telemetry: TelemetrySchema.exactOptional().openapi({
                    description: 'Configure telemetry to be on or off.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration settings for running telemetry.',
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
      content: { 'application/json': { schema: UpdateThingRuntimeConfigurationResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsRoute = createRoute({
  method: 'get',
  path: '/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports',
  description:
    'Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.',
  operationId: 'ListBulkDeploymentDetailedReports',
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
      BulkDeploymentId: z
        .string()
        .openapi({
          param: {
            name: 'BulkDeploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the bulk deployment.',
            schema: { type: 'string' },
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBulkDeploymentDetailedReportsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getGreengrassBulkDeploymentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/bulk/deployments',
  description: 'Returns a list of bulk deployments.',
  operationId: 'ListBulkDeployments',
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
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'string' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              "The token for the next set of results, or ''null'' if there are no additional results.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBulkDeploymentsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassBulkDeploymentsRoute = createRoute({
  method: 'post',
  path: '/greengrass/bulk/deployments',
  description:
    "Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.",
  operationId: 'StartBulkDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ExecutionRoleArn: z
                .string()
                .openapi({
                  description:
                    "The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.",
                }),
              InputFileUri: z
                .string()
                .openapi({
                  description:
                    "The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.",
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
            })
            .openapi({ required: ['ExecutionRoleArn', 'InputFileUri'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartBulkDeploymentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resource-arn}',
  description: 'Retrieves a list of resource tags for a resource arn.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resource-arn}',
  description:
    "Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.",
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
                .exactOptional()
                .openapi({ description: 'The key-value pair for the resource tag.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postGreengrassGroupsGroupIdDeploymentsResetRoute = createRoute({
  method: 'post',
  path: '/greengrass/groups/{GroupId}/deployments/$reset',
  description: "Resets a group's deployments.",
  operationId: 'ResetDeployments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amzn-Client-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Amzn-Client-Token',
            in: 'header',
            required: false,
            description: 'A client token used to correlate requests and responses.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      GroupId: z
        .string()
        .openapi({
          param: {
            name: 'GroupId',
            in: 'path',
            required: true,
            description: 'The ID of the Greengrass group.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Force: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If true, performs a best-effort only core reset.' }),
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
      content: { 'application/json': { schema: ResetDeploymentsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putGreengrassBulkDeploymentsBulkDeploymentIdStopRoute = createRoute({
  method: 'put',
  path: '/greengrass/bulk/deployments/{BulkDeploymentId}/$stop',
  description:
    "Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.",
  operationId: 'StopBulkDeployment',
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
      BulkDeploymentId: z
        .string()
        .openapi({
          param: {
            name: 'BulkDeploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the bulk deployment.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopBulkDeploymentResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resource-arn}#tagKeys',
  description: 'Remove resource tags from a Greengrass Resource.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
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
            description: 'An array of tag keys to delete',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})
