import { createRoute, z } from '@hono/zod-openapi'

const NonEmptyStringSchema = z.string().min(1).max(1024).openapi('NonEmptyString')

const ImageBuilderArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\/(?:build|test|distribution))\/[a-z0-9-_]+(?:\/(?:(?:x|[0-9]+)\.(?:x|[0-9]+)\.(?:x|[0-9]+))(?:\/[0-9]+)?)?$/,
  )
  .openapi('ImageBuilderArn')

const ImageTypeSchema = z.enum(['AMI', 'DOCKER']).openapi('ImageType')

const ResourceNameSchema = z
  .string()
  .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
  .openapi('ResourceName')

const VersionNumberSchema = z
  .string()
  .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
  .openapi('VersionNumber')

const PlatformSchema = z.enum(['Windows', 'Linux']).openapi('Platform')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const OsVersionSchema = z.string().min(1).openapi('OsVersion')

const ImageStatusSchema = z
  .enum([
    'PENDING',
    'CREATING',
    'BUILDING',
    'TESTING',
    'DISTRIBUTING',
    'INTEGRATING',
    'AVAILABLE',
    'CANCELLED',
    'FAILED',
    'DEPRECATED',
    'DELETED',
  ])
  .openapi('ImageStatus')

const ImageStateSchema = z
  .object({
    status: ImageStatusSchema.exactOptional().openapi({ description: 'The status of the image.' }),
    reason: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The reason for the status of the image.',
    }),
  })
  .openapi({ description: 'Image status and the reason for that status.', required: [] })
  .openapi('ImageState')

const ComponentVersionArnOrBuildVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+))$/,
  )
  .openapi('ComponentVersionArnOrBuildVersionArn')

const ComponentParameterNameSchema = z
  .string()
  .regex(/[^\x00]+/)
  .min(1)
  .max(256)
  .openapi('ComponentParameterName')

const ComponentParameterValueSchema = z
  .string()
  .regex(/[^\x00]*/)
  .min(0)
  .openapi('ComponentParameterValue')

const ComponentParameterValueListSchema = z
  .array(ComponentParameterValueSchema)
  .openapi('ComponentParameterValueList')

const ComponentParameterSchema = z
  .object({
    name: ComponentParameterNameSchema.openapi({
      description: 'The name of the component parameter to set.',
    }),
    value: ComponentParameterValueListSchema.openapi({
      description: 'Sets the value for the named component parameter.',
    }),
  })
  .openapi({
    required: ['name', 'value'],
    description: 'Contains a key/value pair that sets the named component parameter.',
  })
  .openapi('ComponentParameter')

const ComponentParameterListSchema = z
  .array(ComponentParameterSchema)
  .min(1)
  .openapi('ComponentParameterList')

const ComponentConfigurationSchema = z
  .object({
    componentArn: ComponentVersionArnOrBuildVersionArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the component.',
    }),
    parameters: ComponentParameterListSchema.exactOptional().openapi({
      description:
        'A group of parameter settings that Image Builder uses to configure the component for a specific recipe.',
    }),
  })
  .openapi({ required: ['componentArn'], description: 'Configuration details of the component.' })
  .openapi('ComponentConfiguration')

const ComponentConfigurationListSchema = z
  .array(ComponentConfigurationSchema)
  .min(1)
  .openapi('ComponentConfigurationList')

const EbsIopsIntegerSchema = z.int().min(100).max(64000).openapi('EbsIopsInteger')

const EbsVolumeSizeIntegerSchema = z.int().min(1).max(16000).openapi('EbsVolumeSizeInteger')

const EbsVolumeTypeSchema = z
  .enum(['standard', 'io1', 'io2', 'gp2', 'gp3', 'sc1', 'st1'])
  .openapi('EbsVolumeType')

const EbsVolumeThroughputSchema = z.int().min(125).max(1000).openapi('EbsVolumeThroughput')

const EbsInstanceBlockDeviceSpecificationSchema = z
  .object({
    encrypted: NullableBooleanSchema.exactOptional().openapi({
      description: 'Use to configure device encryption.',
    }),
    deleteOnTermination: NullableBooleanSchema.exactOptional().openapi({
      description: 'Use to configure delete on termination of the associated device.',
    }),
    iops: EbsIopsIntegerSchema.exactOptional().openapi({
      description: 'Use to configure device IOPS.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Use to configure the KMS key to use when encrypting the device.',
    }),
    snapshotId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The snapshot that defines the device contents.',
    }),
    volumeSize: EbsVolumeSizeIntegerSchema.exactOptional().openapi({
      description: "Use to override the device's volume size.",
    }),
    volumeType: EbsVolumeTypeSchema.exactOptional().openapi({
      description: "Use to override the device's volume type.",
    }),
    throughput: EbsVolumeThroughputSchema.exactOptional().openapi({
      description:
        ' <b>For GP3 volumes only</b> – The throughput in MiB/s that the volume supports.',
    }),
  })
  .openapi({
    description: 'Amazon EBS-specific block device mapping specifications.',
    required: [],
  })
  .openapi('EbsInstanceBlockDeviceSpecification')

const EmptyStringSchema = z.string().length(0).openapi('EmptyString')

const InstanceBlockDeviceMappingSchema = z
  .object({
    deviceName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The device to which these mappings apply.',
    }),
    ebs: EbsInstanceBlockDeviceSpecificationSchema.exactOptional().openapi({
      description: 'Use to manage Amazon EBS-specific configuration for this mapping.',
    }),
    virtualName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Use to manage instance ephemeral devices.',
    }),
    noDevice: EmptyStringSchema.exactOptional().openapi({
      description: 'Use to remove a mapping from the base image.',
    }),
  })
  .openapi({
    description: 'Defines block device mappings for the instance used to configure your image.',
    required: [],
  })
  .openapi('InstanceBlockDeviceMapping')

const InstanceBlockDeviceMappingsSchema = z
  .array(InstanceBlockDeviceMappingSchema)
  .openapi('InstanceBlockDeviceMappings')

const DateTimeSchema = z.string().openapi('DateTime')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const SystemsManagerAgentSchema = z
  .object({
    uninstallAfterBuild: NullableBooleanSchema.exactOptional().openapi({
      description:
        "Controls whether the Systems Manager agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.",
    }),
  })
  .openapi({
    description: 'Contains settings for the Systems Manager agent on your build instance.',
    required: [],
  })
  .openapi('SystemsManagerAgent')

const UserDataOverrideSchema = z
  .string()
  .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
  .min(1)
  .max(21847)
  .openapi('UserDataOverride')

const AdditionalInstanceConfigurationSchema = z
  .object({
    systemsManagerAgent: SystemsManagerAgentSchema.exactOptional().openapi({
      description: 'Contains settings for the Systems Manager agent on your build instance.',
    }),
    userDataOverride: UserDataOverrideSchema.exactOptional().openapi({
      description:
        '<p>Use this property to provide commands or a command script to run when you launch your build instance.</p> <p>The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.</p> <note> <p>The user data is always base 64 encoded. For example, the following commands are encoded as <code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$</code>:</p> <p> <i>#!/bin/bash</i> </p> <p>mkdir -p /var/bb/</p> <p>touch /var</p> </note>',
    }),
  })
  .openapi({
    description:
      '<p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p>',
    required: [],
  })
  .openapi('AdditionalInstanceConfiguration')

const ImageRecipeSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image recipe.',
    }),
    type: ImageTypeSchema.exactOptional().openapi({
      description:
        'Specifies which type of image is created by the recipe - an AMI or a container image.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the image recipe.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the image recipe.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The platform of the image recipe.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the image recipe.',
    }),
    version: VersionNumberSchema.exactOptional().openapi({
      description: 'The version of the image recipe.',
    }),
    components: ComponentConfigurationListSchema.exactOptional().openapi({
      description:
        'The components that are included in the image recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.',
    }),
    parentImage: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The base image of the image recipe.',
    }),
    blockDeviceMappings: InstanceBlockDeviceMappingsSchema.exactOptional().openapi({
      description: 'The block device mappings to apply when creating images from this recipe.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this image recipe was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the image recipe.' }),
    workingDirectory: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The working directory to be used during build and test workflows.',
    }),
    additionalInstanceConfiguration: AdditionalInstanceConfigurationSchema.exactOptional().openapi({
      description:
        'Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration. Instance configuration adds a layer of control over those instances. You can define settings and add scripts to run when an instance is launched from your AMI.',
    }),
  })
  .openapi({ description: 'An image recipe.', required: [] })
  .openapi('ImageRecipe')

const ContainerTypeSchema = z.literal('DOCKER').openapi('ContainerType')

const InstanceConfigurationSchema = z
  .object({
    image: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.',
    }),
    blockDeviceMappings: InstanceBlockDeviceMappingsSchema.exactOptional().openapi({
      description:
        'Defines the block devices to attach for building an instance from this Image Builder AMI.',
    }),
  })
  .openapi({
    description:
      'Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.',
    required: [],
  })
  .openapi('InstanceConfiguration')

const DockerFileTemplateSchema = z.string().openapi('DockerFileTemplate')

const ContainerRepositoryServiceSchema = z.literal('ECR').openapi('ContainerRepositoryService')

const TargetContainerRepositorySchema = z
  .object({
    service: ContainerRepositoryServiceSchema.openapi({
      description: 'Specifies the service in which this image was registered.',
    }),
    repositoryName: NonEmptyStringSchema.openapi({
      description:
        'The name of the container repository where the output container image is stored. This name is prefixed by the repository location.',
    }),
  })
  .openapi({
    required: ['service', 'repositoryName'],
    description: 'The container repository where the output container image is stored.',
  })
  .openapi('TargetContainerRepository')

const ContainerRecipeSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of the container recipe.</p> <note> <p>Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:</p> <ol> <li> <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.</p> </li> <li> <p>Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;</p> </li> <li> <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p> </li> </ol> </note>",
    }),
    containerType: ContainerTypeSchema.exactOptional().openapi({
      description: 'Specifies the type of container, such as Docker.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the container recipe.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the container recipe.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The system platform for the container, such as Windows or Linux.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the container recipe.',
    }),
    version: VersionNumberSchema.exactOptional().openapi({
      description:
        '<p>The semantic version of the container recipe.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    components: ComponentConfigurationListSchema.exactOptional().openapi({
      description:
        'Build and test components that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.',
    }),
    instanceConfiguration: InstanceConfigurationSchema.exactOptional().openapi({
      description:
        'A group of options that can be used to configure an instance for building and testing container images.',
    }),
    dockerfileTemplateData: DockerFileTemplateSchema.exactOptional().openapi({
      description:
        'Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'Identifies which KMS key is used to encrypt the container image for distribution to the target Region.',
    }),
    encrypted: NullableBooleanSchema.exactOptional().openapi({
      description: 'A flag that indicates if the target container is encrypted.',
    }),
    parentImage: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The base image for the container recipe.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date when this container recipe was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Tags that are attached to the container recipe.',
    }),
    workingDirectory: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The working directory for use during build and test workflows.',
    }),
    targetRepository: TargetContainerRepositorySchema.exactOptional().openapi({
      description: 'The destination repository for the container image.',
    }),
  })
  .openapi({ description: 'A container recipe.', required: [] })
  .openapi('ContainerRecipe')

const ArnSchema = z.string().openapi('Arn')

const InstanceTypeSchema = z.string().openapi('InstanceType')

const InstanceTypeListSchema = z.array(InstanceTypeSchema).openapi('InstanceTypeList')

const InstanceProfileNameTypeSchema = z
  .string()
  .regex(/^[\w+=,.@-]+$/)
  .min(1)
  .max(256)
  .openapi('InstanceProfileNameType')

const SecurityGroupIdsSchema = z.array(NonEmptyStringSchema).openapi('SecurityGroupIds')

const S3LogsSchema = z
  .object({
    s3BucketName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The S3 bucket in which to store the logs.',
    }),
    s3KeyPrefix: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The Amazon S3 path to the bucket where the logs are stored.',
    }),
  })
  .openapi({ description: 'Amazon S3 logging configuration.', required: [] })
  .openapi('S3Logs')

const LoggingSchema = z
  .object({
    s3Logs: S3LogsSchema.exactOptional().openapi({
      description: 'The Amazon S3 logging configuration.',
    }),
  })
  .openapi({
    description: 'Logging configuration defines where Image Builder uploads your logs.',
    required: [],
  })
  .openapi('Logging')

const ResourceTagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 30)
  .openapi('ResourceTagMap')

const HttpTokensSchema = z
  .string()
  .regex(/optional|required/)
  .openapi('HttpTokens')

const HttpPutResponseHopLimitSchema = z.int().min(1).max(64).openapi('HttpPutResponseHopLimit')

const InstanceMetadataOptionsSchema = z
  .object({
    httpTokens: HttpTokensSchema.exactOptional().openapi({
      description:
        '<p>Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:</p> <ul> <li> <p> <b>required</b> – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.</p> </li> <li> <p> <b>optional</b> – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.</p> </li> </ul> <p>The default setting is <b>optional</b>.</p>',
    }),
    httpPutResponseHopLimit: HttpPutResponseHopLimitSchema.exactOptional().openapi({
      description:
        'Limit the number of hops that an instance metadata request can traverse to reach its destination. The default is one hop. However, if HTTP tokens are required, container image builds need a minimum of two hops.',
    }),
  })
  .openapi({
    description:
      'The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.',
    required: [],
  })
  .openapi('InstanceMetadataOptions')

const InfrastructureConfigurationSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the infrastructure configuration.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the infrastructure configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the infrastructure configuration.',
    }),
    instanceTypes: InstanceTypeListSchema.exactOptional().openapi({
      description: 'The instance types of the infrastructure configuration.',
    }),
    instanceProfileName: InstanceProfileNameTypeSchema.exactOptional().openapi({
      description: 'The instance profile of the infrastructure configuration.',
    }),
    securityGroupIds: SecurityGroupIdsSchema.exactOptional().openapi({
      description: 'The security group IDs of the infrastructure configuration.',
    }),
    subnetId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The subnet ID of the infrastructure configuration.',
    }),
    logging: LoggingSchema.exactOptional().openapi({
      description: 'The logging configuration of the infrastructure configuration.',
    }),
    keyPair: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The Amazon EC2 key pair of the infrastructure configuration.',
    }),
    terminateInstanceOnFailure: NullableBooleanSchema.exactOptional().openapi({
      description:
        'The terminate instance on failure configuration of the infrastructure configuration.',
    }),
    snsTopicArn: NonEmptyStringSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the infrastructure configuration was created.',
    }),
    dateUpdated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the infrastructure configuration was last updated.',
    }),
    resourceTags: ResourceTagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the resource created by Image Builder.',
    }),
    instanceMetadataOptions: InstanceMetadataOptionsSchema.exactOptional().openapi({
      description: 'The instance metadata option settings for the infrastructure configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of the infrastructure configuration.',
    }),
  })
  .openapi({ description: 'Details of the infrastructure configuration.', required: [] })
  .openapi('InfrastructureConfiguration')

const AmiNameStringSchema = z
  .string()
  .regex(/^[-_A-Za-z0-9{][-_A-Za-z0-9\s:{}\.]+[-_A-Za-z0-9}]$/)
  .min(1)
  .max(127)
  .openapi('AmiNameString')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .openapi('AccountId')

const AccountListSchema = z.array(AccountIdSchema).min(1).max(1536).openapi('AccountList')

const StringListSchema = z.array(NonEmptyStringSchema).openapi('StringList')

const OrganizationArnSchema = z
  .string()
  .regex(/^arn:aws[^:]*:organizations::[0-9]{12}:organization\/o-[a-z0-9]{10,32}$/)
  .openapi('OrganizationArn')

const OrganizationArnListSchema = z
  .array(OrganizationArnSchema)
  .min(1)
  .max(25)
  .openapi('OrganizationArnList')

const OrganizationalUnitArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:organizations::[0-9]{12}:ou\/o-[a-z0-9]{10,32}\/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}/,
  )
  .openapi('OrganizationalUnitArn')

const OrganizationalUnitArnListSchema = z
  .array(OrganizationalUnitArnSchema)
  .min(1)
  .max(25)
  .openapi('OrganizationalUnitArnList')

const LaunchPermissionConfigurationSchema = z
  .object({
    userIds: AccountListSchema.exactOptional().openapi({
      description: 'The Amazon Web Services account ID.',
    }),
    userGroups: StringListSchema.exactOptional().openapi({ description: 'The name of the group.' }),
    organizationArns: OrganizationArnListSchema.exactOptional().openapi({
      description:
        'The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What is Organizations?</a>.',
    }),
    organizationalUnitArns: OrganizationalUnitArnListSchema.exactOptional().openapi({
      description:
        'The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. For more information about key concepts for Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html">Organizations terminology and concepts</a>.',
    }),
  })
  .openapi({
    description:
      'Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.',
    required: [],
  })
  .openapi('LaunchPermissionConfiguration')

const AmiDistributionConfigurationSchema = z
  .object({
    name: AmiNameStringSchema.exactOptional().openapi({
      description: 'The name of the output AMI.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The description of the AMI distribution configuration. Minimum and maximum length are in characters.',
    }),
    targetAccountIds: AccountListSchema.exactOptional().openapi({
      description: 'The ID of an account to which you want to distribute an image.',
    }),
    amiTags: TagMapSchema.exactOptional().openapi({
      description: 'The tags to apply to AMIs distributed to this Region.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The KMS key identifier used to encrypt the distributed image.',
    }),
    launchPermission: LaunchPermissionConfigurationSchema.exactOptional().openapi({
      description:
        'Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to launch instances.',
    }),
  })
  .openapi({ description: 'Define and configure the output AMIs of the pipeline.', required: [] })
  .openapi('AmiDistributionConfiguration')

const ContainerDistributionConfigurationSchema = z
  .object({
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the container distribution configuration.',
    }),
    containerTags: StringListSchema.exactOptional().openapi({
      description: 'Tags that are attached to the container distribution configuration.',
    }),
    targetRepository: TargetContainerRepositorySchema.openapi({
      description: 'The destination repository for the container distribution configuration.',
    }),
  })
  .openapi({
    required: ['targetRepository'],
    description:
      'Container distribution settings for encryption, licensing, and sharing in a specific Region.',
  })
  .openapi('ContainerDistributionConfiguration')

const LicenseConfigurationArnSchema = z
  .string()
  .regex(/^arn:aws[^:]*:license-manager:[^:]+:[0-9]{12}:license-configuration:lic-[a-z0-9-_]{32}$/)
  .openapi('LicenseConfigurationArn')

const LicenseConfigurationArnListSchema = z
  .array(LicenseConfigurationArnSchema)
  .min(1)
  .max(50)
  .openapi('LicenseConfigurationArnList')

const LaunchTemplateIdSchema = z
  .string()
  .regex(/^lt-[a-z0-9-_]{17}$/)
  .openapi('LaunchTemplateId')

const BooleanSchema = z.boolean().openapi('Boolean')

const LaunchTemplateConfigurationSchema = z
  .object({
    launchTemplateId: LaunchTemplateIdSchema.openapi({
      description: 'Identifies the Amazon EC2 launch template to use.',
    }),
    accountId: AccountIdSchema.exactOptional().openapi({
      description: 'The account ID that this configuration applies to.',
    }),
    setDefaultVersion: BooleanSchema.exactOptional().openapi({
      description:
        'Set the specified Amazon EC2 launch template as the default launch template for the specified account.',
    }),
  })
  .openapi({
    required: ['launchTemplateId'],
    description: 'Identifies an Amazon EC2 launch template to use for a specific account.',
  })
  .openapi('LaunchTemplateConfiguration')

const LaunchTemplateConfigurationListSchema = z
  .array(LaunchTemplateConfigurationSchema)
  .min(1)
  .max(100)
  .openapi('LaunchTemplateConfigurationList')

const DiskImageFormatSchema = z.enum(['VMDK', 'RAW', 'VHD']).openapi('DiskImageFormat')

const S3ExportConfigurationSchema = z
  .object({
    roleName: NonEmptyStringSchema.openapi({
      description:
        'The name of the role that grants VM Import/Export permission to export images to your S3 bucket.',
    }),
    diskImageFormat: DiskImageFormatSchema.openapi({
      description:
        '<p>Export the updated image to one of the following supported disk image formats:</p> <ul> <li> <p> <b>Virtual Hard Disk (VHD)</b> – Compatible with Citrix Xen and Microsoft Hyper-V virtualization products.</p> </li> <li> <p> <b>Stream-optimized ESX Virtual Machine Disk (VMDK)</b> – Compatible with VMware ESX and VMware vSphere versions 4, 5, and 6.</p> </li> <li> <p> <b>Raw</b> – Raw format.</p> </li> </ul>',
    }),
    s3Bucket: NonEmptyStringSchema.openapi({
      description: 'The S3 bucket in which to store the output disk images for your VM.',
    }),
    s3Prefix: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The Amazon S3 path for the bucket where the output disk images for your VM are stored.',
    }),
  })
  .openapi({
    required: ['roleName', 'diskImageFormat', 's3Bucket'],
    description:
      'Properties that configure export from your build instance to a compatible file format for your VM.',
  })
  .openapi('S3ExportConfiguration')

const TargetResourceCountSchema = z.int().min(1).max(10000).openapi('TargetResourceCount')

const FastLaunchSnapshotConfigurationSchema = z
  .object({
    targetResourceCount: TargetResourceCountSchema.exactOptional().openapi({
      description:
        'The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.',
    }),
  })
  .openapi({
    description:
      'Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.',
    required: [],
  })
  .openapi('FastLaunchSnapshotConfiguration')

const MaxParallelLaunchesSchema = z.int().min(1).max(10000).openapi('MaxParallelLaunches')

const FastLaunchLaunchTemplateSpecificationSchema = z
  .object({
    launchTemplateId: LaunchTemplateIdSchema.exactOptional().openapi({
      description: 'The ID of the launch template to use for faster launching for a Windows AMI.',
    }),
    launchTemplateName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the launch template to use for faster launching for a Windows AMI.',
    }),
    launchTemplateVersion: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The version of the launch template to use for faster launching for a Windows AMI.',
    }),
  })
  .openapi({
    description:
      '<p>Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.</p> <note> <p>You can specify either the <code>launchTemplateName</code> or the <code>launchTemplateId</code>, but not both.</p> </note>',
    required: [],
  })
  .openapi('FastLaunchLaunchTemplateSpecification')

const FastLaunchConfigurationSchema = z
  .object({
    enabled: BooleanSchema.openapi({
      description:
        'A Boolean that represents the current state of faster launching for the Windows AMI. Set to <code>true</code> to start using Windows faster launching, or <code>false</code> to stop using it.',
    }),
    snapshotConfiguration: FastLaunchSnapshotConfigurationSchema.exactOptional().openapi({
      description:
        'Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.',
    }),
    maxParallelLaunches: MaxParallelLaunchesSchema.exactOptional().openapi({
      description:
        'The maximum number of parallel instances that are launched for creating resources.',
    }),
    launchTemplate: FastLaunchLaunchTemplateSpecificationSchema.exactOptional().openapi({
      description:
        'The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.',
    }),
    accountId: AccountIdSchema.exactOptional().openapi({
      description: 'The owner account ID for the fast-launch enabled Windows AMI.',
    }),
  })
  .openapi({
    required: ['enabled'],
    description: 'Define and configure faster launching for output Windows AMIs.',
  })
  .openapi('FastLaunchConfiguration')

const FastLaunchConfigurationListSchema = z
  .array(FastLaunchConfigurationSchema)
  .min(1)
  .max(1000)
  .openapi('FastLaunchConfigurationList')

const DistributionSchema = z
  .object({
    region: NonEmptyStringSchema.openapi({ description: 'The target Region.' }),
    amiDistributionConfiguration: AmiDistributionConfigurationSchema.exactOptional().openapi({
      description: 'The specific AMI settings; for example, launch permissions or AMI tags.',
    }),
    containerDistributionConfiguration:
      ContainerDistributionConfigurationSchema.exactOptional().openapi({
        description:
          'Container distribution settings for encryption, licensing, and sharing in a specific Region.',
      }),
    licenseConfigurationArns: LicenseConfigurationArnListSchema.exactOptional().openapi({
      description:
        'The License Manager Configuration to associate with the AMI in the specified Region.',
    }),
    launchTemplateConfigurations: LaunchTemplateConfigurationListSchema.exactOptional().openapi({
      description:
        'A group of launchTemplateConfiguration settings that apply to image distribution for specified accounts.',
    }),
    s3ExportConfiguration: S3ExportConfigurationSchema.exactOptional().openapi({
      description:
        'Configure export settings to deliver disk images created from your image build, using a file format that is compatible with your VMs in that Region.',
    }),
    fastLaunchConfigurations: FastLaunchConfigurationListSchema.exactOptional().openapi({
      description: 'The Windows faster-launching configurations to use for AMI distribution.',
    }),
  })
  .openapi({ required: ['region'], description: 'Defines the settings for a specific Region.' })
  .openapi('Distribution')

const DistributionListSchema = z.array(DistributionSchema).openapi('DistributionList')

const DistributionTimeoutMinutesSchema = z
  .int()
  .min(30)
  .max(720)
  .openapi('DistributionTimeoutMinutes')

const DistributionConfigurationSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the distribution configuration.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the distribution configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the distribution configuration.',
    }),
    distributions: DistributionListSchema.exactOptional().openapi({
      description:
        'The distribution objects that apply Region-specific settings for the deployment of the image to targeted Regions.',
    }),
    timeoutMinutes: DistributionTimeoutMinutesSchema.openapi({
      description: 'The maximum duration in minutes for this distribution configuration.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this distribution configuration was created.',
    }),
    dateUpdated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this distribution configuration was last updated.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of the distribution configuration.',
    }),
  })
  .openapi({ required: ['timeoutMinutes'], description: 'A distribution configuration.' })
  .openapi('DistributionConfiguration')

const ImageTestsTimeoutMinutesSchema = z.int().min(60).max(1440).openapi('ImageTestsTimeoutMinutes')

const ImageTestsConfigurationSchema = z
  .object({
    imageTestsEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.',
    }),
    timeoutMinutes: ImageTestsTimeoutMinutesSchema.exactOptional().openapi({
      description:
        '<p>The maximum time in minutes that tests are permitted to run.</p> <note> <p>The timeoutMinutes attribute is not currently active. This value is ignored.</p> </note>',
    }),
  })
  .openapi({
    description:
      'Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.',
    required: [],
  })
  .openapi('ImageTestsConfiguration')

const AmiSchema = z
  .object({
    region: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The Amazon Web Services Region of the Amazon EC2 AMI.',
    }),
    image: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The AMI ID of the Amazon EC2 AMI.',
    }),
    name: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the Amazon EC2 AMI.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.',
    }),
    state: ImageStateSchema.exactOptional(),
    accountId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The account ID of the owner of the AMI.',
    }),
  })
  .openapi({ description: 'Details of an Amazon EC2 AMI.', required: [] })
  .openapi('Ami')

const AmiListSchema = z.array(AmiSchema).openapi('AmiList')

const ContainerSchema = z
  .object({
    region: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'Containers and container images are Region-specific. This is the Region context for the container.',
    }),
    imageUris: StringListSchema.exactOptional().openapi({
      description: 'A list of URIs for containers created in the context Region.',
    }),
  })
  .openapi({
    description: 'A container encapsulates the runtime environment for an application.',
    required: [],
  })
  .openapi('Container')

const ContainerListSchema = z.array(ContainerSchema).openapi('ContainerList')

const OutputResourcesSchema = z
  .object({
    amis: AmiListSchema.exactOptional().openapi({
      description: 'The Amazon EC2 AMIs created by this image.',
    }),
    containers: ContainerListSchema.exactOptional().openapi({
      description:
        'Container images that the pipeline has generated and stored in the output repository.',
    }),
  })
  .openapi({ description: 'The resources produced by this image.', required: [] })
  .openapi('OutputResources')

const BuildTypeSchema = z.enum(['USER_INITIATED', 'SCHEDULED', 'IMPORT']).openapi('BuildType')

const ImageSourceSchema = z
  .enum(['AMAZON_MANAGED', 'AWS_MARKETPLACE', 'IMPORTED', 'CUSTOM'])
  .openapi('ImageSource')

const ImageScanStatusSchema = z
  .enum(['PENDING', 'SCANNING', 'COLLECTING', 'COMPLETED', 'ABANDONED', 'FAILED', 'TIMED_OUT'])
  .openapi('ImageScanStatus')

const ImageScanStateSchema = z
  .object({
    status: ImageScanStatusSchema.exactOptional().openapi({
      description: 'The current state of vulnerability scans for the image.',
    }),
    reason: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The reason for the scan status for the image.',
    }),
  })
  .openapi({
    description:
      'Shows the vulnerability scan status for a specific image, and the reason for that status.',
    required: [],
  })
  .openapi('ImageScanState')

const EcrConfigurationSchema = z
  .object({
    repositoryName: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named <code>image-builder-image-scanning-repository</code> for vulnerability scans of your output container images.',
    }),
    containerTags: StringListSchema.exactOptional().openapi({
      description:
        'Tags for Image Builder to apply to the output container image that &amp;INS; scans. Tags can help you identify and manage your scanned images.',
    }),
  })
  .openapi({
    description:
      'Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.',
    required: [],
  })
  .openapi('EcrConfiguration')

const ImageScanningConfigurationSchema = z
  .object({
    imageScanningEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.',
    }),
    ecrConfiguration: EcrConfigurationSchema.exactOptional().openapi({
      description: 'Contains Amazon ECR settings for vulnerability scans.',
    }),
  })
  .openapi({
    description: 'Contains settings for Image Builder image resource and container image scans.',
    required: [],
  })
  .openapi('ImageScanningConfiguration')

const ImageSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of the image.</p> <note> <p>Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:</p> <ol> <li> <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.</p> </li> <li> <p>Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;</p> </li> <li> <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p> </li> </ol> </note>",
    }),
    type: ImageTypeSchema.exactOptional().openapi({
      description: 'Specifies whether this image produces an AMI or a container image.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({ description: 'The name of the image.' }),
    version: VersionNumberSchema.exactOptional().openapi({
      description:
        '<p>The semantic version of the image.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The image operating system platform, such as Linux or Windows.',
    }),
    enhancedImageMetadataEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether Image Builder collects additional information about the image, such as the operating system (OS) version and package list.',
    }),
    osVersion: OsVersionSchema.exactOptional().openapi({
      description:
        'The operating system version for instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.',
    }),
    state: ImageStateSchema.exactOptional().openapi({ description: 'The state of the image.' }),
    imageRecipe: ImageRecipeSchema.exactOptional().openapi({
      description:
        'For images that distribute an AMI, this is the image recipe that Image Builder used to create the image. For container images, this is empty.',
    }),
    containerRecipe: ContainerRecipeSchema.exactOptional().openapi({
      description:
        'For container images, this is the container recipe that Image Builder used to create the image. For images that distribute an AMI, this is empty.',
    }),
    sourcePipelineName: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the image pipeline that created this image.',
    }),
    sourcePipelineArn: ArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image pipeline that created this image.',
    }),
    infrastructureConfiguration: InfrastructureConfigurationSchema.exactOptional().openapi({
      description: 'The infrastructure that Image Builder used to create this image.',
    }),
    distributionConfiguration: DistributionConfigurationSchema.exactOptional().openapi({
      description: 'The distribution configuration that Image Builder used to create this image.',
    }),
    imageTestsConfiguration: ImageTestsConfigurationSchema.exactOptional().openapi({
      description: 'The image tests that ran when that Image Builder created this image.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which Image Builder created this image.',
    }),
    outputResources: OutputResourcesSchema.exactOptional().openapi({
      description: 'The output resources that Image Builder produces for this image.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags that apply to this image.',
    }),
    buildType: BuildTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates the type of build that created this image. The build can be initiated in the following ways:</p> <ul> <li> <p> <b>USER_INITIATED</b> – A manual pipeline build request.</p> </li> <li> <p> <b>SCHEDULED</b> – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p> </li> <li> <p> <b>IMPORT</b> – A VM import created the image to use as the base image for the recipe.</p> </li> </ul>',
    }),
    imageSource: ImageSourceSchema.exactOptional().openapi({
      description: 'The origin of the base image that Image Builder used to build this image.',
    }),
    scanState: ImageScanStateSchema.exactOptional().openapi({
      description: 'Contains information about the current state of scans for this image.',
    }),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional().openapi({
      description: 'Contains settings for vulnerability scans.',
    }),
  })
  .openapi({
    description:
      'An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.',
    required: [],
  })
  .openapi('Image')

type GetImageResponseType = {
  requestId?: z.infer<typeof NonEmptyStringSchema> & unknown
  image?: z.infer<typeof ImageSchema> & unknown
}

const ClientTokenSchema = z.string().min(1).max(36).openapi('ClientToken')

const ImageBuildVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
  )
  .openapi('ImageBuildVersionArn')

const CancelImageCreationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token that was used for this request.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The ARN of the image whose creation this request canceled.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CancelImageCreationResponse')

const ServiceExceptionSchema = z.any().openapi('ServiceException')

const ClientExceptionSchema = z.any().openapi('ClientException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const CallRateLimitExceededExceptionSchema = z.any().openapi('CallRateLimitExceededException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ComponentBuildVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
  )
  .openapi('ComponentBuildVersionArn')

const CreateComponentResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    componentBuildVersionArn: ComponentBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the component that this request created.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateComponentResponse')

const InvalidVersionNumberExceptionSchema = z.any().openapi('InvalidVersionNumberException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ContainerRecipeArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
  )
  .openapi('ContainerRecipeArn')

const CreateContainerRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The client token used to make this request idempotent.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description:
        'Returns the Amazon Resource Name (ARN) of the container recipe that the request created.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateContainerRecipeResponse')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const DistributionConfigurationArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
  )
  .openapi('DistributionConfigurationArn')

const CreateDistributionConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that was created by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateDistributionConfigurationResponse')

const CreateImageResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image that this request created.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateImageResponse')

const ImagePipelineArnSchema = z
  .string()
  .regex(/^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/)
  .openapi('ImagePipelineArn')

const CreateImagePipelineResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imagePipelineArn: ImagePipelineArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image pipeline that was created by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateImagePipelineResponse')

const TimezoneSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{2,}(?:\/[a-zA-z0-9-_+]+)*/)
  .min(3)
  .max(100)
  .openapi('Timezone')

const PipelineExecutionStartConditionSchema = z
  .enum(['EXPRESSION_MATCH_ONLY', 'EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE'])
  .openapi('PipelineExecutionStartCondition')

const ImageRecipeArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
  )
  .openapi('ImageRecipeArn')

const CreateImageRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that was created by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateImageRecipeResponse')

const InfrastructureConfigurationArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
  )
  .openapi('InfrastructureConfigurationArn')

const CreateInfrastructureConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that was created by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateInfrastructureConfigurationResponse')

const DeleteComponentResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    componentBuildVersionArn: ComponentBuildVersionArnSchema.exactOptional().openapi({
      description: 'The ARN of the component build version that this request deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteComponentResponse')

const ResourceDependencyExceptionSchema = z.any().openapi('ResourceDependencyException')

const DeleteContainerRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the container recipe that was deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteContainerRecipeResponse')

const DeleteDistributionConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that was deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteDistributionConfigurationResponse')

const DeleteImageResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The ARN of the Image Builder image resource that this request deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteImageResponse')

const DeleteImagePipelineResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imagePipelineArn: ImagePipelineArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image pipeline that was deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteImagePipelineResponse')

const DeleteImageRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image recipe that was deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteImageRecipeResponse')

const DeleteInfrastructureConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteInfrastructureConfigurationResponse')

const ComponentTypeSchema = z.enum(['BUILD', 'TEST']).openapi('ComponentType')

const OsVersionListSchema = z.array(OsVersionSchema).min(1).max(25).openapi('OsVersionList')

const ComponentStatusSchema = z.literal('DEPRECATED').openapi('ComponentStatus')

const ComponentStateSchema = z
  .object({
    status: ComponentStatusSchema.exactOptional().openapi({
      description: 'The current state of the component.',
    }),
    reason: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Describes how or why the component changed state.',
    }),
  })
  .openapi({
    description:
      'A group of fields that describe the current status of components that are no longer active.',
    required: [],
  })
  .openapi('ComponentState')

const ComponentParameterTypeSchema = z
  .string()
  .regex(/^String|Integer|Boolean|StringList$/)
  .min(1)
  .max(20)
  .openapi('ComponentParameterType')

const ComponentParameterDescriptionSchema = z
  .string()
  .regex(/[^\x00]+/)
  .min(1)
  .max(1024)
  .openapi('ComponentParameterDescription')

const ComponentParameterDetailSchema = z
  .object({
    name: ComponentParameterNameSchema.openapi({
      description: 'The name of this input parameter.',
    }),
    type: ComponentParameterTypeSchema.openapi({
      description:
        'The type of input this parameter provides. The currently supported value is "string".',
    }),
    defaultValue: ComponentParameterValueListSchema.exactOptional().openapi({
      description: 'The default value of this parameter if no input is provided.',
    }),
    description: ComponentParameterDescriptionSchema.exactOptional().openapi({
      description: 'Describes this parameter.',
    }),
  })
  .openapi({
    required: ['name', 'type'],
    description:
      'Defines a parameter that is used to provide configuration details for the component.',
  })
  .openapi('ComponentParameterDetail')

const ComponentParameterDetailListSchema = z
  .array(ComponentParameterDetailSchema)
  .openapi('ComponentParameterDetailList')

const ComponentDataSchema = z.string().openapi('ComponentData')

const ComponentSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the component.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({ description: 'The name of the component.' }),
    version: VersionNumberSchema.exactOptional().openapi({
      description: 'The version of the component.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the component.',
    }),
    changeDescription: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The change description of the component.',
    }),
    type: ComponentTypeSchema.exactOptional().openapi({
      description:
        'The component type specifies whether Image Builder uses the component to build the image or only to test it.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The operating system platform of the component.',
    }),
    supportedOsVersions: OsVersionListSchema.exactOptional().openapi({
      description:
        'The operating system (OS) version supported by the component. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.',
    }),
    state: ComponentStateSchema.exactOptional().openapi({
      description:
        'Describes the current status of the component. This is used for components that are no longer active.',
    }),
    parameters: ComponentParameterDetailListSchema.exactOptional().openapi({
      description:
        'Contains parameter details for each of the parameters that the component document defined for the component.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the component.',
    }),
    data: ComponentDataSchema.exactOptional().openapi({
      description: 'Component data contains the YAML document content for the component.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The KMS key identifier used to encrypt the component.',
    }),
    encrypted: NullableBooleanSchema.exactOptional().openapi({
      description: 'The encryption status of the component.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date that Image Builder created the component.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags that apply to the component.',
    }),
    publisher: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.',
    }),
    obfuscate: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.',
    }),
  })
  .openapi({ description: 'A detailed view of a component.', required: [] })
  .openapi('Component')

const GetComponentResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    component: ComponentSchema.exactOptional().openapi({
      description: 'The component object associated with the specified ARN.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetComponentResponse')

const ResourcePolicyDocumentSchema = z.string().min(1).max(30000).openapi('ResourcePolicyDocument')

const GetComponentPolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    policy: ResourcePolicyDocumentSchema.exactOptional().openapi({
      description: 'The component policy.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetComponentPolicyResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const GetContainerRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    containerRecipe: ContainerRecipeSchema.exactOptional().openapi({
      description: 'The container recipe object that is returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetContainerRecipeResponse')

const GetContainerRecipePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    policy: ResourcePolicyDocumentSchema.exactOptional().openapi({
      description: 'The container recipe policy object that is returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetContainerRecipePolicyResponse')

const GetDistributionConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    distributionConfiguration: DistributionConfigurationSchema.exactOptional().openapi({
      description: 'The distribution configuration object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDistributionConfigurationResponse')

const GetImageResponseSchema: z.ZodType<GetImageResponseType> = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    image: ImageSchema.exactOptional().openapi({ description: 'The image object.' }),
  })
  .openapi({ required: [] })
  .openapi('GetImageResponse')

const ScheduleSchema = z
  .object({
    scheduleExpression: NonEmptyStringSchema.exactOptional().openapi({
      description:
        '<p>The cron expression determines how often EC2 Image Builder evaluates your <code>pipelineExecutionStartCondition</code>.</p> <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron expressions in EC2 Image Builder</a>.</p>',
    }),
    timezone: TimezoneSchema.exactOptional().openapi({
      description:
        'The timezone that applies to the scheduling expression. For example, "Etc/UTC", "America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA timezone format</a>. If not specified this defaults to UTC.',
    }),
    pipelineExecutionStartCondition: PipelineExecutionStartConditionSchema.exactOptional().openapi({
      description:
        'The condition configures when the pipeline should trigger a new image build. When the <code>pipelineExecutionStartCondition</code> is set to <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic version filters on the base image or components in your image recipe, EC2 Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API Reference</i>.',
    }),
  })
  .openapi({
    description:
      'A schedule configures how often and when a pipeline will automatically create a new image.',
    required: [],
  })
  .openapi('Schedule')

const PipelineStatusSchema = z.enum(['DISABLED', 'ENABLED']).openapi('PipelineStatus')

const ImagePipelineSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image pipeline.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the image pipeline.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the image pipeline.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The platform of the image pipeline.',
    }),
    enhancedImageMetadataEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
    }),
    imageRecipeArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.',
    }),
    containerRecipeArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.',
    }),
    infrastructureConfigurationArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.',
    }),
    distributionConfigurationArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.',
    }),
    imageTestsConfiguration: ImageTestsConfigurationSchema.exactOptional().openapi({
      description: 'The image tests configuration of the image pipeline.',
    }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description: 'The schedule of the image pipeline.',
    }),
    status: PipelineStatusSchema.exactOptional().openapi({
      description: 'The status of the image pipeline.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this image pipeline was created.',
    }),
    dateUpdated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this image pipeline was last updated.',
    }),
    dateLastRun: DateTimeSchema.exactOptional().openapi({
      description: 'This is no longer supported, and does not return a value.',
    }),
    dateNextRun: DateTimeSchema.exactOptional().openapi({
      description: 'This is no longer supported, and does not return a value.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of this image pipeline.' }),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional().openapi({
      description: 'Contains settings for vulnerability scans.',
    }),
  })
  .openapi({ description: 'Details of an image pipeline.', required: [] })
  .openapi('ImagePipeline')

const GetImagePipelineResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imagePipeline: ImagePipelineSchema.exactOptional().openapi({
      description: 'The image pipeline object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetImagePipelineResponse')

const GetImagePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    policy: ResourcePolicyDocumentSchema.exactOptional().openapi({
      description: 'The image policy object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetImagePolicyResponse')

const GetImageRecipeResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageRecipe: ImageRecipeSchema.exactOptional().openapi({
      description: 'The image recipe object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetImageRecipeResponse')

const GetImageRecipePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    policy: ResourcePolicyDocumentSchema.exactOptional().openapi({
      description: 'The image recipe policy object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetImageRecipePolicyResponse')

const GetInfrastructureConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    infrastructureConfiguration: InfrastructureConfigurationSchema.exactOptional().openapi({
      description: 'The infrastructure configuration object.',
    }),
  })
  .openapi({ description: 'GetInfrastructureConfiguration response object.', required: [] })
  .openapi('GetInfrastructureConfigurationResponse')

const WorkflowBuildVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws(?:-[a-z]+)*:imagebuilder:[a-z]{2,}(?:-[a-z]+)+-[0-9]+:(?:[0-9]{12}|aws):workflow\/(build|test|distribution)\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
  )
  .max(1024)
  .openapi('WorkflowBuildVersionArn')

const WorkflowExecutionIdSchema = z
  .string()
  .regex(/^wf-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  .openapi('WorkflowExecutionId')

const WorkflowTypeSchema = z.enum(['BUILD', 'TEST', 'DISTRIBUTION']).openapi('WorkflowType')

const WorkflowExecutionStatusSchema = z
  .enum([
    'PENDING',
    'SKIPPED',
    'RUNNING',
    'COMPLETED',
    'FAILED',
    'ROLLBACK_IN_PROGRESS',
    'ROLLBACK_COMPLETED',
  ])
  .openapi('WorkflowExecutionStatus')

const WorkflowExecutionMessageSchema = z
  .string()
  .min(0)
  .max(500)
  .openapi('WorkflowExecutionMessage')

const WorkflowStepCountSchema = z.int().openapi('WorkflowStepCount')

const GetWorkflowExecutionResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    workflowBuildVersionArn: WorkflowBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines the specified runtime instance of the workflow.',
    }),
    workflowExecutionId: WorkflowExecutionIdSchema.exactOptional().openapi({
      description:
        'The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow created.',
    }),
    type: WorkflowTypeSchema.exactOptional().openapi({
      description:
        'The type of workflow that Image Builder ran for the specified runtime instance of the workflow.',
    }),
    status: WorkflowExecutionStatusSchema.exactOptional().openapi({
      description: 'The current runtime status for the specified runtime instance of the workflow.',
    }),
    message: WorkflowExecutionMessageSchema.exactOptional().openapi({
      description:
        'The output message from the specified runtime instance of the workflow, if applicable.',
    }),
    totalStepCount: WorkflowStepCountSchema.exactOptional().openapi({
      description:
        'The total number of steps in the specified runtime instance of the workflow that ran. This number should equal the sum of the step counts for steps that succeeded, were skipped, and failed.',
    }),
    totalStepsSucceeded: WorkflowStepCountSchema.exactOptional().openapi({
      description:
        'A runtime count for the number of steps that ran successfully in the specified runtime instance of the workflow.',
    }),
    totalStepsFailed: WorkflowStepCountSchema.exactOptional().openapi({
      description:
        'A runtime count for the number of steps that failed in the specified runtime instance of the workflow.',
    }),
    totalStepsSkipped: WorkflowStepCountSchema.exactOptional().openapi({
      description:
        'A runtime count for the number of steps that were skipped in the specified runtime instance of the workflow.',
    }),
    startTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the specified runtime instance of the workflow started.',
    }),
    endTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the specified runtime instance of the workflow finished.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowExecutionResponse')

const WorkflowStepExecutionIdSchema = z
  .string()
  .regex(/^step-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  .openapi('WorkflowStepExecutionId')

const WorkflowStepNameSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9-_]{1,99}$/)
  .openapi('WorkflowStepName')

const WorkflowStepDescriptionSchema = z.string().min(0).max(500).openapi('WorkflowStepDescription')

const WorkflowStepActionSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9-_]{1,99}$/)
  .openapi('WorkflowStepAction')

const WorkflowStepExecutionStatusSchema = z
  .enum(['PENDING', 'SKIPPED', 'RUNNING', 'COMPLETED', 'FAILED'])
  .openapi('WorkflowStepExecutionStatus')

const WorkflowStepExecutionRollbackStatusSchema = z
  .enum(['RUNNING', 'COMPLETED', 'SKIPPED', 'FAILED'])
  .openapi('WorkflowStepExecutionRollbackStatus')

const WorkflowStepMessageSchema = z.string().min(0).max(500).openapi('WorkflowStepMessage')

const WorkflowStepInputsSchema = z.string().openapi('WorkflowStepInputs')

const WorkflowStepOutputsSchema = z.string().openapi('WorkflowStepOutputs')

const WorkflowStepTimeoutSecondsIntegerSchema = z
  .int()
  .min(0)
  .max(43200)
  .openapi('WorkflowStepTimeoutSecondsInteger')

const GetWorkflowStepExecutionResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    stepExecutionId: WorkflowStepExecutionIdSchema.exactOptional().openapi({
      description:
        'The unique identifier for the runtime version of the workflow step that you specified in the request.',
    }),
    workflowBuildVersionArn: WorkflowBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines this workflow step.',
    }),
    workflowExecutionId: WorkflowExecutionIdSchema.exactOptional().openapi({
      description:
        'The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow step creates.',
    }),
    name: WorkflowStepNameSchema.exactOptional().openapi({
      description: 'The name of the specified runtime instance of the workflow step.',
    }),
    description: WorkflowStepDescriptionSchema.exactOptional().openapi({
      description: 'Describes the specified workflow step.',
    }),
    action: WorkflowStepActionSchema.exactOptional().openapi({
      description: 'The name of the action that the specified step performs.',
    }),
    status: WorkflowStepExecutionStatusSchema.exactOptional().openapi({
      description: 'The current status for the specified runtime version of the workflow step.',
    }),
    rollbackStatus: WorkflowStepExecutionRollbackStatusSchema.exactOptional().openapi({
      description:
        'Reports on the rollback status of the specified runtime version of the workflow step, if applicable.',
    }),
    message: WorkflowStepMessageSchema.exactOptional().openapi({
      description:
        'The output message from the specified runtime instance of the workflow step, if applicable.',
    }),
    inputs: WorkflowStepInputsSchema.exactOptional().openapi({
      description:
        'Input parameters that Image Builder provided for the specified runtime instance of the workflow step.',
    }),
    outputs: WorkflowStepOutputsSchema.exactOptional().openapi({
      description:
        'The file names that the specified runtime version of the workflow step created as output.',
    }),
    startTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the specified runtime version of the workflow step started.',
    }),
    endTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The timestamp when the specified runtime instance of the workflow step finished.',
    }),
    onFailure: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The action to perform if the workflow step fails.',
    }),
    timeoutSeconds: WorkflowStepTimeoutSecondsIntegerSchema.exactOptional().openapi({
      description: 'The maximum duration in seconds for this step to complete its action.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowStepExecutionResponse')

const ImportComponentResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    componentBuildVersionArn: ComponentBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the imported component.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ImportComponentResponse')

const ImportVmImageResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the AMI that was created during the VM import process. This AMI is used as the base image for the recipe that imported the VM.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token that was used for this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ImportVmImageResponse')

const ComponentSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the component.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({ description: 'The name of the component.' }),
    version: VersionNumberSchema.exactOptional().openapi({
      description: 'The version of the component.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The operating system platform of the component.',
    }),
    supportedOsVersions: OsVersionListSchema.exactOptional().openapi({
      description:
        'The operating system (OS) version that the component supports. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.',
    }),
    state: ComponentStateSchema.exactOptional().openapi({
      description: 'Describes the current status of the component.',
    }),
    type: ComponentTypeSchema.exactOptional().openapi({
      description:
        'The component type specifies whether Image Builder uses the component to build the image or only to test it.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the component.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the component.',
    }),
    changeDescription: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The change description for the current version of the component.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The original creation date of the component.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags that apply to the component.',
    }),
    publisher: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.',
    }),
    obfuscate: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.',
    }),
  })
  .openapi({ description: 'A high-level summary of a component.', required: [] })
  .openapi('ComponentSummary')

const ComponentSummaryListSchema = z.array(ComponentSummarySchema).openapi('ComponentSummaryList')

const PaginationTokenSchema = z.string().min(1).max(65535).openapi('PaginationToken')

const ListComponentBuildVersionsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    componentSummaryList: ComponentSummaryListSchema.exactOptional().openapi({
      description: 'The list of component summaries for the specified semantic version.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListComponentBuildVersionsResponse')

const InvalidPaginationTokenExceptionSchema = z.any().openapi('InvalidPaginationTokenException')

const ComponentVersionSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of the component.</p> <note> <p>Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:</p> <ol> <li> <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.</p> </li> <li> <p>Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;</p> </li> <li> <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p> </li> </ol> </note>",
    }),
    name: ResourceNameSchema.exactOptional().openapi({ description: 'The name of the component.' }),
    version: VersionNumberSchema.exactOptional().openapi({
      description:
        '<p>The semantic version of the component.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the component.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The platform of the component.',
    }),
    supportedOsVersions: OsVersionListSchema.exactOptional().openapi({
      description:
        'he operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.',
    }),
    type: ComponentTypeSchema.exactOptional().openapi({
      description:
        'The type of the component denotes whether the component is used to build the image or only to test it.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the component.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date that the component was created.',
    }),
  })
  .openapi({
    description:
      'The defining characteristics of a specific version of an Amazon Web Services TOE component.',
    required: [],
  })
  .openapi('ComponentVersion')

const ComponentVersionListSchema = z.array(ComponentVersionSchema).openapi('ComponentVersionList')

const ListComponentsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    componentVersionList: ComponentVersionListSchema.exactOptional().openapi({
      description:
        '<p>The list of component semantic versions.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> </note>',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListComponentsResponse')

const FilterNameSchema = z
  .string()
  .regex(/^[a-zA-Z]{1,1024}$/)
  .openapi('FilterName')

const FilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z.\/_ :-]{1,1024}$/)
  .openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).min(1).max(10).openapi('FilterValues')

const FilterSchema = z
  .object({
    name: FilterNameSchema.exactOptional().openapi({
      description: 'The name of the filter. Filter names are case-sensitive.',
    }),
    values: FilterValuesSchema.exactOptional().openapi({
      description: 'The filter values. Filter values are case-sensitive.',
    }),
  })
  .openapi({
    description:
      'A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.',
    required: [],
  })
  .openapi('Filter')

const ContainerRecipeSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the container recipe.',
    }),
    containerType: ContainerTypeSchema.exactOptional().openapi({
      description: 'Specifies the type of container, such as "Docker".',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the container recipe.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The system platform for the container, such as Windows or Linux.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the container recipe.',
    }),
    parentImage: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The base image for the container recipe.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date when this container recipe was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Tags that are attached to the container recipe.',
    }),
  })
  .openapi({ description: 'A summary of a container recipe', required: [] })
  .openapi('ContainerRecipeSummary')

const ContainerRecipeSummaryListSchema = z
  .array(ContainerRecipeSummarySchema)
  .openapi('ContainerRecipeSummaryList')

const ListContainerRecipesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    containerRecipeSummaryList: ContainerRecipeSummaryListSchema.exactOptional().openapi({
      description: 'The list of container recipes returned for the request.',
    }),
    nextToken: NonEmptyStringSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListContainerRecipesResponse')

const RegionListSchema = z.array(NonEmptyStringSchema).openapi('RegionList')

const DistributionConfigurationSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the distribution configuration.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the distribution configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the distribution configuration.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the distribution configuration was created.',
    }),
    dateUpdated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the distribution configuration was updated.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags associated with the distribution configuration.',
    }),
    regions: RegionListSchema.exactOptional().openapi({
      description: 'A list of Regions where the container image is distributed to.',
    }),
  })
  .openapi({ description: 'A high-level overview of a distribution configuration.', required: [] })
  .openapi('DistributionConfigurationSummary')

const DistributionConfigurationSummaryListSchema = z
  .array(DistributionConfigurationSummarySchema)
  .openapi('DistributionConfigurationSummaryList')

const ListDistributionConfigurationsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    distributionConfigurationSummaryList:
      DistributionConfigurationSummaryListSchema.exactOptional().openapi({
        description: 'The list of distributions.',
      }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDistributionConfigurationsResponse')

const ImageSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({ description: 'The name of the image.' }),
    type: ImageTypeSchema.exactOptional().openapi({
      description: 'Specifies whether this image produces an AMI or a container image.',
    }),
    version: VersionNumberSchema.exactOptional().openapi({
      description: 'The version of the image.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The image operating system platform, such as Linux or Windows.',
    }),
    osVersion: OsVersionSchema.exactOptional().openapi({
      description:
        'The operating system version of the instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.',
    }),
    state: ImageStateSchema.exactOptional().openapi({ description: 'The state of the image.' }),
    owner: NonEmptyStringSchema.exactOptional().openapi({ description: 'The owner of the image.' }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which Image Builder created this image.',
    }),
    outputResources: OutputResourcesSchema.exactOptional().openapi({
      description: 'The output resources that Image Builder produced when it created this image.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags that apply to this image.',
    }),
    buildType: BuildTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates the type of build that created this image. The build can be initiated in the following ways:</p> <ul> <li> <p> <b>USER_INITIATED</b> – A manual pipeline build request.</p> </li> <li> <p> <b>SCHEDULED</b> – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p> </li> <li> <p> <b>IMPORT</b> – A VM import created the image to use as the base image for the recipe.</p> </li> </ul>',
    }),
    imageSource: ImageSourceSchema.exactOptional().openapi({
      description: 'The origin of the base image that Image Builder used to build this image.',
    }),
  })
  .openapi({ description: 'An image summary.', required: [] })
  .openapi('ImageSummary')

const ImageSummaryListSchema = z.array(ImageSummarySchema).openapi('ImageSummaryList')

const ListImageBuildVersionsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageSummaryList: ImageSummaryListSchema.exactOptional().openapi({
      description: 'The list of image build versions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImageBuildVersionsResponse')

const ImagePackageSchema = z
  .object({
    packageName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the package as reported to the operating system package manager.',
    }),
    packageVersion: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The version of the package as reported to the operating system package manager.',
    }),
  })
  .openapi({
    description: 'Represents a package installed on an Image Builder image.',
    required: [],
  })
  .openapi('ImagePackage')

const ImagePackageListSchema = z.array(ImagePackageSchema).openapi('ImagePackageList')

const ListImagePackagesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imagePackageList: ImagePackageListSchema.exactOptional().openapi({
      description: 'The list of Image Packages returned in the response.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImagePackagesResponse')

const ListImagePipelineImagesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageSummaryList: ImageSummaryListSchema.exactOptional().openapi({
      description: 'The list of images built by this pipeline.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImagePipelineImagesResponse')

const ImagePipelineListSchema = z.array(ImagePipelineSchema).openapi('ImagePipelineList')

const ListImagePipelinesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imagePipelineList: ImagePipelineListSchema.exactOptional().openapi({
      description: 'The list of image pipelines.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImagePipelinesResponse')

const ImageRecipeSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image recipe.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the image recipe.',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description: 'The platform of the image recipe.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the image recipe.',
    }),
    parentImage: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The base image of the image recipe.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this image recipe was created.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the image recipe.' }),
  })
  .openapi({ description: 'A summary of an image recipe.', required: [] })
  .openapi('ImageRecipeSummary')

const ImageRecipeSummaryListSchema = z
  .array(ImageRecipeSummarySchema)
  .openapi('ImageRecipeSummaryList')

const ListImageRecipesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageRecipeSummaryList: ImageRecipeSummaryListSchema.exactOptional().openapi({
      description: 'The list of image pipelines.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImageRecipesResponse')

const SeverityCountNumberSchema = z.int().openapi('SeverityCountNumber')

const SeverityCountsSchema = z
  .object({
    all: SeverityCountNumberSchema.exactOptional().openapi({
      description:
        'The total number of findings across all severity levels for the specified filter.',
    }),
    critical: SeverityCountNumberSchema.exactOptional().openapi({
      description: 'The number of critical severity findings for the specified filter.',
    }),
    high: SeverityCountNumberSchema.exactOptional().openapi({
      description: 'The number of high severity findings for the specified filter.',
    }),
    medium: SeverityCountNumberSchema.exactOptional().openapi({
      description: 'The number of medium severity findings for the specified filter.',
    }),
  })
  .openapi({
    description:
      'Includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified filter.',
    required: [],
  })
  .openapi('SeverityCounts')

const AccountAggregationSchema = z
  .object({
    accountId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Identifies the account that owns the aggregated resource findings.',
    }),
    severityCounts: SeverityCountsSchema.exactOptional().openapi({
      description:
        'Counts by severity level for medium severity and higher level findings, plus a total for all of the findings.',
    }),
  })
  .openapi({
    description:
      'Contains counts of vulnerability findings from image scans that run when you create new Image Builder images, or build new versions of existing images. The vulnerability counts are grouped by severity level. The counts are aggregated across resources to create the final tally for the account that owns them.',
    required: [],
  })
  .openapi('AccountAggregation')

const ImageAggregationSchema = z
  .object({
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) that identifies the image for this aggregation.',
    }),
    severityCounts: SeverityCountsSchema.exactOptional().openapi({
      description:
        'Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image.',
    }),
  })
  .openapi({ description: 'Contains vulnerability counts for a specific image.', required: [] })
  .openapi('ImageAggregation')

const ImagePipelineAggregationSchema = z
  .object({
    imagePipelineArn: ImagePipelineArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) that identifies the image pipeline for this aggregation.',
    }),
    severityCounts: SeverityCountsSchema.exactOptional().openapi({
      description:
        'Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image pipeline.',
    }),
  })
  .openapi({
    description: 'Contains vulnerability counts for a specific image pipeline.',
    required: [],
  })
  .openapi('ImagePipelineAggregation')

const VulnerabilityIdAggregationSchema = z
  .object({
    vulnerabilityId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The vulnerability Id for this set of counts.',
    }),
    severityCounts: SeverityCountsSchema.exactOptional().openapi({
      description:
        'Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified vulnerability.',
    }),
  })
  .openapi({
    description: 'Includes counts of image and pipeline resource findings by vulnerability.',
    required: [],
  })
  .openapi('VulnerabilityIdAggregation')

const ImageScanFindingAggregationSchema = z
  .object({
    accountAggregation: AccountAggregationSchema.exactOptional().openapi({
      description: 'Returns an object that contains severity counts based on an account ID.',
    }),
    imageAggregation: ImageAggregationSchema.exactOptional().openapi({
      description:
        'Returns an object that contains severity counts based on the Amazon Resource Name (ARN) for a specific image.',
    }),
    imagePipelineAggregation: ImagePipelineAggregationSchema.exactOptional().openapi({
      description:
        'Returns an object that contains severity counts based on an image pipeline ARN.',
    }),
    vulnerabilityIdAggregation: VulnerabilityIdAggregationSchema.exactOptional().openapi({
      description: 'Returns an object that contains severity counts based on vulnerability ID.',
    }),
  })
  .openapi({
    description:
      'This returns exactly one type of aggregation, based on the filter that Image Builder applies in its API action.',
    required: [],
  })
  .openapi('ImageScanFindingAggregation')

const ImageScanFindingAggregationsListSchema = z
  .array(ImageScanFindingAggregationSchema)
  .openapi('ImageScanFindingAggregationsList')

const ListImageScanFindingAggregationsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    aggregationType: NonEmptyStringSchema.exactOptional().openapi({
      description:
        '<p>The aggregation type specifies what type of key is used to group the image scan findings. Image Builder returns results based on the request filter. If you didn\'t specify a filter in the request, the type defaults to <code>accountId</code>.</p> <p class="title"> <b>Aggregation types</b> </p> <ul> <li> <p>accountId</p> </li> <li> <p>imageBuildVersionArn</p> </li> <li> <p>imagePipelineArn</p> </li> <li> <p>vulnerabilityId</p> </li> </ul> <p>Each aggregation includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for each key value.</p>',
    }),
    responses: ImageScanFindingAggregationsListSchema.exactOptional().openapi({
      description: 'An array of image scan finding aggregations that match the filter criteria.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImageScanFindingAggregationsResponse')

const RemediationRecommendationSchema = z
  .object({
    text: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The recommended course of action to remediate the finding.',
    }),
    url: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'A link to more information about the recommended remediation for this vulnerability.',
    }),
  })
  .openapi({
    description: 'Details about the recommended course of action to remediate the finding.',
    required: [],
  })
  .openapi('RemediationRecommendation')

const RemediationSchema = z
  .object({
    recommendation: RemediationRecommendationSchema.exactOptional().openapi({
      description:
        'An object that contains information about the recommended course of action to remediate the finding.',
    }),
  })
  .openapi({ description: 'Information about how to remediate a finding.', required: [] })
  .openapi('Remediation')

const DateTimeTimestampSchema = z.iso.datetime({ offset: true }).openapi('DateTimeTimestamp')

const NonNegativeDoubleSchema = z.float64().min(0).openapi('NonNegativeDouble')

const CvssScoreAdjustmentSchema = z
  .object({
    metric: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The metric that Amazon Inspector used to adjust the CVSS score.',
    }),
    reason: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The reason for the CVSS score adjustment.',
    }),
  })
  .openapi({
    description:
      'Details about an adjustment that Amazon Inspector made to the CVSS score for a finding.',
    required: [],
  })
  .openapi('CvssScoreAdjustment')

const CvssScoreAdjustmentListSchema = z
  .array(CvssScoreAdjustmentSchema)
  .openapi('CvssScoreAdjustmentList')

const CvssScoreDetailsSchema = z
  .object({
    scoreSource: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The source for the CVSS score.',
    }),
    cvssSource: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The source of the finding.',
    }),
    version: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The CVSS version that generated the score.',
    }),
    score: NonNegativeDoubleSchema.exactOptional().openapi({ description: 'The CVSS score.' }),
    scoringVector: NonEmptyStringSchema.exactOptional().openapi({
      description: 'A vector that measures the severity of the vulnerability.',
    }),
    adjustments: CvssScoreAdjustmentListSchema.exactOptional().openapi({
      description:
        'An object that contains details about an adjustment that Amazon Inspector made to the CVSS score for the finding.',
    }),
  })
  .openapi({
    description:
      'Details about the source of the score, and the factors that determined the adjustments to create the final score.',
    required: [],
  })
  .openapi('CvssScoreDetails')

const InspectorScoreDetailsSchema = z
  .object({
    adjustedCvss: CvssScoreDetailsSchema.exactOptional().openapi({
      description:
        'An object that contains details about an adjustment that Amazon Inspector made to the CVSS score for the finding.',
    }),
  })
  .openapi({
    description:
      'Information about the factors that influenced the score that Amazon Inspector assigned for a finding.',
    required: [],
  })
  .openapi('InspectorScoreDetails')

const VulnerabilityIdSchema = z.string().openapi('VulnerabilityId')

const SourceLayerHashSchema = z.string().openapi('SourceLayerHash')

const PackageEpochSchema = z.int().openapi('PackageEpoch')

const PackageArchitectureSchema = z.string().openapi('PackageArchitecture')

const VulnerablePackageSchema = z
  .object({
    name: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the vulnerable package.',
    }),
    version: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The version of the vulnerable package.',
    }),
    sourceLayerHash: SourceLayerHashSchema.exactOptional().openapi({
      description: 'The source layer hash of the vulnerable package.',
    }),
    epoch: PackageEpochSchema.exactOptional().openapi({
      description: 'The epoch of the vulnerable package.',
    }),
    release: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The release of the vulnerable package.',
    }),
    arch: PackageArchitectureSchema.exactOptional().openapi({
      description: 'The architecture of the vulnerable package.',
    }),
    packageManager: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The package manager of the vulnerable package.',
    }),
    filePath: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The file path of the vulnerable package.',
    }),
    fixedInVersion: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The version of the package that contains the vulnerability fix.',
    }),
    remediation: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The code to run in your environment to update packages with a fix available.',
    }),
  })
  .openapi({
    description:
      'Information about a vulnerable package that Amazon Inspector identifies in a finding.',
    required: [],
  })
  .openapi('VulnerablePackage')

const VulnerablePackageListSchema = z
  .array(VulnerablePackageSchema)
  .openapi('VulnerablePackageList')

const CvssScoreSchema = z
  .object({
    baseScore: NonNegativeDoubleSchema.exactOptional().openapi({
      description: 'The CVSS base score.',
    }),
    scoringVector: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The vector string of the CVSS score.',
    }),
    version: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The CVSS version that generated the score.',
    }),
    source: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The source of the CVSS score.',
    }),
  })
  .openapi({
    description:
      'Amazon Inspector generates a risk score for each finding. This score helps you to prioritize findings, to focus on the most critical findings and the most vulnerable resources. The score uses the Common Vulnerability Scoring System (CVSS) format. This format is a modification of the base CVSS score that the National Vulnerability Database (NVD) provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User Guide</i>.',
    required: [],
  })
  .openapi('CvssScore')

const CvssScoreListSchema = z.array(CvssScoreSchema).openapi('CvssScoreList')

const VulnerabilityIdListSchema = z.array(VulnerabilityIdSchema).openapi('VulnerabilityIdList')

const NonEmptyStringListSchema = z.array(NonEmptyStringSchema).min(1).openapi('NonEmptyStringList')

const PackageVulnerabilityDetailsSchema = z
  .object({
    vulnerabilityId: VulnerabilityIdSchema.openapi({
      description: 'A unique identifier for this vulnerability.',
    }),
    vulnerablePackages: VulnerablePackageListSchema.exactOptional().openapi({
      description: 'The packages that this vulnerability impacts.',
    }),
    source: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The source of the vulnerability information.',
    }),
    cvss: CvssScoreListSchema.exactOptional().openapi({
      description:
        'CVSS scores for one or more vulnerabilities that Amazon Inspector identified for a package.',
    }),
    relatedVulnerabilities: VulnerabilityIdListSchema.exactOptional().openapi({
      description: 'Vulnerabilities that are often related to the findings for the package.',
    }),
    sourceUrl: NonEmptyStringSchema.exactOptional().openapi({
      description: 'A link to the source of the vulnerability information.',
    }),
    vendorSeverity: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The severity that the vendor assigned to this vulnerability type.',
    }),
    vendorCreatedAt: DateTimeTimestampSchema.exactOptional().openapi({
      description:
        "The date and time when this vulnerability was first added to the vendor's database.",
    }),
    vendorUpdatedAt: DateTimeTimestampSchema.exactOptional().openapi({
      description:
        'The date and time when the vendor last updated this vulnerability in their database.',
    }),
    referenceUrls: NonEmptyStringListSchema.exactOptional().openapi({
      description:
        'Links to web pages that contain details about the vulnerabilities that Amazon Inspector identified for the package.',
    }),
  })
  .openapi({
    required: ['vulnerabilityId'],
    description: 'Information about package vulnerability findings.',
  })
  .openapi('PackageVulnerabilityDetails')

const ImageScanFindingSchema = z
  .object({
    awsAccountId: NonEmptyStringSchema.exactOptional().openapi({
      description: "The Amazon Web Services account ID that's associated with the finding.",
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description:
        "The Amazon Resource Name (ARN) of the image build version that's associated with the finding.",
    }),
    imagePipelineArn: ImagePipelineArnSchema.exactOptional().openapi({
      description:
        "The Amazon Resource Name (ARN) of the image pipeline that's associated with the finding.",
    }),
    type: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The type of the finding. Image Builder looks for findings of the type <code>PACKAGE_VULNERABILITY</code> that apply to output images, and excludes other types.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the finding.',
    }),
    title: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The title of the finding.',
    }),
    remediation: RemediationSchema.exactOptional().openapi({
      description: 'An object that contains the details about how to remediate the finding.',
    }),
    severity: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The severity of the finding.',
    }),
    firstObservedAt: DateTimeTimestampSchema.exactOptional().openapi({
      description: 'The date and time when the finding was first observed.',
    }),
    updatedAt: DateTimeTimestampSchema.exactOptional().openapi({
      description: 'The timestamp when the finding was last updated.',
    }),
    inspectorScore: NonNegativeDoubleSchema.exactOptional().openapi({
      description: 'The score that Amazon Inspector assigned for the finding.',
    }),
    inspectorScoreDetails: InspectorScoreDetailsSchema.exactOptional().openapi({
      description: 'An object that contains details of the Amazon Inspector score.',
    }),
    packageVulnerabilityDetails: PackageVulnerabilityDetailsSchema.exactOptional().openapi({
      description: 'An object that contains the details of a package vulnerability finding.',
    }),
    fixAvailable: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'Details about whether a fix is available for any of the packages that are identified in the finding through a version update.',
    }),
  })
  .openapi({ description: 'Contains details about a vulnerability scan finding.', required: [] })
  .openapi('ImageScanFinding')

const ImageScanFindingsListSchema = z
  .array(ImageScanFindingSchema)
  .max(25)
  .openapi('ImageScanFindingsList')

const ListImageScanFindingsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    findings: ImageScanFindingsListSchema.exactOptional().openapi({
      description:
        'The image scan findings for your account that meet your request filter criteria.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImageScanFindingsResponse')

const ImageScanFindingsFilterValuesSchema = z
  .array(FilterValueSchema)
  .length(1)
  .openapi('ImageScanFindingsFilterValues')

const ImageScanFindingsFilterSchema = z
  .object({
    name: FilterNameSchema.exactOptional().openapi({
      description: 'The name of the image scan finding filter. Filter names are case-sensitive.',
    }),
    values: ImageScanFindingsFilterValuesSchema.exactOptional().openapi({
      description: 'The filter values. Filter values are case-sensitive.',
    }),
  })
  .openapi({
    description:
      'A name value pair that Image Builder applies to streamline results from the vulnerability scan findings list action.',
    required: [],
  })
  .openapi('ImageScanFindingsFilter')

const ImageVersionSchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description:
        "<p>The Amazon Resource Name (ARN) of a specific version of an Image Builder image.</p> <note> <p>Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:</p> <ol> <li> <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.</p> </li> <li> <p>Version ARNs have only the first three nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;</p> </li> <li> <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p> </li> </ol> </note>",
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of this specific version of an Image Builder image.',
    }),
    type: ImageTypeSchema.exactOptional().openapi({
      description: 'Specifies whether this image produces an AMI or a container image.',
    }),
    version: VersionNumberSchema.exactOptional().openapi({
      description:
        '<p>Details for a specific version of an Image Builder image. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    platform: PlatformSchema.exactOptional().openapi({
      description:
        'The operating system platform of the image version, for example "Windows" or "Linux".',
    }),
    osVersion: OsVersionSchema.exactOptional().openapi({
      description:
        'The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.',
    }),
    owner: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The owner of the image version.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description:
        'The date on which this specific version of the Image Builder image was created.',
    }),
    buildType: BuildTypeSchema.exactOptional().openapi({
      description:
        '<p>Indicates the type of build that created this image. The build can be initiated in the following ways:</p> <ul> <li> <p> <b>USER_INITIATED</b> – A manual pipeline build request.</p> </li> <li> <p> <b>SCHEDULED</b> – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p> </li> <li> <p> <b>IMPORT</b> – A VM import created the image to use as the base image for the recipe.</p> </li> </ul>',
    }),
    imageSource: ImageSourceSchema.exactOptional().openapi({
      description: 'The origin of the base image that Image Builder used to build this image.',
    }),
  })
  .openapi({
    description: 'The defining characteristics of a specific version of an Image Builder image.',
    required: [],
  })
  .openapi('ImageVersion')

const ImageVersionListSchema = z.array(ImageVersionSchema).openapi('ImageVersionList')

const ListImagesResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageVersionList: ImageVersionListSchema.exactOptional().openapi({
      description:
        '<p>The list of image semantic versions.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListImagesResponse')

const InfrastructureConfigurationSummarySchema = z
  .object({
    arn: ImageBuilderArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the infrastructure configuration.',
    }),
    name: ResourceNameSchema.exactOptional().openapi({
      description: 'The name of the infrastructure configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the infrastructure configuration.',
    }),
    dateCreated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the infrastructure configuration was created.',
    }),
    dateUpdated: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which the infrastructure configuration was last updated.',
    }),
    resourceTags: ResourceTagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the image created by Image Builder.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of the infrastructure configuration.',
    }),
    instanceTypes: InstanceTypeListSchema.exactOptional().openapi({
      description: 'The instance types of the infrastructure configuration.',
    }),
    instanceProfileName: InstanceProfileNameTypeSchema.exactOptional().openapi({
      description: 'The instance profile of the infrastructure configuration.',
    }),
  })
  .openapi({ description: 'The infrastructure used when building Amazon EC2 AMIs.', required: [] })
  .openapi('InfrastructureConfigurationSummary')

const InfrastructureConfigurationSummaryListSchema = z
  .array(InfrastructureConfigurationSummarySchema)
  .openapi('InfrastructureConfigurationSummaryList')

const ListInfrastructureConfigurationsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    infrastructureConfigurationSummaryList:
      InfrastructureConfigurationSummaryListSchema.exactOptional().openapi({
        description: 'The list of infrastructure configurations.',
      }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListInfrastructureConfigurationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags for the specified resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const WorkflowExecutionMetadataSchema = z
  .object({
    workflowBuildVersionArn: WorkflowBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the workflow resource build version that ran.',
    }),
    workflowExecutionId: WorkflowExecutionIdSchema.exactOptional().openapi({
      description:
        'Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a workflow.',
    }),
    type: WorkflowTypeSchema.exactOptional().openapi({
      description:
        'Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow.',
    }),
    status: WorkflowExecutionStatusSchema.exactOptional().openapi({
      description: 'The current runtime status for this workflow.',
    }),
    message: WorkflowExecutionMessageSchema.exactOptional().openapi({
      description: 'The runtime output message from the workflow, if applicable.',
    }),
    totalStepCount: WorkflowStepCountSchema.exactOptional().openapi({
      description:
        'The total number of steps in the workflow. This should equal the sum of the step counts for steps that succeeded, were skipped, and failed.',
    }),
    totalStepsSucceeded: WorkflowStepCountSchema.exactOptional().openapi({
      description: 'A runtime count for the number of steps in the workflow that ran successfully.',
    }),
    totalStepsFailed: WorkflowStepCountSchema.exactOptional().openapi({
      description: 'A runtime count for the number of steps in the workflow that failed.',
    }),
    totalStepsSkipped: WorkflowStepCountSchema.exactOptional().openapi({
      description: 'A runtime count for the number of steps in the workflow that were skipped.',
    }),
    startTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the runtime instance of this workflow started.',
    }),
    endTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when this runtime instance of the workflow finished.',
    }),
  })
  .openapi({
    description:
      'Metadata that includes details and status from this runtime instance of the workflow.',
    required: [],
  })
  .openapi('WorkflowExecutionMetadata')

const WorkflowExecutionsListSchema = z
  .array(WorkflowExecutionMetadataSchema)
  .openapi('WorkflowExecutionsList')

const ImageBuildMessageSchema = z.string().min(0).max(500).openapi('ImageBuildMessage')

const ListWorkflowExecutionsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    workflowExecutions: WorkflowExecutionsListSchema.exactOptional().openapi({
      description:
        'Contains an array of runtime details that represents each time a workflow ran for the requested image build version.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The resource ARN of the image build version for which you requested a list of workflow runtime details.',
    }),
    message: ImageBuildMessageSchema.exactOptional().openapi({
      description: 'The output message from the list action, if applicable.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListWorkflowExecutionsResponse')

const WorkflowStepMetadataSchema = z
  .object({
    stepExecutionId: WorkflowStepExecutionIdSchema.exactOptional().openapi({
      description: 'A unique identifier for the workflow step, assigned at runtime.',
    }),
    name: WorkflowStepNameSchema.exactOptional().openapi({
      description: 'The name of the workflow step.',
    }),
    description: WorkflowStepDescriptionSchema.exactOptional().openapi({
      description: 'Description of the workflow step.',
    }),
    action: WorkflowStepActionSchema.exactOptional().openapi({
      description: 'The step action name.',
    }),
    status: WorkflowStepExecutionStatusSchema.exactOptional().openapi({
      description: 'Runtime status for the workflow step.',
    }),
    rollbackStatus: WorkflowStepExecutionRollbackStatusSchema.exactOptional().openapi({
      description: 'Reports on the rollback status of the step, if applicable.',
    }),
    message: WorkflowStepMessageSchema.exactOptional().openapi({
      description: 'Detailed output message that the workflow step provides at runtime.',
    }),
    inputs: WorkflowStepInputsSchema.exactOptional().openapi({
      description: 'Input parameters that Image Builder provides for the workflow step.',
    }),
    outputs: WorkflowStepOutputsSchema.exactOptional().openapi({
      description:
        'The file names that the workflow step created as output for this runtime instance of the workflow.',
    }),
    startTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the workflow step started.',
    }),
    endTime: DateTimeSchema.exactOptional().openapi({
      description: 'The timestamp when the workflow step finished.',
    }),
  })
  .openapi({ description: 'Runtime details and status for the workflow step.', required: [] })
  .openapi('WorkflowStepMetadata')

const WorkflowStepExecutionsListSchema = z
  .array(WorkflowStepMetadataSchema)
  .openapi('WorkflowStepExecutionsList')

const ListWorkflowStepExecutionsResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    steps: WorkflowStepExecutionsListSchema.exactOptional().openapi({
      description:
        'Contains an array of runtime details that represents each step in this runtime instance of the workflow.',
    }),
    workflowBuildVersionArn: WorkflowBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The build version ARN for the Image Builder workflow resource that defines the steps for this runtime instance of the workflow.',
    }),
    workflowExecutionId: WorkflowExecutionIdSchema.exactOptional().openapi({
      description:
        'The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description:
        "The image build version resource ARN that's associated with the specified runtime instance of the workflow.",
    }),
    message: ImageBuildMessageSchema.exactOptional().openapi({
      description: 'The output message from the list action, if applicable.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        "The next token used for paginated responses. When this field isn't empty, there are additional elements that the service has'ot included in this request. Use this token with the next request to retrieve additional objects.",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListWorkflowStepExecutionsResponse')

const PutComponentPolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    componentArn: ComponentBuildVersionArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the component that this policy was applied to.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutComponentPolicyResponse')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const PutContainerRecipePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the container recipe that this policy was applied to.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutContainerRecipePolicyResponse')

const PutImagePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image that this policy was applied to.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutImagePolicyResponse')

const PutImageRecipePolicyResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that this policy was applied to.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutImageRecipePolicyResponse')

const StartImagePipelineExecutionResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the image that was created by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartImagePipelineExecutionResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateDistributionConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that was updated by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDistributionConfigurationResponse')

const UpdateImagePipelineResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imagePipelineArn: ImagePipelineArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image pipeline that was updated by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateImagePipelineResponse')

const UpdateInfrastructureConfigurationResponseSchema = z
  .object({
    requestId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The request ID that uniquely identifies this request.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by this request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateInfrastructureConfigurationResponse')

const CancelImageCreationRequestSchema = z
  .object({
    imageBuildVersionArn: ImageBuildVersionArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image that you want to cancel creation for.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.',
    }),
  })
  .openapi({
    required: ['imageBuildVersionArn', 'clientToken'],
    title: 'CancelImageCreationRequest',
  })
  .openapi('CancelImageCreationRequest')

const ComponentFormatSchema = z.literal('SHELL').openapi('ComponentFormat')

const ComponentVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
  )
  .openapi('ComponentVersionArn')

const InlineComponentDataSchema = z
  .string()
  .regex(/[^\x00]+/)
  .min(1)
  .max(16000)
  .openapi('InlineComponentData')

const UriSchema = z.string().openapi('Uri')

const CreateComponentRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({ description: 'The name of the component.' }),
    semanticVersion: VersionNumberSchema.openapi({
      description:
        '<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Describes the contents of the component.',
    }),
    changeDescription: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.',
    }),
    platform: PlatformSchema.openapi({
      description: 'The operating system platform of the component.',
    }),
    supportedOsVersions: OsVersionListSchema.exactOptional().openapi({
      description:
        'The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.',
    }),
    data: InlineComponentDataSchema.exactOptional().openapi({
      description:
        'Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.',
    }),
    uri: UriSchema.exactOptional().openapi({
      description:
        '<p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p>',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The ID of the KMS key that is used to encrypt this component.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags that apply to the component.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token of the component.',
    }),
  })
  .openapi({
    required: ['name', 'semanticVersion', 'platform', 'clientToken'],
    title: 'CreateComponentRequest',
  })
  .openapi('CreateComponentRequest')

const InlineDockerFileTemplateSchema = z
  .string()
  .regex(/[^\x00]+/)
  .min(1)
  .max(16000)
  .openapi('InlineDockerFileTemplate')

const CreateContainerRecipeRequestSchema = z
  .object({
    containerType: ContainerTypeSchema.openapi({ description: 'The type of container to create.' }),
    name: ResourceNameSchema.openapi({ description: 'The name of the container recipe.' }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the container recipe.',
    }),
    semanticVersion: VersionNumberSchema.openapi({
      description:
        '<p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
    }),
    components: ComponentConfigurationListSchema.openapi({
      description:
        'Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.',
    }),
    instanceConfiguration: InstanceConfigurationSchema.exactOptional().openapi({
      description:
        'A group of options that can be used to configure an instance for building and testing container images.',
    }),
    dockerfileTemplateData: InlineDockerFileTemplateSchema.exactOptional().openapi({
      description: 'The Dockerfile template used to build your image as an inline data blob.',
    }),
    dockerfileTemplateUri: UriSchema.exactOptional().openapi({
      description:
        'The Amazon S3 URI for the Dockerfile that will be used to build your container image.',
    }),
    platformOverride: PlatformSchema.exactOptional().openapi({
      description: 'Specifies the operating system platform when you use a custom base image.',
    }),
    imageOsVersionOverride: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Specifies the operating system version for the base image.',
    }),
    parentImage: NonEmptyStringSchema.openapi({
      description: 'The base image for the container recipe.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Tags that are attached to the container recipe.',
    }),
    workingDirectory: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The working directory for use during build and test workflows.',
    }),
    targetRepository: TargetContainerRepositorySchema.openapi({
      description: 'The destination repository for the container image.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'Identifies which KMS key is used to encrypt the container image.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The client token used to make this request idempotent.',
    }),
  })
  .openapi({
    required: [
      'containerType',
      'name',
      'semanticVersion',
      'components',
      'parentImage',
      'targetRepository',
      'clientToken',
    ],
    title: 'CreateContainerRecipeRequest',
  })
  .openapi('CreateContainerRecipeRequest')

const CreateDistributionConfigurationRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({
      description: 'The name of the distribution configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the distribution configuration.',
    }),
    distributions: DistributionListSchema.openapi({
      description: 'The distributions of the distribution configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of the distribution configuration.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token of the distribution configuration.',
    }),
  })
  .openapi({
    required: ['name', 'distributions', 'clientToken'],
    title: 'CreateDistributionConfigurationRequest',
  })
  .openapi('CreateDistributionConfigurationRequest')

const CreateImagePipelineRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({ description: 'The name of the image pipeline.' }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the image pipeline.',
    }),
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.',
    }),
    imageTestsConfiguration: ImageTestsConfigurationSchema.exactOptional().openapi({
      description: 'The image test configuration of the image pipeline.',
    }),
    enhancedImageMetadataEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
    }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description: 'The schedule of the image pipeline.',
    }),
    status: PipelineStatusSchema.exactOptional().openapi({
      description: 'The status of the image pipeline.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the image pipeline.' }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional().openapi({
      description: 'Contains settings for vulnerability scans.',
    }),
  })
  .openapi({
    required: ['name', 'infrastructureConfigurationArn', 'clientToken'],
    title: 'CreateImagePipelineRequest',
  })
  .openapi('CreateImagePipelineRequest')

const CreateImageRecipeRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({ description: 'The name of the image recipe.' }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the image recipe.',
    }),
    semanticVersion: VersionNumberSchema.openapi({
      description:
        '<p>The semantic version of the image recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
    }),
    components: ComponentConfigurationListSchema.openapi({
      description: 'The components included in the image recipe.',
    }),
    parentImage: NonEmptyStringSchema.openapi({
      description:
        'The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.',
    }),
    blockDeviceMappings: InstanceBlockDeviceMappingsSchema.exactOptional().openapi({
      description: 'The block device mappings of the image recipe.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the image recipe.' }),
    workingDirectory: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The working directory used during build and test workflows.',
    }),
    additionalInstanceConfiguration: AdditionalInstanceConfigurationSchema.exactOptional().openapi({
      description: 'Specify additional settings and launch scripts for your build instances.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
  })
  .openapi({
    required: ['name', 'semanticVersion', 'components', 'parentImage', 'clientToken'],
    title: 'CreateImageRecipeRequest',
  })
  .openapi('CreateImageRecipeRequest')

const CreateImageRequestSchema = z
  .object({
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.',
    }),
    imageTestsConfiguration: ImageTestsConfigurationSchema.exactOptional().openapi({
      description: 'The image tests configuration of the image.',
    }),
    enhancedImageMetadataEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the image.' }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional().openapi({
      description: 'Contains settings for vulnerability scans.',
    }),
  })
  .openapi({
    required: ['infrastructureConfigurationArn', 'clientToken'],
    title: 'CreateImageRequest',
  })
  .openapi('CreateImageRequest')

const SnsTopicArnSchema = z
  .string()
  .regex(/^arn:aws[^:]*:sns:[^:]+:[0-9]{12}:[a-zA-Z0-9-_]{1,256}$/)
  .openapi('SnsTopicArn')

const CreateInfrastructureConfigurationRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({
      description: 'The name of the infrastructure configuration.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the infrastructure configuration.',
    }),
    instanceTypes: InstanceTypeListSchema.exactOptional().openapi({
      description:
        'The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.',
    }),
    instanceProfileName: InstanceProfileNameTypeSchema.openapi({
      description:
        'The instance profile to associate with the instance used to customize your Amazon EC2 AMI.',
    }),
    securityGroupIds: SecurityGroupIdsSchema.exactOptional().openapi({
      description:
        'The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.',
    }),
    subnetId: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.',
    }),
    logging: LoggingSchema.exactOptional().openapi({
      description: 'The logging configuration of the infrastructure configuration.',
    }),
    keyPair: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.',
    }),
    terminateInstanceOnFailure: NullableBooleanSchema.exactOptional().openapi({
      description:
        'The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.',
    }),
    snsTopicArn: SnsTopicArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>',
    }),
    resourceTags: ResourceTagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the resource created by Image Builder.',
    }),
    instanceMetadataOptions: InstanceMetadataOptionsSchema.exactOptional().openapi({
      description:
        'The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags of the infrastructure configuration.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
  })
  .openapi({
    required: ['name', 'instanceProfileName', 'clientToken'],
    title: 'CreateInfrastructureConfigurationRequest',
  })
  .openapi('CreateInfrastructureConfigurationRequest')

const DeleteComponentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteComponentRequest' })
  .openapi('DeleteComponentRequest')

const DeleteContainerRecipeRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteContainerRecipeRequest' })
  .openapi('DeleteContainerRecipeRequest')

const DeleteDistributionConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteDistributionConfigurationRequest' })
  .openapi('DeleteDistributionConfigurationRequest')

const DeleteImagePipelineRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteImagePipelineRequest' })
  .openapi('DeleteImagePipelineRequest')

const DeleteImageRecipeRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteImageRecipeRequest' })
  .openapi('DeleteImageRecipeRequest')

const DeleteImageRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteImageRequest' })
  .openapi('DeleteImageRequest')

const DeleteInfrastructureConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteInfrastructureConfigurationRequest' })
  .openapi('DeleteInfrastructureConfigurationRequest')

const FilterListSchema = z.array(FilterSchema).min(1).max(10).openapi('FilterList')

const GetComponentPolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetComponentPolicyRequest' })
  .openapi('GetComponentPolicyRequest')

const GetComponentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetComponentRequest' })
  .openapi('GetComponentRequest')

const GetContainerRecipePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetContainerRecipePolicyRequest' })
  .openapi('GetContainerRecipePolicyRequest')

const GetContainerRecipeRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetContainerRecipeRequest' })
  .openapi('GetContainerRecipeRequest')

const GetDistributionConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDistributionConfigurationRequest' })
  .openapi('GetDistributionConfigurationRequest')

const GetImagePipelineRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetImagePipelineRequest' })
  .openapi('GetImagePipelineRequest')

const GetImagePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetImagePolicyRequest' })
  .openapi('GetImagePolicyRequest')

const GetImageRecipePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetImageRecipePolicyRequest' })
  .openapi('GetImageRecipePolicyRequest')

const GetImageRecipeRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetImageRecipeRequest' })
  .openapi('GetImageRecipeRequest')

const ImageVersionArnOrBuildVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+))$/,
  )
  .openapi('ImageVersionArnOrBuildVersionArn')

const GetImageRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetImageRequest' })
  .openapi('GetImageRequest')

const GetInfrastructureConfigurationRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'GetInfrastructureConfigurationRequest',
    description: 'GetInfrastructureConfiguration request object.',
  })
  .openapi('GetInfrastructureConfigurationRequest')

const GetWorkflowExecutionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetWorkflowExecutionRequest' })
  .openapi('GetWorkflowExecutionRequest')

const GetWorkflowStepExecutionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetWorkflowStepExecutionRequest' })
  .openapi('GetWorkflowStepExecutionRequest')

const ImageScanFindingsFilterListSchema = z
  .array(ImageScanFindingsFilterSchema)
  .length(1)
  .openapi('ImageScanFindingsFilterList')

const ImageVersionArnSchema = z
  .string()
  .regex(
    /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
  )
  .openapi('ImageVersionArn')

const ImportComponentRequestSchema = z
  .object({
    name: ResourceNameSchema.openapi({ description: 'The name of the component.' }),
    semanticVersion: VersionNumberSchema.openapi({
      description:
        '<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the component. Describes the contents of the component.',
    }),
    changeDescription: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of this component.',
    }),
    type: ComponentTypeSchema.openapi({
      description:
        'The type of the component denotes whether the component is used to build the image, or only to test it.',
    }),
    format: ComponentFormatSchema.openapi({
      description: 'The format of the resource that you want to import as a component.',
    }),
    platform: PlatformSchema.openapi({ description: 'The platform of the component.' }),
    data: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.',
    }),
    uri: UriSchema.exactOptional().openapi({
      description:
        'The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.',
    }),
    kmsKeyId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The ID of the KMS key that should be used to encrypt this component.',
    }),
    tags: TagMapSchema.exactOptional().openapi({ description: 'The tags of the component.' }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token of the component.',
    }),
  })
  .openapi({
    required: ['name', 'semanticVersion', 'type', 'format', 'platform', 'clientToken'],
    title: 'ImportComponentRequest',
  })
  .openapi('ImportComponentRequest')

const ImportVmImageRequestSchema = z
  .object({
    name: NonEmptyStringSchema.openapi({
      description: 'The name of the base image that is created by the import process.',
    }),
    semanticVersion: VersionNumberSchema.openapi({
      description:
        '<p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description for the base image that is created by the import process.',
    }),
    platform: PlatformSchema.openapi({
      description: 'The operating system platform for the imported VM.',
    }),
    osVersion: OsVersionSchema.exactOptional().openapi({
      description: 'The operating system version for the imported VM.',
    }),
    vmImportTaskId: NonEmptyStringSchema.openapi({
      description:
        'The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Tags that are attached to the import resources.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description:
        'Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.',
    }),
  })
  .openapi({
    required: ['name', 'semanticVersion', 'platform', 'vmImportTaskId', 'clientToken'],
    title: 'ImportVmImageRequest',
  })
  .openapi('ImportVmImageRequest')

const RestrictedIntegerSchema = z.int().min(1).max(25).openapi('RestrictedInteger')

const ListComponentBuildVersionsRequestSchema = z
  .object({
    componentVersionArn: ComponentVersionArnSchema.openapi({
      description:
        'The component version Amazon Resource Name (ARN) whose versions you want to list.',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ required: ['componentVersionArn'], title: 'ListComponentBuildVersionsRequest' })
  .openapi('ListComponentBuildVersionsRequest')

const OwnershipSchema = z.enum(['Self', 'Shared', 'Amazon', 'ThirdParty']).openapi('Ownership')

const ListComponentsRequestSchema = z
  .object({
    owner: OwnershipSchema.exactOptional().openapi({
      description:
        'Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>supportedOsVersion</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
    }),
    byName: BooleanSchema.exactOptional().openapi({
      description: 'Returns the list of components for the specified name.',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListComponentsRequest', required: [] })
  .openapi('ListComponentsRequest')

const ListContainerRecipesRequestSchema = z
  .object({
    owner: OwnershipSchema.exactOptional().openapi({
      description:
        'Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>containerType</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListContainerRecipesRequest', required: [] })
  .openapi('ListContainerRecipesRequest')

const ListDistributionConfigurationsRequestSchema = z
  .object({
    filters: FilterListSchema.exactOptional().openapi({
      description: 'You can filter on <code>name</code> to streamline results.',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListDistributionConfigurationsRequest', required: [] })
  .openapi('ListDistributionConfigurationsRequest')

const ListImageBuildVersionsRequestSchema = z
  .object({
    imageVersionArn: ImageVersionArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ required: ['imageVersionArn'], title: 'ListImageBuildVersionsRequest' })
  .openapi('ListImageBuildVersionsRequest')

const ListImagePackagesRequestSchema = z
  .object({
    imageBuildVersionArn: ImageBuildVersionArnSchema.openapi({
      description:
        'Filter results for the ListImagePackages request by the Image Build Version ARN',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ required: ['imageBuildVersionArn'], title: 'ListImagePackagesRequest' })
  .openapi('ListImagePackagesRequest')

const ListImagePipelineImagesRequestSchema = z
  .object({
    imagePipelineArn: ImagePipelineArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ required: ['imagePipelineArn'], title: 'ListImagePipelineImagesRequest' })
  .openapi('ListImagePipelineImagesRequest')

const ListImagePipelinesRequestSchema = z
  .object({
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>distributionConfigurationArn</code> </p> </li> <li> <p> <code>imageRecipeArn</code> </p> </li> <li> <p> <code>infrastructureConfigurationArn</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>status</code> </p> </li> </ul>',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListImagePipelinesRequest', required: [] })
  .openapi('ListImagePipelinesRequest')

const ListImageRecipesRequestSchema = z
  .object({
    owner: OwnershipSchema.exactOptional().openapi({
      description:
        'The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListImageRecipesRequest', required: [] })
  .openapi('ListImageRecipesRequest')

const ListImageScanFindingAggregationsRequestSchema = z
  .object({
    filter: FilterSchema.exactOptional(),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListImageScanFindingAggregationsRequest', required: [] })
  .openapi('ListImageScanFindingAggregationsRequest')

const ListImageScanFindingsRequestSchema = z
  .object({
    filters: ImageScanFindingsFilterListSchema.exactOptional().openapi({
      description:
        "<p>An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:</p> <ul> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> <li> <p> <code>severity</code> </p> </li> </ul> <p>If you don't request a filter, then all findings in your account are listed.</p>",
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListImageScanFindingsRequest', required: [] })
  .openapi('ListImageScanFindingsRequest')

const ListImagesRequestSchema = z
  .object({
    owner: OwnershipSchema.exactOptional().openapi({
      description:
        'The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers.',
    }),
    filters: FilterListSchema.exactOptional().openapi({
      description:
        '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
    }),
    byName: BooleanSchema.exactOptional().openapi({
      description: 'Requests a list of images with a specific recipe name.',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
    includeDeprecated: NullableBooleanSchema.exactOptional().openapi({
      description: 'Includes deprecated images in the response list.',
    }),
  })
  .openapi({ title: 'ListImagesRequest', required: [] })
  .openapi('ListImagesRequest')

const ListInfrastructureConfigurationsRequestSchema = z
  .object({
    filters: FilterListSchema.exactOptional().openapi({
      description: 'You can filter on <code>name</code> to streamline results.',
    }),
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
  })
  .openapi({ title: 'ListInfrastructureConfigurationsRequest', required: [] })
  .openapi('ListInfrastructureConfigurationsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListWorkflowExecutionsRequestSchema = z
  .object({
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
    imageBuildVersionArn: ImageBuildVersionArnSchema.openapi({
      description:
        'List all workflow runtime instances for the specified image build version resource ARN.',
    }),
  })
  .openapi({ required: ['imageBuildVersionArn'], title: 'ListWorkflowExecutionsRequest' })
  .openapi('ListWorkflowExecutionsRequest')

const ListWorkflowStepExecutionsRequestSchema = z
  .object({
    maxResults: RestrictedIntegerSchema.exactOptional().openapi({
      description: 'The maximum items to return in a request.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
    }),
    workflowExecutionId: WorkflowExecutionIdSchema.openapi({
      description:
        'The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.',
    }),
  })
  .openapi({ required: ['workflowExecutionId'], title: 'ListWorkflowStepExecutionsRequest' })
  .openapi('ListWorkflowStepExecutionsRequest')

const PutComponentPolicyRequestSchema = z
  .object({
    componentArn: ComponentBuildVersionArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the component that this policy should be applied to.',
    }),
    policy: ResourcePolicyDocumentSchema.openapi({ description: 'The policy to apply.' }),
  })
  .openapi({ required: ['componentArn', 'policy'], title: 'PutComponentPolicyRequest' })
  .openapi('PutComponentPolicyRequest')

const PutContainerRecipePolicyRequestSchema = z
  .object({
    containerRecipeArn: ContainerRecipeArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.',
    }),
    policy: ResourcePolicyDocumentSchema.openapi({
      description: 'The policy to apply to the container recipe.',
    }),
  })
  .openapi({ required: ['containerRecipeArn', 'policy'], title: 'PutContainerRecipePolicyRequest' })
  .openapi('PutContainerRecipePolicyRequest')

const PutImagePolicyRequestSchema = z
  .object({
    imageArn: ImageBuildVersionArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image that this policy should be applied to.',
    }),
    policy: ResourcePolicyDocumentSchema.openapi({ description: 'The policy to apply.' }),
  })
  .openapi({ required: ['imageArn', 'policy'], title: 'PutImagePolicyRequest' })
  .openapi('PutImagePolicyRequest')

const PutImageRecipePolicyRequestSchema = z
  .object({
    imageRecipeArn: ImageRecipeArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.',
    }),
    policy: ResourcePolicyDocumentSchema.openapi({ description: 'The policy to apply.' }),
  })
  .openapi({ required: ['imageRecipeArn', 'policy'], title: 'PutImageRecipePolicyRequest' })
  .openapi('PutImageRecipePolicyRequest')

const StartImagePipelineExecutionRequestSchema = z
  .object({
    imagePipelineArn: ImagePipelineArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
  })
  .openapi({
    required: ['imagePipelineArn', 'clientToken'],
    title: 'StartImagePipelineExecutionRequest',
  })
  .openapi('StartImagePipelineExecutionRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({ tags: TagMapSchema.openapi({ description: 'The tags to apply to the resource.' }) })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDistributionConfigurationRequestSchema = z
  .object({
    distributionConfigurationArn: DistributionConfigurationArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that you want to update.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the distribution configuration.',
    }),
    distributions: DistributionListSchema.openapi({
      description: 'The distributions of the distribution configuration.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token of the distribution configuration.',
    }),
  })
  .openapi({
    required: ['distributionConfigurationArn', 'distributions', 'clientToken'],
    title: 'UpdateDistributionConfigurationRequest',
  })
  .openapi('UpdateDistributionConfigurationRequest')

const UpdateImagePipelineRequestSchema = z
  .object({
    imagePipelineArn: ImagePipelineArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) of the image pipeline that you want to update.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the image pipeline.',
    }),
    imageRecipeArn: ImageRecipeArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.',
    }),
    containerRecipeArn: ContainerRecipeArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the container pipeline to update.',
    }),
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.',
    }),
    distributionConfigurationArn: DistributionConfigurationArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated.',
    }),
    imageTestsConfiguration: ImageTestsConfigurationSchema.exactOptional().openapi({
      description: 'The image test configuration of the image pipeline.',
    }),
    enhancedImageMetadataEnabled: NullableBooleanSchema.exactOptional().openapi({
      description:
        'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
    }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description: 'The schedule of the image pipeline.',
    }),
    status: PipelineStatusSchema.exactOptional().openapi({
      description: 'The status of the image pipeline.',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    imageScanningConfiguration: ImageScanningConfigurationSchema.exactOptional().openapi({
      description: 'Contains settings for vulnerability scans.',
    }),
  })
  .openapi({
    required: ['imagePipelineArn', 'infrastructureConfigurationArn', 'clientToken'],
    title: 'UpdateImagePipelineRequest',
  })
  .openapi('UpdateImagePipelineRequest')

const UpdateInfrastructureConfigurationRequestSchema = z
  .object({
    infrastructureConfigurationArn: InfrastructureConfigurationArnSchema.openapi({
      description:
        'The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The description of the infrastructure configuration.',
    }),
    instanceTypes: InstanceTypeListSchema.exactOptional().openapi({
      description:
        'The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.',
    }),
    instanceProfileName: InstanceProfileNameTypeSchema.openapi({
      description:
        'The instance profile to associate with the instance used to customize your Amazon EC2 AMI.',
    }),
    securityGroupIds: SecurityGroupIdsSchema.exactOptional().openapi({
      description:
        'The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.',
    }),
    subnetId: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The subnet ID to place the instance used to customize your Amazon EC2 AMI in.',
    }),
    logging: LoggingSchema.exactOptional().openapi({
      description: 'The logging configuration of the infrastructure configuration.',
    }),
    keyPair: NonEmptyStringSchema.exactOptional().openapi({
      description:
        'The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.',
    }),
    terminateInstanceOnFailure: NullableBooleanSchema.exactOptional().openapi({
      description:
        'The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.',
    }),
    snsTopicArn: SnsTopicArnSchema.exactOptional().openapi({
      description:
        '<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>',
    }),
    clientToken: ClientTokenSchema.openapi({
      description: 'The idempotency token used to make this request idempotent.',
    }),
    resourceTags: ResourceTagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the resource created by Image Builder.',
    }),
    instanceMetadataOptions: InstanceMetadataOptionsSchema.exactOptional().openapi({
      description:
        '<p>The instance metadata options that you can set for the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see one of the following links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.</p> </li> </ul>',
    }),
  })
  .openapi({
    required: ['infrastructureConfigurationArn', 'instanceProfileName', 'clientToken'],
    title: 'UpdateInfrastructureConfigurationRequest',
  })
  .openapi('UpdateInfrastructureConfigurationRequest')

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

export const putCancelImageCreationRoute = createRoute({
  method: 'put',
  path: '/CancelImageCreation',
  description:
    'CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.',
  operationId: 'CancelImageCreation',
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
              imageBuildVersionArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image that you want to cancel creation for.',
                }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.',
                }),
            })
            .openapi({ required: ['imageBuildVersionArn', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelImageCreationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const putCreateComponentRoute = createRoute({
  method: 'put',
  path: '/CreateComponent',
  description:
    '<p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>',
  operationId: 'CreateComponent',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the component.' }),
              semanticVersion: z
                .string()
                .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
                .openapi({
                  description:
                    '<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'Describes the contents of the component.' }),
              changeDescription: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.',
                }),
              platform: z
                .enum(['Windows', 'Linux'])
                .openapi({ description: 'The operating system platform of the component.' }),
              supportedOsVersions: z
                .array(OsVersionSchema)
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({
                  description:
                    'The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.',
                }),
              data: z
                .string()
                .regex(/[^\x00]+/)
                .min(1)
                .max(16000)
                .exactOptional()
                .openapi({
                  description:
                    'Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.',
                }),
              uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p>',
                }),
              kmsKeyId: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The ID of the KMS key that is used to encrypt this component.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags that apply to the component.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({ description: 'The idempotency token of the component.' }),
            })
            .openapi({ required: ['name', 'semanticVersion', 'platform', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateComponentResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidVersionNumberException',
      content: { 'application/json': { schema: InvalidVersionNumberExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    490: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateContainerRecipeRoute = createRoute({
  method: 'put',
  path: '/CreateContainerRecipe',
  description:
    'Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.',
  operationId: 'CreateContainerRecipe',
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
              containerType: z
                .literal('DOCKER')
                .openapi({ description: 'The type of container to create.' }),
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the container recipe.' }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the container recipe.' }),
              semanticVersion: z
                .string()
                .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
                .openapi({
                  description:
                    '<p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
                }),
              components: z
                .array(ComponentConfigurationSchema)
                .min(1)
                .openapi({
                  description:
                    'Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.',
                }),
              instanceConfiguration: z
                .object({
                  image: NonEmptyStringSchema.exactOptional().openapi({
                    description:
                      'The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.',
                  }),
                  blockDeviceMappings: InstanceBlockDeviceMappingsSchema.exactOptional().openapi({
                    description:
                      'Defines the block devices to attach for building an instance from this Image Builder AMI.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.',
                  required: [],
                }),
              dockerfileTemplateData: z
                .string()
                .regex(/[^\x00]+/)
                .min(1)
                .max(16000)
                .exactOptional()
                .openapi({
                  description:
                    'The Dockerfile template used to build your image as an inline data blob.',
                }),
              dockerfileTemplateUri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon S3 URI for the Dockerfile that will be used to build your container image.',
                }),
              platformOverride: z
                .enum(['Windows', 'Linux'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the operating system platform when you use a custom base image.',
                }),
              imageOsVersionOverride: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'Specifies the operating system version for the base image.',
                }),
              parentImage: z
                .string()
                .min(1)
                .max(1024)
                .openapi({ description: 'The base image for the container recipe.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'Tags that are attached to the container recipe.' }),
              workingDirectory: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The working directory for use during build and test workflows.',
                }),
              targetRepository: z
                .object({
                  service: ContainerRepositoryServiceSchema.exactOptional().openapi({
                    description: 'Specifies the service in which this image was registered.',
                  }),
                  repositoryName: NonEmptyStringSchema.exactOptional().openapi({
                    description:
                      'The name of the container repository where the output container image is stored. This name is prefixed by the repository location.',
                  }),
                })
                .openapi({
                  description:
                    'The container repository where the output container image is stored.',
                  required: [],
                }),
              kmsKeyId: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'Identifies which KMS key is used to encrypt the container image.',
                }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({ description: 'The client token used to make this request idempotent.' }),
            })
            .openapi({
              required: [
                'containerType',
                'name',
                'semanticVersion',
                'components',
                'parentImage',
                'targetRepository',
                'clientToken',
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
      content: { 'application/json': { schema: CreateContainerRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidVersionNumberException',
      content: { 'application/json': { schema: InvalidVersionNumberExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    489: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    490: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateDistributionConfigurationRoute = createRoute({
  method: 'put',
  path: '/CreateDistributionConfiguration',
  description:
    'Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.',
  operationId: 'CreateDistributionConfiguration',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the distribution configuration.' }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the distribution configuration.' }),
              distributions: z
                .array(DistributionSchema)
                .openapi({ description: 'The distributions of the distribution configuration.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the distribution configuration.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token of the distribution configuration.',
                }),
            })
            .openapi({ required: ['name', 'distributions', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDistributionConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    488: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    490: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateImageRoute = createRoute({
  method: 'put',
  path: '/CreateImage',
  description:
    'Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.',
  operationId: 'CreateImage',
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
              imageRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.',
                }),
              containerRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.',
                }),
              distributionConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.',
                }),
              infrastructureConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.',
                }),
              imageTestsConfiguration: z
                .object({
                  imageTestsEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.',
                  }),
                  timeoutMinutes: ImageTestsTimeoutMinutesSchema.exactOptional().openapi({
                    description:
                      '<p>The maximum time in minutes that tests are permitted to run.</p> <note> <p>The timeoutMinutes attribute is not currently active. This value is ignored.</p> </note>',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.',
                  required: [],
                }),
              enhancedImageMetadataEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the image.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
              imageScanningConfiguration: z
                .object({
                  imageScanningEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.',
                  }),
                  ecrConfiguration: EcrConfigurationSchema.exactOptional().openapi({
                    description: 'Contains Amazon ECR settings for vulnerability scans.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains settings for Image Builder image resource and container image scans.',
                  required: [],
                }),
            })
            .openapi({ required: ['infrastructureConfigurationArn', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImageResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    488: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateImagePipelineRoute = createRoute({
  method: 'put',
  path: '/CreateImagePipeline',
  description:
    'Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.',
  operationId: 'CreateImagePipeline',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the image pipeline.' }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the image pipeline.' }),
              imageRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.',
                }),
              containerRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.',
                }),
              infrastructureConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.',
                }),
              distributionConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.',
                }),
              imageTestsConfiguration: z
                .object({
                  imageTestsEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.',
                  }),
                  timeoutMinutes: ImageTestsTimeoutMinutesSchema.exactOptional().openapi({
                    description:
                      '<p>The maximum time in minutes that tests are permitted to run.</p> <note> <p>The timeoutMinutes attribute is not currently active. This value is ignored.</p> </note>',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.',
                  required: [],
                }),
              enhancedImageMetadataEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
                }),
              schedule: z
                .object({
                  scheduleExpression: NonEmptyStringSchema.exactOptional().openapi({
                    description:
                      '<p>The cron expression determines how often EC2 Image Builder evaluates your <code>pipelineExecutionStartCondition</code>.</p> <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron expressions in EC2 Image Builder</a>.</p>',
                  }),
                  timezone: TimezoneSchema.exactOptional().openapi({
                    description:
                      'The timezone that applies to the scheduling expression. For example, "Etc/UTC", "America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA timezone format</a>. If not specified this defaults to UTC.',
                  }),
                  pipelineExecutionStartCondition:
                    PipelineExecutionStartConditionSchema.exactOptional().openapi({
                      description:
                        'The condition configures when the pipeline should trigger a new image build. When the <code>pipelineExecutionStartCondition</code> is set to <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic version filters on the base image or components in your image recipe, EC2 Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API Reference</i>.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A schedule configures how often and when a pipeline will automatically create a new image.',
                  required: [],
                }),
              status: z
                .enum(['DISABLED', 'ENABLED'])
                .exactOptional()
                .openapi({ description: 'The status of the image pipeline.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the image pipeline.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
              imageScanningConfiguration: z
                .object({
                  imageScanningEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.',
                  }),
                  ecrConfiguration: EcrConfigurationSchema.exactOptional().openapi({
                    description: 'Contains Amazon ECR settings for vulnerability scans.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains settings for Image Builder image resource and container image scans.',
                  required: [],
                }),
            })
            .openapi({ required: ['name', 'infrastructureConfigurationArn', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImagePipelineResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    488: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    489: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateImageRecipeRoute = createRoute({
  method: 'put',
  path: '/CreateImageRecipe',
  description:
    'Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.',
  operationId: 'CreateImageRecipe',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the image recipe.' }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the image recipe.' }),
              semanticVersion: z
                .string()
                .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
                .openapi({
                  description:
                    '<p>The semantic version of the image recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
                }),
              components: z
                .array(ComponentConfigurationSchema)
                .min(1)
                .openapi({ description: 'The components included in the image recipe.' }),
              parentImage: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.',
                }),
              blockDeviceMappings: z
                .array(InstanceBlockDeviceMappingSchema)
                .exactOptional()
                .openapi({ description: 'The block device mappings of the image recipe.' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the image recipe.' }),
              workingDirectory: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The working directory used during build and test workflows.',
                }),
              additionalInstanceConfiguration: z
                .object({
                  systemsManagerAgent: SystemsManagerAgentSchema.exactOptional().openapi({
                    description:
                      'Contains settings for the Systems Manager agent on your build instance.',
                  }),
                  userDataOverride: UserDataOverrideSchema.exactOptional().openapi({
                    description:
                      '<p>Use this property to provide commands or a command script to run when you launch your build instance.</p> <p>The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.</p> <note> <p>The user data is always base 64 encoded. For example, the following commands are encoded as <code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$</code>:</p> <p> <i>#!/bin/bash</i> </p> <p>mkdir -p /var/bb/</p> <p>touch /var</p> </note>',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p>',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
            })
            .openapi({
              required: ['name', 'semanticVersion', 'components', 'parentImage', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateImageRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidVersionNumberException',
      content: { 'application/json': { schema: InvalidVersionNumberExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    489: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    490: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putCreateInfrastructureConfigurationRoute = createRoute({
  method: 'put',
  path: '/CreateInfrastructureConfiguration',
  description:
    'Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.',
  operationId: 'CreateInfrastructureConfiguration',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the infrastructure configuration.' }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the infrastructure configuration.' }),
              instanceTypes: z
                .array(InstanceTypeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.',
                }),
              instanceProfileName: z
                .string()
                .regex(/^[\w+=,.@-]+$/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The instance profile to associate with the instance used to customize your Amazon EC2 AMI.',
                }),
              securityGroupIds: z
                .array(NonEmptyStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.',
                }),
              subnetId: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.',
                }),
              logging: z
                .object({
                  s3Logs: S3LogsSchema.exactOptional().openapi({
                    description: 'The Amazon S3 logging configuration.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Logging configuration defines where Image Builder uploads your logs.',
                  required: [],
                }),
              keyPair: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.',
                }),
              terminateInstanceOnFailure: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.',
                }),
              snsTopicArn: z
                .string()
                .regex(/^arn:aws[^:]*:sns:[^:]+:[0-9]{12}:[a-zA-Z0-9-_]{1,256}$/)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>',
                }),
              resourceTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 30)
                .exactOptional()
                .openapi({
                  description: 'The tags attached to the resource created by Image Builder.',
                }),
              instanceMetadataOptions: z
                .object({
                  httpTokens: HttpTokensSchema.exactOptional().openapi({
                    description:
                      '<p>Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:</p> <ul> <li> <p> <b>required</b> – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.</p> </li> <li> <p> <b>optional</b> – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.</p> </li> </ul> <p>The default setting is <b>optional</b>.</p>',
                  }),
                  httpPutResponseHopLimit: HttpPutResponseHopLimitSchema.exactOptional().openapi({
                    description:
                      'Limit the number of hops that an instance metadata request can traverse to reach its destination. The default is one hop. However, if HTTP tokens are required, container image builds need a minimum of two hops.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the infrastructure configuration.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
            })
            .openapi({ required: ['name', 'instanceProfileName', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInfrastructureConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    488: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    489: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const deleteDeleteComponentComponentBuildVersionArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteComponent#componentBuildVersionArn',
  description: 'Deletes a component build version.',
  operationId: 'DeleteComponent',
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
      componentBuildVersionArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'componentBuildVersionArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the component build version to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteComponentResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteContainerRecipeContainerRecipeArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteContainerRecipe#containerRecipeArn',
  description: 'Deletes a container recipe.',
  operationId: 'DeleteContainerRecipe',
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
      containerRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'containerRecipeArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the container recipe to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContainerRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteDistributionConfigurationDistributionConfigurationArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteDistributionConfiguration#distributionConfigurationArn',
  description: 'Deletes a distribution configuration.',
  operationId: 'DeleteDistributionConfiguration',
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
      distributionConfigurationArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
        )
        .openapi({
          param: {
            name: 'distributionConfigurationArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the distribution configuration to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDistributionConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteImageImageBuildVersionArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteImage#imageBuildVersionArn',
  description:
    '<p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>',
  operationId: 'DeleteImage',
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
      imageBuildVersionArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'imageBuildVersionArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Image Builder image resource to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImageResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteImagePipelineImagePipelineArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteImagePipeline#imagePipelineArn',
  description: 'Deletes an image pipeline.',
  operationId: 'DeleteImagePipeline',
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
      imagePipelineArn: z
        .string()
        .regex(/^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/)
        .openapi({
          param: {
            name: 'imagePipelineArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the image pipeline to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline/[a-z0-9-_]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImagePipelineResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteImageRecipeImageRecipeArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteImageRecipe#imageRecipeArn',
  description: 'Deletes an image recipe.',
  operationId: 'DeleteImageRecipe',
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
      imageRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'imageRecipeArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the image recipe to delete.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImageRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceDependencyException',
      content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
    },
  },
})

export const deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRoute =
  createRoute({
    method: 'delete',
    path: '/DeleteInfrastructureConfiguration#infrastructureConfigurationArn',
    description: 'Deletes an infrastructure configuration.',
    operationId: 'DeleteInfrastructureConfiguration',
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
        infrastructureConfigurationArn: z
          .string()
          .regex(
            /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
          )
          .openapi({
            param: {
              name: 'infrastructureConfigurationArn',
              in: 'query',
              required: true,
              description:
                'The Amazon Resource Name (ARN) of the infrastructure configuration to delete.',
              schema: {
                type: 'string',
                pattern:
                  '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteInfrastructureConfigurationResponseSchema },
        },
      },
      480: {
        description: 'ServiceException',
        content: { 'application/json': { schema: ServiceExceptionSchema } },
      },
      481: {
        description: 'ClientException',
        content: { 'application/json': { schema: ClientExceptionSchema } },
      },
      482: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      483: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      484: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      485: {
        description: 'CallRateLimitExceededException',
        content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
      },
      486: {
        description: 'ResourceDependencyException',
        content: { 'application/json': { schema: ResourceDependencyExceptionSchema } },
      },
    },
  })

export const getGetComponentComponentBuildVersionArnRoute = createRoute({
  method: 'get',
  path: '/GetComponent#componentBuildVersionArn',
  description: 'Gets a component object.',
  operationId: 'GetComponent',
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
      componentBuildVersionArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+))$/,
        )
        .openapi({
          param: {
            name: 'componentBuildVersionArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the component that you want to get. Regex requires the suffix <code>/\\d+$</code>.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/(?:(?:([0-9]+|x)\\.([0-9]+|x)\\.([0-9]+|x))|(?:[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+))$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComponentResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetComponentPolicyComponentArnRoute = createRoute({
  method: 'get',
  path: '/GetComponentPolicy#componentArn',
  description: 'Gets a component policy.',
  operationId: 'GetComponentPolicy',
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
      componentArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'componentArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComponentPolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetContainerRecipeContainerRecipeArnRoute = createRoute({
  method: 'get',
  path: '/GetContainerRecipe#containerRecipeArn',
  description: 'Retrieves a container recipe.',
  operationId: 'GetContainerRecipe',
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
      containerRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'containerRecipeArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the container recipe to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetContainerRecipePolicyContainerRecipeArnRoute = createRoute({
  method: 'get',
  path: '/GetContainerRecipePolicy#containerRecipeArn',
  description: 'Retrieves the policy for a container recipe.',
  operationId: 'GetContainerRecipePolicy',
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
      containerRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'containerRecipeArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the container recipe for the policy being requested.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerRecipePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetDistributionConfigurationDistributionConfigurationArnRoute = createRoute({
  method: 'get',
  path: '/GetDistributionConfiguration#distributionConfigurationArn',
  description: 'Gets a distribution configuration.',
  operationId: 'GetDistributionConfiguration',
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
      distributionConfigurationArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
        )
        .openapi({
          param: {
            name: 'distributionConfigurationArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration/[a-z0-9-_]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDistributionConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetImageImageBuildVersionArnRoute = createRoute({
  method: 'get',
  path: '/GetImage#imageBuildVersionArn',
  description: 'Gets an image.',
  operationId: 'GetImage',
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
      imageBuildVersionArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+))$/,
        )
        .openapi({
          param: {
            name: 'imageBuildVersionArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the image that you want to get.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/(?:(?:([0-9]+|x)\\.([0-9]+|x)\\.([0-9]+|x))|(?:[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+))$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImageResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetImagePipelineImagePipelineArnRoute = createRoute({
  method: 'get',
  path: '/GetImagePipeline#imagePipelineArn',
  description: 'Gets an image pipeline.',
  operationId: 'GetImagePipeline',
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
      imagePipelineArn: z
        .string()
        .regex(/^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/)
        .openapi({
          param: {
            name: 'imagePipelineArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline/[a-z0-9-_]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImagePipelineResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetImagePolicyImageArnRoute = createRoute({
  method: 'get',
  path: '/GetImagePolicy#imageArn',
  description: 'Gets an image policy.',
  operationId: 'GetImagePolicy',
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
      imageArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'imageArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+/[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImagePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetImageRecipeImageRecipeArnRoute = createRoute({
  method: 'get',
  path: '/GetImageRecipe#imageRecipeArn',
  description: 'Gets an image recipe.',
  operationId: 'GetImageRecipe',
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
      imageRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'imageRecipeArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImageRecipeResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetImageRecipePolicyImageRecipeArnRoute = createRoute({
  method: 'get',
  path: '/GetImageRecipePolicy#imageRecipeArn',
  description: 'Gets an image recipe policy.',
  operationId: 'GetImageRecipePolicy',
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
      imageRecipeArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
        )
        .openapi({
          param: {
            name: 'imageRecipeArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe/[a-z0-9-_]+/[0-9]+\\.[0-9]+\\.[0-9]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImageRecipePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetInfrastructureConfigurationInfrastructureConfigurationArnRoute = createRoute({
  method: 'get',
  path: '/GetInfrastructureConfiguration#infrastructureConfigurationArn',
  description: 'Gets an infrastructure configuration.',
  operationId: 'GetInfrastructureConfiguration',
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
      infrastructureConfigurationArn: z
        .string()
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
        )
        .openapi({
          param: {
            name: 'infrastructureConfigurationArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration/[a-z0-9-_]+$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInfrastructureConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetWorkflowExecutionWorkflowExecutionIdRoute = createRoute({
  method: 'get',
  path: '/GetWorkflowExecution#workflowExecutionId',
  description:
    'Get the runtime information that was logged for a specific runtime instance of the workflow.',
  operationId: 'GetWorkflowExecution',
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
      workflowExecutionId: z
        .string()
        .regex(/^wf-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .openapi({
          param: {
            name: 'workflowExecutionId',
            in: 'query',
            required: true,
            description:
              'Use the unique identifier for a runtime instance of the workflow to get runtime details.',
            schema: {
              type: 'string',
              pattern:
                '^wf-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkflowExecutionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getGetWorkflowStepExecutionStepExecutionIdRoute = createRoute({
  method: 'get',
  path: '/GetWorkflowStepExecution#stepExecutionId',
  description:
    'Get the runtime information that was logged for a specific runtime instance of the workflow step.',
  operationId: 'GetWorkflowStepExecution',
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
      stepExecutionId: z
        .string()
        .regex(/^step-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
        .openapi({
          param: {
            name: 'stepExecutionId',
            in: 'query',
            required: true,
            description:
              'Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step.',
            schema: {
              type: 'string',
              pattern:
                '^step-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkflowStepExecutionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putImportComponentRoute = createRoute({
  method: 'put',
  path: '/ImportComponent',
  description: 'Imports a component and transforms its data into a component document.',
  operationId: 'ImportComponent',
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
              name: z
                .string()
                .regex(/^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/)
                .openapi({ description: 'The name of the component.' }),
              semanticVersion: z
                .string()
                .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
                .openapi({
                  description:
                    '<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The description of the component. Describes the contents of the component.',
                }),
              changeDescription: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of this component.',
                }),
              type: z
                .enum(['BUILD', 'TEST'])
                .openapi({
                  description:
                    'The type of the component denotes whether the component is used to build the image, or only to test it.',
                }),
              format: z
                .literal('SHELL')
                .openapi({
                  description: 'The format of the resource that you want to import as a component.',
                }),
              platform: z
                .enum(['Windows', 'Linux'])
                .openapi({ description: 'The platform of the component.' }),
              data: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.',
                }),
              uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.',
                }),
              kmsKeyId: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the KMS key that should be used to encrypt this component.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags of the component.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({ description: 'The idempotency token of the component.' }),
            })
            .openapi({
              required: ['name', 'semanticVersion', 'type', 'format', 'platform', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportComponentResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidVersionNumberException',
      content: { 'application/json': { schema: InvalidVersionNumberExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const putImportVmImageRoute = createRoute({
  method: 'put',
  path: '/ImportVmImage',
  description:
    '<p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>',
  operationId: 'ImportVmImage',
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
              name: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description: 'The name of the base image that is created by the import process.',
                }),
              semanticVersion: z
                .string()
                .regex(/^[0-9]+\.[0-9]+\.[0-9]+$/)
                .openapi({
                  description:
                    '<p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The description for the base image that is created by the import process.',
                }),
              platform: z
                .enum(['Windows', 'Linux'])
                .openapi({ description: 'The operating system platform for the imported VM.' }),
              osVersion: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The operating system version for the imported VM.' }),
              vmImportTaskId: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    'The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'Tags that are attached to the import resources.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description:
                    'Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.',
                }),
            })
            .openapi({
              required: ['name', 'semanticVersion', 'platform', 'vmImportTaskId', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportVmImageResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postListComponentBuildVersionsRoute = createRoute({
  method: 'post',
  path: '/ListComponentBuildVersions',
  description:
    '<p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
  operationId: 'ListComponentBuildVersions',
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
              componentVersionArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .openapi({
                  description:
                    'The component version Amazon Resource Name (ARN) whose versions you want to list.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
            })
            .openapi({ required: ['componentVersionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentBuildVersionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListComponentsRoute = createRoute({
  method: 'post',
  path: '/ListComponents',
  description:
    '<p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>',
  operationId: 'ListComponents',
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
              owner: z
                .enum(['Self', 'Shared', 'Amazon', 'ThirdParty'])
                .exactOptional()
                .openapi({
                  description:
                    'Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>supportedOsVersion</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
                }),
              byName: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Returns the list of components for the specified name.' }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListComponentsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListContainerRecipesRoute = createRoute({
  method: 'post',
  path: '/ListContainerRecipes',
  description: 'Returns a list of container recipes.',
  operationId: 'ListContainerRecipes',
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
              owner: z
                .enum(['Self', 'Shared', 'Amazon', 'ThirdParty'])
                .exactOptional()
                .openapi({
                  description:
                    'Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>containerType</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListContainerRecipesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListDistributionConfigurationsRoute = createRoute({
  method: 'post',
  path: '/ListDistributionConfigurations',
  description: 'Returns a list of distribution configurations.',
  operationId: 'ListDistributionConfigurations',
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
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description: 'You can filter on <code>name</code> to streamline results.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListDistributionConfigurationsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImageBuildVersionsRoute = createRoute({
  method: 'post',
  path: '/ListImageBuildVersions',
  description: 'Returns a list of image build versions.',
  operationId: 'ListImageBuildVersions',
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
              imageVersionArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
            })
            .openapi({ required: ['imageVersionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImageBuildVersionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImagePackagesRoute = createRoute({
  method: 'post',
  path: '/ListImagePackages',
  description:
    'List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.',
  operationId: 'ListImagePackages',
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
              imageBuildVersionArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
                )
                .openapi({
                  description:
                    'Filter results for the ListImagePackages request by the Image Build Version ARN',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
            })
            .openapi({ required: ['imageBuildVersionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImagePackagesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImagePipelineImagesRoute = createRoute({
  method: 'post',
  path: '/ListImagePipelineImages',
  description: 'Returns a list of images created by the specified pipeline.',
  operationId: 'ListImagePipelineImages',
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
              imagePipelineArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
            })
            .openapi({ required: ['imagePipelineArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListImagePipelineImagesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImagePipelinesRoute = createRoute({
  method: 'post',
  path: '/ListImagePipelines',
  description: 'Returns a list of image pipelines.',
  operationId: 'ListImagePipelines',
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
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>distributionConfigurationArn</code> </p> </li> <li> <p> <code>imageRecipeArn</code> </p> </li> <li> <p> <code>infrastructureConfigurationArn</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>status</code> </p> </li> </ul>',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListImagePipelinesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImageRecipesRoute = createRoute({
  method: 'post',
  path: '/ListImageRecipes',
  description: 'Returns a list of image recipes.',
  operationId: 'ListImageRecipes',
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
              owner: z
                .enum(['Self', 'Shared', 'Amazon', 'ThirdParty'])
                .exactOptional()
                .openapi({
                  description:
                    'The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListImageRecipesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImageScanFindingAggregationsRoute = createRoute({
  method: 'post',
  path: '/ListImageScanFindingAggregations',
  description:
    "<p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>",
  operationId: 'ListImageScanFindingAggregations',
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
              filter: z
                .object({
                  name: FilterNameSchema.exactOptional().openapi({
                    description: 'The name of the filter. Filter names are case-sensitive.',
                  }),
                  values: FilterValuesSchema.exactOptional().openapi({
                    description: 'The filter values. Filter values are case-sensitive.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.',
                  required: [],
                }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListImageScanFindingAggregationsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImageScanFindingsRoute = createRoute({
  method: 'post',
  path: '/ListImageScanFindings',
  description: 'Returns a list of image scan findings for your account.',
  operationId: 'ListImageScanFindings',
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
                .array(ImageScanFindingsFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    "<p>An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:</p> <ul> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> <li> <p> <code>severity</code> </p> </li> </ul> <p>If you don't request a filter, then all findings in your account are listed.</p>",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListImageScanFindingsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListImagesRoute = createRoute({
  method: 'post',
  path: '/ListImages',
  description:
    'Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.',
  operationId: 'ListImages',
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
              owner: z
                .enum(['Self', 'Shared', 'Amazon', 'ThirdParty'])
                .exactOptional()
                .openapi({
                  description:
                    'The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers.',
                }),
              filters: z
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>',
                }),
              byName: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Requests a list of images with a specific recipe name.' }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
              includeDeprecated: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Includes deprecated images in the response list.' }),
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
      content: { 'application/json': { schema: ListImagesResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListInfrastructureConfigurationsRoute = createRoute({
  method: 'post',
  path: '/ListInfrastructureConfigurations',
  description: 'Returns a list of infrastructure configurations.',
  operationId: 'ListInfrastructureConfigurations',
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
                .array(FilterSchema)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description: 'You can filter on <code>name</code> to streamline results.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
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
      content: { 'application/json': { schema: ListInfrastructureConfigurationsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Returns the list of tags for the specified resource.',
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
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\/(?:build|test|distribution))\/[a-z0-9-_]+(?:\/(?:(?:x|[0-9]+)\.(?:x|[0-9]+)\.(?:x|[0-9]+))(?:\/[0-9]+)?)?$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\\/(?:build|test|distribution))/[a-z0-9-_]+(?:/(?:(?:x|[0-9]+)\\.(?:x|[0-9]+)\\.(?:x|[0-9]+))(?:/[0-9]+)?)?$',
            },
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
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds a tag to a resource.',
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
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\/(?:build|test|distribution))\/[a-z0-9-_]+(?:\/(?:(?:x|[0-9]+)\.(?:x|[0-9]+)\.(?:x|[0-9]+))(?:\/[0-9]+)?)?$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource that you want to tag.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\\/(?:build|test|distribution))/[a-z0-9-_]+(?:/(?:(?:x|[0-9]+)\\.(?:x|[0-9]+)\\.(?:x|[0-9]+))(?:/[0-9]+)?)?$',
            },
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
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The tags to apply to the resource.' }),
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
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postListWorkflowExecutionsRoute = createRoute({
  method: 'post',
  path: '/ListWorkflowExecutions',
  description:
    'Returns a list of workflow runtime instance metadata objects for a specific image build version.',
  operationId: 'ListWorkflowExecutions',
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
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
              imageBuildVersionArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
                )
                .openapi({
                  description:
                    'List all workflow runtime instances for the specified image build version resource ARN.',
                }),
            })
            .openapi({ required: ['imageBuildVersionArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkflowExecutionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const postListWorkflowStepExecutionsRoute = createRoute({
  method: 'post',
  path: '/ListWorkflowStepExecutions',
  description:
    'Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.',
  operationId: 'ListWorkflowStepExecutions',
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
                .max(25)
                .exactOptional()
                .openapi({ description: 'The maximum items to return in a request.' }),
              nextToken: z
                .string()
                .min(1)
                .max(65535)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the NextToken from a previously truncated response.',
                }),
              workflowExecutionId: z
                .string()
                .regex(
                  /^wf-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
                )
                .openapi({
                  description:
                    'The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.',
                }),
            })
            .openapi({ required: ['workflowExecutionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkflowStepExecutionsResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putPutComponentPolicyRoute = createRoute({
  method: 'put',
  path: '/PutComponentPolicy',
  description:
    'Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.',
  operationId: 'PutComponentPolicy',
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
              componentArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the component that this policy should be applied to.',
                }),
              policy: z.string().min(1).max(30000).openapi({ description: 'The policy to apply.' }),
            })
            .openapi({ required: ['componentArn', 'policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutComponentPolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putPutContainerRecipePolicyRoute = createRoute({
  method: 'put',
  path: '/PutContainerRecipePolicy',
  description:
    'Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.',
  operationId: 'PutContainerRecipePolicy',
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
              containerRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.',
                }),
              policy: z
                .string()
                .min(1)
                .max(30000)
                .openapi({ description: 'The policy to apply to the container recipe.' }),
            })
            .openapi({ required: ['containerRecipeArn', 'policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutContainerRecipePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putPutImagePolicyRoute = createRoute({
  method: 'put',
  path: '/PutImagePolicy',
  description:
    'Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.',
  operationId: 'PutImagePolicy',
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
              imageArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+\/[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image that this policy should be applied to.',
                }),
              policy: z.string().min(1).max(30000).openapi({ description: 'The policy to apply.' }),
            })
            .openapi({ required: ['imageArn', 'policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutImagePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putPutImageRecipePolicyRoute = createRoute({
  method: 'put',
  path: '/PutImageRecipePolicy',
  description:
    'Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.',
  operationId: 'PutImageRecipePolicy',
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
              imageRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.',
                }),
              policy: z.string().min(1).max(30000).openapi({ description: 'The policy to apply.' }),
            })
            .openapi({ required: ['imageRecipeArn', 'policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutImageRecipePolicyResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
  },
})

export const putStartImagePipelineExecutionRoute = createRoute({
  method: 'put',
  path: '/StartImagePipelineExecution',
  description: 'Manually triggers a pipeline to create an image.',
  operationId: 'StartImagePipelineExecution',
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
              imagePipelineArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.',
                }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
            })
            .openapi({ required: ['imagePipelineArn', 'clientToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartImagePipelineExecutionResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
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
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    487: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes a tag from a resource.',
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
        .regex(
          /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\/(?:build|test|distribution))\/[a-z0-9-_]+(?:\/(?:(?:x|[0-9]+)\.(?:x|[0-9]+)\.(?:x|[0-9]+))(?:\/[0-9]+)?)?$/,
        )
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource that you want to untag.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow\\/(?:build|test|distribution))/[a-z0-9-_]+(?:/(?:(?:x|[0-9]+)\\.(?:x|[0-9]+)\\.(?:x|[0-9]+))(?:/[0-9]+)?)?$',
            },
          },
        }),
    }),
    query: z.object({
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
            description: 'The tag keys to remove from the resource.',
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
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putUpdateDistributionConfigurationRoute = createRoute({
  method: 'put',
  path: '/UpdateDistributionConfiguration',
  description:
    'Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.',
  operationId: 'UpdateDistributionConfiguration',
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
              distributionConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the distribution configuration that you want to update.',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the distribution configuration.' }),
              distributions: z
                .array(DistributionSchema)
                .openapi({ description: 'The distributions of the distribution configuration.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token of the distribution configuration.',
                }),
            })
            .openapi({
              required: ['distributionConfigurationArn', 'distributions', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDistributionConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const putUpdateImagePipelineRoute = createRoute({
  method: 'put',
  path: '/UpdateImagePipeline',
  description:
    '<p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>',
  operationId: 'UpdateImagePipeline',
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
              imagePipelineArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-pipeline\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image pipeline that you want to update.',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the image pipeline.' }),
              imageRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):image-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.',
                }),
              containerRecipeArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):container-recipe\/[a-z0-9-_]+\/[0-9]+\.[0-9]+\.[0-9]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the container pipeline to update.',
                }),
              infrastructureConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.',
                }),
              distributionConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):distribution-configuration\/[a-z0-9-_]+$/,
                )
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated.',
                }),
              imageTestsConfiguration: z
                .object({
                  imageTestsEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.',
                  }),
                  timeoutMinutes: ImageTestsTimeoutMinutesSchema.exactOptional().openapi({
                    description:
                      '<p>The maximum time in minutes that tests are permitted to run.</p> <note> <p>The timeoutMinutes attribute is not currently active. This value is ignored.</p> </note>',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.',
                  required: [],
                }),
              enhancedImageMetadataEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.',
                }),
              schedule: z
                .object({
                  scheduleExpression: NonEmptyStringSchema.exactOptional().openapi({
                    description:
                      '<p>The cron expression determines how often EC2 Image Builder evaluates your <code>pipelineExecutionStartCondition</code>.</p> <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron expressions in EC2 Image Builder</a>.</p>',
                  }),
                  timezone: TimezoneSchema.exactOptional().openapi({
                    description:
                      'The timezone that applies to the scheduling expression. For example, "Etc/UTC", "America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA timezone format</a>. If not specified this defaults to UTC.',
                  }),
                  pipelineExecutionStartCondition:
                    PipelineExecutionStartConditionSchema.exactOptional().openapi({
                      description:
                        'The condition configures when the pipeline should trigger a new image build. When the <code>pipelineExecutionStartCondition</code> is set to <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic version filters on the base image or components in your image recipe, EC2 Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API Reference</i>.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A schedule configures how often and when a pipeline will automatically create a new image.',
                  required: [],
                }),
              status: z
                .enum(['DISABLED', 'ENABLED'])
                .exactOptional()
                .openapi({ description: 'The status of the image pipeline.' }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
              imageScanningConfiguration: z
                .object({
                  imageScanningEnabled: NullableBooleanSchema.exactOptional().openapi({
                    description:
                      'A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.',
                  }),
                  ecrConfiguration: EcrConfigurationSchema.exactOptional().openapi({
                    description: 'Contains Amazon ECR settings for vulnerability scans.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains settings for Image Builder image resource and container image scans.',
                  required: [],
                }),
            })
            .openapi({
              required: ['imagePipelineArn', 'infrastructureConfigurationArn', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateImagePipelineResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const putUpdateInfrastructureConfigurationRoute = createRoute({
  method: 'put',
  path: '/UpdateInfrastructureConfiguration',
  description:
    'Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.',
  operationId: 'UpdateInfrastructureConfiguration',
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
              infrastructureConfigurationArn: z
                .string()
                .regex(
                  /^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):infrastructure-configuration\/[a-z0-9-_]+$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.',
                }),
              description: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({ description: 'The description of the infrastructure configuration.' }),
              instanceTypes: z
                .array(InstanceTypeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.',
                }),
              instanceProfileName: z
                .string()
                .regex(/^[\w+=,.@-]+$/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The instance profile to associate with the instance used to customize your Amazon EC2 AMI.',
                }),
              securityGroupIds: z
                .array(NonEmptyStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.',
                }),
              subnetId: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The subnet ID to place the instance used to customize your Amazon EC2 AMI in.',
                }),
              logging: z
                .object({
                  s3Logs: S3LogsSchema.exactOptional().openapi({
                    description: 'The Amazon S3 logging configuration.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Logging configuration defines where Image Builder uploads your logs.',
                  required: [],
                }),
              keyPair: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.',
                }),
              terminateInstanceOnFailure: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.',
                }),
              snsTopicArn: z
                .string()
                .regex(/^arn:aws[^:]*:sns:[^:]+:[0-9]{12}:[a-zA-Z0-9-_]{1,256}$/)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>',
                }),
              clientToken: z
                .string()
                .min(1)
                .max(36)
                .openapi({
                  description: 'The idempotency token used to make this request idempotent.',
                }),
              resourceTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 30)
                .exactOptional()
                .openapi({
                  description: 'The tags attached to the resource created by Image Builder.',
                }),
              instanceMetadataOptions: z
                .object({
                  httpTokens: HttpTokensSchema.exactOptional().openapi({
                    description:
                      '<p>Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:</p> <ul> <li> <p> <b>required</b> – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.</p> </li> <li> <p> <b>optional</b> – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.</p> </li> </ul> <p>The default setting is <b>optional</b>.</p>',
                  }),
                  httpPutResponseHopLimit: HttpPutResponseHopLimitSchema.exactOptional().openapi({
                    description:
                      'Limit the number of hops that an instance metadata request can traverse to reach its destination. The default is one hop. However, if HTTP tokens are required, container image builds need a minimum of two hops.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.',
                  required: [],
                }),
            })
            .openapi({
              required: ['infrastructureConfigurationArn', 'instanceProfileName', 'clientToken'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateInfrastructureConfigurationResponseSchema } },
    },
    480: {
      description: 'ServiceException',
      content: { 'application/json': { schema: ServiceExceptionSchema } },
    },
    481: {
      description: 'ClientException',
      content: { 'application/json': { schema: ClientExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    486: {
      description: 'CallRateLimitExceededException',
      content: { 'application/json': { schema: CallRateLimitExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})
