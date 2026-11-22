type OnboardingStatusSchema =
  | { status: 'onboarding-started' | 'sdk-connected' | 'onboarded' }
  | { status: 'first-flag-created'; feature: string }
type ProjectSchema = {
  id: string
  name: string
  description?: (string | null) | undefined
  health?: number | undefined
  technicalDebt?: number | undefined
  featureCount?: number | undefined
  staleFeatureCount?: number | undefined
  potentiallyStaleFeatureCount?: number | undefined
  memberCount?: number | undefined
  cleanupCount?: number | undefined
  onboardingStatus?: OnboardingStatusSchema | undefined
  createdAt?: string | undefined
  updatedAt?: (string | null) | undefined
  lastUpdatedAt?: (string | null) | undefined
  archivedAt?: (string | null) | undefined
  favorite?: boolean | undefined
  mode?: 'open' | 'protected' | 'private' | undefined
  defaultStickiness?: string | undefined
  avgTimeToProduction?: number | undefined
  lastReportedFlagUsage?: (string | null) | undefined
  owners?:
    | (
        | {
            ownerType: 'user'
            name: string
            imageUrl?: (string | null) | undefined
            email?: (string | null) | undefined
          }
        | { ownerType: 'group'; name: string }
      )[]
    | { ownerType: 'system' }[]
    | undefined
}
type ProjectsSchema = { version: number; projects: ProjectSchema[] }
type CreateProjectSchema = {
  id?: string | undefined
  name: string
  description?: (string | null) | undefined
  mode?: 'open' | 'protected' | 'private' | undefined
  defaultStickiness?: string | undefined
  environments?: string[] | undefined
  changeRequestEnvironments?: { name: string; requiredApprovals?: number | undefined }[] | undefined
}
type ProjectCreatedSchema = {
  id: string
  name: string
  description?: (string | null) | undefined
  featureLimit?: (number | null) | undefined
  mode?: 'open' | 'protected' | 'private' | undefined
  defaultStickiness?: string | undefined
  environments?: string[] | undefined
  changeRequestEnvironments?: { name: string; requiredApprovals: number }[] | undefined
}
type ValidateProjectSchema = { id: string }
type UpdateProjectSchema = {
  name: string
  description?: string | undefined
  mode?: 'open' | 'protected' | 'private' | undefined
  defaultStickiness?: string | undefined
}
type CreateFeatureNamingPatternSchema = {
  pattern: string | null
  example?: (string | null) | undefined
  description?: (string | null) | undefined
}
type ProjectLinkTemplateSchema = { title?: (string | null) | undefined; urlTemplate: string }
type UpdateProjectEnterpriseSettingsSchema = {
  mode?: 'open' | 'protected' | 'private' | undefined
  featureNaming?: CreateFeatureNamingPatternSchema | undefined
  linkTemplates?: ProjectLinkTemplateSchema[] | undefined
}
type UserSchema = {
  id: number
  name?: (string | null) | undefined
  email?: string | undefined
  username?: (string | null) | undefined
  imageUrl?: string | undefined
  inviteLink?: string | undefined
  loginAttempts?: number | undefined
  emailSent?: boolean | undefined
  rootRole?: number | undefined
  seenAt?: (string | null) | undefined
  createdAt?: string | undefined
  accountType?: 'User' | 'Service Account' | undefined
  permissions?: string[] | undefined
  scimId?: (string | null) | undefined
  seatType?: (string | null) | undefined
  companyRole?: (string | null) | undefined
  productUpdatesEmailConsent?: (boolean | null) | undefined
  activeSessions?: (number | null) | undefined
  deletedSessions?: number | undefined
}
type GroupUserModelSchema = {
  joinedAt?: string | undefined
  createdBy?: (string | null) | undefined
  user: UserSchema
}
type GroupWithProjectRoleSchema = {
  name?: string | undefined
  id: number
  addedAt?: string | undefined
  roleId?: number | undefined
  roles?: number[] | undefined
  description?: (string | null) | undefined
  mappingsSSO?: string[] | undefined
  rootRole?: (number | null) | undefined
  createdBy?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  users?: GroupUserModelSchema[] | undefined
  scimId?: (string | null) | undefined
}
type UserWithProjectRoleSchema = {
  isAPI?: boolean | undefined
  name?: string | undefined
  email?: (string | null) | undefined
  id: number
  imageUrl?: (string | null) | undefined
  addedAt?: string | undefined
  roleId?: number | undefined
  roles?: number[] | undefined
}
type RoleSchema = {
  id: number
  type: string
  name: string
  description?: string | undefined
  project?: (string | null) | undefined
}
type ProjectAccessSchema = {
  groups: GroupWithProjectRoleSchema[]
  users: UserWithProjectRoleSchema[]
  roles: RoleSchema[]
}
type ProjectAccessConfigurationSchema = {
  roles: { id?: number | undefined; groups?: number[] | undefined; users?: number[] | undefined }[]
}
type ProjectAddAccessSchema = { roles: number[]; groups: number[]; users: number[] }
type ProjectRoleSchema = {
  project: string
  role?: number | undefined
  userCount?: number | undefined
  serviceAccountCount?: number | undefined
  groupCount?: number | undefined
}
type ProjectRoleUsageSchema = { projects?: ProjectRoleSchema[] | undefined }
type ChangeProjectSchema = { newProjectId: string }
type AdminPermissionSchema = {
  id: number
  name: string
  displayName: string
  type: string
  environment?: (string | null) | undefined
}
type AdminPermissionsSchema = {
  permissions: {
    root?: AdminPermissionSchema[] | undefined
    project: AdminPermissionSchema[]
    environments: { name: string; permissions: AdminPermissionSchema[] }[]
  }
  version: 1 | 2
}
type RequestsPerSecondSchema = {
  status?: 'success' | 'failure' | undefined
  data?:
    | {
        resultType?: 'matrix' | 'vector' | 'scalar' | 'string' | undefined
        result?:
          | {
              metric?: { appName?: string | undefined; endpoint?: string | undefined } | undefined
              values?: (string | number)[][] | undefined
            }[]
          | undefined
      }
    | undefined
}
type RequestsPerSecondSegmentedSchema = {
  clientMetrics?: RequestsPerSecondSchema | undefined
  adminMetrics?: RequestsPerSecondSchema | undefined
}
type TrafficUsageDataSegmentedCombinedSchema = {
  grouping: 'monthly' | 'daily'
  dateRange: { from: string; to: string }
  apiData: {
    apiPath: string
    dataPoints: { period: string; trafficTypes: { group: string; count: number }[] }[]
  }[]
}
type MeteredConnectionsSchema = {
  grouping: 'monthly' | 'daily'
  dateRange: { from: string; to: string }
  apiData: { meteredGroup: string; dataPoints: { period: string; connections: number }[] }[]
}
type MeteredRequestsSchema = {
  grouping: 'monthly' | 'daily'
  dateRange: { from: string; to: string }
  apiData: { meteredGroup: string; dataPoints: { period: string; requests: number }[] }[]
}
type NotificationsSchema = {
  id: number
  message: string
  link: string
  notificationType: 'change-request' | 'toggle'
  createdBy: { username?: (string | null) | undefined; imageUrl?: (string | null) | undefined }
  createdAt: string
  readAt: string | null
}[]
type MarkNotificationsAsReadSchema = { notifications: number[] }
type LifecycleTrendsSchema = {
  lifecycleTrends: {
    develop: {
      totalFlags: number
      medianDaysInCurrentStage: number
      medianDaysHistorically: number
      categories: {
        experimental: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        release: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        permanent: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
      }
    }
    production: {
      totalFlags: number
      medianDaysInCurrentStage: number
      medianDaysHistorically: number
      categories: {
        experimental: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        release: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        permanent: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
      }
    }
    cleanup: {
      totalFlags: number
      medianDaysInCurrentStage: number
      medianDaysHistorically: number
      categories: {
        experimental: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        release: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
        permanent: { flagsOlderThanWeek: number; newFlagsThisWeek: number }
      }
    }
  }
}
type InstanceInsightsSchema = {
  userTrends: { date: string; total: number; active: number; inactive: number }[]
  flagTrends: {
    date: string
    total: number
    active: number
    stale: number
    potentiallyStale: number
  }[]
  projectFlagTrends: {
    week: string
    project: string
    health: number
    technicalDebt?: number | undefined
    timeToProduction?: number | undefined
    date: string
    total: number
    active: number
    stale: number
    potentiallyStale: number
    users?: number | undefined
  }[]
  metricsSummaryTrends: {
    week: string
    date: string
    project: string
    totalRequests: number
    totalYes: number
    totalNo: number
    totalApps: number
    totalFlags: number
    totalEnvironments: number
  }[]
  environmentTypeTrends: {
    date: string
    week: string
    environmentType: string
    totalUpdates: number
  }[]
  lifecycleTrends: { week: string; date: string; newProductionFlags: number; project: string }[]
  creationArchiveTrends: {
    week: string
    date: string
    project: string
    createdFlags: { [x: string]: number }
    archivedFlags: number
  }[]
}
type LicensedUserSchema = { date: string; count: number }
type LicensedUsersSchema = {
  seatCount: number
  licensedUsers: { history: LicensedUserSchema[]; current: number }
}
type EdgeProcessMetricsSchema = { cpuUsage: number; memoryUsage: number }
type EdgeLatencyMetricsSchema = { avg: number; count: number; p99: number }
type EdgeInstanceTrafficSchema = {
  get: { [x: string]: EdgeLatencyMetricsSchema }
  post: { [x: string]: EdgeLatencyMetricsSchema }
  accessDenied: { [x: string]: EdgeLatencyMetricsSchema }
  cachedResponses: { [x: string]: EdgeLatencyMetricsSchema }
}
type EdgeUpstreamLatencySchema = {
  features: EdgeLatencyMetricsSchema
  metrics: EdgeLatencyMetricsSchema
  edge: EdgeLatencyMetricsSchema
}
type EdgeEndpointTrafficSchema = {
  requests200?: number | undefined
  requests304?: number | undefined
}
type EdgeRequestStatsSchema = {
  '/api/client/features'?: EdgeEndpointTrafficSchema | undefined
  '/api/frontend'?: EdgeEndpointTrafficSchema | undefined
  '/api/proxy'?: EdgeEndpointTrafficSchema | undefined
  '/api/client/metrics'?: EdgeEndpointTrafficSchema | undefined
  '/api/client/metrics/bulk'?: EdgeEndpointTrafficSchema | undefined
  '/api/client/metrics/edge'?: EdgeEndpointTrafficSchema | undefined
}
type ConsumptionDataPointSchema = { interval: number[]; requests: number }
type MeteredGroupConsumptionSchema = {
  meteredGroup: string
  dataPoints: ConsumptionDataPointSchema[]
}
type ConnectionConsumptionSchema = {
  features: MeteredGroupConsumptionSchema[]
  metrics: MeteredGroupConsumptionSchema[]
}
type RequestConsumptionSchema = { meteredGroup: string; requests: number }[]
type EdgeApiKeyRevisionIdSchema = {
  environment: string
  projects: string[]
  revisionId: number
  lastUpdated?: string | undefined
}
type EdgeInstanceDataSchema = {
  identifier: string
  appName: string
  region?: (string | null) | undefined
  edgeVersion: string
  processMetrics?: EdgeProcessMetricsSchema | undefined
  started: string
  traffic: EdgeInstanceTrafficSchema
  latencyUpstream: EdgeUpstreamLatencySchema
  enricherMetrics?:
    | ({ traffic: EdgeLatencyMetricsSchema; errors: number; timeouts: number } | null)
    | undefined
  connectedStreamingClients: number
  connectedEdges: EdgeInstanceDataSchema[]
  requestsSinceLastReport?: EdgeRequestStatsSchema | undefined
  connectionConsumptionSinceLastReport?: ConnectionConsumptionSchema | undefined
  requestConsumptionSinceLastReport?: RequestConsumptionSchema | undefined
  hosting?: 'hosted' | 'self-hosted' | 'enterprise-self-hosted' | undefined
  apiKeyRevisionIds?: (EdgeApiKeyRevisionIdSchema[] | null) | undefined
}
type EdgeLicenseStateSchema = { edgeLicenseState: 'Valid' | 'Invalid' | 'Expired' }
type ReadyCheckSchema = { health: 'GOOD' }
type HealthCheckSchema = { health: 'GOOD' | 'BAD' }
type CreateInvitedUserSchema = {
  username?: string | undefined
  email: string
  name: string
  password: string
}
type LoginSchema = { username: string; password: string }
type TokenUserSchema = {
  id: number
  name?: string | undefined
  email: string
  token: string
  createdBy: string | null
  role: RoleSchema
}
type ChangePasswordSchema = { token: string; password: string }
type ValidatePasswordSchema = { password: string }
type EmailSchema = { email: string }
type ValidateFeatureSchema = { name: string; projectId?: (string | null) | undefined }
type TagSchema = { value: string; type: string; color?: (string | null) | undefined }
type TagsSchema = { version: number; tags: TagSchema[] }
type UpdateTagsSchema = { addedTags: TagSchema[]; removedTags: TagSchema[] }
type FeatureTypeSchema = {
  id: string
  name: string
  description: string
  lifetimeDays: number | null
}
type FeatureTypesSchema = { version: 1; types: FeatureTypeSchema[] }
type UpdateFeatureTypeLifetimeSchema = { lifetimeDays: number | null }
type StrategySchema = {
  title?: (string | null) | undefined
  name: string
  displayName: string | null
  description: string | null
  editable: boolean
  deprecated: boolean
  parameters: {
    name?: string | undefined
    type?: string | undefined
    description?: string | undefined
    required?: boolean | undefined
  }[]
}
type StrategiesSchema = { version: 1; strategies: StrategySchema[] }
type CreateStrategySchema = {
  name: string
  title?: string | undefined
  description?: string | undefined
  editable?: boolean | undefined
  deprecated?: boolean | undefined
  parameters: {
    name: string
    type: 'string' | 'percentage' | 'list' | 'number' | 'boolean'
    description?: string | undefined
    required?: boolean | undefined
  }[]
}
type UpdateStrategySchema = {
  description?: string | undefined
  parameters: {
    name: string
    type: 'string' | 'percentage' | 'list' | 'number' | 'boolean'
    description?: string | undefined
    required?: boolean | undefined
  }[]
}
type EventSchema = {
  id: number
  createdAt: string
  type:
    | 'application-created'
    | 'feature-created'
    | 'feature-deleted'
    | 'feature-updated'
    | 'feature-metadata-updated'
    | 'feature-variants-updated'
    | 'feature-environment-variants-updated'
    | 'feature-project-change'
    | 'feature-archived'
    | 'feature-revived'
    | 'feature-import'
    | 'feature-tagged'
    | 'feature-tag-import'
    | 'feature-strategy-update'
    | 'feature-strategy-add'
    | 'feature-strategy-remove'
    | 'feature-type-updated'
    | 'feature-completed'
    | 'feature-uncompleted'
    | 'feature-link-added'
    | 'feature-link-removed'
    | 'feature-link-updated'
    | 'feature-payload-schema-updated'
    | 'feature-payload-schema-deleted'
    | 'strategy-order-changed'
    | 'feature-untagged'
    | 'feature-stale-on'
    | 'feature-stale-off'
    | 'drop-features'
    | 'feature-environment-enabled'
    | 'feature-environment-disabled'
    | 'strategy-created'
    | 'strategy-deleted'
    | 'strategy-deprecated'
    | 'strategy-reactivated'
    | 'strategy-updated'
    | 'strategy-import'
    | 'drop-strategies'
    | 'context-field-created'
    | 'context-field-updated'
    | 'context-field-deleted'
    | 'project-access-added'
    | 'project-access-user-roles-updated'
    | 'project-access-group-roles-updated'
    | 'project-access-user-roles-deleted'
    | 'project-access-group-roles-deleted'
    | 'project-access-updated'
    | 'project-created'
    | 'project-updated'
    | 'project-deleted'
    | 'project-archived'
    | 'project-revived'
    | 'project-import'
    | 'project-user-added'
    | 'project-user-removed'
    | 'project-user-role-changed'
    | 'project-group-added'
    | 'role-created'
    | 'role-updated'
    | 'role-deleted'
    | 'drop-projects'
    | 'tag-created'
    | 'tag-deleted'
    | 'tag-updated'
    | 'tag-import'
    | 'drop-tags'
    | 'tag-type-created'
    | 'tag-type-deleted'
    | 'tag-type-updated'
    | 'tag-type-import'
    | 'drop-tag-types'
    | 'addon-config-created'
    | 'addon-config-updated'
    | 'addon-config-deleted'
    | 'db-pool-update'
    | 'user-created'
    | 'user-updated'
    | 'user-deleted'
    | 'drop-environments'
    | 'environment-import'
    | 'environment-created'
    | 'environment-updated'
    | 'environment-deleted'
    | 'segment-created'
    | 'segment-updated'
    | 'segment-deleted'
    | 'group-created'
    | 'group-updated'
    | 'group-deleted'
    | 'group-user-added'
    | 'group-user-removed'
    | 'setting-created'
    | 'setting-updated'
    | 'setting-deleted'
    | 'client-metrics'
    | 'client-register'
    | 'pat-created'
    | 'pat-deleted'
    | 'service-account-token-created'
    | 'service-account-token-deleted'
    | 'public-signup-token-created'
    | 'public-signup-token-user-added'
    | 'public-signup-token-updated'
    | 'change-request-created'
    | 'change-request-discarded'
    | 'change-added'
    | 'change-discarded'
    | 'change-edited'
    | 'change-request-rejected'
    | 'change-request-approved'
    | 'change-request-approval-added'
    | 'change-request-cancelled'
    | 'change-request-sent-to-review'
    | 'change-request-schedule-suspended'
    | 'change-request-applied'
    | 'change-request-scheduled'
    | 'change-request-scheduled-application-success'
    | 'change-request-scheduled-application-failure'
    | 'change-request-configuration-updated'
    | 'api-token-created'
    | 'api-token-updated'
    | 'api-token-deleted'
    | 'feature-favorited'
    | 'feature-unfavorited'
    | 'project-favorited'
    | 'project-unfavorited'
    | 'features-exported'
    | 'features-imported'
    | 'service-account-created'
    | 'service-account-deleted'
    | 'service-account-updated'
    | 'feature-potentially-stale-on'
    | 'feature-dependency-added'
    | 'feature-dependency-removed'
    | 'feature-dependencies-removed'
    | 'banner-created'
    | 'banner-updated'
    | 'banner-deleted'
    | 'safeguard-changed'
    | 'safeguard-deleted'
    | 'safeguard-triggered'
    | 'release-plan-progressions-resumed'
    | 'release-plan-progressions-paused'
    | 'project-environment-added'
    | 'project-environment-removed'
    | 'default-strategy-updated'
    | 'segment-import'
    | 'signal-endpoint-created'
    | 'signal-endpoint-updated'
    | 'signal-endpoint-deleted'
    | 'signal-endpoint-token-created'
    | 'signal-endpoint-token-updated'
    | 'signal-endpoint-token-deleted'
    | 'actions-created'
    | 'actions-updated'
    | 'actions-deleted'
    | 'release-plan-template-created'
    | 'release-plan-template-updated'
    | 'release-plan-template-deleted'
    | 'release-plan-template-archived'
    | 'release-plan-added'
    | 'release-plan-removed'
    | 'release-plan-milestone-started'
    | 'milestone-progression-created'
    | 'milestone-progression-updated'
    | 'milestone-progression-deleted'
    | 'milestone-progression-changed'
    | 'user-preference-updated'
    | 'scim-users-deleted'
    | 'scim-groups-deleted'
    | 'cdn-token-created'
    | 'change-request-requested-approvers-updated'
    | 'impact-metric-created'
    | 'impact-metric-updated'
    | 'impact-metric-deleted'
    | 'user-access-request-registered'
    | 'user-access-request-approved'
    | 'user-access-request-rejected'
    | 'remote-mcp-server-settings-updated'
  createdBy: string
  createdByUserId?: (number | null) | undefined
  environment?: (string | null) | undefined
  project?: (string | null) | undefined
  featureName?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  preData?: ({ [x: string]: unknown } | null) | undefined
  tags?: (TagSchema[] | null) | undefined
  label?: (string | null) | undefined
  summary?: (string | null) | undefined
  ip?: (string | null) | undefined
  groupType?: string | undefined
  groupId?: string | undefined
}
type EventsSchema = { version: 1; events: EventSchema[]; totalEvents?: number | undefined }
type FeatureEventsSchema = {
  version?: 1 | undefined
  toggleName?: string | undefined
  events: EventSchema[]
  totalEvents?: number | undefined
}
type EventCreatorsSchema = { id: number; name: string }[]
type SdkContextSchema = {
  appName: string
  currentTime?: string | undefined
  environment?: string | undefined
  properties?: { [x: string]: string } | undefined
  remoteAddress?: string | undefined
  sessionId?: string | undefined
  userId?: string | undefined
}
type PlaygroundRequestSchema = {
  environment: string
  projects?: string[] | '*' | undefined
  context: SdkContextSchema
}
type OverrideSchema = { contextName: string; values: string[] }
type VariantSchema = {
  name: string
  weight: number
  weightType?: 'variable' | 'fix' | undefined
  stickiness?: string | undefined
  payload?: { type: 'json' | 'csv' | 'string' | 'number'; value: string } | undefined
  overrides?: OverrideSchema[] | undefined
}
type PlaygroundConstraintSchema = {
  contextName: string
  operator:
    | 'NOT_IN'
    | 'IN'
    | 'STR_ENDS_WITH'
    | 'STR_STARTS_WITH'
    | 'STR_CONTAINS'
    | 'NUM_EQ'
    | 'NUM_GT'
    | 'NUM_GTE'
    | 'NUM_LT'
    | 'NUM_LTE'
    | 'DATE_AFTER'
    | 'DATE_BEFORE'
    | 'SEMVER_EQ'
    | 'SEMVER_GT'
    | 'SEMVER_LT'
    | 'SEMVER_GTE'
    | 'SEMVER_LTE'
    | 'REGEX'
    | 'IN_CIDR'
  caseInsensitive?: boolean | undefined
  inverted?: boolean | undefined
  values?: string[] | undefined
  value?: string | undefined
  result: boolean
}
type PlaygroundSegmentSchema = {
  id: number
  name: string
  result: boolean
  constraints: PlaygroundConstraintSchema[]
}
type ParametersSchema = { [x: string]: string }
type PlaygroundStrategySchema = {
  name: string
  title?: string | undefined
  id: string
  result:
    | { evaluationStatus: 'incomplete' | 'unevaluated'; enabled: false | 'unknown' }
    | {
        evaluationStatus: 'complete'
        enabled: boolean
        variant?:
          | ({
              name: string
              enabled: boolean
              payload?: { type: 'json' | 'csv' | 'string' | 'number'; value: string } | undefined
            } | null)
          | undefined
        variants?: VariantSchema[] | undefined
      }
  disabled: boolean | null
  segments: PlaygroundSegmentSchema[]
  constraints: PlaygroundConstraintSchema[]
  parameters: ParametersSchema
  links: { edit: string }
}
type PlaygroundFeatureSchema = {
  name: string
  projectId: string
  strategies: { result: boolean | 'unknown'; data: PlaygroundStrategySchema[] }
  hasUnsatisfiedDependency?: boolean | undefined
  isEnabledInCurrentEnvironment: boolean
  isEnabled: boolean
  variant: {
    name: string
    enabled: boolean
    payload?: { type: string; value: string } | undefined
    feature_enabled?: boolean | undefined
    featureEnabled?: boolean | undefined
  } | null
  variants: VariantSchema[]
}
type PlaygroundResponseSchema = {
  input: PlaygroundRequestSchema
  features: PlaygroundFeatureSchema[]
}
type AdvancedPlaygroundRequestSchema = {
  environments: string[]
  projects?: string[] | '*' | undefined
  context: SdkContextSchema
}
type SdkFlatContextSchema = {
  appName: string
  currentTime?: string | undefined
  environment?: string | undefined
  remoteAddress?: string | undefined
  sessionId?: string | undefined
  userId?: string | undefined
}
type AdvancedPlaygroundEnvironmentFeatureSchema = {
  name: string
  environment: string
  context: SdkFlatContextSchema
  projectId: string
  strategies: { result: boolean | 'unknown'; data: PlaygroundStrategySchema[] }
  isEnabledInCurrentEnvironment: boolean
  isEnabled: boolean
  variant: {
    name: string
    enabled: boolean
    payload?: { type: string; value: string } | undefined
    feature_enabled?: boolean | undefined
  } | null
  variants: VariantSchema[]
}
type AdvancedPlaygroundFeatureSchema = {
  name: string
  projectId: string
  environments: { [x: string]: AdvancedPlaygroundEnvironmentFeatureSchema[] }
}
type AdvancedPlaygroundResponseSchema = {
  input: AdvancedPlaygroundRequestSchema
  features: AdvancedPlaygroundFeatureSchema[]
  warnings?: { invalidContextProperties?: string[] | undefined } | undefined
}
type PlaygroundFeatureRequestSchema = { environment: string; context: SdkContextSchema }
type PlaygroundFeatureResponseSchema = {
  input: PlaygroundFeatureRequestSchema
  feature: PlaygroundFeatureSchema
}
type UnknownFlagSchema = {
  name: string
  lastSeenAt: string
  lastEventAt?: (string | null) | undefined
  reports?:
    | { appName: string; environments: { environment: string; seenAt: string }[] }[]
    | undefined
}
type UnknownFlagsResponseSchema = { unknownFlags: UnknownFlagSchema[] }
type CreateApplicationSchema = {
  strategies?: string[] | undefined
  url?: string | undefined
  color?: string | undefined
  icon?: string | undefined
}
type ApplicationUsageSchema = { project: string; environments: string[] }
type ApplicationSchema = {
  appName: string
  sdkVersion?: string | undefined
  strategies?: string[] | undefined
  description?: string | undefined
  url?: string | undefined
  color?: string | undefined
  icon?: string | undefined
  usage?: ApplicationUsageSchema[] | undefined
}
type ApplicationsSchema = { total: number; applications: ApplicationSchema[] }
type ApplicationEnvironmentIssuesSchema = { missingFeatures: string[]; outdatedSdks: string[] }
type ApplicationOverviewEnvironmentSchema = {
  name: string
  instanceCount: number
  sdks: string[]
  frontendSdks: string[]
  backendSdks: string[]
  lastSeen: string | null
  issues: ApplicationEnvironmentIssuesSchema
}
type ApplicationOverviewIssuesSchema = { missingStrategies: string[] }
type ApplicationOverviewSchema = {
  projects: string[]
  featureCount: number
  environments: ApplicationOverviewEnvironmentSchema[]
  issues: ApplicationOverviewIssuesSchema
}
type ApplicationEnvironmentInstancesSchema = {
  instances: {
    instanceId: string
    sdkVersion?: (string | null) | undefined
    clientIp?: (string | null) | undefined
    lastSeen?: string | undefined
  }[]
}
type OutdatedSdksSchema = { sdks: { sdkVersion: string; applications: string[] }[] }
type DateSchema = string | number
type FeatureEnvironmentMetricsSchema = {
  featureName?: string | undefined
  appName?: string | undefined
  environment: string
  timestamp: DateSchema
  yes: number
  no: number
  variants?: { [x: string]: number } | undefined
}
type FeatureMetricsSchema = {
  version: number
  maturity: string
  data: FeatureEnvironmentMetricsSchema[]
}
type FeatureEnvironmentTotalUsageSchema = { environment: string; yes: number; no: number }
type FeatureUsageSchema = {
  version: number
  maturity: string
  featureName: string
  lastHourUsage: FeatureEnvironmentMetricsSchema[]
  totalUsage?: FeatureEnvironmentTotalUsageSchema[] | undefined
  seenApplications: string[]
}
type PermissionSchema = {
  permission: string
  project?: string | undefined
  environment?: string | undefined
}
type FeedbackResponseSchema = {
  userId?: number | undefined
  neverShow?: boolean | undefined
  given?: (string | null) | undefined
  feedbackId?: string | undefined
}
type MeSchema = {
  user: UserSchema
  permissions: PermissionSchema[]
  feedback: FeedbackResponseSchema[]
  splash: { [x: string]: boolean }
}
type GroupItemSchema = {
  id?: number | undefined
  name: string
  description?: (string | null) | undefined
  mappingsSSO?: string[] | undefined
  rootRole?: (number | null) | undefined
  scimId?: (string | null) | undefined
}
type ConstraintSchema = {
  contextName: string
  operator:
    | 'NOT_IN'
    | 'IN'
    | 'STR_ENDS_WITH'
    | 'STR_STARTS_WITH'
    | 'STR_CONTAINS'
    | 'NUM_EQ'
    | 'NUM_GT'
    | 'NUM_GTE'
    | 'NUM_LT'
    | 'NUM_LTE'
    | 'DATE_AFTER'
    | 'DATE_BEFORE'
    | 'SEMVER_EQ'
    | 'SEMVER_GT'
    | 'SEMVER_LT'
    | 'SEMVER_GTE'
    | 'SEMVER_LTE'
    | 'REGEX'
    | 'IN_CIDR'
  caseInsensitive?: boolean | undefined
  inverted?: boolean | undefined
  values?: string[] | undefined
  value?: string | undefined
}
type StrategyVariantSchema = {
  name: string
  weight: number
  weightType: 'variable' | 'fix'
  stickiness: string
  payload?: { type: 'json' | 'csv' | 'string' | 'number'; value: string } | undefined
}
type FeatureStrategySchema = {
  id?: string | undefined
  name: string
  title?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  featureName?: string | undefined
  sortOrder?: number | undefined
  segments?: number[] | undefined
  constraints?: ConstraintSchema[] | undefined
  variants?: StrategyVariantSchema[] | undefined
  parameters?: ParametersSchema | undefined
}
type CreateStrategyVariantSchema = {
  name: string
  weight: number
  weightType: 'variable' | 'fix'
  stickiness: string
  payload?: { type: 'json' | 'csv' | 'string' | 'number'; value: string } | undefined
}
type ReleasePlanMilestoneStrategySchema = {
  id: string
  milestoneId: string
  sortOrder: number
  title?: (string | null) | undefined
  name: string
  strategyName: string
  parameters?: ParametersSchema | undefined
  constraints?: ConstraintSchema[] | undefined
  variants?: CreateStrategyVariantSchema[] | undefined
  segments?: number[] | undefined
  disabled?: (boolean | null) | undefined
}
type ReleasePlanMilestoneSchema = {
  id: string
  name: string
  sortOrder: number
  releasePlanDefinitionId: string
  startedAt?: (string | null) | undefined
  transitionCondition?: ({ [x: string]: unknown } | null) | undefined
  progressionExecutedAt?: (string | null) | undefined
  pausedAt?: (string | null) | undefined
  strategies?: ReleasePlanMilestoneStrategySchema[] | undefined
}
type SafeguardTriggerConditionSchema = { operator: '>' | '<'; threshold: number }
type ReleasePlanSafeguardSchema = {
  id: string
  action: { type: string; id: string }
  triggerCondition: SafeguardTriggerConditionSchema
  impactMetric: {
    id: string
    metricName: string
    timeRange: 'hour' | 'day' | 'week' | 'month'
    aggregationMode: 'rps' | 'count' | 'avg' | 'sum' | 'p95' | 'p99' | 'p50'
    labelSelectors: { [x: string]: string[] }
    source?: 'internal' | 'external' | undefined
  }
}
type ReleasePlanSchema = {
  id: string
  discriminator: 'plan'
  name: string
  description?: (string | null) | undefined
  featureName: string
  environment: string
  createdByUserId: number
  createdAt: string
  activeMilestoneId?: (string | null) | undefined
  milestones: ReleasePlanMilestoneSchema[]
  releasePlanTemplateId: string
  safeguards?: ReleasePlanSafeguardSchema[] | undefined
}
type FeatureEnvironmentSafeguardSchema = {
  id: string
  action: { type: string; featureName: string; environment: string; project: string }
  triggerCondition: SafeguardTriggerConditionSchema
  impactMetric: {
    id: string
    metricName: string
    timeRange: 'hour' | 'day' | 'week' | 'month'
    aggregationMode: 'rps' | 'count' | 'avg' | 'sum' | 'p95' | 'p99' | 'p50'
    labelSelectors: { [x: string]: string[] }
    source?: 'internal' | 'external' | undefined
  }
}
type FeatureEnvironmentSchema = {
  name: string
  featureName?: string | undefined
  environment?: string | undefined
  type?: string | undefined
  enabled: boolean
  sortOrder?: number | undefined
  variantCount?: number | undefined
  strategies?: FeatureStrategySchema[] | undefined
  variants?: VariantSchema[] | undefined
  changeRequestIds?: number[] | undefined
  milestoneName?: string | undefined
  milestoneOrder?: number | undefined
  totalMilestones?: number | undefined
  lastSeenAt?: (string | null) | undefined
  hasStrategies?: boolean | undefined
  hasEnabledStrategies?: boolean | undefined
  releasePlans?: ReleasePlanSchema[] | undefined
  safeguards?: FeatureEnvironmentSafeguardSchema[] | undefined
  yes?: number | undefined
  no?: number | undefined
}
type FeatureSchema = {
  name: string
  type?: string | undefined
  description?: (string | null) | undefined
  archived?: boolean | undefined
  project?: string | undefined
  enabled?: boolean | undefined
  stale?: boolean | undefined
  favorite?: boolean | undefined
  impressionData?: boolean | undefined
  createdAt?: (string | null) | undefined
  createdBy?: { id: number; name: string; imageUrl: string } | undefined
  archivedAt?: (string | null) | undefined
  environments?: FeatureEnvironmentSchema[] | undefined
  tags?: (TagSchema[] | null) | undefined
  children?: string[] | undefined
  lifecycle?:
    | {
        stage: 'initial' | 'pre-live' | 'live' | 'completed' | 'archived'
        status?: (string | null) | undefined
        enteredStageAt: string
      }
    | undefined
  dependencies?:
    | { feature: string; enabled?: boolean | undefined; variants?: string[] | undefined }[]
    | undefined
  collaborators?: { users: { id: number; name: string; imageUrl: string }[] } | undefined
  links?:
    | {
        id: string
        url: string
        title?: (string | null) | undefined
        feature?: string | undefined
      }[]
    | undefined
  payloadSchema?: { [x: string]: unknown } | undefined
  lifetimeDays?: number | undefined
  expectedLifetimeEndsAt?: (string | null) | undefined
}
type ProfileSchema = {
  rootRole: RoleSchema
  projects: string[]
  groups: GroupItemSchema[]
  subscriptions: string[]
  features: FeatureSchema[]
  canChangePassword: boolean
}
type PasswordSchema = {
  password: string
  oldPassword?: string | undefined
  confirmPassword?: string | undefined
}
type RolesSchema = { version: number; roles: RoleSchema[] }
type PatSchema = {
  id: number
  secret?: string | undefined
  createdAt: string
  seenAt?: (string | null) | undefined
  userId?: number | undefined
  expiryWarning?: 'expires-soon' | 'expired' | undefined
  description: string
  expiresAt: string
}
type PatsSchema = { pats?: PatSchema[] | undefined }
type CreatePatSchema = { description: string; expiresAt: string }
type ResourceLimitsSchema = {
  segmentValues: number
  strategySegments: number
  actionSetActions: number
  actionSetsPerProject: number
  actionSetFilters: number
  actionSetFilterValues: number
  signalEndpoints: number
  signalTokensPerEndpoint: number
  featureEnvironmentStrategies: number
  constraintValues: number
  constraints: number
  environments: number
  apiTokens: number
  projects: number
  segments: number
  featureFlags: number
  releaseTemplates: number
  readOnlyUsers?: number | undefined
}
type VariantFlagSchema = {
  name?: string | undefined
  enabled?: boolean | undefined
  payload?:
    | { type?: 'string' | 'json' | 'csv' | 'number' | undefined; value?: string | undefined }
    | undefined
  feature_enabled?: boolean | undefined
  featureEnabled?: boolean | undefined
}
type VersionSchema = {
  current: { oss?: string | undefined; enterprise?: string | undefined }
  latest: { oss?: string | undefined; enterprise?: string | undefined }
  isLatest: boolean
  instanceId?: string | undefined
  buildDate?: (string | null) | undefined
}
type UiConfigSchema = {
  slogan?: string | undefined
  name?: string | undefined
  version: string
  environment?: string | undefined
  billing?: 'subscription' | 'pay-as-you-go' | undefined
  edgeUrl?: string | undefined
  unleashUrl: string
  logRocketAppId?: string | undefined
  hubspotPortalId?: string | undefined
  baseUriPath: string
  feedbackUriPath?: string | undefined
  sessionKeepAliveIntervalSeconds?: number | undefined
  disablePasswordAuth?: boolean | undefined
  emailEnabled?: boolean | undefined
  maintenanceMode?: boolean | undefined
  resourceLimits?: ResourceLimitsSchema | undefined
  prometheusAPIAvailable?: boolean | undefined
  impactMetrics?: 'disabled' | 'unconfigured' | 'external' | 'internal' | 'full' | undefined
  frontendApiOrigins?: string[] | undefined
  flags?: { [x: string]: boolean | VariantFlagSchema } | undefined
  links?: { [x: string]: unknown }[] | undefined
  authenticationType?:
    | 'open-source'
    | 'demo'
    | 'enterprise'
    | 'hosted'
    | 'custom'
    | 'none'
    | undefined
  versionInfo: VersionSchema
  oidcConfiguredThroughEnv?: boolean | undefined
  samlConfiguredThroughEnv?: boolean | undefined
  maxSessionsCount?: number | undefined
  unleashContext?: { [x: string]: unknown } | undefined
  storiesPageEnabled?: boolean | undefined
}
type SetCorsSchema = { frontendApiOrigins?: string[] | undefined }
type LegalValueSchema = { value: string; description?: string | undefined }
type ContextFieldSchema = {
  name: string
  description?: (string | null) | undefined
  stickiness?: boolean | undefined
  sortOrder?: number | undefined
  createdAt?: (string | null) | undefined
  usedInFeatures?: (number | null) | undefined
  usedInProjects?: (number | null) | undefined
  legalValues?: LegalValueSchema[] | undefined
  project?: string | undefined
}
type ContextFieldsSchema = ContextFieldSchema[]
type CreateContextFieldSchema = {
  description?: string | undefined
  stickiness?: boolean | undefined
  sortOrder?: number | undefined
  legalValues?: LegalValueSchema[] | undefined
  project?: string | undefined
  name: string
}
type UpdateContextFieldSchema = {
  description?: string | undefined
  stickiness?: boolean | undefined
  sortOrder?: number | undefined
  legalValues?: LegalValueSchema[] | undefined
  project?: string | undefined
}
type ContextFieldStrategiesSchema = {
  strategies: {
    id: string
    featureName: string
    projectId: string
    environment: string
    strategyName: string
  }[]
}
type NameSchema = { name: string }
type ExportQuerySchema =
  | { environment: string; downloadFile?: boolean | undefined; features: string[] }
  | { environment: string; downloadFile?: boolean | undefined; tag: string }
  | { environment: string; downloadFile?: boolean | undefined; project: string }
type FeatureTagSchema = {
  featureName: string
  tagType?: string | undefined
  tagValue: string
  createdByUserId?: (number | null) | undefined
}
type TagTypeSchema = {
  name: string
  description?: string | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
}
type DependentFeatureSchema = {
  feature: string
  enabled?: boolean | undefined
  variants?: string[] | undefined
}
type FeatureDependenciesSchema = { feature: string; dependencies: DependentFeatureSchema[] }
type LinkSchema = { url: string; title?: (string | null) | undefined }
type FeatureLinksSchema = { feature: string; links: LinkSchema[] }
type ExportResultSchema = {
  features: FeatureSchema[]
  featureStrategies: FeatureStrategySchema[]
  featureEnvironments?: FeatureEnvironmentSchema[] | undefined
  contextFields?: ContextFieldSchema[] | undefined
  featureTags?: FeatureTagSchema[] | undefined
  segments?: { id: number; name: string }[] | undefined
  tagTypes: TagTypeSchema[]
  dependencies?: FeatureDependenciesSchema[] | undefined
  links?: FeatureLinksSchema[] | undefined
}
type ImportTogglesSchema = { project: string; environment: string; data: ExportResultSchema }
type ImportTogglesValidateItemSchema = { message: string; affectedItems: string[] }
type ImportTogglesValidateSchema = {
  errors: ImportTogglesValidateItemSchema[]
  warnings: ImportTogglesValidateItemSchema[]
  permissions?: ImportTogglesValidateItemSchema[] | undefined
}
type CreateTagSchema = { value: string; type: string; color?: (string | null) | undefined }
type TagWithVersionSchema = { version: number; tag: TagSchema }
type RenameTagSchema = { value: string }
type TagTypeWithUsageSchema = {
  name: string
  description?: string | undefined
  icon?: (string | null) | undefined
  color?: (string | null) | undefined
  valueCount?: number | undefined
  usedInProjects?: number | undefined
}
type TagTypesSchema = { version: number; tagTypes: TagTypeWithUsageSchema[] }
type ValidateTagTypeSchema = { valid: boolean; tagType: TagTypeSchema }
type UpdateTagTypeSchema = {
  description?: string | undefined
  icon?: string | undefined
  color?: string | undefined
}
type TagValuesUsageSchema = {
  limit: number
  offset: number
  total: number
  tagValues: { value: string; usedInActiveFeatures: number; usedInArchivedFeatures: number }[]
}
type AddonSchema = {
  id: number
  provider: string
  description: string | null
  enabled: boolean
  parameters: { [x: string]: { [x: string]: unknown } }
  events: string[]
  projects?: string[] | undefined
  environments?: string[] | undefined
}
type AddonParameterSchema = {
  name: string
  displayName: string
  type: string
  description?: string | undefined
  placeholder?: string | undefined
  required: boolean
  sensitive: boolean
}
type AddonTypeSchema = {
  name: string
  displayName: string
  documentationUrl: string
  description: string
  howTo?: string | undefined
  tagTypes?: TagTypeSchema[] | undefined
  parameters?: AddonParameterSchema[] | undefined
  events?: string[] | undefined
  installation?:
    | { url: string; title?: string | undefined; helpText?: string | undefined }
    | undefined
  serverInstallation?:
    | { path: string; title?: string | undefined; helpText?: string | undefined }
    | undefined
  fixedEvents?: boolean | undefined
  environmentIndependent?: boolean | undefined
  alerts?:
    | {
        type: 'success' | 'info' | 'warning' | 'error'
        text: string
        link?: { url: string; title?: (string | null) | undefined } | undefined
      }[]
    | undefined
  deprecated?: string | undefined
}
type AddonsSchema = { addons: AddonSchema[]; providers: AddonTypeSchema[] }
type AddonCreateUpdateSchema = {
  provider: string
  description?: string | undefined
  enabled: boolean
  parameters: { [x: string]: { [x: string]: unknown } }
  events: string[]
  projects?: string[] | undefined
  environments?: string[] | undefined
}
type IntegrationEventSchema = {
  id: string
  integrationId: number
  createdAt: string
  state: 'success' | 'failed' | 'successWithErrors'
  stateDetails: string
  event: EventSchema
  details: { [x: string]: unknown }
}
type IntegrationEventsSchema = { integrationEvents: IntegrationEventSchema[] }
type ApiTokenSchema = {
  appName?: string | undefined
  secret?: (string | null) | undefined
  tokenName: string
  type: 'client' | 'admin' | 'frontend' | 'backend'
  environment?: string | undefined
  project?: string | undefined
  projects: string[]
  expiresAt?: (string | null) | undefined
  createdAt: string
  seenAt?: (string | null) | undefined
  alias?: (string | null) | undefined
  secure?: (boolean | null) | undefined
}
type ApiTokensSchema = { tokens: ApiTokenSchema[] }
type CreateApiTokenSchema = {
  expiresAt?: string | undefined
  type: string
  environment?: string | undefined
  project?: string | undefined
  projects?: string[] | undefined
  tokenName: string
  appName?: string | undefined
}
type UpdateApiTokenSchema = { expiresAt: string }
type InactiveUserSchema = {
  id: number
  name?: (string | null) | undefined
  email?: string | undefined
  username?: (string | null) | undefined
  seenAt?: (string | null) | undefined
  createdAt?: string | undefined
  patSeenAt?: (string | null) | undefined
}
type InactiveUsersSchema = {
  version: number
  inactiveUsers: InactiveUserSchema[]
  totalInactiveUsers: number
}
type IdsSchema = { ids: number[] }
type IdSchema = { id: string }
type ResetPasswordSchema = { resetPasswordUrl: string }
type UsersSchema = { users: UserSchema[]; rootRoles?: RoleSchema[] | undefined }
type CreateUserSchema = {
  username?: string | undefined
  email?: string | undefined
  name?: string | undefined
  password?: string | undefined
  rootRole: number | 'Admin' | 'Editor' | 'Viewer' | 'Owner' | 'Member' | 'Reader'
  sendEmail?: boolean | undefined
}
type CreateUserResponseSchema = {
  id: number
  name?: (string | null) | undefined
  email?: string | undefined
  username?: (string | null) | undefined
  imageUrl?: string | undefined
  inviteLink?: string | undefined
  loginAttempts?: number | undefined
  emailSent?: boolean | undefined
  rootRole?: number | 'Admin' | 'Editor' | 'Viewer' | 'Owner' | 'Member' | 'Reader' | undefined
  seenAt?: (string | null) | undefined
  createdAt?: string | undefined
  accountType?: 'User' | 'Service Account' | undefined
  permissions?: string[] | undefined
  scimId?: (string | null) | undefined
  seatType?: (string | null) | undefined
  companyRole?: (string | null) | undefined
  productUpdatesEmailConsent?: (boolean | null) | undefined
  activeSessions?: (number | null) | undefined
  deletedSessions?: number | undefined
}
type UsersSearchSchema = UserSchema[]
type GroupSchema = {
  id?: number | undefined
  name: string
  description?: (string | null) | undefined
  mappingsSSO?: string[] | undefined
  rootRole?: (number | null) | undefined
  createdBy?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  users?: GroupUserModelSchema[] | undefined
  projects?: string[] | undefined
  userCount?: number | undefined
  scimId?: (string | null) | undefined
}
type UsersGroupsBaseSchema = {
  groups?: GroupSchema[] | undefined
  users?: UserSchema[] | undefined
}
type AdminCountSchema = { password: number; noPassword: number; service: number }
type UpdateUserSchema = {
  email?: string | undefined
  name?: string | undefined
  rootRole?: number | 'Admin' | 'Editor' | 'Viewer' | 'Owner' | 'Member' | 'Reader' | undefined
}
type FeedbackCreateSchema = { neverShow?: boolean | undefined; feedbackId: string }
type FeedbackUpdateSchema = {
  userId?: number | undefined
  neverShow?: boolean | undefined
  given?: (string | null) | undefined
}
type ProjectStatsSchema = {
  avgTimeToProdCurrentWindow: number
  createdCurrentWindow: number
  createdPastWindow: number
  archivedCurrentWindow: number
  archivedPastWindow: number
  projectActivityCurrentWindow: number
  projectActivityPastWindow: number
  projectMembersAddedCurrentWindow: number
}
type CreateFeatureStrategySchema = {
  name: string
  title?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  sortOrder?: number | undefined
  constraints?: ConstraintSchema[] | undefined
  variants?: CreateStrategyVariantSchema[] | undefined
  parameters?: ParametersSchema | undefined
  segments?: number[] | undefined
}
type ProjectEnvironmentSchema = {
  environment: string
  changeRequestsEnabled?: boolean | undefined
  defaultStrategy?: CreateFeatureStrategySchema | undefined
}
type FeatureTypeCountSchema = { type: string; count: number }
type ProjectOverviewSchema = {
  stats?: ProjectStatsSchema | undefined
  version: number
  name: string
  description?: (string | null) | undefined
  defaultStickiness?: string | undefined
  mode?: 'open' | 'protected' | 'private' | undefined
  featureLimit?: (number | null) | undefined
  featureNaming?: CreateFeatureNamingPatternSchema | undefined
  linkTemplates?: ProjectLinkTemplateSchema[] | undefined
  members?: number | undefined
  health?: number | undefined
  technicalDebt?: number | undefined
  environments?: ProjectEnvironmentSchema[] | undefined
  featureTypeCounts?: FeatureTypeCountSchema[] | undefined
  updatedAt?: (string | null) | undefined
  archivedAt?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  favorite?: boolean | undefined
  onboardingStatus: OnboardingStatusSchema
}
type DoraFeaturesSchema = { name: string; timeToProduction: number }
type ProjectDoraMetricsSchema = {
  projectAverage?: number | undefined
  features: DoraFeaturesSchema[]
}
type ProjectApplicationSdkSchema = { name: string; versions: string[] }
type ProjectApplicationSchema = {
  name: string
  environments: string[]
  instances: string[]
  sdks: ProjectApplicationSdkSchema[]
}
type ProjectApplicationsSchema = { total: number; applications: ProjectApplicationSchema[] }
type ProjectFlagCreatorsSchema = { id: number; name: string }[]
type BulkToggleFeaturesSchema = { features: string[] }
type UpdateFeatureStrategySchema = {
  name?: string | undefined
  sortOrder?: number | undefined
  constraints?: ConstraintSchema[] | undefined
  title?: (string | null) | undefined
  disabled?: (boolean | null) | undefined
  variants?: StrategyVariantSchema[] | undefined
  segments?: number[] | undefined
  parameters?: ParametersSchema | undefined
}
type PatchSchema = {
  path: string
  op: 'add' | 'remove' | 'replace' | 'copy' | 'move' | 'test'
  from?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type PatchesSchema = PatchSchema[]
type SetStrategySortOrderSchema = { id: string; sortOrder: number }[]
type ProjectFeatureEnvironmentSchema = {
  name: string
  type: string
  enabled: boolean
  sortOrder: number
  variantCount: number
  lastSeenAt: string | null
  hasStrategies?: boolean | undefined
  hasEnabledStrategies?: boolean | undefined
}
type ProjectFeatureSchema = {
  name: string
  type: string
  description: string | null
  stale: boolean
  favorite: boolean
  impressionData: boolean
  createdAt: string
  environments: ProjectFeatureEnvironmentSchema[]
  tags?: (TagSchema[] | null) | undefined
}
type ProjectFeaturesSchema = { version: number; features: ProjectFeatureSchema[] }
type CreateFeatureSchema = {
  name: string
  type?:
    | 'experiment'
    | 'kill-switch'
    | 'release'
    | 'operational'
    | 'permission'
    | 'sunset'
    | undefined
  description?: (string | null) | undefined
  impressionData?: boolean | undefined
  tags?: TagSchema[] | undefined
}
type CloneFeatureSchema = { name: string; replaceGroupId?: boolean | undefined }
type UpdateFeatureSchema = {
  description?: string | undefined
  type?:
    | 'experiment'
    | 'kill-switch'
    | 'release'
    | 'operational'
    | 'permission'
    | 'sunset'
    | undefined
  stale?: boolean | undefined
  archived?: boolean | undefined
  impressionData?: boolean | undefined
}
type BatchStaleSchema = { features: string[]; stale: boolean }
type TagsBulkAddSchema = { features: string[]; tags: UpdateTagsSchema }
type CreateDependentFeatureSchema = {
  feature: string
  enabled?: boolean | undefined
  variants?: string[] | undefined
}
type ParentFeatureOptionsSchema = string[]
type ParentVariantOptionsSchema = string[]
type DependenciesExistSchema = boolean
type HealthReportSchema = {
  version: number
  name: string
  description?: (string | null) | undefined
  defaultStickiness: string
  mode: 'open' | 'protected' | 'private'
  featureLimit?: (number | null) | undefined
  members: number
  health: number
  technicalDebt: number
  environments: ProjectEnvironmentSchema[]
  features: FeatureSchema[]
  updatedAt?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  favorite?: boolean | undefined
  stats?: ProjectStatsSchema | undefined
  featureNaming?: CreateFeatureNamingPatternSchema | undefined
  potentiallyStaleCount: number
  activeCount: number
  staleCount: number
}
type FeatureVariantsSchema = { version: number; variants: VariantSchema[] }
type VariantsSchema = VariantSchema[]
type PushVariantsSchema = {
  variants?: VariantSchema[] | undefined
  environments?: string[] | undefined
}
type CreateProjectApiTokenSchema = {
  type: string
  environment?: string | undefined
  expiresAt?: string | undefined
  tokenName: string
}
type BatchFeaturesSchema = { features: string[] }
type ValidateArchiveFeaturesSchema = {
  parentsWithChildFeatures: string[]
  hasDeletedDependencies: boolean
}
type ProjectInsightsSchema = {
  stats: ProjectStatsSchema
  health: { rating: number; activeCount: number; potentiallyStaleCount: number; staleCount: number }
  technicalDebt: {
    rating: number
    activeCount: number
    potentiallyStaleCount: number
    staleCount: number
  }
  leadTime: ProjectDoraMetricsSchema
  featureTypeCounts: FeatureTypeCountSchema[]
  members: { currentMembers: number; change: number }
}
type ProjectActivitySchema = { date: string; count: number }[]
type ProjectStatusSchema = {
  activityCountByDate: ProjectActivitySchema
  health: { current: number }
  technicalDebt: { current: number }
  resources: { apiTokens: number; members: number; segments: number }
  staleFlags: { total: number }
  lifecycleSummary: {
    initial: { averageDays: number | null; currentFlags: number }
    preLive: { averageDays: number | null; currentFlags: number }
    live: { averageDays: number | null; currentFlags: number }
    completed: { averageDays: number | null; currentFlags: number }
    archived: { currentFlags: number; last30Days: number }
  }
}
type FeatureLifecycleSchema = {
  stage: 'initial' | 'pre-live' | 'live' | 'completed' | 'archived'
  status?: string | undefined
  enteredStageAt: string
}[]
type FeatureLifecycleCompletedSchema = {
  status: 'kept' | 'discarded'
  statusValue?: string | undefined
}
type FeatureLifecycleCountSchema = {
  initial: number
  preLive: number
  live: number
  completed: number
  archived: number
}
type PersonalDashboardSchema = {
  admins: {
    id: number
    name?: string | undefined
    username?: string | undefined
    imageUrl?: string | undefined
    email?: string | undefined
  }[]
  projectOwners: {
    ownerType: 'user'
    name: string
    imageUrl?: (string | null) | undefined
    email?: (string | null) | undefined
  }[]
  projects: {
    id: string
    name: string
    health: number
    technicalDebt: number
    memberCount: number
    featureCount: number
  }[]
  flags: { name: string; project: string; type: string }[]
}
type PersonalDashboardProjectDetailsSchema = {
  insights: {
    avgHealthCurrentWindow: number | null
    avgHealthPastWindow: number | null
    totalFlags: number
    activeFlags: number
    staleFlags: number
    potentiallyStaleFlags: number
    health: number
    technicalDebt: number
  }
  onboardingStatus: OnboardingStatusSchema
  latestEvents: {
    id: number
    summary: string | null
    createdBy: string
    createdByImageUrl: string
    createdAt: string
  }[]
  owners:
    | (
        | {
            ownerType: 'user'
            name: string
            imageUrl?: (string | null) | undefined
            email?: (string | null) | undefined
          }
        | { ownerType: 'group'; name: string }
      )[]
    | { ownerType: 'system' }[]
  roles: { name: string; id: number; type: 'custom' | 'project' }[]
}
type EnvironmentSchema = {
  name: string
  type: string
  enabled: boolean
  protected: boolean
  sortOrder: number
  projectCount?: (number | null) | undefined
  apiTokenCount?: (number | null) | undefined
  enabledToggleCount?: (number | null) | undefined
  requiredApprovals?: (number | null) | undefined
}
type EnvironmentsSchema = { version: number; environments: EnvironmentSchema[] }
type EnvironmentProjectSchema = {
  name: string
  type: string
  enabled: boolean
  protected: boolean
  sortOrder: number
  projectApiTokenCount?: number | undefined
  projectEnabledToggleCount?: number | undefined
  defaultStrategy?: FeatureStrategySchema | undefined
  visible?: boolean | undefined
  requiredApprovals?: (number | null) | undefined
}
type EnvironmentsProjectSchema = { version: number; environments: EnvironmentProjectSchema[] }
type SortOrderSchema = { [x: string]: number }
type SplashResponseSchema = { userId: number; splashId: string; seen: boolean }
type PublicSignupTokenSchema = {
  secret: string
  url: string | null
  name: string
  enabled: boolean
  expiresAt: string
  createdAt: string
  createdBy: string | null
  users?: (UserSchema[] | null) | undefined
  role: RoleSchema
}
type PublicSignupTokensSchema = { tokens: PublicSignupTokenSchema[] }
type PublicSignupTokenCreateSchema = { name: string; expiresAt: string }
type PublicSignupTokenUpdateSchema = {
  expiresAt?: string | undefined
  enabled?: boolean | undefined
}
type InstanceAdminStatsSchema = {
  instanceId: string
  timestamp?: (string | null) | undefined
  versionOSS?: string | undefined
  versionEnterprise?: string | undefined
  users?: number | undefined
  previousDayMetricsBucketsCount?:
    | { enabledCount?: number | undefined; variantCount?: number | undefined }
    | undefined
  activeUsers?:
    | {
        last7?: number | undefined
        last30?: number | undefined
        last60?: number | undefined
        last90?: number | undefined
      }
    | undefined
  licensedUsers?: number | undefined
  productionChanges?:
    | { last30?: number | undefined; last60?: number | undefined; last90?: number | undefined }
    | undefined
  featureToggles?: number | undefined
  projects?: number | undefined
  contextFields?: number | undefined
  roles?: number | undefined
  groups?: number | undefined
  environments?: number | undefined
  segments?: number | undefined
  strategies?: number | undefined
  SAMLenabled?: boolean | undefined
  OIDCenabled?: boolean | undefined
  clientApps?:
    | { range?: 'allTime' | '30d' | '7d' | undefined; count?: number | undefined }[]
    | undefined
  featureExports?: number | undefined
  featureImports?: number | undefined
  apiTokens?:
    | { admin?: number | undefined; client?: number | undefined; frontend?: number | undefined }
    | undefined
  maxEnvironmentStrategies?: number | undefined
  maxConstraints?: number | undefined
  maxConstraintValues?: number | undefined
  releaseTemplates?: number | undefined
  releasePlans?: number | undefined
  edgeInstanceUsage?: { [x: string]: number } | undefined
  readOnlyUsers?: number | undefined
  sum?: string | undefined
}
type AdminSegmentSchema = {
  id: number
  name: string
  description?: (string | null) | undefined
  constraints: ConstraintSchema[]
  usedInFeatures?: (number | null) | undefined
  usedInProjects?: (number | null) | undefined
  project?: (string | null) | undefined
  createdBy?: (string | null) | undefined
  createdAt: string
}
type SegmentsSchema = { segments?: AdminSegmentSchema[] | undefined }
type UpdateFeatureStrategySegmentsSchema = {
  projectId: string
  strategyId: string
  environmentId: string
  segmentIds: number[]
}
type SegmentStrategiesSchema = {
  strategies: {
    id: string
    featureName: string
    projectId: string
    environment: string
    strategyName: string
  }[]
  changeRequestStrategies?:
    | {
        id?: string | undefined
        featureName: string
        projectId: string
        environment: string
        strategyName: string
      }[]
    | undefined
}
type UpsertSegmentSchema = {
  name: string
  description?: (string | null) | undefined
  project?: (string | null) | undefined
  constraints: ConstraintSchema[]
}
type ToggleMaintenanceSchema = { enabled: boolean }
type MaintenanceSchema = { enabled: boolean }
type TelemetrySettingsSchema = {
  versionInfoCollectionEnabled: boolean
  featureInfoCollectionEnabled: boolean
}
type FeatureSearchEnvironmentSchema = {
  name: string
  featureName?: string | undefined
  environment?: string | undefined
  type: string
  enabled: boolean
  sortOrder?: number | undefined
  variantCount?: number | undefined
  strategies?: FeatureStrategySchema[] | undefined
  variants?: VariantSchema[] | undefined
  changeRequestIds?: number[] | undefined
  milestoneName?: string | undefined
  milestoneOrder?: number | undefined
  totalMilestones?: number | undefined
  lastSeenAt?: (string | null) | undefined
  hasStrategies?: boolean | undefined
  hasEnabledStrategies?: boolean | undefined
  releasePlans?: ReleasePlanSchema[] | undefined
  safeguards?: FeatureEnvironmentSafeguardSchema[] | undefined
  yes?: number | undefined
  no?: number | undefined
}
type FeatureSearchResponseSchema = {
  name: string
  type: string
  description: string | null
  dependencyType: 'parent' | 'child' | null
  project: string
  stale: boolean
  favorite: boolean
  impressionData: boolean
  createdAt: string | null
  archivedAt: string | null
  environments: FeatureSearchEnvironmentSchema[]
  segments: string[]
  tags?: (TagSchema[] | null) | undefined
  lifecycle?:
    | {
        stage: 'initial' | 'pre-live' | 'live' | 'completed' | 'archived'
        status?: (string | null) | undefined
        enteredStageAt: string
      }
    | undefined
  createdBy: { id: number; name: string; imageUrl: string }
}
type SearchFeaturesSchema = { features: FeatureSearchResponseSchema[]; total?: number | undefined }
type EventSearchResponseSchema = { events: EventSchema[]; total: number }
type FlagCreatorsSchema = { total: number; flagCreators: { id: number; name: string }[] }
type RecordUiErrorSchema = { errorMessage: string; errorStack?: string | undefined }
type ClientFeatureSchema = {
  name: string
  type?: string | undefined
  enabled: boolean
  impressionData?: (boolean | null) | undefined
  project?: string | undefined
  strategies?: FeatureStrategySchema[] | undefined
  variants?: (VariantSchema[] | null) | undefined
  dependencies?: DependentFeatureSchema[] | undefined
}
type ClientSegmentSchema = {
  id: number
  name?: string | undefined
  constraints: ConstraintSchema[]
}
type ClientFeaturesQuerySchema = {
  tag?: string[][] | undefined
  project?: string[] | undefined
  namePrefix?: string | undefined
  environment?: string | undefined
  inlineSegmentConstraints?: boolean | undefined
}
type ClientFeaturesSchema = {
  version: number
  features: ClientFeatureSchema[]
  segments?: ClientSegmentSchema[] | undefined
  query?: ClientFeaturesQuerySchema | undefined
}
type ClientMetricsSchema = {
  appName: string
  instanceId?: string | undefined
  sdkVersion?: string | undefined
  platformName?: string | undefined
  platformVersion?: string | undefined
  yggdrasilVersion?: string | undefined
  specVersion?: string | undefined
  sdkFlavor?: string | undefined
  sdkFlavorVersion?: string | undefined
  bucket?:
    | ({
        start: DateSchema
        stop: DateSchema
        toggles: {
          [x: string]: {
            yes?: number | undefined
            no?: number | undefined
            variants?: ({ [x: string]: number } | null) | undefined
          }
        }
      } | null)
    | undefined
}
type BulkRegistrationSchema = {
  connectVia?: { appName: string; instanceId: string }[] | undefined
  appName: string
  environment: string
  instanceId: string
  interval?: number | undefined
  started?: DateSchema | undefined
  strategies?: string[] | undefined
  projects?: string[] | undefined
  sdkVersion?: string | undefined
  sdkType?: 'frontend' | 'backend' | null | undefined
  sdkFlavor?: string | undefined
  sdkFlavorVersion?: string | undefined
}
type ClientMetricsEnvSchema = {
  featureName: string
  appName: string
  environment: string
  timestamp?: DateSchema | undefined
  yes?: number | undefined
  no?: number | undefined
  variants?: { [x: string]: number } | undefined
}
type ImpactMetricsSchema =
  | {
      name: string
      help: string
      type: 'counter' | 'gauge'
      samples: { value: number; labels?: { [x: string]: string | number } | undefined }[]
    }
  | {
      name: string
      help: string
      type: 'histogram'
      samples: {
        count: number
        sum: number
        buckets: { le: number | '+Inf'; count: number }[]
        labels?: { [x: string]: string | number } | undefined
      }[]
    }
type BulkMetricsSchema = {
  applications: BulkRegistrationSchema[]
  metrics: ClientMetricsEnvSchema[]
  impactMetrics?: ImpactMetricsSchema[] | undefined
  seenTokens?: string[] | undefined
}
type ClientApplicationSchema = {
  appName: string
  instanceId?: string | undefined
  sdkVersion?: string | undefined
  platformName?: string | undefined
  platformVersion?: string | undefined
  yggdrasilVersion?: string | undefined
  specVersion?: string | undefined
  sdkFlavor?: string | undefined
  sdkFlavorVersion?: string | undefined
  interval: number
  started: string | number
  strategies: string[]
}
type FrontendApiFeatureSchema = {
  name: string
  enabled: boolean
  impressionData: boolean
  variant?:
    | {
        name: string
        enabled: boolean
        payload?: { type: 'json' | 'csv' | 'string' | 'number'; value: string } | undefined
        feature_enabled?: boolean | undefined
        featureEnabled?: boolean | undefined
      }
    | undefined
}
type FrontendApiFeaturesSchema = { toggles: FrontendApiFeatureSchema[] }
type FrontendApiFeaturesPostSchema = {
  context?:
    | {
        appName?: string | undefined
        currentTime?: string | undefined
        environment?: string | undefined
        properties?: { [x: string]: string } | undefined
        remoteAddress?: string | undefined
        sessionId?: string | undefined
        userId?: string | undefined
      }
    | undefined
}
type FrontendApiClientSchema = {
  appName: string
  instanceId?: string | undefined
  sdkVersion?: string | undefined
  environment?: string | undefined
  interval: number
  started: string | number
  strategies: string[]
}
type TokenStringListSchema = { tokens: string[] }
type EdgeTokenSchema = {
  projects: string[]
  environment: string
  type: 'client' | 'admin' | 'frontend' | 'backend'
  token: string
}
type ValidatedEdgeTokensSchema = { tokens: EdgeTokenSchema[] }
type EdgeEnvironmentProjectsListSchema = { tokens: { environment: string; projects: string[] }[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/admin/projects': {
      $get:
        | {
            input: { query: { archived?: boolean | undefined; view?: 'core' | undefined } }
            output: ProjectsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { archived?: boolean | undefined; view?: 'core' | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { archived?: boolean | undefined; view?: 'core' | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CreateProjectSchema }
            output: ProjectCreatedSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/validate': {
      $post:
        | { input: { json: ValidateProjectSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ValidateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ValidateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ValidateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId': {
      $put:
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: UpdateProjectSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/settings': {
      $put:
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & {
              json: UpdateProjectEnterpriseSettingsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/archive/:projectId': {
      $post:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/revive/:projectId': {
      $post:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/access': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectAccessSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { projectId: string } } & { json: ProjectAccessConfigurationSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAccessConfigurationSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAccessConfigurationSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectAddAccessSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/roles/:roleId/access': {
      $get:
        | {
            input: { param: { roleId: string } }
            output: ProjectRoleUsageSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { roleId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/users/:userId/roles': {
      $put:
        | {
            input: { param: { projectId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { projectId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; userId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/groups/:groupId/roles': {
      $put:
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; groupId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/changeProject': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: ChangeProjectSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/permissions': {
      $get: { input: {}; output: AdminPermissionsSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/metrics/rps': {
      $get: {
        input: {}
        output: RequestsPerSecondSegmentedSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/metrics/traffic': {
      $get: {
        input: { query: { grouping: 'daily' | 'monthly'; from: string; to: string } }
        output: TrafficUsageDataSegmentedCombinedSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/metrics/connection': {
      $get: {
        input: { query: { grouping: 'daily' | 'monthly'; from: string; to: string } }
        output: MeteredConnectionsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/metrics/request': {
      $get: {
        input: { query: { grouping: 'daily' | 'monthly'; from: string; to: string } }
        output: MeteredRequestsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/notifications': {
      $get: { input: {}; output: NotificationsSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/notifications/read': {
      $post: {
        input: { json: MarkNotificationsAsReadSchema }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/insights/lifecycle': {
      $get: {
        input: { query: { projects?: string | undefined } }
        output: LifecycleTrendsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/insights': {
      $get: {
        input: { query: { from?: string | undefined; to?: string | undefined } }
        output: InstanceInsightsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/email-subscription/:subscription': {
      $put:
        | {
            input: { param: { subscription: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { subscription: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { subscription: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { subscription: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/licensed-users': {
      $get: { input: {}; output: LicensedUsersSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/client/metrics/edge': {
      $post: {
        input: { json: EdgeInstanceDataSchema }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/api/client/edge-licensing/heartbeat': {
      $post:
        | { input: {}; output: EdgeLicenseStateSchema; outputFormat: 'json'; status: 202 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ready': {
      $get:
        | { input: {}; output: ReadyCheckSchema; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: HealthCheckSchema; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HealthCheckSchema; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/invite/:token/validate': {
      $get:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invite/:token/signup': {
      $post:
        | {
            input: { param: { token: string } } & { json: CreateInvitedUserSchema }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & { json: CreateInvitedUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & { json: CreateInvitedUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/auth/simple/login': {
      $post:
        | { input: { json: LoginSchema }; output: UserSchema; outputFormat: 'json'; status: 200 }
        | {
            input: { json: LoginSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/auth/reset/validate': {
      $get:
        | { input: {}; output: TokenUserSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/auth/reset/password': {
      $post:
        | { input: { json: ChangePasswordSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ChangePasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ChangePasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChangePasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/auth/reset/validate-password': {
      $post:
        | { input: { json: ValidatePasswordSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ValidatePasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidatePasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/auth/reset/password-email': {
      $post:
        | { input: { json: EmailSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: EmailSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EmailSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EmailSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/features/validate': {
      $post:
        | { input: { json: ValidateFeatureSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ValidateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ValidateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ValidateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/features/:featureName/tags': {
      $get:
        | {
            input: { param: { featureName: string } }
            output: TagsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { featureName: string } } & { json: TagSchema }
            output: TagSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { featureName: string } } & { json: TagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureName: string } } & { json: TagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } } & { json: TagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureName: string } } & { json: TagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { featureName: string } } & { json: UpdateTagsSchema }
            output: TagsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { featureName: string } } & { json: UpdateTagsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureName: string } } & { json: UpdateTagsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } } & { json: UpdateTagsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureName: string } } & { json: UpdateTagsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/features/:featureName/tags/:type/:value': {
      $delete:
        | {
            input: { param: { featureName: string; type: string; value: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { featureName: string; type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string; type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { featureName: string; type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/feature-types': {
      $get:
        | { input: {}; output: FeatureTypesSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/feature-types/:id/lifetime': {
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: FeatureTypeSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateFeatureTypeLifetimeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/archive/:featureName': {
      $delete:
        | {
            input: { param: { featureName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/archive/revive/:featureName': {
      $post:
        | {
            input: { param: { featureName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/strategies': {
      $get:
        | { input: {}; output: StrategiesSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: CreateStrategySchema }
            output: StrategySchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/strategies/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: StrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { name: string } } & { json: UpdateStrategySchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: UpdateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & { json: UpdateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & { json: UpdateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { json: UpdateStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/strategies/:strategyName/deprecate': {
      $post:
        | {
            input: { param: { strategyName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/strategies/:strategyName/reactivate': {
      $post:
        | {
            input: { param: { strategyName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { strategyName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/events': {
      $get:
        | {
            input: { query: { project?: string | undefined } }
            output: EventsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { project?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/events/:featureName': {
      $get:
        | {
            input: { param: { featureName: string } }
            output: FeatureEventsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/event-creators': {
      $get:
        | { input: {}; output: EventCreatorsSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/playground': {
      $post:
        | {
            input: { json: PlaygroundRequestSchema }
            output: PlaygroundResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PlaygroundRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PlaygroundRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/playground/advanced': {
      $post:
        | {
            input: { json: AdvancedPlaygroundRequestSchema }
            output: AdvancedPlaygroundResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdvancedPlaygroundRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdvancedPlaygroundRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/playground/features/:featureName': {
      $post:
        | {
            input: { param: { featureName: string } } & { json: PlaygroundFeatureRequestSchema }
            output: PlaygroundFeatureResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { featureName: string } } & { json: PlaygroundFeatureRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { featureName: string } } & { json: PlaygroundFeatureRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { featureName: string } } & { json: PlaygroundFeatureRequestSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/metrics/unknown-flags': {
      $get: { input: {}; output: UnknownFlagsResponseSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/metrics/applications/:appName': {
      $post:
        | {
            input: { param: { appName: string } } & { json: CreateApplicationSchema }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { appName: string } } & { json: CreateApplicationSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appName: string } } & { json: CreateApplicationSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appName: string } } & { json: CreateApplicationSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | { input: { param: { appName: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { appName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { appName: string } }
            output: ApplicationSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/metrics/applications': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            offset?: string | undefined
            limit?: string | undefined
            sortBy?: string | undefined
            sortOrder?: string | undefined
          }
        }
        output: ApplicationsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/metrics/applications/:appName/overview': {
      $get:
        | {
            input: { param: { appName: string } }
            output: ApplicationOverviewSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/metrics/instances/:appName/environment/:environment': {
      $get:
        | {
            input: { param: { appName: string; environment: string } }
            output: ApplicationEnvironmentInstancesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/metrics/sdks/outdated': {
      $get:
        | { input: {}; output: OutdatedSdksSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/client-metrics/features/:name/raw': {
      $get:
        | {
            input: { param: { name: string } }
            output: FeatureMetricsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/client-metrics/features/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: FeatureUsageSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/user': {
      $get:
        | { input: {}; output: MeSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/user/profile': {
      $get:
        | { input: {}; output: ProfileSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/user/change-password': {
      $post:
        | { input: { json: PasswordSchema }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: PasswordSchema }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PasswordSchema }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/admin/user/roles': {
      $get:
        | {
            input: { query: { projectId?: string | undefined } }
            output: RolesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { projectId?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { projectId?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user/tokens': {
      $get:
        | { input: {}; output: PatsSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | { input: { json: CreatePatSchema }; output: PatSchema; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreatePatSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePatSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePatSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/user/tokens/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/ui-config': {
      $get: { input: {}; output: UiConfigSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/ui-config/cors': {
      $post: { input: { json: SetCorsSchema }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/admin/context': {
      $get: {
        input: { query: { include?: string | undefined } }
        output: ContextFieldsSchema
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateContextFieldSchema }
        output: ContextFieldSchema
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/admin/context/:contextField': {
      $get: {
        input: { param: { contextField: string } }
        output: ContextFieldSchema
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { contextField: string } } & { json: UpdateContextFieldSchema }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { contextField: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/context/:contextField/strategies': {
      $get:
        | {
            input: { param: { contextField: string } }
            output: ContextFieldStrategiesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contextField: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/context/:contextField/legal-values': {
      $post: {
        input: { param: { contextField: string } } & { json: LegalValueSchema }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/context/:contextField/legal-values/:legalValue': {
      $delete: {
        input: { param: { contextField: string; legalValue: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/context/validate': {
      $post: { input: { json: NameSchema }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/admin/features-batch/export': {
      $post:
        | {
            input: { json: ExportQuerySchema }
            output: ExportResultSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportQuerySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/features-batch/validate': {
      $post:
        | {
            input: { json: ImportTogglesSchema }
            output: ImportTogglesValidateSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImportTogglesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/features-batch/import': {
      $post:
        | { input: { json: ImportTogglesSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: ImportTogglesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/tags': {
      $get:
        | { input: {}; output: TagsSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CreateTagSchema }
            output: TagWithVersionSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/tags/:type': {
      $get:
        | {
            input: { param: { type: string } }
            output: TagsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/tags/:type/:value': {
      $get:
        | {
            input: { param: { type: string; value: string } }
            output: TagWithVersionSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: string; value: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { type: string; value: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/tags/:type/:value/rename': {
      $post:
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: TagWithVersionSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { type: string; value: string } } & { json: RenameTagSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/tag-types': {
      $get:
        | { input: {}; output: TagTypesSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: TagTypeSchema }
            output: TagTypeSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/tag-types/validate': {
      $post:
        | {
            input: { json: TagTypeSchema }
            output: ValidateTagTypeSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: TagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/tag-types/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: TagTypeSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & { json: UpdateTagTypeSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/tag-types/:name/values': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: TagValuesUsageSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/addons': {
      $get:
        | {
            input: { query: { project?: string | undefined } }
            output: AddonsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { project?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: AddonCreateUpdateSchema }
            output: AddonSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/addons/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AddonSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: AddonSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/addons/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: IntegrationEventsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: string | undefined; offset?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/api-tokens': {
      $get:
        | {
            input: { query: { appName?: string | undefined } }
            output: ApiTokensSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { appName?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { appName?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { appName?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CreateApiTokenSchema }
            output: ApiTokenSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/api-tokens/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: ApiTokensSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/api-tokens/:token': {
      $put:
        | {
            input: { param: { token: string } } & { json: UpdateApiTokenSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { token: string } } & { json: UpdateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & { json: UpdateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & { json: UpdateApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user-admin/inactive': {
      $get: { input: {}; output: InactiveUsersSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/user-admin/inactive/delete': {
      $post:
        | { input: { json: IdsSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: IdsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IdsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user-admin/validate-password': {
      $post:
        | { input: { json: PasswordSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/user-admin/:id/change-password': {
      $post:
        | {
            input: { param: { id: number } } & { json: PasswordSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: PasswordSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user-admin/reset-password': {
      $post:
        | {
            input: { json: IdSchema }
            output: ResetPasswordSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IdSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: IdSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/user-admin': {
      $get:
        | { input: {}; output: UsersSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CreateUserSchema }
            output: CreateUserResponseSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user-admin/search': {
      $get:
        | {
            input: { query: { q?: string | undefined } }
            output: UsersSearchSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/user-admin/access': {
      $get:
        | { input: {}; output: UsersGroupsBaseSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/user-admin/admin-count': {
      $get:
        | { input: {}; output: AdminCountSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/user-admin/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: number } } & { json: UpdateUserSchema }
            output: CreateUserResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UpdateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UpdateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: UpdateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UpdateUserSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/user-admin/scim-users': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/feedback': {
      $post:
        | {
            input: { json: FeedbackCreateSchema }
            output: FeedbackResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FeedbackCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FeedbackCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FeedbackCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/feedback/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: FeedbackUpdateSchema }
            output: FeedbackResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: FeedbackUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: FeedbackUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: FeedbackUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/overview': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectOverviewSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/dora': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectDoraMetricsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/applications': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                query?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: ProjectApplicationsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                query?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                query?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                query?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/flag-creators': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectFlagCreatorsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/sdks/outdated': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: OutdatedSdksSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment': {
      $get:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: FeatureEnvironmentSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/off': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/on': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/on': {
      $post:
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/off': {
      $post:
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: BulkToggleFeaturesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies': {
      $get:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: FeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: FeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId': {
      $get:
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: FeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: FeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: UpdateFeatureStrategySchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $patch:
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: FeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectId: string
                featureName: string
                environment: string
                strategyId: string
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/set-sort-order': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: SetStrategySortOrderSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: SetStrategySortOrderSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: SetStrategySortOrderSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: SetStrategySortOrderSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/features': {
      $get:
        | {
            input: { param: { projectId: string } } & { query: { view?: 'core' | undefined } }
            output: ProjectFeaturesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { query: { view?: 'core' | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { query: { view?: 'core' | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { query: { view?: 'core' | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: CreateFeatureSchema }
            output: FeatureSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: CreateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: CreateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: CreateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: CreateFeatureSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/clone': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: CloneFeatureSchema
            }
            output: FeatureSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: CloneFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: CloneFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: CloneFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: CloneFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName': {
      $get:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: FeatureSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: UpdateFeatureSchema
            }
            output: FeatureSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: UpdateFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: UpdateFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: UpdateFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: UpdateFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $patch:
        | {
            input: { param: { projectId: string; featureName: string } } & { json: PatchesSchema }
            output: FeatureSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: PatchesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/stale': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: BatchStaleSchema }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { projectId: string } } & { json: BatchStaleSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: BatchStaleSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: BatchStaleSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/tags': {
      $put:
        | {
            input: { param: { projectId: string } } & { json: TagsBulkAddSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: TagsBulkAddSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: TagsBulkAddSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: TagsBulkAddSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: TagsBulkAddSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:child/dependencies': {
      $post:
        | {
            input: { param: { projectId: string; child: string } } & {
              json: CreateDependentFeatureSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; child: string } } & {
              json: CreateDependentFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; child: string } } & {
              json: CreateDependentFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; child: string } } & {
              json: CreateDependentFeatureSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { projectId: string; child: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:child/dependencies/:parent': {
      $delete:
        | {
            input: { param: { projectId: string; child: string; parent: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; child: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; child: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; child: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:child/parents': {
      $get:
        | {
            input: { param: { projectId: string; child: string } }
            output: ParentFeatureOptionsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; child: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:parent/parent-variants': {
      $get:
        | {
            input: { param: { projectId: string; parent: string } }
            output: ParentVariantOptionsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; parent: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/dependencies': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: DependenciesExistSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/environments': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: ProjectEnvironmentSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectEnvironmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectEnvironmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectEnvironmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/admin/projects/:projectId/environments/:environment': {
      $delete:
        | {
            input: { param: { projectId: string; environment: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/environments/:environment/default-strategy': {
      $post:
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: CreateFeatureStrategySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; environment: string } } & {
              json: CreateFeatureStrategySchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/admin/projects/:projectId/health-report': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: HealthReportSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants': {
      $get:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: FeatureVariantsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: PatchesSchema
            }
            output: FeatureVariantsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: PatchesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: PatchesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: PatchesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: PatchesSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: VariantsSchema
            }
            output: FeatureVariantsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: VariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: VariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; environment: string } } & {
              json: VariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/variants-batch': {
      $put:
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: PushVariantsSchema
            }
            output: FeatureVariantsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: PushVariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: PushVariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: PushVariantsSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/api-tokens': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ApiTokensSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: CreateProjectApiTokenSchema }
            output: ApiTokenSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectId: string } } & { json: CreateProjectApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: CreateProjectApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: CreateProjectApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: CreateProjectApiTokenSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/api-tokens/:token': {
      $delete:
        | {
            input: { param: { projectId: string; token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/delete': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/revive': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/projects/:projectId/archive/validate': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: ValidateArchiveFeaturesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/archive': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: BatchFeaturesSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/insights': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectInsightsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/status': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ProjectStatusSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/lifecycle': {
      $get:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: FeatureLifecycleSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/complete': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: FeatureLifecycleCompletedSchema
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: FeatureLifecycleCompletedSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: FeatureLifecycleCompletedSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & {
              json: FeatureLifecycleCompletedSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/uncomplete': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/link': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } } & { json: LinkSchema }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: LinkSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: LinkSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: LinkSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string } } & { json: LinkSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/link/:linkId': {
      $put:
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } } & {
              json: LinkSchema
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $delete:
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; featureName: string; linkId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/context': {
      $get: {
        input: { param: { projectId: string } } & { query: { include?: string | undefined } }
        output: ContextFieldsSchema
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & { json: CreateContextFieldSchema }
        output: ContextFieldSchema
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/admin/projects/:projectId/context/:contextField': {
      $get: {
        input: { param: { projectId: string; contextField: string } }
        output: ContextFieldSchema
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; contextField: string } } & {
          json: UpdateContextFieldSchema
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { projectId: string; contextField: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/projects/:projectId/context/:contextField/strategies': {
      $get:
        | {
            input: { param: { projectId: string; contextField: string } }
            output: ContextFieldStrategiesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; contextField: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/admin/projects/:projectId/context/:contextField/legal-values': {
      $post: {
        input: { param: { projectId: string; contextField: string } } & { json: LegalValueSchema }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/projects/:projectId/context/:contextField/legal-values/:legalValue': {
      $delete: {
        input: { param: { projectId: string; contextField: string; legalValue: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/projects/:projectId/context/validate': {
      $post: {
        input: { param: { projectId: string } } & { json: NameSchema }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/admin/projects/:projectId/addons': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: AddonsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: AddonSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { projectId: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/projects/:projectId/addons/:id': {
      $put:
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: AddonSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { projectId: string; id: string } } & { json: AddonCreateUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/lifecycle/count': {
      $get:
        | { input: {}; output: FeatureLifecycleCountSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/personal-dashboard': {
      $get:
        | { input: {}; output: PersonalDashboardSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/personal-dashboard/:projectId': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: PersonalDashboardProjectDetailsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/environments': {
      $get:
        | { input: {}; output: EnvironmentsSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/environments/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: EnvironmentSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/environments/project/:projectId': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: EnvironmentsProjectSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/environments/sort-order': {
      $put:
        | { input: { json: SortOrderSchema }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: SortOrderSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SortOrderSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SortOrderSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/environments/:name/on': {
      $post:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/environments/:name/off': {
      $post:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/splash/:id': {
      $post:
        | {
            input: { param: { id: string } }
            output: SplashResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/constraints/validate': {
      $post:
        | { input: { json: ConstraintSchema }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ConstraintSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConstraintSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ConstraintSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ConstraintSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/invite-link/tokens': {
      $get: { input: {}; output: PublicSignupTokensSchema; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: PublicSignupTokenCreateSchema }
            output: PublicSignupTokenSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PublicSignupTokenCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PublicSignupTokenCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PublicSignupTokenCreateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/invite-link/tokens/:token': {
      $get:
        | {
            input: { param: { token: string } }
            output: PublicSignupTokenSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { token: string } } & { json: PublicSignupTokenUpdateSchema }
            output: PublicSignupTokenSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & { json: PublicSignupTokenUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & { json: PublicSignupTokenUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & { json: PublicSignupTokenUpdateSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/instance-admin/statistics/csv': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/admin/instance-admin/statistics': {
      $get: { input: {}; output: InstanceAdminStatsSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/projects/:projectId/features/:featureName/favorites': {
      $post:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; featureName: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/projects/:projectId/favorites': {
      $post:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/segments/validate': {
      $post:
        | { input: { json: NameSchema }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: NameSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NameSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NameSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: NameSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/segments/strategies/:strategyId': {
      $get: {
        input: { param: { strategyId: string } }
        output: SegmentsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/segments/strategies': {
      $post:
        | {
            input: { json: UpdateFeatureStrategySegmentsSchema }
            output: UpdateFeatureStrategySegmentsSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UpdateFeatureStrategySegmentsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateFeatureStrategySegmentsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateFeatureStrategySegmentsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateFeatureStrategySegmentsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/admin/segments/:id/strategies': {
      $get: {
        input: { param: { id: number } }
        output: SegmentStrategiesSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/segments/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $get:
        | {
            input: { param: { id: number } }
            output: AdminSegmentSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/segments': {
      $post:
        | {
            input: { json: UpsertSegmentSchema }
            output: AdminSegmentSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: UpsertSegmentSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
      $get: { input: {}; output: SegmentsSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/maintenance': {
      $post:
        | {
            input: { json: ToggleMaintenanceSchema }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ToggleMaintenanceSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ToggleMaintenanceSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ToggleMaintenanceSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | { input: {}; output: MaintenanceSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/telemetry/settings': {
      $get: { input: {}; output: TelemetrySettingsSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/admin/search/features': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                project?: string | undefined
                state?: string | undefined
                lifecycle?: string | undefined
                type?: string | undefined
                createdBy?: string | undefined
                tag?: string | undefined
                segment?: string | undefined
                status?: string[] | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                favoritesFirst?: string | undefined
                archived?: string | undefined
                favorite?: string | undefined
                createdAt?: string | undefined
                lastSeenAt?: string | undefined
              }
            }
            output: SearchFeaturesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                project?: string | undefined
                state?: string | undefined
                lifecycle?: string | undefined
                type?: string | undefined
                createdBy?: string | undefined
                tag?: string | undefined
                segment?: string | undefined
                status?: string[] | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                favoritesFirst?: string | undefined
                archived?: string | undefined
                favorite?: string | undefined
                createdAt?: string | undefined
                lastSeenAt?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                project?: string | undefined
                state?: string | undefined
                lifecycle?: string | undefined
                type?: string | undefined
                createdBy?: string | undefined
                tag?: string | undefined
                segment?: string | undefined
                status?: string[] | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                favoritesFirst?: string | undefined
                archived?: string | undefined
                favorite?: string | undefined
                createdAt?: string | undefined
                lastSeenAt?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                project?: string | undefined
                state?: string | undefined
                lifecycle?: string | undefined
                type?: string | undefined
                createdBy?: string | undefined
                tag?: string | undefined
                segment?: string | undefined
                status?: string[] | undefined
                offset?: string | undefined
                limit?: string | undefined
                sortBy?: string | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                favoritesFirst?: string | undefined
                archived?: string | undefined
                favorite?: string | undefined
                createdAt?: string | undefined
                lastSeenAt?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/admin/search/events': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            id?: string | undefined
            groupId?: string | undefined
            feature?: string | undefined
            project?: string | undefined
            type?: string | undefined
            createdBy?: string | undefined
            from?: string | undefined
            to?: string | undefined
            offset?: string | undefined
            limit?: string | undefined
            environment?: string | undefined
          }
        }
        output: EventSearchResponseSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/admin/flag-creators': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: FlagCreatorsSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                q?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/admin/record-ui-error': {
      $post:
        | { input: { json: RecordUiErrorSchema }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: RecordUiErrorSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RecordUiErrorSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/client/features/:featureName': {
      $get: {
        input: { param: { featureName: string } }
        output: ClientFeatureSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/client/features': {
      $get: { input: {}; output: ClientFeaturesSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/client/metrics': {
      $post:
        | { input: { json: ClientMetricsSchema }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: ClientMetricsSchema }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ClientMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/client/metrics/bulk': {
      $post:
        | { input: { json: BulkMetricsSchema }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: BulkMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: BulkMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/api/client/register': {
      $post: {
        input: { json: ClientApplicationSchema }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/api/frontend': {
      $get:
        | { input: {}; output: FrontendApiFeaturesSchema; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: FrontendApiFeaturesPostSchema }
            output: FrontendApiFeaturesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FrontendApiFeaturesPostSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FrontendApiFeaturesPostSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/frontend/client/metrics': {
      $post:
        | { input: { json: ClientMetricsSchema }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ClientMetricsSchema }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ClientMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ClientMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ClientMetricsSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/frontend/client/register': {
      $post:
        | {
            input: { json: FrontendApiClientSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: FrontendApiClientSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FrontendApiClientSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FrontendApiClientSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/edge/validate': {
      $post:
        | {
            input: { json: TokenStringListSchema }
            output: ValidatedEdgeTokensSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenStringListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TokenStringListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: TokenStringListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  } & {
    '/edge/issue-token': {
      $post:
        | {
            input: { json: EdgeEnvironmentProjectsListSchema }
            output: ValidatedEdgeTokensSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EdgeEnvironmentProjectsListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EdgeEnvironmentProjectsListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EdgeEnvironmentProjectsListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: EdgeEnvironmentProjectsListSchema }
            output: {
              id?: string | undefined
              name?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 415
          }
    }
  },
  '/'
>
export default routes
