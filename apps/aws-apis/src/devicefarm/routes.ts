import { createRoute, z } from '@hono/zod-openapi'

const AmazonResourceNameSchema = z
  .string()
  .regex(/^arn:.+/)
  .min(32)
  .max(1011)
  .openapi('AmazonResourceName')

const NameSchema = z.string().min(0).max(256).openapi('Name')

const MessageSchema = z.string().min(0).max(16384).openapi('Message')

const DevicePoolTypeSchema = z.enum(['CURATED', 'PRIVATE']).openapi('DevicePoolType')

const DeviceAttributeSchema = z
  .enum([
    'ARN',
    'PLATFORM',
    'FORM_FACTOR',
    'MANUFACTURER',
    'REMOTE_ACCESS_ENABLED',
    'REMOTE_DEBUG_ENABLED',
    'APPIUM_VERSION',
    'INSTANCE_ARN',
    'INSTANCE_LABELS',
    'FLEET_TYPE',
    'OS_VERSION',
    'MODEL',
    'AVAILABILITY',
  ])
  .openapi('DeviceAttribute')

const RuleOperatorSchema = z
  .enum([
    'EQUALS',
    'LESS_THAN',
    'LESS_THAN_OR_EQUALS',
    'GREATER_THAN',
    'GREATER_THAN_OR_EQUALS',
    'IN',
    'NOT_IN',
    'CONTAINS',
  ])
  .openapi('RuleOperator')

const StringSchema = z.string().openapi('String')

const RuleSchema = z
  .object({
    attribute: DeviceAttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rule\'s stringified attribute. For example, specify the value as <code>"\\"abc\\""</code>.</p> <p>The supported operators for each attribute are provided in the following list.</p> <dl> <dt>APPIUM_VERSION</dt> <dd> <p>The Appium version for the test.</p> <p>Supported operators: <code>CONTAINS</code> </p> </dd> <dt>ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device (for example, <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>.</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>AVAILABILITY</dt> <dd> <p>The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>FLEET_TYPE</dt> <dd> <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>FORM_FACTOR</dt> <dd> <p>The device form factor. Valid values are PHONE or TABLET.</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device instance.</p> <p>Supported operators: <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_LABELS</dt> <dd> <p>The label of the device instance.</p> <p>Supported operators: <code>CONTAINS</code> </p> </dd> <dt>MANUFACTURER</dt> <dd> <p>The device manufacturer (for example, Apple).</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>MODEL</dt> <dd> <p>The device model, such as Apple iPad Air 2 or Google Pixel.</p> <p>Supported operators: <code>CONTAINS</code>, <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>OS_VERSION</dt> <dd> <p>The operating system version (for example, 10.3.2).</p> <p>Supported operators: <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code> </p> </dd> <dt>PLATFORM</dt> <dd> <p>The device platform. Valid values are ANDROID or IOS.</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>REMOTE_ACCESS_ENABLED</dt> <dd> <p>Whether the device is enabled for remote access. Valid values are TRUE or FALSE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>REMOTE_DEBUG_ENABLED</dt> <dd> <p>Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.</p> <p>Supported operators: <code>EQUALS</code> </p> <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>, this filter is ignored.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    operator: RuleOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how Device Farm compares the rule's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.",
        }),
    ).exactOptional(),
    value: StringSchema.and(z.any().openapi({ description: "The rule's value." })).exactOptional(),
  })
  .openapi({ description: 'Represents a condition for a device pool.', required: [] })
  .openapi('Rule')

const RulesSchema = z.array(RuleSchema).openapi('Rules')

const IntegerSchema = z.int().openapi('Integer')

const DevicePoolSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The device pool's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: "The device pool's name." }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: "The device pool's description." }),
    ).exactOptional(),
    type: DevicePoolTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The device pool's type.</p> <p>Allowed values include:</p> <ul> <li> <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p> </li> </ul>",
        }),
    ).exactOptional(),
    rules: RulesSchema.and(
      z.any().openapi({ description: "Information about the device pool's rules." }),
    ).exactOptional(),
    maxDevices: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of device types.', required: [] })
  .openapi('DevicePool')

const CreateDevicePoolResultSchema = z
  .object({
    devicePool: DevicePoolSchema.and(
      z.any().openapi({ description: 'The newly created device pool.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { devicePool: {} },
    description: 'Represents the result of a create device pool request.',
    required: [],
  })
  .openapi('CreateDevicePoolResult')

const CreateDevicePoolRequestSchema = z
  .object({
    projectArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the project for the device pool.' }),
    ),
    name: NameSchema.and(z.any().openapi({ description: "The device pool's name." })),
    description: MessageSchema.and(
      z.any().openapi({ description: "The device pool's description." }),
    ).exactOptional(),
    rules: RulesSchema.and(z.any().openapi({ description: "The device pool's rules." })),
    maxDevices: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectArn', 'name', 'rules'],
    title: 'CreateDevicePoolRequest',
    description: 'Represents a request to the create device pool operation.',
  })
  .openapi('CreateDevicePoolRequest')

const ArgumentExceptionSchema = z.any().openapi('ArgumentException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ServiceAccountExceptionSchema = z.any().openapi('ServiceAccountException')

const BooleanSchema = z.boolean().openapi('Boolean')

const PackageIdsSchema = z.array(StringSchema).openapi('PackageIds')

const InstanceProfileSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the instance profile.' }),
    ).exactOptional(),
    packageCleanup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is <code>false</code> for private devices.',
        }),
    ).exactOptional(),
    excludeAppPackagesFromCleanup: PackageIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings containing the list of app packages that should not be cleaned up from the device after a test run completes.</p> <p>The list of packages is considered only if you set <code>packageCleanup</code> to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    rebootAfterUse: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the instance profile.' }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'The description of the instance profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the instance profile.', required: [] })
  .openapi('InstanceProfile')

const CreateInstanceProfileResultSchema = z
  .object({
    instanceProfile: InstanceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your instance profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInstanceProfileResult')

const CreateInstanceProfileRequestSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of your instance profile.' })),
    description: MessageSchema.and(
      z.any().openapi({ description: 'The description of your instance profile.' }),
    ).exactOptional(),
    packageCleanup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, Device Farm removes app packages after a test run. The default value is <code>false</code> for private devices.',
        }),
    ).exactOptional(),
    excludeAppPackagesFromCleanup: PackageIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run.</p> <p>The list of packages is considered only if you set <code>packageCleanup</code> to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    rebootAfterUse: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code>, Device Farm reboots the instance after a test run. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateInstanceProfileRequest' })
  .openapi('CreateInstanceProfileRequest')

const NetworkProfileTypeSchema = z.enum(['CURATED', 'PRIVATE']).openapi('NetworkProfileType')

const LongSchema = z.int().openapi('Long')

const PercentIntegerSchema = z.int().min(0).max(100).openapi('PercentInteger')

const NetworkProfileSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the network profile.' }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the network profile.' }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'The description of the network profile.' }),
    ).exactOptional(),
    type: NetworkProfileTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of network profile. Valid values are listed here.' }),
    ).exactOptional(),
    uplinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    downlinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    uplinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proportion of transmitted packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
    downlinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Proportion of received packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An array of settings that describes characteristics of a network profile.',
    required: [],
  })
  .openapi('NetworkProfile')

const CreateNetworkProfileResultSchema = z
  .object({
    networkProfile: NetworkProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            'The network profile that is returned by the create network profile request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNetworkProfileResult')

const CreateNetworkProfileRequestSchema = z
  .object({
    projectArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to create a network profile.',
        }),
    ),
    name: NameSchema.and(z.any().openapi({ description: 'The name for the new network profile.' })),
    description: MessageSchema.and(
      z.any().openapi({ description: 'The description of the network profile.' }),
    ).exactOptional(),
    type: NetworkProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of network profile to create. Valid values are listed here.',
        }),
    ).exactOptional(),
    uplinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    downlinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    uplinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proportion of transmitted packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
    downlinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Proportion of received packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectArn', 'name'], title: 'CreateNetworkProfileRequest' })
  .openapi('CreateNetworkProfileRequest')

const JobTimeoutMinutesSchema = z.int().openapi('JobTimeoutMinutes')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const SecurityGroupIdSchema = z
  .string()
  .regex(/^sg-[0-9a-fA-F]{8,}$/)
  .min(1)
  .max(4096)
  .openapi('SecurityGroupId')

const VpcSecurityGroupIdsSchema = z
  .array(SecurityGroupIdSchema)
  .min(1)
  .max(5)
  .openapi('VpcSecurityGroupIds')

const SubnetIdSchema = z
  .string()
  .regex(/^subnet-[0-9a-fA-F]{8,}$/)
  .min(1)
  .max(4096)
  .openapi('SubnetId')

const VpcSubnetIdsSchema = z.array(SubnetIdSchema).min(1).max(8).openapi('VpcSubnetIds')

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(4096)
  .openapi('NonEmptyString')

const VpcConfigSchema = z
  .object({
    securityGroupIds: VpcSecurityGroupIdsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of one or more security groups IDs in your Amazon VPC.',
        }),
    ),
    subnetIds: VpcSubnetIdsSchema.and(
      z.any().openapi({ description: 'An array of one or more subnet IDs in your Amazon VPC.' }),
    ),
    vpcId: NonEmptyStringSchema.and(z.any().openapi({ description: 'The ID of the Amazon VPC.' })),
  })
  .openapi({
    required: ['securityGroupIds', 'subnetIds', 'vpcId'],
    description:
      "Contains the VPC configuration data necessary to interface with AWS Device Farm's services.",
  })
  .openapi('VpcConfig')

const ProjectSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The project's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The project's name." })).exactOptional(),
    defaultJobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default number of minutes (at the project level) a test run executes before it times out. The default value is 150 minutes.',
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the project was created.' }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an operating-system neutral workspace for running and managing tests.',
    required: [],
  })
  .openapi('Project')

const CreateProjectResultSchema = z
  .object({
    project: ProjectSchema.and(
      z.any().openapi({ description: 'The newly created project.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      project: {
        name: 'MyProject',
        arn: 'arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE',
        created: '1472660939.152',
      },
    },
    description: 'Represents the result of a create project request.',
    required: [],
  })
  .openapi('CreateProjectResult')

const CreateProjectRequestSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: "The project's name." })),
    defaultJobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the execution timeout value (in minutes) for a project. All test runs in this project use the specified execution timeout value unless overridden when scheduling a run.',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'CreateProjectRequest',
    description: 'Represents a request to the create project operation.',
  })
  .openapi('CreateProjectRequest')

const TagOperationExceptionSchema = z.any().openapi('TagOperationException')

const ExecutionStatusSchema = z
  .enum([
    'PENDING',
    'PENDING_CONCURRENCY',
    'PENDING_DEVICE',
    'PROCESSING',
    'SCHEDULING',
    'PREPARING',
    'RUNNING',
    'COMPLETED',
    'STOPPING',
  ])
  .openapi('ExecutionStatus')

const ExecutionResultSchema = z
  .enum(['PENDING', 'PASSED', 'WARNED', 'FAILED', 'SKIPPED', 'ERRORED', 'STOPPED'])
  .openapi('ExecutionResult')

const DeviceFormFactorSchema = z.enum(['PHONE', 'TABLET']).openapi('DeviceFormFactor')

const DevicePlatformSchema = z.enum(['ANDROID', 'IOS']).openapi('DevicePlatform')

const DoubleSchema = z.float64().openapi('Double')

const CPUSchema = z
  .object({
    frequency: StringSchema.and(
      z.any().openapi({ description: "The CPU's frequency." }),
    ).exactOptional(),
    architecture: StringSchema.and(
      z.any().openapi({ description: "The CPU's architecture (for example, x86 or ARM)." }),
    ).exactOptional(),
    clock: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed as 1200000000.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.',
    required: [],
  })
  .openapi('CPU')

const ResolutionSchema = z
  .object({
    width: IntegerSchema.and(
      z.any().openapi({ description: "The screen resolution's width, expressed in pixels." }),
    ).exactOptional(),
    height: IntegerSchema.and(
      z.any().openapi({ description: "The screen resolution's height, expressed in pixels." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the screen resolution of a device in height and width, expressed in pixels.',
    required: [],
  })
  .openapi('Resolution')

const InstanceLabelsSchema = z.array(StringSchema).openapi('InstanceLabels')

const InstanceStatusSchema = z
  .enum(['IN_USE', 'PREPARING', 'AVAILABLE', 'NOT_AVAILABLE'])
  .openapi('InstanceStatus')

const DeviceInstanceSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the device instance.' }),
    ).exactOptional(),
    deviceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the device.' }),
    ).exactOptional(),
    labels: InstanceLabelsSchema.and(
      z.any().openapi({ description: 'An array of strings that describe the device instance.' }),
    ).exactOptional(),
    status: InstanceStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the device instance. Valid values are listed here.',
        }),
    ).exactOptional(),
    udid: StringSchema.and(
      z.any().openapi({ description: 'Unique device identifier for the device instance.' }),
    ).exactOptional(),
    instanceProfile: InstanceProfileSchema.and(
      z
        .any()
        .openapi({ description: 'A object that contains information about the instance profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the device instance.', required: [] })
  .openapi('DeviceInstance')

const DeviceInstancesSchema = z.array(DeviceInstanceSchema).openapi('DeviceInstances')

const DeviceAvailabilitySchema = z
  .enum(['TEMPORARY_NOT_AVAILABLE', 'BUSY', 'AVAILABLE', 'HIGHLY_AVAILABLE'])
  .openapi('DeviceAvailability')

const DeviceSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The device's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: "The device's display name." }),
    ).exactOptional(),
    manufacturer: StringSchema.and(
      z.any().openapi({ description: "The device's manufacturer name." }),
    ).exactOptional(),
    model: StringSchema.and(
      z.any().openapi({ description: "The device's model name." }),
    ).exactOptional(),
    modelId: StringSchema.and(
      z.any().openapi({ description: "The device's model ID." }),
    ).exactOptional(),
    formFactor: DeviceFormFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The device's form factor.</p> <p>Allowed values include:</p> <ul> <li> <p>PHONE</p> </li> <li> <p>TABLET</p> </li> </ul>",
        }),
    ).exactOptional(),
    platform: DevicePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The device's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID</p> </li> <li> <p>IOS</p> </li> </ul>",
        }),
    ).exactOptional(),
    os: StringSchema.and(
      z.any().openapi({ description: "The device's operating system type." }),
    ).exactOptional(),
    cpu: CPUSchema.and(
      z.any().openapi({ description: "Information about the device's CPU." }),
    ).exactOptional(),
    resolution: ResolutionSchema.and(
      z.any().openapi({ description: 'The resolution of the device.' }),
    ).exactOptional(),
    heapSize: LongSchema.and(
      z.any().openapi({ description: "The device's heap size, expressed in bytes." }),
    ).exactOptional(),
    memory: LongSchema.and(
      z.any().openapi({ description: "The device's total memory size, expressed in bytes." }),
    ).exactOptional(),
    image: StringSchema.and(
      z.any().openapi({ description: "The device's image name." }),
    ).exactOptional(),
    carrier: StringSchema.and(
      z.any().openapi({ description: "The device's carrier." }),
    ).exactOptional(),
    radio: StringSchema.and(
      z.any().openapi({ description: "The device's radio." }),
    ).exactOptional(),
    remoteAccessEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether remote access has been enabled for the specified device.',
        }),
    ).exactOptional(),
    remoteDebugEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This flag is set to <code>true</code> if remote debugging is enabled for the device.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    fleetType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.',
        }),
    ).exactOptional(),
    fleetName: StringSchema.and(
      z.any().openapi({ description: 'The name of the fleet to which this device belongs.' }),
    ).exactOptional(),
    instances: DeviceInstancesSchema.and(
      z.any().openapi({ description: 'The instances that belong to this device.' }),
    ).exactOptional(),
    availability: DeviceAvailabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates how likely a device is available for a test run. Currently available in the <a>ListDevices</a> and GetDevice API methods.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a device type that an app is tested against.', required: [] })
  .openapi('Device')

const HostAddressSchema = z.string().max(1024).openapi('HostAddress')

const ClientIdSchema = z.string().min(0).max(64).openapi('ClientId')

const BillingMethodSchema = z.enum(['METERED', 'UNMETERED']).openapi('BillingMethod')

const DeviceMinutesSchema = z
  .object({
    total: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When specified, represents the total minutes used by the resource to run tests.',
        }),
    ).exactOptional(),
    metered: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When specified, represents only the sum of metered minutes used by the resource to run tests.',
        }),
    ).exactOptional(),
    unmetered: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'When specified, represents only the sum of unmetered minutes used by the resource to run tests.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.',
    required: [],
  })
  .openapi('DeviceMinutes')

const InteractionModeSchema = z
  .enum(['INTERACTIVE', 'NO_VIDEO', 'VIDEO_ONLY'])
  .openapi('InteractionMode')

const SkipAppResignSchema = z.boolean().openapi('SkipAppResign')

const RemoteAccessSessionSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the remote access session.' }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the remote access session.' }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the remote access session was created.' }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING.</p> </li> <li> <p>PENDING_CONCURRENCY.</p> </li> <li> <p>PENDING_DEVICE.</p> </li> <li> <p>PROCESSING.</p> </li> <li> <p>SCHEDULING.</p> </li> <li> <p>PREPARING.</p> </li> <li> <p>RUNNING.</p> </li> <li> <p>COMPLETED.</p> </li> <li> <p>STOPPING.</p> </li> </ul>',
        }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The result of the remote access session. Can be any of the following:</p> <ul> <li> <p>PENDING.</p> </li> <li> <p>PASSED.</p> </li> <li> <p>WARNED.</p> </li> <li> <p>FAILED.</p> </li> <li> <p>SKIPPED.</p> </li> <li> <p>ERRORED.</p> </li> <li> <p>STOPPED.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: 'A message about the remote access session.' }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the remote access session was started.' }),
    ).exactOptional(),
    stopped: DateTimeSchema.and(
      z.any().openapi({ description: 'The date and time the remote access session was stopped.' }),
    ).exactOptional(),
    device: DeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'The device (phone or tablet) used in the remote access session.',
        }),
    ).exactOptional(),
    instanceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the instance.' }),
    ).exactOptional(),
    remoteDebugEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This flag is set to <code>true</code> if remote debugging is enabled for the remote access session.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    remoteRecordEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This flag is set to <code>true</code> if remote recording is enabled for the remote access session.',
        }),
    ).exactOptional(),
    remoteRecordAppArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN for the app to be recorded in the remote access session.',
        }),
    ).exactOptional(),
    hostAddress: HostAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote debugging is enabled for the remote access session.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Unique identifier of your client for the remote access session. Only returned if remote debugging is enabled for the remote access session.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    billingMethod: BillingMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The billing method of the remote access session. Possible values include <code>METERED</code> or <code>UNMETERED</code>. For more information about metered devices, see <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html#welcome-terminology">AWS Device Farm terminology</a>.',
        }),
    ).exactOptional(),
    deviceMinutes: DeviceMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes a device is used in a remote access session (including setup and teardown minutes).',
        }),
    ).exactOptional(),
    endpoint: StringSchema.and(
      z.any().openapi({ description: 'The endpoint for the remote access sesssion.' }),
    ).exactOptional(),
    deviceUdid: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    interactionMode: InteractionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You cannot run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This mode has the fastest test execution speed. You can run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>',
        }),
    ).exactOptional(),
    skipAppResign: SkipAppResignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again.</p> <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about the remote access session.', required: [] })
  .openapi('RemoteAccessSession')

const CreateRemoteAccessSessionResultSchema = z
  .object({
    remoteAccessSession: RemoteAccessSessionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that describes the remote access session when the request to create a remote access session is sent.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { remoteAccessSession: {} },
    description: 'Represents the server response from a request to create a remote access session.',
    required: [],
  })
  .openapi('CreateRemoteAccessSessionResult')

const SshPublicKeySchema = z.string().min(0).max(8192).openapi('SshPublicKey')

const AmazonResourceNamesSchema = z.array(AmazonResourceNameSchema).openapi('AmazonResourceNames')

const CreateRemoteAccessSessionConfigurationSchema = z
  .object({
    billingMethod: BillingMethodSchema.and(
      z.any().openapi({ description: 'The billing method for the remote access session.' }),
    ).exactOptional(),
    vpceConfigurationArns: AmazonResourceNamesSchema.and(
      z
        .any()
        .openapi({ description: 'An array of ARNs included in the VPC endpoint configuration.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration settings for a remote access session, including billing method.',
    required: [],
  })
  .openapi('CreateRemoteAccessSessionConfiguration')

const CreateRemoteAccessSessionRequestSchema = z
  .object({
    projectArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.',
        }),
    ),
    deviceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the device for which you want to create a remote access session.',
        }),
    ),
    instanceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access session.',
        }),
    ).exactOptional(),
    sshPublicKey: SshPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Ignored. The public key of the <code>ssh</code> key pair you want to use for connecting to remote devices in your remote debugging session. This key is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    remoteDebugEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> if you want to access devices remotely for debugging in your remote access session.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    remoteRecordEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to enable remote recording for the remote access session.',
        }),
    ).exactOptional(),
    remoteRecordAppArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the remote access session to create.' }),
    ).exactOptional(),
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Unique identifier for the client. If you want access to multiple devices on the same client, you should pass the same <code>clientId</code> value in each call to <code>CreateRemoteAccessSession</code>. This identifier is required only if <code>remoteDebugEnabled</code> is set to <code>true</code>.</p> <p>Remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>.</p>',
        }),
    ).exactOptional(),
    configuration: CreateRemoteAccessSessionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration information for the remote access session request.',
        }),
    ).exactOptional(),
    interactionMode: InteractionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The interaction mode of the remote access session. Valid values are:</p> <ul> <li> <p>INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You cannot run XCUITest framework-based tests in this mode.</p> </li> <li> <p>NO_VIDEO: You are connected to the device, but cannot interact with it or view the screen. This mode has the fastest test execution speed. You can run XCUITest framework-based tests in this mode.</p> </li> <li> <p>VIDEO_ONLY: You can view the screen, but cannot touch or rotate it. You can run XCUITest framework-based tests and watch the screen in this mode.</p> </li> </ul>',
        }),
    ).exactOptional(),
    skipAppResign: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again.</p> <p>For more information on how Device Farm modifies your uploads during tests, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectArn', 'deviceArn'],
    title: 'CreateRemoteAccessSessionRequest',
    description: 'Creates and submits a request to start a remote access session.',
  })
  .openapi('CreateRemoteAccessSessionRequest')

const DeviceFarmArnSchema = z
  .string()
  .regex(/^arn:aws:devicefarm:.+/)
  .min(32)
  .max(1011)
  .openapi('DeviceFarmArn')

const SecurityGroupIdsSchema = z
  .array(NonEmptyStringSchema)
  .min(1)
  .max(5)
  .openapi('SecurityGroupIds')

const SubnetIdsSchema = z.array(NonEmptyStringSchema).min(1).max(8).openapi('SubnetIds')

const TestGridVpcConfigSchema = z
  .object({
    securityGroupIds: SecurityGroupIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC security group IDs in your Amazon VPC.' }),
    ),
    subnetIds: SubnetIdsSchema.and(
      z.any().openapi({ description: 'A list of VPC subnet IDs in your Amazon VPC.' }),
    ),
    vpcId: NonEmptyStringSchema.and(z.any().openapi({ description: 'The ID of the Amazon VPC.' })),
  })
  .openapi({
    required: ['securityGroupIds', 'subnetIds', 'vpcId'],
    description: 'The VPC security groups and subnets that are attached to a project.',
  })
  .openapi('TestGridVpcConfig')

const TestGridProjectSchema = z
  .object({
    arn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'The ARN for the project.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'A human-readable name for the project.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'A human-readable description for the project.' }),
    ).exactOptional(),
    vpcConfig: TestGridVpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the project was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A Selenium testing project. Projects are used to collect and collate sessions.',
    required: [],
  })
  .openapi('TestGridProject')

const CreateTestGridProjectResultSchema = z
  .object({
    testGridProject: TestGridProjectSchema.and(
      z.any().openapi({ description: 'ARN of the Selenium testing project that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTestGridProjectResult')

const ResourceNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('ResourceName')

const ResourceDescriptionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('ResourceDescription')

const CreateTestGridProjectRequestSchema = z
  .object({
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'Human-readable name of the Selenium testing project.' }),
    ),
    description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Human-readable description of the project.' }),
    ).exactOptional(),
    vpcConfig: TestGridVpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['name'], title: 'CreateTestGridProjectRequest' })
  .openapi('CreateTestGridProjectRequest')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const CreateTestGridUrlResultSchema = z
  .object({
    url: SensitiveStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A signed URL, expiring in <a>CreateTestGridUrlRequest$expiresInSeconds</a> seconds, to be passed to a <code>RemoteWebDriver</code>. ',
        }),
    ).exactOptional(),
    expires: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds the URL from <a>CreateTestGridUrlResult$url</a> stays active.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTestGridUrlResult')

const TestGridUrlExpiresInSecondsInputSchema = z
  .int()
  .min(60)
  .max(86400)
  .openapi('TestGridUrlExpiresInSecondsInput')

const CreateTestGridUrlRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN (from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>) to associate with the short-term URL. ',
        }),
    ),
    expiresInSeconds: TestGridUrlExpiresInSecondsInputSchema.and(
      z.any().openapi({ description: 'Lifetime, in seconds, of the URL.' }),
    ),
  })
  .openapi({ required: ['projectArn', 'expiresInSeconds'], title: 'CreateTestGridUrlRequest' })
  .openapi('CreateTestGridUrlRequest')

const UploadTypeSchema = z
  .enum([
    'ANDROID_APP',
    'IOS_APP',
    'WEB_APP',
    'EXTERNAL_DATA',
    'APPIUM_JAVA_JUNIT_TEST_PACKAGE',
    'APPIUM_JAVA_TESTNG_TEST_PACKAGE',
    'APPIUM_PYTHON_TEST_PACKAGE',
    'APPIUM_NODE_TEST_PACKAGE',
    'APPIUM_RUBY_TEST_PACKAGE',
    'APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE',
    'APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE',
    'APPIUM_WEB_PYTHON_TEST_PACKAGE',
    'APPIUM_WEB_NODE_TEST_PACKAGE',
    'APPIUM_WEB_RUBY_TEST_PACKAGE',
    'CALABASH_TEST_PACKAGE',
    'INSTRUMENTATION_TEST_PACKAGE',
    'UIAUTOMATION_TEST_PACKAGE',
    'UIAUTOMATOR_TEST_PACKAGE',
    'XCTEST_TEST_PACKAGE',
    'XCTEST_UI_TEST_PACKAGE',
    'APPIUM_JAVA_JUNIT_TEST_SPEC',
    'APPIUM_JAVA_TESTNG_TEST_SPEC',
    'APPIUM_PYTHON_TEST_SPEC',
    'APPIUM_NODE_TEST_SPEC',
    'APPIUM_RUBY_TEST_SPEC',
    'APPIUM_WEB_JAVA_JUNIT_TEST_SPEC',
    'APPIUM_WEB_JAVA_TESTNG_TEST_SPEC',
    'APPIUM_WEB_PYTHON_TEST_SPEC',
    'APPIUM_WEB_NODE_TEST_SPEC',
    'APPIUM_WEB_RUBY_TEST_SPEC',
    'INSTRUMENTATION_TEST_SPEC',
    'XCTEST_UI_TEST_SPEC',
  ])
  .openapi('UploadType')

const UploadStatusSchema = z
  .enum(['INITIALIZED', 'PROCESSING', 'SUCCEEDED', 'FAILED'])
  .openapi('UploadStatus')

const SensitiveURLSchema = z.string().min(0).max(2048).openapi('SensitiveURL')

const MetadataSchema = z.string().min(0).max(8192).openapi('Metadata')

const ContentTypeSchema = z.string().min(0).max(64).openapi('ContentType')

const UploadCategorySchema = z.enum(['CURATED', 'PRIVATE']).openapi('UploadCategory')

const UploadSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The upload's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: "The upload's file name." }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the upload was created.' }),
    ).exactOptional(),
    type: UploadTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The upload's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP</p> </li> <li> <p>IOS_APP</p> </li> <li> <p>WEB_APP</p> </li> <li> <p>EXTERNAL_DATA</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_RUBY_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p> </li> <li> <p>CALABASH_TEST_PACKAGE</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE</p> </li> <li> <p>XCTEST_TEST_PACKAGE</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_NODE_TEST_SPEC</p> </li> <li> <p>APPIUM_RUBY_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_SPEC</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC</p> </li> <li> <p>XCTEST_UI_TEST_SPEC</p> </li> </ul>",
        }),
    ).exactOptional(),
    status: UploadStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The upload's status.</p> <p>Must be one of the following values:</p> <ul> <li> <p>FAILED</p> </li> <li> <p>INITIALIZED</p> </li> <li> <p>PROCESSING</p> </li> <li> <p>SUCCEEDED</p> </li> </ul>",
        }),
    ).exactOptional(),
    url: SensitiveURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The presigned Amazon S3 URL that was used to store a file using a PUT request.',
        }),
    ).exactOptional(),
    metadata: MetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.",
        }),
    ).exactOptional(),
    contentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upload's content type (for example, <code>application/octet-stream</code>).",
        }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the upload's result." }),
    ).exactOptional(),
    category: UploadCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The upload's category. Allowed values include:</p> <ul> <li> <p>CURATED: An upload managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: An upload managed by the AWS Device Farm customer.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An app or a set of one or more tests to upload or that have been uploaded.',
    required: [],
  })
  .openapi('Upload')

const CreateUploadResultSchema = z
  .object({
    upload: UploadSchema.and(
      z.any().openapi({ description: 'The newly created upload.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      upload: {
        name: 'MyAppiumPythonUpload',
        type: 'APPIUM_PYTHON_TEST_PACKAGE',
        arn: 'arn:aws:devicefarm:us-west-2:123456789101:upload:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE',
        created: '1472661404.186',
        status: 'INITIALIZED',
        url: 'https://prod-us-west-2-uploads.s3-us-west-2.amazonaws.com/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aproject%3A5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE/uploads/arn%3Aaws%3Adevicefarm%3Aus-west-2%3A123456789101%3Aupload%3A5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/b5340a65-3da7-4da6-a26e-12345EXAMPLE/MyAppiumPythonUpload?AWSAccessKeyId=1234567891011EXAMPLE&Expires=1472747804&Signature=1234567891011EXAMPLE',
      },
    },
    description: 'Represents the result of a create upload request.',
    required: [],
  })
  .openapi('CreateUploadResult')

const CreateUploadRequestSchema = z
  .object({
    projectArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the project for the upload.' }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upload's file name. The name should not contain any forward slashes (<code>/</code>). If you are uploading an iOS app, the file name must end with the <code>.ipa</code> extension. If you are uploading an Android app, the file name must end with the <code>.apk</code> extension. For all others, the file name must end with the <code>.zip</code> file extension.",
        }),
    ),
    type: UploadTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The upload's upload type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP</p> </li> <li> <p>IOS_APP</p> </li> <li> <p>WEB_APP</p> </li> <li> <p>EXTERNAL_DATA</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_RUBY_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p> </li> <li> <p>CALABASH_TEST_PACKAGE</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE</p> </li> <li> <p>XCTEST_TEST_PACKAGE</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_NODE_TEST_SPEC</p> </li> <li> <p>APPIUM_RUBY_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_SPEC</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC</p> </li> <li> <p>XCTEST_UI_TEST_SPEC</p> </li> </ul> <p> If you call <code>CreateUpload</code> with <code>WEB_APP</code> specified, AWS Device Farm throws an <code>ArgumentException</code> error.</p>",
        }),
    ),
    contentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upload's content type (for example, <code>application/octet-stream</code>).",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectArn', 'name', 'type'],
    title: 'CreateUploadRequest',
    description: 'Represents a request to the create upload operation.',
  })
  .openapi('CreateUploadRequest')

const VPCEConfigurationNameSchema = z.string().min(0).max(1024).openapi('VPCEConfigurationName')

const VPCEServiceNameSchema = z.string().min(0).max(2048).openapi('VPCEServiceName')

const ServiceDnsNameSchema = z.string().min(0).max(2048).openapi('ServiceDnsName')

const VPCEConfigurationDescriptionSchema = z
  .string()
  .min(0)
  .max(2048)
  .openapi('VPCEConfigurationDescription')

const VPCEConfigurationSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the VPC endpoint configuration.',
        }),
    ).exactOptional(),
    vpceConfigurationName: VPCEConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.',
        }),
    ).exactOptional(),
    vpceServiceName: VPCEServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.',
        }),
    ).exactOptional(),
    serviceDnsName: ServiceDnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name that maps to the private IP address of the service you want to access.',
        }),
    ).exactOptional(),
    vpceConfigurationDescription: VPCEConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description that provides details about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.',
    required: [],
  })
  .openapi('VPCEConfiguration')

const CreateVPCEConfigurationResultSchema = z
  .object({
    vpceConfiguration: VPCEConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVPCEConfigurationResult')

const CreateVPCEConfigurationRequestSchema = z
  .object({
    vpceConfigurationName: VPCEConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.',
        }),
    ),
    vpceServiceName: VPCEServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.',
        }),
    ),
    serviceDnsName: ServiceDnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS name of the service running in your VPC that you want Device Farm to test.',
        }),
    ),
    vpceConfigurationDescription: VPCEConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description that provides details about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['vpceConfigurationName', 'vpceServiceName', 'serviceDnsName'],
    title: 'CreateVPCEConfigurationRequest',
  })
  .openapi('CreateVPCEConfigurationRequest')

const DeleteDevicePoolResultSchema = z
  .object({})
  .openapi({ example: {}, description: 'Represents the result of a delete device pool request.' })
  .openapi('DeleteDevicePoolResult')

const DeleteDevicePoolRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the Amazon Resource Name (ARN) of the Device Farm device pool to delete.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteDevicePoolRequest',
    description: 'Represents a request to the delete device pool operation.',
  })
  .openapi('DeleteDevicePoolRequest')

const DeleteInstanceProfileResultSchema = z.object({}).openapi('DeleteInstanceProfileResult')

const DeleteInstanceProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the instance profile you are requesting to delete.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteInstanceProfileRequest' })
  .openapi('DeleteInstanceProfileRequest')

const DeleteNetworkProfileResultSchema = z.object({}).openapi('DeleteNetworkProfileResult')

const DeleteNetworkProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the network profile to delete.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteNetworkProfileRequest' })
  .openapi('DeleteNetworkProfileRequest')

const DeleteProjectResultSchema = z
  .object({})
  .openapi({ example: {}, description: 'Represents the result of a delete project request.' })
  .openapi('DeleteProjectResult')

const DeleteProjectRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the Amazon Resource Name (ARN) of the Device Farm project to delete.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteProjectRequest',
    description: 'Represents a request to the delete project operation.',
  })
  .openapi('DeleteProjectRequest')

const DeleteRemoteAccessSessionResultSchema = z
  .object({})
  .openapi({
    example: {},
    description:
      'The response from the server when a request is made to delete the remote access session.',
  })
  .openapi('DeleteRemoteAccessSessionResult')

const DeleteRemoteAccessSessionRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the session for which you want to delete remote access.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteRemoteAccessSessionRequest',
    description: 'Represents the request to delete the specified remote access session.',
  })
  .openapi('DeleteRemoteAccessSessionRequest')

const DeleteRunResultSchema = z
  .object({})
  .openapi({ example: {}, description: 'Represents the result of a delete run request.' })
  .openapi('DeleteRunResult')

const DeleteRunRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the run to delete.' }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteRunRequest',
    description: 'Represents a request to the delete run operation.',
  })
  .openapi('DeleteRunRequest')

const DeleteTestGridProjectResultSchema = z.object({}).openapi('DeleteTestGridProjectResult')

const DeleteTestGridProjectRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the project to delete, from <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.',
        }),
    ),
  })
  .openapi({ required: ['projectArn'], title: 'DeleteTestGridProjectRequest' })
  .openapi('DeleteTestGridProjectRequest')

const CannotDeleteExceptionSchema = z.any().openapi('CannotDeleteException')

const DeleteUploadResultSchema = z
  .object({})
  .openapi({ example: {}, description: 'Represents the result of a delete upload request.' })
  .openapi('DeleteUploadResult')

const DeleteUploadRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the Amazon Resource Name (ARN) of the Device Farm upload to delete.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'DeleteUploadRequest',
    description: 'Represents a request to the delete upload operation.',
  })
  .openapi('DeleteUploadRequest')

const DeleteVPCEConfigurationResultSchema = z.object({}).openapi('DeleteVPCEConfigurationResult')

const DeleteVPCEConfigurationRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteVPCEConfigurationRequest' })
  .openapi('DeleteVPCEConfigurationRequest')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const AWSAccountNumberSchema = z.string().min(2).max(16).openapi('AWSAccountNumber')

const PurchasedDevicesMapSchema = z.record(z.string(), IntegerSchema).openapi('PurchasedDevicesMap')

const TrialMinutesSchema = z
  .object({
    total: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of free trial minutes that the account started with.',
        }),
    ).exactOptional(),
    remaining: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The number of free trial minutes remaining in the account.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents information about free trial device minutes for an AWS account.',
    required: [],
  })
  .openapi('TrialMinutes')

const MaxSlotMapSchema = z.record(z.string(), IntegerSchema).openapi('MaxSlotMap')

const AccountSettingsSchema = z
  .object({
    awsAccountNumber: AWSAccountNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS account number specified in the <code>AccountSettings</code> container.',
        }),
    ).exactOptional(),
    unmeteredDevices: PurchasedDevicesMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the unmetered devices you have purchased or want to purchase.',
        }),
    ).exactOptional(),
    unmeteredRemoteAccessDevices: PurchasedDevicesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the unmetered remote access devices you have purchased or want to purchase.',
        }),
    ).exactOptional(),
    maxJobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of minutes a test run executes before it times out.',
        }),
    ).exactOptional(),
    trialMinutes: TrialMinutesSchema.and(
      z
        .any()
        .openapi({
          description: "Information about an AWS account's usage of free trial device minutes.",
        }),
    ).exactOptional(),
    maxSlots: MaxSlotMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an <code>offering-id:number</code> pair, where the <code>offering-id</code> represents one of the IDs returned by the <code>ListOfferings</code> command.',
        }),
    ).exactOptional(),
    defaultJobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default number of minutes (at the account level) a test run executes before it times out. The default value is 150 minutes.',
        }),
    ).exactOptional(),
    skipAppResign: SkipAppResignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again.</p> <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A container for account-level settings in AWS Device Farm.',
    required: [],
  })
  .openapi('AccountSettings')

const GetAccountSettingsResultSchema = z
  .object({
    accountSettings: AccountSettingsSchema.and(
      z.any().openapi({ description: 'The account settings.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      accountSettings: {
        awsAccountNumber: '123456789101',
        unmeteredDevices: { ANDROID: 1, IOS: 2 },
      },
    },
    description:
      'Represents the account settings return values from the <code>GetAccountSettings</code> request.',
    required: [],
  })
  .openapi('GetAccountSettingsResult')

const GetAccountSettingsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAccountSettingsRequest',
    description: 'Represents the request sent to retrieve the account settings.',
  })
  .openapi('GetAccountSettingsRequest')

const GetDeviceResultSchema = z
  .object({
    device: DeviceSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about the requested device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      device: {
        name: 'LG G2 (Sprint)',
        arn: 'arn:aws:devicefarm:us-west-2::device:A0E6E6E1059E45918208DF75B2B7EF6C',
        cpu: { architecture: 'armeabi-v7a', clock: 2265.6, frequency: 'MHz' },
        formFactor: 'PHONE',
        heapSize: 256000000,
        image: '75B2B7EF6C12345EXAMPLE',
        manufacturer: 'LG',
        memory: 16000000000,
        model: 'G2 (Sprint)',
        os: '4.2.2',
        platform: 'ANDROID',
        resolution: { height: 1920, width: 1080 },
      },
    },
    description: 'Represents the result of a get device request.',
    required: [],
  })
  .openapi('GetDeviceResult')

const GetDeviceRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The device type's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetDeviceRequest',
    description: 'Represents a request to the get device request.',
  })
  .openapi('GetDeviceRequest')

const GetDeviceInstanceResultSchema = z
  .object({
    deviceInstance: DeviceInstanceSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your device instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceInstanceResult')

const GetDeviceInstanceRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the instance you're requesting information about.",
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetDeviceInstanceRequest' })
  .openapi('GetDeviceInstanceRequest')

const GetDevicePoolResultSchema = z
  .object({
    devicePool: DevicePoolSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about the requested device pool.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { devicePool: {} },
    description: 'Represents the result of a get device pool request.',
    required: [],
  })
  .openapi('GetDevicePoolResult')

const GetDevicePoolRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The device pool's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetDevicePoolRequest',
    description: 'Represents a request to the get device pool operation.',
  })
  .openapi('GetDevicePoolRequest')

const IncompatibilityMessageSchema = z
  .object({
    message: MessageSchema.and(
      z.any().openapi({ description: 'A message about the incompatibility.' }),
    ).exactOptional(),
    type: DeviceAttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of incompatibility.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN</p> </li> <li> <p>FORM_FACTOR (for example, phone or tablet)</p> </li> <li> <p>MANUFACTURER</p> </li> <li> <p>PLATFORM (for example, Android or iOS)</p> </li> <li> <p>REMOTE_ACCESS_ENABLED</p> </li> <li> <p>APPIUM_VERSION</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about incompatibility.', required: [] })
  .openapi('IncompatibilityMessage')

const IncompatibilityMessagesSchema = z
  .array(IncompatibilityMessageSchema)
  .openapi('IncompatibilityMessages')

const DevicePoolCompatibilityResultSchema = z
  .object({
    device: DeviceSchema.and(
      z.any().openapi({ description: 'The device (phone or tablet) to return information about.' }),
    ).exactOptional(),
    compatible: BooleanSchema.and(
      z.any().openapi({ description: 'Whether the result was compatible with the device pool.' }),
    ).exactOptional(),
    incompatibilityMessages: IncompatibilityMessagesSchema.and(
      z.any().openapi({ description: 'Information about the compatibility.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a device pool compatibility result.', required: [] })
  .openapi('DevicePoolCompatibilityResult')

const DevicePoolCompatibilityResultsSchema = z
  .array(DevicePoolCompatibilityResultSchema)
  .openapi('DevicePoolCompatibilityResults')

const GetDevicePoolCompatibilityResultSchema = z
  .object({
    compatibleDevices: DevicePoolCompatibilityResultsSchema.and(
      z.any().openapi({ description: 'Information about compatible devices.' }),
    ).exactOptional(),
    incompatibleDevices: DevicePoolCompatibilityResultsSchema.and(
      z.any().openapi({ description: 'Information about incompatible devices.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { compatibleDevices: [], incompatibleDevices: [] },
    description: 'Represents the result of describe device pool compatibility request.',
    required: [],
  })
  .openapi('GetDevicePoolCompatibilityResult')

const TestTypeSchema = z
  .enum([
    'BUILTIN_FUZZ',
    'BUILTIN_EXPLORER',
    'WEB_PERFORMANCE_PROFILE',
    'APPIUM_JAVA_JUNIT',
    'APPIUM_JAVA_TESTNG',
    'APPIUM_PYTHON',
    'APPIUM_NODE',
    'APPIUM_RUBY',
    'APPIUM_WEB_JAVA_JUNIT',
    'APPIUM_WEB_JAVA_TESTNG',
    'APPIUM_WEB_PYTHON',
    'APPIUM_WEB_NODE',
    'APPIUM_WEB_RUBY',
    'CALABASH',
    'INSTRUMENTATION',
    'UIAUTOMATION',
    'UIAUTOMATOR',
    'XCTEST',
    'XCTEST_UI',
    'REMOTE_ACCESS_RECORD',
    'REMOTE_ACCESS_REPLAY',
  ])
  .openapi('TestType')

const FilterSchema = z.string().min(0).max(8192).openapi('Filter')

const TestParametersSchema = z.record(z.string(), StringSchema).openapi('TestParameters')

const ScheduleRunTestSchema = z
  .object({
    type: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The test's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ</p> </li> <li> <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT</p> </li> <li> <p>APPIUM_JAVA_TESTNG</p> </li> <li> <p>APPIUM_PYTHON</p> </li> <li> <p>APPIUM_NODE</p> </li> <li> <p>APPIUM_RUBY</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG</p> </li> <li> <p>APPIUM_WEB_PYTHON</p> </li> <li> <p>APPIUM_WEB_NODE</p> </li> <li> <p>APPIUM_WEB_RUBY</p> </li> <li> <p>CALABASH</p> </li> <li> <p>INSTRUMENTATION</p> </li> <li> <p>UIAUTOMATION</p> </li> <li> <p>UIAUTOMATOR</p> </li> <li> <p>XCTEST</p> </li> <li> <p>XCTEST_UI</p> </li> </ul>",
        }),
    ),
    testPackageArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the uploaded test to be run.' }),
    ).exactOptional(),
    testSpecArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the YAML-formatted test specification.' }),
    ).exactOptional(),
    filter: FilterSchema.and(
      z.any().openapi({ description: "The test's filter." }),
    ).exactOptional(),
    parameters: TestParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The test's parameters, such as test framework parameters and fixture settings. Parameters are represented by name-value pairs of strings.</p> <p>For all tests:</p> <ul> <li> <p> <code>app_performance_monitoring</code>: Performance monitoring is enabled by default. Set this parameter to false to disable it.</p> </li> </ul> <p>For Calabash tests:</p> <ul> <li> <p>profile: A cucumber profile (for example, <code>my_profile_name</code>).</p> </li> <li> <p>tags: You can limit execution to features or scenarios that have (or don't have) certain tags (for example, @smoke or @smoke,~@wip).</p> </li> </ul> <p>For Appium tests (all types):</p> <ul> <li> <p>appium_version: The Appium version. Currently supported values are 1.6.5 (and later), latest, and default.</p> <ul> <li> <p>latest runs the latest Appium version supported by Device Farm (1.9.1).</p> </li> <li> <p>For default, Device Farm selects a compatible version of Appium for the device. The current behavior is to run 1.7.2 on Android devices and iOS 9 and earlier and 1.7.2 for iOS 10 and later.</p> </li> <li> <p>This behavior is subject to change.</p> </li> </ul> </li> </ul> <p>For fuzz tests (Android only):</p> <ul> <li> <p>event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.</p> </li> <li> <p>throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.</p> </li> <li> <p>seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</p> </li> </ul> <p>For Explorer tests:</p> <ul> <li> <p>username: A user name to use if the Explorer encounters a login form. If not supplied, no user name is inserted.</p> </li> <li> <p>password: A password to use if the Explorer encounters a login form. If not supplied, no password is inserted.</p> </li> </ul> <p>For Instrumentation:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: <code>com.android.abc.Test1</code> </p> </li> <li> <p>Running a single test: <code>com.android.abc.Test1#smoke</code> </p> </li> <li> <p>Running multiple tests: <code>com.android.abc.Test1,com.android.abc.Test2</code> </p> </li> </ul> </li> </ul> <p>For XCTest and XCTestUI:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test class: <code>LoginTests</code> </p> </li> <li> <p>Running a multiple test classes: <code>LoginTests,SmokeTests</code> </p> </li> <li> <p>Running a single test: <code>LoginTests/testValid</code> </p> </li> <li> <p>Running multiple tests: <code>LoginTests/testValid,LoginTests/testInvalid</code> </p> </li> </ul> </li> </ul> <p>For UIAutomator:</p> <ul> <li> <p>filter: A test filter string. Examples:</p> <ul> <li> <p>Running a single test case: <code>com.android.abc.Test1</code> </p> </li> <li> <p>Running a single test: <code>com.android.abc.Test1#smoke</code> </p> </li> <li> <p>Running multiple tests: <code>com.android.abc.Test1,com.android.abc.Test2</code> </p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      'Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.',
  })
  .openapi('ScheduleRunTest')

const LocationSchema = z
  .object({
    latitude: DoubleSchema.and(z.any().openapi({ description: 'The latitude.' })),
    longitude: DoubleSchema.and(z.any().openapi({ description: 'The longitude.' })),
  })
  .openapi({
    required: ['latitude', 'longitude'],
    description:
      '<p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>',
  })
  .openapi('Location')

const IosPathsSchema = z.array(StringSchema).openapi('IosPaths')

const AndroidPathsSchema = z.array(StringSchema).openapi('AndroidPaths')

const DeviceHostPathsSchema = z.array(StringSchema).openapi('DeviceHostPaths')

const CustomerArtifactPathsSchema = z
  .object({
    iosPaths: IosPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests are pulled from.",
        }),
    ).exactOptional(),
    androidPaths: AndroidPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Comma-separated list of paths on the Android device where the artifacts generated by the customer's tests are pulled from.",
        }),
    ).exactOptional(),
    deviceHostPaths: DeviceHostPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Comma-separated list of paths in the test execution environment where the artifacts generated by the customer's tests are pulled from.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>A JSON object that specifies the paths where the artifacts generated by the customer's tests, on the device or in the test environment, are pulled from.</p> <p>Specify <code>deviceHostPaths</code> and optionally specify either <code>iosPaths</code> or <code>androidPaths</code>.</p> <p>For web app tests, you can specify both <code>iosPaths</code> and <code>androidPaths</code>.</p>",
    required: [],
  })
  .openapi('CustomerArtifactPaths')

const RadiosSchema = z
  .object({
    wifi: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'True if Wi-Fi is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
    bluetooth: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if Bluetooth is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
    nfc: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'True if NFC is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
    gps: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'True if GPS is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.',
    required: [],
  })
  .openapi('Radios')

const ScheduleRunConfigurationSchema = z
  .object({
    extraDataPackageArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm extracts to external data for Android or the app's sandbox for iOS.",
        }),
    ).exactOptional(),
    networkProfileArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'Reserved for internal use.' }),
    ).exactOptional(),
    locale: StringSchema.and(
      z.any().openapi({ description: 'Information about the locale that is used for the run.' }),
    ).exactOptional(),
    location: LocationSchema.and(
      z.any().openapi({ description: 'Information about the location that is used for the run.' }),
    ).exactOptional(),
    vpceConfigurationArns: AmazonResourceNamesSchema.and(
      z.any().openapi({ description: 'An array of ARNs for your VPC endpoint configurations.' }),
    ).exactOptional(),
    customerArtifactPaths: CustomerArtifactPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input <code>CustomerArtifactPaths</code> object for the scheduled run configuration.',
        }),
    ).exactOptional(),
    radios: RadiosSchema.and(
      z.any().openapi({ description: 'Information about the radio states for the run.' }),
    ).exactOptional(),
    auxiliaryApps: AmazonResourceNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of upload ARNs for app packages to be installed with your app.',
        }),
    ).exactOptional(),
    billingMethod: BillingMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p> <note> <p>If you have purchased unmetered device slots, you must set this parameter to <code>unmetered</code> to make use of them. Otherwise, your run counts against your metered time.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.',
    required: [],
  })
  .openapi('ScheduleRunConfiguration')

const GetDevicePoolCompatibilityRequestSchema = z
  .object({
    devicePoolArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The device pool's ARN." }),
    ),
    appArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the app that is associated with the specified device pool.',
        }),
    ).exactOptional(),
    testType: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The test type for the specified device pool.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ.</p> </li> <li> <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT.</p> </li> <li> <p>APPIUM_JAVA_TESTNG.</p> </li> <li> <p>APPIUM_PYTHON.</p> </li> <li> <p>APPIUM_NODE.</p> </li> <li> <p>APPIUM_RUBY.</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT.</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG.</p> </li> <li> <p>APPIUM_WEB_PYTHON.</p> </li> <li> <p>APPIUM_WEB_NODE.</p> </li> <li> <p>APPIUM_WEB_RUBY.</p> </li> <li> <p>CALABASH.</p> </li> <li> <p>INSTRUMENTATION.</p> </li> <li> <p>UIAUTOMATION.</p> </li> <li> <p>UIAUTOMATOR.</p> </li> <li> <p>XCTEST.</p> </li> <li> <p>XCTEST_UI.</p> </li> </ul>',
        }),
    ).exactOptional(),
    test: ScheduleRunTestSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the uploaded test to be run against the device pool.',
        }),
    ).exactOptional(),
    configuration: ScheduleRunConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about the settings for a run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['devicePoolArn'],
    title: 'GetDevicePoolCompatibilityRequest',
    description: 'Represents a request to the get device pool compatibility operation.',
  })
  .openapi('GetDevicePoolCompatibilityRequest')

const GetInstanceProfileResultSchema = z
  .object({
    instanceProfile: InstanceProfileSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains information about an instance profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInstanceProfileResult')

const GetInstanceProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of an instance profile.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetInstanceProfileRequest' })
  .openapi('GetInstanceProfileRequest')

const CountersSchema = z
  .object({
    total: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of entities.' }),
    ).exactOptional(),
    passed: IntegerSchema.and(
      z.any().openapi({ description: 'The number of passed entities.' }),
    ).exactOptional(),
    failed: IntegerSchema.and(
      z.any().openapi({ description: 'The number of failed entities.' }),
    ).exactOptional(),
    warned: IntegerSchema.and(
      z.any().openapi({ description: 'The number of warned entities.' }),
    ).exactOptional(),
    errored: IntegerSchema.and(
      z.any().openapi({ description: 'The number of errored entities.' }),
    ).exactOptional(),
    stopped: IntegerSchema.and(
      z.any().openapi({ description: 'The number of stopped entities.' }),
    ).exactOptional(),
    skipped: IntegerSchema.and(
      z.any().openapi({ description: 'The number of skipped entities.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents entity counters.', required: [] })
  .openapi('Counters')

const VideoCaptureSchema = z.boolean().openapi('VideoCapture')

const JobSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The job's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The job's name." })).exactOptional(),
    type: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The job's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>BUILTIN_FUZZ</p> </li> <li> <p>BUILTIN_EXPLORER. For Android, an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </li> <li> <p>APPIUM_JAVA_JUNIT</p> </li> <li> <p>APPIUM_JAVA_TESTNG</p> </li> <li> <p>APPIUM_PYTHON</p> </li> <li> <p>APPIUM_NODE</p> </li> <li> <p>APPIUM_RUBY</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG</p> </li> <li> <p>APPIUM_WEB_PYTHON</p> </li> <li> <p>APPIUM_WEB_NODE</p> </li> <li> <p>APPIUM_WEB_RUBY</p> </li> <li> <p>CALABASH</p> </li> <li> <p>INSTRUMENTATION</p> </li> <li> <p>UIAUTOMATION</p> </li> <li> <p>UIAUTOMATOR</p> </li> <li> <p>XCTEST</p> </li> <li> <p>XCTEST_UI</p> </li> </ul>",
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the job was created.' }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The job's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PENDING_CONCURRENCY</p> </li> <li> <p>PENDING_DEVICE</p> </li> <li> <p>PROCESSING</p> </li> <li> <p>SCHEDULING</p> </li> <li> <p>PREPARING</p> </li> <li> <p>RUNNING</p> </li> <li> <p>COMPLETED</p> </li> <li> <p>STOPPING</p> </li> </ul>",
        }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The job's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>",
        }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: "The job's start time." }),
    ).exactOptional(),
    stopped: DateTimeSchema.and(
      z.any().openapi({ description: "The job's stop time." }),
    ).exactOptional(),
    counters: CountersSchema.and(
      z.any().openapi({ description: "The job's result counters." }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the job's result." }),
    ).exactOptional(),
    device: DeviceSchema.and(
      z.any().openapi({ description: 'The device (phone or tablet).' }),
    ).exactOptional(),
    instanceArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the instance.' }),
    ).exactOptional(),
    deviceMinutes: DeviceMinutesSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the total (metered or unmetered) minutes used by the job.',
        }),
    ).exactOptional(),
    videoEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The endpoint for streaming device video.' }),
    ).exactOptional(),
    videoCapture: VideoCaptureSchema.and(
      z
        .any()
        .openapi({
          description:
            'This value is set to true if video capture is enabled. Otherwise, it is set to false.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a device.', required: [] })
  .openapi('Job')

const GetJobResultSchema = z
  .object({
    job: JobSchema.and(
      z
        .any()
        .openapi({ description: 'An object that contains information about the requested job.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { job: {} },
    description: 'Represents the result of a get job request.',
    required: [],
  })
  .openapi('GetJobResult')

const GetJobRequestSchema = z
  .object({ arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The job's ARN." })) })
  .openapi({
    required: ['arn'],
    title: 'GetJobRequest',
    description: 'Represents a request to the get job operation.',
  })
  .openapi('GetJobRequest')

const GetNetworkProfileResultSchema = z
  .object({
    networkProfile: NetworkProfileSchema.and(
      z.any().openapi({ description: 'The network profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkProfileResult')

const GetNetworkProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the network profile to return information about.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetNetworkProfileRequest' })
  .openapi('GetNetworkProfileRequest')

const OfferingTransactionTypeSchema = z
  .enum(['PURCHASE', 'RENEW', 'SYSTEM'])
  .openapi('OfferingTransactionType')

const OfferingIdentifierSchema = z.string().min(32).openapi('OfferingIdentifier')

const OfferingTypeSchema = z.literal('RECURRING').openapi('OfferingType')

const CurrencyCodeSchema = z.literal('USD').openapi('CurrencyCode')

const MonetaryAmountSchema = z
  .object({
    amount: DoubleSchema.and(
      z.any().openapi({ description: 'The numerical amount of an offering or transaction.' }),
    ).exactOptional(),
    currencyCode: CurrencyCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The currency code of a monetary amount. For example, <code>USD</code> means U.S. dollars.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A number that represents the monetary amount for an offering or transaction.',
    required: [],
  })
  .openapi('MonetaryAmount')

const RecurringChargeFrequencySchema = z.literal('MONTHLY').openapi('RecurringChargeFrequency')

const RecurringChargeSchema = z
  .object({
    cost: MonetaryAmountSchema.and(
      z.any().openapi({ description: 'The cost of the recurring charge.' }),
    ).exactOptional(),
    frequency: RecurringChargeFrequencySchema.and(
      z.any().openapi({ description: 'The frequency in which charges recur.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies whether charges for devices are recurring.', required: [] })
  .openapi('RecurringCharge')

const RecurringChargesSchema = z.array(RecurringChargeSchema).openapi('RecurringCharges')

const OfferingSchema = z
  .object({
    id: OfferingIdentifierSchema.and(
      z.any().openapi({ description: 'The ID that corresponds to a device offering.' }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'A string that describes the offering.' }),
    ).exactOptional(),
    type: OfferingTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of offering (for example, <code>RECURRING</code>) for a device.',
        }),
    ).exactOptional(),
    platform: DevicePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            'The platform of the device (for example, <code>ANDROID</code> or <code>IOS</code>).',
        }),
    ).exactOptional(),
    recurringCharges: RecurringChargesSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether there are recurring charges for the offering.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the metadata of a device offering.', required: [] })
  .openapi('Offering')

const OfferingStatusSchema = z
  .object({
    type: OfferingTransactionTypeSchema.and(
      z.any().openapi({ description: 'The type specified for the offering status.' }),
    ).exactOptional(),
    offering: OfferingSchema.and(
      z.any().openapi({ description: 'Represents the metadata of an offering status.' }),
    ).exactOptional(),
    quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The number of available devices in the offering.' }),
    ).exactOptional(),
    effectiveOn: DateTimeSchema.and(
      z.any().openapi({ description: 'The date on which the offering is effective.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of the offering.', required: [] })
  .openapi('OfferingStatus')

const OfferingStatusMapSchema = z
  .record(z.string(), OfferingStatusSchema)
  .openapi('OfferingStatusMap')

const PaginationTokenSchema = z.string().min(4).max(1024).openapi('PaginationToken')

const GetOfferingStatusResultSchema = z
  .object({
    current: OfferingStatusMapSchema.and(
      z
        .any()
        .openapi({
          description: 'When specified, gets the offering status for the current period.',
        }),
    ).exactOptional(),
    nextPeriod: OfferingStatusMapSchema.and(
      z
        .any()
        .openapi({ description: 'When specified, gets the offering status for the next period.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      current: {
        'D68B3C05-1BA6-4360-BC69-12345EXAMPLE': {
          offering: {
            type: 'RECURRING',
            description: 'Android Remote Access Unmetered Device Slot',
            id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
            platform: 'ANDROID',
          },
          quantity: 1,
        },
      },
      nextPeriod: {
        'D68B3C05-1BA6-4360-BC69-12345EXAMPLE': {
          effectiveOn: '1472688000',
          offering: {
            type: 'RECURRING',
            description: 'Android Remote Access Unmetered Device Slot',
            id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
            platform: 'ANDROID',
          },
          quantity: 1,
        },
      },
    },
    description: 'Returns the status result for a device offering.',
    required: [],
  })
  .openapi('GetOfferingStatusResult')

const GetOfferingStatusRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'GetOfferingStatusRequest',
    description:
      'Represents the request to retrieve the offering status for the specified customer or account.',
    required: [],
  })
  .openapi('GetOfferingStatusRequest')

const NotEligibleExceptionSchema = z.any().openapi('NotEligibleException')

const GetProjectResultSchema = z
  .object({
    project: ProjectSchema.and(
      z.any().openapi({ description: 'The project to get information about.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      project: {
        name: 'My Project',
        arn: 'arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE',
        created: '1472660939.152',
      },
    },
    description: 'Represents the result of a get project request.',
    required: [],
  })
  .openapi('GetProjectResult')

const GetProjectRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The project's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetProjectRequest',
    description: 'Represents a request to the get project operation.',
  })
  .openapi('GetProjectRequest')

const GetRemoteAccessSessionResultSchema = z
  .object({
    remoteAccessSession: RemoteAccessSessionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that lists detailed information about the remote access session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { remoteAccessSession: {} },
    description:
      'Represents the response from the server that lists detailed information about the remote access session.',
    required: [],
  })
  .openapi('GetRemoteAccessSessionResult')

const GetRemoteAccessSessionRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the remote access session about which you want to get session information.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'GetRemoteAccessSessionRequest',
    description:
      'Represents the request to get information about the specified remote access session.',
  })
  .openapi('GetRemoteAccessSessionRequest')

const ExecutionResultCodeSchema = z
  .enum(['PARSING_FAILED', 'VPC_ENDPOINT_SETUP_FAILED'])
  .openapi('ExecutionResultCode')

const DeviceFilterAttributeSchema = z
  .enum([
    'ARN',
    'PLATFORM',
    'OS_VERSION',
    'MODEL',
    'AVAILABILITY',
    'FORM_FACTOR',
    'MANUFACTURER',
    'REMOTE_ACCESS_ENABLED',
    'REMOTE_DEBUG_ENABLED',
    'INSTANCE_ARN',
    'INSTANCE_LABELS',
    'FLEET_TYPE',
  ])
  .openapi('DeviceFilterAttribute')

const DeviceFilterValuesSchema = z.array(StringSchema).openapi('DeviceFilterValues')

const DeviceFilterSchema = z
  .object({
    attribute: DeviceFilterAttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The aspect of a device such as platform or model used as the selection criteria in a device filter.</p> <p>The supported operators for each attribute are provided in the following list.</p> <dl> <dt>ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device (for example, <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>PLATFORM</dt> <dd> <p>The device platform. Valid values are ANDROID or IOS.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>OS_VERSION</dt> <dd> <p>The operating system version (for example, 10.3.2).</p> <p>Supported operators: <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code> </p> </dd> <dt>MODEL</dt> <dd> <p>The device model (for example, iPad 5th Gen).</p> <p>Supported operators: <code>CONTAINS</code>, <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>AVAILABILITY</dt> <dd> <p>The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>FORM_FACTOR</dt> <dd> <p>The device form factor. Valid values are PHONE or TABLET.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>MANUFACTURER</dt> <dd> <p>The device manufacturer (for example, Apple).</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>REMOTE_ACCESS_ENABLED</dt> <dd> <p>Whether the device is enabled for remote access. Valid values are TRUE or FALSE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> <dt>REMOTE_DEBUG_ENABLED</dt> <dd> <p>Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.</p> <p>Supported operators: <code>EQUALS</code> </p> <p>Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>, this filter is ignored.</p> </dd> <dt>INSTANCE_ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device instance.</p> <p>Supported operators: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_LABELS</dt> <dd> <p>The label of the device instance.</p> <p>Supported operators: <code>CONTAINS</code> </p> </dd> <dt>FLEET_TYPE</dt> <dd> <p>The fleet type. Valid values are PUBLIC or PRIVATE.</p> <p>Supported operators: <code>EQUALS</code> </p> </dd> </dl>',
        }),
    ),
    operator: RuleOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies how Device Farm compares the filter's attribute to the value. See the attribute descriptions.",
        }),
    ),
    values: DeviceFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of one or more filter values used in a device filter.</p> <p class="title"> <b>Operator Values</b> </p> <ul> <li> <p>The IN and NOT_IN operators can take a values array that has more than one element.</p> </li> <li> <p>The other operators require an array with a single element.</p> </li> </ul> <p class="title"> <b>Attribute Values</b> </p> <ul> <li> <p>The PLATFORM attribute can be set to ANDROID or IOS.</p> </li> <li> <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> </li> <li> <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p> </li> <li> <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'operator', 'values'],
    description:
      '<p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>',
  })
  .openapi('DeviceFilter')

const DeviceFiltersSchema = z.array(DeviceFilterSchema).openapi('DeviceFilters')

const DeviceSelectionResultSchema = z
  .object({
    filters: DeviceFiltersSchema.and(
      z.any().openapi({ description: 'The filters in a device selection result.' }),
    ).exactOptional(),
    matchedDevicesCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of devices that matched the device filter selection criteria.',
        }),
    ).exactOptional(),
    maxDevices: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of devices to be selected by a device filter and included in a test run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.',
    required: [],
  })
  .openapi('DeviceSelectionResult')

const RunSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The run's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The run's name." })).exactOptional(),
    type: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The run's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ</p> </li> <li> <p>BUILTIN_EXPLORER</p> <note> <p>For Android, an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </note> </li> <li> <p>APPIUM_JAVA_JUNIT</p> </li> <li> <p>APPIUM_JAVA_TESTNG</p> </li> <li> <p>APPIUM_PYTHON</p> </li> <li> <p>APPIUM_NODE</p> </li> <li> <p>APPIUM_RUBY</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG</p> </li> <li> <p>APPIUM_WEB_PYTHON</p> </li> <li> <p>APPIUM_WEB_NODE</p> </li> <li> <p>APPIUM_WEB_RUBY</p> </li> <li> <p>CALABASH</p> </li> <li> <p>INSTRUMENTATION</p> </li> <li> <p>UIAUTOMATION</p> </li> <li> <p>UIAUTOMATOR</p> </li> <li> <p>XCTEST</p> </li> <li> <p>XCTEST_UI</p> </li> </ul>",
        }),
    ).exactOptional(),
    platform: DevicePlatformSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The run's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID</p> </li> <li> <p>IOS</p> </li> </ul>",
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the run was created.' }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The run's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PENDING_CONCURRENCY</p> </li> <li> <p>PENDING_DEVICE</p> </li> <li> <p>PROCESSING</p> </li> <li> <p>SCHEDULING</p> </li> <li> <p>PREPARING</p> </li> <li> <p>RUNNING</p> </li> <li> <p>COMPLETED</p> </li> <li> <p>STOPPING</p> </li> </ul>",
        }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The run's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>",
        }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: "The run's start time." }),
    ).exactOptional(),
    stopped: DateTimeSchema.and(
      z.any().openapi({ description: "The run's stop time." }),
    ).exactOptional(),
    counters: CountersSchema.and(
      z.any().openapi({ description: "The run's result counters." }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the run's result." }),
    ).exactOptional(),
    totalJobs: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of jobs for the run.' }),
    ).exactOptional(),
    completedJobs: IntegerSchema.and(
      z.any().openapi({ description: 'The total number of completed jobs.' }),
    ).exactOptional(),
    billingMethod: BillingMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p> <note> <p>If you have unmetered device slots, you must set this to <code>unmetered</code> to use them. Otherwise, the run is counted toward metered device minutes.</p> </note>',
        }),
    ).exactOptional(),
    deviceMinutes: DeviceMinutesSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the total (metered or unmetered) minutes used by the test run.',
        }),
    ).exactOptional(),
    networkProfile: NetworkProfileSchema.and(
      z.any().openapi({ description: 'The network profile being used for a test run.' }),
    ).exactOptional(),
    parsingResultUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Read-only URL for an object in an S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.",
        }),
    ).exactOptional(),
    resultCode: ExecutionResultCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supporting field for the result field. Set only if <code>result</code> is <code>SKIPPED</code>. <code>PARSING_FAILED</code> if the result is skipped because of test package parsing failure.',
        }),
    ).exactOptional(),
    seed: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.',
        }),
    ).exactOptional(),
    appUpload: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'An app to upload or that has been uploaded.' }),
    ).exactOptional(),
    eventCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.',
        }),
    ).exactOptional(),
    jobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({ description: 'The number of minutes the job executes before it times out.' }),
    ).exactOptional(),
    devicePoolArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the device pool for the run.' }),
    ).exactOptional(),
    locale: StringSchema.and(
      z.any().openapi({ description: 'Information about the locale that is used for the run.' }),
    ).exactOptional(),
    radios: RadiosSchema.and(
      z.any().openapi({ description: 'Information about the radio states for the run.' }),
    ).exactOptional(),
    location: LocationSchema.and(
      z.any().openapi({ description: 'Information about the location that is used for the run.' }),
    ).exactOptional(),
    customerArtifactPaths: CustomerArtifactPathsSchema.and(
      z
        .any()
        .openapi({
          description: 'Output <code>CustomerArtifactPaths</code> object for the test run.',
        }),
    ).exactOptional(),
    webUrl: StringSchema.and(
      z.any().openapi({ description: 'The Device Farm console URL for the recording of the run.' }),
    ).exactOptional(),
    skipAppResign: SkipAppResignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again.</p> <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>',
        }),
    ).exactOptional(),
    testSpecArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the YAML-formatted test specification for the run.' }),
    ).exactOptional(),
    deviceSelectionResult: DeviceSelectionResultSchema.and(
      z
        .any()
        .openapi({
          description: 'The results of a device filter used to select the devices for a test run.',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a test run on a set of devices with a given app package, test parameters, and so on.',
    required: [],
  })
  .openapi('Run')

const GetRunResultSchema = z
  .object({
    run: RunSchema.and(
      z.any().openapi({ description: 'The run to get results from.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      run: {
        name: 'My Test Run',
        type: 'BUILTIN_EXPLORER',
        arn: 'arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE',
        billingMethod: 'METERED',
        completedJobs: 0,
        counters: { errored: 0, failed: 0, passed: 0, skipped: 0, stopped: 0, total: 0, warned: 0 },
        created: '1472667509.852',
        deviceMinutes: { metered: 0, total: 0, unmetered: 0 },
        platform: 'ANDROID',
        result: 'PENDING',
        status: 'RUNNING',
        totalJobs: 3,
      },
    },
    description: 'Represents the result of a get run request.',
    required: [],
  })
  .openapi('GetRunResult')

const GetRunRequestSchema = z
  .object({ arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The run's ARN." })) })
  .openapi({
    required: ['arn'],
    title: 'GetRunRequest',
    description: 'Represents a request to the get run operation.',
  })
  .openapi('GetRunRequest')

const SuiteSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The suite's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The suite's name." })).exactOptional(),
    type: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The suite's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ</p> </li> <li> <p>BUILTIN_EXPLORER </p> <note> <p>Only available for Android; an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </note> </li> <li> <p>APPIUM_JAVA_JUNIT</p> </li> <li> <p>APPIUM_JAVA_TESTNG</p> </li> <li> <p>APPIUM_PYTHON</p> </li> <li> <p>APPIUM_NODE</p> </li> <li> <p>APPIUM_RUBY</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG</p> </li> <li> <p>APPIUM_WEB_PYTHON</p> </li> <li> <p>APPIUM_WEB_NODE</p> </li> <li> <p>APPIUM_WEB_RUBY</p> </li> <li> <p>CALABASH</p> </li> <li> <p>INSTRUMENTATION</p> </li> <li> <p>UIAUTOMATION</p> </li> <li> <p>UIAUTOMATOR</p> </li> <li> <p>XCTEST</p> </li> <li> <p>XCTEST_UI</p> </li> </ul>",
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the suite was created.' }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The suite's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PENDING_CONCURRENCY</p> </li> <li> <p>PENDING_DEVICE</p> </li> <li> <p>PROCESSING</p> </li> <li> <p>SCHEDULING</p> </li> <li> <p>PREPARING</p> </li> <li> <p>RUNNING</p> </li> <li> <p>COMPLETED</p> </li> <li> <p>STOPPING</p> </li> </ul>",
        }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The suite's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>",
        }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: "The suite's start time." }),
    ).exactOptional(),
    stopped: DateTimeSchema.and(
      z.any().openapi({ description: "The suite's stop time." }),
    ).exactOptional(),
    counters: CountersSchema.and(
      z.any().openapi({ description: "The suite's result counters." }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the suite's result." }),
    ).exactOptional(),
    deviceMinutes: DeviceMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the total (metered or unmetered) minutes used by the test suite.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of one or more tests.', required: [] })
  .openapi('Suite')

const GetSuiteResultSchema = z
  .object({
    suite: SuiteSchema.and(
      z.any().openapi({ description: 'A collection of one or more tests.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { suite: {} },
    description: 'Represents the result of a get suite request.',
    required: [],
  })
  .openapi('GetSuiteResult')

const GetSuiteRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The suite's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetSuiteRequest',
    description: 'Represents a request to the get suite operation.',
  })
  .openapi('GetSuiteRequest')

const TestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The test's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The test's name." })).exactOptional(),
    type: TestTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The test's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>BUILTIN_FUZZ</p> </li> <li> <p>BUILTIN_EXPLORER</p> <note> <p>For Android, an app explorer that traverses an Android app, interacting with it and capturing screenshots at the same time.</p> </note> </li> <li> <p>APPIUM_JAVA_JUNIT</p> </li> <li> <p>APPIUM_JAVA_TESTNG</p> </li> <li> <p>APPIUM_PYTHON</p> </li> <li> <p>APPIUM_NODE</p> </li> <li> <p>APPIUM_RUBY</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG</p> </li> <li> <p>APPIUM_WEB_PYTHON</p> </li> <li> <p>APPIUM_WEB_NODE</p> </li> <li> <p>APPIUM_WEB_RUBY</p> </li> <li> <p>CALABASH</p> </li> <li> <p>INSTRUMENTATION</p> </li> <li> <p>UIAUTOMATION</p> </li> <li> <p>UIAUTOMATOR</p> </li> <li> <p>XCTEST</p> </li> <li> <p>XCTEST_UI</p> </li> </ul>",
        }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'When the test was created.' }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The test's status.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PENDING_CONCURRENCY</p> </li> <li> <p>PENDING_DEVICE</p> </li> <li> <p>PROCESSING</p> </li> <li> <p>SCHEDULING</p> </li> <li> <p>PREPARING</p> </li> <li> <p>RUNNING</p> </li> <li> <p>COMPLETED</p> </li> <li> <p>STOPPING</p> </li> </ul>",
        }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The test's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>",
        }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: "The test's start time." }),
    ).exactOptional(),
    stopped: DateTimeSchema.and(
      z.any().openapi({ description: "The test's stop time." }),
    ).exactOptional(),
    counters: CountersSchema.and(
      z.any().openapi({ description: "The test's result counters." }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the test's result." }),
    ).exactOptional(),
    deviceMinutes: DeviceMinutesSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the total (metered or unmetered) minutes used by the test.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a condition that is evaluated.', required: [] })
  .openapi('Test')

const GetTestResultSchema = z
  .object({
    test: TestSchema.and(
      z.any().openapi({ description: 'A test condition that is evaluated.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { test: {} },
    description: 'Represents the result of a get test request.',
    required: [],
  })
  .openapi('GetTestResult')

const GetTestRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The test's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetTestRequest',
    description: 'Represents a request to the get test operation.',
  })
  .openapi('GetTestRequest')

const GetTestGridProjectResultSchema = z
  .object({
    testGridProject: TestGridProjectSchema.and(
      z.any().openapi({ description: 'A <a>TestGridProject</a>.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTestGridProjectResult')

const GetTestGridProjectRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Selenium testing project, from either <a>CreateTestGridProject</a> or <a>ListTestGridProjects</a>.',
        }),
    ),
  })
  .openapi({ required: ['projectArn'], title: 'GetTestGridProjectRequest' })
  .openapi('GetTestGridProjectRequest')

const TestGridSessionStatusSchema = z
  .enum(['ACTIVE', 'CLOSED', 'ERRORED'])
  .openapi('TestGridSessionStatus')

const TestGridSessionSchema = z
  .object({
    arn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'The ARN of the session.' }),
    ).exactOptional(),
    status: TestGridSessionStatusSchema.and(
      z.any().openapi({ description: 'The state of the session.' }),
    ).exactOptional(),
    created: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the session was started.' }),
    ).exactOptional(),
    ended: DateTimeSchema.and(
      z.any().openapi({ description: 'The time the session ended.' }),
    ).exactOptional(),
    billingMinutes: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'The number of billed minutes that were used for this session. ' }),
    ).exactOptional(),
    seleniumProperties: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A JSON object of options and parameters passed to the Selenium WebDriver.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.',
    required: [],
  })
  .openapi('TestGridSession')

const GetTestGridSessionResultSchema = z
  .object({
    testGridSession: TestGridSessionSchema.and(
      z.any().openapi({ description: 'The <a>TestGridSession</a> that was requested.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTestGridSessionResult')

const ResourceIdSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('ResourceId')

const GetTestGridSessionRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN for the project that this session belongs to. See <a>CreateTestGridProject</a> and <a>ListTestGridProjects</a>.',
        }),
    ).exactOptional(),
    sessionId: ResourceIdSchema.and(
      z.any().openapi({ description: 'An ID associated with this session.' }),
    ).exactOptional(),
    sessionArn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'An ARN that uniquely identifies a <a>TestGridSession</a>.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetTestGridSessionRequest', required: [] })
  .openapi('GetTestGridSessionRequest')

const GetUploadResultSchema = z
  .object({
    upload: UploadSchema.and(
      z
        .any()
        .openapi({
          description: 'An app or a set of one or more tests to upload or that have been uploaded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { upload: {} },
    description: 'Represents the result of a get upload request.',
    required: [],
  })
  .openapi('GetUploadResult')

const GetUploadRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: "The upload's ARN." })),
  })
  .openapi({
    required: ['arn'],
    title: 'GetUploadRequest',
    description: 'Represents a request to the get upload operation.',
  })
  .openapi('GetUploadRequest')

const GetVPCEConfigurationResultSchema = z
  .object({
    vpceConfiguration: VPCEConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVPCEConfigurationResult')

const GetVPCEConfigurationRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to describe.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'GetVPCEConfigurationRequest' })
  .openapi('GetVPCEConfigurationRequest')

const InstallToRemoteAccessSessionResultSchema = z
  .object({
    appUpload: UploadSchema.and(
      z.any().openapi({ description: 'An app to upload or that has been uploaded.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { appUpload: {} },
    description:
      'Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.',
    required: [],
  })
  .openapi('InstallToRemoteAccessSessionResult')

const InstallToRemoteAccessSessionRequestSchema = z
  .object({
    remoteAccessSessionArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.',
        }),
    ),
    appArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the app about which you are requesting information.' }),
    ),
  })
  .openapi({
    required: ['remoteAccessSessionArn', 'appArn'],
    title: 'InstallToRemoteAccessSessionRequest',
    description:
      'Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.',
  })
  .openapi('InstallToRemoteAccessSessionRequest')

const ArtifactTypeSchema = z
  .enum([
    'UNKNOWN',
    'SCREENSHOT',
    'DEVICE_LOG',
    'MESSAGE_LOG',
    'VIDEO_LOG',
    'RESULT_LOG',
    'SERVICE_LOG',
    'WEBKIT_LOG',
    'INSTRUMENTATION_OUTPUT',
    'EXERCISER_MONKEY_OUTPUT',
    'CALABASH_JSON_OUTPUT',
    'CALABASH_PRETTY_OUTPUT',
    'CALABASH_STANDARD_OUTPUT',
    'CALABASH_JAVA_XML_OUTPUT',
    'AUTOMATION_OUTPUT',
    'APPIUM_SERVER_OUTPUT',
    'APPIUM_JAVA_OUTPUT',
    'APPIUM_JAVA_XML_OUTPUT',
    'APPIUM_PYTHON_OUTPUT',
    'APPIUM_PYTHON_XML_OUTPUT',
    'EXPLORER_EVENT_LOG',
    'EXPLORER_SUMMARY_LOG',
    'APPLICATION_CRASH_REPORT',
    'XCTEST_LOG',
    'VIDEO',
    'CUSTOMER_ARTIFACT',
    'CUSTOMER_ARTIFACT_LOG',
    'TESTSPEC_OUTPUT',
  ])
  .openapi('ArtifactType')

const URLSchema = z.string().min(0).max(2048).openapi('URL')

const ArtifactSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The artifact's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: "The artifact's name." })).exactOptional(),
    type: ArtifactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The artifact's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>UNKNOWN</p> </li> <li> <p>SCREENSHOT</p> </li> <li> <p>DEVICE_LOG</p> </li> <li> <p>MESSAGE_LOG</p> </li> <li> <p>VIDEO_LOG</p> </li> <li> <p>RESULT_LOG</p> </li> <li> <p>SERVICE_LOG</p> </li> <li> <p>WEBKIT_LOG</p> </li> <li> <p>INSTRUMENTATION_OUTPUT</p> </li> <li> <p>EXERCISER_MONKEY_OUTPUT: the artifact (log) generated by an Android fuzz test.</p> </li> <li> <p>CALABASH_JSON_OUTPUT</p> </li> <li> <p>CALABASH_PRETTY_OUTPUT</p> </li> <li> <p>CALABASH_STANDARD_OUTPUT</p> </li> <li> <p>CALABASH_JAVA_XML_OUTPUT</p> </li> <li> <p>AUTOMATION_OUTPUT</p> </li> <li> <p>APPIUM_SERVER_OUTPUT</p> </li> <li> <p>APPIUM_JAVA_OUTPUT</p> </li> <li> <p>APPIUM_JAVA_XML_OUTPUT</p> </li> <li> <p>APPIUM_PYTHON_OUTPUT</p> </li> <li> <p>APPIUM_PYTHON_XML_OUTPUT</p> </li> <li> <p>EXPLORER_EVENT_LOG</p> </li> <li> <p>EXPLORER_SUMMARY_LOG</p> </li> <li> <p>APPLICATION_CRASH_REPORT</p> </li> <li> <p>XCTEST_LOG</p> </li> <li> <p>VIDEO</p> </li> <li> <p>CUSTOMER_ARTIFACT</p> </li> <li> <p>CUSTOMER_ARTIFACT_LOG</p> </li> <li> <p>TESTSPEC_OUTPUT</p> </li> </ul>",
        }),
    ).exactOptional(),
    extension: StringSchema.and(
      z.any().openapi({ description: "The artifact's file extension." }),
    ).exactOptional(),
    url: URLSchema.and(
      z
        .any()
        .openapi({
          description:
            "The presigned Amazon S3 URL that can be used with a GET request to download the artifact's file.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a test. Examples of artifacts include logs and screenshots.',
    required: [],
  })
  .openapi('Artifact')

const ArtifactsSchema = z.array(ArtifactSchema).openapi('Artifacts')

const ListArtifactsResultSchema = z
  .object({
    artifacts: ArtifactsSchema.and(
      z.any().openapi({ description: 'Information about the artifacts.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the result of a list artifacts operation.', required: [] })
  .openapi('ListArtifactsResult')

const ArtifactCategorySchema = z.enum(['SCREENSHOT', 'FILE', 'LOG']).openapi('ArtifactCategory')

const ListArtifactsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The run, job, suite, or test ARN.' }),
    ),
    type: ArtifactCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The artifacts' type.</p> <p>Allowed values include:</p> <ul> <li> <p>FILE</p> </li> <li> <p>LOG</p> </li> <li> <p>SCREENSHOT</p> </li> </ul>",
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn', 'type'],
    title: 'ListArtifactsRequest',
    description: 'Represents a request to the list artifacts operation.',
  })
  .openapi('ListArtifactsRequest')

const ListDeviceInstancesResultSchema = z
  .object({
    deviceInstances: DeviceInstancesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your device instances.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that can be used in the next call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceInstancesResult')

const ListDeviceInstancesRequestSchema = z
  .object({
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the maximum number of items you want to return in the API response.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDeviceInstancesRequest', required: [] })
  .openapi('ListDeviceInstancesRequest')

const DevicePoolsSchema = z.array(DevicePoolSchema).openapi('DevicePools')

const ListDevicePoolsResultSchema = z
  .object({
    devicePools: DevicePoolsSchema.and(
      z.any().openapi({ description: 'Information about the device pools.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      devicePools: [
        {
          name: 'Top Devices',
          arn: 'arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE',
          description: 'Top devices',
          rules: [
            {
              value:
                '["arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE"]',
              attribute: 'ARN',
              operator: 'IN',
            },
          ],
        },
        {
          name: 'My Android Device Pool',
          arn: 'arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE',
          description: 'Samsung Galaxy Android devices',
          rules: [
            {
              value:
                '["arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE"]',
              attribute: 'ARN',
              operator: 'IN',
            },
          ],
        },
      ],
    },
    description: 'Represents the result of a list device pools request.',
    required: [],
  })
  .openapi('ListDevicePoolsResult')

const ListDevicePoolsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(z.any().openapi({ description: 'The project ARN.' })),
    type: DevicePoolTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The device pools' type.</p> <p>Allowed values include:</p> <ul> <li> <p>CURATED: A device pool that is created and managed by AWS Device Farm.</p> </li> <li> <p>PRIVATE: A device pool that is created and managed by the device pool developer.</p> </li> </ul>",
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListDevicePoolsRequest',
    description: 'Represents the result of a list device pools request.',
  })
  .openapi('ListDevicePoolsRequest')

const DevicesSchema = z.array(DeviceSchema).openapi('Devices')

const ListDevicesResultSchema = z
  .object({
    devices: DevicesSchema.and(
      z.any().openapi({ description: 'Information about the devices.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {},
    description: 'Represents the result of a list devices operation.',
    required: [],
  })
  .openapi('ListDevicesResult')

const ListDevicesRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
    filters: DeviceFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Used to select a set of devices. A filter is made up of an attribute, an operator, and one or more values.</p> <ul> <li> <p>Attribute: The aspect of a device such as platform or model used as the selection criteria in a device filter.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN: The Amazon Resource Name (ARN) of the device (for example, <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p> </li> <li> <p>PLATFORM: The device platform. Valid values are ANDROID or IOS.</p> </li> <li> <p>OS_VERSION: The operating system version (for example, 10.3.2).</p> </li> <li> <p>MODEL: The device model (for example, iPad 5th Gen).</p> </li> <li> <p>AVAILABILITY: The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> </li> <li> <p>FORM_FACTOR: The device form factor. Valid values are PHONE or TABLET.</p> </li> <li> <p>MANUFACTURER: The device manufacturer (for example, Apple).</p> </li> <li> <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values are TRUE or FALSE.</p> </li> <li> <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>, this attribute is ignored.</p> </li> <li> <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.</p> </li> <li> <p>INSTANCE_LABELS: The label of the device instance.</p> </li> <li> <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p> </li> </ul> </li> <li> <p>Operator: The filter operator.</p> <ul> <li> <p>The EQUALS operator is available for every attribute except INSTANCE_LABELS.</p> </li> <li> <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.</p> </li> <li> <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p> </li> <li> <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION attribute.</p> </li> </ul> </li> <li> <p>Values: An array of one or more filter values.</p> <ul> <li> <p>The IN and NOT_IN operators take a values array that has one or more elements.</p> </li> <li> <p>The other operators require an array with a single element.</p> </li> <li> <p>In a request, the AVAILABILITY attribute takes the following values: AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListDevicesRequest',
    description: 'Represents the result of a list devices request.',
    required: [],
  })
  .openapi('ListDevicesRequest')

const InstanceProfilesSchema = z.array(InstanceProfileSchema).openapi('InstanceProfiles')

const ListInstanceProfilesResultSchema = z
  .object({
    instanceProfiles: InstanceProfilesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your instance profiles.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that can be used in the next call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInstanceProfilesResult')

const ListInstanceProfilesRequestSchema = z
  .object({
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the maximum number of items you want to return in the API response.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListInstanceProfilesRequest', required: [] })
  .openapi('ListInstanceProfilesRequest')

const JobsSchema = z.array(JobSchema).openapi('Jobs')

const ListJobsResultSchema = z
  .object({
    jobs: JobsSchema.and(
      z.any().openapi({ description: 'Information about the jobs.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the result of a list jobs request.', required: [] })
  .openapi('ListJobsResult')

const ListJobsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The run's Amazon Resource Name (ARN)." }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListJobsRequest',
    description: 'Represents a request to the list jobs operation.',
  })
  .openapi('ListJobsRequest')

const NetworkProfilesSchema = z.array(NetworkProfileSchema).openapi('NetworkProfiles')

const ListNetworkProfilesResultSchema = z
  .object({
    networkProfiles: NetworkProfilesSchema.and(
      z.any().openapi({ description: 'A list of the available network profiles.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNetworkProfilesResult')

const ListNetworkProfilesRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to list network profiles.',
        }),
    ),
    type: NetworkProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of network profile to return information about. Valid values are listed here.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'ListNetworkProfilesRequest' })
  .openapi('ListNetworkProfilesRequest')

const OfferingPromotionIdentifierSchema = z.string().min(4).openapi('OfferingPromotionIdentifier')

const OfferingPromotionSchema = z
  .object({
    id: OfferingPromotionIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the offering promotion.' }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'A string that describes the offering promotion.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents information about an offering promotion.', required: [] })
  .openapi('OfferingPromotion')

const OfferingPromotionsSchema = z.array(OfferingPromotionSchema).openapi('OfferingPromotions')

const ListOfferingPromotionsResultSchema = z
  .object({
    offeringPromotions: OfferingPromotionsSchema.and(
      z.any().openapi({ description: 'Information about the offering promotions.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier to be used in the next call to this operation, to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOfferingPromotionsResult')

const ListOfferingPromotionsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListOfferingPromotionsRequest', required: [] })
  .openapi('ListOfferingPromotionsRequest')

const TransactionIdentifierSchema = z.string().min(32).openapi('TransactionIdentifier')

const OfferingTransactionSchema = z
  .object({
    offeringStatus: OfferingStatusSchema.and(
      z.any().openapi({ description: 'The status of an offering transaction.' }),
    ).exactOptional(),
    transactionId: TransactionIdentifierSchema.and(
      z.any().openapi({ description: 'The transaction ID of the offering transaction.' }),
    ).exactOptional(),
    offeringPromotionId: OfferingPromotionIdentifierSchema.and(
      z.any().openapi({ description: 'The ID that corresponds to a device offering promotion.' }),
    ).exactOptional(),
    createdOn: DateTimeSchema.and(
      z.any().openapi({ description: 'The date on which an offering transaction was created.' }),
    ).exactOptional(),
    cost: MonetaryAmountSchema.and(
      z.any().openapi({ description: 'The cost of an offering transaction.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the metadata of an offering transaction.', required: [] })
  .openapi('OfferingTransaction')

const OfferingTransactionsSchema = z
  .array(OfferingTransactionSchema)
  .openapi('OfferingTransactions')

const ListOfferingTransactionsResultSchema = z
  .object({
    offeringTransactions: OfferingTransactionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The audit log of subscriptions you have purchased and modified through AWS Device Farm.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      offeringTransactions: [
        {
          cost: { amount: 0, currencyCode: 'USD' },
          createdOn: '1470021420',
          offeringStatus: {
            type: 'RENEW',
            effectiveOn: '1472688000',
            offering: {
              type: 'RECURRING',
              description: 'Android Remote Access Unmetered Device Slot',
              id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
              platform: 'ANDROID',
            },
            quantity: 0,
          },
          transactionId: '03728003-d1ea-4851-abd6-12345EXAMPLE',
        },
        {
          cost: { amount: 250, currencyCode: 'USD' },
          createdOn: '1470021420',
          offeringStatus: {
            type: 'PURCHASE',
            effectiveOn: '1470021420',
            offering: {
              type: 'RECURRING',
              description: 'Android Remote Access Unmetered Device Slot',
              id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
              platform: 'ANDROID',
            },
            quantity: 1,
          },
          transactionId: '56820b6e-06bd-473a-8ff8-12345EXAMPLE',
        },
        {
          cost: { amount: 175, currencyCode: 'USD' },
          createdOn: '1465538520',
          offeringStatus: {
            type: 'PURCHASE',
            effectiveOn: '1465538520',
            offering: {
              type: 'RECURRING',
              description: 'Android Unmetered Device Slot',
              id: '8980F81C-00D7-469D-8EC6-12345EXAMPLE',
              platform: 'ANDROID',
            },
            quantity: 1,
          },
          transactionId: '953ae2c6-d760-4a04-9597-12345EXAMPLE',
        },
        {
          cost: { amount: 8.07, currencyCode: 'USD' },
          createdOn: '1459344300',
          offeringStatus: {
            type: 'PURCHASE',
            effectiveOn: '1459344300',
            offering: {
              type: 'RECURRING',
              description: 'iOS Unmetered Device Slot',
              id: 'A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE',
              platform: 'IOS',
            },
            quantity: 1,
          },
          transactionId: '2baf9021-ae3e-47f5-ab52-12345EXAMPLE',
        },
      ],
    },
    description: 'Returns the transaction log of the specified offerings.',
    required: [],
  })
  .openapi('ListOfferingTransactionsResult')

const ListOfferingTransactionsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListOfferingTransactionsRequest',
    description: 'Represents the request to list the offering transaction history.',
    required: [],
  })
  .openapi('ListOfferingTransactionsRequest')

const OfferingsSchema = z.array(OfferingSchema).openapi('Offerings')

const ListOfferingsResultSchema = z
  .object({
    offerings: OfferingsSchema.and(
      z.any().openapi({ description: 'A value that represents the list offering results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      offerings: [
        {
          type: 'RECURRING',
          description: 'iOS Unmetered Device Slot',
          id: 'A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE',
          platform: 'IOS',
          recurringCharges: [{ cost: { amount: 250, currencyCode: 'USD' }, frequency: 'MONTHLY' }],
        },
        {
          type: 'RECURRING',
          description: 'Android Unmetered Device Slot',
          id: '8980F81C-00D7-469D-8EC6-12345EXAMPLE',
          platform: 'ANDROID',
          recurringCharges: [{ cost: { amount: 250, currencyCode: 'USD' }, frequency: 'MONTHLY' }],
        },
        {
          type: 'RECURRING',
          description: 'Android Remote Access Unmetered Device Slot',
          id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
          platform: 'ANDROID',
          recurringCharges: [{ cost: { amount: 250, currencyCode: 'USD' }, frequency: 'MONTHLY' }],
        },
        {
          type: 'RECURRING',
          description: 'iOS Remote Access Unmetered Device Slot',
          id: '552B4DAD-A6C9-45C4-94FB-12345EXAMPLE',
          platform: 'IOS',
          recurringCharges: [{ cost: { amount: 250, currencyCode: 'USD' }, frequency: 'MONTHLY' }],
        },
      ],
    },
    description: 'Represents the return values of the list of offerings.',
    required: [],
  })
  .openapi('ListOfferingsResult')

const ListOfferingsRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListOfferingsRequest',
    description: 'Represents the request to list all offerings.',
    required: [],
  })
  .openapi('ListOfferingsRequest')

const ProjectsSchema = z.array(ProjectSchema).openapi('Projects')

const ListProjectsResultSchema = z
  .object({
    projects: ProjectsSchema.and(
      z.any().openapi({ description: 'Information about the projects.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      projects: [
        {
          name: 'My Test Project',
          arn: 'arn:aws:devicefarm:us-west-2:123456789101:project:7ad300ed-8183-41a7-bf94-12345EXAMPLE',
          created: '1453163262.105',
        },
        {
          name: 'Hello World',
          arn: 'arn:aws:devicefarm:us-west-2:123456789101:project:d6b087d9-56db-4e44-b9ec-12345EXAMPLE',
          created: '1470350112.439',
        },
      ],
    },
    description: 'Represents the result of a list projects request.',
    required: [],
  })
  .openapi('ListProjectsResult')

const ListProjectsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm returns a list of all projects for the AWS account. You can also specify a project ARN.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListProjectsRequest',
    description: 'Represents a request to the list projects operation.',
    required: [],
  })
  .openapi('ListProjectsRequest')

const RemoteAccessSessionsSchema = z
  .array(RemoteAccessSessionSchema)
  .openapi('RemoteAccessSessions')

const ListRemoteAccessSessionsResultSchema = z
  .object({
    remoteAccessSessions: RemoteAccessSessionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that represents the metadata from the service about each remote access session you are requesting.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { remoteAccessSessions: [] },
    description:
      'Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.',
    required: [],
  })
  .openapi('ListRemoteAccessSessionsResult')

const ListRemoteAccessSessionsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project about which you are requesting information.',
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListRemoteAccessSessionsRequest',
    description: 'Represents the request to return information about the remote access session.',
  })
  .openapi('ListRemoteAccessSessionsRequest')

const RunsSchema = z.array(RunSchema).openapi('Runs')

const ListRunsResultSchema = z
  .object({
    runs: RunsSchema.and(
      z.any().openapi({ description: 'Information about the runs.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      runs: [
        {
          name: 'My Test Run',
          type: 'BUILTIN_EXPLORER',
          arn: 'arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE',
          billingMethod: 'METERED',
          completedJobs: 0,
          counters: {
            errored: 0,
            failed: 0,
            passed: 0,
            skipped: 0,
            stopped: 0,
            total: 0,
            warned: 0,
          },
          created: '1472667509.852',
          deviceMinutes: { metered: 0, total: 0, unmetered: 0 },
          platform: 'ANDROID',
          result: 'PENDING',
          status: 'RUNNING',
          totalJobs: 3,
        },
      ],
    },
    description: 'Represents the result of a list runs request.',
    required: [],
  })
  .openapi('ListRunsResult')

const ListRunsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to list runs.',
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListRunsRequest',
    description: 'Represents a request to the list runs operation.',
  })
  .openapi('ListRunsRequest')

const SampleTypeSchema = z
  .enum([
    'CPU',
    'MEMORY',
    'THREADS',
    'RX_RATE',
    'TX_RATE',
    'RX',
    'TX',
    'NATIVE_FRAMES',
    'NATIVE_FPS',
    'NATIVE_MIN_DRAWTIME',
    'NATIVE_AVG_DRAWTIME',
    'NATIVE_MAX_DRAWTIME',
    'OPENGL_FRAMES',
    'OPENGL_FPS',
    'OPENGL_MIN_DRAWTIME',
    'OPENGL_AVG_DRAWTIME',
    'OPENGL_MAX_DRAWTIME',
  ])
  .openapi('SampleType')

const SampleSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The sample's ARN." }),
    ).exactOptional(),
    type: SampleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The sample's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage.</p> </li> <li> <p>MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes.</p> </li> <li> <p>NATIVE_AVG_DRAWTIME</p> </li> <li> <p>NATIVE_FPS</p> </li> <li> <p>NATIVE_FRAMES</p> </li> <li> <p>NATIVE_MAX_DRAWTIME</p> </li> <li> <p>NATIVE_MIN_DRAWTIME</p> </li> <li> <p>OPENGL_AVG_DRAWTIME</p> </li> <li> <p>OPENGL_FPS</p> </li> <li> <p>OPENGL_FRAMES</p> </li> <li> <p>OPENGL_MAX_DRAWTIME</p> </li> <li> <p>OPENGL_MIN_DRAWTIME</p> </li> <li> <p>RX</p> </li> <li> <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process.</p> </li> <li> <p>THREADS: A threads sample type. This is expressed as the total number of threads per app process.</p> </li> <li> <p>TX</p> </li> <li> <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process.</p> </li> </ul>",
        }),
    ).exactOptional(),
    url: URLSchema.and(
      z
        .any()
        .openapi({
          description:
            "The presigned Amazon S3 URL that can be used with a GET request to download the sample's file.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a sample of performance data.', required: [] })
  .openapi('Sample')

const SamplesSchema = z.array(SampleSchema).openapi('Samples')

const ListSamplesResultSchema = z
  .object({
    samples: SamplesSchema.and(
      z.any().openapi({ description: 'Information about the samples.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { samples: [] },
    description: 'Represents the result of a list samples request.',
    required: [],
  })
  .openapi('ListSamplesResult')

const ListSamplesRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the job used to list samples.',
        }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListSamplesRequest',
    description: 'Represents a request to the list samples operation.',
  })
  .openapi('ListSamplesRequest')

const SuitesSchema = z.array(SuiteSchema).openapi('Suites')

const ListSuitesResultSchema = z
  .object({
    suites: SuitesSchema.and(
      z.any().openapi({ description: 'Information about the suites.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { suites: [] },
    description: 'Represents the result of a list suites request.',
    required: [],
  })
  .openapi('ListSuitesResult')

const ListSuitesRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The job's Amazon Resource Name (ARN)." }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListSuitesRequest',
    description: 'Represents a request to the list suites operation.',
  })
  .openapi('ListSuitesRequest')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that makes up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a descriptor in a tag category (key).',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).max(150).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource or resources for which to list tags. You can associate tags with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TestGridProjectsSchema = z.array(TestGridProjectSchema).openapi('TestGridProjects')

const ListTestGridProjectsResultSchema = z
  .object({
    testGridProjects: TestGridProjectsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of TestGridProjects, based on a <a>ListTestGridProjectsRequest</a>.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used for pagination. Pass into <a>ListTestGridProjects</a> to get more results in a paginated request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTestGridProjectsResult')

const MaxPageSizeSchema = z.int().min(1).max(1000).openapi('MaxPageSize')

const ListTestGridProjectsRequestSchema = z
  .object({
    maxResult: MaxPageSizeSchema.and(
      z.any().openapi({ description: 'Return no more than this number of results.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'From a response, used to continue a paginated listing. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTestGridProjectsRequest', required: [] })
  .openapi('ListTestGridProjectsRequest')

const TestGridSessionActionSchema = z
  .object({
    action: StringSchema.and(
      z.any().openapi({ description: 'The action taken by the session.' }),
    ).exactOptional(),
    started: DateTimeSchema.and(
      z.any().openapi({ description: 'The time that the session invoked the action.' }),
    ).exactOptional(),
    duration: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds, that the action took to complete in the browser.',
        }),
    ).exactOptional(),
    statusCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'HTTP status code returned to the browser when the action was taken.',
        }),
    ).exactOptional(),
    requestMethod: StringSchema.and(
      z.any().openapi({ description: 'HTTP method that the browser used to make the request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An action taken by a <a>TestGridSession</a> browser instance.',
    required: [],
  })
  .openapi('TestGridSessionAction')

const TestGridSessionActionsSchema = z
  .array(TestGridSessionActionSchema)
  .openapi('TestGridSessionActions')

const ListTestGridSessionActionsResultSchema = z
  .object({
    actions: TestGridSessionActionsSchema.and(
      z.any().openapi({ description: 'The action taken by the session.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTestGridSessionActionsResult')

const ListTestGridSessionActionsRequestSchema = z
  .object({
    sessionArn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'The ARN of the session to retrieve.' }),
    ),
    maxResult: MaxPageSizeSchema.and(
      z.any().openapi({ description: 'The maximum number of sessions to return per response.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sessionArn'], title: 'ListTestGridSessionActionsRequest' })
  .openapi('ListTestGridSessionActionsRequest')

const TestGridSessionArtifactTypeSchema = z
  .enum(['UNKNOWN', 'VIDEO', 'SELENIUM_LOG'])
  .openapi('TestGridSessionArtifactType')

const TestGridSessionArtifactSchema = z
  .object({
    filename: StringSchema.and(
      z.any().openapi({ description: 'The file name of the artifact.' }),
    ).exactOptional(),
    type: TestGridSessionArtifactTypeSchema.and(
      z.any().openapi({ description: 'The kind of artifact.' }),
    ).exactOptional(),
    url: SensitiveStringSchema.and(
      z.any().openapi({ description: 'A semi-stable URL to the content of the object.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>',
    required: [],
  })
  .openapi('TestGridSessionArtifact')

const TestGridSessionArtifactsSchema = z
  .array(TestGridSessionArtifactSchema)
  .openapi('TestGridSessionArtifacts')

const ListTestGridSessionArtifactsResultSchema = z
  .object({
    artifacts: TestGridSessionArtifactsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of test grid session artifacts for a <a>TestGridSession</a>.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTestGridSessionArtifactsResult')

const TestGridSessionArtifactCategorySchema = z
  .enum(['VIDEO', 'LOG'])
  .openapi('TestGridSessionArtifactCategory')

const ListTestGridSessionArtifactsRequestSchema = z
  .object({
    sessionArn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'The ARN of a <a>TestGridSession</a>. ' }),
    ),
    type: TestGridSessionArtifactCategorySchema.and(
      z.any().openapi({ description: 'Limit results to a specified type of artifact.' }),
    ).exactOptional(),
    maxResult: MaxPageSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to be returned by a request.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['sessionArn'], title: 'ListTestGridSessionArtifactsRequest' })
  .openapi('ListTestGridSessionArtifactsRequest')

const TestGridSessionsSchema = z.array(TestGridSessionSchema).openapi('TestGridSessions')

const ListTestGridSessionsResultSchema = z
  .object({
    testGridSessions: TestGridSessionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sessions that match the criteria in a <a>ListTestGridSessionsRequest</a>. ',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTestGridSessionsResult')

const ListTestGridSessionsRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'ARN of a <a>TestGridProject</a>.' }),
    ),
    status: TestGridSessionStatusSchema.and(
      z.any().openapi({ description: 'Return only sessions in this state.' }),
    ).exactOptional(),
    creationTimeAfter: DateTimeSchema.and(
      z.any().openapi({ description: 'Return only sessions created after this time.' }),
    ).exactOptional(),
    creationTimeBefore: DateTimeSchema.and(
      z.any().openapi({ description: 'Return only sessions created before this time.' }),
    ).exactOptional(),
    endTimeAfter: DateTimeSchema.and(
      z.any().openapi({ description: 'Return only sessions that ended after this time.' }),
    ).exactOptional(),
    endTimeBefore: DateTimeSchema.and(
      z.any().openapi({ description: 'Return only sessions that ended before this time.' }),
    ).exactOptional(),
    maxResult: MaxPageSizeSchema.and(
      z.any().openapi({ description: 'Return only this many results at a time.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectArn'], title: 'ListTestGridSessionsRequest' })
  .openapi('ListTestGridSessionsRequest')

const TestsSchema = z.array(TestSchema).openapi('Tests')

const ListTestsResultSchema = z
  .object({
    tests: TestsSchema.and(
      z.any().openapi({ description: 'Information about the tests.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { tests: [] },
    description: 'Represents the result of a list tests request.',
    required: [],
  })
  .openapi('ListTestsResult')

const ListTestsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The test suite's Amazon Resource Name (ARN)." }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListTestsRequest',
    description: 'Represents a request to the list tests operation.',
  })
  .openapi('ListTestsRequest')

const ProblemDetailSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The problem detail's ARN." }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: "The problem detail's name." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a problem detail.', required: [] })
  .openapi('ProblemDetail')

const ProblemSchema = z
  .object({
    run: ProblemDetailSchema.and(
      z.any().openapi({ description: 'Information about the associated run.' }),
    ).exactOptional(),
    job: ProblemDetailSchema.and(
      z.any().openapi({ description: 'Information about the associated job.' }),
    ).exactOptional(),
    suite: ProblemDetailSchema.and(
      z.any().openapi({ description: 'Information about the associated suite.' }),
    ).exactOptional(),
    test: ProblemDetailSchema.and(
      z.any().openapi({ description: 'Information about the associated test.' }),
    ).exactOptional(),
    device: DeviceSchema.and(
      z.any().openapi({ description: 'Information about the associated device.' }),
    ).exactOptional(),
    result: ExecutionResultSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The problem's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>",
        }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the problem's result." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a specific warning or failure.', required: [] })
  .openapi('Problem')

const ProblemsSchema = z.array(ProblemSchema).openapi('Problems')

const UniqueProblemSchema = z
  .object({
    message: MessageSchema.and(
      z.any().openapi({ description: "A message about the unique problems' result." }),
    ).exactOptional(),
    problems: ProblemsSchema.and(
      z.any().openapi({ description: 'Information about the problems.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of one or more problems, grouped by their result.',
    required: [],
  })
  .openapi('UniqueProblem')

const UniqueProblemsSchema = z.array(UniqueProblemSchema).openapi('UniqueProblems')

const UniqueProblemsByExecutionResultMapSchema = z
  .record(z.string(), UniqueProblemsSchema)
  .openapi('UniqueProblemsByExecutionResultMap')

const ListUniqueProblemsResultSchema = z
  .object({
    uniqueProblems: UniqueProblemsByExecutionResultMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the unique problems.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING</p> </li> <li> <p>PASSED</p> </li> <li> <p>WARNED</p> </li> <li> <p>FAILED</p> </li> <li> <p>SKIPPED</p> </li> <li> <p>ERRORED</p> </li> <li> <p>STOPPED</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { uniqueProblems: {} },
    description: 'Represents the result of a list unique problems request.',
    required: [],
  })
  .openapi('ListUniqueProblemsResult')

const ListUniqueProblemsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: "The unique problems' ARNs." }),
    ),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListUniqueProblemsRequest',
    description: 'Represents a request to the list unique problems operation.',
  })
  .openapi('ListUniqueProblemsRequest')

const UploadsSchema = z.array(UploadSchema).openapi('Uploads')

const ListUploadsResultSchema = z
  .object({
    uploads: UploadsSchema.and(
      z.any().openapi({ description: 'Information about the uploads.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the number of items that are returned is significantly large, this is an identifier that is also returned. It can be used in a subsequent call to this operation to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { uploads: [] },
    description: 'Represents the result of a list uploads request.',
    required: [],
  })
  .openapi('ListUploadsResult')

const ListUploadsRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to list uploads.',
        }),
    ),
    type: UploadTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of upload.</p> <p>Must be one of the following values:</p> <ul> <li> <p>ANDROID_APP</p> </li> <li> <p>IOS_APP</p> </li> <li> <p>WEB_APP</p> </li> <li> <p>EXTERNAL_DATA</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_RUBY_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_PACKAGE</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_PACKAGE</p> </li> <li> <p>CALABASH_TEST_PACKAGE</p> </li> <li> <p>INSTRUMENTATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATION_TEST_PACKAGE</p> </li> <li> <p>UIAUTOMATOR_TEST_PACKAGE</p> </li> <li> <p>XCTEST_TEST_PACKAGE</p> </li> <li> <p>XCTEST_UI_TEST_PACKAGE</p> </li> <li> <p>APPIUM_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_NODE_TEST_SPEC</p> </li> <li> <p> APPIUM_RUBY_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_JUNIT_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_JAVA_TESTNG_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_PYTHON_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_NODE_TEST_SPEC</p> </li> <li> <p>APPIUM_WEB_RUBY_TEST_SPEC</p> </li> <li> <p>INSTRUMENTATION_TEST_SPEC</p> </li> <li> <p>XCTEST_UI_TEST_SPEC</p> </li> </ul>',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'ListUploadsRequest',
    description: 'Represents a request to the list uploads operation.',
  })
  .openapi('ListUploadsRequest')

const VPCEConfigurationsSchema = z.array(VPCEConfigurationSchema).openapi('VPCEConfigurations')

const ListVPCEConfigurationsResultSchema = z
  .object({
    vpceConfigurations: VPCEConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>VPCEConfiguration</code> objects that contain information about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListVPCEConfigurationsResult')

const ListVPCEConfigurationsRequestSchema = z
  .object({
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'An integer that specifies the maximum number of items you want to return in the API response.',
        }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListVPCEConfigurationsRequest', required: [] })
  .openapi('ListVPCEConfigurationsRequest')

const PurchaseOfferingResultSchema = z
  .object({
    offeringTransaction: OfferingTransactionSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the offering transaction for the purchase result.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      offeringTransaction: {
        cost: { amount: 8.07, currencyCode: 'USD' },
        createdOn: '1472648340',
        offeringStatus: {
          type: 'PURCHASE',
          effectiveOn: '1472648340',
          offering: {
            type: 'RECURRING',
            description: 'Android Remote Access Unmetered Device Slot',
            id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
            platform: 'ANDROID',
          },
          quantity: 1,
        },
        transactionId: 'd30614ed-1b03-404c-9893-12345EXAMPLE',
      },
    },
    description: 'The result of the purchase offering (for example, success or failure).',
    required: [],
  })
  .openapi('PurchaseOfferingResult')

const PurchaseOfferingRequestSchema = z
  .object({
    offeringId: OfferingIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of the offering.' }),
    ),
    quantity: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of device slots to purchase in an offering request.' }),
    ),
    offeringPromotionId: OfferingPromotionIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the offering promotion to be applied to the purchase.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['offeringId', 'quantity'],
    title: 'PurchaseOfferingRequest',
    description: 'Represents a request for a purchase offering.',
  })
  .openapi('PurchaseOfferingRequest')

const RenewOfferingResultSchema = z
  .object({
    offeringTransaction: OfferingTransactionSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the status of the offering transaction for the renewal.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      offeringTransaction: {
        cost: { amount: 250, currencyCode: 'USD' },
        createdOn: '1472648880',
        offeringStatus: {
          type: 'RENEW',
          effectiveOn: '1472688000',
          offering: {
            type: 'RECURRING',
            description: 'Android Remote Access Unmetered Device Slot',
            id: 'D68B3C05-1BA6-4360-BC69-12345EXAMPLE',
            platform: 'ANDROID',
          },
          quantity: 1,
        },
        transactionId: 'e90f1405-8c35-4561-be43-12345EXAMPLE',
      },
    },
    description: 'The result of a renewal offering.',
    required: [],
  })
  .openapi('RenewOfferingResult')

const RenewOfferingRequestSchema = z
  .object({
    offeringId: OfferingIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of a request to renew an offering.' }),
    ),
    quantity: IntegerSchema.and(
      z.any().openapi({ description: 'The quantity requested in an offering renewal.' }),
    ),
  })
  .openapi({
    required: ['offeringId', 'quantity'],
    title: 'RenewOfferingRequest',
    description: 'A request that represents an offering renewal.',
  })
  .openapi('RenewOfferingRequest')

const ScheduleRunResultSchema = z
  .object({
    run: RunSchema.and(
      z.any().openapi({ description: 'Information about the scheduled run.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { run: {} },
    description: 'Represents the result of a schedule run request.',
    required: [],
  })
  .openapi('ScheduleRunResult')

const DeviceSelectionConfigurationSchema = z
  .object({
    filters: DeviceFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Used to dynamically select a set of devices for a test run. A filter is made up of an attribute, an operator, and one or more values.</p> <ul> <li> <p> <b>Attribute</b> </p> <p>The aspect of a device such as platform or model used as the selection criteria in a device filter.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN: The Amazon Resource Name (ARN) of the device (for example, <code>arn:aws:devicefarm:us-west-2::device:12345Example</code>).</p> </li> <li> <p>PLATFORM: The device platform. Valid values are ANDROID or IOS.</p> </li> <li> <p>OS_VERSION: The operating system version (for example, 10.3.2).</p> </li> <li> <p>MODEL: The device model (for example, iPad 5th Gen).</p> </li> <li> <p>AVAILABILITY: The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> </li> <li> <p>FORM_FACTOR: The device form factor. Valid values are PHONE or TABLET.</p> </li> <li> <p>MANUFACTURER: The device manufacturer (for example, Apple).</p> </li> <li> <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values are TRUE or FALSE.</p> </li> <li> <p>REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE. Because remote debugging is <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html">no longer supported</a>, this filter is ignored.</p> </li> <li> <p>INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.</p> </li> <li> <p>INSTANCE_LABELS: The label of the device instance.</p> </li> <li> <p>FLEET_TYPE: The fleet type. Valid values are PUBLIC or PRIVATE.</p> </li> </ul> </li> <li> <p> <b>Operator</b> </p> <p>The filter operator.</p> <ul> <li> <p>The EQUALS operator is available for every attribute except INSTANCE_LABELS.</p> </li> <li> <p>The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.</p> </li> <li> <p>The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER, and INSTANCE_ARN attributes.</p> </li> <li> <p>The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION attribute.</p> </li> </ul> </li> <li> <p> <b>Values</b> </p> <p>An array of one or more filter values.</p> <p class="title"> <b>Operator Values</b> </p> <ul> <li> <p>The IN and NOT_IN operators can take a values array that has more than one element.</p> </li> <li> <p>The other operators require an array with a single element.</p> </li> </ul> <p class="title"> <b>Attribute Values</b> </p> <ul> <li> <p>The PLATFORM attribute can be set to ANDROID or IOS.</p> </li> <li> <p>The AVAILABILITY attribute can be set to AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.</p> </li> <li> <p>The FORM_FACTOR attribute can be set to PHONE or TABLET.</p> </li> <li> <p>The FLEET_TYPE attribute can be set to PUBLIC or PRIVATE.</p> </li> </ul> </li> </ul>',
        }),
    ),
    maxDevices: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of devices to be included in a test run.' }),
    ),
  })
  .openapi({
    required: ['filters', 'maxDevices'],
    description:
      'Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.',
  })
  .openapi('DeviceSelectionConfiguration')

const AccountsCleanupSchema = z.boolean().openapi('AccountsCleanup')

const AppPackagesCleanupSchema = z.boolean().openapi('AppPackagesCleanup')

const ExecutionConfigurationSchema = z
  .object({
    jobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({ description: 'The number of minutes a test run executes before it times out.' }),
    ).exactOptional(),
    accountsCleanup: AccountsCleanupSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if account cleanup is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
    appPackagesCleanup: AppPackagesCleanupSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if app package cleanup is enabled at the beginning of the test. Otherwise, false.',
        }),
    ).exactOptional(),
    videoCapture: VideoCaptureSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true to enable video capture. Otherwise, set to false. The default is true.',
        }),
    ).exactOptional(),
    skipAppResign: SkipAppResignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When set to <code>true</code>, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again.</p> <p>For more information about how Device Farm re-signs your apps, see <a href="http://aws.amazon.com/device-farm/faqs/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents configuration information about a test run, such as the execution timeout (in minutes).',
    required: [],
  })
  .openapi('ExecutionConfiguration')

const ScheduleRunRequestSchema = z
  .object({
    projectArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the project for the run to be scheduled.' }),
    ),
    appArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an application package to run tests against, created with <a>CreateUpload</a>. See <a>ListUploads</a>.',
        }),
    ).exactOptional(),
    devicePoolArn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The ARN of the device pool for the run to be scheduled.' }),
    ).exactOptional(),
    deviceSelectionConfiguration: DeviceSelectionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filter criteria used to dynamically select a set of devices for a test run and the maximum number of devices to be included in the run.</p> <p>Either <b> <code>devicePoolArn</code> </b> or <b> <code>deviceSelectionConfiguration</code> </b> is required in a request.</p>',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z.any().openapi({ description: 'The name for the run to be scheduled.' }),
    ).exactOptional(),
    test: ScheduleRunTestSchema.and(
      z.any().openapi({ description: 'Information about the test for the run to be scheduled.' }),
    ),
    configuration: ScheduleRunConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the settings for the run to be scheduled.' }),
    ).exactOptional(),
    executionConfiguration: ExecutionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies configuration information about a test run, such as the execution timeout (in minutes).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectArn', 'test'],
    title: 'ScheduleRunRequest',
    description: 'Represents a request to the schedule run operation.',
  })
  .openapi('ScheduleRunRequest')

const IdempotencyExceptionSchema = z.any().openapi('IdempotencyException')

const StopJobResultSchema = z
  .object({
    job: JobSchema.and(
      z.any().openapi({ description: 'The job that was stopped.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopJobResult')

const StopJobRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the Amazon Resource Name (ARN) of the Device Farm job to stop.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'StopJobRequest' })
  .openapi('StopJobRequest')

const StopRemoteAccessSessionResultSchema = z
  .object({
    remoteAccessSession: RemoteAccessSessionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A container that represents the metadata from the service about the remote access session you are stopping.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.',
    required: [],
  })
  .openapi('StopRemoteAccessSessionResult')

const StopRemoteAccessSessionRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the remote access session to stop.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'StopRemoteAccessSessionRequest',
    description: 'Represents the request to stop the remote access session.',
  })
  .openapi('StopRemoteAccessSessionRequest')

const StopRunResultSchema = z
  .object({
    run: RunSchema.and(
      z.any().openapi({ description: 'The run that was stopped.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { run: {} },
    description: 'Represents the results of your stop run attempt.',
    required: [],
  })
  .openapi('StopRunResult')

const StopRunRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the Amazon Resource Name (ARN) of the Device Farm run to stop.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    title: 'StopRunRequest',
    description: 'Represents the request to stop a specific run.',
  })
  .openapi('StopRunRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource or resources to which to add tags. You can associate tags with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const TagPolicyExceptionSchema = z.any().openapi('TagPolicyException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).max(150).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: DeviceFarmArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource or resources from which to delete tags. You can associate tags with the following Device Farm resources: <code>PROJECT</code>, <code>RUN</code>, <code>NETWORK_PROFILE</code>, <code>INSTANCE_PROFILE</code>, <code>DEVICE_INSTANCE</code>, <code>SESSION</code>, <code>DEVICE_POOL</code>, <code>DEVICE</code>, and <code>VPCE_CONFIGURATION</code>.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDeviceInstanceResultSchema = z
  .object({
    deviceInstance: DeviceInstanceSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your device instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDeviceInstanceResult')

const UpdateDeviceInstanceRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the device instance.' }),
    ),
    profileArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the profile that you want to associate with the device instance.',
        }),
    ).exactOptional(),
    labels: InstanceLabelsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of strings that you want to associate with the device instance.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateDeviceInstanceRequest' })
  .openapi('UpdateDeviceInstanceRequest')

const UpdateDevicePoolResultSchema = z
  .object({
    devicePool: DevicePoolSchema.and(
      z.any().openapi({ description: 'The device pool you just updated.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { devicePool: {} },
    description: 'Represents the result of an update device pool request.',
    required: [],
  })
  .openapi('UpdateDevicePoolResult')

const UpdateDevicePoolRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Device Farm device pool to update.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'A string that represents the name of the device pool to update.',
        }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'A description of the device pool to update.' }),
    ).exactOptional(),
    rules: RulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the rules to modify for the device pool. Updating rules is optional. If you update rules for your request, the update replaces the existing rules.',
        }),
    ).exactOptional(),
    maxDevices: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p> <p>If you use this parameter in your request, you cannot use the <code>clearMaxDevices</code> parameter in the same request.</p>',
        }),
    ).exactOptional(),
    clearMaxDevices: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets whether the <code>maxDevices</code> parameter applies to your device pool. If you set this parameter to <code>true</code>, the <code>maxDevices</code> parameter does not apply, and Device Farm does not limit the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices that meet the criteria specified in the <code>rules</code> parameter.</p> <p>If you use this parameter in your request, you cannot use the <code>maxDevices</code> parameter in the same request.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'UpdateDevicePoolRequest',
    description: 'Represents a request to the update device pool operation.',
  })
  .openapi('UpdateDevicePoolRequest')

const UpdateInstanceProfileResultSchema = z
  .object({
    instanceProfile: InstanceProfileSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your instance profile.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateInstanceProfileResult')

const UpdateInstanceProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the instance profile.' }),
    ),
    name: NameSchema.and(
      z.any().openapi({ description: 'The updated name for your instance profile.' }),
    ).exactOptional(),
    description: MessageSchema.and(
      z.any().openapi({ description: 'The updated description for your instance profile.' }),
    ).exactOptional(),
    packageCleanup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated choice for whether you want to specify package cleanup. The default value is <code>false</code> for private devices.',
        }),
    ).exactOptional(),
    excludeAppPackagesFromCleanup: PackageIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    rebootAfterUse: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated choice for whether you want to reboot the device after use. The default value is <code>true</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateInstanceProfileRequest' })
  .openapi('UpdateInstanceProfileRequest')

const UpdateNetworkProfileResultSchema = z
  .object({
    networkProfile: NetworkProfileSchema.and(
      z.any().openapi({ description: 'A list of the available network profiles.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateNetworkProfileResult')

const UpdateNetworkProfileRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project for which you want to update network profile settings.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the network profile about which you are returning information.',
        }),
    ).exactOptional(),
    description: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the network profile about which you are returning information.',
        }),
    ).exactOptional(),
    type: NetworkProfileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of network profile to return information about. Valid values are listed here.',
        }),
    ).exactOptional(),
    uplinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    downlinkBandwidthBits: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data throughput rate in bits per second, as an integer from 0 to 104857600.',
        }),
    ).exactOptional(),
    uplinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkDelayMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    downlinkJitterMs: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.',
        }),
    ).exactOptional(),
    uplinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Proportion of transmitted packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
    downlinkLossPercent: PercentIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Proportion of received packets that fail to arrive from 0 to 100 percent.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateNetworkProfileRequest' })
  .openapi('UpdateNetworkProfileRequest')

const UpdateProjectResultSchema = z
  .object({
    project: ProjectSchema.and(
      z.any().openapi({ description: 'The project to update.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      project: {
        name: 'NewName',
        arn: 'arn:aws:devicefarm:us-west-2:123456789101:project:8f75187d-101e-4625-accc-12345EXAMPLE',
        created: '1448400709.927',
      },
    },
    description: 'Represents the result of an update project request.',
    required: [],
  })
  .openapi('UpdateProjectResult')

const UpdateProjectRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the project whose name to update.',
        }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that represents the new name of the project that you are updating.',
        }),
    ).exactOptional(),
    defaultJobTimeoutMinutes: JobTimeoutMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of minutes a test run in the project executes before it times out.',
        }),
    ).exactOptional(),
    vpcConfig: VpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['arn'],
    title: 'UpdateProjectRequest',
    description: 'Represents a request to the update project operation.',
  })
  .openapi('UpdateProjectRequest')

const UpdateTestGridProjectResultSchema = z
  .object({
    testGridProject: TestGridProjectSchema.and(
      z.any().openapi({ description: 'The project, including updated information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTestGridProjectResult')

const UpdateTestGridProjectRequestSchema = z
  .object({
    projectArn: DeviceFarmArnSchema.and(
      z.any().openapi({ description: 'ARN of the project to update.' }),
    ),
    name: ResourceNameSchema.and(
      z.any().openapi({ description: 'Human-readable name for the project.' }),
    ).exactOptional(),
    description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Human-readable description for the project.' }),
    ).exactOptional(),
    vpcConfig: TestGridVpcConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The VPC security groups and subnets that are attached to a project.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectArn'], title: 'UpdateTestGridProjectRequest' })
  .openapi('UpdateTestGridProjectRequest')

const UpdateUploadResultSchema = z
  .object({
    upload: UploadSchema.and(
      z.any().openapi({ description: 'A test spec uploaded to Device Farm.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUploadResult')

const UpdateUploadRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the uploaded test spec.' }),
    ),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The upload's test spec file name. The name must not contain any forward slashes (/). The test spec file name must end with the <code>.yaml</code> or <code>.yml</code> file extension.",
        }),
    ).exactOptional(),
    contentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description: "The upload's content type (for example, <code>application/x-yaml</code>).",
        }),
    ).exactOptional(),
    editContent: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to true if the YAML file has changed and must be updated. Otherwise, set to false.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateUploadRequest' })
  .openapi('UpdateUploadRequest')

const UpdateVPCEConfigurationResultSchema = z
  .object({
    vpceConfiguration: VPCEConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains information about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVPCEConfigurationResult')

const UpdateVPCEConfigurationRequestSchema = z
  .object({
    arn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to update.',
        }),
    ),
    vpceConfigurationName: VPCEConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.',
        }),
    ).exactOptional(),
    vpceServiceName: VPCEServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.',
        }),
    ).exactOptional(),
    serviceDnsName: ServiceDnsNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS (domain) name used to connect to your private service in your VPC. The DNS name must not already be in use on the internet.',
        }),
    ).exactOptional(),
    vpceConfigurationDescription: VPCEConfigurationDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional description that provides details about your VPC endpoint configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateVPCEConfigurationRequest' })
  .openapi('UpdateVPCEConfigurationRequest')

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

export const postXAmzTargetDeviceFarm20150623CreateDevicePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool',
  description: 'Creates a device pool.',
  operationId: 'CreateDevicePool',
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
        .literal('DeviceFarm_20150623.CreateDevicePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateDevicePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDevicePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDevicePoolResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateInstanceProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile',
  description:
    'Creates a profile that can be applied to one or more private fleet device instances.',
  operationId: 'CreateInstanceProfile',
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
        .literal('DeviceFarm_20150623.CreateInstanceProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateInstanceProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateInstanceProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInstanceProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile',
  description: 'Creates a network profile.',
  operationId: 'CreateNetworkProfile',
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
        .literal('DeviceFarm_20150623.CreateNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNetworkProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateProject',
  description: 'Creates a project.',
  operationId: 'CreateProject',
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
        .literal('DeviceFarm_20150623.CreateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
    484: {
      description: 'TagOperationException',
      content: { 'application/json': { schema: TagOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession',
  description: 'Specifies and starts a remote access session.',
  operationId: 'CreateRemoteAccessSession',
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
        .literal('DeviceFarm_20150623.CreateRemoteAccessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateRemoteAccessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRemoteAccessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRemoteAccessSessionResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateTestGridProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject',
  description:
    'Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.',
  operationId: 'CreateTestGridProject',
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
        .literal('DeviceFarm_20150623.CreateTestGridProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateTestGridProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTestGridProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTestGridProjectResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateTestGridUrlRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl',
  description:
    'Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.',
  operationId: 'CreateTestGridUrl',
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
        .literal('DeviceFarm_20150623.CreateTestGridUrl')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateTestGridUrl'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTestGridUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTestGridUrlResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateUpload',
  description: 'Uploads an app or test scripts.',
  operationId: 'CreateUpload',
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
        .literal('DeviceFarm_20150623.CreateUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateUpload'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUploadRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUploadResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623CreateVPCEConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration',
  description:
    'Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.',
  operationId: 'CreateVPCEConfiguration',
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
        .literal('DeviceFarm_20150623.CreateVPCEConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.CreateVPCEConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVPCEConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVPCEConfigurationResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteDevicePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool',
  description:
    'Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.',
  operationId: 'DeleteDevicePool',
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
        .literal('DeviceFarm_20150623.DeleteDevicePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteDevicePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDevicePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDevicePoolResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteInstanceProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile',
  description: 'Deletes a profile that can be applied to one or more private device instances.',
  operationId: 'DeleteInstanceProfile',
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
        .literal('DeviceFarm_20150623.DeleteInstanceProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteInstanceProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteInstanceProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInstanceProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile',
  description: 'Deletes a network profile.',
  operationId: 'DeleteNetworkProfile',
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
        .literal('DeviceFarm_20150623.DeleteNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNetworkProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteProject',
  description:
    '<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>',
  operationId: 'DeleteProject',
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
        .literal('DeviceFarm_20150623.DeleteProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession',
  description: 'Deletes a completed remote access session and its results.',
  operationId: 'DeleteRemoteAccessSession',
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
        .literal('DeviceFarm_20150623.DeleteRemoteAccessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteRemoteAccessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRemoteAccessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRemoteAccessSessionResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteRun',
  description:
    '<p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>',
  operationId: 'DeleteRun',
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
        .literal('DeviceFarm_20150623.DeleteRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteRun'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteRunRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRunResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteTestGridProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject',
  description:
    '<p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>',
  operationId: 'DeleteTestGridProject',
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
        .literal('DeviceFarm_20150623.DeleteTestGridProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteTestGridProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTestGridProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTestGridProjectResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'CannotDeleteException',
      content: { 'application/json': { schema: CannotDeleteExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteUpload',
  description: 'Deletes an upload given the upload ARN.',
  operationId: 'DeleteUpload',
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
        .literal('DeviceFarm_20150623.DeleteUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteUpload'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteUploadRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUploadResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration',
  description: 'Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.',
  operationId: 'DeleteVPCEConfiguration',
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
        .literal('DeviceFarm_20150623.DeleteVPCEConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.DeleteVPCEConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVPCEConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVPCEConfigurationResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
    483: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings',
  description:
    'Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.',
  operationId: 'GetAccountSettings',
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
        .literal('DeviceFarm_20150623.GetAccountSettings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetAccountSettings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccountSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountSettingsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetDevice',
  description: 'Gets information about a unique device type.',
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
      'X-Amz-Target': z
        .literal('DeviceFarm_20150623.GetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetDevice'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDeviceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetDeviceInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance',
  description:
    'Returns information about a device instance that belongs to a private device fleet.',
  operationId: 'GetDeviceInstance',
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
        .literal('DeviceFarm_20150623.GetDeviceInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetDeviceInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDeviceInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceInstanceResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetDevicePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePool',
  description: 'Gets information about a device pool.',
  operationId: 'GetDevicePool',
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
        .literal('DeviceFarm_20150623.GetDevicePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetDevicePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDevicePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicePoolResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility',
  description: 'Gets information about compatibility with a device pool.',
  operationId: 'GetDevicePoolCompatibility',
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
        .literal('DeviceFarm_20150623.GetDevicePoolCompatibility')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetDevicePoolCompatibility'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDevicePoolCompatibilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicePoolCompatibilityResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetInstanceProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile',
  description: 'Returns information about the specified instance profile.',
  operationId: 'GetInstanceProfile',
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
        .literal('DeviceFarm_20150623.GetInstanceProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetInstanceProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInstanceProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInstanceProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetJob',
  description: 'Gets information about a job.',
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
      'X-Amz-Target': z
        .literal('DeviceFarm_20150623.GetJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile',
  description: 'Returns information about a network profile.',
  operationId: 'GetNetworkProfile',
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
        .literal('DeviceFarm_20150623.GetNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetOfferingStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus',
  description:
    'Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.',
  operationId: 'GetOfferingStatus',
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
        .literal('DeviceFarm_20150623.GetOfferingStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetOfferingStatus'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOfferingStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOfferingStatusResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetProject',
  description: 'Gets information about a project.',
  operationId: 'GetProject',
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
        .literal('DeviceFarm_20150623.GetProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetProject'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetProjectRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProjectResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetRemoteAccessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession',
  description: 'Returns a link to a currently running remote access session.',
  operationId: 'GetRemoteAccessSession',
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
        .literal('DeviceFarm_20150623.GetRemoteAccessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetRemoteAccessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRemoteAccessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRemoteAccessSessionResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetRun',
  description: 'Gets information about a run.',
  operationId: 'GetRun',
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
        .literal('DeviceFarm_20150623.GetRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetRun'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRunRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRunResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetSuiteRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetSuite',
  description: 'Gets information about a suite.',
  operationId: 'GetSuite',
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
        .literal('DeviceFarm_20150623.GetSuite')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetSuite'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetSuiteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSuiteResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetTestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetTest',
  description: 'Gets information about a test.',
  operationId: 'GetTest',
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
        .literal('DeviceFarm_20150623.GetTest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetTest'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetTestRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTestResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetTestGridProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject',
  description: 'Retrieves information about a Selenium testing project.',
  operationId: 'GetTestGridProject',
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
        .literal('DeviceFarm_20150623.GetTestGridProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetTestGridProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTestGridProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTestGridProjectResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetTestGridSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession',
  description:
    '<p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>',
  operationId: 'GetTestGridSession',
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
        .literal('DeviceFarm_20150623.GetTestGridSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetTestGridSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTestGridSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTestGridSessionResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetUpload',
  description: 'Gets information about an upload.',
  operationId: 'GetUpload',
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
        .literal('DeviceFarm_20150623.GetUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetUpload'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetUploadRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUploadResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623GetVPCEConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration',
  description:
    'Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.',
  operationId: 'GetVPCEConfiguration',
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
        .literal('DeviceFarm_20150623.GetVPCEConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.GetVPCEConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetVPCEConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVPCEConfigurationResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession',
  description:
    'Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.',
  operationId: 'InstallToRemoteAccessSession',
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
        .literal('DeviceFarm_20150623.InstallToRemoteAccessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.InstallToRemoteAccessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InstallToRemoteAccessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InstallToRemoteAccessSessionResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListArtifactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListArtifacts',
  description: 'Gets information about artifacts.',
  operationId: 'ListArtifacts',
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
        .literal('DeviceFarm_20150623.ListArtifacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListArtifacts'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListArtifactsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListArtifactsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListDeviceInstancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances',
  description:
    'Returns information about the private device instances associated with one or more AWS accounts.',
  operationId: 'ListDeviceInstances',
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
        .literal('DeviceFarm_20150623.ListDeviceInstances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListDeviceInstances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDeviceInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceInstancesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListDevicePoolsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListDevicePools',
  description: 'Gets information about device pools.',
  operationId: 'ListDevicePools',
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
        .literal('DeviceFarm_20150623.ListDevicePools')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListDevicePools'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDevicePoolsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicePoolsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListDevicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListDevices',
  description: 'Gets information about unique device types.',
  operationId: 'ListDevices',
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
        .literal('DeviceFarm_20150623.ListDevices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListDevices'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListDevicesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListInstanceProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles',
  description: 'Returns information about all the instance profiles in an AWS account.',
  operationId: 'ListInstanceProfiles',
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
        .literal('DeviceFarm_20150623.ListInstanceProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListInstanceProfiles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListInstanceProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstanceProfilesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListJobs',
  description: 'Gets information about jobs for a given test run.',
  operationId: 'ListJobs',
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
        .literal('DeviceFarm_20150623.ListJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListJobs'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListJobsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListNetworkProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles',
  description: 'Returns the list of available network profiles.',
  operationId: 'ListNetworkProfiles',
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
        .literal('DeviceFarm_20150623.ListNetworkProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListNetworkProfiles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListNetworkProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNetworkProfilesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListOfferingPromotionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions',
  description:
    'Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.',
  operationId: 'ListOfferingPromotions',
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
        .literal('DeviceFarm_20150623.ListOfferingPromotions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListOfferingPromotions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOfferingPromotionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOfferingPromotionsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListOfferingTransactionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions',
  description:
    'Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.',
  operationId: 'ListOfferingTransactions',
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
        .literal('DeviceFarm_20150623.ListOfferingTransactions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListOfferingTransactions'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOfferingTransactionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOfferingTransactionsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListOfferingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListOfferings',
  description:
    'Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.',
  operationId: 'ListOfferings',
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
        .literal('DeviceFarm_20150623.ListOfferings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListOfferings'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOfferingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOfferingsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListProjects',
  description: 'Gets information about projects.',
  operationId: 'ListProjects',
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
        .literal('DeviceFarm_20150623.ListProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListProjects'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListProjectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions',
  description: 'Returns a list of all currently running remote access sessions.',
  operationId: 'ListRemoteAccessSessions',
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
        .literal('DeviceFarm_20150623.ListRemoteAccessSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListRemoteAccessSessions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRemoteAccessSessionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRemoteAccessSessionsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListRunsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListRuns',
  description: 'Gets information about runs, given an AWS Device Farm project ARN.',
  operationId: 'ListRuns',
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
        .literal('DeviceFarm_20150623.ListRuns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListRuns'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListRunsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRunsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListSamplesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListSamples',
  description: 'Gets information about samples, given an AWS Device Farm job ARN.',
  operationId: 'ListSamples',
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
        .literal('DeviceFarm_20150623.ListSamples')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListSamples'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListSamplesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSamplesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListSuitesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListSuites',
  description: 'Gets information about test suites for a given job.',
  operationId: 'ListSuites',
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
        .literal('DeviceFarm_20150623.ListSuites')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListSuites'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListSuitesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSuitesResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource',
  description: 'List the tags for an AWS Device Farm resource.',
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
        .literal('DeviceFarm_20150623.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTagsForResource'] },
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
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TagOperationException',
      content: { 'application/json': { schema: TagOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTestGridProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects',
  description: 'Gets a list of all Selenium testing projects in your account.',
  operationId: 'ListTestGridProjects',
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
        .literal('DeviceFarm_20150623.ListTestGridProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTestGridProjects'] },
          },
        }),
    }),
    query: z.object({
      maxResult: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResult',
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
      content: { 'application/json': { schema: ListTestGridProjectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTestGridProjectsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTestGridSessionActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions',
  description: 'Returns a list of the actions taken in a <a>TestGridSession</a>.',
  operationId: 'ListTestGridSessionActions',
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
        .literal('DeviceFarm_20150623.ListTestGridSessionActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTestGridSessionActions'] },
          },
        }),
    }),
    query: z.object({
      maxResult: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResult',
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
      content: { 'application/json': { schema: ListTestGridSessionActionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTestGridSessionActionsResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts',
  description: 'Retrieves a list of artifacts created during the session.',
  operationId: 'ListTestGridSessionArtifacts',
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
        .literal('DeviceFarm_20150623.ListTestGridSessionArtifacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTestGridSessionArtifacts'] },
          },
        }),
    }),
    query: z.object({
      maxResult: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResult',
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
      content: { 'application/json': { schema: ListTestGridSessionArtifactsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTestGridSessionArtifactsResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTestGridSessionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions',
  description: 'Retrieves a list of sessions for a <a>TestGridProject</a>.',
  operationId: 'ListTestGridSessions',
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
        .literal('DeviceFarm_20150623.ListTestGridSessions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTestGridSessions'] },
          },
        }),
    }),
    query: z.object({
      maxResult: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResult',
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
      content: { 'application/json': { schema: ListTestGridSessionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTestGridSessionsResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListTestsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListTests',
  description: 'Gets information about tests in a given test suite.',
  operationId: 'ListTests',
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
        .literal('DeviceFarm_20150623.ListTests')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListTests'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTestsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTestsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListUniqueProblemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems',
  description:
    '<p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>',
  operationId: 'ListUniqueProblems',
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
        .literal('DeviceFarm_20150623.ListUniqueProblems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListUniqueProblems'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListUniqueProblemsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUniqueProblemsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListUploadsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListUploads',
  description: 'Gets information about uploads, given an AWS Device Farm project ARN.',
  operationId: 'ListUploads',
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
        .literal('DeviceFarm_20150623.ListUploads')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListUploads'] },
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListUploadsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUploadsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ListVPCEConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations',
  description:
    'Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.',
  operationId: 'ListVPCEConfigurations',
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
        .literal('DeviceFarm_20150623.ListVPCEConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ListVPCEConfigurations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVPCEConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVPCEConfigurationsResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623PurchaseOfferingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering',
  description:
    'Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.',
  operationId: 'PurchaseOffering',
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
        .literal('DeviceFarm_20150623.PurchaseOffering')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.PurchaseOffering'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PurchaseOfferingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PurchaseOfferingResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623RenewOfferingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.RenewOffering',
  description:
    'Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.',
  operationId: 'RenewOffering',
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
        .literal('DeviceFarm_20150623.RenewOffering')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.RenewOffering'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RenewOfferingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RenewOfferingResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'NotEligibleException',
      content: { 'application/json': { schema: NotEligibleExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623ScheduleRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.ScheduleRun',
  description: 'Schedules a run.',
  operationId: 'ScheduleRun',
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
        .literal('DeviceFarm_20150623.ScheduleRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.ScheduleRun'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScheduleRunRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ScheduleRunResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'IdempotencyException',
      content: { 'application/json': { schema: IdempotencyExceptionSchema } },
    },
    484: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623StopJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.StopJob',
  description:
    'Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.',
  operationId: 'StopJob',
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
        .literal('DeviceFarm_20150623.StopJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.StopJob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopJobRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopJobResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623StopRemoteAccessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession',
  description: 'Ends a specified remote access session.',
  operationId: 'StopRemoteAccessSession',
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
        .literal('DeviceFarm_20150623.StopRemoteAccessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.StopRemoteAccessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopRemoteAccessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopRemoteAccessSessionResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623StopRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.StopRun',
  description:
    'Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.',
  operationId: 'StopRun',
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
        .literal('DeviceFarm_20150623.StopRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.StopRun'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopRunRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopRunResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.TagResource',
  description:
    'Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.',
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
        .literal('DeviceFarm_20150623.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.TagResource'] },
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
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TagOperationException',
      content: { 'application/json': { schema: TagOperationExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UntagResource',
  description: 'Deletes the specified tags from a resource.',
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
        .literal('DeviceFarm_20150623.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UntagResource'] },
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
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TagOperationException',
      content: { 'application/json': { schema: TagOperationExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateDeviceInstanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance',
  description: 'Updates information about a private device instance.',
  operationId: 'UpdateDeviceInstance',
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
        .literal('DeviceFarm_20150623.UpdateDeviceInstance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateDeviceInstance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDeviceInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeviceInstanceResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateDevicePoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool',
  description:
    'Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).',
  operationId: 'UpdateDevicePool',
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
        .literal('DeviceFarm_20150623.UpdateDevicePool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateDevicePool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDevicePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDevicePoolResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateInstanceProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile',
  description: 'Updates information about an existing private device instance profile.',
  operationId: 'UpdateInstanceProfile',
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
        .literal('DeviceFarm_20150623.UpdateInstanceProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateInstanceProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInstanceProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateInstanceProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile',
  description: 'Updates the network profile.',
  operationId: 'UpdateNetworkProfile',
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
        .literal('DeviceFarm_20150623.UpdateNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNetworkProfileResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateProject',
  description: 'Modifies the specified project name, given the project ARN and a new name.',
  operationId: 'UpdateProject',
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
        .literal('DeviceFarm_20150623.UpdateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateTestGridProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject',
  description: 'Change details of a project.',
  operationId: 'UpdateTestGridProject',
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
        .literal('DeviceFarm_20150623.UpdateTestGridProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateTestGridProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTestGridProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTestGridProjectResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateUploadRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateUpload',
  description: 'Updates an uploaded test spec.',
  operationId: 'UpdateUpload',
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
        .literal('DeviceFarm_20150623.UpdateUpload')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateUpload'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateUploadRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUploadResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
  },
})

export const postXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration',
  description:
    'Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.',
  operationId: 'UpdateVPCEConfiguration',
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
        .literal('DeviceFarm_20150623.UpdateVPCEConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['DeviceFarm_20150623.UpdateVPCEConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVPCEConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVPCEConfigurationResultSchema } },
    },
    480: {
      description: 'ArgumentException',
      content: { 'application/json': { schema: ArgumentExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceAccountException',
      content: { 'application/json': { schema: ServiceAccountExceptionSchema } },
    },
    483: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
  },
})
