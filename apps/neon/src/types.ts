type ApiKeyCreatorData = { id: string; name: string; image: string }
type ApiKeysListResponseItem = {
  id: bigint
  name: string
  created_at: string
  created_by: ApiKeyCreatorData
  last_used_at?: (string | null) | undefined
  last_used_from_addr: string
}
type ErrorCode = string
type GeneralError = { request_id?: string | undefined; code: ErrorCode; message: string }
type ApiKeyCreateRequest = { key_name: string }
type ApiKeyCreateResponse = {
  id: bigint
  key: string
  name: string
  created_at: string
  created_by: string
}
type ApiKeyRevokeResponse = {
  id: bigint
  name: string
  created_at: string
  created_by: string
  last_used_at?: (string | null) | undefined
  last_used_from_addr: string
  revoked: boolean
}
type OperationAction =
  | 'create_compute'
  | 'create_timeline'
  | 'start_compute'
  | 'suspend_compute'
  | 'apply_config'
  | 'check_availability'
  | 'delete_timeline'
  | 'create_branch'
  | 'tenant_ignore'
  | 'tenant_attach'
  | 'tenant_detach'
  | 'tenant_reattach'
  | 'replace_safekeeper'
  | 'disable_maintenance'
  | 'apply_storage_config'
  | 'prepare_secondary_pageserver'
  | 'switch_pageserver'
  | 'detach_parent_branch'
  | 'timeline_archive'
  | 'timeline_unarchive'
  | 'start_reserved_compute'
  | 'sync_dbs_and_roles_from_compute'
type OperationStatus =
  | 'scheduling'
  | 'running'
  | 'finished'
  | 'failed'
  | 'error'
  | 'cancelling'
  | 'cancelled'
  | 'skipped'
type Operation = {
  id: string
  project_id: string
  branch_id?: string | undefined
  endpoint_id?: string | undefined
  action: OperationAction
  status: OperationStatus
  error?: string | undefined
  failures_count: number
  retry_at?: string | undefined
  created_at: string
  updated_at: string
  total_duration_ms: number
}
type OperationResponse = { operation: Operation }
type Provisioner = string
type PgSettingsData = { [x: string]: string }
type PgbouncerSettingsData = { [x: string]: string }
type ComputeUnit = number
type SuspendTimeoutSeconds = bigint
type DefaultEndpointSettings = {
  pg_settings?: PgSettingsData | undefined
  pgbouncer_settings?: PgbouncerSettingsData | undefined
  autoscaling_limit_min_cu?: ComputeUnit | undefined
  autoscaling_limit_max_cu?: ComputeUnit | undefined
  suspend_timeout_seconds?: SuspendTimeoutSeconds | undefined
}
type ProjectQuota = {
  active_time_seconds?: bigint | undefined
  compute_time_seconds?: bigint | undefined
  written_data_bytes?: bigint | undefined
  data_transfer_bytes?: bigint | undefined
  logical_size_bytes?: bigint | undefined
}
type AllowedIps = { ips?: string[] | undefined; protected_branches_only?: boolean | undefined }
type MaintenanceWindow = { weekdays: number[]; start_time: string; end_time: string }
type ProjectSettingsData = {
  quota?: ProjectQuota | undefined
  allowed_ips?: AllowedIps | undefined
  enable_logical_replication?: boolean | undefined
  maintenance_window?: MaintenanceWindow | undefined
  block_public_connections?: boolean | undefined
  block_vpc_connections?: boolean | undefined
}
type PgVersion = number
type ProjectListItem = {
  id: string
  platform_id: string
  region_id: string
  name: string
  provisioner: Provisioner
  default_endpoint_settings?: DefaultEndpointSettings | undefined
  settings?: ProjectSettingsData | undefined
  pg_version: PgVersion
  proxy_host: string
  branch_logical_size_limit: bigint
  branch_logical_size_limit_bytes: bigint
  store_passwords: boolean
  active_time: bigint
  cpu_used_sec: bigint
  maintenance_starts_at?: string | undefined
  creation_source: string
  created_at: string
  updated_at: string
  synthetic_storage_size?: bigint | undefined
  quota_reset_at?: string | undefined
  owner_id: string
  compute_last_active_at?: string | undefined
  org_id?: string | undefined
}
type Pagination = { cursor: string }
type ProjectCreateRequest = {
  project: {
    settings?: ProjectSettingsData | undefined
    name?: string | undefined
    branch?:
      | {
          name?: string | undefined
          role_name?: string | undefined
          database_name?: string | undefined
        }
      | undefined
    autoscaling_limit_min_cu?: ComputeUnit | undefined
    autoscaling_limit_max_cu?: ComputeUnit | undefined
    provisioner?: Provisioner | undefined
    region_id?: string | undefined
    default_endpoint_settings?: DefaultEndpointSettings | undefined
    pg_version?: PgVersion | undefined
    store_passwords?: boolean | undefined
    history_retention_seconds?: number | undefined
    org_id?: string | undefined
  }
}
type BillingSubscriptionType =
  | 'UNKNOWN'
  | 'direct_sales'
  | 'aws_marketplace'
  | 'free_v2'
  | 'launch'
  | 'scale'
  | 'business'
  | 'vercel_pg_legacy'
type ProjectOwnerData = {
  email: string
  name: string
  branches_limit: number
  subscription_type: BillingSubscriptionType
}
type Project = {
  data_storage_bytes_hour: bigint
  data_transfer_bytes: bigint
  written_data_bytes: bigint
  compute_time_seconds: bigint
  active_time_seconds: bigint
  cpu_used_sec: bigint
  id: string
  platform_id: string
  region_id: string
  name: string
  provisioner: Provisioner
  default_endpoint_settings?: DefaultEndpointSettings | undefined
  settings?: ProjectSettingsData | undefined
  pg_version: PgVersion
  proxy_host: string
  branch_logical_size_limit: bigint
  branch_logical_size_limit_bytes: bigint
  store_passwords: boolean
  maintenance_starts_at?: string | undefined
  creation_source: string
  history_retention_seconds: number
  created_at: string
  updated_at: string
  synthetic_storage_size?: bigint | undefined
  consumption_period_start: string
  consumption_period_end: string
  quota_reset_at?: string | undefined
  owner_id: string
  owner?: ProjectOwnerData | undefined
  compute_last_active_at?: string | undefined
  org_id?: string | undefined
}
type ConnectionParameters = {
  database: string
  password: string
  role: string
  host: string
  pooler_host: string
}
type ConnectionDetails = { connection_uri: string; connection_parameters: ConnectionParameters }
type Role = {
  branch_id: string
  name: string
  password?: string | undefined
  protected?: boolean | undefined
  created_at: string
  updated_at: string
}
type Database = {
  id: bigint
  branch_id: string
  name: string
  owner_name: string
  created_at: string
  updated_at: string
}
type BranchState = string
type Branch = {
  id: string
  project_id: string
  parent_id?: string | undefined
  parent_lsn?: string | undefined
  parent_timestamp?: string | undefined
  name: string
  current_state: BranchState
  pending_state?: BranchState | undefined
  state_changed_at: string
  logical_size?: bigint | undefined
  creation_source: string
  primary?: boolean | undefined
  default: boolean
  protected: boolean
  cpu_used_sec: bigint
  compute_time_seconds: bigint
  active_time_seconds: bigint
  written_data_bytes: bigint
  data_transfer_bytes: bigint
  created_at: string
  updated_at: string
  last_reset_at?: string | undefined
  created_by?: { name?: string | undefined; image?: string | undefined } | undefined
}
type EndpointType = 'read_only' | 'read_write'
type EndpointState = 'init' | 'active' | 'idle'
type EndpointSettingsData = {
  pg_settings?: PgSettingsData | undefined
  pgbouncer_settings?: PgbouncerSettingsData | undefined
}
type EndpointPoolerMode = 'transaction'
type Endpoint = {
  host: string
  id: string
  project_id: string
  branch_id: string
  autoscaling_limit_min_cu: ComputeUnit
  autoscaling_limit_max_cu: ComputeUnit
  region_id: string
  type: EndpointType
  current_state: EndpointState
  pending_state?: EndpointState | undefined
  settings: EndpointSettingsData
  pooler_enabled: boolean
  pooler_mode: EndpointPoolerMode
  disabled: boolean
  passwordless_access: boolean
  last_active?: string | undefined
  creation_source: string
  created_at: string
  updated_at: string
  proxy_host: string
  suspend_timeout_seconds: SuspendTimeoutSeconds
  provisioner: Provisioner
  compute_release_version?: string | undefined
}
type ProjectResponse = { project: Project }
type ProjectUpdateRequest = {
  project: {
    settings?: ProjectSettingsData | undefined
    name?: string | undefined
    default_endpoint_settings?: DefaultEndpointSettings | undefined
    history_retention_seconds?: number | undefined
  }
}
type ProjectPermission = {
  id: string
  granted_to_email: string
  granted_at: string
  revoked_at?: string | undefined
}
type ProjectPermissions = { project_permissions: ProjectPermission[] }
type GrantPermissionToProjectRequest = { email: string }
type JWKS = {
  id: string
  project_id: string
  branch_id?: string | undefined
  jwks_url: string
  provider_name: string
  created_at: string
  updated_at: string
  jwt_audience?: string | undefined
}
type ProjectJWKSResponse = { jwks: JWKS[] }
type AddProjectJWKSRequest = {
  jwks_url: string
  provider_name: string
  branch_id?: string | undefined
  jwt_audience?: string | undefined
  role_names: string[]
}
type JWKSCreationOperation = { jwks: JWKS; operations: Operation[] }
type ConnectionURIResponse = { uri: string }
type BranchCreateRequestEndpointOptions = {
  type: EndpointType
  autoscaling_limit_min_cu?: ComputeUnit | undefined
  autoscaling_limit_max_cu?: ComputeUnit | undefined
  provisioner?: Provisioner | undefined
  suspend_timeout_seconds?: SuspendTimeoutSeconds | undefined
}
type AnnotationValueData = { [x: string]: string }
type AnnotationObjectData = { type: string; id: string }
type AnnotationData = {
  object: AnnotationObjectData
  value: AnnotationValueData
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CursorPagination = {
  next?: string | undefined
  previous?: string | undefined
  sort_by?: string | undefined
  sort_order?: string | undefined
}
type BranchOperations = { branch: Branch; operations: Operation[] }
type BranchUpdateRequest = {
  branch: { name?: string | undefined; protected?: boolean | undefined }
}
type BranchRestoreRequest = {
  source_branch_id: string
  source_lsn?: string | undefined
  source_timestamp?: string | undefined
  preserve_under_name?: string | undefined
}
type BranchSchemaResponse = { sql?: string | undefined }
type BranchSchemaCompareResponse = { diff?: string | undefined }
type EndpointsResponse = { endpoints: Endpoint[] }
type DatabasesResponse = { databases: Database[] }
type DatabaseCreateRequest = { database: { name: string; owner_name: string } }
type DatabaseOperations = { database: Database; operations: Operation[] }
type DatabaseResponse = { database: Database }
type DatabaseUpdateRequest = {
  database: { name?: string | undefined; owner_name?: string | undefined }
}
type RolesResponse = { roles: Role[] }
type RoleCreateRequest = { role: { name: string } }
type RoleOperations = { role: Role; operations: Operation[] }
type RoleResponse = { role: Role }
type RolePasswordResponse = { password: string }
type VPCEndpoint = { vpc_endpoint_id: string; label: string }
type VPCEndpointsResponse = { endpoints: VPCEndpoint[] }
type VPCEndpointAssignment = { label: string }
type EndpointCreateRequest = {
  endpoint: {
    branch_id: string
    region_id?: string | undefined
    type: EndpointType
    settings?: EndpointSettingsData | undefined
    autoscaling_limit_min_cu?: ComputeUnit | undefined
    autoscaling_limit_max_cu?: ComputeUnit | undefined
    provisioner?: Provisioner | undefined
    pooler_enabled?: boolean | undefined
    pooler_mode?: EndpointPoolerMode | undefined
    disabled?: boolean | undefined
    passwordless_access?: boolean | undefined
    suspend_timeout_seconds?: SuspendTimeoutSeconds | undefined
  }
}
type EndpointOperations = { endpoint: Endpoint; operations: Operation[] }
type EndpointResponse = { endpoint: Endpoint }
type EndpointUpdateRequest = {
  endpoint: {
    branch_id?: string | undefined
    autoscaling_limit_min_cu?: ComputeUnit | undefined
    autoscaling_limit_max_cu?: ComputeUnit | undefined
    provisioner?: Provisioner | undefined
    settings?: EndpointSettingsData | undefined
    pooler_enabled?: boolean | undefined
    pooler_mode?: EndpointPoolerMode | undefined
    disabled?: boolean | undefined
    passwordless_access?: boolean | undefined
    suspend_timeout_seconds?: SuspendTimeoutSeconds | undefined
  }
}
type ConsumptionHistoryGranularity = 'hourly' | 'daily' | 'monthly'
type ConsumptionHistoryPerTimeframe = {
  timeframe_start: string
  timeframe_end: string
  active_time_seconds: bigint
  compute_time_seconds: bigint
  written_data_bytes: bigint
  synthetic_storage_size_bytes: bigint
  data_storage_bytes_hour?: bigint | undefined
}
type ConsumptionHistoryPerPeriod = {
  period_id: string
  period_plan: string
  period_start: string
  period_end?: string | undefined
  consumption: ConsumptionHistoryPerTimeframe[]
}
type ConsumptionHistoryPerAccountResponse = { periods: ConsumptionHistoryPerPeriod[] }
type ConsumptionHistoryPerProject = { project_id: string; periods: ConsumptionHistoryPerPeriod[] }
type Organization = {
  id: string
  name: string
  handle: string
  plan: string
  created_at: string
  managed_by: string
  updated_at: string
}
type OrgApiKeysListResponseItem = {
  id: bigint
  name: string
  created_at: string
  created_by: ApiKeyCreatorData
  last_used_at?: (string | null) | undefined
  last_used_from_addr: string
  project_id?: string | undefined
}
type OrgApiKeyCreateRequest = { key_name: string; project_id?: string | undefined }
type OrgApiKeyCreateResponse = {
  id: bigint
  key: string
  name: string
  created_at: string
  created_by: string
  project_id?: string | undefined
}
type OrgApiKeyRevokeResponse = {
  id: bigint
  name: string
  created_at: string
  created_by: string
  last_used_at?: (string | null) | undefined
  last_used_from_addr: string
  revoked: boolean
  project_id?: string | undefined
}
type MemberRole = 'admin' | 'member'
type Member = {
  id: string
  user_id: string
  org_id: string
  role: MemberRole
  joined_at?: string | undefined
}
type MemberUserInfo = { email: string }
type MemberWithUser = { member: Member; user: MemberUserInfo }
type OrganizationMembersResponse = { members: MemberWithUser[] }
type OrganizationMemberUpdateRequest = { role: MemberRole }
type EmptyResponse = { [x: string]: unknown }
type Invitation = {
  id: string
  email: string
  org_id: string
  invited_by: string
  invited_at: string
  role: MemberRole
}
type OrganizationInvitationsResponse = { invitations: Invitation[] }
type OrganizationInviteCreateRequest = { email: string; role: MemberRole }
type OrganizationInvitesCreateRequest = { invitations: OrganizationInviteCreateRequest[] }
type VPCEndpointDetails = {
  vpc_endpoint_id: string
  label: string
  state: string
  num_restricted_projects: number
  example_restricted_projects: string[]
}
type RegionResponse = {
  region_id: string
  name: string
  default: boolean
  geo_lat: string
  geo_long: string
}
type ActiveRegionsResponse = { regions: RegionResponse[] }
type BillingAccountState = 'UNKNOWN' | 'active' | 'suspended' | 'deactivated' | 'deleted'
type PaymentSourceBankCard = {
  last4: string
  brand?:
    | 'amex'
    | 'diners'
    | 'discover'
    | 'jcb'
    | 'mastercard'
    | 'unionpay'
    | 'unknown'
    | 'visa'
    | undefined
  exp_month?: bigint | undefined
  exp_year?: bigint | undefined
}
type PaymentSource = { type: string; card?: PaymentSourceBankCard | undefined }
type BillingPaymentMethod =
  | 'UNKNOWN'
  | 'none'
  | 'stripe'
  | 'direct_payment'
  | 'aws_mp'
  | 'azure_mp'
  | 'vercel_mp'
  | 'staff'
  | 'trial'
  | 'sponsorship'
type BillingAccount = {
  state: BillingAccountState
  payment_source: PaymentSource
  subscription_type: BillingSubscriptionType
  payment_method: BillingPaymentMethod
  quota_reset_at_last: string
  name: string
  email: string
  address_city: string
  address_country: string
  address_country_name?: string | undefined
  address_line1: string
  address_line2: string
  address_postal_code: string
  address_state: string
  orb_portal_url?: string | undefined
  tax_id?: string | undefined
  tax_id_type?: string | undefined
}
type IdentityProviderId =
  | 'github'
  | 'google'
  | 'hasura'
  | 'microsoft'
  | 'microsoftv2'
  | 'vercelmp'
  | 'keycloak'
  | 'test'
type CurrentUserAuthAccount = {
  email: string
  image: string
  login: string
  name: string
  provider: IdentityProviderId
}
type CurrentUserInfoResponse = {
  active_seconds_limit: bigint
  billing_account: BillingAccount
  auth_accounts: CurrentUserAuthAccount[]
  email: string
  id: string
  image: string
  login: string
  name: string
  last_name: string
  projects_limit: bigint
  branches_limit: bigint
  max_autoscaling_limit: ComputeUnit
  compute_seconds_limit?: bigint | undefined
  plan: string
}
type OrganizationsResponse = { organizations: Organization[] }
type TransferProjectsToOrganizationRequest = { org_id: string; project_ids: string[] }
type LimitsUnsatisfiedResponse = { limits: { name: string; expected: string; actual: string }[] }
type ProjectsWithIntegrationResponse = { projects: { id: string; integration: string }[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api_keys': {
      $get:
        | { input: {}; output: ApiKeysListResponseItem[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GeneralError; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ApiKeyCreateRequest }
            output: ApiKeyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiKeyCreateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api_keys/:key_id': {
      $delete:
        | {
            input: { param: { key_id: bigint } }
            output: ApiKeyRevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: bigint } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/operations/:operation_id': {
      $get:
        | {
            input: { param: { project_id: string; operation_id: string } }
            output: OperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; operation_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
                org_id?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {
              projects: ProjectListItem[]
              unavailable_project_ids?: string[] | undefined
              pagination?: Pagination | undefined
              applications: { [x: string]: ('vercel' | 'github' | 'datadog')[] }
              integrations: { [x: string]: ('vercel' | 'github' | 'datadog')[] }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
                org_id?: string | undefined
                timeout?: number | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ProjectCreateRequest }
            output: {
              project: Project
              connection_uris: ConnectionDetails[]
              roles: Role[]
              databases: Database[]
              operations: Operation[]
              branch: Branch
              endpoints: Endpoint[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ProjectCreateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/shared': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: {
              projects: ProjectListItem[]
              unavailable_project_ids?: string[] | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: { project: Project; operations: Operation[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string } }
            output: ProjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/operations': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { operations: Operation[]; pagination?: Pagination | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/permissions': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: GrantPermissionToProjectRequest }
            output: ProjectPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: GrantPermissionToProjectRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/permissions/:permission_id': {
      $delete:
        | {
            input: { param: { project_id: string; permission_id: string } }
            output: ProjectPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; permission_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/jwks': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectJWKSResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: AddProjectJWKSRequest }
            output: JWKSCreationOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: AddProjectJWKSRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/jwks/:jwks_id': {
      $delete:
        | {
            input: { param: { project_id: string; jwks_id: string } }
            output: JWKS
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; jwks_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/connection_uri': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                branch_id?: string | undefined
                endpoint_id?: string | undefined
                database_name: string
                role_name: string
                pooled?: boolean | undefined
              }
            }
            output: ConnectionURIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                branch_id?: string | undefined
                endpoint_id?: string | undefined
                database_name: string
                role_name: string
                pooled?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches': {
      $post:
        | {
            input: { param: { project_id: string } } & {
              json: {
                endpoints?: BranchCreateRequestEndpointOptions[] | undefined
                branch?:
                  | {
                      parent_id?: string | undefined
                      name?: string | undefined
                      parent_lsn?: string | undefined
                      parent_timestamp?: string | undefined
                      protected?: boolean | undefined
                      archived?: boolean | undefined
                      init_source?: string | undefined
                    }
                  | undefined
                annotation_value?: AnnotationValueData | undefined
              }
            }
            output: {
              branch: Branch
              endpoints: Endpoint[]
              operations: Operation[]
              roles: Role[]
              databases: Database[]
              connection_uris?: ConnectionDetails[] | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & {
              json: {
                endpoints?: BranchCreateRequestEndpointOptions[] | undefined
                branch?:
                  | {
                      parent_id?: string | undefined
                      name?: string | undefined
                      parent_lsn?: string | undefined
                      parent_timestamp?: string | undefined
                      protected?: boolean | undefined
                      archived?: boolean | undefined
                      init_source?: string | undefined
                    }
                  | undefined
                annotation_value?: AnnotationValueData | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                sort_by?: 'name' | 'created_at' | 'updated_at' | undefined
                cursor?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: {
              branches: Branch[]
              annotations: { [x: string]: AnnotationData }
              pagination?: CursorPagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                sort_by?: 'name' | 'created_at' | 'updated_at' | undefined
                cursor?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/count': {
      $get:
        | {
            input: { param: { project_id: string } } & { query: { search?: string | undefined } }
            output: { count: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { query: { search?: string | undefined } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: { branch: Branch; annotation: AnnotationData }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: BranchOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: BranchUpdateRequest
            }
            output: BranchOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: BranchUpdateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/restore': {
      $post:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: BranchRestoreRequest
            }
            output: BranchOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: BranchRestoreRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/schema': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              query: { db_name: string; lsn?: string | undefined; timestamp?: string | undefined }
            }
            output: BranchSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              query: { db_name: string; lsn?: string | undefined; timestamp?: string | undefined }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/compare_schema': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              query: {
                base_branch_id?: string | undefined
                db_name: string
                lsn?: string | undefined
                timestamp?: string | undefined
                base_lsn?: string | undefined
                base_timestamp?: string | undefined
              }
            }
            output: BranchSchemaCompareResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              query: {
                base_branch_id?: string | undefined
                db_name: string
                lsn?: string | undefined
                timestamp?: string | undefined
                base_lsn?: string | undefined
                base_timestamp?: string | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/set_as_default': {
      $post:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: BranchOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/endpoints': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: EndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/databases': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: DatabasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: DatabaseCreateRequest
            }
            output: DatabaseOperations
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: DatabaseCreateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/databases/:database_name': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } }
            output: DatabaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } } & {
              json: DatabaseUpdateRequest
            }
            output: DatabaseOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } } & {
              json: DatabaseUpdateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } }
            output: DatabaseOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: string; branch_id: string; database_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/roles': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: RolesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: RoleCreateRequest
            }
            output: RoleOperations
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string; branch_id: string } } & {
              json: RoleCreateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/roles/:role_name': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: RoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: RoleOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/roles/:role_name/reveal_password': {
      $get:
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: RolePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/branches/:branch_id/roles/:role_name/reset_password': {
      $post:
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: RoleOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; branch_id: string; role_name: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/vpc_endpoints': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: VPCEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/vpc_endpoints/:vpc_endpoint_id': {
      $post:
        | {
            input: { param: { project_id: string; vpc_endpoint_id: string } } & {
              json: VPCEndpointAssignment
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project_id: string; vpc_endpoint_id: string } } & {
              json: VPCEndpointAssignment
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string; vpc_endpoint_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project_id: string; vpc_endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/endpoints': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: EndpointCreateRequest }
            output: EndpointOperations
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: EndpointCreateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { project_id: string } }
            output: EndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/endpoints/:endpoint_id': {
      $get:
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: EndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: EndpointOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { project_id: string; endpoint_id: string } } & {
              json: EndpointUpdateRequest
            }
            output: EndpointOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } } & {
              json: EndpointUpdateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/endpoints/:endpoint_id/start': {
      $post:
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: EndpointOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/endpoints/:endpoint_id/suspend': {
      $post:
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: EndpointOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:project_id/endpoints/:endpoint_id/restart': {
      $post:
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: EndpointOperations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/consumption_history/account': {
      $get:
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: ConsumptionHistoryPerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/consumption_history/projects': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: {
              projects: ConsumptionHistoryPerProject[]
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                project_ids?: string[] | undefined
                from: string
                to: string
                granularity: ConsumptionHistoryGranularity
                org_id?: string | undefined
                include_v1_metrics?: boolean | undefined
              }
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id': {
      $get:
        | {
            input: { param: { org_id: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/api_keys': {
      $get:
        | {
            input: { param: { org_id: string } }
            output: OrgApiKeysListResponseItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { org_id: string } } & { json: OrgApiKeyCreateRequest }
            output: OrgApiKeyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & { json: OrgApiKeyCreateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/api_keys/:key_id': {
      $delete:
        | {
            input: { param: { key_id: bigint; org_id: string } }
            output: OrgApiKeyRevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: bigint; org_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/members': {
      $get:
        | {
            input: { param: { org_id: string } }
            output: OrganizationMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/members/:member_id': {
      $get:
        | {
            input: { param: { org_id: string; member_id: string } }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; member_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { org_id: string; member_id: string } } & {
              json: OrganizationMemberUpdateRequest
            }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; member_id: string } } & {
              json: OrganizationMemberUpdateRequest
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { org_id: string; member_id: string } }
            output: EmptyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; member_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/invitations': {
      $get:
        | {
            input: { param: { org_id: string } }
            output: OrganizationInvitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { org_id: string } } & { json: OrganizationInvitesCreateRequest }
            output: OrganizationInvitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & { json: OrganizationInvitesCreateRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints': {
      $get:
        | {
            input: { param: { org_id: string; region_id: string } }
            output: VPCEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; region_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints/:vpc_endpoint_id': {
      $get:
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } }
            output: VPCEndpointDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } } & {
              json: VPCEndpointAssignment
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } } & {
              json: VPCEndpointAssignment
            }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { org_id: string; region_id: string; vpc_endpoint_id: string } }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/regions': {
      $get:
        | { input: {}; output: ActiveRegionsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GeneralError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/me': {
      $get:
        | { input: {}; output: CurrentUserInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GeneralError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/me/organizations': {
      $get:
        | { input: {}; output: OrganizationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GeneralError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/me/projects/transfer': {
      $post:
        | {
            input: { json: TransferProjectsToOrganizationRequest }
            output: EmptyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferProjectsToOrganizationRequest }
            output: LimitsUnsatisfiedResponse | GeneralError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: TransferProjectsToOrganizationRequest }
            output: ProjectsWithIntegrationResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TransferProjectsToOrganizationRequest }
            output: GeneralError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
