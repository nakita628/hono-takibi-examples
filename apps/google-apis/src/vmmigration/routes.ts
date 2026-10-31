import { createRoute, z } from '@hono/zod-openapi'

const AccessKeyCredentialsSchema = z
  .object({
    accessKeyId: z.string().exactOptional().openapi({ description: 'AWS access key ID.' }),
    secretAccessKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input only. AWS secret access key.' }),
    sessionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials.',
      }),
  })
  .openapi({
    description: 'Message describing AWS Credentials using access key id and secret.',
    required: [],
  })
  .openapi('AccessKeyCredentials')

const AdaptingOSStepSchema = z
  .object({})
  .openapi({ description: 'AdaptingOSStep contains specific step details.' })
  .openapi('AdaptingOSStep')

const AddGroupMigrationRequestSchema = z
  .object({
    migratingVm: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full path name of the MigratingVm to add.' }),
  })
  .openapi({ description: "Request message for 'AddGroupMigration' request.", required: [] })
  .openapi('AddGroupMigrationRequest')

const ApplianceVersionSchema = z
  .object({
    critical: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Determine whether it's critical to upgrade the appliance to this version.",
      }),
    releaseNotesUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to a page that contains the version release notes.' }),
    uri: z.string().exactOptional().openapi({ description: 'A link for downloading the version.' }),
    version: z.string().exactOptional().openapi({ description: 'The appliance version.' }),
  })
  .openapi({ description: 'Describes an appliance version.', required: [] })
  .openapi('ApplianceVersion')

const AppliedLicenseSchema = z
  .object({
    osLicense: z
      .string()
      .exactOptional()
      .openapi({ description: "The OS license returned from the adaptation module's report." }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'NONE', 'PAYG', 'BYOL'])
      .exactOptional()
      .openapi({ description: 'The license type that was used in OS adaptation.' }),
  })
  .openapi({
    description: 'AppliedLicense holds the license data returned by adaptation module report.',
    required: [],
  })
  .openapi('AppliedLicense')

const AvailableUpdatesSchema = z
  .object({
    inPlaceUpdate: ApplianceVersionSchema.exactOptional().openapi({
      description:
        'The latest version for in place update. The current appliance can be updated to this version using the API or m4c CLI.',
    }),
    newDeployableAppliance: ApplianceVersionSchema.exactOptional().openapi({
      description:
        "The newest deployable version of the appliance. The current appliance can't be updated into this version, and the owner must manually deploy this OVA to a new appliance.",
    }),
  })
  .openapi({
    description: 'Holds informatiom about the available versions for upgrade.',
    required: [],
  })
  .openapi('AvailableUpdates')

const AwsSecurityGroupSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The AWS security group id.' }),
    name: z.string().exactOptional().openapi({ description: 'The AWS security group name.' }),
  })
  .openapi({
    description: 'AwsSecurityGroup describes a security group of an AWS VM.',
    required: [],
  })
  .openapi('AwsSecurityGroup')

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

const TagSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key of tag.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of tag.' }),
  })
  .openapi({ description: 'Tag is an AWS tag representation.', required: [] })
  .openapi('Tag')

const AwsSourceDetailsSchema = z
  .object({
    accessKeyCreds: AccessKeyCredentialsSchema.exactOptional().openapi({
      description: 'AWS Credentials using access key id and secret.',
    }),
    awsRegion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Immutable. The AWS region that the source VMs will be migrated from.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'Output only. Provides details on the state of the Source in case of an error.',
      readOnly: true,
    }),
    inventorySecurityGroupNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'AWS security group names to limit the scope of the source inventory.',
      }),
    inventoryTagList: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: 'AWS resource tags to limit the scope of the source inventory.' }),
    migrationResourcesUserTags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`.',
      }),
    publicIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The source's public IP. All communication initiated by this source will originate from this IP.",
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'FAILED', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description: 'Output only. State of the source as determined by the health check.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'AwsSourceDetails message describes a specific source details for the AWS source type.',
    required: [],
  })
  .openapi('AwsSourceDetails')

const AwsSourceVmDetailsSchema = z
  .object({
    committedStorageBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the disks being migrated in bytes.' }),
    firmware: z
      .enum(['FIRMWARE_UNSPECIFIED', 'EFI', 'BIOS'])
      .exactOptional()
      .openapi({ description: 'The firmware type of the source VM.' }),
  })
  .openapi({ description: 'Represent the source AWS VM details.', required: [] })
  .openapi('AwsSourceVmDetails')

const AwsVmDetailsSchema = z
  .object({
    architecture: z
      .enum(['VM_ARCHITECTURE_UNSPECIFIED', 'I386', 'X86_64', 'ARM64', 'X86_64_MAC'])
      .exactOptional()
      .openapi({ description: 'The CPU architecture.' }),
    bootOption: z
      .enum(['BOOT_OPTION_UNSPECIFIED', 'EFI', 'BIOS'])
      .exactOptional()
      .openapi({ description: 'The VM Boot Option.' }),
    committedStorageMb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the storage allocated to the VM in MB.' }),
    cpuCount: z.int32().exactOptional().openapi({ description: 'The number of cpus the VM has.' }),
    diskCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of disks the VM has.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name of the VM. Note that this value is not necessarily unique.',
      }),
    instanceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The instance type of the VM.' }),
    memoryMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The memory size of the VM in MB.' }),
    osDescription: z.string().exactOptional().openapi({ description: "The VM's OS." }),
    powerState: z
      .enum(['POWER_STATE_UNSPECIFIED', 'ON', 'OFF', 'SUSPENDED', 'PENDING'])
      .exactOptional()
      .openapi({
        description: 'Output only. The power state of the VM at the moment list was taken.',
        readOnly: true,
      }),
    securityGroups: z
      .array(AwsSecurityGroupSchema)
      .exactOptional()
      .openapi({ description: 'The security groups the VM belongs to.' }),
    sourceDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: "The descriptive name of the AWS's source this VM is connected to.",
      }),
    sourceId: z
      .string()
      .exactOptional()
      .openapi({ description: "The id of the AWS's source this VM is connected to." }),
    tags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The tags of the VM.' }),
    virtualizationType: z
      .enum(['VM_VIRTUALIZATION_TYPE_UNSPECIFIED', 'HVM', 'PARAVIRTUAL'])
      .exactOptional()
      .openapi({ description: 'The virtualization type.' }),
    vmId: z.string().exactOptional().openapi({ description: 'The VM ID in AWS.' }),
    vpcId: z.string().exactOptional().openapi({ description: 'The VPC ID the VM belongs to.' }),
    zone: z.string().exactOptional().openapi({ description: 'The AWS zone of the VM.' }),
  })
  .openapi({ description: 'AwsVmDetails describes a VM in AWS.', required: [] })
  .openapi('AwsVmDetails')

const AwsVmsDetailsSchema = z
  .object({
    details: z
      .array(AwsVmDetailsSchema)
      .exactOptional()
      .openapi({ description: 'The details of the AWS VMs.' }),
  })
  .openapi({ description: 'AWSVmsDetails describes VMs in AWS.', required: [] })
  .openapi('AwsVmsDetails')

const CancelCloneJobRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'CancelCloneJob' request." })
  .openapi('CancelCloneJobRequest')

const CancelCutoverJobRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'CancelCutoverJob' request." })
  .openapi('CancelCutoverJobRequest')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const SchedulingNodeAffinitySchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label key of Node resource to reference.' }),
    operator: z
      .enum(['OPERATOR_UNSPECIFIED', 'IN', 'NOT_IN'])
      .exactOptional()
      .openapi({
        description:
          'The operator to use for the node resources specified in the `values` parameter.',
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Corresponds to the label values of Node resource.' }),
  })
  .openapi({
    description:
      'Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling',
    required: [],
  })
  .openapi('SchedulingNodeAffinity')

const ComputeSchedulingSchema = z
  .object({
    automaticRestart: z.boolean().exactOptional(),
    minNodeCpus: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured.',
      }),
    nodeAffinities: z
      .array(SchedulingNodeAffinitySchema)
      .exactOptional()
      .openapi({
        description:
          'A set of node affinity and anti-affinity configurations for sole tenant nodes.',
      }),
    onHostMaintenance: z
      .enum(['ON_HOST_MAINTENANCE_UNSPECIFIED', 'TERMINATE', 'MIGRATE'])
      .exactOptional()
      .openapi({
        description:
          'How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance.',
      }),
    restartType: z
      .enum(['RESTART_TYPE_UNSPECIFIED', 'AUTOMATIC_RESTART', 'NO_AUTOMATIC_RESTART'])
      .exactOptional()
      .openapi({
        description:
          'Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart.',
      }),
  })
  .openapi({
    description:
      'Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.',
    required: [],
  })
  .openapi('ComputeScheduling')

const NetworkInterfaceSchema = z
  .object({
    externalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The external IP to define in the NIC.' }),
    internalIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal IP to define in the NIC. The formats accepted are: `ephemeral` \\ ipv4 address \\ a named address resource full path.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'The network to connect the NIC to.' }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subnetwork to connect the NIC to.' }),
  })
  .openapi({ description: 'NetworkInterface represents a NIC of a VM.', required: [] })
  .openapi('NetworkInterface')

const ComputeEngineTargetDetailsSchema = z
  .object({
    additionalLicenses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional licenses to assign to the VM.' }),
    appliedLicense: AppliedLicenseSchema.exactOptional().openapi({
      description: 'The OS license returned from the adaptation module report.',
    }),
    bootOption: z
      .enum([
        'COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED',
        'COMPUTE_ENGINE_BOOT_OPTION_EFI',
        'COMPUTE_ENGINE_BOOT_OPTION_BIOS',
      ])
      .exactOptional()
      .openapi({ description: 'The VM Boot Option, as set in the source vm.' }),
    computeScheduling: ComputeSchedulingSchema.exactOptional().openapi({
      description: 'Compute instance scheduling information (if empty default is used).',
    }),
    diskType: z
      .enum([
        'COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED',
        'COMPUTE_ENGINE_DISK_TYPE_STANDARD',
        'COMPUTE_ENGINE_DISK_TYPE_SSD',
        'COMPUTE_ENGINE_DISK_TYPE_BALANCED',
      ])
      .exactOptional()
      .openapi({ description: 'The disk type to use in the VM.' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname to assign to the VM.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of labels to associate with the VM.' }),
    licenseType: z
      .enum([
        'COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT',
        'COMPUTE_ENGINE_LICENSE_TYPE_PAYG',
        'COMPUTE_ENGINE_LICENSE_TYPE_BYOL',
      ])
      .exactOptional()
      .openapi({ description: 'The license type to use in OS adaptation.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type to create the VM with.' }),
    machineTypeSeries: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type series to create the VM with.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The metadata key/value pairs to assign to the VM.' }),
    networkInterfaces: z
      .array(NetworkInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'List of NICs connected to this VM.' }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A map of network tags to associate with the VM.' }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google Cloud target project ID or project name.' }),
    secureBoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service account to associate the VM with.' }),
    vmName: z.string().exactOptional().openapi({ description: 'The name of the VM to create.' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone in which to create the VM.' }),
  })
  .openapi({
    description:
      'ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.',
    required: [],
  })
  .openapi('ComputeEngineTargetDetails')

const TargetVMDetailsSchema = z
  .object({
    appliedLicense: AppliedLicenseSchema.exactOptional().openapi({
      description: 'Output only. The OS license returned from the adaptation module report.',
      readOnly: true,
    }),
    bootOption: z
      .enum(['BOOT_OPTION_UNSPECIFIED', 'EFI', 'BIOS'])
      .exactOptional()
      .openapi({
        description: 'Output only. The VM Boot Option, as set in the source vm.',
        readOnly: true,
      }),
    computeScheduling: ComputeSchedulingSchema.exactOptional().openapi({
      description: 'Compute instance scheduling information (if empty default is used).',
    }),
    diskType: z
      .enum(['DISK_TYPE_UNSPECIFIED', 'STANDARD', 'BALANCED', 'SSD'])
      .exactOptional()
      .openapi({ description: 'The disk type to use in the VM.' }),
    externalIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The external IP to define in the VM.' }),
    internalIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal IP to define in the VM. The formats accepted are: `ephemeral` \\ ipv4 address \\ a named address resource full path.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of labels to associate with the VM.' }),
    licenseType: z
      .enum(['DEFAULT', 'PAYG', 'BYOL'])
      .exactOptional()
      .openapi({ description: 'The license type to use in OS adaptation.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type to create the VM with.' }),
    machineTypeSeries: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type series to create the VM with.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The metadata key/value pairs to assign to the VM.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the VM to create.' }),
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'The network to connect the VM to.' }),
    networkInterfaces: z
      .array(NetworkInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'List of NICs connected to this VM.' }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A map of network tags to associate with the VM.' }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The project in which to create the VM.',
        readOnly: true,
      }),
    secureBoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service account to associate the VM with.' }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subnetwork to connect the VM to.' }),
    targetProject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone in which to create the VM.' }),
  })
  .openapi({
    description:
      'TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.',
    required: [],
  })
  .openapi('TargetVMDetails')

const InstantiatingMigratedVMStepSchema = z
  .object({})
  .openapi({ description: 'InstantiatingMigratedVMStep contains specific step details.' })
  .openapi('InstantiatingMigratedVMStep')

const PreparingVMDisksStepSchema = z
  .object({})
  .openapi({ description: 'PreparingVMDisksStep contains specific step details.' })
  .openapi('PreparingVMDisksStep')

const CloneStepSchema = z
  .object({
    adaptingOs: AdaptingOSStepSchema.exactOptional().openapi({ description: 'Adapting OS step.' }),
    endTime: z.string().exactOptional().openapi({ description: 'The time the step has ended.' }),
    instantiatingMigratedVm: InstantiatingMigratedVMStepSchema.exactOptional().openapi({
      description: 'Instantiating migrated VM step.',
    }),
    preparingVmDisks: PreparingVMDisksStepSchema.exactOptional().openapi({
      description: 'Preparing VM disks step.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the step has started.' }),
  })
  .openapi({
    description: 'CloneStep holds information about the clone step progress.',
    required: [],
  })
  .openapi('CloneStep')

const CloneJobSchema = z
  .object({
    computeEngineTargetDetails: ComputeEngineTargetDetailsSchema.exactOptional().openapi({
      description: 'Output only. Details of the target VM in Compute Engine.',
      readOnly: true,
    }),
    computeEngineVmDetails: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the clone job was created (as an API call, not when it was actually created in the target).',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the clone job was ended.', readOnly: true }),
    error: StatusSchema.exactOptional().openapi({
      description:
        "Output only. Provides details for the errors that led to the Clone Job's state.",
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the clone.', readOnly: true }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'ACTIVE',
        'FAILED',
        'SUCCEEDED',
        'CANCELLED',
        'CANCELLING',
        'ADAPTING_OS',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. State of the clone job.', readOnly: true }),
    stateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the state was last updated.',
        readOnly: true,
      }),
    steps: z
      .array(CloneStepSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The clone steps list representing its progress.',
        readOnly: true,
      }),
    targetDetails: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'Output only. Details of the VM to create as the target of this clone job. Deprecated: Use compute_engine_target_details instead.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.',
    required: [],
  })
  .openapi('CloneJob')

const ComputeEngineTargetDefaultsSchema = z
  .object({
    additionalLicenses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional licenses to assign to the VM.' }),
    appliedLicense: AppliedLicenseSchema.exactOptional().openapi({
      description: 'Output only. The OS license returned from the adaptation module report.',
      readOnly: true,
    }),
    bootOption: z
      .enum([
        'COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED',
        'COMPUTE_ENGINE_BOOT_OPTION_EFI',
        'COMPUTE_ENGINE_BOOT_OPTION_BIOS',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The VM Boot Option, as set in the source vm.',
        readOnly: true,
      }),
    computeScheduling: ComputeSchedulingSchema.exactOptional().openapi({
      description: 'Compute instance scheduling information (if empty default is used).',
    }),
    diskType: z
      .enum([
        'COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED',
        'COMPUTE_ENGINE_DISK_TYPE_STANDARD',
        'COMPUTE_ENGINE_DISK_TYPE_SSD',
        'COMPUTE_ENGINE_DISK_TYPE_BALANCED',
      ])
      .exactOptional()
      .openapi({ description: 'The disk type to use in the VM.' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname to assign to the VM.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of labels to associate with the VM.' }),
    licenseType: z
      .enum([
        'COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT',
        'COMPUTE_ENGINE_LICENSE_TYPE_PAYG',
        'COMPUTE_ENGINE_LICENSE_TYPE_BYOL',
      ])
      .exactOptional()
      .openapi({ description: 'The license type to use in OS adaptation.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type to create the VM with.' }),
    machineTypeSeries: z
      .string()
      .exactOptional()
      .openapi({ description: 'The machine type series to create the VM with.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The metadata key/value pairs to assign to the VM.' }),
    networkInterfaces: z
      .array(NetworkInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'List of NICs connected to this VM.' }),
    networkTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A map of network tags to associate with the VM.' }),
    secureBoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service account to associate the VM with.' }),
    targetProject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.',
      }),
    vmName: z.string().exactOptional().openapi({ description: 'The name of the VM to create.' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone in which to create the VM.' }),
  })
  .openapi({
    description:
      'ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.',
    required: [],
  })
  .openapi('ComputeEngineTargetDefaults')

const CutoverForecastSchema = z
  .object({
    estimatedCutoverJobDuration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Estimation of the CutoverJob duration.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'CutoverForecast holds information about future CutoverJobs of a MigratingVm.',
    required: [],
  })
  .openapi('CutoverForecast')

const InitializingReplicationStepSchema = z
  .object({})
  .openapi({ description: 'InitializingReplicationStep contains specific step details.' })
  .openapi('InitializingReplicationStep')

const PostProcessingStepSchema = z
  .object({})
  .openapi({ description: 'PostProcessingStep contains specific step details.' })
  .openapi('PostProcessingStep')

const ReplicatingStepSchema = z
  .object({
    lastThirtyMinutesAverageBytesPerSecond: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source disks replication rate for the last 30 minutes in bytes per second.',
      }),
    lastTwoMinutesAverageBytesPerSecond: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source disks replication rate for the last 2 minutes in bytes per second.',
      }),
    replicatedBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Replicated bytes in the step.' }),
    totalBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total bytes to be handled in the step.' }),
  })
  .openapi({ description: 'ReplicatingStep contains specific step details.', required: [] })
  .openapi('ReplicatingStep')

const CycleStepSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the cycle step has ended.' }),
    initializingReplication: InitializingReplicationStepSchema.exactOptional().openapi({
      description: 'Initializing replication step.',
    }),
    postProcessing: PostProcessingStepSchema.exactOptional().openapi({
      description: 'Post processing step.',
    }),
    replicating: ReplicatingStepSchema.exactOptional().openapi({
      description: 'Replicating step.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the cycle step has started.' }),
  })
  .openapi({ description: 'CycleStep holds information about a step progress.', required: [] })
  .openapi('CycleStep')

const LocalizedMessageSchema = z
  .object({
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX"',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized error message in the above locale.' }),
  })
  .openapi({
    description:
      'Provides a localized error message that is safe to return to the user which can be attached to an RPC error.',
    required: [],
  })
  .openapi('LocalizedMessage')

const LinkSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes what the link offers.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the link.' }),
  })
  .openapi({ description: 'Describes a URL link.', required: [] })
  .openapi('Link')

const MigrationWarningSchema = z
  .object({
    actionItem: LocalizedMessageSchema.exactOptional().openapi({
      description: 'Suggested action for solving the warning.',
    }),
    code: z
      .enum(['WARNING_CODE_UNSPECIFIED', 'ADAPTATION_WARNING'])
      .exactOptional()
      .openapi({ description: 'The warning code.' }),
    helpLinks: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description: 'URL(s) pointing to additional information on handling the current warning.',
      }),
    warningMessage: LocalizedMessageSchema.exactOptional().openapi({
      description: 'The localized warning message.',
    }),
    warningTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the warning occurred.' }),
  })
  .openapi({
    description:
      'Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations.',
    required: [],
  })
  .openapi('MigrationWarning')

const ReplicationCycleSchema = z
  .object({
    cycleNumber: z.int32().exactOptional().openapi({ description: "The cycle's ordinal number." }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the replication cycle has ended.' }),
    error: StatusSchema.exactOptional().openapi({
      description: 'Provides details on the state of the cycle in case of an error.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the ReplicationCycle.' }),
    progress: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The current progress in percentage of this cycle.' }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.",
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the replication cycle has started.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'PAUSED', 'FAILED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'State of the ReplicationCycle.' }),
    steps: z
      .array(CycleStepSchema)
      .exactOptional()
      .openapi({ description: "The cycle's steps list representing its progress." }),
    totalPauseDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The accumulated duration the replication cycle was paused.' }),
    warnings: z
      .array(MigrationWarningSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Warnings that occurred during the cycle.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'ReplicationCycle contains information about the current replication cycle status.',
    required: [],
  })
  .openapi('ReplicationCycle')

const ShuttingDownSourceVMStepSchema = z
  .object({})
  .openapi({ description: 'ShuttingDownSourceVMStep contains specific step details.' })
  .openapi('ShuttingDownSourceVMStep')

const CutoverStepSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'The time the step has ended.' }),
    finalSync: ReplicationCycleSchema.exactOptional().openapi({ description: 'Final sync step.' }),
    instantiatingMigratedVm: InstantiatingMigratedVMStepSchema.exactOptional().openapi({
      description: 'Instantiating migrated VM step.',
    }),
    preparingVmDisks: PreparingVMDisksStepSchema.exactOptional().openapi({
      description: 'Preparing VM disks step.',
    }),
    previousReplicationCycle: ReplicationCycleSchema.exactOptional().openapi({
      description: 'A replication cycle prior cutover step.',
    }),
    shuttingDownSourceVm: ShuttingDownSourceVMStepSchema.exactOptional().openapi({
      description: 'Shutting down VM step.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the step has started.' }),
  })
  .openapi({
    description: 'CutoverStep holds information about the cutover step progress.',
    required: [],
  })
  .openapi('CutoverStep')

const CutoverJobSchema = z
  .object({
    computeEngineTargetDetails: ComputeEngineTargetDetailsSchema.exactOptional().openapi({
      description: 'Output only. Details of the target VM in Compute Engine.',
      readOnly: true,
    }),
    computeEngineVmDetails: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the cutover job was created (as an API call, not when it was actually created in the target).',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the cutover job had finished.',
        readOnly: true,
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        "Output only. Provides details for the errors that led to the Cutover Job's state.",
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the cutover job.', readOnly: true }),
    progress: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The current progress in percentage of the cutover job.',
        readOnly: true,
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The current progress in percentage of the cutover job.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'FAILED',
        'SUCCEEDED',
        'CANCELLED',
        'CANCELLING',
        'ACTIVE',
        'ADAPTING_OS',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. State of the cutover job.', readOnly: true }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A message providing possible extra details about the current state.',
        readOnly: true,
      }),
    stateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the state was last updated.',
        readOnly: true,
      }),
    steps: z
      .array(CutoverStepSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The cutover steps list representing its progress.',
        readOnly: true,
      }),
    targetDetails: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'Output only. Details of the VM to create as the target of this cutover job. Deprecated: Use compute_engine_target_details instead.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.',
    required: [],
  })
  .openapi('CutoverJob')

const UpgradeStatusSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description: 'Provides details on the state of the upgrade operation in case of an error.',
    }),
    previousVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version from which we upgraded.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was started.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'FAILED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'The state of the upgradeAppliance operation.' }),
    version: z.string().exactOptional().openapi({ description: 'The version to upgrade to.' }),
  })
  .openapi({
    description: 'UpgradeStatus contains information about upgradeAppliance operation.',
    required: [],
  })
  .openapi('UpgradeStatus')

const DatacenterConnectorSchema = z
  .object({
    applianceInfrastructureVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance.',
        readOnly: true,
      }),
    applianceSoftwareVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance.',
        readOnly: true,
      }),
    availableVersions: AvailableUpdatesSchema.exactOptional().openapi({
      description: 'Output only. The available versions for updating this appliance.',
      readOnly: true,
    }),
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The communication channel between the datacenter connector and Google Cloud.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the connector was created (as an API call, not when it was actually installed).',
        readOnly: true,
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'Output only. Provides details on the state of the Datacenter Connector in case of an error.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The connector's name.", readOnly: true }),
    registrationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account to use in the connector when communicating with the cloud.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'OFFLINE', 'FAILED', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the DatacenterConnector, as determined by the health checks.',
        readOnly: true,
      }),
    stateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the state was last set.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last time the connector was updated with an API call.',
        readOnly: true,
      }),
    upgradeStatus: UpgradeStatusSchema.exactOptional().openapi({
      description: 'Output only. The status of the current / last upgradeAppliance operation.',
      readOnly: true,
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified.',
      }),
  })
  .openapi({
    description:
      'DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.',
    required: [],
  })
  .openapi('DatacenterConnector')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const VmwareVmDetailsSchema = z
  .object({
    bootOption: z
      .enum(['BOOT_OPTION_UNSPECIFIED', 'EFI', 'BIOS'])
      .exactOptional()
      .openapi({ description: 'Output only. The VM Boot Option.', readOnly: true }),
    committedStorage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the storage allocated to the VM in MB.' }),
    committedStorageMb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the storage allocated to the VM in MB.' }),
    cpuCount: z.int32().exactOptional().openapi({ description: 'The number of cpus in the VM.' }),
    datacenterDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: "The descriptive name of the vCenter's datacenter this VM is contained in.",
      }),
    datacenterId: z
      .string()
      .exactOptional()
      .openapi({ description: "The id of the vCenter's datacenter this VM is contained in." }),
    diskCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of disks the VM has.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name of the VM. Note that this is not necessarily unique.',
      }),
    guestDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold.",
      }),
    memoryMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The size of the memory of the VM in MB.' }),
    powerState: z
      .enum(['POWER_STATE_UNSPECIFIED', 'ON', 'OFF', 'SUSPENDED'])
      .exactOptional()
      .openapi({ description: 'The power state of the VM at the moment list was taken.' }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the VM in vCenter.' }),
    vmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM.",
      }),
  })
  .openapi({ description: 'VmwareVmDetails describes a VM in vCenter.', required: [] })
  .openapi('VmwareVmDetails')

const VmwareVmsDetailsSchema = z
  .object({
    details: z
      .array(VmwareVmDetailsSchema)
      .exactOptional()
      .openapi({ description: 'The details of the vmware VMs.' }),
  })
  .openapi({ description: 'VmwareVmsDetails describes VMs in vCenter.', required: [] })
  .openapi('VmwareVmsDetails')

const FetchInventoryResponseSchema = z
  .object({
    awsVms: AwsVmsDetailsSchema.exactOptional().openapi({
      description: 'The description of the VMs in a Source of type AWS.',
    }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the source was last queried (if the result is from the cache).',
        readOnly: true,
      }),
    vmwareVms: VmwareVmsDetailsSchema.exactOptional().openapi({
      description: 'The description of the VMs in a Source of type Vmware.',
    }),
  })
  .openapi({ description: 'Response message for fetchInventory.', required: [] })
  .openapi('FetchInventoryResponse')

const FinalizeMigrationRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'FinalizeMigration' request." })
  .openapi('FinalizeMigrationRequest')

const GroupSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The create time timestamp.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided description of the group.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display name is a user defined name for this group which can be updated.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The Group name.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The update time timestamp.', readOnly: true }),
  })
  .openapi({
    description:
      "Describes message for 'Group' resource. The Group is a collections of several MigratingVms.",
    required: [],
  })
  .openapi('Group')

const ListCloneJobsResponseSchema = z
  .object({
    cloneJobs: z
      .array(CloneJobSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of clone jobs response.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListCloneJobs' request.", required: [] })
  .openapi('ListCloneJobsResponse')

const ListCutoverJobsResponseSchema = z
  .object({
    cutoverJobs: z
      .array(CutoverJobSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of cutover jobs response.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListCutoverJobs' request.", required: [] })
  .openapi('ListCutoverJobsResponse')

const ListDatacenterConnectorsResponseSchema = z
  .object({
    datacenterConnectors: z
      .array(DatacenterConnectorSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of sources response.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({
    description: "Response message for 'ListDatacenterConnectors' request.",
    required: [],
  })
  .openapi('ListDatacenterConnectorsResponse')

const ListGroupsResponseSchema = z
  .object({
    groups: z
      .array(GroupSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of groups response.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListGroups' request.", required: [] })
  .openapi('ListGroupsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
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
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const ReplicationSyncSchema = z
  .object({
    lastSyncTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The most updated snapshot created time in the source that finished replication.',
      }),
  })
  .openapi({
    description: 'ReplicationSync contain information about the last replica sync to the cloud.',
    required: [],
  })
  .openapi('ReplicationSync')

const SchedulePolicySchema = z
  .object({
    idleDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The idle duration between replication stages.' }),
    skipOsAdaptation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine.",
      }),
  })
  .openapi({ description: 'A policy for scheduling replications.', required: [] })
  .openapi('SchedulePolicy')

const MigratingVmSchema = z
  .object({
    awsSourceVmDetails: AwsSourceVmDetailsSchema.exactOptional().openapi({
      description: 'Output only. Details of the VM from an AWS source.',
      readOnly: true,
    }),
    computeEngineTargetDefaults: ComputeEngineTargetDefaultsSchema.exactOptional().openapi({
      description: 'Details of the target VM in Compute Engine.',
    }),
    computeEngineVmDefaults: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_defaults instead.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source).',
        readOnly: true,
      }),
    currentSyncInfo: ReplicationCycleSchema.exactOptional().openapi({
      description: 'Output only. Details of the current running replication cycle.',
      readOnly: true,
    }),
    cutoverForecast: CutoverForecastSchema.exactOptional().openapi({
      description:
        'Output only. Provides details of future CutoverJobs of a MigratingVm. Set to empty when cutover forecast is unavailable.',
      readOnly: true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description attached to the migrating VM by the user.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name attached to the MigratingVm by the user.' }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'Output only. Provides details on the state of the Migrating VM in case of an error in replication.',
      readOnly: true,
    }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The labels of the migrating VM.' }),
    lastReplicationCycle: ReplicationCycleSchema.exactOptional().openapi({
      description:
        'Output only. Details of the last replication cycle. This will be updated whenever a replication cycle is finished and is not to be confused with last_sync which is only updated on successful replication cycles.',
      readOnly: true,
    }),
    lastSync: ReplicationSyncSchema.exactOptional().openapi({
      description:
        'Output only. The most updated snapshot created time in the source that finished replication.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The identifier of the MigratingVm.', readOnly: true }),
    policy: SchedulePolicySchema.exactOptional().openapi({
      description: 'The replication schedule policy.',
    }),
    recentCloneJobs: z
      .array(CloneJobSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The recent clone jobs performed on the migrating VM. This field holds the vm\'s last completed clone job and the vm\'s running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.',
        readOnly: true,
      }),
    recentCutoverJobs: z
      .array(CutoverJobSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm\'s last completed cutover job and the vm\'s running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.',
        readOnly: true,
      }),
    sourceVmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.",
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'READY',
        'FIRST_SYNC',
        'ACTIVE',
        'CUTTING_OVER',
        'CUTOVER',
        'FINAL_SYNC',
        'PAUSED',
        'FINALIZING',
        'FINALIZED',
        'ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. State of the MigratingVm.', readOnly: true }),
    stateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last time the migrating VM state was updated.',
        readOnly: true,
      }),
    targetDefaults: TargetVMDetailsSchema.exactOptional().openapi({
      description:
        'The default configuration of the target VM that will be created in Google Cloud as a result of the migration. Deprecated: Use compute_engine_target_defaults instead.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last time the migrating VM resource was updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'MigratingVm describes the VM that will be migrated from a Source environment and its replication state.',
    required: [],
  })
  .openapi('MigratingVm')

const ListMigratingVmsResponseSchema = z
  .object({
    migratingVms: z
      .array(MigratingVmSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of Migrating VMs response.', readOnly: true }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListMigratingVms' request.", required: [] })
  .openapi('ListMigratingVmsResponse')

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
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
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
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
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

const ListReplicationCyclesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    replicationCycles: z
      .array(ReplicationCycleSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The list of replication cycles response.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListReplicationCycles' request.", required: [] })
  .openapi('ListReplicationCyclesResponse')

const VmwareSourceDetailsSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The credentials password. This is write only and can not be read in a GET operation.',
      }),
    thumbprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The thumbprint representing the certificate for the vcenter.' }),
    username: z.string().exactOptional().openapi({ description: 'The credentials username.' }),
    vcenterIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ip address of the vcenter this Source represents.' }),
  })
  .openapi({
    description:
      'VmwareSourceDetails message describes a specific source details for the vmware source type.',
    required: [],
  })
  .openapi('VmwareSourceDetails')

const SourceSchema = z
  .object({
    aws: AwsSourceDetailsSchema.exactOptional().openapi({
      description: 'AWS type source details.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The create time timestamp.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided description of the source.' }),
    error: StatusSchema.exactOptional().openapi({
      description: 'Output only. Provides details on the state of the Source in case of an error.',
      readOnly: true,
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The labels of the source.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The Source name.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The update time timestamp.', readOnly: true }),
    vmware: VmwareSourceDetailsSchema.exactOptional().openapi({
      description: 'Vmware type source details.',
    }),
  })
  .openapi({
    description:
      'Source message describes a specific vm migration Source resource. It contains the source environment information.',
    required: [],
  })
  .openapi('Source')

const ListSourcesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    sources: z
      .array(SourceSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of sources response.', readOnly: true }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListSources' request.", required: [] })
  .openapi('ListSourcesResponse')

const TargetProjectSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created).',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The target project's description." }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the target project.', readOnly: true }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The target project ID (number) or project name.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last time the target project resource was updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'TargetProject message represents a target Compute Engine project for a migration or a clone.',
    required: [],
  })
  .openapi('TargetProject')

const ListTargetProjectsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    targetProjects: z
      .array(TargetProjectSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of target response.', readOnly: true }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
  })
  .openapi({ description: "Response message for 'ListTargetProjects' call.", required: [] })
  .openapi('ListTargetProjectsResponse')

const VmUtilizationMetricsSchema = z
  .object({
    cpuAverage: z.int32().exactOptional().openapi({ description: 'Average CPU usage, percent.' }),
    cpuAveragePercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Average CPU usage, percent.' }),
    cpuMax: z.int32().exactOptional().openapi({ description: 'Max CPU usage, percent.' }),
    cpuMaxPercent: z.int32().exactOptional().openapi({ description: 'Max CPU usage, percent.' }),
    diskIoRateAverage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Average disk IO rate, in kilobytes per second.' }),
    diskIoRateAverageKbps: z
      .string()
      .exactOptional()
      .openapi({ description: 'Average disk IO rate, in kilobytes per second.' }),
    diskIoRateMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Max disk IO rate, in kilobytes per second.' }),
    diskIoRateMaxKbps: z
      .string()
      .exactOptional()
      .openapi({ description: 'Max disk IO rate, in kilobytes per second.' }),
    memoryAverage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Average memory usage, percent.' }),
    memoryAveragePercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Average memory usage, percent.' }),
    memoryMax: z.int32().exactOptional().openapi({ description: 'Max memory usage, percent.' }),
    memoryMaxPercent: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Max memory usage, percent.' }),
    networkThroughputAverage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.',
      }),
    networkThroughputAverageKbps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.',
      }),
    networkThroughputMax: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.',
      }),
    networkThroughputMaxKbps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.',
      }),
  })
  .openapi({ description: 'Utilization metrics values for a single VM.', required: [] })
  .openapi('VmUtilizationMetrics')

const VmUtilizationInfoSchema = z
  .object({
    utilization: VmUtilizationMetricsSchema.exactOptional().openapi({
      description: 'Utilization metrics for this VM.',
    }),
    vmId: z.string().exactOptional().openapi({ description: "The VM's ID in the source." }),
    vmwareVmDetails: VmwareVmDetailsSchema.exactOptional().openapi({
      description: 'The description of the VM in a Source of type Vmware.',
    }),
  })
  .openapi({ description: 'Utilization information of a single VM.', required: [] })
  .openapi('VmUtilizationInfo')

const UtilizationReportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed).',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The report display name, as assigned by the user.' }),
    error: StatusSchema.exactOptional().openapi({
      description: 'Output only. Provides details on the state of the report in case of an error.',
      readOnly: true,
    }),
    frameEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The report unique name.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'SUCCEEDED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the report.', readOnly: true }),
    stateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the state was last set.', readOnly: true }),
    timeFrame: z
      .enum(['TIME_FRAME_UNSPECIFIED', 'WEEK', 'MONTH', 'YEAR'])
      .exactOptional()
      .openapi({ description: 'Time frame of the report.' }),
    vmCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Total number of VMs included in the report.',
        readOnly: true,
      }),
    vms: z
      .array(VmUtilizationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored.',
      }),
    vmsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Total number of VMs included in the report.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.',
    required: [],
  })
  .openapi('UtilizationReport')

const ListUtilizationReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
        readOnly: true,
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Locations that could not be reached.',
        readOnly: true,
      }),
    utilizationReports: z
      .array(UtilizationReportSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The list of reports.', readOnly: true }),
  })
  .openapi({ description: "Response message for 'ListUtilizationReports' request.", required: [] })
  .openapi('ListUtilizationReportsResponse')

const MigrationErrorSchema = z
  .object({
    actionItem: LocalizedMessageSchema.exactOptional().openapi({
      description: 'Output only. Suggested action for solving the error.',
      readOnly: true,
    }),
    code: z
      .enum([
        'ERROR_CODE_UNSPECIFIED',
        'UNKNOWN_ERROR',
        'SOURCE_VALIDATION_ERROR',
        'SOURCE_REPLICATION_ERROR',
        'TARGET_REPLICATION_ERROR',
        'OS_ADAPTATION_ERROR',
        'CLONE_ERROR',
        'CUTOVER_ERROR',
        'UTILIZATION_REPORT_ERROR',
        'APPLIANCE_UPGRADE_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The error code.', readOnly: true }),
    errorMessage: LocalizedMessageSchema.exactOptional().openapi({
      description: 'Output only. The localized error message.',
      readOnly: true,
    }),
    errorTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the error occurred.', readOnly: true }),
    helpLinks: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. URL(s) pointing to additional information on handling the current error.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations.',
    required: [],
  })
  .openapi('MigrationError')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const PauseMigrationRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'PauseMigration' request." })
  .openapi('PauseMigrationRequest')

const RemoveGroupMigrationRequestSchema = z
  .object({
    migratingVm: z.string().exactOptional().openapi({ description: 'The MigratingVm to remove.' }),
  })
  .openapi({ description: "Request message for 'RemoveMigration' request.", required: [] })
  .openapi('RemoveGroupMigrationRequest')

const ResumeMigrationRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'ResumeMigration' request." })
  .openapi('ResumeMigrationRequest')

const StartMigrationRequestSchema = z
  .object({})
  .openapi({ description: "Request message for 'StartMigrationRequest' request." })
  .openapi('StartMigrationRequest')

const UpgradeApplianceRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
      }),
  })
  .openapi({ description: "Request message for 'UpgradeAppliance' request.", required: [] })
  .openapi('UpgradeApplianceRequest')

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
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1alpha1DatacenterConnectorUpgradeApplianceRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{datacenterConnector}:upgradeAppliance',
  tags: ['projects'],
  description:
    'Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.',
  operationId: 'vmmigration.projects.locations.sources.datacenterConnectors.upgradeAppliance',
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
      datacenterConnector: z
        .string()
        .openapi({
          param: {
            description: 'Required. The DatacenterConnector name.',
            in: 'path',
            name: 'datacenterConnector',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpgradeApplianceRequestSchema } } },
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
  ],
})

export const postV1alpha1GroupAddGroupMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{group}:addGroupMigration',
  tags: ['projects'],
  description: 'Adds a MigratingVm to a Group.',
  operationId: 'vmmigration.projects.locations.groups.addGroupMigration',
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
      group: z
        .string()
        .openapi({
          param: {
            description: 'Required. The full path name of the Group to add to.',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddGroupMigrationRequestSchema } } },
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
  ],
})

export const postV1alpha1GroupRemoveGroupMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{group}:removeGroupMigration',
  tags: ['projects'],
  description: 'Removes a MigratingVm from a Group.',
  operationId: 'vmmigration.projects.locations.groups.removeGroupMigration',
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
      group: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the Group.',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveGroupMigrationRequestSchema } } },
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
  ],
})

export const postV1alpha1MigratingVmFinalizeMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{migratingVm}:finalizeMigration',
  tags: ['projects'],
  description:
    'Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.finalizeMigration',
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
      migratingVm: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the MigratingVm.',
            in: 'path',
            name: 'migratingVm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FinalizeMigrationRequestSchema } } },
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
  ],
})

export const postV1alpha1MigratingVmPauseMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{migratingVm}:pauseMigration',
  tags: ['projects'],
  description:
    'Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.pauseMigration',
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
      migratingVm: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the MigratingVm.',
            in: 'path',
            name: 'migratingVm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseMigrationRequestSchema } } },
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
  ],
})

export const postV1alpha1MigratingVmResumeMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{migratingVm}:resumeMigration',
  tags: ['projects'],
  description:
    'Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.resumeMigration',
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
      migratingVm: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the MigratingVm.',
            in: 'path',
            name: 'migratingVm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumeMigrationRequestSchema } } },
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
  ],
})

export const postV1alpha1MigratingVmStartMigrationRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{migratingVm}:startMigration',
  tags: ['projects'],
  description:
    'Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.startMigration',
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
      migratingVm: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the MigratingVm.',
            in: 'path',
            name: 'migratingVm',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartMigrationRequestSchema } } },
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
  ],
})

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description:
    'Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.',
  operationId: 'vmmigration.projects.locations.targetProjects.get',
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
      view: z
        .enum(['UTILIZATION_REPORT_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The level of details of the report. Defaults to FULL',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['UTILIZATION_REPORT_VIEW_UNSPECIFIED', 'BASIC', 'FULL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The TargetProject name.',
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
      content: { 'application/json': { schema: TargetProjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description:
    'Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.',
  operationId: 'vmmigration.projects.locations.targetProjects.delete',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
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
            description: 'Required. The TargetProject name.',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1alpha1NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}',
  tags: ['projects'],
  description:
    'Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.',
  operationId: 'vmmigration.projects.locations.targetProjects.patch',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.',
            in: 'query',
            name: 'updateMask',
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
            description: 'Output only. The name of the target project.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetProjectSchema } } },
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
  ],
})

export const getV1alpha1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'vmmigration.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
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
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
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
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
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
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'vmmigration.projects.locations.operations.list',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
  ],
})

export const postV1alpha1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:cancel',
  tags: ['projects'],
  description: 'Initiates the cancellation of a running cutover job.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.cutoverJobs.cancel',
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
            description: 'Required. The cutover job id',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelCutoverJobRequestSchema } } },
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
  ],
})

export const getV1alpha1ParentCloneJobsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/cloneJobs',
  tags: ['projects'],
  description: 'Lists CloneJobs of a given migrating VM.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.cloneJobs.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of source VMs.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCloneJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentCloneJobsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/cloneJobs',
  tags: ['projects'],
  description: 'Initiates a Clone of a specific migrating VM.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.cloneJobs.create',
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
      cloneJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The clone job identifier.',
            in: 'query',
            name: 'cloneJobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The Clone's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloneJobSchema } } },
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
  ],
})

export const getV1alpha1ParentCutoverJobsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/cutoverJobs',
  tags: ['projects'],
  description: 'Lists CutoverJobs of a given migrating VM.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.cutoverJobs.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of migrating VMs.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCutoverJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentCutoverJobsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/cutoverJobs',
  tags: ['projects'],
  description:
    'Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.cutoverJobs.create',
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
      cutoverJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The cutover job identifier.',
            in: 'query',
            name: 'cutoverJobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The Cutover's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CutoverJobSchema } } },
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
  ],
})

export const getV1alpha1ParentDatacenterConnectorsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/datacenterConnectors',
  tags: ['projects'],
  description: 'Lists DatacenterConnectors in a given Source.',
  operationId: 'vmmigration.projects.locations.sources.datacenterConnectors.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of connectors.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDatacenterConnectorsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentDatacenterConnectorsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/datacenterConnectors',
  tags: ['projects'],
  description: 'Creates a new DatacenterConnector in a given Source.',
  operationId: 'vmmigration.projects.locations.sources.datacenterConnectors.create',
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
      datacenterConnectorId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The datacenterConnector identifier.',
            in: 'query',
            name: 'datacenterConnectorId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatacenterConnectorSchema } } },
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
  ],
})

export const getV1alpha1ParentGroupsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/groups',
  tags: ['projects'],
  description: 'Lists Groups in a given project and location.',
  operationId: 'vmmigration.projects.locations.groups.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of groups.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentGroupsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/groups',
  tags: ['projects'],
  description: 'Creates a new Group in a given project and location.',
  operationId: 'vmmigration.projects.locations.groups.create',
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
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The group identifier.',
            in: 'query',
            name: 'groupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The Group's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
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
  ],
})

export const getV1alpha1ParentMigratingVmsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/migratingVms',
  tags: ['projects'],
  description: 'Lists MigratingVms in a given Source.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'MIGRATING_VM_VIEW_UNSPECIFIED',
          'MIGRATING_VM_VIEW_BASIC',
          'MIGRATING_VM_VIEW_FULL',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The level of details of each migrating VM.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'MIGRATING_VM_VIEW_UNSPECIFIED',
                'MIGRATING_VM_VIEW_BASIC',
                'MIGRATING_VM_VIEW_FULL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of MigratingVms.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMigratingVmsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentMigratingVmsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/migratingVms',
  tags: ['projects'],
  description: 'Creates a new MigratingVm in a given Source.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.create',
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
      migratingVmId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The migratingVm identifier.',
            in: 'query',
            name: 'migratingVmId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The MigratingVm's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MigratingVmSchema } } },
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
  ],
})

export const getV1alpha1ParentReplicationCyclesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/replicationCycles',
  tags: ['projects'],
  description: 'Lists ReplicationCycles in a given MigratingVM.',
  operationId: 'vmmigration.projects.locations.sources.migratingVms.replicationCycles.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
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
            description:
              'Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of ReplicationCycles.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReplicationCyclesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1alpha1ParentSourcesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/sources',
  tags: ['projects'],
  description: 'Lists Sources in a given project and location.',
  operationId: 'vmmigration.projects.locations.sources.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of sources.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentSourcesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/sources',
  tags: ['projects'],
  description: 'Creates a new Source in a given project and location.',
  operationId: 'vmmigration.projects.locations.sources.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The source identifier.',
            in: 'query',
            name: 'sourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The Source's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SourceSchema } } },
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
  ],
})

export const getV1alpha1ParentTargetProjectsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/targetProjects',
  tags: ['projects'],
  description:
    'Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.',
  operationId: 'vmmigration.projects.locations.targetProjects.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent, which owns this collection of targets.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTargetProjectsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentTargetProjectsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/targetProjects',
  tags: ['projects'],
  description:
    'Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.',
  operationId: 'vmmigration.projects.locations.targetProjects.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      targetProjectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The target_project identifier.',
            in: 'query',
            name: 'targetProjectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The TargetProject's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetProjectSchema } } },
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
  ],
})

export const getV1alpha1ParentUtilizationReportsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/utilizationReports',
  tags: ['projects'],
  description: 'Lists Utilization Reports of the given Source.',
  operationId: 'vmmigration.projects.locations.sources.utilizationReports.list',
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
            description: 'Optional. The filter request.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. the order by fields for the result.',
            in: 'query',
            name: 'orderBy',
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
            description:
              'Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
            description:
              'Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['UTILIZATION_REPORT_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The level of details of each report. Defaults to BASIC.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['UTILIZATION_REPORT_VIEW_UNSPECIFIED', 'BASIC', 'FULL'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The Utilization Reports parent.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUtilizationReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1alpha1ParentUtilizationReportsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/utilizationReports',
  tags: ['projects'],
  description: 'Creates a new UtilizationReport.',
  operationId: 'vmmigration.projects.locations.sources.utilizationReports.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      utilizationReportId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.",
            in: 'query',
            name: 'utilizationReportId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: "Required. The Utilization Report's parent.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UtilizationReportSchema } } },
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
  ],
})

export const getV1alpha1SourceFetchInventoryRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{source}:fetchInventory',
  tags: ['projects'],
  description:
    "List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.",
  operationId: 'vmmigration.projects.locations.sources.fetchInventory',
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
      forceRefresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.',
            in: 'query',
            name: 'forceRefresh',
            schema: { type: 'boolean' },
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
            description:
              'The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.',
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
            description:
              'A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      source: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the Source.',
            in: 'path',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchInventoryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
