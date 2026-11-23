type CloudRunConfig = {
  disabled?: boolean | undefined
  loadBalancerType?:
    | 'LOAD_BALANCER_TYPE_UNSPECIFIED'
    | 'LOAD_BALANCER_TYPE_EXTERNAL'
    | 'LOAD_BALANCER_TYPE_INTERNAL'
    | undefined
}
type ConfigConnectorConfig = { enabled?: boolean | undefined }
type DnsCacheConfig = { enabled?: boolean | undefined }
type GcePersistentDiskCsiDriverConfig = { enabled?: boolean | undefined }
type GcpFilestoreCsiDriverConfig = { enabled?: boolean | undefined }
type GcsFuseCsiDriverConfig = { enabled?: boolean | undefined }
type GkeBackupAgentConfig = { enabled?: boolean | undefined }
type HorizontalPodAutoscaling = { disabled?: boolean | undefined }
type HttpLoadBalancing = { disabled?: boolean | undefined }
type IstioConfig = {
  auth?: 'AUTH_NONE' | 'AUTH_MUTUAL_TLS' | undefined
  disabled?: boolean | undefined
}
type KalmConfig = { enabled?: boolean | undefined }
type KubernetesDashboard = { disabled?: boolean | undefined }
type NetworkPolicyConfig = { disabled?: boolean | undefined }
type StatefulHAConfig = { enabled?: boolean | undefined }
type AddonsConfig = {
  cloudRunConfig?: CloudRunConfig | undefined
  configConnectorConfig?: ConfigConnectorConfig | undefined
  dnsCacheConfig?: DnsCacheConfig | undefined
  gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig | undefined
  gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig | undefined
  gcsFuseCsiDriverConfig?: GcsFuseCsiDriverConfig | undefined
  gkeBackupAgentConfig?: GkeBackupAgentConfig | undefined
  horizontalPodAutoscaling?: HorizontalPodAutoscaling | undefined
  httpLoadBalancing?: HttpLoadBalancing | undefined
  istioConfig?: IstioConfig | undefined
  kalmConfig?: KalmConfig | undefined
  kubernetesDashboard?: KubernetesDashboard | undefined
  networkPolicyConfig?: NetworkPolicyConfig | undefined
  statefulHaConfig?: StatefulHAConfig | undefined
}
type AuthenticatorGroupsConfig = {
  enabled?: boolean | undefined
  securityGroup?: string | undefined
}
type AutopilotConversionStatus = { state?: 'STATE_UNSPECIFIED' | 'DONE' | undefined }
type WorkloadPolicyConfig = { allowNetAdmin?: boolean | undefined }
type Autopilot = {
  conversionStatus?: AutopilotConversionStatus | undefined
  enabled?: boolean | undefined
  workloadPolicyConfig?: WorkloadPolicyConfig | undefined
}
type AutoUpgradeOptions = {
  autoUpgradeStartTime?: string | undefined
  description?: string | undefined
}
type NodeManagement = {
  autoRepair?: boolean | undefined
  autoUpgrade?: boolean | undefined
  upgradeOptions?: AutoUpgradeOptions | undefined
}
type ShieldedInstanceConfig = {
  enableIntegrityMonitoring?: boolean | undefined
  enableSecureBoot?: boolean | undefined
}
type AutoscaledRolloutPolicy = { [x: string]: unknown }
type StandardRolloutPolicy = {
  batchNodeCount?: number | undefined
  batchPercentage?: number | undefined
  batchSoakDuration?: string | undefined
}
type BlueGreenSettings = {
  autoscaledRolloutPolicy?: AutoscaledRolloutPolicy | undefined
  nodePoolSoakDuration?: string | undefined
  standardRolloutPolicy?: StandardRolloutPolicy | undefined
}
type UpgradeSettings = {
  blueGreenSettings?: BlueGreenSettings | undefined
  maxSurge?: number | undefined
  maxUnavailable?: number | undefined
  strategy?: 'NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED' | 'BLUE_GREEN' | 'SURGE' | undefined
}
type AutoprovisioningNodePoolDefaults = {
  bootDiskKmsKey?: string | undefined
  diskSizeGb?: number | undefined
  diskType?: string | undefined
  imageType?: string | undefined
  insecureKubeletReadonlyPortEnabled?: boolean | undefined
  management?: NodeManagement | undefined
  minCpuPlatform?: string | undefined
  oauthScopes?: string[] | undefined
  serviceAccount?: string | undefined
  shieldedInstanceConfig?: ShieldedInstanceConfig | undefined
  upgradeSettings?: UpgradeSettings | undefined
}
type ResourceLimit = {
  maximum?: string | undefined
  minimum?: string | undefined
  resourceType?: string | undefined
}
type ClusterAutoscaling = {
  autoprovisioningLocations?: string[] | undefined
  autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults | undefined
  autoscalingProfile?: 'PROFILE_UNSPECIFIED' | 'OPTIMIZE_UTILIZATION' | 'BALANCED' | undefined
  enableNodeAutoprovisioning?: boolean | undefined
  resourceLimits?: ResourceLimit[] | undefined
}
type PolicyBinding = { name?: string | undefined }
type BinaryAuthorization = {
  enabled?: boolean | undefined
  evaluationMode?:
    | 'EVALUATION_MODE_UNSPECIFIED'
    | 'DISABLED'
    | 'PROJECT_SINGLETON_POLICY_ENFORCE'
    | 'POLICY_BINDINGS'
    | 'POLICY_BINDINGS_AND_PROJECT_SINGLETON_POLICY_ENFORCE'
    | undefined
  policyBindings?: PolicyBinding[] | undefined
}
type ClusterTelemetry = {
  type?: 'UNSPECIFIED' | 'DISABLED' | 'ENABLED' | 'SYSTEM_ONLY' | undefined
}
type StatusCondition = {
  canonicalCode?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'UNAUTHENTICATED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | undefined
  code?:
    | 'UNKNOWN'
    | 'GCE_STOCKOUT'
    | 'GKE_SERVICE_ACCOUNT_DELETED'
    | 'GCE_QUOTA_EXCEEDED'
    | 'SET_BY_OPERATOR'
    | 'CLOUD_KMS_KEY_ERROR'
    | 'CA_EXPIRING'
    | undefined
  message?: string | undefined
}
type ConfidentialNodes = { enabled?: boolean | undefined }
type CostManagementConfig = { enabled?: boolean | undefined }
type DatabaseEncryption = {
  keyName?: string | undefined
  state?: 'UNKNOWN' | 'ENCRYPTED' | 'DECRYPTED' | undefined
}
type MaxPodsConstraint = { maxPodsPerNode?: string | undefined }
type K8sBetaAPIConfig = { enabledApis?: string[] | undefined }
type EnterpriseConfig = {
  clusterTier?: 'CLUSTER_TIER_UNSPECIFIED' | 'STANDARD' | 'ENTERPRISE' | undefined
}
type Fleet = {
  membership?: string | undefined
  preRegistered?: boolean | undefined
  project?: string | undefined
}
type IdentityServiceConfig = { enabled?: boolean | undefined }
type RangeInfo = { rangeName?: string | undefined; utilization?: number | undefined }
type AdditionalPodRangesConfig = {
  podRangeInfo?: RangeInfo[] | undefined
  podRangeNames?: string[] | undefined
}
type PodCIDROverprovisionConfig = { disable?: boolean | undefined }
type IPAllocationPolicy = {
  additionalPodRangesConfig?: AdditionalPodRangesConfig | undefined
  allowRouteOverlap?: boolean | undefined
  clusterIpv4Cidr?: string | undefined
  clusterIpv4CidrBlock?: string | undefined
  clusterSecondaryRangeName?: string | undefined
  createSubnetwork?: boolean | undefined
  defaultPodIpv4RangeUtilization?: number | undefined
  ipv6AccessType?: 'IPV6_ACCESS_TYPE_UNSPECIFIED' | 'INTERNAL' | 'EXTERNAL' | undefined
  nodeIpv4Cidr?: string | undefined
  nodeIpv4CidrBlock?: string | undefined
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig | undefined
  servicesIpv4Cidr?: string | undefined
  servicesIpv4CidrBlock?: string | undefined
  servicesIpv6CidrBlock?: string | undefined
  servicesSecondaryRangeName?: string | undefined
  stackType?: 'STACK_TYPE_UNSPECIFIED' | 'IPV4' | 'IPV4_IPV6' | undefined
  subnetIpv6CidrBlock?: string | undefined
  subnetworkName?: string | undefined
  tpuIpv4CidrBlock?: string | undefined
  useIpAliases?: boolean | undefined
  useRoutes?: boolean | undefined
}
type LegacyAbac = { enabled?: boolean | undefined }
type LoggingComponentConfig = {
  enableComponents?:
    | (
        | 'COMPONENT_UNSPECIFIED'
        | 'SYSTEM_COMPONENTS'
        | 'WORKLOADS'
        | 'APISERVER'
        | 'SCHEDULER'
        | 'CONTROLLER_MANAGER'
      )[]
    | undefined
}
type LoggingConfig = { componentConfig?: LoggingComponentConfig | undefined }
type DailyMaintenanceWindow = { duration?: string | undefined; startTime?: string | undefined }
type MaintenanceExclusionOptions = {
  scope?: 'NO_UPGRADES' | 'NO_MINOR_UPGRADES' | 'NO_MINOR_OR_NODE_UPGRADES' | undefined
}
type TimeWindow = {
  endTime?: string | undefined
  maintenanceExclusionOptions?: MaintenanceExclusionOptions | undefined
  startTime?: string | undefined
}
type RecurringTimeWindow = { recurrence?: string | undefined; window?: TimeWindow | undefined }
type MaintenanceWindow = {
  dailyMaintenanceWindow?: DailyMaintenanceWindow | undefined
  maintenanceExclusions?: { [x: string]: TimeWindow } | undefined
  recurringWindow?: RecurringTimeWindow | undefined
}
type MaintenancePolicy = {
  resourceVersion?: string | undefined
  window?: MaintenanceWindow | undefined
}
type Master = { [x: string]: unknown }
type ClientCertificateConfig = { issueClientCertificate?: boolean | undefined }
type MasterAuth = {
  clientCertificate?: string | undefined
  clientCertificateConfig?: ClientCertificateConfig | undefined
  clientKey?: string | undefined
  clusterCaCertificate?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type CidrBlock = { cidrBlock?: string | undefined; displayName?: string | undefined }
type MasterAuthorizedNetworksConfig = {
  cidrBlocks?: CidrBlock[] | undefined
  enabled?: boolean | undefined
  gcpPublicCidrsAccessEnabled?: boolean | undefined
}
type MeshCertificates = { enableCertificates?: boolean | undefined }
type AdvancedDatapathObservabilityConfig = {
  enableMetrics?: boolean | undefined
  enableRelay?: boolean | undefined
  relayMode?: 'RELAY_MODE_UNSPECIFIED' | 'DISABLED' | 'INTERNAL_VPC_LB' | 'EXTERNAL_LB' | undefined
}
type MonitoringComponentConfig = {
  enableComponents?:
    | (
        | 'COMPONENT_UNSPECIFIED'
        | 'SYSTEM_COMPONENTS'
        | 'WORKLOADS'
        | 'APISERVER'
        | 'SCHEDULER'
        | 'CONTROLLER_MANAGER'
        | 'STORAGE'
        | 'HPA'
        | 'POD'
        | 'DAEMONSET'
        | 'DEPLOYMENT'
        | 'STATEFULSET'
      )[]
    | undefined
}
type ManagedPrometheusConfig = { enabled?: boolean | undefined }
type MonitoringConfig = {
  advancedDatapathObservabilityConfig?: AdvancedDatapathObservabilityConfig | undefined
  componentConfig?: MonitoringComponentConfig | undefined
  managedPrometheusConfig?: ManagedPrometheusConfig | undefined
}
type DefaultSnatStatus = { disabled?: boolean | undefined }
type DNSConfig = {
  clusterDns?: 'PROVIDER_UNSPECIFIED' | 'PLATFORM_DEFAULT' | 'CLOUD_DNS' | 'KUBE_DNS' | undefined
  clusterDnsDomain?: string | undefined
  clusterDnsScope?: 'DNS_SCOPE_UNSPECIFIED' | 'CLUSTER_SCOPE' | 'VPC_SCOPE' | undefined
}
type GatewayAPIConfig = {
  channel?:
    | 'CHANNEL_UNSPECIFIED'
    | 'CHANNEL_DISABLED'
    | 'CHANNEL_EXPERIMENTAL'
    | 'CHANNEL_STANDARD'
    | undefined
}
type ClusterNetworkPerformanceConfig = {
  totalEgressBandwidthTier?: 'TIER_UNSPECIFIED' | 'TIER_1' | undefined
}
type ServiceExternalIPsConfig = { enabled?: boolean | undefined }
type NetworkConfig = {
  datapathProvider?:
    | 'DATAPATH_PROVIDER_UNSPECIFIED'
    | 'LEGACY_DATAPATH'
    | 'ADVANCED_DATAPATH'
    | undefined
  defaultSnatStatus?: DefaultSnatStatus | undefined
  dnsConfig?: DNSConfig | undefined
  enableFqdnNetworkPolicy?: boolean | undefined
  enableIntraNodeVisibility?: boolean | undefined
  enableL4ilbSubsetting?: boolean | undefined
  enableMultiNetworking?: boolean | undefined
  gatewayApiConfig?: GatewayAPIConfig | undefined
  inTransitEncryptionConfig?:
    | 'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED'
    | 'IN_TRANSIT_ENCRYPTION_DISABLED'
    | 'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT'
    | undefined
  network?: string | undefined
  networkPerformanceConfig?: ClusterNetworkPerformanceConfig | undefined
  privateIpv6GoogleAccess?:
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL'
    | undefined
  serviceExternalIpsConfig?: ServiceExternalIPsConfig | undefined
  subnetwork?: string | undefined
}
type NetworkPolicy = {
  enabled?: boolean | undefined
  provider?: 'PROVIDER_UNSPECIFIED' | 'CALICO' | undefined
}
type GPUDriverInstallationConfig = {
  gpuDriverVersion?:
    | 'GPU_DRIVER_VERSION_UNSPECIFIED'
    | 'INSTALLATION_DISABLED'
    | 'DEFAULT'
    | 'LATEST'
    | undefined
}
type GPUSharingConfig = {
  gpuSharingStrategy?: 'GPU_SHARING_STRATEGY_UNSPECIFIED' | 'TIME_SHARING' | undefined
  maxSharedClientsPerGpu?: string | undefined
}
type AcceleratorConfig = {
  acceleratorCount?: string | undefined
  acceleratorType?: string | undefined
  gpuDriverInstallationConfig?: GPUDriverInstallationConfig | undefined
  gpuPartitionSize?: string | undefined
  gpuSharingConfig?: GPUSharingConfig | undefined
  maxTimeSharedClientsPerGpu?: string | undefined
}
type AdvancedMachineFeatures = { threadsPerCore?: string | undefined }
type EphemeralStorageConfig = { localSsdCount?: number | undefined }
type EphemeralStorageLocalSsdConfig = { localSsdCount?: number | undefined }
type FastSocket = { enabled?: boolean | undefined }
type GcfsConfig = { enabled?: boolean | undefined }
type VirtualNIC = { enabled?: boolean | undefined }
type OpportunisticMaintenanceStrategy = {
  maintenanceAvailabilityWindow?: string | undefined
  minNodesPerPool?: string | undefined
  nodeIdleTimeWindow?: string | undefined
}
type HostMaintenancePolicy = {
  maintenanceInterval?: 'MAINTENANCE_INTERVAL_UNSPECIFIED' | 'AS_NEEDED' | 'PERIODIC' | undefined
  opportunisticMaintenanceStrategy?: OpportunisticMaintenanceStrategy | undefined
}
type NodeKubeletConfig = {
  cpuCfsQuota?: boolean | undefined
  cpuCfsQuotaPeriod?: string | undefined
  cpuManagerPolicy?: string | undefined
  insecureKubeletReadonlyPortEnabled?: boolean | undefined
  podPidsLimit?: string | undefined
}
type LinuxNodeConfig = {
  cgroupMode?: 'CGROUP_MODE_UNSPECIFIED' | 'CGROUP_MODE_V1' | 'CGROUP_MODE_V2' | undefined
  sysctls?: { [x: string]: string } | undefined
}
type LocalNvmeSsdBlockConfig = { localSsdCount?: number | undefined }
type LoggingVariantConfig = {
  variant?: 'VARIANT_UNSPECIFIED' | 'DEFAULT' | 'MAX_THROUGHPUT' | undefined
}
type NodePoolLoggingConfig = { variantConfig?: LoggingVariantConfig | undefined }
type ReservationAffinity = {
  consumeReservationType?:
    | 'UNSPECIFIED'
    | 'NO_RESERVATION'
    | 'ANY_RESERVATION'
    | 'SPECIFIC_RESERVATION'
    | undefined
  key?: string | undefined
  values?: string[] | undefined
}
type ResourceManagerTags = { tags?: { [x: string]: string } | undefined }
type SandboxConfig = {
  sandboxType?: string | undefined
  type?: 'UNSPECIFIED' | 'GVISOR' | undefined
}
type SecondaryBootDisk = {
  diskImage?: string | undefined
  mode?: 'MODE_UNSPECIFIED' | 'CONTAINER_IMAGE_CACHE' | undefined
}
type NodeAffinity = {
  key?: string | undefined
  operator?: 'OPERATOR_UNSPECIFIED' | 'IN' | 'NOT_IN' | undefined
  values?: string[] | undefined
}
type SoleTenantConfig = { nodeAffinities?: NodeAffinity[] | undefined }
type NodeTaint = {
  effect?: 'EFFECT_UNSPECIFIED' | 'NO_SCHEDULE' | 'PREFER_NO_SCHEDULE' | 'NO_EXECUTE' | undefined
  key?: string | undefined
  value?: string | undefined
}
type WindowsNodeConfig = {
  osVersion?: 'OS_VERSION_UNSPECIFIED' | 'OS_VERSION_LTSC2019' | 'OS_VERSION_LTSC2022' | undefined
}
type WorkloadMetadataConfig = {
  mode?: 'MODE_UNSPECIFIED' | 'GCE_METADATA' | 'GKE_METADATA' | undefined
  nodeMetadata?: 'UNSPECIFIED' | 'SECURE' | 'EXPOSE' | 'GKE_METADATA_SERVER' | undefined
}
type NodeConfig = {
  accelerators?: AcceleratorConfig[] | undefined
  advancedMachineFeatures?: AdvancedMachineFeatures | undefined
  bootDiskKmsKey?: string | undefined
  confidentialNodes?: ConfidentialNodes | undefined
  diskSizeGb?: number | undefined
  diskType?: string | undefined
  enableConfidentialStorage?: boolean | undefined
  ephemeralStorageConfig?: EphemeralStorageConfig | undefined
  ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig | undefined
  fastSocket?: FastSocket | undefined
  gcfsConfig?: GcfsConfig | undefined
  gvnic?: VirtualNIC | undefined
  hostMaintenancePolicy?: HostMaintenancePolicy | undefined
  imageType?: string | undefined
  kubeletConfig?: NodeKubeletConfig | undefined
  labels?: { [x: string]: string } | undefined
  linuxNodeConfig?: LinuxNodeConfig | undefined
  localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig | undefined
  localSsdCount?: number | undefined
  loggingConfig?: NodePoolLoggingConfig | undefined
  machineType?: string | undefined
  metadata?: { [x: string]: string } | undefined
  minCpuPlatform?: string | undefined
  nodeGroup?: string | undefined
  oauthScopes?: string[] | undefined
  preemptible?: boolean | undefined
  reservationAffinity?: ReservationAffinity | undefined
  resourceLabels?: { [x: string]: string } | undefined
  resourceManagerTags?: ResourceManagerTags | undefined
  sandboxConfig?: SandboxConfig | undefined
  secondaryBootDisks?: SecondaryBootDisk[] | undefined
  serviceAccount?: string | undefined
  shieldedInstanceConfig?: ShieldedInstanceConfig | undefined
  soleTenantConfig?: SoleTenantConfig | undefined
  spot?: boolean | undefined
  tags?: string[] | undefined
  taints?: NodeTaint[] | undefined
  windowsNodeConfig?: WindowsNodeConfig | undefined
  workloadMetadataConfig?: WorkloadMetadataConfig | undefined
}
type NetworkTags = { tags?: string[] | undefined }
type NodePoolAutoConfig = {
  networkTags?: NetworkTags | undefined
  resourceManagerTags?: ResourceManagerTags | undefined
}
type NodeConfigDefaults = {
  gcfsConfig?: GcfsConfig | undefined
  hostMaintenancePolicy?: HostMaintenancePolicy | undefined
  loggingConfig?: NodePoolLoggingConfig | undefined
}
type NodePoolDefaults = { nodeConfigDefaults?: NodeConfigDefaults | undefined }
type NodePoolAutoscaling = {
  autoprovisioned?: boolean | undefined
  enabled?: boolean | undefined
  locationPolicy?: 'LOCATION_POLICY_UNSPECIFIED' | 'BALANCED' | 'ANY' | undefined
  maxNodeCount?: number | undefined
  minNodeCount?: number | undefined
  totalMaxNodeCount?: number | undefined
  totalMinNodeCount?: number | undefined
}
type BestEffortProvisioning = {
  enabled?: boolean | undefined
  minProvisionNodes?: number | undefined
}
type AdditionalNodeNetworkConfig = { network?: string | undefined; subnetwork?: string | undefined }
type AdditionalPodNetworkConfig = {
  maxPodsPerNode?: MaxPodsConstraint | undefined
  secondaryPodRange?: string | undefined
  subnetwork?: string | undefined
}
type NetworkPerformanceConfig = {
  externalIpEgressBandwidthTier?: 'TIER_UNSPECIFIED' | 'TIER_1' | undefined
  totalEgressBandwidthTier?: 'TIER_UNSPECIFIED' | 'TIER_1' | undefined
}
type NodeNetworkConfig = {
  additionalNodeNetworkConfigs?: AdditionalNodeNetworkConfig[] | undefined
  additionalPodNetworkConfigs?: AdditionalPodNetworkConfig[] | undefined
  createPodRange?: boolean | undefined
  enablePrivateNodes?: boolean | undefined
  networkPerformanceConfig?: NetworkPerformanceConfig | undefined
  podCidrOverprovisionConfig?: PodCIDROverprovisionConfig | undefined
  podIpv4CidrBlock?: string | undefined
  podIpv4RangeUtilization?: number | undefined
  podRange?: string | undefined
}
type PlacementPolicy = {
  policyName?: string | undefined
  tpuTopology?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'COMPACT' | undefined
}
type QueuedProvisioning = { enabled?: boolean | undefined }
type BlueGreenInfo = {
  blueInstanceGroupUrls?: string[] | undefined
  bluePoolDeletionStartTime?: string | undefined
  greenInstanceGroupUrls?: string[] | undefined
  greenPoolVersion?: string | undefined
  phase?:
    | 'PHASE_UNSPECIFIED'
    | 'UPDATE_STARTED'
    | 'CREATING_GREEN_POOL'
    | 'CORDONING_BLUE_POOL'
    | 'WAITING_TO_DRAIN_BLUE_POOL'
    | 'DRAINING_BLUE_POOL'
    | 'NODE_POOL_SOAKING'
    | 'DELETING_BLUE_POOL'
    | 'ROLLBACK_STARTED'
    | undefined
}
type UpdateInfo = { blueGreenInfo?: BlueGreenInfo | undefined }
type NodePool = {
  autoscaling?: NodePoolAutoscaling | undefined
  bestEffortProvisioning?: BestEffortProvisioning | undefined
  conditions?: StatusCondition[] | undefined
  config?: NodeConfig | undefined
  etag?: string | undefined
  initialNodeCount?: number | undefined
  instanceGroupUrls?: string[] | undefined
  locations?: string[] | undefined
  management?: NodeManagement | undefined
  maxPodsConstraint?: MaxPodsConstraint | undefined
  name?: string | undefined
  networkConfig?: NodeNetworkConfig | undefined
  placementPolicy?: PlacementPolicy | undefined
  podIpv4CidrSize?: number | undefined
  queuedProvisioning?: QueuedProvisioning | undefined
  selfLink?: string | undefined
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'PROVISIONING'
    | 'RUNNING'
    | 'RUNNING_WITH_ERROR'
    | 'RECONCILING'
    | 'STOPPING'
    | 'ERROR'
    | undefined
  statusMessage?: string | undefined
  updateInfo?: UpdateInfo | undefined
  upgradeSettings?: UpgradeSettings | undefined
  version?: string | undefined
}
type Filter = {
  eventType?:
    | (
        | 'EVENT_TYPE_UNSPECIFIED'
        | 'UPGRADE_AVAILABLE_EVENT'
        | 'UPGRADE_EVENT'
        | 'SECURITY_BULLETIN_EVENT'
      )[]
    | undefined
}
type PubSub = {
  enabled?: boolean | undefined
  filter?: Filter | undefined
  topic?: string | undefined
}
type NotificationConfig = { pubsub?: PubSub | undefined }
type ParentProductConfig = {
  labels?: { [x: string]: string } | undefined
  productName?: string | undefined
}
type PodSecurityPolicyConfig = { enabled?: boolean | undefined }
type PrivateClusterMasterGlobalAccessConfig = { enabled?: boolean | undefined }
type PrivateClusterConfig = {
  enablePrivateEndpoint?: boolean | undefined
  enablePrivateNodes?: boolean | undefined
  masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig | undefined
  masterIpv4CidrBlock?: string | undefined
  peeringName?: string | undefined
  privateEndpoint?: string | undefined
  privateEndpointSubnetwork?: string | undefined
  publicEndpoint?: string | undefined
}
type WorkloadConfig = {
  auditMode?: 'MODE_UNSPECIFIED' | 'DISABLED' | 'BASIC' | 'BASELINE' | 'RESTRICTED' | undefined
}
type ProtectConfig = {
  workloadConfig?: WorkloadConfig | undefined
  workloadVulnerabilityMode?:
    | 'WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED'
    | 'DISABLED'
    | 'BASIC'
    | undefined
}
type ReleaseChannel = { channel?: 'UNSPECIFIED' | 'RAPID' | 'REGULAR' | 'STABLE' | undefined }
type BigQueryDestination = { datasetId?: string | undefined }
type ConsumptionMeteringConfig = { enabled?: boolean | undefined }
type ResourceUsageExportConfig = {
  bigqueryDestination?: BigQueryDestination | undefined
  consumptionMeteringConfig?: ConsumptionMeteringConfig | undefined
  enableNetworkEgressMetering?: boolean | undefined
}
type SecurityPostureConfig = {
  mode?: 'MODE_UNSPECIFIED' | 'DISABLED' | 'BASIC' | undefined
  vulnerabilityMode?:
    | 'VULNERABILITY_MODE_UNSPECIFIED'
    | 'VULNERABILITY_DISABLED'
    | 'VULNERABILITY_BASIC'
    | 'VULNERABILITY_ENTERPRISE'
    | undefined
}
type ShieldedNodes = { enabled?: boolean | undefined }
type TpuConfig = {
  enabled?: boolean | undefined
  ipv4CidrBlock?: string | undefined
  useServiceNetworking?: boolean | undefined
}
type VerticalPodAutoscaling = { enabled?: boolean | undefined }
type WorkloadALTSConfig = { enableAlts?: boolean | undefined }
type WorkloadCertificates = { enableCertificates?: boolean | undefined }
type WorkloadIdentityConfig = {
  identityNamespace?: string | undefined
  identityProvider?: string | undefined
  workloadPool?: string | undefined
}
type Cluster = {
  addonsConfig?: AddonsConfig | undefined
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig | undefined
  autopilot?: Autopilot | undefined
  autoscaling?: ClusterAutoscaling | undefined
  binaryAuthorization?: BinaryAuthorization | undefined
  clusterIpv4Cidr?: string | undefined
  clusterTelemetry?: ClusterTelemetry | undefined
  conditions?: StatusCondition[] | undefined
  confidentialNodes?: ConfidentialNodes | undefined
  costManagementConfig?: CostManagementConfig | undefined
  createTime?: string | undefined
  currentMasterVersion?: string | undefined
  currentNodeCount?: number | undefined
  currentNodeVersion?: string | undefined
  databaseEncryption?: DatabaseEncryption | undefined
  defaultMaxPodsConstraint?: MaxPodsConstraint | undefined
  description?: string | undefined
  enableK8sBetaApis?: K8sBetaAPIConfig | undefined
  enableKubernetesAlpha?: boolean | undefined
  enableTpu?: boolean | undefined
  endpoint?: string | undefined
  enterpriseConfig?: EnterpriseConfig | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  fleet?: Fleet | undefined
  id?: string | undefined
  identityServiceConfig?: IdentityServiceConfig | undefined
  initialClusterVersion?: string | undefined
  initialNodeCount?: number | undefined
  instanceGroupUrls?: string[] | undefined
  ipAllocationPolicy?: IPAllocationPolicy | undefined
  labelFingerprint?: string | undefined
  legacyAbac?: LegacyAbac | undefined
  location?: string | undefined
  locations?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  loggingService?: string | undefined
  maintenancePolicy?: MaintenancePolicy | undefined
  master?: Master | undefined
  masterAuth?: MasterAuth | undefined
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | undefined
  masterIpv4CidrBlock?: string | undefined
  meshCertificates?: MeshCertificates | undefined
  monitoringConfig?: MonitoringConfig | undefined
  monitoringService?: string | undefined
  name?: string | undefined
  network?: string | undefined
  networkConfig?: NetworkConfig | undefined
  networkPolicy?: NetworkPolicy | undefined
  nodeConfig?: NodeConfig | undefined
  nodeIpv4CidrSize?: number | undefined
  nodePoolAutoConfig?: NodePoolAutoConfig | undefined
  nodePoolDefaults?: NodePoolDefaults | undefined
  nodePools?: NodePool[] | undefined
  notificationConfig?: NotificationConfig | undefined
  parentProductConfig?: ParentProductConfig | undefined
  podSecurityPolicyConfig?: PodSecurityPolicyConfig | undefined
  privateCluster?: boolean | undefined
  privateClusterConfig?: PrivateClusterConfig | undefined
  protectConfig?: ProtectConfig | undefined
  releaseChannel?: ReleaseChannel | undefined
  resourceLabels?: { [x: string]: string } | undefined
  resourceUsageExportConfig?: ResourceUsageExportConfig | undefined
  securityPostureConfig?: SecurityPostureConfig | undefined
  selfLink?: string | undefined
  servicesIpv4Cidr?: string | undefined
  shieldedNodes?: ShieldedNodes | undefined
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'PROVISIONING'
    | 'RUNNING'
    | 'RECONCILING'
    | 'STOPPING'
    | 'ERROR'
    | 'DEGRADED'
    | undefined
  statusMessage?: string | undefined
  subnetwork?: string | undefined
  tpuConfig?: TpuConfig | undefined
  tpuIpv4CidrBlock?: string | undefined
  verticalPodAutoscaling?: VerticalPodAutoscaling | undefined
  workloadAltsConfig?: WorkloadALTSConfig | undefined
  workloadCertificates?: WorkloadCertificates | undefined
  workloadIdentityConfig?: WorkloadIdentityConfig | undefined
  zone?: string | undefined
}
type ListClustersResponse = {
  clusters?: Cluster[] | undefined
  missingZones?: string[] | undefined
}
type CreateClusterRequest = {
  cluster?: Cluster | undefined
  parent?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Metric = {
  doubleValue?: number | undefined
  intValue?: string | undefined
  name?: string | undefined
  stringValue?: string | undefined
}
type OperationProgress = {
  metrics?: Metric[] | undefined
  name?: string | undefined
  stages?: OperationProgress[] | undefined
  status?: 'STATUS_UNSPECIFIED' | 'PENDING' | 'RUNNING' | 'DONE' | 'ABORTING' | undefined
}
type Operation = {
  clusterConditions?: StatusCondition[] | undefined
  detail?: string | undefined
  endTime?: string | undefined
  error?: Status | undefined
  location?: string | undefined
  name?: string | undefined
  nodepoolConditions?: StatusCondition[] | undefined
  operationType?:
    | 'TYPE_UNSPECIFIED'
    | 'CREATE_CLUSTER'
    | 'DELETE_CLUSTER'
    | 'UPGRADE_MASTER'
    | 'UPGRADE_NODES'
    | 'REPAIR_CLUSTER'
    | 'UPDATE_CLUSTER'
    | 'CREATE_NODE_POOL'
    | 'DELETE_NODE_POOL'
    | 'SET_NODE_POOL_MANAGEMENT'
    | 'AUTO_REPAIR_NODES'
    | 'AUTO_UPGRADE_NODES'
    | 'SET_LABELS'
    | 'SET_MASTER_AUTH'
    | 'SET_NODE_POOL_SIZE'
    | 'SET_NETWORK_POLICY'
    | 'SET_MAINTENANCE_POLICY'
    | 'RESIZE_CLUSTER'
    | 'FLEET_FEATURE_UPGRADE'
    | undefined
  progress?: OperationProgress | undefined
  selfLink?: string | undefined
  startTime?: string | undefined
  status?: 'STATUS_UNSPECIFIED' | 'PENDING' | 'RUNNING' | 'DONE' | 'ABORTING' | undefined
  statusMessage?: string | undefined
  targetLink?: string | undefined
  zone?: string | undefined
}
type IntraNodeVisibilityConfig = { enabled?: boolean | undefined }
type ILBSubsettingConfig = { enabled?: boolean | undefined }
type ClusterUpdate = {
  additionalPodRangesConfig?: AdditionalPodRangesConfig | undefined
  desiredAddonsConfig?: AddonsConfig | undefined
  desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig | undefined
  desiredAutopilotWorkloadPolicyConfig?: WorkloadPolicyConfig | undefined
  desiredBinaryAuthorization?: BinaryAuthorization | undefined
  desiredClusterAutoscaling?: ClusterAutoscaling | undefined
  desiredClusterTelemetry?: ClusterTelemetry | undefined
  desiredCostManagementConfig?: CostManagementConfig | undefined
  desiredDatabaseEncryption?: DatabaseEncryption | undefined
  desiredDatapathProvider?:
    | 'DATAPATH_PROVIDER_UNSPECIFIED'
    | 'LEGACY_DATAPATH'
    | 'ADVANCED_DATAPATH'
    | undefined
  desiredDefaultSnatStatus?: DefaultSnatStatus | undefined
  desiredDnsConfig?: DNSConfig | undefined
  desiredEnableFqdnNetworkPolicy?: boolean | undefined
  desiredEnablePrivateEndpoint?: boolean | undefined
  desiredFleet?: Fleet | undefined
  desiredGatewayApiConfig?: GatewayAPIConfig | undefined
  desiredGcfsConfig?: GcfsConfig | undefined
  desiredHostMaintenancePolicy?: HostMaintenancePolicy | undefined
  desiredIdentityServiceConfig?: IdentityServiceConfig | undefined
  desiredImageType?: string | undefined
  desiredInTransitEncryptionConfig?:
    | 'IN_TRANSIT_ENCRYPTION_CONFIG_UNSPECIFIED'
    | 'IN_TRANSIT_ENCRYPTION_DISABLED'
    | 'IN_TRANSIT_ENCRYPTION_INTER_NODE_TRANSPARENT'
    | undefined
  desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig | undefined
  desiredK8sBetaApis?: K8sBetaAPIConfig | undefined
  desiredL4ilbSubsettingConfig?: ILBSubsettingConfig | undefined
  desiredLocations?: string[] | undefined
  desiredLoggingConfig?: LoggingConfig | undefined
  desiredLoggingService?: string | undefined
  desiredMaster?: Master | undefined
  desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | undefined
  desiredMasterVersion?: string | undefined
  desiredMeshCertificates?: MeshCertificates | undefined
  desiredMonitoringConfig?: MonitoringConfig | undefined
  desiredMonitoringService?: string | undefined
  desiredNetworkPerformanceConfig?: ClusterNetworkPerformanceConfig | undefined
  desiredNodePoolAutoConfigNetworkTags?: NetworkTags | undefined
  desiredNodePoolAutoConfigResourceManagerTags?: ResourceManagerTags | undefined
  desiredNodePoolAutoscaling?: NodePoolAutoscaling | undefined
  desiredNodePoolId?: string | undefined
  desiredNodePoolLoggingConfig?: NodePoolLoggingConfig | undefined
  desiredNodeVersion?: string | undefined
  desiredNotificationConfig?: NotificationConfig | undefined
  desiredParentProductConfig?: ParentProductConfig | undefined
  desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig | undefined
  desiredPrivateClusterConfig?: PrivateClusterConfig | undefined
  desiredPrivateIpv6GoogleAccess?:
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE'
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL'
    | undefined
  desiredProtectConfig?: ProtectConfig | undefined
  desiredReleaseChannel?: ReleaseChannel | undefined
  desiredResourceUsageExportConfig?: ResourceUsageExportConfig | undefined
  desiredSecurityPostureConfig?: SecurityPostureConfig | undefined
  desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig | undefined
  desiredShieldedNodes?: ShieldedNodes | undefined
  desiredStackType?: 'STACK_TYPE_UNSPECIFIED' | 'IPV4' | 'IPV4_IPV6' | undefined
  desiredTpuConfig?: TpuConfig | undefined
  desiredVerticalPodAutoscaling?: VerticalPodAutoscaling | undefined
  desiredWorkloadAltsConfig?: WorkloadALTSConfig | undefined
  desiredWorkloadCertificates?: WorkloadCertificates | undefined
  desiredWorkloadIdentityConfig?: WorkloadIdentityConfig | undefined
  enableK8sBetaApis?: K8sBetaAPIConfig | undefined
  etag?: string | undefined
  removedAdditionalPodRangesConfig?: AdditionalPodRangesConfig | undefined
}
type UpdateClusterRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  update?: ClusterUpdate | undefined
  zone?: string | undefined
}
type SetAddonsConfigRequest = {
  addonsConfig?: AddonsConfig | undefined
  clusterId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetLegacyAbacRequest = {
  clusterId?: string | undefined
  enabled?: boolean | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetLocationsRequest = {
  clusterId?: string | undefined
  locations?: string[] | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetLoggingServiceRequest = {
  clusterId?: string | undefined
  loggingService?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type UpdateMasterRequest = {
  clusterId?: string | undefined
  masterVersion?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetMonitoringServiceRequest = {
  clusterId?: string | undefined
  monitoringService?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type ListNodePoolsResponse = { nodePools?: NodePool[] | undefined }
type CreateNodePoolRequest = {
  clusterId?: string | undefined
  nodePool?: NodePool | undefined
  parent?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetNodePoolAutoscalingRequest = {
  autoscaling?: NodePoolAutoscaling | undefined
  clusterId?: string | undefined
  name?: string | undefined
  nodePoolId?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetNodePoolManagementRequest = {
  clusterId?: string | undefined
  management?: NodeManagement | undefined
  name?: string | undefined
  nodePoolId?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetNodePoolSizeRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  nodeCount?: number | undefined
  nodePoolId?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type NodeLabels = { labels?: { [x: string]: string } | undefined }
type ResourceLabels = { labels?: { [x: string]: string } | undefined }
type NodeTaints = { taints?: NodeTaint[] | undefined }
type UpdateNodePoolRequest = {
  clusterId?: string | undefined
  confidentialNodes?: ConfidentialNodes | undefined
  diskSizeGb?: string | undefined
  diskType?: string | undefined
  etag?: string | undefined
  fastSocket?: FastSocket | undefined
  gcfsConfig?: GcfsConfig | undefined
  gvnic?: VirtualNIC | undefined
  imageType?: string | undefined
  kubeletConfig?: NodeKubeletConfig | undefined
  labels?: NodeLabels | undefined
  linuxNodeConfig?: LinuxNodeConfig | undefined
  locations?: string[] | undefined
  loggingConfig?: NodePoolLoggingConfig | undefined
  machineType?: string | undefined
  name?: string | undefined
  nodeNetworkConfig?: NodeNetworkConfig | undefined
  nodePoolId?: string | undefined
  nodeVersion?: string | undefined
  projectId?: string | undefined
  queuedProvisioning?: QueuedProvisioning | undefined
  resourceLabels?: ResourceLabels | undefined
  resourceManagerTags?: ResourceManagerTags | undefined
  tags?: NetworkTags | undefined
  taints?: NodeTaints | undefined
  upgradeSettings?: UpgradeSettings | undefined
  windowsNodeConfig?: WindowsNodeConfig | undefined
  workloadMetadataConfig?: WorkloadMetadataConfig | undefined
  zone?: string | undefined
}
type RollbackNodePoolUpgradeRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  nodePoolId?: string | undefined
  projectId?: string | undefined
  respectPdb?: boolean | undefined
  zone?: string | undefined
}
type SetLabelsRequest = {
  clusterId?: string | undefined
  labelFingerprint?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  resourceLabels?: { [x: string]: string } | undefined
  zone?: string | undefined
}
type CompleteIPRotationRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetMaintenancePolicyRequest = {
  clusterId?: string | undefined
  maintenancePolicy?: MaintenancePolicy | undefined
  name?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type SetMasterAuthRequest = {
  action?: 'UNKNOWN' | 'SET_PASSWORD' | 'GENERATE_PASSWORD' | 'SET_USERNAME' | undefined
  clusterId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  update?: MasterAuth | undefined
  zone?: string | undefined
}
type SetNetworkPolicyRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  networkPolicy?: NetworkPolicy | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type StartIPRotationRequest = {
  clusterId?: string | undefined
  name?: string | undefined
  projectId?: string | undefined
  rotateCredentials?: boolean | undefined
  zone?: string | undefined
}
type ListOperationsResponse = {
  missingZones?: string[] | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = {
  name?: string | undefined
  operationId?: string | undefined
  projectId?: string | undefined
  zone?: string | undefined
}
type Empty = { [x: string]: unknown }
type AvailableVersion = { reason?: string | undefined; version?: string | undefined }
type ReleaseChannelConfig = {
  availableVersions?: AvailableVersion[] | undefined
  channel?: 'UNSPECIFIED' | 'RAPID' | 'REGULAR' | 'STABLE' | undefined
  defaultVersion?: string | undefined
  validVersions?: string[] | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type WindowsVersion = {
  imageType?: string | undefined
  osVersion?: string | undefined
  supportEndDate?: Date | undefined
}
type WindowsVersions = { windowsVersions?: WindowsVersion[] | undefined }
type ServerConfig = {
  channels?: ReleaseChannelConfig[] | undefined
  defaultClusterVersion?: string | undefined
  defaultImageType?: string | undefined
  validImageTypes?: string[] | undefined
  validMasterVersions?: string[] | undefined
  validNodeVersions?: string[] | undefined
  windowsVersionMaps?: { [x: string]: WindowsVersions } | undefined
}
type AutopilotCompatibilityIssue = {
  constraintType?: string | undefined
  description?: string | undefined
  documentationUrl?: string | undefined
  incompatibilityType?:
    | 'UNSPECIFIED'
    | 'INCOMPATIBILITY'
    | 'ADDITIONAL_CONFIG_REQUIRED'
    | 'PASSED_WITH_OPTIONAL_CONFIG'
    | undefined
  lastObservation?: string | undefined
  subjects?: string[] | undefined
}
type CheckAutopilotCompatibilityResponse = {
  issues?: AutopilotCompatibilityIssue[] | undefined
  summary?: string | undefined
}
type CompleteNodePoolUpgradeRequest = { [x: string]: unknown }
type HttpCacheControlResponseHeader = {
  age?: string | undefined
  directive?: string | undefined
  expires?: string | undefined
}
type GetOpenIDConfigResponse = {
  cacheHeader?: HttpCacheControlResponseHeader | undefined
  claims_supported?: string[] | undefined
  grant_types?: string[] | undefined
  id_token_signing_alg_values_supported?: string[] | undefined
  issuer?: string | undefined
  jwks_uri?: string | undefined
  response_types_supported?: string[] | undefined
  subject_types_supported?: string[] | undefined
}
type UsableSubnetworkSecondaryRange = {
  ipCidrRange?: string | undefined
  rangeName?: string | undefined
  status?:
    | 'UNKNOWN'
    | 'UNUSED'
    | 'IN_USE_SERVICE'
    | 'IN_USE_SHAREABLE_POD'
    | 'IN_USE_MANAGED_POD'
    | undefined
}
type UsableSubnetwork = {
  ipCidrRange?: string | undefined
  network?: string | undefined
  secondaryIpRanges?: UsableSubnetworkSecondaryRange[] | undefined
  statusMessage?: string | undefined
  subnetwork?: string | undefined
}
type ListUsableSubnetworksResponse = {
  nextPageToken?: string | undefined
  subnetworks?: UsableSubnetwork[] | undefined
}
type Jwk = {
  alg?: string | undefined
  crv?: string | undefined
  e?: string | undefined
  kid?: string | undefined
  kty?: string | undefined
  n?: string | undefined
  use?: string | undefined
  x?: string | undefined
  y?: string | undefined
}
type GetJSONWebKeysResponse = {
  cacheHeader?: HttpCacheControlResponseHeader | undefined
  keys?: Jwk[] | undefined
}
type Location = {
  name?: string | undefined
  recommended?: boolean | undefined
  type?: 'LOCATION_TYPE_UNSPECIFIED' | 'ZONE' | 'REGION' | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/projects/:projectId/zones/:zone/clusters': {
      $get: {
        input: { param: { projectId: string; zone: string } } & {
          query: {
            parent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListClustersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; zone: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId': {
      $delete: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Cluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/addons': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetAddonsConfigRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/legacyAbac': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLegacyAbacRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/locations': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLocationsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/logging': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLoggingServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/master': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateMasterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/monitoring': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMonitoringServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools': {
      $get: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            parent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNodePoolsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateNodePoolRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId': {
      $delete: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: NodePool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/autoscaling': {
      $post: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolAutoscalingRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setManagement': {
      $post: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolManagementRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setSize': {
      $post: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolSizeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/update': {
      $post: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateNodePoolRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId:rollback': {
      $post: {
        input: {
          param: { projectId: string; zone: string; clusterId: string; nodePoolId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RollbackNodePoolUpgradeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/resourceLabels': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLabelsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:completeIpRotation': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CompleteIPRotationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMaintenancePolicy': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMaintenancePolicyRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMasterAuth': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMasterAuthRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setNetworkPolicy': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNetworkPolicyRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:startIpRotation': {
      $post: {
        input: { param: { projectId: string; zone: string; clusterId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StartIPRotationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/operations': {
      $get: {
        input: { param: { projectId: string; zone: string } } & {
          query: {
            parent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId': {
      $get: {
        input: { param: { projectId: string; zone: string; operationId: string } } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId:cancel': {
      $post: {
        input: { param: { projectId: string; zone: string; operationId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/projects/:projectId/zones/:zone/serverconfig': {
      $get: {
        input: { param: { projectId: string; zone: string } } & {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ServerConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            clusterId?: string | undefined
            nodePoolId?: string | undefined
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            operationId?: string | undefined
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateNodePoolRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/serverConfig': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ServerConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:checkAutopilotCompatibility': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CheckAutopilotCompatibilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:completeIpRotation': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CompleteIPRotationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:completeUpgrade': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CompleteNodePoolUpgradeRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:rollback': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RollbackNodePoolUpgradeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setAddons': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetAddonsConfigRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setAutoscaling': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolAutoscalingRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setLegacyAbac': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLegacyAbacRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setLocations': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLocationsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setLogging': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLoggingServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setMaintenancePolicy': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMaintenancePolicyRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setManagement': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolManagementRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setMasterAuth': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMasterAuthRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setMonitoring': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetMonitoringServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setNetworkPolicy': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNetworkPolicyRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setResourceLabels': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLabelsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:setSize': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetNodePoolSizeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:startIpRotation': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StartIPRotationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:updateMaster': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateMasterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/.well-known/openid-configuration': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetOpenIDConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/aggregated/usableSubnetworks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListUsableSubnetworksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/clusters': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListClustersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/jwks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetJSONWebKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/locations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/nodePools': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            clusterId?: string | undefined
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNodePoolsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateNodePoolRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/operations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            projectId?: string | undefined
            zone?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
