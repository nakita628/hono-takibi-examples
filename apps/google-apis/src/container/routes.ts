import { createRoute, z } from '@hono/zod-openapi'

const DailyMaintenanceWindowSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.',
      }),
  })
  .openapi({ description: 'Time window specified for daily maintenance operations.', required: [] })
  .openapi('DailyMaintenanceWindow')

const MaintenanceExclusionOptionsSchema = z
  .object({
    scope: z
      .enum(['NO_UPGRADES', 'NO_MINOR_UPGRADES', 'NO_MINOR_OR_NODE_UPGRADES'])
      .exactOptional()
      .openapi({
        description:
          'Scope specifies the upgrade scope which upgrades are blocked by the exclusion.',
      }),
  })
  .openapi({ description: 'Represents the Maintenance exclusion option.', required: [] })
  .openapi('MaintenanceExclusionOptions')

const TimeWindowSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the window ends. The end time should take place after the start time.',
      }),
    maintenanceExclusionOptions: MaintenanceExclusionOptionsSchema.exactOptional().openapi({
      description: 'MaintenanceExclusionOptions provides maintenance exclusion related options.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that the window first starts.' }),
  })
  .openapi({ description: 'Represents an arbitrary window of time.', required: [] })
  .openapi('TimeWindow')

const RecurringTimeWindowSchema = z
  .object({
    recurrence: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you'd use: `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR` To repeat some window daily (equivalent to the DailyMaintenanceWindow): `FREQ=DAILY` For the first weekend of every month: `FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU` This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you'd use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: ``` start time = 2019-01-05T00:00:00Z end time = 2019-01-07T23:59:00Z recurrence = FREQ=WEEKLY;BYDAY=SA ``` Note the start and end time's specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.",
      }),
    window: TimeWindowSchema.exactOptional().openapi({
      description: 'The window of the first recurrence.',
    }),
  })
  .openapi({ description: 'Represents an arbitrary window of time that recurs.', required: [] })
  .openapi('RecurringTimeWindow')

type MaintenanceWindowType = {
  dailyMaintenanceWindow?: z.infer<typeof DailyMaintenanceWindowSchema>
  maintenanceExclusions?: { [key: string]: z.infer<typeof TimeWindowSchema> }
  recurringWindow?: z.infer<typeof RecurringTimeWindowSchema>
}

const GPUDriverInstallationConfigSchema = z
  .object({
    gpuDriverVersion: z
      .enum(['GPU_DRIVER_VERSION_UNSPECIFIED', 'INSTALLATION_DISABLED', 'DEFAULT', 'LATEST'])
      .exactOptional()
      .openapi({ description: 'Mode for how the GPU driver is installed.' }),
  })
  .openapi({
    description:
      'GPUDriverInstallationConfig specifies the version of GPU driver to be auto installed.',
    required: [],
  })
  .openapi('GPUDriverInstallationConfig')

const GPUSharingConfigSchema = z
  .object({
    gpuSharingStrategy: z
      .enum(['GPU_SHARING_STRATEGY_UNSPECIFIED', 'TIME_SHARING'])
      .exactOptional()
      .openapi({ description: 'The type of GPU sharing strategy to enable on the GPU node.' }),
    maxSharedClientsPerGpu: z
      .string()
      .exactOptional()
      .openapi({ description: 'The max number of containers that can share a physical GPU.' }),
  })
  .openapi({
    description:
      'GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.',
    required: [],
  })
  .openapi('GPUSharingConfig')

const AcceleratorConfigSchema = z
  .object({
    acceleratorCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of the accelerator cards exposed to an instance.' }),
    acceleratorType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus)',
      }),
    gpuDriverInstallationConfig: GPUDriverInstallationConfigSchema.exactOptional().openapi({
      description: 'The configuration for auto installation of GPU driver.',
    }),
    gpuPartitionSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).',
      }),
    gpuSharingConfig: GPUSharingConfigSchema.exactOptional().openapi({
      description: 'The configuration for GPU sharing options.',
    }),
    maxTimeSharedClientsPerGpu: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The number of time-shared GPU resources to expose for each physical GPU.',
      }),
  })
  .openapi({
    description: 'AcceleratorConfig represents a Hardware Accelerator request.',
    required: [],
  })
  .openapi('AcceleratorConfig')

const AdvancedMachineFeaturesSchema = z
  .object({
    threadsPerCore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.',
      }),
  })
  .openapi({
    description: 'Specifies options for controlling advanced machine features.',
    required: [],
  })
  .openapi('AdvancedMachineFeatures')

const ConfidentialNodesSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Confidential Nodes feature is enabled.' }),
  })
  .openapi({
    description:
      'ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.',
    required: [],
  })
  .openapi('ConfidentialNodes')

const EphemeralStorageConfigSchema = z
  .object({
    localSsdCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.",
      }),
  })
  .openapi({
    description:
      'EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.',
    required: [],
  })
  .openapi('EphemeralStorageConfig')

const EphemeralStorageLocalSsdConfigSchema = z
  .object({
    localSsdCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.",
      }),
  })
  .openapi({
    description:
      'EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs.',
    required: [],
  })
  .openapi('EphemeralStorageLocalSsdConfig')

const FastSocketSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Fast Socket features are enabled in the node pool.' }),
  })
  .openapi({ description: 'Configuration of Fast Socket feature.', required: [] })
  .openapi('FastSocket')

const GcfsConfigSchema = z
  .object({ enabled: z.boolean().exactOptional().openapi({ description: 'Whether to use GCFS.' }) })
  .openapi({
    description: 'GcfsConfig contains configurations of Google Container File System.',
    required: [],
  })
  .openapi('GcfsConfig')

const VirtualNICSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether gVNIC features are enabled in the node pool.' }),
  })
  .openapi({ description: 'Configuration of gVNIC feature.', required: [] })
  .openapi('VirtualNIC')

const OpportunisticMaintenanceStrategySchema = z
  .object({
    maintenanceAvailabilityWindow: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The window of time that opportunistic maintenance can run. Example: A setting of 14 days implies that opportunistic maintenance can only be ran in the 2 weeks leading up to the scheduled maintenance date. Setting 28 days allows opportunistic maintenance to run at any time in the scheduled maintenance window (all `PERIODIC` maintenance is set 28 days in advance).',
      }),
    minNodesPerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum nodes required to be available in a pool. Blocks maintenance if it would cause the number of running nodes to dip below this value.',
      }),
    nodeIdleTimeWindow: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of time that a node can remain idle (no customer owned workloads running), before triggering maintenance.',
      }),
  })
  .openapi({
    description: 'Strategy that will trigger maintenance on behalf of the customer.',
    required: [],
  })
  .openapi('OpportunisticMaintenanceStrategy')

const HostMaintenancePolicySchema = z
  .object({
    maintenanceInterval: z
      .enum(['MAINTENANCE_INTERVAL_UNSPECIFIED', 'AS_NEEDED', 'PERIODIC'])
      .exactOptional()
      .openapi({ description: 'Specifies the frequency of planned maintenance events.' }),
    opportunisticMaintenanceStrategy:
      OpportunisticMaintenanceStrategySchema.exactOptional().openapi({
        description: 'Strategy that will trigger maintenance on behalf of the customer.',
      }),
  })
  .openapi({
    description:
      'HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on.',
    required: [],
  })
  .openapi('HostMaintenancePolicy')

const NodeKubeletConfigSchema = z
  .object({
    cpuCfsQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Enable CPU CFS quota enforcement for containers that specify CPU limits. This option is enabled by default which makes kubelet use CFS quota (https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all. Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits. The default value is 'true' if unspecified.",
      }),
    cpuCfsQuotaPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set the CPU CFS quota period value \'cpu.cfs_period_us\'. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration.',
      }),
    cpuManagerPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/ The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is \'none\' if unspecified.',
      }),
    insecureKubeletReadonlyPortEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable Kubelet read only port.' }),
    podPidsLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.',
      }),
  })
  .openapi({ description: 'Node kubelet configs.', required: [] })
  .openapi('NodeKubeletConfig')

const LinuxNodeConfigSchema = z
  .object({
    cgroupMode: z
      .enum(['CGROUP_MODE_UNSPECIFIED', 'CGROUP_MODE_V1', 'CGROUP_MODE_V2'])
      .exactOptional()
      .openapi({ description: 'cgroup_mode specifies the cgroup mode to be used on the node.' }),
    sysctls: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. The following parameters are supported. net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse',
      }),
  })
  .openapi({ description: 'Parameters that can be configured on Linux nodes.', required: [] })
  .openapi('LinuxNodeConfig')

const LocalNvmeSsdBlockConfigSchema = z
  .object({
    localSsdCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.",
      }),
  })
  .openapi({
    description:
      'LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs',
    required: [],
  })
  .openapi('LocalNvmeSsdBlockConfig')

const LoggingVariantConfigSchema = z
  .object({
    variant: z
      .enum(['VARIANT_UNSPECIFIED', 'DEFAULT', 'MAX_THROUGHPUT'])
      .exactOptional()
      .openapi({ description: 'Logging variant deployed on nodes.' }),
  })
  .openapi({
    description: 'LoggingVariantConfig specifies the behaviour of the logging component.',
    required: [],
  })
  .openapi('LoggingVariantConfig')

const NodePoolLoggingConfigSchema = z
  .object({
    variantConfig: LoggingVariantConfigSchema.exactOptional().openapi({
      description: 'Logging variant configuration.',
    }),
  })
  .openapi({
    description: 'NodePoolLoggingConfig specifies logging configuration for nodepools.',
    required: [],
  })
  .openapi('NodePoolLoggingConfig')

const ReservationAffinitySchema = z
  .object({
    consumeReservationType: z
      .enum(['UNSPECIFIED', 'NO_RESERVATION', 'ANY_RESERVATION', 'SPECIFIC_RESERVATION'])
      .exactOptional()
      .openapi({ description: 'Corresponds to the type of reservation consumption.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.',
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Corresponds to the label value(s) of reservation resource(s).' }),
  })
  .openapi({
    description:
      '[ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.',
    required: [],
  })
  .openapi('ReservationAffinity')

const ResourceManagerTagsSchema = z
  .object({
    tags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Tags must be in one of the following formats ([KEY]=[VALUE]) 1. `tagKeys/{tag_key_id}=tagValues/{tag_value_id}` 2. `{org_id}/{tag_key_name}={tag_value_name}` 3. `{project_id}/{tag_key_name}={tag_value_name}`',
      }),
  })
  .openapi({
    description:
      'A map of resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Tags must be according to specifications in https://cloud.google.com/vpc/docs/tags-firewalls-overview#specifications. A maximum of 5 tag key-value pairs can be specified. Existing tags will be replaced with new values.',
    required: [],
  })
  .openapi('ResourceManagerTags')

const SandboxConfigSchema = z
  .object({
    sandboxType: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: "Type of the sandbox to use for the node (e.g. 'gvisor')",
      }),
    type: z
      .enum(['UNSPECIFIED', 'GVISOR'])
      .exactOptional()
      .openapi({ description: 'Type of the sandbox to use for the node.' }),
  })
  .openapi({
    description: 'SandboxConfig contains configurations of the sandbox to use for the node.',
    required: [],
  })
  .openapi('SandboxConfig')

const SecondaryBootDiskSchema = z
  .object({
    diskImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fully-qualified resource ID for an existing disk image.' }),
    mode: z
      .enum(['MODE_UNSPECIFIED', 'CONTAINER_IMAGE_CACHE'])
      .exactOptional()
      .openapi({ description: 'Disk mode (container image cache, etc.)' }),
  })
  .openapi({
    description:
      'SecondaryBootDisk represents a persistent disk attached to a node with special configurations based on its mode.',
    required: [],
  })
  .openapi('SecondaryBootDisk')

const ShieldedInstanceConfigSchema = z
  .object({
    enableIntegrityMonitoring: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.',
      }),
    enableSecureBoot: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.',
      }),
  })
  .openapi({ description: 'A set of Shielded Instance options.', required: [] })
  .openapi('ShieldedInstanceConfig')

const NodeAffinitySchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key for NodeAffinity.' }),
    operator: z
      .enum(['OPERATOR_UNSPECIFIED', 'IN', 'NOT_IN'])
      .exactOptional()
      .openapi({ description: 'Operator for NodeAffinity.' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Values for NodeAffinity.' }),
  })
  .openapi({
    description:
      'Specifies the NodeAffinity key, values, and affinity operator according to [shared sole tenant node group affinities](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes#node_affinity_and_anti-affinity).',
    required: [],
  })
  .openapi('NodeAffinity')

const SoleTenantConfigSchema = z
  .object({
    nodeAffinities: z
      .array(NodeAffinitySchema)
      .exactOptional()
      .openapi({ description: 'NodeAffinities used to match to a shared sole tenant node group.' }),
  })
  .openapi({
    description:
      'SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool.',
    required: [],
  })
  .openapi('SoleTenantConfig')

const NodeTaintSchema = z
  .object({
    effect: z
      .enum(['EFFECT_UNSPECIFIED', 'NO_SCHEDULE', 'PREFER_NO_SCHEDULE', 'NO_EXECUTE'])
      .exactOptional()
      .openapi({ description: 'Effect for taint.' }),
    key: z.string().exactOptional().openapi({ description: 'Key for taint.' }),
    value: z.string().exactOptional().openapi({ description: 'Value for taint.' }),
  })
  .openapi({
    description:
      'Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.',
    required: [],
  })
  .openapi('NodeTaint')

const WindowsNodeConfigSchema = z
  .object({
    osVersion: z
      .enum(['OS_VERSION_UNSPECIFIED', 'OS_VERSION_LTSC2019', 'OS_VERSION_LTSC2022'])
      .exactOptional()
      .openapi({
        description: 'OSVersion specifies the Windows node config to be used on the node',
      }),
  })
  .openapi({
    description:
      'Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings',
    required: [],
  })
  .openapi('WindowsNodeConfig')

const WorkloadMetadataConfigSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'GCE_METADATA', 'GKE_METADATA'])
      .exactOptional()
      .openapi({
        description:
          'Mode is the configuration for how to expose metadata to workloads running on the node pool.',
      }),
    nodeMetadata: z
      .enum(['UNSPECIFIED', 'SECURE', 'EXPOSE', 'GKE_METADATA_SERVER'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.',
      }),
  })
  .openapi({
    description:
      'WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.',
    required: [],
  })
  .openapi('WorkloadMetadataConfig')

type NodeConfigType = {
  accelerators?: z.infer<typeof AcceleratorConfigSchema>[]
  advancedMachineFeatures?: z.infer<typeof AdvancedMachineFeaturesSchema>
  bootDiskKmsKey?: string
  confidentialNodes?: z.infer<typeof ConfidentialNodesSchema>
  diskSizeGb?: number
  diskType?: string
  enableConfidentialStorage?: boolean
  ephemeralStorageConfig?: z.infer<typeof EphemeralStorageConfigSchema>
  ephemeralStorageLocalSsdConfig?: z.infer<typeof EphemeralStorageLocalSsdConfigSchema>
  fastSocket?: z.infer<typeof FastSocketSchema>
  gcfsConfig?: z.infer<typeof GcfsConfigSchema>
  gvnic?: z.infer<typeof VirtualNICSchema>
  hostMaintenancePolicy?: z.infer<typeof HostMaintenancePolicySchema>
  imageType?: string
  kubeletConfig?: z.infer<typeof NodeKubeletConfigSchema>
  labels?: { [key: string]: string }
  linuxNodeConfig?: z.infer<typeof LinuxNodeConfigSchema>
  localNvmeSsdBlockConfig?: z.infer<typeof LocalNvmeSsdBlockConfigSchema>
  localSsdCount?: number
  loggingConfig?: z.infer<typeof NodePoolLoggingConfigSchema>
  machineType?: string
  metadata?: { [key: string]: string }
  minCpuPlatform?: string
  nodeGroup?: string
  oauthScopes?: string[]
  preemptible?: boolean
  reservationAffinity?: z.infer<typeof ReservationAffinitySchema>
  resourceLabels?: { [key: string]: string }
  resourceManagerTags?: z.infer<typeof ResourceManagerTagsSchema>
  sandboxConfig?: z.infer<typeof SandboxConfigSchema>
  secondaryBootDisks?: z.infer<typeof SecondaryBootDiskSchema>[]
  serviceAccount?: string
  shieldedInstanceConfig?: z.infer<typeof ShieldedInstanceConfigSchema>
  soleTenantConfig?: z.infer<typeof SoleTenantConfigSchema>
  spot?: boolean
  tags?: string[]
  taints?: z.infer<typeof NodeTaintSchema>[]
  windowsNodeConfig?: z.infer<typeof WindowsNodeConfigSchema>
  workloadMetadataConfig?: z.infer<typeof WorkloadMetadataConfigSchema>
}

const AdditionalNodeNetworkConfigSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the VPC where the additional interface belongs' }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the subnetwork where the additional interface belongs' }),
  })
  .openapi({
    description:
      'AdditionalNodeNetworkConfig is the configuration for additional node networks within the NodeNetworkConfig message',
    required: [],
  })
  .openapi('AdditionalNodeNetworkConfig')

const MaxPodsConstraintSchema = z
  .object({
    maxPodsPerNode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Constraint enforced on the max num of pods per node.' }),
  })
  .openapi({ description: 'Constraints applied to pods.', required: [] })
  .openapi('MaxPodsConstraint')

const AdditionalPodNetworkConfigSchema = z
  .object({
    maxPodsPerNode: MaxPodsConstraintSchema.exactOptional().openapi({
      description: 'The maximum number of pods per node which use this pod network',
    }),
    secondaryPodRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the secondary range on the subnet which provides IP address for this pod range',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the subnetwork where the additional pod network belongs' }),
  })
  .openapi({
    description:
      'AdditionalPodNetworkConfig is the configuration for additional pod networks within the NodeNetworkConfig message',
    required: [],
  })
  .openapi('AdditionalPodNetworkConfig')

const NetworkPerformanceConfigSchema = z
  .object({
    externalIpEgressBandwidthTier: z
      .enum(['TIER_UNSPECIFIED', 'TIER_1'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses.',
      }),
    totalEgressBandwidthTier: z
      .enum(['TIER_UNSPECIFIED', 'TIER_1'])
      .exactOptional()
      .openapi({ description: 'Specifies the total network bandwidth tier for the NodePool.' }),
  })
  .openapi({ description: 'Configuration of all network bandwidth tiers', required: [] })
  .openapi('NetworkPerformanceConfig')

const PodCIDROverprovisionConfigSchema = z
  .object({
    disable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default.',
      }),
  })
  .openapi({
    description: '[PRIVATE FIELD] Config for pod CIDR size overprovisioning.',
    required: [],
  })
  .openapi('PodCIDROverprovisionConfig')

type NodeNetworkConfigType = {
  additionalNodeNetworkConfigs?: z.infer<typeof AdditionalNodeNetworkConfigSchema>[]
  additionalPodNetworkConfigs?: z.infer<typeof AdditionalPodNetworkConfigSchema>[]
  createPodRange?: boolean
  enablePrivateNodes?: boolean
  networkPerformanceConfig?: z.infer<typeof NetworkPerformanceConfigSchema>
  podCidrOverprovisionConfig?: z.infer<typeof PodCIDROverprovisionConfigSchema>
  podIpv4CidrBlock?: string
  podIpv4RangeUtilization?: number
  podRange?: string
}

const MetricSchema = z
  .object({
    doubleValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'For metrics with floating point value.' }),
    intValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'For metrics with integer value.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Metric name, e.g., "nodes total", "percent done".' }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'For metrics with custom values (ratios, visual progress, etc.).' }),
  })
  .openapi({ description: 'Progress metric is (string, int|float|string) pair.', required: [] })
  .openapi('Metric')

type OperationProgressType = {
  metrics?: z.infer<typeof MetricSchema>[]
  name?: string
  stages?: OperationProgressType[]
  status?: 'STATUS_UNSPECIFIED' | 'PENDING' | 'RUNNING' | 'DONE' | 'ABORTING'
}

const RangeInfoSchema = z
  .object({
    rangeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. [Output only] Name of a range.', readOnly: true }),
    utilization: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. [Output only] The utilization of the range.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'RangeInfo contains the range name and the range utilization by this cluster.',
    required: [],
  })
  .openapi('RangeInfo')

const AdditionalPodRangesConfigSchema = z
  .object({
    podRangeInfo: z
      .array(RangeInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. [Output only] Information for additional pod range.',
        readOnly: true,
      }),
    podRangeNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Name for pod secondary ipv4 range which has the actual range defined ahead.',
      }),
  })
  .openapi({
    description:
      'AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.',
    required: [],
  })
  .openapi('AdditionalPodRangesConfig')

const CloudRunConfigSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Cloud Run addon is enabled for this cluster.' }),
    loadBalancerType: z
      .enum([
        'LOAD_BALANCER_TYPE_UNSPECIFIED',
        'LOAD_BALANCER_TYPE_EXTERNAL',
        'LOAD_BALANCER_TYPE_INTERNAL',
      ])
      .exactOptional()
      .openapi({ description: 'Which load balancer type is installed for Cloud Run.' }),
  })
  .openapi({ description: 'Configuration options for the Cloud Run feature.', required: [] })
  .openapi('CloudRunConfig')

const ConfigConnectorConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Cloud Connector is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration options for the Config Connector add-on.', required: [] })
  .openapi('ConfigConnectorConfig')

const DnsCacheConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether NodeLocal DNSCache is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration for NodeLocal DNSCache', required: [] })
  .openapi('DnsCacheConfig')

const GcePersistentDiskCsiDriverConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the Compute Engine PD CSI driver is enabled for this cluster.',
      }),
  })
  .openapi({ description: 'Configuration for the Compute Engine PD CSI driver.', required: [] })
  .openapi('GcePersistentDiskCsiDriverConfig')

const GcpFilestoreCsiDriverConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the GCP Filestore CSI driver is enabled for this cluster.',
      }),
  })
  .openapi({ description: 'Configuration for the GCP Filestore CSI driver.', required: [] })
  .openapi('GcpFilestoreCsiDriverConfig')

const GcsFuseCsiDriverConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the Cloud Storage Fuse CSI driver is enabled for this cluster.',
      }),
  })
  .openapi({ description: 'Configuration for the Cloud Storage Fuse CSI driver.', required: [] })
  .openapi('GcsFuseCsiDriverConfig')

const GkeBackupAgentConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Backup for GKE agent is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration for the Backup for GKE Agent.', required: [] })
  .openapi('GkeBackupAgentConfig')

const HorizontalPodAutoscalingSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring.',
      }),
  })
  .openapi({
    description:
      'Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.',
    required: [],
  })
  .openapi('HorizontalPodAutoscaling')

const HttpLoadBalancingSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers.',
      }),
  })
  .openapi({
    description:
      'Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.',
    required: [],
  })
  .openapi('HttpLoadBalancing')

const IstioConfigSchema = z
  .object({
    auth: z
      .enum(['AUTH_NONE', 'AUTH_MUTUAL_TLS'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The specified Istio auth mode, either none, or mutual TLS.',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Whether Istio is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration options for Istio addon.', required: [] })
  .openapi('IstioConfig')

const KalmConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Whether KALM is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration options for the KALM addon.', required: [] })
  .openapi('KalmConfig')

const KubernetesDashboardSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Kubernetes Dashboard is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration for the Kubernetes Dashboard.', required: [] })
  .openapi('KubernetesDashboard')

const NetworkPolicyConfigSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether NetworkPolicy is enabled for this cluster.' }),
  })
  .openapi({
    description:
      'Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.',
    required: [],
  })
  .openapi('NetworkPolicyConfig')

const StatefulHAConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Stateful HA add-on is enabled for this cluster.' }),
  })
  .openapi({ description: 'Configuration for the Stateful HA add-on.', required: [] })
  .openapi('StatefulHAConfig')

const AddonsConfigSchema = z
  .object({
    cloudRunConfig: CloudRunConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the Cloud Run addon. The `IstioConfig` addon must be enabled in order to enable Cloud Run addon. This option can only be enabled at cluster creation time.',
    }),
    configConnectorConfig: ConfigConnectorConfigSchema.exactOptional().openapi({
      description:
        'Configuration for the ConfigConnector add-on, a Kubernetes extension to manage hosted GCP services through the Kubernetes API',
    }),
    dnsCacheConfig: DnsCacheConfigSchema.exactOptional().openapi({
      description: 'Configuration for NodeLocalDNS, a dns cache running on cluster nodes',
    }),
    gcePersistentDiskCsiDriverConfig:
      GcePersistentDiskCsiDriverConfigSchema.exactOptional().openapi({
        description: 'Configuration for the Compute Engine Persistent Disk CSI driver.',
      }),
    gcpFilestoreCsiDriverConfig: GcpFilestoreCsiDriverConfigSchema.exactOptional().openapi({
      description: 'Configuration for the GCP Filestore CSI driver.',
    }),
    gcsFuseCsiDriverConfig: GcsFuseCsiDriverConfigSchema.exactOptional().openapi({
      description: 'Configuration for the Cloud Storage Fuse CSI driver.',
    }),
    gkeBackupAgentConfig: GkeBackupAgentConfigSchema.exactOptional().openapi({
      description: 'Configuration for the Backup for GKE agent addon.',
    }),
    horizontalPodAutoscaling: HorizontalPodAutoscalingSchema.exactOptional().openapi({
      description:
        'Configuration for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.',
    }),
    httpLoadBalancing: HttpLoadBalancingSchema.exactOptional().openapi({
      description:
        'Configuration for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.',
    }),
    istioConfig: IstioConfigSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Configuration for Istio, an open platform to connect, manage, and secure microservices.',
    }),
    kalmConfig: KalmConfigSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Configuration for the KALM addon, which manages the lifecycle of k8s applications.',
    }),
    kubernetesDashboard: KubernetesDashboardSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Configuration for the Kubernetes Dashboard. This addon is deprecated, and will be disabled in 1.15. It is recommended to use the Cloud Console to manage and monitor your Kubernetes clusters, workloads and applications. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards',
    }),
    networkPolicyConfig: NetworkPolicyConfigSchema.exactOptional().openapi({
      description:
        'Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.',
    }),
    statefulHaConfig: StatefulHAConfigSchema.exactOptional().openapi({
      description: 'Optional. Configuration for the StatefulHA add-on.',
    }),
  })
  .openapi({
    description:
      'Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.',
    required: [],
  })
  .openapi('AddonsConfig')

const AdvancedDatapathObservabilityConfigSchema = z
  .object({
    enableMetrics: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose flow metrics on nodes' }),
    enableRelay: z.boolean().exactOptional().openapi({ description: 'Enable Relay component' }),
    relayMode: z
      .enum(['RELAY_MODE_UNSPECIFIED', 'DISABLED', 'INTERNAL_VPC_LB', 'EXTERNAL_LB'])
      .exactOptional()
      .openapi({ description: 'Method used to make Relay available' }),
  })
  .openapi({
    description:
      'AdvancedDatapathObservabilityConfig specifies configuration of observability features of advanced datapath.',
    required: [],
  })
  .openapi('AdvancedDatapathObservabilityConfig')

const AuthenticatorGroupsConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this cluster should return group membership lookups during authentication using a group of security groups.',
      }),
    securityGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the security group-of-groups to be used. Only relevant if enabled = true.',
      }),
  })
  .openapi({
    description: 'Configuration for returning group information from authenticators.',
    required: [],
  })
  .openapi('AuthenticatorGroupsConfig')

const AutoUpgradeOptionsSchema = z
  .object({
    autoUpgradeStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] This field is set when upgrades are about to commence with the description of the upgrade.',
      }),
  })
  .openapi({
    description:
      'AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.',
    required: [],
  })
  .openapi('AutoUpgradeOptions')

const AutopilotConversionStatusSchema = z
  .object({
    state: z
      .enum(['STATE_UNSPECIFIED', 'DONE'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the conversion.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'AutopilotConversionStatus represents conversion status.', required: [] })
  .openapi('AutopilotConversionStatus')

const WorkloadPolicyConfigSchema = z
  .object({
    allowNetAdmin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, workloads can use NET_ADMIN capability.' }),
  })
  .openapi({
    description:
      'WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters.',
    required: [],
  })
  .openapi('WorkloadPolicyConfig')

const AutopilotSchema = z
  .object({
    conversionStatus: AutopilotConversionStatusSchema.exactOptional().openapi({
      description: 'Output only. ConversionStatus shows conversion status.',
      readOnly: true,
    }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Enable Autopilot' }),
    workloadPolicyConfig: WorkloadPolicyConfigSchema.exactOptional().openapi({
      description: 'Workload policy configuration for Autopilot.',
    }),
  })
  .openapi({
    description: 'Autopilot is the configuration for Autopilot settings on the cluster.',
    required: [],
  })
  .openapi('Autopilot')

const AutopilotCompatibilityIssueSchema = z
  .object({
    constraintType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The constraint type of the issue.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the issue.' }),
    documentationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL to a public documnetation, which addresses resolving this issue.',
      }),
    incompatibilityType: z
      .enum([
        'UNSPECIFIED',
        'INCOMPATIBILITY',
        'ADDITIONAL_CONFIG_REQUIRED',
        'PASSED_WITH_OPTIONAL_CONFIG',
      ])
      .exactOptional()
      .openapi({ description: 'The incompatibility type of this issue.' }),
    lastObservation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time when this issue was observed.' }),
    subjects: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The name of the resources which are subject to this issue.' }),
  })
  .openapi({
    description:
      'AutopilotCompatibilityIssue contains information about a specific compatibility issue with Autopilot mode.',
    required: [],
  })
  .openapi('AutopilotCompatibilityIssue')

const NodeManagementSchema = z
  .object({
    autoRepair: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the nodes will be automatically repaired.' }),
    autoUpgrade: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the nodes will be automatically upgraded.' }),
    upgradeOptions: AutoUpgradeOptionsSchema.exactOptional().openapi({
      description: 'Specifies the Auto Upgrade knobs for the node pool.',
    }),
  })
  .openapi({
    description:
      'NodeManagement defines the set of node management services turned on for the node pool.',
    required: [],
  })
  .openapi('NodeManagement')

const AutoscaledRolloutPolicySchema = z
  .object({})
  .openapi({
    description:
      'Autoscaled rollout policy uses cluster autoscaler during blue-green upgrades to scale both the green and blue pools.',
  })
  .openapi('AutoscaledRolloutPolicy')

const StandardRolloutPolicySchema = z
  .object({
    batchNodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of blue nodes to drain in a batch.' }),
    batchPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].',
      }),
    batchSoakDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Soak time after each batch gets drained. Default to zero.' }),
  })
  .openapi({
    description: 'Standard rollout policy is the default policy for blue-green.',
    required: [],
  })
  .openapi('StandardRolloutPolicy')

const BlueGreenSettingsSchema = z
  .object({
    autoscaledRolloutPolicy: AutoscaledRolloutPolicySchema.exactOptional().openapi({
      description: 'Autoscaled policy for cluster autoscaler enabled blue-green upgrade.',
    }),
    nodePoolSoakDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.',
      }),
    standardRolloutPolicy: StandardRolloutPolicySchema.exactOptional().openapi({
      description: 'Standard policy for the blue-green upgrade.',
    }),
  })
  .openapi({ description: 'Settings for blue-green upgrade.', required: [] })
  .openapi('BlueGreenSettings')

const UpgradeSettingsSchema = z
  .object({
    blueGreenSettings: BlueGreenSettingsSchema.exactOptional().openapi({
      description: 'Settings for blue-green upgrade strategy.',
    }),
    maxSurge: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.',
      }),
    maxUnavailable: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.',
      }),
    strategy: z
      .enum(['NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED', 'BLUE_GREEN', 'SURGE'])
      .exactOptional()
      .openapi({ description: 'Update strategy of the node pool.' }),
  })
  .openapi({
    description:
      'These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.',
    required: [],
  })
  .openapi('UpgradeSettings')

const AutoprovisioningNodePoolDefaultsSchema = z
  .object({
    bootDiskKmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption',
      }),
    diskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.',
      }),
    diskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'",
      }),
    imageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The image type to use for NAP created node. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.',
      }),
    insecureKubeletReadonlyPortEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable Kubelet read only port.' }),
    management: NodeManagementSchema.exactOptional().openapi({
      description: 'NodeManagement configuration for this NodePool.',
    }),
    minCpuPlatform: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Deprecated. Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: Intel Haswell or minCpuPlatform: Intel Sandy Bridge. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform). This field is deprecated, min_cpu_platform should be specified using `cloud.google.com/requested-min-cpu-platform` label selector on the pod. To unset the min cpu platform field pass "automatic" as field value.',
      }),
    oauthScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.',
      }),
    shieldedInstanceConfig: ShieldedInstanceConfigSchema.exactOptional().openapi({
      description: 'Shielded Instance options.',
    }),
    upgradeSettings: UpgradeSettingsSchema.exactOptional().openapi({
      description: 'Upgrade settings control disruption and speed of the upgrade.',
    }),
  })
  .openapi({
    description:
      'AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.',
    required: [],
  })
  .openapi('AutoprovisioningNodePoolDefaults')

const AvailableVersionSchema = z
  .object({
    reason: z.string().exactOptional().openapi({ description: 'Reason for availability.' }),
    version: z.string().exactOptional().openapi({ description: 'Kubernetes version.' }),
  })
  .openapi({ deprecated: true, description: 'Deprecated.', required: [] })
  .openapi('AvailableVersion')

const BestEffortProvisioningSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes',
      }),
    minProvisionNodes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.',
      }),
  })
  .openapi({ description: 'Best effort provisioning.', required: [] })
  .openapi('BestEffortProvisioning')

const BigQueryDestinationSchema = z
  .object({
    datasetId: z.string().exactOptional().openapi({ description: 'The ID of a BigQuery Dataset.' }),
  })
  .openapi({
    description: 'Parameters for using BigQuery as the destination of resource usage export.',
    required: [],
  })
  .openapi('BigQueryDestination')

const PolicyBindingSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`.',
      }),
  })
  .openapi({ description: 'Binauthz policy that applies to this cluster.', required: [] })
  .openapi('PolicyBinding')

const BinaryAuthorizationSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored.',
      }),
    evaluationMode: z
      .enum([
        'EVALUATION_MODE_UNSPECIFIED',
        'DISABLED',
        'PROJECT_SINGLETON_POLICY_ENFORCE',
        'POLICY_BINDINGS',
        'POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED.',
      }),
    policyBindings: z
      .array(PolicyBindingSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Binauthz policies that apply to this cluster.' }),
  })
  .openapi({ description: 'Configuration for Binary Authorization.', required: [] })
  .openapi('BinaryAuthorization')

const BlueGreenInfoSchema = z
  .object({
    blueInstanceGroupUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool.',
      }),
    bluePoolDeletionStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    greenInstanceGroupUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool.',
      }),
    greenPoolVersion: z.string().exactOptional().openapi({ description: 'Version of green pool.' }),
    phase: z
      .enum([
        'PHASE_UNSPECIFIED',
        'UPDATE_STARTED',
        'CREATING_GREEN_POOL',
        'CORDONING_BLUE_POOL',
        'WAITING_TO_DRAIN_BLUE_POOL',
        'DRAINING_BLUE_POOL',
        'NODE_POOL_SOAKING',
        'DELETING_BLUE_POOL',
        'ROLLBACK_STARTED',
      ])
      .exactOptional()
      .openapi({ description: 'Current blue-green upgrade phase.' }),
  })
  .openapi({ description: 'Information relevant to blue-green upgrade.', required: [] })
  .openapi('BlueGreenInfo')

const CancelOperationRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({ description: 'CancelOperationRequest cancels a single operation.', required: [] })
  .openapi('CancelOperationRequest')

const CheckAutopilotCompatibilityResponseSchema = z
  .object({
    issues: z
      .array(AutopilotCompatibilityIssueSchema)
      .exactOptional()
      .openapi({ description: 'The list of issues for the given operation.' }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ description: 'The summary of the autopilot compatibility response.' }),
  })
  .openapi({
    description: 'CheckAutopilotCompatibilityResponse has a list of compatibility issues.',
    required: [],
  })
  .openapi('CheckAutopilotCompatibilityResponse')

const CidrBlockSchema = z
  .object({
    cidrBlock: z
      .string()
      .exactOptional()
      .openapi({ description: 'cidr_block must be specified in CIDR notation.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'display_name is an optional field for users to identify CIDR blocks.',
      }),
  })
  .openapi({ description: 'CidrBlock contains an optional name and one CIDR block.', required: [] })
  .openapi('CidrBlock')

const ClientCertificateConfigSchema = z
  .object({
    issueClientCertificate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Issue a client certificate.' }),
  })
  .openapi({ description: 'Configuration for client certificates on the cluster.', required: [] })
  .openapi('ClientCertificateConfig')

const ResourceLimitSchema = z
  .object({
    maximum: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum amount of the resource in the cluster.' }),
    minimum: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum amount of the resource in the cluster.' }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name "cpu", "memory" or gpu-specific string.' }),
  })
  .openapi({
    description:
      'Contains information about amount of some resource in the cluster. For memory, value should be in GB.',
    required: [],
  })
  .openapi('ResourceLimit')

const ClusterAutoscalingSchema = z
  .object({
    autoprovisioningLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP.",
      }),
    autoprovisioningNodePoolDefaults:
      AutoprovisioningNodePoolDefaultsSchema.exactOptional().openapi({
        description:
          'AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.',
      }),
    autoscalingProfile: z
      .enum(['PROFILE_UNSPECIFIED', 'OPTIMIZE_UTILIZATION', 'BALANCED'])
      .exactOptional()
      .openapi({ description: 'Defines autoscaling behaviour.' }),
    enableNodeAutoprovisioning: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables automatic node pool creation and deletion.' }),
    resourceLimits: z
      .array(ResourceLimitSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains global constraints regarding minimum and maximum amount of resources in the cluster.',
      }),
  })
  .openapi({
    description:
      'ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.',
    required: [],
  })
  .openapi('ClusterAutoscaling')

const ClusterTelemetrySchema = z
  .object({
    type: z
      .enum(['UNSPECIFIED', 'DISABLED', 'ENABLED', 'SYSTEM_ONLY'])
      .exactOptional()
      .openapi({ description: 'Type of the integration.' }),
  })
  .openapi({ description: 'Telemetry integration for the cluster.', required: [] })
  .openapi('ClusterTelemetry')

const StatusConditionSchema = z
  .object({
    canonicalCode: z
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
      .openapi({ description: 'Canonical code of the condition.' }),
    code: z
      .enum([
        'UNKNOWN',
        'GCE_STOCKOUT',
        'GKE_SERVICE_ACCOUNT_DELETED',
        'GCE_QUOTA_EXCEEDED',
        'SET_BY_OPERATOR',
        'CLOUD_KMS_KEY_ERROR',
        'CA_EXPIRING',
      ])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Machine-friendly representation of the condition Deprecated. Use canonical_code instead.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-friendly representation of the condition' }),
  })
  .openapi({
    description:
      'StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).',
    required: [],
  })
  .openapi('StatusCondition')

const CostManagementConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the feature is enabled or not.' }),
  })
  .openapi({ description: 'Configuration for fine-grained cost management feature.', required: [] })
  .openapi('CostManagementConfig')

const DatabaseEncryptionSchema = z
  .object({
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key',
      }),
    state: z
      .enum(['UNKNOWN', 'ENCRYPTED', 'DECRYPTED'])
      .exactOptional()
      .openapi({ description: 'The desired state of etcd encryption.' }),
  })
  .openapi({ description: 'Configuration of etcd encryption.', required: [] })
  .openapi('DatabaseEncryption')

const K8sBetaAPIConfigSchema = z
  .object({
    enabledApis: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'api name, e.g. storage.k8s.io/v1beta1/csistoragecapacities.' }),
  })
  .openapi({
    description: 'Kubernetes open source beta apis enabled on the cluster.',
    required: [],
  })
  .openapi('K8sBetaAPIConfig')

const EnterpriseConfigSchema = z
  .object({
    clusterTier: z
      .enum(['CLUSTER_TIER_UNSPECIFIED', 'STANDARD', 'ENTERPRISE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. [Output only] cluster_tier specifies the premium tier of the cluster.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'EnterpriseConfig is the cluster enterprise configuration.',
    required: [],
  })
  .openapi('EnterpriseConfig')

const FleetSchema = z
  .object({
    membership: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/*/locations/*/memberships/*`.',
      }),
    preRegistered: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '[Output only] Whether the cluster has been registered through the fleet API.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered.',
      }),
  })
  .openapi({ description: 'Fleet is the fleet configuration for the cluster.', required: [] })
  .openapi('Fleet')

const IdentityServiceConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to enable the Identity Service component' }),
  })
  .openapi({
    description:
      'IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API',
    required: [],
  })
  .openapi('IdentityServiceConfig')

const IPAllocationPolicySchema = z
  .object({
    additionalPodRangesConfig: AdditionalPodRangesConfigSchema.exactOptional().openapi({
      description:
        'Output only. [Output only] The additional pod ranges that are added to the cluster. These pod ranges can be used by new node pools to allocate pod IPs automatically. Once the range is removed it will not show up in IPAllocationPolicy.',
      readOnly: true,
    }),
    allowRouteOverlap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, allow allocation of cluster CIDR ranges that overlap with certain kinds of network routes. By default we do not allow cluster CIDR ranges to intersect with any user declared routes. With allow_route_overlap == true, we allow overlapping with CIDR ranges that are larger than the cluster CIDR range. If this field is set to true, then cluster and services CIDRs must be fully-specified (e.g. `10.96.0.0/14`, but not `/14`), which means: 1) When `use_ip_aliases` is true, `cluster_ipv4_cidr_block` and `services_ipv4_cidr_block` must be fully-specified. 2) When `use_ip_aliases` is false, `cluster.cluster_ipv4_cidr` muse be fully-specified.',
      }),
    clusterIpv4Cidr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This field is deprecated, use cluster_ipv4_cidr_block.',
      }),
    clusterIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address range for the cluster pod IPs. If this field is set, then `cluster.cluster_ipv4_cidr` must be left blank. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.',
      }),
    clusterSecondaryRangeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.',
      }),
    createSubnetwork: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when `use_ip_aliases` is true.',
      }),
    defaultPodIpv4RangeUtilization: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.',
        readOnly: true,
      }),
    ipv6AccessType: z
      .enum(['IPV6_ACCESS_TYPE_UNSPECIFIED', 'INTERNAL', 'EXTERNAL'])
      .exactOptional()
      .openapi({
        description: 'The ipv6 access type (internal or external) when create_subnetwork is true',
      }),
    nodeIpv4Cidr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This field is deprecated, use node_ipv4_cidr_block.',
      }),
    nodeIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address range of the instance IPs in this cluster. This is applicable only if `create_subnetwork` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.',
      }),
    podCidrOverprovisionConfig: PodCIDROverprovisionConfigSchema.exactOptional().openapi({
      description:
        '[PRIVATE FIELD] Pod CIDR size overprovisioning config for the cluster. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is doubled and then rounded off to next power of 2 to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.',
    }),
    servicesIpv4Cidr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'This field is deprecated, use services_ipv4_cidr_block.',
      }),
    servicesIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.',
      }),
    servicesIpv6CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. [Output only] The services IPv6 CIDR block for the cluster.',
        readOnly: true,
      }),
    servicesSecondaryRangeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases and create_subnetwork is false.',
      }),
    stackType: z
      .enum(['STACK_TYPE_UNSPECIFIED', 'IPV4', 'IPV4_IPV6'])
      .exactOptional()
      .openapi({ description: 'IP stack type' }),
    subnetIpv6CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. [Output only] The subnet's IPv6 CIDR block used by nodes and pods.",
        readOnly: true,
      }),
    subnetworkName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom subnetwork name to be used if `create_subnetwork` is true. If this field is empty, then an automatic name will be chosen for the new subnetwork.',
      }),
    tpuIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when `use_ip_aliases` is true. If unspecified, the range will use the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use. This field is deprecated, use cluster.tpu_config.ipv4_cidr_block instead.',
      }),
    useIpAliases: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode',
      }),
    useRoutes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode',
      }),
  })
  .openapi({
    description: 'Configuration for controlling how IPs are allocated in the cluster.',
    required: [],
  })
  .openapi('IPAllocationPolicy')

const LegacyAbacSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.',
      }),
  })
  .openapi({
    description: 'Configuration for the legacy Attribute Based Access Control authorization mode.',
    required: [],
  })
  .openapi('LegacyAbac')

const LoggingComponentConfigSchema = z
  .object({
    enableComponents: z
      .array(
        z.enum([
          'COMPONENT_UNSPECIFIED',
          'SYSTEM_COMPONENTS',
          'WORKLOADS',
          'APISERVER',
          'SCHEDULER',
          'CONTROLLER_MANAGER',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Select components to collect logs. An empty set would disable all logging.',
      }),
  })
  .openapi({
    description: 'LoggingComponentConfig is cluster logging component configuration.',
    required: [],
  })
  .openapi('LoggingComponentConfig')

const LoggingConfigSchema = z
  .object({
    componentConfig: LoggingComponentConfigSchema.exactOptional().openapi({
      description: 'Logging components configuration',
    }),
  })
  .openapi({ description: 'LoggingConfig is cluster logging configuration.', required: [] })
  .openapi('LoggingConfig')

const MaintenanceWindowSchema: z.ZodType<MaintenanceWindowType> = z
  .lazy(() =>
    z
      .object({
        dailyMaintenanceWindow: DailyMaintenanceWindowSchema.exactOptional().openapi({
          description: 'DailyMaintenanceWindow specifies a daily maintenance operation window.',
        }),
        maintenanceExclusions: z
          .record(z.string(), TimeWindowSchema)
          .exactOptional()
          .openapi({
            description:
              'Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.',
          }),
        recurringWindow: RecurringTimeWindowSchema.exactOptional().openapi({
          description:
            'RecurringWindow specifies some number of recurring time periods for maintenance to occur. The time windows may be overlapping. If no maintenance windows are set, maintenance can occur at any time.',
        }),
      })
      .openapi({
        description: 'MaintenanceWindow defines the maintenance window to be used for the cluster.',
        required: [],
      }),
  )
  .openapi('MaintenanceWindow')

const MaintenancePolicySchema = z
  .object({
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A hash identifying the version of this policy, so that updates to fields of the policy won't accidentally undo intermediate changes (and so that users of the API unaware of some fields won't accidentally remove other fields). Make a `get()` request to the cluster to get the current resource version and include it with requests to set the policy.",
      }),
    window: MaintenanceWindowSchema.exactOptional().openapi({
      description: 'Specifies the maintenance window in which maintenance may be performed.',
    }),
  })
  .openapi({
    description: 'MaintenancePolicy defines the maintenance policy to be used for the cluster.',
    required: [],
  })
  .openapi('MaintenancePolicy')

const MasterSchema = z
  .object({})
  .openapi({ description: 'Master is the configuration for components on master.' })
  .openapi('Master')

const MasterAuthSchema = z
  .object({
    clientCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.',
      }),
    clientCertificateConfig: ClientCertificateConfigSchema.exactOptional().openapi({
      description:
        'Configuration for client certificate authentication on the cluster. For clusters before v1.12, if no configuration is specified, a client certificate is issued.',
    }),
    clientKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.',
      }),
    clusterCaCertificate: z.string().exactOptional(),
    password: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication',
      }),
  })
  .openapi({
    description:
      'The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.',
    required: [],
  })
  .openapi('MasterAuth')

const MasterAuthorizedNetworksConfigSchema = z
  .object({
    cidrBlocks: z
      .array(CidrBlockSchema)
      .exactOptional()
      .openapi({
        description:
          'cidr_blocks define up to 10 external networks that could access Kubernetes master through HTTPS.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not master authorized networks is enabled.' }),
    gcpPublicCidrsAccessEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether master is accessbile via Google Compute Engine Public IP addresses.',
      }),
  })
  .openapi({
    description:
      'Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.',
    required: [],
  })
  .openapi('MasterAuthorizedNetworksConfig')

const MeshCertificatesSchema = z
  .object({
    enableCertificates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).',
      }),
  })
  .openapi({
    description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    required: [],
  })
  .openapi('MeshCertificates')

const MonitoringComponentConfigSchema = z
  .object({
    enableComponents: z
      .array(
        z
          .enum([
            'COMPONENT_UNSPECIFIED',
            'SYSTEM_COMPONENTS',
            'WORKLOADS',
            'APISERVER',
            'SCHEDULER',
            'CONTROLLER_MANAGER',
            'STORAGE',
            'HPA',
            'POD',
            'DAEMONSET',
            'DEPLOYMENT',
            'STATEFULSET',
          ])
          .openapi({
            'x-enumDeprecated': [
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Select components to collect metrics. An empty set would disable all monitoring.',
      }),
  })
  .openapi({
    description: 'MonitoringComponentConfig is cluster monitoring component configuration.',
    required: [],
  })
  .openapi('MonitoringComponentConfig')

const ManagedPrometheusConfigSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Enable Managed Collection.' }),
  })
  .openapi({
    description:
      'ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.',
    required: [],
  })
  .openapi('ManagedPrometheusConfig')

const MonitoringConfigSchema = z
  .object({
    advancedDatapathObservabilityConfig:
      AdvancedDatapathObservabilityConfigSchema.exactOptional().openapi({
        description: 'Configuration of Advanced Datapath Observability features.',
      }),
    componentConfig: MonitoringComponentConfigSchema.exactOptional().openapi({
      description: 'Monitoring components configuration',
    }),
    managedPrometheusConfig: ManagedPrometheusConfigSchema.exactOptional().openapi({
      description: 'Enable Google Cloud Managed Service for Prometheus in the cluster.',
    }),
  })
  .openapi({ description: 'MonitoringConfig is cluster monitoring configuration.', required: [] })
  .openapi('MonitoringConfig')

const DefaultSnatStatusSchema = z
  .object({
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disables cluster default sNAT rules.' }),
  })
  .openapi({
    description:
      'DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.',
    required: [],
  })
  .openapi('DefaultSnatStatus')

const DNSConfigSchema = z
  .object({
    clusterDns: z
      .enum(['PROVIDER_UNSPECIFIED', 'PLATFORM_DEFAULT', 'CLOUD_DNS', 'KUBE_DNS'])
      .exactOptional()
      .openapi({
        description: 'cluster_dns indicates which in-cluster DNS provider should be used.',
      }),
    clusterDnsDomain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'cluster_dns_domain is the suffix used for all cluster service records.',
      }),
    clusterDnsScope: z
      .enum(['DNS_SCOPE_UNSPECIFIED', 'CLUSTER_SCOPE', 'VPC_SCOPE'])
      .exactOptional()
      .openapi({
        description: 'cluster_dns_scope indicates the scope of access to cluster DNS records.',
      }),
  })
  .openapi({
    description: 'DNSConfig contains the desired set of options for configuring clusterDNS.',
    required: [],
  })
  .openapi('DNSConfig')

const GatewayAPIConfigSchema = z
  .object({
    channel: z
      .enum(['CHANNEL_UNSPECIFIED', 'CHANNEL_DISABLED', 'CHANNEL_EXPERIMENTAL', 'CHANNEL_STANDARD'])
      .exactOptional()
      .openapi({ description: 'The Gateway API release channel to use for Gateway API.' }),
  })
  .openapi({
    description: 'GatewayAPIConfig contains the desired config of Gateway API on this cluster.',
    required: [],
  })
  .openapi('GatewayAPIConfig')

const ClusterNetworkPerformanceConfigSchema = z
  .object({
    totalEgressBandwidthTier: z
      .enum(['TIER_UNSPECIFIED', 'TIER_1'])
      .exactOptional()
      .openapi({ description: 'Specifies the total network bandwidth tier for the NodePool.' }),
  })
  .openapi({ description: 'Configuration of all network bandwidth tiers', required: [] })
  .openapi('ClusterNetworkPerformanceConfig')

const ServiceExternalIPsConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Services with ExternalIPs field are allowed or not.' }),
  })
  .openapi({ description: 'Config to block services with externalIPs field.', required: [] })
  .openapi('ServiceExternalIPsConfig')

const NetworkConfigSchema = z
  .object({
    datapathProvider: z
      .enum(['DATAPATH_PROVIDER_UNSPECIFIED', 'LEGACY_DATAPATH', 'ADVANCED_DATAPATH'])
      .exactOptional()
      .openapi({
        description:
          'The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.',
      }),
    defaultSnatStatus: DefaultSnatStatusSchema.exactOptional().openapi({
      description:
        'Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when default_snat_status is disabled. When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.',
    }),
    dnsConfig: DNSConfigSchema.exactOptional().openapi({
      description: 'DNSConfig contains clusterDNS config for this cluster.',
    }),
    enableFqdnNetworkPolicy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether FQDN Network Policy is enabled on this cluster.' }),
    enableIntraNodeVisibility: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.',
      }),
    enableL4ilbSubsetting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether L4ILB Subsetting is enabled for this cluster.' }),
    enableMultiNetworking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether multi-networking is enabled for this cluster.' }),
    gatewayApiConfig: GatewayAPIConfigSchema.exactOptional().openapi({
      description: 'GatewayAPIConfig contains the desired config of Gateway API on this cluster.',
    }),
    inTransitEncryptionConfig: z
      .enum([
        'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED',
        'IN_TRANSIT_ENCRYPTION_DISABLED',
        'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT',
      ])
      .exactOptional()
      .openapi({ description: 'Specify the details of in-transit encryption.' }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network',
      }),
    networkPerformanceConfig: ClusterNetworkPerformanceConfigSchema.exactOptional().openapi({
      description: 'Network bandwidth tier configuration.',
    }),
    privateIpv6GoogleAccess: z
      .enum([
        'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED',
        'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED',
        'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE',
        'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)',
      }),
    serviceExternalIpsConfig: ServiceExternalIPsConfigSchema.exactOptional().openapi({
      description:
        'ServiceExternalIPsConfig specifies if services with externalIPs field are blocked or not.',
    }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet',
      }),
  })
  .openapi({
    description: 'NetworkConfig reports the relative names of network & subnetwork.',
    required: [],
  })
  .openapi('NetworkConfig')

const NetworkPolicySchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether network policy is enabled on the cluster.' }),
    provider: z
      .enum(['PROVIDER_UNSPECIFIED', 'CALICO'])
      .exactOptional()
      .openapi({ description: 'The selected network policy provider.' }),
  })
  .openapi({
    description:
      'Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/',
    required: [],
  })
  .openapi('NetworkPolicy')

const NodeConfigSchema: z.ZodType<NodeConfigType> = z
  .lazy(() =>
    z
      .object({
        accelerators: z
          .array(AcceleratorConfigSchema)
          .exactOptional()
          .openapi({
            description:
              'A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.',
          }),
        advancedMachineFeatures: AdvancedMachineFeaturesSchema.exactOptional().openapi({
          description: 'Advanced features for the Compute Engine VM.',
        }),
        bootDiskKmsKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              ' The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption',
          }),
        confidentialNodes: ConfidentialNodesSchema.exactOptional().openapi({
          description:
            'Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.',
        }),
        diskSizeGb: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. If unspecified, the default disk size is 100GB.',
          }),
        diskType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced') If unspecified, the default disk type is 'pd-standard'",
          }),
        enableConfidentialStorage: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Optional. Reserved for future use.' }),
        ephemeralStorageConfig: EphemeralStorageConfigSchema.exactOptional().openapi({
          description:
            'Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.',
        }),
        ephemeralStorageLocalSsdConfig:
          EphemeralStorageLocalSsdConfigSchema.exactOptional().openapi({
            description:
              'Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk. This field is functionally equivalent to the ephemeral_storage_config',
          }),
        fastSocket: FastSocketSchema.exactOptional().openapi({
          description: 'Enable or disable NCCL fast socket for the node pool.',
        }),
        gcfsConfig: GcfsConfigSchema.exactOptional().openapi({
          description: 'GCFS (Google Container File System) configs.',
        }),
        gvnic: VirtualNICSchema.exactOptional().openapi({
          description: 'Enable or disable gvnic on the node pool.',
        }),
        hostMaintenancePolicy: HostMaintenancePolicySchema.exactOptional().openapi({
          description:
            'HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.',
        }),
        imageType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.',
          }),
        kubeletConfig: NodeKubeletConfigSchema.exactOptional().openapi({
          description: 'Node kubelet configs.',
        }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              "The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
          }),
        linuxNodeConfig: LinuxNodeConfigSchema.exactOptional().openapi({
          description: 'Parameters that can be configured on Linux nodes.',
        }),
        localNvmeSsdBlockConfig: LocalNvmeSsdBlockConfigSchema.exactOptional().openapi({
          description: 'Parameters for using raw-block Local NVMe SSDs.',
        }),
        localSsdCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The number of local SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.',
          }),
        loggingConfig: NodePoolLoggingConfigSchema.exactOptional().openapi({
          description: 'Logging configuration.',
        }),
        machineType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of a Google Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-types). If unspecified, the default machine type is `e2-medium`.',
          }),
        metadata: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'The metadata key/value pairs assigned to instances in the cluster. Keys must conform to the regexp `[a-zA-Z0-9-_]+` and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys: - "cluster-location" - "cluster-name" - "cluster-uid" - "configure-sh" - "containerd-configure-sh" - "enable-oslogin" - "gci-ensure-gke-docker" - "gci-metrics-enabled" - "gci-update-strategy" - "instance-template" - "kube-env" - "startup-script" - "user-data" - "disable-address-manager" - "windows-startup-script-ps1" - "common-psm1" - "k8s-node-setup-psm1" - "install-ssh-psm1" - "user-profile-psm1" Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value\'s size must be less than or equal to 32 KB. The total size of all keys and values must be less than 512 KB.',
          }),
        minCpuPlatform: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: "Intel Haswell"` or `minCpuPlatform: "Intel Sandy Bridge"`. For more information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform).',
          }),
        nodeGroup: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on [sole tenant nodes](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes).',
          }),
        oauthScopes: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The set of Google API scopes to be made available on all of the node VMs under the "default" service account. The following scopes are recommended, but not required, and by default are not included: * `https://www.googleapis.com/auth/compute` is required for mounting persistent storage on your nodes. * `https://www.googleapis.com/auth/devstorage.read_only` is required for communicating with **gcr.io** (the [Google Container Registry](https://cloud.google.com/container-registry/)). If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.',
          }),
        preemptible: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances.',
          }),
        reservationAffinity: ReservationAffinitySchema.exactOptional().openapi({
          description:
            'The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this node pool.',
        }),
        resourceLabels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'The resource labels for the node pool to use to annotate any related Google Compute Engine resources.',
          }),
        resourceManagerTags: ResourceManagerTagsSchema.exactOptional().openapi({
          description: 'A map of resource manager tag keys and values to be attached to the nodes.',
        }),
        sandboxConfig: SandboxConfigSchema.exactOptional().openapi({
          description: 'Sandbox configuration for this node.',
        }),
        secondaryBootDisks: z
          .array(SecondaryBootDiskSchema)
          .exactOptional()
          .openapi({ description: 'List of secondary boot disks attached to the nodes.' }),
        serviceAccount: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.',
          }),
        shieldedInstanceConfig: ShieldedInstanceConfigSchema.exactOptional().openapi({
          description: 'Shielded Instance options.',
        }),
        soleTenantConfig: SoleTenantConfigSchema.exactOptional().openapi({
          description: 'Parameters for node pools to be backed by shared sole tenant node groups.',
        }),
        spot: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.',
          }),
        tags: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.',
          }),
        taints: z
          .array(NodeTaintSchema)
          .exactOptional()
          .openapi({
            description:
              'List of kubernetes taints to be applied to each node. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/',
          }),
        windowsNodeConfig: WindowsNodeConfigSchema.exactOptional().openapi({
          description: 'Parameters that can be configured on Windows nodes.',
        }),
        workloadMetadataConfig: WorkloadMetadataConfigSchema.exactOptional().openapi({
          description: 'The workload metadata configuration for this node.',
        }),
      })
      .openapi({
        description:
          'Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.',
        required: [],
      }),
  )
  .openapi('NodeConfig')

const NetworkTagsSchema = z
  .object({
    tags: z.array(z.string()).exactOptional().openapi({ description: 'List of network tags.' }),
  })
  .openapi({
    description:
      "Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).",
    required: [],
  })
  .openapi('NetworkTags')

const NodePoolAutoConfigSchema = z
  .object({
    networkTags: NetworkTagsSchema.exactOptional().openapi({
      description:
        'The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation. Each tag within the list must comply with RFC1035.',
    }),
    resourceManagerTags: ResourceManagerTagsSchema.exactOptional().openapi({
      description:
        'Resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies.',
    }),
  })
  .openapi({
    description:
      'node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters',
    required: [],
  })
  .openapi('NodePoolAutoConfig')

const NodeConfigDefaultsSchema = z
  .object({
    gcfsConfig: GcfsConfigSchema.exactOptional().openapi({
      description: 'GCFS (Google Container File System, also known as Riptide) options.',
    }),
    hostMaintenancePolicy: HostMaintenancePolicySchema.exactOptional().openapi({
      description:
        'HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.',
    }),
    loggingConfig: NodePoolLoggingConfigSchema.exactOptional().openapi({
      description: 'Logging configuration for node pools.',
    }),
  })
  .openapi({ description: 'Subset of NodeConfig message that has defaults.', required: [] })
  .openapi('NodeConfigDefaults')

const NodePoolDefaultsSchema = z
  .object({
    nodeConfigDefaults: NodeConfigDefaultsSchema.exactOptional().openapi({
      description: 'Subset of NodeConfig message that has defaults.',
    }),
  })
  .openapi({ description: 'Subset of Nodepool message that has defaults.', required: [] })
  .openapi('NodePoolDefaults')

const NodePoolAutoscalingSchema = z
  .object({
    autoprovisioned: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can this node pool be deleted automatically.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is autoscaling enabled for this node pool.' }),
    locationPolicy: z
      .enum(['LOCATION_POLICY_UNSPECIFIED', 'BALANCED', 'ANY'])
      .exactOptional()
      .openapi({ description: 'Location policy used when scaling up a nodepool.' }),
    maxNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster.',
      }),
    minNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count.',
      }),
    totalMaxNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields.',
      }),
    totalMinNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields.',
      }),
  })
  .openapi({
    description:
      'NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.',
    required: [],
  })
  .openapi('NodePoolAutoscaling')

const NodeNetworkConfigSchema: z.ZodType<NodeNetworkConfigType> = z
  .lazy(() =>
    z
      .object({
        additionalNodeNetworkConfigs: z
          .array(AdditionalNodeNetworkConfigSchema)
          .exactOptional()
          .openapi({
            description:
              'We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface',
          }),
        additionalPodNetworkConfigs: z
          .array(AdditionalPodNetworkConfigSchema)
          .exactOptional()
          .openapi({
            description:
              'We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node',
          }),
        createPodRange: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for `pod_range` and `pod_ipv4_cidr_block` if they are not specified. If neither `create_pod_range` or `pod_range` are specified, the cluster-level default (`ip_allocation_policy.cluster_ipv4_cidr_block`) is used. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.',
          }),
        enablePrivateNodes: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from cluster.privateClusterConfig.enablePrivateNodes',
          }),
        networkPerformanceConfig: NetworkPerformanceConfigSchema.exactOptional().openapi({
          description: 'Network bandwidth tier configuration.',
        }),
        podCidrOverprovisionConfig: PodCIDROverprovisionConfigSchema.exactOptional().openapi({
          description:
            '[PRIVATE FIELD] Pod CIDR size overprovisioning config for the nodepool. Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is rounded off to next power of 2 and we then double that to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26). This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.',
        }),
        podIpv4CidrBlock: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The IP address range for pod IPs in this node pool. Only applicable if `create_pod_range` is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. `/14`) to have a range chosen with a specific netmask. Set to a [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) to pick a specific range to use. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.',
          }),
        podIpv4RangeUtilization: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Output only. [Output only] The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.',
            readOnly: true,
          }),
        podRange: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the secondary range for pod IPs. If `create_pod_range` is true, this ID is used for the new range. If `create_pod_range` is false, uses an existing secondary range with this ID. Only applicable if `ip_allocation_policy.use_ip_aliases` is true. This field cannot be changed after the node pool has been created.',
          }),
      })
      .openapi({ description: 'Parameters for node pool-level network config.', required: [] }),
  )
  .openapi('NodeNetworkConfig')

const PlacementPolicySchema = z
  .object({
    policyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.',
      }),
    tpuTopology: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'COMPACT'])
      .exactOptional()
      .openapi({ description: 'The type of placement.' }),
  })
  .openapi({
    description: 'PlacementPolicy defines the placement policy used by the node pool.',
    required: [],
  })
  .openapi('PlacementPolicy')

const QueuedProvisioningSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.',
      }),
  })
  .openapi({
    description: 'QueuedProvisioning defines the queued provisioning used by the node pool.',
    required: [],
  })
  .openapi('QueuedProvisioning')

const UpdateInfoSchema = z
  .object({
    blueGreenInfo: BlueGreenInfoSchema.exactOptional().openapi({
      description: 'Information of a blue-green upgrade.',
    }),
  })
  .openapi({
    description:
      'UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.',
    required: [],
  })
  .openapi('UpdateInfo')

const NodePoolSchema = z
  .object({
    autoscaling: NodePoolAutoscalingSchema.exactOptional().openapi({
      description:
        'Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.',
    }),
    bestEffortProvisioning: BestEffortProvisioningSchema.exactOptional().openapi({
      description: 'Enable best effort provisioning for nodes',
    }),
    conditions: z
      .array(StatusConditionSchema)
      .exactOptional()
      .openapi({ description: 'Which conditions caused the current node pool state.' }),
    config: NodeConfigSchema.exactOptional().openapi({
      description: 'The node configuration of the pool.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.',
      }),
    initialNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.',
      }),
    instanceGroupUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.',
      }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.",
      }),
    management: NodeManagementSchema.exactOptional().openapi({
      description: 'NodeManagement configuration for this NodePool.',
    }),
    maxPodsConstraint: MaxPodsConstraintSchema.exactOptional().openapi({
      description:
        'The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.',
    }),
    name: z.string().exactOptional().openapi({ description: 'The name of the node pool.' }),
    networkConfig: NodeNetworkConfigSchema.exactOptional().openapi({
      description:
        'Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.',
    }),
    placementPolicy: PlacementPolicySchema.exactOptional().openapi({
      description: 'Specifies the node placement policy.',
    }),
    podIpv4CidrSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: '[Output only] The pod CIDR block size per node in this node pool.',
      }),
    queuedProvisioning: QueuedProvisioningSchema.exactOptional().openapi({
      description: 'Specifies the configuration of queued provisioning.',
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output only] Server-defined URL for the resource.' }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'PROVISIONING',
        'RUNNING',
        'RUNNING_WITH_ERROR',
        'RECONCILING',
        'STOPPING',
        'ERROR',
      ])
      .exactOptional()
      .openapi({ description: '[Output only] The status of the nodes in this pool instance.' }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '[Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.',
      }),
    updateInfo: UpdateInfoSchema.exactOptional().openapi({
      description:
        'Output only. [Output only] Update info contains relevant information during a node pool update.',
      readOnly: true,
    }),
    upgradeSettings: UpgradeSettingsSchema.exactOptional().openapi({
      description: 'Upgrade settings control disruption and speed of the upgrade.',
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version).",
      }),
  })
  .openapi({
    description:
      "NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.",
    required: [],
  })
  .openapi('NodePool')

const FilterSchema = z
  .object({
    eventType: z
      .array(
        z.enum([
          'EVENT_TYPE_UNSPECIFIED',
          'UPGRADE_AVAILABLE_EVENT',
          'UPGRADE_EVENT',
          'SECURITY_BULLETIN_EVENT',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Event types to allowlist.' }),
  })
  .openapi({
    description:
      'Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent',
    required: [],
  })
  .openapi('Filter')

const PubSubSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable notifications for Pub/Sub.' }),
    filter: FilterSchema.exactOptional().openapi({
      description:
        'Allows filtering to one or more specific event types. If no filter is specified, or if a filter is specified with no event types, all event types will be sent',
    }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`.',
      }),
  })
  .openapi({ description: 'Pub/Sub specific notification config.', required: [] })
  .openapi('PubSub')

const NotificationConfigSchema = z
  .object({
    pubsub: PubSubSchema.exactOptional().openapi({
      description: 'Notification config for Pub/Sub.',
    }),
  })
  .openapi({
    description: 'NotificationConfig is the configuration of notifications.',
    required: [],
  })
  .openapi('NotificationConfig')

const ParentProductConfigSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels contain the configuration of the parent product.' }),
    productName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the parent product associated with the cluster.' }),
  })
  .openapi({
    description:
      'ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster.',
    required: [],
  })
  .openapi('ParentProductConfig')

const PodSecurityPolicyConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.',
      }),
  })
  .openapi({ description: 'Configuration for the PodSecurityPolicy feature.', required: [] })
  .openapi('PodSecurityPolicyConfig')

const PrivateClusterMasterGlobalAccessConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whenever master is accessible globally or not.' }),
  })
  .openapi({
    description: 'Configuration for controlling master global access settings.',
    required: [],
  })
  .openapi('PrivateClusterMasterGlobalAccessConfig')

const PrivateClusterConfigSchema = z
  .object({
    enablePrivateEndpoint: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether the master's internal IP address is used as the cluster endpoint.",
      }),
    enablePrivateNodes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.',
      }),
    masterGlobalAccessConfig: PrivateClusterMasterGlobalAccessConfigSchema.exactOptional().openapi({
      description: 'Controls master global access settings.',
    }),
    masterIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network.",
      }),
    peeringName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The peering name in the customer VPC used by this cluster.',
      }),
    privateEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The internal IP address of this cluster's master endpoint.",
      }),
    privateEndpointSubnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Subnet to provision the master's private endpoint during cluster creation. Specified in projects/*/regions/*/subnetworks/* format.",
      }),
    publicEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The external IP address of this cluster's master endpoint.",
      }),
  })
  .openapi({ description: 'Configuration options for private clusters.', required: [] })
  .openapi('PrivateClusterConfig')

const WorkloadConfigSchema = z
  .object({
    auditMode: z
      .enum(['MODE_UNSPECIFIED', 'DISABLED', 'BASIC', 'BASELINE', 'RESTRICTED'])
      .exactOptional()
      .openapi({
        description: "Sets which mode of auditing should be used for the cluster's workloads.",
        'x-enumDeprecated': [false, false, false, true, true],
      }),
  })
  .openapi({
    description:
      'WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.',
    required: [],
  })
  .openapi('WorkloadConfig')

const ProtectConfigSchema = z
  .object({
    workloadConfig: WorkloadConfigSchema.exactOptional().openapi({
      description:
        "WorkloadConfig defines which actions are enabled for a cluster's workload configurations.",
    }),
    workloadVulnerabilityMode: z
      .enum(['WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED', 'DISABLED', 'BASIC'])
      .exactOptional()
      .openapi({
        description: 'Sets which mode to use for Protect workload vulnerability scanning feature.',
      }),
  })
  .openapi({
    description:
      'ProtectConfig defines the flags needed to enable/disable features for the Protect API.',
    required: [],
  })
  .openapi('ProtectConfig')

const ReleaseChannelSchema = z
  .object({
    channel: z
      .enum(['UNSPECIFIED', 'RAPID', 'REGULAR', 'STABLE'])
      .exactOptional()
      .openapi({
        description: 'channel specifies which release channel the cluster is subscribed to.',
      }),
  })
  .openapi({
    description:
      'ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.',
    required: [],
  })
  .openapi('ReleaseChannel')

const ConsumptionMeteringConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to enable consumption metering for this cluster. If enabled, a second BigQuery table will be created to hold resource consumption records.',
      }),
  })
  .openapi({ description: 'Parameters for controlling consumption metering.', required: [] })
  .openapi('ConsumptionMeteringConfig')

const ResourceUsageExportConfigSchema = z
  .object({
    bigqueryDestination: BigQueryDestinationSchema.exactOptional().openapi({
      description: 'Configuration to use BigQuery as usage export destination.',
    }),
    consumptionMeteringConfig: ConsumptionMeteringConfigSchema.exactOptional().openapi({
      description: 'Configuration to enable resource consumption metering.',
    }),
    enableNetworkEgressMetering: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.',
      }),
  })
  .openapi({ description: 'Configuration for exporting cluster resource usages.', required: [] })
  .openapi('ResourceUsageExportConfig')

const SecurityPostureConfigSchema = z
  .object({
    mode: z
      .enum(['MODE_UNSPECIFIED', 'DISABLED', 'BASIC'])
      .exactOptional()
      .openapi({ description: 'Sets which mode to use for Security Posture features.' }),
    vulnerabilityMode: z
      .enum([
        'VULNERABILITY_MODE_UNSPECIFIED',
        'VULNERABILITY_DISABLED',
        'VULNERABILITY_BASIC',
        'VULNERABILITY_ENTERPRISE',
      ])
      .exactOptional()
      .openapi({ description: 'Sets which mode to use for vulnerability scanning.' }),
  })
  .openapi({
    description:
      'SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API.',
    required: [],
  })
  .openapi('SecurityPostureConfig')

const ShieldedNodesSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether Shielded Nodes features are enabled on all nodes in this cluster.',
      }),
  })
  .openapi({ description: 'Configuration of Shielded Nodes feature.', required: [] })
  .openapi('ShieldedNodes')

const TpuConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Cloud TPU integration is enabled or not.' }),
    ipv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({ description: 'IPv4 CIDR block reserved for Cloud TPU in the VPC.' }),
    useServiceNetworking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to use service networking for Cloud TPU or not.' }),
  })
  .openapi({ description: 'Configuration for Cloud TPU.', required: [] })
  .openapi('TpuConfig')

const VerticalPodAutoscalingSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables vertical pod autoscaling.' }),
  })
  .openapi({
    description:
      'VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.',
    required: [],
  })
  .openapi('VerticalPodAutoscaling')

const WorkloadALTSConfigSchema = z
  .object({
    enableAlts: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty).',
      }),
  })
  .openapi({
    description: 'Configuration for direct-path (via ALTS) with workload identity.',
    required: [],
  })
  .openapi('WorkloadALTSConfig')

const WorkloadCertificatesSchema = z
  .object({
    enableCertificates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).',
      }),
  })
  .openapi({
    description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    required: [],
  })
  .openapi('WorkloadCertificates')

const WorkloadIdentityConfigSchema = z
  .object({
    identityNamespace: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'IAM Identity Namespace to attach all Kubernetes Service Accounts to.',
      }),
    identityProvider: z
      .string()
      .exactOptional()
      .openapi({ description: 'identity provider is the third party identity provider.' }),
    workloadPool: z
      .string()
      .exactOptional()
      .openapi({ description: 'The workload pool to attach all Kubernetes service accounts to.' }),
  })
  .openapi({
    description: 'Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.',
    required: [],
  })
  .openapi('WorkloadIdentityConfig')

const ClusterSchema = z
  .object({
    addonsConfig: AddonsConfigSchema.exactOptional().openapi({
      description: 'Configurations for the various addons available to run in the cluster.',
    }),
    authenticatorGroupsConfig: AuthenticatorGroupsConfigSchema.exactOptional().openapi({
      description: 'Configuration controlling RBAC group membership information.',
    }),
    autopilot: AutopilotSchema.exactOptional().openapi({
      description: 'Autopilot configuration for the cluster.',
    }),
    autoscaling: ClusterAutoscalingSchema.exactOptional().openapi({
      description: 'Cluster-level autoscaling configuration.',
    }),
    binaryAuthorization: BinaryAuthorizationSchema.exactOptional().openapi({
      description: 'Configuration for Binary Authorization.',
    }),
    clusterIpv4Cidr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.',
      }),
    clusterTelemetry: ClusterTelemetrySchema.exactOptional().openapi({
      description: 'Telemetry integration for the cluster.',
    }),
    conditions: z
      .array(StatusConditionSchema)
      .exactOptional()
      .openapi({ description: 'Which conditions caused the current cluster state.' }),
    confidentialNodes: ConfidentialNodesSchema.exactOptional().openapi({
      description:
        'Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled.',
    }),
    costManagementConfig: CostManagementConfigSchema.exactOptional().openapi({
      description: 'Configuration for the fine-grained cost management feature.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    currentMasterVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: '[Output only] The current software version of the master endpoint.',
      }),
    currentNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '[Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.',
      }),
    currentNodeVersion: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "[Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.",
      }),
    databaseEncryption: DatabaseEncryptionSchema.exactOptional().openapi({
      description: 'Configuration of etcd encryption.',
    }),
    defaultMaxPodsConstraint: MaxPodsConstraintSchema.exactOptional().openapi({
      description:
        'The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description of this cluster.' }),
    enableK8sBetaApis: K8sBetaAPIConfigSchema.exactOptional().openapi({
      description: 'Kubernetes open source beta apis enabled on the cluster. Only beta apis.',
    }),
    enableKubernetesAlpha: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.',
      }),
    enableTpu: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.",
      }),
    enterpriseConfig: EnterpriseConfigSchema.exactOptional().openapi({
      description: 'GKE Enterprise Configuration.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    fleet: FleetSchema.exactOptional().openapi({
      description: 'Fleet information for the cluster.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique id for the cluster.', readOnly: true }),
    identityServiceConfig: IdentityServiceConfigSchema.exactOptional().openapi({
      description: 'Configuration for Identity Service component.',
    }),
    initialClusterVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version',
      }),
    initialNodeCount: z
      .int32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.',
      }),
    instanceGroupUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Use node_pools.instance_group_urls.',
      }),
    ipAllocationPolicy: IPAllocationPolicySchema.exactOptional().openapi({
      description: 'Configuration for cluster IP allocation.',
    }),
    labelFingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fingerprint of the set of labels for this cluster.' }),
    legacyAbac: LegacyAbacSchema.exactOptional().openapi({
      description: 'Configuration for the legacy ABAC authorization mode.',
    }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.',
      }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.",
      }),
    loggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'Logging configuration for the cluster.',
    }),
    loggingService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.',
      }),
    maintenancePolicy: MaintenancePolicySchema.exactOptional().openapi({
      description: 'Configure the maintenance policy for this cluster.',
    }),
    master: MasterSchema.exactOptional().openapi({
      description: 'Configuration for master components.',
    }),
    masterAuth: MasterAuthSchema.exactOptional().openapi({
      description:
        'The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued.',
    }),
    masterAuthorizedNetworksConfig: MasterAuthorizedNetworksConfigSchema.exactOptional().openapi({
      description: 'The configuration options for master authorized networks feature.',
    }),
    masterIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.',
      }),
    meshCertificates: MeshCertificatesSchema.exactOptional().openapi({
      description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    }),
    monitoringConfig: MonitoringConfigSchema.exactOptional().openapi({
      description: 'Monitoring configuration for the cluster.',
    }),
    monitoringService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.',
      }),
    networkConfig: NetworkConfigSchema.exactOptional().openapi({
      description: 'Configuration for cluster networking.',
    }),
    networkPolicy: NetworkPolicySchema.exactOptional().openapi({
      description: 'Configuration options for the NetworkPolicy feature.',
    }),
    nodeConfig: NodeConfigSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Parameters used in creating the cluster\'s nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead.',
    }),
    nodeIpv4CidrSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.',
      }),
    nodePoolAutoConfig: NodePoolAutoConfigSchema.exactOptional().openapi({
      description:
        'Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.',
    }),
    nodePoolDefaults: NodePoolDefaultsSchema.exactOptional().openapi({
      description:
        'Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object.',
    }),
    nodePools: z
      .array(NodePoolSchema)
      .exactOptional()
      .openapi({
        description:
          'The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.',
      }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description: 'Notification configuration of the cluster.',
    }),
    parentProductConfig: ParentProductConfigSchema.exactOptional().openapi({
      description:
        'The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster.',
    }),
    podSecurityPolicyConfig: PodSecurityPolicyConfigSchema.exactOptional().openapi({
      description: 'Configuration for the PodSecurityPolicy feature.',
    }),
    privateCluster: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.',
      }),
    privateClusterConfig: PrivateClusterConfigSchema.exactOptional().openapi({
      description: 'Configuration for private cluster.',
    }),
    protectConfig: ProtectConfigSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Deprecated: Use SecurityPostureConfig instead. Enable/Disable Protect API features for the cluster.',
    }),
    releaseChannel: ReleaseChannelSchema.exactOptional().openapi({
      description:
        'Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version.',
    }),
    resourceLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource labels for the cluster to use to annotate any related Google Compute Engine resources.',
      }),
    resourceUsageExportConfig: ResourceUsageExportConfigSchema.exactOptional().openapi({
      description:
        'Configuration for exporting resource usages. Resource usage export is disabled when this config unspecified.',
    }),
    securityPostureConfig: SecurityPostureConfigSchema.exactOptional().openapi({
      description: 'Enable/Disable Security Posture API features for the cluster.',
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: '[Output only] Server-defined URL for the resource.' }),
    servicesIpv4Cidr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.',
      }),
    shieldedNodes: ShieldedNodesSchema.exactOptional().openapi({
      description: 'Shielded Nodes configuration.',
    }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'PROVISIONING',
        'RUNNING',
        'RECONCILING',
        'STOPPING',
        'ERROR',
        'DEGRADED',
      ])
      .exactOptional()
      .openapi({ description: '[Output only] The current status of this cluster.' }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '[Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.',
      }),
    tpuConfig: TpuConfigSchema.exactOptional().openapi({
      description: 'Configuration for Cloud TPU support;',
    }),
    tpuIpv4CidrBlock: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).',
      }),
    verticalPodAutoscaling: VerticalPodAutoscalingSchema.exactOptional().openapi({
      description: 'Cluster-level Vertical Pod Autoscaling configuration.',
    }),
    workloadAltsConfig: WorkloadALTSConfigSchema.exactOptional().openapi({
      description: 'Configuration for direct-path (via ALTS) with workload identity.',
    }),
    workloadCertificates: WorkloadCertificatesSchema.exactOptional().openapi({
      description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    }),
    workloadIdentityConfig: WorkloadIdentityConfigSchema.exactOptional().openapi({
      description: 'Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.',
    }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '[Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.',
      }),
  })
  .openapi({ description: 'A Google Kubernetes Engine cluster.', required: [] })
  .openapi('Cluster')

const IntraNodeVisibilityConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables intra node visibility for this cluster.' }),
  })
  .openapi({
    description:
      'IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.',
    required: [],
  })
  .openapi('IntraNodeVisibilityConfig')

const ILBSubsettingConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables l4 ILB subsetting for this cluster' }),
  })
  .openapi({
    description:
      'ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.',
    required: [],
  })
  .openapi('ILBSubsettingConfig')

const ClusterUpdateSchema = z
  .object({
    additionalPodRangesConfig: AdditionalPodRangesConfigSchema.exactOptional().openapi({
      description:
        'The additional pod ranges to be added to the cluster. These pod ranges can be used by node pools to allocate pod IPs.',
    }),
    desiredAddonsConfig: AddonsConfigSchema.exactOptional().openapi({
      description: 'Configurations for the various addons available to run in the cluster.',
    }),
    desiredAuthenticatorGroupsConfig: AuthenticatorGroupsConfigSchema.exactOptional().openapi({
      description:
        'AuthenticatorGroupsConfig specifies the config for the cluster security groups settings.',
    }),
    desiredAutopilotWorkloadPolicyConfig: WorkloadPolicyConfigSchema.exactOptional().openapi({
      description: 'The desired workload policy configuration for the autopilot cluster.',
    }),
    desiredBinaryAuthorization: BinaryAuthorizationSchema.exactOptional().openapi({
      description: 'The desired configuration options for the Binary Authorization feature.',
    }),
    desiredClusterAutoscaling: ClusterAutoscalingSchema.exactOptional().openapi({
      description: 'Cluster-level autoscaling configuration.',
    }),
    desiredClusterTelemetry: ClusterTelemetrySchema.exactOptional().openapi({
      description: 'The desired telemetry integration for the cluster.',
    }),
    desiredCostManagementConfig: CostManagementConfigSchema.exactOptional().openapi({
      description: 'The desired configuration for the fine-grained cost management feature.',
    }),
    desiredDatabaseEncryption: DatabaseEncryptionSchema.exactOptional().openapi({
      description: 'Configuration of etcd encryption.',
    }),
    desiredDatapathProvider: z
      .enum(['DATAPATH_PROVIDER_UNSPECIFIED', 'LEGACY_DATAPATH', 'ADVANCED_DATAPATH'])
      .exactOptional()
      .openapi({ description: 'The desired datapath provider for the cluster.' }),
    desiredDefaultSnatStatus: DefaultSnatStatusSchema.exactOptional().openapi({
      description: 'The desired status of whether to disable default sNAT for this cluster.',
    }),
    desiredDnsConfig: DNSConfigSchema.exactOptional().openapi({
      description: 'DNSConfig contains clusterDNS config for this cluster.',
    }),
    desiredEnableFqdnNetworkPolicy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable/Disable FQDN Network Policy for the cluster.' }),
    desiredEnablePrivateEndpoint: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Enable/Disable private endpoint for the cluster's master." }),
    desiredFleet: FleetSchema.exactOptional().openapi({
      description: 'The desired fleet configuration for the cluster.',
    }),
    desiredGatewayApiConfig: GatewayAPIConfigSchema.exactOptional().openapi({
      description: 'The desired config of Gateway API on this cluster.',
    }),
    desiredGcfsConfig: GcfsConfigSchema.exactOptional().openapi({
      description: 'The desired GCFS config for the cluster.',
    }),
    desiredHostMaintenancePolicy: HostMaintenancePolicySchema.exactOptional().openapi({
      description:
        'HostMaintenancePolicy contains the desired maintenance policy for the Google Compute Engine hosts.',
    }),
    desiredIdentityServiceConfig: IdentityServiceConfigSchema.exactOptional().openapi({
      description: 'The desired Identity Service component configuration.',
    }),
    desiredImageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.',
      }),
    desiredInTransitEncryptionConfig: z
      .enum([
        'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED',
        'IN_TRANSIT_ENCRYPTION_DISABLED',
        'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT',
      ])
      .exactOptional()
      .openapi({ description: 'Specify the details of in-transit encryption.' }),
    desiredIntraNodeVisibilityConfig: IntraNodeVisibilityConfigSchema.exactOptional().openapi({
      description: 'The desired config of Intra-node visibility.',
    }),
    desiredK8sBetaApis: K8sBetaAPIConfigSchema.exactOptional().openapi({
      description: 'Beta APIs enabled for cluster.',
    }),
    desiredL4ilbSubsettingConfig: ILBSubsettingConfigSchema.exactOptional().openapi({
      description: 'The desired L4 Internal Load Balancer Subsetting configuration.',
    }),
    desiredLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.",
      }),
    desiredLoggingConfig: LoggingConfigSchema.exactOptional().openapi({
      description: 'The desired logging configuration.',
    }),
    desiredLoggingService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.',
      }),
    desiredMaster: MasterSchema.exactOptional().openapi({
      description: 'Configuration for master components.',
    }),
    desiredMasterAuthorizedNetworksConfig:
      MasterAuthorizedNetworksConfigSchema.exactOptional().openapi({
        description: 'The desired configuration options for master authorized networks feature.',
      }),
    desiredMasterVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version',
      }),
    desiredMeshCertificates: MeshCertificatesSchema.exactOptional().openapi({
      description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    }),
    desiredMonitoringConfig: MonitoringConfigSchema.exactOptional().openapi({
      description: 'The desired monitoring configuration.',
    }),
    desiredMonitoringService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.',
      }),
    desiredNetworkPerformanceConfig: ClusterNetworkPerformanceConfigSchema.exactOptional().openapi({
      description: 'The desired network performance config.',
    }),
    desiredNodePoolAutoConfigNetworkTags: NetworkTagsSchema.exactOptional().openapi({
      description:
        'The desired network tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.',
    }),
    desiredNodePoolAutoConfigResourceManagerTags: ResourceManagerTagsSchema.exactOptional().openapi(
      {
        description:
          'The desired resource manager tags that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters.',
      },
    ),
    desiredNodePoolAutoscaling: NodePoolAutoscalingSchema.exactOptional().openapi({
      description:
        'Autoscaler configuration for the node pool specified in desired_node_pool_id. If there is only one pool in the cluster and desired_node_pool_id is not provided then the change applies to that single node pool.',
    }),
    desiredNodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster.',
      }),
    desiredNodePoolLoggingConfig: NodePoolLoggingConfigSchema.exactOptional().openapi({
      description: 'The desired node pool logging configuration defaults for the cluster.',
    }),
    desiredNodeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version',
      }),
    desiredNotificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description: 'The desired notification configuration.',
    }),
    desiredParentProductConfig: ParentProductConfigSchema.exactOptional().openapi({
      description: 'The desired parent product config for the cluster.',
    }),
    desiredPodSecurityPolicyConfig: PodSecurityPolicyConfigSchema.exactOptional().openapi({
      description: 'The desired configuration options for the PodSecurityPolicy feature.',
    }),
    desiredPrivateClusterConfig: PrivateClusterConfigSchema.exactOptional().openapi({
      description: 'The desired private cluster configuration.',
    }),
    desiredPrivateIpv6GoogleAccess: z
      .enum([
        'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED',
        'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED',
        'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE',
        'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL',
      ])
      .exactOptional()
      .openapi({ description: 'The desired state of IPv6 connectivity to Google Services.' }),
    desiredProtectConfig: ProtectConfigSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Deprecated: Use DesiredSecurityPostureConfig instead. Enable/Disable Protect API features for the cluster.',
    }),
    desiredReleaseChannel: ReleaseChannelSchema.exactOptional().openapi({
      description: 'The desired release channel configuration.',
    }),
    desiredResourceUsageExportConfig: ResourceUsageExportConfigSchema.exactOptional().openapi({
      description: 'The desired configuration for exporting resource usage.',
    }),
    desiredSecurityPostureConfig: SecurityPostureConfigSchema.exactOptional().openapi({
      description: 'Enable/Disable Security Posture API features for the cluster.',
    }),
    desiredServiceExternalIpsConfig: ServiceExternalIPsConfigSchema.exactOptional().openapi({
      description:
        'ServiceExternalIPsConfig specifies the config for the use of Services with ExternalIPs field.',
    }),
    desiredShieldedNodes: ShieldedNodesSchema.exactOptional().openapi({
      description: 'Configuration for Shielded Nodes.',
    }),
    desiredStackType: z
      .enum(['STACK_TYPE_UNSPECIFIED', 'IPV4', 'IPV4_IPV6'])
      .exactOptional()
      .openapi({
        description:
          'The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type.',
      }),
    desiredTpuConfig: TpuConfigSchema.exactOptional().openapi({
      description: 'The desired Cloud TPU configuration.',
    }),
    desiredVerticalPodAutoscaling: VerticalPodAutoscalingSchema.exactOptional().openapi({
      description: 'Cluster-level Vertical Pod Autoscaling configuration.',
    }),
    desiredWorkloadAltsConfig: WorkloadALTSConfigSchema.exactOptional().openapi({
      description: 'Configuration for direct-path (via ALTS) with workload identity.',
    }),
    desiredWorkloadCertificates: WorkloadCertificatesSchema.exactOptional().openapi({
      description: 'Configuration for issuance of mTLS keys and certificates to Kubernetes pods.',
    }),
    desiredWorkloadIdentityConfig: WorkloadIdentityConfigSchema.exactOptional().openapi({
      description: 'Configuration for Workload Identity.',
    }),
    enableK8sBetaApis: K8sBetaAPIConfigSchema.exactOptional().openapi({
      description: 'Kubernetes open source beta apis enabled on the cluster. Only beta apis',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned.',
      }),
    removedAdditionalPodRangesConfig: AdditionalPodRangesConfigSchema.exactOptional().openapi({
      description:
        "The additional pod ranges that are to be removed from the cluster. The pod ranges specified here must have been specified earlier in the 'additional_pod_ranges_config' argument.",
    }),
  })
  .openapi({
    description:
      'ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.',
    required: [],
  })
  .openapi('ClusterUpdate')

const CompleteIPRotationRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'CompleteIPRotationRequest moves the cluster master back into single-IP mode.',
    required: [],
  })
  .openapi('CompleteIPRotationRequest')

const CompleteNodePoolUpgradeRequestSchema = z
  .object({})
  .openapi({
    description:
      'CompleteNodePoolUpgradeRequest sets the name of target node pool to complete upgrade.',
  })
  .openapi('CompleteNodePoolUpgradeRequest')

const CreateClusterRequestSchema = z
  .object({
    cluster: ClusterSchema.exactOptional().openapi({
      description:
        'Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1beta1/projects.locations.clusters)',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
      }),
  })
  .openapi({ description: 'CreateClusterRequest creates a cluster.', required: [] })
  .openapi('CreateClusterRequest')

const CreateNodePoolRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.',
      }),
    nodePool: NodePoolSchema.exactOptional().openapi({
      description: 'Required. The node pool to create.',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
      }),
  })
  .openapi({
    description: 'CreateNodePoolRequest creates a node pool for a cluster.',
    required: [],
  })
  .openapi('CreateNodePoolRequest')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const HttpCacheControlResponseHeaderSchema = z
  .object({
    age: z
      .string()
      .exactOptional()
      .openapi({
        description: '14.6 response cache age, in seconds since the response is generated',
      }),
    directive: z
      .string()
      .exactOptional()
      .openapi({ description: '14.9 request and response directives' }),
    expires: z
      .string()
      .exactOptional()
      .openapi({ description: '14.21 response cache expires, in RFC 1123 date format' }),
  })
  .openapi({ description: 'RFC-2616: cache control support', required: [] })
  .openapi('HttpCacheControlResponseHeader')

const JwkSchema = z
  .object({
    alg: z.string().exactOptional().openapi({ description: 'Algorithm.' }),
    crv: z.string().exactOptional().openapi({ description: 'Used for ECDSA keys.' }),
    e: z.string().exactOptional().openapi({ description: 'Used for RSA keys.' }),
    kid: z.string().exactOptional().openapi({ description: 'Key ID.' }),
    kty: z.string().exactOptional().openapi({ description: 'Key Type.' }),
    n: z.string().exactOptional().openapi({ description: 'Used for RSA keys.' }),
    use: z.string().exactOptional().openapi({ description: 'Permitted uses for the public keys.' }),
    x: z.string().exactOptional().openapi({ description: 'Used for ECDSA keys.' }),
    y: z.string().exactOptional().openapi({ description: 'Used for ECDSA keys.' }),
  })
  .openapi({ description: 'Jwk is a JSON Web Key as specified in RFC 7517', required: [] })
  .openapi('Jwk')

const GetJSONWebKeysResponseSchema = z
  .object({
    cacheHeader: HttpCacheControlResponseHeaderSchema.exactOptional().openapi({
      description:
        'OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.',
    }),
    keys: z
      .array(JwkSchema)
      .exactOptional()
      .openapi({
        description: 'The public component of the keys used by the cluster to sign token requests.',
      }),
  })
  .openapi({
    description: 'GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517',
    required: [],
  })
  .openapi('GetJSONWebKeysResponse')

const GetOpenIDConfigResponseSchema = z
  .object({
    cacheHeader: HttpCacheControlResponseHeaderSchema.exactOptional().openapi({
      description:
        'OnePlatform automatically extracts this field and uses it to set the HTTP Cache-Control header.',
    }),
    claims_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported claims.' }),
    grant_types: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported grant types.' }),
    id_token_signing_alg_values_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'supported ID Token signing Algorithms.' }),
    issuer: z.string().exactOptional().openapi({ description: 'OIDC Issuer.' }),
    jwks_uri: z.string().exactOptional().openapi({ description: 'JSON Web Key uri.' }),
    response_types_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported response types.' }),
    subject_types_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported subject types.' }),
  })
  .openapi({
    description:
      'GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.',
    required: [],
  })
  .openapi('GetOpenIDConfigResponse')

const ListClustersResponseSchema = z
  .object({
    clusters: z
      .array(ClusterSchema)
      .exactOptional()
      .openapi({
        description: 'A list of clusters in the project in the specified zone, or across all ones.',
      }),
    missingZones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If any zones are listed here, the list of clusters returned may be missing those zones.',
      }),
  })
  .openapi({
    description: 'ListClustersResponse is the result of ListClustersRequest.',
    required: [],
  })
  .openapi('ListClustersResponse')

const LocationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the name of the resource requested. Specified in the format `projects/*/locations/*`.',
      }),
    recommended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the location is recommended for GKE cluster scheduling.' }),
    type: z
      .enum(['LOCATION_TYPE_UNSPECIFIED', 'ZONE', 'REGION'])
      .exactOptional()
      .openapi({
        description: 'Contains the type of location this Location is for. Regional or Zonal.',
      }),
  })
  .openapi({
    description:
      'Location returns the location name, and if the location is recommended for GKE cluster scheduling.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({ description: 'A full list of GKE locations.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).',
      }),
  })
  .openapi({
    description:
      'ListLocationsResponse returns the list of all GKE locations and their recommendation state.',
    required: [],
  })
  .openapi('ListLocationsResponse')

const ListNodePoolsResponseSchema = z
  .object({
    nodePools: z
      .array(NodePoolSchema)
      .exactOptional()
      .openapi({ description: 'A list of node pools for a cluster.' }),
  })
  .openapi({
    description: 'ListNodePoolsResponse is the result of ListNodePoolsRequest.',
    required: [],
  })
  .openapi('ListNodePoolsResponse')

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

const OperationProgressSchema: z.ZodType<OperationProgressType> = z
  .lazy(() =>
    z
      .object({
        metrics: z
          .array(MetricSchema)
          .exactOptional()
          .openapi({
            description:
              'Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}]',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A non-parameterized string describing an operation stage. Unset for single-stage operations.',
          }),
        stages: z
          .array(OperationProgressSchema)
          .exactOptional()
          .openapi({ description: 'Substages of an operation or a stage.' }),
        status: z
          .enum(['STATUS_UNSPECIFIED', 'PENDING', 'RUNNING', 'DONE', 'ABORTING'])
          .exactOptional()
          .openapi({
            description: 'Status of an operation stage. Unset for single-stage operations.',
          }),
      })
      .openapi({
        description: 'Information about operation (or operation stage) progress.',
        required: [],
      }),
  )
  .openapi('OperationProgress')

const OperationSchema = z
  .object({
    clusterConditions: z
      .array(StatusConditionSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Which conditions caused the current cluster state. Deprecated. Use field error instead.',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed operation progress, if available.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure.',
    }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server-assigned ID for the operation.' }),
    nodepoolConditions: z
      .array(StatusConditionSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Which conditions caused the current node pool state. Deprecated. Use field error instead.',
      }),
    operationType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'CREATE_CLUSTER',
        'DELETE_CLUSTER',
        'UPGRADE_MASTER',
        'UPGRADE_NODES',
        'REPAIR_CLUSTER',
        'UPDATE_CLUSTER',
        'CREATE_NODE_POOL',
        'DELETE_NODE_POOL',
        'SET_NODE_POOL_MANAGEMENT',
        'AUTO_REPAIR_NODES',
        'AUTO_UPGRADE_NODES',
        'SET_LABELS',
        'SET_MASTER_AUTH',
        'SET_NODE_POOL_SIZE',
        'SET_NETWORK_POLICY',
        'SET_MAINTENANCE_POLICY',
        'RESIZE_CLUSTER',
        'FLEET_FEATURE_UPGRADE',
      ])
      .exactOptional()
      .openapi({
        description: 'The operation type.',
        'x-enumDeprecated': [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          true,
          false,
          true,
          true,
          false,
          false,
        ],
      }),
    progress: OperationProgressSchema.exactOptional().openapi({
      description: 'Output only. [Output only] Progress information for an operation.',
      readOnly: true,
    }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Server-defined URI for the operation. Example: `https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
      }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'PENDING', 'RUNNING', 'DONE', 'ABORTING'])
      .exactOptional()
      .openapi({ description: 'The current status of the operation.' }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead.',
        readOnly: true,
      }),
    targetLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## `https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster` ## `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np` `https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node`',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.',
      }),
  })
  .openapi({
    description:
      'This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    missingZones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If any zones are listed here, the list of operations returned may be missing the operations from those zones.',
      }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({ description: 'A list of operations in the project in the specified zone.' }),
  })
  .openapi({
    description: 'ListOperationsResponse is the result of ListOperationsRequest.',
    required: [],
  })
  .openapi('ListOperationsResponse')

const UsableSubnetworkSecondaryRangeSchema = z
  .object({
    ipCidrRange: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The range of IP addresses belonging to this subnetwork secondary range.',
      }),
    rangeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.',
      }),
    status: z
      .enum(['UNKNOWN', 'UNUSED', 'IN_USE_SERVICE', 'IN_USE_SHAREABLE_POD', 'IN_USE_MANAGED_POD'])
      .exactOptional()
      .openapi({
        description: 'This field is to determine the status of the secondary range programmably.',
      }),
  })
  .openapi({ description: 'Secondary IP range of a usable subnetwork.', required: [] })
  .openapi('UsableSubnetworkSecondaryRange')

const UsableSubnetworkSchema = z
  .object({
    ipCidrRange: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The range of internal addresses that are owned by this subnetwork.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Network Name. Example: projects/my-project/global/networks/my-network',
      }),
    secondaryIpRanges: z
      .array(UsableSubnetworkSecondaryRangeSchema)
      .exactOptional()
      .openapi({ description: 'Secondary IP ranges.' }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet',
      }),
  })
  .openapi({
    description:
      'UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.',
    required: [],
  })
  .openapi('UsableSubnetwork')

const ListUsableSubnetworksResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token allows you to get the next page of results for list requests. If the number of results is larger than `page_size`, use the `next_page_token` as a value for the query parameter `page_token` in the next request. The value will become empty when there are no more pages.',
      }),
    subnetworks: z
      .array(UsableSubnetworkSchema)
      .exactOptional()
      .openapi({ description: 'A list of usable subnetworks in the specified network project.' }),
  })
  .openapi({
    description: 'ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.',
    required: [],
  })
  .openapi('ListUsableSubnetworksResponse')

const NodeLabelsSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Map of node label keys and node label values.' }),
  })
  .openapi({
    description:
      'Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).',
    required: [],
  })
  .openapi('NodeLabels')

const NodeTaintsSchema = z
  .object({
    taints: z
      .array(NodeTaintSchema)
      .exactOptional()
      .openapi({ description: 'List of node taints.' }),
  })
  .openapi({
    description:
      'Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).',
    required: [],
  })
  .openapi('NodeTaints')

const ReleaseChannelConfigSchema = z
  .object({
    availableVersions: z
      .array(AvailableVersionSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Deprecated. This field has been deprecated and replaced with the valid_versions field.',
      }),
    channel: z
      .enum(['UNSPECIFIED', 'RAPID', 'REGULAR', 'STABLE'])
      .exactOptional()
      .openapi({ description: 'The release channel this configuration applies to.' }),
    defaultVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default version for newly created clusters on the channel.' }),
    validVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of valid versions for the channel.' }),
  })
  .openapi({
    description: 'ReleaseChannelConfig exposes configuration for a release channel.',
    required: [],
  })
  .openapi('ReleaseChannelConfig')

const ResourceLabelsSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Map of node label keys and node label values.' }),
  })
  .openapi({
    description:
      'Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).',
    required: [],
  })
  .openapi('ResourceLabels')

const RollbackNodePoolUpgradeRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
      }),
    nodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    respectPdb: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Option for rollback to ignore the PodDisruptionBudget. Default value is false.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description:
      'RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.',
    required: [],
  })
  .openapi('RollbackNodePoolUpgradeRequest')

const SecurityBulletinEventSchema = z
  .object({
    affectedSupportedMinors: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The GKE minor versions affected by this vulnerability.' }),
    briefDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A brief description of the bulletin. See the bulletin pointed to by the bulletin_uri field for an expanded description.',
      }),
    bulletinId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the bulletin corresponding to the vulnerability.' }),
    bulletinUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI link to the bulletin on the website for more information.',
      }),
    cveIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The CVEs associated with this bulletin.' }),
    manualStepsRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this field is specified, it means there are manual steps that the user must take to make their clusters safe.',
      }),
    patchedVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The GKE versions where this vulnerability is patched.' }),
    resourceTypeAffected: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource type (node/control plane) that has the vulnerability. Multiple notifications (1 notification per resource type) will be sent for a vulnerability that affects > 1 resource type.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The severity of this bulletin as it relates to GKE.' }),
    suggestedUpgradeTarget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This represents a version selected from the patched_versions field that the cluster receiving this notification should most likely want to upgrade to based on its current version. Note that if this notification is being received by a given cluster, it means that this version is currently available as an upgrade target in that cluster's location.",
      }),
  })
  .openapi({
    description:
      'SecurityBulletinEvent is a notification sent to customers when a security bulletin has been posted that they are vulnerable to.',
    required: [],
  })
  .openapi('SecurityBulletinEvent')

const WindowsVersionSchema = z
  .object({
    imageType: z.string().exactOptional().openapi({ description: 'Windows server image type' }),
    osVersion: z.string().exactOptional().openapi({ description: 'Windows server build number' }),
    supportEndDate: DateSchema.exactOptional().openapi({
      description: 'Mainstream support end date',
    }),
  })
  .openapi({ description: 'Windows server version.', required: [] })
  .openapi('WindowsVersion')

const WindowsVersionsSchema = z
  .object({
    windowsVersions: z
      .array(WindowsVersionSchema)
      .exactOptional()
      .openapi({ description: 'List of Windows server versions.' }),
  })
  .openapi({ description: 'Windows server versions.', required: [] })
  .openapi('WindowsVersions')

const ServerConfigSchema = z
  .object({
    channels: z
      .array(ReleaseChannelConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of release channel configurations.' }),
    defaultClusterVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of Kubernetes the service deploys by default.' }),
    defaultImageType: z.string().exactOptional().openapi({ description: 'Default image type.' }),
    validImageTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of valid image types.' }),
    validMasterVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of valid master versions, in descending order.' }),
    validNodeVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of valid node upgrade target versions, in descending order.' }),
    windowsVersionMaps: z
      .record(z.string(), WindowsVersionsSchema)
      .exactOptional()
      .openapi({
        description: 'Maps of Kubernetes version and supported Windows server versions.',
      }),
  })
  .openapi({ description: 'Kubernetes Engine service configuration.', required: [] })
  .openapi('ServerConfig')

const SetAddonsConfigRequestSchema = z
  .object({
    addonsConfig: AddonsConfigSchema.exactOptional().openapi({
      description:
        'Required. The desired configurations for the various addons available to run in the cluster.',
    }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetAddonsRequest sets the addons associated with the cluster.',
    required: [],
  })
  .openapi('SetAddonsConfigRequest')

const SetLabelsRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
      }),
    labelFingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Kubernetes Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a `get()` request to the resource to get the latest fingerprint.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    resourceLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Required. The labels to set for that cluster.' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description:
      'SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster',
    required: [],
  })
  .openapi('SetLabelsRequest')

const SetLegacyAbacRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Required. Whether ABAC authorization will be enabled in the cluster.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description:
      'SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.',
    required: [],
  })
  .openapi('SetLegacyAbacRequest')

const SetLocationsRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed. This list must always include the cluster's primary zone.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({ description: 'SetLocationsRequest sets the locations of the cluster.', required: [] })
  .openapi('SetLocationsRequest')

const SetLoggingServiceRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    loggingService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetLoggingServiceRequest sets the logging service of a cluster.',
    required: [],
  })
  .openapi('SetLoggingServiceRequest')

const SetMaintenancePolicyRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the cluster to update.' }),
    maintenancePolicy: MaintenancePolicySchema.exactOptional().openapi({
      description:
        'Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.',
      }),
  })
  .openapi({
    description: 'SetMaintenancePolicyRequest sets the maintenance policy for a cluster.',
    required: [],
  })
  .openapi('SetMaintenancePolicyRequest')

const SetMasterAuthRequestSchema = z
  .object({
    action: z
      .enum(['UNKNOWN', 'SET_PASSWORD', 'GENERATE_PASSWORD', 'SET_USERNAME'])
      .exactOptional()
      .openapi({
        description: 'Required. The exact form of action to be taken on the master auth.',
      }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    update: MasterAuthSchema.exactOptional().openapi({
      description: 'Required. A description of the update.',
    }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetMasterAuthRequest updates the admin password of a cluster.',
    required: [],
  })
  .openapi('SetMasterAuthRequest')

const SetMonitoringServiceRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    monitoringService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetMonitoringServiceRequest sets the monitoring service of a cluster.',
    required: [],
  })
  .openapi('SetMonitoringServiceRequest')

const SetNetworkPolicyRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    networkPolicy: NetworkPolicySchema.exactOptional().openapi({
      description: 'Required. Configuration options for the NetworkPolicy feature.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetNetworkPolicyRequest enables/disables network policy for a cluster.',
    required: [],
  })
  .openapi('SetNetworkPolicyRequest')

const SetNodePoolAutoscalingRequestSchema = z
  .object({
    autoscaling: NodePoolAutoscalingSchema.exactOptional().openapi({
      description: 'Required. Autoscaling configuration for the node pool.',
    }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
      }),
    nodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.',
    required: [],
  })
  .openapi('SetNodePoolAutoscalingRequest')

const SetNodePoolManagementRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
      }),
    management: NodeManagementSchema.exactOptional().openapi({
      description: 'Required. NodeManagement configuration for the node pool.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
      }),
    nodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetNodePoolManagementRequest sets the node management properties of a node pool.',
    required: [],
  })
  .openapi('SetNodePoolManagementRequest')

const SetNodePoolSizeRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
      }),
    nodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The desired node count for the pool.' }),
    nodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({ description: 'SetNodePoolSizeRequest sets the size of a node pool.', required: [] })
  .openapi('SetNodePoolSizeRequest')

const StartIPRotationRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    rotateCredentials: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to rotate credentials during IP rotation.' }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description:
      'StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.',
    required: [],
  })
  .openapi('StartIPRotationRequest')

const UpdateClusterRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    update: ClusterUpdateSchema.exactOptional().openapi({
      description: 'Required. A description of the update.',
    }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({ description: 'UpdateClusterRequest updates the settings of a cluster.', required: [] })
  .openapi('UpdateClusterRequest')

const UpdateMasterRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    masterVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({ description: 'UpdateMasterRequest updates the master of the cluster.', required: [] })
  .openapi('UpdateMasterRequest')

const UpdateNodePoolRequestSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    confidentialNodes: ConfidentialNodesSchema.exactOptional().openapi({
      description:
        'Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.',
    }),
    diskSizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The desired disk size for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk size.',
      }),
    diskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The desired disk type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified disk type.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned.',
      }),
    fastSocket: FastSocketSchema.exactOptional().openapi({
      description: 'Enable or disable NCCL fast socket for the node pool.',
    }),
    gcfsConfig: GcfsConfigSchema.exactOptional().openapi({ description: 'GCFS config.' }),
    gvnic: VirtualNICSchema.exactOptional().openapi({
      description: 'Enable or disable gvnic on the node pool.',
    }),
    imageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.',
      }),
    kubeletConfig: NodeKubeletConfigSchema.exactOptional().openapi({
      description: 'Node kubelet configs.',
    }),
    labels: NodeLabelsSchema.exactOptional().openapi({
      description:
        'The desired node labels to be applied to all nodes in the node pool. If this field is not present, the labels will not be changed. Otherwise, the existing node labels will be *replaced* with the provided labels.',
    }),
    linuxNodeConfig: LinuxNodeConfigSchema.exactOptional().openapi({
      description: 'Parameters that can be configured on Linux nodes.',
    }),
    locations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.",
      }),
    loggingConfig: NodePoolLoggingConfigSchema.exactOptional().openapi({
      description: 'Logging configuration.',
    }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The desired machine type for nodes in the node pool. Initiates an upgrade operation that migrates the nodes in the node pool to the specified machine type.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
      }),
    nodeNetworkConfig: NodeNetworkConfigSchema.exactOptional().openapi({
      description: 'Node network config.',
    }),
    nodePoolId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.',
      }),
    nodeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
      }),
    queuedProvisioning: QueuedProvisioningSchema.exactOptional().openapi({
      description: 'Specifies the configuration of queued provisioning.',
    }),
    resourceLabels: ResourceLabelsSchema.exactOptional().openapi({
      description:
        'The resource labels for the node pool to use to annotate any related Google Compute Engine resources.',
    }),
    resourceManagerTags: ResourceManagerTagsSchema.exactOptional().openapi({
      description:
        'Desired resource manager tag keys and values to be attached to the nodes for managing Compute Engine firewalls using Network Firewall Policies. Existing tags will be replaced with new values.',
    }),
    tags: NetworkTagsSchema.exactOptional().openapi({
      description:
        'The desired network tags to be applied to all nodes in the node pool. If this field is not present, the tags will not be changed. Otherwise, the existing network tags will be *replaced* with the provided tags.',
    }),
    taints: NodeTaintsSchema.exactOptional().openapi({
      description:
        'The desired node taints to be applied to all nodes in the node pool. If this field is not present, the taints will not be changed. Otherwise, the existing node taints will be *replaced* with the provided taints.',
    }),
    upgradeSettings: UpgradeSettingsSchema.exactOptional().openapi({
      description: 'Upgrade settings control disruption and speed of the upgrade.',
    }),
    windowsNodeConfig: WindowsNodeConfigSchema.exactOptional().openapi({
      description: 'Parameters that can be configured on Windows nodes.',
    }),
    workloadMetadataConfig: WorkloadMetadataConfigSchema.exactOptional().openapi({
      description: 'The desired workload metadata config for the node pool.',
    }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
      }),
  })
  .openapi({
    description: 'SetNodePoolVersionRequest updates the version of a node pool.',
    required: [],
  })
  .openapi('UpdateNodePoolRequest')

const UpgradeAvailableEventSchema = z
  .object({
    releaseChannel: ReleaseChannelSchema.exactOptional().openapi({
      description: 'The release channel of the version. If empty, it means a non-channel release.',
    }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional relative path to the resource. For example, the relative path of the node pool.',
      }),
    resourceType: z
      .enum(['UPGRADE_RESOURCE_TYPE_UNSPECIFIED', 'MASTER', 'NODE_POOL'])
      .exactOptional()
      .openapi({ description: 'The resource type of the release version.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The release version available for upgrade.' }),
    windowsVersions: WindowsVersionsSchema.exactOptional().openapi({
      description: 'Windows node versions info.',
    }),
  })
  .openapi({
    description:
      'UpgradeAvailableEvent is a notification sent to customers when a new available version is released.',
    required: [],
  })
  .openapi('UpgradeAvailableEvent')

const UpgradeEventSchema = z
  .object({
    currentVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current version before the upgrade.' }),
    operation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operation associated with this upgrade.' }),
    operationStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation was started.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool.',
      }),
    resourceType: z
      .enum(['UPGRADE_RESOURCE_TYPE_UNSPECIFIED', 'MASTER', 'NODE_POOL'])
      .exactOptional()
      .openapi({ description: 'The resource type that is upgrading.' }),
    targetVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The target version for the upgrade.' }),
  })
  .openapi({
    description:
      'UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading.',
    required: [],
  })
  .openapi('UpgradeEvent')

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

export const getV1beta1ProjectsProjectIdZonesZoneClustersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters',
  tags: ['projects'],
  description: 'Lists all clusters owned by a project in either the specified zone or all zones.',
  operationId: 'container.projects.zones.clusters.list',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ProjectsProjectIdZonesZoneClustersRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters',
  tags: ['projects'],
  description:
    "Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.",
  operationId: 'container.projects.zones.clusters.create',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateClusterRequestSchema } } },
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

export const getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
  tags: ['projects'],
  description: 'Gets the details for a specific cluster.',
  operationId: 'container.projects.zones.clusters.get',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to retrieve. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClusterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute = createRoute({
  method: 'put',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
  tags: ['projects'],
  description: 'Updates the settings for a specific cluster.',
  operationId: 'container.projects.zones.clusters.update',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateClusterRequestSchema } } },
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

export const deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}',
  tags: ['projects'],
  description:
    "Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.",
  operationId: 'container.projects.zones.clusters.delete',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to delete. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons',
  tags: ['projects'],
  description: 'Sets the addons for a specific cluster.',
  operationId: 'container.projects.zones.clusters.addons',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetAddonsConfigRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac',
  tags: ['projects'],
  description: 'Enables or disables the ABAC authorization mechanism on a cluster.',
  operationId: 'container.projects.zones.clusters.legacyAbac',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLegacyAbacRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations',
  tags: ['projects'],
  description:
    'Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.',
  operationId: 'container.projects.zones.clusters.locations',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLocationsRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging',
  tags: ['projects'],
  description: 'Sets the logging service for a specific cluster.',
  operationId: 'container.projects.zones.clusters.logging',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLoggingServiceRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master',
  tags: ['projects'],
  description: 'Updates the master for a specific cluster.',
  operationId: 'container.projects.zones.clusters.master',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateMasterRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring',
  tags: ['projects'],
  description: 'Sets the monitoring service for a specific cluster.',
  operationId: 'container.projects.zones.clusters.monitoring',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetMonitoringServiceRequestSchema } } },
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

export const getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
  tags: ['projects'],
  description: 'Lists the node pools for a cluster.',
  operationId: 'container.projects.zones.clusters.nodePools.list',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNodePoolsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools',
  tags: ['projects'],
  description: 'Creates a node pool for a cluster.',
  operationId: 'container.projects.zones.clusters.nodePools.create',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clusterId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateNodePoolRequestSchema } } },
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

export const getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute =
  createRoute({
    method: 'get',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
    tags: ['projects'],
    description: 'Retrieves the requested node pool.',
    operationId: 'container.projects.zones.clusters.nodePools.get',
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
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
              in: 'query',
              name: 'name',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: NodePoolSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}',
    tags: ['projects'],
    description: 'Deletes a node pool from a cluster.',
    operationId: 'container.projects.zones.clusters.nodePools.delete',
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
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
              in: 'query',
              name: 'name',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling',
    tags: ['projects'],
    description: 'Sets the autoscaling settings of a specific node pool.',
    operationId: 'container.projects.zones.clusters.nodePools.autoscaling',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetNodePoolAutoscalingRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement',
    tags: ['projects'],
    description: 'Sets the NodeManagement options for a node pool.',
    operationId: 'container.projects.zones.clusters.nodePools.setManagement',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetNodePoolManagementRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize',
    tags: ['projects'],
    description:
      'SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.',
    operationId: 'container.projects.zones.clusters.nodePools.setSize',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetNodePoolSizeRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update',
    tags: ['projects'],
    description: 'Updates the version and/or image type of a specific node pool.',
    operationId: 'container.projects.zones.clusters.nodePools.update',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: UpdateNodePoolRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback',
    tags: ['projects'],
    description:
      'Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.',
    operationId: 'container.projects.zones.clusters.nodePools.rollback',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        nodePoolId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'nodePoolId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RollbackNodePoolUpgradeRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels',
    tags: ['projects'],
    description: 'Sets labels on a cluster.',
    operationId: 'container.projects.zones.clusters.resourceLabels',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetLabelsRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation',
    tags: ['projects'],
    description: 'Completes master IP rotation.',
    operationId: 'container.projects.zones.clusters.completeIpRotation',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CompleteIPRotationRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy',
    tags: ['projects'],
    description: 'Sets the maintenance policy for a cluster.',
    operationId: 'container.projects.zones.clusters.setMaintenancePolicy',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The name of the cluster to update.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetMaintenancePolicyRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthRoute = createRoute(
  {
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth',
    tags: ['projects'],
    description:
      'Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.',
    operationId: 'container.projects.zones.clusters.setMasterAuth',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetMasterAuthRequestSchema } } },
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
  },
)

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy',
    tags: ['projects'],
    description: 'Enables or disables Network Policy for a cluster.',
    operationId: 'container.projects.zones.clusters.setNetworkPolicy',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SetNetworkPolicyRequestSchema } } },
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

export const postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationRoute =
  createRoute({
    method: 'post',
    path: '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation',
    tags: ['projects'],
    description: 'Starts master IP rotation.',
    operationId: 'container.projects.zones.clusters.startIpRotation',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        zone: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'zone',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StartIPRotationRequestSchema } } },
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

export const getV1beta1ProjectsProjectIdZonesZoneOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/operations',
  tags: ['projects'],
  description: 'Lists all operations in a project in the specified zone or all zones.',
  operationId: 'container.projects.zones.operations.list',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.',
            in: 'path',
            name: 'zone',
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

export const getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}',
  tags: ['projects'],
  description: 'Gets the specified operation.',
  operationId: 'container.projects.zones.operations.get',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'operationId',
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

export const postV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel',
  tags: ['projects'],
  description: 'Cancels the specified operation.',
  operationId: 'container.projects.zones.operations.cancel',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operationId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'operationId',
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
  ],
})

export const getV1beta1ProjectsProjectIdZonesZoneServerconfigRoute = createRoute({
  method: 'get',
  path: '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig',
  tags: ['projects'],
  description: 'Returns configuration info about the Google Kubernetes Engine service.',
  operationId: 'container.projects.zones.getServerconfig',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zone: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.',
            in: 'path',
            name: 'zone',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServerConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Gets the specified operation.',
  operationId: 'container.projects.locations.operations.get',
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
      operationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'operationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'zone',
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
            description:
              'The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.',
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

export const putV1beta1NameRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates the version and/or image type of a specific node pool.',
  operationId: 'container.projects.locations.clusters.nodePools.update',
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
            description:
              'The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateNodePoolRequestSchema } } },
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

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Deletes a node pool from a cluster.',
  operationId: 'container.projects.locations.clusters.nodePools.delete',
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
      clusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'clusterId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      nodePoolId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the node pool to delete. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'nodePoolId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'zone',
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
            description:
              'The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
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

export const getV1beta1NameServerConfigRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/serverConfig',
  tags: ['projects'],
  description: 'Returns configuration info about the Google Kubernetes Engine service.',
  operationId: 'container.projects.locations.getServerConfig',
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
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for. This field has been deprecated and replaced by the name field.',
            in: 'query',
            name: 'zone',
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
            description:
              'The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ServerConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description: 'Cancels the specified operation.',
  operationId: 'container.projects.locations.operations.cancel',
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
            description:
              'The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.',
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
  ],
})

export const getV1beta1NameCheckAutopilotCompatibilityRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:checkAutopilotCompatibility',
  tags: ['projects'],
  description:
    'Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.',
  operationId: 'container.projects.locations.clusters.checkAutopilotCompatibility',
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
            description:
              'The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.',
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
      content: { 'application/json': { schema: CheckAutopilotCompatibilityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameCompleteIpRotationRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:completeIpRotation',
  tags: ['projects'],
  description: 'Completes master IP rotation.',
  operationId: 'container.projects.locations.clusters.completeIpRotation',
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
            description:
              'The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteIPRotationRequestSchema } } },
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

export const postV1beta1NameCompleteUpgradeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:completeUpgrade',
  tags: ['projects'],
  description: 'CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.',
  operationId: 'container.projects.locations.clusters.nodePools.completeUpgrade',
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
            description:
              'The name (project, location, cluster, node pool id) of the node pool to complete upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteNodePoolUpgradeRequestSchema } } },
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
  ],
})

export const postV1beta1NameRollbackRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:rollback',
  tags: ['projects'],
  description:
    'Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.',
  operationId: 'container.projects.locations.clusters.nodePools.rollback',
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
            description:
              'The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RollbackNodePoolUpgradeRequestSchema } } },
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

export const postV1beta1NameSetAddonsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setAddons',
  tags: ['projects'],
  description: 'Sets the addons for a specific cluster.',
  operationId: 'container.projects.locations.clusters.setAddons',
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
            description:
              'The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetAddonsConfigRequestSchema } } },
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

export const postV1beta1NameSetAutoscalingRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setAutoscaling',
  tags: ['projects'],
  description: 'Sets the autoscaling settings of a specific node pool.',
  operationId: 'container.projects.locations.clusters.nodePools.setAutoscaling',
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
            description:
              'The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetNodePoolAutoscalingRequestSchema } } },
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

export const postV1beta1NameSetLegacyAbacRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setLegacyAbac',
  tags: ['projects'],
  description: 'Enables or disables the ABAC authorization mechanism on a cluster.',
  operationId: 'container.projects.locations.clusters.setLegacyAbac',
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
            description:
              'The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLegacyAbacRequestSchema } } },
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

export const postV1beta1NameSetLocationsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setLocations',
  tags: ['projects'],
  description:
    'Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.',
  operationId: 'container.projects.locations.clusters.setLocations',
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
            description:
              'The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLocationsRequestSchema } } },
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

export const postV1beta1NameSetLoggingRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setLogging',
  tags: ['projects'],
  description: 'Sets the logging service for a specific cluster.',
  operationId: 'container.projects.locations.clusters.setLogging',
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
            description:
              'The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLoggingServiceRequestSchema } } },
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

export const postV1beta1NameSetMaintenancePolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setMaintenancePolicy',
  tags: ['projects'],
  description: 'Sets the maintenance policy for a cluster.',
  operationId: 'container.projects.locations.clusters.setMaintenancePolicy',
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
            description:
              'The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetMaintenancePolicyRequestSchema } } },
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

export const postV1beta1NameSetManagementRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setManagement',
  tags: ['projects'],
  description: 'Sets the NodeManagement options for a node pool.',
  operationId: 'container.projects.locations.clusters.nodePools.setManagement',
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
            description:
              'The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetNodePoolManagementRequestSchema } } },
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

export const postV1beta1NameSetMasterAuthRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setMasterAuth',
  tags: ['projects'],
  description:
    'Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.',
  operationId: 'container.projects.locations.clusters.setMasterAuth',
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
            description:
              'The name (project, location, cluster) of the cluster to set auth. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetMasterAuthRequestSchema } } },
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

export const postV1beta1NameSetMonitoringRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setMonitoring',
  tags: ['projects'],
  description: 'Sets the monitoring service for a specific cluster.',
  operationId: 'container.projects.locations.clusters.setMonitoring',
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
            description:
              'The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetMonitoringServiceRequestSchema } } },
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

export const postV1beta1NameSetNetworkPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setNetworkPolicy',
  tags: ['projects'],
  description: 'Enables or disables Network Policy for a cluster.',
  operationId: 'container.projects.locations.clusters.setNetworkPolicy',
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
            description:
              'The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetNetworkPolicyRequestSchema } } },
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

export const postV1beta1NameSetResourceLabelsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setResourceLabels',
  tags: ['projects'],
  description: 'Sets labels on a cluster.',
  operationId: 'container.projects.locations.clusters.setResourceLabels',
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
            description:
              'The name (project, location, cluster name) of the cluster to set labels. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLabelsRequestSchema } } },
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

export const postV1beta1NameSetSizeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:setSize',
  tags: ['projects'],
  description:
    'SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.',
  operationId: 'container.projects.locations.clusters.nodePools.setSize',
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
            description:
              'The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetNodePoolSizeRequestSchema } } },
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

export const postV1beta1NameStartIpRotationRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:startIpRotation',
  tags: ['projects'],
  description: 'Starts master IP rotation.',
  operationId: 'container.projects.locations.clusters.startIpRotation',
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
            description:
              'The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartIPRotationRequestSchema } } },
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

export const postV1beta1NameUpdateMasterRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:updateMaster',
  tags: ['projects'],
  description: 'Updates the master for a specific cluster.',
  operationId: 'container.projects.locations.clusters.updateMaster',
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
            description:
              'The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateMasterRequestSchema } } },
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

export const getV1beta1ParentWellKnownOpenidConfigurationRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/.well-known/openid-configuration',
  tags: ['projects'],
  description:
    'Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details.',
  operationId: 'container.projects.locations.clusters.well-known.getOpenid-configuration',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The cluster (project, location, cluster name) to get the discovery document for. Specified in the format `projects/*/locations/*/clusters/*`.',
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
      content: { 'application/json': { schema: GetOpenIDConfigResponseSchema } },
    },
  },
})

export const getV1beta1ParentAggregatedUsableSubnetworksRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/aggregated/usableSubnetworks',
  tags: ['projects'],
  description: 'Lists subnetworks that can be used for creating clusters in a project.',
  operationId: 'container.projects.aggregated.usableSubnetworks.list',
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
              'Filtering currently only supports equality on the networkProjectId and must be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId` is the project which owns the listed subnetworks. This defaults to the parent project ID.',
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
              'The max number of results per page that should be returned. If the number of available results is larger than `page_size`, a `next_page_token` is returned which can be used to get the next page of results in subsequent requests. Acceptable values are 0 to 500, inclusive. (Default: 500)',
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
              'Specifies a page token to use. Set this to the nextPageToken returned by previous list requests to get the next page of results.',
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
            description:
              'Required. The parent project where subnetworks are usable. Specified in the format `projects/*`.',
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
      content: { 'application/json': { schema: ListUsableSubnetworksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentClustersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/clusters',
  tags: ['projects'],
  description: 'Lists all clusters owned by a project in either the specified zone or all zones.',
  operationId: 'container.projects.locations.clusters.list',
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
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'zone',
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
              'The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.',
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
      content: { 'application/json': { schema: ListClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentClustersRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/clusters',
  tags: ['projects'],
  description:
    "Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.",
  operationId: 'container.projects.locations.clusters.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateClusterRequestSchema } } },
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

export const getV1beta1ParentJwksRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/jwks',
  tags: ['projects'],
  description: 'Gets the public component of the cluster signing keys in JSON Web Key format.',
  operationId: 'container.projects.locations.clusters.getJwks',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The cluster (project, location, cluster name) to get keys for. Specified in the format `projects/*/locations/*/clusters/*`.',
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
      content: { 'application/json': { schema: GetJSONWebKeysResponseSchema } },
    },
  },
})

export const getV1beta1ParentLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/locations',
  tags: ['projects'],
  description: 'Fetches locations that offer Google Kubernetes Engine.',
  operationId: 'container.projects.locations.list',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Contains the name of the resource requested. Specified in the format `projects/*`.',
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

export const getV1beta1ParentNodePoolsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/nodePools',
  tags: ['projects'],
  description: 'Lists the node pools for a cluster.',
  operationId: 'container.projects.locations.clusters.nodePools.list',
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
      clusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'clusterId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'zone',
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
              'The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.',
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
      content: { 'application/json': { schema: ListNodePoolsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentNodePoolsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/nodePools',
  tags: ['projects'],
  description: 'Creates a node pool for a cluster.',
  operationId: 'container.projects.locations.clusters.nodePools.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateNodePoolRequestSchema } } },
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

export const getV1beta1ParentOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/operations',
  tags: ['projects'],
  description: 'Lists all operations in a project in the specified zone or all zones.',
  operationId: 'container.projects.locations.operations.list',
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
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for all zones. This field has been deprecated and replaced by the parent field.',
            in: 'query',
            name: 'zone',
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
              'The parent (project and location) where the operations will be listed. Specified in the format `projects/*/locations/*`. Location "-" matches all zones and all regions.',
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
