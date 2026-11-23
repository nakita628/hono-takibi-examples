type HealthStatusResponse = {
  status: 'healthy' | 'degraded' | 'unhealthy'
  checked_at: string
  database_healthy: boolean
  workers_alive: bigint
}
type PoolStats = { size: number; idle: number; max_connections: number }
type DatabaseHealth = { healthy: boolean; latency_ms: bigint; pool: PoolStats }
type WorkersHealth = {
  healthy: boolean
  active_count: bigint
  worker_groups: string[]
  min_version: string
  versions: string[]
}
type QueueHealth = { pending_jobs: bigint; running_jobs: bigint }
type ReadinessHealth = { healthy: boolean }
type HealthChecks = {
  database: DatabaseHealth
  workers?: WorkersHealth | undefined
  queue?: QueueHealth | undefined
  readiness: ReadinessHealth
}
type DetailedHealthResponse = {
  status: 'healthy' | 'degraded' | 'unhealthy'
  checked_at: string
  version: string
  checks: HealthChecks
}
type AuditLog = {
  workspace_id: string
  id: number
  timestamp: string
  username: string
  operation:
    | 'jobs.run'
    | 'jobs.run.script'
    | 'jobs.run.preview'
    | 'jobs.run.flow'
    | 'jobs.run.flow_preview'
    | 'jobs.run.script_hub'
    | 'jobs.run.dependencies'
    | 'jobs.run.identity'
    | 'jobs.run.noop'
    | 'jobs.flow_dependencies'
    | 'jobs'
    | 'jobs.cancel'
    | 'jobs.force_cancel'
    | 'jobs.run_now'
    | 'jobs.disapproval'
    | 'jobs.delete'
    | 'account.delete'
    | 'ai.request'
    | 'resources.create'
    | 'resources.update'
    | 'resources.delete'
    | 'resource_types.create'
    | 'resource_types.update'
    | 'resource_types.delete'
    | 'resource_types.sync'
    | 'schedule.create'
    | 'schedule.setenabled'
    | 'schedule.edit'
    | 'schedule.delete'
    | 'scripts.create'
    | 'scripts.update'
    | 'scripts.archive'
    | 'scripts.delete'
    | 'users.create'
    | 'users.delete'
    | 'users.update'
    | 'users.login'
    | 'users.login_failure'
    | 'users.logout'
    | 'users.accept_invite'
    | 'users.decline_invite'
    | 'users.token.create'
    | 'users.token.delete'
    | 'users.add_to_workspace'
    | 'users.add_global'
    | 'users.setpassword'
    | 'users.impersonate'
    | 'users.leave_workspace'
    | 'oauth.login'
    | 'oauth.login_failure'
    | 'oauth.signup'
    | 'variables.create'
    | 'variables.delete'
    | 'variables.update'
    | 'flows.create'
    | 'flows.update'
    | 'flows.delete'
    | 'flows.archive'
    | 'apps.create'
    | 'apps.update'
    | 'apps.delete'
    | 'folder.create'
    | 'folder.update'
    | 'folder.delete'
    | 'folder.add_owner'
    | 'folder.remove_owner'
    | 'group.create'
    | 'group.delete'
    | 'group.edit'
    | 'group.adduser'
    | 'group.removeuser'
    | 'igroup.create'
    | 'igroup.delete'
    | 'igroup.adduser'
    | 'igroup.removeuser'
    | 'instance_groups.jit_adduser'
    | 'instance_groups.jit_removeuser'
    | 'variables.decrypt_secret'
    | 'workspaces.read_encryption_key'
    | 'workspaces.edit_command_script'
    | 'workspaces.edit_deploy_to'
    | 'workspaces.edit_auto_invite_domain'
    | 'workspaces.edit_webhook'
    | 'workspaces.edit_copilot_config'
    | 'workspaces.edit_error_handler'
    | 'workspaces.edit_variable_expiration_handler'
    | 'workspaces.create'
    | 'workspaces.update'
    | 'workspaces.archive'
    | 'workspaces.unarchive'
    | 'workspaces.delete'
  action_kind: 'Created' | 'Updated' | 'Delete' | 'Execute'
  resource?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  span?: string | undefined
}
type TrashItem = {
  id: bigint
  workspace_id: string
  item_kind: string
  item_path: string
  deleted_by: string
  deleted_at: string
  expires_at: string
}
type TrashItemWithData = {
  id: bigint
  workspace_id: string
  item_kind: string
  item_path: string
  deleted_by: string
  deleted_at: string
  expires_at: string
  item_data: { [x: string]: unknown }
}
type Login = { email: string; password: string }
type PasswordResetResponse = { message: string }
type User = {
  email: string
  username: string
  is_admin: boolean
  name?: string | undefined
  is_super_admin: boolean
  created_at: string
  operator: boolean
  role?: string | undefined
  disabled: boolean
  groups?: string[] | undefined
  folders: string[]
  folders_read: string[]
  folders_owners: string[]
  added_via?:
    | {
        source: 'domain' | 'instance_group' | 'manual'
        domain?: string | undefined
        group?: string | undefined
      }
    | undefined
  is_service_account?: boolean | undefined
  non_member?: boolean | undefined
}
type EditWorkspaceUser = {
  is_admin?: boolean | undefined
  operator?: boolean | undefined
  role?: string | undefined
  disabled?: boolean | undefined
}
type ExportedUser = {
  email: string
  password_hash?: string | undefined
  super_admin: boolean
  verified: boolean
  name?: string | undefined
  company?: string | undefined
  first_time_user: boolean
  username?: string | undefined
}
type ExternalJwtToken = {
  jwt_hash: bigint
  email: string
  username: string
  is_admin: boolean
  is_operator: boolean
  workspace_id?: string | undefined
  label?: string | undefined
  scopes?: string[] | undefined
  last_used_at: string
}
type GuestUsage = {
  available: boolean
  guest_count: bigint
  window_days: number
  free_allowance: bigint
  metered: boolean
  billable_guests: bigint
  guest_seats: bigint
}
type GuestActivity = { email: string; workspaces: string[]; first_seen: string; last_seen: string }
type GuestList = { usage: GuestUsage; guests: GuestActivity[] }
type OffboardAffectedPaths = {
  scripts?: string[] | undefined
  flows?: string[] | undefined
  apps?: string[] | undefined
  resources?: string[] | undefined
  variables?: string[] | undefined
  schedules?: string[] | undefined
  triggers?: { [x: string]: string[] } | undefined
}
type OffboardTokenInfo = { label: string; scopes: string[]; expiration?: string | undefined }
type OffboardPreview = {
  owned: OffboardAffectedPaths
  executing_on_behalf: OffboardAffectedPaths
  referencing: OffboardAffectedPaths
  tokens: OffboardTokenInfo[]
  http_triggers: number
  email_triggers: number
}
type OffboardRequest = {
  reassign_to: string
  new_on_behalf_of_user?: string | undefined
  delete_user?: boolean | undefined
}
type OffboardSummary = {
  scripts_reassigned: number
  flows_reassigned: number
  apps_reassigned: number
  resources_reassigned: number
  variables_reassigned: number
  schedules_reassigned: number
  triggers_reassigned: number
  drafts_deleted: number
}
type OffboardResponse = { conflicts?: string[] | undefined; summary?: OffboardSummary | undefined }
type WorkspaceOffboardPreview = { workspace_id: string; username: string; preview: OffboardPreview }
type GlobalOffboardPreview = { workspaces: WorkspaceOffboardPreview[] }
type WorkspaceReassignment = { reassign_to: string; new_on_behalf_of_user?: string | undefined }
type GlobalOffboardRequest = {
  reassignments?: { [x: string]: WorkspaceReassignment } | undefined
  delete_user?: boolean | undefined
}
type GithubInstallations = {
  workspace_id?: string | undefined
  installation_id: number
  account_id: string
  repositories: { name: string; url: string }[]
  total_count: number
  per_page: number
  error?: string | undefined
  github_base_url?: (string | null) | undefined
  provisioned_by_admin?: boolean | undefined
}[]
type Workspace = {
  id: string
  name: string
  owner: string
  domain?: string | undefined
  color?: string | undefined
  parent_workspace_id?: (string | null) | undefined
  deleted?: boolean | undefined
  is_dev_workspace?: boolean | undefined
  dev_workspace_label?: (string | null) | undefined
}
type OperatorSettings = {
  runs: boolean
  schedules: boolean
  resources: boolean
  variables: boolean
  assets: boolean
  audit_logs: boolean
  triggers: boolean
  groups: boolean
  folders: boolean
  workers: boolean
  builder_flows?: boolean | undefined
  builder_apps?: boolean | undefined
  manage_schedules?: boolean | undefined
  manage_triggers?: boolean | undefined
} | null
type AuthorLevel = 'none' | 'compose' | 'full'
type RoleVisibility = {
  runs: boolean
  schedules: boolean
  resources: boolean
  variables: boolean
  assets: boolean
  triggers: boolean
  audit_logs: boolean
  groups: boolean
  folders: boolean
  workers: boolean
}
type RoleCapabilities = {
  code: boolean
  flows: AuthorLevel
  apps: AuthorLevel
  manage_schedules: boolean
  manage_triggers: boolean
  run: boolean
  fork: boolean
  visibility: RoleVisibility
}
type UserWorkspaceList = {
  email: string
  workspaces: {
    id: string
    name: string
    username: string
    color: string
    operator_settings?: OperatorSettings | undefined
    parent_workspace_id?: (string | null) | undefined
    is_dev_workspace: boolean
    dev_workspace_label?: (string | null) | undefined
    created_by?: (string | null) | undefined
    disabled: boolean
    is_service_account?: boolean | undefined
    role: string
    capabilities: RoleCapabilities
  }[]
}
type CreateWorkspace = {
  id: string
  name: string
  username?: string | undefined
  color?: string | undefined
  error_handler_fallback_to_instance_alerts?: boolean | undefined
}
type CreateWorkspaceFork = {
  id: string
  name: string
  color?: string | undefined
  forked_datatables?:
    | {
        name: string
        new_dbname: string
        fork_behavior?: 'schema_only' | 'schema_and_data' | undefined
      }[]
    | undefined
  shared_ducklakes?: string[] | undefined
  shared_storages?: string[] | undefined
  is_dev_workspace?: boolean | undefined
  lock_prod_deploy?: boolean | undefined
  lock_prod_forking?: boolean | undefined
  copy_members?: boolean | undefined
  dev_workspace_label?:
    | 'dev'
    | 'qa'
    | 'test'
    | 'uat'
    | 'staging'
    | 'demo'
    | 'sandbox'
    | 'preprod'
    | undefined
}
type ExternalInstancePgSetupStep = {
  name: string
  status: 'ok' | 'warning' | 'error'
  message: string
}
type ExternalInstancePgSetupReport = {
  success: boolean
  finished_at: string
  steps: ExternalInstancePgSetupStep[]
}
type ExternalInstancePgStatus = {
  configured: boolean
  database_count: number
  last_setup?: ExternalInstancePgSetupReport | undefined
}
type LoggedWizardStatus = 'OK' | 'SKIP' | 'FAIL'
type CustomInstanceDbLogs = {
  super_admin?: LoggedWizardStatus | undefined
  database_credentials?: LoggedWizardStatus | undefined
  valid_dbname?: LoggedWizardStatus | undefined
  created_database?: LoggedWizardStatus | undefined
  db_connect?: LoggedWizardStatus | undefined
  grant_permissions?: LoggedWizardStatus | undefined
  replication_user?: LoggedWizardStatus | undefined
  replication_user_error?: string | undefined
  user_connect?: LoggedWizardStatus | undefined
}
type CustomInstanceDbTag = 'ducklake' | 'datatable'
type CustomInstanceDb = {
  logs: CustomInstanceDbLogs
  success: boolean
  error?: (string | null) | undefined
  tag?: CustomInstanceDbTag | undefined
  used_by_workspaces?: string[] | undefined
  workspace_id?: string | undefined
}
type DatatableRoleCluster = 'instance' | 'external_instance'
type InstanceDatatableRole = {
  id: string
  name: string
  enabled: boolean
  cluster: DatatableRoleCluster
  in_use?: boolean | undefined
}
type CriticalAlert = {
  id?: number | undefined
  alert_type?: string | undefined
  message?: string | undefined
  created_at?: string | undefined
  acknowledged?: (boolean | null) | undefined
  workspace_id?: (string | null) | undefined
}
type GlobalSetting = { name: string; value: { [x: string]: unknown } }
type InstanceConfig = {
  global_settings?: { [x: string]: unknown } | undefined
  worker_configs?: { [x: string]: { [x: string]: unknown } } | undefined
}
type JwksResponse = { keys: { [x: string]: unknown }[] }
type VaultSettings = {
  address: string
  mount_path?: string | undefined
  kv_secret_path_prefix?: string | undefined
  jwt_role?: string | undefined
  jwt_mount_path?: string | undefined
  approle_role_id?: string | undefined
  approle_secret_id?: string | undefined
  approle_mount_path?: string | undefined
  namespace?: string | undefined
  token?: string | undefined
  skip_ssl_verify?: boolean | undefined
}
type SecretMigrationFailure = { workspace_id: string; path: string; error: string }
type SecretMigrationReport = {
  total_secrets: bigint
  migrated_count: bigint
  failed_count: bigint
  failures: SecretMigrationFailure[]
}
type AzureKeyVaultSettings = {
  vault_url: string
  tenant_id: string
  client_id: string
  client_secret?: string | undefined
  token?: string | undefined
}
type AwsSecretsManagerSettings = {
  region: string
  access_key_id?: string | undefined
  secret_access_key?: string | undefined
  endpoint_url?: string | undefined
  prefix?: string | undefined
}
type HttpStoreAuth = {
  type: 'None' | 'StaticHeader' | 'BearerTokenFile' | 'ClientCertificate'
  header_name?: string | undefined
  header_value?: string | undefined
  token_path?: string | undefined
  prefix?: string | undefined
  cert_path?: string | undefined
  key_path?: string | undefined
  reload_interval_secs?: number | undefined
}
type HttpStoreSettings = {
  base_url: string
  read: {
    path: string
    query?: { [x: string]: string } | undefined
    value_pointer?: string | undefined
    value_encoding?: 'plain' | 'base64' | undefined
  }
  path_encoding?: 'url' | 'double_dash' | 'raw' | undefined
  extra_headers?: { [x: string]: string } | undefined
  auth: HttpStoreAuth
  ca_bundle_path?: string | undefined
  timeout_secs?: number | undefined
  skip_ssl_verify?: boolean | undefined
}
type GlobalUserInfo = {
  email: string
  login_type: 'password' | 'github' | 'service_account' | 'pending_oauth'
  super_admin: boolean
  devops?: boolean | undefined
  verified: boolean
  name?: string | undefined
  company?: string | undefined
  username?: string | undefined
  operator_only?: boolean | undefined
  is_workspace_admin?: boolean | undefined
  first_time_user: boolean
  role_source: 'manual' | 'instance_group' | 'service_account'
  disabled: boolean
  workspace_id?: string | undefined
}
type WorkspaceInvite = {
  workspace_id: string
  email: string
  is_admin: boolean
  operator: boolean
  role: string
  parent_workspace_id?: (string | null) | undefined
}
type GitlabProject = {
  path_with_namespace: string
  http_url_to_repo: string
  default_branch?: string | undefined
}
type EffectiveRole = {
  name: string
  label: string
  capabilities: RoleCapabilities
  source: 'instance' | 'workspace'
  overridden: boolean
}
type RoleCapabilitiesPatch = {
  code?: boolean | undefined
  flows?: AuthorLevel | undefined
  apps?: AuthorLevel | undefined
  manage_schedules?: boolean | undefined
  manage_triggers?: boolean | undefined
  run?: boolean | undefined
  fork?: boolean | undefined
  visibility?: { [x: string]: boolean } | undefined
}
type RoleOverride = { label?: string | undefined; capabilities?: RoleCapabilitiesPatch | undefined }
type RoleOverrides = { [x: string]: RoleOverride }
type WorkspaceRoles = {
  roles: EffectiveRole[]
  overrides: RoleOverrides
  custom_roles_enabled: boolean
  my_role?: (string | null) | undefined
  my_capabilities: RoleCapabilities
}
type DeployEventKind = 'write' | 'delete' | 'rename_from'
type DeployEventOrigin = 'authored' | 'sync'
type WorkspaceItemDiff = {
  kind:
    | 'script'
    | 'flow'
    | 'app'
    | 'raw_app'
    | 'resource'
    | 'variable'
    | 'resource_type'
    | 'folder'
    | 'schedule'
    | 'http_trigger'
    | 'websocket_trigger'
    | 'kafka_trigger'
    | 'nats_trigger'
    | 'postgres_trigger'
    | 'mqtt_trigger'
    | 'amqp_trigger'
    | 'sqs_trigger'
    | 'gcp_trigger'
    | 'azure_trigger'
    | 'email_trigger'
  path: string
  ahead: number
  behind: number
  has_changes: boolean
  exists_in_source: boolean
  exists_in_fork: boolean
  fork_last_event_kind?: DeployEventKind | undefined
  fork_last_event_origin?: DeployEventOrigin | undefined
  source_last_event_kind?: DeployEventKind | undefined
  source_last_event_origin?: DeployEventOrigin | undefined
}
type CompareSummary = {
  total_diffs: number
  total_ahead: number
  total_behind: number
  scripts_changed: number
  flows_changed: number
  apps_changed: number
  resources_changed: number
  variables_changed: number
  resource_types_changed: number
  folders_changed: number
  schedules_changed: number
  triggers_changed: number
  datatable_migrations_changed: number
  conflicts: number
}
type HiddenItem = { kind: string; path: string }
type HiddenItemsSummary = { total: number; by_kind: { [x: string]: number }; items: HiddenItem[] }
type WorkspaceComparison = {
  all_ahead_items_visible: boolean
  all_behind_items_visible: boolean
  skipped_comparison: boolean
  diffs: WorkspaceItemDiff[]
  summary: CompareSummary
  hidden_ahead: HiddenItemsSummary
  hidden_behind: HiddenItemsSummary
  full_scan_at?: string | undefined
}
type S3PermissionRule = { pattern: string; allow: string }
type LargeFileStorage = {
  type?:
    | 'S3Storage'
    | 'AzureBlobStorage'
    | 'AzureWorkloadIdentity'
    | 'S3AwsOidc'
    | 'GoogleCloudStorage'
    | undefined
  s3_resource_path?: string | undefined
  azure_blob_resource_path?: string | undefined
  gcs_resource_path?: string | undefined
  public_resource?: boolean | undefined
  advanced_permissions?: S3PermissionRule[] | undefined
  secondary_storage?:
    | {
        [x: string]: {
          type?:
            | 'S3Storage'
            | 'AzureBlobStorage'
            | 'AzureWorkloadIdentity'
            | 'S3AwsOidc'
            | 'GoogleCloudStorage'
            | undefined
          s3_resource_path?: string | undefined
          azure_blob_resource_path?: string | undefined
          gcs_resource_path?: string | undefined
          public_resource?: boolean | undefined
        }
      }
    | undefined
}
type DataTableSettings = {
  datatables: {
    [x: string]: {
      database?:
        | {
            resource_type: 'postgresql' | 'instance' | 'external_instance'
            resource_path?: string | undefined
          }
        | undefined
      reference?: { workspace_id: string; datatable: string } | undefined
      governed_by?: { workspace_id: string; datatable: string } | undefined
      migrations_enabled?: boolean | undefined
      forked_from?: { schema?: { [x: string]: unknown } | undefined } | undefined
    }
  }
}
type GitSyncObjectType =
  | 'script'
  | 'flow'
  | 'app'
  | 'folder'
  | 'resource'
  | 'variable'
  | 'secret'
  | 'resourcetype'
  | 'schedule'
  | 'user'
  | 'group'
  | 'trigger'
  | 'settings'
  | 'key'
  | 'workspacedependencies'
  | 'datatablemigration'
type WorkspaceDeployUISettings = {
  include_path?: string[] | undefined
  include_type?: GitSyncObjectType[] | undefined
}
type AutoInviteConfig = {
  enabled?: boolean | undefined
  domain?: string | undefined
  operator?: boolean | undefined
  mode?: 'invite' | 'add' | undefined
  instance_groups?: string[] | undefined
  instance_groups_roles?: { [x: string]: string } | undefined
}
type WorkspaceWebhookEventType =
  | 'CreateApp'
  | 'DeleteApp'
  | 'UpdateApp'
  | 'CreateFlow'
  | 'UpdateFlow'
  | 'ArchiveFlow'
  | 'DeleteFlow'
  | 'CreateFolder'
  | 'UpdateFolder'
  | 'DeleteFolder'
  | 'DeleteResource'
  | 'CreateResource'
  | 'UpdateResource'
  | 'CreateResourceType'
  | 'DeleteResourceType'
  | 'UpdateResourceType'
  | 'CreateScript'
  | 'UpdateScript'
  | 'DeleteScript'
  | 'DeleteScriptPath'
  | 'CreateVariable'
  | 'UpdateVariable'
  | 'DeleteVariable'
  | 'TokenExpiringSoon'
  | 'TokenExpired'
type AIProviderConfig = {
  resource_path: string
  models: string[]
  web_search_enabled?: boolean | undefined
}
type AIProvider =
  | 'openai'
  | 'azure_openai'
  | 'azure_foundry'
  | 'anthropic'
  | 'mistral'
  | 'deepseek'
  | 'googleai'
  | 'groq'
  | 'openrouter'
  | 'togetherai'
  | 'aws_bedrock'
  | 'customai'
  | 'typesafe'
  | 'cloudflare'
type AIProviderModel = { model: string; provider: AIProvider }
type FreeTierInfo = { exhausted: boolean; used_ratio: number }
type ModelPriceOverride = {
  input: number
  output: number
  cache_read?: number | undefined
  cache_write?: number | undefined
}
type AIWebSearchConfig = {
  provider: 'exa' | 'tavily' | 'linkup' | 'deepseek'
  resource_path: string
}
type AIConfig = {
  providers?: { [x: string]: AIProviderConfig } | undefined
  default_model?: AIProviderModel | undefined
  metadata_model?: AIProviderModel | undefined
  code_completion_model?: AIProviderModel | undefined
  custom_prompts?: { [x: string]: string } | undefined
  max_tokens_per_model?: { [x: string]: number } | undefined
  free_tier?: FreeTierInfo | undefined
  model_pricing?: { [x: string]: ModelPriceOverride } | undefined
  context_window_per_model?: { [x: string]: number } | undefined
  copilot_disabled?: boolean | undefined
  sessions_storage_disabled?: boolean | undefined
  sessions_retention_days?: number | undefined
  web_search?: AIWebSearchConfig | undefined
}
type ScriptArgs = { [x: string]: unknown }
type ErrorHandlerConfig = {
  path?: string | undefined
  extra_args?: ScriptArgs | undefined
  muted_on_cancel?: boolean | undefined
  muted_on_user_path?: boolean | undefined
}
type SuccessHandlerConfig = { path?: string | undefined; extra_args?: ScriptArgs | undefined }
type VariableExpirationHandlerConfig = {
  path?: string | undefined
  extra_args?: ScriptArgs | undefined
  muted_on_user_path?: boolean | undefined
  notify_before_secs?: number | undefined
  remind_every_secs?: number | undefined
}
type DucklakeSettings = {
  ducklakes: {
    [x: string]: {
      catalog: {
        resource_type: 'postgresql' | 'mysql' | 'instance' | 'external_instance'
        resource_path?: string | undefined
      }
      storage: { storage?: string | undefined; path: string }
      extra_args?: string | undefined
      fork_behavior?: 'isolated' | 'shared' | undefined
      maintenance?:
        | {
            enabled: boolean
            schedule?: string | undefined
            retention_days?: number | undefined
            compaction?: boolean | undefined
            orphan_cleanup?: boolean | undefined
          }
        | undefined
    }
  }
}
type DbtWarehouses = { [x: string]: { resource_path: string; target?: string | undefined } }
type AutoPullMode = 'auto' | 'webhook' | 'polling'
type AutoPullStatus = {
  synced_sha?: string | undefined
  at: bigint
  job_id?: string | undefined
  success: boolean
  error?: string | undefined
}
type AutoPullSettings = {
  enabled: boolean
  mode?: AutoPullMode | undefined
  poll_interval_s?: number | undefined
  sync_forks?: boolean | undefined
  webhook_id?: bigint | undefined
  webhook_secret?: string | undefined
  webhook_url?: string | undefined
  webhook_error?: string | undefined
  webhook_verified_id?: bigint | undefined
  last_synced_sha?: { [x: string]: string } | undefined
  last_pull_status?: AutoPullStatus | undefined
  enabled_by?: string | undefined
}
type GitCredentialStatus = {
  provider: 'gitlab'
  token_id?: bigint | undefined
  expires_at?: string | undefined
  scopes?: string[] | undefined
  rotatable: boolean
  checked_at: bigint
  error?: string | undefined
}
type GitRepositorySettings = {
  script_path?: string | undefined
  git_repo_resource_path: string
  use_individual_branch?: boolean | undefined
  group_by_folder?: boolean | undefined
  collapsed?: boolean | undefined
  settings?:
    | {
        include_path?: string[] | undefined
        include_type?: GitSyncObjectType[] | undefined
        exclude_path?: string[] | undefined
        extra_include_path?: string[] | undefined
      }
    | undefined
  exclude_types_override?: GitSyncObjectType[] | undefined
  auto_pull?: AutoPullSettings | undefined
  promotion_open_prs?: boolean | undefined
  fork_open_prs?: boolean | undefined
  ai_review_prs?: boolean | undefined
  open_pr_error?: string | undefined
  credential?: GitCredentialStatus | undefined
}
type WorkspaceGitSyncSettings = { repositories?: GitRepositorySettings[] | undefined }
type WorkspaceDefaultScripts = {
  order?: string[] | undefined
  hidden?: string[] | undefined
  default_script_content?: { [x: string]: string } | undefined
}
type RemoteDeployTarget = { base_url: string; workspace_id: string }
type RemoteDeployConnection = { remote_email: string; proxy_key: string; connected_at: string }
type RemoteDeployStatus = {
  target?: RemoteDeployTarget | undefined
  connection?: RemoteDeployConnection | undefined
}
type DependencyDependent = {
  importer_path: string
  importer_kind: 'script' | 'flow' | 'app'
  importer_node_ids?: (string[] | null) | undefined
}
type DependentsAmount = { imported_path: string; count: bigint }
type DependencyMap = {
  workspace_id?: (string | null) | undefined
  importer_path?: (string | null) | undefined
  importer_kind?: (string | null) | undefined
  imported_path?: (string | null) | undefined
  importer_node_id?: (string | null) | undefined
}
type InstanceAIProviderSummary = { provider: AIProvider; models: string[] }
type InstanceAISummary = {
  providers: InstanceAIProviderSummary[]
  default_model?: AIProviderModel | undefined
  metadata_model?: AIProviderModel | undefined
  code_completion_model?: AIProviderModel | undefined
}
type EditErrorHandlerNew = {
  path?: string | undefined
  extra_args?: ScriptArgs | undefined
  muted_on_cancel?: boolean | undefined
  muted_on_user_path?: boolean | undefined
  fallback_to_instance_alerts?: boolean | undefined
}
type EditErrorHandlerLegacy = {
  error_handler?: string | undefined
  error_handler_extra_args?: ScriptArgs | undefined
  error_handler_muted_on_cancel?: boolean | undefined
}
type EditErrorHandler = EditErrorHandlerNew | EditErrorHandlerLegacy
type EditVariableExpirationHandler = {
  path?: (string | null) | undefined
  extra_args?: ScriptArgs | undefined
  muted_on_user_path?: boolean | undefined
  notify_before_secs?: number | undefined
  remind_every_secs?: number | undefined
}
type EditSuccessHandlerNew = { path?: string | undefined; extra_args?: ScriptArgs | undefined }
type EditSuccessHandlerLegacy = {
  success_handler?: string | undefined
  success_handler_extra_args?: ScriptArgs | undefined
}
type EditSuccessHandler = EditSuccessHandlerNew | EditSuccessHandlerLegacy
type DbtWarehouseConnection = {
  value: { [x: string]: unknown }
  target?: string | undefined
  resource_type?: string | undefined
}
type DataMetric = {
  script_path: string
  table_path: string
  kind: 'measure' | 'dimension'
  name: string
  expr: string
  filter?: string | undefined
}
type DatatableRoleTenants = { id: string; name?: string | undefined; tenants: string[] }
type DatatablePermissions = {
  supported: boolean
  cluster?: DatatableRoleCluster | undefined
  permissioned: boolean
  default_role: string
  roles: DatatableRoleTenants[]
  governing_workspace_id?: string | undefined
  clone_of?: { workspace_id: string; datatable: string } | undefined
  editable: boolean
  available_roles: InstanceDatatableRole[]
  ungoverned_reachers?: { workspace_id: string; datatable: string }[] | undefined
}
type AclObject = { name: string; kind: string; args?: string | undefined }
type AclSource = { role: string; privileges: string[]; reachable: boolean }
type AclGrant = {
  grantee: string
  privileges: string[]
  object?: AclObject | undefined
  future?: string | undefined
  sources: AclSource[]
}
type DatatableAclInfo = {
  owner: string
  roles: string[]
  editable: boolean
  clone: boolean
  supports_maintain: boolean
  dbname: string
  grants: AclGrant[]
  children: string[]
}
type AclTargetDatabase = { kind: 'database' }
type AclTargetSchema = { kind: 'schema'; schema: string }
type AclTargetTable = { kind: 'table'; schema: string; table: string }
type AclTarget = AclTargetDatabase | AclTargetSchema | AclTargetTable
type AclChangeSetOwner = { type: 'set_owner'; role: string }
type AclGrantScope =
  | 'target'
  | 'all_tables'
  | 'all_sequences'
  | 'all_functions'
  | 'future_tables'
  | 'future_sequences'
  | 'future_functions'
type AclChangeGrant = { type: 'grant'; role: string; privileges: string[]; scope: AclGrantScope }
type AclChangeRevoke = {
  type: 'revoke'
  role: string
  privileges: string[]
  scope: AclGrantScope
  objects?: AclObject[] | undefined
}
type AclChange = AclChangeSetOwner | AclChangeGrant | AclChangeRevoke
type AclChangeRequest = { target: AclTarget; change: AclChange; statements?: string[] | undefined }
type AclPlan = { statements: string[]; warnings: string[] }
type DataTableSchema = {
  datatable_name: string
  schemas: { [x: string]: { [x: string]: { [x: string]: string } } }
  error?: string | undefined
}
type DataTableTables = {
  datatable_name: string
  schemas: { [x: string]: string[] }
  error?: string | undefined
  instance: boolean
  permissioned: boolean
  usable_roles: string[]
  default_role: string
  can_create_schema: boolean
  creatable_schemas: string[]
  migrations_enabled: boolean
}
type DataTableTableSchema = {
  datatable_name: string
  schema_name: string
  table_name: string
  columns: { [x: string]: string }
}
type DatatableMigration = {
  datatable: string
  timestamp: bigint
  name: string
  code_up: string
  code_down?: string | undefined
}
type DatatableMigrationWithStatus = {
  timestamp: bigint
  name: string
  code_up: string
  code_down?: string | undefined
  status: 'ran' | 'not_run' | 'unknown'
  schemas?: string[] | undefined
  blocked_by?: bigint | undefined
}
type UserUsage = { email?: string | undefined; executions?: number | undefined }
type ScopeDefinition = {
  value: string
  label: string
  description?: (string | null) | undefined
  requires_resource_path: boolean
}
type ScopeDomain = {
  name: string
  description?: (string | null) | undefined
  scopes: ScopeDefinition[]
}
type NewToken = {
  label?: string | undefined
  expiration?: string | undefined
  scopes?: string[] | undefined
  workspace_id?: string | undefined
  read_only?: boolean | undefined
  super_admin?: boolean | undefined
}
type NewTokenImpersonate = {
  label?: string | undefined
  expiration?: string | undefined
  impersonate_email: string
  workspace_id?: string | undefined
}
type TruncatedToken = {
  label?: string | undefined
  expiration?: string | undefined
  token_prefix: string
  created_at: string
  last_used_at: string
  scopes?: string[] | undefined
  email?: string | undefined
  workspace_id?: string | undefined
  read_only: boolean
}
type CreateVariable = {
  path: string
  value: string
  is_secret: boolean
  description: string
  account?: number | undefined
  is_oauth?: boolean | undefined
  expires_at?: string | undefined
  value_valid_until?: string | undefined
  labels?: string[] | undefined
  ws_specific?: boolean | undefined
}
type EditVariable = {
  path?: string | undefined
  value?: string | undefined
  is_secret?: boolean | undefined
  description?: string | undefined
  value_valid_until?: (string | null) | undefined
  labels?: string[] | undefined
  ws_specific?: boolean | undefined
}
type ListableVariable = {
  workspace_id: string
  path: string
  value?: string | undefined
  is_secret: boolean
  description?: string | undefined
  account?: number | undefined
  is_oauth?: boolean | undefined
  extra_perms: { [x: string]: boolean }
  is_expired?: boolean | undefined
  refresh_error?: string | undefined
  is_linked?: boolean | undefined
  is_refreshed?: boolean | undefined
  expires_at?: string | undefined
  value_valid_until?: (string | null) | undefined
  labels?: string[] | undefined
  inherited_labels?: string[] | undefined
  ws_specific?: boolean | undefined
  edited_at?: string | undefined
  edited_by?: string | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type ContextualVariable = { name: string; value: string; description: string; is_custom: boolean }
type ProtectionRuleKind =
  | 'DisableDirectDeployment'
  | 'DisableWorkspaceForking'
  | 'RestrictDeployToDeployers'
  | 'RestrictAnonymousAppDeployment'
  | 'RestrictPublicRunSharing'
  | 'RestrictGuestAppDeployment'
  | 'RequireIsolatedForks'
type ProtectionRules = ProtectionRuleKind[]
type RuleBypasserGroups = string[]
type RuleBypasserUsers = string[]
type ForkRoleMapping = { [x: string]: string }
type ProtectionRuleset = {
  name: string
  workspace_id?: string | undefined
  rules: ProtectionRules
  bypass_groups: RuleBypasserGroups
  bypass_users: RuleBypasserUsers
  fork_role_mapping?: ForkRoleMapping | undefined
}
type DeploymentRequestEligibleDeployer = { username: string; email: string; is_admin: boolean }
type DeploymentRequestAssignee = { username: string; email: string }
type DeploymentRequestComment = {
  id: bigint
  parent_id?: (bigint | null) | undefined
  author: string
  author_email: string
  body: string
  anchor_kind?: (string | null) | undefined
  anchor_path?: (string | null) | undefined
  obsolete: boolean
  created_at: string
}
type DeploymentRequest = {
  id: bigint
  source_workspace_id: string
  fork_workspace_id: string
  requested_by: string
  requested_by_email: string
  requested_at: string
  assignees: DeploymentRequestAssignee[]
  comments: DeploymentRequestComment[]
}
type QuotaInfo = { used: number; limit: number; prunable: number }
type TokenResponse = {
  access_token: string
  expires_in?: number | undefined
  refresh_token?: string | undefined
  scope?: string[] | undefined
  grant_type?: string | undefined
  resource_fields?: { [x: string]: { [x: string]: unknown } } | undefined
}
type CreateResource = {
  path: string
  value: { [x: string]: unknown }
  description?: string | undefined
  resource_type: string
  labels?: string[] | undefined
  ws_specific?: boolean | undefined
  preserve_on_behalf_of?: boolean | undefined
}
type EditResource = {
  path?: string | undefined
  description?: string | undefined
  value?: { [x: string]: unknown } | undefined
  resource_type?: string | undefined
  labels?: string[] | undefined
  ws_specific?: boolean | undefined
  preserve_on_behalf_of?: boolean | undefined
}
type ResourceVersion = {
  id: bigint
  version: bigint
  created_at: string
  created_by?: string | undefined
}
type ListableResource = {
  workspace_id?: string | undefined
  path: string
  description?: string | undefined
  resource_type: string
  value?: { [x: string]: unknown } | undefined
  is_oauth: boolean
  extra_perms?: { [x: string]: boolean } | undefined
  is_expired?: boolean | undefined
  refresh_error?: string | undefined
  is_linked: boolean
  is_refreshed: boolean
  account?: number | undefined
  scopes?: string[] | undefined
  created_by?: string | undefined
  edited_at?: string | undefined
  labels?: string[] | undefined
  inherited_labels?: string[] | undefined
  ws_specific?: boolean | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
  agent_memory?: { [x: string]: unknown } | undefined
  draft_path?: string | undefined
  grant_type?: string | undefined
}
type ResourceType = {
  workspace_id?: string | undefined
  name: string
  schema?: { [x: string]: unknown } | undefined
  description?: string | undefined
  created_by?: string | undefined
  edited_at?: string | undefined
  format_extension?: string | undefined
  is_fileset?: boolean | undefined
  display_name?: string | undefined
}
type EditResourceType = {
  schema?: { [x: string]: unknown } | undefined
  description?: string | undefined
  is_fileset?: boolean | undefined
  format_extension?: (string | null) | undefined
  display_name?: (string | null) | undefined
}
type StaticTransform = { value?: { [x: string]: unknown } | undefined; type: 'static' }
type JavascriptTransform = { expr: string; type: 'javascript' }
type AiTransform = { type: 'ai' }
type InputTransform = StaticTransform | JavascriptTransform | AiTransform
type RawScript = {
  input_transforms: { [x: string]: InputTransform }
  content: string
  language:
    | 'deno'
    | 'bun'
    | 'bunnative'
    | 'python3'
    | 'go'
    | 'bash'
    | 'powershell'
    | 'postgresql'
    | 'mysql'
    | 'bigquery'
    | 'snowflake'
    | 'mssql'
    | 'oracledb'
    | 'graphql'
    | 'nativets'
    | 'php'
    | 'rust'
    | 'ansible'
    | 'csharp'
    | 'nu'
    | 'java'
    | 'ruby'
    | 'rlang'
    | 'duckdb'
  path?: string | undefined
  lock?: string | undefined
  type: 'rawscript'
  tag?: string | undefined
  concurrent_limit?: number | undefined
  concurrency_time_window_s?: number | undefined
  on_concurrency_limit?: 'queue' | 'fail' | undefined
  custom_concurrency_key?: string | undefined
  is_trigger?: boolean | undefined
  assets?:
    | {
        path: string
        kind: 's3object' | 'resource' | 'ducklake' | 'datatable' | 'volume' | 'dbt'
        access_type?: 'r' | 'w' | 'rw' | undefined
        alt_access_type?: 'r' | 'w' | 'rw' | undefined
      }[]
    | undefined
}
type PathScript = {
  input_transforms: { [x: string]: InputTransform }
  path: string
  hash?: string | undefined
  type: 'script'
  tag_override?: string | undefined
  is_trigger?: boolean | undefined
}
type PathFlow = {
  input_transforms: { [x: string]: InputTransform }
  path: string
  tag_override?: string | undefined
  type: 'flow'
}
type ForloopFlow = {
  modules: FlowModule[]
  iterator: InputTransform
  skip_failures: boolean
  type: 'forloopflow'
  parallel?: boolean | undefined
  parallelism?: InputTransform | undefined
  squash?: boolean | undefined
  iteration_label?: InputTransform | undefined
}
type WhileloopFlow = {
  modules: FlowModule[]
  skip_failures: boolean
  type: 'whileloopflow'
  parallel?: boolean | undefined
  parallelism?: InputTransform | undefined
  squash?: boolean | undefined
  max_iterations?: number | undefined
  max_duration_secs?: number | undefined
}
type BranchOne = {
  branches: { summary?: string | undefined; expr: string; modules: FlowModule[] }[]
  default: FlowModule[]
  type: 'branchone'
}
type BranchAll = {
  branches: {
    summary?: string | undefined
    skip_failure?: boolean | undefined
    modules: FlowModule[]
  }[]
  type: 'branchall'
  parallel?: boolean | undefined
  parallelism?: InputTransform | undefined
}
type Identity = { type: 'identity'; flow?: boolean | undefined }
type ProviderConfig = {
  kind:
    | 'openai'
    | 'azure_openai'
    | 'azure_foundry'
    | 'anthropic'
    | 'mistral'
    | 'deepseek'
    | 'googleai'
    | 'groq'
    | 'openrouter'
    | 'togetherai'
    | 'customai'
    | 'aws_bedrock'
    | 'typesafe'
    | 'cloudflare'
  resource: string
  model: string
  reasoning_effort?: string | undefined
}
type ProviderTransform =
  | { value: ProviderConfig; type: 'static' }
  | JavascriptTransform
  | AiTransform
type MemoryConfig =
  | { kind: 'off' }
  | { kind: 'window'; context_length: number }
  | { kind: 'compaction'; context_window?: number | undefined }
  | { kind: 'auto'; context_length?: number | undefined; memory_id?: string | undefined }
  | { kind: 'manual'; messages: { role: 'user' | 'assistant' | 'system'; content: string }[] }
type AiAgent = {
  input_transforms: {
    provider?: ProviderTransform | undefined
    output_type?: {} | undefined
    user_message?: {} | undefined
    system_prompt?: {} | undefined
    streaming?: {} | undefined
    memory?: { value: MemoryConfig; type: 'static' } | JavascriptTransform | AiTransform | undefined
    memory_id?: {} | undefined
    previous_messages?: {} | undefined
    output_schema?: {} | undefined
    user_attachments?: {} | undefined
    enabled_tools?: {} | undefined
    max_completion_tokens?: {} | undefined
    temperature?: {} | undefined
    max_iterations?: {} | undefined
    model?: {} | undefined
    reasoning_effort?: {} | undefined
  }
  tools?:
    | {
        id: string
        summary?: string | undefined
        description?: string | undefined
        job_token_scopes?: (string[] | null) | undefined
        requires_approval?: boolean | undefined
        background?: boolean | undefined
        background_after_secs?: number | undefined
        value:
          | { tool_type: 'flowmodule' }
          | {
              tool_type: 'mcp'
              resource_path: string
              include_tools?: string[] | undefined
              exclude_tools?: string[] | undefined
            }
          | { tool_type: 'websearch' }
          | { tool_type: 'question'; timeout?: number | undefined }
      }[]
    | undefined
  type: 'aiagent'
  tag?: string | undefined
  omit_output_from_conversation?: boolean | undefined
  agent?: string | undefined
  tool_inputs?: { [x: string]: { [x: string]: InputTransform } } | undefined
  parallel?: boolean | undefined
}
type AiDecision = {
  input_transforms: { provider: ProviderTransform; state: {}; questions: {} }
  type: 'aidecision'
  tag?: string | undefined
}
type FlowModuleValue =
  | RawScript
  | PathScript
  | PathFlow
  | ForloopFlow
  | WhileloopFlow
  | BranchOne
  | BranchAll
  | Identity
  | AiAgent
  | AiDecision
type StopAfterIf = {
  skip_if_stopped?: boolean | undefined
  expr: string
  error_message?: (string | null) | undefined
  error_include_result?: boolean | undefined
}
type Retry = {
  constant?: { attempts?: number | undefined; seconds?: number | undefined } | undefined
  exponential?:
    | {
        attempts?: number | undefined
        multiplier?: number | undefined
        seconds?: number | undefined
        random_factor?: number | undefined
      }
    | undefined
  retry_if?: { expr: string } | undefined
}
type FlowModule = {
  id: string
  value: FlowModuleValue
  stop_after_if?: StopAfterIf | undefined
  stop_after_all_iters_if?: StopAfterIf | undefined
  skip_if?: { expr: string } | undefined
  sleep?: InputTransform | undefined
  cache_ttl?: number | undefined
  cache_ignore_s3_path?: boolean | undefined
  timeout?: InputTransform | undefined
  delete_after_secs?: number | undefined
  summary?: string | undefined
  mock?:
    | {
        enabled?: boolean | undefined
        return_value?: { [x: string]: unknown } | undefined
        preview_only?: boolean | undefined
      }
    | undefined
  suspend?:
    | {
        required_events?: number | undefined
        timeout?: number | undefined
        resume_form?: { schema?: { [x: string]: unknown } | undefined } | undefined
        user_auth_required?: boolean | undefined
        user_groups_required?: InputTransform | undefined
        self_approval_disabled?: boolean | undefined
        hide_cancel?: boolean | undefined
        continue_on_disapprove_timeout?: boolean | undefined
        skin?: 'detailed' | 'minimal' | undefined
      }
    | undefined
  priority?: number | undefined
  continue_on_error?: boolean | undefined
  job_token_scopes?: (string[] | null) | undefined
  retry?: Retry | undefined
  debouncing?:
    | {
        debounce_delay_s?: number | undefined
        debounce_key?: string | undefined
        debounce_args_to_accumulate?: string[] | undefined
        max_total_debouncing_time?: number | undefined
        max_total_debounces_amount?: number | undefined
      }
    | undefined
}
type FlowNote = {
  id: string
  text: string
  position?: { x: number; y: number } | undefined
  size?: { width: number; height: number } | undefined
  color: string
  type: 'free' | 'group'
  locked?: boolean | undefined
  contained_node_ids?: string[] | undefined
}
type FlowValue = {
  modules: FlowModule[]
  failure_module?: FlowModule | undefined
  preprocessor_module?: FlowModule | undefined
  same_worker?: boolean | undefined
  preserve_step_tags?: boolean | undefined
  concurrent_limit?: number | undefined
  concurrency_key?: string | undefined
  concurrency_time_window_s?: number | undefined
  on_concurrency_limit?: 'queue' | 'fail' | undefined
  debounce_delay_s?: number | undefined
  debounce_key?: string | undefined
  debounce_args_to_accumulate?: string[] | undefined
  max_total_debouncing_time?: number | undefined
  max_total_debounces_amount?: number | undefined
  skip_expr?: string | undefined
  cache_ttl?: number | undefined
  cache_ignore_s3_path?: boolean | undefined
  delete_after_secs?: number | undefined
  timeout?: number | undefined
  flow_env?: { [x: string]: { [x: string]: unknown } } | undefined
  priority?: number | undefined
  early_return?: string | undefined
  chat_input_enabled?: boolean | undefined
  notes?: FlowNote[] | undefined
  groups?:
    | {
        summary?: string | undefined
        note?: string | undefined
        autocollapse?: boolean | undefined
        start_id: string
        end_id: string
        color?: string | undefined
      }[]
    | undefined
}
type OpenFlow = {
  summary: string
  description?: string | undefined
  value: FlowValue
  schema?: { [x: string]: unknown } | undefined
  on_behalf_of_email?: string | undefined
  on_behalf_of?: string | undefined
}
type GuestEntry = { workspace_id: string; app_path: string }
type Policy = {
  triggerables?: { [x: string]: { [x: string]: unknown } } | undefined
  triggerables_v2?: { [x: string]: { [x: string]: unknown } } | undefined
  s3_inputs?: { [x: string]: unknown }[] | undefined
  allowed_s3_keys?: { s3_path?: string | undefined; resource?: string | undefined }[] | undefined
  execution_mode?: 'viewer' | 'publisher' | 'guest' | 'anonymous' | undefined
  on_behalf_of?: string | undefined
  on_behalf_of_email?: string | undefined
  sandbox?: boolean | undefined
  frontend_sdk_scopes?: string[] | undefined
}
type EmbedTokenResponse = {
  token?: (string | null) | undefined
  expiration?: (string | null) | undefined
  raw_app: boolean
  sandbox: boolean
  app_path?: (string | null) | undefined
  workspace_id?: (string | null) | undefined
  sdk_scopes?: (string[] | null) | undefined
  viewer_email?: (string | null) | undefined
}
type HubScriptKind = 'script' | 'failure' | 'trigger' | 'approval'
type ScriptLang =
  | 'python3'
  | 'deno'
  | 'go'
  | 'bash'
  | 'powershell'
  | 'postgresql'
  | 'mysql'
  | 'bigquery'
  | 'snowflake'
  | 'mssql'
  | 'oracledb'
  | 'graphql'
  | 'nativets'
  | 'bun'
  | 'php'
  | 'rust'
  | 'ansible'
  | 'csharp'
  | 'nu'
  | 'java'
  | 'ruby'
  | 'rlang'
  | 'duckdb'
  | 'bunnative'
  | 'dbt'
type ListableScript = {
  hash: string
  path: string
  summary: string
  description?: string | undefined
  created_at: string
  archived: boolean
  extra_perms: { [x: string]: boolean }
  language: ScriptLang
  kind: 'script' | 'failure' | 'trigger' | 'approval' | 'preprocessor'
  starred: boolean
  tag: string | null
  draft_only?: boolean | undefined
  has_deploy_errors: boolean
  ws_error_handler_muted: boolean | null
  auto_kind?: string | undefined
  use_codebase?: boolean | undefined
  deployment_msg?: string | undefined
  labels?: string[] | undefined
  inherited_labels?: string[] | undefined
  is_draft?: boolean | undefined
  draft_path?: string | undefined
  draft_users?: { username?: (string | null) | undefined }[] | undefined
}
type UserDraftItemKind =
  | 'script'
  | 'flow'
  | 'app'
  | 'raw_app'
  | 'resource'
  | 'variable'
  | 'trigger_schedule'
  | 'trigger_webhook'
  | 'trigger_default_email'
  | 'trigger_email'
  | 'trigger_http'
  | 'trigger_websocket'
  | 'trigger_postgres'
  | 'trigger_kafka'
  | 'trigger_nats'
  | 'trigger_mqtt'
  | 'trigger_amqp'
  | 'trigger_sqs'
  | 'trigger_gcp'
  | 'trigger_azure'
  | 'trigger_poll'
  | 'trigger_cli'
  | 'trigger_nextcloud'
  | 'trigger_google'
  | 'trigger_github'
  | 'data_pipeline'
type DraftItemRef = { kind: UserDraftItemKind; path: string }
type AssetKind = 's3object' | 'resource' | 'ducklake' | 'datatable' | 'volume' | 'dbt'
type ScriptModule = { content: string; language: ScriptLang; lock?: (string | null) | undefined }
type NewScript = {
  path: string
  parent_hash?: string | undefined
  auto_parent?: boolean | undefined
  summary: string
  description?: string | undefined
  content: string
  schema?: { [x: string]: unknown } | undefined
  is_template?: boolean | undefined
  lock?: string | undefined
  language: ScriptLang
  kind?: 'script' | 'failure' | 'trigger' | 'command' | 'approval' | 'preprocessor' | undefined
  tag?: string | undefined
  envs?: string[] | undefined
  concurrent_limit?: number | undefined
  concurrency_time_window_s?: number | undefined
  on_concurrency_limit?: 'queue' | 'fail' | undefined
  cache_ttl?: number | undefined
  cache_ignore_s3_path?: boolean | undefined
  dedicated_worker?: boolean | undefined
  ws_error_handler_muted?: boolean | undefined
  priority?: number | undefined
  restart_unless_cancelled?: boolean | undefined
  timeout?: number | undefined
  delete_after_secs?: number | undefined
  deployment_message?: string | undefined
  concurrency_key?: string | undefined
  debounce_key?: string | undefined
  debounce_delay_s?: number | undefined
  debounce_args_to_accumulate?: string[] | undefined
  max_total_debouncing_time?: number | undefined
  max_total_debounces_amount?: number | undefined
  visible_to_runner_only?: boolean | undefined
  auto_kind?: string | undefined
  codebase?: string | undefined
  has_preprocessor?: boolean | undefined
  on_behalf_of_email?: string | undefined
  on_behalf_of?: string | undefined
  preserve_on_behalf_of?: boolean | undefined
  assets?:
    | {
        path: string
        kind: AssetKind
        access_type?: 'r' | 'w' | 'rw' | undefined
        alt_access_type?: 'r' | 'w' | 'rw' | undefined
      }[]
    | undefined
  modules?: ({ [x: string]: ScriptModule } | null) | undefined
  labels?: string[] | undefined
  job_token_scopes?: (string[] | null) | undefined
  skip_draft_deletion?: boolean | undefined
}
type NewWorkspaceDependencies = {
  workspace_id: string
  language: ScriptLang
  name?: string | undefined
  description?: string | undefined
  content: string
}
type WorkspaceDependencies = {
  id: number
  archived: boolean
  name?: string | undefined
  description?: string | undefined
  content: string
  language: ScriptLang
  workspace_id: string
  created_at: string
}
type Script = {
  workspace_id?: string | undefined
  hash: string
  path: string
  parent_hashes?: string[] | undefined
  summary: string
  description: string
  content: string
  created_by: string
  created_at: string
  archived: boolean
  schema?: { [x: string]: unknown } | undefined
  deleted: boolean
  is_template: boolean
  extra_perms: { [x: string]: boolean }
  lock?: string | undefined
  lock_error_logs?: string | undefined
  language: ScriptLang
  kind: 'script' | 'failure' | 'trigger' | 'command' | 'approval' | 'preprocessor'
  starred: boolean
  tag?: string | undefined
  draft_only?: boolean | undefined
  envs?: string[] | undefined
  concurrent_limit?: number | undefined
  concurrency_time_window_s?: number | undefined
  on_concurrency_limit?: 'queue' | 'fail' | undefined
  concurrency_key?: string | undefined
  debounce_key?: string | undefined
  debounce_delay_s?: number | undefined
  debounce_args_to_accumulate?: string[] | undefined
  max_total_debouncing_time?: number | undefined
  max_total_debounces_amount?: number | undefined
  cache_ttl?: number | undefined
  cache_ignore_s3_path?: boolean | undefined
  dedicated_worker?: boolean | undefined
  ws_error_handler_muted?: boolean | undefined
  priority?: number | undefined
  restart_unless_cancelled?: boolean | undefined
  timeout?: number | undefined
  delete_after_secs?: number | undefined
  visible_to_runner_only?: boolean | undefined
  auto_kind?: string | undefined
  codebase?: string | undefined
  has_preprocessor: boolean
  on_behalf_of_email?: string | undefined
  on_behalf_of?: string | undefined
  modules?: ({ [x: string]: ScriptModule } | null) | undefined
  labels?: string[] | undefined
  job_token_scopes?: (string[] | null) | undefined
  inherited_labels?: string[] | undefined
}
type TriggersCount = {
  primary_schedule?: { schedule?: string | undefined } | undefined
  schedule_count?: number | undefined
  http_routes_count?: number | undefined
  webhook_count?: number | undefined
  email_count?: number | undefined
  default_email_count?: number | undefined
  websocket_count?: number | undefined
  postgres_count?: number | undefined
  kafka_count?: number | undefined
  nats_count?: number | undefined
  mqtt_count?: number | undefined
  amqp_count?: number | undefined
  gcp_count?: number | undefined
  azure_count?: number | undefined
  sqs_count?: number | undefined
  nextcloud_count?: number | undefined
  google_count?: number | undefined
  github_count?: number | undefined
}
type ScriptHistory = {
  script_hash: string
  deployment_msg?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
}
type CiTestResult = {
  test_script_path: string
  job_id?: (string | null) | undefined
  status?: (string | null) | undefined
  started_at?: (string | null) | undefined
}
type ContractWarning = {
  kind:
    | 'missing_column'
    | 'missing_lineage_source'
    | 'missing_relationship_column'
    | 'relationship_type_mismatch'
    | 'missing_measure_column'
    | 'missing_dimension_column'
    | 'non_aggregate_measure'
    | 'suppressed'
  asset_path: string
  column?: string | undefined
  expected_type?: string | undefined
  found_type?: string | undefined
  schema_version?: bigint | undefined
  captured_at?: string | undefined
  message: string
}
type RunnableItem = {
  type: 'script' | 'flow' | 'app' | 'agent'
  path: string
  summary?: string | undefined
  workspace_id?: string | undefined
  extra_perms?: { [x: string]: boolean } | undefined
  starred?: boolean | undefined
  archived?: boolean | undefined
  is_draft?: boolean | undefined
  draft_only?: (boolean | null) | undefined
  draft_path?: string | undefined
  draft_users?: { [x: string]: unknown }[] | undefined
  labels?: string[] | undefined
  inherited_labels?: string[] | undefined
  ws_error_handler_muted?: boolean | undefined
  edited_at?: string | undefined
  hash?: string | undefined
  language?: string | undefined
  kind?: string | undefined
  auto_kind?: string | undefined
  use_codebase?: boolean | undefined
  has_deploy_errors?: boolean | undefined
  chat_input_enabled?: boolean | undefined
  raw_app?: boolean | undefined
  execution_mode?: string | undefined
  id?: bigint | undefined
  version?: bigint | undefined
  agent_memory?: { [x: string]: unknown } | undefined
  ws_specific?: boolean | undefined
}
type ExtraPerms = { [x: string]: boolean }
type FlowVersion = {
  id: number
  created_at: string
  deployment_msg?: string | undefined
  created_by?: string | undefined
}
type Flow = {
  summary: string
  description?: string | undefined
  value: FlowValue
  schema?: { [x: string]: unknown } | undefined
  on_behalf_of_email?: string | undefined
  on_behalf_of?: string | undefined
  workspace_id?: string | undefined
  path: string
  edited_by: string
  edited_at: string
  archived: boolean
  extra_perms: ExtraPerms
  starred?: boolean | undefined
  draft_only?: boolean | undefined
  tag?: string | undefined
  ws_error_handler_muted?: boolean | undefined
  priority?: number | undefined
  dedicated_worker?: boolean | undefined
  timeout?: number | undefined
  visible_to_runner_only?: boolean | undefined
  labels?: string[] | undefined
  job_token_scopes?: (string[] | null) | undefined
  inherited_labels?: string[] | undefined
  lock_error_logs?: string | undefined
  version_id?: number | undefined
}
type FlowConversation = {
  id: string
  workspace_id: string
  flow_path: string
  title?: (string | null) | undefined
  created_at: string
  updated_at: string
  created_by: string
  is_test: boolean
  running_turn?: ({ job_id: string; user_seq: bigint } | null) | undefined
}
type SlackAgentChannel = {
  channel_id: string
  channel_name: string
  agent_path: string
  is_default: boolean
}
type FlowConversationMessage = {
  id: string
  conversation_id: string
  message_type: 'user' | 'assistant' | 'system' | 'tool'
  content: string
  job_id?: (string | null) | undefined
  created_at: string
  created_seq: bigint
  step_name?: string | undefined
  success?: boolean | undefined
  tool_arguments?: (string | null) | undefined
  tool_result?: (string | null) | undefined
  reasoning?: (string | null) | undefined
  attachments?:
    | (
        | {
            input: string
            s3: string
            storage?: string | undefined
            filename?: string | undefined
          }[]
        | null
      )
    | undefined
}
type Scorer = {
  id?: string | undefined
  name?: string | undefined
  pass_if?: number | undefined
  kind: 'script' | 'agent'
  path: string
}
type EvalDataset = {
  path: string
  summary?: string | undefined
  scorers?: Scorer[] | undefined
  created_at: string
  created_by: string
  edited_at: string
  edited_by: string
}
type EvalCaseInput = {
  user_message?: string | undefined
  user_attachments?: { [x: string]: unknown }[] | undefined
}
type NewEvalCase = {
  input?: EvalCaseInput | undefined
  expected?: { [x: string]: unknown } | undefined
}
type SaveEvalCase = {
  id?: string | undefined
  input?: EvalCaseInput | undefined
  expected?: { [x: string]: unknown } | undefined
}
type EvalCase = {
  id: string
  created_at: string
  created_by: string
  input?: EvalCaseInput | undefined
  expected?: { [x: string]: unknown } | undefined
}
type AgentDraft = {
  input_transforms?: { [x: string]: unknown } | undefined
  tools?: { [x: string]: unknown }[] | undefined
}
type EvalSubject = {
  kind: 'agent' | 'agent_draft' | 'agent_version'
  path: string
  version?: (bigint | null) | undefined
  draft?: AgentDraft | undefined
  draft_hash?: string | undefined
}
type ExperimentScore = {
  scorer_id: string
  name: string
  kind: 'agent' | 'script'
  mean?: number | undefined
  pass_rate?: number | undefined
  scored: number
  failed: number
}
type EvalExperiment = {
  id: string
  dataset: string
  subject: EvalSubject
  run_number: number
  run_job_id: string
  case_count: number
  scores?: ExperimentScore[] | undefined
  running?: boolean | undefined
  created_at: string
  created_by: string
}
type CellScore = {
  scorer_id: string
  score?: number | undefined
  reason?: string | undefined
  checks?: { [x: string]: unknown } | undefined
  error?: string | undefined
  not_applicable?: boolean | undefined
  pending: boolean
  passed?: boolean | undefined
  baseline?: number | undefined
  definition_changed: boolean
}
type ExperimentRow = {
  case_id: string
  input: EvalCaseInput
  expected?: { [x: string]: unknown } | undefined
  job_id?: string | undefined
  status: 'running' | 'success' | 'failure' | 'canceled' | 'skipped' | 'unavailable'
  output?: string | undefined
  subject_version?: bigint | undefined
  subject_draft_hash?: string | undefined
  scores: CellScore[]
}
type ScorerMean = {
  scorer_id: string
  mean?: number | undefined
  baseline_mean?: number | undefined
  pass_rate?: number | undefined
  baseline_pass_rate?: number | undefined
  scored: number
  missing_in_baseline: number
  definition_changed: boolean
}
type ListableRawApp = {
  workspace_id: string
  path: string
  summary: string
  extra_perms: { [x: string]: boolean }
  starred?: boolean | undefined
  version: number
  edited_at: string
  labels?: string[] | undefined
  inherited_labels?: string[] | undefined
}
type AITokenUsageEvent = {
  provider: AIProvider
  model: string
  session_id?: string | undefined
  input_tokens?: number | undefined
  cache_read_tokens?: number | undefined
  cache_write_tokens?: number | undefined
  output_tokens?: number | undefined
  reported_cost_nano_usd?: number | undefined
  requests?: number | undefined
}
type AITokenUsageBucket = {
  key: string
  provider: string
  model: string
  input_tokens: number
  cache_read_tokens: number
  cache_write_tokens: number
  output_tokens: number
  reported_cost_nano_usd?: number | undefined
  requests: number
}
type AISessionBackupListing = { id: string; updated_at: string; epoch: number }
type AISessionBackupCursor = { id: string; images: boolean; after: string }
type AISessionBackupChat = { id: string; record: { [x: string]: unknown } }
type AISessionBackupImage = { chat_id: string; id: string; data_url: string }
type AISessionBackup = {
  id: string
  head: { [x: string]: unknown }
  chats: AISessionBackupChat[]
  images: AISessionBackupImage[]
  artifacts?: { [x: string]: unknown } | undefined
  next?: AISessionBackupCursor | undefined
  listing: string
  moved?: boolean | undefined
}
type AISessionBackupPush = {
  id: string
  head?: { [x: string]: unknown } | undefined
  chats?: AISessionBackupChat[] | undefined
  images?: AISessionBackupImage[] | undefined
  artifacts?: { [x: string]: unknown } | undefined
  delete_chats?: string[] | undefined
  delete_images?: { chat_id: string; id: string }[] | undefined
  partial?: boolean | undefined
  whole?: boolean | undefined
  push?: string | undefined
  opens?: boolean | undefined
  epoch?: number | undefined
}
type SharedAiArtifactInfo = {
  id: string
  name: string
  kind: 'md' | 'html'
  version: number
  created_by: string
  shared_at: string
  expires_at: string
}
type SharedAiSessionInfo = {
  id: string
  name: string
  is_public: boolean
  message_count: number
  created_by: string
  shared_at: string
}
type ListableApp = {
  id: number
  workspace_id: string
  path: string
  summary: string
  version: number
  extra_perms: { [x: string]: boolean }
  starred?: boolean | undefined
  edited_at: string
  execution_mode: 'viewer' | 'publisher' | 'guest' | 'anonymous'
  raw_app?: boolean | undefined
  labels?: string[] | undefined
  is_draft?: boolean | undefined
  draft_only?: boolean | undefined
  draft_path?: string | undefined
  draft_users?: { username?: (string | null) | undefined }[] | undefined
  inherited_labels?: string[] | undefined
}
type AppWithLastVersion = {
  id: number
  workspace_id: string
  path: string
  summary: string
  versions: number[]
  created_by: string
  created_at: string
  value: { [x: string]: unknown }
  policy: Policy
  execution_mode: 'viewer' | 'publisher' | 'anonymous'
  extra_perms: { [x: string]: boolean }
  custom_path?: string | undefined
  raw_app: boolean
  bundle_secret?: string | undefined
  labels?: string[] | undefined
}
type AppHistory = {
  version: number
  deployment_msg?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
}
type AppDeployed = { path: string; version: bigint }
type S3Object = {
  s3: string
  filename?: string | undefined
  storage?: string | undefined
  presigned?: string | undefined
}
type WindmillFileMetadata = {
  mime_type?: string | undefined
  size_in_bytes?: number | undefined
  last_modified?: string | undefined
  expires?: string | undefined
  version_id?: string | undefined
}
type WindmillFilePreview = {
  msg?: string | undefined
  content?: string | undefined
  content_type: 'RawText' | 'Csv' | 'Parquet' | 'Unknown'
}
type Preview = {
  content?: string | undefined
  path?: string | undefined
  script_hash?: string | undefined
  args: ScriptArgs
  language?: ScriptLang | undefined
  tag?: string | undefined
  kind?: 'code' | 'identity' | 'http' | undefined
  dedicated_worker?: boolean | undefined
  lock?: string | undefined
  flow_path?: string | undefined
  modules?: ({ [x: string]: ScriptModule } | null) | undefined
  temp_script_refs?: ({ [x: string]: string } | null) | undefined
  on_behalf_of?: (string | null) | undefined
  viewer_data_access?: (boolean | null) | undefined
}
type PreviewInline = { content: string; args: ScriptArgs; language: ScriptLang }
type InlineScriptArgs = { args?: ScriptArgs | undefined }
type WorkflowTask = { args: ScriptArgs }
type RawScriptForDependencies = { raw_code: string; path: string; language: ScriptLang }
type RestartedFrom = {
  flow_job_id?: string | undefined
  step_id?: string | undefined
  branch_or_iteration_n?: number | undefined
  flow_version?: number | undefined
  branch_chosen?:
    | { type?: 'default' | 'branch' | undefined; branch?: number | undefined }
    | undefined
  nested?: RestartedFrom | undefined
}
type FlowPreview = {
  value: FlowValue
  path?: string | undefined
  args: ScriptArgs
  tag?: string | undefined
  restarted_from?: RestartedFrom | undefined
  temp_script_refs?: ({ [x: string]: string } | null) | undefined
  on_behalf_of?: (string | null) | undefined
}
type RunnableKind = 'script' | 'flow'
type DynamicInputData = {
  entrypoint_function: string
  args?: { [x: string]: unknown } | undefined
  runnable_ref:
    | { source: 'deployed'; path: string; runnable_kind: RunnableKind }
    | { source: 'inline'; code: string; language?: ScriptLang | undefined }
}
type FlowStatusModule = {
  type:
    | 'WaitingForPriorSteps'
    | 'WaitingForEvents'
    | 'WaitingForExecutor'
    | 'InProgress'
    | 'Success'
    | 'Failure'
  id?: string | undefined
  job?: string | undefined
  count?: number | undefined
  progress?: number | undefined
  iterator?:
    | {
        index?: number | undefined
        itered?: { [x: string]: unknown }[] | undefined
        itered_len?: number | undefined
        args?: { [x: string]: unknown } | undefined
      }
    | undefined
  flow_jobs?: string[] | undefined
  flow_jobs_success?: boolean[] | undefined
  flow_jobs_labels?: (string | null)[] | undefined
  flow_jobs_duration?:
    | { started_at?: string[] | undefined; duration_ms?: number[] | undefined }
    | undefined
  branch_chosen?: { type: 'branch' | 'default'; branch?: number | undefined } | undefined
  branchall?: { branch: number; len: number } | undefined
  approvers?: { resume_id: number; approver: string }[] | undefined
  failed_retries?: string[] | undefined
  skipped?: boolean | undefined
  agent_actions?:
    | (
        | { job_id: string; function_name: string; type: 'tool_call'; module_id: string }
        | {
            call_id: string
            function_name: string
            resource_path: string
            type: 'mcp_tool_call'
            arguments?: { [x: string]: unknown } | undefined
          }
        | { type: 'web_search' }
        | {
            type: 'approval'
            call_id: string
            calls: { function_name: string; arguments: { [x: string]: unknown } }[]
            expires_at: string
          }
        | {
            type: 'question'
            call_id: string
            question: string
            choices?: string[] | undefined
            multi_select?: boolean | undefined
            expires_at: string
          }
        | { type: 'message' }
      )[]
    | undefined
  agent_actions_success?: (boolean | null)[] | undefined
}
type FlowStatus = {
  step: number
  modules: FlowStatusModule[]
  user_states?: { [x: string]: unknown } | undefined
  preprocessor_module?:
    | {
        type:
          | 'WaitingForPriorSteps'
          | 'WaitingForEvents'
          | 'WaitingForExecutor'
          | 'InProgress'
          | 'Success'
          | 'Failure'
        id?: string | undefined
        job?: string | undefined
        count?: number | undefined
        progress?: number | undefined
        iterator?:
          | {
              index?: number | undefined
              itered?: { [x: string]: unknown }[] | undefined
              itered_len?: number | undefined
              args?: { [x: string]: unknown } | undefined
            }
          | undefined
        flow_jobs?: string[] | undefined
        flow_jobs_success?: boolean[] | undefined
        flow_jobs_labels?: (string | null)[] | undefined
        flow_jobs_duration?:
          | { started_at?: string[] | undefined; duration_ms?: number[] | undefined }
          | undefined
        branch_chosen?: { type: 'branch' | 'default'; branch?: number | undefined } | undefined
        branchall?: { branch: number; len: number } | undefined
        approvers?: { resume_id: number; approver: string }[] | undefined
        failed_retries?: string[] | undefined
        skipped?: boolean | undefined
        agent_actions?:
          | (
              | { job_id: string; function_name: string; type: 'tool_call'; module_id: string }
              | {
                  call_id: string
                  function_name: string
                  resource_path: string
                  type: 'mcp_tool_call'
                  arguments?: { [x: string]: unknown } | undefined
                }
              | { type: 'web_search' }
              | {
                  type: 'approval'
                  call_id: string
                  calls: { function_name: string; arguments: { [x: string]: unknown } }[]
                  expires_at: string
                }
              | {
                  type: 'question'
                  call_id: string
                  question: string
                  choices?: string[] | undefined
                  multi_select?: boolean | undefined
                  expires_at: string
                }
              | { type: 'message' }
            )[]
          | undefined
        agent_actions_success?: (boolean | null)[] | undefined
      }
    | undefined
  failure_module: {
    type:
      | 'WaitingForPriorSteps'
      | 'WaitingForEvents'
      | 'WaitingForExecutor'
      | 'InProgress'
      | 'Success'
      | 'Failure'
    id?: string | undefined
    job?: string | undefined
    count?: number | undefined
    progress?: number | undefined
    iterator?:
      | {
          index?: number | undefined
          itered?: { [x: string]: unknown }[] | undefined
          itered_len?: number | undefined
          args?: { [x: string]: unknown } | undefined
        }
      | undefined
    flow_jobs?: string[] | undefined
    flow_jobs_success?: boolean[] | undefined
    flow_jobs_labels?: (string | null)[] | undefined
    flow_jobs_duration?:
      | { started_at?: string[] | undefined; duration_ms?: number[] | undefined }
      | undefined
    branch_chosen?: { type: 'branch' | 'default'; branch?: number | undefined } | undefined
    branchall?: { branch: number; len: number } | undefined
    approvers?: { resume_id: number; approver: string }[] | undefined
    failed_retries?: string[] | undefined
    skipped?: boolean | undefined
    agent_actions?:
      | (
          | { job_id: string; function_name: string; type: 'tool_call'; module_id: string }
          | {
              call_id: string
              function_name: string
              resource_path: string
              type: 'mcp_tool_call'
              arguments?: { [x: string]: unknown } | undefined
            }
          | { type: 'web_search' }
          | {
              type: 'approval'
              call_id: string
              calls: { function_name: string; arguments: { [x: string]: unknown } }[]
              expires_at: string
            }
          | {
              type: 'question'
              call_id: string
              question: string
              choices?: string[] | undefined
              multi_select?: boolean | undefined
              expires_at: string
            }
          | { type: 'message' }
        )[]
      | undefined
    agent_actions_success?: (boolean | null)[] | undefined
    parent_module?: string | undefined
  }
  retry?: { fail_count?: number | undefined; failed_jobs?: string[] | undefined } | undefined
  continued_on_error?: { id: string; job: string }[] | undefined
  test_subflows?: { [x: string]: { [x: string]: unknown } } | undefined
}
type WorkflowStatus = {
  scheduled_for?: string | undefined
  started_at?: string | undefined
  duration_ms?: number | undefined
  name?: string | undefined
}
type JobTriggerKind =
  | 'webhook'
  | 'default_email'
  | 'email'
  | 'schedule'
  | 'http'
  | 'websocket'
  | 'postgres'
  | 'kafka'
  | 'nats'
  | 'mqtt'
  | 'amqp'
  | 'sqs'
  | 'gcp'
  | 'azure'
  | 'google'
  | 'github'
  | 'asset'
  | 'freshness'
  | 'app'
  | 'ui'
type QueuedJob = {
  workspace_id?: string | undefined
  id: string
  parent_job?: string | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  started_at?: string | undefined
  scheduled_for?: string | undefined
  running: boolean
  script_path?: string | undefined
  script_hash?: string | undefined
  args?: ScriptArgs | undefined
  logs?: string | undefined
  raw_code?: string | undefined
  canceled: boolean
  canceled_by?: string | undefined
  canceled_reason?: string | undefined
  last_ping?: string | undefined
  job_kind:
    | 'script'
    | 'preview'
    | 'dependencies'
    | 'flowdependencies'
    | 'appdependencies'
    | 'flow'
    | 'flowpreview'
    | 'script_hub'
    | 'identity'
    | 'deploymentcallback'
    | 'singlestepflow'
    | 'flowscript'
    | 'flownode'
    | 'appscript'
    | 'aiagent'
    | 'unassigned_script'
    | 'unassigned_flow'
    | 'unassigned_singlestepflow'
  schedule_path?: string | undefined
  permissioned_as: string
  flow_status?: FlowStatus | undefined
  workflow_as_code_status?: WorkflowStatus | undefined
  raw_flow?: FlowValue | undefined
  is_flow_step: boolean
  language?: ScriptLang | undefined
  email: string
  visible_to_owner: boolean
  mem_peak?: number | undefined
  tag: string
  priority?: number | undefined
  self_wait_time_ms?: number | undefined
  aggregate_wait_time_ms?: number | undefined
  suspend?: number | undefined
  preprocessed?: boolean | undefined
  is_retry?: boolean | undefined
  trigger_kind?: JobTriggerKind | undefined
  trigger_path?: string | undefined
  worker?: string | undefined
}
type CompletedJob = {
  workspace_id?: string | undefined
  id: string
  parent_job?: string | undefined
  created_by: string
  created_at: string
  started_at: string
  completed_at?: string | undefined
  duration_ms: number
  success: boolean
  script_path?: string | undefined
  script_hash?: string | undefined
  args?: ScriptArgs | undefined
  result?: { [x: string]: unknown } | undefined
  logs?: string | undefined
  deleted?: boolean | undefined
  raw_code?: string | undefined
  canceled: boolean
  canceled_by?: string | undefined
  canceled_reason?: string | undefined
  job_kind:
    | 'script'
    | 'preview'
    | 'dependencies'
    | 'flow'
    | 'flowdependencies'
    | 'appdependencies'
    | 'flowpreview'
    | 'script_hub'
    | 'identity'
    | 'deploymentcallback'
    | 'singlestepflow'
    | 'flowscript'
    | 'flownode'
    | 'appscript'
    | 'aiagent'
    | 'unassigned_script'
    | 'unassigned_flow'
    | 'unassigned_singlestepflow'
  schedule_path?: string | undefined
  permissioned_as: string
  flow_status?: FlowStatus | undefined
  workflow_as_code_status?: WorkflowStatus | undefined
  raw_flow?: FlowValue | undefined
  is_flow_step: boolean
  language?: ScriptLang | undefined
  is_skipped: boolean
  email: string
  visible_to_owner: boolean
  mem_peak?: number | undefined
  tag: string
  priority?: number | undefined
  labels?: string[] | undefined
  self_wait_time_ms?: number | undefined
  aggregate_wait_time_ms?: number | undefined
  preprocessed?: boolean | undefined
  is_retry?: boolean | undefined
  resolved?: boolean | undefined
  resolved_by?: string | undefined
  resolved_at?: string | undefined
  resolution_note?: string | undefined
  resolved_automatically?: boolean | undefined
  trigger_kind?: JobTriggerKind | undefined
  trigger_path?: string | undefined
  worker?: string | undefined
}
type ExportableCompletedJob = {
  id: string
  parent_job?: string | undefined
  created_by: string
  created_at: string
  started_at?: string | undefined
  completed_at?: string | undefined
  duration_ms?: number | undefined
  script_path?: string | undefined
  script_hash?: string | undefined
  args?: { [x: string]: unknown } | undefined
  result?: { [x: string]: unknown } | undefined
  logs?: string | undefined
  raw_code?: string | undefined
  raw_lock?: string | undefined
  canceled_by?: string | undefined
  canceled_reason?: string | undefined
  job_kind:
    | 'script'
    | 'preview'
    | 'dependencies'
    | 'flow'
    | 'flowdependencies'
    | 'appdependencies'
    | 'flowpreview'
    | 'script_hub'
    | 'identity'
    | 'deploymentcallback'
    | 'singlestepflow'
    | 'flowscript'
    | 'flownode'
    | 'appscript'
    | 'aiagent'
    | 'unassigned_script'
    | 'unassigned_flow'
    | 'unassigned_singlestepflow'
  trigger?: string | undefined
  trigger_kind?:
    | 'webhook'
    | 'http'
    | 'websocket'
    | 'kafka'
    | 'email'
    | 'nats'
    | 'schedule'
    | 'app'
    | 'ui'
    | 'postgres'
    | 'sqs'
    | 'gcp'
    | undefined
  permissioned_as: string
  permissioned_as_email?: string | undefined
  flow_status?: { [x: string]: unknown } | undefined
  workflow_as_code_status?: { [x: string]: unknown } | undefined
  raw_flow?: { [x: string]: unknown } | undefined
  is_flow_step?: boolean | undefined
  language?: ScriptLang | undefined
  is_skipped?: boolean | undefined
  email: string
  visible_to_owner: boolean
  mem_peak?: number | undefined
  tag?: string | undefined
  priority?: number | undefined
  labels?: string[] | undefined
  same_worker?: boolean | undefined
  flow_step_id?: string | undefined
  flow_innermost_root_job?: string | undefined
  concurrent_limit?: number | undefined
  concurrency_time_window_s?: number | undefined
  timeout?: number | undefined
  cache_ttl?: number | undefined
  self_wait_time_ms?: number | undefined
  aggregate_wait_time_ms?: number | undefined
  preprocessed?: boolean | undefined
  worker?: string | undefined
  status?: string | undefined
}
type ExportableQueuedJob = {
  id: string
  parent_job?: string | undefined
  created_by: string
  created_at: string
  started_at?: string | undefined
  scheduled_for?: string | undefined
  script_path?: string | undefined
  script_hash?: string | undefined
  args?: { [x: string]: unknown } | undefined
  logs?: string | undefined
  raw_code?: string | undefined
  raw_lock?: string | undefined
  canceled_by?: string | undefined
  canceled_reason?: string | undefined
  job_kind:
    | 'script'
    | 'preview'
    | 'dependencies'
    | 'flowdependencies'
    | 'appdependencies'
    | 'flow'
    | 'flowpreview'
    | 'script_hub'
    | 'identity'
    | 'deploymentcallback'
    | 'singlestepflow'
    | 'flowscript'
    | 'flownode'
    | 'appscript'
    | 'aiagent'
    | 'unassigned_script'
    | 'unassigned_flow'
    | 'unassigned_singlestepflow'
  trigger?: string | undefined
  trigger_kind?:
    | 'webhook'
    | 'http'
    | 'websocket'
    | 'kafka'
    | 'email'
    | 'nats'
    | 'schedule'
    | 'app'
    | 'ui'
    | 'postgres'
    | 'sqs'
    | 'gcp'
    | undefined
  permissioned_as: string
  permissioned_as_email?: string | undefined
  flow_status?: { [x: string]: unknown } | undefined
  workflow_as_code_status?: { [x: string]: unknown } | undefined
  raw_flow?: { [x: string]: unknown } | undefined
  is_flow_step?: boolean | undefined
  language?: ScriptLang | undefined
  email: string
  visible_to_owner: boolean
  mem_peak?: number | undefined
  tag?: string | undefined
  priority?: number | undefined
  labels?: string[] | undefined
  same_worker?: boolean | undefined
  flow_step_id?: string | undefined
  flow_innermost_root_job?: string | undefined
  concurrent_limit?: number | undefined
  concurrency_time_window_s?: number | undefined
  timeout?: number | undefined
  cache_ttl?: number | undefined
  self_wait_time_ms?: number | undefined
  aggregate_wait_time_ms?: number | undefined
  preprocessed?: boolean | undefined
  suspend?: number | undefined
  suspend_until?: string | undefined
}
type RecentRunStatus = 'success' | 'failure' | 'resolved' | 'canceled' | 'running'
type RecentRunHiddenItem = {
  kind: 'script' | 'flow' | 'agent'
  path: string
  summary?: string | undefined
}
type RecentRunItemRefs = { items: { kind: 'script' | 'flow' | 'agent'; path: string }[] }
type Job =
  | {
      workspace_id?: string | undefined
      id: string
      parent_job?: string | undefined
      created_by: string
      created_at: string
      started_at: string
      completed_at?: string | undefined
      duration_ms: number
      success: boolean
      script_path?: string | undefined
      script_hash?: string | undefined
      args?: ScriptArgs | undefined
      result?: { [x: string]: unknown } | undefined
      logs?: string | undefined
      deleted?: boolean | undefined
      raw_code?: string | undefined
      canceled: boolean
      canceled_by?: string | undefined
      canceled_reason?: string | undefined
      job_kind:
        | 'script'
        | 'preview'
        | 'dependencies'
        | 'flow'
        | 'flowdependencies'
        | 'appdependencies'
        | 'flowpreview'
        | 'script_hub'
        | 'identity'
        | 'deploymentcallback'
        | 'singlestepflow'
        | 'flowscript'
        | 'flownode'
        | 'appscript'
        | 'aiagent'
        | 'unassigned_script'
        | 'unassigned_flow'
        | 'unassigned_singlestepflow'
      schedule_path?: string | undefined
      permissioned_as: string
      flow_status?: FlowStatus | undefined
      workflow_as_code_status?: WorkflowStatus | undefined
      raw_flow?: FlowValue | undefined
      is_flow_step: boolean
      language?: ScriptLang | undefined
      is_skipped: boolean
      email: string
      visible_to_owner: boolean
      mem_peak?: number | undefined
      tag: string
      priority?: number | undefined
      labels?: string[] | undefined
      self_wait_time_ms?: number | undefined
      aggregate_wait_time_ms?: number | undefined
      preprocessed?: boolean | undefined
      is_retry?: boolean | undefined
      resolved?: boolean | undefined
      resolved_by?: string | undefined
      resolved_at?: string | undefined
      resolution_note?: string | undefined
      resolved_automatically?: boolean | undefined
      trigger_kind?: JobTriggerKind | undefined
      trigger_path?: string | undefined
      worker?: string | undefined
      type?: 'CompletedJob' | undefined
    }
  | {
      workspace_id?: string | undefined
      id: string
      parent_job?: string | undefined
      created_by?: string | undefined
      created_at?: string | undefined
      started_at?: string | undefined
      scheduled_for?: string | undefined
      running: boolean
      script_path?: string | undefined
      script_hash?: string | undefined
      args?: ScriptArgs | undefined
      logs?: string | undefined
      raw_code?: string | undefined
      canceled: boolean
      canceled_by?: string | undefined
      canceled_reason?: string | undefined
      last_ping?: string | undefined
      job_kind:
        | 'script'
        | 'preview'
        | 'dependencies'
        | 'flowdependencies'
        | 'appdependencies'
        | 'flow'
        | 'flowpreview'
        | 'script_hub'
        | 'identity'
        | 'deploymentcallback'
        | 'singlestepflow'
        | 'flowscript'
        | 'flownode'
        | 'appscript'
        | 'aiagent'
        | 'unassigned_script'
        | 'unassigned_flow'
        | 'unassigned_singlestepflow'
      schedule_path?: string | undefined
      permissioned_as: string
      flow_status?: FlowStatus | undefined
      workflow_as_code_status?: WorkflowStatus | undefined
      raw_flow?: FlowValue | undefined
      is_flow_step: boolean
      language?: ScriptLang | undefined
      email: string
      visible_to_owner: boolean
      mem_peak?: number | undefined
      tag: string
      priority?: number | undefined
      self_wait_time_ms?: number | undefined
      aggregate_wait_time_ms?: number | undefined
      suspend?: number | undefined
      preprocessed?: boolean | undefined
      is_retry?: boolean | undefined
      trigger_kind?: JobTriggerKind | undefined
      trigger_path?: string | undefined
      worker?: string | undefined
      type?: 'QueuedJob' | undefined
    }
type NewSchedule = {
  path: string
  schedule: string
  timezone: string
  script_path: string
  is_flow: boolean
  args: ScriptArgs
  enabled?: boolean | undefined
  on_failure?: (string | null) | undefined
  on_failure_times?: (number | null) | undefined
  on_failure_exact?: (boolean | null) | undefined
  on_failure_extra_args?: ScriptArgs | undefined
  on_recovery?: (string | null) | undefined
  on_recovery_times?: (number | null) | undefined
  on_recovery_extra_args?: ScriptArgs | undefined
  on_success?: (string | null) | undefined
  on_success_extra_args?: ScriptArgs | undefined
  ws_error_handler_muted?: boolean | undefined
  retry?: Retry | undefined
  no_flow_overlap?: boolean | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  tag?: (string | null) | undefined
  paused_until?: (string | null) | undefined
  cron_version?: (string | null) | undefined
  dynamic_skip?: (string | null) | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditSchedule = {
  schedule: string
  timezone: string
  args: ScriptArgs
  on_failure?: (string | null) | undefined
  on_failure_times?: (number | null) | undefined
  on_failure_exact?: (boolean | null) | undefined
  on_failure_extra_args?: ScriptArgs | undefined
  on_recovery?: (string | null) | undefined
  on_recovery_times?: (number | null) | undefined
  on_recovery_extra_args?: ScriptArgs | undefined
  on_success?: (string | null) | undefined
  on_success_extra_args?: ScriptArgs | undefined
  ws_error_handler_muted?: boolean | undefined
  retry?: Retry | undefined
  no_flow_overlap?: boolean | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  tag?: (string | null) | undefined
  paused_until?: (string | null) | undefined
  cron_version?: (string | null) | undefined
  dynamic_skip?: (string | null) | undefined
  permissioned_as?: (string | null) | undefined
  preserve_permissioned_as?: (boolean | null) | undefined
  labels?: string[] | undefined
}
type Schedule = {
  path: string
  edited_by: string
  edited_at: string
  schedule: string
  timezone: string
  enabled: boolean
  script_path: string
  is_flow: boolean
  args?: ScriptArgs | undefined
  extra_perms: { [x: string]: boolean }
  email: string
  permissioned_as: string
  error?: (string | null) | undefined
  on_failure?: (string | null) | undefined
  on_failure_times?: (number | null) | undefined
  on_failure_exact?: (boolean | null) | undefined
  on_failure_extra_args?: ScriptArgs | undefined
  on_recovery?: (string | null) | undefined
  on_recovery_times?: (number | null) | undefined
  on_recovery_extra_args?: ScriptArgs | undefined
  on_success?: (string | null) | undefined
  on_success_extra_args?: ScriptArgs | undefined
  ws_error_handler_muted?: boolean | undefined
  retry?: Retry | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  no_flow_overlap?: boolean | undefined
  tag?: (string | null) | undefined
  paused_until?: (string | null) | undefined
  cron_version?: (string | null) | undefined
  dynamic_skip?: (string | null) | undefined
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
  inherited_labels?: string[] | undefined
}
type ScheduleWJobs = {
  path: string
  edited_by: string
  edited_at: string
  schedule: string
  timezone: string
  enabled: boolean
  script_path: string
  is_flow: boolean
  args?: ScriptArgs | undefined
  extra_perms: { [x: string]: boolean }
  email: string
  permissioned_as: string
  error?: (string | null) | undefined
  on_failure?: (string | null) | undefined
  on_failure_times?: (number | null) | undefined
  on_failure_exact?: (boolean | null) | undefined
  on_failure_extra_args?: ScriptArgs | undefined
  on_recovery?: (string | null) | undefined
  on_recovery_times?: (number | null) | undefined
  on_recovery_extra_args?: ScriptArgs | undefined
  on_success?: (string | null) | undefined
  on_success_extra_args?: ScriptArgs | undefined
  ws_error_handler_muted?: boolean | undefined
  retry?: Retry | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  no_flow_overlap?: boolean | undefined
  tag?: (string | null) | undefined
  paused_until?: (string | null) | undefined
  cron_version?: (string | null) | undefined
  dynamic_skip?: (string | null) | undefined
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
  inherited_labels?: string[] | undefined
  jobs?: { id: string; success: boolean; duration_ms: number }[] | undefined
  late_run_streak?: number | undefined
  missed_occurrences?: number | undefined
  last_missed_at?: string | undefined
}
type OpenapiV3Info = {
  title: string
  version: string
  description?: string | undefined
  terms_of_service?: string | undefined
  contact?:
    | { name?: string | undefined; url?: string | undefined; email?: string | undefined }
    | undefined
  license?: { name: string; identifier?: string | undefined; url?: string | undefined } | undefined
}
type OpenapiSpecFormat = 'yaml' | 'json'
type OpenapiHttpRouteFilters = {
  folder_regex: string
  path_regex: string
  route_path_regex: string
}
type WebhookFilters = {
  user_or_folder_regex: '*' | 'u' | 'f'
  user_or_folder_regex_value: string
  path: string
  runnable_kind: RunnableKind
}
type GenerateOpenapiSpec = {
  info?: OpenapiV3Info | undefined
  url?: string | undefined
  openapi_spec_format?: OpenapiSpecFormat | undefined
  http_route_filters?: OpenapiHttpRouteFilters[] | undefined
  webhook_filters?: WebhookFilters[] | undefined
}
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'
type HttpRequestType = 'sync' | 'async' | 'sync_sse'
type AuthenticationMethod =
  | 'none'
  | 'windmill'
  | 'api_key'
  | 'basic_http'
  | 'custom_script'
  | 'signature'
type TriggerMode = 'enabled' | 'disabled' | 'suspended'
type NewHttpTrigger = {
  path: string
  script_path: string
  route_path: string
  workspaced_route?: boolean | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  static_asset_config?:
    | ({ s3: string; storage?: string | undefined; filename?: string | undefined } | null)
    | undefined
  is_flow: boolean
  http_method: HttpMethod
  authentication_resource_path?: (string | null) | undefined
  is_async?: boolean | undefined
  request_type?: HttpRequestType | undefined
  authentication_method: AuthenticationMethod
  is_static_website: boolean
  wrap_body?: boolean | undefined
  mode?: TriggerMode | undefined
  raw_string?: boolean | undefined
  allowed_origins?: (string[] | null) | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditHttpTrigger = {
  path: string
  script_path: string
  route_path?: string | undefined
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  workspaced_route?: boolean | undefined
  static_asset_config?:
    | ({ s3: string; storage?: string | undefined; filename?: string | undefined } | null)
    | undefined
  authentication_resource_path?: (string | null) | undefined
  is_flow: boolean
  http_method: HttpMethod
  is_async?: boolean | undefined
  request_type?: HttpRequestType | undefined
  authentication_method: AuthenticationMethod
  is_static_website: boolean
  wrap_body?: boolean | undefined
  raw_string?: boolean | undefined
  allowed_origins?: (string[] | null) | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type HttpTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type TriggerFilter =
  | { key: string; value: { [x: string]: unknown } }
  | { path: string; value: { [x: string]: unknown } }
  | { any_of: TriggerFilter[] }
  | { all_of: TriggerFilter[] }
  | { none_of: TriggerFilter[] }
type WebsocketTriggerInitialMessage =
  | { raw_message: string }
  | { runnable_result: { path: string; args: ScriptArgs; is_flow: boolean } }
type WebsocketHeartbeat = {
  interval_secs: number
  message: string
  state_field?: string | undefined
}
type NewWebsocketTrigger = {
  path: string
  script_path: string
  is_flow: boolean
  url: string
  mode?: TriggerMode | undefined
  filters: TriggerFilter[]
  filter_logic?: 'and' | 'or' | undefined
  run_on_filter_error?: boolean | undefined
  initial_messages?: (WebsocketTriggerInitialMessage[] | null) | undefined
  url_runnable_args?: ScriptArgs | undefined
  can_return_message: boolean
  can_return_error_result: boolean
  heartbeat?: WebsocketHeartbeat | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditWebsocketTrigger = {
  url: string
  path: string
  script_path: string
  is_flow: boolean
  filters: TriggerFilter[]
  filter_logic?: 'and' | 'or' | undefined
  run_on_filter_error?: boolean | undefined
  initial_messages?: (WebsocketTriggerInitialMessage[] | null) | undefined
  url_runnable_args?: ScriptArgs | undefined
  can_return_message: boolean
  can_return_error_result: boolean
  heartbeat?: WebsocketHeartbeat | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type WebsocketTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type NewKafkaTrigger = {
  path: string
  script_path: string
  is_flow: boolean
  kafka_resource_path: string
  group_id: string
  topics: string[]
  filters: TriggerFilter[]
  filter_logic?: 'and' | 'or' | undefined
  run_on_filter_error?: boolean | undefined
  auto_offset_reset?: 'latest' | 'earliest' | undefined
  auto_commit?: boolean | undefined
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditKafkaTrigger = {
  kafka_resource_path: string
  group_id: string
  topics: string[]
  filters: TriggerFilter[]
  filter_logic?: 'and' | 'or' | undefined
  run_on_filter_error?: boolean | undefined
  auto_offset_reset?: 'latest' | 'earliest' | undefined
  auto_commit?: boolean | undefined
  path: string
  script_path: string
  is_flow: boolean
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type KafkaTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type NewNatsTrigger = {
  path: string
  script_path: string
  is_flow: boolean
  nats_resource_path: string
  use_jetstream: boolean
  stream_name?: (string | null) | undefined
  consumer_name?: (string | null) | undefined
  subjects: string[]
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditNatsTrigger = {
  nats_resource_path: string
  use_jetstream: boolean
  stream_name?: (string | null) | undefined
  consumer_name?: (string | null) | undefined
  subjects: string[]
  path: string
  script_path: string
  is_flow: boolean
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type NatsTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type AwsAuthResourceType = 'oidc' | 'credentials'
type NewSqsTrigger = {
  queue_url: string
  aws_auth_resource_type: AwsAuthResourceType
  aws_resource_path: string
  message_attributes?: (string[] | null) | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditSqsTrigger = {
  queue_url: string
  aws_auth_resource_type: AwsAuthResourceType
  aws_resource_path: string
  message_attributes?: (string[] | null) | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type SqsTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type NativeServiceName = 'nextcloud' | 'google' | 'github'
type WorkspaceOAuthConfig = {
  client_id: string
  client_secret: string
  base_url: string
  redirect_uri?: string | undefined
}
type WorkspaceIntegrations = {
  service_name: NativeServiceName
  oauth_data?: WorkspaceOAuthConfig | undefined
}
type NativeTriggerConnection = {
  path: string
  owner?: (string | null) | undefined
  workspace: boolean
  managed: boolean
  scopes?: (string[] | null) | undefined
  missing_scopes?: (string[] | null) | undefined
}
type NativeTriggerData = {
  script_path: string
  is_flow: boolean
  service_config: { [x: string]: unknown }
  summary?: (string | null) | undefined
  enabled?: boolean | undefined
  connection_path?: (string | null) | undefined
}
type CreateTriggerResponse = { external_id: string }
type NativeTriggerWithExternal = {
  external_id: string
  workspace_id: string
  service_name: NativeServiceName
  script_path: string
  is_flow: boolean
  service_config: { [x: string]: unknown }
  error?: (string | null) | undefined
  summary?: (string | null) | undefined
  enabled: boolean
  connection_path?: (string | null) | undefined
  external_data: { [x: string]: unknown } | null
  external_error?: (string | null) | undefined
}
type NativeTrigger = {
  external_id: string
  workspace_id: string
  service_name: NativeServiceName
  script_path: string
  is_flow: boolean
  service_config: { [x: string]: unknown }
  error?: (string | null) | undefined
  summary?: (string | null) | undefined
  enabled: boolean
  connection_path?: (string | null) | undefined
}
type NextCloudEventType = {
  id: string
  name: string
  description?: string | undefined
  category?: string | undefined
  path: string
}
type GoogleCalendarEntry = { id: string; summary: string; primary?: boolean | undefined }
type GoogleDriveFile = {
  id: string
  name: string
  mime_type: string
  is_folder?: boolean | undefined
}
type GoogleDriveFilesResponse = { files: GoogleDriveFile[]; next_page_token?: string | undefined }
type SharedDriveEntry = { id: string; name: string }
type GithubRepoEntry = { full_name: string; name: string; owner: string; private: boolean }
type MqttQoS = 'qos0' | 'qos1' | 'qos2'
type MqttSubscribeTopic = { qos: MqttQoS; topic: string }
type MqttV3Config = { clean_session?: boolean | undefined }
type MqttV5Config = {
  clean_start?: boolean | undefined
  topic_alias_maximum?: number | undefined
  session_expiry_interval?: number | undefined
}
type MqttClientVersion = 'v3' | 'v5'
type NewMqttTrigger = {
  mqtt_resource_path: string
  subscribe_topics: MqttSubscribeTopic[]
  client_id?: (string | null) | undefined
  v3_config?: MqttV3Config | undefined
  v5_config?: MqttV5Config | undefined
  client_version?: MqttClientVersion | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditMqttTrigger = {
  mqtt_resource_path: string
  subscribe_topics: MqttSubscribeTopic[]
  client_id?: (string | null) | undefined
  v3_config?: MqttV3Config | undefined
  v5_config?: MqttV5Config | undefined
  client_version?: MqttClientVersion | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type MqttTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type AmqpExchange = { exchange_name: string; routing_keys?: string[] | undefined }
type AmqpOptions = { declare_queue?: boolean | undefined; prefetch_count?: number | undefined }
type NewAmqpTrigger = {
  amqp_resource_path: string
  queue_name: string
  exchange?: AmqpExchange | undefined
  options?: AmqpOptions | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditAmqpTrigger = {
  amqp_resource_path: string
  queue_name: string
  exchange?: AmqpExchange | undefined
  options?: AmqpOptions | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type AmqpTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type SubscriptionMode = 'existing' | 'create_update'
type DeliveryType = 'push' | 'pull'
type PushConfig = { audience?: string | undefined; authenticate: boolean }
type GcpTriggerData = {
  gcp_resource_path?: string | undefined
  project_id?: string | undefined
  subscription_mode: SubscriptionMode
  topic_id: string
  subscription_id?: string | undefined
  base_endpoint?: string | undefined
  delivery_type?: DeliveryType | undefined
  delivery_config?: PushConfig | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  auto_acknowledge_msg?: boolean | undefined
  ack_deadline?: number | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type GcpTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type DeleteGcpSubscription = { subscription_id: string; project_id?: string | undefined }
type GetAllTopicSubscription = { topic_id: string; project_id?: string | undefined }
type AzureMode = 'basic_push' | 'namespace_push' | 'namespace_pull'
type AzureTriggerData = {
  azure_resource_path: string
  azure_mode: AzureMode
  scope_resource_id: string
  topic_name?: (string | null) | undefined
  subscription_name: string
  base_endpoint?: string | undefined
  event_type_filters?: string[] | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type AzureTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type TestAzureConnection = { azure_resource_path: string }
type AzureListTopics = { scope_resource_id: string }
type AzureListSubscriptions = { scope_resource_id: string; topic_name: string }
type AzureDeleteSubscription = {
  azure_mode: AzureMode
  scope_resource_id: string
  topic_name?: (string | null) | undefined
  subscription_name: string
}
type AzureArmResource = { id: string; name: string; location?: string | undefined; type: string }
type TableToTrack = {
  table_name: string
  columns_name?: string[] | undefined
  where_clause?: string | undefined
}[]
type Relations = { schema_name: string; table_to_track: TableToTrack }
type Language = 'Typescript'
type TemplateScript = { postgres_resource_path: string; relations: Relations[]; language: Language }
type SlotList = { slot_name?: string | undefined; active?: boolean | undefined }
type Slot = { name?: string | undefined }
type PublicationData = { table_to_track?: Relations[] | undefined; transaction_to_track: string[] }
type NewPostgresTrigger = {
  replication_slot_name?: string | undefined
  publication_name?: string | undefined
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  postgres_resource_path: string
  publication?: PublicationData | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditPostgresTrigger = {
  replication_slot_name: string
  publication_name: string
  path: string
  script_path: string
  is_flow: boolean
  mode?: TriggerMode | undefined
  postgres_resource_path: string
  publication?: PublicationData | undefined
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type PostgresTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type NewEmailTrigger = {
  path: string
  script_path: string
  local_part: string
  workspaced_local_part?: boolean | undefined
  is_flow: boolean
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  mode?: TriggerMode | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EditEmailTrigger = {
  path: string
  script_path: string
  local_part?: string | undefined
  workspaced_local_part?: boolean | undefined
  is_flow: boolean
  error_handler_path?: string | undefined
  error_handler_args?: ScriptArgs | undefined
  retry?: Retry | undefined
  permissioned_as?: string | undefined
  preserve_permissioned_as?: boolean | undefined
  labels?: string[] | undefined
}
type EmailTrigger = {
  path: string
  script_path: string
  permissioned_as: string
  extra_perms: { [x: string]: boolean }
  workspace_id: string
  edited_by: string
  edited_at: string
  is_flow: boolean
  mode: TriggerMode
  labels?: string[] | undefined
  draft_only?: boolean | undefined
  is_draft?: boolean | undefined
}
type InstanceGroup = {
  name: string
  summary?: string | undefined
  emails?: string[] | undefined
  instance_role?: 'superadmin' | 'devops' | undefined
  external_id?: (string | null) | undefined
  scim_managed?: boolean | undefined
}
type WorkspaceInfo = {
  workspace_id?: string | undefined
  workspace_name?: string | undefined
  role?: string | undefined
}
type InstanceGroupWithWorkspaces = {
  name: string
  summary?: string | undefined
  emails?: string[] | undefined
  instance_role?: 'superadmin' | 'devops' | undefined
  external_id?: (string | null) | undefined
  scim_managed?: boolean | undefined
  workspaces?: WorkspaceInfo[] | undefined
}
type ExportedInstanceGroup = {
  name: string
  summary?: string | undefined
  emails?: string[] | undefined
  id?: string | undefined
  scim_display_name?: string | undefined
  external_id?: string | undefined
  instance_role?: 'superadmin' | 'devops' | undefined
}
type Group = {
  name: string
  summary?: string | undefined
  members?: string[] | undefined
  extra_perms?: { [x: string]: boolean } | undefined
}
type TriggerHistoryEntry = {
  id: bigint
  trigger_kind: string
  path: string
  operation: 'create' | 'update' | 'delete' | 'enable' | 'disable' | 'suspend'
  source: 'ui' | 'cli' | 'api' | 'worker'
  username?: (string | null) | undefined
  created_at: string
  changes?: ({ [x: string]: unknown } | null) | undefined
}
type FolderDefaultPermissionedAs = { path_glob: string; permissioned_as: string }[]
type Folder = {
  name: string
  display_name?: string | undefined
  owners: string[]
  extra_perms: { [x: string]: boolean }
  summary?: string | undefined
  created_by?: string | undefined
  edited_at?: string | undefined
  default_permissioned_as?: FolderDefaultPermissionedAs | undefined
  labels?: string[] | undefined
}
type WorkerJobCounts = { executed: number; failed: number }
type WorkerPing = {
  worker: string
  worker_instance: string
  last_ping?: number | undefined
  started_at: string
  ip: string
  jobs_executed: number
  custom_tags?: string[] | undefined
  worker_group: string
  wm_version: string
  last_job_id?: string | undefined
  last_job_workspace_id?: string | undefined
  occupancy_rate?: number | undefined
  occupancy_rate_15s?: number | undefined
  occupancy_rate_5m?: number | undefined
  occupancy_rate_30m?: number | undefined
  memory?: number | undefined
  vcpus?: number | undefined
  memory_usage?: number | undefined
  wm_memory_usage?: number | undefined
  job_isolation?: string | undefined
  native_mode?: boolean | undefined
  draining?: boolean | undefined
  job_stats?:
    | { total: WorkerJobCounts; last_24h: WorkerJobCounts; last_100: WorkerJobCounts }
    | undefined
}
type RunnableStats = {
  workspace_id: string
  runnable_path: string
  worker_group: string
  job_count: number
  total_duration_ms: number
  max_memory_peak: number
  sum_memory_peak: number
  memory_sample_count: number
  total_cpu_ms: number
}
type Alert = {
  name: string
  tags_to_monitor: string[]
  jobs_num_threshold: number
  alert_cooldown_seconds: number
  alert_time_threshold_seconds: number
}
type Configs = { alerts?: Alert[] | undefined } | null
type Config = { name: string; config?: { [x: string]: unknown } | undefined }
type AutoscalingEvent = {
  id?: bigint | undefined
  worker_group?: string | undefined
  event_type?: string | undefined
  desired_workers?: number | undefined
  reason?: string | undefined
  applied_at?: string | undefined
}
type AutoscalingDecision = {
  recorded_at: string
  worker_count: number
  occupancy_rate_15s?: (number | null) | undefined
  occupancy_rate_5m?: (number | null) | undefined
  occupancy_rate_30m?: (number | null) | undefined
  jobs_waiting: { [x: string]: number }
  decision: string
}
type AutoscalingDiagnostics = {
  recording_until?: (string | null) | undefined
  recording_started_by?: (string | null) | undefined
  decision_count: bigint
  decisions: AutoscalingDecision[]
}
type AccessReason = {
  type: 'own' | 'group_path' | 'user' | 'group' | 'folder'
  group?: string | undefined
  folder?: string | undefined
  write?: boolean | undefined
}
type PrincipalAccess = {
  principal: string
  is_admin: boolean
  groups: string[]
  folders: { name: string; write: boolean; owner: boolean; via: string[] }[]
  items: { kind: string; path: string; write: boolean; reasons: AccessReason[] }[]
}
type CaptureTriggerKind =
  | 'webhook'
  | 'http'
  | 'websocket'
  | 'kafka'
  | 'default_email'
  | 'nats'
  | 'postgres'
  | 'sqs'
  | 'mqtt'
  | 'amqp'
  | 'gcp'
  | 'azure'
  | 'email'
type CaptureConfig = {
  trigger_config?: { [x: string]: unknown } | undefined
  trigger_kind: CaptureTriggerKind
  error?: string | undefined
  last_server_ping?: string | undefined
}
type Capture = {
  trigger_kind: CaptureTriggerKind
  main_args: { [x: string]: unknown }
  preprocessor_args: { [x: string]: unknown }
  id: number
  created_at: string
}
type RunnableType = 'ScriptHash' | 'ScriptPath' | 'FlowPath'
type Input = {
  id: string
  name: string
  created_by: string
  created_at: string
  is_public: boolean
  success?: boolean | undefined
}
type CreateInput = { name: string; args: { [x: string]: unknown } }
type UpdateInput = { id: string; name: string; is_public: boolean }
type S3Resource = {
  bucket: string
  region: string
  endPoint: string
  useSSL: boolean
  accessKey?: string | undefined
  secretKey?: string | undefined
  pathStyle: boolean
}
type PolarsClientKwargs = { region_name: string }
type WindmillLargeFile = { s3: string }
type StorageFolder = { prefix: string; name: string }
type StorageFile = {
  key: string
  name: string
  size?: number | undefined
  last_modified?: string | undefined
}
type MetricMetadata = { id: string; name?: string | undefined }
type ScalarMetric = { metric_id?: string | undefined; value: number }
type MetricDataPoint = { timestamp: string; value: number }
type TimeseriesMetric = { metric_id?: string | undefined; values: MetricDataPoint[] }
type ConcurrencyGroup = { concurrency_key: string; total_running: number }
type ObscuredJob = {
  typ?: string | undefined
  started_at?: string | undefined
  duration_ms?: number | undefined
}
type ExtendedJobs = {
  jobs: Job[]
  obscured_jobs: ObscuredJob[]
  omitted_obscured_jobs?: boolean | undefined
}
type JobSearchHit = { dancer?: string | undefined }
type LogSearchHit = {
  ts: string
  host: string
  level: 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'
  target?: (string | null) | undefined
  message: string
  file_path: string
  line_no: number
}
type AssetUsageKind = 'script' | 'flow' | 'job'
type AssetUsageAccessType = 'r' | 'w' | 'rw'
type DbtAssetProvenance = {
  unique_id: string
  resource_type: 'model' | 'snapshot' | 'seed' | 'source'
  materialized?: string | undefined
  materialize_strategy?: string | undefined
  tags?: string[] | undefined
  description?: string | undefined
  data_tests?:
    | {
        kind: string
        column?: string | undefined
        args?: { [x: string]: unknown } | undefined
        severity?: string | undefined
      }[]
    | undefined
  columns?: { [x: string]: unknown } | undefined
  column_schema?: { name: string; type?: string | undefined }[] | undefined
  freshness?: { [x: string]: unknown } | undefined
  raw_code?: string | undefined
  original_file_path?: string | undefined
}
type AssetGraph = {
  assets: {
    kind: AssetKind
    path: string
    fork_materialization?: 'fork' | 'deferred' | undefined
    dbt?: DbtAssetProvenance | undefined
  }[]
  runnables: {
    path: string
    usage_kind: AssetUsageKind
    in_pipeline?: boolean | undefined
    macros?: { name: string; params: string; is_table: boolean }[] | undefined
    dbt?: { model_count: number } | undefined
  }[]
  edges: {
    runnable_path: string
    runnable_kind: AssetUsageKind
    asset_kind: AssetKind
    asset_path: string
    access_type?: AssetUsageAccessType | undefined
  }[]
  triggers: (
    | {
        trigger_kind: 'asset'
        asset_kind: AssetKind
        asset_path: string
        runnable_kind: AssetUsageKind
        runnable_path: string
      }
    | {
        trigger_kind: 'schedule' | 'email' | 'kafka' | 'mqtt' | 'nats' | 'postgres' | 'sqs' | 'gcp'
        path: string
        runnable_kind: AssetUsageKind
        runnable_path: string
      }
  )[]
  macro_edges?:
    | { lib_path: string; consumer_path: string; macro_names: string[]; via_use: boolean }[]
    | undefined
  test_edges?:
    | {
        producer_kind: AssetUsageKind
        producer_path: string
        runnable_kind: AssetUsageKind
        runnable_path: string
        asset_kind: AssetKind
        asset_path: string
      }[]
    | undefined
  dbt_edges?: { from_asset_path: string; to_asset_path: string }[] | undefined
  dbt_snapshot_job?: string | undefined
  dbt_graph_ingested_at?: string | undefined
}
type DbtColumnLineage = {
  edges: {
    from_asset_path: string
    from_column: string
    to_asset_path: string
    to_column: string
    kind: string
  }[]
  truncated: boolean
}
type MaterializedPartition = {
  asset_kind: AssetKind
  asset_path: string
  partition: string
  status: 'running' | 'materialized' | 'failed'
  snapshot_id?: (bigint | null) | undefined
  row_count?: (bigint | null) | undefined
  job_id?: (string | null) | undefined
  materialized_at: string
  error?: (string | null) | undefined
}
type AssetProgress = {
  asset_kind: AssetKind
  asset_path: string
  status: 'running' | 'materialized' | 'failed'
  row_count?: (bigint | null) | undefined
  error?: (string | null) | undefined
}
type PartitionsInRange = {
  producer_path: string
  partition_kind: 'daily' | 'hourly' | 'weekly' | 'monthly' | 'dynamic'
  partitions: { partition: string; status: 'missing' | 'running' | 'materialized' | 'failed' }[]
}
type AssetSchemaVersion = {
  version: bigint
  columns: { name: string; type: string }[]
  snapshot_id?: (bigint | null) | undefined
  job_id?: (string | null) | undefined
  captured_at: string
}
type Volume = {
  name: string
  size_bytes: bigint
  file_count: number
  created_at: string
  created_by: string
  updated_at?: (string | null) | undefined
  last_used_at?: (string | null) | undefined
  extra_perms?: { [x: string]: unknown } | undefined
}
type EndpointTool = {
  name: string
  description: string
  instructions: string
  path: string
  method: string
  path_params_schema?: ({ [x: string]: unknown } | null) | undefined
  query_params_schema?: ({ [x: string]: unknown } | null) | undefined
  body_schema?: ({ [x: string]: unknown } | null) | undefined
}
type HubProjectSlug = string
type PublishDraftBody = {
  slug: HubProjectSlug
  name: string
  summary: string
  readme?: string | undefined
}
type PublishScriptBody = {
  summary: string
  app: string
  description?: string | undefined
  kind?: string | undefined
  content: string
  language: string
  schema?: { [x: string]: unknown } | undefined
  lockfile?: string | undefined
  path?: string | undefined
  source_path?: string | undefined
  project_slug: HubProjectSlug
}
type PublishFlowInner = {
  summary: string
  description?: string | undefined
  value: { [x: string]: unknown }
  schema?: { [x: string]: unknown } | undefined
}
type PublishFlowBody = {
  flow: PublishFlowInner
  apps: string[]
  path?: string | undefined
  source_path?: string | undefined
  project_slug: HubProjectSlug
}
type PublishAppBody = {
  app: { [x: string]: unknown }
  apps: string[]
  description?: string | undefined
  summary: string
  path?: string | undefined
  source_path?: string | undefined
  project_slug: HubProjectSlug
}
type PublishRawAppBody = {
  raw: string
  apps: string[]
  description?: string | undefined
  summary: string
  path?: string | undefined
  source_path?: string | undefined
  project_slug: HubProjectSlug
}
type RecordingBody = {
  recording?: { [x: string]: unknown } | undefined
  project_slug: HubProjectSlug
}
type PipelineRecordingBody = { recording?: { [x: string]: unknown } | undefined }
type PublishResourceTypeBody = {
  name: string
  schema?: { [x: string]: unknown } | undefined
  description?: string | undefined
  project_slug: HubProjectSlug
}
type PublishResourceBody = { path: string; resource_type: string }
type PublishResourcesBody = { resources: PublishResourceBody[]; project_slug: HubProjectSlug }
type PublishTriggerBody = {
  path: string
  kind: string
  summary?: (string | null) | undefined
  description?: (string | null) | undefined
  config: { [x: string]: unknown }
  script_ask_id?: (bigint | null) | undefined
  flow_id?: (bigint | null) | undefined
}
type PublishTriggersBody = { triggers: PublishTriggerBody[]; project_slug: HubProjectSlug }
type PublishMigrationBody = {
  datatable_name: string
  sql: string
  sql_down?: string | undefined
  enabled: boolean
}
type PublishMigrationsBody = { migrations: PublishMigrationBody[]; project_slug: HubProjectSlug }
type ProjectLogoBody = { logo: { b64: string; mime: 'image/png' | 'image/svg+xml' } | null }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/version': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/health/status': {
      $get:
        | {
            input: { query: { force?: boolean | undefined } }
            output: HealthStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { force?: boolean | undefined } }
            output: HealthStatusResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/health/detailed': {
      $get:
        | { input: {}; output: DetailedHealthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DetailedHealthResponse; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/uptodate': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/ee_license': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/docs/search': {
      $get: {
        input: { query: { query: string } }
        output: {
          text: string
          results: { url: string; title: string; score: number; snippets: string[] }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/docs/page': {
      $get: {
        input: { query: { url: string; section?: string | undefined } }
        output: { text: string; source_url: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/openapi.yaml': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/w/:workspace/audit/get/:id': {
      $get: {
        input: { param: { workspace: string; id: number } }
        output: AuditLog
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/audit/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            before?: string | undefined
            after?: string | undefined
            username?: string | undefined
            operation?: string | undefined
            operations?: string | undefined
            exclude_operations?: string | undefined
            resource?: string | undefined
            action_kind?: 'Create' | 'Update' | 'Delete' | 'Execute' | undefined
            before_id?: bigint | undefined
            before_id_timestamp?: string | undefined
            all_workspaces?: boolean | undefined
            job_id?: string | undefined
          }
        }
        output: AuditLog[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trash/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            item_kind?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: TrashItem[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trash/get/:id': {
      $get: {
        input: { param: { workspace: string; id: number } }
        output: TrashItemWithData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trash/restore/:id': {
      $post: {
        input: { param: { workspace: string; id: number } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trash/delete/:id': {
      $delete: {
        input: { param: { workspace: string; id: number } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trash/empty': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/auth/login': {
      $post: { input: { json: Login }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/auth/logout': { $post: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/auth/is_smtp_configured': {
      $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/is_password_login_disabled': {
      $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/request_password_reset': {
      $post:
        | {
            input: { json: { email: string } }
            output: PasswordResetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { email: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/auth/login_link/:token': {
      $get: {
        input: { param: { token: string } } & { query: { rd?: string | undefined } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/auth/reset_password': {
      $post:
        | {
            input: { json: { token: string; new_password: string } }
            output: PasswordResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string; new_password: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/w/:workspace/users/get/:username': {
      $get: {
        input: { param: { workspace: string; username: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/update/:username': {
      $post: {
        input: { param: { workspace: string; username: string } } & { json: EditWorkspaceUser }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/is_owner/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/setpassword': {
      $post: {
        input: { json: { password: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/set_password_of/:user': {
      $post: {
        input: { param: { user: string } } & { json: { password: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/set_login_type/:user': {
      $post: {
        input: { param: { user: string } } & { json: { login_type: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/create': {
      $post: {
        input: {
          json: {
            email: string
            password?: string | undefined
            super_admin: boolean
            name?: string | undefined
            company?: string | undefined
            skip_email?: boolean | undefined
            login_type?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/users/update/:email': {
      $post: {
        input: { param: { email: string } } & {
          json: {
            is_super_admin?: boolean | undefined
            is_devops?: boolean | undefined
            name?: string | undefined
            disabled?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/username_info/:email': {
      $get: {
        input: { param: { email: string } }
        output: {
          username: string
          workspace_usernames: { workspace_id: string; username: string }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/rename/:email': {
      $post: {
        input: { param: { email: string } } & { json: { new_username: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/change_email/:email': {
      $post: {
        input: { param: { email: string } } & { json: { new_email: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/delete/:email': {
      $delete: {
        input: { param: { email: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/overwrite': {
      $post: { input: { json: ExportedUser[] }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/users/export': {
      $get: { input: {}; output: ExportedUser[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/ext_jwt_tokens': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            active_only?: boolean | undefined
          }
        }
        output: ExternalJwtToken[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/guests': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: GuestList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/onboarding': {
      $post: {
        input: { json: { touch_point?: string | undefined; use_case?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/delete/:username': {
      $delete: {
        input: { param: { workspace: string; username: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/offboard_preview/:username': {
      $get: {
        input: { param: { workspace: string; username: string } }
        output: OffboardPreview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/offboard/:username': {
      $post: {
        input: { param: { workspace: string; username: string } } & { json: OffboardRequest }
        output: OffboardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/offboard_preview/:email': {
      $get: {
        input: { param: { email: string } }
        output: GlobalOffboardPreview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/offboard/:email': {
      $post: {
        input: { param: { email: string } } & { json: GlobalOffboardRequest }
        output: OffboardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/convert_to_group/:username': {
      $post: {
        input: { param: { workspace: string; username: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/github_app/connected_repositories': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: GithubInstallations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/list': {
      $get: { input: {}; output: Workspace[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workspaces/allowed_domain_auto_invite': {
      $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workspaces/users': {
      $get: { input: {}; output: UserWorkspaceList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workspaces/session_workspace_status': {
      $post: {
        input: { json: { workspace_ids: string[] } }
        output: { [x: string]: 'active' | 'archived' | 'deleted' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/session_workspace_retention': {
      $post: {
        input: { json: { workspace_ids: string[] } }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_as_superadmin': {
      $get: {
        input: { param: { workspace: string } }
        output: Workspace
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/list_as_superadmin': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: Workspace[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/create': {
      $post: { input: { json: CreateWorkspace }; output: string; outputFormat: 'text'; status: 201 }
    }
  } & {
    '/w/:workspace/workspaces/create_workspace_fork_branch': {
      $post: {
        input: { param: { workspace: string } } & { json: CreateWorkspaceFork }
        output: string[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/w/:workspace/workspaces/create_fork': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { background?: boolean | undefined }
        } & { json: CreateWorkspaceFork }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/workspaces/fork_creation_status/:creation_id': {
      $get: {
        input: { param: { workspace: string; creation_id: string } }
        output: {
          status: 'running' | 'completed' | 'failed'
          step?: string | undefined
          error?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/attach_dev_workspace': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            dev_workspace_id: string
            lock_prod_deploy?: boolean | undefined
            lock_prod_forking?: boolean | undefined
            dev_workspace_label?:
              | 'dev'
              | 'qa'
              | 'test'
              | 'uat'
              | 'staging'
              | 'demo'
              | 'sandbox'
              | 'preprod'
              | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/detach_dev_workspace': {
      $post: {
        input: { param: { workspace: string } } & { json: { dev_workspace_id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_dev_workspace': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          id: string
          name: string
          dev_workspace_label?: (string | null) | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces/exists': {
      $post: { input: { json: { id: string } }; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/workspaces/exists_username': {
      $post: {
        input: { json: { id: string; username: string } }
        output: boolean
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/refresh_custom_instance_user_pwd': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/external_instance_pg/status': {
      $get: { input: {}; output: ExternalInstancePgStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/external_instance_pg/setup': {
      $post: {
        input: { json: { rotate_passwords?: boolean | undefined } }
        output: ExternalInstancePgSetupReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/external_instance_pg/databases': {
      $get: {
        input: {}
        output: { [x: string]: CustomInstanceDb }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/external_instance_pg/databases/:name': {
      $post: {
        input: { param: { name: string } } & { json: { tag?: CustomInstanceDbTag | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/list_custom_instance_pg_databases': {
      $post: {
        input: {}
        output: { [x: string]: CustomInstanceDb }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/datatable_roles': {
      $get: {
        input: { query: { cluster?: DatatableRoleCluster | undefined } }
        output: InstanceDatatableRole[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                name: string
                cluster?: DatatableRoleCluster | undefined
                take_over?: boolean | undefined
              }
            }
            output: InstanceDatatableRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                cluster?: DatatableRoleCluster | undefined
                take_over?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/settings/datatable_roles/:id': {
      $post: {
        input: { param: { id: string } } & {
          json: { name?: string | undefined; enabled?: boolean | undefined }
        }
        output: InstanceDatatableRole
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/setup_custom_instance_pg_database/:name': {
      $post: {
        input: { param: { name: string } } & { json: { tag?: CustomInstanceDbTag | undefined } }
        output: CustomInstanceDb
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/drop_custom_instance_pg_database/:name': {
      $post: {
        input: { param: { name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/global/:key': {
      $get: {
        input: { param: { key: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { key: string } } & {
          json: { value?: { [x: string]: unknown } | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/instance_ui': {
      $get: {
        input: {}
        output: {
          instance_banner?: { [x: string]: unknown } | undefined
          accent_color?: { [x: string]: unknown } | undefined
          api_base_url?: { [x: string]: unknown } | undefined
          api_base_url_applies_to?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings_u/ruff_config': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/local': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/smtp_configured': {
      $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/test_smtp': {
      $post: {
        input: {
          json: {
            to: string
            smtp: {
              host: string
              username: string
              password: string
              port: number
              from: string
              tls_implicit: boolean
              disable_tls: boolean
            }
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/test_critical_channels': {
      $post: {
        input: { json: { email?: string | undefined; slack_channel?: string | undefined }[] }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/critical_alerts': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            page_size?: number | undefined
            acknowledged?: (boolean | null) | undefined
          }
        }
        output: {
          alerts?: CriticalAlert[] | undefined
          total_rows?: number | undefined
          total_pages?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/critical_alerts/:id/acknowledge': {
      $post: { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/critical_alerts/acknowledge_all': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/test_license_key': {
      $post: {
        input: { json: { license_key: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/test_object_storage_config': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/object_storage_usage': {
      $get: {
        input: {}
        output: {
          running: boolean
          started_at: string
          finished_at?: (string | null) | undefined
          current_prefix?: (string | null) | undefined
          scanned_objects: bigint
          folders: { prefix: string; size: bigint; partial?: boolean | undefined }[]
          error?: (string | null) | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: string; outputFormat: 'text'; status: 202 }
    }
  } & {
    '/settings/run_log_cleanup': {
      $post: { input: {}; output: string; outputFormat: 'text'; status: 202 }
    }
  } & {
    '/settings/log_cleanup_status': {
      $get: {
        input: {}
        output: {
          running: boolean
          started_at: string
          finished_at?: (string | null) | undefined
          phase: string
          total_service: bigint
          processed_service: bigint
          total_jobs: bigint
          processed_jobs: bigint
          s3_deleted: bigint
          s3_not_found?: bigint | undefined
          orphans_scanned: bigint
          orphans_deleted: bigint
          errors: bigint
          last_error?: (string | null) | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/audit_logs_s3_status': {
      $get: {
        input: {}
        output: {
          last_xmin: bigint
          last_ts?: (string | null) | undefined
          bootstrapping: boolean
          last_exported_audit_ts?: (string | null) | undefined
          last_run_at?: (string | null) | undefined
          last_run_exported: bigint
          updated_at: string
          owner?: (string | null) | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/audit_logs_s3_backfill': {
      $post: {
        input: { json: { from: string; to: string } }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/settings/audit_logs_s3_backfill_status': {
      $get: {
        input: {}
        output: {
          running: boolean
          started_at: string
          finished_at?: (string | null) | undefined
          phase: string
          from: string
          to: string
          rows_written: bigint
          objects_written: bigint
          last_ts?: (string | null) | undefined
          errors: bigint
          last_error?: (string | null) | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/send_stats': {
      $post: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/restart_worker_group/:worker_group': {
      $post: {
        input: { param: { worker_group: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/get_stats': {
      $get: {
        input: {}
        output: { signature?: string | undefined; data?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/latest_key_renewal_attempt': {
      $get: {
        input: {}
        output: { result: string; attempted_at: string } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/renew_license_key': {
      $post: {
        input: { query: { license_key?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/offline_license_status': {
      $get: {
        input: {}
        output: {
          seats_used?: number | undefined
          seats_cap?: number | undefined
          author_count?: number | undefined
          operator_count?: number | undefined
          current_cu?: number | undefined
          cu_cap?: number | undefined
          cu_over_cap?: boolean | undefined
        } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/instance_hash': {
      $get: {
        input: {}
        output: { instance_hash?: (string | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/customer_portal': {
      $post: {
        input: { query: { license_key?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/saml/test_metadata': {
      $post: { input: { json: string }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/list_global': {
      $get: { input: {}; output: GlobalSetting[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/github_app_stale_webhooks': {
      $get: {
        input: {}
        output: {
          workspace_id: string
          git_repo_resource_path: string
          registered_url?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/instance_config': {
      $get: { input: {}; output: InstanceConfig; outputFormat: 'json'; status: 200 }
      $put: { input: { json: InstanceConfig }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/min_keep_alive_version': {
      $get: {
        input: {}
        output: { worker: string; agent: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/.well-known/jwks.json': {
      $get: { input: {}; output: JwksResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/test_secret_backend': {
      $post: { input: { json: VaultSettings }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/settings/migrate_secrets_to_vault': {
      $post: {
        input: { json: VaultSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_to_database': {
      $post: {
        input: { json: VaultSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/test_azure_kv_backend': {
      $post: {
        input: { json: AzureKeyVaultSettings }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_to_azure_kv': {
      $post: {
        input: { json: AzureKeyVaultSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_from_azure_kv': {
      $post: {
        input: { json: AzureKeyVaultSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/test_aws_sm_backend': {
      $post: {
        input: { json: AwsSecretsManagerSettings }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_to_aws_sm': {
      $post: {
        input: { json: AwsSecretsManagerSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_from_aws_sm': {
      $post: {
        input: { json: AwsSecretsManagerSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/test_http_store_backend': {
      $post: {
        input: { json: { settings: HttpStoreSettings; workspace_id: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/migrate_secrets_from_http_store': {
      $post: {
        input: { json: HttpStoreSettings }
        output: SecretMigrationReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/email': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/users/refresh_token': {
      $get: {
        input: { query: { if_expiring_in_less_than_s?: number | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/tutorial_progress': {
      $get: {
        input: {}
        output: { progress?: number | undefined; skipped_all?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { progress?: number | undefined; skipped_all?: boolean | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/leave_instance': {
      $post: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/users/usage': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/users/all_runnables': {
      $get: {
        input: {}
        output: {
          workspace: string
          endpoint_async: string
          endpoint_sync: string
          summary: string
          description?: string | undefined
          kind: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/whoami': {
      $get: { input: {}; output: GlobalUserInfo; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/list_invites': {
      $get: { input: {}; output: WorkspaceInvite[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/w/:workspace/users/whoami': {
      $get: {
        input: { param: { workspace: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/token': {
      $post: {
        input: { param: { workspace: string } } & { json: { job_token: string } }
        output: { token: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/repo_archive/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { ref?: string | undefined }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/install_from_workspace': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { source_workspace_id: string; installation_id: number }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/installation/:installation_id': {
      $delete: {
        input: { param: { workspace: string; installation_id: bigint } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/export/:installationId': {
      $get: {
        input: { param: { workspace: string; installationId: number } }
        output: { jwt_token?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/import': {
      $post: {
        input: { param: { workspace: string } } & { json: { jwt_token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/git_sync/gitlab/projects': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { base_url: string; token: string; search?: string | undefined }
        }
        output: GitlabProject[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/git_sync/credential/origin': {
      $get: {
        input: { param: { workspace: string } } & { query: { path: string } }
        output: { origin?: 'held' | 'borrowed' | undefined; provider?: 'gitlab' | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/git_sync/credential': {
      $post: {
        input: { param: { workspace: string } } & { json: { repo_url: string; token: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/github_app/ghes_installation_callback': {
      $post: {
        input: { param: { workspace: string } } & { json: { installation_id: bigint } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github_app/ghes_config': {
      $get: {
        input: {}
        output: {
          base_url: string
          app_slug: string
          client_id: string
          app_owner?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/github_app/ghes/discover': {
      $get: {
        input: {}
        output: {
          installation_id: bigint
          account_id: string
          assigned_workspaces: { workspace_id: string; provisioned_by_admin: boolean }[]
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/github_app/ghes/assign': {
      $post: {
        input: { json: { workspace_id: string; installation_id: bigint } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/github_app/ghes/assign/:workspace_id/:installation_id': {
      $delete: {
        input: { param: { workspace_id: string; installation_id: bigint } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/accept_invite': {
      $post: {
        input: { json: { workspace_id: string; username?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/decline_invite': {
      $post: {
        input: { json: { workspace_id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/invite_user': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            email: string
            is_admin: boolean
            operator?: boolean | undefined
            role?: string | undefined
            parent_workspace_id?: (string | null) | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/add_user': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            email: string
            is_admin: boolean
            username?: string | undefined
            operator?: boolean | undefined
            role?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/create_service_account': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            username: string
            is_admin?: boolean | undefined
            operator?: boolean | undefined
            add_to_deployers?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/users/impersonate_service_account': {
      $post: {
        input: { param: { workspace: string } } & { json: { username: string } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/users/exit_impersonation': {
      $post: {
        input: { param: { workspace: string } } & { json: { token: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/delete_invite': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { email: string; is_admin: boolean; operator: boolean }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/archive': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workspaces/unarchive/:workspace': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workspaces/delete/:workspace': {
      $delete: {
        input: { param: { workspace: string } } & {
          query: { only_delete_forks?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/leave': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_workspace_name': {
      $get: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/change_workspace_name': {
      $post: {
        input: { param: { workspace: string } } & { json: { new_name?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/change_workspace_id': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { new_id?: string | undefined; new_name?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/change_workspace_color': {
      $post: {
        input: { param: { workspace: string } } & { json: { color?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/whois/:username': {
      $get: {
        input: { param: { workspace: string; username: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/operator_settings': {
      $post: {
        input: { param: { workspace: string } } & { json: OperatorSettings }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/roles': {
      $get: {
        input: { param: { workspace: string } }
        output: WorkspaceRoles
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/role_overrides': {
      $post: {
        input: { param: { workspace: string } } & { json: RoleOverrides }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/compare/:target_workspace_id': {
      $get: {
        input: { param: { workspace: string; target_workspace_id: string } }
        output: WorkspaceComparison
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/seed_full_diff/:target_workspace_id': {
      $post: {
        input: { param: { workspace: string; target_workspace_id: string } }
        output: { candidates: number; scanned_at: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/reset_diff_tally/:fork_workspace_id': {
      $post: {
        input: { param: { workspace: string; fork_workspace_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/exists/:email': {
      $get: {
        input: { param: { email: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/list_as_super_admin': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            active_only?: boolean | undefined
          }
        }
        output: GlobalUserInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_pending_invites': {
      $get: {
        input: { param: { workspace: string } }
        output: WorkspaceInvite[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_public_settings': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          workspace_id: string
          slack_name?: string | undefined
          slack_team_id?: string | undefined
          teams_team_id?: string | undefined
          teams_team_name?: string | undefined
          teams_team_guid?: string | undefined
          large_file_storage?: LargeFileStorage | undefined
          datatable?: DataTableSettings | undefined
          deploy_ui?: WorkspaceDeployUISettings | undefined
          mute_critical_alerts?: boolean | undefined
          add_admins_and_developers_to_forks: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_settings': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          workspace_id?: string | undefined
          slack_name?: string | undefined
          slack_team_id?: string | undefined
          slack_command_script?: string | undefined
          slack_oauth_client_id?: string | undefined
          slack_oauth_client_secret?: string | undefined
          teams_team_id?: string | undefined
          teams_command_script?: string | undefined
          teams_team_name?: string | undefined
          teams_team_guid?: string | undefined
          auto_invite?: AutoInviteConfig | undefined
          plan?: string | undefined
          customer_id?: string | undefined
          webhook?: string | undefined
          webhook_events?: WorkspaceWebhookEventType[] | undefined
          ai_config?: AIConfig | undefined
          error_handler?: ErrorHandlerConfig | undefined
          success_handler?: SuccessHandlerConfig | undefined
          variable_expiration_handler?: VariableExpirationHandlerConfig | undefined
          large_file_storage?: LargeFileStorage | undefined
          ducklake?: DucklakeSettings | undefined
          dbt_warehouses?: DbtWarehouses | undefined
          datatable?: DataTableSettings | undefined
          git_sync?: WorkspaceGitSyncSettings | undefined
          deploy_ui?: WorkspaceDeployUISettings | undefined
          default_app?: string | undefined
          default_scripts?: WorkspaceDefaultScripts | undefined
          mute_critical_alerts?: boolean | undefined
          color?: string | undefined
          operator_settings?: OperatorSettings | undefined
          public_app_execution_limit_per_minute?: number | undefined
          error_handler_fallback_to_instance_alerts?: boolean | undefined
          guest_jwt_public_key?: string | undefined
          guest_jwt_jwks_url?: string | undefined
          add_admins_and_developers_to_forks?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_deploy_to': {
      $get: {
        input: { param: { workspace: string } }
        output: { deploy_to?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/remote_deploy/target': {
      $get: {
        input: { param: { workspace: string } }
        output: RemoteDeployStatus
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string } } & {
          json: { target?: RemoteDeployTarget | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/remote_deploy/connect': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { token: string; target: RemoteDeployTarget }
        }
        output: RemoteDeployConnection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/remote_deploy/disconnect': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/is_premium': {
      $get: {
        input: { param: { workspace: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/billable_seats': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          developers?: number | undefined
          operators?: number | undefined
          service_accounts?: number | undefined
          seats: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/premium_info': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { skip_subscription_fetch?: boolean | undefined }
        }
        output: {
          premium: boolean
          usage?: number | undefined
          owner: string
          status?: string | undefined
          is_past_due: boolean
          is_canceled?: boolean | undefined
          max_tolerated_executions?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/threshold_alert': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          threshold_alert_amount?: number | undefined
          last_alert_sent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string } } & {
          json: { threshold_alert_amount?: number | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/rebuild_dependency_map': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_dependents/:imported_path': {
      $get: {
        input: { param: { workspace: string; imported_path: string } }
        output: DependencyDependent[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_imports/:importer_path': {
      $get: {
        input: { param: { workspace: string; importer_path: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_dependents_amounts': {
      $post: {
        input: { param: { workspace: string } } & { json: string[] }
        output: DependentsAmount[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_dependency_map': {
      $get: {
        input: { param: { workspace: string } }
        output: DependencyMap[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_slack_command': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { slack_command_script?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/slack_oauth_config': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          slack_oauth_client_id?: (string | null) | undefined
          slack_oauth_client_secret?: (string | null) | undefined
          slack_signing_secret?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string } } & {
          json: { slack_oauth_client_id: string; slack_oauth_client_secret: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/slack_signing_secret': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { slack_signing_secret?: (string | null) | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_teams_command': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { slack_command_script?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/available_teams_ids': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { search?: string | undefined; next_link?: string | undefined }
        }
        output: {
          teams?: { team_name?: string | undefined; team_id?: string | undefined }[] | undefined
          total_count?: number | undefined
          per_page?: number | undefined
          next_link?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/available_teams_channels': {
      $get: {
        input: { param: { workspace: string } } & { query: { team_id: string } }
        output: {
          channels?:
            | { channel_name?: string | undefined; channel_id?: string | undefined }[]
            | undefined
          total_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/connect_teams': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { team_id?: string | undefined; team_name?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/connect_slack': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { bot_token: string; team_id: string; team_name: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/run_slack_message_test_job': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            hub_script_path?: string | undefined
            channel?: string | undefined
            test_msg?: string | undefined
          }
        }
        output: { job_uuid?: string | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/run_teams_message_test_job': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            hub_script_path?: string | undefined
            channel?: string | undefined
            test_msg?: string | undefined
          }
        }
        output: { job_uuid?: string | undefined }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_auto_invite': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            operator?: boolean | undefined
            role?: string | undefined
            invite_all?: boolean | undefined
            auto_add?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_instance_groups': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { groups?: string[] | undefined; roles?: { [x: string]: string } | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_webhook': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            webhook?: string | undefined
            events?: (WorkspaceWebhookEventType[] | null) | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_copilot_config': {
      $post: {
        input: { param: { workspace: string } } & { json: AIConfig }
        output: {
          effective_ai_config: AIConfig
          has_instance_ai_config: boolean
          uses_instance_ai_config: boolean
          instance_ai_summary?: InstanceAISummary | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/settings_document': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { secrets?: 'redacted' | 'encrypted' | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            document: { [x: string]: unknown }
            replace?: boolean | undefined
            dry_run?: boolean | undefined
          }
        }
        output: {
          changes: {
            key: string
            before: { [x: string]: unknown }
            after: { [x: string]: unknown }
          }[]
          applied: boolean
          warnings?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_copilot_settings_state': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          has_instance_ai_config: boolean
          uses_instance_ai_config: boolean
          instance_ai_summary?: InstanceAISummary | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_copilot_info': {
      $get: {
        input: { param: { workspace: string } }
        output: AIConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_error_handler': {
      $post: {
        input: { param: { workspace: string } } & { json: EditErrorHandler }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_variable_expiration_handler': {
      $post: {
        input: { param: { workspace: string } } & { json: EditVariableExpirationHandler }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_success_handler': {
      $post: {
        input: { param: { workspace: string } } & { json: EditSuccessHandler }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_large_file_storage_config': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { large_file_storage?: LargeFileStorage | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_dbt_warehouses': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { dbt_warehouses?: DbtWarehouses | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/dbt/run_progress': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            asset_path: string
            status: string
            row_count?: number | undefined
            error?: string | undefined
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/dbt/warehouse/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: DbtWarehouseConnection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/dbt/warehouse_exists/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_ducklakes': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/data_metrics/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            table?: string | undefined
            path_prefix?: string | undefined
            per_page?: number | undefined
            cursor_table?: string | undefined
            cursor_kind?: string | undefined
            cursor_name?: string | undefined
            cursor_script?: string | undefined
          }
        }
        output: {
          metrics: DataMetric[]
          next_cursor?:
            | { table_path: string; kind: string; name: string; script_path: string }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_datatables': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          name: string
          resource_type: 'postgres' | 'instance' | 'external_instance'
          resource_path: string
          governing_workspace_id?: string | undefined
          database_workspace_id?: string | undefined
          permissioned: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_permissions/:datatable_name': {
      $get: {
        input: { param: { workspace: string; datatable_name: string } }
        output: DatatablePermissions
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & {
          json: {
            permissioned: boolean
            default_role?: string | undefined
            roles?: DatatableRoleTenants[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_acl/:datatable_name': {
      $get: {
        input: { param: { workspace: string; datatable_name: string } } & {
          query: {
            kind: 'database' | 'schema' | 'table'
            schema?: string | undefined
            table?: string | undefined
          }
        }
        output: DatatableAclInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_acl/:datatable_name/plan': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & { json: AclChangeRequest }
        output: AclPlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_acl/:datatable_name/apply': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & { json: AclChangeRequest }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_usable_roles/:datatable_name': {
      $get: {
        input: { param: { workspace: string; datatable_name: string } }
        output: { permissioned: boolean; roles: string[]; default_role: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_datatable_schemas': {
      $get: {
        input: { param: { workspace: string } }
        output: DataTableSchema[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/test_datatable_connection/:datatable_name': {
      $get: {
        input: { param: { workspace: string; datatable_name: string } }
        output: {
          user: string
          schema: string | null
          can_create_table: boolean
          can_create_schema: boolean
          migrations_table_exists: boolean
          suggested_grants: string[]
          suggested_search_path?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_datatable_tables': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            datatable_name?: string | undefined
            role_for?: string | undefined
            role?: string | undefined
          }
        }
        output: DataTableTables[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_datatable_table_schema': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            datatable_name: string
            schema_name: string
            table_name: string
            role?: string | undefined
          }
        }
        output: DataTableTableSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_ducklake_config': {
      $post: {
        input: { param: { workspace: string } } & { json: { settings: DucklakeSettings } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_datatable_config': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            settings: DataTableSettings
            renames?: { from: string; to: string }[] | undefined
            deleted_datatables?: string[] | undefined
          }
        }
        output: { stranded_references?: { workspace_id: string; datatable: string }[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/run_datatable_migrations/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & {
          query: {
            up_to?: bigint | undefined
            only?: bigint | undefined
            schema?: string | undefined
          }
        }
        output: { applied: { version: bigint; name: string }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/rollback_datatable_migrations/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & {
          query: { only?: bigint | undefined }
        }
        output: { rolled_back: { version: bigint; name: string }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_datatable_migrations': {
      $get: {
        input: { param: { workspace: string } }
        output: DatatableMigration[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/datatable_migrations_status/:datatable_name': {
      $get: {
        input: { param: { workspace: string; datatable_name: string } }
        output: {
          enabled: boolean
          migrations: DatatableMigrationWithStatus[]
          error?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/enable_datatable_migrations/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/disable_datatable_migrations/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/create_datatable_migration/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & {
          json: { name: string; code_up: string; code_down?: string | undefined }
        }
        output: DatatableMigration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/delete_datatable_migration/:datatable_name/:timestamp': {
      $delete: {
        input: { param: { workspace: string; datatable_name: string; timestamp: bigint } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/upsert_datatable_migration/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } } & {
          json: { timestamp: bigint; name: string; code_up: string; code_down?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/generate_initial_datatable_migration/:datatable_name': {
      $post: {
        input: { param: { workspace: string; datatable_name: string } }
        output: DatatableMigration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/create_pg_database': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { source: string; target_dbname: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/drop_forked_datatable_databases': {
      $post: {
        input: { param: { workspace: string } } & { json: { datatable_names: string[] } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/drop_forked_ducklake_namespaces': {
      $post: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/import_pg_database': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            source: string
            target: string
            target_dbname_override?: string | undefined
            fork_behavior: 'schema_only' | 'schema_and_data' | 'keep_original'
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/export_pg_schema': {
      $post: {
        input: { param: { workspace: string } } & { json: { source: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_datatable_full_schema': {
      $post: {
        input: { param: { workspace: string } } & { json: { source: string } }
        output: {
          [x: string]: {
            [x: string]: {
              name: string
              columns: {
                name: string
                datatype: string
                primary_key?: boolean | undefined
                default_value?: string | undefined
                nullable?: boolean | undefined
              }[]
              foreign_keys: {
                target_table?: string | undefined
                columns: {
                  source_column?: string | undefined
                  target_column?: string | undefined
                }[]
                on_delete: string
                on_update: string
                fk_constraint_name?: string | undefined
              }[]
              pk_constraint_name?: string | undefined
            }
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/git_sync_enabled': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          enabled?: boolean | undefined
          reason?: (string | null) | undefined
          max_repos?: (number | null) | undefined
          user_count?: (number | null) | undefined
          max_users?: (number | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/git_sync_deploy_mode': {
      $get: {
        input: { param: { workspace: string } } & { query: { branch?: string | undefined } }
        output: { configured: boolean; deploy_on_push: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_git_sync_config': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { git_sync_settings?: WorkspaceGitSyncSettings | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_git_sync_repository': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { git_repo_resource_path: string; repository: GitRepositorySettings }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/delete_git_sync_repository': {
      $delete: {
        input: { param: { workspace: string } } & { json: { git_repo_resource_path: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_deploy_ui_config': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { deploy_ui_settings?: WorkspaceDeployUISettings | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_default_app': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { default_app_path?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_add_admins_and_developers_to_forks': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { add_admins_and_developers_to_forks: boolean }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/edit_guest_jwt_key': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { public_key?: string | undefined; jwks_url?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/guest_usage': {
      $get: {
        input: { param: { workspace: string } }
        output: GuestUsage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/default_scripts': {
      $post: {
        input: { param: { workspace: string } } & { json: WorkspaceDefaultScripts }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { workspace: string } }
        output: WorkspaceDefaultScripts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/set_environment_variable': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { name: string; value?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/encryption_key': {
      $get: {
        input: { param: { workspace: string } }
        output: { key: string }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string } } & {
          json: { new_key: string; skip_reencrypt?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/default_app': {
      $get: {
        input: { param: { workspace: string } }
        output: { default_app_path?: string | undefined; default_app_raw?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/usage': {
      $get: {
        input: { param: { workspace: string } }
        output: number
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/used_triggers': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          http_routes_used: boolean
          websocket_used: boolean
          kafka_used: boolean
          nats_used: boolean
          postgres_used: boolean
          mqtt_used: boolean
          amqp_used: boolean
          gcp_used: boolean
          azure_used: boolean
          sqs_used: boolean
          email_used: boolean
          nextcloud_used: boolean
          google_used: boolean
          github_used: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/list': {
      $get: {
        input: { param: { workspace: string } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/list_addable': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { search?: string | undefined; per_page?: number | undefined }
        }
        output: { email: string; username?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/list_usage': {
      $get: {
        input: { param: { workspace: string } }
        output: UserUsage[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/list_usernames': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/users/username_to_email/:username': {
      $get: {
        input: { param: { workspace: string; username: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tokens/list/scopes': {
      $get: { input: {}; output: ScopeDomain[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/tokens/create': {
      $post: { input: { json: NewToken }; output: string; outputFormat: 'text'; status: 201 }
    }
  } & {
    '/users/tokens/impersonate': {
      $post: {
        input: { json: NewTokenImpersonate }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/users/login_links': {
      $post:
        | {
            input: {
              json: {
                email: string
                expires_in_s?: number | undefined
                rd?: string | undefined
                require_login_type?: string | undefined
              }
            }
            output: { url: string; expires_at: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                email: string
                expires_in_s?: number | undefined
                rd?: string | undefined
                require_login_type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/users/cloud_trial_offer': {
      $post: {
        input: { json: { email: string; consumed?: boolean | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: { input: {}; output: { offered: boolean }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/cloud_trial_offer/go': {
      $post:
        | {
            input: {}
            output: { location: string; reason?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/onboarding_profile': {
      $post: {
        input: { json: { email: string; profile: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: {}
        output: { profile?: ({ [x: string]: unknown } | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/tokens/delete/:token_prefix': {
      $delete: {
        input: { param: { token_prefix: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/tokens/update_scopes/:token_prefix': {
      $post: {
        input: { param: { token_prefix: string } } & {
          json: { scopes?: (string[] | null) | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/tokens/update_label/:token_prefix': {
      $post: {
        input: { param: { token_prefix: string } } & {
          json: { label?: (string | null) | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/tokens/list': {
      $get: {
        input: {
          query: {
            exclude_ephemeral?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: TruncatedToken[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oidc/signing_status': {
      $get: {
        input: {}
        output: {
          mode: 'database' | 'file' | 'external'
          keys: {
            kid?: string | undefined
            alg: string
            state: 'pending' | 'active' | 'retired' | 'published'
            source: 'signer' | 'database' | 'file' | 'publish_dir'
          }[]
          signer?:
            | {
                last_refresh_success?: string | undefined
                last_refresh_error?: string | undefined
                breaker: 'closed' | 'open' | 'half_open'
                max_rps: number
                current_rps: number
                keys_from_store?: boolean | undefined
                tls_files_error?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oidc/token/:audience': {
      $post: {
        input: { param: { workspace: string; audience: string } } & {
          query: { expires_in?: number | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/create': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { already_encrypted?: boolean | undefined }
        } & { json: CreateVariable }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/variables/encrypt': {
      $post: {
        input: { param: { workspace: string } } & { json: string }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/external_secret_prefixes': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/delete_bulk': {
      $delete: {
        input: { param: { workspace: string } } & { json: { paths: string[] } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { already_encrypted?: boolean | undefined }
        } & { json: EditVariable }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            decrypt_secret?: boolean | undefined
            include_encrypted?: boolean | undefined
            get_draft?: boolean | undefined
          }
        }
        output: {
          workspace_id: string
          path: string
          value?: string | undefined
          is_secret: boolean
          description?: string | undefined
          account?: number | undefined
          is_oauth?: boolean | undefined
          extra_perms: { [x: string]: boolean }
          is_expired?: boolean | undefined
          refresh_error?: string | undefined
          is_linked?: boolean | undefined
          is_refreshed?: boolean | undefined
          expires_at?: string | undefined
          value_valid_until?: (string | null) | undefined
          labels?: string[] | undefined
          inherited_labels?: string[] | undefined
          ws_specific?: boolean | undefined
          edited_at?: string | undefined
          edited_by?: string | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/get_value/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { allow_cache?: boolean | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            path_start?: string | undefined
            path?: string | undefined
            description?: string | undefined
            value?: string | undefined
            broad_filter?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: ListableVariable[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/variables/list_contextual': {
      $get: {
        input: { param: { workspace: string } }
        output: ContextualVariable[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/get_secondary_storage_names': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { include_default?: boolean | undefined }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/critical_alerts': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            page_size?: number | undefined
            acknowledged?: (boolean | null) | undefined
          }
        }
        output: {
          alerts?: CriticalAlert[] | undefined
          total_rows?: number | undefined
          total_pages?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/critical_alerts/:id/acknowledge': {
      $post: {
        input: { param: { workspace: string; id: number } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/critical_alerts/acknowledge_all': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/critical_alerts/mute': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { mute_critical_alerts?: boolean | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/protection_rules': {
      $get: {
        input: { param: { workspace: string } }
        output: ProtectionRuleset[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { workspace: string } } & {
              json: {
                name: string
                rules: ProtectionRules
                bypass_groups: RuleBypasserGroups
                bypass_users: RuleBypasserUsers
                fork_role_mapping?: ForkRoleMapping | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              json: {
                name: string
                rules: ProtectionRules
                bypass_groups: RuleBypasserGroups
                bypass_users: RuleBypasserUsers
                fork_role_mapping?: ForkRoleMapping | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/w/:workspace/workspaces/protection_rules/:rule_name': {
      $post:
        | {
            input: { param: { workspace: string; rule_name: string } } & {
              json: {
                name?: string | undefined
                rules: ProtectionRules
                bypass_groups: RuleBypasserGroups
                bypass_users: RuleBypasserUsers
                fork_role_mapping?: ForkRoleMapping | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; rule_name: string } } & {
              json: {
                name?: string | undefined
                rules: ProtectionRules
                bypass_groups: RuleBypasserGroups
                bypass_users: RuleBypasserUsers
                fork_role_mapping?: ForkRoleMapping | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { workspace: string; rule_name: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; rule_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/w/:workspace/deployment_request/eligible_deployers': {
      $get: {
        input: { param: { workspace: string } }
        output: DeploymentRequestEligibleDeployer[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/deployment_request/open': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          id: bigint
          source_workspace_id: string
          fork_workspace_id: string
          requested_by: string
          requested_by_email: string
          requested_at: string
          assignees: DeploymentRequestAssignee[]
          comments: DeploymentRequestComment[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/deployment_request': {
      $post:
        | {
            input: { param: { workspace: string } } & { json: { assignees: string[] } }
            output: DeploymentRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & { json: { assignees: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workspace: string } } & { json: { assignees: string[] } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/deployment_request/:id/cancel': {
      $post: {
        input: { param: { workspace: string; id: bigint } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/deployment_request/:id/close_merged': {
      $post: {
        input: { param: { workspace: string; id: bigint } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/deployment_request/:id/comment': {
      $post:
        | {
            input: { param: { workspace: string; id: bigint } } & {
              json: {
                body: string
                parent_id?: (bigint | null) | undefined
                anchor_kind?: (string | null) | undefined
                anchor_path?: (string | null) | undefined
              }
            }
            output: DeploymentRequestComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; id: bigint } } & {
              json: {
                body: string
                parent_id?: (bigint | null) | undefined
                anchor_kind?: (string | null) | undefined
                anchor_path?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/w/:workspace/workspaces/log_feature_usage': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            events: {
              feature: string
              kind: string
              key?: string | undefined
              entity_id?: string | undefined
              value?: number | undefined
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/w/:workspace/workspaces/cloud_quotas': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          scripts: QuotaInfo
          flows: QuotaInfo
          apps: QuotaInfo
          variables: QuotaInfo
          resources: QuotaInfo
          forks: QuotaInfo
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/prune_versions': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { resource_type: 'scripts' | 'flows' | 'apps' | 'resources' }
        }
        output: { pruned: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_ws_specific': {
      $get: {
        input: { param: { workspace: string } }
        output: { item_kind: string; path: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/list_ws_specific_versions': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { kind: 'resource' | 'variable'; path: string }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/set_ws_specific': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { item_kind: 'resource' | 'variable'; path: string; value: boolean }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspaces/public_app_rate_limit': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { public_app_execution_limit_per_minute?: number | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/login_callback/:client_name': {
      $post: {
        input: { param: { client_name: string } } & {
          json: { code?: string | undefined; state?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/connect_slack_callback': {
      $post: {
        input: { param: { workspace: string } } & { json: { code: string; state: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/oauth/connect_slack_callback': {
      $post: {
        input: { json: { code: string; state: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/oauth/connect_slack_instance': {
      $post: {
        input: { json: { bot_token: string; team_id: string; team_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/connect_callback/:client_name': {
      $post: {
        input: { param: { client_name: string } } & {
          json: { code: string; state: string; params?: { [x: string]: string } | undefined }
        }
        output: TokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/create_account': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            refresh_token: string
            expires_in: number
            client: string
            grant_type?: string | undefined
            cc_client_id?: string | undefined
            cc_client_secret?: string | undefined
            cc_instance?: string | undefined
            cc_token_url?: string | undefined
            mcp_server_url?: string | undefined
            scopes?: string[] | undefined
            variable?: CreateVariable | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/connect_client_credentials/:client': {
      $post: {
        input: { param: { workspace: string; client: string } } & {
          json: {
            scopes?: string[] | undefined
            cc_client_id?: string | undefined
            cc_client_secret?: string | undefined
            cc_instance?: string | undefined
            cc_token_url?: string | undefined
          }
        }
        output: TokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/refresh_token/:id': {
      $post: {
        input: { param: { workspace: string; id: number } } & { json: { path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/disconnect/:id': {
      $post: {
        input: { param: { workspace: string; id: number } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/disconnect_slack': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/oauth/disconnect_teams': {
      $post: {
        input: { param: { workspace: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/oauth/list_logins': {
      $get: {
        input: {}
        output: {
          oauth: { type: string; display_name?: string | undefined }[]
          saml?: string | undefined
          auto_login?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/list_connects': {
      $get: {
        input: {}
        output: {
          name: string
          supports_client_credentials: boolean
          has_shared_credentials: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/get_connect/:client': {
      $get: {
        input: { param: { client: string } }
        output: {
          extra_params?: { [x: string]: unknown } | undefined
          scopes?: string[] | undefined
          grant_types?: string[] | undefined
          client_credentials_configured?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/test_client_credentials': {
      $post: {
        input: { json: { name: string; entry: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams/activities': {
      $post: {
        input: {
          json: {
            conversation_id: string
            success?: boolean | undefined
            text: string
            card_block?: { [x: string]: unknown } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/create': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { update_if_exists?: boolean | undefined; skip_ci_tests?: boolean | undefined }
        } & { json: CreateResource }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/resources/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/delete_bulk': {
      $delete: {
        input: { param: { workspace: string } } & { json: { paths: string[] } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { skip_ci_tests?: boolean | undefined }
        } & { json: EditResource }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/update_value/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { value?: { [x: string]: unknown } | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/history/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: { versions: ResourceVersion[]; versioned: boolean }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/history/v/:id': {
      $get: {
        input: { param: { workspace: string; id: bigint } }
        output: {
          id: bigint
          version: bigint
          created_at: string
          created_by?: string | undefined
          value?: { [x: string]: unknown } | undefined
          missing_references: string[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/history/restore/v/:id': {
      $post: {
        input: { param: { workspace: string; id: bigint } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          workspace_id?: string | undefined
          path: string
          description?: string | undefined
          resource_type: string
          value?: { [x: string]: unknown } | undefined
          is_oauth: boolean
          extra_perms?: { [x: string]: boolean } | undefined
          is_expired?: boolean | undefined
          refresh_error?: string | undefined
          is_linked: boolean
          is_refreshed: boolean
          account?: number | undefined
          scopes?: string[] | undefined
          created_by?: string | undefined
          edited_at?: string | undefined
          labels?: string[] | undefined
          inherited_labels?: string[] | undefined
          ws_specific?: boolean | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          agent_memory?: { [x: string]: unknown } | undefined
          draft_path?: string | undefined
          grant_type?: string | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/get_value_interpolated/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { job_id?: string | undefined; allow_cache?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/get_value/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/git_commit_hash/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { git_ssh_identity?: string | undefined }
        }
        output: { commit_hash: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            resource_type?: string | undefined
            resource_type_exclude?: string | undefined
            path_start?: string | undefined
            path?: string | undefined
            description?: string | undefined
            value?: string | undefined
            broad_filter?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
            starred_only?: boolean | undefined
          }
        }
        output: ListableResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/list_search': {
      $get: {
        input: { param: { workspace: string } }
        output: { path: string; value: string; truncated: boolean }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/mcp_tools/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: {
          name: string
          description?: string | undefined
          inputSchema: { [x: string]: unknown }
          annotations?:
            | {
                title?: string | undefined
                readOnlyHint?: boolean | undefined
                destructiveHint?: boolean | undefined
                idempotentHint?: boolean | undefined
                openWorldHint?: boolean | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/mcp_call_tool/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: {
            tool: string
            arguments?: { [x: string]: unknown } | undefined
            read_only?: boolean | undefined
          }
        }
        output: {
          content?: { [x: string]: unknown }[] | undefined
          structuredContent?: { [x: string]: unknown } | undefined
          isError?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/list_names/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: { name: string; path: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/create': {
      $post: {
        input: { param: { workspace: string } } & { json: ResourceType }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/resources/file_resource_type_to_file_ext_map': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          [x: string]: {
            format_extension?: (string | null) | undefined
            is_fileset?: boolean | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditResourceType }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: ResourceType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/list': {
      $get: {
        input: { param: { workspace: string } }
        output: ResourceType[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/listnames': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/resource_counts': {
      $get: {
        input: { param: { workspace: string } }
        output: { resource_type: string; count: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/hub/info': {
      $get: {
        input: { param: { workspace: string } }
        output: { name: string; app: string; picks: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/resources/type/hub/pick/:name': {
      $post: {
        input: { param: { workspace: string; name: string } }
        output: { success: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/config': {
      $get: {
        input: { param: { workspace: string } }
        output: { registry_configured: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/metadata/:package': {
      $get: {
        input: { param: { workspace: string; package: string } }
        output: { tags?: { [x: string]: string } | undefined; versions?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/resolve/:package': {
      $get: {
        input: { param: { workspace: string; package: string } } & {
          query: { tag?: string | undefined }
        }
        output: { version?: (string | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/filetree/:package/:version': {
      $get: {
        input: { param: { workspace: string; package: string; version: string } }
        output: {
          default?: string | undefined
          files?: { name?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/file/:package/:version/:filepath': {
      $get: {
        input: { param: { workspace: string; package: string; version: string; filepath: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/npm_proxy/tarball/:package/:version': {
      $get: {
        input: { param: { workspace: string; package: string; version: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/embeddings/query_resource_types': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { text: string; limit?: number | undefined }
        }
        output: { name: string; score: number; schema?: { [x: string]: unknown } | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/integrations/hub/list': {
      $get: {
        input: { query: { kind?: string | undefined } }
        output: {
          name: string
          documented?: boolean | undefined
          picks?: number | undefined
          display_name?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/integrations/hub/:app/meta': {
      $get: {
        input: { param: { app: string } }
        output: {
          app: string
          display_name: string
          description?: (string | null) | undefined
          docs_url?: (string | null) | undefined
          curated?: (boolean | null) | undefined
          metadata_source?: 'curated' | 'derived' | undefined
          meta?: ({ [x: string]: unknown } | null) | undefined
          meta_updated_at?: (string | null) | undefined
          derived?:
            | {
                api_hosts: { host: string; count: number }[]
                style: 'fetch' | 'sdk' | 'mixed' | 'unknown'
                languages: { [x: string]: number }
                script_counts: { total: number; by_kind: { [x: string]: number } }
                top_scripts: {
                  path: string
                  ask_id?: number | undefined
                  version_id?: number | undefined
                  summary: string
                  description?: (string | null) | undefined
                  kind: string
                  language?: (string | null) | undefined
                  views?: number | undefined
                  votes?: number | undefined
                }[]
              }
            | undefined
          resource_types?:
            | {
                id?: number | undefined
                name: string
                description?: (string | null) | undefined
                schema: { [x: string]: unknown }
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/flows/hub/list': {
      $get: {
        input: {}
        output: {
          flows?:
            | {
                id: number
                flow_id: number
                summary: string
                apps: string[]
                approved: boolean
                votes: number
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/flows/hub/get/:id': {
      $get: {
        input: { param: { id: number } }
        output: { flow?: OpenFlow | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/hub/list': {
      $get: {
        input: {}
        output: {
          apps?:
            | {
                id: number
                app_id: number
                summary: string
                apps: string[]
                approved: boolean
                votes: number
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/hub/get/:id': {
      $get: {
        input: { param: { id: number } }
        output: { app: { summary: string; value: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/hub/get_raw/:id': {
      $get: {
        input: { param: { id: number } }
        output: { app: { summary: string; value: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps_u/guest_entry_by_custom_path/:custom_path': {
      $get: {
        input: { param: { custom_path: string } }
        output: GuestEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps_u/public_app_by_custom_path/:custom_path': {
      $get: {
        input: { param: { custom_path: string } }
        output: {
          id: number
          workspace_id: string
          path: string
          summary: string
          versions: number[]
          created_by: string
          created_at: string
          value: { [x: string]: unknown }
          policy: Policy
          execution_mode: 'viewer' | 'publisher' | 'anonymous'
          extra_perms: { [x: string]: boolean }
          custom_path?: string | undefined
          raw_app: boolean
          bundle_secret?: string | undefined
          labels?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps_u/embed_token_by_custom_path/:custom_path': {
      $get: {
        input: { param: { custom_path: string } } & { query: { sdk_consent?: boolean | undefined } }
        output: EmbedTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scripts/hub/get/:path': {
      $get: {
        input: { param: { path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scripts/hub/get_full/:path': {
      $get: {
        input: { param: { path: string } }
        output: {
          content: string
          lockfile?: string | undefined
          schema?: { [x: string]: unknown } | undefined
          language: string
          summary?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scripts/hub/pick/:path': {
      $get: {
        input: { param: { path: string } }
        output: { success: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scripts/hub/top': {
      $get: {
        input: {
          query: { limit?: number | undefined; app?: string | undefined; kind?: string | undefined }
        }
        output: {
          asks?:
            | {
                id: number
                ask_id: number
                summary: string
                description?: (string | null) | undefined
                app: string
                version_id: number
                kind: HubScriptKind
                votes: number
                views: number
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/embeddings/query_hub_scripts': {
      $get: {
        input: {
          query: {
            text: string
            kind?: string | undefined
            limit?: number | undefined
            app?: string | undefined
          }
        }
        output: {
          ask_id: number
          id: number
          version_id: number
          summary: string
          description?: string | undefined
          app: string
          kind: HubScriptKind
          score: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list_search': {
      $get: {
        input: { param: { workspace: string } }
        output: { path: string; content: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            order_desc?: boolean | undefined
            created_by?: string | undefined
            path_start?: string | undefined
            path_exact?: string | undefined
            first_parent_hash?: string | undefined
            last_parent_hash?: string | undefined
            parent_hash?: string | undefined
            show_archived?: boolean | undefined
            include_without_main?: boolean | undefined
            include_draft_only?: boolean | undefined
            is_template?: boolean | undefined
            kinds?: string | undefined
            starred_only?: boolean | undefined
            with_deployment_msg?: boolean | undefined
            languages?: string | undefined
            without_description?: boolean | undefined
            dedicated_worker?: boolean | undefined
            label?: string | undefined
          }
        }
        output: ListableScript[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list_paths': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { all_users?: boolean | undefined; compare_to_workspace?: string | undefined }
        }
        output: {
          kind: UserDraftItemKind
          path: string
          summary?: string | undefined
          draft_path?: string | undefined
          resource_type?: string | undefined
          draft_only: boolean
          legacy_draft: boolean
          created_at: string
          can_write: boolean
          mine: boolean
          unchanged_from_parent?: boolean | undefined
          draft_users?: { username?: (string | null) | undefined }[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/get/:kind/:path': {
      $get:
        | {
            input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
              query: { username?: string | undefined }
            }
            output: { value: { [x: string]: unknown }; created_at: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
              query: { username?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/w/:workspace/drafts/get_own/:kind/:path': {
      $get: {
        input: { param: { workspace: string; kind: UserDraftItemKind; path: string } }
        output: { value: { [x: string]: unknown }; created_at: string } | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/update/:kind/:path': {
      $post: {
        input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
          json: {
            value?: ({ [x: string]: unknown } | null) | undefined
            last_sync?: string | undefined
            force?: boolean | undefined
            legacy?: boolean | undefined
            created_at?: string | undefined
          }
        }
        output: {
          status: 'saved' | 'conflict'
          current_timestamp: string
          path?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/delete_for_user/:kind/:path': {
      $post:
        | {
            input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
              query: { username?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
              query: { username?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/w/:workspace/drafts/move/:kind/:path': {
      $post: {
        input: {
          param: { workspace: string; kind: 'script' | 'flow' | 'app' | 'raw_app'; path: string }
        } & { json: { new_path: string; summary?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/transfer': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            target_workspace?: string | undefined
            items: DraftItemRef[]
            remove_from_source?: boolean | undefined
            replace_existing?: boolean | undefined
          }
        }
        output: { copied: DraftItemRef[]; removed: DraftItemRef[]; conflicts: DraftItemRef[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/drafts/migrate_legacy/:kind/:path': {
      $post: {
        input: { param: { workspace: string; kind: UserDraftItemKind; path: string } } & {
          json: { action: 'delete' | 'assign_to_self' }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/create': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { skip_ci_tests?: boolean | undefined }
        } & { json: NewScript }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/scripts/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { skip_ci_tests?: boolean | undefined }
        } & { json: NewScript }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/scripts/toggle_workspace_error_handler/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { muted?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/workers/custom_tags': {
      $get: {
        input: { query: { show_workspace_restriction?: boolean | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workers/custom_tags': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/get_default_tags': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workers/is_default_tags_per_workspace': {
      $get: { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workers/dev_workspace_isolation': {
      $get: {
        input: {}
        output: { enabled: boolean; suffix: string; skip_non_dev_forks: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspace_dependencies/create': {
      $post:
        | {
            input: { param: { workspace: string } } & { json: NewWorkspaceDependencies }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { workspace: string } } & { json: NewWorkspaceDependencies }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/w/:workspace/workspace_dependencies/archive/:language': {
      $post: {
        input: { param: { workspace: string; language: ScriptLang } } & {
          query: { name?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspace_dependencies/delete/:language': {
      $post: {
        input: { param: { workspace: string; language: ScriptLang } } & {
          query: { name?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspace_dependencies/list': {
      $get: {
        input: { param: { workspace: string } }
        output: WorkspaceDependencies[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/workspace_dependencies/get_latest/:language': {
      $get: {
        input: { param: { workspace: string; language: ScriptLang } } & {
          query: { name?: string | undefined }
        }
        output: WorkspaceDependencies
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/archive/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/archive/h/:hash': {
      $post: {
        input: { param: { workspace: string; hash: string } }
        output: Script
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/delete/h/:hash': {
      $post: {
        input: { param: { workspace: string; hash: string } }
        output: Script
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/delete/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { keep_captures?: boolean | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/delete_bulk': {
      $delete: {
        input: { param: { workspace: string } } & { json: { paths: string[] } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/get/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { with_starred_info?: boolean | undefined; get_draft?: boolean | undefined }
        }
        output: {
          workspace_id?: string | undefined
          hash: string
          path: string
          parent_hashes?: string[] | undefined
          summary: string
          description: string
          content: string
          created_by: string
          created_at: string
          archived: boolean
          schema?: { [x: string]: unknown } | undefined
          deleted: boolean
          is_template: boolean
          extra_perms: { [x: string]: boolean }
          lock?: string | undefined
          lock_error_logs?: string | undefined
          language: ScriptLang
          kind: 'script' | 'failure' | 'trigger' | 'command' | 'approval' | 'preprocessor'
          starred: boolean
          tag?: string | undefined
          draft_only?: boolean | undefined
          envs?: string[] | undefined
          concurrent_limit?: number | undefined
          concurrency_time_window_s?: number | undefined
          on_concurrency_limit?: 'queue' | 'fail' | undefined
          concurrency_key?: string | undefined
          debounce_key?: string | undefined
          debounce_delay_s?: number | undefined
          debounce_args_to_accumulate?: string[] | undefined
          max_total_debouncing_time?: number | undefined
          max_total_debounces_amount?: number | undefined
          cache_ttl?: number | undefined
          cache_ignore_s3_path?: boolean | undefined
          dedicated_worker?: boolean | undefined
          ws_error_handler_muted?: boolean | undefined
          priority?: number | undefined
          restart_unless_cancelled?: boolean | undefined
          timeout?: number | undefined
          delete_after_secs?: number | undefined
          visible_to_runner_only?: boolean | undefined
          auto_kind?: string | undefined
          codebase?: string | undefined
          has_preprocessor: boolean
          on_behalf_of_email?: string | undefined
          on_behalf_of?: string | undefined
          modules?: ({ [x: string]: ScriptModule } | null) | undefined
          labels?: string[] | undefined
          job_token_scopes?: (string[] | null) | undefined
          inherited_labels?: string[] | undefined
          is_draft: boolean
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/get_triggers_count/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: TriggersCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list_tokens/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: TruncatedToken[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/history/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: ScriptHistory[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list_paths_from_workspace_runnable/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/get_latest_version/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: ScriptHistory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/history_update/h/:hash/p/:path': {
      $post: {
        input: { param: { workspace: string; hash: string; path: string } } & {
          json: { deployment_msg?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/list_dedicated_with_deps': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          path: string
          language:
            | 'python3'
            | 'deno'
            | 'go'
            | 'bash'
            | 'powershell'
            | 'postgresql'
            | 'mysql'
            | 'bigquery'
            | 'snowflake'
            | 'mssql'
            | 'graphql'
            | 'nativets'
            | 'bun'
            | 'bunnative'
            | 'php'
            | 'rust'
            | 'ansible'
            | 'csharp'
            | 'oracledb'
            | 'duckdb'
            | 'java'
            | 'ruby'
          workspace_dep_names: string[]
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/raw/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scripts_u/tokened_raw/:workspace/:token/:path': {
      $get: {
        input: { param: { workspace: string; token: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/exists/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/get/h/:hash': {
      $get: {
        input: { param: { workspace: string; hash: string } } & {
          query: { with_starred_info?: boolean | undefined; authed?: boolean | undefined }
        }
        output: Script
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/raw/h/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/deployment_status/h/:hash': {
      $get: {
        input: { param: { workspace: string; hash: string } }
        output: {
          lock?: string | undefined
          lock_error_logs?: string | undefined
          job_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/ci_test_results/:kind/:path': {
      $get: {
        input: { param: { workspace: string; kind: 'script' | 'flow' | 'resource'; path: string } }
        output: CiTestResult[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/ci_test_results_batch': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { items: { path: string; kind: 'script' | 'flow' | 'resource' }[] }
        }
        output: { [x: string]: CiTestResult[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/trigger_ci_tests_batch': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            items: { path: string; kind: 'script' | 'flow' | 'resource' }[]
            ignore_pending?: boolean | undefined
          }
        }
        output: { pending: string[]; job_ids: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/check_schema_contracts': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { language: ScriptLang; content: string; path?: string | undefined }
        }
        output: { warnings: ContractWarning[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/raw_temp/store': {
      $post: {
        input: { param: { workspace: string } } & { json: string }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/scripts/raw_temp/diff': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            scripts: { [x: string]: string }
            workspace_deps?:
              | { path: string; language: ScriptLang; name?: string | undefined; hash: string }[]
              | undefined
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/list_selected_job_groups': {
      $post: {
        input: { param: { workspace: string } } & { json: string[] }
        output: {
          kind: 'script' | 'flow'
          script_path: string
          latest_schema: { [x: string]: unknown }
          schemas: { schema: { [x: string]: unknown }; script_hash: string; job_ids: string[] }[]
        }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            scheduled_for?: string | undefined
            scheduled_in_secs?: number | undefined
            skip_preprocessor?: boolean | undefined
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            retry?: string | undefined
            invisible_to_owner?: boolean | undefined
          }
        } & { json: ScriptArgs }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run_wait_result/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            skip_preprocessor?: boolean | undefined
          }
        } & { json: ScriptArgs }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            payload?: string | undefined
            skip_preprocessor?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_wait_result/f/:path': {
      $post:
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run_wait_result/fv/:version': {
      $post:
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run_and_stream/f/:path': {
      $post:
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            } & { json: ScriptArgs }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run_and_stream/fv/:version': {
      $post:
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            } & { json: ScriptArgs }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                include_header?: string | undefined
                queue_limit?: string | undefined
                payload?: string | undefined
                job_id?: string | undefined
                skip_preprocessor?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
                poll_delay_ms?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run_and_stream/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            skip_preprocessor?: boolean | undefined
            poll_delay_ms?: bigint | undefined
          }
        } & { json: ScriptArgs }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            payload?: string | undefined
            skip_preprocessor?: boolean | undefined
            poll_delay_ms?: bigint | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_and_stream/h/:hash': {
      $post: {
        input: { param: { workspace: string; hash: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            skip_preprocessor?: boolean | undefined
            poll_delay_ms?: bigint | undefined
          }
        } & { json: ScriptArgs }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { workspace: string; hash: string } } & {
          query: {
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            queue_limit?: string | undefined
            payload?: string | undefined
            skip_preprocessor?: boolean | undefined
            poll_delay_ms?: bigint | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/result_by_id/:flow_job_id/:node_id': {
      $get: {
        input: { param: { workspace: string; flow_job_id: string; node_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/flow/approval_step_detail/:job_id/:step_id': {
      $get: {
        input: { param: { workspace: string; job_id: string; step_id: string } }
        output: {
          flow_id: string
          step_id: string
          status: 'not_reached' | 'skipped' | 'failed' | 'waiting' | 'resumed' | 'not_resumed'
          step_job?: string | undefined
          step_summary?: string | undefined
          required_events: number
          timeout?: number | undefined
          suspended_until?: string | undefined
          form_schema?: { [x: string]: unknown } | undefined
          hide_cancel: boolean
          continue_on_disapprove_timeout: boolean
          skin: 'detailed' | 'minimal'
          approval_conditions?:
            | {
                user_auth_required: boolean
                user_groups_required: string[]
                self_approval_disabled: boolean
              }
            | undefined
          can_approve?: boolean | undefined
          description?: { [x: string]: unknown } | undefined
          default_args?: { [x: string]: unknown } | undefined
          enums?: { [x: string]: unknown } | undefined
          approvals: {
            resume_id: number
            approver: string
            approved?: boolean | undefined
            value?: { [x: string]: unknown } | undefined
            created_at?: string | undefined
          }[]
          error?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/job_view_token/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/job_public_view_token/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list_paths': {
      $get: {
        input: { param: { workspace: string } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list_search': {
      $get: {
        input: { param: { workspace: string } }
        output: { path: string; value: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/runnables/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            order_by?: 'updated' | 'name' | undefined
            order_desc?: boolean | undefined
            kinds?: string | undefined
            show_archived?: boolean | undefined
            include_without_main?: boolean | undefined
            path_start?: string | undefined
            paths?: string | undefined
            label?: string | undefined
            search?: string | undefined
            search_any_order?: boolean | undefined
            per_page?: number | undefined
            cursor?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: { items: RunnableItem[]; next_cursor?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/runnables/counts': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            kinds?: string | undefined
            include_without_main?: boolean | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: { counts: { [x: string]: number } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            order_desc?: boolean | undefined
            created_by?: string | undefined
            path_start?: string | undefined
            path_exact?: string | undefined
            show_archived?: boolean | undefined
            starred_only?: boolean | undefined
            include_draft_only?: boolean | undefined
            with_deployment_msg?: boolean | undefined
            without_description?: boolean | undefined
            dedicated_worker?: boolean | undefined
            label?: string | undefined
          }
        }
        output: {
          summary: string
          description?: string | undefined
          value: FlowValue
          schema?: { [x: string]: unknown } | undefined
          on_behalf_of_email?: string | undefined
          on_behalf_of?: string | undefined
          workspace_id?: string | undefined
          path: string
          edited_by: string
          edited_at: string
          archived: boolean
          extra_perms: ExtraPerms
          starred?: boolean | undefined
          draft_only?: boolean | undefined
          tag?: string | undefined
          ws_error_handler_muted?: boolean | undefined
          priority?: number | undefined
          dedicated_worker?: boolean | undefined
          timeout?: number | undefined
          visible_to_runner_only?: boolean | undefined
          labels?: string[] | undefined
          job_token_scopes?: (string[] | null) | undefined
          inherited_labels?: string[] | undefined
          lock_error_logs?: string | undefined
          version_id?: number | undefined
          chat_input_enabled?: boolean | undefined
          is_draft?: boolean | undefined
          draft_path?: string | undefined
          draft_users?: { username?: (string | null) | undefined }[] | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/history/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: FlowVersion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/get_latest_version/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: FlowVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list_paths_from_workspace_runnable/:runnable_kind/:path': {
      $get: {
        input: { param: { workspace: string; runnable_kind: 'script' | 'flow'; path: string } } & {
          query: { match_path_start?: boolean | undefined }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list_paths_linking_agent/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/get/v/:version': {
      $get: {
        input: { param: { workspace: string; version: number } }
        output: Flow
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/history_update/v/:version': {
      $post: {
        input: { param: { workspace: string; version: number } } & {
          json: { deployment_msg: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { with_starred_info?: boolean | undefined; get_draft?: boolean | undefined }
        }
        output: {
          summary: string
          description?: string | undefined
          value: FlowValue
          schema?: { [x: string]: unknown } | undefined
          on_behalf_of_email?: string | undefined
          on_behalf_of?: string | undefined
          workspace_id?: string | undefined
          path: string
          edited_by: string
          edited_at: string
          archived: boolean
          extra_perms: ExtraPerms
          starred?: boolean | undefined
          draft_only?: boolean | undefined
          tag?: string | undefined
          ws_error_handler_muted?: boolean | undefined
          priority?: number | undefined
          dedicated_worker?: boolean | undefined
          timeout?: number | undefined
          visible_to_runner_only?: boolean | undefined
          labels?: string[] | undefined
          job_token_scopes?: (string[] | null) | undefined
          inherited_labels?: string[] | undefined
          lock_error_logs?: string | undefined
          version_id?: number | undefined
          is_draft: boolean
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/deployment_status/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: { lock_error_logs?: string | undefined; job_id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/get_triggers_count/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: TriggersCount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/list_tokens/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: TruncatedToken[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/toggle_workspace_error_handler/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { muted?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/create': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { skip_ci_tests?: boolean | undefined }
        } & {
          json: {
            summary: string
            description?: string | undefined
            value: FlowValue
            schema?: { [x: string]: unknown } | undefined
            on_behalf_of_email?: string | undefined
            on_behalf_of?: string | undefined
            path: string
            tag?: string | undefined
            ws_error_handler_muted?: boolean | undefined
            priority?: number | undefined
            dedicated_worker?: boolean | undefined
            timeout?: number | undefined
            visible_to_runner_only?: boolean | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            job_token_scopes?: (string[] | null) | undefined
            deployment_message?: string | undefined
            skip_draft_deletion?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/flows/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { skip_ci_tests?: boolean | undefined }
        } & {
          json: {
            summary: string
            description?: string | undefined
            value: FlowValue
            schema?: { [x: string]: unknown } | undefined
            on_behalf_of_email?: string | undefined
            on_behalf_of?: string | undefined
            path?: string | undefined
            tag?: string | undefined
            ws_error_handler_muted?: boolean | undefined
            priority?: number | undefined
            dedicated_worker?: boolean | undefined
            timeout?: number | undefined
            visible_to_runner_only?: boolean | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            job_token_scopes?: (string[] | null) | undefined
            deployment_message?: string | undefined
            skip_draft_deletion?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/archive/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { archived?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flows/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } } & {
          query: { keep_captures?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flow_conversations/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            flow_path?: string | undefined
            kind?: 'test' | 'deployed' | 'all' | undefined
            mine?: boolean | undefined
          }
        }
        output: FlowConversation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/slack_agents/channels': {
      $get: {
        input: { param: { workspace: string } }
        output: SlackAgentChannel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/slack_agents/available_channels': {
      $get: {
        input: { param: { workspace: string } } & { query: { cursor?: string | undefined } }
        output: { channels: { id: string; name: string }[]; next_cursor?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/slack_agents/status': {
      $get: {
        input: { param: { workspace: string } }
        output: { signing_secret_set: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/slack_agents/agent_channels/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: {
          slack_team_name?: string | undefined
          signing_secret_set: boolean
          bot_name?: string | undefined
          missing_scopes: string[]
          runs_as?: string | undefined
          anyone: boolean
          can_share: boolean
          channels: SlackAgentChannel[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { channel_id: string; channel_name: string; is_default?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { workspace: string; path: string } } & { query: { channel_id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flow_conversations/update/:conversation_id': {
      $post: {
        input: { param: { workspace: string; conversation_id: string } } & {
          json: { title: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flow_conversations/delete/:conversation_id': {
      $delete: {
        input: { param: { workspace: string; conversation_id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/flow_conversations/:conversation_id/messages': {
      $get: {
        input: { param: { workspace: string; conversation_id: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            after_seq?: bigint | undefined
          }
        }
        output: FlowConversationMessage[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/complete': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            system: string
            user: string
            model?: AIProviderModel | undefined
            max_tokens?: number | undefined
          }
        }
        output: { text: string; model: AIProviderModel }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/web_search': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { query: string; max_results?: number | undefined }
        }
        output: {
          results: {
            title: string
            url: string
            published_date?: string | undefined
            content: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/web_fetch': {
      $post: {
        input: { param: { workspace: string } } & { json: { url: string } }
        output: { url: string; title?: string | undefined; content: string; truncated: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/datasets/list': {
      $get: {
        input: { param: { workspace: string } }
        output: EvalDataset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/datasets/create': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            path: string
            summary?: string | undefined
            scorers?: Scorer[] | undefined
            cases?: NewEvalCase[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/datasets/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: EvalDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/datasets/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: {
            path?: string | undefined
            summary?: string | undefined
            scorers?: Scorer[] | undefined
            cases?: SaveEvalCase[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/datasets/delete/:path': {
      $post: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/cases/list/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: { cases: EvalCase[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/subject_state': {
      $get: {
        input: { param: { workspace: string } } & { query: { path: string } }
        output: { version?: bigint | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/run_payload': {
      $get: {
        input: { param: { workspace: string } } & { query: { job_id: string } }
        output: { run: { [x: string]: unknown }; rendered: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/scorer_defaults': {
      $get: {
        input: { param: { workspace: string } }
        output: { judge_prompt: string; script_template: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/scorers/recent': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { kind?: 'script' | 'agent' | undefined }
        }
        output: {
          id?: string | undefined
          name?: string | undefined
          pass_if?: number | undefined
          kind: 'script' | 'agent'
          path: string
          dataset: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/experiments/run': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { dataset: string; subject: EvalSubject }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/experiments/collect': {
      $post: {
        input: { param: { workspace: string } } & { query: { id: string } }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/experiments/list_all': {
      $get: {
        input: { param: { workspace: string } } & { query: { subject_path?: string | undefined } }
        output: EvalExperiment[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_evals/experiments/results/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { id: string; baseline?: string | undefined }
        }
        output: {
          experiment: EvalExperiment
          baseline?: EvalExperiment | undefined
          scorers: Scorer[]
          rows: ExperimentRow[]
          means: ScorerMean[]
          regressed: number
          subject_current_version?: bigint | undefined
          subject_deployed_hash?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/path_autocomplete/list_paths': {
      $get: {
        input: { param: { workspace: string } } & { query: { force?: boolean | undefined } }
        output: { paths: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/raw_apps/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            order_desc?: boolean | undefined
            created_by?: string | undefined
            path_start?: string | undefined
            path_exact?: string | undefined
            starred_only?: boolean | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: ListableRawApp[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/shared_ui/get': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          files: { [x: string]: string }
          version: bigint
          edited_at: string
          edited_by: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/shared_ui/list': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          paths: string[]
          sizes: { [x: string]: bigint }
          version: bigint
          edited_at: string
          edited_by: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/shared_ui/version': {
      $get: {
        input: { param: { workspace: string } }
        output: { version: bigint }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/shared_ui': {
      $put: {
        input: { param: { workspace: string } } & { json: { files: { [x: string]: string } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/usage': {
      $post: {
        input: { param: { workspace: string } } & { json: { events: AITokenUsageEvent[] } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            days?: number | undefined
            group_by?: 'day' | 'user' | 'model' | undefined
            scope?: 'workspace' | 'self' | undefined
          }
        }
        output: { buckets: AITokenUsageBucket[]; truncated: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_session_tools/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: {
            args?: { [x: string]: unknown } | undefined
            context?:
              | {
                  live_editors?:
                    | { kind: string; storage_path: string; effective_path?: string | undefined }[]
                    | undefined
                  cells?:
                    | { kind: string; storage_path: string; value: { [x: string]: unknown } }[]
                    | undefined
                }
              | undefined
          }
        }
        output: { text: string; is_error: boolean; effects: { [x: string]: unknown }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/sessions/list': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          enabled: boolean
          storage_id?: string | undefined
          backup_generation?: number | undefined
          fallback?: boolean | undefined
          sessions: AISessionBackupListing[]
          truncated?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/sessions/pull': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { ids: string[]; resume?: AISessionBackupCursor | undefined }
        }
        output: {
          enabled: boolean
          storage_id?: string | undefined
          backup_generation?: number | undefined
          fallback?: boolean | undefined
          sessions: AISessionBackup[]
          deferred: string[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/sessions/push': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            owner: string
            sessions?: AISessionBackupPush[] | undefined
            removed?: string[] | undefined
          }
        }
        output: {
          enabled: boolean
          storage_id?: string | undefined
          backup_generation?: number | undefined
          fallback?: boolean | undefined
          results: { id: string; error?: string | undefined; needs_whole?: boolean | undefined }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_artifacts/share': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            artifact_id: string
            name: string
            kind: 'md' | 'html'
            version: number
            content: string
          }
        }
        output: SharedAiArtifactInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_artifacts/status': {
      $get: {
        input: { param: { workspace: string } } & { query: { artifact_id: string } }
        output: { retention_secs: number; share?: SharedAiArtifactInfo | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_artifacts/list': {
      $get: {
        input: { param: { workspace: string } }
        output: SharedAiArtifactInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_artifacts/get/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          id: string
          name: string
          kind: 'md' | 'html'
          version: number
          created_by: string
          shared_at: string
          expires_at: string
          content: string
          can_unshare: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_artifacts/delete/:id': {
      $delete: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/share': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            session_id: string
            name: string
            is_public?: boolean | undefined
            message_count: number
            snapshot: { [x: string]: unknown }
          }
        }
        output: SharedAiSessionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/status': {
      $get: {
        input: { param: { workspace: string } } & { query: { session_id: string } }
        output: { share?: SharedAiSessionInfo | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/list': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          id: string
          name: string
          is_public: boolean
          message_count: number
          created_by: string
          shared_at: string
          mine: boolean
          session_id?: string | undefined
          opened_at?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/set_public/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & { json: { is_public: boolean } }
        output: SharedAiSessionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai_u/shared_sessions/get/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          id: string
          name: string
          is_public: boolean
          message_count: number
          created_by: string
          shared_at: string
          snapshot: { [x: string]: unknown }
          can_unshare: boolean
          mine: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/opened/:id': {
      $delete: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/ai/shared_sessions/delete/:id': {
      $delete: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/get_data/v/:secretWithExtension': {
      $get:
        | {
            input: { param: { workspace: string; secretWithExtension: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; secretWithExtension: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workspace: string; secretWithExtension: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/w/:workspace/apps/list_search': {
      $get: {
        input: { param: { workspace: string } }
        output: { path: string; value: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            order_desc?: boolean | undefined
            created_by?: string | undefined
            path_start?: string | undefined
            path_exact?: string | undefined
            starred_only?: boolean | undefined
            include_draft_only?: boolean | undefined
            with_deployment_msg?: boolean | undefined
            label?: string | undefined
          }
        }
        output: ListableApp[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/create': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            path: string
            value: { [x: string]: unknown }
            summary: string
            policy: Policy
            deployment_message?: string | undefined
            custom_path?: string | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            skip_draft_deletion?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/apps/create_raw': {
      $post: {
        input: { param: { workspace: string } } & {
          form: {
            app?:
              | {
                  path: string
                  value: { [x: string]: unknown }
                  summary: string
                  policy: Policy
                  deployment_message?: string | undefined
                  custom_path?: string | undefined
                  preserve_on_behalf_of?: boolean | undefined
                  labels?: string[] | undefined
                  skip_draft_deletion?: boolean | undefined
                }
              | undefined
            js?: string | undefined
            css?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/apps/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/get/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            with_starred_info?: boolean | undefined
            get_draft?: boolean | undefined
            raw_app?: boolean | undefined
          }
        }
        output: {
          id: number
          workspace_id: string
          path: string
          summary: string
          versions: number[]
          created_by: string
          created_at: string
          value: { [x: string]: unknown }
          policy: Policy
          execution_mode: 'viewer' | 'publisher' | 'anonymous'
          extra_perms: { [x: string]: boolean }
          custom_path?: string | undefined
          raw_app: boolean
          bundle_secret?: string | undefined
          labels?: string[] | undefined
          is_draft: boolean
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/preview_sdk_token': {
      $post: {
        input: { param: { workspace: string } } & { json: { path: string; scopes: string[] } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/embed_token/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { sdk_consent?: boolean | undefined }
        }
        output: EmbedTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/get/lite/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: AppWithLastVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/history/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: AppHistory[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/get_latest_version/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: AppHistory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/list_paths_from_workspace_runnable/:runnable_kind/:path': {
      $get: {
        input: { param: { workspace: string; runnable_kind: 'script' | 'flow'; path: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/history_update/a/:id/v/:version': {
      $post: {
        input: { param: { workspace: string; id: number; version: number } } & {
          json: { deployment_msg?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/guest_entry/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: GuestEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/public_app/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: AppWithLastVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/embed_token/:secret': {
      $get: {
        input: { param: { workspace: string; secret: string } } & {
          query: { sdk_consent?: boolean | undefined }
        }
        output: EmbedTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/public_resource/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/secret_of/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/secret_of_latest_version/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/get/v/:id': {
      $get: {
        input: { param: { workspace: string; id: number } }
        output: AppWithLastVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: {
            path?: string | undefined
            summary?: string | undefined
            value?: { [x: string]: unknown } | undefined
            policy?: Policy | undefined
            execution_mode?: 'viewer' | 'publisher' | 'guest' | 'anonymous' | undefined
            deployment_message?: string | undefined
            custom_path?: string | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            skip_draft_deletion?: boolean | undefined
            allow_kind_change?: boolean | undefined
          }
        }
        output: AppDeployed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/create_raw_source': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            path: string
            summary: string
            value: {
              files: { [x: string]: string }
              runnables?: { [x: string]: unknown } | undefined
              data?: { [x: string]: unknown } | undefined
            }
            policy: Policy
            deployment_message?: string | undefined
            custom_path?: string | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            skip_draft_deletion?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/apps/update_raw_source/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: {
            path?: string | undefined
            summary?: string | undefined
            value: {
              files: { [x: string]: string }
              runnables?: { [x: string]: unknown } | undefined
              data?: { [x: string]: unknown } | undefined
            }
            policy?: Policy | undefined
            deployment_message?: string | undefined
            custom_path?: string | undefined
            preserve_on_behalf_of?: boolean | undefined
            labels?: string[] | undefined
            skip_draft_deletion?: boolean | undefined
            allow_kind_change?: boolean | undefined
          }
        }
        output: AppDeployed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/update_raw/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          form: {
            app?:
              | {
                  path?: string | undefined
                  summary?: string | undefined
                  value?: { [x: string]: unknown } | undefined
                  policy?: Policy | undefined
                  deployment_message?: string | undefined
                  custom_path?: string | undefined
                  preserve_on_behalf_of?: boolean | undefined
                  labels?: string[] | undefined
                  skip_draft_deletion?: boolean | undefined
                  allow_kind_change?: boolean | undefined
                }
              | undefined
            js?: string | undefined
            css?: string | undefined
          }
        }
        output: AppDeployed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/custom_path_exists/:custom_path': {
      $get: {
        input: { param: { workspace: string; custom_path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps/sign_s3_objects': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { s3_objects: S3Object[]; expiry_secs?: bigint | undefined }
        }
        output: S3Object[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/execute_component/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: {
            component: string
            path?: string | undefined
            version?: number | undefined
            args: { [x: string]: unknown }
            raw_code?:
              | {
                  content: string
                  language: string
                  path?: string | undefined
                  lock?: string | undefined
                  cache_ttl?: number | undefined
                  tag?: string | undefined
                  modules?: ({ [x: string]: ScriptModule } | null) | undefined
                }
              | undefined
            id?: number | undefined
            force_viewer_static_fields?: { [x: string]: unknown } | undefined
            force_viewer_one_of_fields?: { [x: string]: unknown } | undefined
            force_viewer_allow_user_resources?: string[] | undefined
            force_viewer_sensitive_inputs?: string[] | undefined
            force_viewer_delete_after_secs?: number | undefined
            run_query_params?: { [x: string]: unknown } | undefined
            temp_script_refs?: ({ [x: string]: string } | null) | undefined
            on_behalf_of?: (string | null) | undefined
            viewer_data_access?: (boolean | null) | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/upload_s3_file/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key?: string | undefined
            file_extension?: string | undefined
            s3_resource_path?: string | undefined
            resource_type?: string | undefined
            storage?: string | undefined
            content_type?: string | undefined
            content_disposition?: string | undefined
          }
        } & { json: File }
        output: { file_key: string; delete_token: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/delete_s3_file': {
      $delete: {
        input: { param: { workspace: string } } & { query: { delete_token: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/load_file_metadata/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            storage?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: WindmillFileMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/load_file_preview/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            file_size_in_bytes?: number | undefined
            file_mime_type?: string | undefined
            csv_separator?: string | undefined
            csv_has_header?: boolean | undefined
            read_bytes_from: number
            read_bytes_length: number
            storage?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: WindmillFilePreview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/load_parquet_preview/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            offset?: number | undefined
            limit?: number | undefined
            sort_col?: string | undefined
            sort_desc?: boolean | undefined
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/load_csv_preview/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            offset?: number | undefined
            limit?: number | undefined
            sort_col?: string | undefined
            sort_desc?: boolean | undefined
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            csv_separator?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/load_table_count/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: { count?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/apps_u/download_s3_parquet_file_as_csv/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            file_key: string
            storage?: string | undefined
            sig?: string | undefined
            exp?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run/f/:path': {
      $post:
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                scheduled_for?: string | undefined
                scheduled_in_secs?: number | undefined
                skip_preprocessor?: boolean | undefined
                parent_job?: string | undefined
                tag?: string | undefined
                job_id?: string | undefined
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { workspace: string; path: string } } & {
              query: {
                scheduled_for?: string | undefined
                scheduled_in_secs?: number | undefined
                skip_preprocessor?: boolean | undefined
                parent_job?: string | undefined
                tag?: string | undefined
                job_id?: string | undefined
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run/fv/:version': {
      $post:
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                scheduled_for?: string | undefined
                scheduled_in_secs?: number | undefined
                skip_preprocessor?: boolean | undefined
                parent_job?: string | undefined
                tag?: string | undefined
                job_id?: string | undefined
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { workspace: string; version: bigint } } & {
              query: {
                scheduled_for?: string | undefined
                scheduled_in_secs?: number | undefined
                skip_preprocessor?: boolean | undefined
                parent_job?: string | undefined
                tag?: string | undefined
                job_id?: string | undefined
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: ScriptArgs }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run/batch_rerun_jobs': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            job_ids: string[]
            script_options_by_path: {
              [x: string]: {
                input_transforms?: { [x: string]: InputTransform } | undefined
                use_latest_version?: boolean | undefined
              }
            }
            flow_options_by_path: {
              [x: string]: {
                input_transforms?: { [x: string]: InputTransform } | undefined
                use_latest_version?: boolean | undefined
              }
            }
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/restart/f/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            scheduled_for?: string | undefined
            scheduled_in_secs?: number | undefined
            parent_job?: string | undefined
            tag?: string | undefined
            job_id?: string | undefined
            include_header?: string | undefined
            invisible_to_owner?: boolean | undefined
          }
        } & {
          json: {
            step_id: string
            branch_or_iteration_n?: number | undefined
            flow_version?: number | undefined
            nested_path?:
              | { step_id: string; branch_or_iteration_n?: number | undefined }[]
              | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/h/:hash': {
      $post: {
        input: { param: { workspace: string; hash: string } } & {
          query: {
            scheduled_for?: string | undefined
            scheduled_in_secs?: number | undefined
            skip_preprocessor?: boolean | undefined
            parent_job?: string | undefined
            tag?: string | undefined
            cache_ttl?: string | undefined
            job_id?: string | undefined
            retry?: string | undefined
            include_header?: string | undefined
            invisible_to_owner?: boolean | undefined
          }
        } & { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/preview': {
      $post: {
        input: { param: { workspace: string } } & {
          query: {
            include_header?: string | undefined
            invisible_to_owner?: boolean | undefined
            timeout?: number | undefined
            job_id?: string | undefined
          }
        } & { json: Preview }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run_inline/preview': {
      $post: {
        input: { param: { workspace: string } } & { json: PreviewInline }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_inline/p/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: InlineScriptArgs }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_inline/h/:hash': {
      $post: {
        input: { param: { workspace: string; hash: string } } & { json: InlineScriptArgs }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_wait_result/preview': {
      $post: {
        input: { param: { workspace: string } } & { json: Preview }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/workflow_as_code/:job_id/:entrypoint': {
      $post: {
        input: { param: { workspace: string; job_id: string; entrypoint: string } } & {
          json: WorkflowTask
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/dependencies': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { raw_scripts: RawScriptForDependencies[]; entrypoint: string }
        }
        output: { lock: string }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/dependencies_async': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { raw_scripts: RawScriptForDependencies[]; entrypoint: string }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/flow_dependencies_async': {
      $post: {
        input: { param: { workspace: string } } & { json: { path: string; flow_value: FlowValue } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/flow_test/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { job_id?: string | undefined }
        } & {
          json: {
            args?: ScriptArgs | undefined
            steps?:
              | {
                  [x: string]: {
                    return_value?: { [x: string]: unknown } | undefined
                    function?: string | undefined
                  }
                }
              | undefined
            caller_job_id?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run/preview_flow': {
      $post:
        | {
            input: { param: { workspace: string } } & {
              query: {
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                job_id?: string | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: FlowPreview }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { workspace: string } } & {
              query: {
                include_header?: string | undefined
                invisible_to_owner?: boolean | undefined
                job_id?: string | undefined
                memory_id?: string | undefined
                take_over?: boolean | undefined
              }
            } & { json: FlowPreview }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run/agent/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          query: { memory_id?: string | undefined; take_over?: boolean | undefined }
        } & {
          json: {
            user_message?: string | undefined
            user_attachments?: { [x: string]: unknown }[] | undefined
            previous_messages?: { [x: string]: unknown }[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/run_wait_result/preview_flow': {
      $post:
        | {
            input: { param: { workspace: string } } & {
              query: { memory_id?: string | undefined; take_over?: boolean | undefined }
            } & { json: FlowPreview }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace: string } } & {
              query: { memory_id?: string | undefined; take_over?: boolean | undefined }
            } & { json: FlowPreview }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/w/:workspace/jobs/run/dynamic_select': {
      $post: {
        input: { param: { workspace: string } } & { json: DynamicInputData }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/queue/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            order_desc?: boolean | undefined
            created_by?: string | undefined
            parent_job?: string | undefined
            worker?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            trigger_path?: string | undefined
            trigger_kind?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            success?: boolean | undefined
            scheduled_for_before_now?: boolean | undefined
            job_kinds?: string | undefined
            suspended?: boolean | undefined
            running?: boolean | undefined
            args?: string | undefined
            result?: string | undefined
            allow_wildcards?: boolean | undefined
            tag?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            all_workspaces?: boolean | undefined
            is_not_schedule?: boolean | undefined
          }
        }
        output: QueuedJob[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/count': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { all_workspaces?: boolean | undefined }
        }
        output: { database_length: number; suspended?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/oldest': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { all_workspaces?: boolean | undefined }
        }
        output: { created_at?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/count': {
      $get: {
        input: { param: { workspace: string } }
        output: { database_length: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/count_jobs': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            completed_after_s_ago?: number | undefined
            success?: boolean | undefined
            tags?: string | undefined
            all_workspaces?: boolean | undefined
          }
        }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/list_filtered_uuids': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            order_desc?: boolean | undefined
            created_by?: string | undefined
            label?: string | undefined
            worker?: string | undefined
            parent_job?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            created_before?: string | undefined
            created_after?: string | undefined
            completed_before?: string | undefined
            completed_after?: string | undefined
            created_before_queue?: string | undefined
            created_after_queue?: string | undefined
            running?: boolean | undefined
            scheduled_for_before_now?: boolean | undefined
            job_kinds?: string | undefined
            suspended?: boolean | undefined
            args?: string | undefined
            tag?: string | undefined
            result?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            is_skipped?: boolean | undefined
            resolved?: boolean | undefined
            is_flow_step?: boolean | undefined
            has_null_parent?: boolean | undefined
            success?: boolean | undefined
            status?: 'success' | 'failure' | 'canceled' | 'skipped' | undefined
            all_workspaces?: boolean | undefined
            is_not_schedule?: boolean | undefined
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/list_filtered_uuids': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            order_desc?: boolean | undefined
            created_by?: string | undefined
            parent_job?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            success?: boolean | undefined
            scheduled_for_before_now?: boolean | undefined
            job_kinds?: string | undefined
            suspended?: boolean | undefined
            running?: boolean | undefined
            args?: string | undefined
            result?: string | undefined
            allow_wildcards?: boolean | undefined
            tag?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            concurrency_key?: string | undefined
            has_null_parent?: boolean | undefined
            all_workspaces?: boolean | undefined
            is_not_schedule?: boolean | undefined
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/run_now/:id': {
      $post: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/cancel_selection': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { force_cancel?: boolean | undefined; all_workspaces?: boolean | undefined }
        } & { json: string[] }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/get_otel_traces/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trigger/:trigger_kind/resume_suspended_trigger_jobs/:trigger_path': {
      $post: {
        input: {
          param: { workspace: string; trigger_kind: JobTriggerKind; trigger_path: string }
        } & { json: { job_ids?: string[] | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/trigger/:trigger_kind/cancel_suspended_trigger_jobs/:trigger_path': {
      $post: {
        input: {
          param: { workspace: string; trigger_kind: JobTriggerKind; trigger_path: string }
        } & { json: { job_ids?: string[] | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            order_desc?: boolean | undefined
            created_by?: string | undefined
            label?: string | undefined
            worker?: string | undefined
            parent_job?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            success?: boolean | undefined
            status?: 'success' | 'failure' | 'canceled' | 'skipped' | undefined
            job_kinds?: string | undefined
            args?: string | undefined
            result?: string | undefined
            allow_wildcards?: boolean | undefined
            tag?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            is_skipped?: boolean | undefined
            resolved?: boolean | undefined
            is_flow_step?: boolean | undefined
            has_null_parent?: boolean | undefined
            is_not_schedule?: boolean | undefined
          }
        }
        output: CompletedJob[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/export': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: ExportableCompletedJob[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/import': {
      $post: {
        input: { param: { workspace: string } } & { json: ExportableCompletedJob[] }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/export': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: ExportableQueuedJob[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/import': {
      $post: {
        input: { param: { workspace: string } } & { json: ExportableQueuedJob[] }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/delete': {
      $post: {
        input: { param: { workspace: string } } & { json: string[] }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/recent_runs': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            folder?: string | undefined
            failed_ids_kind?: 'script' | 'flow' | 'agent' | undefined
            failed_ids_path?: string | undefined
          }
        }
        output: {
          window_hours: number
          capped: boolean
          total_runs: number
          failed_runs: number
          failing_items: number
          running_items: number
          items: {
            path: string
            kind: 'script' | 'flow' | 'agent'
            summary?: string | undefined
            status: RecentRunStatus
            failed_runs: number
            failed_run_ids?: string[] | undefined
            runs: {
              id: string
              status: RecentRunStatus
              ran_at: string
              duration_ms?: number | undefined
            }[]
          }[]
          hidden_items: RecentRunHiddenItem[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/recent_runs/hide': {
      $post: {
        input: { param: { workspace: string } } & { json: RecentRunItemRefs }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/recent_runs/unhide': {
      $post: {
        input: { param: { workspace: string } } & { json: RecentRunItemRefs }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            created_by?: string | undefined
            label?: string | undefined
            worker?: string | undefined
            parent_job?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            created_before?: string | undefined
            created_after?: string | undefined
            completed_before?: string | undefined
            completed_after?: string | undefined
            created_before_queue?: string | undefined
            created_after_queue?: string | undefined
            running?: boolean | undefined
            scheduled_for_before_now?: boolean | undefined
            job_kinds?: string | undefined
            suspended?: boolean | undefined
            args?: string | undefined
            tag?: string | undefined
            result?: string | undefined
            allow_wildcards?: boolean | undefined
            per_page?: number | undefined
            trigger_kind?: string | undefined
            is_skipped?: boolean | undefined
            resolved?: boolean | undefined
            is_flow_step?: boolean | undefined
            has_null_parent?: boolean | undefined
            success?: boolean | undefined
            status?: 'success' | 'failure' | 'canceled' | 'skipped' | undefined
            all_workspaces?: boolean | undefined
            is_not_schedule?: boolean | undefined
            excludes_entrypoint_override?: boolean | undefined
            broad_filter?: string | undefined
          }
        }
        output: Job[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/db_clock': { $get: { input: {}; output: number; outputFormat: 'json'; status: 200 } }
  } & {
    '/jobs/completed/count_by_tag': {
      $get: {
        input: { query: { horizon_secs?: number | undefined; workspace_id?: string | undefined } }
        output: { tag: string; count: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            no_logs?: boolean | undefined
            no_code?: boolean | undefined
            approval_token?: string | undefined
          }
        }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_root_job_id/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/worker_is_draining/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_logs/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: { remove_ansi_warnings?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_flow_all_logs/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_flow_all_logs_structured/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          job_id: string
          label: string
          kind: string
          flow_step_id?: (string | null) | undefined
          step_path?: (string | null) | undefined
          depth: number
          parent_module_type?: (string | null) | undefined
          sibling_index: number
          sibling_count: number
          logs: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_flow_all_results/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: { max_result_len?: number | undefined; step?: string | undefined }
        }
        output: {
          enclosing_job?: string | undefined
          entries: {
            job_id: string
            label: string
            kind: string
            flow_step_id?: (string | null) | undefined
            step_path?: (string | null) | undefined
            depth: number
            parent_module_type?: (string | null) | undefined
            sibling_index: number
            sibling_count: number
            status:
              | 'success'
              | 'failure'
              | 'canceled'
              | 'skipped'
              | 'suspended'
              | 'running'
              | 'queued'
            success?: boolean | undefined
            duration_ms?: bigint | undefined
            started_at?: string | undefined
            result_prefix?: string | undefined
            result_length?: number | undefined
          }[]
          truncated?: boolean | undefined
          scope_filtered?: boolean | undefined
          step_error?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_completed_logs_tail/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_args/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/queue/get_started_at_by_ids': {
      $post: {
        input: { param: { workspace: string } } & { json: string[] }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/getupdate/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            running?: boolean | undefined
            log_offset?: number | undefined
            stream_offset?: number | undefined
            get_progress?: boolean | undefined
            no_logs?: boolean | undefined
          }
        }
        output: {
          running?: boolean | undefined
          completed?: boolean | undefined
          new_logs?: string | undefined
          log_offset?: number | undefined
          mem_peak?: number | undefined
          progress?: number | undefined
          stream_offset?: number | undefined
          new_result_stream?: string | undefined
          flow_status?: FlowStatus | undefined
          workflow_as_code_status?: WorkflowStatus | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/getupdate_sse/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            running?: boolean | undefined
            log_offset?: number | undefined
            stream_offset?: number | undefined
            get_progress?: boolean | undefined
            only_result?: boolean | undefined
            no_logs?: boolean | undefined
            fast?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_log_file/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_flow_debug_info/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/completed/get/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: CompletedJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/completed/get_result/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            suspended_job?: string | undefined
            resume_id?: number | undefined
            secret?: string | undefined
            approver?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/completed/get_result_maybe/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: { get_started?: boolean | undefined }
        }
        output: {
          completed: boolean
          result: { [x: string]: unknown }
          success?: boolean | undefined
          started?: boolean | undefined
          is_skipped?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/completed/get_timing/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          created_at: string
          started_at?: string | undefined
          duration_ms?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/dispatch_events/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          subscriber_path: string
          asset_kind:
            | 's3object'
            | 'resource'
            | 'variable'
            | 'ducklake'
            | 'datatable'
            | 'volume'
            | 'dbt'
          asset_path: string
          outcome: 'dispatched' | 'join_pending' | 'skipped'
          child_job_id?: string | undefined
          partition?: string | undefined
          received_inputs?: number | undefined
          required_inputs?: number | undefined
          debounce_s?: number | undefined
          reason?: string | undefined
          created_at: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/asset_dispatch_edges': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { path_start: string; created_after?: string | undefined }
        }
        output: {
          producer_job_id: string
          child_job_id?: string | undefined
          subscriber_path: string
          outcome: 'dispatched' | 'join_pending'
          asset_kind:
            | 's3object'
            | 'resource'
            | 'variable'
            | 'ducklake'
            | 'datatable'
            | 'volume'
            | 'dbt'
          asset_path: string
          created_at: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/delete/:id': {
      $post: {
        input: { param: { workspace: string; id: string } }
        output: CompletedJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/resolve': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { job_ids: string[]; note?: string | undefined; superseded_by?: string | undefined }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/completed/unresolve': {
      $post: {
        input: { param: { workspace: string } } & { json: { job_ids: string[] } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/queue/cancel/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & {
          json: { reason?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/queue/cancel_persistent/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { reason?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/queue/force_cancel/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & {
          json: { reason?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/position/:scheduled_for': {
      $get: {
        input: { param: { workspace: string; scheduled_for: number } }
        output: { position?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/queue/scheduled_for/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/job_signature/:id/:resume_id': {
      $get: {
        input: { param: { workspace: string; id: string; resume_id: number } } & {
          query: { approver?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/resume_urls/:id/:resume_id': {
      $get: {
        input: { param: { workspace: string; id: string; resume_id: number } } & {
          query: { approver?: string | undefined; flow_level?: boolean | undefined }
        }
        output: { approvalPage: string; resume: string; cancel: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/wac_approval_urls/:id/:step_key': {
      $get: {
        input: { param: { workspace: string; id: string; step_key: string } } & {
          query: { approver?: string | undefined }
        }
        output: { approvalPage: string; resume: string; cancel: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/slack_approval/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            approver?: string | undefined
            message?: string | undefined
            slack_resource_path: string
            channel_id: string
            flow_step_id: string
            default_args_json?: string | undefined
            dynamic_enums_json?: string | undefined
            resume_button_text?: string | undefined
            cancel_button_text?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/teams_approval/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            approver?: string | undefined
            message?: string | undefined
            team_name: string
            channel_name: string
            flow_step_id: string
            default_args_json?: string | undefined
            dynamic_enums_json?: string | undefined
            resume_button_text?: string | undefined
            cancel_button_text?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/flow/resume_suspended/:job_id': {
      $post: {
        input: { param: { workspace: string; job_id: string } } & {
          json: {
            payload?: { [x: string]: unknown } | undefined
            approval_token?: string | undefined
            approved?: boolean | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs_u/flow/approval_info/:job_id': {
      $get: {
        input: { param: { workspace: string; job_id: string } } & {
          query: { token?: string | undefined }
        }
        output: {
          flow_id: string
          form_schema?: { [x: string]: unknown } | undefined
          description?: { [x: string]: unknown } | undefined
          approval_conditions?:
            | {
                user_auth_required: boolean
                user_groups_required: string[]
                self_approval_disabled: boolean
              }
            | undefined
          can_approve: boolean
          user_auth_required: boolean
          hide_cancel?: boolean | undefined
          skin: 'detailed' | 'minimal'
          step_summary?: string | undefined
          flow_summary?: string | undefined
          approvers: { resume_id: number; approver: string }[]
          view_token?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs_u/resume/:id/:resume_id/:signature': {
      $get: {
        input: {
          param: { workspace: string; id: string; resume_id: number; signature: string }
        } & { query: { payload?: string | undefined; approver?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 201
      }
      $post: {
        input: {
          param: { workspace: string; id: string; resume_id: number; signature: string }
        } & { query: { approver?: string | undefined } } & { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs/flow/user_states/:id/:key': {
      $post: {
        input: { param: { workspace: string; id: string; key: string } } & {
          json: { [x: string]: unknown }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { workspace: string; id: string; key: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/flow/resume/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs_u/cancel/:id/:resume_id/:signature': {
      $get: {
        input: {
          param: { workspace: string; id: string; resume_id: number; signature: string }
        } & { query: { approver?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 201
      }
      $post: {
        input: {
          param: { workspace: string; id: string; resume_id: number; signature: string }
        } & { query: { approver?: string | undefined } } & { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/jobs_u/get_flow/:id/:resume_id/:signature': {
      $get: {
        input: {
          param: { workspace: string; id: string; resume_id: number; signature: string }
        } & { query: { approver?: string | undefined } }
        output: {
          job: Job
          approvers: { resume_id: number; approver: string }[]
          view_token?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/preview': {
      $post: {
        input: { json: { schedule: string; timezone: string; cron_version?: string | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewSchedule }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/schedules/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditSchedule }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/setenabled/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { enabled: boolean; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          edited_by: string
          edited_at: string
          schedule: string
          timezone: string
          enabled: boolean
          script_path: string
          is_flow: boolean
          args?: ScriptArgs | undefined
          extra_perms: { [x: string]: boolean }
          email: string
          permissioned_as: string
          error?: (string | null) | undefined
          on_failure?: (string | null) | undefined
          on_failure_times?: (number | null) | undefined
          on_failure_exact?: (boolean | null) | undefined
          on_failure_extra_args?: ScriptArgs | undefined
          on_recovery?: (string | null) | undefined
          on_recovery_times?: (number | null) | undefined
          on_recovery_extra_args?: ScriptArgs | undefined
          on_success?: (string | null) | undefined
          on_success_extra_args?: ScriptArgs | undefined
          ws_error_handler_muted?: boolean | undefined
          retry?: Retry | undefined
          summary?: (string | null) | undefined
          description?: (string | null) | undefined
          no_flow_overlap?: boolean | undefined
          tag?: (string | null) | undefined
          paused_until?: (string | null) | undefined
          cron_version?: (string | null) | undefined
          dynamic_skip?: (string | null) | undefined
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          inherited_labels?: string[] | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            args?: string | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            schedule_path?: string | undefined
            description?: string | undefined
            summary?: string | undefined
            broad_filter?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: Schedule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/list_with_jobs': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: ScheduleWJobs[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/schedules/setdefaulthandler': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            handler_type: 'error' | 'recovery' | 'success'
            override_existing: boolean
            path?: string | undefined
            extra_args?: { [x: string]: unknown } | undefined
            number_of_occurence?: number | undefined
            number_of_occurence_exact?: boolean | undefined
            workspace_handler_muted?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/w/:workspace/openapi/generate': {
      $post: {
        input: { param: { workspace: string } } & { json: GenerateOpenapiSpec }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/openapi/download': {
      $post: {
        input: { param: { workspace: string } } & { json: GenerateOpenapiSpec }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/create_many': {
      $post: {
        input: { param: { workspace: string } } & { json: NewHttpTrigger[] }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/http_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewHttpTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/http_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditHttpTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          route_path: string
          static_asset_config?:
            | ({ s3: string; storage?: string | undefined; filename?: string | undefined } | null)
            | undefined
          http_method: HttpMethod
          authentication_resource_path?: (string | null) | undefined
          summary?: (string | null) | undefined
          description?: (string | null) | undefined
          request_type: HttpRequestType
          authentication_method: AuthenticationMethod
          is_static_website: boolean
          workspaced_route: boolean
          wrap_body: boolean
          raw_string: boolean
          allowed_origins?: (string[] | null) | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: HttpTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/route_exists': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            route_path: string
            http_method: HttpMethod
            trigger_path?: string | undefined
            workspaced_route?: boolean | undefined
          }
        }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/http_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewWebsocketTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditWebsocketTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          url: string
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          filters: TriggerFilter[]
          filter_logic?: 'and' | 'or' | undefined
          run_on_filter_error?: boolean | undefined
          initial_messages?: (WebsocketTriggerInitialMessage[] | null) | undefined
          url_runnable_args?: ScriptArgs | undefined
          can_return_message: boolean
          can_return_error_result: boolean
          heartbeat?: WebsocketHeartbeat | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: WebsocketTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/websocket_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            url: string
            url_runnable_args?: ScriptArgs | undefined
            can_return_message: boolean
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewKafkaTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditKafkaTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          kafka_resource_path: string
          group_id: string
          topics: string[]
          filters: TriggerFilter[]
          filter_logic?: 'and' | 'or' | undefined
          run_on_filter_error?: boolean | undefined
          auto_offset_reset?: 'latest' | 'earliest' | undefined
          auto_commit?: boolean | undefined
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: KafkaTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { connection: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/reset_offsets/:path': {
      $post: {
        input: { param: { workspace: string; path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/kafka_triggers/commit_offsets/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { topic: string; partition: number; offset: bigint }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewNatsTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/nats_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditNatsTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          nats_resource_path: string
          use_jetstream: boolean
          stream_name?: (string | null) | undefined
          consumer_name?: (string | null) | undefined
          subjects: string[]
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: NatsTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/nats_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { connection: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewSqsTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditSqsTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          queue_url: string
          aws_auth_resource_type: AwsAuthResourceType
          aws_resource_path: string
          message_attributes?: (string[] | null) | undefined
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: SqsTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/sqs_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { connection: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/list': {
      $get: {
        input: { param: { workspace: string } }
        output: WorkspaceIntegrations[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/exists': {
      $get: {
        input: { param: { workspace: string; service_name: NativeServiceName } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/create': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          json: WorkspaceOAuthConfig
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/generate_connect_url': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          json: { resource_path?: string | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/instance_sharing_available': {
      $get: {
        input: { param: { workspace: string; service_name: NativeServiceName } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/connections': {
      $get: {
        input: { param: { workspace: string; service_name: NativeServiceName } }
        output: NativeTriggerConnection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/connections/delete': {
      $delete: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          query: { path: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/workspace_connection': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          json: { path?: (string | null) | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/delete': {
      $delete: {
        input: { param: { workspace: string; service_name: NativeServiceName } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/integrations/:service_name/callback': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          json: { code: string; state: string }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/create': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          json: NativeTriggerData
        }
        output: CreateTriggerResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/update/:external_id': {
      $post: {
        input: {
          param: { workspace: string; service_name: NativeServiceName; external_id: string }
        } & { json: NativeTriggerData }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/get/:external_id': {
      $get: {
        input: {
          param: { workspace: string; service_name: NativeServiceName; external_id: string }
        }
        output: NativeTriggerWithExternal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/delete/:external_id': {
      $delete: {
        input: {
          param: { workspace: string; service_name: NativeServiceName; external_id: string }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/setenabled/:external_id': {
      $post: {
        input: {
          param: { workspace: string; service_name: NativeServiceName; external_id: string }
        } & { json: { enabled: boolean } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/list': {
      $get: {
        input: { param: { workspace: string; service_name: NativeServiceName } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: NativeTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/exists/:external_id': {
      $get: {
        input: {
          param: { workspace: string; service_name: NativeServiceName; external_id: string }
        }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/:service_name/sync': {
      $post: {
        input: { param: { workspace: string; service_name: NativeServiceName } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/nextcloud/events': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { connection_path?: string | undefined }
        }
        output: NextCloudEventType[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/google/calendars': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { connection_path?: string | undefined }
        }
        output: GoogleCalendarEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/google/drive/files': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            connection_path?: string | undefined
            q?: string | undefined
            parent_id?: string | undefined
            page_token?: string | undefined
            shared_with_me?: boolean | undefined
          }
        }
        output: GoogleDriveFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/google/drive/shared_drives': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { connection_path?: string | undefined }
        }
        output: SharedDriveEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/native_triggers/github/repos': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { connection_path?: string | undefined }
        }
        output: GithubRepoEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/native_triggers/:service_name/w/:workspace_id/webhook/:internal_id': {
      $post: {
        input: {
          param: { service_name: NativeServiceName; workspace_id: string; internal_id: bigint }
        } & { json: { [x: string]: unknown } | string }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewMqttTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditMqttTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          mqtt_resource_path: string
          subscribe_topics: MqttSubscribeTopic[]
          v3_config?: MqttV3Config | undefined
          v5_config?: MqttV5Config | undefined
          client_id?: (string | null) | undefined
          client_version?: MqttClientVersion | undefined
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: MqttTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/mqtt_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { connection: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewAmqpTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditAmqpTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          amqp_resource_path: string
          queue_name: string
          exchange?: AmqpExchange | undefined
          options?: AmqpOptions | undefined
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: AmqpTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/amqp_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { amqp_resource_path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: GcpTriggerData }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: GcpTriggerData }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          gcp_resource_path?: string | undefined
          project_id?: string | undefined
          topic_id: string
          subscription_id: string
          server_id?: string | undefined
          delivery_type: DeliveryType
          delivery_config?: PushConfig | undefined
          subscription_mode: SubscriptionMode
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: GcpTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { connection: { [x: string]: unknown } } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/subscriptions/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } } & { json: DeleteGcpSubscription }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/subscriptions/delete': {
      $delete: {
        input: { param: { workspace: string } } & { json: DeleteGcpSubscription }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/topics/list/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { project_id?: string | undefined }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/topics/list': {
      $get: {
        input: { param: { workspace: string } } & { query: { project_id?: string | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/subscriptions/list/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: GetAllTopicSubscription }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/gcp_triggers/subscriptions/list': {
      $post: {
        input: { param: { workspace: string } } & { json: GetAllTopicSubscription }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: AzureTriggerData }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/azure_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: AzureTriggerData }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          azure_resource_path: string
          azure_mode: AzureMode
          scope_resource_id: string
          topic_name?: (string | null) | undefined
          subscription_name: string
          event_type_filters?: (string[] | null) | undefined
          server_id?: string | undefined
          last_server_ping?: string | undefined
          error?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: AzureTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: TestAzureConnection }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/namespaces/topics/list/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: AzureListTopics }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/namespaces/subscriptions/list/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: AzureListSubscriptions }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/subscriptions/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } } & { json: AzureDeleteSubscription }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/namespaces/list/:path': {
      $post: {
        input: { param: { workspace: string; path: string } }
        output: AzureArmResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/azure_triggers/basic/topics/list/:path': {
      $post: {
        input: { param: { workspace: string; path: string } }
        output: AzureArmResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/postgres/version/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/is_valid_postgres_configuration/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/create_template_script': {
      $post: {
        input: { param: { workspace: string } } & { json: TemplateScript }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/get_template_script/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/slot/list/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: SlotList[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/slot/create/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: Slot }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/slot/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } } & { json: Slot }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/publication/list/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/publication/get/:publication/:path': {
      $get: {
        input: { param: { workspace: string; path: string; publication: string } }
        output: PublicationData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/publication/create/:publication/:path': {
      $post: {
        input: { param: { workspace: string; path: string; publication: string } } & {
          json: PublicationData
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/publication/update/:publication/:path': {
      $post: {
        input: { param: { workspace: string; path: string; publication: string } } & {
          json: PublicationData
        }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/publication/delete/:publication/:path': {
      $delete: {
        input: { param: { workspace: string; path: string; publication: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewPostgresTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditPostgresTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          postgres_resource_path: string
          publication_name: string
          server_id?: string | undefined
          replication_slot_name: string
          error?: string | undefined
          last_server_ping?: string | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: PostgresTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/postgres_triggers/test': {
      $post: {
        input: { param: { workspace: string } } & { json: { database: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/create': {
      $post: {
        input: { param: { workspace: string } } & { json: NewEmailTrigger }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/email_triggers/update/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & { json: EditEmailTrigger }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/delete/:path': {
      $delete: {
        input: { param: { workspace: string; path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/get/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: { get_draft?: boolean | undefined }
        }
        output: {
          path: string
          script_path: string
          permissioned_as: string
          extra_perms: { [x: string]: boolean }
          workspace_id: string
          edited_by: string
          edited_at: string
          is_flow: boolean
          mode: TriggerMode
          labels?: string[] | undefined
          draft_only?: boolean | undefined
          is_draft: boolean
          local_part: string
          workspaced_local_part?: boolean | undefined
          error_handler_path?: string | undefined
          error_handler_args?: ScriptArgs | undefined
          retry?: Retry | undefined
          draft_saved_at?: string | undefined
          draft_base?: string | undefined
          no_deployed?: boolean | undefined
          draft?: { [x: string]: unknown } | undefined
          other_drafts_users?:
            | { username?: (string | null) | undefined; draft_saved_at: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            path?: string | undefined
            is_flow?: boolean | undefined
            path_start?: string | undefined
            label?: string | undefined
            include_draft_only?: boolean | undefined
          }
        }
        output: EmailTrigger[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/exists/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/local_part_exists': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            local_part: string
            workspaced_local_part?: boolean | undefined
            trigger_path?: string | undefined
          }
        }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/email_triggers/setmode/:path': {
      $post: {
        input: { param: { workspace: string; path: string } } & {
          json: { mode: TriggerMode; force?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/list': {
      $get: { input: {}; output: InstanceGroup[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/groups/list_with_workspaces': {
      $get: { input: {}; output: InstanceGroupWithWorkspaces[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/groups/get/:name': {
      $get: {
        input: { param: { name: string } }
        output: InstanceGroupWithWorkspaces
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/create': {
      $post: {
        input: {
          json: { name: string; summary?: string | undefined; external_id?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/update/:name': {
      $post: {
        input: { param: { name: string } } & {
          json: {
            new_summary: string
            instance_role?: (string | null) | undefined
            external_id?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/delete/:name': {
      $delete: {
        input: { param: { name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/adduser/:name': {
      $post: {
        input: { param: { name: string } } & { json: { email: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/removeuser/:name': {
      $post: {
        input: { param: { name: string } } & { json: { email: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/groups/export': {
      $get: { input: {}; output: ExportedInstanceGroup[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/groups/overwrite': {
      $post: {
        input: { json: ExportedInstanceGroup[] }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Group[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/listnames': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { only_member_of?: boolean | undefined }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/create': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { name: string; summary?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/update/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: { summary?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/delete/:name': {
      $delete: {
        input: { param: { workspace: string; name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/get/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/adduser/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: { username?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups/removeuser/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: { username?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/groups_history/get/:name': {
      $get: {
        input: { param: { workspace: string; name: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: {
          id?: number | undefined
          changed_by?: string | undefined
          changed_at?: string | undefined
          change_type?: string | undefined
          member_affected?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/triggers_history/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            trigger_kind?: string | undefined
            path?: string | undefined
          }
        }
        output: TriggerHistoryEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Folder[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/listnames': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            only_member_of?: boolean | undefined
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/create': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            name: string
            display_name?: string | undefined
            summary?: string | undefined
            owners?: string[] | undefined
            extra_perms?: { [x: string]: boolean } | undefined
            default_permissioned_as?: FolderDefaultPermissionedAs | undefined
            labels?: string[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/update/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: {
            summary?: string | undefined
            display_name?: string | undefined
            owners?: string[] | undefined
            extra_perms?: { [x: string]: boolean } | undefined
            default_permissioned_as?: FolderDefaultPermissionedAs | undefined
            labels?: string[] | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/delete/:name': {
      $delete: {
        input: { param: { workspace: string; name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/get/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: Folder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/exists/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/getusage/:name': {
      $get: {
        input: { param: { workspace: string; name: string } }
        output: {
          scripts: number
          flows: number
          apps: number
          resources: number
          agents: number
          variables: number
          schedules: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/addowner/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & { json: { owner: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders/removeowner/:name': {
      $post: {
        input: { param: { workspace: string; name: string } } & {
          json: { owner: string; write?: boolean | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/folders_history/get/:name': {
      $get: {
        input: { param: { workspace: string; name: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: {
          id?: number | undefined
          changed_by?: string | undefined
          changed_at?: string | undefined
          change_type?: string | undefined
          affected?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/list': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            ping_since?: number | undefined
          }
        }
        output: WorkerPing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/exists_workers_with_tags': {
      $get: {
        input: { query: { tags: string; workspace?: string | undefined } }
        output: { [x: string]: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/queue_metrics': {
      $get: {
        input: {}
        output: { id: string; values: { created_at: string; value: number }[] }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/runnable_stats': {
      $get: {
        input: {
          query: {
            window_secs?: number | undefined
            worker_group?: string | undefined
            workspace?: string | undefined
            order_by?: 'total_duration' | 'max_memory' | 'cpu' | undefined
            limit?: number | undefined
          }
        }
        output: RunnableStats[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/queue_metrics_series': {
      $get: {
        input: { query: { window_secs?: number | undefined } }
        output: {
          from: number
          to: number
          tags: { tag: string; count: number[][]; delay: number[][] }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/queue_status': {
      $get: {
        input: {}
        output: {
          tag: string
          waiting: number
          delay?: number | undefined
          running: number
          workers: number
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workers/queue_counts': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workers/queue_running_counts': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workers/workspace_fairness_events': {
      $get: {
        input: {}
        output: {
          timestamp: string
          operation: string
          workspace_id?: (string | null) | undefined
          parameters?: ({ [x: string]: unknown } | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/list_worker_groups': {
      $get: {
        input: {}
        output: { name: string; config: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/get/:name': {
      $get: {
        input: { param: { name: string } }
        output: Configs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/update/:name': {
      $post: {
        input: { param: { name: string } } & { json: { [x: string]: unknown } }
        output: string
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/configs/list': { $get: { input: {}; output: Config[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/configs/list_autoscaling_events/:worker_group': {
      $get: {
        input: { param: { worker_group: string } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: AutoscalingEvent[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/autoscaling_diagnostics/:worker_group': {
      $get: {
        input: { param: { worker_group: string } } & {
          query: { include_decisions?: boolean | undefined }
        }
        output: AutoscalingDiagnostics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/autoscaling_recording/:worker_group': {
      $post: {
        input: { param: { worker_group: string } } & { json: { record: boolean } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/configs/test_autoscaling/:worker_group': {
      $post: {
        input: { param: { worker_group: string } } & {
          json: {
            desired_workers: number
            integration: {
              type: 'script' | 'kubernetes' | 'dryrun'
              path?: string | undefined
              tag?: string | undefined
            }
          }
        }
        output: { job_id?: (string | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/native_kubernetes_autoscaling_healthcheck': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/configs/list_available_python_versions': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/configs/list_all_workspace_dependencies': {
      $get: {
        input: {}
        output: { workspace_id: string; name?: string | undefined; language: ScriptLang }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configs/list_all_dedicated_with_deps': {
      $get: {
        input: {}
        output: {
          workspace_id: string
          path: string
          language: ScriptLang
          workspace_dep_names: string[]
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agent_workers/create_agent_token': {
      $post: {
        input: { json: { worker_group: string; tags: string[]; exp: number } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agent_workers/blacklist_token': {
      $post: {
        input: { json: { token: string; expires_at?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/agent_workers/remove_blacklist_token': {
      $post: { input: { json: { token: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/agent_workers/list_blacklisted_tokens': {
      $get: {
        input: { query: { include_expired?: boolean | undefined } }
        output: {
          token: string
          expires_at: string
          blacklisted_at: string
          blacklisted_by: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agent_workers/get_min_version': {
      $get: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/w/:workspace/access/get': {
      $get: {
        input: { param: { workspace: string } } & { query: { principal: string } }
        output: PrincipalAccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/acls/get/:kind/:path': {
      $get: {
        input: {
          param: {
            workspace: string
            path: string
            kind:
              | 'script'
              | 'group_'
              | 'resource'
              | 'schedule'
              | 'variable'
              | 'flow'
              | 'folder'
              | 'app'
              | 'raw_app'
              | 'http_trigger'
              | 'websocket_trigger'
              | 'kafka_trigger'
              | 'nats_trigger'
              | 'postgres_trigger'
              | 'mqtt_trigger'
              | 'amqp_trigger'
              | 'gcp_trigger'
              | 'azure_trigger'
              | 'sqs_trigger'
              | 'email_trigger'
              | 'volume'
          }
        }
        output: { [x: string]: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/acls/add/:kind/:path': {
      $post: {
        input: {
          param: {
            workspace: string
            path: string
            kind:
              | 'script'
              | 'group_'
              | 'resource'
              | 'schedule'
              | 'variable'
              | 'flow'
              | 'folder'
              | 'app'
              | 'raw_app'
              | 'http_trigger'
              | 'websocket_trigger'
              | 'kafka_trigger'
              | 'nats_trigger'
              | 'postgres_trigger'
              | 'mqtt_trigger'
              | 'amqp_trigger'
              | 'gcp_trigger'
              | 'azure_trigger'
              | 'sqs_trigger'
              | 'email_trigger'
              | 'volume'
          }
        } & { json: { owner: string; write?: boolean | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/acls/remove/:kind/:path': {
      $post: {
        input: {
          param: {
            workspace: string
            path: string
            kind:
              | 'script'
              | 'group_'
              | 'resource'
              | 'schedule'
              | 'variable'
              | 'flow'
              | 'folder'
              | 'app'
              | 'raw_app'
              | 'http_trigger'
              | 'websocket_trigger'
              | 'kafka_trigger'
              | 'nats_trigger'
              | 'postgres_trigger'
              | 'mqtt_trigger'
              | 'amqp_trigger'
              | 'gcp_trigger'
              | 'azure_trigger'
              | 'sqs_trigger'
              | 'email_trigger'
              | 'volume'
          }
        } & { json: { owner: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/set_config': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            trigger_kind: CaptureTriggerKind
            path: string
            is_flow: boolean
            trigger_config?: { [x: string]: unknown } | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/ping_config/:trigger_kind/:runnable_kind/:path': {
      $post: {
        input: {
          param: {
            workspace: string
            trigger_kind: CaptureTriggerKind
            runnable_kind: 'script' | 'flow'
            path: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/get_configs/:runnable_kind/:path': {
      $get: {
        input: { param: { workspace: string; runnable_kind: 'script' | 'flow'; path: string } }
        output: CaptureConfig[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/list/:runnable_kind/:path': {
      $get: {
        input: { param: { workspace: string; runnable_kind: 'script' | 'flow'; path: string } } & {
          query: {
            trigger_kind?: CaptureTriggerKind | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: Capture[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/move/:runnable_kind/:path': {
      $post: {
        input: { param: { workspace: string; runnable_kind: 'script' | 'flow'; path: string } } & {
          json: { new_path?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/capture/:id': {
      $get: {
        input: { param: { workspace: string; id: number } }
        output: Capture
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workspace: string; id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/favorites/star': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            path?: string | undefined
            favorite_kind?: 'flow' | 'app' | 'script' | 'raw_app' | 'asset' | 'agent' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/favorites/unstar': {
      $post: {
        input: { param: { workspace: string } } & {
          json: {
            path?: string | undefined
            favorite_kind?: 'flow' | 'app' | 'script' | 'raw_app' | 'asset' | 'agent' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/inputs/history': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            runnable_id?: string | undefined
            runnable_type?: RunnableType | undefined
            page?: number | undefined
            per_page?: number | undefined
            args?: string | undefined
            include_preview?: boolean | undefined
          }
        }
        output: Input[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/inputs/:jobOrInputId/args': {
      $get: {
        input: { param: { workspace: string; jobOrInputId: string } } & {
          query: { input?: boolean | undefined; allow_large?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/inputs/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            runnable_id?: string | undefined
            runnable_type?: RunnableType | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: Input[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/inputs/create': {
      $post: {
        input: { param: { workspace: string } } & {
          query: { runnable_id?: string | undefined; runnable_type?: RunnableType | undefined }
        } & { json: CreateInput }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/inputs/update': {
      $post: {
        input: { param: { workspace: string } } & { json: UpdateInput }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/w/:workspace/inputs/delete/:input': {
      $post: {
        input: { param: { workspace: string; input: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/duckdb_connection_settings': {
      $post: {
        input: { param: { workspace: string } } & { json: { s3_resource?: S3Resource | undefined } }
        output: { connection_settings_str?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/v2/duckdb_connection_settings': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { s3_resource_path?: string | undefined }
        }
        output: { connection_settings_str: string; azure_container_path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/polars_connection_settings': {
      $post: {
        input: { param: { workspace: string } } & { json: { s3_resource?: S3Resource | undefined } }
        output: {
          endpoint_url: string
          key?: string | undefined
          secret?: string | undefined
          use_ssl: boolean
          cache_regions: boolean
          client_kwargs: PolarsClientKwargs
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/v2/polars_connection_settings': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { s3_resource_path?: string | undefined }
        }
        output: {
          s3fs_args: {
            endpoint_url: string
            key?: string | undefined
            secret?: string | undefined
            use_ssl: boolean
            cache_regions: boolean
            client_kwargs: PolarsClientKwargs
          }
          storage_options: {
            aws_endpoint_url: string
            aws_access_key_id?: string | undefined
            aws_secret_access_key?: string | undefined
            aws_region: string
            aws_allow_http: string
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/v2/s3_resource_info': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { s3_resource_path?: string | undefined }
        }
        output: S3Resource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/v2/s3_proxy_bucket': {
      $get: {
        input: { param: { workspace: string } } & { query: { storage?: string | undefined } }
        output: { bucket?: (string | null) | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/test_connection': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { storage?: string | undefined; s3_resource_path?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/storage_usage': {
      $get: {
        input: { param: { workspace: string } } & { query: { refresh?: boolean | undefined } }
        output: {
          total_bytes: bigint
          quota_bytes?: bigint | undefined
          storages: { storage: string; bytes: bigint; computed_at: string }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/list_stored_files': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            max_keys: number
            marker?: string | undefined
            prefix?: string | undefined
            search?: string | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: {
          next_marker?: string | undefined
          windmill_large_files: WindmillLargeFile[]
          restricted_access?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/list_stored_files_paged': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            prefix?: string | undefined
            max_keys?: number | undefined
            page_token?: string | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: {
          folders: StorageFolder[]
          files: StorageFile[]
          next_page_token?: string | undefined
          restricted_access: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_file_metadata': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: WindmillFileMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_file_preview': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            file_size_in_bytes?: number | undefined
            file_mime_type?: string | undefined
            csv_separator?: string | undefined
            csv_has_header?: boolean | undefined
            read_bytes_from?: number | undefined
            read_bytes_length?: number | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: WindmillFilePreview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/list_git_repo_files': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            max_keys: number
            marker?: string | undefined
            prefix?: string | undefined
            storage?: string | undefined
          }
        }
        output: {
          next_marker?: string | undefined
          windmill_large_files: WindmillLargeFile[]
          restricted_access?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_git_repo_file_preview': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            file_size_in_bytes?: number | undefined
            file_mime_type?: string | undefined
            csv_separator?: string | undefined
            csv_has_header?: boolean | undefined
            read_bytes_from?: number | undefined
            read_bytes_length?: number | undefined
            storage?: string | undefined
          }
        }
        output: WindmillFilePreview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_git_repo_file_metadata': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { file_key: string; storage?: string | undefined }
        }
        output: WindmillFileMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/check_s3_folder_exists': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { file_key: string; marker_file?: string | undefined }
        }
        output: { exists: boolean; is_folder: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_parquet_preview/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            offset?: number | undefined
            limit?: number | undefined
            sort_col?: string | undefined
            sort_desc?: boolean | undefined
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
            filters?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_table_count/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
            csv_separator?: string | undefined
            csv_has_header?: boolean | undefined
            filters?: string | undefined
          }
        }
        output: { count?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/load_csv_preview/:path': {
      $get: {
        input: { param: { workspace: string; path: string } } & {
          query: {
            offset?: number | undefined
            limit?: number | undefined
            sort_col?: string | undefined
            sort_desc?: boolean | undefined
            search_col?: string | undefined
            search_term?: string | undefined
            storage?: string | undefined
            s3_resource_path?: string | undefined
            csv_separator?: string | undefined
            csv_has_header?: boolean | undefined
            filters?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/delete_s3_file': {
      $delete: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/move_s3_file': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            src_file_key: string
            dest_file_key: string
            storage?: string | undefined
            s3_resource_path?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/upload_s3_file': {
      $post: {
        input: { param: { workspace: string } } & {
          query: {
            file_key?: string | undefined
            file_extension?: string | undefined
            s3_resource_path?: string | undefined
            resource_type?: string | undefined
            storage?: string | undefined
            content_type?: string | undefined
            content_disposition?: string | undefined
          }
        } & { json: File }
        output: { file_key: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/upload_git_repo_file_to_instance_storage': {
      $post: {
        input: { param: { workspace: string } } & {
          query: {
            file_key?: string | undefined
            file_extension?: string | undefined
            s3_resource_path?: string | undefined
            resource_type?: string | undefined
            storage?: string | undefined
            content_type?: string | undefined
            content_disposition?: string | undefined
          }
        } & { json: File }
        output: { file_key: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/download_s3_file': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            s3_resource_path?: string | undefined
            resource_type?: string | undefined
            storage?: string | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_helpers/download_s3_parquet_file_as_csv': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            file_key: string
            s3_resource_path?: string | undefined
            resource_type?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_metrics/get/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & {
          json: {
            timeseries_max_datapoints?: number | undefined
            from_timestamp?: string | undefined
            to_timestamp?: string | undefined
          }
        }
        output: {
          metrics_metadata?: MetricMetadata[] | undefined
          scalar_metrics?: ScalarMetric[] | undefined
          timeseries_metrics?: TimeseriesMetric[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_metrics/set_progress/:id': {
      $post: {
        input: { param: { workspace: string; id: string } } & {
          json: { percent?: number | undefined; flow_job_id?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/job_metrics/get_progress/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_logs/list_files': {
      $get: {
        input: {
          query: {
            before?: string | undefined
            after?: string | undefined
            with_error?: boolean | undefined
          }
        }
        output: {
          hostname: string
          mode: string
          worker_group?: string | undefined
          log_ts: string
          file_path: string
          ok_lines?: number | undefined
          err_lines?: number | undefined
          json_fmt: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_logs/get_log_file/:path': {
      $get: {
        input: { param: { path: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/concurrency_groups/list': {
      $get: { input: {}; output: ConcurrencyGroup[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/concurrency_groups/prune/:concurrency_id': {
      $delete: {
        input: { param: { concurrency_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/concurrency_groups/:id/key': {
      $get: { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/w/:workspace/concurrency_groups/list_jobs': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            concurrency_key?: string | undefined
            row_limit?: number | undefined
            created_by?: string | undefined
            label?: string | undefined
            parent_job?: string | undefined
            script_path_exact?: string | undefined
            script_path_start?: string | undefined
            schedule_path?: string | undefined
            script_hash?: string | undefined
            started_before?: string | undefined
            started_after?: string | undefined
            running?: boolean | undefined
            scheduled_for_before_now?: boolean | undefined
            completed_before?: string | undefined
            completed_after?: string | undefined
            created_before_queue?: string | undefined
            created_after_queue?: string | undefined
            job_kinds?: string | undefined
            args?: string | undefined
            tag?: string | undefined
            result?: string | undefined
            allow_wildcards?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            trigger_kind?: string | undefined
            is_skipped?: boolean | undefined
            resolved?: boolean | undefined
            is_flow_step?: boolean | undefined
            has_null_parent?: boolean | undefined
            success?: boolean | undefined
            status?: 'success' | 'failure' | 'canceled' | 'skipped' | undefined
            all_workspaces?: boolean | undefined
            is_not_schedule?: boolean | undefined
          }
        }
        output: ExtendedJobs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/srch/w/:workspace/index/search/job': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { search_query: string; pagination_offset?: number | undefined }
        }
        output: {
          query_parse_errors?: string[] | undefined
          hits?: JobSearchHit[] | undefined
          hit_count?: number | undefined
          index_metadata?:
            | {
                indexed_until?: string | undefined
                lost_lock_ownership?: boolean | undefined
                max_index_time_window_secs?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/srch/index/search/service_logs': {
      $get: {
        input: {
          query: {
            search_query: string
            mode: string
            worker_group?: string | undefined
            hostname: string
            min_ts?: string | undefined
            max_ts?: string | undefined
          }
        }
        output: { query_parse_errors?: string[] | undefined; hits?: LogSearchHit[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/srch/index/search/count_service_logs': {
      $get: {
        input: {
          query: { search_query: string; min_ts?: string | undefined; max_ts?: string | undefined }
        }
        output: {
          query_parse_errors?: string[] | undefined
          count_per_host?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/srch/index/storage/disk': {
      $get: {
        input: {}
        output: {
          job_index_disk_size_bytes?: (number | null) | undefined
          log_index_disk_size_bytes?: (number | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indexer/delete/:idx_name': {
      $delete: {
        input: { param: { idx_name: 'JobIndex' | 'ServiceLogIndex' } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/indexer/storage': {
      $get: {
        input: {}
        output: {
          job_index?:
            | {
                disk_size_bytes?: (number | null) | undefined
                s3_size_bytes?: (number | null) | undefined
              }
            | undefined
          service_log_index?:
            | {
                disk_size_bytes?: (number | null) | undefined
                s3_size_bytes?: (number | null) | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/indexer/status': {
      $get: {
        input: {}
        output: {
          job_indexer?:
            | {
                is_alive?: boolean | undefined
                state?: 'running' | 'stale' | 'never_started' | undefined
                last_locked_at?: (string | null) | undefined
                owner?: (string | null) | undefined
                storage?:
                  | {
                      disk_size_bytes?: (number | null) | undefined
                      s3_size_bytes?: (number | null) | undefined
                    }
                  | undefined
              }
            | undefined
          log_indexer?:
            | {
                is_alive?: boolean | undefined
                state?: 'running' | 'stale' | 'never_started' | undefined
                last_locked_at?: (string | null) | undefined
                owner?: (string | null) | undefined
                storage?:
                  | {
                      disk_size_bytes?: (number | null) | undefined
                      s3_size_bytes?: (number | null) | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/list': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            per_page?: number | undefined
            cursor_created_at?: string | undefined
            cursor_id?: bigint | undefined
            asset_path?: string | undefined
            usage_path?: string | undefined
            asset_kinds?: string | undefined
            path?: string | undefined
            columns?: string | undefined
            broad_filter?: string | undefined
          }
        }
        output: {
          assets: {
            path: string
            kind: AssetKind
            usages: {
              path: string
              kind: AssetUsageKind
              access_type?: AssetUsageAccessType | undefined
              columns?: { [x: string]: AssetUsageAccessType } | undefined
              created_at?: string | undefined
              metadata?:
                | { runnable_path?: string | undefined; job_kind?: string | undefined }
                | undefined
            }[]
            metadata?: { resource_type?: string | undefined } | undefined
          }[]
          next_cursor?:
            | ({ created_at?: string | undefined; id?: bigint | undefined } | null)
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/list_by_usages': {
      $post: {
        input: { param: { workspace: string } } & {
          json: { usages: { path: string; kind: AssetUsageKind }[] }
        }
        output: {
          path: string
          kind: AssetKind
          access_type?: AssetUsageAccessType | undefined
        }[][]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/list_favorites': {
      $get: {
        input: { param: { workspace: string } }
        output: { path: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/graph': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            asset_kinds?: string | undefined
            folder?: string | undefined
            dbt_script_hash?: string | undefined
          }
        }
        output: AssetGraph
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/column_lineage': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { asset_path: string[]; dbt_script_hash?: string | undefined }
        }
        output: DbtColumnLineage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/macros': {
      $get: {
        input: { param: { workspace: string } }
        output: {
          name: string
          params: string
          body: string
          is_table: boolean
          provider_path: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/pipelines': {
      $get: {
        input: { param: { workspace: string } }
        output: { folder: string; script_count: bigint }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/partitions': {
      $get: {
        input: { param: { workspace: string } } & { query: { path: string } }
        output: MaterializedPartition[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/dbt_resumable/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: string | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/dbt_resumable_script/p/:path': {
      $get: {
        input: { param: { workspace: string; path: string } }
        output: string | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/dbt_graph/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & {
          query: {
            asset_kinds?: string | undefined
            folder?: string | undefined
            dbt_script_hash?: string | undefined
          }
        }
        output: AssetGraph
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/dbt_column_lineage/:id': {
      $get: {
        input: { param: { workspace: string; id: string } } & { query: { asset_path: string[] } }
        output: DbtColumnLineage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_progress/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: AssetProgress[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/jobs/run_assets/:id': {
      $get: {
        input: { param: { workspace: string; id: string } }
        output: {
          truncated: boolean
          assets: {
            path: string
            kind: AssetKind
            access_type?: AssetUsageAccessType | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/partitions_in_range': {
      $get: {
        input: { param: { workspace: string } } & {
          query: { path: string; from: string; to: string }
        }
        output: PartitionsInRange
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/assets/asset_schemas': {
      $get: {
        input: { param: { workspace: string } } & { query: { path: string } }
        output: AssetSchemaVersion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/volumes/list': {
      $get: {
        input: { param: { workspace: string } }
        output: Volume[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/volumes/storage': {
      $get: {
        input: { param: { workspace: string } }
        output: string | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/w/:workspace/volumes/create': {
      $post: {
        input: { param: { workspace: string } } & { json: { name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/volumes/delete/:name': {
      $delete: {
        input: { param: { workspace: string; name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/mcp/w/:workspace/list_tools': {
      $get: {
        input: { param: { workspace: string } }
        output: EndpointTool[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mcp/oauth/discover': {
      $post: {
        input: { json: { mcp_server_url: string } }
        output: {
          scopes_supported?: string[] | undefined
          authorization_endpoint?: string | undefined
          token_endpoint?: string | undefined
          registration_endpoint?: string | undefined
          supports_dynamic_registration?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mcp/oauth/start': {
      $get: {
        input: { query: { mcp_server_url: string; scopes?: string | undefined } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/mcp/oauth/callback': {
      $get: {
        input: { query: { code: string; state: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/publish_draft': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishDraftBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/scripts': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishScriptBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/flows': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishFlowBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/apps': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishAppBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/raw_apps': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishRawAppBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/raw_apps/:id/recording': {
      $post: {
        input: { param: { workspace: string; id: bigint } } & { query: { folder: string } } & {
          json: RecordingBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/scripts/:ask_id/recording': {
      $post: {
        input: { param: { workspace: string; ask_id: bigint } } & { query: { folder: string } } & {
          json: RecordingBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/flows/:flow_id/recording': {
      $post: {
        input: { param: { workspace: string; flow_id: bigint } } & { query: { folder: string } } & {
          json: RecordingBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/pipeline_recording': {
      $post: {
        input: { param: { workspace: string; slug: HubProjectSlug } } & {
          query: { folder: string }
        } & { json: PipelineRecordingBody }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/resource_types': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishResourceTypeBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/resources': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishResourcesBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/triggers': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishTriggersBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/migrations': {
      $post: {
        input: { param: { workspace: string } } & { query: { folder: string } } & {
          json: PublishMigrationsBody
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/export': {
      $get: {
        input: { param: { workspace: string; slug: string } } & {
          query: { folder?: string | undefined; version?: number | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/logo': {
      $post: {
        input: { param: { workspace: string; slug: HubProjectSlug } } & {
          query: { folder: string }
        } & { json: ProjectLogoBody }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/submit': {
      $post: {
        input: { param: { workspace: string; slug: string } } & { query: { folder: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/withdraw': {
      $post: {
        input: { param: { workspace: string; slug: string } } & { query: { folder: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects/:slug/discard_update': {
      $post: {
        input: { param: { workspace: string; slug: string } } & { query: { folder: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/w/:workspace/hub/projects': {
      $get:
        | {
            input: { param: { workspace: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { workspace: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/w/:workspace/hub/project': {
      $get: {
        input: { param: { workspace: string } } & { query: { folder: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
