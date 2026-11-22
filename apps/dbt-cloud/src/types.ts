type Group = {
  account_id: bigint
  name: string
  state: number
  assign_by_default: boolean
  sso_mapping_groups?: string[] | undefined
}
type AccountResponse = {
  id: bigint
  name?: string | undefined
  plan: {}
  run_slots: number
  developer_seats: number
  it_seats: number
  explorer_seats: number
  analyst_seats: number
  read_only_seats: number
  locked: boolean
  lock_reason: string
  lock_cause: {}
  unlocked_at: string
  pending_cancel: boolean
  billing_email_address: string
  pod_memory_request_mebibytes: number
  develop_pod_memory_request_mebibytes: number
  run_duration_limit_seconds: number
  queue_limit: number
  enterprise_login_slug: string
  business_critical: boolean
  default_license_type?: {} | undefined
  starter_repo_url: string
  git_auth_level: string
  identifier: string
  trial_end_date: string
  static_subdomain: string
  vanity_subdomain: string
  run_locked_until: string
  state?: number | undefined
  docs_job_id?: bigint | undefined
  freshness_job_id?: bigint | undefined
  copilot_locked_until: string
  agent_credit_locked: boolean
  account_migration_events: { [x: string]: unknown }[]
  groups: Group[]
  created_at: string
  updated_at: string
}
type CustomPagination = { count: number; total_count: number }
type Extra = {
  filters: { [x: string]: { [x: string]: unknown } }
  order_by: string
  pagination: CustomPagination
}
type ResponseStatus = {
  code?: number | undefined
  is_success: boolean
  user_message: string
  developer_message: string
}
type AccountListEnveloped = { data: AccountResponse[]; extra: Extra; status: ResponseStatus }
type AssignGroupsRequestRequest = {
  user_id: bigint
  desired_group_ids?: bigint[] | undefined
  add_group_ids?: bigint[] | undefined
  remove_group_ids?: bigint[] | undefined
}
type PermissionSetEnum =
  | 'account_admin'
  | 'account_viewer'
  | 'admin'
  | 'analyst'
  | 'analyst_read'
  | 'billing_admin'
  | 'cost_insights_admin'
  | 'cost_insights_viewer'
  | 'cost_management_admin'
  | 'cost_management_viewer'
  | 'database_admin'
  | 'developer'
  | 'fusion_admin'
  | 'git_admin'
  | 'job_admin'
  | 'job_creator'
  | 'job_runner'
  | 'job_viewer'
  | 'manage_marketplace_apps'
  | 'member'
  | 'metadata_only'
  | 'notification_manager'
  | 'owner'
  | 'project_creator'
  | 'readonly'
  | 'scim_only'
  | 'security_admin'
  | 'semantic_layer_only'
  | 'stakeholder'
  | 'team_admin'
  | 'webhooks_only'
type GroupPermission = {
  account_id: bigint
  group_id: bigint
  project_id?: bigint | undefined
  all_projects: boolean
  permission_set: PermissionSetEnum
  permission_level?: number | undefined
  state?: number | undefined
  writable_environment_categories: string[]
}
type GroupResponse = {
  id: bigint
  account_id?: bigint | undefined
  name?: string | undefined
  state?: number | undefined
  assign_by_default?: boolean | undefined
  sso_mapping_groups?: string[] | undefined
  created_at: string
  updated_at: string
  group_permissions: GroupPermission[]
  member_count: number
  scim_managed: boolean
}
type GroupListEnveloped = { data: GroupResponse[]; extra: Extra; status: ResponseStatus }
type PublicAuditLogResponse = {
  id?: string | undefined
  account_id?: bigint | undefined
  source?: string | undefined
  service?: string | undefined
  actor?: { [x: string]: unknown } | undefined
  event_type?: string | undefined
  event_label?: string | undefined
  event_context?: { [x: string]: unknown } | undefined
  created_at: string
}
type PublicAuditLogListEnveloped = {
  data: PublicAuditLogResponse[]
  extra: Extra
  status: ResponseStatus
}
type AuditLogBulkExportStatusResponse = { is_running?: boolean | undefined }
type AuditLogBulkExportStatusResponseEnveloped = {
  data: AuditLogBulkExportStatusResponse
  status: ResponseStatus
}
type AuditLogStartBulkExportResponse = { job_id?: string | undefined }
type AuditLogStartBulkExportResponseEnveloped = {
  data: AuditLogStartBulkExportResponse
  status: ResponseStatus
}
type AuditLogBulkExportDownloadResponse = { download_url?: string | undefined }
type AuditLogBulkExportDownloadResponseEnveloped = {
  data: AuditLogBulkExportDownloadResponse
  status: ResponseStatus
}
type Status = {
  code?: number | undefined
  is_success?: boolean | undefined
  user_message?: string | undefined
  developer_message?: string | undefined
}
type SnowflakeConnection = {
  account: string
  database: string
  warehouse: string
  client_session_keep_alive?: boolean | undefined
  role?: string | undefined
  allow_sso?: boolean | undefined
  oauth_client_id?: string | undefined
  oauth_client_secret?: string | undefined
}
type PostgresConnection = {
  hostname: string
  dbname: string
  port?: number | undefined
  retries?: number | undefined
}
type RedshiftConnection = {
  hostname: string
  dbname: string
  port?: number | undefined
  retries?: number | undefined
}
type SchemasAdaptersBigqueryV0ConnectionSchemaPriority = 'interactive' | 'batch'
type BigqueryConnection = {
  project_id: string
  timeout_seconds: number
  private_key_id: string
  private_key: string
  client_email: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
  priority?: SchemasAdaptersBigqueryV0ConnectionSchemaPriority | undefined
  scopes?: string[] | undefined
  location?: string | undefined
  maximum_bytes_billed?: number | undefined
  execution_project?: string | undefined
  impersonate_service_account?: string | undefined
  retries?: number | undefined
  job_retry_deadline_seconds?: number | undefined
  job_creation_timeout_seconds?: number | undefined
  application_id?: string | undefined
  application_secret?: string | undefined
  gcs_bucket?: string | undefined
  dataproc_region?: string | undefined
  dataproc_cluster_name?: string | undefined
  api_endpoint?: string | undefined
}
type SchemasAdaptersBigqueryV1ConnectionSchemaPriority = 'interactive' | 'batch'
type BigqueryConnectionV1 = {
  deployment_env_auth_type?: {} | undefined
  project_id: string
  private_key_id?: string | undefined
  private_key?: string | undefined
  client_email?: string | undefined
  client_id?: string | undefined
  auth_uri?: string | undefined
  token_uri?: string | undefined
  auth_provider_x509_cert_url?: string | undefined
  client_x509_cert_url?: string | undefined
  job_execution_timeout_seconds?: number | undefined
  priority?: SchemasAdaptersBigqueryV1ConnectionSchemaPriority | undefined
  scopes?: string[] | undefined
  location?: string | undefined
  maximum_bytes_billed?: number | undefined
  execution_project?: string | undefined
  impersonate_service_account?: string | undefined
  retries?: number | undefined
  job_retry_deadline_seconds?: number | undefined
  job_creation_timeout_seconds?: number | undefined
  application_id?: string | undefined
  application_secret?: string | undefined
  gcs_bucket?: string | undefined
  dataproc_region?: string | undefined
  dataproc_cluster_name?: string | undefined
  api_endpoint?: string | undefined
  adapter_id?: bigint | undefined
}
type ClickHouseConnection = {
  host: string
  port?: number | undefined
  database?: string | undefined
  adapter_id?: bigint | undefined
}
type DatabricksConnection = {
  host: string
  http_path: string
  catalog?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scopes?: string[] | undefined
  adapter_id?: bigint | undefined
}
type DatabricksSparkConnection = {
  host: string
  method?: {} | undefined
  port?: number | undefined
  cluster?: string | undefined
  endpoint?: string | undefined
  driver?: string | undefined
  organization?: string | undefined
  user?: string | undefined
  adapter_id?: bigint | undefined
}
type TrinoConnection = {
  host: string
  method?: string | undefined
  port?: number | undefined
  adapter_id?: bigint | undefined
}
type FabricConnection = {
  server: string
  database: string
  driver?: string | undefined
  port?: number | undefined
  retries?: number | undefined
  login_timeout?: number | undefined
  query_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type SynapseConnection = {
  host: string
  database: string
  driver?: string | undefined
  port?: number | undefined
  retries?: number | undefined
  login_timeout?: number | undefined
  query_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type ApacheSparkConnection = {
  host: string
  cluster: string
  method?: {} | undefined
  connect_timeout?: number | undefined
  connect_retries?: number | undefined
  organization?: string | undefined
  user?: string | undefined
  auth?: string | undefined
  kerberos_service_name?: string | undefined
  port?: number | undefined
  adapter_id?: bigint | undefined
}
type AthenaConnection = {
  region_name: string
  database: string
  work_group?: string | undefined
  spark_work_group?: string | undefined
  s3_staging_dir: string
  s3_data_dir?: string | undefined
  s3_data_naming?: string | undefined
  s3_tmp_table_dir?: string | undefined
  poll_interval?: number | undefined
  num_retries?: number | undefined
  num_boto3_retries?: number | undefined
  num_iceberg_retries?: number | undefined
  adapter_id?: bigint | undefined
}
type SalesforceConnection = {
  login_url: string
  database?: string | undefined
  data_transform_run_timeout?: number | undefined
  auth_type?: {} | undefined
  adapter_id?: bigint | undefined
}
type TeradataConnection = {
  port?: string | undefined
  tmode?: 'ANSI' | undefined
  host: string
  retries?: number | undefined
  request_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type AccountConnectionList = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  name: string
  adapter_version: {}
  private_link_endpoint_id?: string | undefined
  is_ssh_tunnel_enabled?: boolean | undefined
  oauth_configuration_id?: bigint | undefined
  environment__count: number
  platform_metadata_credentials_id?: bigint | undefined
  analytics_credentials_id?: bigint | undefined
  config?:
    | SnowflakeConnection
    | PostgresConnection
    | RedshiftConnection
    | BigqueryConnection
    | BigqueryConnectionV1
    | ClickHouseConnection
    | DatabricksConnection
    | DatabricksSparkConnection
    | TrinoConnection
    | FabricConnection
    | SynapseConnection
    | ApacheSparkConnection
    | AthenaConnection
    | SalesforceConnection
    | TeradataConnection
    | undefined
}
type AccountConnectionListResponse = {
  status?: Status | undefined
  data: AccountConnectionList
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type AccountConnectionCreateBodyRequest = {
  account_id: bigint
  name: string
  adapter_version: {}
  private_link_endpoint_id?: string | undefined
  is_ssh_tunnel_enabled?: boolean | undefined
  oauth_configuration_id?: bigint | undefined
  config:
    | SnowflakeConnection
    | PostgresConnection
    | RedshiftConnection
    | BigqueryConnection
    | BigqueryConnectionV1
    | ClickHouseConnection
    | DatabricksConnection
    | DatabricksSparkConnection
    | TrinoConnection
    | FabricConnection
    | SynapseConnection
    | ApacheSparkConnection
    | AthenaConnection
    | SalesforceConnection
    | TeradataConnection
}
type AccountConnectionDetail = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  name: string
  adapter_version: {}
  private_link_endpoint_id?: string | undefined
  is_ssh_tunnel_enabled?: boolean | undefined
  oauth_redirect_uri: string
  oauth_configuration_id?: bigint | undefined
  is_configured_for_native_oauth?: boolean | undefined
  platform_metadata_credentials_id?: bigint | undefined
  analytics_credentials_id?: bigint | undefined
  config:
    | SnowflakeConnection
    | PostgresConnection
    | RedshiftConnection
    | BigqueryConnection
    | BigqueryConnectionV1
    | ClickHouseConnection
    | DatabricksConnection
    | DatabricksSparkConnection
    | TrinoConnection
    | FabricConnection
    | SynapseConnection
    | ApacheSparkConnection
    | AthenaConnection
    | SalesforceConnection
    | TeradataConnection
}
type AccountConnectionDetailResponse = {
  status?: Status | undefined
  data: AccountConnectionDetail
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type OptionalSnowflakeConnection = {
  account?: string | undefined
  database?: string | undefined
  warehouse?: string | undefined
  client_session_keep_alive?: boolean | undefined
  role?: string | undefined
  allow_sso?: boolean | undefined
  oauth_client_id?: string | undefined
  oauth_client_secret?: string | undefined
}
type OptionalPostgresConnection = {
  hostname?: string | undefined
  dbname?: string | undefined
  port?: number | undefined
  retries?: number | undefined
}
type OptionalRedshiftConnection = {
  hostname?: string | undefined
  dbname?: string | undefined
  port?: number | undefined
  retries?: number | undefined
}
type OptionalBigqueryConnection = {
  project_id?: string | undefined
  timeout_seconds?: number | undefined
  private_key_id?: string | undefined
  private_key?: string | undefined
  client_email?: string | undefined
  client_id?: string | undefined
  auth_uri?: string | undefined
  token_uri?: string | undefined
  auth_provider_x509_cert_url?: string | undefined
  client_x509_cert_url?: string | undefined
  priority?: SchemasAdaptersBigqueryV0ConnectionSchemaPriority | undefined
  scopes?: string[] | undefined
  location?: string | undefined
  maximum_bytes_billed?: number | undefined
  execution_project?: string | undefined
  impersonate_service_account?: string | undefined
  retries?: number | undefined
  job_retry_deadline_seconds?: number | undefined
  job_creation_timeout_seconds?: number | undefined
  application_id?: string | undefined
  application_secret?: string | undefined
  gcs_bucket?: string | undefined
  dataproc_region?: string | undefined
  dataproc_cluster_name?: string | undefined
  api_endpoint?: string | undefined
}
type DeploymentEnvironmentAuthType = 'service-account-json' | 'external-oauth-wif'
type OptionalBigqueryConnectionV1 = {
  deployment_env_auth_type?: DeploymentEnvironmentAuthType | undefined
  project_id?: string | undefined
  private_key_id?: string | undefined
  private_key?: string | undefined
  client_email?: string | undefined
  client_id?: string | undefined
  auth_uri?: string | undefined
  token_uri?: string | undefined
  auth_provider_x509_cert_url?: string | undefined
  client_x509_cert_url?: string | undefined
  job_execution_timeout_seconds?: number | undefined
  priority?: SchemasAdaptersBigqueryV1ConnectionSchemaPriority | undefined
  scopes?: string[] | undefined
  location?: string | undefined
  maximum_bytes_billed?: number | undefined
  execution_project?: string | undefined
  impersonate_service_account?: string | undefined
  retries?: number | undefined
  job_retry_deadline_seconds?: number | undefined
  job_creation_timeout_seconds?: number | undefined
  application_id?: string | undefined
  application_secret?: string | undefined
  gcs_bucket?: string | undefined
  dataproc_region?: string | undefined
  dataproc_cluster_name?: string | undefined
  api_endpoint?: string | undefined
  adapter_id?: bigint | undefined
}
type OptionalClickHouseConnection = {
  host?: string | undefined
  port?: number | undefined
  database?: string | undefined
  adapter_id?: bigint | undefined
}
type OptionalDatabricksConnection = {
  host?: string | undefined
  http_path?: string | undefined
  catalog?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scopes?: string[] | undefined
  adapter_id?: bigint | undefined
}
type Method = 'odbc'
type OptionalDatabricksSparkConnection = {
  host?: string | undefined
  method?: Method | undefined
  port?: number | undefined
  cluster?: string | undefined
  endpoint?: string | undefined
  driver?: string | undefined
  organization?: string | undefined
  user?: string | undefined
  adapter_id?: bigint | undefined
}
type OptionalTrinoConnection = {
  host?: string | undefined
  method?: string | undefined
  port?: number | undefined
  adapter_id?: bigint | undefined
}
type OptionalFabricConnection = {
  server?: string | undefined
  database?: string | undefined
  driver?: string | undefined
  port?: number | undefined
  retries?: number | undefined
  login_timeout?: number | undefined
  query_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type OptionalSynapseConnection = {
  host?: string | undefined
  database?: string | undefined
  driver?: string | undefined
  port?: number | undefined
  retries?: number | undefined
  login_timeout?: number | undefined
  query_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type ConnectionMethod = 'http' | 'thrift'
type OptionalApacheSparkConnection = {
  host?: string | undefined
  cluster?: string | undefined
  method?: ConnectionMethod | undefined
  connect_timeout?: number | undefined
  connect_retries?: number | undefined
  organization?: string | undefined
  user?: string | undefined
  auth?: string | undefined
  kerberos_service_name?: string | undefined
  port?: number | undefined
  adapter_id?: bigint | undefined
}
type OptionalAthenaConnection = {
  region_name?: string | undefined
  database?: string | undefined
  work_group?: string | undefined
  spark_work_group?: string | undefined
  s3_staging_dir?: string | undefined
  s3_data_dir?: string | undefined
  s3_data_naming?: string | undefined
  s3_tmp_table_dir?: string | undefined
  poll_interval?: number | undefined
  num_retries?: number | undefined
  num_boto3_retries?: number | undefined
  num_iceberg_retries?: number | undefined
  adapter_id?: bigint | undefined
}
type SchemasAdaptersSalesforceConnectionSchemaAuthType = 'jwt_bearer'
type OptionalSalesforceConnection = {
  login_url?: string | undefined
  database?: string | undefined
  data_transform_run_timeout?: number | undefined
  auth_type?: SchemasAdaptersSalesforceConnectionSchemaAuthType | undefined
  adapter_id?: bigint | undefined
}
type OptionalTeradataConnection = {
  port?: string | undefined
  tmode?: string | undefined
  host?: string | undefined
  retries?: number | undefined
  request_timeout?: number | undefined
  adapter_id?: bigint | undefined
}
type AccountConnectionUpdateBodyRequest = {
  account_id?: bigint | undefined
  name?: string | undefined
  private_link_endpoint_id?: string | undefined
  is_ssh_tunnel_enabled?: boolean | undefined
  oauth_configuration_id?: bigint | undefined
  config?:
    | OptionalSnowflakeConnection
    | OptionalPostgresConnection
    | OptionalRedshiftConnection
    | OptionalBigqueryConnection
    | OptionalBigqueryConnectionV1
    | OptionalClickHouseConnection
    | OptionalDatabricksConnection
    | OptionalDatabricksSparkConnection
    | OptionalTrinoConnection
    | OptionalFabricConnection
    | OptionalSynapseConnection
    | OptionalApacheSparkConnection
    | OptionalAthenaConnection
    | OptionalSalesforceConnection
    | OptionalTeradataConnection
    | undefined
}
type FavoriteAsset = {
  id: bigint
  created_at: string
  updated_at: string
  project_id?: bigint | undefined
  environment_id?: bigint | undefined
  asset_id: string
  name: string
  platform: string
  asset_type?: string | undefined
}
type DetailFavoriteAssetResponse = {
  status?: Status | undefined
  data: FavoriteAsset
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type GroupPermissionRequest = {
  account_id: bigint
  group_id: bigint
  project_id?: bigint | undefined
  all_projects: boolean
  permission_set: PermissionSetEnum
  permission_level?: number | undefined
  state?: number | undefined
  writable_environment_categories: string[]
}
type GroupPermissionListRequest = { '': GroupPermissionRequest[] }
type GroupPermissionResponse = {
  id: bigint
  account_id?: bigint | undefined
  group_id?: bigint | undefined
  project_id?: bigint | undefined
  all_projects?: boolean | undefined
  permission_set?: PermissionSetEnum | undefined
  permission_level?: number | undefined
  state?: number | undefined
  writable_environment_categories?: string[] | undefined
  created_at: string
  updated_at: string
}
type GroupPermissionListEnveloped = {
  data: GroupPermissionResponse[]
  extra: Extra
  status: ResponseStatus
}
type GroupRequest = {
  account_id: bigint
  name: string
  state: number
  assign_by_default: boolean
  sso_mapping_groups?: string[] | undefined
}
type GroupEnveloped = { data: GroupResponse; status: ResponseStatus }
type LicenseTypeEnum = 'developer' | 'read_only' | 'analyst' | 'it'
type InviteUsersRequestRequest = {
  id?: bigint | undefined
  email_addresses: string[]
  license_type: LicenseTypeEnum
  group_ids?: bigint[] | undefined
}
type InviteUsersResponse = { sent?: string[] | undefined }
type InviteUsersResponseEnveloped = { data: InviteUsersResponse; status: ResponseStatus }
type IPRestrictionCidr = {
  state: number
  ip_restriction_rule_id: bigint
  enabled: boolean
  cidr: string
  cidr_ipv6?: string | undefined
}
type IPRestrictionRuleResponse = {
  id: bigint
  name?: string | undefined
  type?: number | undefined
  state?: number | undefined
  ip_restriction_rule_set_id?: bigint | undefined
  rule_set_enabled?: boolean | undefined
  account_id?: bigint | undefined
  cidrs?: IPRestrictionCidr[] | undefined
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  enabled_for_service_tokens: boolean
  description?: string | undefined
  created_at: string
  updated_at: string
}
type IPRestrictionRuleListEnveloped = {
  data: IPRestrictionRuleResponse[]
  extra: Extra
  status: ResponseStatus
}
type IPRestrictionCidrBody = {
  id?: bigint | undefined
  cidr: string
  enabled?: boolean | undefined
  state?: number | undefined
  ip_restriction_rule_id?: bigint | undefined
  cidr_ipv6?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CreateIPRestrictionBodyRequest = {
  name: string
  type: {}
  description?: string | undefined
  rule_set_enabled?: boolean | undefined
  cidrs?: IPRestrictionCidrBody[] | undefined
  account_id?: bigint | undefined
  ip_restriction_rule_set_id?: bigint | undefined
  state?: number | undefined
  created_by_id?: bigint | undefined
  enabled_for_service_tokens?: boolean | undefined
}
type IPRestrictionRuleEnveloped = { data: IPRestrictionRuleResponse; status: ResponseStatus }
type EnableIPRestrictionsBodyRequest = {
  enabled: boolean
  account_id?: bigint | undefined
  state?: number | undefined
}
type IPRestrictionRuleSetResponse = {
  id: bigint
  account_id?: bigint | undefined
  enabled?: boolean | undefined
  state?: number | undefined
  enabled_for_service_tokens: boolean
  created_at: string
  updated_at: string
}
type IPRestrictionRuleSetEnveloped = { data: IPRestrictionRuleSetResponse; status: ResponseStatus }
type IPRestrictionSetValidate = { is_valid_for_admin: boolean }
type UpdateIPRestrictionBodyRequest = {
  name: string
  type: {}
  description?: string | undefined
  rule_set_enabled?: boolean | undefined
  cidrs?: IPRestrictionCidrBody[] | undefined
  account_id?: bigint | undefined
  ip_restriction_rule_set_id?: bigint | undefined
  state?: number | undefined
  created_by_id?: bigint | undefined
  enabled_for_service_tokens?: boolean | undefined
  id?: bigint | undefined
}
type IPRestrictionRule = {
  name: string
  type: number
  state: number
  ip_restriction_rule_set_id: bigint
  rule_set_enabled: boolean
  account_id: bigint
  cidrs?: IPRestrictionCidr[] | undefined
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  description?: string | undefined
}
type LicenseMapResponse = {
  id: bigint
  account_id?: bigint | undefined
  license_type?: LicenseTypeEnum | undefined
  state?: number | undefined
  sso_license_mapping_groups?: string[] | undefined
  created_at: string
  updated_at: string
}
type LicenseMapListEnveloped = { data: LicenseMapResponse[]; extra: Extra; status: ResponseStatus }
type LicenseMapRequest = {
  account_id: bigint
  license_type: LicenseTypeEnum
  state?: number | undefined
  sso_license_mapping_groups?: string[] | undefined
}
type LicenseMapEnveloped = { data: LicenseMapResponse; status: ResponseStatus }
type MantleEligibility = {
  project_id: bigint
  eligible: boolean
  blocked_reason: {}
  status: {
    account_id: bigint
    project_id: bigint
    is_legacy: boolean
    oldest_legacy_version: string | null
    legacy_job_count: number
    target_dbt_version: string
  }
}
type MantleEligibilityResponse = {
  status?: Status | undefined
  data: MantleEligibility[]
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type All597Enum = false
type All61dEnum = true
type DisableEnvironmentOverridesBodyRequest = { all?: All597Enum | undefined } | { all: All61dEnum }
type EnvironmentOverrideResultResource = {
  migration_target?: (string | null) | undefined
  migration_enabled: boolean
  migration_change_id?: (bigint | null) | undefined
  migration_changed_at?: (string | null) | undefined
  environment_id: bigint
  changed: boolean
}
type EnvironmentOverridesResource = {
  results: EnvironmentOverrideResultResource[]
  changed_environment_count: number
}
type AllEnvironmentOverridesResource = {
  selection: {}
  status: {}
  processed_environment_count: number
  changed_environment_count: number
  unchanged_environment_count: number
  skipped_environment_count: number
  remaining_environment_count: number
  stop_reason: {}
  next_cursor: string | null
}
type EnvironmentOverridesResponse = {
  status?: Status | undefined
  data: EnvironmentOverridesResource | AllEnvironmentOverridesResource
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type EnableEnvironmentOverridesBodyRequest = { all?: All597Enum | undefined } | { all: All61dEnum }
type TargetCapabilityResource = {
  target: string
  display_name: string
  can_enable: boolean
  blocked_reason?: (string | null) | undefined
}
type UnavailableReasonEnum = 'runs_read_denied' | 'no_change'
type NullEnum = null
type InventoryEnvironment = {
  migration_target?: (string | null) | undefined
  migration_enabled: boolean
  migration_change_id?: (bigint | null) | undefined
  migration_changed_at?: (string | null) | undefined
  environment_id: bigint
  environment_name: string
  project_id: bigint
  project_name: string
  environment_type: string
  deployment_type?: string | undefined
  configured_dbt_version?: string | undefined
  baseline_dbt_version: string
  effective_dbt_version: string
  is_legacy: boolean
  job_count: number
  legacy_job_count: number
  effective_legacy_job_count: number
  overridden_job_count: number
  can_enable: boolean
  can_disable: boolean
  enable_blocked_reason?: (string | null) | undefined
  disable_blocked_reason?: (string | null) | undefined
  can_read_runs?: boolean | undefined
  last_run_at?: (string | null) | undefined
  resolved_execution_version?: (string | null) | undefined
  execution_blocked_reason?: (string | null) | undefined
  target_capabilities: TargetCapabilityResource[]
  migration_run_summary: {
    cohort: {}
    job_count: number
    change_id?: (bigint | null) | undefined
    window_started_at?: (string | null) | undefined
    availability: {}
    unavailable_reason?: UnavailableReasonEnum | NullEnum | undefined
    counts?:
      | {
          succeeded: number
          failed: number
          queued: number
          starting: number
          running: number
          cancelled: number
          unknown: number
          no_qualifying_run: number
        }
      | undefined
  }
}
type V3RequestParams = { [x: string]: unknown }
type V3ResponsePagination = { count: number; total_count: number }
type ComplianceCountsResource = { total: number; compliant: number; non_compliant: number }
type ComplianceSummaryResource = {
  basis: {}
  scope: {}
  projects: ComplianceCountsResource
  environments: ComplianceCountsResource
  jobs: ComplianceCountsResource
}
type OverrideActionCountsResource = {
  eligible_environment_count: number
  legacy_job_count: number
  excluded_environment_count: number
}
type InventoryEnvironmentExtraData = {
  filters?: V3RequestParams | undefined
  order_by?: string | string[] | undefined
  pagination: V3ResponsePagination
  migration_summary?:
    | {
        account_id: bigint
        compliance: ComplianceSummaryResource
        environment_count: number
        supported_targets: string[]
        actions?:
          | { enable_latest: OverrideActionCountsResource; disable: OverrideActionCountsResource }
          | undefined
      }
    | undefined
}
type InventoryEnvironmentResponse = {
  status?: Status | undefined
  data: InventoryEnvironment[]
  extra: InventoryEnvironmentExtraData
  error_code?: number | undefined
}
type InventoryJobResource = {
  migration_target: string | null
  migration_enabled: boolean
  migration_change_id: bigint | null
  migration_changed_at: string | null
  job_id: bigint
  job_name: string
  environment_id: bigint
  configured_dbt_version: string | null
  baseline_dbt_version: string
  effective_dbt_version: string
  version_source: string
  is_legacy: boolean
  is_effectively_legacy: boolean
  is_overridden: boolean
  is_deactivated: boolean
  version_group: {}
  can_read_runs: boolean
  latest_run: {
    id: bigint
    status: number
    status_humanized: string
    status_message: string | null
  }
  last_run: {
    id: bigint
    status: number
    status_humanized: string
    status_message: string | null
    created_at: string
    dbt_version: string | null
  }
  resolved_execution_version: string | null
  execution_blocked_reason: string | null
}
type InventoryJobPaginationResource = {
  count: number
  total_count: number
  limit: number
  offset: number
}
type InventoryJobGroupPageResource = {
  jobs: InventoryJobResource[]
  pagination: InventoryJobPaginationResource
}
type InventoryJobGroups = {
  environment_id: bigint
  compliant: InventoryJobGroupPageResource
  legacy: InventoryJobGroupPageResource
}
type InventoryJobGroupsResponse = {
  status?: Status | undefined
  data: InventoryJobGroups
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type InventorySummary = {
  account_id: bigint
  compliance: ComplianceSummaryResource
  environment_count: number
  supported_targets: string[]
  actions?:
    | { enable_latest: OverrideActionCountsResource; disable: OverrideActionCountsResource }
    | undefined
}
type InventorySummaryResponse = {
  status?: Status | undefined
  data: InventorySummary
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type EntraExtraData = { application_id_uri: string }
type OAuthConfigurationResponse = {
  id: bigint
  account_id?: bigint | undefined
  type?: string | undefined
  name?: string | undefined
  extra_data?: EntraExtraData | undefined
  client_id?: string | undefined
  authorize_url?: string | undefined
  token_url?: string | undefined
  redirect_uri?: string | undefined
  created_at: string
  updated_at: string
}
type OAuthConfigurationListEnveloped = {
  data: OAuthConfigurationResponse[]
  extra: Extra
  status: ResponseStatus
}
type EntraExtraDataRequest = { application_id_uri: string }
type OAuthConfigurationRequest = {
  account_id: bigint
  type: string
  name?: string | undefined
  extra_data?: EntraExtraDataRequest | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  authorize_url?: string | undefined
  token_url?: string | undefined
  redirect_uri?: string | undefined
}
type OAuthConfigurationEnveloped = { data: OAuthConfigurationResponse; status: ResponseStatus }
type PrivateEndpointList = {
  id: string
  account_id: bigint
  state: number
  name?: string | undefined
  type?: string | undefined
  private_link_endpoint?: string | undefined
  cidr_range?: string | undefined
  egress_cidr?: string | undefined
  endpoint_identifier?: string | undefined
  endpoint_state?: string | undefined
  connectivity_status?: string | undefined
  connection_count?: number | undefined
  created_at: string
  updated_at: string
}
type V3ResponseExtraData = {
  filters?: V3RequestParams | undefined
  order_by?: string | string[] | undefined
  pagination: V3ResponsePagination
}
type PrivateEndpointListResponse = {
  status?: Status | undefined
  data: PrivateEndpointList[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type PrivateEndpointDetail = {
  id: string
  account_id: bigint
  state: number
  name?: string | undefined
  type?: string | undefined
  private_link_endpoint?: string | undefined
  cidr_range?: string | undefined
  egress_cidr?: string | undefined
  endpoint_identifier?: string | undefined
  endpoint_state?: string | undefined
  connectivity_status?: string | undefined
  connection_count?: number | undefined
  created_at: string
  updated_at: string
  port?: number | undefined
  provisioning_status?: string | undefined
  provisioning_status_message?: string | undefined
}
type PrivateEndpointDetailResponse = {
  status?: Status | undefined
  data: PrivateEndpointDetail
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type ConnectionTypeEnum = 'postgres' | 'redshift' | 'snowflake' | 'bigquery' | 'adapter'
type AdapterVersionEnum =
  | 'apache_spark_v0'
  | 'databricks_spark_v0'
  | 'databricks_v0'
  | 'trino_v0'
  | 'snowflake_v0'
  | 'bigquery_v0'
  | 'bigquery_v1'
  | 'postgres_v0'
  | 'redshift_v0'
  | 'salesforce_v0'
  | 'synapse_v0'
  | 'fabric_v0'
  | 'athena_v0'
  | 'teradata_v0'
  | 'clickhouse_v0'
type Type76eEnum = 'development' | 'deployment'
type DeploymentTypeEnum = 'production' | 'staging'
type EnvironmentV3 = {
  account_id: bigint
  project_id: bigint
  credentials_id?: bigint | undefined
  connection_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
  name: string
  dbt_version: string
  type: Type76eEnum
  use_custom_branch: boolean
  custom_branch?: string | undefined
  supports_docs: boolean
  deployment_type?: DeploymentTypeEnum | undefined
  enable_model_query_history?: boolean | undefined
  enable_dbt_state?: boolean | undefined
  enable_dbt_state_model_lock: boolean
  state: number
  primary_profile_id?: bigint | undefined
}
type JobDefinitionTriggers = {
  github_webhook: boolean
  schedule: boolean
  git_provider_webhook?: boolean | undefined
  on_merge?: boolean | undefined
  custom_branch_only?: boolean | undefined
}
type JobDefinitionSettings = { threads: number; target_name: string }
type JobDefinitionExecution = { timeout_seconds: number }
type HumanReadableDateStrategyTypeEnum =
  | 'every_day'
  | 'days_of_week'
  | 'custom_cron'
  | 'interval_cron'
type HumanReadableTimeStrategTypeEnum = 'every_hour' | 'at_exact_hours'
type JobDefinitionSchedule = {
  cron: string
  date: HumanReadableDateStrategyTypeEnum
  time: HumanReadableTimeStrategTypeEnum
}
type JobTypeEnum = 'ci' | 'scheduled' | 'other' | 'merge' | 'exposure_sync' | 'adaptive' | 'hybrid'
type ProjectResponse = {
  id: bigint
  name?: string | undefined
  account_id?: bigint | undefined
  description?: string | undefined
  connection_id?: bigint | undefined
  repository_id?: bigint | undefined
  semantic_layer_config_id?: bigint | undefined
  state?: number | undefined
  dbt_project_subdirectory?: string | undefined
  docs_job_id?: bigint | undefined
  freshness_job_id?: bigint | undefined
  type?: {} | undefined
  created_at: string
  updated_at: string
  connection: {
    account_id: bigint
    project_id: bigint
    name: string
    type: ConnectionTypeEnum
    adapter_version?: AdapterVersionEnum | undefined
    created_by_id?: bigint | undefined
    created_by_service_token_id?: bigint | undefined
    state: number
    private_link_endpoint_id?: string | undefined
    oauth_configuration_id?: bigint | undefined
  }
  environments: EnvironmentV3[]
  repository: {
    account_id: bigint
    project_id?: bigint | undefined
    full_name?: string | undefined
    remote_backend?: {} | undefined
    git_clone_strategy?: {} | undefined
    deploy_key_id?: bigint | undefined
    repository_credentials_id?: bigint | undefined
    github_installation_id?: bigint | undefined
    github_webhook_id?: bigint | undefined
    state: number
    private_link_endpoint_id?: string | undefined
    git_provider_id?: bigint | undefined
  }
  group_permissions: GroupPermission[]
  docs_job: {
    environment_id: bigint
    account_id: bigint
    project_id: bigint
    name: string
    description?: string | undefined
    generate_docs: boolean
    run_generate_sources: boolean
    state: number
    dbt_version?: string | undefined
    triggers?: JobDefinitionTriggers | undefined
    settings: JobDefinitionSettings
    execution: JobDefinitionExecution
    schedule?: JobDefinitionSchedule | undefined
    execute_steps?: string[] | undefined
    job_type?: JobTypeEnum | undefined
    triggers_on_draft_pr?: boolean | undefined
    run_compare_changes?: boolean | undefined
    compare_changes_flags?: string | undefined
    run_lint?: boolean | undefined
    errors_on_lint_failure?: boolean | undefined
    deferring_environment_id?: bigint | undefined
    deferring_job_definition_id?: bigint | undefined
    cost_optimization_features?: string[] | undefined
  }
  freshness_job: {
    environment_id: bigint
    account_id: bigint
    project_id: bigint
    name: string
    description?: string | undefined
    generate_docs: boolean
    run_generate_sources: boolean
    state: number
    dbt_version?: string | undefined
    triggers?: JobDefinitionTriggers | undefined
    settings: JobDefinitionSettings
    execution: JobDefinitionExecution
    schedule?: JobDefinitionSchedule | undefined
    execute_steps?: string[] | undefined
    job_type?: JobTypeEnum | undefined
    triggers_on_draft_pr?: boolean | undefined
    run_compare_changes?: boolean | undefined
    compare_changes_flags?: string | undefined
    run_lint?: boolean | undefined
    errors_on_lint_failure?: boolean | undefined
    deferring_environment_id?: bigint | undefined
    deferring_job_definition_id?: bigint | undefined
    cost_optimization_features?: string[] | undefined
  }
  fusion_readiness: { [x: string]: unknown }
  default_version: string
}
type ProjectListEnveloped = { data: ProjectResponse[]; extra: Extra; status: ResponseStatus }
type ProjectRequest = {
  name: string
  account_id: bigint
  description?: string | undefined
  connection_id?: bigint | undefined
  repository_id?: bigint | undefined
  semantic_layer_config_id?: bigint | undefined
  state: number
  dbt_project_subdirectory?: string | undefined
  docs_job_id?: bigint | undefined
  freshness_job_id?: bigint | undefined
  type: {}
}
type ProjectEnveloped = { data: ProjectResponse; status: ResponseStatus }
type DbtAdapterRequest = {
  account_id: bigint
  project_id: bigint
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  adapter_version: AdapterVersionEnum
  metadata_json: { [x: string]: unknown }
  state: number
}
type DbtAdapterResponse = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  adapter_version?: AdapterVersionEnum | undefined
  metadata_json?: { [x: string]: unknown } | undefined
  state?: number | undefined
  created_at: string
  updated_at: string
}
type DbtAdapterEnveloped = { data: DbtAdapterResponse; status: ResponseStatus }
type BaseConnectionV3Response = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  name?: string | undefined
  type?: ConnectionTypeEnum | undefined
  adapter_version?: AdapterVersionEnum | undefined
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  state?: number | undefined
  private_link_endpoint_id?: string | undefined
  oauth_redirect_uri: string
  oauth_configuration_id?: bigint | undefined
  created_at: string
  updated_at: string
}
type BaseConnectionV3ListEnveloped = {
  data: BaseConnectionV3Response[]
  extra: Extra
  status: ResponseStatus
}
type BaseConnectionV3Request = {
  account_id: bigint
  project_id: bigint
  name: string
  type: ConnectionTypeEnum
  adapter_version?: AdapterVersionEnum | undefined
  created_by_id?: bigint | undefined
  created_by_service_token_id?: bigint | undefined
  state: number
  private_link_endpoint_id?: string | undefined
  oauth_configuration_id?: bigint | undefined
}
type BaseConnectionV3Enveloped = { data: BaseConnectionV3Response; status: ResponseStatus }
type PostgresCredentials = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  username: string
  default_schema: string
  target_name: string
  adapter_version?: {} | undefined
}
type RedshiftCredentialsAuthTypeEnum = 'password' | 'external_oauth'
type RedshiftCredentials = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  auth_type: RedshiftCredentialsAuthTypeEnum
  username?: string | undefined
  default_schema: string
  target_name: string
  adapter_version?: {} | undefined
}
type SnowflakeCredentialsAuthTypeEnum = 'password' | 'keypair' | 'sso' | 'external_oauth'
type SnowflakeCredentials = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  auth_type: SnowflakeCredentialsAuthTypeEnum
  schema: string
  user?: string | undefined
  target_name: string
  role?: string | undefined
  database?: string | undefined
  warehouse?: string | undefined
  _refresh_token?: string | undefined
  adapter_version?: {} | undefined
}
type BigqueryCredentials = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  schema: string
  target_name: string
  _refresh_token?: string | undefined
  adapter_version?: {} | undefined
}
type DbtAdapterCredentials = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  adapter_id?: bigint | undefined
  target_name: string
  adapter_version?: {} | undefined
}
type CredentialsResponseList =
  | PostgresCredentials
  | RedshiftCredentials
  | SnowflakeCredentials
  | BigqueryCredentials
  | DbtAdapterCredentials
type CredentialsResponseListEnveloped = {
  data: CredentialsResponseList[]
  extra: Extra
  status: ResponseStatus
}
type PostgresCredentialsRequest = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  username: string
  default_schema: string
  target_name: string
  password?: string | undefined
  adapter_version?: {} | undefined
}
type RedshiftCredentialsRequest = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  auth_type: RedshiftCredentialsAuthTypeEnum
  username?: string | undefined
  default_schema: string
  target_name: string
  password?: string | undefined
  adapter_version?: {} | undefined
}
type SnowflakeCredentialsRequest = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  auth_type: SnowflakeCredentialsAuthTypeEnum
  schema: string
  user?: string | undefined
  target_name: string
  role?: string | undefined
  database?: string | undefined
  warehouse?: string | undefined
  _refresh_token?: string | undefined
  password?: string | undefined
  private_key?: string | undefined
  private_key_passphrase?: string | undefined
  adapter_version?: {} | undefined
}
type BigqueryCredentialsRequest = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  schema: string
  target_name: string
  _refresh_token?: string | undefined
  adapter_version?: {} | undefined
}
type DbtAdapterCredentialsRequest = {
  account_id: bigint
  project_id?: bigint | undefined
  type: ConnectionTypeEnum
  state: number
  threads: number
  adapter_id?: bigint | undefined
  credential_details?: { _ciphertext?: string | undefined } | undefined
  target_name: string
  adapter_version?: {} | undefined
}
type CredentialsRequestRequest =
  | PostgresCredentialsRequest
  | RedshiftCredentialsRequest
  | SnowflakeCredentialsRequest
  | BigqueryCredentialsRequest
  | DbtAdapterCredentialsRequest
type CredentialsResponse =
  | PostgresCredentials
  | RedshiftCredentials
  | SnowflakeCredentials
  | BigqueryCredentials
  | DbtAdapterCredentials
type CredentialsResponseEnveloped = { data: CredentialsResponse; status: ResponseStatus }
type CustomEnvironmentVariableTypeEnum = 'project' | 'environment' | 'job' | 'user'
type CustomEnvironmentVariableRequest = {
  account_id: bigint
  project_id: bigint
  name: string
  type: CustomEnvironmentVariableTypeEnum
  user_id?: bigint | undefined
  environment_id?: bigint | undefined
  job_definition_id?: bigint | undefined
  raw_value?: string | undefined
  display_value?: string | undefined
  state?: number | undefined
}
type CustomEnvironmentVariableResponse = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  name?: string | undefined
  type?: CustomEnvironmentVariableTypeEnum | undefined
  user_id?: bigint | undefined
  environment_id?: bigint | undefined
  job_definition_id?: bigint | undefined
  display_value?: string | undefined
  state?: number | undefined
  created_at: string
  updated_at: string
  environment: {
    account_id: bigint
    project_id: bigint
    credentials_id?: bigint | undefined
    connection_id?: bigint | undefined
    extended_attributes_id?: bigint | undefined
    name: string
    dbt_version: string
    type: Type76eEnum
    use_custom_branch: boolean
    custom_branch?: string | undefined
    supports_docs: boolean
    deployment_type?: DeploymentTypeEnum | undefined
    enable_model_query_history?: boolean | undefined
    enable_dbt_state?: boolean | undefined
    enable_dbt_state_model_lock: boolean
    state: number
    primary_profile_id?: bigint | undefined
  }
}
type CustomEnvironmentVariableEnveloped = {
  data: CustomEnvironmentVariableResponse
  status: ResponseStatus
}
type CustomEnvironmentVariableBulkRequest = {
  new_name: string
  project?: string | undefined
  environmentNameExample1?: string | undefined
  environmentNameExample2?: string | undefined
}
type CustomEnvironmentVariableBulkRequestRequest = {
  env_var: CustomEnvironmentVariableBulkRequest[]
}
type ResponseData = {
  message: string
  new_var_ids: bigint[]
  failures?: { [x: string]: unknown } | undefined
}
type CustomEnvironmentVariableBulkResponse = {
  status?: string | undefined
  status_code?: number | undefined
  key_name?: string | undefined
  data?: ResponseData | undefined
}
type CustomEnvironmentVariableBulkResponseListEnveloped = {
  data: CustomEnvironmentVariableBulkResponse[]
  status: ResponseStatus
}
type CustomEnvironmentVariableBulkResponseFailResponse = {
  status?: string | undefined
  status_code?: number | undefined
  key_name?: string | undefined
  reason?: string | undefined
}
type CustomEnvironmentVariableBulkResponseFailListEnveloped = {
  data: CustomEnvironmentVariableBulkResponseFailResponse[]
  status: ResponseStatus
}
type BulkPutSuccessResponse = {
  message?: string | undefined
  new_var_ids?: bigint[] | undefined
  deleted_var_ids?: bigint[] | undefined
  failures?: { [x: string]: unknown } | undefined
}
type BulkPutSuccessResponseEnveloped = { data: BulkPutSuccessResponse; status: ResponseStatus }
type BulkPutErrorResponse = { reason?: string | undefined }
type BulkPutErrorResponseEnveloped = { data: BulkPutErrorResponse; status: ResponseStatus }
type EnvVarValue = { id: bigint; value?: string | undefined }
type EnvVarEnvironmentData = {
  environments: string[]
  variables: { [x: string]: { [x: string]: EnvVarValue } }
}
type EnvVarEnvironmentResponse = {
  status?: Status | undefined
  data: EnvVarEnvironmentData
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type EnvVarJobScopeMap = {
  project?: EnvVarValue | undefined
  environment?: EnvVarValue | undefined
  job?: EnvVarValue | undefined
}
type EnvVarJobResponse = {
  status?: Status | undefined
  data: { [x: string]: EnvVarJobScopeMap }
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type EnvVarUserScopeMap = {
  project?: EnvVarValue | undefined
  environment?: EnvVarValue | undefined
  user?: EnvVarValue | undefined
}
type EnvVarUserResponse = {
  status?: Status | undefined
  data: { [x: string]: EnvVarUserScopeMap }
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type EnvironmentV3Response = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  credentials_id?: bigint | undefined
  connection_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
  name?: string | undefined
  dbt_version?: string | undefined
  raw_dbt_version: string
  type?: {} | undefined
  use_custom_branch?: boolean | undefined
  custom_branch?: string | undefined
  supports_docs?: boolean | undefined
  deployment_type?: DeploymentTypeEnum | undefined
  is_deferrable: boolean
  enable_model_query_history?: boolean | undefined
  enable_dbt_state?: boolean | undefined
  enable_dbt_state_model_lock?: boolean | undefined
  state?: number | undefined
  created_at: string
  updated_at: string
  project: {
    name: string
    account_id: bigint
    description?: string | undefined
    connection_id?: bigint | undefined
    repository_id?: bigint | undefined
    semantic_layer_config_id?: bigint | undefined
    state: number
    dbt_project_subdirectory?: string | undefined
    docs_job_id?: bigint | undefined
    freshness_job_id?: bigint | undefined
    type: {}
  }
  primary_profile_id?: bigint | undefined
  credentials: {
    account_id: bigint
    project_id?: bigint | undefined
    type: ConnectionTypeEnum
    state: number
    threads: number
    username: string
    default_schema: string
    target_name: string
    adapter_version?: {} | undefined
  }
  fusion_readiness: { [x: string]: unknown }
}
type EnvironmentV3ListEnveloped = {
  data: EnvironmentV3Response[]
  extra: Extra
  status: ResponseStatus
}
type EnvironmentV3Request = {
  account_id: bigint
  project_id: bigint
  credentials_id?: bigint | undefined
  connection_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
  name: string
  dbt_version: string
  type: Type76eEnum
  use_custom_branch: boolean
  custom_branch?: string | undefined
  supports_docs: boolean
  deployment_type?: DeploymentTypeEnum | undefined
  enable_model_query_history?: boolean | undefined
  enable_dbt_state?: boolean | undefined
  enable_dbt_state_model_lock: boolean
  state: number
  primary_profile_id?: bigint | undefined
}
type EnvironmentV3Enveloped = { data: EnvironmentV3Response; status: ResponseStatus }
type ExtendedAttributesCreateBodyRequest = { extended_attributes: { [x: string]: unknown } }
type ExtendedAttributes = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  project_id: bigint
  extended_attributes: { [x: string]: unknown }
  state?: number | undefined
}
type ExtendedAttributesResponse = {
  status?: Status | undefined
  data: ExtendedAttributes
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type ExtendedAttributesUpdateBodyRequest = {
  extended_attributes: { [x: string]: unknown }
  state?: number | undefined
}
type LineageIntegration = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  project_id: bigint
  name: string
}
type ListLineageIntegrationResponse = {
  status?: Status | undefined
  data: LineageIntegration[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type PostLineageIntegrationRequest = {
  name: {}
  account_id: bigint
  project_id?: bigint | undefined
  config?: {} | undefined
}
type DetailLineageIntegrationResponse = {
  status?: Status | undefined
  data: LineageIntegration
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type PatchLineageIntegrationRequest = {
  name?: {} | undefined
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  config?: {} | undefined
}
type WatchSelectionType = 'folder' | 'dashboard'
type WatchSelectionItem = {
  identifier: string
  name: string
  type: WatchSelectionType
  watching?: boolean | undefined
}
type LineageIntegrationCollection = { collections: WatchSelectionItem[] }
type ListLineageIntegrationCollectionResponse = {
  status?: Status | undefined
  data: LineageIntegrationCollection[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type PostLineageIntegrationWatchSelectionRequest = {
  to_add?: WatchSelectionItem[] | undefined
  to_remove?: string[] | undefined
}
type GetLineageIntegrationWatchSelectionResponse = { added: number; removed: number }
type CreateManagedRepositoryRequestRequest = { name: string }
type RepositoryV3Response = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  full_name?: string | undefined
  remote_backend?: {} | undefined
  git_clone_strategy?: {} | undefined
  deploy_key_id?: bigint | undefined
  repository_credentials_id?: bigint | undefined
  github_installation_id?: bigint | undefined
  github_webhook_id?: bigint | undefined
  state?: number | undefined
  private_link_endpoint_id?: string | undefined
  git_provider_id?: bigint | undefined
  github_repo: string
  name: string
  web_url: string
  created_at: string
  updated_at: string
  deploy_key: { account_id: bigint; public_key: string; state?: number | undefined }
  git_provider: { [x: string]: unknown }
  gitlab: {
    account_id: bigint
    repository_id?: bigint | undefined
    gitlab_project_id: number
    state: number
    project_access_token_id?: number | undefined
    expires_at?: string | undefined
  }
  is_private_link_enabled: boolean
}
type RepositoryV3Enveloped = { data: RepositoryV3Response; status: ResponseStatus }
type ProfileEnvironmentBinding = { id: bigint; name: string; type: string; deployment_type: string }
type ProfileList = {
  id: bigint
  account_id: bigint
  project_id: bigint
  key: string
  connection_id?: bigint | undefined
  credentials_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
  primary_bindings: ProfileEnvironmentBinding[]
  catalog_bindings?: ProfileEnvironmentBinding[] | undefined
}
type ProfileListResponse = {
  status?: Status | undefined
  data: ProfileList
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type ProfileCreateBodyRequest = {
  account_id: bigint
  project_id: bigint
  connection_id: bigint
  key: string
  credentials_id: bigint
  extended_attributes_id?: bigint | undefined
}
type ProfileDetail = {
  id: bigint
  account_id: bigint
  project_id: bigint
  key: string
  connection_id?: bigint | undefined
  credentials_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
  primary_bindings: ProfileEnvironmentBinding[]
  catalog_bindings?: ProfileEnvironmentBinding[] | undefined
}
type ProfileDetailResponse = {
  status?: Status | undefined
  data: ProfileDetail
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type ProfileUpdateBodyRequest = {
  pk: bigint
  account_id: bigint
  project_id: bigint
  key?: string | undefined
  connection_id?: bigint | undefined
  credentials_id?: bigint | undefined
  extended_attributes_id?: bigint | undefined
}
type RepositoryV3ListEnveloped = {
  data: RepositoryV3Response[]
  extra: Extra
  status: ResponseStatus
}
type RepositoryV3Request = {
  account_id: bigint
  project_id?: bigint | undefined
  full_name?: string | undefined
  remote_backend?: {} | undefined
  git_clone_strategy?: {} | undefined
  deploy_key_id?: bigint | undefined
  repository_credentials_id?: bigint | undefined
  github_installation_id?: bigint | undefined
  github_webhook_id?: bigint | undefined
  state: number
  private_link_endpoint_id?: string | undefined
  git_provider_id?: bigint | undefined
}
type SCIMConfig = {
  enabled: boolean
  manual_updates_allowed: boolean
  scim_controlled_license_type: boolean
}
type DetailSCIMConfigResponse = {
  status?: Status | undefined
  data: SCIMConfig
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type CreateSCIMConfigurationRequestRequest = {
  enabled: boolean
  manual_updates_allowed: boolean
  scim_controlled_license_type?: boolean | undefined
}
type SCIMToken = { id: bigint; name: string; created_at: string; last_used?: string | undefined }
type ListSCIMTokenResponse = {
  status?: Status | undefined
  data: SCIMToken[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type CreateSCIMTokenRequestRequest = { name: string }
type CreateSCIMToken = {
  id: bigint
  name: string
  created_at: string
  last_used?: string | undefined
  token_string: string
}
type DetailCreateSCIMTokenResponse = {
  status?: Status | undefined
  data: CreateSCIMToken
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type DetailSCIMTokenResponse = {
  status?: Status | undefined
  data: SCIMToken
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type GroupMemberComponent = { value: string; display: string }
type GroupSCIM = {
  id: string
  externalId?: string | undefined
  displayName: string
  members?: GroupMemberComponent[] | undefined
  meta: {
    resourceType: string
    location: string
    created?: string | undefined
    lastModified?: string | undefined
  }
  schemas?: { [x: string]: unknown }[] | undefined
}
type ListGroupSCIMResponse = {
  status?: Status | undefined
  data: GroupSCIM[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type CreateOrReplaceGroupSCIMRequestRequest = {
  schemas: string[]
  externalId?: string | undefined
  displayName: string
  members?: GroupMemberComponent[] | undefined
}
type DetailGroupSCIMResponse = {
  status?: Status | undefined
  data: GroupSCIM
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type PatchOperation = {
  op: {}
  path?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type PatchGroupSCIMRequestRequest = {
  Operations: PatchOperation[]
  schemas?: { [x: string]: unknown }[] | undefined
}
type SCIMList = {
  schemas?: string[] | undefined
  totalResults: number
  startIndex: number
  itemsPerPage: number
  Resources: { [x: string]: unknown }[]
}
type DetailSCIMListResponse = {
  status?: Status | undefined
  data: SCIMList
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type SCIMSchemaExtension = { schema: string; required: boolean }
type SCIMResourceType = {
  schemas?: string[] | undefined
  id: string
  name: string
  endpoint: string
  description: string
  schema: string
  schemaExtensions?: SCIMSchemaExtension[] | undefined
  meta: {
    resourceType: string
    location: string
    created?: string | undefined
    lastModified?: string | undefined
  }
}
type DetailSCIMResourceTypeResponse = {
  status?: Status | undefined
  data: SCIMResourceType
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type UserEmailComponent = {
  value?: string | undefined
  primary?: boolean | undefined
  type?: string | undefined
}
type UserGroupComponent = {
  id: string
  externalId?: string | undefined
  displayName: string
  members?: GroupMemberComponent[] | undefined
  meta: {
    resourceType: string
    location: string
    created?: string | undefined
    lastModified?: string | undefined
  }
  schemas?: { [x: string]: unknown }[] | undefined
  value: string
  display: string
}
type UserSCIM = {
  id: string
  externalId?: string | undefined
  userName: string
  active: boolean
  schemas?: string[] | undefined
  name: { givenName?: string | undefined; familyName?: string | undefined }
  emails: UserEmailComponent[]
  groups?: UserGroupComponent[] | undefined
  meta: {
    resourceType: string
    location: string
    created?: string | undefined
    lastModified?: string | undefined
  }
  'urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User'?: { licenseType: {} } | undefined
}
type ListUserSCIMResponse = {
  status?: Status | undefined
  data: UserSCIM[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type CreateUserSCIMRequestRequest = {
  schemas: string[]
  externalId?: string | undefined
  userName: string
  active: boolean
  name: { givenName?: string | undefined; familyName?: string | undefined }
  emails: UserEmailComponent[]
  'urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User'?: { licenseType: {} } | undefined
}
type DetailUserSCIMResponse = {
  status?: Status | undefined
  data: UserSCIM
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type ReplaceUserSCIMRequestRequest = {
  schemas: string[]
  externalId?: string | undefined
  userName: string
  active: boolean
  name: { givenName?: string | undefined; familyName?: string | undefined }
  emails: UserEmailComponent[]
  'urn:ietf:params:scim:schemas:extension:dbtLabs:2.0:User'?: { licenseType: {} } | undefined
}
type UserValueComponent = { active: boolean }
type UserOperationComponent = {
  op: {}
  value: UserValueComponent | string
  path?: string | undefined
}
type UpdateUserSCIMRequestRequest = { schemas: string[]; Operations: UserOperationComponent[] }
type ServiceTokenLite = { id?: bigint | undefined; account_id: bigint; uid: string; name: string }
type SemanticLayerCredentialsResponse = {
  id: bigint
  account_id?: bigint | undefined
  project_id?: bigint | undefined
  adapter_version?: {} | undefined
  schema_type?: {} | undefined
  name?: string | undefined
  values?: { [x: string]: unknown } | undefined
  state?: number | undefined
  created_at: string
  updated_at: string
  service_tokens: ServiceTokenLite[]
}
type SemanticLayerCredentialsListEnveloped = {
  data: SemanticLayerCredentialsResponse[]
  extra: Extra
  status: ResponseStatus
}
type PredefinedPermissionSet =
  | 'account_admin'
  | 'account_viewer'
  | 'admin'
  | 'analyst'
  | 'analyst_read'
  | 'billing_admin'
  | 'cost_insights_admin'
  | 'cost_insights_viewer'
  | 'cost_management_admin'
  | 'cost_management_viewer'
  | 'database_admin'
  | 'developer'
  | 'fusion_admin'
  | 'git_admin'
  | 'job_admin'
  | 'job_creator'
  | 'job_runner'
  | 'job_viewer'
  | 'manage_marketplace_apps'
  | 'member'
  | 'metadata_only'
  | 'notification_manager'
  | 'owner'
  | 'project_creator'
  | 'readonly'
  | 'scim_only'
  | 'security_admin'
  | 'semantic_layer_only'
  | 'stakeholder'
  | 'team_admin'
  | 'webhooks_only'
type ServiceTokenPermissionGrant = {
  permission_set: PredefinedPermissionSet
  project_id?: bigint | undefined
  writable_environment_categories?: string[] | undefined
}
type ServiceToken = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  uid: string
  name: string
  state: number
  permission_grants?: ServiceTokenPermissionGrant[] | undefined
  last_used?: string | undefined
  expires_at?: string | undefined
  semantic_layer_credentials?: { [x: string]: unknown }[] | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
}
type ListServiceTokenResponse = {
  status?: Status | undefined
  data: ServiceToken[]
  extra: V3ResponseExtraData
  error_code?: number | undefined
}
type CreateServiceTokenRequestRequest = {
  name: string
  permission_grants?: ServiceTokenPermissionGrant[] | undefined
  expires_at?: string | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
}
type ServiceTokenType = 1 | 2 | 3 | 4
type CreateServiceToken = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  uid: string
  name: string
  state: number
  permission_grants?: ServiceTokenPermissionGrant[] | undefined
  last_used?: string | undefined
  expires_at?: string | undefined
  semantic_layer_credentials?: { [x: string]: unknown }[] | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
  token?: string | undefined
  token_string: string
  last_identify?: string | undefined
  user_id?: bigint | undefined
  user?: { [x: string]: unknown } | undefined
  type?: ServiceTokenType | undefined
  service_token_permissions?: { [x: string]: unknown }[] | undefined
}
type DetailCreateServiceTokenResponse = {
  status?: Status | undefined
  data: CreateServiceToken
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type DetailServiceTokenResponse = {
  status?: Status | undefined
  data: ServiceToken
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type UpdateServiceTokenRequestRequest = { name: string }
type ServiceTokenPermissionResponse = {
  id: bigint
  account_id?: bigint | undefined
  service_token_id?: bigint | undefined
  project_id?: bigint | undefined
  all_projects?: boolean | undefined
  permission_set?: PermissionSetEnum | undefined
  state?: number | undefined
  writable_environment_categories?: string[] | undefined
  created_at: string
  updated_at: string
}
type ServiceTokenPermissionListEnveloped = {
  data: ServiceTokenPermissionResponse[]
  extra: Extra
  status: ResponseStatus
}
type UserLicense = { license_type: string; state: number }
type UserResponse = {
  id: bigint
  first_name?: string | undefined
  last_name?: string | undefined
  email: string
  apitoken_last_used: string
  azure_active_directory_connected: boolean
  azure_active_directory_token_retrieval_failure: boolean
  azure_active_directory_username: string
  email_connected: boolean
  email_verified: boolean
  enterprise_connected: boolean
  enterprise_authentication_method: string
  github_connected: boolean
  github_username: string
  gitlab_connected: boolean
  gitlab_username: string
  is_active: boolean
  is_staff: boolean
  last_login: string
  show_existing_user_email_verification: boolean
  sso_only_user: boolean
  github_token_retrieval_failure: boolean
  gitlab_token_retrieval_failure: boolean
  created_at: string
  permissions: UserLicense[]
  auth_provider_infos: { [x: string]: unknown }
  licenses: { [x: string]: unknown }
}
type UserListEnveloped = { data: UserResponse[]; extra: Extra; status: ResponseStatus }
type LicenseType = 'developer' | 'read_only' | 'analyst' | 'it'
type AccountUser = {
  id: bigint
  created_at: string
  updated_at: string
  email: string
  first_name: string
  last_name: string
  fullname: string
  email_verified: boolean
  license: { id: bigint; license_type: LicenseType }
  is_active?: boolean | undefined
  is_staff?: boolean | undefined
  scim_managed?: boolean | undefined
}
type DetailAccountUserResponse = {
  status?: Status | undefined
  data: AccountUser
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type User = { first_name: string; last_name: string }
type Type34eEnum = 1 | 2 | 3 | 4
type ServiceTokenPermission = {
  account_id: bigint
  service_token_id: bigint
  project_id?: bigint | undefined
  all_projects: boolean
  permission_set: PermissionSetEnum
  state: number
  writable_environment_categories: string[]
}
type ServiceTokenResponse = {
  id: bigint
  account_id?: bigint | undefined
  uid?: string | undefined
  name?: string | undefined
  token?: string | undefined
  state?: number | undefined
  token_string: string
  last_used: string
  last_identify: string
  user_id?: bigint | undefined
  user?: User | undefined
  type?: Type34eEnum | undefined
  expires_at?: string | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
  created_at: string
  updated_at: string
  service_token_permissions: ServiceTokenPermission[]
}
type ServiceTokenListEnveloped = {
  data: ServiceTokenResponse[]
  extra: Extra
  status: ResponseStatus
}
type CreateAccountScopedPATBodyRequest = {
  name: string
  type?: {} | undefined
  expires_at?: string | undefined
}
type CreateAccountScopedPAT = {
  id: bigint
  created_at: string
  updated_at: string
  account_id: bigint
  user_id?: bigint | undefined
  type?: ServiceTokenType | undefined
  uid: string
  name: string
  state: number
  token?: string | undefined
  token_string: string
  expires_at?: string | undefined
  last_used?: string | undefined
  last_identify?: string | undefined
  user?: { [x: string]: unknown } | undefined
  service_token_permissions?: { [x: string]: unknown }[] | undefined
  semantic_layer_credentials?: { [x: string]: unknown }[] | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
}
type DetailCreateAccountScopedPATResponse = {
  status?: Status | undefined
  data: CreateAccountScopedPAT
  extra?: { [x: string]: unknown } | undefined
  error_code?: number | undefined
}
type AccountScopedPATResponse = {
  id: bigint
  account_id?: bigint | undefined
  uid?: string | undefined
  name?: string | undefined
  token?: string | undefined
  state?: number | undefined
  token_string: string
  last_used: string
  last_identify: string
  user_id?: bigint | undefined
  user?: User | undefined
  type?: Type34eEnum | undefined
  expires_at?: string | undefined
  metadata_only?: boolean | undefined
  webhooks_only?: boolean | undefined
  created_at: string
  updated_at: string
  service_token_permissions: ServiceTokenPermission[]
}
type AccountScopedPATResponseEnveloped = { data: AccountScopedPATResponse; status: ResponseStatus }
type AccountScopedPATRotateRequestRequest = { expires_at?: string | undefined }
type Event = {
  id: string
  subscription_id: string
  account_identifier: string
  job_id: string
  trigger_event_type: string
  payload: string
  http_status_code: string
  account_id: string
}
type WebhookResponseStatus = { code: number }
type EventResponseEnvelope = { data: Event; status: WebhookResponseStatus }
type NotFoundStatus = {
  code?: number | undefined
  is_success: boolean
  user_message: string
  developer_message: string
}
type NotFound = {
  data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  status: NotFoundStatus
}
type Receipt = {
  id: string
  event_id: string
  subscription_id: string
  dispatched_at: string
  http_status_code: string
  error_info: string
  request_body: string
  request_headers: string
  response_body: string
}
type ListWebhooksReceiptsResponseEnvelope = { data: Receipt[]; status: WebhookResponseStatus }
type GetWebhooksReceiptResponseEnvelope = { data: Receipt; status: WebhookResponseStatus }
type Subscription = {
  id?: string | undefined
  name: string
  description?: string | undefined
  event_types: { [x: string]: unknown }[]
  job_ids?: bigint[] | undefined
  client_url: string
  active: boolean
  http_status_code?: string | undefined
  dispatched_at?: string | undefined
  deactivate_reason?: string | undefined
  account_id?: bigint | undefined
  account_identifier?: string | undefined
}
type SubscriptionResponseEnvelope = { data: Subscription; status: WebhookResponseStatus }
type SubscriptionRequest = {
  id?: string | undefined
  name: string
  description?: string | undefined
  event_types: { [x: string]: unknown }[]
  job_ids?: bigint[] | undefined
  client_url: string
  active: boolean
  http_status_code?: string | undefined
  dispatched_at?: string | undefined
  deactivate_reason?: string | undefined
  account_id?: bigint | undefined
  account_identifier?: string | undefined
}
type UpdateSubscriptionResponseEnvelope = { data: Subscription; status: WebhookResponseStatus }
type DeleteSubscriptionResponseData = { id: string }
type DeleteSubscriptionResponseStatus = { code: number; is_success: boolean }
type DeleteSubscriptionResponseEnvelope = {
  data: DeleteSubscriptionResponseData
  status: DeleteSubscriptionResponseStatus
}
type Pagination = { total_count: number; count: number }
type Filters = { offset: number; limit: number }
type PaginationExtra = { pagination: Pagination; filters: Filters }
type PaginatedWebhooksEvents = {
  data: Event[]
  status: WebhookResponseStatus
  extra: PaginationExtra
}
type TestSubscriptionResponseData = { event_id: string }
type TestSubscriptionResponseEnvelope = {
  data: TestSubscriptionResponseData
  status: WebhookResponseStatus
}
type PaginatedWebhooksSubscriptions = {
  data: Subscription[]
  status: WebhookResponseStatus
  extra: PaginationExtra
}
type CreateSubscriptionResponseEnvelope = { data: Subscription; status: WebhookResponseStatus }
type FieldGroup = { name: string; members: string[] }
type Adapter = {
  metadata: {
    title: string
    docs_link: string
    image_link: string
    private_link?:
      | { endpoint_type: {}; hostname_field?: string | undefined; strip_suffix: string }
      | undefined
  }
  connection?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
  credential?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
  platform_metadata_credentials?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
  analytics_credentials?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
  semantic_layer_credentials?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
  cost_insights_config?:
    | { field_order?: string[] | undefined; field_groups?: FieldGroup[] | undefined }
    | undefined
}
type AdapterSchemaResponse = { adapter?: Adapter | undefined }
type AdapterSchemaResponseEnveloped = { data: AdapterSchemaResponse; status: ResponseStatus }
type UserCredentialsResponse = {
  id: bigint
  account_id?: bigint | undefined
  user_id?: bigint | undefined
  project_id?: bigint | undefined
  credentials_id?: bigint | undefined
  state?: number | undefined
  created_at: string
  updated_at: string
  credentials: {
    account_id: bigint
    project_id?: bigint | undefined
    type: ConnectionTypeEnum
    state: number
    threads: number
    username: string
    default_schema: string
    target_name: string
    adapter_version?: {} | undefined
  }
  project: {
    name: string
    account_id: bigint
    description?: string | undefined
    connection_id?: bigint | undefined
    repository_id?: bigint | undefined
    semantic_layer_config_id?: bigint | undefined
    state: number
    dbt_project_subdirectory?: string | undefined
    docs_job_id?: bigint | undefined
    freshness_job_id?: bigint | undefined
    type: {}
  }
}
type UserCredentialsListEnveloped = {
  data: UserCredentialsResponse[]
  extra: Extra
  status: ResponseStatus
}
type UserCredentialsRequest = {
  account_id: bigint
  user_id: bigint
  project_id: bigint
  credentials_id: bigint
  state: number
}
type UserCredentialsEnveloped = { data: UserCredentialsResponse; status: ResponseStatus }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v3/accounts/': {
      $get: {
        input: { query: { include_related?: string | undefined } }
        output: AccountListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/assign-groups/': {
      $post: {
        input: { param: { account_id: bigint } } & { json: AssignGroupsRequestRequest } & {
          form: AssignGroupsRequestRequest
        }
        output: GroupListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/audit-logs/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: PublicAuditLogListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/audit-logs/download/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/audit-logs/export/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: AuditLogBulkExportStatusResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } }
        output: AuditLogStartBulkExportResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/audit-logs/export/:job_identifier/download/': {
      $get: {
        input: { param: { account_id: bigint; job_identifier: string } } & {
          query: { include_related?: string | undefined }
        }
        output: AuditLogBulkExportDownloadResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/connections/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            adapter_version?:
              | 'apache_spark_v0'
              | 'athena_v0'
              | 'bigquery_v0'
              | 'bigquery_v1'
              | 'clickhouse_v0'
              | 'databricks_spark_v0'
              | 'databricks_v0'
              | 'fabric_v0'
              | 'postgres_v0'
              | 'redshift_v0'
              | 'salesforce_v0'
              | 'snowflake_v0'
              | 'synapse_v0'
              | 'teradata_v0'
              | 'trino_v0'
              | undefined
            has_analytics_credentials?: boolean | undefined
            has_catalog_ingestion_enabled?: boolean | undefined
            has_cost_insights_enabled?: boolean | undefined
            has_cost_management_enabled?: boolean | undefined
            has_platform_metadata_credentials?: boolean | undefined
            include_related?: string | undefined
            limit?: number | undefined
            name__icontains?: string | undefined
            offset?: number | undefined
            private_endpoint_id?: string | undefined
          }
        }
        output: AccountConnectionListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        } & { json: AccountConnectionCreateBodyRequest } & {
          form: AccountConnectionCreateBodyRequest
        }
        output: AccountConnectionDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/connections/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: AccountConnectionDetailResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; id: bigint } } & {
          json: AccountConnectionUpdateBodyRequest
        } & { form: AccountConnectionUpdateBodyRequest }
        output: AccountConnectionDetailResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/environments/:environment_id/sao-cache/': {
      $delete: {
        input: { param: { account_id: bigint; environment_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/favorite-assets/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            environment_id?: bigint | undefined
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            project_id?: bigint | undefined
            user_id?: bigint | undefined
          }
        }
        output: DetailFavoriteAssetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/group-permissions/:group_id/': {
      $post: {
        input: { param: { account_id: bigint; group_id: bigint } } & {
          json: GroupPermissionListRequest
        } & { form: GroupPermissionListRequest }
        output: GroupPermissionListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/groups/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            name?: string | undefined
            name__icontains?: string | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            pk__in?: bigint[] | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: GroupListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: GroupRequest } & { form: GroupRequest }
        output: GroupEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/groups/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: GroupEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint } } & { json: GroupRequest } & {
          form: GroupRequest
        }
        output: GroupEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/invites/': {
      $post: {
        input: { param: { account_id: bigint } } & { json: InviteUsersRequestRequest } & {
          form: InviteUsersRequestRequest
        }
        output: InviteUsersResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/ip-restrictions/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: IPRestrictionRuleListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: CreateIPRestrictionBodyRequest } & {
          form: CreateIPRestrictionBodyRequest
        }
        output: IPRestrictionRuleEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/ip-restrictions-set/': {
      $post: {
        input: { param: { account_id: bigint } } & { json: EnableIPRestrictionsBodyRequest } & {
          form: EnableIPRestrictionsBodyRequest
        }
        output: IPRestrictionRuleSetEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: IPRestrictionSetValidate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/:rule_id': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; rule_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: IPRestrictionSetValidate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/ip-restrictions/:id': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: IPRestrictionRuleEnveloped
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: bigint; id: bigint } } & {
          json: UpdateIPRestrictionBodyRequest
        } & { form: UpdateIPRestrictionBodyRequest }
        output: IPRestrictionRule
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/license-maps/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: LicenseMapListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: LicenseMapRequest } & {
          form: LicenseMapRequest
        }
        output: LicenseMapEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/license-maps/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: LicenseMapEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint } } & { json: LicenseMapRequest } & {
          form: LicenseMapRequest
        }
        output: LicenseMapEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/mantle-migration/status/': {
      $get: {
        input: { param: { account_id: bigint } } & { query: { project_ids: bigint[] } }
        output: MantleEligibilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/disable/': {
      $post: {
        input: { param: { account_id: bigint } } & {
          json: DisableEnvironmentOverridesBodyRequest
        } & { form: DisableEnvironmentOverridesBodyRequest }
        output: EnvironmentOverridesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/enable/': {
      $post: {
        input: { param: { account_id: bigint } } & {
          json: EnableEnvironmentOverridesBodyRequest
        } & { form: EnableEnvironmentOverridesBodyRequest }
        output: EnvironmentOverridesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/migration-inventory/environments/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_run_summary?: boolean | undefined
            include_summary?: boolean | undefined
            limit?: number | undefined
            offset?: number | undefined
            project_id?: bigint | undefined
            view?: 'all' | 'enabled' | undefined
          }
        }
        output: InventoryEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/migration-inventory/environments/:environment_id/job-groups/': {
      $get: {
        input: { param: { account_id: bigint; environment_id: bigint } } & {
          query: {
            compliant_limit?: number | undefined
            compliant_offset?: number | undefined
            include_related?: string | undefined
            legacy_limit?: number | undefined
            legacy_offset?: number | undefined
          }
        }
        output: InventoryJobGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/migration-inventory/summary/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            excluded_environment_ids?: bigint[] | undefined
            include_action_counts?: boolean | undefined
            project_id?: bigint | undefined
            view?: 'all' | 'enabled' | undefined
          }
        }
        output: InventorySummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/oauth-configurations/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            client_id?: string | undefined
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
            type?: string | undefined
          }
        }
        output: OAuthConfigurationListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: OAuthConfigurationRequest } & {
          form: OAuthConfigurationRequest
        }
        output: OAuthConfigurationEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/oauth-configurations/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: OAuthConfigurationEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint } } & {
          json: OAuthConfigurationRequest
        } & { form: OAuthConfigurationRequest }
        output: OAuthConfigurationEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/private-endpoints/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            search?: string | undefined
            type?: string | undefined
          }
        }
        output: PrivateEndpointListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/': {
      $get: {
        input: { param: { account_id: bigint; pl_endpoint_ksuid: string } } & {
          query: { include_related?: string | undefined }
        }
        output: PrivateEndpointDetailResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; pl_endpoint_ksuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; pl_endpoint_ksuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            name__icontains?: string | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            pk__gt?: bigint | undefined
            pk__in?: bigint[] | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: ProjectListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: ProjectRequest } & {
          form: ProjectRequest
        }
        output: ProjectEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ProjectEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint } } & { json: ProjectRequest } & {
          form: ProjectRequest
        }
        output: ProjectEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/adapters/': {
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: DbtAdapterRequest
        } & { form: DbtAdapterRequest }
        output: DbtAdapterEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DbtAdapterEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: DbtAdapterRequest
        } & { form: DbtAdapterRequest }
        output: DbtAdapterEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/connections/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: {
            adapter_version?:
              | 'apache_spark_v0'
              | 'databricks_spark_v0'
              | 'databricks_v0'
              | 'trino_v0'
              | 'snowflake_v0'
              | 'bigquery_v0'
              | 'bigquery_v1'
              | 'postgres_v0'
              | 'redshift_v0'
              | 'salesforce_v0'
              | 'synapse_v0'
              | 'fabric_v0'
              | 'athena_v0'
              | 'teradata_v0'
              | 'clickhouse_v0'
              | undefined
            has_catalog_ingestion_enabled?: boolean | undefined
            has_cost_insights_enabled?: boolean | undefined
            has_cost_management_enabled?: boolean | undefined
            has_platform_metadata_credentials?: boolean | undefined
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: BaseConnectionV3ListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: BaseConnectionV3Request
        } & { form: BaseConnectionV3Request }
        output: BaseConnectionV3Enveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: BaseConnectionV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: BaseConnectionV3Request
        } & { form: BaseConnectionV3Request }
        output: BaseConnectionV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: CredentialsResponseListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: CredentialsRequestRequest
        } & { form: CredentialsRequestRequest }
        output: CredentialsResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: CredentialsResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: CredentialsRequestRequest
        } & { form: CredentialsRequestRequest }
        output: CredentialsResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: CredentialsRequestRequest
        } & { form: CredentialsRequestRequest }
        output: CredentialsResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/': {
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: CustomEnvironmentVariableRequest
        } & { form: CustomEnvironmentVariableRequest }
        output: CustomEnvironmentVariableEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/:id/': {
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: CustomEnvironmentVariableRequest
        } & { form: CustomEnvironmentVariableRequest }
        output: CustomEnvironmentVariableEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/': {
      $post:
        | {
            input: { param: { account_id: bigint; project_id: bigint } } & {
              json: CustomEnvironmentVariableBulkRequestRequest
            } & { form: CustomEnvironmentVariableBulkRequestRequest }
            output: CustomEnvironmentVariableBulkResponseListEnveloped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; project_id: bigint } } & {
              json: CustomEnvironmentVariableBulkRequestRequest
            } & { form: CustomEnvironmentVariableBulkRequestRequest }
            output: CustomEnvironmentVariableBulkResponseFailListEnveloped
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { account_id: bigint; project_id: bigint } } & {
              json: { env_vars: { name: string; new_name?: string | undefined } }
            }
            output: BulkPutSuccessResponseEnveloped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; project_id: bigint } } & {
              json: { env_vars: { name: string; new_name?: string | undefined } }
            }
            output: BulkPutErrorResponseEnveloped
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { param: { account_id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/environment/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: EnvVarEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/job/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined; job_definition_id: bigint }
        }
        output: EnvVarJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/user/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined; user_id: bigint }
        }
        output: EnvVarUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environments/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: {
            credentials_id?: bigint | undefined
            dbt_version?: string | undefined
            dbt_version__in?: string[] | undefined
            deployment_type?: 'production' | 'staging' | undefined
            deployment_type__in?: ('production' | 'staging')[] | undefined
            id__gt?: bigint | undefined
            include_related?: string | undefined
            limit?: number | undefined
            name?: string | undefined
            name__icontains?: string | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            pk__in?: bigint[] | undefined
            project_id__in?: bigint[] | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
            type?: string | undefined
          }
        }
        output: EnvironmentV3ListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: EnvironmentV3Request
        } & { form: EnvironmentV3Request }
        output: EnvironmentV3Enveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: EnvironmentV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: EnvironmentV3Request
        } & { form: EnvironmentV3Request }
        output: EnvironmentV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/': {
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: ExtendedAttributesCreateBodyRequest
        } & { form: ExtendedAttributesCreateBodyRequest }
        output: ExtendedAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ExtendedAttributesResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: ExtendedAttributesUpdateBodyRequest
        } & { form: ExtendedAttributesUpdateBodyRequest }
        output: ExtendedAttributesResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ListLineageIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: PostLineageIntegrationRequest
        } & { form: PostLineageIntegrationRequest }
        output: DetailLineageIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailLineageIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: PatchLineageIntegrationRequest
        } & { form: PatchLineageIntegrationRequest }
        output: DetailLineageIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { collection_id?: string | undefined; include_related?: string | undefined }
        }
        output: ListLineageIntegrationCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/:collection_id/': {
      $get: {
        input: {
          param: { account_id: bigint; collection_id: string; id: bigint; project_id: bigint }
        } & { query: { include_related?: string | undefined } }
        output: ListLineageIntegrationCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/selections': {
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: PostLineageIntegrationWatchSelectionRequest
        } & { form: PostLineageIntegrationWatchSelectionRequest }
        output: GetLineageIntegrationWatchSelectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/': {
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: CreateManagedRepositoryRequestRequest
        } & { form: CreateManagedRepositoryRequestRequest }
        output: RepositoryV3Enveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/:repository_id/download/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint; repository_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: {
            connection_id?: bigint | undefined
            include_related?: string | undefined
            key?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            profile_ids?: { [x: string]: unknown } | undefined
          }
        }
        output: ProfileListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        } & { json: ProfileCreateBodyRequest } & { form: ProfileCreateBodyRequest }
        output: ProfileDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ProfileDetailResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: ProfileUpdateBodyRequest
        } & { form: ProfileUpdateBodyRequest }
        output: ProfileDetailResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/': {
      $get: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            project_id__in?: bigint[] | undefined
            remote_url?: string | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: RepositoryV3ListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; project_id: bigint } } & {
          json: RepositoryV3Request
        } & { form: RepositoryV3Request }
        output: RepositoryV3Enveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: RepositoryV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } } & {
          json: RepositoryV3Request
        } & { form: RepositoryV3Request }
        output: RepositoryV3Enveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; project_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim-config/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMConfigResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & {
          json: CreateSCIMConfigurationRequestRequest
        } & { form: CreateSCIMConfigurationRequestRequest }
        output: DetailSCIMConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim-config/tokens/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ListSCIMTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: CreateSCIMTokenRequestRequest } & {
          form: CreateSCIMTokenRequestRequest
        }
        output: DetailCreateSCIMTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim-config/tokens/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Groups': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ListGroupSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: CreateOrReplaceGroupSCIMRequestRequest }
        output: DetailGroupSCIMResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id': {
      $get: {
        input: { param: { account_id: bigint; group_id: string } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailGroupSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: bigint; group_id: string } } & {
          json: CreateOrReplaceGroupSCIMRequestRequest
        }
        output: DetailGroupSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; group_id: string } } & {
          json: PatchGroupSCIMRequestRequest
        }
        output: DetailGroupSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; group_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/ResourceTypes': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/ResourceTypes/:resource_type': {
      $get: {
        input: { param: { account_id: bigint; resource_type: string } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMResourceTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Schemas': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Schemas/:schema_uri': {
      $get: {
        input: { param: { account_id: bigint; schema_uri: string } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailSCIMResourceTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/ServiceProviderConfig': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Users': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ListUserSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: CreateUserSCIMRequestRequest }
        output: DetailUserSCIMResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/scim/v2/Users/:user_id': {
      $get: {
        input: { param: { account_id: bigint; user_id: string } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailUserSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: bigint; user_id: string } } & {
          json: ReplaceUserSCIMRequestRequest
        }
        output: DetailUserSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { account_id: bigint; user_id: string } } & {
          json: UpdateUserSCIMRequestRequest
        }
        output: DetailUserSCIMResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; user_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/semantic-layer-credentials/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            order_by?: string | undefined
            pk?: bigint | undefined
            project_id?: bigint | undefined
            state?: number | 'active' | 'deleted' | 'all' | undefined
          }
        }
        output: SemanticLayerCredentialsListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/service-tokens/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ListServiceTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint } } & { json: CreateServiceTokenRequestRequest } & {
          form: CreateServiceTokenRequestRequest
        }
        output: DetailCreateServiceTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/service-tokens/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailServiceTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: bigint; id: bigint } } & {
          json: UpdateServiceTokenRequestRequest
        } & { form: UpdateServiceTokenRequestRequest }
        output: DetailServiceTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/service-tokens/:service_token_id/permissions/': {
      $get: {
        input: { param: { account_id: bigint; service_token_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ServiceTokenPermissionListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/users/': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            group_id?: bigint | undefined
            include_related?: string | undefined
            license_type?: 'analyst' | 'developer' | 'it' | 'read_only' | undefined
            limit?: number | undefined
            offset?: number | undefined
            omit_permissions?: '0' | '1' | undefined
            order_by?:
              | '-created_at'
              | '-date_joined'
              | '-email'
              | '-email_verified'
              | '-first_name'
              | '-id'
              | '-last_login'
              | '-last_name'
              | '-license_type'
              | '-pk'
              | '-scim_managed'
              | '-updated_at'
              | '-username'
              | 'created_at'
              | 'date_joined'
              | 'email'
              | 'email_verified'
              | 'first_name'
              | 'id'
              | 'last_login'
              | 'last_name'
              | 'license_type'
              | 'pk'
              | 'scim_managed'
              | 'updated_at'
              | 'username'
              | undefined
            pk?: bigint | undefined
            pk__in?: string | undefined
            search?: string | undefined
          }
        }
        output: UserListEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/users/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: DetailAccountUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/': {
      $get: {
        input: { param: { account_id: bigint; user_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: ServiceTokenListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; user_id: bigint } } & {
          json: CreateAccountScopedPATBodyRequest
        } & { form: CreateAccountScopedPATBodyRequest }
        output: DetailCreateAccountScopedPATResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/': {
      $get: {
        input: { param: { account_id: bigint; id: bigint; user_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: AccountScopedPATResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: bigint; id: bigint; user_id: bigint } } & {
          json: AccountScopedPATRotateRequestRequest
        } & { form: AccountScopedPATRotateRequestRequest }
        output: DetailCreateAccountScopedPATResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: bigint; id: bigint; user_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/event/:event_id': {
      $get:
        | {
            input: { param: { account_id: bigint; event_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: EventResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; event_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/event/:event_id/receipts': {
      $get:
        | {
            input: { param: { account_id: bigint; event_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: ListWebhooksReceiptsResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; event_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/receipt/:receipt_id': {
      $get:
        | {
            input: { param: { account_id: bigint; receipt_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: GetWebhooksReceiptResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; receipt_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id': {
      $get:
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: SubscriptionResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              json: SubscriptionRequest
            } & { form: SubscriptionRequest }
            output: UpdateSubscriptionResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              json: SubscriptionRequest
            } & { form: SubscriptionRequest }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: bigint; subscription_id: string } }
            output: DeleteSubscriptionResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; subscription_id: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/event/:event_id/receipt': {
      $get:
        | {
            input: { param: { account_id: bigint; event_id: string; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: ListWebhooksReceiptsResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; event_id: string; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/events': {
      $get:
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: PaginatedWebhooksEvents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/test': {
      $get:
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: TestSubscriptionResponseEnvelope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint; subscription_id: string } } & {
              query: { include_related?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/accounts/:account_id/webhooks/subscriptions': {
      $get: {
        input: { param: { account_id: bigint } } & {
          query: {
            include_related?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: PaginatedWebhooksSubscriptions
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { account_id: bigint } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { json: SubscriptionRequest } & { form: SubscriptionRequest }
            output: CreateSubscriptionResponseEnvelope
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: bigint } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { json: SubscriptionRequest } & { form: SubscriptionRequest }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v3/adapter-schema/': {
      $get: {
        input: {
          query: {
            adapter_version:
              | 'apache_spark_v0'
              | 'athena_v0'
              | 'bigquery_v0'
              | 'bigquery_v1'
              | 'clickhouse_v0'
              | 'databricks_spark_v0'
              | 'databricks_v0'
              | 'fabric_v0'
              | 'postgres_v0'
              | 'redshift_v0'
              | 'salesforce_v0'
              | 'snowflake_v0'
              | 'synapse_v0'
              | 'teradata_v0'
              | 'trino_v0'
            include_related?: string | undefined
          }
        }
        output: AdapterSchemaResponseEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/users/:user_id/credentials/': {
      $get: {
        input: { param: { user_id: bigint } } & { query: { include_related?: string | undefined } }
        output: UserCredentialsListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { json: UserCredentialsRequest } & {
          form: UserCredentialsRequest
        }
        output: UserCredentialsEnveloped
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/users/:user_id/credentials/:id/': {
      $get: {
        input: { param: { id: bigint; user_id: bigint } } & {
          query: { include_related?: string | undefined }
        }
        output: UserCredentialsListEnveloped
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: bigint; user_id: bigint } } & { json: UserCredentialsRequest } & {
          form: UserCredentialsRequest
        }
        output: UserCredentialsEnveloped
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: bigint; user_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
