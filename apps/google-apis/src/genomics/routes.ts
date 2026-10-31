import { createRoute, z } from '@hono/zod-openapi'

const AcceleratorSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'How many accelerators of this type to attach.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accelerator type string (for example, "nvidia-tesla-k80"). Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under `/usr/local/nvidia`. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes.',
      }),
  })
  .openapi({
    description: 'Carries information about an accelerator that can be attached to a VM.',
    required: [],
  })
  .openapi('Accelerator')

const SecretSchema = z
  .object({
    cipherText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the cipherText response from the `encrypt` method. This field is intentionally unaudited.',
      }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the `decrypt` method on the specified key.',
      }),
  })
  .openapi({
    description:
      'Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.',
    required: [],
  })
  .openapi('Secret')

const MountSchema = z
  .object({
    disk: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the disk to mount, as specified in the resources section.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to mount the disk inside the container.' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the disk is mounted read-only inside the container.' }),
  })
  .openapi({
    description: 'Carries information about a particular disk mount inside a container.',
    required: [],
  })
  .openapi('Mount')

const ActionSchema = z
  .object({
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If specified, overrides the `CMD` specified in the container. If the container also has an `ENTRYPOINT` the values are used as entrypoint arguments. Otherwise, they are used as a command and arguments to run inside the container.',
      }),
    credentials: SecretSchema.exactOptional().openapi({
      description:
        'If the specified image is hosted on a private registry other than Google Container Registry, the credentials required to pull the image must be specified here as an encrypted secret. The secret must decrypt to a JSON-encoded dictionary containing both `username` and `password` keys.',
    }),
    encryptedEnvironment: SecretSchema.exactOptional().openapi({
      description:
        'The encrypted environment to pass into the container. This environment is merged with values specified in the google.genomics.v2alpha1.Pipeline message, overwriting any duplicate values. The secret must decrypt to a JSON-encoded dictionary where key-value pairs serve as environment variable names and their values. The decoded environment variables can overwrite the values specified by the `environment` field.',
    }),
    entrypoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If specified, overrides the `ENTRYPOINT` specified in the container.',
      }),
    environment: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The environment to pass into the container. This environment is merged with values specified in the google.genomics.v2alpha1.Pipeline message, overwriting any duplicate values. In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten. `GOOGLE_PIPELINE_FAILED` will be set to "1" if the pipeline failed because an action has exited with a non-zero status (and did not have the `IGNORE_EXIT_STATUS` flag set). This can be used to determine if additional debug or logging actions should execute. `GOOGLE_LAST_EXIT_STATUS` will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed.',
      }),
    flags: z
      .array(
        z.enum([
          'FLAG_UNSPECIFIED',
          'IGNORE_EXIT_STATUS',
          'RUN_IN_BACKGROUND',
          'ALWAYS_RUN',
          'ENABLE_FUSE',
          'PUBLISH_EXPOSED_PORTS',
          'DISABLE_IMAGE_PREFETCH',
          'DISABLE_STANDARD_ERROR_CAPTURE',
          'BLOCK_EXTERNAL_NETWORK',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The set of flags to apply to this action.' }),
    imageUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline. The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name ('bash') to pull from the default library. No schema is required in any of these cases. If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.genomics.v2alpha1.Action.credentials field.",
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored.',
      }),
    mounts: z
      .array(MountSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of mounts to make available to the action. In addition to the values specified here, every action has a special virtual disk mounted under `/google` that contains log files and other operational components. - /google/logs All logs written during the pipeline execution. - /google/logs/output The combined standard output and standard error of all actions run as part of the pipeline execution. - /google/logs/action/*/stdout The complete contents of each individual action's standard output. - /google/logs/action/*/stderr The complete contents of each individual action's standard error output. ",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.',
      }),
    pidNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace. If unspecified, a separate isolated namespace is used.',
      }),
    portMappings: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the `PUBLISH_EXPOSED_PORTS` flag instead. The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the `ContainerStartedEvent` in the operation metadata.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the `ALWAYS_RUN` and `IGNORE_EXIT_STATUS` flags.',
      }),
  })
  .openapi({ description: 'Specifies a single action that runs a Docker container.', required: [] })
  .openapi('Action')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const TimestampedEventSchema = z
  .object({
    data: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'The event data.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the event happened.' }),
  })
  .openapi({
    description:
      'An event that occured in the operation assigned to the worker and the time of occurance.',
    required: [],
  })
  .openapi('TimestampedEvent')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const DiskStatusSchema = z
  .object({
    freeSpaceBytes: z.string().exactOptional().openapi({ description: 'Free disk space.' }),
    totalSpaceBytes: z.string().exactOptional().openapi({ description: 'Total disk space.' }),
  })
  .openapi({ description: 'The status of a disk on a VM.', required: [] })
  .openapi('DiskStatus')

const WorkerStatusSchema = z
  .object({
    attachedDisks: z
      .record(z.string(), DiskStatusSchema)
      .exactOptional()
      .openapi({ description: 'Status of attached disks.' }),
    bootDisk: DiskStatusSchema.exactOptional().openapi({ description: 'Status of the boot disk.' }),
    freeRamBytes: z.string().exactOptional().openapi({ description: 'Free RAM.' }),
    totalRamBytes: z.string().exactOptional().openapi({ description: 'Total RAM.' }),
    uptimeSeconds: z.string().exactOptional().openapi({ description: 'System uptime.' }),
  })
  .openapi({ description: 'The status of the worker VM.', required: [] })
  .openapi('WorkerStatus')

const CheckInRequestSchema = z
  .object({
    deadlineExpired: EmptySchema.exactOptional().openapi({
      description: 'The deadline has expired and the worker needs more time.',
    }),
    event: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'A workflow specific event occurred.' }),
    events: z
      .array(TimestampedEventSchema)
      .exactOptional()
      .openapi({ description: 'A list of timestamped events.' }),
    result: StatusSchema.exactOptional().openapi({
      description: 'The operation has finished with the given result.',
    }),
    sosReport: z
      .string()
      .exactOptional()
      .openapi({ description: 'An SOS report for an unexpected VM failure.' }),
    workerStatus: WorkerStatusSchema.exactOptional().openapi({
      description: 'Data about the status of the worker VM.',
    }),
  })
  .openapi({ description: 'The parameters to the CheckIn method.', required: [] })
  .openapi('CheckInRequest')

const CheckInResponseSchema = z
  .object({
    deadline: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deadline by which the worker must request an extension. The backend will allow for network transmission time and other delays, but the worker must attempt to transmit the extension request no later than the deadline.',
      }),
    features: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Feature configuration for the operation.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'The metadata that describes the operation assigned to the worker.',
      }),
  })
  .openapi({ description: 'The response to the CheckIn method.', required: [] })
  .openapi('CheckInResponse')

const ContainerKilledEventSchema = z
  .object({
    actionId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The numeric ID of the action that started the container.' }),
  })
  .openapi({
    description:
      'An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.',
    required: [],
  })
  .openapi('ContainerKilledEvent')

const ContainerStartedEventSchema = z
  .object({
    actionId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The numeric ID of the action that started this container.' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist.',
      }),
    portMappings: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'The container-to-host port mappings installed for this container. This set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag as well as any specified in the `Action` definition.',
      }),
  })
  .openapi({ description: 'An event generated when a container starts.', required: [] })
  .openapi('ContainerStartedEvent')

const ContainerStoppedEventSchema = z
  .object({
    actionId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The numeric ID of the action that started this container.' }),
    exitStatus: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The exit status of the container.' }),
    stderr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag. Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the `/google/logs` directory mounted into each action, and can be copied off the machine as described elsewhere.',
      }),
  })
  .openapi({ description: 'An event generated when a container exits.', required: [] })
  .openapi('ContainerStoppedEvent')

const DelayedEventSchema = z
  .object({
    cause: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A textual description of the cause of the delay. The string can change without notice because it is often generated by another service (such as Compute Engine).',
      }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the delay was caused by a resource shortage, this field lists the Compute Engine metrics that are preventing this operation from running (for example, `CPUS` or `INSTANCES`). If the particular metric is not known, a single `UNKNOWN` metric will be present.',
      }),
  })
  .openapi({
    description:
      'An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run.',
    required: [],
  })
  .openapi('DelayedEvent')

const DiskSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-supplied name for the disk. Used when mounting the disk into actions. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.',
      }),
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.',
      }),
    sourceImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional image to put on the disk before attaching it to the VM.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Compute Engine disk type. If unspecified, `pd-standard` is used.',
      }),
  })
  .openapi({
    description:
      'Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.',
    required: [],
  })
  .openapi('Disk')

const EventSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the `details` field.',
      }),
    details: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Machine-readable details about the event.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the event occurred.' }),
  })
  .openapi({
    description: 'Carries information about events that occur during pipeline execution.',
    required: [],
  })
  .openapi('Event')

const ExistingDiskSchema = z
  .object({
    disk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `disk` contains slashes, the Cloud Life Sciences API assumes that it is a complete URL for the disk. If `disk` does not contain slashes, the Cloud Life Sciences API assumes that the disk is a zonal disk and a URL will be generated of the form `zones//disks/`, where `` is the zone in which the instance is allocated. The disk must be ext4 formatted. If all `Mount` references to this disk have the `read_only` flag set to true, the disk will be attached in `read-only` mode and can be shared with other instances. Otherwise, the disk will be available for writing but cannot be shared.',
      }),
  })
  .openapi({
    description: 'Configuration for an existing disk to be attached to the VM.',
    required: [],
  })
  .openapi('ExistingDisk')

const FailedEventSchema = z
  .object({
    cause: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable description of the cause of the failure.' }),
    code: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'The Google standard error code that best describes this failure.' }),
  })
  .openapi({
    description:
      'An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.',
    required: [],
  })
  .openapi('FailedEvent')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'An OperationMetadata or Metadata object. This will always be returned with the Operation.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. For example: `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'An Empty object.' }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const NetworkSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The network name to attach the VM's network interface to. The value will be prefixed with `global/networks/` unless it contains a `/`, in which case it is assumed to be a fully specified network resource URL. If unspecified, the global default network is used.",
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here. The value is prefixed with `regions/*/subnetworks/` unless it contains a `/`, in which case it is assumed to be a fully specified subnetwork resource URL. If the `*` character appears in the value, it is replaced with the region that the virtual machine has been allocated in.',
      }),
    usePrivateAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services. See https://cloud.google.com/vpc/docs/configure-private-google-access for more information.',
      }),
  })
  .openapi({ description: 'VM networking options.', required: [] })
  .openapi('Network')

const ServiceAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the service account. If not specified, the default Compute Engine service account for the project will be used.',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.',
      }),
  })
  .openapi({
    description: 'Carries information about a Google Cloud service account.',
    required: [],
  })
  .openapi('ServiceAccount')

const NFSMountSchema = z
  .object({
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A target NFS mount. The target must be specified as `address:/mount".',
      }),
  })
  .openapi({
    description: 'Configuration for an `NFSMount` to be attached to the VM.',
    required: [],
  })
  .openapi('NFSMount')

const PersistentDiskSchema = z
  .object({
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.',
      }),
    sourceImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'An image to put on the disk before attaching it to the VM.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Compute Engine disk type. If unspecified, `pd-standard` is used.',
      }),
  })
  .openapi({
    description:
      'Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.',
    required: [],
  })
  .openapi('PersistentDisk')

const VolumeSchema = z
  .object({
    existingDisk: ExistingDiskSchema.exactOptional().openapi({
      description: 'Configuration for a existing disk.',
    }),
    nfsMount: NFSMountSchema.exactOptional().openapi({
      description: 'Configuration for an NFS mount.',
    }),
    persistentDisk: PersistentDiskSchema.exactOptional().openapi({
      description: 'Configuration for a persistent disk.',
    }),
    volume: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-supplied name for the volume. Used when mounting the volume into `Actions`. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.',
      }),
  })
  .openapi({
    description:
      'Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.',
    required: [],
  })
  .openapi('Volume')

const VirtualMachineSchema = z
  .object({
    accelerators: z
      .array(AcceleratorSchema)
      .exactOptional()
      .openapi({ description: 'The list of accelerators to attach to the VM.' }),
    bootDiskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used.',
      }),
    bootImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The host operating system image to use. Currently, only Container-Optimized OS images can be used. The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS. This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines. To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`.',
      }),
    cpuPlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as "Intel Skylake"). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact. For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.',
      }),
    disks: z
      .array(DiskSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of disks to create and attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.',
      }),
    dockerCacheImages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. The root directory of the ext4 image must contain `image` and `overlay2` directories copied from the Docker directory of a VM where the desired Docker images have already been pulled. Any images pulled that are not cached will be stored on the first cache disk instead of the boot disk. Only a single image is supported.',
      }),
    enableStackdriverMonitoring: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Stackdriver monitoring should be enabled on the VM.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine. Labels keys with the prefix 'google-' are reserved for use by Google. Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation.",
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as "n1-standard-1") or a custom machine type (such as "custom-1-4096", where "1" indicates the number of vCPUs and "4096" indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type.',
      }),
    network: NetworkSchema.exactOptional().openapi({
      description: 'The VM network configuration.',
    }),
    nvidiaDriverVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage.',
      }),
    preemptible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, allocate a preemptible VM.' }),
    reservation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If specified, the VM will only be allocated inside the matching reservation. It will fail if the VM parameters don't match the reservation.",
      }),
    serviceAccount: ServiceAccountSchema.exactOptional().openapi({
      description:
        'The service account to install on the VM. This account does not need any permissions other than those required by the pipeline.',
    }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of disks and other storage to create or attach to the VM. Specify either the `volumes[]` field or the `disks[]` field, but not both.',
      }),
  })
  .openapi({ description: 'Carries information about a Compute Engine VM resource.', required: [] })
  .openapi('VirtualMachine')

const ResourcesSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project ID to allocate resources in.' }),
    regions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of regions allowed for VM allocation. If set, the `zones` field must not be set.',
      }),
    virtualMachine: VirtualMachineSchema.exactOptional().openapi({
      description: 'The virtual machine specification.',
    }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of zones allowed for VM allocation. If set, the `regions` field must not be set.',
      }),
  })
  .openapi({
    description:
      'The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.',
    required: [],
  })
  .openapi('Resources')

const PipelineSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({ description: 'The list of actions to execute, in the order they are specified.' }),
    encryptedEnvironment: SecretSchema.exactOptional().openapi({
      description:
        'The encrypted environment to pass into every action. Each action can also specify its own encrypted environment. The secret must decrypt to a JSON-encoded dictionary where key-value pairs serve as environment variable names and their values. The decoded environment variables can overwrite the values specified by the `environment` field.',
    }),
    environment: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value).',
      }),
    resources: ResourcesSchema.exactOptional().openapi({
      description: 'The resources required for execution.',
    }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum amount of time to give the pipeline to complete. This includes the time spent waiting for a worker to be allocated. If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED. If unspecified, it will default to 7 days.',
      }),
  })
  .openapi({
    description: 'Specifies a series of actions to execute, expressed as Docker containers.',
    required: [],
  })
  .openapi('Pipeline')

const MetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the operation was created by the API.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which execution was completed and resources were cleaned up.',
      }),
    events: z
      .array(EventSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of events that have happened so far during the execution of this operation.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The user-defined labels associated with this operation.' }),
    pipeline: PipelineSchema.exactOptional().openapi({
      description: 'The pipeline this operation represents.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The first time at which resources were allocated to execute the pipeline.',
      }),
  })
  .openapi({
    description:
      "Carries information about the pipeline execution that is returned in the long running operation's metadata field.",
    required: [],
  })
  .openapi('Metadata')

const PullStartedEventSchema = z
  .object({
    imageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the image that was pulled.' }),
  })
  .openapi({
    description: 'An event generated when the worker starts pulling an image.',
    required: [],
  })
  .openapi('PullStartedEvent')

const PullStoppedEventSchema = z
  .object({
    imageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the image that was pulled.' }),
  })
  .openapi({
    description: 'An event generated when the worker stops pulling an image.',
    required: [],
  })
  .openapi('PullStoppedEvent')

const RunPipelineRequestSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`).',
      }),
    pipeline: PipelineSchema.exactOptional().openapi({
      description: 'Required. The description of the pipeline to run.',
    }),
    pubSubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Genomics Service Agent account must have publisher permissions to the specified topic or notifications will not be sent.',
      }),
  })
  .openapi({
    description:
      'The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.',
    required: [],
  })
  .openapi('RunPipelineRequest')

const RunPipelineResponseSchema = z
  .object({})
  .openapi({
    description:
      "The response to the RunPipeline method, returned in the operation's result field on success.",
  })
  .openapi('RunPipelineResponse')

const UnexpectedExitStatusEventSchema = z
  .object({
    actionId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The numeric ID of the action that started the container.' }),
    exitStatus: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The exit status of the container.' }),
  })
  .openapi({
    description:
      'An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped.',
    required: [],
  })
  .openapi('UnexpectedExitStatusEvent')

const WorkerAssignedEventSchema = z
  .object({
    instance: z.string().exactOptional().openapi({ description: "The worker's instance name." }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type that was assigned for the worker.' }),
    zone: z.string().exactOptional().openapi({ description: 'The zone the worker is running in.' }),
  })
  .openapi({
    description: 'An event generated after a worker VM has been assigned to run the pipeline.',
    required: [],
  })
  .openapi('WorkerAssignedEvent')

const WorkerReleasedEventSchema = z
  .object({
    instance: z.string().exactOptional().openapi({ description: "The worker's instance name." }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone the worker was running in.' }),
  })
  .openapi({
    description:
      'An event generated when the worker VM that was assigned to the pipeline has been released (deleted).',
    required: [],
  })
  .openapi('WorkerReleasedEvent')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/genomics': 'View and manage Genomics data',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/genomics': 'View and manage Genomics data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV2alpha1PipelinesRunRoute = createRoute({
  method: 'post',
  path: '/v2alpha1/pipelines:run',
  tags: ['pipelines'],
  description:
    "Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa",
  operationId: 'genomics.pipelines.run',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: RunPipelineRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/genomics'],
      Oauth2c: ['https://www.googleapis.com/auth/genomics'],
    },
  ],
})

export const postV2alpha1WorkersIdCheckInRoute = createRoute({
  method: 'post',
  path: '/v2alpha1/workers/{id}:checkIn',
  tags: ['workers'],
  description:
    'The worker uses this method to retrieve the assigned operation and provide periodic status updates.',
  operationId: 'genomics.workers.checkIn',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckInRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckInResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/genomics'],
      Oauth2c: ['https://www.googleapis.com/auth/genomics'],
    },
  ],
})

export const postV2alpha1IdCheckInRoute = createRoute({
  method: 'post',
  path: '/v2alpha1/{id}:checkIn',
  tags: ['projects'],
  description:
    'The worker uses this method to retrieve the assigned operation and provide periodic status updates.',
  operationId: 'genomics.projects.workers.checkIn',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckInRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckInResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/genomics'],
      Oauth2c: ['https://www.googleapis.com/auth/genomics'],
    },
  ],
})

export const getV2alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v2alpha1/{name}',
  tags: ['projects'],
  description:
    'Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`',
  operationId: 'genomics.projects.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string for filtering Operations. In v2alpha1, the following filter fields are supported: * createTime: The time this job was created * events: The set of event (names) that have occurred while running the pipeline. The : operator can be used to determine if a particular event has occurred. * error: If the pipeline is running, this value is NULL. Once the pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done: If the pipeline is running, this value is false. Once the pipeline finishes, the value is true. Examples: * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return. The maximum value is 256.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/genomics'],
      Oauth2c: ['https://www.googleapis.com/auth/genomics'],
    },
  ],
})

export const postV2alpha1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v2alpha1/{name}:cancel',
  tags: ['projects'],
  description:
    'Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`',
  operationId: 'genomics.projects.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/genomics'],
      Oauth2c: ['https://www.googleapis.com/auth/genomics'],
    },
  ],
})
