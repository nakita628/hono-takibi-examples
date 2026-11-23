type Permission = {
  action?: string | undefined
  created?: string | undefined
  scope?: string | undefined
  updated?: string | undefined
}
type RoleDTO = {
  created: string
  delegatable?: boolean | undefined
  description: string
  displayName: string
  global?: boolean | undefined
  group: string
  hidden?: boolean | undefined
  mapped?: boolean | undefined
  name: string
  permissions?: Permission[] | undefined
  uid: string
  updated: string
  version: bigint
}
type ErrorResponseBody = {
  error?: string | undefined
  message: string
  status?: string | undefined
}
type CreateRoleForm = {
  description?: string | undefined
  displayName?: string | undefined
  global?: boolean | undefined
  group?: string | undefined
  hidden?: boolean | undefined
  name?: string | undefined
  permissions?: Permission[] | undefined
  uid?: string | undefined
}
type SuccessResponseBody = { message?: string | undefined }
type UpdateRoleCommand = {
  description: string
  displayName: string
  global?: boolean | undefined
  group: string
  hidden?: boolean | undefined
  name?: string | undefined
  permissions?: Permission[] | undefined
}
type RoleAssignmentsDTO = {
  role_uid?: string | undefined
  service_accounts?: bigint[] | undefined
  teams?: bigint[] | undefined
  users?: bigint[] | undefined
}
type SetRoleAssignmentsCommand = {
  service_accounts?: bigint[] | undefined
  teams?: bigint[] | undefined
  users?: bigint[] | undefined
}
type AccessControlStatus = { enabled?: boolean | undefined }
type RolesSearchQuery = {
  includeHidden?: boolean | undefined
  orgId?: bigint | undefined
  teamIds?: bigint[] | undefined
  userIds?: bigint[] | undefined
}
type AddTeamRoleCommand = { roleUid?: string | undefined }
type SetTeamRolesCommand = { includeHidden?: boolean | undefined; roleUids?: string[] | undefined }
type AddUserRoleCommand = { global?: boolean | undefined; roleUid?: string | undefined }
type SetUserRolesCommand = {
  global?: boolean | undefined
  includeHidden?: boolean | undefined
  roleUids?: string[] | undefined
}
type Assignments = {
  builtInRoles?: boolean | undefined
  serviceAccounts?: boolean | undefined
  teams?: boolean | undefined
  users?: boolean | undefined
}
type Description = { assignments?: Assignments | undefined; permissions?: string[] | undefined }
type ResourcePermissionDTO = {
  actions?: string[] | undefined
  builtInRole?: string | undefined
  id?: bigint | undefined
  isInherited?: boolean | undefined
  isManaged?: boolean | undefined
  isServiceAccount?: boolean | undefined
  permission?: string | undefined
  roleName?: string | undefined
  team?: string | undefined
  teamAvatarUrl?: string | undefined
  teamId?: bigint | undefined
  teamUid?: string | undefined
  userAvatarUrl?: string | undefined
  userId?: bigint | undefined
  userLogin?: string | undefined
  userUid?: string | undefined
}
type SetResourcePermissionCommand = {
  builtInRole?: string | undefined
  permission?: string | undefined
  teamId?: bigint | undefined
  userId?: bigint | undefined
}
type SetPermissionsCommand = { permissions?: SetResourcePermissionCommand[] | undefined }
type SetPermissionCommand = { permission?: string | undefined }
type Duration = bigint
type FailedUser = { Error?: string | undefined; Login?: string | undefined }
type SyncResult = {
  Elapsed?: Duration | undefined
  FailedUsers?: FailedUser[] | undefined
  MissingUserIds?: bigint[] | undefined
  Started?: string | undefined
  UpdatedUserIds?: bigint[] | undefined
}
type ActiveSyncStatusDTO = {
  enabled?: boolean | undefined
  nextSync?: string | undefined
  prevSync?: SyncResult | undefined
  schedule?: string | undefined
}
type SettingsBag = { [x: string]: { [x: string]: string } }
type AdminStats = {
  activeAdmins?: bigint | undefined
  activeDevices?: bigint | undefined
  activeEditors?: bigint | undefined
  activeSessions?: bigint | undefined
  activeUsers?: bigint | undefined
  activeViewers?: bigint | undefined
  admins?: bigint | undefined
  alerts?: bigint | undefined
  dailyActiveAdmins?: bigint | undefined
  dailyActiveEditors?: bigint | undefined
  dailyActiveSessions?: bigint | undefined
  dailyActiveUsers?: bigint | undefined
  dailyActiveViewers?: bigint | undefined
  dashboards?: bigint | undefined
  datasources?: bigint | undefined
  editors?: bigint | undefined
  monthlyActiveUsers?: bigint | undefined
  orgs?: bigint | undefined
  playlists?: bigint | undefined
  snapshots?: bigint | undefined
  stars?: bigint | undefined
  tags?: bigint | undefined
  users?: bigint | undefined
  viewers?: bigint | undefined
}
type Password = string
type AdminCreateUserForm = {
  email?: string | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  password?: Password | undefined
}
type AdminCreateUserResponse = {
  id?: bigint | undefined
  message?: string | undefined
  uid?: string | undefined
}
type UserToken = {
  AuthToken?: string | undefined
  AuthTokenSeen?: boolean | undefined
  ClientIp?: string | undefined
  CreatedAt?: bigint | undefined
  ExternalSessionId?: bigint | undefined
  Id?: bigint | undefined
  PrevAuthToken?: string | undefined
  RevokedAt?: bigint | undefined
  RotatedAt?: bigint | undefined
  SeenAt?: bigint | undefined
  UnhashedToken?: string | undefined
  UpdatedAt?: bigint | undefined
  UserAgent?: string | undefined
  UserId?: bigint | undefined
}
type AdminUpdateUserPasswordForm = { password?: Password | undefined }
type AdminUpdateUserPermissionsForm = { isGrafanaAdmin?: boolean | undefined }
type QuotaDTO = {
  limit?: bigint | undefined
  org_id?: bigint | undefined
  target?: string | undefined
  used?: bigint | undefined
  user_id?: bigint | undefined
}
type UpdateQuotaCmd = { limit?: bigint | undefined; target?: string | undefined }
type RevokeAuthTokenCmd = { authTokenId?: bigint | undefined }
type Json = { [x: string]: unknown }
type Annotation = {
  alertId?: bigint | undefined
  alertName?: string | undefined
  alertUID?: string | undefined
  avatarUrl?: string | undefined
  created?: bigint | undefined
  dashboardId?: bigint | undefined
  dashboardUID?: string | undefined
  data?: Json | undefined
  email?: string | undefined
  id?: bigint | undefined
  login?: string | undefined
  newState?: string | undefined
  panelId?: bigint | undefined
  prevState?: string | undefined
  tags?: string[] | undefined
  text?: string | undefined
  time?: bigint | undefined
  timeEnd?: bigint | undefined
  updated?: bigint | undefined
  userId?: bigint | undefined
  userUID?: string | undefined
}
type PostAnnotationsCmd = {
  dashboardId?: bigint | undefined
  dashboardUID?: string | undefined
  data?: Json | undefined
  panelId?: bigint | undefined
  tags?: string[] | undefined
  text: string
  time?: bigint | undefined
  timeEnd?: bigint | undefined
}
type PostGraphiteAnnotationsCmd = {
  data?: string | undefined
  tags?: { [x: string]: unknown } | undefined
  what?: string | undefined
  when?: bigint | undefined
}
type MassDeleteAnnotationsCmd = {
  annotationId?: bigint | undefined
  dashboardId?: bigint | undefined
  dashboardUID?: string | undefined
  panelId?: bigint | undefined
}
type TagsDTO = { count?: bigint | undefined; tag?: string | undefined }
type FindTagsResult = { tags?: TagsDTO[] | undefined }
type GetAnnotationTagsResponse = { result?: FindTagsResult | undefined }
type PatchAnnotationsCmd = {
  data?: Json | undefined
  id?: bigint | undefined
  tags?: string[] | undefined
  text?: string | undefined
  time?: bigint | undefined
  timeEnd?: bigint | undefined
}
type UpdateAnnotationsCmd = {
  data?: Json | undefined
  id?: bigint | undefined
  tags?: string[] | undefined
  text?: string | undefined
  time?: bigint | undefined
  timeEnd?: bigint | undefined
}
type DeviceDTO = {
  avatarUrl?: string | undefined
  clientIp?: string | undefined
  createdAt?: string | undefined
  deviceId?: string | undefined
  lastSeenAt?: string | undefined
  updatedAt?: string | undefined
  userAgent?: string | undefined
}
type DeviceSearchHitDTO = {
  clientIp?: string | undefined
  createdAt?: string | undefined
  deviceId?: string | undefined
  lastSeenAt?: string | undefined
  updatedAt?: string | undefined
  userAgent?: string | undefined
}
type SearchDeviceQueryResult = {
  devices?: DeviceSearchHitDTO[] | undefined
  page?: bigint | undefined
  perPage?: bigint | undefined
  totalCount?: bigint | undefined
}
type CloudMigrationSessionResponseDTO = {
  created?: string | undefined
  slug?: string | undefined
  uid?: string | undefined
  updated?: string | undefined
}
type CloudMigrationSessionListResponseDTO = {
  sessions?: CloudMigrationSessionResponseDTO[] | undefined
}
type CloudMigrationSessionRequestDTO = { authToken?: string | undefined }
type CreateSnapshotRequestDTO = {
  resourceTypes?:
    | (
        | 'DASHBOARD'
        | 'DATASOURCE'
        | 'FOLDER'
        | 'LIBRARY_ELEMENT'
        | 'ALERT_RULE'
        | 'ALERT_RULE_GROUP'
        | 'CONTACT_POINT'
        | 'NOTIFICATION_POLICY'
        | 'NOTIFICATION_TEMPLATE'
        | 'MUTE_TIMING'
        | 'PLUGIN'
      )[]
    | undefined
}
type CreateSnapshotResponseDTO = { uid?: string | undefined }
type MigrateDataResponseItemDTO = {
  errorCode?:
    | 'ALERT_RULES_QUOTA_REACHED'
    | 'ALERT_RULES_GROUP_QUOTA_REACHED'
    | 'DATASOURCE_NAME_CONFLICT'
    | 'DATASOURCE_INVALID_URL'
    | 'DATASOURCE_ALREADY_MANAGED'
    | 'FOLDER_NAME_CONFLICT'
    | 'DASHBOARD_ALREADY_MANAGED'
    | 'LIBRARY_ELEMENT_NAME_CONFLICT'
    | 'UNSUPPORTED_DATA_TYPE'
    | 'RESOURCE_CONFLICT'
    | 'UNEXPECTED_STATUS_CODE'
    | 'INTERNAL_SERVICE_ERROR'
    | 'GENERIC_ERROR'
    | undefined
  message?: string | undefined
  name?: string | undefined
  parentName?: string | undefined
  refId: string
  status: 'OK' | 'WARNING' | 'ERROR' | 'PENDING' | 'UNKNOWN'
  type:
    | 'DASHBOARD'
    | 'DATASOURCE'
    | 'FOLDER'
    | 'LIBRARY_ELEMENT'
    | 'ALERT_RULE'
    | 'ALERT_RULE_GROUP'
    | 'CONTACT_POINT'
    | 'NOTIFICATION_POLICY'
    | 'NOTIFICATION_TEMPLATE'
    | 'MUTE_TIMING'
    | 'PLUGIN'
}
type SnapshotResourceStats = {
  statuses?: { [x: string]: bigint } | undefined
  total?: bigint | undefined
  types?: { [x: string]: bigint } | undefined
}
type GetSnapshotResponseDTO = {
  created?: string | undefined
  finished?: string | undefined
  results?: MigrateDataResponseItemDTO[] | undefined
  sessionUid?: string | undefined
  stats?: SnapshotResourceStats | undefined
  status?:
    | 'INITIALIZING'
    | 'CREATING'
    | 'PENDING_UPLOAD'
    | 'UPLOADING'
    | 'PENDING_PROCESSING'
    | 'PROCESSING'
    | 'FINISHED'
    | 'CANCELED'
    | 'ERROR'
    | 'UNKNOWN'
    | undefined
  uid?: string | undefined
}
type SnapshotDTO = {
  created?: string | undefined
  finished?: string | undefined
  sessionUid?: string | undefined
  status?:
    | 'INITIALIZING'
    | 'CREATING'
    | 'PENDING_UPLOAD'
    | 'UPLOADING'
    | 'PENDING_PROCESSING'
    | 'PROCESSING'
    | 'FINISHED'
    | 'CANCELED'
    | 'ERROR'
    | 'UNKNOWN'
    | undefined
  uid?: string | undefined
}
type SnapshotListResponseDTO = { snapshots?: SnapshotDTO[] | undefined }
type ResourceDependencyDTO = {
  dependencies?:
    | (
        | 'DASHBOARD'
        | 'DATASOURCE'
        | 'FOLDER'
        | 'LIBRARY_ELEMENT'
        | 'ALERT_RULE'
        | 'ALERT_RULE_GROUP'
        | 'CONTACT_POINT'
        | 'NOTIFICATION_POLICY'
        | 'NOTIFICATION_TEMPLATE'
        | 'MUTE_TIMING'
        | 'PLUGIN'
      )[]
    | undefined
  resourceType?:
    | 'DASHBOARD'
    | 'DATASOURCE'
    | 'FOLDER'
    | 'LIBRARY_ELEMENT'
    | 'ALERT_RULE'
    | 'ALERT_RULE_GROUP'
    | 'CONTACT_POINT'
    | 'NOTIFICATION_POLICY'
    | 'NOTIFICATION_TEMPLATE'
    | 'MUTE_TIMING'
    | 'PLUGIN'
    | undefined
}
type ResourceDependenciesResponseDTO = {
  resourceDependencies?: ResourceDependencyDTO[] | undefined
}
type GetAccessTokenResponseDTO = {
  createdAt?: string | undefined
  displayName?: string | undefined
  expiresAt?: string | undefined
  firstUsedAt?: string | undefined
  id?: string | undefined
  lastUsedAt?: string | undefined
}
type CreateAccessTokenResponseDTO = { token?: string | undefined }
type PrometheusRule = {
  alert?: string | undefined
  annotations?: { [x: string]: string } | undefined
  expr?: string | undefined
  for?: string | undefined
  keep_firing_for?: string | undefined
  labels?: { [x: string]: string } | undefined
  record?: string | undefined
}
type PrometheusRuleGroup = {
  interval?: Duration | undefined
  labels?: { [x: string]: string } | undefined
  limit?: bigint | undefined
  name?: string | undefined
  query_offset?: string | undefined
  rules?: PrometheusRule[] | undefined
}
type PrometheusNamespace = { Body?: { [x: string]: PrometheusRuleGroup[] } | undefined }
type PublicError = {
  extra?: { [x: string]: { [x: string]: unknown } } | undefined
  message?: string | undefined
  messageId?: string | undefined
  statusCode?: bigint | undefined
}
type ForbiddenError = { body?: PublicError | undefined }
type NotFound = { [x: string]: unknown }
type ConvertPrometheusResponse = {
  error?: string | undefined
  errorType?: string | undefined
  status?: string | undefined
}
type DashboardSnapshotDTO = {
  created?: string | undefined
  expires?: string | undefined
  external?: boolean | undefined
  externalUrl?: string | undefined
  key?: string | undefined
  name?: string | undefined
  updated?: string | undefined
}
type SaveDashboardCommand = {
  UpdatedAt?: string | undefined
  dashboard?: Json | undefined
  folderId?: bigint | undefined
  folderUid?: string | undefined
  isFolder?: boolean | undefined
  message?: string | undefined
  overwrite?: boolean | undefined
  userId?: bigint | undefined
}
type AnnotationActions = {
  canAdd?: boolean | undefined
  canDelete?: boolean | undefined
  canEdit?: boolean | undefined
}
type AnnotationPermission = { dashboard?: AnnotationActions | undefined }
type DashboardMeta = {
  annotationsPermissions?: AnnotationPermission | undefined
  apiVersion?: string | undefined
  canAdmin?: boolean | undefined
  canDelete?: boolean | undefined
  canEdit?: boolean | undefined
  canSave?: boolean | undefined
  canStar?: boolean | undefined
  created?: string | undefined
  createdBy?: string | undefined
  expires?: string | undefined
  folderId?: bigint | undefined
  folderTitle?: string | undefined
  folderUid?: string | undefined
  folderUrl?: string | undefined
  hasAcl?: boolean | undefined
  isFolder?: boolean | undefined
  isSnapshot?: boolean | undefined
  provisioned?: boolean | undefined
  provisionedExternalId?: string | undefined
  publicDashboardEnabled?: boolean | undefined
  slug?: string | undefined
  type?: string | undefined
  updated?: string | undefined
  updatedBy?: string | undefined
  url?: string | undefined
  version?: bigint | undefined
}
type GetHomeDashboardResponse = {
  dashboard?: Json | undefined
  meta?: DashboardMeta | undefined
  redirectUri?: string | undefined
}
type ImportDashboardInput = {
  name?: string | undefined
  pluginId?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type ImportDashboardRequest = {
  dashboard?: Json | undefined
  folderId?: bigint | undefined
  folderUid?: string | undefined
  inputs?: ImportDashboardInput[] | undefined
  overwrite?: boolean | undefined
  path?: string | undefined
  pluginId?: string | undefined
}
type ImportDashboardResponse = {
  dashboardId?: bigint | undefined
  description?: string | undefined
  folderId?: bigint | undefined
  folderUid?: string | undefined
  imported?: boolean | undefined
  importedRevision?: bigint | undefined
  importedUri?: string | undefined
  importedUrl?: string | undefined
  path?: string | undefined
  pluginId?: string | undefined
  removed?: boolean | undefined
  revision?: bigint | undefined
  slug?: string | undefined
  title?: string | undefined
  uid?: string | undefined
}
type PublicDashboardListResponse = {
  accessToken?: string | undefined
  dashboardUid?: string | undefined
  isEnabled?: boolean | undefined
  slug?: string | undefined
  title?: string | undefined
  uid?: string | undefined
}
type PublicDashboardListResponseWithPagination = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  publicDashboards?: PublicDashboardListResponse[] | undefined
  totalCount?: bigint | undefined
}
type PublicError2 = {
  extra?: { [x: string]: { [x: string]: unknown } } | undefined
  message?: string | undefined
  messageId: string
  statusCode: bigint
}
type DashboardTagCloudItem = { count?: bigint | undefined; term?: string | undefined }
type EmailDTO = { recipient?: string | undefined; uid?: string | undefined }
type ShareType = string
type PublicDashboard = {
  accessToken?: string | undefined
  annotationsEnabled?: boolean | undefined
  createdAt?: string | undefined
  createdBy?: bigint | undefined
  dashboardUid?: string | undefined
  isEnabled?: boolean | undefined
  recipients?: EmailDTO[] | undefined
  share?: ShareType | undefined
  timeSelectionEnabled?: boolean | undefined
  uid?: string | undefined
  updatedAt?: string | undefined
  updatedBy?: bigint | undefined
}
type PublicDashboardDTO = {
  accessToken?: string | undefined
  annotationsEnabled?: boolean | undefined
  isEnabled?: boolean | undefined
  share?: ShareType | undefined
  timeSelectionEnabled?: boolean | undefined
  uid?: string | undefined
}
type DashboardFullWithMeta = { dashboard?: Json | undefined; meta?: DashboardMeta | undefined }
type DashboardaccessPermissionType = bigint
type DashboardACLInfoDTO = {
  created?: string | undefined
  dashboardId?: bigint | undefined
  folderId?: bigint | undefined
  folderUid?: string | undefined
  inherited?: boolean | undefined
  isFolder?: boolean | undefined
  permission?: DashboardaccessPermissionType | undefined
  permissionName?: string | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
  slug?: string | undefined
  team?: string | undefined
  teamAvatarUrl?: string | undefined
  teamEmail?: string | undefined
  teamId?: bigint | undefined
  teamUid?: string | undefined
  title?: string | undefined
  uid?: string | undefined
  updated?: string | undefined
  url?: string | undefined
  userAvatarUrl?: string | undefined
  userEmail?: string | undefined
  userId?: bigint | undefined
  userLogin?: string | undefined
  userUid?: string | undefined
}
type DashboardACLUpdateItem = {
  permission?: DashboardaccessPermissionType | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
  teamId?: bigint | undefined
  userId?: bigint | undefined
}
type UpdateDashboardACLCommand = { items?: DashboardACLUpdateItem[] | undefined }
type RestoreDashboardVersionCommand = { version?: bigint | undefined }
type DashboardVersionMeta = {
  created?: string | undefined
  createdBy?: string | undefined
  dashboardId?: bigint | undefined
  data?: Json | undefined
  id?: bigint | undefined
  message?: string | undefined
  parentVersion?: bigint | undefined
  restoredFrom?: bigint | undefined
  uid?: string | undefined
  version?: bigint | undefined
}
type DashboardVersionResponseMeta = {
  continueToken?: string | undefined
  versions?: DashboardVersionMeta[] | undefined
}
type SharedVariableScope = string
type SharedVariablePromoteRequest = {
  clusterId?: string | undefined
  dashboardUIDs?: string[] | undefined
  folderUID?: string | undefined
  scope?: SharedVariableScope | undefined
}
type SharedVariableDashboardPromoteResult = {
  dashboardUID?: string | undefined
  error?: string | undefined
  skipReason?: string | undefined
  status?: string | undefined
}
type SharedVariablePromoteResult = {
  clusterId?: string | undefined
  folderUID?: string | undefined
  remaining?: bigint | undefined
  results?: SharedVariableDashboardPromoteResult[] | undefined
  scope?: SharedVariableScope | undefined
  variableAction?: string | undefined
  variableName?: string | undefined
}
type SharedVariableCluster = {
  conflictReason?: string | undefined
  count?: bigint | undefined
  fingerprint?: string | undefined
  folderUID?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  nameConflict?: boolean | undefined
  noWritableDashboards?: boolean | undefined
  promoted?: boolean | undefined
  scope?: string | undefined
  spec?: { [x: string]: unknown } | undefined
}
type SharedVariableClusters = {
  clusters?: SharedVariableCluster[] | undefined
  dashboards?: bigint | undefined
  error?: string | undefined
  progress?: bigint | undefined
  scannedAt?: string | undefined
  startedAt?: string | undefined
  status?: string | undefined
  totalClusters?: bigint | undefined
  truncated?: boolean | undefined
}
type SharedVariableOccurrence = {
  dashboardUID?: string | undefined
  folderUID?: string | undefined
  markedReadOnly?: boolean | undefined
  skipReason?: string | undefined
  storedVersion?: string | undefined
  title?: string | undefined
  writable?: boolean | undefined
}
type SharedVariableOccurrences = {
  id?: string | undefined
  occurrences?: SharedVariableOccurrence[] | undefined
}
type SharedVariableRescanResult = { status?: string | undefined }
type DsAccess = string
type DataSourceListItemDTO = {
  access?: DsAccess | undefined
  basicAuth?: boolean | undefined
  database?: string | undefined
  id?: bigint | undefined
  isDefault?: boolean | undefined
  jsonData?: Json | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  readOnly?: boolean | undefined
  type?: string | undefined
  typeLogoUrl?: string | undefined
  typeName?: string | undefined
  uid?: string | undefined
  url?: string | undefined
  user?: string | undefined
}
type DataSourceList = DataSourceListItemDTO[]
type AddDataSourceCommand = {
  access?: DsAccess | undefined
  basicAuth?: boolean | undefined
  basicAuthUser?: string | undefined
  database?: string | undefined
  isDefault?: boolean | undefined
  jsonData?: Json | undefined
  name?: string | undefined
  secureJsonData?: { [x: string]: string } | undefined
  type?: string | undefined
  uid?: string | undefined
  url?: string | undefined
  user?: string | undefined
  withCredentials?: boolean | undefined
}
type Metadata = { [x: string]: boolean }
type DataSource = {
  access?: DsAccess | undefined
  accessControl?: Metadata | undefined
  basicAuth?: boolean | undefined
  basicAuthUser?: string | undefined
  database?: string | undefined
  id?: bigint | undefined
  isDefault?: boolean | undefined
  jsonData?: Json | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  readOnly?: boolean | undefined
  secureJsonFields?: { [x: string]: boolean } | undefined
  type?: string | undefined
  typeLogoUrl?: string | undefined
  uid?: string | undefined
  url?: string | undefined
  user?: string | undefined
  version?: bigint | undefined
  withCredentials?: boolean | undefined
}
type Transformation = {
  expression?: string | undefined
  field?: string | undefined
  mapValue?: string | undefined
  type?: 'regex' | 'logfmt' | undefined
}
type Transformations = Transformation[]
type CorrelationType = string
type CorrelationConfig = {
  field: string
  target: { [x: string]: { [x: string]: unknown } }
  transformations?: Transformations | undefined
  type?: CorrelationType | undefined
}
type Correlation = {
  config?: CorrelationConfig | undefined
  description?: string | undefined
  label?: string | undefined
  orgId?: bigint | undefined
  provisioned?: boolean | undefined
  sourceUID?: string | undefined
  targetUID?: string | undefined
  type?: CorrelationType | undefined
  uid?: string | undefined
}
type CreateCorrelationCommand = {
  config?: CorrelationConfig | undefined
  description?: string | undefined
  label?: string | undefined
  provisioned?: boolean | undefined
  targetUID?: string | undefined
  type?: CorrelationType | undefined
}
type CreateCorrelationResponseBody = {
  message?: string | undefined
  result?: Correlation | undefined
}
type CorrelationConfigUpdateDTO = {
  field?: string | undefined
  target?: { [x: string]: { [x: string]: unknown } } | undefined
  transformations?: Transformation[] | undefined
}
type UpdateCorrelationCommand = {
  config?: CorrelationConfigUpdateDTO | undefined
  description?: string | undefined
  label?: string | undefined
  type?: CorrelationType | undefined
}
type UpdateCorrelationResponseBody = {
  message?: string | undefined
  result?: Correlation | undefined
}
type UpdateDataSourceCommand = {
  access?: DsAccess | undefined
  basicAuth?: boolean | undefined
  basicAuthUser?: string | undefined
  database?: string | undefined
  isDefault?: boolean | undefined
  jsonData?: Json | undefined
  name?: string | undefined
  secureJsonData?: { [x: string]: string } | undefined
  type?: string | undefined
  uid?: string | undefined
  url?: string | undefined
  user?: string | undefined
  version?: bigint | undefined
  withCredentials?: boolean | undefined
}
type DeleteCorrelationResponseBody = { message?: string | undefined }
type TeamLBACRule = {
  rules?: string[] | undefined
  teamId?: string | undefined
  teamUid?: string | undefined
}
type TeamLBACRules = { rules?: TeamLBACRule[] | undefined }
type UpdateTeamLBACCommand = { rules?: TeamLBACRule[] | undefined }
type CacheConfigResponse = {
  created?: string | undefined
  dataSourceID?: bigint | undefined
  dataSourceUID?: string | undefined
  defaultTTLMs?: bigint | undefined
  enabled?: boolean | undefined
  message?: string | undefined
  ttlQueriesMs?: bigint | undefined
  ttlResourcesMs?: bigint | undefined
  updated?: string | undefined
  useDefaultTTL?: boolean | undefined
}
type CacheConfigSetter = {
  dataSourceID?: bigint | undefined
  dataSourceUID?: string | undefined
  enabled?: boolean | undefined
  ttlQueriesMs?: bigint | undefined
  ttlResourcesMs?: bigint | undefined
  useDefaultTTL?: boolean | undefined
}
type MetricRequest = { debug?: boolean | undefined; from: string; queries: Json[]; to: string }
type Source = string
type ExplorePanelsState = { [x: string]: unknown }
type TimeRange = { from?: string | undefined; to?: string | undefined }
type SupportedTransformationTypes = string
type LinkTransformationConfig = {
  expression?: string | undefined
  field?: string | undefined
  mapValue?: string | undefined
  type?: SupportedTransformationTypes | undefined
}
type InternalDataLink = {
  datasourceName?: string | undefined
  datasourceUid?: string | undefined
  panelsState?: ExplorePanelsState | undefined
  query?: { [x: string]: unknown } | undefined
  timeRange?: TimeRange | undefined
  transformations?: LinkTransformationConfig[] | undefined
}
type DataLink = {
  internal?: InternalDataLink | undefined
  targetBlank?: boolean | undefined
  title?: string | undefined
  url?: string | undefined
}
type ValueMapping = { [x: string]: unknown }
type ValueMappings = ValueMapping[]
type ConfFloat64 = number
type ThresholdsMode = string
type Threshold = {
  color?: string | undefined
  state?: string | undefined
  value?: ConfFloat64 | undefined
}
type ThresholdsConfig = { mode?: ThresholdsMode | undefined; steps?: Threshold[] | undefined }
type EnumFieldConfig = {
  color?: string[] | undefined
  description?: string[] | undefined
  icon?: string[] | undefined
  text?: string[] | undefined
}
type FieldTypeConfig = { enum?: EnumFieldConfig | undefined }
type FieldConfig = {
  color?: { [x: string]: { [x: string]: unknown } } | undefined
  custom?: { [x: string]: { [x: string]: unknown } } | undefined
  decimals?: number | undefined
  description?: string | undefined
  displayName?: string | undefined
  displayNameFromDS?: string | undefined
  filterable?: boolean | undefined
  interval?: number | undefined
  links?: DataLink[] | undefined
  mappings?: ValueMappings | undefined
  max?: ConfFloat64 | undefined
  min?: ConfFloat64 | undefined
  noValue?: string | undefined
  path?: string | undefined
  thresholds?: ThresholdsConfig | undefined
  type?: FieldTypeConfig | undefined
  unit?: string | undefined
  writeable?: boolean | undefined
}
type FrameLabels = { [x: string]: string }
type Field = {
  config?: FieldConfig | undefined
  labels?: FrameLabels | undefined
  name?: string | undefined
}
type DataTopic = string
type InspectType = bigint
type NoticeSeverity = bigint
type Notice = {
  inspect?: InspectType | undefined
  link?: string | undefined
  severity?: NoticeSeverity | undefined
  text?: string | undefined
}
type VisType = string
type QueryStat = {
  color?: { [x: string]: { [x: string]: unknown } } | undefined
  custom?: { [x: string]: { [x: string]: unknown } } | undefined
  decimals?: number | undefined
  description?: string | undefined
  displayName?: string | undefined
  displayNameFromDS?: string | undefined
  filterable?: boolean | undefined
  interval?: number | undefined
  links?: DataLink[] | undefined
  mappings?: ValueMappings | undefined
  max?: ConfFloat64 | undefined
  min?: ConfFloat64 | undefined
  noValue?: string | undefined
  path?: string | undefined
  thresholds?: ThresholdsConfig | undefined
  type?: FieldTypeConfig | undefined
  unit?: string | undefined
  value?: number | undefined
  writeable?: boolean | undefined
}
type FrameType = string
type FrameTypeVersion = bigint[]
type FrameMeta = {
  channel?: string | undefined
  custom?: { [x: string]: unknown } | undefined
  dataTopic?: DataTopic | undefined
  executedQueryString?: string | undefined
  notices?: Notice[] | undefined
  path?: string | undefined
  pathSeparator?: string | undefined
  preferredVisualisationPluginId?: string | undefined
  preferredVisualisationType?: VisType | undefined
  stats?: QueryStat[] | undefined
  type?: FrameType | undefined
  typeVersion?: FrameTypeVersion | undefined
  uniqueRowIdFields?: bigint[] | undefined
}
type Frame = {
  Fields?: Field[] | undefined
  Meta?: FrameMeta | undefined
  Name?: string | undefined
  RefID?: string | undefined
}
type Frames = Frame[]
type Status = bigint
type DataResponse = {
  Error?: string | undefined
  ErrorSource?: Source | undefined
  Frames?: Frames | undefined
  Status?: Status | undefined
}
type Responses = { [x: string]: DataResponse }
type QueryDataResponse = { results?: Responses | undefined }
type ManagerKind = string
type FolderSearchHit = {
  id?: bigint | undefined
  managedBy?: ManagerKind | undefined
  parentUid?: string | undefined
  title?: string | undefined
  uid?: string | undefined
}
type CreateFolderCommand = {
  description?: string | undefined
  parentUid?: string | undefined
  title?: string | undefined
  uid?: string | undefined
}
type Folder = {
  accessControl?: Metadata | undefined
  canAdmin?: boolean | undefined
  canDelete?: boolean | undefined
  canEdit?: boolean | undefined
  canSave?: boolean | undefined
  created?: string | undefined
  createdBy?: string | undefined
  hasAcl?: boolean | undefined
  id?: bigint | undefined
  managedBy?: ManagerKind | undefined
  orgId?: bigint | undefined
  parentUid?: string | undefined
  parents?: Folder[] | undefined
  title?: string | undefined
  uid?: string | undefined
  updated?: string | undefined
  updatedBy?: string | undefined
  url?: string | undefined
  version?: bigint | undefined
}
type UpdateFolderCommand = {
  description?: string | undefined
  overwrite?: boolean | undefined
  title?: string | undefined
  version?: bigint | undefined
}
type DescendantCounts = { [x: string]: bigint }
type MoveFolderCommand = { parentUid?: string | undefined }
type HealthResponse = {
  apiserver?: string | undefined
  commit?: string | undefined
  database?: string | undefined
  enterpriseCommit?: string | undefined
  version?: string | undefined
}
type LibraryElementDTOMetaUser = {
  avatarUrl?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type LibraryElementDTOMeta = {
  connectedDashboards?: bigint | undefined
  created?: string | undefined
  createdBy?: LibraryElementDTOMetaUser | undefined
  folderName?: string | undefined
  folderUid?: string | undefined
  updated?: string | undefined
  updatedBy?: LibraryElementDTOMetaUser | undefined
}
type LibraryElementDTO = {
  description?: string | undefined
  folderId?: bigint | undefined
  folderUid?: string | undefined
  id?: bigint | undefined
  kind?: bigint | undefined
  meta?: LibraryElementDTOMeta | undefined
  model?: { [x: string]: unknown } | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  schemaVersion?: bigint | undefined
  type?: string | undefined
  uid?: string | undefined
  version?: bigint | undefined
}
type LibraryElementSearchResult = {
  elements?: LibraryElementDTO[] | undefined
  page?: bigint | undefined
  perPage?: bigint | undefined
  totalCount?: bigint | undefined
}
type LibraryElementSearchResponse = { result?: LibraryElementSearchResult | undefined }
type CreateLibraryElementCommand = {
  folderId?: bigint | undefined
  folderUid?: string | undefined
  kind?: 1n | undefined
  model?: { [x: string]: unknown } | undefined
  name?: string | undefined
  uid?: string | undefined
}
type LibraryElementResponse = { result?: LibraryElementDTO | undefined }
type LibraryElementArrayResponse = { result?: LibraryElementDTO[] | undefined }
type PatchLibraryElementCommand = {
  folderId?: bigint | undefined
  folderUid?: string | undefined
  kind?: 1n | undefined
  model?: { [x: string]: unknown } | undefined
  name?: string | undefined
  uid?: string | undefined
  version?: bigint | undefined
}
type LibraryElementConnectionDTO = {
  connectionId?: bigint | undefined
  connectionUid?: string | undefined
  created?: string | undefined
  createdBy?: LibraryElementDTOMetaUser | undefined
  elementId?: bigint | undefined
  id?: bigint | undefined
  kind?: bigint | undefined
}
type LibraryElementConnectionsResponse = { result?: LibraryElementConnectionDTO[] | undefined }
type ActiveUserStats = {
  active_admins_and_editors?: bigint | undefined
  active_anonymous_devices?: bigint | undefined
  active_users?: bigint | undefined
  active_viewers?: bigint | undefined
}
type DeleteTokenCommand = { instance?: string | undefined }
type TokenStatus = bigint
type Token = {
  account?: string | undefined
  anonymousRatio?: bigint | undefined
  company?: string | undefined
  details_url?: string | undefined
  exp?: bigint | undefined
  iat?: bigint | undefined
  included_users?: bigint | undefined
  iss?: string | undefined
  jti?: string | undefined
  lexp?: bigint | undefined
  lic_exp_warn_days?: bigint | undefined
  lid?: string | undefined
  limit_by?: string | undefined
  max_concurrent_user_sessions?: bigint | undefined
  nbf?: bigint | undefined
  prod?: string[] | undefined
  slug?: string | undefined
  status?: TokenStatus | undefined
  sub?: string | undefined
  tok_exp_warn_days?: bigint | undefined
  trial?: boolean | undefined
  trial_exp?: bigint | undefined
  update_days?: bigint | undefined
  usage_billing?: boolean | undefined
}
type Address = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  state?: string | undefined
  zipCode?: string | undefined
}
type OrgDetailsDTO = {
  address?: Address | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type UpdateOrgForm = { name?: string | undefined }
type UpdateOrgAddressForm = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  state?: string | undefined
  zipcode?: string | undefined
}
type TempUserStatus = string
type TempUserDTO = {
  code?: string | undefined
  createdOn?: string | undefined
  email?: string | undefined
  emailSent?: boolean | undefined
  emailSentOn?: string | undefined
  id?: bigint | undefined
  invitedByEmail?: string | undefined
  invitedByLogin?: string | undefined
  invitedByName?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
  status?: TempUserStatus | undefined
  url?: string | undefined
}
type AddInviteForm = {
  loginOrEmail?: string | undefined
  name?: string | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
  sendEmail?: boolean | undefined
}
type PreferencesNavbarPreference = { bookmarkUrls?: string[] | undefined }
type PreferencesQueryHistoryPreference = { homeTab?: string | undefined }
type PreferencesSpec = {
  homeDashboardUID?: string | undefined
  homeURL?: string | undefined
  language?: string | undefined
  navbar?: PreferencesNavbarPreference | undefined
  queryHistory?: PreferencesQueryHistoryPreference | undefined
  theme?: string | undefined
  timezone?: string | undefined
  weekStart?: string | undefined
}
type NavbarPreference = { bookmarkUrls?: string[] | undefined }
type QueryHistoryPreference = { homeTab?: string | undefined }
type PatchPrefsCmd = {
  homeDashboardId?: bigint | undefined
  homeDashboardUID?: string | undefined
  language?: string | undefined
  navbar?: NavbarPreference | undefined
  queryHistory?: QueryHistoryPreference | undefined
  theme?: 'light' | 'dark' | undefined
  timezone?: string | undefined
  weekStart?: string | undefined
}
type UpdatePrefsCmd = {
  homeDashboardId?: bigint | undefined
  homeDashboardUID?: string | undefined
  language?: string | undefined
  navbar?: NavbarPreference | undefined
  queryHistory?: QueryHistoryPreference | undefined
  theme?: 'light' | 'dark' | 'system' | undefined
  timezone?: string | undefined
  weekStart?: string | undefined
}
type OrgUserDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  authLabels?: string[] | undefined
  avatarUrl?: string | undefined
  created?: string | undefined
  email?: string | undefined
  isDisabled?: boolean | undefined
  isExternallySynced?: boolean | undefined
  isProvisioned?: boolean | undefined
  lastSeenAt?: string | undefined
  lastSeenAtAge?: string | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  role?: string | undefined
  uid?: string | undefined
  userId?: bigint | undefined
}
type AddOrgUserCommand = {
  loginOrEmail?: string | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
}
type UserLookupDTO = {
  avatarUrl?: string | undefined
  login?: string | undefined
  uid?: string | undefined
  userId?: bigint | undefined
}
type UpdateOrgUserCommand = { role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined }
type OrgDTO = { id?: bigint | undefined; name?: string | undefined }
type CreateOrgCommand = { name?: string | undefined }
type SearchOrgUsersQueryResult = {
  orgUsers?: OrgUserDTO[] | undefined
  page?: bigint | undefined
  perPage?: bigint | undefined
  totalCount?: bigint | undefined
}
type Playlist = {
  id?: bigint | undefined
  interval?: string | undefined
  name?: string | undefined
  uid?: string | undefined
}
type Playlists = Playlist[]
type PlaylistItem = {
  Id?: bigint | undefined
  PlaylistId?: bigint | undefined
  order?: bigint | undefined
  title?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type CreatePlaylistCommand = {
  interval?: string | undefined
  items?: PlaylistItem[] | undefined
  name?: string | undefined
}
type PlaylistItemDTO = {
  title?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type PlaylistDTO = {
  interval?: string | undefined
  items?: PlaylistItemDTO[] | undefined
  name?: string | undefined
  uid?: string | undefined
}
type UpdatePlaylistCommand = {
  interval?: string | undefined
  items?: PlaylistItem[] | undefined
  name?: string | undefined
  uid?: string | undefined
}
type DataSourceRef = { type?: string | undefined; uid?: string | undefined }
type AnnotationPanelFilter = { exclude?: boolean | undefined; ids?: number[] | undefined }
type AnnotationTarget = {
  limit?: bigint | undefined
  matchAny?: boolean | undefined
  tags?: string[] | undefined
  type?: string | undefined
}
type AnnotationQuery = {
  builtIn?: number | undefined
  datasource?: DataSourceRef | undefined
  enable?: boolean | undefined
  filter?: AnnotationPanelFilter | undefined
  hide?: boolean | undefined
  iconColor?: string | undefined
  name?: string | undefined
  placement?: string | undefined
  target?: AnnotationTarget | undefined
  type?: string | undefined
}
type AnnotationEvent = {
  color?: string | undefined
  dashboardId?: bigint | undefined
  dashboardUID?: string | undefined
  id?: bigint | undefined
  isRegion?: boolean | undefined
  panelId?: bigint | undefined
  source?: AnnotationQuery | undefined
  tags?: string[] | undefined
  text?: string | undefined
  time?: bigint | undefined
  timeEnd?: bigint | undefined
}
type QueryHistoryDTO = {
  comment?: string | undefined
  createdAt?: bigint | undefined
  createdBy?: bigint | undefined
  datasourceUid?: string | undefined
  queries?: Json | undefined
  starred?: boolean | undefined
  uid?: string | undefined
}
type QueryHistorySearchResult = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  queryHistory?: QueryHistoryDTO[] | undefined
  totalCount?: bigint | undefined
}
type QueryHistorySearchResponse = { result?: QueryHistorySearchResult | undefined }
type CreateQueryInQueryHistoryCommand = { datasourceUid?: string | undefined; queries: Json }
type QueryHistoryResponse = { result?: QueryHistoryDTO | undefined }
type QueryHistoryDeleteQueryResponse = { id?: bigint | undefined; message?: string | undefined }
type PatchQueryCommentInQueryHistoryCommand = { comment?: string | undefined }
type RecordingRuleJSON = {
  active?: boolean | undefined
  count?: boolean | undefined
  description?: string | undefined
  dest_data_source_uid?: string | undefined
  id?: string | undefined
  interval?: bigint | undefined
  name?: string | undefined
  prom_name?: string | undefined
  queries?: { [x: string]: { [x: string]: unknown } }[] | undefined
  range?: bigint | undefined
  target_ref_id?: string | undefined
}
type PrometheusRemoteWriteTargetJSON = {
  data_source_uid?: string | undefined
  id?: string | undefined
  remote_write_path?: string | undefined
}
type ReportDashboardID = {
  id?: bigint | undefined
  name?: string | undefined
  uid?: string | undefined
}
type ReportTimeRange = { from?: string | undefined; to?: string | undefined }
type ReportDashboard = {
  dashboard?: ReportDashboardID | undefined
  reportVariables?: { [x: string]: unknown } | undefined
  timeRange?: ReportTimeRange | undefined
}
type Type = string
type ReportOptions = {
  csvEncoding?: string | undefined
  layout?: string | undefined
  orientation?: string | undefined
  pdfCombineOneFile?: boolean | undefined
  pdfShowTemplateVariables?: boolean | undefined
  timeRange?: ReportTimeRange | undefined
}
type ReportSchedule = {
  dayOfMonth?: string | undefined
  endDate?: string | undefined
  frequency?: string | undefined
  intervalAmount?: bigint | undefined
  intervalFrequency?: string | undefined
  startDate?: string | undefined
  timeZone?: string | undefined
  workdaysOnly?: boolean | undefined
}
type State = string
type ReportURLItem = { title?: string | undefined; url?: string | undefined }
type Report = {
  created?: string | undefined
  dashboards?: ReportDashboard[] | undefined
  enableCsv?: boolean | undefined
  enableDashboardUrl?: boolean | undefined
  formats?: Type[] | undefined
  id?: bigint | undefined
  message?: string | undefined
  name?: string | undefined
  options?: ReportOptions | undefined
  orgId?: bigint | undefined
  recipients?: string | undefined
  replyTo?: string | undefined
  scaleFactor?: bigint | undefined
  schedule?: ReportSchedule | undefined
  state?: State | undefined
  subject?: string | undefined
  uid?: string | undefined
  updated?: string | undefined
  urls?: ReportURLItem[] | undefined
  userId?: bigint | undefined
}
type CreateOrUpdateReport = {
  dashboards?: ReportDashboard[] | undefined
  enableCsv?: boolean | undefined
  enableDashboardUrl?: boolean | undefined
  formats?: Type[] | undefined
  message?: string | undefined
  name?: string | undefined
  options?: ReportOptions | undefined
  recipients?: string | undefined
  replyTo?: string | undefined
  scaleFactor?: bigint | undefined
  schedule?: ReportSchedule | undefined
  state?: State | undefined
  subject?: string | undefined
  urls?: ReportURLItem[] | undefined
}
type ReportEmail = {
  emails?: string | undefined
  id?: string | undefined
  uid?: string | undefined
  useEmailsFromReport?: boolean | undefined
}
type ReportBrandingOptions = {
  emailFooterLink?: string | undefined
  emailFooterMode?: string | undefined
  emailFooterText?: string | undefined
  emailLogoUrl?: string | undefined
  reportLogoUrl?: string | undefined
}
type FooterItem = {
  color?: string | undefined
  fontSize?: string | undefined
  fontStyle?: string | undefined
  fontWeight?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type ReportSettings = {
  branding?: ReportBrandingOptions | undefined
  embeddedImageTheme?: string | undefined
  footerFontFamily?: string | undefined
  footerItems?: FooterItem[] | undefined
  id?: bigint | undefined
  orgId?: bigint | undefined
  pdfDashboardTitleEnabled?: boolean | undefined
  pdfHeaderEnabled?: boolean | undefined
  pdfTheme?: string | undefined
  pdfTimeRangeEnabled?: boolean | undefined
  userId?: bigint | undefined
}
type HitType = string
type Hit = {
  description?: string | undefined
  folderId?: bigint | undefined
  folderTitle?: string | undefined
  folderUid?: string | undefined
  folderUrl?: string | undefined
  id?: bigint | undefined
  isDeleted?: boolean | undefined
  isStarred?: boolean | undefined
  orgId?: bigint | undefined
  permanentlyDeleteDate?: string | undefined
  slug?: string | undefined
  sortMeta?: bigint | undefined
  sortMetaName?: string | undefined
  tags?: string[] | undefined
  title?: string | undefined
  type?: HitType | undefined
  uid?: string | undefined
  uri?: string | undefined
  url?: string | undefined
}
type HitList = Hit[]
type CreateServiceAccountForm = {
  isDisabled?: boolean | undefined
  name?: string | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
}
type ServiceAccountDTO = {
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
  uid?: string | undefined
}
type SearchOrgServiceAccountsResult = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  serviceAccounts?: ServiceAccountDTO[] | undefined
  totalCount?: bigint | undefined
}
type UpdateServiceAccountForm = {
  isDisabled?: boolean | undefined
  name?: string | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
  serviceAccountId?: bigint | undefined
}
type ServiceAccountProfileDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  avatarUrl?: string | undefined
  createdAt?: string | undefined
  id?: bigint | undefined
  isDisabled?: boolean | undefined
  isExternal?: boolean | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  requiredBy?: string | undefined
  role?: string | undefined
  teams?: string[] | undefined
  tokens?: bigint | undefined
  uid?: string | undefined
  updatedAt?: string | undefined
}
type TokenDTO = {
  created?: string | undefined
  expiration?: string | undefined
  hasExpired?: boolean | undefined
  id?: bigint | undefined
  isRevoked?: boolean | undefined
  lastUsedAt?: string | undefined
  name?: string | undefined
  secondsUntilExpiration?: number | undefined
}
type AddServiceAccountTokenCommand = {
  name?: string | undefined
  secondsToLive?: bigint | undefined
}
type NewApiKeyResult = {
  id?: bigint | undefined
  key?: string | undefined
  name?: string | undefined
}
type IPMask = number[]
type IPNet = { IP?: string | undefined; Mask?: IPMask | undefined }
type ExtKeyUsage = bigint
type ObjectIdentifier = bigint[]
type Extension = {
  Critical?: boolean | undefined
  Id?: ObjectIdentifier | undefined
  Value?: number[] | undefined
}
type AttributeTypeAndValue = {
  Type?: ObjectIdentifier | undefined
  Value?: { [x: string]: unknown } | undefined
}
type Name = {
  CommonName?: string | undefined
  Country?: string[] | undefined
  ExtraNames?: AttributeTypeAndValue[] | undefined
  Locality?: string[] | undefined
  Names?: AttributeTypeAndValue[] | undefined
  Organization?: string[] | undefined
  OrganizationalUnit?: string[] | undefined
  PostalCode?: string[] | undefined
  Province?: string[] | undefined
  SerialNumber?: string | undefined
  StreetAddress?: string[] | undefined
}
type KeyUsage = bigint
type PolicyMapping = {
  IssuerDomainPolicy?: string | undefined
  SubjectDomainPolicy?: string | undefined
}
type PublicKeyAlgorithm = bigint
type SignatureAlgorithm = bigint
type URL = string
type Certificate = {
  AuthorityKeyId?: number[] | undefined
  BasicConstraintsValid?: boolean | undefined
  CRLDistributionPoints?: string[] | undefined
  DNSNames?: string[] | undefined
  EmailAddresses?: string[] | undefined
  ExcludedDNSDomains?: string[] | undefined
  ExcludedEmailAddresses?: string[] | undefined
  ExcludedIPRanges?: IPNet[] | undefined
  ExcludedURIDomains?: string[] | undefined
  ExtKeyUsage?: ExtKeyUsage[] | undefined
  Extensions?: Extension[] | undefined
  ExtraExtensions?: Extension[] | undefined
  IPAddresses?: string[] | undefined
  InhibitAnyPolicy?: bigint | undefined
  InhibitAnyPolicyZero?: boolean | undefined
  InhibitPolicyMapping?: bigint | undefined
  InhibitPolicyMappingZero?: boolean | undefined
  IsCA?: boolean | undefined
  Issuer?: Name | undefined
  IssuingCertificateURL?: string[] | undefined
  KeyUsage?: KeyUsage | undefined
  MaxPathLen?: bigint | undefined
  MaxPathLenZero?: boolean | undefined
  NotAfter?: string | undefined
  NotBefore?: string | undefined
  OCSPServer?: string[] | undefined
  PermittedDNSDomains?: string[] | undefined
  PermittedDNSDomainsCritical?: boolean | undefined
  PermittedEmailAddresses?: string[] | undefined
  PermittedIPRanges?: IPNet[] | undefined
  PermittedURIDomains?: string[] | undefined
  Policies?: string[] | undefined
  PolicyIdentifiers?: ObjectIdentifier[] | undefined
  PolicyMappings?: PolicyMapping[] | undefined
  PublicKey?: { [x: string]: unknown } | undefined
  PublicKeyAlgorithm?: PublicKeyAlgorithm | undefined
  Raw?: number[] | undefined
  RawIssuer?: number[] | undefined
  RawSignatureAlgorithm?: number[] | undefined
  RawSubject?: number[] | undefined
  RawSubjectPublicKeyInfo?: number[] | undefined
  RawTBSCertificate?: number[] | undefined
  RequireExplicitPolicy?: bigint | undefined
  RequireExplicitPolicyZero?: boolean | undefined
  SerialNumber?: number | undefined
  Signature?: number[] | undefined
  SignatureAlgorithm?: SignatureAlgorithm | undefined
  Subject?: Name | undefined
  SubjectKeyId?: number[] | undefined
  URIs?: URL[] | undefined
  UnhandledCriticalExtensions?: ObjectIdentifier[] | undefined
  UnknownExtKeyUsage?: ObjectIdentifier[] | undefined
  Version?: bigint | undefined
}
type JSONWebKey = {
  Algorithm?: string | undefined
  CertificateThumbprintSHA1?: number[] | undefined
  CertificateThumbprintSHA256?: number[] | undefined
  Certificates?: Certificate[] | undefined
  CertificatesURL?: URL | undefined
  Key?: { [x: string]: unknown } | undefined
  KeyID?: string | undefined
  Use?: string | undefined
}
type Unstructured = { Object?: { [x: string]: { [x: string]: unknown } } | undefined }
type CreateDashboardSnapshotCommand = {
  apiVersion?: string | undefined
  dashboard: Unstructured
  deleteKey?: string | undefined
  expires?: bigint | undefined
  external?: boolean | undefined
  key?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type CreateTeamCommand = { email?: string | undefined; name: string }
type TeamPermissionType = bigint
type TeamDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  avatarUrl?: string | undefined
  email?: string | undefined
  externalUID?: string | undefined
  id: bigint
  isProvisioned: boolean
  memberCount: bigint
  name: string
  orgId: bigint
  permission?: TeamPermissionType | undefined
  uid: string
}
type SearchTeamQueryResult = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  teams?: TeamDTO[] | undefined
  totalCount?: bigint | undefined
}
type TeamGroupDTO = {
  groupId?: string | undefined
  orgId?: bigint | undefined
  teamId?: bigint | undefined
  teamUid?: string | undefined
  uid?: string | undefined
}
type TeamGroupMapping = { groupId?: string | undefined }
type SearchTeamGroupsQueryResult = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  teamGroups?: TeamGroupDTO[] | undefined
  totalCount?: bigint | undefined
}
type UpdateTeamCommand = { email?: string | undefined; name?: string | undefined }
type TeamMemberDTO = {
  auth_module?: string | undefined
  avatarUrl?: string | undefined
  email?: string | undefined
  labels?: string[] | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  permission?: TeamPermissionType | undefined
  teamId?: bigint | undefined
  teamUID?: string | undefined
  uid?: string | undefined
  userId?: bigint | undefined
  userUID?: string | undefined
}
type AddTeamMemberCommand = { userId: bigint }
type SetTeamMembershipsCommand = { admins?: string[] | undefined; members?: string[] | undefined }
type UpdateTeamMemberCommand = { permission?: TeamPermissionType | undefined }
type UserProfileDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  authLabels?: string[] | undefined
  avatarUrl?: string | undefined
  createdAt?: string | undefined
  email?: string | undefined
  id?: bigint | undefined
  isDisabled?: boolean | undefined
  isExternal?: boolean | undefined
  isExternallySynced?: boolean | undefined
  isGrafanaAdmin?: boolean | undefined
  isGrafanaAdminExternallySynced?: boolean | undefined
  isProvisioned?: boolean | undefined
  login?: string | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  theme?: string | undefined
  uid?: string | undefined
  updatedAt?: string | undefined
}
type UpdateUserCommand = {
  email?: string | undefined
  login?: string | undefined
  name?: string | undefined
  theme?: string | undefined
}
type UserOrgDTO = {
  name?: string | undefined
  orgId?: bigint | undefined
  role?: 'None' | 'Viewer' | 'Editor' | 'Admin' | undefined
}
type ChangeUserPasswordCommand = {
  newPassword?: Password | undefined
  oldPassword?: Password | undefined
}
type UserSearchHitDTO = {
  accessControl?: { [x: string]: boolean } | undefined
  authLabels?: string[] | undefined
  avatarUrl?: string | undefined
  created?: string | undefined
  email?: string | undefined
  id?: bigint | undefined
  isAdmin?: boolean | undefined
  isDisabled?: boolean | undefined
  isProvisioned?: boolean | undefined
  lastSeenAt?: string | undefined
  lastSeenAtAge?: string | undefined
  login?: string | undefined
  name?: string | undefined
  role?: string | undefined
  uid?: string | undefined
}
type SearchUserQueryResult = {
  page?: bigint | undefined
  perPage?: bigint | undefined
  totalCount?: bigint | undefined
  users?: UserSearchHitDTO[] | undefined
}
type RelativeTimeRange = { from?: Duration | undefined; to?: Duration | undefined }
type AlertQuery = {
  datasourceUid?: string | undefined
  model?: { [x: string]: unknown } | undefined
  queryType?: string | undefined
  refId?: string | undefined
  relativeTimeRange?: RelativeTimeRange | undefined
}
type AlertRuleNotificationSettings = {
  active_time_intervals?: string[] | undefined
  group_by?: string[] | undefined
  group_interval?: string | undefined
  group_wait?: string | undefined
  mute_time_intervals?: string[] | undefined
  policy?: string | undefined
  receiver: string
  repeat_interval?: string | undefined
}
type Provenance = string
type Record = { from: string; metric: string; target_datasource_uid?: string | undefined }
type ProvisionedAlertRule = {
  annotations?: { [x: string]: string } | undefined
  condition: string
  data: AlertQuery[]
  execErrState: 'OK' | 'Alerting' | 'Error'
  folderUID: string
  for: string
  id?: bigint | undefined
  isPaused?: boolean | undefined
  keep_firing_for?: string | undefined
  labels?: { [x: string]: string } | undefined
  missingSeriesEvalsToResolve?: bigint | undefined
  noDataState: 'Alerting' | 'NoData' | 'OK'
  notification_settings?: AlertRuleNotificationSettings | undefined
  orgID: bigint
  provenance?: Provenance | undefined
  record?: Record | undefined
  ruleGroup: string
  title: string
  uid?: string | undefined
  updated?: string | undefined
}
type ProvisionedAlertRules = ProvisionedAlertRule[]
type ValidationError = { message?: string | undefined }
type RawMessage = { [x: string]: unknown }
type ReceiverExport = {
  disableResolveMessage?: boolean | undefined
  settings?: RawMessage | undefined
  type?: string | undefined
  uid?: string | undefined
}
type ContactPointExport = {
  name?: string | undefined
  orgId?: bigint | undefined
  receivers?: ReceiverExport[] | undefined
}
type RelativeTimeRangeExport = { from?: bigint | undefined; to?: bigint | undefined }
type AlertQueryExport = {
  datasourceUid?: string | undefined
  model?: { [x: string]: { [x: string]: unknown } } | undefined
  queryType?: string | undefined
  refId?: string | undefined
  relativeTimeRange?: RelativeTimeRangeExport | undefined
}
type AlertRuleNotificationSettingsExport = {
  active_time_intervals?: string[] | undefined
  group_by?: string[] | undefined
  group_interval?: string | undefined
  group_wait?: string | undefined
  mute_time_intervals?: string[] | undefined
  receiver?: string | undefined
  repeat_interval?: string | undefined
}
type AlertRuleRecordExport = {
  from?: string | undefined
  metric?: string | undefined
  targetDatasourceUid?: string | undefined
}
type AlertRuleExport = {
  annotations?: { [x: string]: string } | undefined
  condition?: string | undefined
  dashboardUid?: string | undefined
  data?: AlertQueryExport[] | undefined
  execErrState?: 'OK' | 'Alerting' | 'Error' | undefined
  for?: Duration | undefined
  isPaused?: boolean | undefined
  keepFiringFor?: Duration | undefined
  labels?: { [x: string]: string } | undefined
  missing_series_evals_to_resolve?: bigint | undefined
  noDataState?: 'Alerting' | 'NoData' | 'OK' | undefined
  notification_settings?: AlertRuleNotificationSettingsExport | undefined
  panelId?: bigint | undefined
  record?: AlertRuleRecordExport | undefined
  title?: string | undefined
  uid?: string | undefined
}
type AlertRuleGroupExport = {
  folder?: string | undefined
  interval?: Duration | undefined
  name?: string | undefined
  orgId?: bigint | undefined
  rules?: AlertRuleExport[] | undefined
}
type TimeInterval = { name?: string | undefined; time_intervals?: TimeInterval[] | undefined }
type MuteTimeIntervalExport = {
  name?: string | undefined
  orgId?: bigint | undefined
  time_intervals?: TimeInterval[] | undefined
}
type MatchRegexps = { [x: string]: string }
type MatchType = bigint
type Matcher = {
  Name?: string | undefined
  Type?: MatchType | undefined
  Value?: string | undefined
}
type Matchers = Matcher[]
type ObjectMatcher = string[]
type ObjectMatchers = ObjectMatcher[]
type RouteExport = {
  active_time_intervals?: string[] | undefined
  continue?: boolean | undefined
  group_by?: string[] | undefined
  group_interval?: string | undefined
  group_wait?: string | undefined
  match?: { [x: string]: string } | undefined
  match_re?: MatchRegexps | undefined
  matchers?: Matchers | undefined
  mute_time_intervals?: string[] | undefined
  object_matchers?: ObjectMatchers | undefined
  receiver?: string | undefined
  repeat_interval?: string | undefined
  routes?: RouteExport[] | undefined
}
type NotificationPolicyExport = {
  active_time_intervals?: string[] | undefined
  continue?: boolean | undefined
  group_by?: string[] | undefined
  group_interval?: string | undefined
  group_wait?: string | undefined
  match?: { [x: string]: string } | undefined
  match_re?: MatchRegexps | undefined
  matchers?: Matchers | undefined
  mute_time_intervals?: string[] | undefined
  object_matchers?: ObjectMatchers | undefined
  orgId?: bigint | undefined
  receiver?: string | undefined
  repeat_interval?: string | undefined
  routes?: RouteExport[] | undefined
}
type AlertingFileExport = {
  apiVersion?: bigint | undefined
  contactPoints?: ContactPointExport[] | undefined
  groups?: AlertRuleGroupExport[] | undefined
  muteTimes?: MuteTimeIntervalExport[] | undefined
  policies?: NotificationPolicyExport[] | undefined
}
type EmbeddedContactPoint = {
  disableResolveMessage?: boolean | undefined
  name?: string | undefined
  provenance?: string | undefined
  settings: Json
  type:
    | 'alertmanager'
    | 'dingding'
    | 'discord'
    | 'email'
    | 'googlechat'
    | 'kafka'
    | 'line'
    | 'opsgenie'
    | 'pagerduty'
    | 'pushover'
    | 'sensugo'
    | 'slack'
    | 'teams'
    | 'telegram'
    | 'threema'
    | 'victorops'
    | 'webhook'
    | 'wecom'
  uid?: string | undefined
}
type ContactPoints = EmbeddedContactPoint[]
type PermissionDenied = { [x: string]: unknown }
type Ack = { [x: string]: unknown }
type AlertRuleGroup = {
  folderUid?: string | undefined
  interval?: bigint | undefined
  rules?: ProvisionedAlertRule[] | undefined
  title?: string | undefined
}
type MuteTimeInterval = { name?: string | undefined; time_intervals?: TimeInterval[] | undefined }
type MuteTimings = MuteTimeInterval[]
type Route = {
  active_time_intervals?: string[] | undefined
  continue?: boolean | undefined
  group_by?: string[] | undefined
  group_interval?: string | undefined
  group_wait?: string | undefined
  match?: { [x: string]: string } | undefined
  match_re?: MatchRegexps | undefined
  matchers?: Matchers | undefined
  mute_time_intervals?: string[] | undefined
  object_matchers?: ObjectMatchers | undefined
  provenance?: Provenance | undefined
  receiver?: string | undefined
  repeat_interval?: string | undefined
  routes?: Route[] | undefined
}
type NotificationTemplate = {
  name?: string | undefined
  provenance?: Provenance | undefined
  template?: string | undefined
  version?: string | undefined
}
type NotificationTemplates = NotificationTemplate[]
type NotificationTemplateContent = { template?: string | undefined; version?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/access-control/roles': {
      $get:
        | {
            input: {
              query: {
                delegatable?: boolean | undefined
                includeHidden?: boolean | undefined
                targetOrgId?: bigint | undefined
              }
            }
            output: RoleDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                delegatable?: boolean | undefined
                includeHidden?: boolean | undefined
                targetOrgId?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                delegatable?: boolean | undefined
                includeHidden?: boolean | undefined
                targetOrgId?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: CreateRoleForm }; output: RoleDTO; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreateRoleForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRoleForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateRoleForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/roles/:roleUID': {
      $delete:
        | {
            input: { param: { roleUID: string } } & {
              query: { force?: boolean | undefined; global?: boolean | undefined }
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string } } & {
              query: { force?: boolean | undefined; global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleUID: string } } & {
              query: { force?: boolean | undefined; global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string } } & {
              query: { force?: boolean | undefined; global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { roleUID: string } }
            output: RoleDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { roleUID: string } } & { json: UpdateRoleCommand }
            output: RoleDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string } } & { json: UpdateRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleUID: string } } & { json: UpdateRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string } } & { json: UpdateRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { roleUID: string } } & { json: UpdateRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/roles/:roleUID/assignments': {
      $get:
        | {
            input: { param: { roleUID: string } }
            output: RoleAssignmentsDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { roleUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { roleUID: string } } & { json: SetRoleAssignmentsCommand }
            output: RoleAssignmentsDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string } } & { json: SetRoleAssignmentsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string } } & { json: SetRoleAssignmentsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { roleUID: string } } & { json: SetRoleAssignmentsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/status': {
      $get:
        | { input: {}; output: AccessControlStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/access-control/teams/roles/search': {
      $post:
        | {
            input: { json: RolesSearchQuery }
            output: { [x: string]: RoleDTO[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/teams/:teamId/roles': {
      $get:
        | {
            input: { param: { teamId: bigint } } & { query: { targetOrgId?: bigint | undefined } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: bigint } } & { query: { targetOrgId?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: bigint } } & { query: { targetOrgId?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: bigint } } & { query: { targetOrgId?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: bigint } } & { json: AddTeamRoleCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: bigint } } & { json: AddTeamRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: bigint } } & { json: AddTeamRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: bigint } } & { json: AddTeamRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: bigint } } & { json: AddTeamRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { teamId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetTeamRolesCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetTeamRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetTeamRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetTeamRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetTeamRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/teams/:teamId/roles/:roleUID': {
      $delete:
        | {
            input: { param: { roleUID: string; teamId: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string; teamId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleUID: string; teamId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string; teamId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { roleUID: string; teamId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/users/roles/search': {
      $post:
        | {
            input: { json: RolesSearchQuery }
            output: { [x: string]: RoleDTO[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RolesSearchQuery }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/users/:userId/roles': {
      $get:
        | {
            input: { param: { userId: bigint } } & {
              query: { includeHidden?: boolean | undefined; targetOrgId?: bigint | undefined }
            }
            output: RoleDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { includeHidden?: boolean | undefined; targetOrgId?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { includeHidden?: boolean | undefined; targetOrgId?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { includeHidden?: boolean | undefined; targetOrgId?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { userId: bigint } } & { json: AddUserRoleCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: AddUserRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: bigint } } & { json: AddUserRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: bigint } } & { json: AddUserRoleCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { userId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetUserRolesCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetUserRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetUserRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetUserRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { targetOrgId?: bigint | undefined }
            } & { json: SetUserRolesCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/users/:userId/roles/:roleUID': {
      $delete:
        | {
            input: { param: { roleUID: string; userId: bigint } } & {
              query: { global?: boolean | undefined }
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { roleUID: string; userId: bigint } } & {
              query: { global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { roleUID: string; userId: bigint } } & {
              query: { global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { roleUID: string; userId: bigint } } & {
              query: { global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { roleUID: string; userId: bigint } } & {
              query: { global?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/:resource/description': {
      $get:
        | {
            input: { param: { resource: string } }
            output: Description
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/:resource/:resourceID': {
      $get:
        | {
            input: { param: { resource: string; resourceID: string } }
            output: ResourcePermissionDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string; resourceID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string; resourceID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource: string; resourceID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { resource: string; resourceID: string } } & {
              json: SetPermissionsCommand
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string; resourceID: string } } & {
              json: SetPermissionsCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource: string; resourceID: string } } & {
              json: SetPermissionsCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string; resourceID: string } } & {
              json: SetPermissionsCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource: string; resourceID: string } } & {
              json: SetPermissionsCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/:resource/:resourceID/builtInRoles/:builtInRole': {
      $post:
        | {
            input: { param: { resource: string; resourceID: string; builtInRole: string } } & {
              json: SetPermissionCommand
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string; resourceID: string; builtInRole: string } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource: string; resourceID: string; builtInRole: string } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string; resourceID: string; builtInRole: string } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource: string; resourceID: string; builtInRole: string } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/:resource/:resourceID/teams/:teamID': {
      $post:
        | {
            input: { param: { resource: string; resourceID: string; teamID: bigint } } & {
              json: SetPermissionCommand
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string; resourceID: string; teamID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource: string; resourceID: string; teamID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string; resourceID: string; teamID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource: string; resourceID: string; teamID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access-control/:resource/:resourceID/users/:userID': {
      $post:
        | {
            input: { param: { resource: string; resourceID: string; userID: bigint } } & {
              json: SetPermissionCommand
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource: string; resourceID: string; userID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource: string; resourceID: string; userID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource: string; resourceID: string; userID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource: string; resourceID: string; userID: bigint } } & {
              json: SetPermissionCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/ldap-sync-status': {
      $get:
        | { input: {}; output: ActiveSyncStatusDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/ldap/reload': {
      $post: { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 410 }
    }
  } & {
    '/admin/ldap/status': {
      $get:
        | { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/ldap/sync/:user_id': {
      $post:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/ldap/:user_name': {
      $get:
        | {
            input: { param: { user_name: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/provisioning/access-control/reload': {
      $post:
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/admin/provisioning/dashboards/reload': {
      $post:
        | { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/provisioning/datasources/reload': {
      $post:
        | { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/provisioning/plugins/reload': {
      $post:
        | { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/settings': {
      $get:
        | { input: {}; output: SettingsBag; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/admin/stats': {
      $get:
        | { input: {}; output: AdminStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/users': {
      $post:
        | {
            input: { json: AdminCreateUserForm }
            output: AdminCreateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminCreateUserForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminCreateUserForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminCreateUserForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AdminCreateUserForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: AdminCreateUserForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/auth-tokens': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: UserToken[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/disable': {
      $post:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/enable': {
      $post:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/logout': {
      $post:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/password': {
      $put:
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPasswordForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPasswordForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPasswordForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPasswordForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPasswordForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/permissions': {
      $put:
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPermissionsForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPermissionsForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPermissionsForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPermissionsForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & { json: AdminUpdateUserPermissionsForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/quotas': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: QuotaDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/quotas/:quota_target': {
      $put:
        | {
            input: { param: { quota_target: string; user_id: bigint } } & { json: UpdateQuotaCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quota_target: string; user_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quota_target: string; user_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { quota_target: string; user_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { quota_target: string; user_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/users/:user_id/revoke-auth-token': {
      $post:
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/annotations': {
      $get:
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                userId?: bigint | undefined
                userUID?: string | undefined
                alertUID?: string | undefined
                dashboardId?: bigint | undefined
                dashboardUID?: string | undefined
                panelId?: bigint | undefined
                limit?: bigint | undefined
                tags?: string[] | undefined
                type?: 'alert' | 'annotation' | undefined
                matchAny?: boolean | undefined
              }
            }
            output: Annotation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                userId?: bigint | undefined
                userUID?: string | undefined
                alertUID?: string | undefined
                dashboardId?: bigint | undefined
                dashboardUID?: string | undefined
                panelId?: bigint | undefined
                limit?: bigint | undefined
                tags?: string[] | undefined
                type?: 'alert' | 'annotation' | undefined
                matchAny?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                userId?: bigint | undefined
                userUID?: string | undefined
                alertUID?: string | undefined
                dashboardId?: bigint | undefined
                dashboardUID?: string | undefined
                panelId?: bigint | undefined
                limit?: bigint | undefined
                tags?: string[] | undefined
                type?: 'alert' | 'annotation' | undefined
                matchAny?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                userId?: bigint | undefined
                userUID?: string | undefined
                alertUID?: string | undefined
                dashboardId?: bigint | undefined
                dashboardUID?: string | undefined
                panelId?: bigint | undefined
                limit?: bigint | undefined
                tags?: string[] | undefined
                type?: 'alert' | 'annotation' | undefined
                matchAny?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PostAnnotationsCmd }
            output: { id: bigint; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PostAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PostAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PostAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/annotations/graphite': {
      $post:
        | {
            input: { json: PostGraphiteAnnotationsCmd }
            output: { id: bigint; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PostGraphiteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostGraphiteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PostGraphiteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PostGraphiteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/annotations/mass-delete': {
      $post:
        | {
            input: { json: MassDeleteAnnotationsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MassDeleteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MassDeleteAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/annotations/tags': {
      $get:
        | {
            input: { query: { tag?: string | undefined; limit?: string | undefined } }
            output: GetAnnotationTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tag?: string | undefined; limit?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { tag?: string | undefined; limit?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/annotations/:annotation_id': {
      $delete:
        | {
            input: { param: { annotation_id: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annotation_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { annotation_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { annotation_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { annotation_id: string } }
            output: Annotation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annotation_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { annotation_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { annotation_id: string } } & { json: PatchAnnotationsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annotation_id: string } } & { json: PatchAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { annotation_id: string } } & { json: PatchAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { annotation_id: string } } & { json: PatchAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { annotation_id: string } } & { json: PatchAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { annotation_id: string } } & { json: UpdateAnnotationsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annotation_id: string } } & { json: UpdateAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { annotation_id: string } } & { json: UpdateAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { annotation_id: string } } & { json: UpdateAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { annotation_id: string } } & { json: UpdateAnnotationsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/anonymous/devices': {
      $get:
        | { input: {}; output: DeviceDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/anonymous/search': {
      $get:
        | { input: {}; output: SearchDeviceQueryResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/cloudmigration/migration': {
      $get:
        | {
            input: {}
            output: CloudMigrationSessionListResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CloudMigrationSessionRequestDTO }
            output: CloudMigrationSessionResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CloudMigrationSessionRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CloudMigrationSessionRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CloudMigrationSessionRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CloudMigrationSessionRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid': {
      $delete:
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { uid: string } }
            output: CloudMigrationSessionResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid/snapshot': {
      $post:
        | {
            input: { param: { uid: string } } & { json: CreateSnapshotRequestDTO }
            output: CreateSnapshotResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: CreateSnapshotRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } } & { json: CreateSnapshotRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: CreateSnapshotRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: CreateSnapshotRequestDTO }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid': {
      $get:
        | {
            input: { param: { uid: string; snapshotUid: string } } & {
              query: {
                resultPage?: bigint | undefined
                resultLimit?: bigint | undefined
                resultSortColumn?: string | undefined
                resultSortOrder?: string | undefined
                errorsOnly?: boolean | undefined
              }
            }
            output: GetSnapshotResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; snapshotUid: string } } & {
              query: {
                resultPage?: bigint | undefined
                resultLimit?: bigint | undefined
                resultSortColumn?: string | undefined
                resultSortOrder?: string | undefined
                errorsOnly?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string; snapshotUid: string } } & {
              query: {
                resultPage?: bigint | undefined
                resultLimit?: bigint | undefined
                resultSortColumn?: string | undefined
                resultSortOrder?: string | undefined
                errorsOnly?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string; snapshotUid: string } } & {
              query: {
                resultPage?: bigint | undefined
                resultLimit?: bigint | undefined
                resultSortColumn?: string | undefined
                resultSortOrder?: string | undefined
                errorsOnly?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; snapshotUid: string } } & {
              query: {
                resultPage?: bigint | undefined
                resultLimit?: bigint | undefined
                resultSortColumn?: string | undefined
                resultSortOrder?: string | undefined
                errorsOnly?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/cancel': {
      $post:
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/upload': {
      $post:
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; snapshotUid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/migration/:uid/snapshots': {
      $get:
        | {
            input: { param: { uid: string } } & {
              query: {
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: SnapshotListResponseDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & {
              query: {
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } } & {
              query: {
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & {
              query: {
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & {
              query: {
                page?: bigint | undefined
                limit?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cloudmigration/resources/dependencies': {
      $get: {
        input: {}
        output: ResourceDependenciesResponseDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cloudmigration/token': {
      $get:
        | { input: {}; output: GetAccessTokenResponseDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | { input: {}; output: CreateAccessTokenResponseDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/cloudmigration/token/:uid': {
      $delete:
        | { input: { param: { uid: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/convert/api/prom/rules': {
      $get:
        | { input: {}; output: PrometheusNamespace; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
      $post:
        | { input: {}; output: ConvertPrometheusResponse; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/convert/api/prom/rules/:NamespaceTitle': {
      $delete:
        | {
            input: { param: { NamespaceTitle: string } }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { NamespaceTitle: string } }
            output: PrometheusNamespace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { NamespaceTitle: string } } & {
              header: {
                'x-grafana-alerting-datasource-uid'?: string | undefined
                'x-grafana-alerting-recording-rules-paused'?: boolean | undefined
                'x-grafana-alerting-alert-rules-paused'?: boolean | undefined
                'x-grafana-alerting-target-datasource-uid'?: string | undefined
                'x-grafana-alerting-folder-uid'?: string | undefined
                'x-grafana-alerting-notification-settings'?: string | undefined
              }
            } & { json: PrometheusRuleGroup }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string } } & {
              header: {
                'x-grafana-alerting-datasource-uid'?: string | undefined
                'x-grafana-alerting-recording-rules-paused'?: boolean | undefined
                'x-grafana-alerting-alert-rules-paused'?: boolean | undefined
                'x-grafana-alerting-target-datasource-uid'?: string | undefined
                'x-grafana-alerting-folder-uid'?: string | undefined
                'x-grafana-alerting-notification-settings'?: string | undefined
              }
            } & { json: PrometheusRuleGroup }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/convert/api/prom/rules/:NamespaceTitle/:Group': {
      $delete:
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: PrometheusRuleGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/convert/prometheus/config/v1/rules': {
      $get:
        | { input: {}; output: PrometheusNamespace; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
      $post:
        | { input: {}; output: ConvertPrometheusResponse; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/convert/prometheus/config/v1/rules/:NamespaceTitle': {
      $delete:
        | {
            input: { param: { NamespaceTitle: string } }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { NamespaceTitle: string } }
            output: PrometheusNamespace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { NamespaceTitle: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
      $post:
        | {
            input: { param: { NamespaceTitle: string } } & {
              header: {
                'x-grafana-alerting-datasource-uid'?: string | undefined
                'x-grafana-alerting-recording-rules-paused'?: boolean | undefined
                'x-grafana-alerting-alert-rules-paused'?: boolean | undefined
                'x-grafana-alerting-target-datasource-uid'?: string | undefined
                'x-grafana-alerting-folder-uid'?: string | undefined
                'x-grafana-alerting-notification-settings'?: string | undefined
              }
            } & { json: PrometheusRuleGroup }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string } } & {
              header: {
                'x-grafana-alerting-datasource-uid'?: string | undefined
                'x-grafana-alerting-recording-rules-paused'?: boolean | undefined
                'x-grafana-alerting-alert-rules-paused'?: boolean | undefined
                'x-grafana-alerting-target-datasource-uid'?: string | undefined
                'x-grafana-alerting-folder-uid'?: string | undefined
                'x-grafana-alerting-notification-settings'?: string | undefined
              }
            } & { json: PrometheusRuleGroup }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group': {
      $delete:
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ConvertPrometheusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: PrometheusRuleGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { NamespaceTitle: string; Group: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/dashboard/snapshots': {
      $get:
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: DashboardSnapshotDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/db': {
      $post:
        | {
            input: { json: SaveDashboardCommand }
            output: {
              folderUid?: string | undefined
              id: bigint
              status: string
              title: string
              uid: string
              url: string
              version: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SaveDashboardCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/home': {
      $get:
        | { input: {}; output: GetHomeDashboardResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/dashboards/import': {
      $post:
        | {
            input: { json: ImportDashboardRequest }
            output: ImportDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImportDashboardRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ImportDashboardRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ImportDashboardRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: ImportDashboardRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ImportDashboardRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/interpolate': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 422 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/dashboards/public-dashboards': {
      $get:
        | {
            input: {}
            output: PublicDashboardListResponseWithPagination
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: PublicError2; outputFormat: 'json'; status: 401 }
        | { input: {}; output: PublicError2; outputFormat: 'json'; status: 403 }
        | { input: {}; output: PublicError2; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/dashboards/tags': {
      $get:
        | { input: {}; output: DashboardTagCloudItem[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/dashboards/uid/:dashboardUid/public-dashboards': {
      $get:
        | {
            input: { param: { dashboardUid: string } }
            output: PublicDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardUid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardUid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardUid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardUid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardUid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { dashboardUid: string } } & { json: PublicDashboardDTO }
            output: PublicDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardUid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardUid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardUid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardUid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:dashboardUid/public-dashboards/:uid': {
      $delete:
        | {
            input: { param: { dashboardUid: string; uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardUid: string; uid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardUid: string; uid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardUid: string; uid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardUid: string; uid: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { dashboardUid: string; uid: string } } & { json: PublicDashboardDTO }
            output: PublicDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardUid: string; uid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardUid: string; uid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardUid: string; uid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardUid: string; uid: string } } & { json: PublicDashboardDTO }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:uid': {
      $delete:
        | {
            input: { param: { uid: string } }
            output: { message: string; title: string; uid: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { uid: string } }
            output: DashboardFullWithMeta
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:uid/permissions': {
      $get:
        | {
            input: { param: { uid: string } }
            output: DashboardACLInfoDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:uid/restore': {
      $post:
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: {
              folderUid?: string | undefined
              id: bigint
              status: string
              title: string
              uid: string
              url: string
              version: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } } & { json: RestoreDashboardVersionCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:uid/versions': {
      $get:
        | {
            input: { param: { uid: string } } & {
              query: { limit?: bigint | undefined; start?: bigint | undefined }
            }
            output: DashboardVersionResponseMeta
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & {
              query: { limit?: bigint | undefined; start?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & {
              query: { limit?: bigint | undefined; start?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & {
              query: { limit?: bigint | undefined; start?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } } & {
              query: { limit?: bigint | undefined; start?: bigint | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/uid/:uid/versions/:DashboardVersionID': {
      $get:
        | {
            input: { param: { DashboardVersionID: bigint; uid: string } }
            output: DashboardVersionMeta
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DashboardVersionID: bigint; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { DashboardVersionID: bigint; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DashboardVersionID: bigint; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { DashboardVersionID: bigint; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/variables/promote': {
      $post:
        | {
            input: { json: SharedVariablePromoteRequest }
            output: SharedVariablePromoteResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SharedVariablePromoteRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SharedVariablePromoteRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SharedVariablePromoteRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SharedVariablePromoteRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SharedVariablePromoteRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/variables/shared-clusters': {
      $get:
        | { input: {}; output: SharedVariableClusters; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/dashboards/variables/shared-clusters/occurrences': {
      $get:
        | {
            input: { query: { id: string } }
            output: SharedVariableOccurrences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/variables/shared-clusters/rescan': {
      $post:
        | { input: {}; output: SharedVariableRescanResult; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/datasources': {
      $get:
        | { input: {}; output: DataSourceList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: AddDataSourceCommand }
            output: { datasource: DataSource; id: bigint; message: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AddDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/correlations': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                sourceUID?: string[] | undefined
              }
            }
            output: Correlation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                sourceUID?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                sourceUID?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                sourceUID?: string[] | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/id/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: { id: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/name/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: { id: bigint; message: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { name: string } }
            output: DataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/proxy/uid/:uid/:datasource_proxy_route': {
      $delete:
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string; datasource_proxy_route: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:sourceUID/correlations': {
      $get:
        | {
            input: { param: { sourceUID: string } }
            output: Correlation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: CreateCorrelationResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceUID: string } } & { json: CreateCorrelationCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:sourceUID/correlations/:correlationUID': {
      $get:
        | {
            input: { param: { sourceUID: string; correlationUID: string } }
            output: Correlation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: UpdateCorrelationResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceUID: string; correlationUID: string } } & {
              json: UpdateCorrelationCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:uid': {
      $delete:
        | {
            input: { param: { uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { uid: string } }
            output: DataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { uid: string } } & { json: UpdateDataSourceCommand }
            output: { datasource: DataSource; id: bigint; message: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { uid: string } } & { json: UpdateDataSourceCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:uid/correlations/:correlationUID': {
      $delete:
        | {
            input: { param: { uid: string; correlationUID: string } }
            output: DeleteCorrelationResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string; correlationUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:uid/health': {
      $get:
        | {
            input: { param: { uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:uid/lbac/teams': {
      $get:
        | {
            input: { param: { uid: string } }
            output: TeamLBACRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: {
              id?: bigint | undefined
              message?: string | undefined
              name?: string | undefined
              rules?: TeamLBACRule[] | undefined
              uid?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } } & { json: UpdateTeamLBACCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/uid/:uid/resources/:datasource_proxy_route': {
      $get:
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasource_proxy_route: string; uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/:dataSourceUID/cache': {
      $get:
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: CacheConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            } & { json: CacheConfigSetter }
            output: CacheConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            } & { json: CacheConfigSetter }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            } & { json: CacheConfigSetter }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/:dataSourceUID/cache/clean': {
      $post:
        | {
            input: { param: { dataSourceUID: string } }
            output: CacheConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataSourceUID: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/:dataSourceUID/cache/disable': {
      $post:
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: CacheConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/datasources/:dataSourceUID/cache/enable': {
      $post:
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: CacheConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataSourceUID: string } } & {
              query: { dataSourceType?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ds/query': {
      $post:
        | {
            input: { json: MetricRequest }
            output: QueryDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetricRequest }
            output: QueryDataResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: MetricRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MetricRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MetricRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MetricRequest }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folders': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                parentUid?: string | undefined
                permission?: 'Edit' | 'View' | undefined
              }
            }
            output: FolderSearchHit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                parentUid?: string | undefined
                permission?: 'Edit' | 'View' | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                parentUid?: string | undefined
                permission?: 'Edit' | 'View' | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                page?: bigint | undefined
                parentUid?: string | undefined
                permission?: 'Edit' | 'View' | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateFolderCommand }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folders/:folder_uid': {
      $delete:
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: { id: bigint; message: string; title: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } } & {
              query: { forceDeleteRules?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { folder_uid: string } }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folders/:folder_uid/counts': {
      $get:
        | {
            input: { param: { folder_uid: string } }
            output: DescendantCounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folders/:folder_uid/move': {
      $post:
        | {
            input: { param: { folder_uid: string } } & { json: MoveFolderCommand }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } } & { json: MoveFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } } & { json: MoveFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } } & { json: MoveFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } } & { json: MoveFolderCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folders/:folder_uid/permissions': {
      $get:
        | {
            input: { param: { folder_uid: string } }
            output: DashboardACLInfoDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { folder_uid: string } } & { json: UpdateDashboardACLCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_uid: string } } & { json: UpdateDashboardACLCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/library-elements': {
      $get:
        | {
            input: {
              query: {
                searchString?: string | undefined
                kind?: 1n | undefined
                sortDirection?: 'alpha-asc' | 'alpha-desc' | undefined
                typeFilter?: string | undefined
                excludeUid?: string | undefined
                folderFilter?: string | undefined
                folderFilterUIDs?: string | undefined
                perPage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: LibraryElementSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchString?: string | undefined
                kind?: 1n | undefined
                sortDirection?: 'alpha-asc' | 'alpha-desc' | undefined
                typeFilter?: string | undefined
                excludeUid?: string | undefined
                folderFilter?: string | undefined
                folderFilterUIDs?: string | undefined
                perPage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                searchString?: string | undefined
                kind?: 1n | undefined
                sortDirection?: 'alpha-asc' | 'alpha-desc' | undefined
                typeFilter?: string | undefined
                excludeUid?: string | undefined
                folderFilter?: string | undefined
                folderFilterUIDs?: string | undefined
                perPage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateLibraryElementCommand }
            output: LibraryElementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/library-elements/name/:library_element_name': {
      $get:
        | {
            input: { param: { library_element_name: string } }
            output: LibraryElementArrayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_element_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { library_element_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { library_element_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/library-elements/:library_element_uid': {
      $delete:
        | {
            input: { param: { library_element_uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { library_element_uid: string } }
            output: LibraryElementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: LibraryElementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { library_element_uid: string } } & { json: PatchLibraryElementCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/library-elements/:library_element_uid/connections/': {
      $get:
        | {
            input: { param: { library_element_uid: string } }
            output: LibraryElementConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { library_element_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/licensing/check': { $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 } }
  } & {
    '/licensing/custom-permissions': {
      $get: { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/licensing/custom-permissions-csv': {
      $get: { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/licensing/refresh-stats': {
      $get:
        | { input: {}; output: ActiveUserStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/licensing/token': {
      $delete:
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get: { input: {}; output: Token; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: DeleteTokenCommand }; output: Token; outputFormat: 'json'; status: 200 }
        | {
            input: { json: DeleteTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/licensing/token/renew': {
      $post:
        | {
            input: { json: { [x: string]: unknown } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/logout/saml': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 302 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/org': {
      $get:
        | { input: {}; output: OrgDetailsDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { json: UpdateOrgForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/address': {
      $put:
        | {
            input: { json: UpdateOrgAddressForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/invites': {
      $get:
        | { input: {}; output: TempUserDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: AddInviteForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddInviteForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddInviteForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddInviteForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddInviteForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: AddInviteForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/invites/:invitation_code/revoke': {
      $delete:
        | {
            input: { param: { invitation_code: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invitation_code: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_code: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_code: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invitation_code: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/preferences': {
      $get:
        | { input: {}; output: PreferencesSpec; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $patch:
        | {
            input: { json: PatchPrefsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: UpdatePrefsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/quotas': {
      $get:
        | { input: {}; output: QuotaDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/org/users': {
      $get:
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: OrgUserDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AddOrgUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/users/lookup': {
      $get:
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: UserLookupDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/org/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
              }
            }
            output: OrgDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateOrgCommand }
            output: { message: string; orgId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateOrgCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateOrgCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateOrgCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateOrgCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/name/:org_name': {
      $get:
        | {
            input: { param: { org_name: string } }
            output: OrgDetailsDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_name: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id': {
      $delete:
        | {
            input: { param: { org_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { org_id: bigint } }
            output: OrgDetailsDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/address': {
      $put:
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgAddressForm }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } } & { json: UpdateOrgAddressForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/quotas': {
      $get:
        | {
            input: { param: { org_id: bigint } }
            output: QuotaDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/quotas/:quota_target': {
      $put:
        | {
            input: { param: { quota_target: string; org_id: bigint } } & { json: UpdateQuotaCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { quota_target: string; org_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { quota_target: string; org_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { quota_target: string; org_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { quota_target: string; org_id: bigint } } & { json: UpdateQuotaCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/users': {
      $get:
        | {
            input: { param: { org_id: bigint } }
            output: OrgUserDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { org_id: bigint } } & { json: AddOrgUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } } & { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } } & { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } } & { json: AddOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/users/search': {
      $get:
        | {
            input: { param: { org_id: bigint } }
            output: SearchOrgUsersQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orgs/:org_id/users/:user_id': {
      $delete:
        | {
            input: { param: { org_id: bigint; user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { org_id: bigint; user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint; user_id: bigint } } & { json: UpdateOrgUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/playlists': {
      $get:
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: Playlists
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; limit?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreatePlaylistCommand }
            output: Playlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/playlists/:uid': {
      $delete:
        | {
            input: { param: { uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { uid: string } }
            output: PlaylistDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { uid: string } } & { json: UpdatePlaylistCommand }
            output: PlaylistDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } } & { json: UpdatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } } & { json: UpdatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } } & { json: UpdatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } } & { json: UpdatePlaylistCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/playlists/:uid/items': {
      $get:
        | {
            input: { param: { uid: string } }
            output: PlaylistItemDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/public/dashboards/:accessToken': {
      $get:
        | {
            input: { param: { accessToken: string } }
            output: DashboardFullWithMeta
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/public/dashboards/:accessToken/annotations': {
      $get:
        | {
            input: { param: { accessToken: string } }
            output: AnnotationEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accessToken: string } }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/public/dashboards/:accessToken/panels/:panelId/query': {
      $post:
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: QueryDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: PublicError2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: PublicError2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: PublicError2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: PublicError2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accessToken: string; panelId: bigint } }
            output: PublicError2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/query-history': {
      $get:
        | {
            input: {
              query: {
                datasourceUid?: string[] | undefined
                searchString?: string | undefined
                onlyStarred?: boolean | undefined
                sort?: 'time-desc' | 'time-asc' | undefined
                page?: bigint | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: QueryHistorySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                datasourceUid?: string[] | undefined
                searchString?: string | undefined
                onlyStarred?: boolean | undefined
                sort?: 'time-desc' | 'time-asc' | undefined
                page?: bigint | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                datasourceUid?: string[] | undefined
                searchString?: string | undefined
                onlyStarred?: boolean | undefined
                sort?: 'time-desc' | 'time-asc' | undefined
                page?: bigint | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateQueryInQueryHistoryCommand }
            output: QueryHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateQueryInQueryHistoryCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateQueryInQueryHistoryCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateQueryInQueryHistoryCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/query-history/star/:query_history_uid': {
      $delete:
        | {
            input: { param: { query_history_uid: string } }
            output: QueryHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { query_history_uid: string } }
            output: QueryHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/query-history/:query_history_uid': {
      $delete:
        | {
            input: { param: { query_history_uid: string } }
            output: QueryHistoryDeleteQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { query_history_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { query_history_uid: string } } & {
              json: PatchQueryCommentInQueryHistoryCommand
            }
            output: QueryHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query_history_uid: string } } & {
              json: PatchQueryCommentInQueryHistoryCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { query_history_uid: string } } & {
              json: PatchQueryCommentInQueryHistoryCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { query_history_uid: string } } & {
              json: PatchQueryCommentInQueryHistoryCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/recording-rules': {
      $get:
        | { input: {}; output: RecordingRuleJSON[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: RecordingRuleJSON }
            output: RecordingRuleJSON
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: RecordingRuleJSON }
            output: RecordingRuleJSON
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/recording-rules/test': {
      $post:
        | {
            input: { json: RecordingRuleJSON }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RecordingRuleJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/recording-rules/writer': {
      $delete:
        | { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $get:
        | { input: {}; output: PrometheusRemoteWriteTargetJSON; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: PrometheusRemoteWriteTargetJSON
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PrometheusRemoteWriteTargetJSON }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/recording-rules/:recordingRuleID': {
      $delete:
        | {
            input: { param: { recordingRuleID: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recordingRuleID: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { recordingRuleID: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { recordingRuleID: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { recordingRuleID: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports': {
      $get:
        | { input: {}; output: Report[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: CreateOrUpdateReport }
            output: { id?: bigint | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/dashboards/:uid': {
      $get:
        | { input: { param: { uid: string } }; output: Report[]; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/email': {
      $post:
        | {
            input: { json: ReportEmail }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReportEmail }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportEmail }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReportEmail }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReportEmail }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ReportEmail }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/images/:image': {
      $get:
        | { input: {}; output: number[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/reports/render/csvs': {
      $get:
        | {
            input: { query: { dashboards?: string | undefined; title?: string | undefined } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dashboards?: string | undefined; title?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { dashboards?: string | undefined; title?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { dashboards?: string | undefined; title?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { dashboards?: string | undefined; title?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/render/pdfs': {
      $get:
        | {
            input: {
              query: {
                dashboards?: string | undefined
                orientation?: string | undefined
                layout?: string | undefined
                title?: string | undefined
                scaleFactor?: string | undefined
                includeTables?: string | undefined
              }
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dashboards?: string | undefined
                orientation?: string | undefined
                layout?: string | undefined
                title?: string | undefined
                scaleFactor?: string | undefined
                includeTables?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dashboards?: string | undefined
                orientation?: string | undefined
                layout?: string | undefined
                title?: string | undefined
                scaleFactor?: string | undefined
                includeTables?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dashboards?: string | undefined
                orientation?: string | undefined
                layout?: string | undefined
                title?: string | undefined
                scaleFactor?: string | undefined
                includeTables?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/settings': {
      $get:
        | { input: {}; output: ReportSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: ReportSettings }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReportSettings }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportSettings }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReportSettings }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReportSettings }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/test-email': {
      $post:
        | {
            input: { json: CreateOrUpdateReport }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reports/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { id: bigint } }; output: Report; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: CreateOrUpdateReport }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/saml/acs': {
      $post:
        | {
            input: { query: { RelayState?: string | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { query: { RelayState?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { RelayState?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/saml/metadata': { $get: { input: {}; output: number[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/saml/slo': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 302 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: {
              query: { SAMLRequest?: string | undefined; SAMLResponse?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: { SAMLRequest?: string | undefined; SAMLResponse?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { SAMLRequest?: string | undefined; SAMLResponse?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { SAMLRequest?: string | undefined; SAMLResponse?: string | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                tag?: string[] | undefined
                type?: 'dash-folder' | 'dash-db' | undefined
                dashboardIds?: bigint[] | undefined
                dashboardUIDs?: string[] | undefined
                folderIds?: bigint[] | undefined
                folderUIDs?: string[] | undefined
                starred?: boolean | undefined
                limit?: bigint | undefined
                page?: bigint | undefined
                permission?: 'Edit' | 'View' | undefined
                sort?: 'alpha-asc' | 'alpha-desc' | undefined
                deleted?: boolean | undefined
              }
            }
            output: HitList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                tag?: string[] | undefined
                type?: 'dash-folder' | 'dash-db' | undefined
                dashboardIds?: bigint[] | undefined
                dashboardUIDs?: string[] | undefined
                folderIds?: bigint[] | undefined
                folderUIDs?: string[] | undefined
                starred?: boolean | undefined
                limit?: bigint | undefined
                page?: bigint | undefined
                permission?: 'Edit' | 'View' | undefined
                sort?: 'alpha-asc' | 'alpha-desc' | undefined
                deleted?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                tag?: string[] | undefined
                type?: 'dash-folder' | 'dash-db' | undefined
                dashboardIds?: bigint[] | undefined
                dashboardUIDs?: string[] | undefined
                folderIds?: bigint[] | undefined
                folderUIDs?: string[] | undefined
                starred?: boolean | undefined
                limit?: bigint | undefined
                page?: bigint | undefined
                permission?: 'Edit' | 'View' | undefined
                sort?: 'alpha-asc' | 'alpha-desc' | undefined
                deleted?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                query?: string | undefined
                tag?: string[] | undefined
                type?: 'dash-folder' | 'dash-db' | undefined
                dashboardIds?: bigint[] | undefined
                dashboardUIDs?: string[] | undefined
                folderIds?: bigint[] | undefined
                folderUIDs?: string[] | undefined
                starred?: boolean | undefined
                limit?: bigint | undefined
                page?: bigint | undefined
                permission?: 'Edit' | 'View' | undefined
                sort?: 'alpha-asc' | 'alpha-desc' | undefined
                deleted?: boolean | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/search/sorting': {
      $get:
        | {
            input: {}
            output: {
              description?: string | undefined
              displayName?: string | undefined
              meta?: string | undefined
              name?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/serviceaccounts': {
      $post:
        | {
            input: { json: CreateServiceAccountForm }
            output: ServiceAccountDTO
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/serviceaccounts/search': {
      $get:
        | {
            input: {
              query: {
                Disabled?: boolean | undefined
                expiredTokens?: boolean | undefined
                query?: string | undefined
                perpage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: SearchOrgServiceAccountsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Disabled?: boolean | undefined
                expiredTokens?: boolean | undefined
                query?: string | undefined
                perpage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                Disabled?: boolean | undefined
                expiredTokens?: boolean | undefined
                query?: string | undefined
                perpage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                Disabled?: boolean | undefined
                expiredTokens?: boolean | undefined
                query?: string | undefined
                perpage?: bigint | undefined
                page?: bigint | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/serviceaccounts/:serviceAccountId': {
      $delete:
        | {
            input: { param: { serviceAccountId: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ServiceAccountDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: {
              id?: bigint | undefined
              message?: string | undefined
              name?: string | undefined
              serviceaccount?: ServiceAccountProfileDTO | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: UpdateServiceAccountForm }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/serviceaccounts/:serviceAccountId/tokens': {
      $get:
        | {
            input: { param: { serviceAccountId: bigint } }
            output: TokenDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: NewApiKeyResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceAccountId: bigint } } & { json: AddServiceAccountTokenCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/serviceaccounts/:serviceAccountId/tokens/:tokenId': {
      $delete:
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenId: bigint; serviceAccountId: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/signing-keys/keys': {
      $get:
        | {
            input: {}
            output: { keys?: JSONWebKey[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/snapshot/shared-options': {
      $get:
        | {
            input: {}
            output: {
              externalEnabled?: boolean | undefined
              externalSnapshotName?: string | undefined
              externalSnapshotURL?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/snapshots': {
      $post:
        | {
            input: { json: CreateDashboardSnapshotCommand }
            output: {
              deleteKey?: string | undefined
              deleteUrl?: string | undefined
              id?: bigint | undefined
              key?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDashboardSnapshotCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDashboardSnapshotCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDashboardSnapshotCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/snapshots-delete/:deleteKey': {
      $get:
        | {
            input: { param: { deleteKey: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deleteKey: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deleteKey: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deleteKey: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deleteKey: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/snapshots/:key': {
      $delete:
        | {
            input: { param: { key: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { key: string } }
            output: DashboardFullWithMeta
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams': {
      $post:
        | {
            input: { json: CreateTeamCommand }
            output: {
              message?: string | undefined
              teamId?: bigint | undefined
              uid?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/search': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
                accesscontrol?: boolean | undefined
                sort?: string | undefined
              }
            }
            output: SearchTeamQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
                accesscontrol?: boolean | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
                accesscontrol?: boolean | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                name?: string | undefined
                query?: string | undefined
                accesscontrol?: boolean | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/groups': {
      $delete:
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { query: { groupId?: string | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { teamId: string } }
            output: TeamGroupDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamId: string } } & { json: TeamGroupMapping }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:teamId/groups/search': {
      $get:
        | {
            input: { param: { teamId: bigint } } & {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                query?: string | undefined
                name?: string | undefined
              }
            }
            output: SearchTeamGroupsQueryResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                query?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                query?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                query?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamId: bigint } } & {
              query: {
                page?: bigint | undefined
                perpage?: bigint | undefined
                query?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_id': {
      $delete:
        | {
            input: { param: { team_id: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: { accesscontrol?: boolean | undefined }
            }
            output: TeamDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: { accesscontrol?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & {
              query: { accesscontrol?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & {
              query: { accesscontrol?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & {
              query: { accesscontrol?: boolean | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { team_id: string } } & { json: UpdateTeamCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_id/members': {
      $get:
        | {
            input: { param: { team_id: string } }
            output: TeamMemberDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { team_id: string } } & { json: AddTeamMemberCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: AddTeamMemberCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: AddTeamMemberCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & { json: AddTeamMemberCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & { json: AddTeamMemberCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { team_id: string } } & { json: SetTeamMembershipsCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: SetTeamMembershipsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: SetTeamMembershipsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & { json: SetTeamMembershipsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string } } & { json: SetTeamMembershipsCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_id/members/:user_id': {
      $delete:
        | {
            input: { param: { team_id: string; user_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string; user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { team_id: string; user_id: bigint } } & {
              json: UpdateTeamMemberCommand
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string; user_id: bigint } } & {
              json: UpdateTeamMemberCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string; user_id: bigint } } & {
              json: UpdateTeamMemberCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string; user_id: bigint } } & {
              json: UpdateTeamMemberCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id: string; user_id: bigint } } & {
              json: UpdateTeamMemberCommand
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_id/preferences': {
      $get:
        | {
            input: { param: { team_id: string } }
            output: PreferencesSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { team_id: string } } & { json: UpdatePrefsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id: string } } & { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: UserProfileDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { json: UpdateUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/auth-tokens': {
      $get:
        | { input: {}; output: UserToken[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/email/update': {
      $get: { input: {}; output: SuccessResponseBody; outputFormat: 'json'; status: 302 }
    }
  } & {
    '/user/orgs': {
      $get:
        | { input: {}; output: UserOrgDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/password': {
      $put:
        | {
            input: { json: ChangeUserPasswordCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChangeUserPasswordCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ChangeUserPasswordCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ChangeUserPasswordCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ChangeUserPasswordCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/preferences': {
      $get:
        | { input: {}; output: PreferencesSpec; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
      $patch:
        | {
            input: { json: PatchPrefsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PatchPrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: UpdatePrefsCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdatePrefsCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/quotas': {
      $get:
        | { input: {}; output: QuotaDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/revoke-auth-token': {
      $post:
        | {
            input: { json: RevokeAuthTokenCmd }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RevokeAuthTokenCmd }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/stars/dashboard/uid/:dashboard_uid': {
      $delete:
        | {
            input: { param: { dashboard_uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { dashboard_uid: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboard_uid: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/teams': {
      $get:
        | { input: {}; output: TeamDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/using/:org_id': {
      $post:
        | {
            input: { param: { org_id: bigint } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { org_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { perpage?: bigint | undefined; page?: bigint | undefined } }
            output: UserSearchHitDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { perpage?: bigint | undefined; page?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { perpage?: bigint | undefined; page?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { perpage?: bigint | undefined; page?: bigint | undefined } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/lookup': {
      $get:
        | {
            input: { query: { loginOrEmail: string } }
            output: UserProfileDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { loginOrEmail: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { loginOrEmail: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { loginOrEmail: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { loginOrEmail: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/search': {
      $get:
        | { input: {}; output: SearchUserQueryResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: UserProfileDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: bigint } } & { json: UpdateUserCommand }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/orgs': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: UserOrgDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/teams': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: TeamDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/provisioning/alert-rules': {
      $get:
        | { input: {}; output: ProvisionedAlertRules; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: ProvisionedAlertRule
            }
            output: ProvisionedAlertRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: ProvisionedAlertRule
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: ProvisionedAlertRule
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/alert-rules/export': {
      $get:
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                folderUid?: string[] | undefined
                group?: string | undefined
                ruleUid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/provisioning/alert-rules/:UID': {
      $delete:
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { UID: string } }
            output: ProvisionedAlertRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UID: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { UID: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: ProvisionedAlertRule }
            output: ProvisionedAlertRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: ProvisionedAlertRule }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: ProvisionedAlertRule }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/alert-rules/:UID/export': {
      $get:
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/provisioning/contact-points': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: ContactPoints
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: EmbeddedContactPoint
            }
            output: EmbeddedContactPoint
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: EmbeddedContactPoint
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: EmbeddedContactPoint
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: EmbeddedContactPoint
            }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/provisioning/contact-points/export': {
      $get:
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
                decrypt?: boolean | undefined
                name?: string | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/contact-points/:UID': {
      $delete:
        | { input: { param: { UID: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { UID: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { UID: string } }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: EmbeddedContactPoint }
            output: Ack
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: EmbeddedContactPoint }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: EmbeddedContactPoint }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { UID: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: EmbeddedContactPoint }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/provisioning/folder/:FolderUID/rule-groups/:Group': {
      $delete:
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: AlertRuleGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: AlertRuleGroup }
            output: AlertRuleGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: AlertRuleGroup }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: AlertRuleGroup }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/folder/:FolderUID/rule-groups/:Group/export': {
      $get:
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FolderUID: string; Group: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/provisioning/mute-timings': {
      $get:
        | { input: {}; output: MuteTimings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: MuteTimeInterval
            }
            output: MuteTimeInterval
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: MuteTimeInterval
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: MuteTimeInterval
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & {
              json: MuteTimeInterval
            }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/provisioning/mute-timings/export': {
      $get:
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/mute-timings/:name': {
      $delete:
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { name: string } }
            output: MuteTimeInterval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: MuteTimeInterval }
            output: MuteTimeInterval
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: MuteTimeInterval }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: MuteTimeInterval }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: MuteTimeInterval }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/provisioning/mute-timings/:name/export': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: AlertingFileExport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: {
                download?: boolean | undefined
                format?: 'yaml' | 'json' | 'hcl' | undefined
              }
            }
            output: PermissionDenied
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v1/provisioning/policies': {
      $delete:
        | { input: {}; output: Ack; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: PublicError; outputFormat: 'json'; status: 409 }
      $get:
        | { input: {}; output: Route; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
      $put:
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & { json: Route }
            output: Ack
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & { json: Route }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & { json: Route }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Disable-Provenance'?: string | undefined } } & { json: Route }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/provisioning/policies/export': {
      $get:
        | { input: {}; output: AlertingFileExport; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AlertingFileExport; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AlertingFileExport; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AlertingFileExport; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AlertingFileExport; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: ForbiddenError; outputFormat: 'text'; status: 403 }
        | { input: {}; output: NotFound; outputFormat: 'json'; status: 404 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/v1/provisioning/templates': {
      $get:
        | { input: {}; output: NotificationTemplates; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v1/provisioning/templates/:name': {
      $delete:
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & { query: { version?: string | undefined } }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { name: string } }
            output: NotificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } }
            output: PublicError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: NotificationTemplateContent }
            output: NotificationTemplate
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: NotificationTemplateContent }
            output: PublicError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: NotificationTemplateContent }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Disable-Provenance'?: string | undefined }
            } & { json: NotificationTemplateContent }
            output: PublicError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/sso-settings': {
      $get:
        | {
            input: {}
            output: {
              id?: string | undefined
              provider?: string | undefined
              settings?: { [x: string]: { [x: string]: unknown } } | undefined
              source?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponseBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v1/sso-settings/:key': {
      $delete:
        | {
            input: { param: { key: string } }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { key: string } }
            output: {
              id?: string | undefined
              provider?: string | undefined
              settings?: { [x: string]: { [x: string]: unknown } } | undefined
              source?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { key: string } } & {
              json: { settings?: { [x: string]: { [x: string]: unknown } } | undefined }
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { key: string } } & {
              json: { settings?: { [x: string]: { [x: string]: unknown } } | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & {
              json: { settings?: { [x: string]: { [x: string]: unknown } } | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & {
              json: { settings?: { [x: string]: { [x: string]: unknown } } | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & {
              json: { settings?: { [x: string]: { [x: string]: unknown } } | undefined }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { key: string } } & {
              json: {
                id?: string | undefined
                provider?: string | undefined
                settings?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: SuccessResponseBody
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { key: string } } & {
              json: {
                id?: string | undefined
                provider?: string | undefined
                settings?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & {
              json: {
                id?: string | undefined
                provider?: string | undefined
                settings?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string } } & {
              json: {
                id?: string | undefined
                provider?: string | undefined
                settings?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key: string } } & {
              json: {
                id?: string | undefined
                provider?: string | undefined
                settings?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: ErrorResponseBody
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
