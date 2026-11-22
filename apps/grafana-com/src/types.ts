type LinksInner = { rel: string; href: string }
type FormattedApiInstance = {
  alertCnt: number
  alertQuota: number
  amInstanceGeneratorUrl: string
  amInstanceGeneratorUrlDatasource: string
  amInstanceId: number
  amInstanceName: string
  amInstanceStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  amInstanceUrl: string
  amInstanceClusterId: number
  billingActiveUsers: number
  billingEndDate: string | null
  billingGrafanaActiveUsers: number
  billingOnCallActiveUsers: number
  billingStartDate: string
  clusterId: number
  clusterName: string
  clusterSlug: string
  createdAt: string
  createdBy: string
  currentActiveAdminUsers: number
  currentActiveEditorUsers: number
  currentActiveUsers: number
  currentActiveViewerUsers: number
  customAuth: boolean
  customDomain: boolean
  dailyAdminCnt: number
  dailyEditorCnt: number
  dailyUserCnt: number
  dailyViewerCnt: number
  dashboardCnt: number
  dashboardQuota: number
  datasourceCnts: { [x: string]: unknown }
  description: string
  gateway: string
  hlInstanceCurrentUsage: number
  hlInstanceBillingUsage: number
  hlInstanceId: number
  hlInstanceName: string
  hlInstanceStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  hlInstanceUrl: string
  hlInstanceClusterId: number
  hmInstanceGraphiteCurrentUsage: number
  hmInstanceGraphiteBillingUsage: number
  hmInstanceGraphiteId: number
  hmInstanceGraphiteName: string
  hmInstanceGraphiteStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  hmInstanceGraphiteType: string
  hmInstanceGraphiteUrl: string
  hmInstancePromClusterId: number
  hmInstancePromCurrentActiveSeries: number | null
  hmInstancePromCurrentUsage: number
  hmInstancePromBillingUsage: number
  hmInstancePromId: number
  hmInstancePromName: string
  hmInstancePromStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  hmInstancePromUrl: string
  hmInstanceGraphiteClusterId: number
  htInstanceId: number
  htInstanceName: string
  htInstanceStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  htInstanceUrl: string
  htInstanceClusterId: number
  htInstanceCurrentUsage: number
  htInstanceBillingUsage: number
  hpInstanceId: number
  hpInstanceName: string
  hpInstanceStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  hpInstanceUrl: string
  hpInstanceClusterId: number
  hpInstanceCurrentUsage: number
  hpInstanceBillingUsage: number
  id: number
  incident: number
  labels?: { [x: string]: unknown } | undefined
  machineLearning: number
  name: string
  orgId: number
  orgName: string
  orgSlug: string
  orgCreatedAt: string
  plan:
    | 'advanced'
    | 'basic'
    | 'basic-prom'
    | 'bundled'
    | 'enterprise'
    | 'fedramp'
    | 'fog'
    | 'free'
    | 'free-trial'
    | 'gcloud'
    | 'logsdemo'
    | 'payg'
    | 'starter'
    | 'starter-prom'
    | 'trial'
  planName: string
  regionId: number
  regionSlug: string
  regionPublicName: string
  provider: string
  providerRegion: string
  runningVersion: string
  slug: string
  ssl: boolean
  status:
    | 'active'
    | 'archived'
    | 'archiving'
    | 'deleted'
    | 'deleting'
    | 'migrated'
    | 'migrating'
    | 'paused'
    | 'pending'
    | 'restoring'
    | 'starting'
    | 'suspended'
    | 'suspending'
    | 'unknown'
  support: boolean
  trial: number
  trialExpiresAt: string | null
  updatedAt: string | null
  updatedBy: string | null
  statusUpdatedAt?: (string | null) | undefined
  url: string
  userQuota: number
  version: string
  versionIssueLink?: string | undefined
  agentManagementInstanceId: number
  agentManagementInstanceUrl: string
  agentManagementInstanceName: string
  agentManagementInstanceStatus: 'active' | 'deleted' | 'suspended' | 'unknown'
  agentManagementInstanceClusterId: number
  config?: { [x: string]: unknown } | undefined
  type: 'grafana'
  stackType: string
  k6OrgId: number | null
  machineLearningLogsToken: string
  usageStatsId: string
  regionStackStateServiceUrl: string
  regionSyntheticMonitoringApiUrl: string
  regionInsightsApiUrl: string
  regionIntegrationsApiUrl: string
  regionHostedExportersApiUrl: string
  regionMachineLearningApiUrl: string
  regionLLMGatewayUrl: string
  regionAssistantUrl: string
  regionSigilUrl: string
  regionAgentO11YUrl: string
  links: LinksInner[]
  deleteProtection: boolean
}
type GetInstances_200Response = {
  items: FormattedApiInstance[]
  orderBy: string
  direction: 'asc' | 'desc'
  total: number
  pages: number
  pageSize: number
  page: number
}
type ErrorInvalidCredentials = {
  message?: string | undefined
  code?: 'InvalidCredentials' | undefined
}
type ErrorForbidden = { message?: string | undefined; code?: 'Forbidden' | undefined }
type ErrorConflict = { message?: string | undefined; code?: 'Conflict' | undefined }
type PostInstancesRequest = {
  adminUserInstance?: boolean | undefined
  alerts?: boolean | undefined
  cluster?: string | undefined
  deleteProtection?: boolean | undefined
  description?: string | undefined
  graphite?: boolean | undefined
  hlInstanceId?: number | undefined
  hosted?: boolean | undefined
  issueLink?: string | undefined
  k6OrgId?: number | undefined
  labels?: { [x: string]: string } | undefined
  logs?: boolean | undefined
  name: string
  org?: string | undefined
  plan?:
    | 'free'
    | 'free-trial'
    | 'gcloud'
    | 'enterprise'
    | 'advanced'
    | 'payg'
    | 'fedramp'
    | 'trial'
    | 'logsdemo'
    | 'starter'
    | 'starter-prom'
    | 'basic'
    | 'basic-prom'
    | 'bundled'
    | 'fog'
    | undefined
  plugins?: string[] | undefined
  prometheus?: boolean | undefined
  publicInstance?: boolean | undefined
  reasonType?:
    | 'bug'
    | 'securityVulnerability'
    | 'customerUpgradeShy'
    | 'customerBreaksUseCase'
    | 'customerRequest'
    | 'other'
    | undefined
  region?: string | undefined
  slug?: string | undefined
  stackType?: string | undefined
  url?: string | undefined
  usernameOrEmail?: string | undefined
  version?: string | undefined
  waitForReadiness?: boolean | undefined
}
type ErrorServiceUnavailable = {
  message?: string | undefined
  code?: 'ServiceUnavailable' | undefined
}
type ErrorNotFound = { message?: string | undefined; code?: 'NotFound' | undefined }
type PostInstanceRequest = {
  alerts?: boolean | undefined
  deleteProtection?: boolean | undefined
  description?: string | undefined
  graphite?: boolean | undefined
  hlInstanceId?: number | undefined
  issueLink?: string | undefined
  k6OrgId?: (number | null) | undefined
  labels?: { [x: string]: string } | undefined
  logs?: boolean | undefined
  name?: string | undefined
  plan?:
    | 'free'
    | 'free-trial'
    | 'gcloud'
    | 'enterprise'
    | 'advanced'
    | 'payg'
    | 'fedramp'
    | 'trial'
    | 'logsdemo'
    | 'starter'
    | 'starter-prom'
    | 'basic'
    | 'basic-prom'
    | 'bundled'
    | 'fog'
    | undefined
  prometheus?: boolean | undefined
  reasonType?:
    | 'bug'
    | 'securityVulnerability'
    | 'customerUpgradeShy'
    | 'customerBreaksUseCase'
    | 'customerRequest'
    | 'other'
    | undefined
  slug?: string | undefined
  url?: string | undefined
  version?: string | undefined
  waitForReadiness?: boolean | undefined
}
type PostInstanceServiceAccountsRequest = {
  isDisabled?: boolean | undefined
  name: string
  role: string
}
type GrafanaServiceAccountDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  avatarUrl?: string | undefined
  id?: bigint | undefined
  isDisabled?: boolean | undefined
  isExternal?: boolean | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  role?: string | undefined
  tokens?: bigint | undefined
}
type ServiceAccountsInner = { id: number; name: string }
type ServiceAccountSearchResponse = {
  totalCount: number
  serviceAccounts: ServiceAccountsInner[]
  page: number
  perPage: number
}
type GrafanaTokenDTO = {
  created?: string | undefined
  expiration?: string | undefined
  hasExpired?: boolean | undefined
  id?: bigint | undefined
  isRevoked?: boolean | undefined
  lastUsedAt?: string | undefined
  name?: string | undefined
  secondsUntilExpiration?: number | undefined
}
type PostInstanceServiceAccountTokensRequest = { name: string; secondsToLive?: number | undefined }
type GrafanaNewApiKeyResult = {
  id?: bigint | undefined
  key?: string | undefined
  name?: string | undefined
}
type LinksInner_1 = { rel: string; href: string }
type FormattedApiInstancePlugin = {
  id: number
  instanceId: number
  instanceUrl: string
  instanceSlug: string
  pluginId: number
  pluginSlug: string
  pluginName: string
  version: string
  latestVersion: string
  createdAt: string
  updatedAt?: string | undefined
  links: LinksInner_1[]
}
type GetInstancePlugins_200Response = {
  items: FormattedApiInstancePlugin[]
  orderBy: string
  direction: 'asc' | 'desc'
  total: number
  pages: number
  pageSize: number
  page: number
}
type PostInstancePluginsRequest = {
  noRestart?: boolean | undefined
  plugin: string
  version?: string | undefined
}
type PostInstancePluginRequest = { noRestart?: boolean | undefined; version?: string | undefined }
type FormattedApiInstanceReadiness = { ready: boolean }
type FormattedApiOrgStackRegion = {
  id: number
  stackRegionId: number
  orgId: number
  createdAt: string
  updatedAt: string | null
}
type GetOrgStackRegions_200Response = {
  items: FormattedApiOrgStackRegion[]
  orderBy: string
  direction: 'asc' | 'desc'
  total: number
  pages: number
  pageSize: number
  page: number
}
type CreditsInner = { amount: number; dimensionId: string; dimensionName: string }
type UsagesInner = {
  activeSeries?: number | undefined
  activeUsers?: number | undefined
  anonymousUsers?: number | undefined
  attributedCost?: number | undefined
  attributedUsage?: number | undefined
  browserUsage?: number | undefined
  credits?: CreditsInner[] | undefined
  dpm?: number | undefined
  grafanaUsage?: number | undefined
  id: number
  incidentUsage?: number | undefined
  ingestUsage?: number | undefined
  isProrated: boolean
  onCallUsage?: number | undefined
  periodEnd: string
  periodStart: string
  protocolUsage?: number | undefined
  queryUsage?: number | undefined
  stackId: number
  totalUsage: number
  stackName: string
  stackLabels: { [x: string]: unknown }
}
type BilledUsage = {
  id: number
  overage: number
  description: string
  notes: string
  dimensionId:
    | 'agent-generations'
    | 'ai-tokens'
    | 'app-o11y'
    | 'assistant'
    | 'db-o11y-hosts'
    | 'fe-o11y'
    | 'ge-instances'
    | 'ge-users'
    | 'hg'
    | 'hg-plugin-users'
    | 'hl'
    | 'hl-process'
    | 'hl-query'
    | 'hl-retention'
    | 'hm'
    | 'hm-graphite'
    | 'hm-query'
    | 'hp'
    | 'hp-process'
    | 'hp-retention'
    | 'ht'
    | 'ht-process'
    | 'ht-retention'
    | 'infra-o11y-containers'
    | 'infra-o11y-hosts'
    | 'irm'
    | 'k6-ip'
    | 'k6-vuh'
    | 'marketplace-plugin-users'
    | 'sm'
    | 'sm-browser'
  orgRates: { [x: string]: unknown }
  amountDue: number
  dimensionName: string
  includedUsage: number
  periodEnd: string
  periodStart: string
  totalUsage: number
  unit: string
  usages: UsagesInner[]
}
type GetOrgBilledUsage_200Response = {
  items: BilledUsage[]
  orderBy: string
  direction: 'asc' | 'desc'
  total: number
  pages: number
  pageSize: number
  page: number
}
type ItemsInner = { month: number; year: number }
type OrgBilledUsageHistory = { $schema?: string | undefined; items: ItemsInner[] }
type FormattedApiOrgPublicAllowGCloudTrial = boolean | number
type Current = {
  product: { [x: string]: unknown } | null
  isTrial: boolean
  startDate: { [x: string]: unknown } | null
  endDate: { [x: string]: unknown } | null
  payload: { [x: string]: unknown }
  plan: { [x: string]: unknown } | null
  publicName: { [x: string]: unknown } | null
  enterprisePluginsAdded: boolean
  planBillingCycle: { [x: string]: unknown } | null
}
type SubscriptionsAnyOf = { current: Current; next: { [x: string]: unknown } | null }
type Payload = {
  withAddons?: string[] | undefined
  licenseAllPlugins?: boolean | undefined
  caseId?: string | undefined
}
type Current_1 = {
  product:
    | 'grafana-cloud-advanced'
    | 'grafana-cloud-fedramp'
    | 'grafana-cloud-free'
    | 'grafana-cloud-pro'
    | 'grafana-cloud-ss-advanced'
  isTrial: boolean
  startDate: string
  endDate: string
  payload: Payload
  plan: string | null
  publicName: string | null
  enterprisePluginsAdded: boolean
  planBillingCycle: string
}
type Next = {
  product:
    | 'grafana-cloud-advanced'
    | 'grafana-cloud-fedramp'
    | 'grafana-cloud-free'
    | 'grafana-cloud-pro'
    | 'grafana-cloud-ss-advanced'
  payload: Payload
  plan: string | null
  publicName: string | null
}
type SubscriptionsAnyOf_1 = { current: Current_1; next: Next }
type Current_2 = {
  product:
    | 'grafana-cloud-advanced'
    | 'grafana-cloud-fedramp'
    | 'grafana-cloud-free'
    | 'grafana-cloud-pro'
    | 'grafana-cloud-ss-advanced'
  isTrial: boolean
  startDate: string
  endDate: { [x: string]: unknown } | null
  payload: Payload
  plan: string | null
  publicName: string | null
  enterprisePluginsAdded: boolean
  planBillingCycle: string
}
type SubscriptionsAnyOf_2 = { current: Current_2; next: { [x: string]: unknown } | null }
type Subscriptions = SubscriptionsAnyOf | SubscriptionsAnyOf_1 | SubscriptionsAnyOf_2
type FormattedApiOrgPublic = {
  id: number
  slug: string
  name: string
  url: string
  createdAt: string
  createdBy: string | null
  updatedAt: string | null
  updatedBy: string | null
  avatar: string | null
  isource: string | null
  osource: string | null
  isStaff: boolean
  checksPerMonth: number
  wpPlan: string
  hgInstanceLimit: number
  hmInstanceLimit: number
  hlInstanceLimit: number
  userQuota: number
  supportPlan: string
  creditApproved: number
  msaSignedAt: string | null
  msaSignedBy: string | null
  enterprisePlugins: number
  licenseProducts: string[]
  grafanaCloud: 0 | 1 | 11 | 2 | 31 | 4 | 41 | 6 | 9
  privacy: string
  reseller: string
  resellerId: number | null
  resellerName: string | null
  emergencySupport: boolean
  gcloudMonthlyCost: number
  hgUsage: number
  hgCurrentActiveUsers: number
  hgGrafanaUsage: number
  hgOnCallUsage: number
  hmUsage: number
  hmCurrentUsage: number
  hmGraphiteUsage: number
  hlUsage: number
  hlRetentionUsage: number
  htUsage: number
  hpUsage: number
  irmUsage: number
  k6VuhUsage: number
  k6IPUsage: number
  feO11YUsage: number
  appO11YUsage: number
  smUsage: number
  infraO11YHostsUsage: number
  infraO11YContainersUsage: number
  geUsersUsage: number
  geInstancesUsage: number
  smBrowserUsage: number
  awsMarketplaceSupport: number
  trialStartDate: string | null
  trialEndDate: string | null
  trialLengthDays: number | null
  trialNoticeDate: string | null
  cancellationDate: string | null
  retainedStackId: number
  allowGCloudTrial: FormattedApiOrgPublicAllowGCloudTrial
  pluginSignatureType: string
  contractType: string
  contractTypeId: 0 | 1 | 2
  liveChatEnabled: boolean
  kapaDeflectorEnabled: boolean
  disableTokenExpirationEmails: boolean
  maxTokenExpirationDays: number
  mfaRequired?: boolean | undefined
  mfaAdminRecoveryOnly?: boolean | undefined
  links: LinksInner[]
  subscriptions: Subscriptions
}
type FormattedOrgMembershipMarketplaceSubscription = {
  provider: 'aws' | 'azure' | 'gcp'
  isLegacy: boolean
} | null
type FormattedOrgMembershipGrafanaStaffAccess = {
  accessExpiresAt: string
  ticketId?: (number | null) | undefined
  publicReason?: (string | null) | undefined
} | null
type ItemsInner_1 = {
  id: number
  orgId: number
  userId: number
  status: number
  createdAt: string
  updatedAt: string | null
  defaultOrg: number
  role: 'Admin' | 'Editor' | 'None' | 'SSO Access' | 'Viewer'
  privacy: number
  billing: number
  security: number
  createdBy: string
  updatedBy: string
  orgName: string
  orgSlug: string
  orgUrl: string
  grafanaCloud: 0 | 1 | 11 | 2 | 31 | 4 | 41 | 6 | 9
  resellerId: number | null
  contractTypeId: 0 | 1 | 2
  allowGCloudTrial: boolean
  hlUsage: number
  hmCurrentGraphiteUsage: number
  hmCurrentPrometheusUsage: number
  hgDatasourceCnts: string
  userFirstName: string
  userLastName: string
  userUsername: string
  userStatus?: 'active' | 'deleted' | 'pending' | 'unknown' | undefined
  userEmail: string
  userName: string
  subscriptions: Subscriptions
  marketplaceSubscription: FormattedOrgMembershipMarketplaceSubscription
  mfaEnabled?: boolean | undefined
  extraPermissions?:
    | (
        | 'accesspolicies:write'
        | 'orgs:read'
        | 'support-ticket-comments:write'
        | 'support-tickets:read'
        | 'support-tickets:write'
      )[]
    | undefined
  grafanaStaffAccess?: FormattedOrgMembershipGrafanaStaffAccess | undefined
}
type OrgMemberListResponse = {
  total?: number | undefined
  pages?: number | undefined
  page?: number | undefined
  perPage?: number | undefined
  totalCount?: number | undefined
  orderBy?: string | undefined
  direction?: string | undefined
  cursor?: number | undefined
  nextCursor?: number | undefined
  items: ItemsInner_1[]
  links: LinksInner[]
}
type PostOrgMembersRequest = {
  billing?: number | undefined
  privacy?: string | undefined
  role?: string | undefined
  security?: number | undefined
  username: string
}
type FormattedOrgMembership = {
  id: number
  orgId: number
  userId: number
  status: number
  createdAt: string
  updatedAt: string | null
  defaultOrg: number
  role: 'Admin' | 'Editor' | 'None' | 'SSO Access' | 'Viewer'
  privacy: number
  billing: number
  security: number
  createdBy: string
  updatedBy: string
  orgName: string
  orgSlug: string
  orgUrl: string
  grafanaCloud: 0 | 1 | 11 | 2 | 31 | 4 | 41 | 6 | 9
  resellerId: number | null
  contractTypeId: 0 | 1 | 2
  allowGCloudTrial: FormattedApiOrgPublicAllowGCloudTrial
  hlUsage: number
  hmCurrentGraphiteUsage: number
  hmCurrentPrometheusUsage: number
  hgDatasourceCnts: string
  userFirstName: string
  userLastName: string
  userUsername: string
  userStatus?: 'active' | 'deleted' | 'pending' | 'unknown' | undefined
  userEmail: string
  userName: string
  subscriptions: Subscriptions
  marketplaceSubscription: FormattedOrgMembershipMarketplaceSubscription
  mfaEnabled?: boolean | undefined
  extraPermissions?:
    | (
        | 'accesspolicies:write'
        | 'orgs:read'
        | 'support-ticket-comments:write'
        | 'support-tickets:read'
        | 'support-tickets:write'
      )[]
    | undefined
  grafanaStaffAccess?: FormattedOrgMembershipGrafanaStaffAccess | undefined
}
type PostOrgMemberRequest = {
  billing?: number | undefined
  defaultOrg?: string | undefined
  privacy?: string | undefined
  role?: string | undefined
  security?: number | undefined
}
type FormattedApiOrgSettings = {
  aiDataSharingOptOut?: (boolean | null) | undefined
  disableTokenExpirationEmails?: (boolean | null) | undefined
  maxTokenExpirationDays?: (number | null) | undefined
  mfaAdminRecoveryOnly?: (boolean | null) | undefined
  mfaRequired?: (boolean | null) | undefined
  allowedInviteDomains?: (string[] | null) | undefined
}
type UpdateOrgSettingsRequest = {
  aiDataSharingOptOut?: (boolean | null) | undefined
  allowedInviteDomains?: (string | null) | undefined
  disableTokenExpirationEmails?: (boolean | null) | undefined
  maxTokenExpirationDays?: (number | null) | undefined
  mfaAdminRecoveryOnly?: (boolean | null) | undefined
  mfaRequired?: (boolean | null) | undefined
}
type RenewMarketplaceLicenseRequest = { token: string }
type MarketplaceLicenseRenewalResponse = { token: string }
type Author = { name?: string | undefined; email?: string | undefined; url?: string | undefined }
type Build = {
  time?: number | undefined
  repo?: string | undefined
  branch?: string | undefined
  hash?: string | undefined
  number?: number | undefined
  pr?: number | undefined
  build?: number | undefined
}
type LinksInner_2 = {
  name?: string | undefined
  url?: string | undefined
  target?: '_blank' | '_parent' | '_self' | '_top' | undefined
}
type Logos = { small: string; large: string }
type ScreenshotsInner = { name?: string | undefined; path?: string | undefined }
type Info = {
  author?: Author | undefined
  build?: Build | undefined
  description?: string | undefined
  keywords: string[]
  links?: LinksInner_2[] | undefined
  logos: Logos
  screenshots?: ScreenshotsInner[] | undefined
  updated: string
  version: string
}
type PluginsInner = { id: string; type: 'app' | 'datasource' | 'panel'; name: string }
type Extensions = { exposedComponents?: string[] | undefined }
type Dependencies = {
  grafanaVersion?: string | undefined
  grafanaDependency: string
  plugins?: PluginsInner[] | undefined
  extensions?: Extensions | undefined
}
type EnterpriseFeatures = { healthDiagnosticsErrors?: boolean | undefined }
type IncludesInner = {
  uid?: string | undefined
  type: 'dashboard' | 'datasource' | 'page' | 'panel'
  name?: string | undefined
  component?: string | undefined
  role?: 'Admin' | 'Editor' | 'Viewer' | undefined
  action?: string | undefined
  path?: string | undefined
  addToNav?: boolean | undefined
  defaultNav?: boolean | undefined
  icon?: string | undefined
}
type QueryOptions = {
  maxDataPoints?: boolean | undefined
  minInterval?: boolean | undefined
  cacheTimeout?: boolean | undefined
}
type Params = {
  grant_type?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  resource?: string | undefined
}
type TokenAuth = {
  url?: string | undefined
  scopes?: string[] | undefined
  params?: Params | undefined
}
type Params_1 = {
  token_uri?: string | undefined
  client_email?: string | undefined
  private_key?: string | undefined
}
type JwtTokenAuth = {
  url?: string | undefined
  scopes?: string[] | undefined
  params?: Params_1 | undefined
}
type UrlParamsInner = { name?: string | undefined; content?: string | undefined }
type RoutesInner = {
  path: string
  method?: string | undefined
  url?: string | undefined
  reqSignedIn?: boolean | undefined
  reqRole?: string | undefined
  reqAction?: string | undefined
  headers?: { [x: string]: unknown }[] | undefined
  body?: { [x: string]: { [x: string]: unknown } } | undefined
  tokenAuth?: TokenAuth | undefined
  jwtTokenAuth?: JwtTokenAuth | undefined
  urlParams?: UrlParamsInner[] | undefined
}
type PermissionsInner = { action?: string | undefined; scope?: string | undefined }
type Iam = { permissions?: PermissionsInner[] | undefined }
type PermissionsInner_1 = { action?: string | undefined; scope?: string | undefined }
type Role = {
  name?: string | undefined
  description?: string | undefined
  permissions?: PermissionsInner_1[] | undefined
}
type RolesInner = { role?: Role | undefined; grants?: string[] | undefined }
type AddedComponentsInner = { targets: string[]; title: string; description?: string | undefined }
type AddedLinksInner = { targets: string[]; title: string; description?: string | undefined }
type AddedFunctionsInner = { targets: string[]; title: string; description?: string | undefined }
type ExposedComponentsInner = {
  id: string
  title?: string | undefined
  description?: string | undefined
}
type ExtensionPointsInner = {
  id: string
  title?: string | undefined
  description?: string | undefined
}
type Extensions_1 = {
  addedComponents?: AddedComponentsInner[] | undefined
  addedLinks?: AddedLinksInner[] | undefined
  addedFunctions?: AddedFunctionsInner[] | undefined
  exposedComponents?: ExposedComponentsInner[] | undefined
  extensionPoints?: ExtensionPointsInner[] | undefined
}
type Json = {
  id: string
  type: 'app' | 'datasource' | 'panel' | 'renderer'
  info: Info
  name: string
  dependencies: Dependencies
  $schema?: string | undefined
  alerting?: boolean | undefined
  annotations?: boolean | undefined
  autoEnabled?: boolean | undefined
  backend?: boolean | undefined
  buildMode?: string | undefined
  builtIn?: boolean | undefined
  category?: string | undefined
  docsPath?: string | undefined
  enterpriseFeatures?: EnterpriseFeatures | undefined
  executable?: string | undefined
  hideFromList?: boolean | undefined
  includes?: IncludesInner[] | undefined
  logs?: boolean | undefined
  metrics?: boolean | undefined
  mixed?: boolean | undefined
  multiValueFilterOperators?: boolean | undefined
  pascalName?: string | undefined
  preload?: boolean | undefined
  suggestions?: boolean | undefined
  queryOptions?: QueryOptions | undefined
  routes?: RoutesInner[] | undefined
  skipDataQuery?: boolean | undefined
  state?: 'alpha' | 'beta' | 'deprecated' | 'stable' | undefined
  streaming?: boolean | undefined
  tracing?: boolean | undefined
  iam?: Iam | undefined
  roles?: RolesInner[] | undefined
  extensions?: Extensions_1 | undefined
  languages?: string[] | undefined
}
type Managed = { enabled: boolean; strategy?: string | undefined }
type FormattedApiPlugin = {
  status: string
  id: number
  typeId: number
  typeName: string
  typeCode: string
  slug: string
  name: string
  description: string
  version: string
  versionStatus: string
  versionSignatureType: string
  versionDistributionType: string
  versionSignedByOrg: string
  versionSignedByOrgName: string
  userId: number
  orgId: number
  orgName: string
  orgSlug: string
  orgUrl: string
  url: string
  createdAt: string
  updatedAt: string
  releaseCountLastYear?: number | undefined
  activeInstances?: (number | null) | undefined
  downloads: number
  verified: boolean
  featured: number
  internal: boolean
  downloadSlug: string
  popularity: number
  datasourceQueryCount?: (number | null) | undefined
  signatureType: string
  packages: { [x: string]: unknown }
  links: LinksInner[]
  angularDetected: boolean
  licenseUrl?: string | undefined
  documentationUrl?: string | undefined
  json?: Json | undefined
  category?: string | undefined
  managed?: Managed | undefined
  hasDocumentation?: boolean | undefined
  prices?: { [x: string]: unknown } | undefined
}
type FormattedApiStackRegionAnyOf = {
  id: number
  status: string
  visibility: string
  slug: string
  name: string
  publicName: string
  description: string
  provider: 'aws' | 'azure' | 'fedramp-palantir' | 'gcp'
  createdAt: string
  updatedAt: string | null
  sortOrder: number
}
type PdcPrivateConnectivityInfoAnyOf = {
  privateDNS: string
  serviceName: string
  regions?: string[] | undefined
  endpointName?: string | undefined
  serviceId?: string | undefined
  availabilityZones?: string[] | undefined
  availabilityZoneIds?: string[] | undefined
} | null
type PdcPrivateConnectivityInfoAnyOf_1 = {
  serviceAttachment: string
  domainNames: string[]
  endpointName: string
} | null
type PdcPrivateConnectivityInfoAnyOf_2 = { alias: string; endpointName?: string | undefined } | null
type ApiAnyOf = {
  privateDNS: string
  serviceName: string
  regions?: string[] | undefined
  endpointName?: string | undefined
  serviceId?: string | undefined
  availabilityZones?: string[] | undefined
  availabilityZoneIds?: string[] | undefined
}
type ApiAnyOf_1 = { serviceAttachment: string; domainNames: string[]; endpointName: string }
type ApiAnyOf_2 = { alias: string; endpointName?: string | undefined }
type Api = ApiAnyOf | ApiAnyOf_1 | ApiAnyOf_2
type Gateway = ApiAnyOf | ApiAnyOf_1 | ApiAnyOf_2
type PdcPrivateConnectivityInfoAnyOf_3 = { api: Api; gateway: Gateway } | null
type Mimir = ApiAnyOf | ApiAnyOf_1 | ApiAnyOf_2
type Graphite = ApiAnyOf | ApiAnyOf_1 | ApiAnyOf_2
type Otlp =
  | PdcPrivateConnectivityInfoAnyOf
  | PdcPrivateConnectivityInfoAnyOf_1
  | PdcPrivateConnectivityInfoAnyOf_2
type PdcPrivateConnectivityInfoAnyOf_4 = {
  mimir: Mimir
  graphite?: Graphite | undefined
  otlp?: Otlp | undefined
} | null
type PdcPrivateConnectivityInfo =
  | PdcPrivateConnectivityInfoAnyOf
  | PdcPrivateConnectivityInfoAnyOf_1
  | PdcPrivateConnectivityInfoAnyOf_2
  | PdcPrivateConnectivityInfoAnyOf_3
  | PdcPrivateConnectivityInfoAnyOf_4
type OtlpPrivateConnectivityInfo =
  | PdcPrivateConnectivityInfoAnyOf
  | PdcPrivateConnectivityInfoAnyOf_1
  | PdcPrivateConnectivityInfoAnyOf_2
  | PdcPrivateConnectivityInfoAnyOf_3
  | PdcPrivateConnectivityInfoAnyOf_4
type FormattedApiStackRegionAnyOf_1 = {
  stackStateServiceUrl: string
  syntheticMonitoringApiUrl: string
  insightsApiUrl: string
  integrationsApiUrl: string
  hostedExportersApiUrl: string
  machineLearningApiUrl: string
  llmGatewayUrl: string
  assistantUrl: string
  sigilUrl: string
  agentO11YUrl: string
  workflowEngineUrl: string
  mobileGatewayUrl: string
  slackServiceUrl: string
  sensitiveDataUrl: string
  incidentApiUrl: string
  oncallApiUrl: string
  faroEndpointUrl: string
  pdcClusterSlug: string
  pdcHostname: string
  pdcPrivateConnectivityInfo: PdcPrivateConnectivityInfo
  otlpHttpUrl: string | null
  otlpPrivateConnectivityInfo: OtlpPrivateConnectivityInfo
  authApiUrl: string
  authApiTokenSet: boolean
  hgClusterId: number
  hgClusterSlug: string
  hgClusterName: string
  hgClusterUrl: string
  hmPromClusterId: number
  hmPromClusterSlug: string
  hmPromClusterName: string
  hmPromClusterUrl: string
  hmGraphiteClusterId: number
  hmGraphiteClusterSlug: string
  hmGraphiteClusterName: string
  hmGraphiteClusterUrl: string
  hlClusterId: number
  hlClusterSlug: string
  hlClusterName: string
  hlClusterUrl: string
  amClusterId: number
  amClusterSlug: string
  amClusterName: string
  amClusterUrl: string
  htClusterId: number
  htClusterSlug: string
  htClusterName: string
  htClusterUrl: string
  hpClusterId: number
  hpClusterSlug: string
  hpClusterName: string
  hpClusterUrl: string
  agmClusterId: number
  agmClusterSlug: string
  agmClusterName: string
  agmClusterUrl: string
  assertsGraphClusterId: number
  assertsGraphClusterSlug: string
  assertsGraphClusterName: string
  assertsGraphClusterApiUrl?: (string | null) | undefined
  providerRegion: string
  isStub: boolean
  geoLocation?: number[] | undefined
  countryCode?: string | undefined
  complete: boolean
  readyForStacks: boolean
  labels?: { [x: string]: unknown } | undefined
  id: number
  status: string
  visibility: string
  slug: string
  name: string
  publicName: string
  description: string
  provider: 'aws' | 'azure' | 'fedramp-palantir' | 'gcp'
  createdAt: string
  updatedAt: string | null
  sortOrder: number
}
type FormattedApiStackRegion = FormattedApiStackRegionAnyOf | FormattedApiStackRegionAnyOf_1
type GetStackRegions_200Response = {
  items: FormattedApiStackRegion[]
  orderBy: string
  direction: 'asc' | 'desc'
  total: number
  pages: number
  pageSize: number
  page: number
}
type AuthAccessPolicyRealmsInnerLabelPoliciesInner = { selector?: string | undefined }
type AuthAccessPolicyRealmsInner = {
  type?: 'org' | 'stack' | 'system' | undefined
  identifier?: string | undefined
  labelPolicies?: AuthAccessPolicyRealmsInnerLabelPoliciesInner[] | undefined
}
type AuthAccessPolicyConditionsAllowedSubnetsInner = string | string
type AuthAccessPolicyConditions = {
  allowedSubnets?: AuthAccessPolicyConditionsAllowedSubnetsInner[] | undefined
}
type AuthAccessPolicyAttributesLokiQueryPolicy = {
  queryTimeout?: string | undefined
  maxEntriesLimitPerQuery?: number | undefined
  maxQueryLookback?: string | undefined
  maxQueryLength?: string | undefined
}
type AuthAccessPolicyAttributesPdcConfiguration = { limitedHosts?: string[] | undefined }
type AuthAccessPolicyAttributes = {
  lokiQueryPolicy?: AuthAccessPolicyAttributesLokiQueryPolicy | undefined
  allowedScopes?: string[] | undefined
  pdcConfiguration?: AuthAccessPolicyAttributesPdcConfiguration | undefined
  allowedAudiences?: string[] | undefined
}
type AuthAccessPolicy = {
  id?: string | undefined
  orgId?: string | undefined
  name: string
  displayName?: string | undefined
  source?: 'user' | 'cloud' | undefined
  scopes: (
    | 'accesspolicies:read'
    | 'accesspolicies:write'
    | 'accesspolicies:delete'
    | 'billing-metrics:read'
    | 'metrics:read'
    | 'metrics:write'
    | 'metrics:delete'
    | 'metrics:import'
    | 'logs:read'
    | 'logs:write'
    | 'logs:delete'
    | 'traces:read'
    | 'traces:write'
    | 'traces:delete'
    | 'alerts:read'
    | 'alerts:write'
    | 'rules:read'
    | 'rules:write'
  )[]
  realms: AuthAccessPolicyRealmsInner[]
  createdAt?: string | undefined
  updatedAt?: string | undefined
  conditions?: AuthAccessPolicyConditions | undefined
  attributes?: AuthAccessPolicyAttributes | undefined
  status?: 'active' | 'inactive' | undefined
}
type GetAccessPolicies_200Response = { items?: AuthAccessPolicy[] | undefined }
type PostAccessPoliciesRequestAttributesLokiQueryPolicy = {
  maxEntriesLimitPerQuery?: (number | null) | undefined
  maxQueryBytesRead?: (string | null) | undefined
  maxQueryInterval?: (string | null) | undefined
  maxQueryLength?: (string | null) | undefined
  maxQueryLookback?: (string | null) | undefined
  maxQueryTime?: (string | null) | undefined
  minimumLabelsNumber?: (number | null) | undefined
  requiredLabels?: (string[] | null) | undefined
}
type PostAccessPoliciesRequestAttributesPdcConfiguration = {
  limitedHosts?: (string[] | null) | undefined
}
type PostAccessPoliciesRequestAttributes = {
  lokiQueryPolicy?: PostAccessPoliciesRequestAttributesLokiQueryPolicy | undefined
  pdcConfiguration?: PostAccessPoliciesRequestAttributesPdcConfiguration | undefined
} | null
type PostAccessPoliciesRequestConditions = { allowedSubnets?: (string[] | null) | undefined } | null
type PostAccessPoliciesRequestRealmsInnerLabelPoliciesInner = { selector: string }
type PostAccessPoliciesRequestRealmsInner = {
  identifier: string
  labelPolicies?: PostAccessPoliciesRequestRealmsInnerLabelPoliciesInner[] | undefined
  type: 'stack' | 'org'
}
type PostAccessPoliciesRequest = {
  attributes?: PostAccessPoliciesRequestAttributes | undefined
  conditions?: PostAccessPoliciesRequestConditions | undefined
  displayName?: string | undefined
  name: string
  realms: PostAccessPoliciesRequestRealmsInner[]
  scopes: string[]
}
type RealmsInnerAnyOf = { type: 'org'; identifier: string }
type RealmsInnerAnyOf_1 = { type: 'stack'; identifier: string }
type RealmsInner = RealmsInnerAnyOf | RealmsInnerAnyOf_1
type ScopesInner = { name: string; description: string; requiresRealmType?: string | undefined }
type SetsInner = { name: string; scopes?: string[] | undefined }
type AccessPoliciesConfig = { realms: RealmsInner[]; scopes: ScopesInner[]; sets: SetsInner[] }
type PostAccessPolicyRequest = {
  attributes?: PostAccessPoliciesRequestAttributes | undefined
  conditions?: PostAccessPoliciesRequestConditions | undefined
  displayName?: string | undefined
  realms?: PostAccessPoliciesRequestRealmsInner[] | undefined
  scopes?: string[] | undefined
  status?: string | undefined
}
type Pagination = {
  pageCursor?: (string | null) | undefined
  nextPage?: (string | null) | undefined
  pageSize: number
}
type Metadata = { pagination: Pagination }
type AccessPolicyListResponse = { items: { [x: string]: unknown }[]; metadata: Metadata }
type PostTokensRequest = {
  accessPolicyId: string
  displayName?: string | undefined
  expiresAt?: string | undefined
  name: string
}
type AuthTokenWithSecret = {
  id?: string | undefined
  accessPolicyId: string
  name: string
  displayName?: string | undefined
  expiresAt?: string | undefined
  firstUsedAt?: string | undefined
  lastUsedAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  orgId?: string | undefined
  token?: string | undefined
}
type AuthToken = {
  id?: string | undefined
  accessPolicyId: string
  name: string
  displayName?: string | undefined
  expiresAt?: string | undefined
  firstUsedAt?: string | undefined
  lastUsedAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  orgId?: string | undefined
}
type PostTokenRequest = {
  displayName?: string | undefined
  expiresAt?: (string | null) | undefined
}
type StackConnectionAppPlatformV1 = { caData?: string | undefined; url: string }
type BasicPrivateConnectivityInfo = {
  alias?: string | undefined
  availabilityZoneIds?: (string[] | null) | undefined
  availabilityZones?: (string[] | null) | undefined
  domainNames?: (string[] | null) | undefined
  endpointName?: string | undefined
  privateDNS?: string | undefined
  regions?: (string[] | null) | undefined
  serviceAttachment?: string | undefined
  serviceName?: string | undefined
}
type StackConnectionPdcV1 = {
  api: BasicPrivateConnectivityInfo
  gateway: BasicPrivateConnectivityInfo
}
type InstanceConnectionTenant = {
  allowlistUrl?: string | undefined
  id: bigint
  info?: BasicPrivateConnectivityInfo | undefined
  ipAllowListCNAME: string | null
  type: string
}
type FormattedApiInstancePrivateConnectivityInfo = {
  otlp?: BasicPrivateConnectivityInfo | undefined
  pdc?: StackConnectionPdcV1 | undefined
  tenants: InstanceConnectionTenant[] | null
}
type FormattedApiInstanceConnections = {
  appPlatform?: StackConnectionAppPlatformV1 | undefined
  influxUrl?: string | undefined
  oncallApiUrl?: string | undefined
  otlpHttpUrl: string | null
  otlpMultiAZ: boolean
  privateConnectivityInfo: FormattedApiInstancePrivateConnectivityInfo
  syntheticMonitoringApiUrl?: string | undefined
}
type ErrorPayload = { code: string; message: string; requestId: string; statusCode: bigint }
type StackV1 = {
  deleteProtection: boolean
  description: string | null
  id: bigint
  labels: { [x: string]: string }
  name: string
  orgId: bigint
  orgSlug: string
  region: string
  slug: string
  url: string
}
type PaginatedResponseStackV1 = {
  items: StackV1[] | null
  page: bigint
  pageSize: bigint
  pages: bigint
  total: bigint
}
type StackCreateRequestV1 = {
  deleteProtection?: (boolean | null) | undefined
  description?: (string | null) | undefined
  labels?: { [x: string]: string } | undefined
  name: string
  org: string
  plugins?: (string[] | null) | undefined
  region: string
  slug: string
  stackType?: string | undefined
  url?: (string | null) | undefined
}
type StackCheckRequestV1 = { org?: string | undefined; url: string }
type StackCheckV1 = { slug: string; url: string }
type StackUpdateRequestV1 = {
  deleteProtection?: (boolean | null) | undefined
  description?: (string | null) | undefined
  labels?: { [x: string]: string } | undefined
  name?: (string | null) | undefined
  slug?: (string | null) | undefined
  url?: (string | null) | undefined
}
type StackConnectionOtlpV1 = {
  multiAZ: boolean
  privateConnectivityInfo?: BasicPrivateConnectivityInfo | undefined
  url?: string | undefined
}
type StackConnectionServicesV1 = {
  influxUrl?: string | undefined
  oncallApiUrl?: string | undefined
  syntheticMonitoringApiUrl?: string | undefined
}
type StackConnectionTenantV1 = {
  allowlistUrl?: string | undefined
  id: bigint
  privateConnectivityInfo?: BasicPrivateConnectivityInfo | undefined
  type: string
  url?: string | undefined
}
type StackConnectionsV1 = {
  appPlatform?: StackConnectionAppPlatformV1 | undefined
  otlp?: StackConnectionOtlpV1 | undefined
  pdc?: StackConnectionPdcV1 | undefined
  services?: StackConnectionServicesV1 | undefined
  tenants: StackConnectionTenantV1[] | null
}
type StackCheckReadinessV1 = { ready: boolean }
type InstanceUser = {
  createdAt: string
  email: string
  id: bigint
  isServiceAccount: boolean
  lastSeenAt: string | null
  login: string
  name: string
  role: string
  updatedAt: string
}
type InstanceUsersResponse = { items: InstanceUser[] | null }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/instances': {
      $get:
        | {
            input: {
              query: {
                cluster?: string | undefined
                clusterIdIn?: number[] | undefined
                cursor?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                hosted?: boolean | undefined
                id?: string | undefined
                idIn?: string | undefined
                idMin?: number | undefined
                includeLabels?: boolean | undefined
                includePromCurrentActiveSeries?: boolean | undefined
                labels?: string[] | undefined
                name?: string | undefined
                nameIn?: string | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                orgId?: string | undefined
                orgIdIn?: string | undefined
                orgSlug?: string | undefined
                orgSlugIn?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                plan?: string | undefined
                planIn?: string | undefined
                planNot?: string | undefined
                region?: string | undefined
                regionIn?: string[] | undefined
                slug?: string | undefined
                slugIn?: string | undefined
                status?: string | undefined
                updatedOrCreatedAtMin?: string | undefined
                url?: string | undefined
                version?: string | undefined
                versionIn?: string[] | undefined
                versionNot?: string | undefined
                versionNotIn?: string[] | undefined
              }
            }
            output: GetInstances_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cluster?: string | undefined
                clusterIdIn?: number[] | undefined
                cursor?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                hosted?: boolean | undefined
                id?: string | undefined
                idIn?: string | undefined
                idMin?: number | undefined
                includeLabels?: boolean | undefined
                includePromCurrentActiveSeries?: boolean | undefined
                labels?: string[] | undefined
                name?: string | undefined
                nameIn?: string | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                orgId?: string | undefined
                orgIdIn?: string | undefined
                orgSlug?: string | undefined
                orgSlugIn?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                plan?: string | undefined
                planIn?: string | undefined
                planNot?: string | undefined
                region?: string | undefined
                regionIn?: string[] | undefined
                slug?: string | undefined
                slugIn?: string | undefined
                status?: string | undefined
                updatedOrCreatedAtMin?: string | undefined
                url?: string | undefined
                version?: string | undefined
                versionIn?: string[] | undefined
                versionNot?: string | undefined
                versionNotIn?: string[] | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cluster?: string | undefined
                clusterIdIn?: number[] | undefined
                cursor?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                hosted?: boolean | undefined
                id?: string | undefined
                idIn?: string | undefined
                idMin?: number | undefined
                includeLabels?: boolean | undefined
                includePromCurrentActiveSeries?: boolean | undefined
                labels?: string[] | undefined
                name?: string | undefined
                nameIn?: string | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                orgId?: string | undefined
                orgIdIn?: string | undefined
                orgSlug?: string | undefined
                orgSlugIn?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                plan?: string | undefined
                planIn?: string | undefined
                planNot?: string | undefined
                region?: string | undefined
                regionIn?: string[] | undefined
                slug?: string | undefined
                slugIn?: string | undefined
                status?: string | undefined
                updatedOrCreatedAtMin?: string | undefined
                url?: string | undefined
                version?: string | undefined
                versionIn?: string[] | undefined
                versionNot?: string | undefined
                versionNotIn?: string[] | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cluster?: string | undefined
                clusterIdIn?: number[] | undefined
                cursor?: number | undefined
                direction?: 'asc' | 'desc' | undefined
                hosted?: boolean | undefined
                id?: string | undefined
                idIn?: string | undefined
                idMin?: number | undefined
                includeLabels?: boolean | undefined
                includePromCurrentActiveSeries?: boolean | undefined
                labels?: string[] | undefined
                name?: string | undefined
                nameIn?: string | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                orgId?: string | undefined
                orgIdIn?: string | undefined
                orgSlug?: string | undefined
                orgSlugIn?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                plan?: string | undefined
                planIn?: string | undefined
                planNot?: string | undefined
                region?: string | undefined
                regionIn?: string[] | undefined
                slug?: string | undefined
                slugIn?: string | undefined
                status?: string | undefined
                updatedOrCreatedAtMin?: string | undefined
                url?: string | undefined
                version?: string | undefined
                versionIn?: string[] | undefined
                versionNot?: string | undefined
                versionNotIn?: string[] | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { header: { 'x-request-id': string } } & { json: PostInstancesRequest }
            output: FormattedApiInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: PostInstancesRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: PostInstancesRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: PostInstancesRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: PostInstancesRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId': {
      $delete:
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: FormattedApiInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { instanceId: string } } & { query: { config?: boolean | undefined } }
            output: FormattedApiInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { query: { config?: boolean | undefined } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & { query: { config?: boolean | undefined } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & { query: { config?: boolean | undefined } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { query: { config?: boolean | undefined } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: FormattedApiInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceRequest
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/api/serviceaccounts': {
      $post:
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: GrafanaServiceAccountDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstanceServiceAccountsRequest
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/api/serviceaccounts/search': {
      $get:
        | {
            input: { param: { instanceId: string } } & {
              query: {
                page?: number | undefined
                perpage?: number | undefined
                query?: string | undefined
              }
            }
            output: ServiceAccountSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                page?: number | undefined
                perpage?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                page?: number | undefined
                perpage?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                page?: number | undefined
                perpage?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                page?: number | undefined
                perpage?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId': {
      $delete:
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: GrafanaServiceAccountDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens': {
      $get:
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: GrafanaTokenDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: GrafanaNewApiKeyResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstanceServiceAccountTokensRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens/:tokenId': {
      $delete:
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string; serviceAccountId: string; tokenId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/plugins': {
      $get:
        | {
            input: { param: { instanceId: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                orderBy?: 'instanceId' | 'pluginId' | 'pluginSlug' | 'pluginName' | undefined
              }
            }
            output: GetInstancePlugins_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                orderBy?: 'instanceId' | 'pluginId' | 'pluginSlug' | 'pluginName' | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                orderBy?: 'instanceId' | 'pluginId' | 'pluginSlug' | 'pluginName' | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                orderBy?: 'instanceId' | 'pluginId' | 'pluginSlug' | 'pluginName' | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                orderBy?: 'instanceId' | 'pluginId' | 'pluginSlug' | 'pluginName' | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: FormattedApiInstancePlugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string } } & { header: { 'x-request-id': string } } & {
              json: PostInstancePluginsRequest
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/plugins/:pluginSlugOrId': {
      $delete:
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: FormattedApiInstancePlugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              query: { noRestart?: boolean | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } }
            output: FormattedApiInstancePlugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: FormattedApiInstancePlugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { instanceId: string; pluginSlugOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostInstancePluginRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/readiness': {
      $get:
        | {
            input: { param: { instanceId: string } }
            output: FormattedApiInstanceReadiness
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/org-stack-regions': {
      $get:
        | {
            input: { query: { orgId?: number | undefined; regionSlugOrId?: string | undefined } }
            output: GetOrgStackRegions_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { orgId?: number | undefined; regionSlugOrId?: string | undefined } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { orgId?: number | undefined; regionSlugOrId?: string | undefined } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { orgId?: number | undefined; regionSlugOrId?: string | undefined } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:orgSlugOrId/billed-usage': {
      $get:
        | {
            input: { param: { orgSlugOrId: string } } & {
              query: { month: number; year: number; format?: 'csv' | undefined }
            }
            output: GetOrgBilledUsage_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgSlugOrId: string } } & {
              query: { month: number; year: number; format?: 'csv' | undefined }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgSlugOrId: string } } & {
              query: { month: number; year: number; format?: 'csv' | undefined }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgSlugOrId: string } } & {
              query: { month: number; year: number; format?: 'csv' | undefined }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgSlugOrId: string } } & {
              query: { month: number; year: number; format?: 'csv' | undefined }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:orgSlugOrId/billed-usage-history': {
      $get:
        | {
            input: { param: { orgSlugOrId: string } }
            output: OrgBilledUsageHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgSlugOrId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgSlugOrId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgSlugOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgSlugOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:orgSlug/instances': {
      $get:
        | {
            input: { param: { orgSlug: string } } & {
              query: {
                cluster?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                name?: string | undefined
                nameIn?: string[] | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                plan?:
                  | 'free'
                  | 'free-trial'
                  | 'gcloud'
                  | 'enterprise'
                  | 'advanced'
                  | 'payg'
                  | 'fedramp'
                  | 'trial'
                  | 'logsdemo'
                  | 'starter'
                  | 'starter-prom'
                  | 'basic'
                  | 'basic-prom'
                  | 'bundled'
                  | 'fog'
                  | undefined
                planIn?:
                  | (
                      | 'free'
                      | 'free-trial'
                      | 'gcloud'
                      | 'enterprise'
                      | 'advanced'
                      | 'payg'
                      | 'fedramp'
                      | 'trial'
                      | 'logsdemo'
                      | 'starter'
                      | 'starter-prom'
                      | 'basic'
                      | 'basic-prom'
                      | 'bundled'
                      | 'fog'
                    )[]
                  | undefined
                planNot?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
                url?: string | undefined
                urlIn?: string[] | undefined
              }
            }
            output: GetInstances_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgSlug: string } } & {
              query: {
                cluster?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                name?: string | undefined
                nameIn?: string[] | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                plan?:
                  | 'free'
                  | 'free-trial'
                  | 'gcloud'
                  | 'enterprise'
                  | 'advanced'
                  | 'payg'
                  | 'fedramp'
                  | 'trial'
                  | 'logsdemo'
                  | 'starter'
                  | 'starter-prom'
                  | 'basic'
                  | 'basic-prom'
                  | 'bundled'
                  | 'fog'
                  | undefined
                planIn?:
                  | (
                      | 'free'
                      | 'free-trial'
                      | 'gcloud'
                      | 'enterprise'
                      | 'advanced'
                      | 'payg'
                      | 'fedramp'
                      | 'trial'
                      | 'logsdemo'
                      | 'starter'
                      | 'starter-prom'
                      | 'basic'
                      | 'basic-prom'
                      | 'bundled'
                      | 'fog'
                    )[]
                  | undefined
                planNot?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
                url?: string | undefined
                urlIn?: string[] | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgSlug: string } } & {
              query: {
                cluster?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                name?: string | undefined
                nameIn?: string[] | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                plan?:
                  | 'free'
                  | 'free-trial'
                  | 'gcloud'
                  | 'enterprise'
                  | 'advanced'
                  | 'payg'
                  | 'fedramp'
                  | 'trial'
                  | 'logsdemo'
                  | 'starter'
                  | 'starter-prom'
                  | 'basic'
                  | 'basic-prom'
                  | 'bundled'
                  | 'fog'
                  | undefined
                planIn?:
                  | (
                      | 'free'
                      | 'free-trial'
                      | 'gcloud'
                      | 'enterprise'
                      | 'advanced'
                      | 'payg'
                      | 'fedramp'
                      | 'trial'
                      | 'logsdemo'
                      | 'starter'
                      | 'starter-prom'
                      | 'basic'
                      | 'basic-prom'
                      | 'bundled'
                      | 'fog'
                    )[]
                  | undefined
                planNot?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
                url?: string | undefined
                urlIn?: string[] | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgSlug: string } } & {
              query: {
                cluster?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                name?: string | undefined
                nameIn?: string[] | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                plan?:
                  | 'free'
                  | 'free-trial'
                  | 'gcloud'
                  | 'enterprise'
                  | 'advanced'
                  | 'payg'
                  | 'fedramp'
                  | 'trial'
                  | 'logsdemo'
                  | 'starter'
                  | 'starter-prom'
                  | 'basic'
                  | 'basic-prom'
                  | 'bundled'
                  | 'fog'
                  | undefined
                planIn?:
                  | (
                      | 'free'
                      | 'free-trial'
                      | 'gcloud'
                      | 'enterprise'
                      | 'advanced'
                      | 'payg'
                      | 'fedramp'
                      | 'trial'
                      | 'logsdemo'
                      | 'starter'
                      | 'starter-prom'
                      | 'basic'
                      | 'basic-prom'
                      | 'bundled'
                      | 'fog'
                    )[]
                  | undefined
                planNot?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
                url?: string | undefined
                urlIn?: string[] | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgSlug: string } } & {
              query: {
                cluster?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                name?: string | undefined
                nameIn?: string[] | undefined
                orderBy?:
                  | 'id'
                  | 'name'
                  | 'version'
                  | 'createdAt'
                  | 'runningVersion'
                  | 'billingActiveUsers'
                  | 'billingGrafanaActiveUsers'
                  | 'billingOnCallActiveUsers'
                  | 'currentActiveUsers'
                  | 'currentActiveAdminUsers'
                  | 'currentActiveEditorUsers'
                  | 'currentActiveViewerUsers'
                  | undefined
                plan?:
                  | 'free'
                  | 'free-trial'
                  | 'gcloud'
                  | 'enterprise'
                  | 'advanced'
                  | 'payg'
                  | 'fedramp'
                  | 'trial'
                  | 'logsdemo'
                  | 'starter'
                  | 'starter-prom'
                  | 'basic'
                  | 'basic-prom'
                  | 'bundled'
                  | 'fog'
                  | undefined
                planIn?:
                  | (
                      | 'free'
                      | 'free-trial'
                      | 'gcloud'
                      | 'enterprise'
                      | 'advanced'
                      | 'payg'
                      | 'fedramp'
                      | 'trial'
                      | 'logsdemo'
                      | 'starter'
                      | 'starter-prom'
                      | 'basic'
                      | 'basic-prom'
                      | 'bundled'
                      | 'fog'
                    )[]
                  | undefined
                planNot?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
                url?: string | undefined
                urlIn?: string[] | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:slugOrId': {
      $get:
        | {
            input: { param: { slugOrId: string } }
            output: FormattedApiOrgPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:slugOrId/check-visibility': {
      $get:
        | { input: { param: { slugOrId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/orgs/:slugOrId/members': {
      $get:
        | {
            input: { param: { slugOrId: string } } & {
              query: {
                billing?: string | undefined
                direction?: string | undefined
                orderBy?: string | undefined
                privacy?: string | undefined
                privacyIn?: string | undefined
              }
            }
            output: OrgMemberListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string } } & {
              query: {
                billing?: string | undefined
                direction?: string | undefined
                orderBy?: string | undefined
                privacy?: string | undefined
                privacyIn?: string | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string } } & {
              query: {
                billing?: string | undefined
                direction?: string | undefined
                orderBy?: string | undefined
                privacy?: string | undefined
                privacyIn?: string | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string } } & {
              query: {
                billing?: string | undefined
                direction?: string | undefined
                orderBy?: string | undefined
                privacy?: string | undefined
                privacyIn?: string | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } } & {
              query: {
                billing?: string | undefined
                direction?: string | undefined
                orderBy?: string | undefined
                privacy?: string | undefined
                privacyIn?: string | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: FormattedOrgMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: PostOrgMembersRequest
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/orgs/:slugOrId/members/:usernameOrId': {
      $delete:
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { slugOrId: string; usernameOrId: string } }
            output: FormattedOrgMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: FormattedOrgMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slugOrId: string; usernameOrId: string } } & {
              header: { 'x-request-id': string }
            } & { json: PostOrgMemberRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/orgs/:slugOrId/settings': {
      $get:
        | {
            input: { param: { slugOrId: string } }
            output: FormattedApiOrgSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: FormattedApiOrgSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slugOrId: string } } & { header: { 'x-request-id': string } } & {
              json: UpdateOrgSettingsRequest
            }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/plugins-marketplace/licenses/renew': {
      $post:
        | {
            input: { header: { 'x-request-id': string } } & { json: RenewMarketplaceLicenseRequest }
            output: MarketplaceLicenseRenewalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: RenewMarketplaceLicenseRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: RenewMarketplaceLicenseRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'x-request-id': string } } & { json: RenewMarketplaceLicenseRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/plugins/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & { query: { version?: string | undefined } }
            output: FormattedApiPlugin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { query: { version?: string | undefined } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { query: { version?: string | undefined } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/stack-regions': {
      $get:
        | {
            input: {
              query: {
                countryCode?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                labels?: string[] | undefined
                orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'sortOrder' | undefined
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
                providerRegion?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
              }
            }
            output: GetStackRegions_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                countryCode?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                labels?: string[] | undefined
                orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'sortOrder' | undefined
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
                providerRegion?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                countryCode?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                labels?: string[] | undefined
                orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'sortOrder' | undefined
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
                providerRegion?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                countryCode?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                id?: number | undefined
                idIn?: number[] | undefined
                labels?: string[] | undefined
                orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'sortOrder' | undefined
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
                providerRegion?: string | undefined
                slug?: string | undefined
                slugIn?: string[] | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/stack-regions/closest': {
      $get:
        | {
            input: {
              query: {
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
              }
            }
            output: FormattedApiStackRegion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orgId?: number | undefined
                provider?: 'aws' | 'gcp' | 'azure' | 'fedramp-palantir' | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/accesspolicies': {
      $get:
        | {
            input: {
              query: {
                region: string
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
                realmIdentifier?: string | undefined
                realmType?: string | undefined
                status?: string | undefined
              }
            }
            output: GetAccessPolicies_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region: string
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
                realmIdentifier?: string | undefined
                realmType?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                region: string
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
                realmIdentifier?: string | undefined
                realmType?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                region: string
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
                realmIdentifier?: string | undefined
                realmType?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostAccessPoliciesRequest }
            output: AuthAccessPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostAccessPoliciesRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostAccessPoliciesRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostAccessPoliciesRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostAccessPoliciesRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/accesspolicies/config': {
      $get:
        | {
            input: {
              query: {
                region: string
                includeOrgMetadata?: boolean | undefined
                orgId?: number | undefined
              }
            }
            output: AccessPoliciesConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region: string
                includeOrgMetadata?: boolean | undefined
                orgId?: number | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/accesspolicies/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: AuthAccessPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: AuthAccessPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostAccessPolicyRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokens': {
      $get:
        | {
            input: {
              query: {
                region: string
                accessPolicyId?: string | undefined
                accessPolicyIds?: string | undefined
                accessPolicyName?: string | undefined
                accessPolicyRealmIdentifier?: string | undefined
                accessPolicyRealmType?: string | undefined
                accessPolicyStatus?: string | undefined
                expiresAfter?: string | undefined
                expiresBefore?: string | undefined
                includeExpired?: boolean | undefined
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
              }
            }
            output: AccessPolicyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region: string
                accessPolicyId?: string | undefined
                accessPolicyIds?: string | undefined
                accessPolicyName?: string | undefined
                accessPolicyRealmIdentifier?: string | undefined
                accessPolicyRealmType?: string | undefined
                accessPolicyStatus?: string | undefined
                expiresAfter?: string | undefined
                expiresBefore?: string | undefined
                includeExpired?: boolean | undefined
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                region: string
                accessPolicyId?: string | undefined
                accessPolicyIds?: string | undefined
                accessPolicyName?: string | undefined
                accessPolicyRealmIdentifier?: string | undefined
                accessPolicyRealmType?: string | undefined
                accessPolicyStatus?: string | undefined
                expiresAfter?: string | undefined
                expiresBefore?: string | undefined
                includeExpired?: boolean | undefined
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                region: string
                accessPolicyId?: string | undefined
                accessPolicyIds?: string | undefined
                accessPolicyName?: string | undefined
                accessPolicyRealmIdentifier?: string | undefined
                accessPolicyRealmType?: string | undefined
                accessPolicyStatus?: string | undefined
                expiresAfter?: string | undefined
                expiresBefore?: string | undefined
                includeExpired?: boolean | undefined
                name?: string | undefined
                orgId?: number | undefined
                pageCursor?: string | undefined
                pageSize?: number | undefined
              }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostTokensRequest }
            output: AuthTokenWithSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostTokensRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostTokensRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostTokensRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { region: string; orgId?: number | undefined } } & {
              header: { 'x-request-id': string }
            } & { json: PostTokensRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokens/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: AuthToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: AuthToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: ErrorInvalidCredentials
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: ErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: ErrorConflict
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              query: { region: string; orgId?: number | undefined }
            } & { header: { 'x-request-id': string } } & { json: PostTokenRequest }
            output: ErrorServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/instances/:instanceId/connections': {
      $get:
        | {
            input: { param: { instanceId: string } }
            output: FormattedApiInstanceConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stacks': {
      $get:
        | {
            input: { query: { org: string; page: bigint; pageSize: bigint } }
            output: PaginatedResponseStackV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org: string; page: bigint; pageSize: bigint } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: StackCreateRequestV1 }
            output: StackV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StackCreateRequestV1 }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stacks/checkUrl': {
      $post:
        | {
            input: { json: StackCheckRequestV1 }
            output: StackCheckV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StackCheckRequestV1 }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stacks/:idOrSlug': {
      $delete:
        | {
            input: { param: { idOrSlug: string } }
            output: StackV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrSlug: string } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { idOrSlug: string } }
            output: StackV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrSlug: string } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { idOrSlug: string } } & { json: StackUpdateRequestV1 }
            output: StackV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrSlug: string } } & { json: StackUpdateRequestV1 }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stacks/:idOrSlug/connections': {
      $get:
        | {
            input: { param: { idOrSlug: string } }
            output: StackConnectionsV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrSlug: string } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/stacks/:idOrSlug/readiness': {
      $get:
        | {
            input: { param: { idOrSlug: string } }
            output: StackCheckReadinessV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idOrSlug: string } }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/instances/:instanceId/users': {
      $get:
        | {
            input: { param: { instanceId: string } } & {
              query: {
                active?: string | undefined
                activeSince?: string | undefined
                includeInternal?: string | undefined
              }
            }
            output: InstanceUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: string } } & {
              query: {
                active?: string | undefined
                activeSince?: string | undefined
                includeInternal?: string | undefined
              }
            }
            output: ErrorPayload
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
