type TelemetryData = {
  level?: (string | null) | undefined
  message?: (string | null) | undefined
  optionalValues?: ({ [x: string]: string | null } | null) | undefined
  time?: (string | null) | undefined
}
type ProblemDetails = {
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type AgentResponse = {
  assetUri?: (string | null) | undefined
  family?: (string | null) | undefined
  name?: (string | null) | undefined
}
type BillableOwnerType = '0 (User)' | '1 (Organization)'
type ClientUsageData = { activeMinutes?: number | undefined; lastActivity?: string | undefined }
type ClientUsageSession = {
  sessionId?: (string | null) | undefined
  usageData?: ({ [x: string]: ClientUsageData } | null) | undefined
}
type TunnelProperties = {
  clusterId?: (string | null) | undefined
  connectAccessToken?: (string | null) | undefined
  domain?: (string | null) | undefined
  managePortsAccessToken?: (string | null) | undefined
  serviceUri?: (string | null) | undefined
  tunnelId?: (string | null) | undefined
  tunnelName?: (string | null) | undefined
}
type ConnectionInfoBody = {
  connectionServiceUri?: (string | null) | undefined
  connectionSessionId?: (string | null) | undefined
  connectionSessionPath?: (string | null) | undefined
  hostPublicKeys?: (string[] | null) | undefined
  relayEndpoint?: (string | null) | undefined
  relaySasToken?: (string | null) | undefined
  sessionToken?: (string | null) | undefined
  tunnelProperties?: TunnelProperties | undefined
}
type ContainerInfoBody = {
  id?: (string | null) | undefined
  schemaVersion?: (string | null) | undefined
}
type AzureLocation =
  | '101 (EastAsia)'
  | '102 (SouthEastAsia)'
  | '201 (AustraliaCentral)'
  | '202 (AustraliaCentral2)'
  | '203 (AustraliaEast)'
  | '205 (AustraliaSouthEast)'
  | '301 (BrazilSouth)'
  | '401 (CanadaCentral)'
  | '402 (CanadaEast)'
  | '501 (NorthEurope)'
  | '502 (WestEurope)'
  | '601 (FranceCentral)'
  | '602 (FranceSouth)'
  | '701 (CentralIndia)'
  | '702 (SouthIndia)'
  | '703 (WestIndia)'
  | '801 (JapanEast)'
  | '802 (JapanWest)'
  | '901 (KoreaCentral)'
  | '902 (KoreaSouth)'
  | '1001 (SouthAfricaNorth)'
  | '1002 (SouthAfricaWest)'
  | '1201 (UaeCentral)'
  | '1202 (UaeNorth)'
  | '1401 (UkSouth)'
  | '1402 (UkWest)'
  | '1501 (CentralUs)'
  | '1502 (EastUs)'
  | '1503 (EastUs2)'
  | '1504 (NorthCentralUs)'
  | '1505 (SouthCentralUs)'
  | '1506 (WestCentralUs)'
  | '1507 (WestUs)'
  | '1508 (WestUs2)'
  | '1509 (WestUs3)'
  | '1601 (CentralUsEuap)'
  | '1602 (EastUs2Euap)'
  | '1701 (SwitzerlandNorth)'
  | '1702 (SwitzerlandWest)'
  | '1801 (GermanyNorth)'
  | '1802 (GermanyWestCentral)'
  | '1901 (NorwayWest)'
  | '1902 (NorwayEast)'
type FailoverDetails = {
  failoverEnabled?: boolean | undefined
  failoverRegion?: AzureLocation | undefined
}
type GitStatus = {
  ahead?: number | undefined
  behind?: number | undefined
  branch?: (string | null) | undefined
  commit?: (string | null) | undefined
  hasUncommittedChanges?: boolean | undefined
  hasUnpushedChanges?: boolean | undefined
  noGitRepo?: boolean | undefined
}
type ConsumerType =
  | '0 (None)'
  | '1 (System)'
  | '2 (Trusted)'
  | '4 (Neutral)'
  | '8 (Untrusted)'
  | '9 (Test)'
type PrivacyEnum = '0 (Private)' | '1 (Public)' | '2 (Org)'
type RuntimeConstraintsBody = {
  allowedPortPrivacySettings?: (PrivacyEnum[] | null) | undefined
  imageAllowList?: (string[] | null) | undefined
}
type GitConfigOptionsBody = {
  userEmail?: (string | null) | undefined
  userName?: (string | null) | undefined
}
type RepositoryInfoBody = {
  branchName?: (string | null) | undefined
  commitId?: (string | null) | undefined
  createType?: (string | null) | undefined
  diskUsage?: (string | null) | undefined
  name?: (string | null) | undefined
  owner?: (string | null) | undefined
  prebuildHash?: (string | null) | undefined
  repoId?: bigint | undefined
  url?: (string | null) | undefined
}
type SeedInfoBody = {
  cloneUrl?: (string | null) | undefined
  gitConfig?: GitConfigOptionsBody | undefined
  recurseClone?: boolean | undefined
  repository?: RepositoryInfoBody | undefined
  seedMoniker?: (string | null) | undefined
  seedType?: (string | null) | undefined
}
type SubscriptionData = {
  computeQuota?: number | undefined
  computeUsage?: number | undefined
  subscriptionId?: (string | null) | undefined
  subscriptionState?: (string | null) | undefined
}
type CloudEnvironmentResult = {
  accessToken?: (string | null) | undefined
  active?: string | undefined
  autoShutdownDelayMinutes?: number | undefined
  billableOwnerType?: BillableOwnerType | undefined
  clientUsage?: ClientUsageSession | undefined
  connection?: ConnectionInfoBody | undefined
  container?: ContainerInfoBody | undefined
  containerImage?: (string | null) | undefined
  createFromPrebuild?: boolean | undefined
  created?: string | undefined
  displayStorageUtilizationInKb?: boolean | undefined
  exportedBlobUrl?: (string | null) | undefined
  failoverDetails?: FailoverDetails | undefined
  features?: ({ [x: string]: string | null } | null) | undefined
  friendlyName?: (string | null) | undefined
  gitStatus?: GitStatus | undefined
  id?: (string | null) | undefined
  lastStateUpdateReason?: (string | null) | undefined
  lastUsed?: (string | null) | undefined
  location?: (string | null) | undefined
  organizationId?: (string | null) | undefined
  ownerId?: (string | null) | undefined
  planId?: (string | null) | undefined
  platform?: (string | null) | undefined
  portForwardingConnection?: ConnectionInfoBody | undefined
  prebuildType?: (string | null) | undefined
  recentFolders?: (string[] | null) | undefined
  resourceTier?: ConsumerType | undefined
  runtimeConstraints?: RuntimeConstraintsBody | undefined
  seed?: SeedInfoBody | undefined
  skuDisplayName?: (string | null) | undefined
  skuName?: (string | null) | undefined
  state?: (string | null) | undefined
  storageUtilizationInKb?: (bigint | null) | undefined
  subscriptionData?: SubscriptionData | undefined
  templateStatus?: (string | null) | undefined
  type?: (string | null) | undefined
  updated?: string | undefined
}
type BillableOwnerBody = {
  id?: (string | null) | undefined
  login?: (string | null) | undefined
  type?: BillableOwnerType | undefined
}
type ExperimentalFeaturesBody = {
  enableDynamicHttpsDetection?: boolean | undefined
  queueResourceAllocation?: boolean | undefined
  usePrebuildFastPathIfAvailable?: boolean | undefined
  usePrebuiltImages?: boolean | undefined
  useStorageV2?: boolean | undefined
}
type IdentityBody = {
  displayName?: (string | null) | undefined
  id?: (string | null) | undefined
  userName?: (string | null) | undefined
}
type NetmonCorrelationDataBody = {
  billableOwnerCreatedAt?: (string | null) | undefined
  billableOwnerDatabaseId?: (string | null) | undefined
  billableOwnerGlobalRelayId?: (string | null) | undefined
  billableOwnerPlan?: (string | null) | undefined
  ownerCreatedAt?: (string | null) | undefined
  ownerDatabaseId?: (string | null) | undefined
  ownerGlobalRelayId?: (string | null) | undefined
  ownerPlan?: (string | null) | undefined
  repositoryCreatedAt?: (string | null) | undefined
  repositoryDatabaseId?: (string | null) | undefined
  repositoryGlobalRelayId?: (string | null) | undefined
  repositoryPrivate?: boolean | undefined
}
type PersonalizationInfoBody = {
  dotfilesInstallCommand?: (string | null) | undefined
  dotfilesRepository?: (string | null) | undefined
  dotfilesTargetPath?: (string | null) | undefined
}
type SecretType = '1 (EnvironmentVariable)' | '2 (ContainerRegistry)'
type SecretDataBody = {
  name?: (string | null) | undefined
  type?: SecretType | undefined
  value?: (string | null) | undefined
}
type CreateCloudEnvironmentBody = {
  analyticsTrackingId?: (string | null) | undefined
  autoShutdownDelayMinutes?: number | undefined
  billableOwner?: BillableOwnerBody | undefined
  connection?: ConnectionInfoBody | undefined
  containerImage?: (string | null) | undefined
  createAsPrebuild?: boolean | undefined
  devContainerJson?: (string | null) | undefined
  devContainerPath?: (string | null) | undefined
  experimentalFeatures?: ExperimentalFeaturesBody | undefined
  features?: ({ [x: string]: string | null } | null) | undefined
  friendlyName: string
  gitHubApiUrl?: (string | null) | undefined
  gitHubAppUrl?: (string | null) | undefined
  gitHubPfsAuthEndpoint?: (string | null) | undefined
  githubEnvironmentEndpoint?: (string | null) | undefined
  hasDevcontainerJson?: boolean | undefined
  identity?: IdentityBody | undefined
  label?: (string | null) | undefined
  location?: (string | null) | undefined
  netmonCorrelationData?: NetmonCorrelationDataBody | undefined
  personalization?: PersonalizationInfoBody | undefined
  planId?: (string | null) | undefined
  platform?: (string | null) | undefined
  runtimeConstraints?: RuntimeConstraintsBody | undefined
  secrets?: (SecretDataBody[] | null) | undefined
  seed?: SeedInfoBody | undefined
  skuName?: (string | null) | undefined
  testAccount?: boolean | undefined
  type: string
  userTier?: (string | null) | undefined
  workingDirectory?: (string | null) | undefined
}
type MessageCodes =
  | '0 (Unknown)'
  | '1 (ExceededQuota)'
  | '2 (EnvironmentNameAlreadyExists)'
  | '3 (EnvironmentDoesNotExist)'
  | '4 (ShutdownStaticEnvironment)'
  | '5 (StartStaticEnvironment)'
  | '6 (EnvironmentNotAvailable)'
  | '7 (EnvironmentNotShutdown)'
  | '8 (UnableToAllocateResources)'
  | '9 (UnableToAllocateResourcesWhileStarting)'
  | '10 (RequestedAutoShutdownDelayMinutesIsInvalid)'
  | '11 (UnableToUpdateSku)'
  | '12 (RequestedSkuIsInvalid)'
  | '13 (HeartbeatUnhealthy)'
  | '14 (StartEnvironmentGenericError)'
  | '15 (RestoringFromArchive)'
  | '16 (FilePathIsInvalid)'
  | '17 (TooManyRecentFolders)'
  | '18 (SubscriptionIsBanned)'
  | '19 (EnvironmentArchived)'
  | '20 (SubscriptionStateIsNotRegistered)'
  | '21 (FeatureDisabled)'
  | '22 (SubscriptionCannotPerformAction)'
  | '23 (InvalidLocationChange)'
  | '24 (PlanDoesNotExist)'
  | '25 (UnableToResolveEnvironmentNameConflict)'
  | '26 (ExceededSecretsQuota)'
  | '27 (InvalidPlanTenant)'
  | '28 (ExportStaticEnvironment)'
  | '29 (ExportEnvironmentGenericError)'
  | '30 (ExceededOrgDevContainerMaxLength)'
  | '31 (ActionNotAllowedInThisState)'
  | '32 (ExportRunningEnvironmentError)'
  | '34 (EnvironmentCreationIsNotAllowed)'
  | '35 (GitHubProxyError)'
  | '36 (PrebuildTemplateDeletionIsNotAllowed)'
  | '37 (TierCapacityIsUnavailable)'
type UpdateCloudEnvironmentBody = {
  autoShutdownDelayMinutes?: (number | null) | undefined
  failoverDetails?: FailoverDetails | undefined
  friendlyName?: (string | null) | undefined
  planAccessToken?: (string | null) | undefined
  planId?: (string | null) | undefined
  skuName?: (string | null) | undefined
}
type EnvironmentRegistrationCallbackPayloadBody = {
  sessionId?: (string | null) | undefined
  sessionPath?: (string | null) | undefined
}
type EnvironmentRegistrationCallbackBody = {
  payload?: EnvironmentRegistrationCallbackPayloadBody | undefined
  type: string
}
type UnfilteredCloudEnvironmentResult = {
  accessToken?: (string | null) | undefined
  active?: string | undefined
  autoShutdownDelayMinutes?: number | undefined
  billableOwnerType?: BillableOwnerType | undefined
  clientUsage?: ClientUsageSession | undefined
  connection?: ConnectionInfoBody | undefined
  container?: ContainerInfoBody | undefined
  containerImage?: (string | null) | undefined
  createFromPrebuild?: boolean | undefined
  created?: string | undefined
  displayStorageUtilizationInKb?: boolean | undefined
  exportedBlobUrl?: (string | null) | undefined
  failoverDetails?: FailoverDetails | undefined
  features?: ({ [x: string]: string | null } | null) | undefined
  friendlyName?: (string | null) | undefined
  gitStatus?: GitStatus | undefined
  id?: (string | null) | undefined
  lastStateUpdateReason?: (string | null) | undefined
  lastUsed?: (string | null) | undefined
  location?: (string | null) | undefined
  organizationId?: (string | null) | undefined
  ownerId?: (string | null) | undefined
  planId?: (string | null) | undefined
  platform?: (string | null) | undefined
  portForwardingConnection?: ConnectionInfoBody | undefined
  prebuildType?: (string | null) | undefined
  recentFolders?: (string[] | null) | undefined
  resourceTier?: ConsumerType | undefined
  runtimeConstraints?: RuntimeConstraintsBody | undefined
  seed?: SeedInfoBody | undefined
  skuDisplayName?: (string | null) | undefined
  skuName?: (string | null) | undefined
  state?: (string | null) | undefined
  storageUtilizationInKb?: (bigint | null) | undefined
  subscriptionData?: SubscriptionData | undefined
  templateStatus?: (string | null) | undefined
  type?: (string | null) | undefined
  updated?: string | undefined
}
type CloudEnvironmentFolderBody = { recentFolderPaths?: (string[] | null) | undefined }
type NotificationDataBody = {
  details?: (string | null) | undefined
  displayMode?: (string | null) | undefined
  message?: (string | null) | undefined
  modal?: boolean | undefined
}
type TunnelType = '0 (Basis)' | '1 (Liveshare)'
type AddForwardedPortSettings = {
  privacy?: PrivacyEnum | undefined
  tunnelType?: TunnelType | undefined
}
type UpdateUserSecretsRequestBody = { secrets?: (SecretDataBody[] | null) | undefined }
type ReplayBillRequestBody = { endTime?: string | undefined; startTime?: string | undefined }
type VsoPlanInfo = {
  location?: AzureLocation | undefined
  name?: (string | null) | undefined
  providerNamespace?: (string | null) | undefined
  resourceGroup?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  subscription?: (string | null) | undefined
}
type CloudEnvironmentState =
  | '0 (None)'
  | '1 (Created)'
  | '2 (Queued)'
  | '3 (Provisioning)'
  | '4 (Available)'
  | '5 (Awaiting)'
  | '6 (Unavailable)'
  | '7 (Deleted)'
  | '8 (Moved)'
  | '9 (Shutdown)'
  | '10 (Archived)'
  | '11 (Starting)'
  | '12 (ShuttingDown)'
  | '13 (Failed)'
  | '14 (Exporting)'
  | '15 (Updating)'
  | '16 (Rebuilding)'
type ComputeUsageDetail = { sku?: (string | null) | undefined; usage?: number | undefined }
type StorageUsageDetail = {
  size?: number | undefined
  sizeInKB?: bigint | undefined
  sku?: (string | null) | undefined
  usage?: number | undefined
}
type ResourceUsageDetail = {
  compute?: (ComputeUsageDetail[] | null) | undefined
  storage?: (StorageUsageDetail[] | null) | undefined
}
type Sku = { name?: (string | null) | undefined; tier?: (string | null) | undefined }
type EnvironmentUsage = {
  endState?: CloudEnvironmentState | undefined
  id?: (string | null) | undefined
  resourceUsage?: ResourceUsageDetail | undefined
  sku?: Sku | undefined
}
type BillSummary = {
  billGenerationTime?: string | undefined
  environmentId?: (string | null) | undefined
  id?: (string | null) | undefined
  location?: AzureLocation | undefined
  partitionKey?: (string | null) | undefined
  periodEnd?: string | undefined
  periodStart?: string | undefined
  plan?: VsoPlanInfo | undefined
  usage?: ({ [x: string]: number } | null) | undefined
  usageDetail?: (EnvironmentUsage[] | null) | undefined
}
type EnvironmentBillingInfo = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  sku?: Sku | undefined
  userId?: (string | null) | undefined
}
type EnvironmentStateChange = {
  environment?: EnvironmentBillingInfo | undefined
  id?: (string | null) | undefined
  newValue?: CloudEnvironmentState | undefined
  oldValue?: CloudEnvironmentState | undefined
  partitionKey?: (string | null) | undefined
  time?: string | undefined
}
type CreateEnvironmentStateChangeBody = {
  newValue?: CloudEnvironmentState | undefined
  oldValue?: CloudEnvironmentState | undefined
  time?: (string | null) | undefined
}
type UpdateSystemConfigurationBody = {
  comment?: (string | null) | undefined
  key?: (string | null) | undefined
  value?: (string | null) | undefined
}
type SystemConfigurationResponse = {
  comment?: (string | null) | undefined
  key?: (string | null) | undefined
  value?: (string | null) | undefined
}
type VmLogsUploadInfo = {
  containerName?: (string | null) | undefined
  message?: (string | null) | undefined
  pathInContainer?: (string | null) | undefined
  storageUri?: (string | null) | undefined
  vmResourceId?: (string | null) | undefined
}
type ChangeResourceDeletionRequestBody = {
  comment?: (string | null) | undefined
  enabled?: boolean | undefined
  poolCode?: (string | null) | undefined
  poolType?: (string | null) | undefined
  region?: (string | null) | undefined
}
type PoolConfigRequestBody = {
  comment?: (string | null) | undefined
  maxTargetCount?: (string | null) | undefined
  minTargetCount?: (string | null) | undefined
  poolCode?: (string | null) | undefined
  poolType?: (string | null) | undefined
  region?: (string | null) | undefined
  targetCount?: (string | null) | undefined
}
type PrebuildMode =
  | '0 (None)'
  | '1 (Blob)'
  | '2 (CodespacePool)'
  | '3 (StoragePool)'
  | '4 (CodespaceAndStoragePool)'
type Pool = {
  poolType?: PrebuildMode | undefined
  skuName?: (string | null) | undefined
  targetCount?: bigint | undefined
}
type StorageType = '0 (V1)' | '1 (V2)'
type PoolSettingsBody = {
  branchName?: (string | null) | undefined
  devContainerPath?: (string | null) | undefined
  pools?: (Pool[] | null) | undefined
  repoId?: (string | null) | undefined
  storageType?: StorageType | undefined
}
type RefreshProfileTelemetryPropertiesRequest = {
  partner?: (string | null) | undefined
  tenantId?: (string | null) | undefined
  userIds?: (string | null) | undefined
}
type ProfileSpecifier = {
  oid?: (string | null) | undefined
  provider?: (string | null) | undefined
  tid?: (string | null) | undefined
}
type RefreshProfileTelemetryPropertiesResponse = {
  failed?: (ProfileSpecifier[] | null) | undefined
  succeeded?: (ProfileSpecifier[] | null) | undefined
}
type UnderInvestigationResponseBody = {
  investigationStarted?: (string | null) | undefined
  resourceId?: (string | null) | undefined
  underInvestigation?: boolean | undefined
  updated?: boolean | undefined
}
type ResourceSubtype =
  | '0 (Default)'
  | '2 (ShrunkBlob)'
  | '3 (FullBlob)'
  | '4 (UserParametersBlob)'
  | '5 (PrebuildHash)'
  | '6 (VnetInjected)'
type ResourceType =
  | '1 (ComputeVM)'
  | '2 (StorageFileShare)'
  | '3 (StorageArchive)'
  | '4 (KeyVault)'
  | '5 (OSDisk)'
  | '6 (NetworkInterface)'
  | '7 (InputQueue)'
  | '8 (Snapshot)'
  | '9 (PoolQueue)'
  | '10 (VirtualNetwork)'
  | '11 (NetworkSecurityGroup)'
  | '12 (LiveShareWorkspace)'
  | '13 (BasisTunnel)'
  | '14 (StorageBlockBlob)'
  | '15 (DataDisk)'
  | '16 (PortForwardingWorkspace)'
type PoolDefinitionInput = {
  dimensions: { [x: string]: string | null }
  isEnabled: boolean
  location: AzureLocation
  logicalSkus?: (string[] | null) | undefined
  subtype: ResourceSubtype
  targetCount: number
  type: ResourceType
}
type CollectedData = {
  environmentId?: (string | null) | undefined
  name?: (string | null) | undefined
  parentActivityId?: (string | null) | undefined
  timestamp?: string | undefined
}
type HeartBeatBody = {
  agentVersion?: (string | null) | undefined
  collectedDataList?: (CollectedData[] | null) | undefined
  environmentId?: (string | null) | undefined
  resourceId?: string | undefined
  timeStamp?: string | undefined
}
type LocationsResult = {
  available?: (AzureLocation[] | null) | undefined
  current?: AzureLocation | undefined
  hostnames?: ({ [x: string]: string | null } | null) | undefined
}
type AvailableSettingsResult = { sku?: (string[] | null) | undefined }
type SkuInfoResult = {
  availableSettings?: AvailableSettingsResult | undefined
  displayName?: (string | null) | undefined
  name?: (string | null) | undefined
  os?: (string | null) | undefined
}
type LocationInfoResult = { skus?: (SkuInfoResult[] | null) | undefined }
type PrebuildEnvironmentOptions = { correlationId?: (string | null) | undefined }
type CreateEnvironmentPoolResourceBody = {
  environmentOptions?: PrebuildEnvironmentOptions | undefined
  secrets?: (SecretDataBody[] | null) | undefined
}
type PrebuildTemplateInfoResult = {
  branchName?: (string | null) | undefined
  commitId?: (string | null) | undefined
  id?: (string | null) | undefined
  isPrebuild?: (boolean | null) | undefined
  lastUsedTime?: (string | null) | undefined
  logicalSkus?: (string[] | null) | undefined
  prebuildHash?: (string | null) | undefined
  repoId?: bigint | undefined
  templateStatus?: (string | null) | undefined
}
type PrebuildReadinessResult = {
  branchName?: (string | null) | undefined
  devContainerPath?: (string | null) | undefined
  location?: AzureLocation | undefined
  poolSkus?: (string[] | null) | undefined
  prebuildHash?: (string | null) | undefined
  repoId?: (string | null) | undefined
  supportedSkus?: (string[] | null) | undefined
  templateSkus?: (string[] | null) | undefined
}
type SecretFilterType = '1 (GitRepo)' | '2 (CodespaceName)'
type SecretFilterBody = { type?: SecretFilterType | undefined; value?: (string | null) | undefined }
type SecretScope = '1 (Plan)' | '2 (User)'
type ScopedSecretResultBody = {
  filters?: (SecretFilterBody[] | null) | undefined
  id?: string | undefined
  lastModified?: string | undefined
  notes?: (string | null) | undefined
  scope?: SecretScope | undefined
  secretName?: (string | null) | undefined
  type?: SecretType | undefined
}
type ScopedCreateSecretBody = {
  filters?: (SecretFilterBody[] | null) | undefined
  notes?: (string | null) | undefined
  scope?: SecretScope | undefined
  secretName?: (string | null) | undefined
  type?: SecretType | undefined
  value?: (string | null) | undefined
}
type ScopedUpdateSecretBody = {
  filters?: (SecretFilterBody[] | null) | undefined
  notes?: (string | null) | undefined
  scope?: SecretScope | undefined
  secretName?: (string | null) | undefined
  value?: (string | null) | undefined
}
type TenantInfoResult = { id?: string | undefined }
type DelegateIdentity = {
  displayName?: (string | null) | undefined
  id?: (string | null) | undefined
  username?: (string | null) | undefined
}
type IssueDelegatePlanAccessTokenBody = {
  environmentIds?: (string[] | null) | undefined
  expiration?: (string | null) | undefined
  identity?: DelegateIdentity | undefined
  portNumbers?: (number[] | null) | undefined
  scope?: (string | null) | undefined
}
type PlanResourceHeaders = {
  clientTenantId?: (string | null) | undefined
  homeTenantId?: (string | null) | undefined
  identityPrincipalId?: (string | null) | undefined
  identityUrl?: (string | null) | undefined
}
type PlanResourceIdentity = {
  principalId?: (string | null) | undefined
  tenantId?: (string | null) | undefined
  type?: (string | null) | undefined
}
type PlanResourceKeyVaultProperties = {
  keyName?: (string | null) | undefined
  keyVaultUri?: (string | null) | undefined
  keyVersion?: (string | null) | undefined
}
type PlanResourceEncryptionProperties = {
  keySource?: (string | null) | undefined
  keyVaultProperties?: PlanResourceKeyVaultProperties | undefined
}
type VnetProperties = { subnetId?: (string | null) | undefined }
type PlanResourceProperties = {
  defaultCodespaceSku?: (string | null) | undefined
  defaultEnvironmentSku?: (string | null) | undefined
  encryption?: PlanResourceEncryptionProperties | undefined
  userId?: (string | null) | undefined
  vnetProperties?: VnetProperties | undefined
}
type PlanResource = {
  id?: (string | null) | undefined
  identity?: PlanResourceIdentity | undefined
  location?: (string | null) | undefined
  name?: (string | null) | undefined
  properties?: PlanResourceProperties | undefined
  provisioningState?: (string | null) | undefined
  tags?: ({ [x: string]: string } | null) | undefined
  type?: (string | null) | undefined
}
type TunnelPortInfoResult = {
  portVisibility?: (string | null) | undefined
  tunnelToken?: (string | null) | undefined
}
type PoolStatusResponseBody = {
  allWithLatestVersion?: boolean | undefined
  isEnvironmentPool?: boolean | undefined
  location?: (string | null) | undefined
  poolCode?: (string | null) | undefined
  readyUnassignedCount?: number | undefined
  readyUnassignedLatestVersionCount?: number | undefined
  readyUnassignedNotLatestVersionAndIdleCount?: number | undefined
  readyUnassignedNotLatestVersionCount?: number | undefined
  resourceType?: (string | null) | undefined
  sku?: (string | null) | undefined
}
type SubscriptionAccountOwner = {
  email?: (string | null) | undefined
  puid?: (string | null) | undefined
}
type BillingProperties = {
  billingType?: (string | null) | undefined
  channelType?: (string | null) | undefined
  paymentType?: (string | null) | undefined
  tier?: (string | null) | undefined
  workloadType?: (string | null) | undefined
}
type SubscriptionAdditionalProperties = {
  billingProperties?: BillingProperties | undefined
  resourceProviderProperties?: (string | null) | undefined
}
type StringStringKeyValuePair = {
  key?: (string | null) | undefined
  value?: (string | null) | undefined
}
type RPSubscriptionProperties = {
  accountOwner?: SubscriptionAccountOwner | undefined
  additionalProperties?: SubscriptionAdditionalProperties | undefined
  locationPlacementId?: (string | null) | undefined
  managedByTenants?: (StringStringKeyValuePair[] | null) | undefined
  quotaId?: (string | null) | undefined
  registeredFeatures?: (StringStringKeyValuePair[] | null) | undefined
  tenantId?: string | undefined
}
type RPSubscriptionNotification = {
  properties?: RPSubscriptionProperties | undefined
  registrationDate?: string | undefined
  state?: (string | null) | undefined
}
type NetworkSettingsResourceProperties = { subnetId?: (string | null) | undefined }
type NetworkSettingsResource = {
  id?: (string | null) | undefined
  location?: (string | null) | undefined
  name?: (string | null) | undefined
  properties?: NetworkSettingsResourceProperties | undefined
  provisioningState?: (string | null) | undefined
  tags?: ({ [x: string]: string } | null) | undefined
  type?: (string | null) | undefined
}
type NetworkSettingsResourceList = { value?: (NetworkSettingsResource[] | null) | undefined }
type PlanResourceList = { value?: (PlanResource[] | null) | undefined }
type PlanResourceUpdateBody = {
  identity?: PlanResourceIdentity | undefined
  properties?: PlanResourceProperties | undefined
}
type DomainUserCredentials = {
  domain: string
  organizationalUnit?: (string | null) | undefined
  passwordSecretIdentifier: string
  userName: string
}
type HotPoolSettings = { size?: number | undefined }
type ProvisioningStatusResult = {
  completedSteps?: (number | null) | undefined
  currentStepDescription?: (string | null) | undefined
  isReady?: boolean | undefined
  operationStartedTimeUtc?: (string | null) | undefined
  totalSteps?: (number | null) | undefined
}
type VMDiskType = '0 (StandardHDD)' | '1 (StandardSSD)' | '2 (PremiumSSD)'
type VMSpecs = {
  diskType: VMDiskType
  imageResourceId: string
  size: string
  subnetResourceId: string
}
type PoolResult = {
  domainUserCredentials?: DomainUserCredentials | undefined
  hotPoolSettings?: HotPoolSettings | undefined
  poolGroupName: string
  provisioningStatus?: ProvisioningStatusResult | undefined
  tags?: ({ [x: string]: string } | null) | undefined
  userGroupName?: (string | null) | undefined
  vmSpecs: VMSpecs
}
type CreateOrUpdatePoolBody = {
  domainUserCredentials?: DomainUserCredentials | undefined
  hotPoolSettings?: HotPoolSettings | undefined
  poolGroupName: string
  tags?: ({ [x: string]: string } | null) | undefined
  userGroupName?: (string | null) | undefined
  vmSpecs: VMSpecs
}
type PoolGroupResult = {
  displayName?: (string | null) | undefined
  region?: AzureLocation | undefined
  tags?: ({ [x: string]: string } | null) | undefined
}
type UpdatePoolGroupBody = {
  displayName: string
  tags?: ({ [x: string]: string } | null) | undefined
}
type CreatePoolGroupBody = {
  displayName: string
  region: AzureLocation
  tags?: ({ [x: string]: string } | null) | undefined
}
type VMConnectionType = '0 (LiveShare)' | '1 (WVD)'
type VMConnectionInfo = {
  connectionType?: VMConnectionType | undefined
  liveShareWorkspaceId?: (string | null) | undefined
}
type VMStatus = '0 (Provisioning)' | '1 (Ready)' | '2 (Stopped)' | '3 (Deleted)'
type VMResult = {
  connection?: VMConnectionInfo | undefined
  provisioningStatus?: ProvisioningStatusResult | undefined
  status?: VMStatus | undefined
}
type UserIdentity = { userPrincipalName: string }
type ClaimVMBody = { user: UserIdentity }
type DeletePrebuildTemplatesBody = {
  branchName: string
  devContainerPath?: (string | null) | undefined
  prebuildConfigurationId?: bigint | undefined
  repoId: bigint
}
type ContainerInfo = {
  id?: (string | null) | undefined
  imageName?: (string | null) | undefined
  schemaVersion?: (string | null) | undefined
}
type PrebuildTemplateInfo = {
  container?: ContainerInfo | undefined
  prebuildConfigurationId?: (string | null) | undefined
  templateSizeInGB?: number | undefined
  totalTimeSavingsInSeconds?: (string | null) | undefined
  workFlowRunId?: (string | null) | undefined
}
type CreatePrebuildTemplateBody = {
  devContainerPath?: (string | null) | undefined
  experimentalFeatures?: ExperimentalFeaturesBody | undefined
  features?: ({ [x: string]: string | null } | null) | undefined
  friendlyName: string
  planId?: (string | null) | undefined
  seed?: SeedInfoBody | undefined
  storageType?: StorageType | undefined
  templateInfo?: PrebuildTemplateInfo | undefined
}
type CreateTemplateResult = {
  properties?: ({ [x: string]: string | null } | null) | undefined
  sasUrl?: (string | null) | undefined
  templateId?: (string | null) | undefined
}
type UpdatePrebuildTemplateVersionsBody = {
  branchName: string
  devContainerPath?: (string | null) | undefined
  maxPrebuildTemplateVersions: number
  repoId: bigint
}
type UpdatePrebuildTemplateBody = { isSuccess: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/AgentTelemetry': {
      $post:
        | { input: { json: TelemetryData[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/api/v1/AgentTelemetry/standalone': {
      $post:
        | { input: { json: TelemetryData[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: TelemetryData[] }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/api/v1/Agents/:family': {
      $get:
        | {
            input: { param: { family: string } }
            output: AgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { family: string } }
            output: AgentResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { family: string } }
            output: AgentResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { family: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { family: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { family: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                planId?: string | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 307
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 307
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 307
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { query: { access?: boolean | undefined } } & {
              json: CreateCloudEnvironmentBody
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId': {
      $delete:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: {
                connect?: boolean | undefined
                pfConnect?: boolean | undefined
                deleted?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $patch:
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: MessageCodes[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: MessageCodes[]
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: MessageCodes[]
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateCloudEnvironmentBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/_callback': {
      $post:
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              json: EnvironmentRegistrationCallbackBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/archive': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: UnfilteredCloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: UnfilteredCloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: UnfilteredCloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
      $post:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/export': {
      $post:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/folder': {
      $patch:
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: MessageCodes[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: MessageCodes[]
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: MessageCodes[]
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: CloudEnvironmentFolderBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/heartbeattoken': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/notify': {
      $post:
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: NotificationDataBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/ports/:port': {
      $delete:
        | {
            input: { param: { environmentId: string; port: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string; port: number } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
      $put:
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string; port: number } } & {
              json: AddForwardedPortSettings
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/restore': {
      $patch:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/secrets': {
      $put:
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 204
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 307
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 307
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 307
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateUserSecretsRequestBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/shutdown': {
      $post:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/start': {
      $post:
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { access?: boolean | undefined }
            }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/state': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Environments/:environmentId/updates': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Billing/resend': {
      $post:
        | {
            input: { json: ReplayBillRequestBody }
            output: BillSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReplayBillRequestBody }
            output: BillSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReplayBillRequestBody }
            output: BillSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReplayBillRequestBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ReplayBillRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: ReplayBillRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Billing/:environmentId': {
      $get:
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: BillSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: BillSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: BillSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Billing/:environmentId/state-changes': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: EnvironmentStateChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: EnvironmentStateChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: EnvironmentStateChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: EnvironmentStateChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: EnvironmentStateChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: EnvironmentStateChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: CreateEnvironmentStateChangeBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Configuration/:target': {
      $post:
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { target: string } } & { json: UpdateSystemConfigurationBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/GenevaActions/Configuration/:target/:key': {
      $delete:
        | {
            input: { param: { target: string; key: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { target: string; key: string } }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: string; key: string } }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string; key: string } }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { target: string; key: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Environments/:environmentId': {
      $delete:
        | {
            input: { param: { environmentId: string } } & {
              query: { deletionType?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { deletionType?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { deletionType?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { deletionType?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $get:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Environments/:environmentId/archive': {
      $put:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Environments/:environmentId/archived_storage_sas/:targetBlob': {
      $get:
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string; targetBlob: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Environments/:environmentId/shutdown': {
      $put:
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: CloudEnvironmentResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Environments/:environmentId/upload/running/vm/logs': {
      $post:
        | {
            input: { param: { environmentId: string } }
            output: VmLogsUploadInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: VmLogsUploadInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: VmLogsUploadInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Pools/change-resource-deletion-setting': {
      $post:
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ChangeResourceDeletionRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/GenevaActions/Pools/:poolCode/rotate-pool': {
      $post:
        | { input: { param: { poolCode: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { poolCode: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { poolCode: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { poolCode: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { poolCode: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/GenevaActions/Pools/:target': {
      $post:
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: SystemConfigurationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { target: string } } & { json: PoolConfigRequestBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings': {
      $post:
        | { input: { json: PoolSettingsBody }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: PoolSettingsBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PoolSettingsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolSettingsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Prebuilds/pools/delete': {
      $post:
        | { input: { json: PoolSettingsBody }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PoolSettingsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties': {
      $post:
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: RefreshProfileTelemetryPropertiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: RefreshProfileTelemetryPropertiesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: RefreshProfileTelemetryPropertiesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RefreshProfileTelemetryPropertiesRequest }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/GenevaActions/Resources/:resourceId/under-investigation': {
      $post:
        | {
            input: { param: { resourceId: string } }
            output: UnderInvestigationResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceId: string } }
            output: UnderInvestigationResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { resourceId: string } }
            output: UnderInvestigationResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { resourceId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { resourceId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/GenevaActions/VnetPoolDefinitions': {
      $delete:
        | { input: { json: PoolDefinitionInput }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | { input: { json: PoolDefinitionInput }; output: {}; outputFormat: string; status: 503 }
      $post:
        | { input: { json: PoolDefinitionInput }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: PoolDefinitionInput }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | { input: { json: PoolDefinitionInput }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/HeartBeat': {
      $post:
        | { input: { json: HeartBeatBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: HeartBeatBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: HeartBeatBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: HeartBeatBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/api/v1/Locations': {
      $get:
        | { input: {}; output: LocationsResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LocationsResult; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LocationsResult; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/Locations/:location': {
      $get:
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: LocationInfoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: LocationInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: LocationInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { location: string } } & { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Prebuilds/pools/:poolId/instances': {
      $post:
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
      $put:
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { poolId: string } } & { json: CreateEnvironmentPoolResourceBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Prebuilds/template/:environmentId': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: PrebuildTemplateInfoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: PrebuildTemplateInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: PrebuildTemplateInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Prebuilds/templates/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/skus': {
      $get:
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: PrebuildReadinessResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: PrebuildReadinessResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: PrebuildReadinessResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: { repoId: string; branchName: string; prebuildHash: string; location: string }
            } & { query: { storageType?: StorageType | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/Sas': {
      $get:
        | { input: {}; output: ScopedSecretResultBody[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ScopedSecretResultBody[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ScopedSecretResultBody[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'text'; status: 403 }
    }
  } & {
    '/api/v1/Secrets': {
      $get:
        | {
            input: { query: { planId?: string | undefined } }
            output: ScopedSecretResultBody[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ScopedSecretResultBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ScopedSecretResultBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { planId?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
      $post:
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ScopedSecretResultBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ScopedSecretResultBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ScopedSecretResultBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { planId?: string | undefined } } & { json: ScopedCreateSecretBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/api/v1/Secrets/:secretId': {
      $delete:
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { secretId: string } } & {
              query: { planId?: string | undefined; scope?: SecretScope | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
      $put:
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ScopedSecretResultBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ScopedSecretResultBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ScopedSecretResultBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { secretId: string } } & { query: { planId?: string | undefined } } & {
              json: ScopedUpdateSecretBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/api/v1/Tenant/:tenantId': {
      $delete:
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 503 }
      $get:
        | {
            input: { param: { tenantId: string } }
            output: TenantInfoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string } }
            output: TenantInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string } }
            output: TenantInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/Tokens/plans/:planName/deleteAllCodespaces': {
      $post: {
        input: { param: { planName: string } } & { query: { expiration?: string | undefined } } & {
          header: { 'x-subscription-id'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/plans/:planName/readAllCodespaces': {
      $post: {
        input: { param: { planName: string } } & { query: { expiration?: string | undefined } } & {
          header: { 'x-subscription-id'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/plans/:planName/writeCodespaces': {
      $post: {
        input: { param: { planName: string } } & { query: { expiration?: string | undefined } } & {
          header: { 'x-subscription-id'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/plans/:planName/writeDelegates': {
      $post: {
        input: { param: { planName: string } } & {
          header: { 'x-subscription-id'?: string | undefined }
        } & { json: IssueDelegatePlanAccessTokenBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName': {
      $put: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { header: { headers?: PlanResourceHeaders | undefined } } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllCodespaces': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/deleteAllEnvironments': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllCodespaces': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/readAllEnvironments': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeCodespaces': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeDelegates': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { json: IssueDelegatePlanAccessTokenBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tokens/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/:providerNamespace/plans/:resourceName/writeEnvironments': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            providerNamespace: string
            resourceName: string
          }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/Tunnel/:environmentId/portInfo': {
      $get:
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: TunnelPortInfoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: TunnelPortInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: TunnelPortInfoResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & {
              query: { portNumber?: number | undefined }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v1/UserSubscriptions': {
      $delete: {
        input: { query: { email?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { email?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/pools/default': {
      $get:
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: PoolStatusResponseBody[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: PoolStatusResponseBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: PoolStatusResponseBody[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { skuName?: string[] | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/SubscriptionLifeCycleNotification': {
      $put: {
        input: { param: { subscriptionId: string; resourceType: string } } & {
          json: RPSubscriptionNotification
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/GitHub.Network/:resourceType/resourceReadBegin': {
      $post: {
        input: { param: { subscriptionId: string; resourceType: string } } & {
          json: NetworkSettingsResourceList
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification': {
      $put: {
        input: { param: { subscriptionId: string } } & { json: RPSubscriptionNotification }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.Codespaces/plans/resourceReadBegin': {
      $post: {
        input: { param: { subscriptionId: string } } & { json: PlanResourceList }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification': {
      $put: {
        input: { param: { subscriptionId: string } } & { json: RPSubscriptionNotification }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/providers/Microsoft.VSOnline/plans/resourceReadBegin': {
      $post: {
        input: { param: { subscriptionId: string } } & { json: PlanResourceList }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/resourceReadBegin': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceType: string }
        } & { json: NetworkSettingsResourceList }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName': {
      $delete: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationCompleted': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceCreationValidate': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionCompleted': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceDeletionValidate': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchCompleted': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourcePatchValidate': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/GitHub.Network/:resourceType/:resourceName/resourceReadBegin': {
      $post: {
        input: {
          param: {
            subscriptionId: string
            resourceGroup: string
            resourceType: string
            resourceName: string
          }
        } & { json: NetworkSettingsResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/resourceReadBegin': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string } } & {
          json: PlanResourceList
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName': {
      $put: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { header: { headers?: PlanResourceHeaders | undefined } } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteAllEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readAllEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/readDelegates': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationCompleted': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceCreationValidate': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceDeletionValidate': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchCompleted': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { header: { headers?: PlanResourceHeaders | undefined } } & {
          json: PlanResourceUpdateBody
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourcePatchValidate': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResourceUpdateBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/resourceReadBegin': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeDelegates': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: IssueDelegatePlanAccessTokenBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/writeEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/resourceReadBegin': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string } } & {
          json: PlanResourceList
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName': {
      $put: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { header: { headers?: PlanResourceHeaders | undefined } } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteAllEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readAllEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/readDelegates': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationCompleted': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceCreationValidate': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceDeletionValidate': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchCompleted': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { header: { headers?: PlanResourceHeaders | undefined } } & {
          json: PlanResourceUpdateBody
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourcePatchValidate': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResourceUpdateBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/resourceReadBegin': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: PlanResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeCodespaces': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeDelegates': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { json: IssueDelegatePlanAccessTokenBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/resourceGroups/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/writeEnvironments': {
      $post: {
        input: {
          param: { subscriptionId: string; resourceGroup: string; resourceName: string }
        } & { query: { expiration?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.Codespaces/plans/:resourceName/deleteDelegates': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/subscriptions/:subscriptionId/:resourceGroup/providers/Microsoft.VSOnline/plans/:resourceName/deleteDelegates': {
      $post: {
        input: { param: { subscriptionId: string; resourceGroup: string; resourceName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/tenant/:tenantId/Pool/:poolName': {
      $delete:
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $get:
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: PoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $patch:
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: PoolResult
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string } } & {
              json: CreateOrUpdatePoolBody
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/tenant/:tenantId/PoolGroup/:poolGroupName': {
      $delete:
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $get:
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: PoolGroupResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: PoolGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: PoolGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $patch:
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: UpdatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolGroupName: string } } & {
              json: CreatePoolGroupBody
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/tenant/:tenantId/pool/:poolName/Vm': {
      $get:
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: VMResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: VMResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: VMResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName': {
      $delete:
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $get:
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: VMResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: VMResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: VMResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: VMResult
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } } & {
              json: ClaimVMBody
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/start': {
      $post:
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/tenant/:tenantId/pool/:poolName/Vm/:vmName/stop': {
      $post:
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tenantId: string; poolName: string; vmName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v2/prebuilds/delete': {
      $post:
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { json: DeletePrebuildTemplatesBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v2/prebuilds/repository/:repoId/branch/:branchName': {
      $delete:
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { repoId: bigint; branchName: string } }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v2/prebuilds/templates': {
      $post:
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: CreateTemplateResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: CreateTemplateResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: CreateTemplateResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/api/v2/prebuilds/templates/skus/repo/:repoId/branch/:branchName/hash/:prebuildHash/location/:location/devcontainerpath/:devContainerPath': {
      $get:
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: PrebuildReadinessResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: PrebuildReadinessResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: PrebuildReadinessResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              param: {
                repoId: string
                branchName: string
                prebuildHash: string
                location: string
                devContainerPath: string
              }
            } & {
              query: {
                storageType?: StorageType | undefined
                fastPathEnabled?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/api/v2/prebuilds/templates/updatemaxversions': {
      $post:
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { json: UpdatePrebuildTemplateVersionsBody }
            output: MessageCodes
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/api/v2/prebuilds/templates/:templateId/updatestatus': {
      $post:
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { templateId: string } } & { json: UpdatePrebuildTemplateBody }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/internal/Netmon/correlation': {
      $get:
        | {
            input: { query: { macAddress?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { macAddress?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { macAddress?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { macAddress?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { macAddress?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { macAddress?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/tunnelauth': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            cluster?: string | undefined
            name?: string | undefined
            port?: number | undefined
            pb?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            op?: string | undefined
            id?: string | undefined
            cluster?: string | undefined
            name?: string | undefined
            port?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/warmup': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  },
  '/'
>
export default routes
