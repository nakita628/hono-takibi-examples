type BranchDetailResponseOutput = {
  ref: string
  postgres_version: string
  postgres_engine: string
  release_channel: string
  status:
    | 'INACTIVE'
    | 'ACTIVE_HEALTHY'
    | 'ACTIVE_UNHEALTHY'
    | 'COMING_UP'
    | 'UNKNOWN'
    | 'GOING_DOWN'
    | 'INIT_FAILED'
    | 'REMOVED'
    | 'RESTORING'
    | 'UPGRADING'
    | 'PAUSING'
    | 'RESTORE_FAILED'
    | 'RESTARTING'
    | 'PAUSE_FAILED'
    | 'RESIZING'
    | 'PROMOTING'
    | 'RIGHTSIZING'
  db_host: string
  db_port: number
  db_user?: string | undefined
  db_pass?: string | undefined
  jwt_secret?: string | undefined
}
type UpdateBranchBody = {
  branch_name?: string | undefined
  git_branch?: string | undefined
  reset_on_push?: boolean | undefined
  persistent?: boolean | undefined
  status?:
    | 'CREATING_PROJECT'
    | 'RUNNING_MIGRATIONS'
    | 'MIGRATIONS_PASSED'
    | 'MIGRATIONS_FAILED'
    | 'FUNCTIONS_DEPLOYED'
    | 'FUNCTIONS_FAILED'
    | undefined
  request_review?: boolean | undefined
  notify_url?: string | undefined
}
type BranchResponseOutput = {
  id: string
  name: string
  project_ref: string
  parent_project_ref: string
  is_default: boolean
  git_branch?: string | undefined
  pr_number?: number | undefined
  latest_check_run_id?: number | undefined
  persistent: boolean
  status:
    | 'CREATING_PROJECT'
    | 'RUNNING_MIGRATIONS'
    | 'MIGRATIONS_PASSED'
    | 'MIGRATIONS_FAILED'
    | 'FUNCTIONS_DEPLOYED'
    | 'FUNCTIONS_FAILED'
  created_at: string
  updated_at: string
  review_requested_at?: string | undefined
  with_data: boolean
  notify_url?: string | undefined
  deletion_scheduled_at?: string | undefined
  preview_project_status?:
    | 'INACTIVE'
    | 'ACTIVE_HEALTHY'
    | 'ACTIVE_UNHEALTHY'
    | 'COMING_UP'
    | 'UNKNOWN'
    | 'GOING_DOWN'
    | 'INIT_FAILED'
    | 'REMOVED'
    | 'RESTORING'
    | 'UPGRADING'
    | 'PAUSING'
    | 'RESTORE_FAILED'
    | 'RESTARTING'
    | 'PAUSE_FAILED'
    | 'RESIZING'
    | 'PROMOTING'
    | 'RIGHTSIZING'
    | undefined
}
type PlanGateErrorBody = {
  message: string
  error?:
    | { code: 'entitlement_required'; feature: string; upgrade_url?: string | undefined }
    | undefined
}
type BranchDeleteResponseOutput = { message: 'ok' }
type BranchActionBody = { migration_version?: string | undefined }
type BranchUpdateResponseOutput = { workflow_run_id: string; message: 'ok' }
type BranchRestoreResponseOutput = { message: 'Branch restoration initiated' }
type V1ProjectWithDatabaseResponseOutput = {
  id: string
  ref: string
  organization_id: string
  organization_slug: string
  name: string
  region: string
  created_at: string
  status:
    | 'INACTIVE'
    | 'ACTIVE_HEALTHY'
    | 'ACTIVE_UNHEALTHY'
    | 'COMING_UP'
    | 'UNKNOWN'
    | 'GOING_DOWN'
    | 'INIT_FAILED'
    | 'REMOVED'
    | 'RESTORING'
    | 'UPGRADING'
    | 'PAUSING'
    | 'RESTORE_FAILED'
    | 'RESTARTING'
    | 'PAUSE_FAILED'
    | 'RESIZING'
    | 'PROMOTING'
    | 'RIGHTSIZING'
  database: { host: string; version: string; postgres_engine: string; release_channel: string }
}
type V1CreateProjectBody = {
  db_pass: string
  name: string
  organization_id?: string | undefined
  organization_slug: string
  plan?: 'free' | 'pro' | undefined
  region?:
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-1'
    | 'us-west-2'
    | 'ap-east-1'
    | 'ap-southeast-1'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-southeast-2'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'eu-north-1'
    | 'eu-central-1'
    | 'eu-central-2'
    | 'ca-central-1'
    | 'ap-south-1'
    | 'sa-east-1'
    | undefined
  region_selection?:
    | {
        type: 'specific'
        code:
          | 'us-east-1'
          | 'us-east-2'
          | 'us-west-1'
          | 'us-west-2'
          | 'ap-east-1'
          | 'ap-southeast-1'
          | 'ap-northeast-1'
          | 'ap-northeast-2'
          | 'ap-southeast-2'
          | 'eu-west-1'
          | 'eu-west-2'
          | 'eu-west-3'
          | 'eu-north-1'
          | 'eu-central-1'
          | 'eu-central-2'
          | 'ca-central-1'
          | 'ap-south-1'
          | 'sa-east-1'
      }
    | { type: 'smartGroup'; code: 'americas' | 'emea' | 'apac' }
    | undefined
  kps_enabled?: boolean | undefined
  desired_instance_size?:
    | 'nano'
    | 'micro'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '4xlarge'
    | '8xlarge'
    | '12xlarge'
    | '16xlarge'
    | '24xlarge'
    | '24xlarge_optimized_memory'
    | '24xlarge_optimized_cpu'
    | '24xlarge_high_memory'
    | '48xlarge'
    | '48xlarge_optimized_memory'
    | '48xlarge_optimized_cpu'
    | '48xlarge_high_memory'
    | undefined
  template_url?: string | undefined
  release_channel?: ({ [x: string]: unknown } | null) | undefined
  postgres_engine?: ({ [x: string]: unknown } | null) | undefined
  high_availability?: boolean | undefined
  db_sql?: string | undefined
  auth_site_url?: string | undefined
  data_api_exposed_schemas?: string[] | undefined
  data_api_use_api_schema?: boolean | undefined
  data_api_revoke_default_privileges?: boolean | undefined
  github_installation_id?: number | undefined
  github_repository_id?: number | undefined
}
type V1ProjectResponseOutput = {
  id: string
  ref: string
  organization_id: string
  organization_slug: string
  name: string
  region: string
  created_at: string
  status:
    | 'INACTIVE'
    | 'ACTIVE_HEALTHY'
    | 'ACTIVE_UNHEALTHY'
    | 'COMING_UP'
    | 'UNKNOWN'
    | 'GOING_DOWN'
    | 'INIT_FAILED'
    | 'REMOVED'
    | 'RESTORING'
    | 'UPGRADING'
    | 'PAUSING'
    | 'RESTORE_FAILED'
    | 'RESTARTING'
    | 'PAUSE_FAILED'
    | 'RESIZING'
    | 'PROMOTING'
    | 'RIGHTSIZING'
}
type RegionsInfoV1Output = {
  recommendations: {
    smartGroup: { name: string; code: 'americas' | 'emea' | 'apac'; type: 'smartGroup' }
    specific: {
      name: string
      code:
        | 'us-east-1'
        | 'us-east-2'
        | 'us-west-1'
        | 'us-west-2'
        | 'ap-southeast-1'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-east-1'
        | 'ap-southeast-2'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'eu-north-1'
        | 'eu-central-1'
        | 'eu-central-2'
        | 'ca-central-1'
        | 'ap-south-1'
        | 'sa-east-1'
      type: 'specific'
      provider: 'AWS' | 'AWS_K8S' | 'AWS_NIMBUS'
      status?: 'capacity' | 'other' | undefined
    }[]
  }
  all: {
    smartGroup: { name: string; code: 'americas' | 'emea' | 'apac'; type: 'smartGroup' }[]
    specific: {
      name: string
      code:
        | 'us-east-1'
        | 'us-east-2'
        | 'us-west-1'
        | 'us-west-2'
        | 'ap-southeast-1'
        | 'ap-northeast-1'
        | 'ap-northeast-2'
        | 'ap-east-1'
        | 'ap-southeast-2'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-west-3'
        | 'eu-north-1'
        | 'eu-central-1'
        | 'eu-central-2'
        | 'ca-central-1'
        | 'ap-south-1'
        | 'sa-east-1'
      type: 'specific'
      provider: 'AWS' | 'AWS_K8S' | 'AWS_NIMBUS'
      status?: 'capacity' | 'other' | undefined
    }[]
  }
}
type OrganizationResponseV1Output = { id: string; slug: string; name: string }
type CreateOrganizationV1 = { name: string }
type OAuthTokenBody = {
  grant_type?:
    | 'authorization_code'
    | 'refresh_token'
    | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  code?: string | undefined
  code_verifier?: string | undefined
  redirect_uri?: string | undefined
  refresh_token?: string | undefined
  assertion?: string | undefined
  resource?: string | undefined
  scope?: string | undefined
}
type OAuthTokenResponseOutput = {
  access_token: string
  refresh_token?: string | undefined
  expires_in: number
  token_type: 'Bearer'
  scope?: string | undefined
  project_refs: string[] | null
}
type OAuthRevokeTokenBody = { client_id: string; client_secret: string; refresh_token: string }
type SnippetListOutput = {
  data: {
    id: string
    inserted_at: string
    updated_at: string
    type: 'sql'
    visibility: 'user' | 'project' | 'org' | 'public'
    name: string
    description: string | null
    project: { id: number; name: string }
    owner: { id: number; username: string }
    updated_by: { id: number; username: string }
    favorite: boolean
  }[]
  cursor?: string | undefined
}
type SnippetResponseOutput = {
  id: string
  inserted_at: string
  updated_at: string
  type: 'sql'
  visibility: 'user' | 'project' | 'org' | 'public'
  name: string
  description: string | null
  project: { id: number; name: string }
  owner: { id: number; username: string }
  updated_by: { id: number; username: string }
  favorite: boolean
  content: { favorite?: boolean | undefined; schema_version?: string | undefined; sql: string }
}
type V1ProfileResponseOutput = { gotrue_id: string; primary_email: string; username: string }
type ListActionRunResponseOutput = {
  id: string
  branch_id: string
  run_steps: {
    name: 'clone' | 'pull' | 'health' | 'configure' | 'migrate' | 'seed' | 'deploy'
    status: 'CREATED' | 'DEAD' | 'EXITED' | 'PAUSED' | 'REMOVING' | 'RESTARTING' | 'RUNNING'
    created_at: string
    updated_at: string
  }[]
  git_config?: ({ [x: string]: unknown } | null) | undefined
  workdir: string | null
  check_run_id: number | null
  created_at: string
  updated_at: string
}[]
type ActionRunResponseOutput = {
  id: string
  branch_id: string
  run_steps: {
    name: 'clone' | 'pull' | 'health' | 'configure' | 'migrate' | 'seed' | 'deploy'
    status: 'CREATED' | 'DEAD' | 'EXITED' | 'PAUSED' | 'REMOVING' | 'RESTARTING' | 'RUNNING'
    created_at: string
    updated_at: string
  }[]
  git_config?: ({ [x: string]: unknown } | null) | undefined
  workdir: string | null
  check_run_id: number | null
  created_at: string
  updated_at: string
}
type UpdateRunStatusBody = {
  clone?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  pull?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  health?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  configure?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  migrate?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  seed?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
  deploy?:
    | 'CREATED'
    | 'DEAD'
    | 'EXITED'
    | 'PAUSED'
    | 'REMOVING'
    | 'RESTARTING'
    | 'RUNNING'
    | undefined
}
type UpdateRunStatusResponseOutput = { message: 'ok' }
type ApiKeyResponseOutput = {
  api_key?: (string | null) | undefined
  id?: (string | null) | undefined
  type?: 'legacy' | 'publishable' | 'secret' | null | undefined
  prefix?: (string | null) | undefined
  name: string
  description?: (string | null) | undefined
  hash?: (string | null) | undefined
  secret_jwt_template?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  inserted_at?: (string | null) | undefined
  updated_at?: (string | null) | undefined
}
type CreateApiKeyBody = {
  type: 'publishable' | 'secret'
  name: string
  description?: (string | null) | undefined
  secret_jwt_template?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type LegacyApiKeysResponseOutput = { enabled: boolean }
type UpdateApiKeyBody = {
  name?: string | undefined
  description?: (string | null) | undefined
  secret_jwt_template?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type CreateBranchBody = {
  branch_name: string
  git_branch?: string | undefined
  is_default?: boolean | undefined
  persistent?: boolean | undefined
  region?: string | undefined
  desired_instance_size?:
    | 'pico'
    | 'nano'
    | 'micro'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '4xlarge'
    | '8xlarge'
    | '12xlarge'
    | '16xlarge'
    | '24xlarge'
    | '24xlarge_optimized_memory'
    | '24xlarge_optimized_cpu'
    | '24xlarge_high_memory'
    | '48xlarge'
    | '48xlarge_optimized_memory'
    | '48xlarge_optimized_cpu'
    | '48xlarge_high_memory'
    | undefined
  release_channel?: 'internal' | 'alpha' | 'beta' | 'ga' | 'withdrawn' | 'preview' | undefined
  postgres_engine?: '15' | '17' | '17-oriole' | undefined
  secrets?: { [x: string]: string } | undefined
  with_data?: boolean | undefined
  notify_url?: string | undefined
}
type JsonValueOutput =
  | string
  | number
  | boolean
  | JsonValueOutput[]
  | { [x: string]: JsonValueOutput }
type UpdateCustomHostnameResponseOutput = {
  status:
    | '1_not_started'
    | '2_initiated'
    | '3_challenge_verified'
    | '4_origin_setup_completed'
    | '5_services_reconfigured'
  custom_hostname?: string | undefined
  data: {
    success: boolean
    errors: JsonValueOutput[]
    messages: JsonValueOutput[]
    result: {
      id: string
      hostname: string
      ssl?:
        | {
            status?: string | undefined
            validation_records?:
              | { txt_name?: string | undefined; txt_value?: string | undefined }[]
              | undefined
            validation_errors?: { message: string }[] | undefined
          }
        | undefined
      ownership_verification?:
        | { type?: string | undefined; name?: string | undefined; value?: string | undefined }
        | undefined
      custom_origin_server?: string | undefined
      verification_errors?: string[] | undefined
      status?: string | undefined
    }
  }
}
type UpdateCustomHostnameBody = { custom_hostname: string }
type JitAccessRequestRequest = { state: 'enabled' | 'disabled' }
type NetworkBanResponseOutput = { banned_ipv4_addresses: string[] }
type NetworkBanResponseEnrichedOutput = {
  banned_ipv4_addresses: { banned_address: string; identifier: string; type: string }[]
}
type RemoveNetworkBanRequest = {
  ipv4_addresses: string[]
  requester_ip?: boolean | undefined
  identifier?: string | undefined
}
type NetworkRestrictionsResponseOutput = {
  entitlement: 'disallowed' | 'allowed'
  config: { dbAllowedCidrs?: string[] | undefined; dbAllowedCidrsV6?: string[] | undefined }
  old_config?:
    | { dbAllowedCidrs?: string[] | undefined; dbAllowedCidrsV6?: string[] | undefined }
    | undefined
  pending_config?:
    | { dbAllowedCidrs?: string[] | undefined; dbAllowedCidrsV6?: string[] | undefined }
    | undefined
  pending_requested_at?: string | undefined
  status: 'stored' | 'applied'
  updated_at?: string | undefined
  applied_at?: string | undefined
}
type NetworkRestrictionsPatchRequest = {
  add?:
    | { dbAllowedCidrs?: string[] | undefined; dbAllowedCidrsV6?: string[] | undefined }
    | undefined
  remove?:
    | { dbAllowedCidrs?: string[] | undefined; dbAllowedCidrsV6?: string[] | undefined }
    | undefined
}
type NetworkRestrictionsV2ResponseOutput = {
  entitlement: 'disallowed' | 'allowed'
  config: { dbAllowedCidrs?: { address: string; type: 'v4' | 'v6' }[] | undefined }
  old_config?: { dbAllowedCidrs?: { address: string; type: 'v4' | 'v6' }[] | undefined } | undefined
  updated_at?: string | undefined
  applied_at?: string | undefined
  status: 'stored' | 'applied'
}
type NetworkRestrictionsRequest = {
  dbAllowedCidrs?: string[] | undefined
  dbAllowedCidrsV6?: string[] | undefined
}
type NetworkRestrictionsReviewRequest = { action: 'apply' | 'reject'; requested_at: string }
type PgsodiumConfigResponseOutput = { root_key: string }
type UpdatePgsodiumConfigBody = { root_key: string }
type PostgrestConfigWithJWTSecretResponseOutput = {
  db_schema: string
  max_rows: number
  db_extra_search_path: string
  db_pool: number | null
  db_pool_acquisition_timeout: number | null
  db_pool_max_lifetime: number | null
  db_pool_max_idletime: number | null
  jwt_secret?: string | undefined
}
type V1UpdatePostgrestConfigBody = {
  db_extra_search_path?: string | undefined
  db_schema?: string | undefined
  max_rows?: number | undefined
  db_pool?: number | undefined
  db_pool_acquisition_timeout?: number | undefined
  db_pool_max_lifetime?: number | undefined
  db_pool_max_idletime?: number | undefined
}
type V1PostgrestConfigResponseOutput = {
  db_schema: string
  max_rows: number
  db_extra_search_path: string
  db_pool: number | null
  db_pool_acquisition_timeout: number | null
  db_pool_max_lifetime: number | null
  db_pool_max_idletime: number | null
}
type V1ProjectRefResponseOutput = { id: number; ref: string; name: string }
type V1UpdateProjectBody = { name: string }
type SecretResponseOutput = { name: string; value: string; updated_at?: string | undefined }
type CreateSecretBody = { name: string; value: string }[]
type DeleteSecretsBody = string[]
type SslEnforcementResponseOutput = {
  currentConfig: { database: boolean }
  appliedSuccessfully: boolean
}
type SslEnforcementRequest = { requestedConfig: { database: boolean } }
type TypescriptResponseOutput = { types: string }
type VanitySubdomainConfigResponseOutput = {
  status: 'not-used' | 'custom-domain-used' | 'active'
  custom_domain?: string | undefined
}
type VanitySubdomainBody = { vanity_subdomain: string }
type SubdomainAvailabilityResponseOutput = { available: boolean }
type ActivateVanitySubdomainResponseOutput = { custom_domain: string }
type UpgradeDatabaseBody = {
  target_version: string
  release_channel?: 'internal' | 'alpha' | 'beta' | 'ga' | 'withdrawn' | 'preview' | undefined
}
type ProjectUpgradeInitiateResponseOutput = { tracking_id: string }
type ProjectUpgradeEligibilityResponseOutput = {
  eligible: boolean
  current_app_version: string
  current_app_version_release_channel:
    | 'internal'
    | 'alpha'
    | 'beta'
    | 'ga'
    | 'withdrawn'
    | 'preview'
  latest_app_version: string
  target_upgrade_versions: {
    postgres_version: '13' | '14' | '15' | '17' | '17-oriole'
    release_channel: 'internal' | 'alpha' | 'beta' | 'ga' | 'withdrawn' | 'preview'
    app_version: string
  }[]
  duration_estimate_hours: number
  legacy_auth_custom_roles: string[]
  objects_to_be_dropped: string[]
  unsupported_extensions: string[]
  user_defined_objects_in_internal_schemas: string[]
  validation_errors: (
    | { type: 'objects_depending_on_pg_cron'; dependents: string[] }
    | {
        type: 'indexes_referencing_ll_to_earth'
        schema_name: string
        table_name: string
        index_name: string
      }
    | {
        type: 'function_using_obsolete_lang'
        schema_name: string
        function_name: string
        lang_name: string
      }
    | { type: 'unsupported_extension'; extension_name: string }
    | { type: 'unsupported_fdw_handler'; fdw_name: string; fdw_handler_name: string }
    | {
        type: 'unlogged_table_with_persistent_sequence'
        schema_name: string
        table_name: string
        sequence_name: string
      }
    | {
        type: 'user_defined_objects_in_internal_schemas'
        obj_type: 'table' | 'function'
        schema_name: string
        obj_name: string
      }
    | { type: 'active_replication_slot'; slot_name: string }
    | {
        type: 'table_using_reg_type'
        schema_name: string
        table_name: string
        column_name: string
        type_name: string
      }
    | { type: 'x86_architecture' }
    | { type: 'project_hibernating' }
  )[]
  warnings: (
    | { type: 'pg_graphql_introspection_change' }
    | { type: 'ltree_reindex_required' }
    | { type: 'operator_estimator_gate' }
    | { type: 'btree_gist_nan_reindex' }
    | { type: 'collation_reindex_required' }
  )[]
}
type DatabaseUpgradeStatusResponseOutput = {
  databaseUpgradeStatus: {
    initiated_at: string
    latest_status_at: string
    target_version: string
    error?:
      | '1_upgraded_instance_launch_failed'
      | '2_volume_detachchment_from_upgraded_instance_failed'
      | '3_volume_attachment_to_original_instance_failed'
      | '4_data_upgrade_initiation_failed'
      | '5_data_upgrade_completion_failed'
      | '6_volume_detachchment_from_original_instance_failed'
      | '7_volume_attachment_to_upgraded_instance_failed'
      | '8_upgrade_completion_failed'
      | '9_post_physical_backup_failed'
      | undefined
    progress?:
      | '0_requested'
      | '1_started'
      | '2_launched_upgraded_instance'
      | '3_detached_volume_from_upgraded_instance'
      | '4_attached_volume_to_original_instance'
      | '5_initiated_data_upgrade'
      | '6_completed_data_upgrade'
      | '7_detached_volume_from_original_instance'
      | '8_attached_volume_to_upgraded_instance'
      | '9_completed_upgrade'
      | '10_completed_post_physical_backup'
      | undefined
    status: number
  } | null
}
type ReadOnlyStatusResponseOutput = {
  enabled: boolean
  override_enabled: boolean
  override_active_until: string
}
type SetUpReadReplicaBody = {
  read_replica_region:
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-1'
    | 'us-west-2'
    | 'ap-east-1'
    | 'ap-southeast-1'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-southeast-2'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'eu-north-1'
    | 'eu-central-1'
    | 'eu-central-2'
    | 'ca-central-1'
    | 'ap-south-1'
    | 'sa-east-1'
}
type RemoveReadReplicaBody = { database_identifier: string }
type V1ServiceHealthResponseOutput = {
  name:
    | 'auth'
    | 'db'
    | 'db_postgres_user'
    | 'pooler'
    | 'realtime'
    | 'rest'
    | 'storage'
    | 'pg_bouncer'
  healthy: boolean
  status: 'COMING_UP' | 'ACTIVE_HEALTHY' | 'UNHEALTHY'
  info?:
    | { name: 'GoTrue'; version: string; description: string }
    | {
        healthy: boolean
        db_connected: boolean
        replication_connected: boolean
        connected_cluster: number
      }
    | { db_schema: string }
    | undefined
  error?: string | undefined
}
type SigningKeyResponseOutput = {
  id: string
  algorithm: 'EdDSA' | 'ES256' | 'RS256' | 'HS256'
  status: 'in_use' | 'previously_used' | 'revoked' | 'standby'
  public_jwk: { [x: string]: unknown } | null
  created_at: string
  updated_at: string
}
type CreateSigningKeyBody = {
  algorithm: 'EdDSA' | 'ES256' | 'RS256' | 'HS256'
  status?: 'in_use' | 'standby' | undefined
  private_jwk?:
    | {
        kid?: string | undefined
        use?: 'sig' | undefined
        key_ops?: ('sign' | 'verify')[] | undefined
        ext?: true | undefined
        kty: 'RSA'
        alg?: 'RS256' | undefined
        n: string
        e: 'AQAB'
        d: string
        p: string
        q: string
        dp: string
        dq: string
        qi: string
      }
    | {
        kid?: string | undefined
        use?: 'sig' | undefined
        key_ops?: ('sign' | 'verify')[] | undefined
        ext?: true | undefined
        kty: 'EC'
        alg?: 'ES256' | undefined
        crv: 'P-256'
        x: string
        y: string
        d: string
      }
    | {
        kid?: string | undefined
        use?: 'sig' | undefined
        key_ops?: ('sign' | 'verify')[] | undefined
        ext?: true | undefined
        kty: 'OKP'
        alg?: 'EdDSA' | undefined
        crv: 'Ed25519'
        x: string
        d: string
      }
    | {
        kid?: string | undefined
        use?: 'sig' | undefined
        key_ops?: ('sign' | 'verify')[] | undefined
        ext?: true | undefined
        kty: 'oct'
        alg?: 'HS256' | undefined
        k: string
      }
    | undefined
}
type SigningKeysResponseOutput = {
  keys: {
    id: string
    algorithm: 'EdDSA' | 'ES256' | 'RS256' | 'HS256'
    status: 'in_use' | 'previously_used' | 'revoked' | 'standby'
    public_jwk: { [x: string]: unknown } | null
    created_at: string
    updated_at: string
  }[]
}
type UpdateSigningKeyBody = { status: 'in_use' | 'previously_used' | 'revoked' | 'standby' }
type AuthConfigResponseOutput = {
  api_max_request_duration: number | null
  db_max_pool_size: number | null
  db_max_pool_size_unit: 'connections' | 'percent' | null
  disable_signup: boolean | null
  external_anonymous_users_enabled: boolean | null
  external_apple_additional_client_ids: string | null
  external_apple_client_id: string | null
  external_apple_email_optional: boolean | null
  external_apple_enabled: boolean | null
  external_apple_secret: string | null
  external_azure_client_id: string | null
  external_azure_email_optional: boolean | null
  external_azure_enabled: boolean | null
  external_azure_secret: string | null
  external_azure_url: string | null
  external_bitbucket_client_id: string | null
  external_bitbucket_email_optional: boolean | null
  external_bitbucket_enabled: boolean | null
  external_bitbucket_secret: string | null
  external_discord_client_id: string | null
  external_discord_email_optional: boolean | null
  external_discord_enabled: boolean | null
  external_discord_secret: string | null
  external_email_enabled: boolean | null
  external_facebook_client_id: string | null
  external_facebook_email_optional: boolean | null
  external_facebook_enabled: boolean | null
  external_facebook_secret: string | null
  external_figma_client_id: string | null
  external_figma_email_optional: boolean | null
  external_figma_enabled: boolean | null
  external_figma_secret: string | null
  external_github_client_id: string | null
  external_github_email_optional: boolean | null
  external_github_enabled: boolean | null
  external_github_secret: string | null
  external_gitlab_client_id: string | null
  external_gitlab_email_optional: boolean | null
  external_gitlab_enabled: boolean | null
  external_gitlab_secret: string | null
  external_gitlab_url: string | null
  external_google_additional_client_ids: string | null
  external_google_client_id: string | null
  external_google_email_optional: boolean | null
  external_google_enabled: boolean | null
  external_google_secret: string | null
  external_google_skip_nonce_check: boolean | null
  external_kakao_client_id: string | null
  external_kakao_email_optional: boolean | null
  external_kakao_enabled: boolean | null
  external_kakao_secret: string | null
  external_keycloak_client_id: string | null
  external_keycloak_email_optional: boolean | null
  external_keycloak_enabled: boolean | null
  external_keycloak_secret: string | null
  external_keycloak_url: string | null
  external_linkedin_oidc_client_id: string | null
  external_linkedin_oidc_email_optional: boolean | null
  external_linkedin_oidc_enabled: boolean | null
  external_linkedin_oidc_secret: string | null
  external_slack_oidc_client_id: string | null
  external_slack_oidc_email_optional: boolean | null
  external_slack_oidc_enabled: boolean | null
  external_slack_oidc_secret: string | null
  external_notion_client_id: string | null
  external_notion_email_optional: boolean | null
  external_notion_enabled: boolean | null
  external_notion_secret: string | null
  external_phone_enabled: boolean | null
  external_slack_client_id: string | null
  external_slack_email_optional: boolean | null
  external_slack_enabled: boolean | null
  external_slack_secret: string | null
  external_spotify_client_id: string | null
  external_spotify_email_optional: boolean | null
  external_spotify_enabled: boolean | null
  external_spotify_secret: string | null
  external_twitch_client_id: string | null
  external_twitch_email_optional: boolean | null
  external_twitch_enabled: boolean | null
  external_twitch_secret: string | null
  external_twitter_client_id: string | null
  external_twitter_email_optional: boolean | null
  external_twitter_enabled: boolean | null
  external_twitter_secret: string | null
  external_x_client_id: string | null
  external_x_email_optional: boolean | null
  external_x_enabled: boolean | null
  external_x_secret: string | null
  external_workos_client_id: string | null
  external_workos_enabled: boolean | null
  external_workos_secret: string | null
  external_workos_url: string | null
  external_web3_solana_enabled: boolean | null
  external_web3_ethereum_enabled: boolean | null
  external_zoom_client_id: string | null
  external_zoom_email_optional: boolean | null
  external_zoom_enabled: boolean | null
  external_zoom_secret: string | null
  hook_custom_access_token_enabled: boolean | null
  hook_custom_access_token_uri: string | null
  hook_custom_access_token_secrets: string | null
  hook_mfa_verification_attempt_enabled: boolean | null
  hook_mfa_verification_attempt_uri: string | null
  hook_mfa_verification_attempt_secrets: string | null
  hook_password_verification_attempt_enabled: boolean | null
  hook_password_verification_attempt_uri: string | null
  hook_password_verification_attempt_secrets: string | null
  hook_send_sms_enabled: boolean | null
  hook_send_sms_uri: string | null
  hook_send_sms_secrets: string | null
  hook_send_email_enabled: boolean | null
  hook_send_email_uri: string | null
  hook_send_email_secrets: string | null
  hook_before_user_created_enabled: boolean | null
  hook_before_user_created_uri: string | null
  hook_before_user_created_secrets: string | null
  hook_after_user_created_enabled: boolean | null
  hook_after_user_created_uri: string | null
  hook_after_user_created_secrets: string | null
  jwt_exp: number | null
  mailer_allow_unverified_email_sign_ins: boolean | null
  mailer_autoconfirm: boolean | null
  mailer_otp_exp: number
  mailer_otp_length: number | null
  mailer_secure_email_change_enabled: boolean | null
  mailer_subjects_confirmation: string | null
  mailer_subjects_email_change: string | null
  mailer_subjects_invite: string | null
  mailer_subjects_magic_link: string | null
  mailer_subjects_reauthentication: string | null
  mailer_subjects_recovery: string | null
  mailer_subjects_password_changed_notification: string | null
  mailer_subjects_email_changed_notification: string | null
  mailer_subjects_phone_changed_notification: string | null
  mailer_subjects_mfa_factor_enrolled_notification: string | null
  mailer_subjects_mfa_factor_unenrolled_notification: string | null
  mailer_subjects_identity_linked_notification: string | null
  mailer_subjects_identity_unlinked_notification: string | null
  mailer_templates_confirmation_content: string | null
  mailer_templates_email_change_content: string | null
  mailer_templates_invite_content: string | null
  mailer_templates_magic_link_content: string | null
  mailer_templates_reauthentication_content: string | null
  mailer_templates_recovery_content: string | null
  mailer_templates_password_changed_notification_content: string | null
  mailer_templates_email_changed_notification_content: string | null
  mailer_templates_phone_changed_notification_content: string | null
  mailer_templates_mfa_factor_enrolled_notification_content: string | null
  mailer_templates_mfa_factor_unenrolled_notification_content: string | null
  mailer_templates_identity_linked_notification_content: string | null
  mailer_templates_identity_unlinked_notification_content: string | null
  mailer_notifications_password_changed_enabled: boolean | null
  mailer_notifications_email_changed_enabled: boolean | null
  mailer_notifications_phone_changed_enabled: boolean | null
  mailer_notifications_mfa_factor_enrolled_enabled: boolean | null
  mailer_notifications_mfa_factor_unenrolled_enabled: boolean | null
  mailer_notifications_identity_linked_enabled: boolean | null
  mailer_notifications_identity_unlinked_enabled: boolean | null
  mfa_max_enrolled_factors: number | null
  mfa_totp_enroll_enabled: boolean | null
  mfa_totp_verify_enabled: boolean | null
  mfa_phone_enroll_enabled: boolean | null
  mfa_phone_verify_enabled: boolean | null
  mfa_web_authn_enroll_enabled: boolean | null
  mfa_web_authn_verify_enabled: boolean | null
  passkey_enabled: boolean
  webauthn_rp_display_name: string | null
  webauthn_rp_id: string | null
  webauthn_rp_origins: string | null
  mfa_phone_otp_length: number
  mfa_phone_template: string | null
  mfa_phone_max_frequency: number | null
  nimbus_oauth_client_id: string | null
  nimbus_oauth_email_optional: boolean | null
  nimbus_oauth_client_secret: string | null
  password_hibp_enabled: boolean | null
  password_min_length: number | null
  password_required_characters:
    | 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
    | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
    | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\\\:"|<>?,./`~'
    | ''
    | null
  rate_limit_anonymous_users: number | null
  rate_limit_email_sent: number | null
  rate_limit_sms_sent: number | null
  rate_limit_token_refresh: number | null
  rate_limit_verify: number | null
  rate_limit_otp: number | null
  rate_limit_web3: number | null
  refresh_token_rotation_enabled: boolean | null
  saml_enabled: boolean | null
  saml_external_url: string | null
  saml_allow_encrypted_assertions: boolean | null
  security_sb_forwarded_for_enabled: boolean | null
  external_email_magic_link_disabled: boolean | null
  security_captcha_enabled: boolean | null
  security_captcha_provider: 'turnstile' | 'hcaptcha' | null
  security_captcha_secret: string | null
  security_manual_linking_enabled: boolean | null
  security_refresh_token_reuse_interval: number | null
  security_update_password_require_current_password: boolean | null
  security_update_password_require_reauthentication: boolean | null
  sessions_inactivity_timeout: number | null
  sessions_single_per_user: boolean | null
  sessions_tags: string | null
  sessions_timebox: number | null
  site_url: string | null
  sms_autoconfirm: boolean | null
  sms_max_frequency: number | null
  sms_messagebird_access_key: string | null
  sms_messagebird_originator: string | null
  sms_otp_exp: number | null
  sms_otp_length: number
  sms_provider: 'messagebird' | 'textlocal' | 'twilio' | 'twilio_verify' | 'vonage' | null
  sms_template: string | null
  sms_test_otp: string | null
  sms_test_otp_valid_until: string | null
  sms_textlocal_api_key: string | null
  sms_textlocal_sender: string | null
  sms_twilio_account_sid: string | null
  sms_twilio_auth_token: string | null
  sms_twilio_content_sid: string | null
  sms_twilio_message_service_sid: string | null
  sms_twilio_verify_account_sid: string | null
  sms_twilio_verify_auth_token: string | null
  sms_twilio_verify_message_service_sid: string | null
  sms_vonage_api_key: string | null
  sms_vonage_api_secret: string | null
  sms_vonage_from: string | null
  smtp_admin_email: string | null
  smtp_host: string | null
  smtp_max_frequency: number | null
  smtp_pass: string | null
  smtp_port: string | null
  smtp_sender_name: string | null
  smtp_user: string | null
  uri_allow_list: string | null
  oauth_server_enabled: boolean
  oauth_server_allow_dynamic_registration: boolean
  oauth_server_authorization_path: string | null
  custom_oauth_enabled: boolean
  custom_oauth_max_providers: number
}
type UpdateAuthConfigBody = {
  site_url?: (string | null) | undefined
  disable_signup?: (boolean | null) | undefined
  jwt_exp?: (number | null) | undefined
  smtp_admin_email?: (string | null) | undefined
  smtp_host?: (string | null) | undefined
  smtp_port?: (string | null) | undefined
  smtp_user?: (string | null) | undefined
  smtp_pass?: (string | null) | undefined
  smtp_max_frequency?: (number | null) | undefined
  smtp_sender_name?: (string | null) | undefined
  mailer_allow_unverified_email_sign_ins?: (boolean | null) | undefined
  mailer_autoconfirm?: (boolean | null) | undefined
  mailer_subjects_invite?: (string | null) | undefined
  mailer_subjects_confirmation?: (string | null) | undefined
  mailer_subjects_recovery?: (string | null) | undefined
  mailer_subjects_email_change?: (string | null) | undefined
  mailer_subjects_magic_link?: (string | null) | undefined
  mailer_subjects_reauthentication?: (string | null) | undefined
  mailer_subjects_password_changed_notification?: (string | null) | undefined
  mailer_subjects_email_changed_notification?: (string | null) | undefined
  mailer_subjects_phone_changed_notification?: (string | null) | undefined
  mailer_subjects_mfa_factor_enrolled_notification?: (string | null) | undefined
  mailer_subjects_mfa_factor_unenrolled_notification?: (string | null) | undefined
  mailer_subjects_identity_linked_notification?: (string | null) | undefined
  mailer_subjects_identity_unlinked_notification?: (string | null) | undefined
  mailer_templates_invite_content?: (string | null) | undefined
  mailer_templates_confirmation_content?: (string | null) | undefined
  mailer_templates_recovery_content?: (string | null) | undefined
  mailer_templates_email_change_content?: (string | null) | undefined
  mailer_templates_magic_link_content?: (string | null) | undefined
  mailer_templates_reauthentication_content?: (string | null) | undefined
  mailer_templates_password_changed_notification_content?: (string | null) | undefined
  mailer_templates_email_changed_notification_content?: (string | null) | undefined
  mailer_templates_phone_changed_notification_content?: (string | null) | undefined
  mailer_templates_mfa_factor_enrolled_notification_content?: (string | null) | undefined
  mailer_templates_mfa_factor_unenrolled_notification_content?: (string | null) | undefined
  mailer_templates_identity_linked_notification_content?: (string | null) | undefined
  mailer_templates_identity_unlinked_notification_content?: (string | null) | undefined
  mailer_notifications_password_changed_enabled?: (boolean | null) | undefined
  mailer_notifications_email_changed_enabled?: (boolean | null) | undefined
  mailer_notifications_phone_changed_enabled?: (boolean | null) | undefined
  mailer_notifications_mfa_factor_enrolled_enabled?: (boolean | null) | undefined
  mailer_notifications_mfa_factor_unenrolled_enabled?: (boolean | null) | undefined
  mailer_notifications_identity_linked_enabled?: (boolean | null) | undefined
  mailer_notifications_identity_unlinked_enabled?: (boolean | null) | undefined
  mfa_max_enrolled_factors?: (number | null) | undefined
  uri_allow_list?: (string | null) | undefined
  external_anonymous_users_enabled?: (boolean | null) | undefined
  external_email_enabled?: (boolean | null) | undefined
  external_phone_enabled?: (boolean | null) | undefined
  saml_enabled?: (boolean | null) | undefined
  saml_external_url?: (string | null) | undefined
  security_sb_forwarded_for_enabled?: (boolean | null) | undefined
  external_email_magic_link_disabled?: boolean | undefined
  security_captcha_enabled?: (boolean | null) | undefined
  security_captcha_provider?: 'turnstile' | 'hcaptcha' | null | undefined
  security_captcha_secret?: (string | null) | undefined
  sessions_timebox?: (number | null) | undefined
  sessions_inactivity_timeout?: (number | null) | undefined
  sessions_single_per_user?: (boolean | null) | undefined
  sessions_tags?: (string | null) | undefined
  rate_limit_anonymous_users?: (number | null) | undefined
  rate_limit_email_sent?: (number | null) | undefined
  rate_limit_sms_sent?: (number | null) | undefined
  rate_limit_verify?: (number | null) | undefined
  rate_limit_token_refresh?: (number | null) | undefined
  rate_limit_otp?: (number | null) | undefined
  rate_limit_web3?: (number | null) | undefined
  mailer_secure_email_change_enabled?: (boolean | null) | undefined
  refresh_token_rotation_enabled?: (boolean | null) | undefined
  password_hibp_enabled?: (boolean | null) | undefined
  password_min_length?: (number | null) | undefined
  password_required_characters?:
    | 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
    | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789'
    | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\\\:"|<>?,./`~'
    | ''
    | null
    | undefined
  security_manual_linking_enabled?: (boolean | null) | undefined
  security_update_password_require_reauthentication?: (boolean | null) | undefined
  security_update_password_require_current_password?: (boolean | null) | undefined
  security_refresh_token_reuse_interval?: (number | null) | undefined
  mailer_otp_exp?: number | undefined
  mailer_otp_length?: (number | null) | undefined
  sms_autoconfirm?: (boolean | null) | undefined
  sms_max_frequency?: (number | null) | undefined
  sms_otp_exp?: (number | null) | undefined
  sms_otp_length?: number | undefined
  sms_provider?:
    | 'messagebird'
    | 'textlocal'
    | 'twilio'
    | 'twilio_verify'
    | 'vonage'
    | null
    | undefined
  sms_messagebird_access_key?: (string | null) | undefined
  sms_messagebird_originator?: (string | null) | undefined
  sms_test_otp?: (string | null) | undefined
  sms_test_otp_valid_until?: (string | null) | undefined
  sms_textlocal_api_key?: (string | null) | undefined
  sms_textlocal_sender?: (string | null) | undefined
  sms_twilio_account_sid?: (string | null) | undefined
  sms_twilio_auth_token?: (string | null) | undefined
  sms_twilio_content_sid?: (string | null) | undefined
  sms_twilio_message_service_sid?: (string | null) | undefined
  sms_twilio_verify_account_sid?: (string | null) | undefined
  sms_twilio_verify_auth_token?: (string | null) | undefined
  sms_twilio_verify_message_service_sid?: (string | null) | undefined
  sms_vonage_api_key?: (string | null) | undefined
  sms_vonage_api_secret?: (string | null) | undefined
  sms_vonage_from?: (string | null) | undefined
  sms_template?: (string | null) | undefined
  hook_mfa_verification_attempt_enabled?: (boolean | null) | undefined
  hook_mfa_verification_attempt_uri?: (string | null) | undefined
  hook_mfa_verification_attempt_secrets?: (string | null) | undefined
  hook_password_verification_attempt_enabled?: (boolean | null) | undefined
  hook_password_verification_attempt_uri?: (string | null) | undefined
  hook_password_verification_attempt_secrets?: (string | null) | undefined
  hook_custom_access_token_enabled?: (boolean | null) | undefined
  hook_custom_access_token_uri?: (string | null) | undefined
  hook_custom_access_token_secrets?: (string | null) | undefined
  hook_send_sms_enabled?: (boolean | null) | undefined
  hook_send_sms_uri?: (string | null) | undefined
  hook_send_sms_secrets?: (string | null) | undefined
  hook_send_email_enabled?: (boolean | null) | undefined
  hook_send_email_uri?: (string | null) | undefined
  hook_send_email_secrets?: (string | null) | undefined
  hook_before_user_created_enabled?: (boolean | null) | undefined
  hook_before_user_created_uri?: (string | null) | undefined
  hook_before_user_created_secrets?: (string | null) | undefined
  hook_after_user_created_enabled?: (boolean | null) | undefined
  hook_after_user_created_uri?: (string | null) | undefined
  hook_after_user_created_secrets?: (string | null) | undefined
  external_apple_enabled?: (boolean | null) | undefined
  external_apple_client_id?: (string | null) | undefined
  external_apple_email_optional?: (boolean | null) | undefined
  external_apple_secret?: (string | null) | undefined
  external_apple_additional_client_ids?: (string | null) | undefined
  external_azure_enabled?: (boolean | null) | undefined
  external_azure_client_id?: (string | null) | undefined
  external_azure_email_optional?: (boolean | null) | undefined
  external_azure_secret?: (string | null) | undefined
  external_azure_url?: (string | null) | undefined
  external_bitbucket_enabled?: (boolean | null) | undefined
  external_bitbucket_client_id?: (string | null) | undefined
  external_bitbucket_email_optional?: (boolean | null) | undefined
  external_bitbucket_secret?: (string | null) | undefined
  external_discord_enabled?: (boolean | null) | undefined
  external_discord_client_id?: (string | null) | undefined
  external_discord_email_optional?: (boolean | null) | undefined
  external_discord_secret?: (string | null) | undefined
  external_facebook_enabled?: (boolean | null) | undefined
  external_facebook_client_id?: (string | null) | undefined
  external_facebook_email_optional?: (boolean | null) | undefined
  external_facebook_secret?: (string | null) | undefined
  external_figma_enabled?: (boolean | null) | undefined
  external_figma_client_id?: (string | null) | undefined
  external_figma_email_optional?: (boolean | null) | undefined
  external_figma_secret?: (string | null) | undefined
  external_github_enabled?: (boolean | null) | undefined
  external_github_client_id?: (string | null) | undefined
  external_github_email_optional?: (boolean | null) | undefined
  external_github_secret?: (string | null) | undefined
  external_gitlab_enabled?: (boolean | null) | undefined
  external_gitlab_client_id?: (string | null) | undefined
  external_gitlab_email_optional?: (boolean | null) | undefined
  external_gitlab_secret?: (string | null) | undefined
  external_gitlab_url?: (string | null) | undefined
  external_google_enabled?: (boolean | null) | undefined
  external_google_client_id?: (string | null) | undefined
  external_google_email_optional?: (boolean | null) | undefined
  external_google_secret?: (string | null) | undefined
  external_google_additional_client_ids?: (string | null) | undefined
  external_google_skip_nonce_check?: (boolean | null) | undefined
  external_kakao_enabled?: (boolean | null) | undefined
  external_kakao_client_id?: (string | null) | undefined
  external_kakao_email_optional?: (boolean | null) | undefined
  external_kakao_secret?: (string | null) | undefined
  external_keycloak_enabled?: (boolean | null) | undefined
  external_keycloak_client_id?: (string | null) | undefined
  external_keycloak_email_optional?: (boolean | null) | undefined
  external_keycloak_secret?: (string | null) | undefined
  external_keycloak_url?: (string | null) | undefined
  external_linkedin_oidc_enabled?: (boolean | null) | undefined
  external_linkedin_oidc_client_id?: (string | null) | undefined
  external_linkedin_oidc_email_optional?: (boolean | null) | undefined
  external_linkedin_oidc_secret?: (string | null) | undefined
  external_slack_oidc_enabled?: (boolean | null) | undefined
  external_slack_oidc_client_id?: (string | null) | undefined
  external_slack_oidc_email_optional?: (boolean | null) | undefined
  external_slack_oidc_secret?: (string | null) | undefined
  external_notion_enabled?: (boolean | null) | undefined
  external_notion_client_id?: (string | null) | undefined
  external_notion_email_optional?: (boolean | null) | undefined
  external_notion_secret?: (string | null) | undefined
  external_slack_enabled?: (boolean | null) | undefined
  external_slack_client_id?: (string | null) | undefined
  external_slack_email_optional?: (boolean | null) | undefined
  external_slack_secret?: (string | null) | undefined
  external_spotify_enabled?: (boolean | null) | undefined
  external_spotify_client_id?: (string | null) | undefined
  external_spotify_email_optional?: (boolean | null) | undefined
  external_spotify_secret?: (string | null) | undefined
  external_twitch_enabled?: (boolean | null) | undefined
  external_twitch_client_id?: (string | null) | undefined
  external_twitch_email_optional?: (boolean | null) | undefined
  external_twitch_secret?: (string | null) | undefined
  external_twitter_enabled?: (boolean | null) | undefined
  external_twitter_client_id?: (string | null) | undefined
  external_twitter_email_optional?: (boolean | null) | undefined
  external_twitter_secret?: (string | null) | undefined
  external_x_enabled?: (boolean | null) | undefined
  external_x_client_id?: (string | null) | undefined
  external_x_email_optional?: (boolean | null) | undefined
  external_x_secret?: (string | null) | undefined
  external_workos_enabled?: (boolean | null) | undefined
  external_workos_client_id?: (string | null) | undefined
  external_workos_secret?: (string | null) | undefined
  external_workos_url?: (string | null) | undefined
  external_web3_solana_enabled?: (boolean | null) | undefined
  external_web3_ethereum_enabled?: (boolean | null) | undefined
  external_zoom_enabled?: (boolean | null) | undefined
  external_zoom_client_id?: (string | null) | undefined
  external_zoom_email_optional?: (boolean | null) | undefined
  external_zoom_secret?: (string | null) | undefined
  db_max_pool_size?: (number | null) | undefined
  db_max_pool_size_unit?: 'connections' | 'percent' | null | undefined
  api_max_request_duration?: (number | null) | undefined
  mfa_totp_enroll_enabled?: (boolean | null) | undefined
  mfa_totp_verify_enabled?: (boolean | null) | undefined
  mfa_web_authn_enroll_enabled?: (boolean | null) | undefined
  mfa_web_authn_verify_enabled?: (boolean | null) | undefined
  passkey_enabled?: boolean | undefined
  webauthn_rp_display_name?: (string | null) | undefined
  webauthn_rp_id?: (string | null) | undefined
  webauthn_rp_origins?: (string | null) | undefined
  mfa_phone_enroll_enabled?: (boolean | null) | undefined
  mfa_phone_verify_enabled?: (boolean | null) | undefined
  mfa_phone_max_frequency?: (number | null) | undefined
  mfa_phone_otp_length?: (number | null) | undefined
  mfa_phone_template?: (string | null) | undefined
  nimbus_oauth_client_id?: (string | null) | undefined
  nimbus_oauth_client_secret?: (string | null) | undefined
  oauth_server_enabled?: (boolean | null) | undefined
  oauth_server_allow_dynamic_registration?: (boolean | null) | undefined
  oauth_server_authorization_path?: (string | null) | undefined
  custom_oauth_enabled?: boolean | undefined
}
type CreateThirdPartyAuthBody = {
  oidc_issuer_url?: string | undefined
  jwks_url?: string | undefined
  custom_jwks?: { [x: string]: unknown } | undefined
}
type ThirdPartyAuthOutput = {
  id: string
  type: string
  oidc_issuer_url?: (string | null) | undefined
  jwks_url?: (string | null) | undefined
  custom_jwks?: ({ [x: string]: unknown } | null) | undefined
  resolved_jwks?: ({ [x: string]: unknown } | null) | undefined
  inserted_at: string
  updated_at: string
  resolved_at?: (string | null) | undefined
}
type GetProjectAvailableRestoreVersionsResponseOutput = {
  available_versions: {
    version: string
    release_channel: 'internal' | 'alpha' | 'beta' | 'ga' | 'withdrawn' | 'preview'
    postgres_engine: '13' | '14' | '15' | '17' | '17-oriole'
  }[]
}
type ListProjectAddonsResponseOutput = {
  selected_addons: {
    type:
      | 'custom_domain'
      | 'compute_instance'
      | 'pitr'
      | 'ipv4'
      | 'auth_mfa_phone'
      | 'auth_mfa_web_authn'
      | 'log_drain'
      | 'etl_pipeline'
    variant: {
      id:
        | 'ci_micro'
        | 'ci_small'
        | 'ci_medium'
        | 'ci_large'
        | 'ci_xlarge'
        | 'ci_2xlarge'
        | 'ci_4xlarge'
        | 'ci_8xlarge'
        | 'ci_12xlarge'
        | 'ci_16xlarge'
        | 'ci_24xlarge'
        | 'ci_24xlarge_optimized_cpu'
        | 'ci_24xlarge_optimized_memory'
        | 'ci_24xlarge_high_memory'
        | 'ci_48xlarge'
        | 'ci_48xlarge_optimized_cpu'
        | 'ci_48xlarge_optimized_memory'
        | 'ci_48xlarge_high_memory'
        | 'cd_default'
        | 'pitr_7'
        | 'pitr_14'
        | 'pitr_28'
        | 'ipv4_default'
        | 'auth_mfa_phone_default'
        | 'auth_mfa_web_authn_default'
        | 'log_drain_default'
        | 'etl_pipeline_default'
      name: string
      price: {
        description: string
        type: 'fixed' | 'usage'
        interval: 'monthly' | 'hourly'
        amount: number
      }
      meta?: JsonValueOutput | undefined
    }
  }[]
  available_addons: {
    type:
      | 'custom_domain'
      | 'compute_instance'
      | 'pitr'
      | 'ipv4'
      | 'auth_mfa_phone'
      | 'auth_mfa_web_authn'
      | 'log_drain'
      | 'etl_pipeline'
    name: string
    variants: {
      id:
        | 'ci_micro'
        | 'ci_small'
        | 'ci_medium'
        | 'ci_large'
        | 'ci_xlarge'
        | 'ci_2xlarge'
        | 'ci_4xlarge'
        | 'ci_8xlarge'
        | 'ci_12xlarge'
        | 'ci_16xlarge'
        | 'ci_24xlarge'
        | 'ci_24xlarge_optimized_cpu'
        | 'ci_24xlarge_optimized_memory'
        | 'ci_24xlarge_high_memory'
        | 'ci_48xlarge'
        | 'ci_48xlarge_optimized_cpu'
        | 'ci_48xlarge_optimized_memory'
        | 'ci_48xlarge_high_memory'
        | 'cd_default'
        | 'pitr_7'
        | 'pitr_14'
        | 'pitr_28'
        | 'ipv4_default'
        | 'auth_mfa_phone_default'
        | 'auth_mfa_web_authn_default'
        | 'log_drain_default'
        | 'etl_pipeline_default'
      name: string
      price: {
        description: string
        type: 'fixed' | 'usage'
        interval: 'monthly' | 'hourly'
        amount: number
      }
      meta?: JsonValueOutput | undefined
    }[]
  }[]
}
type ApplyProjectAddonBody = {
  addon_variant:
    | 'ci_micro'
    | 'ci_small'
    | 'ci_medium'
    | 'ci_large'
    | 'ci_xlarge'
    | 'ci_2xlarge'
    | 'ci_4xlarge'
    | 'ci_8xlarge'
    | 'ci_12xlarge'
    | 'ci_16xlarge'
    | 'ci_24xlarge'
    | 'ci_24xlarge_optimized_cpu'
    | 'ci_24xlarge_optimized_memory'
    | 'ci_24xlarge_high_memory'
    | 'ci_48xlarge'
    | 'ci_48xlarge_optimized_cpu'
    | 'ci_48xlarge_optimized_memory'
    | 'ci_48xlarge_high_memory'
    | 'cd_default'
    | 'pitr_7'
    | 'pitr_14'
    | 'pitr_28'
    | 'ipv4_default'
  addon_type:
    | 'custom_domain'
    | 'compute_instance'
    | 'pitr'
    | 'ipv4'
    | 'auth_mfa_phone'
    | 'auth_mfa_web_authn'
    | 'log_drain'
    | 'etl_pipeline'
}
type ProjectClaimTokenResponseOutput = {
  token_alias: string
  expires_at: string
  created_at: string
  created_by: string
}
type CreateProjectClaimTokenResponseOutput = {
  token: string
  token_alias: string
  expires_at: string
  created_at: string
  created_by: string
}
type V1ProjectAdvisorsResponseOutput = {
  lints: {
    name:
      | 'unindexed_foreign_keys'
      | 'auth_users_exposed'
      | 'auth_rls_initplan'
      | 'no_primary_key'
      | 'unused_index'
      | 'multiple_permissive_policies'
      | 'policy_exists_rls_disabled'
      | 'rls_enabled_no_policy'
      | 'duplicate_index'
      | 'security_definer_view'
      | 'function_search_path_mutable'
      | 'rls_disabled_in_public'
      | 'extension_in_public'
      | 'rls_references_user_metadata'
      | 'materialized_view_in_api'
      | 'foreign_table_in_api'
      | 'unsupported_reg_types'
      | 'auth_otp_long_expiry'
      | 'auth_otp_short_length'
      | 'ssl_not_enforced'
      | 'log_connections_not_enabled'
      | 'network_restrictions_not_set'
      | 'password_requirements_min_length'
      | 'pitr_not_enabled'
      | 'auth_leaked_password_protection'
      | 'auth_insufficient_mfa_options'
      | 'auth_password_policy_missing'
      | 'leaked_service_key'
      | 'no_backup_admin'
      | 'vulnerable_postgres_version'
      | 'db_not_reachable'
      | 'db_connection_failing'
      | 'db_connection_limit_reached'
      | 'instance_telemetry_lost'
      | 'instance_db_down'
      | 'instance_alert_firing'
      | 'log_data_api_error_rate_high'
      | 'log_auth_error_rate_high'
      | 'log_storage_error_rate_high'
      | 'log_edge_function_error_rate_high'
      | 'realtime_authorization_timeouts'
      | 'realtime_postgres_changes_spike'
      | 'realtime_concurrent_users_near_limit'
      | 'project_not_active'
      | 'advisor_check_unavailable'
    title: string
    level: 'ERROR' | 'WARN' | 'INFO'
    facing: 'EXTERNAL'
    categories: ('PERFORMANCE' | 'SECURITY' | 'HEALTH')[]
    description: string
    detail: string
    remediation: string
    metadata?:
      | {
          schema?: string | undefined
          name?: string | undefined
          entity?: string | undefined
          type?:
            | 'table'
            | 'view'
            | 'materialized view'
            | 'foreign table'
            | 'auth'
            | 'function'
            | 'extension'
            | 'compliance'
            | 'health'
            | undefined
          fkey_name?: string | undefined
          fkey_columns?: number[] | undefined
        }
      | undefined
    cache_key: string
    observed_at?: string | undefined
  }[]
}
type AnalyticsResponseOutput = {
  result?: { [x: string]: unknown }[] | undefined
  error?:
    | string
    | {
        code: number
        errors: {
          domain: string
          location: string
          locationType: string
          message: string
          reason: string
        }[]
        message: string
        status: string
      }
    | undefined
}
type V1PostProjectLogsBody = {
  sql?: string | undefined
  lql?: string | undefined
  iso_timestamp_start?: string | undefined
  iso_timestamp_end?: string | undefined
}
type V1GetUsageApiCountResponseOutput = {
  result?:
    | {
        timestamp: string
        total_auth_requests: number
        total_realtime_requests: number
        total_rest_requests: number
        total_storage_requests: number
      }[]
    | undefined
  error?:
    | string
    | {
        code: number
        errors: {
          domain: string
          location: string
          locationType: string
          message: string
          reason: string
        }[]
        message: string
        status: string
      }
    | undefined
}
type V1GetUsageApiRequestsCountResponseOutput = {
  result?: { count: number }[] | undefined
  error?:
    | string
    | {
        code: number
        errors: {
          domain: string
          location: string
          locationType: string
          message: string
          reason: string
        }[]
        message: string
        status: string
      }
    | undefined
}
type CreateRoleBody = { read_only: boolean }
type CreateRoleResponseOutput = { role: string; password: string; ttl_seconds: bigint }
type DeleteRolesResponseOutput = { message: 'ok' }
type V1ListMigrationsResponseOutput = { version: string; name?: string | undefined }[]
type V1CreateMigrationBody = {
  query: string
  name?: string | undefined
  rollback?: string | undefined
}
type V1UpsertMigrationBody = {
  query: string
  name?: string | undefined
  rollback?: string | undefined
}
type V1GetMigrationResponseOutput = {
  version: string
  name?: string | undefined
  statements?: string[] | undefined
  rollback?: string[] | undefined
  created_by?: string | undefined
  idempotency_key?: string | undefined
}
type V1PatchMigrationBody = { name?: string | undefined; rollback?: string | undefined }
type V1RunQueryBody = {
  query: string
  parameters?: { [x: string]: unknown }[] | undefined
  read_only?: boolean | undefined
  disable_statement_timeout?: boolean | undefined
}
type V1ReadOnlyQueryBody = {
  query: string
  parameters?: { [x: string]: unknown }[] | undefined
  disable_statement_timeout?: boolean | undefined
}
type GetProjectDbMetadataResponseOutput = {
  databases: { name: string; schemas: { name: string }[] }[]
}
type V1UpdatePasswordBody = { password: string }
type V1UpdatePasswordResponseOutput = { message: string }
type JitAccessResponseOutput = {
  user_id?: string | undefined
  user_roles: {
    role: string
    expires_at?: number | undefined
    allowed_networks?:
      | {
          allowed_cidrs?: { cidr: string }[] | undefined
          allowed_cidrs_v6?: { cidr: string }[] | undefined
        }
      | undefined
    branches_only?: boolean | undefined
  }[]
}
type AuthorizeJitAccessBody = { role: string; rhost: string | string }
type JitAuthorizeAccessResponseOutput = {
  user_id?: string | undefined
  act?: string | undefined
  user_role: {
    role: string
    expires_at?: number | undefined
    allowed_networks?:
      | {
          allowed_cidrs?: { cidr: string }[] | undefined
          allowed_cidrs_v6?: { cidr: string }[] | undefined
        }
      | undefined
    branches_only?: boolean | undefined
  }
}
type UpdateJitAccessBody = {
  user_id: string
  roles: {
    role: string
    expires_at?: number | undefined
    allowed_networks?:
      | {
          allowed_cidrs?: { cidr: string }[] | undefined
          allowed_cidrs_v6?: { cidr: string }[] | undefined
        }
      | undefined
    branches_only?: boolean | undefined
  }[]
}
type JitListAccessResponseOutput = {
  items: (
    | {
        user_id: string
        primary_email: string | null
        invite_id: { [x: string]: unknown } | null
        expires_at: { [x: string]: unknown } | null
        user_roles: {
          role: string
          expires_at?: number | undefined
          allowed_networks?:
            | {
                allowed_cidrs?: { cidr: string }[] | undefined
                allowed_cidrs_v6?: { cidr: string }[] | undefined
              }
            | undefined
          branches_only?: boolean | undefined
        }[]
      }
    | {
        user_id: { [x: string]: unknown } | null
        primary_email: string
        invite_id: string
        expires_at: string
        user_roles: {
          role: string
          expires_at?: number | undefined
          allowed_networks?:
            | {
                allowed_cidrs?: { cidr: string }[] | undefined
                allowed_cidrs_v6?: { cidr: string }[] | undefined
              }
            | undefined
          branches_only?: boolean | undefined
        }[]
      }
  )[]
}
type InviteExternalUserJitAccessBody = {
  email: string
  roles: {
    role: string
    expires_at?: number | undefined
    allowed_networks?:
      | {
          allowed_cidrs?: { cidr: string }[] | undefined
          allowed_cidrs_v6?: { cidr: string }[] | undefined
        }
      | undefined
    branches_only?: boolean | undefined
  }[]
}
type InviteExternalUserJitResponseOutput = {
  email: string
  invite_id: string
  user_roles: {
    role: string
    expires_at?: number | undefined
    allowed_networks?:
      | {
          allowed_cidrs?: { cidr: string }[] | undefined
          allowed_cidrs_v6?: { cidr: string }[] | undefined
        }
      | undefined
    branches_only?: boolean | undefined
  }[]
}
type AcceptInviteExternalUserJitAccessBody = { email: string; token: string }
type FunctionResponseOutput = {
  id: string
  slug: string
  name: string
  status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
  version: number
  created_at: bigint
  updated_at: bigint
  verify_jwt?: boolean | undefined
  import_map?: boolean | undefined
  entrypoint_path?: string | undefined
  import_map_path?: string | undefined
  ezbr_sha256?: string | undefined
}
type V1CreateFunctionBody = {
  slug: string
  name: string
  body: string
  verify_jwt?: boolean | undefined
}
type BulkUpdateFunctionBody = {
  id: string
  slug: string
  name: string
  status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
  version: number
  created_at?: bigint | undefined
  verify_jwt?: boolean | undefined
  import_map?: boolean | undefined
  entrypoint_path?: string | undefined
  import_map_path?: string | undefined
  ezbr_sha256?: string | undefined
}[]
type BulkUpdateFunctionResponseOutput = {
  functions: {
    id: string
    slug: string
    name: string
    status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
    version: number
    created_at: bigint
    updated_at: bigint
    verify_jwt?: boolean | undefined
    import_map?: boolean | undefined
    entrypoint_path?: string | undefined
    import_map_path?: string | undefined
    ezbr_sha256?: string | undefined
  }[]
}
type FunctionDeployBody = {
  file: File[]
  metadata: {
    entrypoint_path: string
    import_map_path?: string | undefined
    static_patterns?: string[] | undefined
    verify_jwt?: boolean | undefined
    name?: string | undefined
  }
}
type DeployFunctionResponseOutput = {
  id: string
  slug: string
  name: string
  status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
  version: number
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
  verify_jwt?: boolean | undefined
  import_map?: boolean | undefined
  entrypoint_path?: string | undefined
  import_map_path?: string | undefined
  ezbr_sha256?: string | undefined
}
type FunctionSlugResponseOutput = {
  id: string
  slug: string
  name: string
  status: 'ACTIVE' | 'REMOVED' | 'THROTTLED'
  version: number
  created_at: bigint
  updated_at: bigint
  verify_jwt?: boolean | undefined
  import_map?: boolean | undefined
  entrypoint_path?: string | undefined
  import_map_path?: string | undefined
  ezbr_sha256?: string | undefined
}
type V1UpdateFunctionBodyEszip = File
type V1UpdateFunctionBodyJson = {
  name?: string | undefined
  body?: string | undefined
  verify_jwt?: boolean | undefined
}
type StreamableFile = { [x: string]: unknown }
type V1StorageBucketResponseOutput = {
  id: string
  name: string
  owner: string
  created_at: string
  updated_at: string
  public: boolean
}
type DiskResponseOutput = {
  attributes:
    | { iops: number; size_gb: number; throughput_mibps?: number | undefined; type: 'gp3' }
    | { iops: number; size_gb: number; type: 'io2' }
  last_modified_at?: string | undefined
}
type DiskRequestBody = {
  attributes:
    | { iops: number; size_gb: number; throughput_mibps?: number | undefined; type: 'gp3' }
    | { iops: number; size_gb: number; type: 'io2' }
}
type DiskUtilMetricsResponseOutput = {
  timestamp: string
  metrics: { fs_size_bytes: number; fs_avail_bytes: number; fs_used_bytes: number }
}
type DiskAutoscaleConfigOutput = {
  growth_percent: number | null
  min_increment_gb: number | null
  max_size_gb: number | null
}
type StorageConfigResponseOutput = {
  fileSizeLimit: bigint
  features: {
    imageTransformation: { enabled: boolean }
    s3Protocol: { enabled: boolean }
    purgeCache: { enabled: boolean }
    icebergCatalog: {
      enabled: boolean
      maxNamespaces: number
      maxTables: number
      maxCatalogs: number
    }
    vectorBuckets: { enabled: boolean; maxBuckets: number; maxIndexes: number }
  }
  capabilities: { list_v2: boolean; iceberg_catalog: boolean; object_versioning: boolean }
  external: { upstreamTarget: 'main' | 'canary' }
  migrationVersion: string | null
}
type UpdateStorageConfigBody = {
  fileSizeLimit?: bigint | undefined
  features?:
    | {
        imageTransformation?: { enabled: boolean } | undefined
        s3Protocol?: { enabled: boolean } | undefined
        purgeCache?: { enabled: boolean } | undefined
        icebergCatalog?:
          | { enabled: boolean; maxNamespaces: number; maxTables: number; maxCatalogs: number }
          | undefined
        vectorBuckets?: { enabled: boolean; maxBuckets: number; maxIndexes: number } | undefined
      }
    | undefined
  external?: { upstreamTarget: 'main' | 'canary' } | undefined
}
type V1PgbouncerConfigResponseOutput = {
  default_pool_size?: number | undefined
  ignore_startup_parameters?: string | undefined
  max_client_conn?: number | undefined
  pool_mode?: 'transaction' | 'session' | 'statement' | undefined
  connection_string?: string | undefined
  server_idle_timeout?: number | undefined
  server_lifetime?: number | undefined
  query_wait_timeout?: number | undefined
  reserve_pool_size?: number | undefined
}
type SupavisorConfigResponseOutput = {
  identifier: string
  database_type: 'PRIMARY' | 'READ_REPLICA'
  is_using_scram_auth: boolean
  db_user: string
  db_host: string
  db_port: number
  db_name: string
  connection_string: string
  connectionString: string
  default_pool_size: number | null
  max_client_conn: number | null
  pool_mode: 'transaction' | 'session'
}
type UpdateSupavisorConfigBody = {
  default_pool_size?: (number | null) | undefined
  pool_mode?: 'transaction' | 'session' | undefined
}
type UpdateSupavisorConfigResponseOutput = { default_pool_size: number | null; pool_mode: string }
type PostgresConfigResponseOutput = {
  effective_cache_size?: string | undefined
  logical_decoding_work_mem?: string | undefined
  'pg_stat_statements.max'?: number | undefined
  'pg_net.batch_size'?: number | undefined
  autovacuum_max_workers?: number | undefined
  autovacuum_work_mem?: string | undefined
  'cron.log_statement'?: boolean | undefined
  log_autovacuum_min_duration?: string | undefined
  log_checkpoints?: boolean | undefined
  log_connections?: boolean | undefined
  log_disconnections?: boolean | undefined
  log_duration?: boolean | undefined
  log_lock_waits?: boolean | undefined
  log_recovery_conflict_waits?: boolean | undefined
  log_replication_commands?: boolean | undefined
  log_startup_progress_interval?: string | undefined
  log_temp_files?: string | undefined
  maintenance_work_mem?: string | undefined
  track_activity_query_size?: string | undefined
  max_connections?: number | undefined
  max_locks_per_transaction?: number | undefined
  max_logical_replication_workers?: number | undefined
  max_parallel_maintenance_workers?: number | undefined
  max_parallel_workers?: number | undefined
  max_parallel_workers_per_gather?: number | undefined
  max_replication_slots?: number | undefined
  max_slot_wal_keep_size?: string | undefined
  max_standby_archive_delay?: string | undefined
  max_standby_streaming_delay?: string | undefined
  max_sync_workers_per_subscription?: number | undefined
  max_wal_size?: string | undefined
  max_wal_senders?: number | undefined
  max_worker_processes?: number | undefined
  session_replication_role?: 'origin' | 'replica' | 'local' | undefined
  shared_buffers?: string | undefined
  statement_timeout?: string | undefined
  track_commit_timestamp?: boolean | undefined
  wal_keep_size?: string | undefined
  wal_sender_timeout?: string | undefined
  work_mem?: string | undefined
  checkpoint_timeout?: string | undefined
  hot_standby_feedback?: boolean | undefined
}
type UpdatePostgresConfigBody = {
  effective_cache_size?: string | undefined
  logical_decoding_work_mem?: string | undefined
  'pg_stat_statements.max'?: number | undefined
  'pg_net.batch_size'?: number | undefined
  autovacuum_max_workers?: number | undefined
  autovacuum_work_mem?: string | undefined
  'cron.log_statement'?: boolean | undefined
  log_autovacuum_min_duration?: string | undefined
  log_checkpoints?: boolean | undefined
  log_connections?: boolean | undefined
  log_disconnections?: boolean | undefined
  log_duration?: boolean | undefined
  log_lock_waits?: boolean | undefined
  log_recovery_conflict_waits?: boolean | undefined
  log_replication_commands?: boolean | undefined
  log_startup_progress_interval?: string | undefined
  log_temp_files?: string | undefined
  maintenance_work_mem?: string | undefined
  track_activity_query_size?: string | undefined
  max_connections?: number | undefined
  max_locks_per_transaction?: number | undefined
  max_logical_replication_workers?: number | undefined
  max_parallel_maintenance_workers?: number | undefined
  max_parallel_workers?: number | undefined
  max_parallel_workers_per_gather?: number | undefined
  max_replication_slots?: number | undefined
  max_slot_wal_keep_size?: string | undefined
  max_standby_archive_delay?: string | undefined
  max_standby_streaming_delay?: string | undefined
  max_sync_workers_per_subscription?: number | undefined
  max_wal_size?: string | undefined
  max_wal_senders?: number | undefined
  max_worker_processes?: number | undefined
  session_replication_role?: 'origin' | 'replica' | 'local' | undefined
  shared_buffers?: string | undefined
  statement_timeout?: string | undefined
  track_commit_timestamp?: boolean | undefined
  wal_keep_size?: string | undefined
  wal_sender_timeout?: string | undefined
  work_mem?: string | undefined
  checkpoint_timeout?: string | undefined
  hot_standby_feedback?: boolean | undefined
  restart_database?: boolean | undefined
}
type RealtimeConfigResponseOutput = {
  private_only: boolean | null
  connection_pool: number | null
  postgres_changes_pool: number | null
  max_concurrent_users: number | null
  max_events_per_second: number | null
  max_bytes_per_second: number | null
  max_channels_per_client: number | null
  max_joins_per_second: number | null
  max_presence_events_per_second: number | null
  max_payload_size_in_kb: number | null
  suspend: boolean | null
  presence_enabled: boolean
  admin_suspended_at: string | null
}
type UpdateRealtimeConfigBody = {
  private_only?: boolean | undefined
  connection_pool?: number | undefined
  postgres_changes_pool?: number | undefined
  max_concurrent_users?: number | undefined
  max_events_per_second?: number | undefined
  max_bytes_per_second?: number | undefined
  max_channels_per_client?: number | undefined
  max_joins_per_second?: number | undefined
  max_presence_events_per_second?: number | undefined
  max_payload_size_in_kb?: number | undefined
  suspend?: boolean | undefined
  presence_enabled?: boolean | undefined
}
type CreateProviderBody = {
  type: 'saml'
  metadata_xml?: string | undefined
  metadata_url?: string | undefined
  domains?: string[] | undefined
  attribute_mapping?:
    | {
        keys: {
          [x: string]: {
            name?: string | undefined
            names?: string[] | undefined
            array?: boolean | undefined
            default?: { [x: string]: unknown } | number | string | boolean | undefined
          }
        }
      }
    | undefined
  name_id_format?:
    | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
    | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
    | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
    | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
    | undefined
  dedicated_scope?: boolean | undefined
}
type CreateProviderResponseOutput = {
  id: string
  domains?:
    | {
        domain?: string | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  saml?:
    | {
        entity_id: string
        metadata_url?: string | undefined
        metadata_xml?: string | undefined
        attribute_mapping?:
          | {
              keys: {
                [x: string]: {
                  name?: string | undefined
                  names?: string[] | undefined
                  array?: boolean | undefined
                  default?: { [x: string]: unknown } | number | string | boolean | undefined
                }
              }
            }
          | undefined
        name_id_format?:
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
          | undefined
        dedicated_scope?: (boolean | null) | undefined
      }
    | undefined
}
type ListProvidersResponseOutput = {
  items: {
    id: string
    domains?:
      | {
          domain?: string | undefined
          created_at?: string | undefined
          updated_at?: string | undefined
        }[]
      | undefined
    created_at?: string | undefined
    updated_at?: string | undefined
    saml?:
      | {
          entity_id: string
          metadata_url?: string | undefined
          metadata_xml?: string | undefined
          attribute_mapping?:
            | {
                keys: {
                  [x: string]: {
                    name?: string | undefined
                    names?: string[] | undefined
                    array?: boolean | undefined
                    default?: { [x: string]: unknown } | number | string | boolean | undefined
                  }
                }
              }
            | undefined
          name_id_format?:
            | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
            | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
            | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
            | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
            | undefined
          dedicated_scope?: (boolean | null) | undefined
        }
      | undefined
  }[]
}
type GetProviderResponseOutput = {
  id: string
  domains?:
    | {
        domain?: string | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  saml?:
    | {
        entity_id: string
        metadata_url?: string | undefined
        metadata_xml?: string | undefined
        attribute_mapping?:
          | {
              keys: {
                [x: string]: {
                  name?: string | undefined
                  names?: string[] | undefined
                  array?: boolean | undefined
                  default?: { [x: string]: unknown } | number | string | boolean | undefined
                }
              }
            }
          | undefined
        name_id_format?:
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
          | undefined
        dedicated_scope?: (boolean | null) | undefined
      }
    | undefined
}
type UpdateProviderBody = {
  metadata_xml?: string | undefined
  metadata_url?: string | undefined
  domains?: string[] | undefined
  attribute_mapping?:
    | {
        keys: {
          [x: string]: {
            name?: string | undefined
            names?: string[] | undefined
            array?: boolean | undefined
            default?: { [x: string]: unknown } | number | string | boolean | undefined
          }
        }
      }
    | undefined
  name_id_format?:
    | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
    | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
    | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
    | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
    | undefined
}
type UpdateProviderResponseOutput = {
  id: string
  domains?:
    | {
        domain?: string | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  saml?:
    | {
        entity_id: string
        metadata_url?: string | undefined
        metadata_xml?: string | undefined
        attribute_mapping?:
          | {
              keys: {
                [x: string]: {
                  name?: string | undefined
                  names?: string[] | undefined
                  array?: boolean | undefined
                  default?: { [x: string]: unknown } | number | string | boolean | undefined
                }
              }
            }
          | undefined
        name_id_format?:
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
          | undefined
      }
    | undefined
}
type DeleteProviderResponseOutput = {
  id: string
  domains?:
    | {
        domain?: string | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  saml?:
    | {
        entity_id: string
        metadata_url?: string | undefined
        metadata_xml?: string | undefined
        attribute_mapping?:
          | {
              keys: {
                [x: string]: {
                  name?: string | undefined
                  names?: string[] | undefined
                  array?: boolean | undefined
                  default?: { [x: string]: unknown } | number | string | boolean | undefined
                }
              }
            }
          | undefined
        name_id_format?:
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
          | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
          | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
          | undefined
        dedicated_scope?: (boolean | null) | undefined
      }
    | undefined
}
type V1BackupsResponseOutput = {
  region: string
  walg_enabled: boolean
  pitr_enabled: boolean
  backups: {
    id: number
    is_physical_backup: boolean
    status: 'COMPLETED' | 'FAILED' | 'PENDING' | 'REMOVED' | 'ARCHIVED' | 'CANCELLED'
    inserted_at: string
  }[]
  physical_backup_data: {
    earliest_physical_backup_date_unix?: number | undefined
    latest_physical_backup_date_unix?: number | undefined
  }
}
type V1RestorePitrBody = { recovery_time_target_unix: bigint }
type V1RestorePointPostBody = { name: string }
type V1RestorePointResponse = {
  name: string
  status: 'AVAILABLE' | 'PENDING' | 'REMOVED' | 'FAILED'
  completed_on: string | null
}
type V1RestoreBackupBody = { id: number }
type V1BackupScheduleResponseOutput = { schedule_for: string; updated_at: string }
type V1UpdateBackupScheduleBody = { schedule_for: string }
type V1UndoBody = { name: string }
type V1ListEntitlementsResponseOutput = {
  entitlements: {
    feature: {
      key:
        | 'instances.compute_update_available_sizes'
        | 'instances.read_replicas'
        | 'instances.disk_modifications'
        | 'instances.high_availability'
        | 'instances.orioledb'
        | 'replication.etl'
        | 'storage.max_file_size'
        | 'storage.max_file_size.configurable'
        | 'storage.image_transformations'
        | 'storage.vector_buckets'
        | 'storage.iceberg_catalog'
        | 'storage.purge_cache'
        | 'security.audit_logs_days'
        | 'security.questionnaire'
        | 'security.soc2_report'
        | 'security.iso27001_certificate'
        | 'security.private_link'
        | 'security.enforce_mfa'
        | 'log.retention_days'
        | 'custom_domain'
        | 'vanity_subdomain'
        | 'ipv4'
        | 'pitr.available_variants'
        | 'log_drains'
        | 'audit_log_drains'
        | 'branching_limit'
        | 'branching_persistent'
        | 'auth.mfa_phone'
        | 'auth.mfa_web_authn'
        | 'auth.mfa_enhanced_security'
        | 'auth.hooks'
        | 'auth.platform.sso'
        | 'auth.custom_jwt_template'
        | 'auth.saml_2'
        | 'auth.user_sessions'
        | 'auth.leaked_password_protection'
        | 'auth.advanced_auth_settings'
        | 'auth.performance_settings'
        | 'auth.password_hibp'
        | 'auth.custom_oauth.max_providers'
        | 'backup.retention_days'
        | 'backup.restore_to_new_project'
        | 'backup.schedule'
        | 'function.max_count'
        | 'function.size_limit_mb'
        | 'realtime.max_concurrent_users'
        | 'realtime.max_events_per_second'
        | 'realtime.max_joins_per_second'
        | 'realtime.max_channels_per_client'
        | 'realtime.max_bytes_per_second'
        | 'realtime.max_presence_events_per_second'
        | 'realtime.max_payload_size_in_kb'
        | 'project_scoped_roles'
        | 'security.member_roles'
        | 'project_pausing'
        | 'project_cloning'
        | 'project_restore_after_expiry'
        | 'assistant.advance_model'
        | 'integrations.github_connections'
        | 'integrations.github_push_webhooks_limit'
        | 'dedicated_pooler'
        | 'observability.dashboard_advanced_metrics'
        | 'api.members.invitations'
        | 'api.members.roles'
      type: 'boolean' | 'numeric' | 'set'
    }
    hasAccess: boolean
    type: 'boolean' | 'numeric' | 'set'
    config:
      | { enabled: boolean }
      | { enabled: boolean; value: number; unlimited: boolean; unit: string }
      | { enabled: boolean; set: string[] }
  }[]
}
type V1OrganizationMemberResponseOutput = {
  user_id: string
  user_name: string
  email?: string | undefined
  role_name?: string | undefined
  mfa_enabled: boolean
  avatar_url: string | null
}
type V1OrganizationSlugResponseOutput = {
  id: string
  name: string
  plan?: 'free' | 'pro' | 'team' | 'enterprise' | 'platform' | undefined
  opt_in_tags: (
    | 'AI_SQL_GENERATOR_OPT_IN'
    | 'AI_DATA_GENERATOR_OPT_IN'
    | 'AI_LOG_GENERATOR_OPT_IN'
  )[]
  allowed_release_channels: ('internal' | 'alpha' | 'beta' | 'ga' | 'withdrawn' | 'preview')[]
}
type OrganizationProjectClaimResponseOutput = {
  project: { ref: string; name: string }
  preview: {
    valid: boolean
    warnings: { key: string; message: string }[]
    errors: { key: string; message: string }[]
    info: { key: string; message: string }[]
    members_exceeding_free_project_limit: { name: string; limit: number }[]
    source_subscription_plan: 'free' | 'pro' | 'team' | 'enterprise' | 'platform'
    target_subscription_plan: 'free' | 'pro' | 'team' | 'enterprise' | 'platform' | null
  }
  expires_at: string
  created_at: string
  created_by: string
}
type OrganizationProjectsResponseOutput = {
  projects: {
    ref: string
    name: string
    cloud_provider: string
    region: string
    is_branch: boolean
    status:
      | 'INACTIVE'
      | 'ACTIVE_HEALTHY'
      | 'ACTIVE_UNHEALTHY'
      | 'COMING_UP'
      | 'UNKNOWN'
      | 'GOING_DOWN'
      | 'INIT_FAILED'
      | 'REMOVED'
      | 'RESTORING'
      | 'UPGRADING'
      | 'PAUSING'
      | 'RESTORE_FAILED'
      | 'RESTARTING'
      | 'PAUSE_FAILED'
      | 'RESIZING'
      | 'PROMOTING'
      | 'RIGHTSIZING'
    inserted_at: string
    databases: {
      infra_compute_size?:
        | 'pico'
        | 'nano'
        | 'micro'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | '2xlarge'
        | '4xlarge'
        | '8xlarge'
        | '12xlarge'
        | '16xlarge'
        | '24xlarge'
        | '24xlarge_optimized_memory'
        | '24xlarge_optimized_cpu'
        | '24xlarge_high_memory'
        | '48xlarge'
        | '48xlarge_optimized_memory'
        | '48xlarge_optimized_cpu'
        | '48xlarge_high_memory'
        | undefined
      region: string
      status:
        | 'ACTIVE_HEALTHY'
        | 'ACTIVE_UNHEALTHY'
        | 'COMING_UP'
        | 'GOING_DOWN'
        | 'INIT_FAILED'
        | 'REMOVED'
        | 'RESTORING'
        | 'UNKNOWN'
        | 'INIT_READ_REPLICA'
        | 'INIT_READ_REPLICA_FAILED'
        | 'RESTARTING'
        | 'RESIZING'
      cloud_provider: string
      identifier: string
      type: 'PRIMARY' | 'READ_REPLICA'
      disk_volume_size_gb?: number | undefined
      disk_type?: 'gp3' | 'io2' | undefined
      disk_throughput_mbps?: number | undefined
      disk_last_modified_at?: string | undefined
    }[]
  }[]
  pagination: { count: number; limit: number; offset: number }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/branches/:branch_id_or_ref': {
      $get:
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: BranchDetailResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: BranchResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: UpdateBranchBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { force?: string | undefined }
            }
            output: BranchDeleteResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { force?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { force?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { force?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { force?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/branches/:branch_id_or_ref/push': {
      $post:
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: BranchUpdateResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/branches/:branch_id_or_ref/merge': {
      $post:
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: BranchUpdateResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/branches/:branch_id_or_ref/reset': {
      $post:
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: BranchUpdateResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & { json: BranchActionBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/branches/:branch_id_or_ref/restore': {
      $post:
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: BranchRestoreResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/branches/:branch_id_or_ref/diff': {
      $get:
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { included_schemas?: string | undefined; pgdelta?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { included_schemas?: string | undefined; pgdelta?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { included_schemas?: string | undefined; pgdelta?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { included_schemas?: string | undefined; pgdelta?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { branch_id_or_ref: string | string } } & {
              query: { included_schemas?: string | undefined; pgdelta?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects': {
      $get:
        | {
            input: {}
            output: V1ProjectWithDatabaseResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { json: V1CreateProjectBody }
            output: V1ProjectResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: V1CreateProjectBody }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { json: V1CreateProjectBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | { input: { json: V1CreateProjectBody }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: V1CreateProjectBody }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/available-regions': {
      $get: {
        input: {
          query: {
            organization_slug: string
            continent?: 'NA' | 'SA' | 'EU' | 'AF' | 'AS' | 'OC' | 'AN' | undefined
            desired_instance_size?:
              | 'nano'
              | 'micro'
              | 'small'
              | 'medium'
              | 'large'
              | 'xlarge'
              | '2xlarge'
              | '4xlarge'
              | '8xlarge'
              | '12xlarge'
              | '16xlarge'
              | '24xlarge'
              | '24xlarge_optimized_memory'
              | '24xlarge_optimized_cpu'
              | '24xlarge_high_memory'
              | '48xlarge'
              | '48xlarge_optimized_memory'
              | '48xlarge_optimized_cpu'
              | '48xlarge_high_memory'
              | undefined
          }
        }
        output: RegionsInfoV1Output
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/organizations': {
      $get:
        | { input: {}; output: OrganizationResponseV1Output[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: CreateOrganizationV1 }
            output: OrganizationResponseV1Output
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateOrganizationV1 }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateOrganizationV1 }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateOrganizationV1 }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: CreateOrganizationV1 }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: CreateOrganizationV1 }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/oauth/authorize': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
                organization_slug?: string | undefined
                project_ref?: string | undefined
                target_flow?: string | undefined
                resource?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
                organization_slug?: string | undefined
                project_ref?: string | undefined
                target_flow?: string | undefined
                resource?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
                organization_slug?: string | undefined
                project_ref?: string | undefined
                target_flow?: string | undefined
                resource?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
                organization_slug?: string | undefined
                project_ref?: string | undefined
                target_flow?: string | undefined
                resource?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/oauth/token': {
      $post:
        | {
            input: { json: OAuthTokenBody } & { form: OAuthTokenBody }
            output: OAuthTokenResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthTokenBody } & { form: OAuthTokenBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: OAuthTokenBody } & { form: OAuthTokenBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: OAuthTokenBody } & { form: OAuthTokenBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/oauth/revoke': {
      $post:
        | { input: { json: OAuthRevokeTokenBody }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: OAuthRevokeTokenBody }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: OAuthRevokeTokenBody }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: OAuthRevokeTokenBody }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/oauth/authorize/project-claim': {
      $get:
        | {
            input: {
              query: {
                project_ref: string
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                project_ref: string
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                project_ref: string
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                project_ref: string
                client_id: string
                response_type: 'code' | 'token' | 'id_token token'
                redirect_uri: string
                state?: string | undefined
                response_mode?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 'sha256' | 'S256' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/snippets': {
      $get:
        | {
            input: {
              query: {
                project_ref?: string | undefined
                cursor?: string | undefined
                limit?: string | undefined
                sort_by?: 'name' | 'inserted_at' | undefined
                sort_order?: 'asc' | 'desc' | undefined
              }
            }
            output: SnippetListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project_ref?: string | undefined
                cursor?: string | undefined
                limit?: string | undefined
                sort_by?: 'name' | 'inserted_at' | undefined
                sort_order?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                project_ref?: string | undefined
                cursor?: string | undefined
                limit?: string | undefined
                sort_by?: 'name' | 'inserted_at' | undefined
                sort_order?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                project_ref?: string | undefined
                cursor?: string | undefined
                limit?: string | undefined
                sort_by?: 'name' | 'inserted_at' | undefined
                sort_order?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                project_ref?: string | undefined
                cursor?: string | undefined
                limit?: string | undefined
                sort_by?: 'name' | 'inserted_at' | undefined
                sort_order?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/snippets/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SnippetResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/profile': {
      $get: { input: {}; output: V1ProfileResponseOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/projects/:ref/actions': {
      $head:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { ref: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ListActionRunResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/actions/:run_id': {
      $get:
        | {
            input: { param: { ref: string; run_id: string } }
            output: ActionRunResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/actions/:run_id/status': {
      $patch:
        | {
            input: { param: { ref: string; run_id: string } } & { json: UpdateRunStatusBody }
            output: UpdateRunStatusResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; run_id: string } } & { json: UpdateRunStatusBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; run_id: string } } & { json: UpdateRunStatusBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; run_id: string } } & { json: UpdateRunStatusBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; run_id: string } } & { json: UpdateRunStatusBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/actions/:run_id/logs': {
      $get:
        | {
            input: { param: { ref: string; run_id: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; run_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/api-keys': {
      $get:
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } }
            output: ApiKeyResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } } & {
              json: CreateApiKeyBody
            }
            output: ApiKeyResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } } & {
              json: CreateApiKeyBody
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } } & {
              json: CreateApiKeyBody
            }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } } & {
              json: CreateApiKeyBody
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { reveal?: string | undefined } } & {
              json: CreateApiKeyBody
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/api-keys/legacy': {
      $get:
        | {
            input: { param: { ref: string } }
            output: LegacyApiKeysResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { ref: string } } & { query: { enabled: string } }
            output: LegacyApiKeysResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { enabled: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { enabled: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { enabled: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/api-keys/:id': {
      $patch:
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: ApiKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            } & { json: UpdateApiKeyBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            }
            output: ApiKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: { reveal?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { ref: string; id: string } } & {
              query: {
                reveal?: string | undefined
                was_compromised?: string | undefined
                reason?: string | undefined
              }
            }
            output: ApiKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: {
                reveal?: string | undefined
                was_compromised?: string | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: {
                reveal?: string | undefined
                was_compromised?: string | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: {
                reveal?: string | undefined
                was_compromised?: string | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; id: string } } & {
              query: {
                reveal?: string | undefined
                was_compromised?: string | undefined
                reason?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/branches': {
      $get:
        | {
            input: { param: { ref: string } }
            output: BranchResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: BranchResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: CreateBranchBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/branches/:name': {
      $get:
        | {
            input: { param: { ref: string; name: string } }
            output: BranchResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; name: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/custom-hostname': {
      $get:
        | {
            input: { param: { ref: string } }
            output: UpdateCustomHostnameResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $delete:
        | {
            input: { param: { ref: string } } & { query: { remove_addon?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { remove_addon?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { remove_addon?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { remove_addon?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { remove_addon?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/custom-hostname/initialize': {
      $post:
        | {
            input: { param: { ref: string } } & { json: UpdateCustomHostnameBody }
            output: UpdateCustomHostnameResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: UpdateCustomHostnameBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateCustomHostnameBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateCustomHostnameBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdateCustomHostnameBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/custom-hostname/reverify': {
      $post:
        | {
            input: { param: { ref: string } }
            output: UpdateCustomHostnameResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/custom-hostname/activate': {
      $post:
        | {
            input: { param: { ref: string } }
            output: UpdateCustomHostnameResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/jit-access': {
      $get:
        | {
            input: { param: { ref: string } }
            output:
              | { state: 'enabled' | 'disabled'; appliedSuccessfully?: boolean | undefined }
              | {
                  state: 'unavailable'
                  unavailableReason:
                    | 'platform_unsupported'
                    | 'postgres_upgrade_required'
                    | 'ssl_enforcement_required'
                    | 'temporarily_unavailable'
                }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { ref: string } } & { json: JitAccessRequestRequest }
            output:
              | { state: 'enabled' | 'disabled'; appliedSuccessfully?: boolean | undefined }
              | {
                  state: 'unavailable'
                  unavailableReason:
                    | 'platform_unsupported'
                    | 'postgres_upgrade_required'
                    | 'ssl_enforcement_required'
                    | 'temporarily_unavailable'
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: JitAccessRequestRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: JitAccessRequestRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: JitAccessRequestRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: JitAccessRequestRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/network-bans/retrieve': {
      $post:
        | {
            input: { param: { ref: string } }
            output: NetworkBanResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/network-bans/retrieve/enriched': {
      $post:
        | {
            input: { param: { ref: string } }
            output: NetworkBanResponseEnrichedOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/network-bans': {
      $delete:
        | {
            input: { param: { ref: string } } & { json: RemoveNetworkBanRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: RemoveNetworkBanRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: RemoveNetworkBanRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: RemoveNetworkBanRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: RemoveNetworkBanRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/network-restrictions': {
      $get:
        | {
            input: { param: { ref: string } }
            output: NetworkRestrictionsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsPatchRequest }
            output: NetworkRestrictionsV2ResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsPatchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsPatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsPatchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsPatchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/network-restrictions/apply': {
      $post:
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsRequest }
            output: NetworkRestrictionsResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/network-restrictions/review': {
      $post:
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsReviewRequest }
            output: NetworkRestrictionsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsReviewRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsReviewRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsReviewRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: NetworkRestrictionsReviewRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/pgsodium': {
      $get:
        | {
            input: { param: { ref: string } }
            output: PgsodiumConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { ref: string } } & { json: UpdatePgsodiumConfigBody }
            output: PgsodiumConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePgsodiumConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePgsodiumConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePgsodiumConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePgsodiumConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/postgrest': {
      $get:
        | {
            input: { param: { ref: string } }
            output: PostgrestConfigWithJWTSecretResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: V1UpdatePostgrestConfigBody }
            output: V1PostgrestConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePostgrestConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePostgrestConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePostgrestConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePostgrestConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1ProjectWithDatabaseResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $delete:
        | {
            input: { param: { ref: string } }
            output: V1ProjectRefResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: V1UpdateProjectBody }
            output: V1ProjectRefResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateProjectBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateProjectBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateProjectBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateProjectBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/secrets': {
      $get:
        | {
            input: { param: { ref: string } }
            output: SecretResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateSecretBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateSecretBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateSecretBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateSecretBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: CreateSecretBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { ref: string } } & { json: DeleteSecretsBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: DeleteSecretsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: DeleteSecretsBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: DeleteSecretsBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: DeleteSecretsBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/ssl-enforcement': {
      $get:
        | {
            input: { param: { ref: string } }
            output: SslEnforcementResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { ref: string } } & { json: SslEnforcementRequest }
            output: SslEnforcementResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: SslEnforcementRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: SslEnforcementRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: SslEnforcementRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: SslEnforcementRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/types/typescript': {
      $get:
        | {
            input: { param: { ref: string } } & { query: { included_schemas?: string | undefined } }
            output: TypescriptResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { included_schemas?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { included_schemas?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { included_schemas?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { included_schemas?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/vanity-subdomain': {
      $get:
        | {
            input: { param: { ref: string } }
            output: VanitySubdomainConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $delete:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/vanity-subdomain/check-availability': {
      $post:
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: SubdomainAvailabilityResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/vanity-subdomain/activate': {
      $post:
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: ActivateVanitySubdomainResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: VanitySubdomainBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/upgrade': {
      $post:
        | {
            input: { param: { ref: string } } & { json: UpgradeDatabaseBody }
            output: ProjectUpgradeInitiateResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: UpgradeDatabaseBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpgradeDatabaseBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpgradeDatabaseBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpgradeDatabaseBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/upgrade/eligibility': {
      $get:
        | {
            input: { param: { ref: string } }
            output: ProjectUpgradeEligibilityResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/upgrade/status': {
      $get:
        | {
            input: { param: { ref: string } } & { query: { tracking_id?: string | undefined } }
            output: DatabaseUpgradeStatusResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { tracking_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { tracking_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { tracking_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { tracking_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/readonly': {
      $get:
        | {
            input: { param: { ref: string } }
            output: ReadOnlyStatusResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/readonly/temporary-disable': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 201 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/read-replicas/setup': {
      $post:
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: SetUpReadReplicaBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/read-replicas/remove': {
      $post:
        | {
            input: { param: { ref: string } } & { json: RemoveReadReplicaBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ref: string } } & { json: RemoveReadReplicaBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: RemoveReadReplicaBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: RemoveReadReplicaBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: RemoveReadReplicaBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/health': {
      $get:
        | {
            input: { param: { ref: string } } & {
              query: {
                services:
                  | string
                  | (
                      | 'auth'
                      | 'db'
                      | 'db_postgres_user'
                      | 'pooler'
                      | 'realtime'
                      | 'rest'
                      | 'storage'
                      | 'pg_bouncer'
                    )[]
                timeout_ms?: number | undefined
              }
            }
            output: V1ServiceHealthResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                services:
                  | string
                  | (
                      | 'auth'
                      | 'db'
                      | 'db_postgres_user'
                      | 'pooler'
                      | 'realtime'
                      | 'rest'
                      | 'storage'
                      | 'pg_bouncer'
                    )[]
                timeout_ms?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                services:
                  | string
                  | (
                      | 'auth'
                      | 'db'
                      | 'db_postgres_user'
                      | 'pooler'
                      | 'realtime'
                      | 'rest'
                      | 'storage'
                      | 'pg_bouncer'
                    )[]
                timeout_ms?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                services:
                  | string
                  | (
                      | 'auth'
                      | 'db'
                      | 'db_postgres_user'
                      | 'pooler'
                      | 'realtime'
                      | 'rest'
                      | 'storage'
                      | 'pg_bouncer'
                    )[]
                timeout_ms?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                services:
                  | string
                  | (
                      | 'auth'
                      | 'db'
                      | 'db_postgres_user'
                      | 'pooler'
                      | 'realtime'
                      | 'rest'
                      | 'storage'
                      | 'pg_bouncer'
                    )[]
                timeout_ms?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/auth/signing-keys/legacy': {
      $post:
        | {
            input: { param: { ref: string } }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { ref: string } }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/config/auth/signing-keys': {
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateSigningKeyBody }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string } }
            output: SigningKeysResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/config/auth/signing-keys/:id': {
      $get:
        | {
            input: { param: { id: string; ref: string } }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string; ref: string } }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; ref: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string; ref: string } } & { json: UpdateSigningKeyBody }
            output: SigningKeyResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; ref: string } } & { json: UpdateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; ref: string } } & { json: UpdateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; ref: string } } & { json: UpdateSigningKeyBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/config/auth': {
      $get:
        | {
            input: { param: { ref: string } }
            output: AuthConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: AuthConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdateAuthConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/auth/third-party-auth': {
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateThirdPartyAuthBody }
            output: ThirdPartyAuthOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateThirdPartyAuthBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateThirdPartyAuthBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateThirdPartyAuthBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string } }
            output: ThirdPartyAuthOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/config/auth/third-party-auth/:tpa_id': {
      $delete:
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: ThirdPartyAuthOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: ThirdPartyAuthOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; tpa_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/pause': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/restart': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/restore': {
      $get:
        | {
            input: { param: { ref: string } }
            output: GetProjectAvailableRestoreVersionsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { ref: string } }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/restore/cancel': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/billing/addons': {
      $get:
        | {
            input: { param: { ref: string } }
            output: ListProjectAddonsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: ApplyProjectAddonBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: ApplyProjectAddonBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: ApplyProjectAddonBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: ApplyProjectAddonBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: ApplyProjectAddonBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/billing/addons/:addon_variant': {
      $delete:
        | {
            input: {
              param: {
                ref: string
                addon_variant:
                  | 'ci_micro'
                  | 'ci_small'
                  | 'ci_medium'
                  | 'ci_large'
                  | 'ci_xlarge'
                  | 'ci_2xlarge'
                  | 'ci_4xlarge'
                  | 'ci_8xlarge'
                  | 'ci_12xlarge'
                  | 'ci_16xlarge'
                  | 'ci_24xlarge'
                  | 'ci_24xlarge_optimized_cpu'
                  | 'ci_24xlarge_optimized_memory'
                  | 'ci_24xlarge_high_memory'
                  | 'ci_48xlarge'
                  | 'ci_48xlarge_optimized_cpu'
                  | 'ci_48xlarge_optimized_memory'
                  | 'ci_48xlarge_high_memory'
                  | 'cd_default'
                  | 'pitr_7'
                  | 'pitr_14'
                  | 'pitr_28'
                  | 'ipv4_default'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                ref: string
                addon_variant:
                  | 'ci_micro'
                  | 'ci_small'
                  | 'ci_medium'
                  | 'ci_large'
                  | 'ci_xlarge'
                  | 'ci_2xlarge'
                  | 'ci_4xlarge'
                  | 'ci_8xlarge'
                  | 'ci_12xlarge'
                  | 'ci_16xlarge'
                  | 'ci_24xlarge'
                  | 'ci_24xlarge_optimized_cpu'
                  | 'ci_24xlarge_optimized_memory'
                  | 'ci_24xlarge_high_memory'
                  | 'ci_48xlarge'
                  | 'ci_48xlarge_optimized_cpu'
                  | 'ci_48xlarge_optimized_memory'
                  | 'ci_48xlarge_high_memory'
                  | 'cd_default'
                  | 'pitr_7'
                  | 'pitr_14'
                  | 'pitr_28'
                  | 'ipv4_default'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                ref: string
                addon_variant:
                  | 'ci_micro'
                  | 'ci_small'
                  | 'ci_medium'
                  | 'ci_large'
                  | 'ci_xlarge'
                  | 'ci_2xlarge'
                  | 'ci_4xlarge'
                  | 'ci_8xlarge'
                  | 'ci_12xlarge'
                  | 'ci_16xlarge'
                  | 'ci_24xlarge'
                  | 'ci_24xlarge_optimized_cpu'
                  | 'ci_24xlarge_optimized_memory'
                  | 'ci_24xlarge_high_memory'
                  | 'ci_48xlarge'
                  | 'ci_48xlarge_optimized_cpu'
                  | 'ci_48xlarge_optimized_memory'
                  | 'ci_48xlarge_high_memory'
                  | 'cd_default'
                  | 'pitr_7'
                  | 'pitr_14'
                  | 'pitr_28'
                  | 'ipv4_default'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                ref: string
                addon_variant:
                  | 'ci_micro'
                  | 'ci_small'
                  | 'ci_medium'
                  | 'ci_large'
                  | 'ci_xlarge'
                  | 'ci_2xlarge'
                  | 'ci_4xlarge'
                  | 'ci_8xlarge'
                  | 'ci_12xlarge'
                  | 'ci_16xlarge'
                  | 'ci_24xlarge'
                  | 'ci_24xlarge_optimized_cpu'
                  | 'ci_24xlarge_optimized_memory'
                  | 'ci_24xlarge_high_memory'
                  | 'ci_48xlarge'
                  | 'ci_48xlarge_optimized_cpu'
                  | 'ci_48xlarge_optimized_memory'
                  | 'ci_48xlarge_high_memory'
                  | 'cd_default'
                  | 'pitr_7'
                  | 'pitr_14'
                  | 'pitr_28'
                  | 'ipv4_default'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                ref: string
                addon_variant:
                  | 'ci_micro'
                  | 'ci_small'
                  | 'ci_medium'
                  | 'ci_large'
                  | 'ci_xlarge'
                  | 'ci_2xlarge'
                  | 'ci_4xlarge'
                  | 'ci_8xlarge'
                  | 'ci_12xlarge'
                  | 'ci_16xlarge'
                  | 'ci_24xlarge'
                  | 'ci_24xlarge_optimized_cpu'
                  | 'ci_24xlarge_optimized_memory'
                  | 'ci_24xlarge_high_memory'
                  | 'ci_48xlarge'
                  | 'ci_48xlarge_optimized_cpu'
                  | 'ci_48xlarge_optimized_memory'
                  | 'ci_48xlarge_high_memory'
                  | 'cd_default'
                  | 'pitr_7'
                  | 'pitr_14'
                  | 'pitr_28'
                  | 'ipv4_default'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/claim-token': {
      $get:
        | {
            input: { param: { ref: string } }
            output: ProjectClaimTokenResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { param: { ref: string } }
            output: CreateProjectClaimTokenResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $delete:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/advisors/performance': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1ProjectAdvisorsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/advisors/security': {
      $get:
        | {
            input: { param: { ref: string } } & { query: { lint_type?: 'sql' | undefined } }
            output: V1ProjectAdvisorsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { lint_type?: 'sql' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { lint_type?: 'sql' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { lint_type?: 'sql' | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/logs.all': {
      $get:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 410 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/logs': {
      $get:
        | {
            input: { param: { ref: string } } & {
              query: {
                sql?: string | undefined
                lql?: string | undefined
                iso_timestamp_start?: string | undefined
                iso_timestamp_end?: string | undefined
              }
            }
            output: AnalyticsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                sql?: string | undefined
                lql?: string | undefined
                iso_timestamp_start?: string | undefined
                iso_timestamp_end?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                sql?: string | undefined
                lql?: string | undefined
                iso_timestamp_start?: string | undefined
                iso_timestamp_end?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                sql?: string | undefined
                lql?: string | undefined
                iso_timestamp_start?: string | undefined
                iso_timestamp_end?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                sql?: string | undefined
                lql?: string | undefined
                iso_timestamp_start?: string | undefined
                iso_timestamp_end?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { ref: string } } & { json: V1PostProjectLogsBody }
            output: AnalyticsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: V1PostProjectLogsBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1PostProjectLogsBody }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: V1PostProjectLogsBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1PostProjectLogsBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/usage.api-counts': {
      $get:
        | {
            input: { param: { ref: string } } & {
              query: {
                interval?: '15min' | '30min' | '1hr' | '3hr' | '1day' | '3day' | '7day' | undefined
              }
            }
            output: V1GetUsageApiCountResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                interval?: '15min' | '30min' | '1hr' | '3hr' | '1day' | '3day' | '7day' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                interval?: '15min' | '30min' | '1hr' | '3hr' | '1day' | '3day' | '7day' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                interval?: '15min' | '30min' | '1hr' | '3hr' | '1day' | '3day' | '7day' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                interval?: '15min' | '30min' | '1hr' | '3hr' | '1day' | '3day' | '7day' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/usage.api-requests-count': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1GetUsageApiRequestsCountResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/functions.combined-stats': {
      $get:
        | {
            input: { param: { ref: string } } & {
              query: { interval: '15min' | '1hr' | '3hr' | '1day'; function_id: string }
            }
            output: AnalyticsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              query: { interval: '15min' | '1hr' | '3hr' | '1day'; function_id: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: { interval: '15min' | '1hr' | '3hr' | '1day'; function_id: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: { interval: '15min' | '1hr' | '3hr' | '1day'; function_id: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: { interval: '15min' | '1hr' | '3hr' | '1day'; function_id: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/analytics/endpoints/metrics': {
      $get:
        | { input: { param: { ref: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { ref: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/cli/login-role': {
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateRoleBody }
            output: CreateRoleResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateRoleBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateRoleBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateRoleBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: CreateRoleBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { ref: string } }
            output: DeleteRolesResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/database/migrations': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1ListMigrationsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1CreateMigrationBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1CreateMigrationBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1CreateMigrationBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1CreateMigrationBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1CreateMigrationBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1UpsertMigrationBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1UpsertMigrationBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1UpsertMigrationBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1UpsertMigrationBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: V1UpsertMigrationBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { ref: string } } & { query: { gte: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { gte: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { gte: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { gte: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { gte: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/migrations/:version': {
      $get:
        | {
            input: { param: { ref: string; version: string } }
            output: V1GetMigrationResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; version: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; version: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; version: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; version: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { ref: string; version: string } } & { json: V1PatchMigrationBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string; version: string } } & { json: V1PatchMigrationBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; version: string } } & { json: V1PatchMigrationBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; version: string } } & { json: V1PatchMigrationBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; version: string } } & { json: V1PatchMigrationBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/query': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1RunQueryBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1RunQueryBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1RunQueryBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1RunQueryBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1RunQueryBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/query/read-only': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1ReadOnlyQueryBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1ReadOnlyQueryBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1ReadOnlyQueryBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1ReadOnlyQueryBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1ReadOnlyQueryBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/webhooks/enable': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 201 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/database/context': {
      $get:
        | {
            input: { param: { ref: string } }
            output: GetProjectDbMetadataResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/database/password': {
      $patch:
        | {
            input: { param: { ref: string } } & { json: V1UpdatePasswordBody }
            output: V1UpdatePasswordResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePasswordBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePasswordBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePasswordBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdatePasswordBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/jit': {
      $get:
        | {
            input: { param: { ref: string } }
            output: JitAccessResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & { json: AuthorizeJitAccessBody }
            output: JitAuthorizeAccessResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: AuthorizeJitAccessBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: AuthorizeJitAccessBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: AuthorizeJitAccessBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: AuthorizeJitAccessBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { ref: string } } & { json: UpdateJitAccessBody }
            output: JitAccessResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdateJitAccessBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateJitAccessBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateJitAccessBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdateJitAccessBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/jit/list': {
      $get:
        | {
            input: { param: { ref: string } }
            output: JitListAccessResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/database/jit/invite': {
      $post:
        | {
            input: { param: { ref: string } } & { json: InviteExternalUserJitAccessBody }
            output: InviteExternalUserJitResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: InviteExternalUserJitAccessBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: InviteExternalUserJitAccessBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: InviteExternalUserJitAccessBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: InviteExternalUserJitAccessBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/jit/invite/accept': {
      $post:
        | {
            input: { param: { ref: string } } & { json: AcceptInviteExternalUserJitAccessBody }
            output: JitAccessResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: AcceptInviteExternalUserJitAccessBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/jit/invite/:invite_id': {
      $delete:
        | {
            input: { param: { ref: string; invite_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string; invite_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; invite_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; invite_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; invite_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/jit/:user_id': {
      $delete:
        | {
            input: { param: { ref: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/openapi': {
      $get:
        | {
            input: { param: { ref: string } } & { query: { schema?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { schema?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { schema?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { schema?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { schema?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/functions': {
      $get:
        | {
            input: { param: { ref: string } }
            output: FunctionResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: FunctionResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: File | V1CreateFunctionBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: BulkUpdateFunctionResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: BulkUpdateFunctionBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/functions/deploy': {
      $post:
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: DeployFunctionResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & {
              query: { slug?: string | undefined; bundleOnly?: string | undefined }
            } & { form: FunctionDeployBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/functions/:function_slug': {
      $get:
        | {
            input: { param: { ref: string; function_slug: string } }
            output: FunctionSlugResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { ref: string; function_slug: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: V1UpdateFunctionBodyEszip | V1UpdateFunctionBodyJson }
            output: FunctionSlugResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; function_slug: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: V1UpdateFunctionBodyEszip | V1UpdateFunctionBodyJson }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; function_slug: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: V1UpdateFunctionBodyEszip | V1UpdateFunctionBodyJson }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; function_slug: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: V1UpdateFunctionBodyEszip | V1UpdateFunctionBodyJson }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; function_slug: string } } & {
              query: {
                slug?: string | undefined
                name?: string | undefined
                verify_jwt?: string | undefined
                import_map?: string | undefined
                entrypoint_path?: string | undefined
                import_map_path?: string | undefined
                ezbr_sha256?: string | undefined
              }
            } & { json: V1UpdateFunctionBodyEszip | V1UpdateFunctionBodyJson }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/functions/:function_slug/body': {
      $get:
        | {
            input: { param: { ref: string; function_slug: string } }
            output: StreamableFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string; function_slug: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/storage/buckets': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1StorageBucketResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/config/disk': {
      $get:
        | {
            input: { param: { ref: string } }
            output: DiskResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: DiskRequestBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/disk/util': {
      $get:
        | {
            input: { param: { ref: string } }
            output: DiskUtilMetricsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/config/disk/autoscale': {
      $get:
        | {
            input: { param: { ref: string } }
            output: DiskAutoscaleConfigOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/config/storage': {
      $get:
        | {
            input: { param: { ref: string } }
            output: StorageConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdateStorageConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/database/pgbouncer': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1PgbouncerConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/config/database/pooler': {
      $get:
        | {
            input: { param: { ref: string } }
            output: SupavisorConfigResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: UpdateSupavisorConfigBody }
            output: UpdateSupavisorConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdateSupavisorConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateSupavisorConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateSupavisorConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdateSupavisorConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/database/postgres': {
      $get:
        | {
            input: { param: { ref: string } }
            output: PostgresConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: PostgresConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: PostgresConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: UpdatePostgresConfigBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/config/realtime': {
      $get:
        | {
            input: { param: { ref: string } }
            output: RealtimeConfigResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: UpdateRealtimeConfigBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ref: string } } & { json: UpdateRealtimeConfigBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: UpdateRealtimeConfigBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: UpdateRealtimeConfigBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/config/realtime/shutdown': {
      $post:
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/config/auth/sso/providers': {
      $post:
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: CreateProviderResponseOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string } } & { json: CreateProviderBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string } }
            output: ListProvidersResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/projects/:ref/config/auth/sso/providers/:provider_id': {
      $get:
        | {
            input: { param: { ref: string; provider_id: string } }
            output: GetProviderResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $put:
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: UpdateProviderResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; provider_id: string } } & { json: UpdateProviderBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { ref: string; provider_id: string } }
            output: DeleteProviderResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string; provider_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/database/backups': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1BackupsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/projects/:ref/database/backups/restore-pitr': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1RestorePitrBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePitrBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePitrBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePitrBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/database/backups/restore-point': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1RestorePointPostBody }
            output: V1RestorePointResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePointPostBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePointPostBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1RestorePointPostBody }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { ref: string } } & { query: { name?: string | undefined } }
            output: V1RestorePointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { query: { name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { query: { name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { query: { name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { query: { name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/backups/restore': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1RestoreBackupBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1RestoreBackupBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1RestoreBackupBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1RestoreBackupBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/projects/:ref/database/backups/schedule': {
      $get:
        | {
            input: { param: { ref: string } }
            output: V1BackupScheduleResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { ref: string } }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { ref: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: V1BackupScheduleResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: PlanGateErrorBody
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ref: string } } & { json: V1UpdateBackupScheduleBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/:ref/database/backups/undo': {
      $post:
        | {
            input: { param: { ref: string } } & { json: V1UndoBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { ref: string } } & { json: V1UndoBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ref: string } } & { json: V1UndoBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ref: string } } & { json: V1UndoBody }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/organizations/:slug/entitlements': {
      $get:
        | {
            input: { param: { slug: string } }
            output: V1ListEntitlementsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/organizations/:slug/members': {
      $get:
        | {
            input: { param: { slug: string } }
            output: V1OrganizationMemberResponseOutput[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/organizations/:slug': {
      $get:
        | {
            input: { param: { slug: string } }
            output: V1OrganizationSlugResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/organizations/:slug/project-claim/:token': {
      $get:
        | {
            input: { param: { slug: string; token: string } }
            output: OrganizationProjectClaimResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { slug: string; token: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v1/organizations/:slug/projects': {
      $get:
        | {
            input: { param: { slug: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc' | undefined
                statuses?: string | undefined
              }
            }
            output: OrganizationProjectsResponseOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc' | undefined
                statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc' | undefined
                statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc' | undefined
                statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { slug: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                sort?: 'name_asc' | 'name_desc' | 'created_asc' | 'created_desc' | undefined
                statuses?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
