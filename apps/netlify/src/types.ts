type FunctionSchedule = { name?: string | undefined; cron?: string | undefined }
type Deploy = {
  id?: string | undefined
  site_id?: string | undefined
  user_id?: string | undefined
  build_id?: string | undefined
  state?: string | undefined
  name?: string | undefined
  url?: string | undefined
  ssl_url?: string | undefined
  admin_url?: string | undefined
  deploy_url?: string | undefined
  deploy_ssl_url?: string | undefined
  screenshot_url?: string | undefined
  review_id?: number | undefined
  draft?: boolean | undefined
  required?: string[] | undefined
  required_functions?: string[] | undefined
  required_edge_functions?: string[] | undefined
  required_server?: string[] | undefined
  error_message?: string | undefined
  branch?: string | undefined
  commit_ref?: string | undefined
  commit_url?: string | undefined
  skipped?: boolean | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  published_at?: string | undefined
  title?: string | undefined
  context?: string | undefined
  locked?: boolean | undefined
  review_url?: string | undefined
  framework?: string | undefined
  skew_protection_token?: string | undefined
  function_schedules?: FunctionSchedule[] | undefined
  functions_region?: string | undefined
  functions_region_overrides?:
    | { name?: string | undefined; region?: string | undefined }[]
    | undefined
}
type RepoInfo = {
  id?: number | undefined
  provider?: string | undefined
  deploy_key_id?: string | undefined
  repo_path?: string | undefined
  repo_branch?: string | undefined
  dir?: string | undefined
  functions_dir?: string | undefined
  cmd?: string | undefined
  allowed_branches?: string[] | undefined
  public_repo?: boolean | undefined
  private_logs?: boolean | undefined
  repo_url?: string | undefined
  env?: { [x: string]: string } | undefined
  installation_id?: number | undefined
  stop_builds?: boolean | undefined
}
type Site = {
  id?: string | undefined
  state?: string | undefined
  plan?: string | undefined
  name?: string | undefined
  custom_domain?: string | undefined
  domain_aliases?: string[] | undefined
  branch_deploy_custom_domain?: string | undefined
  deploy_preview_custom_domain?: string | undefined
  password?: string | undefined
  notification_email?: string | undefined
  url?: string | undefined
  ssl_url?: string | undefined
  admin_url?: string | undefined
  screenshot_url?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
  session_id?: string | undefined
  ssl?: boolean | undefined
  force_ssl?: boolean | undefined
  managed_dns?: boolean | undefined
  deploy_url?: string | undefined
  published_deploy?: Deploy | undefined
  account_id?: string | undefined
  account_name?: string | undefined
  account_slug?: string | undefined
  git_provider?: string | undefined
  deploy_hook?: string | undefined
  capabilities?: { [x: string]: { [x: string]: unknown } } | undefined
  processing_settings?: { html?: { pretty_urls?: boolean | undefined } | undefined } | undefined
  build_settings?: RepoInfo | undefined
  id_domain?: string | undefined
  default_hooks_data?: { access_token?: string | undefined } | undefined
  build_image?: string | undefined
  prerender?: string | undefined
  functions_region?: string | undefined
  prevent_non_git_prod_deploys?: boolean | undefined
}
type Error = { code?: bigint | undefined; message: string }
type SiteSetup = {
  id?: string | undefined
  state?: string | undefined
  plan?: string | undefined
  name?: string | undefined
  custom_domain?: string | undefined
  domain_aliases?: string[] | undefined
  branch_deploy_custom_domain?: string | undefined
  deploy_preview_custom_domain?: string | undefined
  password?: string | undefined
  notification_email?: string | undefined
  url?: string | undefined
  ssl_url?: string | undefined
  admin_url?: string | undefined
  screenshot_url?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
  session_id?: string | undefined
  ssl?: boolean | undefined
  force_ssl?: boolean | undefined
  managed_dns?: boolean | undefined
  deploy_url?: string | undefined
  published_deploy?: Deploy | undefined
  account_id?: string | undefined
  account_name?: string | undefined
  account_slug?: string | undefined
  git_provider?: string | undefined
  deploy_hook?: string | undefined
  capabilities?: { [x: string]: { [x: string]: unknown } } | undefined
  processing_settings?: { html?: { pretty_urls?: boolean | undefined } | undefined } | undefined
  build_settings?: RepoInfo | undefined
  id_domain?: string | undefined
  default_hooks_data?: { access_token?: string | undefined } | undefined
  build_image?: string | undefined
  prerender?: string | undefined
  functions_region?: string | undefined
  prevent_non_git_prod_deploys?: boolean | undefined
  repo?: RepoInfo | undefined
}
type SniCertificate = {
  state?: string | undefined
  domains?: string[] | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  expires_at?: string | undefined
}
type EnvVarValue = {
  id?: string | undefined
  value?: string | undefined
  context?:
    | 'all'
    | 'dev'
    | 'dev-server'
    | 'branch-deploy'
    | 'deploy-preview'
    | 'production'
    | 'branch'
    | undefined
  context_parameter?: string | undefined
}
type EnvVarUser = {
  id?: string | undefined
  full_name?: string | undefined
  email?: string | undefined
  avatar_url?: string | undefined
}
type EnvVar = {
  key?: string | undefined
  scopes?: ('builds' | 'functions' | 'runtime' | 'post-processing')[] | undefined
  values?: EnvVarValue[] | undefined
  is_secret?: boolean | undefined
  updated_at?: string | undefined
  updated_by?: EnvVarUser | undefined
}
type SiteFunction = {
  branch?: string | undefined
  created_at?: string | undefined
  functions?: { [x: string]: unknown }[] | undefined
  id?: string | undefined
  log_type?: string | undefined
  provider?: string | undefined
}
type Form = {
  id?: string | undefined
  site_id?: string | undefined
  name?: string | undefined
  paths?: string[] | undefined
  submission_count?: number | undefined
  fields?: { [x: string]: unknown }[] | undefined
  created_at?: string | undefined
}
type Submission = {
  id?: string | undefined
  number?: number | undefined
  email?: string | undefined
  name?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  company?: string | undefined
  summary?: string | undefined
  body?: string | undefined
  data?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  site_url?: string | undefined
}
type File2 = {
  id?: string | undefined
  path?: string | undefined
  sha?: string | undefined
  mime_type?: string | undefined
  size?: bigint | undefined
}
type Asset = {
  id?: string | undefined
  site_id?: string | undefined
  creator_id?: string | undefined
  name?: string | undefined
  state?: string | undefined
  content_type?: string | undefined
  url?: string | undefined
  key?: string | undefined
  visibility?: string | undefined
  size?: bigint | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type AssetForm = { url?: string | undefined; fields?: { [x: string]: string } | undefined }
type AssetSignature = { form?: AssetForm | undefined; asset?: Asset | undefined }
type AssetPublicSignature = { url?: string | undefined }
type Purge = {
  site_id?: string | undefined
  site_slug?: string | undefined
  cache_tags?: string[] | undefined
}
type Snippet = {
  id?: number | undefined
  site_id?: string | undefined
  title?: string | undefined
  general?: string | undefined
  general_position?: string | undefined
  goal?: string | undefined
  goal_position?: string | undefined
}
type Metadata = { [x: string]: unknown }
type BuildHook = {
  id?: string | undefined
  title?: string | undefined
  branch?: string | undefined
  url?: string | undefined
  site_id?: string | undefined
  created_at?: string | undefined
}
type BuildHookSetup = { title?: string | undefined; branch?: string | undefined }
type FunctionRoute = {
  pattern?: string | undefined
  literal?: string | undefined
  expression?: string | undefined
  methods?: ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS')[] | undefined
  prefer_static?: boolean | undefined
}
type ExcludedFunctionRoute = {
  pattern?: string | undefined
  literal?: string | undefined
  expression?: string | undefined
}
type TrafficRulesRateLimitConfig = {
  algorithm?: 'sliding_window' | undefined
  window_size?: number | undefined
  window_limit?: number | undefined
}
type TrafficRulesAggregateConfig = { keys?: { type?: 'ip' | 'domain' | undefined }[] | undefined }
type TrafficRulesConfig = {
  action?:
    | {
        type?: string | undefined
        config?:
          | {
              to?: string | undefined
              rate_limit_config?: TrafficRulesRateLimitConfig | undefined
              aggregate?: TrafficRulesAggregateConfig | undefined
            }
          | undefined
      }
    | undefined
}
type FunctionConfig = {
  display_name?: string | undefined
  generator?: string | undefined
  build_data?: { [x: string]: unknown } | undefined
  memory?: number | undefined
  routes?: FunctionRoute[] | undefined
  excluded_routes?: ExcludedFunctionRoute[] | undefined
  priority?: number | undefined
  region?: string | undefined
  traffic_rules?: TrafficRulesConfig | undefined
  vcpu?: number | undefined
  event_subscriptions?: string[] | undefined
}
type DeployEnvironmentVariable = {
  key: string
  value: string
  is_secret: boolean
  scopes: ('builds' | 'functions' | 'runtime' | 'post-processing')[]
}
type DeployFiles = {
  files?: { [x: string]: unknown } | undefined
  zip?: File | undefined
  draft?: boolean | undefined
  async?: boolean | undefined
  functions?: { [x: string]: unknown } | undefined
  edge_functions?: { [x: string]: unknown } | undefined
  server?:
    | {
        sha: string
        region?: string | undefined
        instance_size?: 'small' | 'medium' | 'large' | undefined
        routes?: FunctionRoute[] | undefined
        excluded_routes?: ExcludedFunctionRoute[] | undefined
        runtime_version?: string | undefined
        scale?: { min?: (bigint | null) | undefined; max?: (bigint | null) | undefined } | undefined
      }
    | undefined
  function_schedules?: FunctionSchedule[] | undefined
  functions_config?: { [x: string]: FunctionConfig } | undefined
  branch?: string | undefined
  framework?: string | undefined
  framework_version?: string | undefined
  environment?: DeployEnvironmentVariable[] | undefined
}
type Build = {
  id?: string | undefined
  deploy_id?: string | undefined
  sha?: string | undefined
  done?: boolean | undefined
  error?: string | undefined
  created_at?: string | undefined
}
type DeployedBranch = {
  id?: string | undefined
  deploy_id?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  url?: string | undefined
  ssl_url?: string | undefined
}
type BuildStatus = {
  active?: number | undefined
  pending_concurrency?: number | undefined
  enqueued?: number | undefined
  build_count?: number | undefined
  minutes?:
    | {
        current?: number | undefined
        current_average_sec?: number | undefined
        previous?: number | undefined
        period_start_date?: string | undefined
        period_end_date?: string | undefined
        last_updated_at?: string | undefined
        included_minutes?: string | undefined
        included_minutes_with_packs?: string | undefined
      }
    | undefined
}
type DnsRecord = {
  id?: string | undefined
  hostname?: string | undefined
  type?: string | undefined
  value?: string | undefined
  ttl?: bigint | undefined
  priority?: bigint | undefined
  dns_zone_id?: string | undefined
  site_id?: string | undefined
  flag?: number | undefined
  tag?: string | undefined
  managed?: boolean | undefined
}
type DnsZone = {
  id?: string | undefined
  name?: string | undefined
  errors?: string[] | undefined
  supported_record_types?: string[] | undefined
  user_id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  records?: DnsRecord[] | undefined
  dns_servers?: string[] | undefined
  account_id?: string | undefined
  site_id?: string | undefined
  account_slug?: string | undefined
  account_name?: string | undefined
  domain?: string | undefined
  ipv6_enabled?: boolean | undefined
  dedicated?: boolean | undefined
}
type Function = {
  id?: string | undefined
  name?: string | undefined
  sha?: string | undefined
  region?: string | undefined
}
type Hook = {
  id?: string | undefined
  site_id?: string | undefined
  type?: string | undefined
  event?: string | undefined
  data?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  disabled?: boolean | undefined
}
type HookType = {
  name?: string | undefined
  events?: string[] | undefined
  fields?: { [x: string]: unknown }[] | undefined
}
type Ticket = {
  id?: string | undefined
  client_id?: string | undefined
  authorized?: boolean | undefined
  created_at?: string | undefined
}
type AccessToken = {
  id?: string | undefined
  access_token?: string | undefined
  user_id?: string | undefined
  user_email?: string | undefined
  created_at?: string | undefined
}
type DeployKey = {
  id?: string | undefined
  public_key?: string | undefined
  created_at?: string | undefined
}
type Member = {
  id?: string | undefined
  full_name?: string | undefined
  email?: string | undefined
  avatar?: string | undefined
  role?: string | undefined
}
type AccountAddMemberSetup = {
  role?: 'Owner' | 'Developer' | 'Billing Admin' | 'Reviewer' | undefined
  email?: string | undefined
}
type AccountUpdateMemberSetup = {
  role?: 'Owner' | 'Developer' | 'Billing Admin' | 'Reviewer' | undefined
  site_access?: 'all' | 'none' | 'selected' | undefined
  site_ids?: string[] | undefined
}
type PaymentMethod = {
  id?: string | undefined
  method_name?: string | undefined
  type?: string | undefined
  state?: string | undefined
  data?:
    | { card_type?: string | undefined; last4?: string | undefined; email?: string | undefined }
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type AccountType = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  capabilities?: { [x: string]: unknown } | undefined
  monthly_dollar_price?: number | undefined
  yearly_dollar_price?: number | undefined
  monthly_seats_addon_dollar_price?: number | undefined
  yearly_seats_addon_dollar_price?: number | undefined
}
type AccountUsageCapability = { included?: number | undefined; used?: number | undefined }
type AccountMembership = {
  id?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  type?: string | undefined
  capabilities?:
    | {
        sites?: AccountUsageCapability | undefined
        collaborators?: AccountUsageCapability | undefined
      }
    | undefined
  billing_name?: string | undefined
  billing_email?: string | undefined
  billing_details?: string | undefined
  billing_period?: string | undefined
  payment_method_id?: string | undefined
  type_name?: string | undefined
  type_id?: string | undefined
  owner_ids?: string[] | undefined
  roles_allowed?: string[] | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type AccountSetup = {
  name: string
  type_id: string
  payment_method_id?: string | undefined
  period?: 'monthly' | 'yearly' | undefined
  extra_seats_block?: number | undefined
}
type AccountUpdateSetup = {
  name?: string | undefined
  slug?: string | undefined
  type_id?: string | undefined
  extra_seats_block?: number | undefined
  billing_name?: string | undefined
  billing_email?: string | undefined
  billing_details?: string | undefined
}
type AuditLog = {
  id?: string | undefined
  account_id?: string | undefined
  payload?:
    | {
        actor_id?: string | undefined
        actor_name?: string | undefined
        actor_email?: string | undefined
        action?: string | undefined
        timestamp?: string | undefined
        log_type?: string | undefined
      }
    | undefined
}
type AgentRunnerUser = {
  id?: string | undefined
  full_name?: string | undefined
  email?: string | undefined
  avatar_url?: string | undefined
}
type AgentRunner = {
  id?: string | undefined
  site_id?: string | undefined
  parent_agent_runner_id?: string | undefined
  state?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  done_at?: string | undefined
  title?: string | undefined
  branch?: string | undefined
  result_branch?: string | undefined
  pr_url?: string | undefined
  pr_branch?: string | undefined
  pr_state?: string | undefined
  pr_number?: number | undefined
  pr_is_being_created?: boolean | undefined
  pr_error?: string | undefined
  current_task?: string | undefined
  result_diff?: string | undefined
  sha?: string | undefined
  merge_commit_sha?: string | undefined
  merge_commit_error?: string | undefined
  merge_commit_is_being_created?: boolean | undefined
  base_deploy_id?: string | undefined
  attached_file_keys?: string[] | undefined
  active_session_created_at?: string | undefined
  has_result_diff?: boolean | undefined
  latest_session_deploy_id?: string | undefined
  latest_session_deploy_url?: string | undefined
  preview_state?: string | undefined
  user?: AgentRunnerUser | undefined
}
type AgentRunnerSetup = {
  prompt: string
  branch?: string | undefined
  deploy_id?: string | undefined
  agent?: string | undefined
  model?: string | undefined
  effort?: 'low' | 'medium' | 'high' | undefined
  mode?: 'normal' | 'ask' | undefined
}
type AgentRunnerError = {
  code?: bigint | undefined
  message: string
  error_code?: string | undefined
}
type AgentRunnerSessionConfig = { agent?: string | undefined; model?: string | undefined }
type AgentRunnerSessionUsage = {
  total_input_tokens?: number | undefined
  total_output_tokens?: number | undefined
  total_cached_input_tokens?: number | undefined
  total_cached_output_tokens?: number | undefined
  total_tokens?: number | undefined
  total_credits_cost?: number | undefined
}
type AgentRunnerSessionInteraction = {
  type?: string | undefined
  status?: string | undefined
  payload?: { [x: string]: unknown } | undefined
  response?: { [x: string]: unknown }[] | undefined
}
type AgentRunnerSessionStep = { title?: string | undefined; message?: string | undefined }
type AgentRunnerSession = {
  id?: string | undefined
  agent_runner_id?: string | undefined
  dev_server_id?: string | undefined
  state?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  done_at?: string | undefined
  paused_at?: string | undefined
  title?: string | undefined
  prompt?: string | undefined
  agent_config?: AgentRunnerSessionConfig | undefined
  result?: string | undefined
  result_diff?: string | undefined
  commit_sha?: string | undefined
  deploy_id?: string | undefined
  deploy_url?: string | undefined
  duration?: number | undefined
  usage?: AgentRunnerSessionUsage | undefined
  interactions?: { [x: string]: AgentRunnerSessionInteraction } | undefined
  steps?: AgentRunnerSessionStep[] | undefined
  user?: AgentRunnerUser | undefined
  attached_file_keys?: string[] | undefined
  result_zip_file_name?: string | undefined
  is_published?: boolean | undefined
}
type AgentRunnerSessionSetup = {
  prompt?: string | undefined
  agent?: string | undefined
  model?: string | undefined
  mode?: 'normal' | 'ask' | undefined
}
type AgentRunnerSessionAnswer = {
  refId: string
  response?: { [x: string]: unknown }[] | undefined
  skipped?: boolean | undefined
  instruction?: string | undefined
}
type ServiceInstance = {
  id?: string | undefined
  url?: string | undefined
  config?: { [x: string]: unknown } | undefined
  external_attributes?: { [x: string]: unknown } | undefined
  service_slug?: string | undefined
  service_path?: string | undefined
  service_name?: string | undefined
  env?: { [x: string]: unknown } | undefined
  snippets?: { [x: string]: unknown }[] | undefined
  auth_url?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type IdentityUser = {
  id?: string | undefined
  email?: string | undefined
  aud?: string | undefined
  role?: string | undefined
  confirmed_at?: string | undefined
  invited_at?: string | undefined
  confirmation_sent_at?: string | undefined
  recovery_sent_at?: string | undefined
  email_change_sent_at?: string | undefined
  last_sign_in_at?: string | undefined
  app_metadata?: { provider?: string | undefined; roles?: string[] | undefined } | undefined
  user_metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type Service = {
  id?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  service_path?: string | undefined
  long_description?: string | undefined
  description?: string | undefined
  events?: { [x: string]: unknown }[] | undefined
  tags?: string[] | undefined
  icon?: string | undefined
  manifest_url?: string | undefined
  environments?: string[] | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type User = {
  id?: string | undefined
  uid?: string | undefined
  full_name?: string | undefined
  avatar_url?: string | undefined
  email?: string | undefined
  affiliate_id?: string | undefined
  site_count?: bigint | undefined
  created_at?: string | undefined
  last_login?: string | undefined
  login_providers?: string[] | undefined
  onboarding_progress?: { slides?: string | undefined } | undefined
}
type SplitTestSetup = { branch_tests?: { [x: string]: unknown } | undefined }
type SplitTest = {
  id?: string | undefined
  site_id?: string | undefined
  name?: string | undefined
  path?: string | undefined
  branches?: { [x: string]: unknown }[] | undefined
  active?: boolean | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  unpublished_at?: string | undefined
}
type SplitTests = SplitTest[]
type DnsZoneSetup = {
  account_slug?: string | undefined
  site_id?: string | undefined
  name?: string | undefined
}
type DnsZones = DnsZone[]
type DnsRecords = DnsRecord[]
type DnsRecordCreate = {
  type?: string | undefined
  hostname?: string | undefined
  value?: string | undefined
  ttl?: bigint | undefined
  priority?: bigint | undefined
  weight?: bigint | undefined
  port?: bigint | undefined
  flag?: bigint | undefined
  tag?: string | undefined
}
type DevServer = {
  id?: string | undefined
  site_id?: string | undefined
  branch?: string | undefined
  url?: string | undefined
  state?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  starting_at?: string | undefined
  error_at?: string | undefined
  live_at?: string | undefined
  done_at?: string | undefined
  title?: string | undefined
}
type DevServerHook = {
  id?: string | undefined
  title?: string | undefined
  branch?: string | undefined
  url?: string | undefined
  site_id?: string | undefined
  created_at?: string | undefined
  type?: 'new_dev_server' | 'content_refresh' | undefined
}
type DevServerHookSetup = {
  title?: string | undefined
  branch?: string | undefined
  type?: 'new_dev_server' | 'content_refresh' | undefined
}
type ProviderDefinition = {
  token_env_var?: string | undefined
  url_env_var?: string | undefined
  models?: string[] | undefined
}
type AiGatewayToken = {
  token?: string | undefined
  url?: string | undefined
  expires_at?: bigint | undefined
}
type CreateDatabaseRequest = { region?: string | undefined }
type DatabaseResponse = { connection_string?: string | undefined }
type CreateDatabaseBranchRequest = {
  parent_branch_id?: string | undefined
  branch_id: string
  metadata?: { [x: string]: unknown } | undefined
}
type DatabaseBranchResponse = {
  connection_string?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type DatabaseBranchCompute = {
  current_state?: 'active' | 'idle' | undefined
  autoscaling_limit_min_cu?: number | undefined
  autoscaling_limit_max_cu?: number | undefined
  suspend_timeout_seconds?: bigint | undefined
  last_active?: string | undefined
}
type DatabaseBranchDetail = {
  branch_id?: string | undefined
  name?: string | undefined
  connection_string?: string | undefined
  state?: 'init' | 'creating' | 'resetting' | 'ready' | 'archived' | undefined
  logical_size_bytes?: bigint | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  last_active_at?: string | undefined
  compute?: DatabaseBranchCompute | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type DatabaseBranchesResponse = { branches?: DatabaseBranchDetail[] | undefined }
type ResetDatabaseBranchRequest = { source_branch_id?: string | undefined }
type ResetDatabaseBranchResponse = {
  reset?: boolean | undefined
  connection_string?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type DatabaseComputeSettingsRequest = {
  min_cu?: (number | null) | undefined
  max_cu?: (number | null) | undefined
  sleep_timeout_seconds?: (bigint | null) | undefined
}
type DatabaseComputeSettings = {
  min_cu?: number | undefined
  max_cu?: number | undefined
  sleep_timeout_seconds?: bigint | undefined
}
type DatabaseMigration = {
  version?: bigint | undefined
  name?: string | undefined
  path?: string | undefined
  applied?: boolean | undefined
}
type ListDatabaseMigrationsResponse = { migrations?: DatabaseMigration[] | undefined }
type DatabaseMigrationDetail = {
  version?: bigint | undefined
  name?: string | undefined
  path?: string | undefined
  content?: string | undefined
}
type RunDatabaseMigrationsRequest = { dry_run?: boolean | undefined }
type DatabaseSnapshotMetadata = {
  deploy?: { [x: string]: unknown } | undefined
  source?: string | undefined
}
type CreateDatabaseSnapshotRequest = {
  branch_id?: string | undefined
  name?: string | undefined
  metadata?: DatabaseSnapshotMetadata | undefined
}
type DatabaseSnapshot = {
  id?: string | undefined
  source_branch_id?: string | undefined
  manual?: boolean | undefined
  created_at?: string | undefined
  expires_at?: string | undefined
  timestamp?: string | undefined
  metadata?: DatabaseSnapshotMetadata | undefined
}
type DatabaseSnapshotsResponse = { snapshots?: DatabaseSnapshot[] | undefined }
type RestoreDatabaseSnapshotRequest = { branch_id?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sites': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                filter?: 'all' | 'owner' | 'guest' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Site[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                filter?: 'all' | 'owner' | 'guest' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { configure_dns?: boolean | undefined } } & { json: SiteSetup }
            output: Site
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { configure_dns?: boolean | undefined } } & { json: SiteSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id': {
      $get:
        | { input: { param: { site_id: string } }; output: Site; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { site_id: string } } & { json: SiteSetup }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: SiteSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/ssl': {
      $post:
        | {
            input: { param: { site_id: string } } & {
              query: {
                certificate?: string | undefined
                key?: string | undefined
                ca_certificates?: string | undefined
              }
            }
            output: SniCertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                certificate?: string | undefined
                key?: string | undefined
                ca_certificates?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                certificate?: string | undefined
                key?: string | undefined
                ca_certificates?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { site_id: string } }
            output: SniCertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/ssl/certificates': {
      $get:
        | {
            input: { param: { site_id: string } } & { query: { domain: string } }
            output: SniCertificate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { query: { domain: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { query: { domain: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/accounts/:account_id/env': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                context_name?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | undefined
                scope?: 'builds' | 'functions' | 'runtime' | 'post-processing' | undefined
                site_id?: string | undefined
              }
            }
            output: EnvVar[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                context_name?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | undefined
                scope?: 'builds' | 'functions' | 'runtime' | 'post-processing' | undefined
                site_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_id: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                key?: string | undefined
                scopes?: ('builds' | 'functions' | 'runtime' | 'post-processing')[] | undefined
                values?: EnvVarValue[] | undefined
                is_secret?: boolean | undefined
              }[]
            }
            output: EnvVar[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                key?: string | undefined
                scopes?: ('builds' | 'functions' | 'runtime' | 'post-processing')[] | undefined
                values?: EnvVarValue[] | undefined
                is_secret?: boolean | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/sites/:site_id/env': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: {
                context_name?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | undefined
                scope?: 'builds' | 'functions' | 'runtime' | 'post_processing' | undefined
              }
            }
            output: EnvVar[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                context_name?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | undefined
                scope?: 'builds' | 'functions' | 'runtime' | 'post_processing' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/env/:key': {
      $get:
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                key?: string | undefined
                scopes?: ('builds' | 'functions' | 'runtime' | 'post-processing')[] | undefined
                values?: EnvVarValue[] | undefined
                is_secret?: boolean | undefined
              }
            }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                key?: string | undefined
                scopes?: ('builds' | 'functions' | 'runtime' | 'post-processing')[] | undefined
                values?: EnvVarValue[] | undefined
                is_secret?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                context?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | 'branch'
                  | undefined
                context_parameter?: string | undefined
                value?: string | undefined
              }
            }
            output: EnvVar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            } & {
              json: {
                context?:
                  | 'all'
                  | 'dev'
                  | 'dev-server'
                  | 'branch-deploy'
                  | 'deploy-preview'
                  | 'production'
                  | 'branch'
                  | undefined
                context_parameter?: string | undefined
                value?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/env/:key/value/:id': {
      $delete:
        | {
            input: { param: { account_id: string; id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; id: string; key: string } } & {
              query: { site_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/functions': {
      $get:
        | {
            input: { param: { site_id: string } } & { query: { filter?: string | undefined } }
            output: SiteFunction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { query: { filter?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/forms': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: Form[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/forms/:form_id': {
      $delete:
        | {
            input: { param: { site_id: string; form_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; form_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/submissions': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Submission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/files': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: File2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/assets': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: Asset[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & {
              query: {
                name: string
                size: bigint
                content_type: string
                visibility?: string | undefined
              }
            }
            output: AssetSignature
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                name: string
                size: bigint
                content_type: string
                visibility?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/assets/:asset_id': {
      $get:
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; asset_id: string } } & { query: { state: string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; asset_id: string } } & { query: { state: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/assets/:asset_id/public_signature': {
      $get:
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: AssetPublicSignature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/files/:file_path': {
      $get:
        | {
            input: { param: { site_id: string; file_path: string } }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; file_path: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/purge': {
      $post:
        | { input: { json: Purge }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: Purge }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Purge }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/sites/:site_id/snippets': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: Snippet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & { json: Snippet }
            output: Snippet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: Snippet }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/snippets/:snippet_id': {
      $get:
        | {
            input: { param: { site_id: string; snippet_id: string } }
            output: Snippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; snippet_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; snippet_id: string } } & { json: Snippet }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; snippet_id: string } } & { json: Snippet }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; snippet_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; snippet_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/metadata': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: Metadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string } } & { json: Metadata }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string } } & { json: Metadata }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/build_hooks': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: BuildHook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & { json: BuildHookSetup }
            output: BuildHook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: BuildHookSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/build_hooks/:id': {
      $get:
        | {
            input: { param: { site_id: string; id: string } }
            output: BuildHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; id: string } } & { json: BuildHookSetup }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: BuildHookSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/deploys': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'deploy-previews'?: boolean | undefined
                production?: boolean | undefined
                state?:
                  | 'new'
                  | 'pending_review'
                  | 'accepted'
                  | 'rejected'
                  | 'enqueued'
                  | 'building'
                  | 'uploading'
                  | 'uploaded'
                  | 'preparing'
                  | 'prepared'
                  | 'processing'
                  | 'processed'
                  | 'ready'
                  | 'error'
                  | 'retrying'
                  | undefined
                branch?: string | undefined
                'latest-published'?: boolean | undefined
              }
            }
            output: Deploy[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'deploy-previews'?: boolean | undefined
                production?: boolean | undefined
                state?:
                  | 'new'
                  | 'pending_review'
                  | 'accepted'
                  | 'rejected'
                  | 'enqueued'
                  | 'building'
                  | 'uploading'
                  | 'uploaded'
                  | 'preparing'
                  | 'prepared'
                  | 'processing'
                  | 'processed'
                  | 'ready'
                  | 'error'
                  | 'retrying'
                  | undefined
                branch?: string | undefined
                'latest-published'?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & {
              query: {
                title?: string | undefined
                'deploy-previews'?: boolean | undefined
                production?: boolean | undefined
                state?:
                  | 'new'
                  | 'pending_review'
                  | 'accepted'
                  | 'rejected'
                  | 'enqueued'
                  | 'building'
                  | 'uploading'
                  | 'uploaded'
                  | 'preparing'
                  | 'prepared'
                  | 'processing'
                  | 'processed'
                  | 'ready'
                  | 'error'
                  | 'retrying'
                  | undefined
                branch?: string | undefined
                'latest-published'?: boolean | undefined
              }
            } & { json: DeployFiles }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                title?: string | undefined
                'deploy-previews'?: boolean | undefined
                production?: boolean | undefined
                state?:
                  | 'new'
                  | 'pending_review'
                  | 'accepted'
                  | 'rejected'
                  | 'enqueued'
                  | 'building'
                  | 'uploading'
                  | 'uploaded'
                  | 'preparing'
                  | 'prepared'
                  | 'processing'
                  | 'processed'
                  | 'ready'
                  | 'error'
                  | 'retrying'
                  | undefined
                branch?: string | undefined
                'latest-published'?: boolean | undefined
              }
            } & { json: DeployFiles }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/deploys/:deploy_id': {
      $get:
        | {
            input: { param: { site_id: string; deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              query: { commit_ref?: string | undefined }
            } & { json: DeployFiles }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              query: { commit_ref?: string | undefined }
            } & { json: DeployFiles }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { deploy_id: string; site_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { deploy_id: string; site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/cancel': {
      $post:
        | {
            input: { param: { deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/deploys/:deploy_id/restore': {
      $post:
        | {
            input: { param: { site_id: string; deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string; deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/builds': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Build[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & {
              query: {
                branch?: string | undefined
                clear_cache?: boolean | undefined
                commit_sha?: string | undefined
                draft?: boolean | undefined
                image?: string | undefined
                review_id?: number | undefined
                template_id?: string | undefined
                title?: string | undefined
              }
            } & { form: { zip?: File | undefined } }
            output: Build
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                branch?: string | undefined
                clear_cache?: boolean | undefined
                commit_sha?: string | undefined
                draft?: boolean | undefined
                image?: string | undefined
                review_id?: number | undefined
                template_id?: string | undefined
                title?: string | undefined
              }
            } & { form: { zip?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                branch?: string | undefined
                clear_cache?: boolean | undefined
                commit_sha?: string | undefined
                draft?: boolean | undefined
                image?: string | undefined
                review_id?: number | undefined
                template_id?: string | undefined
                title?: string | undefined
              }
            } & { form: { zip?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                branch?: string | undefined
                clear_cache?: boolean | undefined
                commit_sha?: string | undefined
                draft?: boolean | undefined
                image?: string | undefined
                review_id?: number | undefined
                template_id?: string | undefined
                title?: string | undefined
              }
            } & { form: { zip?: File | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                branch?: string | undefined
                clear_cache?: boolean | undefined
                commit_sha?: string | undefined
                draft?: boolean | undefined
                image?: string | undefined
                review_id?: number | undefined
                template_id?: string | undefined
                title?: string | undefined
              }
            } & { form: { zip?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/deployed-branches': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: DeployedBranch[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/unlink_repo': {
      $put:
        | { input: { param: { site_id: string } }; output: Site; outputFormat: 'json'; status: 200 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/sites/:site_id/enable': {
      $put:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/disable': {
      $put:
        | {
            input: { param: { site_id: string } } & { query: { reason: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string } } & { query: { reason: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/builds/:build_id': {
      $get:
        | {
            input: { param: { build_id: string } }
            output: Build
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { build_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/builds/:build_id/log': {
      $post:
        | { input: { param: { build_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { build_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/builds/:build_id/start': {
      $post:
        | {
            input: { param: { build_id: string } } & {
              query: {
                buildbot_version?: string | undefined
                build_version?: string | undefined
                task_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { build_id: string } } & {
              query: {
                buildbot_version?: string | undefined
                build_version?: string | undefined
                task_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:account_id/builds/status': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: BuildStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/dns': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: DnsZone[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string } }
            output: DnsZone[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/rollback': {
      $put:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id': {
      $get:
        | {
            input: { param: { deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { deploy_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/lock': {
      $post:
        | {
            input: { param: { deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/unlock': {
      $post:
        | {
            input: { param: { deploy_id: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploy_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/files/:path': {
      $put:
        | {
            input: { param: { deploy_id: string; path: string } } & {
              query: { size?: number | undefined }
            } & { json: File }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploy_id: string; path: string } } & {
              query: { size?: number | undefined }
            } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/functions/:name': {
      $put:
        | {
            input: { param: { deploy_id: string; name: string } } & {
              query: {
                runtime?: string | undefined
                invocation_mode?: string | undefined
                timeout?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'X-Nf-Retry-Count'?: number | undefined } } & { json: File }
            output: Function
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploy_id: string; name: string } } & {
              query: {
                runtime?: string | undefined
                invocation_mode?: string | undefined
                timeout?: number | undefined
                size?: number | undefined
              }
            } & { header: { 'X-Nf-Retry-Count'?: number | undefined } } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/server/:code_sha': {
      $put:
        | {
            input: { param: { deploy_id: string; code_sha: string } } & {
              query: { size?: number | undefined }
            } & { header: { 'X-Nf-Retry-Count'?: number | undefined } } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deploy_id: string; code_sha: string } } & {
              query: { size?: number | undefined }
            } & { header: { 'X-Nf-Retry-Count'?: number | undefined } } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploys/:deploy_id/edge_functions/:code_sha': {
      $put:
        | {
            input: { param: { deploy_id: string; code_sha: string } } & {
              header: { 'X-Nf-Retry-Count'?: number | undefined }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { deploy_id: string; code_sha: string } } & {
              header: { 'X-Nf-Retry-Count'?: number | undefined }
            } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/forms/:form_id/submissions': {
      $get:
        | {
            input: { param: { form_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Submission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { form_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hooks': {
      $get:
        | {
            input: {
              query: { site_id: string; form_id?: string | undefined; event?: string | undefined }
            }
            output: Hook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { site_id: string; form_id?: string | undefined; event?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { site_id: string } } & { json: Hook }
            output: Hook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { site_id: string } } & { json: Hook }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hooks/:hook_id': {
      $get:
        | { input: { param: { hook_id: string } }; output: Hook; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { hook_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { hook_id: string } } & { json: Hook }
            output: Hook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hook_id: string } } & { json: Hook }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete: {
        input: { param: { hook_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/hooks/:hook_id/enable': {
      $post:
        | { input: { param: { hook_id: string } }; output: Hook; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { hook_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hooks/types': {
      $get:
        | {
            input: { query: { site_id?: string | undefined } }
            output: HookType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { site_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/tickets': {
      $post:
        | {
            input: { query: { client_id: string } } & { json: { message?: string | undefined } }
            output: Ticket
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { client_id: string } } & { json: { message?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { client_id: string } } & { json: { message?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { client_id: string } } & { json: { message?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/tickets/:ticket_id': {
      $get:
        | {
            input: { param: { ticket_id: string } }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/tickets/:ticket_id/exchange': {
      $post:
        | {
            input: { param: { ticket_id: string } }
            output: AccessToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ticket_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/deploy_keys': {
      $get:
        | { input: {}; output: DeployKey[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: {}; output: DeployKey; outputFormat: 'json'; status: 201 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/deploy_keys/:key_id': {
      $get:
        | {
            input: { param: { key_id: string } }
            output: DeployKey
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { key_id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { param: { key_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key_id: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/:account_slug/sites': {
      $post:
        | {
            input: { param: { account_slug: string } } & {
              query: { configure_dns?: boolean | undefined }
            } & { json: SiteSetup }
            output: Site
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_slug: string } } & {
              query: { configure_dns?: boolean | undefined }
            } & { json: SiteSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { account_slug: string } } & {
              query: {
                name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Site[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_slug: string } } & {
              query: {
                name?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:account_slug/members': {
      $get:
        | {
            input: { param: { account_slug: string } }
            output: Member[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_slug: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_slug: string } } & { json: AccountAddMemberSetup }
            output: Member[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_slug: string } } & { json: AccountAddMemberSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:account_slug/members/:member_id': {
      $get:
        | {
            input: { param: { account_slug: string; member_id: string } }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_slug: string; member_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { account_slug: string; member_id: string } } & {
              json: AccountUpdateMemberSetup
            }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_slug: string; member_id: string } } & {
              json: AccountUpdateMemberSetup
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { account_slug: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_slug: string; member_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/billing/payment_methods': {
      $get:
        | { input: {}; output: PaymentMethod[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/accounts/types': {
      $get:
        | { input: {}; output: AccountType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/accounts': {
      $get:
        | { input: {}; output: AccountMembership[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: AccountSetup }
            output: AccountMembership
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: AccountSetup }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: AccountMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateSetup }
            output: AccountMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/audit': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                query?: string | undefined
                log_type?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: AuditLog[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                query?: string | undefined
                log_type?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners': {
      $get:
        | {
            input: {
              query: {
                site_id: string
                account_id: string
                page?: number | undefined
                per_page?: number | undefined
                state?: string | undefined
                title?: string | undefined
                branch?: string | undefined
                result_branch?: string | undefined
                user_id?: string | undefined
                from?: number | undefined
                to?: number | undefined
              }
            }
            output: AgentRunner[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                site_id: string
                account_id: string
                page?: number | undefined
                per_page?: number | undefined
                state?: string | undefined
                title?: string | undefined
                branch?: string | undefined
                result_branch?: string | undefined
                user_id?: string | undefined
                from?: number | undefined
                to?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                site_id: string
                deploy_id?: string | undefined
                branch?: string | undefined
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                parent_agent_runner_id?: string | undefined
                dev_server_image?: string | undefined
                file_keys?: string[] | undefined
              }
            }
            output: AgentRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                site_id: string
                deploy_id?: string | undefined
                branch?: string | undefined
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                parent_agent_runner_id?: string | undefined
                dev_server_image?: string | undefined
                file_keys?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                site_id: string
                deploy_id?: string | undefined
                branch?: string | undefined
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                parent_agent_runner_id?: string | undefined
                dev_server_image?: string | undefined
                file_keys?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              query: {
                site_id: string
                deploy_id?: string | undefined
                branch?: string | undefined
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                parent_agent_runner_id?: string | undefined
                dev_server_image?: string | undefined
                file_keys?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/agent_runners': {
      $post:
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { site_id: string } } & { json: AgentRunnerSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id': {
      $get:
        | {
            input: { param: { agent_runner_id: string } }
            output: AgentRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { agent_runner_id: string } }
            output: AgentRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { agent_runner_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/stop': {
      $post:
        | {
            input: { param: { agent_runner_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/diff': {
      $get:
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                strip_binary?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                strip_binary?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                strip_binary?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/archive': {
      $post:
        | {
            input: { param: { agent_runner_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { agent_runner_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/sessions': {
      $get:
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                state?: string | undefined
                from?: number | undefined
                to?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
              }
            }
            output: AgentRunnerSession[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                state?: string | undefined
                from?: number | undefined
                to?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agent_runner_id: string } } & {
              query: {
                prompt?: string | undefined
                agent?: string | undefined
                model?: string | undefined
                file_keys?: string[] | undefined
              }
            } & { json: AgentRunnerSessionSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id': {
      $get:
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: AgentRunnerSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              query: { is_published?: boolean | undefined }
            }
            output: AgentRunnerSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              query: { is_published?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/stop': {
      $post:
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/answers': {
      $post:
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              json: AgentRunnerSessionAnswer
            }
            output: AgentRunnerSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              json: AgentRunnerSessionAnswer
            }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              json: AgentRunnerSessionAnswer
            }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              json: AgentRunnerSessionAnswer
            }
            output: AgentRunnerError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agent_runner_id: string; agent_runner_session_id: string } } & {
              json: AgentRunnerSessionAnswer
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/submissions/:submission_id': {
      $get:
        | {
            input: { param: { submission_id: string } } & {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Submission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } } & {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { submission_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/service-instances': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: ServiceInstance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/services/:addon/instances': {
      $post:
        | {
            input: { param: { site_id: string; addon: string } } & {
              json: { [x: string]: unknown }
            }
            output: ServiceInstance
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string; addon: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/services/:addon/instances/:instance_id': {
      $get:
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } }
            output: ServiceInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; addon: string; instance_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/identity/:identity_id/users/:user_id': {
      $get:
        | {
            input: { param: { site_id: string; identity_id: string; user_id: string } }
            output: IdentityUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; identity_id: string; user_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/identity/:identity_id/users/lookup': {
      $post:
        | {
            input: { param: { site_id: string; identity_id: string } } & { json: { email: string } }
            output: IdentityUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; identity_id: string } } & { json: { email: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Service[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/:addonName': {
      $get:
        | {
            input: { param: { addonName: string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { addonName: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/services/:addonName/manifest': {
      $get:
        | {
            input: { param: { addonName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { addonName: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sites/:site_id/traffic_splits': {
      $post:
        | {
            input: { param: { site_id: string } } & { json: SplitTestSetup }
            output: SplitTest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: SplitTestSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { site_id: string } }
            output: SplitTests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/traffic_splits/:split_test_id': {
      $put:
        | {
            input: { param: { site_id: string; split_test_id: string } } & { json: SplitTestSetup }
            output: SplitTest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string; split_test_id: string } } & { json: SplitTestSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: SplitTest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/traffic_splits/:split_test_id/publish': {
      $post:
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/traffic_splits/:split_test_id/unpublish': {
      $post:
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; split_test_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dns_zones': {
      $post:
        | { input: { json: DnsZoneSetup }; output: DnsZone; outputFormat: 'json'; status: 201 }
        | { input: { json: DnsZoneSetup }; output: Error; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { account_slug?: string | undefined } }
            output: DnsZones
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { account_slug?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dns_zones/:zone_id': {
      $get:
        | {
            input: { param: { zone_id: string } }
            output: DnsZone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { zone_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { zone_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dns_zones/:zone_id/transfer': {
      $put:
        | {
            input: { param: { zone_id: string } } & {
              query: { account_id: string; transfer_account_id: string; transfer_user_id: string }
            }
            output: DnsZone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string } } & {
              query: { account_id: string; transfer_account_id: string; transfer_user_id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dns_zones/:zone_id/dns_records': {
      $get:
        | {
            input: { param: { zone_id: string } }
            output: DnsRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { zone_id: string } } & { json: DnsRecordCreate }
            output: DnsRecord
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { zone_id: string } } & { json: DnsRecordCreate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dns_zones/:zone_id/dns_records/:dns_record_id': {
      $get:
        | {
            input: { param: { zone_id: string; dns_record_id: string } }
            output: DnsRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zone_id: string; dns_record_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { zone_id: string; dns_record_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { zone_id: string; dns_record_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/dev_servers': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: DevServer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: DevServer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/dev_servers/:dev_server_id': {
      $get: {
        input: { param: { site_id: string; dev_server_id: string } }
        output: DevServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:site_id/dev_servers/:dev_server_id/state': {
      $post:
        | {
            input: { param: { site_id: string; dev_server_id: string } } & {
              json: {
                state: 'starting' | 'live' | 'error' | 'done'
                task_id?: string | undefined
                error?: string | undefined
              }
            }
            output: DevServer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; dev_server_id: string } } & {
              json: {
                state: 'starting' | 'live' | 'error' | 'done'
                task_id?: string | undefined
                error?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/sites/:site_id/dev_server_hooks': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: DevServerHook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { site_id: string } } & { json: DevServerHookSetup }
            output: DevServerHook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: DevServerHookSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/dev_server_hooks/:id': {
      $get:
        | {
            input: { param: { site_id: string; id: string } }
            output: DevServerHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { site_id: string; id: string } } & { json: DevServerHookSetup }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: DevServerHookSetup }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai-gateway/providers': {
      $get:
        | {
            input: {}
            output: { providers?: { [x: string]: ProviderDefinition } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sites/:site_id/ai-gateway/token': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: AiGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/:account_id/ai-gateway/token': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: AiGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database': {
      $post:
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseRequest }
            output: DatabaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseRequest }
            output: DatabaseResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: { role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined }
            }
            output: DatabaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: { role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/branch': {
      $post:
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseBranchRequest }
            output: DatabaseBranchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseBranchRequest }
            output: DatabaseBranchResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseBranchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/branches': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: DatabaseBranchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/branch/:branch_id': {
      $get:
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: { role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined }
            }
            output: DatabaseBranchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: { role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: { role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { site_id: string; branch_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; branch_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/branch/:branch_id/reset': {
      $post:
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: {
                force?: boolean | undefined
                role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined
              }
            } & { json: ResetDatabaseBranchRequest }
            output: ResetDatabaseBranchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: {
                force?: boolean | undefined
                role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined
              }
            } & { json: ResetDatabaseBranchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: {
                force?: boolean | undefined
                role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined
              }
            } & { json: ResetDatabaseBranchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              query: {
                force?: boolean | undefined
                role?: 'netlifydb_owner' | 'netlifydb_readonly' | undefined
              }
            } & { json: ResetDatabaseBranchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/branch/:branch_id/compute/settings': {
      $put:
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              json: DatabaseComputeSettingsRequest
            }
            output: DatabaseComputeSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              json: DatabaseComputeSettingsRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { site_id: string; branch_id: string } } & {
              json: DatabaseComputeSettingsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/compute/settings': {
      $put:
        | {
            input: { param: { site_id: string } } & { json: DatabaseComputeSettingsRequest }
            output: DatabaseComputeSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: DatabaseComputeSettingsRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: DatabaseComputeSettingsRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { site_id: string } }
            output: DatabaseComputeSettings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 403 }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/migrations': {
      $get:
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: ListDatabaseMigrationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: {}
            outputFormat: string
            status: 423
          }
        | {
            input: { param: { site_id: string } } & { query: { branch?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/migrations/:name': {
      $get:
        | {
            input: { param: { site_id: string; name: string } } & {
              query: { branch?: string | undefined }
            }
            output: DatabaseMigrationDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; name: string } } & {
              query: { branch?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string; name: string } } & {
              query: { branch?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 423
          }
        | {
            input: { param: { site_id: string; name: string } } & {
              query: { branch?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/migrations/:deploy_id': {
      $post:
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              json: RunDatabaseMigrationsRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              json: RunDatabaseMigrationsRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              json: RunDatabaseMigrationsRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { site_id: string; deploy_id: string } } & {
              json: RunDatabaseMigrationsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/snapshot': {
      $post:
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseSnapshotRequest }
            output: DatabaseSnapshot
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: CreateDatabaseSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/snapshots': {
      $get:
        | {
            input: { param: { site_id: string } }
            output: DatabaseSnapshotsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/snapshot/:snapshot_id': {
      $delete:
        | {
            input: { param: { site_id: string; snapshot_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { site_id: string; snapshot_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sites/:site_id/database/snapshot/:snapshot_id/restore': {
      $post:
        | {
            input: { param: { site_id: string; snapshot_id: string } } & {
              json: RestoreDatabaseSnapshotRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { site_id: string; snapshot_id: string } } & {
              json: RestoreDatabaseSnapshotRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
