import { createRoute, z } from '@hono/zod-openapi'

const PrivacyEnumSchema = z
  .union([z.literal('0 (Private)'), z.literal('1 (Public)'), z.literal('2 (Org)')])
  .openapi('PrivacyEnum')

const TunnelTypeSchema = z
  .union([z.literal('0 (Basis)'), z.literal('1 (Liveshare)')])
  .openapi('TunnelType')

const AddForwardedPortSettingsSchema = z
  .strictObject({
    privacy: PrivacyEnumSchema.exactOptional(),
    tunnelType: TunnelTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddForwardedPortSettings')

const AgentResponseSchema = z
  .strictObject({
    assetUri: z.string().nullable().exactOptional(),
    family: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentResponse')

const AvailableSettingsResultSchema = z
  .strictObject({ sku: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AvailableSettingsResult')

const AzureLocationSchema = z
  .union([
    z.literal('101 (EastAsia)'),
    z.literal('102 (SouthEastAsia)'),
    z.literal('201 (AustraliaCentral)'),
    z.literal('202 (AustraliaCentral2)'),
    z.literal('203 (AustraliaEast)'),
    z.literal('205 (AustraliaSouthEast)'),
    z.literal('301 (BrazilSouth)'),
    z.literal('401 (CanadaCentral)'),
    z.literal('402 (CanadaEast)'),
    z.literal('501 (NorthEurope)'),
    z.literal('502 (WestEurope)'),
    z.literal('601 (FranceCentral)'),
    z.literal('602 (FranceSouth)'),
    z.literal('701 (CentralIndia)'),
    z.literal('702 (SouthIndia)'),
    z.literal('703 (WestIndia)'),
    z.literal('801 (JapanEast)'),
    z.literal('802 (JapanWest)'),
    z.literal('901 (KoreaCentral)'),
    z.literal('902 (KoreaSouth)'),
    z.literal('1001 (SouthAfricaNorth)'),
    z.literal('1002 (SouthAfricaWest)'),
    z.literal('1201 (UaeCentral)'),
    z.literal('1202 (UaeNorth)'),
    z.literal('1401 (UkSouth)'),
    z.literal('1402 (UkWest)'),
    z.literal('1501 (CentralUs)'),
    z.literal('1502 (EastUs)'),
    z.literal('1503 (EastUs2)'),
    z.literal('1504 (NorthCentralUs)'),
    z.literal('1505 (SouthCentralUs)'),
    z.literal('1506 (WestCentralUs)'),
    z.literal('1507 (WestUs)'),
    z.literal('1508 (WestUs2)'),
    z.literal('1509 (WestUs3)'),
    z.literal('1601 (CentralUsEuap)'),
    z.literal('1602 (EastUs2Euap)'),
    z.literal('1701 (SwitzerlandNorth)'),
    z.literal('1702 (SwitzerlandWest)'),
    z.literal('1801 (GermanyNorth)'),
    z.literal('1802 (GermanyWestCentral)'),
    z.literal('1901 (NorwayWest)'),
    z.literal('1902 (NorwayEast)'),
  ])
  .openapi('AzureLocation')

const VsoPlanInfoSchema = z
  .strictObject({
    location: AzureLocationSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    providerNamespace: z.string().nullable().exactOptional(),
    resourceGroup: z.string().nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    subscription: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VsoPlanInfo')

const CloudEnvironmentStateSchema = z
  .union([
    z.literal('0 (None)'),
    z.literal('1 (Created)'),
    z.literal('2 (Queued)'),
    z.literal('3 (Provisioning)'),
    z.literal('4 (Available)'),
    z.literal('5 (Awaiting)'),
    z.literal('6 (Unavailable)'),
    z.literal('7 (Deleted)'),
    z.literal('8 (Moved)'),
    z.literal('9 (Shutdown)'),
    z.literal('10 (Archived)'),
    z.literal('11 (Starting)'),
    z.literal('12 (ShuttingDown)'),
    z.literal('13 (Failed)'),
    z.literal('14 (Exporting)'),
    z.literal('15 (Updating)'),
    z.literal('16 (Rebuilding)'),
  ])
  .openapi('CloudEnvironmentState')

const ComputeUsageDetailSchema = z
  .strictObject({ sku: z.string().nullable().exactOptional(), usage: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('ComputeUsageDetail')

const StorageUsageDetailSchema = z
  .strictObject({
    size: z.int32().exactOptional(),
    sizeInKB: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    sku: z.string().nullable().exactOptional(),
    usage: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StorageUsageDetail')

const ResourceUsageDetailSchema = z
  .strictObject({
    compute: z.array(ComputeUsageDetailSchema).nullable().exactOptional(),
    storage: z.array(StorageUsageDetailSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceUsageDetail')

const SkuSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    tier: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sku')

const EnvironmentUsageSchema = z
  .strictObject({
    endState: CloudEnvironmentStateSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    resourceUsage: ResourceUsageDetailSchema.exactOptional(),
    sku: SkuSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentUsage')

const BillSummarySchema = z
  .strictObject({
    billGenerationTime: z.iso.datetime({ offset: true }).exactOptional(),
    environmentId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    location: AzureLocationSchema.exactOptional(),
    partitionKey: z.string().nullable().exactOptional(),
    periodEnd: z.iso.datetime({ offset: true }).exactOptional(),
    periodStart: z.iso.datetime({ offset: true }).exactOptional(),
    plan: VsoPlanInfoSchema.exactOptional(),
    usage: z
      .record(z.string(), z.float64())
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true }),
    usageDetail: z.array(EnvironmentUsageSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillSummary')

const BillableOwnerTypeSchema = z
  .union([z.literal('0 (User)'), z.literal('1 (Organization)')])
  .openapi('BillableOwnerType')

const BillableOwnerBodySchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    login: z.string().nullable().exactOptional(),
    type: BillableOwnerTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillableOwnerBody')

const BillingPropertiesSchema = z
  .strictObject({
    billingType: z.string().nullable().exactOptional(),
    channelType: z.string().nullable().exactOptional(),
    paymentType: z.string().nullable().exactOptional(),
    tier: z.string().nullable().exactOptional(),
    workloadType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BillingProperties')

const ChangeResourceDeletionRequestBodySchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
    poolCode: z.string().nullable().exactOptional(),
    poolType: z.string().nullable().exactOptional(),
    region: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChangeResourceDeletionRequestBody')

const UserIdentitySchema = z
  .strictObject({ userPrincipalName: z.string() })
  .openapi({ required: ['userPrincipalName'] })
  .openapi('UserIdentity')

const ClaimVMBodySchema = z
  .strictObject({ user: UserIdentitySchema })
  .openapi({ required: ['user'] })
  .openapi('ClaimVMBody')

const ClientUsageDataSchema = z
  .strictObject({
    activeMinutes: z.int32().exactOptional(),
    lastActivity: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientUsageData')

const ClientUsageSessionSchema = z
  .strictObject({
    sessionId: z.string().nullable().exactOptional(),
    usageData: z.record(z.string(), ClientUsageDataSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientUsageSession')

const CloudEnvironmentFolderBodySchema = z
  .strictObject({ recentFolderPaths: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CloudEnvironmentFolderBody')

const TunnelPropertiesSchema = z
  .strictObject({
    clusterId: z.string().nullable().exactOptional(),
    connectAccessToken: z.string().nullable().exactOptional(),
    domain: z.string().nullable().exactOptional(),
    managePortsAccessToken: z.string().nullable().exactOptional(),
    serviceUri: z.string().nullable().exactOptional(),
    tunnelId: z.string().nullable().exactOptional(),
    tunnelName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TunnelProperties')

const ConnectionInfoBodySchema = z
  .strictObject({
    connectionServiceUri: z.string().nullable().exactOptional(),
    connectionSessionId: z.string().nullable().exactOptional(),
    connectionSessionPath: z.string().nullable().exactOptional(),
    hostPublicKeys: z.array(z.string()).nullable().exactOptional(),
    relayEndpoint: z.string().nullable().exactOptional(),
    relaySasToken: z.string().nullable().exactOptional(),
    sessionToken: z.string().nullable().exactOptional(),
    tunnelProperties: TunnelPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnectionInfoBody')

const ContainerInfoBodySchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    schemaVersion: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContainerInfoBody')

const FailoverDetailsSchema = z
  .strictObject({
    failoverEnabled: z.boolean().exactOptional(),
    failoverRegion: AzureLocationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FailoverDetails')

const GitStatusSchema = z
  .strictObject({
    ahead: z.int32().exactOptional(),
    behind: z.int32().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    commit: z.string().nullable().exactOptional(),
    hasUncommittedChanges: z.boolean().exactOptional(),
    hasUnpushedChanges: z.boolean().exactOptional(),
    noGitRepo: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GitStatus')

const ConsumerTypeSchema = z
  .union([
    z.literal('0 (None)'),
    z.literal('1 (System)'),
    z.literal('2 (Trusted)'),
    z.literal('4 (Neutral)'),
    z.literal('8 (Untrusted)'),
    z.literal('9 (Test)'),
  ])
  .openapi('ConsumerType')

const RuntimeConstraintsBodySchema = z
  .strictObject({
    allowedPortPrivacySettings: z.array(PrivacyEnumSchema).nullable().exactOptional(),
    imageAllowList: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuntimeConstraintsBody')

const GitConfigOptionsBodySchema = z
  .strictObject({
    userEmail: z.string().nullable().exactOptional(),
    userName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GitConfigOptionsBody')

const RepositoryInfoBodySchema = z
  .strictObject({
    branchName: z.string().nullable().exactOptional(),
    commitId: z.string().nullable().exactOptional(),
    createType: z.string().nullable().exactOptional(),
    diskUsage: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    owner: z.string().nullable().exactOptional(),
    prebuildHash: z.string().nullable().exactOptional(),
    repoId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RepositoryInfoBody')

const SeedInfoBodySchema = z
  .strictObject({
    cloneUrl: z.string().nullable().exactOptional(),
    gitConfig: GitConfigOptionsBodySchema.exactOptional(),
    recurseClone: z.boolean().exactOptional(),
    repository: RepositoryInfoBodySchema.exactOptional(),
    seedMoniker: z.string().nullable().exactOptional(),
    seedType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeedInfoBody')

const SubscriptionDataSchema = z
  .strictObject({
    computeQuota: z.int32().exactOptional(),
    computeUsage: z.int32().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
    subscriptionState: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionData')

const CloudEnvironmentResultSchema = z
  .strictObject({
    accessToken: z.string().nullable().exactOptional(),
    active: z.iso.datetime({ offset: true }).exactOptional(),
    autoShutdownDelayMinutes: z.int32().exactOptional(),
    billableOwnerType: BillableOwnerTypeSchema.exactOptional(),
    clientUsage: ClientUsageSessionSchema.exactOptional(),
    connection: ConnectionInfoBodySchema.exactOptional(),
    container: ContainerInfoBodySchema.exactOptional(),
    containerImage: z.string().nullable().exactOptional(),
    createFromPrebuild: z.boolean().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    displayStorageUtilizationInKb: z.boolean().exactOptional(),
    exportedBlobUrl: z.string().nullable().exactOptional(),
    failoverDetails: FailoverDetailsSchema.exactOptional(),
    features: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    friendlyName: z.string().nullable().exactOptional(),
    gitStatus: GitStatusSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastStateUpdateReason: z.string().nullable().exactOptional(),
    lastUsed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
    organizationId: z.string().nullable().exactOptional(),
    ownerId: z.string().nullable().exactOptional(),
    planId: z.string().nullable().exactOptional(),
    platform: z.string().nullable().exactOptional(),
    portForwardingConnection: ConnectionInfoBodySchema.exactOptional(),
    prebuildType: z.string().nullable().exactOptional(),
    recentFolders: z.array(z.string()).nullable().exactOptional(),
    resourceTier: ConsumerTypeSchema.exactOptional(),
    runtimeConstraints: RuntimeConstraintsBodySchema.exactOptional(),
    seed: SeedInfoBodySchema.exactOptional(),
    skuDisplayName: z.string().nullable().exactOptional(),
    skuName: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    storageUtilizationInKb: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    subscriptionData: SubscriptionDataSchema.exactOptional(),
    templateStatus: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CloudEnvironmentResult')

const CollectedDataSchema = z
  .strictObject({
    environmentId: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    parentActivityId: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectedData')

const ContainerInfoSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    imageName: z.string().nullable().exactOptional(),
    schemaVersion: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContainerInfo')

const ExperimentalFeaturesBodySchema = z
  .strictObject({
    enableDynamicHttpsDetection: z.boolean().exactOptional(),
    queueResourceAllocation: z.boolean().exactOptional(),
    usePrebuildFastPathIfAvailable: z.boolean().exactOptional(),
    usePrebuiltImages: z.boolean().exactOptional(),
    useStorageV2: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentalFeaturesBody')

const IdentityBodySchema = z
  .strictObject({
    displayName: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    userName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityBody')

const NetmonCorrelationDataBodySchema = z
  .strictObject({
    billableOwnerCreatedAt: z.string().nullable().exactOptional(),
    billableOwnerDatabaseId: z.string().nullable().exactOptional(),
    billableOwnerGlobalRelayId: z.string().nullable().exactOptional(),
    billableOwnerPlan: z.string().nullable().exactOptional(),
    ownerCreatedAt: z.string().nullable().exactOptional(),
    ownerDatabaseId: z.string().nullable().exactOptional(),
    ownerGlobalRelayId: z.string().nullable().exactOptional(),
    ownerPlan: z.string().nullable().exactOptional(),
    repositoryCreatedAt: z.string().nullable().exactOptional(),
    repositoryDatabaseId: z.string().nullable().exactOptional(),
    repositoryGlobalRelayId: z.string().nullable().exactOptional(),
    repositoryPrivate: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NetmonCorrelationDataBody')

const PersonalizationInfoBodySchema = z
  .strictObject({
    dotfilesInstallCommand: z.string().nullable().exactOptional(),
    dotfilesRepository: z.string().nullable().exactOptional(),
    dotfilesTargetPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonalizationInfoBody')

const SecretTypeSchema = z
  .union([z.literal('1 (EnvironmentVariable)'), z.literal('2 (ContainerRegistry)')])
  .openapi('SecretType')

const SecretDataBodySchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    type: SecretTypeSchema.exactOptional(),
    value: z.string().min(1).max(65536).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SecretDataBody')

const CreateCloudEnvironmentBodySchema = z
  .strictObject({
    analyticsTrackingId: z.string().nullable().exactOptional(),
    autoShutdownDelayMinutes: z.int32().exactOptional(),
    billableOwner: BillableOwnerBodySchema.exactOptional(),
    connection: ConnectionInfoBodySchema.exactOptional(),
    containerImage: z.string().nullable().exactOptional(),
    createAsPrebuild: z.boolean().exactOptional(),
    devContainerJson: z.string().nullable().exactOptional(),
    devContainerPath: z.string().nullable().exactOptional(),
    experimentalFeatures: ExperimentalFeaturesBodySchema.exactOptional(),
    features: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    friendlyName: z.string(),
    gitHubApiUrl: z.string().nullable().exactOptional(),
    gitHubAppUrl: z.string().nullable().exactOptional(),
    gitHubPfsAuthEndpoint: z.string().nullable().exactOptional(),
    githubEnvironmentEndpoint: z.string().nullable().exactOptional(),
    hasDevcontainerJson: z.boolean().exactOptional(),
    identity: IdentityBodySchema.exactOptional(),
    label: z.string().nullable().exactOptional(),
    location: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    netmonCorrelationData: NetmonCorrelationDataBodySchema.exactOptional(),
    personalization: PersonalizationInfoBodySchema.exactOptional(),
    planId: z.string().nullable().exactOptional(),
    platform: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    runtimeConstraints: RuntimeConstraintsBodySchema.exactOptional(),
    secrets: z.array(SecretDataBodySchema).nullable().exactOptional(),
    seed: SeedInfoBodySchema.exactOptional(),
    skuName: z.string().nullable().exactOptional(),
    testAccount: z.boolean().exactOptional(),
    type: z.string(),
    userTier: z.string().nullable().exactOptional(),
    workingDirectory: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['friendlyName', 'type'] })
  .openapi('CreateCloudEnvironmentBody')

const PrebuildEnvironmentOptionsSchema = z
  .strictObject({ correlationId: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PrebuildEnvironmentOptions')

const CreateEnvironmentPoolResourceBodySchema = z
  .strictObject({
    environmentOptions: PrebuildEnvironmentOptionsSchema.exactOptional(),
    secrets: z.array(SecretDataBodySchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEnvironmentPoolResourceBody')

const CreateEnvironmentStateChangeBodySchema = z
  .strictObject({
    newValue: CloudEnvironmentStateSchema.exactOptional(),
    oldValue: CloudEnvironmentStateSchema.exactOptional(),
    time: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEnvironmentStateChangeBody')

const DomainUserCredentialsSchema = z
  .strictObject({
    domain: z.string(),
    organizationalUnit: z.string().nullable().exactOptional(),
    passwordSecretIdentifier: z.string(),
    userName: z.string(),
  })
  .openapi({ required: ['domain', 'passwordSecretIdentifier', 'userName'] })
  .openapi('DomainUserCredentials')

const HotPoolSettingsSchema = z
  .strictObject({ size: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('HotPoolSettings')

const VMDiskTypeSchema = z
  .union([z.literal('0 (StandardHDD)'), z.literal('1 (StandardSSD)'), z.literal('2 (PremiumSSD)')])
  .openapi('VMDiskType')

const VMSpecsSchema = z
  .strictObject({
    diskType: VMDiskTypeSchema,
    imageResourceId: z.string(),
    size: z.string(),
    subnetResourceId: z.string(),
  })
  .openapi({ required: ['diskType', 'imageResourceId', 'size', 'subnetResourceId'] })
  .openapi('VMSpecs')

const CreateOrUpdatePoolBodySchema = z
  .strictObject({
    domainUserCredentials: DomainUserCredentialsSchema.exactOptional(),
    hotPoolSettings: HotPoolSettingsSchema.exactOptional(),
    poolGroupName: z.string(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
    userGroupName: z.string().nullable().exactOptional(),
    vmSpecs: VMSpecsSchema,
  })
  .openapi({ required: ['poolGroupName', 'vmSpecs'] })
  .openapi('CreateOrUpdatePoolBody')

const CreatePoolGroupBodySchema = z
  .strictObject({
    displayName: z.string(),
    region: AzureLocationSchema,
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
  })
  .openapi({ required: ['displayName', 'region'] })
  .openapi('CreatePoolGroupBody')

const StorageTypeSchema = z.union([z.literal('0 (V1)'), z.literal('1 (V2)')]).openapi('StorageType')

const PrebuildTemplateInfoSchema = z
  .strictObject({
    container: ContainerInfoSchema.exactOptional(),
    prebuildConfigurationId: z.string().nullable().exactOptional(),
    templateSizeInGB: z.float64().exactOptional(),
    totalTimeSavingsInSeconds: z.string().nullable().exactOptional(),
    workFlowRunId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrebuildTemplateInfo')

const CreatePrebuildTemplateBodySchema = z
  .strictObject({
    devContainerPath: z.string().nullable().exactOptional(),
    experimentalFeatures: ExperimentalFeaturesBodySchema.exactOptional(),
    features: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    friendlyName: z.string(),
    planId: z.string().nullable().exactOptional(),
    seed: SeedInfoBodySchema.exactOptional(),
    storageType: StorageTypeSchema.exactOptional(),
    templateInfo: PrebuildTemplateInfoSchema.exactOptional(),
  })
  .openapi({ required: ['friendlyName'] })
  .openapi('CreatePrebuildTemplateBody')

const CreateTemplateResultSchema = z
  .strictObject({
    properties: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    sasUrl: z.string().nullable().exactOptional(),
    templateId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTemplateResult')

const DelegateIdentitySchema = z
  .strictObject({
    displayName: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DelegateIdentity')

const DeletePrebuildTemplatesBodySchema = z
  .strictObject({
    branchName: z.string(),
    devContainerPath: z.string().nullable().exactOptional(),
    prebuildConfigurationId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    repoId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['branchName', 'repoId'] })
  .openapi('DeletePrebuildTemplatesBody')

const EnvironmentBillingInfoSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    sku: SkuSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentBillingInfo')

const EnvironmentRegistrationCallbackPayloadBodySchema = z
  .strictObject({
    sessionId: z.string().nullable().exactOptional(),
    sessionPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentRegistrationCallbackPayloadBody')

const EnvironmentRegistrationCallbackBodySchema = z
  .strictObject({
    payload: EnvironmentRegistrationCallbackPayloadBodySchema.exactOptional(),
    type: z.string(),
  })
  .openapi({ required: ['type'] })
  .openapi('EnvironmentRegistrationCallbackBody')

const EnvironmentStateChangeSchema = z
  .strictObject({
    environment: EnvironmentBillingInfoSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    newValue: CloudEnvironmentStateSchema.exactOptional(),
    oldValue: CloudEnvironmentStateSchema.exactOptional(),
    partitionKey: z.string().nullable().exactOptional(),
    time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentStateChange')

const HeartBeatBodySchema = z
  .strictObject({
    agentVersion: z.string().nullable().exactOptional(),
    collectedDataList: z.array(CollectedDataSchema).nullable().exactOptional(),
    environmentId: z.string().nullable().exactOptional(),
    resourceId: z.uuid().exactOptional(),
    timeStamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeartBeatBody')

const IssueDelegatePlanAccessTokenBodySchema = z
  .strictObject({
    environmentIds: z.array(z.string()).nullable().exactOptional(),
    expiration: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    identity: DelegateIdentitySchema.exactOptional(),
    portNumbers: z.array(z.int32()).nullable().exactOptional(),
    scope: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IssueDelegatePlanAccessTokenBody')

const SkuInfoResultSchema = z
  .strictObject({
    availableSettings: AvailableSettingsResultSchema.exactOptional(),
    displayName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    os: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SkuInfoResult')

const LocationInfoResultSchema = z
  .strictObject({ skus: z.array(SkuInfoResultSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocationInfoResult')

const LocationsResultSchema = z
  .strictObject({
    available: z.array(AzureLocationSchema).nullable().exactOptional(),
    current: AzureLocationSchema.exactOptional(),
    hostnames: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationsResult')

const MessageCodesSchema = z
  .union([
    z.literal('0 (Unknown)'),
    z.literal('1 (ExceededQuota)'),
    z.literal('2 (EnvironmentNameAlreadyExists)'),
    z.literal('3 (EnvironmentDoesNotExist)'),
    z.literal('4 (ShutdownStaticEnvironment)'),
    z.literal('5 (StartStaticEnvironment)'),
    z.literal('6 (EnvironmentNotAvailable)'),
    z.literal('7 (EnvironmentNotShutdown)'),
    z.literal('8 (UnableToAllocateResources)'),
    z.literal('9 (UnableToAllocateResourcesWhileStarting)'),
    z.literal('10 (RequestedAutoShutdownDelayMinutesIsInvalid)'),
    z.literal('11 (UnableToUpdateSku)'),
    z.literal('12 (RequestedSkuIsInvalid)'),
    z.literal('13 (HeartbeatUnhealthy)'),
    z.literal('14 (StartEnvironmentGenericError)'),
    z.literal('15 (RestoringFromArchive)'),
    z.literal('16 (FilePathIsInvalid)'),
    z.literal('17 (TooManyRecentFolders)'),
    z.literal('18 (SubscriptionIsBanned)'),
    z.literal('19 (EnvironmentArchived)'),
    z.literal('20 (SubscriptionStateIsNotRegistered)'),
    z.literal('21 (FeatureDisabled)'),
    z.literal('22 (SubscriptionCannotPerformAction)'),
    z.literal('23 (InvalidLocationChange)'),
    z.literal('24 (PlanDoesNotExist)'),
    z.literal('25 (UnableToResolveEnvironmentNameConflict)'),
    z.literal('26 (ExceededSecretsQuota)'),
    z.literal('27 (InvalidPlanTenant)'),
    z.literal('28 (ExportStaticEnvironment)'),
    z.literal('29 (ExportEnvironmentGenericError)'),
    z.literal('30 (ExceededOrgDevContainerMaxLength)'),
    z.literal('31 (ActionNotAllowedInThisState)'),
    z.literal('32 (ExportRunningEnvironmentError)'),
    z.literal('34 (EnvironmentCreationIsNotAllowed)'),
    z.literal('35 (GitHubProxyError)'),
    z.literal('36 (PrebuildTemplateDeletionIsNotAllowed)'),
    z.literal('37 (TierCapacityIsUnavailable)'),
  ])
  .openapi('MessageCodes')

const NetworkSettingsResourcePropertiesSchema = z
  .strictObject({ subnetId: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('NetworkSettingsResourceProperties')

const NetworkSettingsResourceSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    properties: NetworkSettingsResourcePropertiesSchema.exactOptional(),
    provisioningState: z.string().nullable().exactOptional(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NetworkSettingsResource')

const NetworkSettingsResourceListSchema = z
  .strictObject({ value: z.array(NetworkSettingsResourceSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('NetworkSettingsResourceList')

const NotificationDataBodySchema = z
  .strictObject({
    details: z.string().nullable().exactOptional(),
    displayMode: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    modal: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationDataBody')

const PlanResourceIdentitySchema = z
  .strictObject({
    principalId: z.uuid().nullable().exactOptional(),
    tenantId: z.uuid().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceIdentity')

const PlanResourceKeyVaultPropertiesSchema = z
  .strictObject({
    keyName: z.string().nullable().exactOptional(),
    keyVaultUri: z.string().nullable().exactOptional(),
    keyVersion: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceKeyVaultProperties')

const PlanResourceEncryptionPropertiesSchema = z
  .strictObject({
    keySource: z.string().nullable().exactOptional(),
    keyVaultProperties: PlanResourceKeyVaultPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceEncryptionProperties')

const VnetPropertiesSchema = z
  .strictObject({ subnetId: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('VnetProperties')

const PlanResourcePropertiesSchema = z
  .strictObject({
    defaultCodespaceSku: z.string().nullable().exactOptional(),
    defaultEnvironmentSku: z.string().nullable().exactOptional(),
    encryption: PlanResourceEncryptionPropertiesSchema.exactOptional(),
    userId: z.string().nullable().exactOptional(),
    vnetProperties: VnetPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceProperties')

const PlanResourceSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    identity: PlanResourceIdentitySchema.exactOptional(),
    location: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    properties: PlanResourcePropertiesSchema.exactOptional(),
    provisioningState: z.string().nullable().exactOptional(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResource')

const PlanResourceHeadersSchema = z
  .strictObject({
    clientTenantId: z.uuid().nullable().exactOptional(),
    homeTenantId: z.uuid().nullable().exactOptional(),
    identityPrincipalId: z.uuid().nullable().exactOptional(),
    identityUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceHeaders')

const PlanResourceListSchema = z
  .strictObject({ value: z.array(PlanResourceSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PlanResourceList')

const PlanResourceUpdateBodySchema = z
  .strictObject({
    identity: PlanResourceIdentitySchema.exactOptional(),
    properties: PlanResourcePropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlanResourceUpdateBody')

const PrebuildModeSchema = z
  .union([
    z.literal('0 (None)'),
    z.literal('1 (Blob)'),
    z.literal('2 (CodespacePool)'),
    z.literal('3 (StoragePool)'),
    z.literal('4 (CodespaceAndStoragePool)'),
  ])
  .openapi('PrebuildMode')

const PoolSchema = z
  .strictObject({
    poolType: PrebuildModeSchema.exactOptional(),
    skuName: z.string().nullable().exactOptional(),
    targetCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Pool')

const PoolConfigRequestBodySchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    maxTargetCount: z.string().nullable().exactOptional(),
    minTargetCount: z.string().nullable().exactOptional(),
    poolCode: z.string().nullable().exactOptional(),
    poolType: z.string().nullable().exactOptional(),
    region: z.string().nullable().exactOptional(),
    targetCount: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PoolConfigRequestBody')

const ResourceSubtypeSchema = z
  .union([
    z.literal('0 (Default)'),
    z.literal('2 (ShrunkBlob)'),
    z.literal('3 (FullBlob)'),
    z.literal('4 (UserParametersBlob)'),
    z.literal('5 (PrebuildHash)'),
    z.literal('6 (VnetInjected)'),
  ])
  .openapi('ResourceSubtype')

const ResourceTypeSchema = z
  .union([
    z.literal('1 (ComputeVM)'),
    z.literal('2 (StorageFileShare)'),
    z.literal('3 (StorageArchive)'),
    z.literal('4 (KeyVault)'),
    z.literal('5 (OSDisk)'),
    z.literal('6 (NetworkInterface)'),
    z.literal('7 (InputQueue)'),
    z.literal('8 (Snapshot)'),
    z.literal('9 (PoolQueue)'),
    z.literal('10 (VirtualNetwork)'),
    z.literal('11 (NetworkSecurityGroup)'),
    z.literal('12 (LiveShareWorkspace)'),
    z.literal('13 (BasisTunnel)'),
    z.literal('14 (StorageBlockBlob)'),
    z.literal('15 (DataDisk)'),
    z.literal('16 (PortForwardingWorkspace)'),
  ])
  .openapi('ResourceType')

const PoolDefinitionInputSchema = z
  .strictObject({
    dimensions: z.record(z.string(), z.string().nullable()),
    isEnabled: z.boolean(),
    location: AzureLocationSchema,
    logicalSkus: z.array(z.string()).nullable().exactOptional(),
    subtype: ResourceSubtypeSchema,
    targetCount: z.int32(),
    type: ResourceTypeSchema,
  })
  .openapi({ required: ['dimensions', 'isEnabled', 'location', 'subtype', 'targetCount', 'type'] })
  .openapi('PoolDefinitionInput')

const PoolGroupResultSchema = z
  .strictObject({
    displayName: z.string().nullable().exactOptional(),
    region: AzureLocationSchema.exactOptional(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PoolGroupResult')

const ProvisioningStatusResultSchema = z
  .strictObject({
    completedSteps: z.int32().nullable().exactOptional(),
    currentStepDescription: z.string().nullable().exactOptional(),
    isReady: z.boolean().exactOptional(),
    operationStartedTimeUtc: z.string().nullable().exactOptional(),
    totalSteps: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProvisioningStatusResult')

const PoolResultSchema = z
  .strictObject({
    domainUserCredentials: DomainUserCredentialsSchema.exactOptional(),
    hotPoolSettings: HotPoolSettingsSchema.exactOptional(),
    poolGroupName: z.string(),
    provisioningStatus: ProvisioningStatusResultSchema.exactOptional(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
    userGroupName: z.string().nullable().exactOptional(),
    vmSpecs: VMSpecsSchema,
  })
  .openapi({ required: ['poolGroupName', 'vmSpecs'] })
  .openapi('PoolResult')

const PoolSettingsBodySchema = z
  .strictObject({
    branchName: z.string().nullable().exactOptional(),
    devContainerPath: z.string().nullable().exactOptional(),
    pools: z.array(PoolSchema).nullable().exactOptional(),
    repoId: z.string().nullable().exactOptional(),
    storageType: StorageTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PoolSettingsBody')

const PoolStatusResponseBodySchema = z
  .strictObject({
    allWithLatestVersion: z.boolean().exactOptional(),
    isEnvironmentPool: z.boolean().exactOptional(),
    location: z.string().nullable().exactOptional(),
    poolCode: z.string().nullable().exactOptional(),
    readyUnassignedCount: z.int32().exactOptional(),
    readyUnassignedLatestVersionCount: z.int32().exactOptional(),
    readyUnassignedNotLatestVersionAndIdleCount: z.int32().exactOptional(),
    readyUnassignedNotLatestVersionCount: z.int32().exactOptional(),
    resourceType: z.string().nullable().exactOptional(),
    sku: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PoolStatusResponseBody')

const PrebuildReadinessResultSchema = z
  .strictObject({
    branchName: z.string().nullable().exactOptional(),
    devContainerPath: z.string().nullable().exactOptional(),
    location: AzureLocationSchema.exactOptional(),
    poolSkus: z.array(z.string()).nullable().exactOptional(),
    prebuildHash: z.string().nullable().exactOptional(),
    repoId: z.string().nullable().exactOptional(),
    supportedSkus: z.array(z.string()).nullable().exactOptional(),
    templateSkus: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrebuildReadinessResult')

const PrebuildTemplateInfoResultSchema = z
  .strictObject({
    branchName: z.string().nullable().exactOptional(),
    commitId: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    isPrebuild: z.boolean().nullable().exactOptional(),
    lastUsedTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    logicalSkus: z.array(z.string()).nullable().exactOptional(),
    prebuildHash: z.string().nullable().exactOptional(),
    repoId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    templateStatus: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrebuildTemplateInfoResult')

const ProblemDetailsSchema = z
  .object({
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .catchall(z.any())
  .openapi('ProblemDetails')

const ProfileSpecifierSchema = z
  .strictObject({
    oid: z.string().nullable().exactOptional(),
    provider: z.string().nullable().exactOptional(),
    tid: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileSpecifier')

const SubscriptionAccountOwnerSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    puid: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionAccountOwner')

const SubscriptionAdditionalPropertiesSchema = z
  .strictObject({
    billingProperties: BillingPropertiesSchema.exactOptional(),
    resourceProviderProperties: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionAdditionalProperties')

const StringStringKeyValuePairSchema = z
  .strictObject({
    key: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringStringKeyValuePair')

const RPSubscriptionPropertiesSchema = z
  .strictObject({
    accountOwner: SubscriptionAccountOwnerSchema.exactOptional(),
    additionalProperties: SubscriptionAdditionalPropertiesSchema.exactOptional(),
    locationPlacementId: z.string().nullable().exactOptional(),
    managedByTenants: z.array(StringStringKeyValuePairSchema).nullable().exactOptional(),
    quotaId: z.string().nullable().exactOptional(),
    registeredFeatures: z.array(StringStringKeyValuePairSchema).nullable().exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RPSubscriptionProperties')

const RPSubscriptionNotificationSchema = z
  .strictObject({
    properties: RPSubscriptionPropertiesSchema.exactOptional(),
    registrationDate: z.iso.datetime({ offset: true }).exactOptional(),
    state: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RPSubscriptionNotification')

const RefreshProfileTelemetryPropertiesRequestSchema = z
  .strictObject({
    partner: z.string().nullable().exactOptional(),
    tenantId: z.string().nullable().exactOptional(),
    userIds: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefreshProfileTelemetryPropertiesRequest')

const RefreshProfileTelemetryPropertiesResponseSchema = z
  .strictObject({
    failed: z.array(ProfileSpecifierSchema).nullable().exactOptional(),
    succeeded: z.array(ProfileSpecifierSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefreshProfileTelemetryPropertiesResponse')

const ReplayBillRequestBodySchema = z
  .strictObject({
    endTime: z.iso.datetime({ offset: true }).exactOptional(),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReplayBillRequestBody')

const SecretFilterTypeSchema = z
  .union([z.literal('1 (GitRepo)'), z.literal('2 (CodespaceName)')])
  .openapi('SecretFilterType')

const SecretFilterBodySchema = z
  .strictObject({
    type: SecretFilterTypeSchema.exactOptional(),
    value: z.string().min(1).max(200).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SecretFilterBody')

const SecretScopeSchema = z
  .union([z.literal('1 (Plan)'), z.literal('2 (User)')])
  .openapi('SecretScope')

const ScopedCreateSecretBodySchema = z
  .strictObject({
    filters: z.array(SecretFilterBodySchema).nullable().exactOptional(),
    notes: z.string().min(0).max(200).nullable().exactOptional(),
    scope: SecretScopeSchema.exactOptional(),
    secretName: z
      .string()
      .regex(/^(?!CLOUDENV.*$)[a-zA-Z_][a-zA-Z0-9_]{0,199}$/)
      .nullable()
      .exactOptional(),
    type: SecretTypeSchema.exactOptional(),
    value: z.string().min(1).max(65536).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopedCreateSecretBody')

const ScopedSecretResultBodySchema = z
  .strictObject({
    filters: z.array(SecretFilterBodySchema).nullable().exactOptional(),
    id: z.uuid().exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).exactOptional(),
    notes: z.string().nullable().exactOptional(),
    scope: SecretScopeSchema.exactOptional(),
    secretName: z.string().nullable().exactOptional(),
    type: SecretTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopedSecretResultBody')

const ScopedUpdateSecretBodySchema = z
  .strictObject({
    filters: z.array(SecretFilterBodySchema).nullable().exactOptional(),
    notes: z.string().min(0).max(200).nullable().exactOptional(),
    scope: SecretScopeSchema.exactOptional(),
    secretName: z
      .string()
      .regex(/^(?!CLOUDENV.*$)[a-zA-Z_][a-zA-Z0-9_]{0,199}$/)
      .nullable()
      .exactOptional(),
    value: z.string().min(1).max(65536).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopedUpdateSecretBody')

const SystemConfigurationResponseSchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemConfigurationResponse')

const TelemetryDataSchema = z
  .strictObject({
    level: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    optionalValues: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    time: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelemetryData')

const TenantInfoResultSchema = z
  .strictObject({ id: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('TenantInfoResult')

const TunnelPortInfoResultSchema = z
  .strictObject({
    portVisibility: z.string().nullable().exactOptional(),
    tunnelToken: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TunnelPortInfoResult')

const UnderInvestigationResponseBodySchema = z
  .strictObject({
    investigationStarted: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    resourceId: z.string().nullable().exactOptional(),
    underInvestigation: z.boolean().exactOptional(),
    updated: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnderInvestigationResponseBody')

const UnfilteredCloudEnvironmentResultSchema = z
  .strictObject({
    accessToken: z.string().nullable().exactOptional(),
    active: z.iso.datetime({ offset: true }).exactOptional(),
    autoShutdownDelayMinutes: z.int32().exactOptional(),
    billableOwnerType: BillableOwnerTypeSchema.exactOptional(),
    clientUsage: ClientUsageSessionSchema.exactOptional(),
    connection: ConnectionInfoBodySchema.exactOptional(),
    container: ContainerInfoBodySchema.exactOptional(),
    containerImage: z.string().nullable().exactOptional(),
    createFromPrebuild: z.boolean().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    displayStorageUtilizationInKb: z.boolean().exactOptional(),
    exportedBlobUrl: z.string().nullable().exactOptional(),
    failoverDetails: FailoverDetailsSchema.exactOptional(),
    features: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    friendlyName: z.string().nullable().exactOptional(),
    gitStatus: GitStatusSchema.exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastStateUpdateReason: z.string().nullable().exactOptional(),
    lastUsed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
    organizationId: z.string().nullable().exactOptional(),
    ownerId: z.string().nullable().exactOptional(),
    planId: z.string().nullable().exactOptional(),
    platform: z.string().nullable().exactOptional(),
    portForwardingConnection: ConnectionInfoBodySchema.exactOptional(),
    prebuildType: z.string().nullable().exactOptional(),
    recentFolders: z.array(z.string()).nullable().exactOptional(),
    resourceTier: ConsumerTypeSchema.exactOptional(),
    runtimeConstraints: RuntimeConstraintsBodySchema.exactOptional(),
    seed: SeedInfoBodySchema.exactOptional(),
    skuDisplayName: z.string().nullable().exactOptional(),
    skuName: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    storageUtilizationInKb: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    subscriptionData: SubscriptionDataSchema.exactOptional(),
    templateStatus: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnfilteredCloudEnvironmentResult')

const UpdateCloudEnvironmentBodySchema = z
  .strictObject({
    autoShutdownDelayMinutes: z.int32().nullable().exactOptional(),
    failoverDetails: FailoverDetailsSchema.exactOptional(),
    friendlyName: z.string().nullable().exactOptional(),
    planAccessToken: z.string().nullable().exactOptional(),
    planId: z.string().nullable().exactOptional(),
    skuName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCloudEnvironmentBody')

const UpdatePoolGroupBodySchema = z
  .strictObject({
    displayName: z.string(),
    tags: z.record(z.string(), z.string()).nullable().exactOptional(),
  })
  .openapi({ required: ['displayName'] })
  .openapi('UpdatePoolGroupBody')

const UpdatePrebuildTemplateBodySchema = z
  .strictObject({ isSuccess: z.boolean() })
  .openapi({ required: ['isSuccess'] })
  .openapi('UpdatePrebuildTemplateBody')

const UpdatePrebuildTemplateVersionsBodySchema = z
  .strictObject({
    branchName: z.string(),
    devContainerPath: z.string().nullable().exactOptional(),
    maxPrebuildTemplateVersions: z.int32(),
    repoId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['branchName', 'maxPrebuildTemplateVersions', 'repoId'] })
  .openapi('UpdatePrebuildTemplateVersionsBody')

const UpdateSystemConfigurationBodySchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSystemConfigurationBody')

const UpdateUserSecretsRequestBodySchema = z
  .strictObject({ secrets: z.array(SecretDataBodySchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateUserSecretsRequestBody')

const VMConnectionTypeSchema = z
  .union([z.literal('0 (LiveShare)'), z.literal('1 (WVD)')])
  .openapi('VMConnectionType')

const VMConnectionInfoSchema = z
  .strictObject({
    connectionType: VMConnectionTypeSchema.exactOptional(),
    liveShareWorkspaceId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VMConnectionInfo')

const VMStatusSchema = z
  .union([
    z.literal('0 (Provisioning)'),
    z.literal('1 (Ready)'),
    z.literal('2 (Stopped)'),
    z.literal('3 (Deleted)'),
  ])
  .openapi('VMStatus')

const VMResultSchema = z
  .strictObject({
    connection: VMConnectionInfoSchema.exactOptional(),
    provisioningStatus: ProvisioningStatusResultSchema.exactOptional(),
    status: VMStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VMResult')

const VmLogsUploadInfoSchema = z
  .strictObject({
    containerName: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    pathInContainer: z.string().nullable().exactOptional(),
    storageUri: z.string().nullable().exactOptional(),
    vmResourceId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VmLogsUploadInfo')

const BearerSecurityScheme = {
  bearerFormat: 'JWT',
  description: 'JWT auth token for the user. Example: eyJ2...',
  scheme: 'bearer',
  type: 'http',
}

export const postApiV1AgentTelemetryRoute = createRoute({
  method: 'post',
  path: '/api/v1/AgentTelemetry',
  tags: ['AgentTelemetry'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: z.array(TelemetryDataSchema) },
        'application/json': { schema: z.array(TelemetryDataSchema) },
        'application/json-patch+json': { schema: z.array(TelemetryDataSchema) },
        'text/json': { schema: z.array(TelemetryDataSchema) },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1AgentTelemetryStandaloneRoute = createRoute({
  method: 'post',
  path: '/api/v1/AgentTelemetry/standalone',
  tags: ['AgentTelemetry'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: z.array(TelemetryDataSchema) },
        'application/json': { schema: z.array(TelemetryDataSchema) },
        'application/json-patch+json': { schema: z.array(TelemetryDataSchema) },
        'text/json': { schema: z.array(TelemetryDataSchema) },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1AgentsFamilyRoute = createRoute({
  method: 'get',
  path: '/api/v1/Agents/{family}',
  tags: ['Agents'],
  request: {
    params: z.object({
      family: z
        .string()
        .openapi({
          param: { in: 'path', name: 'family', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AgentResponseSchema },
        'text/json': { schema: AgentResponseSchema },
        'text/plain': { schema: AgentResponseSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments',
  tags: ['Environments'],
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
      deleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'deleted',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(CloudEnvironmentResultSchema) },
        'text/json': { schema: z.array(CloudEnvironmentResultSchema) },
        'text/plain': { schema: z.array(CloudEnvironmentResultSchema) },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments',
  tags: ['Environments'],
  request: {
    query: z.object({
      access: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'access', schema: { type: 'boolean' }, required: false },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateCloudEnvironmentBodySchema },
        'application/json': { schema: CreateCloudEnvironmentBodySchema },
        'application/json-patch+json': { schema: CreateCloudEnvironmentBodySchema },
        'text/json': { schema: CreateCloudEnvironmentBodySchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    307: {
      description: 'Redirect',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments/{environmentId}',
  tags: ['Environments'],
  operationId: 'GetEnvironmentRoute',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      connect: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'connect', schema: { type: 'boolean' }, required: false },
        }),
      pfConnect: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pfConnect', schema: { type: 'boolean' }, required: false },
        }),
      deleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'deleted',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const deleteApiV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/Environments/{environmentId}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const patchApiV1EnvironmentsEnvironmentIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/Environments/{environmentId}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateCloudEnvironmentBodySchema },
        'application/json': { schema: UpdateCloudEnvironmentBodySchema },
        'application/json-patch+json': { schema: UpdateCloudEnvironmentBodySchema },
        'text/json': { schema: UpdateCloudEnvironmentBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: z.array(MessageCodesSchema) },
        'text/json': { schema: z.array(MessageCodesSchema) },
        'text/plain': { schema: z.array(MessageCodesSchema) },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdCallbackRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/_callback',
  tags: ['Environments'],
  operationId: 'UpdateEnvironmentRoute',
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: EnvironmentRegistrationCallbackBodySchema },
        'application/json': { schema: EnvironmentRegistrationCallbackBodySchema },
        'application/json-patch+json': { schema: EnvironmentRegistrationCallbackBodySchema },
        'text/json': { schema: EnvironmentRegistrationCallbackBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsEnvironmentIdArchiveRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments/{environmentId}/archive',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UnfilteredCloudEnvironmentResultSchema },
        'text/json': { schema: UnfilteredCloudEnvironmentResultSchema },
        'text/plain': { schema: UnfilteredCloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdArchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/archive',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdExportRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/export',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const patchApiV1EnvironmentsEnvironmentIdFolderRoute = createRoute({
  method: 'patch',
  path: '/api/v1/Environments/{environmentId}/folder',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CloudEnvironmentFolderBodySchema },
        'application/json': { schema: CloudEnvironmentFolderBodySchema },
        'application/json-patch+json': { schema: CloudEnvironmentFolderBodySchema },
        'text/json': { schema: CloudEnvironmentFolderBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: z.array(MessageCodesSchema) },
        'text/json': { schema: z.array(MessageCodesSchema) },
        'text/plain': { schema: z.array(MessageCodesSchema) },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments/{environmentId}/heartbeattoken',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdNotifyRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/notify',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: NotificationDataBodySchema },
        'application/json': { schema: NotificationDataBodySchema },
        'application/json-patch+json': { schema: NotificationDataBodySchema },
        'text/json': { schema: NotificationDataBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1EnvironmentsEnvironmentIdPortsPortRoute = createRoute({
  method: 'put',
  path: '/api/v1/Environments/{environmentId}/ports/{port}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(65535),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', maximum: 65535, minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: AddForwardedPortSettingsSchema },
        'application/json': { schema: AddForwardedPortSettingsSchema },
        'application/json-patch+json': { schema: AddForwardedPortSettingsSchema },
        'text/json': { schema: AddForwardedPortSettingsSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute = createRoute({
  method: 'delete',
  path: '/api/v1/Environments/{environmentId}/ports/{port}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(65535),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', maximum: 65535, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const patchApiV1EnvironmentsEnvironmentIdRestoreRoute = createRoute({
  method: 'patch',
  path: '/api/v1/Environments/{environmentId}/restore',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1EnvironmentsEnvironmentIdSecretsRoute = createRoute({
  method: 'put',
  path: '/api/v1/Environments/{environmentId}/secrets',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateUserSecretsRequestBodySchema },
        'application/json': { schema: UpdateUserSecretsRequestBodySchema },
        'application/json-patch+json': { schema: UpdateUserSecretsRequestBodySchema },
        'text/json': { schema: UpdateUserSecretsRequestBodySchema },
      },
    },
  },
  responses: {
    204: {
      description: 'No Content',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    307: {
      description: 'Redirect',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdShutdownRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/shutdown',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1EnvironmentsEnvironmentIdStartRoute = createRoute({
  method: 'post',
  path: '/api/v1/Environments/{environmentId}/start',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      access: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'access', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsEnvironmentIdStateRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments/{environmentId}/state',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1EnvironmentsEnvironmentIdUpdatesRoute = createRoute({
  method: 'get',
  path: '/api/v1/Environments/{environmentId}/updates',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsBillingResendRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Billing/resend',
  tags: ['Billing'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: ReplayBillRequestBodySchema },
        'application/json': { schema: ReplayBillRequestBodySchema },
        'application/json-patch+json': { schema: ReplayBillRequestBodySchema },
        'text/json': { schema: ReplayBillRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillSummarySchema },
        'text/json': { schema: BillSummarySchema },
        'text/plain': { schema: BillSummarySchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1GenevaActionsBillingEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/GenevaActions/Billing/{environmentId}',
  tags: ['Billing'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startTime', schema: { type: 'string' }, required: false },
        }),
      endTime: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endTime', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BillSummarySchema },
        'text/json': { schema: BillSummarySchema },
        'text/plain': { schema: BillSummarySchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute = createRoute({
  method: 'get',
  path: '/api/v1/GenevaActions/Billing/{environmentId}/state-changes',
  tags: ['Billing'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EnvironmentStateChangeSchema },
        'text/json': { schema: EnvironmentStateChangeSchema },
        'text/plain': { schema: EnvironmentStateChangeSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Billing/{environmentId}/state-changes',
  tags: ['Billing'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateEnvironmentStateChangeBodySchema },
        'application/json': { schema: CreateEnvironmentStateChangeBodySchema },
        'application/json-patch+json': { schema: CreateEnvironmentStateChangeBodySchema },
        'text/json': { schema: CreateEnvironmentStateChangeBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EnvironmentStateChangeSchema },
        'text/json': { schema: EnvironmentStateChangeSchema },
        'text/plain': { schema: EnvironmentStateChangeSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsConfigurationTargetRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Configuration/{target}',
  tags: ['Configuration'],
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateSystemConfigurationBodySchema },
        'application/json': { schema: UpdateSystemConfigurationBodySchema },
        'application/json-patch+json': { schema: UpdateSystemConfigurationBodySchema },
        'text/json': { schema: UpdateSystemConfigurationBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemConfigurationResponseSchema },
        'text/json': { schema: SystemConfigurationResponseSchema },
        'text/plain': { schema: SystemConfigurationResponseSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1GenevaActionsConfigurationTargetKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/GenevaActions/Configuration/{target}/{key}',
  tags: ['Configuration'],
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemConfigurationResponseSchema },
        'text/json': { schema: SystemConfigurationResponseSchema },
        'text/plain': { schema: SystemConfigurationResponseSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const deleteApiV1GenevaActionsConfigurationTargetKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/GenevaActions/Configuration/{target}/{key}',
  tags: ['Configuration'],
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/GenevaActions/Environments/{environmentId}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/GenevaActions/Environments/{environmentId}',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      deletionType: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deletionType', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute = createRoute({
  method: 'put',
  path: '/api/v1/GenevaActions/Environments/{environmentId}/archive',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/GenevaActions/Environments/{environmentId}/archived_storage_sas/{targetBlob}',
    tags: ['Environments'],
    request: {
      params: z.object({
        environmentId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'environmentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetBlob: z
          .string()
          .openapi({
            param: { in: 'path', name: 'targetBlob', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: z.string() },
          'text/json': { schema: z.string() },
          'text/plain': { schema: z.string() },
        },
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
    },
  })

export const putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute = createRoute({
  method: 'put',
  path: '/api/v1/GenevaActions/Environments/{environmentId}/shutdown',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CloudEnvironmentResultSchema },
        'text/json': { schema: CloudEnvironmentResultSchema },
        'text/plain': { schema: CloudEnvironmentResultSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Environments/{environmentId}/upload/running/vm/logs',
  tags: ['Environments'],
  request: {
    params: z.object({
      environmentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'environmentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: VmLogsUploadInfoSchema },
        'text/json': { schema: VmLogsUploadInfoSchema },
        'text/plain': { schema: VmLogsUploadInfoSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Pools/change-resource-deletion-setting',
  tags: ['Pools'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: ChangeResourceDeletionRequestBodySchema },
        'application/json': { schema: ChangeResourceDeletionRequestBodySchema },
        'application/json-patch+json': { schema: ChangeResourceDeletionRequestBodySchema },
        'text/json': { schema: ChangeResourceDeletionRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemConfigurationResponseSchema },
        'text/json': { schema: SystemConfigurationResponseSchema },
        'text/plain': { schema: SystemConfigurationResponseSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Pools/{poolCode}/rotate-pool',
  tags: ['Pools'],
  request: {
    params: z.object({
      poolCode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolCode', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: { description: 'Server Error' },
  },
})

export const postApiV1GenevaActionsPoolsTargetRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Pools/{target}',
  tags: ['Pools'],
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: PoolConfigRequestBodySchema },
        'application/json': { schema: PoolConfigRequestBodySchema },
        'application/json-patch+json': { schema: PoolConfigRequestBodySchema },
        'text/json': { schema: PoolConfigRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SystemConfigurationResponseSchema },
        'text/json': { schema: SystemConfigurationResponseSchema },
        'text/plain': { schema: SystemConfigurationResponseSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings',
  tags: ['Prebuilds'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: PoolSettingsBodySchema },
        'application/json': { schema: PoolSettingsBodySchema },
        'application/json-patch+json': { schema: PoolSettingsBodySchema },
        'text/json': { schema: PoolSettingsBodySchema },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsPrebuildsPoolsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Prebuilds/pools/delete',
  tags: ['Prebuilds'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: PoolSettingsBodySchema },
        'application/json': { schema: PoolSettingsBodySchema },
        'application/json-patch+json': { schema: PoolSettingsBodySchema },
        'text/json': { schema: PoolSettingsBodySchema },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties',
  tags: ['Privacy'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: RefreshProfileTelemetryPropertiesRequestSchema },
        'application/json': { schema: RefreshProfileTelemetryPropertiesRequestSchema },
        'application/json-patch+json': { schema: RefreshProfileTelemetryPropertiesRequestSchema },
        'text/json': { schema: RefreshProfileTelemetryPropertiesRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RefreshProfileTelemetryPropertiesResponseSchema },
        'text/json': { schema: RefreshProfileTelemetryPropertiesResponseSchema },
        'text/plain': { schema: RefreshProfileTelemetryPropertiesResponseSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/Resources/{resourceId}/under-investigation',
  tags: ['Resources'],
  request: {
    params: z.object({
      resourceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UnderInvestigationResponseBodySchema },
        'text/json': { schema: UnderInvestigationResponseBodySchema },
        'text/plain': { schema: UnderInvestigationResponseBodySchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1GenevaActionsVnetPoolDefinitionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/GenevaActions/VnetPoolDefinitions',
  tags: ['VnetPoolDefinitions'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: PoolDefinitionInputSchema },
        'application/json': { schema: PoolDefinitionInputSchema },
        'application/json-patch+json': { schema: PoolDefinitionInputSchema },
        'text/json': { schema: PoolDefinitionInputSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: { description: 'Server Error' },
  },
})

export const deleteApiV1GenevaActionsVnetPoolDefinitionsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/GenevaActions/VnetPoolDefinitions',
  tags: ['VnetPoolDefinitions'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: PoolDefinitionInputSchema },
        'application/json': { schema: PoolDefinitionInputSchema },
        'application/json-patch+json': { schema: PoolDefinitionInputSchema },
        'text/json': { schema: PoolDefinitionInputSchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: { description: 'Server Error' },
  },
})

export const postApiV1HeartBeatRoute = createRoute({
  method: 'post',
  path: '/api/v1/HeartBeat',
  tags: ['HeartBeat'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: HeartBeatBodySchema },
        'application/json': { schema: HeartBeatBodySchema },
        'application/json-patch+json': { schema: HeartBeatBodySchema },
        'text/json': { schema: HeartBeatBodySchema },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    422: {
      description: 'Client Error',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1LocationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Locations',
  tags: ['Locations'],
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LocationsResultSchema },
        'text/json': { schema: LocationsResultSchema },
        'text/plain': { schema: LocationsResultSchema },
      },
    },
  },
})

export const getApiV1LocationsLocationRoute = createRoute({
  method: 'get',
  path: '/api/v1/Locations/{location}',
  tags: ['Locations'],
  request: {
    params: z.object({
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LocationInfoResultSchema },
        'text/json': { schema: LocationInfoResultSchema },
        'text/plain': { schema: LocationInfoResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1PrebuildsPoolsPoolIdInstancesRoute = createRoute({
  method: 'put',
  path: '/api/v1/Prebuilds/pools/{poolId}/instances',
  tags: ['Prebuilds'],
  request: {
    params: z.object({
      poolId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'application/json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'application/json-patch+json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'text/json': { schema: CreateEnvironmentPoolResourceBodySchema },
      },
    },
  },
  responses: {
    201: { description: 'Created' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1PrebuildsPoolsPoolIdInstancesRoute = createRoute({
  method: 'post',
  path: '/api/v1/Prebuilds/pools/{poolId}/instances',
  tags: ['Prebuilds'],
  request: {
    params: z.object({
      poolId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'application/json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'application/json-patch+json': { schema: CreateEnvironmentPoolResourceBodySchema },
        'text/json': { schema: CreateEnvironmentPoolResourceBodySchema },
      },
    },
  },
  responses: {
    201: { description: 'Created' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1PrebuildsTemplateEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Prebuilds/template/{environmentId}',
  tags: ['Prebuilds'],
  operationId: 'GetTemplateInfoRoute',
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PrebuildTemplateInfoResultSchema },
        'text/json': { schema: PrebuildTemplateInfoResultSchema },
        'text/plain': { schema: PrebuildTemplateInfoResultSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/Prebuilds/templates/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/skus',
    tags: ['Prebuilds'],
    operationId: 'GetPrebuildReadinessRoute',
    request: {
      params: z.object({
        repoId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'repoId', required: true, schema: { type: 'string' } },
          }),
        branchName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'branchName', required: true, schema: { type: 'string' } },
          }),
        prebuildHash: z
          .string()
          .openapi({
            param: { in: 'path', name: 'prebuildHash', required: true, schema: { type: 'string' } },
          }),
        location: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        storageType: StorageTypeSchema.openapi({
          param: {
            in: 'query',
            name: 'storageType',
            schema: { $ref: '#/components/schemas/StorageType' },
            required: false,
          },
        }).exactOptional(),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: PrebuildReadinessResultSchema },
          'text/json': { schema: PrebuildReadinessResultSchema },
          'text/plain': { schema: PrebuildReadinessResultSchema },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': { schema: z.string() },
          'text/json': { schema: z.string() },
          'text/plain': { schema: z.string() },
        },
      },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
      403: {
        description: 'Forbidden',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
    },
  })

export const getApiV1SasRoute = createRoute({
  method: 'get',
  path: '/api/v1/Sas',
  tags: ['Sas'],
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScopedSecretResultBodySchema) },
        'text/json': { schema: z.array(ScopedSecretResultBodySchema) },
        'text/plain': { schema: z.array(ScopedSecretResultBodySchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1SecretsRoute = createRoute({
  method: 'get',
  path: '/api/v1/Secrets',
  tags: ['Secrets'],
  request: {
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ScopedSecretResultBodySchema) },
        'text/json': { schema: z.array(ScopedSecretResultBodySchema) },
        'text/plain': { schema: z.array(ScopedSecretResultBodySchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1SecretsRoute = createRoute({
  method: 'post',
  path: '/api/v1/Secrets',
  tags: ['Secrets'],
  request: {
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ScopedCreateSecretBodySchema },
        'application/json': { schema: ScopedCreateSecretBodySchema },
        'application/json-patch+json': { schema: ScopedCreateSecretBodySchema },
        'text/json': { schema: ScopedCreateSecretBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScopedSecretResultBodySchema },
        'text/json': { schema: ScopedSecretResultBodySchema },
        'text/plain': { schema: ScopedSecretResultBodySchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1SecretsSecretIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/Secrets/{secretId}',
  tags: ['Secrets'],
  request: {
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      secretId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'secretId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ScopedUpdateSecretBodySchema },
        'application/json': { schema: ScopedUpdateSecretBodySchema },
        'application/json-patch+json': { schema: ScopedUpdateSecretBodySchema },
        'text/json': { schema: ScopedUpdateSecretBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ScopedSecretResultBodySchema },
        'text/json': { schema: ScopedSecretResultBodySchema },
        'text/plain': { schema: ScopedSecretResultBodySchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const deleteApiV1SecretsSecretIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/Secrets/{secretId}',
  tags: ['Secrets'],
  request: {
    query: z.object({
      planId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'planId', schema: { type: 'string' }, required: false },
        }),
      scope: SecretScopeSchema.openapi({
        param: {
          in: 'query',
          name: 'scope',
          schema: { $ref: '#/components/schemas/SecretScope' },
          required: false,
        },
      }).exactOptional(),
    }),
    params: z.object({
      secretId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'secretId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV1TenantTenantIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/Tenant/{tenantId}',
  tags: ['Tenant'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TenantInfoResultSchema },
        'text/json': { schema: TenantInfoResultSchema },
        'text/plain': { schema: TenantInfoResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const putApiV1TenantTenantIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/Tenant/{tenantId}',
  tags: ['Tenant'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const deleteApiV1TenantTenantIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/Tenant/{tenantId}',
  tags: ['Tenant'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute = createRoute({
  method: 'post',
  path: '/api/v1/Tokens/plans/{planName}/deleteAllCodespaces',
  tags: ['Tokens'],
  request: {
    params: z.object({
      planName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planName', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-subscription-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-subscription-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      expiration: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expiration',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiV1TokensPlansPlanNameReadAllCodespacesRoute = createRoute({
  method: 'post',
  path: '/api/v1/Tokens/plans/{planName}/readAllCodespaces',
  tags: ['Tokens'],
  request: {
    params: z.object({
      planName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planName', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-subscription-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-subscription-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      expiration: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expiration',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiV1TokensPlansPlanNameWriteCodespacesRoute = createRoute({
  method: 'post',
  path: '/api/v1/Tokens/plans/{planName}/writeCodespaces',
  tags: ['Tokens'],
  request: {
    params: z.object({
      planName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planName', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-subscription-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-subscription-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      expiration: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expiration',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiV1TokensPlansPlanNameWriteDelegatesRoute = createRoute({
  method: 'post',
  path: '/api/v1/Tokens/plans/{planName}/writeDelegates',
  tags: ['Tokens'],
  request: {
    params: z.object({
      planName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'planName', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-subscription-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-subscription-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        'application/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        'application/json-patch+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        'text/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      headers: z.object({
        headers: z
          .preprocess(
            (val) => {
              if (typeof val !== 'string') return val
              const parts = val.split(',').map((part) => part.trim())
              if (parts.length % 2 !== 0) return val
              return Object.fromEntries(
                parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
              )
            },
            PlanResourceHeadersSchema.openapi({
              param: {
                in: 'header',
                name: 'headers',
                schema: { $ref: '#/components/schemas/PlanResourceHeaders' },
                required: false,
              },
            }),
          )
          .exactOptional(),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllCodespaces',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/deleteAllEnvironments',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllCodespaces',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/readAllEnvironments',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeCodespaces',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeDelegates',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json-patch+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'text/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}/writeEnvironments',
    tags: ['Tokens'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerNamespace: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'providerNamespace',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const getApiV1TunnelEnvironmentIdPortInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/Tunnel/{environmentId}/portInfo',
  tags: ['Tunnel'],
  request: {
    params: z.object({
      environmentId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'environmentId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      portNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'portNumber',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TunnelPortInfoResultSchema },
        'text/json': { schema: TunnelPortInfoResultSchema },
        'text/plain': { schema: TunnelPortInfoResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const postApiV1UserSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/UserSubscriptions',
  tags: ['UserSubscriptions'],
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiV1UserSubscriptionsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/UserSubscriptions',
  tags: ['UserSubscriptions'],
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'email', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiV1PoolsDefaultRoute = createRoute({
  method: 'get',
  path: '/api/v1/pools/default',
  tags: ['Pools'],
  request: {
    query: z.object({
      skuName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skuName',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(PoolStatusResponseBodySchema) },
        'text/json': { schema: z.array(PoolStatusResponseBodySchema) },
        'text/plain': { schema: z.array(PoolStatusResponseBodySchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/SubscriptionLifeCycleNotification',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: RPSubscriptionNotificationSchema },
          'application/json': { schema: RPSubscriptionNotificationSchema },
          'application/json-patch+json': { schema: RPSubscriptionNotificationSchema },
          'text/json': { schema: RPSubscriptionNotificationSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/resourceReadBegin',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceListSchema },
          'application/json': { schema: NetworkSettingsResourceListSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceListSchema },
          'text/json': { schema: NetworkSettingsResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: RPSubscriptionNotificationSchema },
          'application/json': { schema: RPSubscriptionNotificationSchema },
          'application/json-patch+json': { schema: RPSubscriptionNotificationSchema },
          'text/json': { schema: RPSubscriptionNotificationSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceListSchema },
          'application/json': { schema: PlanResourceListSchema },
          'application/json-patch+json': { schema: PlanResourceListSchema },
          'text/json': { schema: PlanResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: RPSubscriptionNotificationSchema },
          'application/json': { schema: RPSubscriptionNotificationSchema },
          'application/json-patch+json': { schema: RPSubscriptionNotificationSchema },
          'text/json': { schema: RPSubscriptionNotificationSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceListSchema },
          'application/json': { schema: PlanResourceListSchema },
          'application/json-patch+json': { schema: PlanResourceListSchema },
          'text/json': { schema: PlanResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/resourceReadBegin',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceListSchema },
          'application/json': { schema: NetworkSettingsResourceListSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceListSchema },
          'text/json': { schema: NetworkSettingsResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute =
  createRoute({
    method: 'delete',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute =
  createRoute({
    method: 'patch',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationCompleted',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationValidate',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionCompleted',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionValidate',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchCompleted',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchValidate',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceReadBegin',
    tags: ['NetworkSettings'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceType: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceType', required: true, schema: { type: 'string' } },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: NetworkSettingsResourceSchema },
          'application/json': { schema: NetworkSettingsResourceSchema },
          'application/json-patch+json': { schema: NetworkSettingsResourceSchema },
          'text/json': { schema: NetworkSettingsResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceListSchema },
          'application/json': { schema: PlanResourceListSchema },
          'application/json-patch+json': { schema: PlanResourceListSchema },
          'text/json': { schema: PlanResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      headers: z.object({
        headers: z
          .preprocess(
            (val) => {
              if (typeof val !== 'string') return val
              const parts = val.split(',').map((part) => part.trim())
              if (parts.length % 2 !== 0) return val
              return Object.fromEntries(
                parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
              )
            },
            PlanResourceHeadersSchema.openapi({
              param: {
                in: 'header',
                name: 'headers',
                schema: { $ref: '#/components/schemas/PlanResourceHeaders' },
                required: false,
              },
            }),
          )
          .exactOptional(),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationCompleted',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceDeletionValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchCompleted',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      headers: z.object({
        headers: z
          .preprocess(
            (val) => {
              if (typeof val !== 'string') return val
              const parts = val.split(',').map((part) => part.trim())
              if (parts.length % 2 !== 0) return val
              return Object.fromEntries(
                parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
              )
            },
            PlanResourceHeadersSchema.openapi({
              param: {
                in: 'header',
                name: 'headers',
                schema: { $ref: '#/components/schemas/PlanResourceHeaders' },
                required: false,
              },
            }),
          )
          .exactOptional(),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceUpdateBodySchema },
          'application/json': { schema: PlanResourceUpdateBodySchema },
          'application/json-patch+json': { schema: PlanResourceUpdateBodySchema },
          'text/json': { schema: PlanResourceUpdateBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceUpdateBodySchema },
          'application/json': { schema: PlanResourceUpdateBodySchema },
          'application/json-patch+json': { schema: PlanResourceUpdateBodySchema },
          'text/json': { schema: PlanResourceUpdateBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json-patch+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'text/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceListSchema },
          'application/json': { schema: PlanResourceListSchema },
          'application/json-patch+json': { schema: PlanResourceListSchema },
          'text/json': { schema: PlanResourceListSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameRoute =
  createRoute({
    method: 'put',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      headers: z.object({
        headers: z
          .preprocess(
            (val) => {
              if (typeof val !== 'string') return val
              const parts = val.split(',').map((part) => part.trim())
              if (parts.length % 2 !== 0) return val
              return Object.fromEntries(
                parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
              )
            },
            PlanResourceHeadersSchema.openapi({
              param: {
                in: 'header',
                name: 'headers',
                schema: { $ref: '#/components/schemas/PlanResourceHeaders' },
                required: false,
              },
            }),
          )
          .exactOptional(),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationCompleted',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceDeletionValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchCompleted',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      headers: z.object({
        headers: z
          .preprocess(
            (val) => {
              if (typeof val !== 'string') return val
              const parts = val.split(',').map((part) => part.trim())
              if (parts.length % 2 !== 0) return val
              return Object.fromEntries(
                parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
              )
            },
            PlanResourceHeadersSchema.openapi({
              param: {
                in: 'header',
                name: 'headers',
                schema: { $ref: '#/components/schemas/PlanResourceHeaders' },
                required: false,
              },
            }),
          )
          .exactOptional(),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceUpdateBodySchema },
          'application/json': { schema: PlanResourceUpdateBodySchema },
          'application/json-patch+json': { schema: PlanResourceUpdateBodySchema },
          'text/json': { schema: PlanResourceUpdateBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchValidate',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceUpdateBodySchema },
          'application/json': { schema: PlanResourceUpdateBodySchema },
          'application/json-patch+json': { schema: PlanResourceUpdateBodySchema },
          'text/json': { schema: PlanResourceUpdateBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceReadBegin',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: PlanResourceSchema },
          'application/json': { schema: PlanResourceSchema },
          'application/json-patch+json': { schema: PlanResourceSchema },
          'text/json': { schema: PlanResourceSchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeCodespaces',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'application/*+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'application/json-patch+json': { schema: IssueDelegatePlanAccessTokenBodySchema },
          'text/json': { schema: IssueDelegatePlanAccessTokenBodySchema },
        },
      },
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeEnvironments',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        expiration: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expiration',
              schema: { format: 'date-time', type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteDelegates',
    tags: ['Plans'],
    request: {
      params: z.object({
        subscriptionId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceGroup: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'resourceGroup',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'resourceName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  })

export const getApiV1TenantTenantIdPoolPoolNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/tenant/{tenantId}/Pool/{poolName}',
  tags: ['Pool'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PoolResultSchema },
        'text/json': { schema: PoolResultSchema },
        'text/plain': { schema: PoolResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const putApiV1TenantTenantIdPoolPoolNameRoute = createRoute({
  method: 'put',
  path: '/api/v1/tenant/{tenantId}/Pool/{poolName}',
  tags: ['Pool'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateOrUpdatePoolBodySchema },
        'application/json': { schema: CreateOrUpdatePoolBodySchema },
        'application/json-patch+json': { schema: CreateOrUpdatePoolBodySchema },
        'text/json': { schema: CreateOrUpdatePoolBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PoolResultSchema },
        'text/json': { schema: PoolResultSchema },
        'text/plain': { schema: PoolResultSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/json': { schema: PoolResultSchema },
        'text/json': { schema: PoolResultSchema },
        'text/plain': { schema: PoolResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const deleteApiV1TenantTenantIdPoolPoolNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tenant/{tenantId}/Pool/{poolName}',
  tags: ['Pool'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const patchApiV1TenantTenantIdPoolPoolNameRoute = createRoute({
  method: 'patch',
  path: '/api/v1/tenant/{tenantId}/Pool/{poolName}',
  tags: ['Pool'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateOrUpdatePoolBodySchema },
        'application/json': { schema: CreateOrUpdatePoolBodySchema },
        'application/json-patch+json': { schema: CreateOrUpdatePoolBodySchema },
        'text/json': { schema: CreateOrUpdatePoolBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PoolResultSchema },
        'text/json': { schema: PoolResultSchema },
        'text/plain': { schema: PoolResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}',
  tags: ['PoolGroup'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolGroupName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolGroupName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PoolGroupResultSchema },
        'text/json': { schema: PoolGroupResultSchema },
        'text/plain': { schema: PoolGroupResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute = createRoute({
  method: 'put',
  path: '/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}',
  tags: ['PoolGroup'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolGroupName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolGroupName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreatePoolGroupBodySchema },
        'application/json': { schema: CreatePoolGroupBodySchema },
        'application/json-patch+json': { schema: CreatePoolGroupBodySchema },
        'text/json': { schema: CreatePoolGroupBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}',
  tags: ['PoolGroup'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolGroupName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolGroupName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute = createRoute({
  method: 'patch',
  path: '/api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}',
  tags: ['PoolGroup'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolGroupName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolGroupName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdatePoolGroupBodySchema },
        'application/json': { schema: UpdatePoolGroupBodySchema },
        'application/json-patch+json': { schema: UpdatePoolGroupBodySchema },
        'text/json': { schema: UpdatePoolGroupBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const getApiV1TenantTenantIdPoolPoolNameVmRoute = createRoute({
  method: 'get',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(VMResultSchema) },
        'text/json': { schema: z.array(VMResultSchema) },
        'text/plain': { schema: z.array(VMResultSchema) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
      vmName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vmName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: VMResultSchema },
        'text/json': { schema: VMResultSchema },
        'text/plain': { schema: VMResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute = createRoute({
  method: 'put',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
      vmName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vmName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: ClaimVMBodySchema },
        'application/json': { schema: ClaimVMBodySchema },
        'application/json-patch+json': { schema: ClaimVMBodySchema },
        'text/json': { schema: ClaimVMBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: VMResultSchema },
        'text/json': { schema: VMResultSchema },
        'text/plain': { schema: VMResultSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/json': { schema: VMResultSchema },
        'text/json': { schema: VMResultSchema },
        'text/plain': { schema: VMResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
      vmName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vmName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute = createRoute({
  method: 'post',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
      vmName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vmName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute = createRoute({
  method: 'post',
  path: '/api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop',
  tags: ['Vm'],
  request: {
    params: z.object({
      tenantId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'tenantId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      poolName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'poolName', required: true, schema: { type: 'string' } },
        }),
      vmName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vmName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    500: { description: 'Server Error' },
    503: { description: 'Server Error' },
  },
})

export const postApiV2PrebuildsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v2/prebuilds/delete',
  tags: ['PrebuildsV'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: DeletePrebuildTemplatesBodySchema },
        'application/json': { schema: DeletePrebuildTemplatesBodySchema },
        'application/json-patch+json': { schema: DeletePrebuildTemplatesBodySchema },
        'text/json': { schema: DeletePrebuildTemplatesBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute = createRoute({
  method: 'delete',
  path: '/api/v2/prebuilds/repository/{repoId}/branch/{branchName}',
  tags: ['PrebuildsV'],
  request: {
    params: z.object({
      repoId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'repoId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      branchName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'branchName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const postApiV2PrebuildsTemplatesRoute = createRoute({
  method: 'post',
  path: '/api/v2/prebuilds/templates',
  tags: ['PrebuildsV'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: CreatePrebuildTemplateBodySchema },
        'application/json': { schema: CreatePrebuildTemplateBodySchema },
        'application/json-patch+json': { schema: CreatePrebuildTemplateBodySchema },
        'text/json': { schema: CreatePrebuildTemplateBodySchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': { schema: CreateTemplateResultSchema },
        'text/json': { schema: CreateTemplateResultSchema },
        'text/plain': { schema: CreateTemplateResultSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute =
  createRoute({
    method: 'get',
    path: '/api/v2/prebuilds/templates/skus/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/devcontainerpath/{devContainerPath}',
    tags: ['PrebuildsV'],
    operationId: 'GetPrebuildReadinessSkusRoute',
    request: {
      params: z.object({
        repoId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'repoId', required: true, schema: { type: 'string' } },
          }),
        branchName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'branchName', required: true, schema: { type: 'string' } },
          }),
        prebuildHash: z
          .string()
          .openapi({
            param: { in: 'path', name: 'prebuildHash', required: true, schema: { type: 'string' } },
          }),
        location: z
          .string()
          .openapi({
            param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
          }),
        devContainerPath: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'devContainerPath',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        storageType: StorageTypeSchema.openapi({
          param: {
            in: 'query',
            name: 'storageType',
            schema: { $ref: '#/components/schemas/StorageType' },
            required: false,
          },
        }).exactOptional(),
        fastPathEnabled: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'fastPathEnabled',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: PrebuildReadinessResultSchema },
          'text/json': { schema: PrebuildReadinessResultSchema },
          'text/plain': { schema: PrebuildReadinessResultSchema },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': { schema: z.string() },
          'text/json': { schema: z.string() },
          'text/plain': { schema: z.string() },
        },
      },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
      403: {
        description: 'Forbidden',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': { schema: ProblemDetailsSchema },
          'text/json': { schema: ProblemDetailsSchema },
          'text/plain': { schema: ProblemDetailsSchema },
        },
      },
    },
  })

export const postApiV2PrebuildsTemplatesUpdatemaxversionsRoute = createRoute({
  method: 'post',
  path: '/api/v2/prebuilds/templates/updatemaxversions',
  tags: ['PrebuildsV'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: UpdatePrebuildTemplateVersionsBodySchema },
        'application/json': { schema: UpdatePrebuildTemplateVersionsBodySchema },
        'application/json-patch+json': { schema: UpdatePrebuildTemplateVersionsBodySchema },
        'text/json': { schema: UpdatePrebuildTemplateVersionsBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    503: {
      description: 'Server Error',
      content: {
        'application/json': { schema: MessageCodesSchema },
        'text/json': { schema: MessageCodesSchema },
        'text/plain': { schema: MessageCodesSchema },
      },
    },
  },
})

export const postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute = createRoute({
  method: 'post',
  path: '/api/v2/prebuilds/templates/{templateId}/updatestatus',
  tags: ['PrebuildsV'],
  request: {
    params: z.object({
      templateId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'templateId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdatePrebuildTemplateBodySchema },
        'application/json': { schema: UpdatePrebuildTemplateBodySchema },
        'application/json-patch+json': { schema: UpdatePrebuildTemplateBodySchema },
        'text/json': { schema: UpdatePrebuildTemplateBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  responses: { 200: { description: 'Success' }, 500: { description: 'Server Error' } },
})

export const getInternalNetmonCorrelationRoute = createRoute({
  method: 'get',
  path: '/internal/Netmon/correlation',
  tags: ['Netmon'],
  request: {
    query: z.object({
      macAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'macAddress', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ProblemDetailsSchema },
        'text/json': { schema: ProblemDetailsSchema },
        'text/plain': { schema: ProblemDetailsSchema },
      },
    },
  },
})

export const getTunnelauthRoute = createRoute({
  method: 'get',
  path: '/tunnelauth',
  tags: ['Authentication'],
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
      cluster: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'cluster', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'port',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pb: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pb', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postTunnelauthRoute = createRoute({
  method: 'post',
  path: '/tunnelauth',
  tags: ['Authentication'],
  request: {
    query: z.object({
      op: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'op', schema: { type: 'string' }, required: false },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
      cluster: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'cluster', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'port',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getWarmupRoute = createRoute({
  method: 'get',
  path: '/warmup',
  tags: ['Warmup'],
  responses: { 200: { description: 'Success' }, 503: { description: 'Server Error' } },
})
