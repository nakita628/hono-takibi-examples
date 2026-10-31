import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const AssociateServiceRoleToAccountResponseSchema = z
  .object({
    associatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'AssociatedAt' },
          description:
            'The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateServiceRoleToAccountResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const IoTThingNameSchema = z.string().min(1).max(128).openapi('IoTThingName')

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

const AssociateClientDeviceWithCoreDeviceErrorEntrySchema = z
  .object({
    thingName: IoTThingNameSchema.and(
      z.any().openapi({ description: 'The name of the IoT thing whose associate request failed.' }),
    ).exactOptional(),
    code: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The error code for the request.' }),
    ).exactOptional(),
    message: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message that provides additional information about the error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.',
    required: [],
  })
  .openapi('AssociateClientDeviceWithCoreDeviceErrorEntry')

const AssociateClientDeviceWithCoreDeviceErrorListSchema = z
  .array(AssociateClientDeviceWithCoreDeviceErrorEntrySchema)
  .max(100)
  .openapi('AssociateClientDeviceWithCoreDeviceErrorList')

const BatchAssociateClientDeviceWithCoreDeviceResponseSchema = z
  .object({
    errorEntries: AssociateClientDeviceWithCoreDeviceErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of any errors for the entries in the request. Each error entry contains the name of the IoT thing that failed to associate.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateClientDeviceWithCoreDeviceResponse')

const AssociateClientDeviceWithCoreDeviceEntrySchema = z
  .object({
    thingName: IoTThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the IoT thing that represents the client device to associate.',
        }),
    ),
  })
  .openapi({
    required: ['thingName'],
    description:
      'Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.',
  })
  .openapi('AssociateClientDeviceWithCoreDeviceEntry')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const DisassociateClientDeviceFromCoreDeviceErrorEntrySchema = z
  .object({
    thingName: IoTThingNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the IoT thing whose disassociate request failed.' }),
    ).exactOptional(),
    code: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The error code for the request.' }),
    ).exactOptional(),
    message: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message that provides additional information about the error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an error that occurs from a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.',
    required: [],
  })
  .openapi('DisassociateClientDeviceFromCoreDeviceErrorEntry')

const DisassociateClientDeviceFromCoreDeviceErrorListSchema = z
  .array(DisassociateClientDeviceFromCoreDeviceErrorEntrySchema)
  .max(100)
  .openapi('DisassociateClientDeviceFromCoreDeviceErrorList')

const BatchDisassociateClientDeviceFromCoreDeviceResponseSchema = z
  .object({
    errorEntries: DisassociateClientDeviceFromCoreDeviceErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of any errors for the entries in the request. Each error entry contains the name of the IoT thing that failed to disassociate.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateClientDeviceFromCoreDeviceResponse')

const DisassociateClientDeviceFromCoreDeviceEntrySchema = z
  .object({
    thingName: IoTThingNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IoT thing that represents the client device to disassociate.',
        }),
    ),
  })
  .openapi({
    required: ['thingName'],
    description:
      'Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.',
  })
  .openapi('DisassociateClientDeviceFromCoreDeviceEntry')

const CancelDeploymentResponseSchema = z
  .object({
    message: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'A message that communicates if the cancel was successful.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelDeploymentResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ComponentVersionARNSchema = z
  .string()
  .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+/)
  .openapi('ComponentVersionARN')

const ComponentNameStringSchema = z.string().min(1).max(128).openapi('ComponentNameString')

const ComponentVersionStringSchema = z.string().min(1).max(64).openapi('ComponentVersionString')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const CloudComponentStateSchema = z
  .enum(['REQUESTED', 'INITIATED', 'DEPLOYABLE', 'FAILED', 'DEPRECATED'])
  .openapi('CloudComponentState')

const StringMapSchema = z.record(z.string(), NonEmptyStringSchema).openapi('StringMap')

const VendorGuidanceSchema = z.enum(['ACTIVE', 'DISCONTINUED', 'DELETED']).openapi('VendorGuidance')

const CloudComponentStatusSchema = z
  .object({
    componentState: CloudComponentStateSchema.and(
      z.any().openapi({ description: 'The state of the component version.' }),
    ).exactOptional(),
    message: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that communicates details, such as errors, about the status of the component version.',
        }),
    ).exactOptional(),
    errors: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A dictionary of errors that communicate why the component version is in an error state. For example, if IoT Greengrass can't access an artifact for the component version, then <code>errors</code> contains the artifact's URI as a key, and the error message as the value for that key.",
        }),
    ).exactOptional(),
    vendorGuidance: VendorGuidanceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The vendor guidance state for the component version. This state indicates whether the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:</p> <ul> <li> <p> <code>ACTIVE</code> – This component version is available and recommended for use.</p> </li> <li> <p> <code>DISCONTINUED</code> – This component version has been discontinued by its publisher. You can deploy this component version, but we recommend that you use a different version of this component.</p> </li> <li> <p> <code>DELETED</code> – This component version has been deleted by its publisher, so you can't deploy it. If you have any existing deployments that specify this component version, those deployments will fail.</p> </li> </ul>",
        }),
    ).exactOptional(),
    vendorGuidanceMessage: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that communicates details about the vendor guidance state of the component version. This message communicates why a component version is discontinued or deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the status of a component version in the IoT Greengrass service.',
    required: [],
  })
  .openapi('CloudComponentStatus')

const CreateComponentVersionResponseSchema = z
  .object({
    arn: ComponentVersionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the component was created, expressed in ISO 8601 format.',
        }),
    ),
    status: CloudComponentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the component version in IoT Greengrass V2. This status is different from the status of the component on a core device.',
        }),
    ),
  })
  .openapi({ required: ['componentName', 'componentVersion', 'creationTimestamp', 'status'] })
  .openapi('CreateComponentVersionResponse')

const PlatformAttributesMapSchema = z
  .record(z.string(), NonEmptyStringSchema)
  .openapi('PlatformAttributesMap')

const ComponentPlatformSchema = z
  .object({
    name: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The friendly name of the platform. This name helps you identify the platform.</p> <p>If you omit this parameter, IoT Greengrass creates a friendly name from the <code>os</code> and <code>architecture</code> of the platform.</p>',
        }),
    ).exactOptional(),
    attributes: PlatformAttributesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A dictionary of attributes for the platform. The IoT Greengrass Core software defines the <code>os</code> and <code>architecture</code> by default. You can specify additional platform attributes for a core device when you deploy the Greengrass nucleus component. For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html">Greengrass nucleus component</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a platform that a component supports.',
    required: [],
  })
  .openapi('ComponentPlatform')

const ComponentPlatformListSchema = z
  .array(ComponentPlatformSchema)
  .openapi('ComponentPlatformList')

const ComponentDependencyTypeSchema = z.enum(['HARD', 'SOFT']).openapi('ComponentDependencyType')

const ComponentDependencyRequirementSchema = z
  .object({
    versionRequirement: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The component version requirement for the component dependency.</p> <p>IoT Greengrass V2 uses semantic version constraints. For more information, see <a href="https://semver.org/">Semantic Versioning</a>.</p>',
        }),
    ).exactOptional(),
    dependencyType: ComponentDependencyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of this dependency. Choose from the following options:</p> <ul> <li> <p> <code>SOFT</code> – The component doesn't restart if the dependency changes state.</p> </li> <li> <p> <code>HARD</code> – The component restarts if the dependency changes state.</p> </li> </ul> <p>Default: <code>HARD</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a component dependency for a Lambda function component.',
    required: [],
  })
  .openapi('ComponentDependencyRequirement')

const ComponentDependencyMapSchema = z
  .record(z.string(), ComponentDependencyRequirementSchema)
  .openapi('ComponentDependencyMap')

const TopicStringSchema = z.string().openapi('TopicString')

const LambdaEventSourceTypeSchema = z.enum(['PUB_SUB', 'IOT_CORE']).openapi('LambdaEventSourceType')

const LambdaEventSourceSchema = z
  .object({
    topic: TopicStringSchema.and(
      z
        .any()
        .openapi({ description: 'The topic to which to subscribe to receive event messages.' }),
    ),
    type: LambdaEventSourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of event source. Choose from the following options:</p> <ul> <li> <p> <code>PUB_SUB</code> – Subscribe to local publish/subscribe messages. This event source type doesn't support MQTT wildcards (<code>+</code> and <code>#</code>) in the event source topic.</p> </li> <li> <p> <code>IOT_CORE</code> – Subscribe to Amazon Web Services IoT Core MQTT messages. This event source type supports MQTT wildcards (<code>+</code> and <code>#</code>) in the event source topic.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['topic', 'type'],
    description:
      'Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.',
  })
  .openapi('LambdaEventSource')

const LambdaEventSourceListSchema = z
  .array(LambdaEventSourceSchema)
  .openapi('LambdaEventSourceList')

const OptionalIntegerSchema = z.int().openapi('OptionalInteger')

const OptionalBooleanSchema = z.boolean().openapi('OptionalBoolean')

const LambdaInputPayloadEncodingTypeSchema = z
  .enum(['json', 'binary'])
  .openapi('LambdaInputPayloadEncodingType')

const LambdaExecArgSchema = z.string().openapi('LambdaExecArg')

const LambdaExecArgsListSchema = z.array(LambdaExecArgSchema).openapi('LambdaExecArgsList')

const LambdaEnvironmentVariablesSchema = z
  .record(z.string(), StringSchema)
  .openapi('LambdaEnvironmentVariables')

const LambdaIsolationModeSchema = z
  .enum(['GreengrassContainer', 'NoContainer'])
  .openapi('LambdaIsolationMode')

const FileSystemPathSchema = z.string().openapi('FileSystemPath')

const LambdaFilesystemPermissionSchema = z.enum(['ro', 'rw']).openapi('LambdaFilesystemPermission')

const LambdaVolumeMountSchema = z
  .object({
    sourcePath: FileSystemPathSchema.and(
      z.any().openapi({ description: 'The path to the physical volume in the file system.' }),
    ),
    destinationPath: FileSystemPathSchema.and(
      z.any().openapi({ description: 'The path to the logical volume in the file system.' }),
    ),
    permission: LambdaFilesystemPermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The permission to access the volume: read/only (<code>ro</code>) or read/write (<code>rw</code>).</p> <p>Default: <code>ro</code> </p>',
        }),
    ).exactOptional(),
    addGroupOwner: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether or not to add the IoT Greengrass user group as an owner of the volume.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['sourcePath', 'destinationPath'],
    description:
      'Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.',
  })
  .openapi('LambdaVolumeMount')

const LambdaVolumeListSchema = z.array(LambdaVolumeMountSchema).openapi('LambdaVolumeList')

const LambdaDeviceMountSchema = z
  .object({
    path: FileSystemPathSchema.and(
      z.any().openapi({ description: 'The mount path for the device in the file system.' }),
    ),
    permission: LambdaFilesystemPermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The permission to access the device: read/only (<code>ro</code>) or read/write (<code>rw</code>).</p> <p>Default: <code>ro</code> </p>',
        }),
    ).exactOptional(),
    addGroupOwner: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether or not to add the component's system user as an owner of the device.</p> <p>Default: <code>false</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['path'],
    description:
      'Contains information about a device that Linux processes in a container can access.',
  })
  .openapi('LambdaDeviceMount')

const LambdaDeviceListSchema = z.array(LambdaDeviceMountSchema).openapi('LambdaDeviceList')

const LambdaContainerParamsSchema = z
  .object({
    memorySizeInKB: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The memory size of the container, expressed in kilobytes.</p> <p>Default: <code>16384</code> (16 MB)</p>',
        }),
    ).exactOptional(),
    mountROSysfs: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether or not the container can read information from the device's <code>/sys</code> folder.</p> <p>Default: <code>false</code> </p>",
        }),
    ).exactOptional(),
    volumes: LambdaVolumeListSchema.and(
      z.any().openapi({ description: 'The list of volumes that the container can access.' }),
    ).exactOptional(),
    devices: LambdaDeviceListSchema.and(
      z.any().openapi({ description: 'The list of system devices that the container can access.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a container in which Lambda functions run on Greengrass core devices.',
    required: [],
  })
  .openapi('LambdaContainerParams')

const LambdaLinuxProcessParamsSchema = z
  .object({
    isolationMode: LambdaIsolationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The isolation mode for the process that contains the Lambda function. The process can run in an isolated runtime environment inside the IoT Greengrass container, or as a regular process outside any container.</p> <p>Default: <code>GreengrassContainer</code> </p>',
        }),
    ).exactOptional(),
    containerParams: LambdaContainerParamsSchema.and(
      z
        .any()
        .openapi({
          description: 'The parameters for the container in which the Lambda function runs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains parameters for a Linux process that contains an Lambda function.',
    required: [],
  })
  .openapi('LambdaLinuxProcessParams')

const LambdaExecutionParametersSchema = z
  .object({
    eventSources: LambdaEventSourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of event sources to which to subscribe to receive work messages. The Lambda function runs when it receives a message from an event source. You can subscribe this function to local publish/subscribe messages and Amazon Web Services IoT Core MQTT messages.',
        }),
    ).exactOptional(),
    maxQueueSize: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size of the message queue for the Lambda function component. The IoT Greengrass core stores messages in a FIFO (first-in-first-out) queue until it can run the Lambda function to consume each message.',
        }),
    ).exactOptional(),
    maxInstancesCount: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances that a non-pinned Lambda function can run at the same time.',
        }),
    ).exactOptional(),
    maxIdleTimeInSeconds: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time in seconds that a non-pinned Lambda function can idle before the IoT Greengrass Core software stops its process.',
        }),
    ).exactOptional(),
    timeoutInSeconds: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum amount of time in seconds that the Lambda function can process a work item.',
        }),
    ).exactOptional(),
    statusTimeoutInSeconds: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The interval in seconds at which a pinned (also known as long-lived) Lambda function component sends status updates to the Lambda manager component.',
        }),
    ).exactOptional(),
    pinned: OptionalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether or not the Lambda function is pinned, or long-lived.</p> <ul> <li> <p>A pinned Lambda function starts when IoT Greengrass starts and keeps running in its own container.</p> </li> <li> <p>A non-pinned Lambda function starts only when it receives a work item and exists after it idles for <code>maxIdleTimeInSeconds</code>. If the function has multiple work items, the IoT Greengrass Core software creates multiple instances of the function.</p> </li> </ul> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    inputPayloadEncodingType: LambdaInputPayloadEncodingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The encoding type that the Lambda function supports.</p> <p>Default: <code>json</code> </p>',
        }),
    ).exactOptional(),
    execArgs: LambdaExecArgsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of arguments to pass to the Lambda function when it runs.',
        }),
    ).exactOptional(),
    environmentVariables: LambdaEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The map of environment variables that are available to the Lambda function when it runs.',
        }),
    ).exactOptional(),
    linuxProcessParams: LambdaLinuxProcessParamsSchema.and(
      z
        .any()
        .openapi({
          description: 'The parameters for the Linux process that contains the Lambda function.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains parameters for a Lambda function that runs on IoT Greengrass.',
    required: [],
  })
  .openapi('LambdaExecutionParameters')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const RequestAlreadyInProgressExceptionSchema = z.any().openapi('RequestAlreadyInProgressException')

const IoTJobARNSchema = z
  .string()
  .regex(/arn:[^:]*:iot:[^:]+:[0-9]+:job\/.+/)
  .openapi('IoTJobARN')

const CreateDeploymentResponseSchema = z
  .object({
    deploymentId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the deployment.' }),
    ).exactOptional(),
    iotJobId: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
    iotJobArn: IoTJobARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDeploymentResponse')

const ComponentConfigurationStringSchema = z
  .string()
  .min(1)
  .max(10485760)
  .openapi('ComponentConfigurationString')

const ComponentConfigurationPathSchema = z
  .string()
  .min(0)
  .max(256)
  .openapi('ComponentConfigurationPath')

const ComponentConfigurationPathListSchema = z
  .array(ComponentConfigurationPathSchema)
  .openapi('ComponentConfigurationPathList')

const ComponentConfigurationUpdateSchema = z
  .object({
    merge: ComponentConfigurationStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A serialized JSON string that contains the configuration object to merge to target devices. The core device merges this configuration with the component's existing configuration. If this is the first time a component deploys on a device, the core device merges this configuration with the component's default configuration. This means that the core device keeps it's existing configuration for keys and values that you don't specify in this object. For more information, see <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#merge-configuration-update\">Merge configuration updates</a> in the <i>IoT Greengrass V2 Developer Guide</i>.",
        }),
    ).exactOptional(),
    reset: ComponentConfigurationPathListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of configuration nodes to reset to default values on target devices. Use JSON pointers to specify each node to reset. JSON pointers start with a forward slash (<code>/</code>) and use forward slashes to separate the key for each level in the object. For more information, see the <a href="https://tools.ietf.org/html/rfc6901">JSON pointer specification</a> and <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#reset-configuration-update">Reset configuration updates</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a deployment\'s update to a component\'s configuration on Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
    required: [],
  })
  .openapi('ComponentConfigurationUpdate')

const MemorySchema = z.int().min(0).max(9223372036854772000).openapi('Memory')

const CPUSchema = z.float64().min(0).openapi('CPU')

const SystemResourceLimitsSchema = z
  .object({
    memory: MemorySchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum amount of RAM, expressed in kilobytes, that a component's processes can use on the core device.",
        }),
    ).exactOptional(),
    cpus: CPUSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum amount of CPU time that a component's processes can use on the core device. A core device's total CPU time is equivalent to the device's number of CPU cores. For example, on a core device with 4 CPU cores, you can set this value to <code>2</code> to limit the component's processes to 50 percent usage of each CPU core. On a device with 1 CPU core, you can set this value to <code>0.25</code> to limit the component's processes to 25 percent usage of the CPU. If you set this value to a number greater than the number of CPU cores, the IoT Greengrass Core software doesn't limit the component's CPU usage.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about system resource limits that the IoT Greengrass Core software applies to a component\'s processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.',
    required: [],
  })
  .openapi('SystemResourceLimits')

const ComponentRunWithSchema = z
  .object({
    posixUser: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The POSIX system user and, optionally, group to use to run this component on Linux core devices. The user, and group if specified, must exist on each Linux core device. Specify the user and group separated by a colon (<code>:</code>) in the following format: <code>user:group</code>. The group is optional. If you don\'t specify a group, the IoT Greengrass Core software uses the primary user for the group.</p> <p>If you omit this parameter, the IoT Greengrass Core software uses the default system user and group that you configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a>.</p>',
        }),
    ).exactOptional(),
    systemResourceLimits: SystemResourceLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The system resource limits to apply to this component\'s process on the core device. IoT Greengrass currently supports this feature on only Linux core devices.</p> <p>If you omit this parameter, the IoT Greengrass Core software uses the default system resource limits that you configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.</p>',
        }),
    ).exactOptional(),
    windowsUser: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Windows user to use to run this component on Windows core devices. The user must exist on each Windows core device, and its name and password must be in the LocalSystem account\'s Credentials Manager instance.</p> <p>If you omit this parameter, the IoT Greengrass Core software uses the default Windows user that you configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
    required: [],
  })
  .openapi('ComponentRunWith')

const ComponentDeploymentSpecificationSchema = z
  .object({
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    configurationUpdate: ComponentConfigurationUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration updates to deploy for the component. You can define <i>reset</i> updates and <i>merge</i> updates. A reset updates the keys that you specify to the default configuration for the component. A merge updates the core device\'s component configuration with the keys and values that you specify. The IoT Greengrass Core software applies reset updates before it applies merge updates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
    runWith: ComponentRunWithSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system user and group that the IoT Greengrass Core software uses to run component processes on the core device. If you omit this parameter, the IoT Greengrass Core software uses the system user and group that you configure for the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a component to deploy.', required: [] })
  .openapi('ComponentDeploymentSpecification')

const IoTJobRolloutBaseRatePerMinuteSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('IoTJobRolloutBaseRatePerMinute')

const IoTJobRolloutIncrementFactorSchema = z
  .float64()
  .min(1)
  .max(5)
  .openapi('IoTJobRolloutIncrementFactor')

const IoTJobNumberOfThingsSchema = z.int().min(1).openapi('IoTJobNumberOfThings')

const IoTJobRateIncreaseCriteriaSchema = z
  .object({
    numberOfNotifiedThings: IoTJobNumberOfThingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices to receive the job notification before the rollout rate increases.',
        }),
    ).exactOptional(),
    numberOfSucceededThings: IoTJobNumberOfThingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of devices to successfully run the configuration job before the rollout rate increases.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.',
    required: [],
  })
  .openapi('IoTJobRateIncreaseCriteria')

const IoTJobExponentialRolloutRateSchema = z
  .object({
    baseRatePerMinute: IoTJobRolloutBaseRatePerMinuteSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of devices that receive a pending job notification, per minute, when the job starts. This parameter defines the initial rollout rate of the job.',
        }),
    ),
    incrementFactor: IoTJobRolloutIncrementFactorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The exponential factor to increase the rollout rate for the job.</p> <p>This parameter supports up to one digit after the decimal (for example, you can specify <code>1.5</code>, but not <code>1.55</code>).</p>',
        }),
    ),
    rateIncreaseCriteria: IoTJobRateIncreaseCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to increase the rollout rate for the job.' }),
    ),
  })
  .openapi({
    required: ['baseRatePerMinute', 'incrementFactor', 'rateIncreaseCriteria'],
    description:
      'Contains information about an exponential rollout rate for a configuration deployment job.',
  })
  .openapi('IoTJobExponentialRolloutRate')

const IoTJobMaxExecutionsPerMinSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('IoTJobMaxExecutionsPerMin')

const IoTJobExecutionsRolloutConfigSchema = z
  .object({
    exponentialRate: IoTJobExponentialRolloutRateSchema.and(
      z.any().openapi({ description: 'The exponential rate to increase the job rollout rate.' }),
    ).exactOptional(),
    maximumPerMinute: IoTJobMaxExecutionsPerMinSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of devices that receive a pending job notification, per minute.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.',
    required: [],
  })
  .openapi('IoTJobExecutionsRolloutConfig')

const IoTJobExecutionFailureTypeSchema = z
  .enum(['FAILED', 'REJECTED', 'TIMED_OUT', 'ALL'])
  .openapi('IoTJobExecutionFailureType')

const IoTJobAbortActionSchema = z.literal('CANCEL').openapi('IoTJobAbortAction')

const IoTJobAbortThresholdPercentageSchema = z
  .float64()
  .max(100)
  .openapi('IoTJobAbortThresholdPercentage')

const IoTJobMinimumNumberOfExecutedThingsSchema = z
  .int()
  .min(1)
  .openapi('IoTJobMinimumNumberOfExecutedThings')

const IoTJobAbortCriteriaSchema = z
  .object({
    failureType: IoTJobExecutionFailureTypeSchema.and(
      z.any().openapi({ description: 'The type of job deployment failure that can cancel a job.' }),
    ),
    action: IoTJobAbortActionSchema.and(
      z.any().openapi({ description: 'The action to perform when the criteria are met.' }),
    ),
    thresholdPercentage: IoTJobAbortThresholdPercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum percentage of <code>failureType</code> failures that occur before the job can cancel.</p> <p>This parameter supports up to two digits after the decimal (for example, you can specify <code>10.9</code> or <code>10.99</code>, but not <code>10.999</code>).</p>',
        }),
    ),
    minNumberOfExecutedThings: IoTJobMinimumNumberOfExecutedThingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of things that receive the configuration before the job can cancel.',
        }),
    ),
  })
  .openapi({
    required: ['failureType', 'action', 'thresholdPercentage', 'minNumberOfExecutedThings'],
    description:
      '<p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>',
  })
  .openapi('IoTJobAbortCriteria')

const IoTJobAbortCriteriaListSchema = z
  .array(IoTJobAbortCriteriaSchema)
  .min(1)
  .openapi('IoTJobAbortCriteriaList')

const IoTJobAbortConfigSchema = z
  .object({
    criteriaList: IoTJobAbortCriteriaListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of criteria that define when and how to cancel the configuration deployment.',
        }),
    ),
  })
  .openapi({
    required: ['criteriaList'],
    description:
      'Contains a list of criteria that define when and how to cancel a configuration deployment.',
  })
  .openapi('IoTJobAbortConfig')

const IoTJobInProgressTimeoutInMinutesSchema = z.int().openapi('IoTJobInProgressTimeoutInMinutes')

const IoTJobTimeoutConfigSchema = z
  .object({
    inProgressTimeoutInMinutes: IoTJobInProgressTimeoutInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in minutes, that devices have to complete the job. The timer starts when the job status is set to <code>IN_PROGRESS</code>. If the job status doesn't change to a terminal state before the time expires, then the job status is set to <code>TIMED_OUT</code>.</p> <p>The timeout interval must be between 1 minute and 7 days (10080 minutes).</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the timeout configuration for a job.',
    required: [],
  })
  .openapi('IoTJobTimeoutConfig')

const DeploymentFailureHandlingPolicySchema = z
  .enum(['ROLLBACK', 'DO_NOTHING'])
  .openapi('DeploymentFailureHandlingPolicy')

const DeploymentComponentUpdatePolicyActionSchema = z
  .enum(['NOTIFY_COMPONENTS', 'SKIP_NOTIFY_COMPONENTS'])
  .openapi('DeploymentComponentUpdatePolicyAction')

const DeploymentComponentUpdatePolicySchema = z
  .object({
    timeoutInSeconds: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time in seconds that each component on a device has to report that it's safe to update. If the component waits for longer than this timeout, then the deployment proceeds on the device.</p> <p>Default: <code>60</code> </p>",
        }),
    ).exactOptional(),
    action: DeploymentComponentUpdatePolicyActionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether or not to notify components and wait for components to become safe to update. Choose from the following options:</p> <ul> <li> <p> <code>NOTIFY_COMPONENTS</code> – The deployment notifies each component before it stops and updates that component. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetocomponentupdates">SubscribeToComponentUpdates</a> IPC operation to receive these notifications. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-defercomponentupdate">DeferComponentUpdate</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </li> <li> <p> <code>SKIP_NOTIFY_COMPONENTS</code> – The deployment doesn\'t notify components or wait for them to be safe to update.</p> </li> </ul> <p>Default: <code>NOTIFY_COMPONENTS</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p>",
    required: [],
  })
  .openapi('DeploymentComponentUpdatePolicy')

const DeploymentConfigurationValidationPolicySchema = z
  .object({
    timeoutInSeconds: OptionalIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time in seconds that a component can validate its configuration updates. If the validation time exceeds this timeout, then the deployment proceeds for the device.</p> <p>Default: <code>30</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
    required: [],
  })
  .openapi('DeploymentConfigurationValidationPolicy')

const PublisherStringSchema = z.string().openapi('PublisherString')

const DescriptionStringSchema = z.string().openapi('DescriptionString')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const DescribeComponentResponseSchema = z
  .object({
    arn: ComponentVersionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the component was created, expressed in ISO 8601 format.',
        }),
    ).exactOptional(),
    publisher: PublisherStringSchema.and(
      z.any().openapi({ description: 'The publisher of the component version.' }),
    ).exactOptional(),
    description: DescriptionStringSchema.and(
      z.any().openapi({ description: 'The description of the component version.' }),
    ).exactOptional(),
    status: CloudComponentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the component version in IoT Greengrass V2. This status is different from the status of the component on a core device.',
        }),
    ).exactOptional(),
    platforms: ComponentPlatformListSchema.and(
      z.any().openapi({ description: 'The platforms that the component version supports.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeComponentResponse')

const DisassociateServiceRoleFromAccountResponseSchema = z
  .object({
    disassociatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'DisassociatedAt' },
          description:
            'The time when the service role was disassociated from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateServiceRoleFromAccountResponse')

const RecipeOutputFormatSchema = z.enum(['JSON', 'YAML']).openapi('RecipeOutputFormat')

const RecipeBlobSchema = z.string().openapi('RecipeBlob')

const GetComponentResponseSchema = z
  .object({
    recipeOutputFormat: RecipeOutputFormatSchema.and(
      z.any().openapi({ description: 'The format of the recipe.' }),
    ),
    recipe: RecipeBlobSchema.and(
      z.any().openapi({ description: 'The recipe of the component version.' }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['recipeOutputFormat', 'recipe'] })
  .openapi('GetComponentResponse')

const GetComponentVersionArtifactResponseSchema = z
  .object({
    preSignedUrl: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The URL of the artifact.' }),
    ),
  })
  .openapi({ required: ['preSignedUrl'] })
  .openapi('GetComponentVersionArtifactResponse')

const PortNumberIntSchema = z.int().min(0).max(65535).openapi('PortNumberInt')

const ConnectivityInfoSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'Id' }, description: 'An ID for the connectivity information.' }),
    ).exactOptional(),
    hostAddress: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'HostAddress' },
          description:
            'The IP address or DNS address where client devices can connect to an MQTT broker on the Greengrass core device.',
        }),
    ).exactOptional(),
    portNumber: PortNumberIntSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'PortNumber' },
          description:
            'The port where the MQTT broker operates on the core device. This port is typically 8883, which is the default port for the MQTT broker component that runs on core devices.',
        }),
    ).exactOptional(),
    metadata: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Metadata' },
          description:
            'Additional metadata to provide to client devices that connect to this core device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device.',
    required: [],
  })
  .openapi('ConnectivityInfo')

const ConnectivityInfoListSchema = z.array(ConnectivityInfoSchema).openapi('ConnectivityInfoList')

const GetConnectivityInfoResponseSchema = z
  .object({
    connectivityInfo: ConnectivityInfoListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ConnectivityInfo' },
          description: 'The connectivity information for the core device.',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Message' },
          description: 'A message about the connectivity information request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConnectivityInfoResponse')

const CoreDeviceThingNameSchema = z.string().min(1).max(128).openapi('CoreDeviceThingName')

const GGCVersionSchema = z.string().min(1).max(255).openapi('GGCVersion')

const CoreDevicePlatformStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('CoreDevicePlatformString')

const CoreDeviceArchitectureStringSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('CoreDeviceArchitectureString')

const CoreDeviceStatusSchema = z.enum(['HEALTHY', 'UNHEALTHY']).openapi('CoreDeviceStatus')

const GetCoreDeviceResponseSchema = z
  .object({
    coreDeviceThingName: CoreDeviceThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the core device. This is also the name of the IoT thing.',
        }),
    ).exactOptional(),
    coreVersion: GGCVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the IoT Greengrass Core software that the core device runs. This version is equivalent to the version of the Greengrass nucleus component that runs on the core device. For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html">Greengrass nucleus component</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
    platform: CoreDevicePlatformStringSchema.and(
      z.any().openapi({ description: 'The operating system platform that the core device runs.' }),
    ).exactOptional(),
    architecture: CoreDeviceArchitectureStringSchema.and(
      z.any().openapi({ description: 'The computer architecture of the core device.' }),
    ).exactOptional(),
    status: CoreDeviceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the core device. The core device status can be:</p> <ul> <li> <p> <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p> </li> <li> <p> <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state on the core device.</p> </li> </ul>',
        }),
    ).exactOptional(),
    lastStatusUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time at which the core device's status last updated, expressed in ISO 8601 format.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCoreDeviceResponse')

const TargetARNSchema = z
  .string()
  .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)\/.+/)
  .openapi('TargetARN')

const NullableStringSchema = z.string().openapi('NullableString')

const DeploymentStatusSchema = z
  .enum(['ACTIVE', 'COMPLETED', 'CANCELED', 'FAILED', 'INACTIVE'])
  .openapi('DeploymentStatus')

const ComponentDeploymentSpecificationsSchema = z
  .record(z.string(), ComponentDeploymentSpecificationSchema)
  .openapi('ComponentDeploymentSpecifications')

const DeploymentPoliciesSchema = z
  .object({
    failureHandlingPolicy: DeploymentFailureHandlingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The failure handling policy for the configuration deployment. This policy defines what to do if the deployment fails.</p> <p>Default: <code>ROLLBACK</code> </p>',
        }),
    ).exactOptional(),
    componentUpdatePolicy: DeploymentComponentUpdatePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "The component update policy for the configuration deployment. This policy defines when it's safe to deploy the configuration to devices.",
        }),
    ).exactOptional(),
    configurationValidationPolicy: DeploymentConfigurationValidationPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration validation policy for the configuration deployment. This policy defines how long each component has to validate its configure updates.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about policies that define how a deployment updates components and handles failure.',
    required: [],
  })
  .openapi('DeploymentPolicies')

const DeploymentIoTJobConfigurationSchema = z
  .object({
    jobExecutionsRolloutConfig: IoTJobExecutionsRolloutConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The rollout configuration for the job. This configuration defines the rate at which the job rolls out to the fleet of target devices.',
        }),
    ).exactOptional(),
    abortConfig: IoTJobAbortConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stop configuration for the job. This configuration defines when and how to stop a job rollout.',
        }),
    ).exactOptional(),
    timeoutConfig: IoTJobTimeoutConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timeout configuration for the job. This configuration defines the amount of time each device has to complete the job.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an IoT job configuration.', required: [] })
  .openapi('DeploymentIoTJobConfiguration')

const IsLatestForTargetSchema = z.boolean().openapi('IsLatestForTarget')

const ThingGroupARNSchema = z
  .string()
  .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup\/.+/)
  .openapi('ThingGroupARN')

const GetDeploymentResponseSchema = z
  .object({
    targetArn: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.',
        }),
    ).exactOptional(),
    revisionId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The revision number of the deployment.' }),
    ).exactOptional(),
    deploymentId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the deployment.' }),
    ).exactOptional(),
    deploymentName: NullableStringSchema.and(
      z.any().openapi({ description: 'The name of the deployment.' }),
    ).exactOptional(),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The status of the deployment.' }),
    ).exactOptional(),
    iotJobId: NullableStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
    iotJobArn: IoTJobARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
    components: ComponentDeploymentSpecificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.",
        }),
    ).exactOptional(),
    deploymentPolicies: DeploymentPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment policies for the deployment. These policies define how the deployment updates components and handles failure.',
        }),
    ).exactOptional(),
    iotJobConfiguration: DeploymentIoTJobConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job configuration for the deployment configuration. The job configuration specifies the rollout, timeout, and stop configurations for the deployment configuration.',
        }),
    ).exactOptional(),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the deployment was created, expressed in ISO 8601 format.',
        }),
    ).exactOptional(),
    isLatestForTarget: IsLatestForTargetSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether or not the deployment is the latest revision for its target.',
        }),
    ).exactOptional(),
    parentTargetArn: ThingGroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parent deployment\'s target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentResponse')

const GetServiceRoleForAccountResponseSchema = z
  .object({
    associatedAt: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'AssociatedAt' },
          description:
            'The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
        }),
    ).exactOptional(),
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'RoleArn' },
          description:
            'The ARN of the service role that is associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetServiceRoleForAccountResponse')

const AssociatedClientDeviceSchema = z
  .object({
    thingName: IoTThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the IoT thing that represents the associated client device.',
        }),
    ).exactOptional(),
    associationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the client device was associated, expressed in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a client device that is associated to a core device for cloud discovery.',
    required: [],
  })
  .openapi('AssociatedClientDevice')

const AssociatedClientDeviceListSchema = z
  .array(AssociatedClientDeviceSchema)
  .min(1)
  .max(100)
  .openapi('AssociatedClientDeviceList')

const NextTokenStringSchema = z.string().openapi('NextTokenString')

const ListClientDevicesAssociatedWithCoreDeviceResponseSchema = z
  .object({
    associatedClientDevices: AssociatedClientDeviceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that describes the client devices that are associated with the core device.',
        }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClientDevicesAssociatedWithCoreDeviceResponse')

const ComponentVersionListItemSchema = z
  .object({
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    arn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a component version in a list.',
    required: [],
  })
  .openapi('ComponentVersionListItem')

const ComponentVersionListSchema = z
  .array(ComponentVersionListItemSchema)
  .openapi('ComponentVersionList')

const ListComponentVersionsResponseSchema = z
  .object({
    componentVersions: ComponentVersionListSchema.and(
      z.any().openapi({ description: 'A list of versions that exist for the component.' }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListComponentVersionsResponse')

const ComponentARNSchema = z
  .string()
  .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+/)
  .openapi('ComponentARN')

const ComponentLatestVersionSchema = z
  .object({
    arn: ComponentVersionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time at which the component was created, expressed in ISO 8601 format.',
        }),
    ).exactOptional(),
    description: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The description of the component version.' }),
    ).exactOptional(),
    publisher: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The publisher of the component version.' }),
    ).exactOptional(),
    platforms: ComponentPlatformListSchema.and(
      z.any().openapi({ description: 'The platforms that the component version supports.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the latest version of a component.',
    required: [],
  })
  .openapi('ComponentLatestVersion')

const ComponentSchema = z
  .object({
    arn: ComponentARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    latestVersion: ComponentLatestVersionSchema.and(
      z.any().openapi({ description: 'The latest version of the component and its details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a component.', required: [] })
  .openapi('Component')

const ComponentListSchema = z.array(ComponentSchema).openapi('ComponentList')

const ListComponentsResponseSchema = z
  .object({
    components: ComponentListSchema.and(
      z.any().openapi({ description: 'A list that summarizes each component.' }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListComponentsResponse')

const CoreDeviceSchema = z
  .object({
    coreDeviceThingName: CoreDeviceThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the core device. This is also the name of the IoT thing.',
        }),
    ).exactOptional(),
    status: CoreDeviceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the core device. Core devices can have the following statuses:</p> <ul> <li> <p> <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p> </li> <li> <p> <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state on the core device.</p> </li> </ul>',
        }),
    ).exactOptional(),
    lastStatusUpdateTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time at which the core device's status last updated, expressed in ISO 8601 format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.',
    required: [],
  })
  .openapi('CoreDevice')

const CoreDevicesListSchema = z.array(CoreDeviceSchema).openapi('CoreDevicesList')

const ListCoreDevicesResponseSchema = z
  .object({
    coreDevices: CoreDevicesListSchema.and(
      z.any().openapi({ description: 'A list that summarizes each core device.' }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCoreDevicesResponse')

const DeploymentSchema = z
  .object({
    targetArn: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.',
        }),
    ).exactOptional(),
    revisionId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The revision number of the deployment.' }),
    ).exactOptional(),
    deploymentId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the deployment.' }),
    ).exactOptional(),
    deploymentName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The name of the deployment.' }),
    ).exactOptional(),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the deployment was created, expressed in ISO 8601 format.',
        }),
    ).exactOptional(),
    deploymentStatus: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'The status of the deployment.' }),
    ).exactOptional(),
    isLatestForTarget: IsLatestForTargetSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether or not the deployment is the latest revision for its target.',
        }),
    ).exactOptional(),
    parentTargetArn: ThingGroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parent deployment\'s target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a deployment.', required: [] })
  .openapi('Deployment')

const DeploymentListSchema = z.array(DeploymentSchema).openapi('DeploymentList')

const ListDeploymentsResponseSchema = z
  .object({
    deployments: DeploymentListSchema.and(
      z.any().openapi({ description: 'A list that summarizes each deployment.' }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeploymentsResponse')

const DeploymentIDSchema = z.string().openapi('DeploymentID')

const DeploymentNameSchema = z.string().openapi('DeploymentName')

const IoTJobIdSchema = z.string().min(1).max(255).openapi('IoTJobId')

const DescriptionSchema = z.string().min(1).max(500).openapi('Description')

const EffectiveDeploymentExecutionStatusSchema = z
  .enum([
    'IN_PROGRESS',
    'QUEUED',
    'FAILED',
    'COMPLETED',
    'TIMED_OUT',
    'CANCELED',
    'REJECTED',
    'SUCCEEDED',
  ])
  .openapi('EffectiveDeploymentExecutionStatus')

const ReasonSchema = z.string().openapi('Reason')

const EffectiveDeploymentErrorCodeSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('EffectiveDeploymentErrorCode')

const EffectiveDeploymentErrorStackSchema = z
  .array(EffectiveDeploymentErrorCodeSchema)
  .openapi('EffectiveDeploymentErrorStack')

const EffectiveDeploymentErrorTypeSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('EffectiveDeploymentErrorType')

const EffectiveDeploymentErrorTypeListSchema = z
  .array(EffectiveDeploymentErrorTypeSchema)
  .openapi('EffectiveDeploymentErrorTypeList')

const EffectiveDeploymentStatusDetailsSchema = z
  .object({
    errorStack: EffectiveDeploymentErrorStackSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains an ordered list of short error codes that range from the most generic error to the most specific one. The error codes describe the reason for failure whenever the <code>coreDeviceExecutionStatus</code> is in a failed state. The response will be an empty list if there is no error.',
        }),
    ).exactOptional(),
    errorTypes: EffectiveDeploymentErrorTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains tags which describe the error. You can use the error types to classify errors to assist with remediating the failure. The response will be an empty list if there is no error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus versions.</p> </note>',
    required: [],
  })
  .openapi('EffectiveDeploymentStatusDetails')

const EffectiveDeploymentSchema = z
  .object({
    deploymentId: DeploymentIDSchema.and(
      z.any().openapi({ description: 'The ID of the deployment.' }),
    ),
    deploymentName: DeploymentNameSchema.and(
      z.any().openapi({ description: 'The name of the deployment.' }),
    ),
    iotJobId: IoTJobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
    iotJobArn: IoTJobARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the deployment job.' }),
    ).exactOptional(),
    targetArn: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.',
        }),
    ),
    coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the deployment job on the Greengrass core device.</p> <ul> <li> <p> <code>IN_PROGRESS</code> – The deployment job is running.</p> </li> <li> <p> <code>QUEUED</code> – The deployment job is in the job queue and waiting to run.</p> </li> <li> <p> <code>FAILED</code> – The deployment failed. For more information, see the <code>statusDetails</code> field.</p> </li> <li> <p> <code>COMPLETED</code> – The deployment to an IoT thing was completed successfully.</p> </li> <li> <p> <code>TIMED_OUT</code> – The deployment didn't complete in the allotted time. </p> </li> <li> <p> <code>CANCELED</code> – The deployment was canceled by the user.</p> </li> <li> <p> <code>REJECTED</code> – The deployment was rejected. For more information, see the <code>statusDetails</code> field.</p> </li> <li> <p> <code>SUCCEEDED</code> – The deployment to an IoT thing group was completed successfully.</p> </li> </ul>",
        }),
    ),
    reason: ReasonSchema.and(
      z.any().openapi({ description: 'The reason code for the update, if the job was updated.' }),
    ).exactOptional(),
    creationTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the deployment was created, expressed in ISO 8601 format.',
        }),
    ),
    modifiedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the deployment job was last modified, expressed in ISO 8601 format.',
        }),
    ),
    statusDetails: EffectiveDeploymentStatusDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status details that explain why a deployment has an error. This response will be null if the deployment is in a success state.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'deploymentId',
      'deploymentName',
      'targetArn',
      'coreDeviceExecutionStatus',
      'creationTimestamp',
      'modifiedTimestamp',
    ],
    description:
      'Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.',
  })
  .openapi('EffectiveDeployment')

const EffectiveDeploymentsListSchema = z
  .array(EffectiveDeploymentSchema)
  .openapi('EffectiveDeploymentsList')

const ListEffectiveDeploymentsResponseSchema = z
  .object({
    effectiveDeployments: EffectiveDeploymentsListSchema.and(
      z
        .any()
        .openapi({ description: 'A list that summarizes each deployment on the core device.' }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEffectiveDeploymentsResponse')

const InstalledComponentLifecycleStateSchema = z
  .enum(['NEW', 'INSTALLED', 'STARTING', 'RUNNING', 'STOPPING', 'ERRORED', 'BROKEN', 'FINISHED'])
  .openapi('InstalledComponentLifecycleState')

const LifecycleStateDetailsSchema = z.string().min(1).max(1000).openapi('LifecycleStateDetails')

const IsRootSchema = z.boolean().openapi('IsRoot')

const InstalledComponentLifecycleStatusCodeSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi('InstalledComponentLifecycleStatusCode')

const InstalledComponentLifecycleStatusCodeListSchema = z
  .array(InstalledComponentLifecycleStatusCodeSchema)
  .openapi('InstalledComponentLifecycleStatusCodeList')

const InstalledComponentSchema = z
  .object({
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    lifecycleState: InstalledComponentLifecycleStateSchema.and(
      z.any().openapi({ description: 'The lifecycle state of the component.' }),
    ).exactOptional(),
    lifecycleStateDetails: LifecycleStateDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A detailed response about the lifecycle state of the component that explains the reason why a component has an error or is broken.',
        }),
    ).exactOptional(),
    isRoot: IsRootSchema.and(
      z.any().openapi({ description: 'Whether or not the component is a root component.' }),
    ).exactOptional(),
    lastStatusChangeTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of how current the data is.</p> <p>This response is based off of component state changes. The status reflects component disruptions and deployments. If a component only sees a configuration update during a deployment, it might not undergo a state change and this status would not be updated.</p>',
        }),
    ).exactOptional(),
    lastReportedTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The last time the Greengrass core device sent a message containing a component's state to the Amazon Web Services Cloud.</p> <p>A component does not need to see a state change for this field to update.</p>",
        }),
    ).exactOptional(),
    lastInstallationSource: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The most recent deployment source that brought the component to the Greengrass core device. For a thing group deployment or thing deployment, the source will be the The ID of the deployment. and for local deployments it will be <code>LOCAL</code>.</p> <note> <p>Any deployment will attempt to reinstall currently broken components on the device, which will update the last installation source.</p> </note>',
        }),
    ).exactOptional(),
    lifecycleStatusCodes: InstalledComponentLifecycleStatusCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status codes that indicate the reason for failure whenever the <code>lifecycleState</code> has an error or is in a broken state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>lifecycleStatusCodes</code> response. This response can be inaccurate in earlier Greengrass nucleus versions.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about a component on a Greengrass core device.',
    required: [],
  })
  .openapi('InstalledComponent')

const InstalledComponentListSchema = z
  .array(InstalledComponentSchema)
  .openapi('InstalledComponentList')

const ListInstalledComponentsResponseSchema = z
  .object({
    installedComponents: InstalledComponentListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list that summarizes each component on the core device.</p> <note> <p>Greengrass nucleus v2.7.0 or later is required to get an accurate <code>lastStatusChangeTimestamp</code> response. This response can be inaccurate in earlier Greengrass nucleus versions.</p> </note> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>lastInstallationSource</code> and <code>lastReportedTimestamp</code> response. This response can be inaccurate or null in earlier Greengrass nucleus versions.</p> </note>',
        }),
    ).exactOptional(),
    nextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInstalledComponentsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResolvedComponentVersionSchema = z
  .object({
    arn: ComponentVersionARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
        }),
    ).exactOptional(),
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    recipe: RecipeBlobSchema.and(
      z.any().openapi({ description: 'The recipe of the component version.' }),
    ).exactOptional(),
    vendorGuidance: VendorGuidanceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The vendor guidance state for the component version. This state indicates whether the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:</p> <ul> <li> <p> <code>ACTIVE</code> – This component version is available and recommended for use.</p> </li> <li> <p> <code>DISCONTINUED</code> – This component version has been discontinued by its publisher. You can deploy this component version, but we recommend that you use a different version of this component.</p> </li> <li> <p> <code>DELETED</code> – This component version has been deleted by its publisher, so you can't deploy it. If you have any existing deployments that specify this component version, those deployments will fail.</p> </li> </ul>",
        }),
    ).exactOptional(),
    message: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that communicates details about the vendor guidance state of the component version. This message communicates why a component version is discontinued or deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a component version that is compatible to run on a Greengrass core device.',
    required: [],
  })
  .openapi('ResolvedComponentVersion')

const ResolvedComponentVersionsListSchema = z
  .array(ResolvedComponentVersionSchema)
  .openapi('ResolvedComponentVersionsList')

const ResolveComponentCandidatesResponseSchema = z
  .object({
    resolvedComponentVersions: ResolvedComponentVersionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of components that meet the requirements that you specify in the request. This list includes each component's recipe that you can use to install the component.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResolveComponentCandidatesResponse')

const ComponentVersionRequirementMapSchema = z
  .record(z.string(), NonEmptyStringSchema)
  .openapi('ComponentVersionRequirementMap')

const ComponentCandidateSchema = z
  .object({
    componentName: ComponentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z.any().openapi({ description: 'The version of the component.' }),
    ).exactOptional(),
    versionRequirements: ComponentVersionRequirementMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version requirements for the component\'s dependencies. Greengrass core devices get the version requirements from component recipes.</p> <p>IoT Greengrass V2 uses semantic version constraints. For more information, see <a href="https://semver.org/">Semantic Versioning</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a component that is a candidate to deploy to a Greengrass core device.',
    required: [],
  })
  .openapi('ComponentCandidate')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateConnectivityInfoResponseSchema = z
  .object({
    version: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Version' },
          description: 'The new version of the connectivity information for the core device.',
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'Message' },
          description: 'A message about the connectivity information update request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectivityInfoResponse')

const AssociateClientDeviceWithCoreDeviceEntryListSchema = z
  .array(AssociateClientDeviceWithCoreDeviceEntrySchema)
  .min(1)
  .max(100)
  .openapi('AssociateClientDeviceWithCoreDeviceEntryList')

const AssociateServiceRoleToAccountRequestSchema = z
  .object({
    roleArn: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'RoleArn' },
          description:
            'The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
        }),
    ),
  })
  .openapi({ required: ['roleArn'], title: 'AssociateServiceRoleToAccountRequest' })
  .openapi('AssociateServiceRoleToAccountRequest')

const BatchAssociateClientDeviceWithCoreDeviceRequestSchema = z
  .object({
    entries: AssociateClientDeviceWithCoreDeviceEntryListSchema.and(
      z.any().openapi({ description: 'The list of client devices to associate.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'BatchAssociateClientDeviceWithCoreDeviceRequest', required: [] })
  .openapi('BatchAssociateClientDeviceWithCoreDeviceRequest')

const DisassociateClientDeviceFromCoreDeviceEntryListSchema = z
  .array(DisassociateClientDeviceFromCoreDeviceEntrySchema)
  .min(1)
  .max(100)
  .openapi('DisassociateClientDeviceFromCoreDeviceEntryList')

const BatchDisassociateClientDeviceFromCoreDeviceRequestSchema = z
  .object({
    entries: DisassociateClientDeviceFromCoreDeviceEntryListSchema.and(
      z.any().openapi({ description: 'The list of client devices to disassociate.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'BatchDisassociateClientDeviceFromCoreDeviceRequest', required: [] })
  .openapi('BatchDisassociateClientDeviceFromCoreDeviceRequest')

const CancelDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'CancelDeploymentRequest' })
  .openapi('CancelDeploymentRequest')

const ClientTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientTokenString')

const ComponentCandidateListSchema = z
  .array(ComponentCandidateSchema)
  .openapi('ComponentCandidateList')

const ComponentVisibilityScopeSchema = z
  .enum(['PRIVATE', 'PUBLIC'])
  .openapi('ComponentVisibilityScope')

const LambdaFunctionRecipeSourceSchema = z
  .object({
    lambdaArn: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function. The ARN must include the version of the function to import. You can\'t use version aliases like <code>$LATEST</code>.',
        }),
    ),
    componentName: ComponentNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the component.</p> <p>Defaults to the name of the Lambda function.</p>',
        }),
    ).exactOptional(),
    componentVersion: ComponentVersionStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the component.</p> <p>Defaults to the version of the Lambda function as a semantic version. For example, if your function version is <code>3</code>, the component version becomes <code>3.0.0</code>.</p>',
        }),
    ).exactOptional(),
    componentPlatforms: ComponentPlatformListSchema.and(
      z.any().openapi({ description: 'The platforms that the component version supports.' }),
    ).exactOptional(),
    componentDependencies: ComponentDependencyMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The component versions on which this Lambda function component depends.',
        }),
    ).exactOptional(),
    componentLambdaParameters: LambdaExecutionParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system and runtime parameters for the Lambda function as it runs on the Greengrass core device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['lambdaArn'],
    description: 'Contains information about an Lambda function to import to create a component.',
  })
  .openapi('LambdaFunctionRecipeSource')

const CreateComponentVersionRequestSchema = z
  .object({
    inlineRecipe: RecipeBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>",
        }),
    ).exactOptional(),
    lambdaFunction: LambdaFunctionRecipeSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameters to create a component from a Lambda function.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateComponentVersionRequest', required: [] })
  .openapi('CreateComponentVersionRequest')

const DeploymentNameStringSchema = z.string().min(1).max(256).openapi('DeploymentNameString')

const CreateDeploymentRequestSchema = z
  .object({
    targetArn: TargetARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.',
        }),
    ),
    deploymentName: DeploymentNameStringSchema.and(
      z.any().openapi({ description: 'The name of the deployment.' }),
    ).exactOptional(),
    components: ComponentDeploymentSpecificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.",
        }),
    ).exactOptional(),
    iotJobConfiguration: DeploymentIoTJobConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job configuration for the deployment configuration. The job configuration specifies the rollout, timeout, and stop configurations for the deployment configuration.',
        }),
    ).exactOptional(),
    deploymentPolicies: DeploymentPoliciesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The deployment policies for the deployment. These policies define how the deployment updates components and handles failure.',
        }),
    ).exactOptional(),
    parentTargetArn: ThingGroupARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parent deployment\'s target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['targetArn'], title: 'CreateDeploymentRequest' })
  .openapi('CreateDeploymentRequest')

const DefaultMaxResultsSchema = z.int().min(1).max(100).openapi('DefaultMaxResults')

const DeleteComponentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteComponentRequest' })
  .openapi('DeleteComponentRequest')

const DeleteCoreDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCoreDeviceRequest' })
  .openapi('DeleteCoreDeviceRequest')

const DeleteDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDeploymentRequest' })
  .openapi('DeleteDeploymentRequest')

const DeploymentHistoryFilterSchema = z
  .enum(['ALL', 'LATEST_ONLY'])
  .openapi('DeploymentHistoryFilter')

const DescribeComponentRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeComponentRequest' })
  .openapi('DescribeComponentRequest')

const DisassociateServiceRoleFromAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateServiceRoleFromAccountRequest' })
  .openapi('DisassociateServiceRoleFromAccountRequest')

const GenericV2ARNSchema = z
  .string()
  .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*/)
  .openapi('GenericV2ARN')

const GetComponentRequestSchema = z
  .object({})
  .openapi({ title: 'GetComponentRequest' })
  .openapi('GetComponentRequest')

const GetComponentVersionArtifactRequestSchema = z
  .object({})
  .openapi({ title: 'GetComponentVersionArtifactRequest' })
  .openapi('GetComponentVersionArtifactRequest')

const GetConnectivityInfoRequestSchema = z
  .object({})
  .openapi({ title: 'GetConnectivityInfoRequest' })
  .openapi('GetConnectivityInfoRequest')

const GetCoreDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'GetCoreDeviceRequest' })
  .openapi('GetCoreDeviceRequest')

const GetDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeploymentRequest' })
  .openapi('GetDeploymentRequest')

const GetServiceRoleForAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetServiceRoleForAccountRequest' })
  .openapi('GetServiceRoleForAccountRequest')

const InstalledComponentTopologyFilterSchema = z
  .enum(['ALL', 'ROOT'])
  .openapi('InstalledComponentTopologyFilter')

const ListClientDevicesAssociatedWithCoreDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'ListClientDevicesAssociatedWithCoreDeviceRequest' })
  .openapi('ListClientDevicesAssociatedWithCoreDeviceRequest')

const ListComponentVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListComponentVersionsRequest' })
  .openapi('ListComponentVersionsRequest')

const ListComponentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListComponentsRequest' })
  .openapi('ListComponentsRequest')

const ListCoreDevicesRequestSchema = z
  .object({})
  .openapi({ title: 'ListCoreDevicesRequest' })
  .openapi('ListCoreDevicesRequest')

const ListDeploymentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDeploymentsRequest' })
  .openapi('ListDeploymentsRequest')

const ListEffectiveDeploymentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEffectiveDeploymentsRequest' })
  .openapi('ListEffectiveDeploymentsRequest')

const ListInstalledComponentsRequestSchema = z
  .object({})
  .openapi({ title: 'ListInstalledComponentsRequest' })
  .openapi('ListInstalledComponentsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResolveComponentCandidatesRequestSchema = z
  .object({
    platform: ComponentPlatformSchema.and(
      z.any().openapi({ description: 'The platform to use to resolve compatible components.' }),
    ).exactOptional(),
    componentCandidates: ComponentCandidateListSchema.and(
      z.any().openapi({ description: 'The list of components to resolve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ResolveComponentCandidatesRequest', required: [] })
  .openapi('ResolveComponentCandidatesRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectivityInfoRequestSchema = z
  .object({
    connectivityInfo: ConnectivityInfoListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ConnectivityInfo' },
          description: 'The connectivity information for the core device.',
        }),
    ),
  })
  .openapi({ required: ['connectivityInfo'], title: 'UpdateConnectivityInfoRequest' })
  .openapi('UpdateConnectivityInfoRequest')

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

export const getGreengrassServiceroleRoute = createRoute({
  method: 'get',
  path: '/greengrass/servicerole',
  description:
    'Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.',
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putGreengrassServiceroleRoute = createRoute({
  method: 'put',
  path: '/greengrass/servicerole',
  description:
    'Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.',
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
                    'The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.',
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGreengrassServiceroleRoute = createRoute({
  method: 'delete',
  path: '/greengrass/servicerole',
  description:
    'Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can\'t verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.',
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRoute =
  createRoute({
    method: 'post',
    path: '/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices',
    description:
      '<p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices\' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>',
    operationId: 'BatchAssociateClientDeviceWithCoreDevice',
    request: {
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
        coreDeviceThingName: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'coreDeviceThingName',
              in: 'path',
              required: true,
              description: 'The name of the core device. This is also the name of the IoT thing.',
              schema: { type: 'string', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                entries: z
                  .array(AssociateClientDeviceWithCoreDeviceEntrySchema)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({ description: 'The list of client devices to associate.' }),
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
          'application/json': { schema: BatchAssociateClientDeviceWithCoreDeviceResponseSchema },
        },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRoute =
  createRoute({
    method: 'post',
    path: '/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices',
    description:
      "Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.",
    operationId: 'BatchDisassociateClientDeviceFromCoreDevice',
    request: {
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
        coreDeviceThingName: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'coreDeviceThingName',
              in: 'path',
              required: true,
              description: 'The name of the core device. This is also the name of the IoT thing.',
              schema: { type: 'string', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                entries: z
                  .array(DisassociateClientDeviceFromCoreDeviceEntrySchema)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({ description: 'The list of client devices to disassociate.' }),
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
          'application/json': { schema: BatchDisassociateClientDeviceFromCoreDeviceResponseSchema },
        },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postGreengrassV2DeploymentsDeploymentIdCancelRoute = createRoute({
  method: 'post',
  path: '/greengrass/v2/deployments/{deploymentId}/cancel',
  description:
    "Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.",
  operationId: 'CancelDeployment',
  request: {
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
      deploymentId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelDeploymentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGreengrassV2CreateComponentVersionRoute = createRoute({
  method: 'post',
  path: '/greengrass/v2/createComponentVersion',
  description:
    '<p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component\'s metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function\'s deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>',
  operationId: 'CreateComponentVersion',
  request: {
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
              inlineRecipe: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>",
                }),
              lambdaFunction: z
                .object({
                  lambdaArn: NonEmptyStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function. The ARN must include the version of the function to import. You can\'t use version aliases like <code>$LATEST</code>.',
                      }),
                  ).exactOptional(),
                  componentName: ComponentNameStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The name of the component.</p> <p>Defaults to the name of the Lambda function.</p>',
                      }),
                  ).exactOptional(),
                  componentVersion: ComponentVersionStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The version of the component.</p> <p>Defaults to the version of the Lambda function as a semantic version. For example, if your function version is <code>3</code>, the component version becomes <code>3.0.0</code>.</p>',
                      }),
                  ).exactOptional(),
                  componentPlatforms: ComponentPlatformListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The platforms that the component version supports.',
                      }),
                  ).exactOptional(),
                  componentDependencies: ComponentDependencyMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The component versions on which this Lambda function component depends.',
                      }),
                  ).exactOptional(),
                  componentLambdaParameters: LambdaExecutionParametersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The system and runtime parameters for the Lambda function as it runs on the Greengrass core device.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about an Lambda function to import to create a component.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
                }),
              clientToken: z
                .string()
                .regex(/^[a-zA-Z0-9-]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.',
                }),
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
      content: { 'application/json': { schema: CreateComponentVersionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'RequestAlreadyInProgressException',
      content: { 'application/json': { schema: RequestAlreadyInProgressExceptionSchema } },
    },
  },
})

export const getGreengrassV2DeploymentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/deployments',
  description: 'Retrieves a paginated list of deployments.',
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
    query: z.object({
      targetArn: z
        .string()
        .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)\/.+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'targetArn',
            in: 'query',
            required: false,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.',
            schema: { type: 'string', pattern: 'arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)/.+' },
          },
        }),
      historyFilter: z
        .enum(['ALL', 'LATEST_ONLY'])
        .exactOptional()
        .openapi({
          param: {
            name: 'historyFilter',
            in: 'query',
            required: false,
            description:
              '<p>The filter for the list of deployments. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all deployments.</p> </li> <li> <p> <code>LATEST_ONLY</code> – The list includes only the latest revision of each deployment.</p> </li> </ul> <p>Default: <code>LATEST_ONLY</code> </p>',
            schema: { type: 'string', enum: ['ALL', 'LATEST_ONLY'] },
          },
        }),
      parentTargetArn: z
        .string()
        .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup\/.+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'parentTargetArn',
            in: 'query',
            required: false,
            description:
              'The parent deployment\'s target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.',
            schema: { type: 'string', pattern: 'arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup/.+' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGreengrassV2DeploymentsRoute = createRoute({
  method: 'post',
  path: '/greengrass/v2/deployments',
  description:
    '<p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group\'s deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>',
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
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              targetArn: z
                .string()
                .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)\/.+/)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.',
                }),
              deploymentName: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the deployment.' }),
              components: z
                .record(z.string(), ComponentDeploymentSpecificationSchema)
                .exactOptional()
                .openapi({
                  description:
                    "The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.",
                }),
              iotJobConfiguration: z
                .object({
                  jobExecutionsRolloutConfig: IoTJobExecutionsRolloutConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The rollout configuration for the job. This configuration defines the rate at which the job rolls out to the fleet of target devices.',
                      }),
                  ).exactOptional(),
                  abortConfig: IoTJobAbortConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The stop configuration for the job. This configuration defines when and how to stop a job rollout.',
                      }),
                  ).exactOptional(),
                  timeoutConfig: IoTJobTimeoutConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The timeout configuration for the job. This configuration defines the amount of time each device has to complete the job.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about an IoT job configuration.',
                  required: [],
                }),
              deploymentPolicies: z
                .object({
                  failureHandlingPolicy: DeploymentFailureHandlingPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The failure handling policy for the configuration deployment. This policy defines what to do if the deployment fails.</p> <p>Default: <code>ROLLBACK</code> </p>',
                      }),
                  ).exactOptional(),
                  componentUpdatePolicy: DeploymentComponentUpdatePolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The component update policy for the configuration deployment. This policy defines when it's safe to deploy the configuration to devices.",
                      }),
                  ).exactOptional(),
                  configurationValidationPolicy: DeploymentConfigurationValidationPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The configuration validation policy for the configuration deployment. This policy defines how long each component has to validate its configure updates.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about policies that define how a deployment updates components and handles failure.',
                  required: [],
                }),
              parentTargetArn: z
                .string()
                .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup\/.+/)
                .exactOptional()
                .openapi({
                  description:
                    'The parent deployment\'s target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
                }),
              clientToken: z
                .string()
                .regex(/^[a-zA-Z0-9-]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.',
                }),
            })
            .openapi({ required: ['targetArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDeploymentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'RequestAlreadyInProgressException',
      content: { 'application/json': { schema: RequestAlreadyInProgressExceptionSchema } },
    },
  },
})

export const getGreengrassV2ComponentsArnRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/components/{arn}',
  description: 'Gets the recipe for a version of a component.',
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
      recipeOutputFormat: z
        .enum(['JSON', 'YAML'])
        .exactOptional()
        .openapi({
          param: {
            name: 'recipeOutputFormat',
            in: 'query',
            required: false,
            description: 'The format of the recipe.',
            schema: { type: 'string', enum: ['JSON', 'YAML'] },
          },
        }),
    }),
    params: z.object({
      arn: z
        .string()
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+/)
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
            schema: {
              type: 'string',
              pattern: 'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+',
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteGreengrassV2ComponentsArnRoute = createRoute({
  method: 'delete',
  path: '/greengrass/v2/components/{arn}',
  description:
    "<p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>",
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
    params: z.object({
      arn: z
        .string()
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+/)
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
            schema: {
              type: 'string',
              pattern: 'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassV2CoreDevicesCoreDeviceThingNameRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/coreDevices/{coreDeviceThingName}',
  description:
    '<p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn\'t running on the device, or if device isn\'t connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>',
  operationId: 'GetCoreDevice',
  request: {
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
      coreDeviceThingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'coreDeviceThingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCoreDeviceResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteGreengrassV2CoreDevicesCoreDeviceThingNameRoute = createRoute({
  method: 'delete',
  path: '/greengrass/v2/coreDevices/{coreDeviceThingName}',
  description:
    'Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn\'t delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.',
  operationId: 'DeleteCoreDevice',
  request: {
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
      coreDeviceThingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'coreDeviceThingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getGreengrassV2DeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/deployments/{deploymentId}',
  description:
    'Gets a deployment. Deployments define the components that run on Greengrass core devices.',
  operationId: 'GetDeployment',
  request: {
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
      deploymentId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteGreengrassV2DeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/greengrass/v2/deployments/{deploymentId}',
  description:
    '<p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn\'t affect core devices that run that deployment, because core devices store the deployment\'s configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>',
  operationId: 'DeleteDeployment',
  request: {
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
      deploymentId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The ID of the deployment.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGreengrassV2ComponentsArnMetadataRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/components/{arn}/metadata',
  description: 'Retrieves metadata for a version of a component.',
  operationId: 'DescribeComponent',
  request: {
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
      arn: z
        .string()
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+/)
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.',
            schema: {
              type: 'string',
              pattern: 'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeComponentResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassV2ComponentsArnArtifactsArtifactNameRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/components/{arn}/artifacts/{artifactName}',
  description:
    'Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.',
  operationId: 'GetComponentVersionArtifact',
  request: {
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
      arn: z
        .string()
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+/)
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version. Specify the ARN of a public or a Lambda component version.',
            schema: {
              type: 'string',
              pattern: 'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+:versions:[^:]+',
            },
          },
        }),
      artifactName: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'artifactName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the artifact.</p> <p>You can use the <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html">GetComponent</a> operation to download the component recipe, which includes the URI of the artifact. The artifact name is the section of the URI after the scheme. For example, in the artifact URI <code>greengrass:SomeArtifact.zip</code>, the artifact name is <code>SomeArtifact.zip</code>.</p>',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComponentVersionArtifactResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassThingsThingNameConnectivityInfoRoute = createRoute({
  method: 'get',
  path: '/greengrass/things/{thingName}/connectivityInfo',
  description:
    '<p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>',
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
      thingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putGreengrassThingsThingNameConnectivityInfoRoute = createRoute({
  method: 'put',
  path: '/greengrass/things/{thingName}/connectivityInfo',
  description:
    '<p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>',
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
      thingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
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
                .openapi({ description: 'The connectivity information for the core device.' }),
            })
            .openapi({ required: ['ConnectivityInfo'] }),
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRoute =
  createRoute({
    method: 'get',
    path: '/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices',
    description:
      'Retrieves a paginated list of client devices that are associated with a core device.',
    operationId: 'ListClientDevicesAssociatedWithCoreDevice',
    request: {
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
        coreDeviceThingName: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'coreDeviceThingName',
              in: 'path',
              required: true,
              description: 'The name of the core device. This is also the name of the IoT thing.',
              schema: { type: 'string', minLength: 1, maxLength: 128 },
            },
          }),
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
            z.int().min(1).max(100),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description: 'The maximum number of results to be returned per paginated request.',
              schema: { type: 'integer', minimum: 1, maximum: 100 },
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: 'The token to be used for the next set of paginated results.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListClientDevicesAssociatedWithCoreDeviceResponseSchema },
        },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const getGreengrassV2ComponentsArnVersionsRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/components/{arn}/versions',
  description:
    'Retrieves a paginated list of all versions for a component. Greater versions are listed first.',
  operationId: 'ListComponentVersions',
  request: {
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
      arn: z
        .string()
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+/)
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component.',
            schema: {
              type: 'string',
              pattern: 'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):components:[^:]+',
            },
          },
        }),
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentVersionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassV2ComponentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/components',
  description:
    'Retrieves a paginated list of component summaries. This list includes components that you have permission to view.',
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
      scope: z
        .enum(['PRIVATE', 'PUBLIC'])
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            required: false,
            description:
              '<p>The scope of the components to list.</p> <p>Default: <code>PRIVATE</code> </p>',
            schema: { type: 'string', enum: ['PRIVATE', 'PUBLIC'] },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGreengrassV2CoreDevicesRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/coreDevices',
  description:
    '<p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn\'t running on the device, or if device isn\'t connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>',
  operationId: 'ListCoreDevices',
  request: {
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
      thingGroupArn: z
        .string()
        .regex(/arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup\/.+/)
        .exactOptional()
        .openapi({
          param: {
            name: 'thingGroupArn',
            in: 'query',
            required: false,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT thing group by which to filter. If you specify this parameter, the list includes only core devices that have successfully deployed a deployment that targets the thing group. When you remove a core device from a thing group, the list continues to include that core device.',
            schema: { type: 'string', pattern: 'arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup/.+' },
          },
        }),
      status: z
        .enum(['HEALTHY', 'UNHEALTHY'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description:
              '<p>The core device status by which to filter. If you specify this parameter, the list includes only core devices that have this status. Choose one of the following options:</p> <ul> <li> <p> <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p> </li> <li> <p> <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state on the core device.</p> </li> </ul>',
            schema: { type: 'string', enum: ['HEALTHY', 'UNHEALTHY'] },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCoreDevicesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments',
  description:
    'Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.',
  operationId: 'ListEffectiveDeployments',
  request: {
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
      coreDeviceThingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'coreDeviceThingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEffectiveDeploymentsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRoute = createRoute({
  method: 'get',
  path: '/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents',
  description:
    "<p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss\">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>",
  operationId: 'ListInstalledComponents',
  request: {
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
      coreDeviceThingName: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'coreDeviceThingName',
            in: 'path',
            required: true,
            description: 'The name of the core device. This is also the name of the IoT thing.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
      topologyFilter: z
        .enum(['ALL', 'ROOT'])
        .exactOptional()
        .openapi({
          param: {
            name: 'topologyFilter',
            in: 'query',
            required: false,
            description:
              "<p>The filter for the list of components. Choose from the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all components installed on the core device.</p> </li> <li> <p> <code>ROOT</code> – The list includes only <i>root</i> components, which are components that you specify in a deployment. When you choose this option, the list doesn't include components that the core device installs as dependencies of other components.</p> </li> </ul> <p>Default: <code>ROOT</code> </p>",
            schema: { type: 'string', enum: ['ALL', 'ROOT'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInstalledComponentsResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Retrieves the list of tags for an IoT Greengrass resource.',
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
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.',
            schema: {
              type: 'string',
              pattern:
                'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*',
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
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
  description:
    "Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.",
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
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.',
            schema: {
              type: 'string',
              pattern:
                'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*',
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
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
                }),
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postGreengrassV2ResolveComponentCandidatesRoute = createRoute({
  method: 'post',
  path: '/greengrass/v2/resolveComponentCandidates',
  description:
    "<p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/greengrass.html\">IoT Greengrass endpoints and quotas</a>.</p> </important>",
  operationId: 'ResolveComponentCandidates',
  request: {
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
              platform: z
                .object({
                  name: NonEmptyStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The friendly name of the platform. This name helps you identify the platform.</p> <p>If you omit this parameter, IoT Greengrass creates a friendly name from the <code>os</code> and <code>architecture</code> of the platform.</p>',
                      }),
                  ).exactOptional(),
                  attributes: PlatformAttributesMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A dictionary of attributes for the platform. The IoT Greengrass Core software defines the <code>os</code> and <code>architecture</code> by default. You can specify additional platform attributes for a core device when you deploy the Greengrass nucleus component. For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html">Greengrass nucleus component</a> in the <i>IoT Greengrass V2 Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about a platform that a component supports.',
                  required: [],
                }),
              componentCandidates: z
                .array(ComponentCandidateSchema)
                .exactOptional()
                .openapi({ description: 'The list of components to resolve.' }),
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
      content: { 'application/json': { schema: ResolveComponentCandidatesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes a tag from an IoT Greengrass resource.',
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
        .regex(/arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.',
            schema: {
              type: 'string',
              pattern:
                'arn:[^:]*:greengrass:[^:]*:(aws|[0-9]+):(components|deployments|coreDevices):.*',
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of keys for tags to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 200,
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
