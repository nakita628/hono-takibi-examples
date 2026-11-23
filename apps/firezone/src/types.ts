type Group = {
  directory_id: string | null
  email: string | null
  entity_type: 'group' | 'org_unit'
  id: string
  idp_id: string | null
  inserted_at: string
  name: string
  synced_at: string | null
  type: 'managed' | 'static'
  updated_at: string
}
type PaginationMetadata = {
  count: number
  limit: number
  next_page: string | null
  prev_page: string | null
}
type GroupListResponse = { data?: Group[] | undefined; metadata?: PaginationMetadata | undefined }
type ProblemDetails = { detail?: string | undefined; status: number; title: string; type: string }
type GroupCreateRequest = { group: { name: string } }
type GroupResponse = { data?: Group | undefined }
type ValidationErrors = { [x: string]: string[] | ValidationErrors[] | ValidationErrors }
type ValidationProblemDetails = {
  detail?: string | undefined
  status: number
  title: string
  type: string
  validation_errors?: ValidationErrors | undefined
}
type ExternalIdentity = {
  account_id: string
  actor_id: string
  directory_id: string | null
  email: string
  family_name: string | null
  firezone_avatar_url: string | null
  given_name: string | null
  id: string
  idp_id: string
  inserted_at: string
  issuer: string
  middle_name: string | null
  name: string | null
  nickname: string | null
  picture: string | null
  preferred_username: string | null
  profile: string | null
  synced_at: string | null
}
type ExternalIdentityListResponse = {
  data?: ExternalIdentity[] | undefined
  metadata?: PaginationMetadata | undefined
}
type Client = {
  actor_id: string
  created_at: string
  device_serial: string | null
  device_uuid: string | null
  firebase_installation_id: string | null
  firezone_id: string | null
  hostname: string | null
  id: string
  identifier_for_vendor: string | null
  ipv4: string
  ipv6: string
  last_attested_at: string | null
  last_attested_cert_fingerprint: string | null
  last_attested_cert_serial: string | null
  last_attested_device_serial: string | null
  last_attested_device_uuid: string | null
  last_attested_mdm_device_id: string | null
  last_seen_at: string | null
  last_seen_remote_ip: string | null
  last_seen_remote_ip_location_city: string | null
  last_seen_remote_ip_location_lat: number | null
  last_seen_remote_ip_location_lon: number | null
  last_seen_remote_ip_location_region: string | null
  last_seen_user_agent: string | null
  last_seen_version: string | null
  name: string
  online: boolean
  public_key: string | null
  slug: string | null
  updated_at: string
  verified_at: string | null
}
type ClientResponse = { data?: Client | undefined }
type ClientPut = { name: string; slug?: string | undefined }
type ClientPutRequest = { client: ClientPut }
type Gateway = {
  gateway_token_id: string | null
  id: string
  ipv4: string
  ipv6: string
  last_seen_at: string | null
  last_seen_remote_ip: string | null
  last_seen_remote_ip_location_city: string | null
  last_seen_remote_ip_location_lat: number | null
  last_seen_remote_ip_location_lon: number | null
  last_seen_remote_ip_location_region: string | null
  last_seen_user_agent: string | null
  last_seen_version: string | null
  name: string
  online: boolean
  public_key: string | null
  rotated_at: string | null
}
type GatewayResponse = { data?: Gateway | undefined }
type GatewayUpdate = { name: string }
type GatewayUpdateRequest = { gateway: GatewayUpdate }
type SantaPostureProvider = {
  account_id: string
  api_url: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  name: string
  synced_at: string | null
  type: 'santa'
  updated_at: string
}
type SantaPostureProviderListResponse = {
  data?: SantaPostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type GitHubAuthProvider = {
  account_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  email_verification_method: 'none' | 'proof'
  id: string
  inserted_at: string
  is_default: boolean
  is_disabled: boolean
  issuer: string
  name: string
  portal_session_lifetime_secs: number | null
  updated_at: string
}
type GitHubAuthProviderResponse = { data?: GitHubAuthProvider | undefined }
type PostureField = {
  field: string
  operators: (
    | 'is'
    | 'is_not'
    | 'is_in'
    | 'is_not_in'
    | 'contains'
    | 'does_not_contain'
    | 'starts_with'
    | 'ends_with'
    | 'matches'
    | 'does_not_match'
    | 'eq'
    | 'ne'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'before'
    | 'after'
    | 'within_last'
    | 'not_within_last'
    | 'is_in_cidr'
    | 'is_not_in_cidr'
    | 'contains_any_of'
    | 'contains_all_of'
    | 'is_empty'
    | 'is_not_empty'
    | 'exists'
    | 'does_not_exist'
  )[]
  platforms: ('windows' | 'macos' | 'linux' | 'ios' | 'android')[]
  provider: 'firezone' | 'intune' | 'iru' | 'defender' | 'santa' | 'sentinelone' | 'sophos'
  rows_supported: boolean
  type:
    | 'string'
    | 'enum_string'
    | 'boolean'
    | 'integer'
    | 'float'
    | 'version'
    | 'datetime'
    | 'ip'
    | 'ipv4'
    | 'ipv6'
    | 'string_array'
    | 'json'
}
type PostureFieldListResponse = { data: PostureField[] }
type OIDCAuthProvider = {
  account_id: string
  client_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  discovery_document_uri: string
  email_verification_method: 'none' | 'claim' | 'proof'
  id: string
  inserted_at: string
  is_default: boolean
  is_disabled: boolean
  issuer: string
  name: string
  portal_session_lifetime_secs: number | null
  updated_at: string
}
type OIDCAuthProviderListResponse = {
  data?: OIDCAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type DeletedGatewayTokenResponse = { data?: { id: string } | undefined }
type SentinelOnePostureProvider = {
  account_id: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  management_url: string
  name: string
  synced_at: string | null
  type: 'sentinelone'
  updated_at: string
}
type SentinelOnePostureProviderListResponse = {
  data?: SentinelOnePostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type Actor = {
  allow_email_otp_sign_in: boolean
  created_by_directory_id: string | null
  disabled_by_directory_id: string | null
  email: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  last_seen_at: string | null
  name: string
  type: 'account_admin_user' | 'account_user' | 'api_client' | 'service_account'
  updated_at: string
}
type ActorResponse = { data?: Actor | undefined }
type ActorUpdateRequest = {
  actor: {
    allow_email_otp_sign_in?: boolean | undefined
    email?: (string | null) | undefined
    is_disabled?: boolean | undefined
    name?: string | undefined
    type?: 'account_user' | 'service_account' | undefined
  }
}
type DeletedClientTokensResponse = { data?: { deleted_count: number } | undefined }
type ClientToken = {
  actor_id: string
  expires_at: string
  id: string
  inserted_at: string
  updated_at: string
}
type ClientTokenListResponse = {
  data?: ClientToken[] | undefined
  metadata?: PaginationMetadata | undefined
}
type ClientTokenCreate = { expires_at: string }
type ClientTokenRequest = { client_token: ClientTokenCreate }
type ClientTokenWithSecret = {
  actor_id: string
  expires_at: string
  id: string
  inserted_at: string
  token: string
  updated_at: string
}
type ClientTokenCreateResponse = { data?: ClientTokenWithSecret | undefined }
type DeletedClientTokenResponse = { data?: { id: string } | undefined }
type ClientTokenShowResponse = { data?: ClientToken | undefined }
type EmailOTPAuthProvider = {
  account_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  id: string
  inserted_at: string
  is_disabled: boolean
  issuer: string
  name: string
  portal_session_lifetime_secs: number | null
  updated_at: string
}
type EmailOTPAuthProviderListResponse = {
  data?: EmailOTPAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type EntraAuthProvider = {
  account_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  email_claim: 'email' | 'upn' | 'preferred_username'
  id: string
  inserted_at: string
  is_default: boolean
  is_disabled: boolean
  name: string
  portal_session_lifetime_secs: number | null
  sign_in_tenant_id: string | null
  tenant_ids: string[]
  updated_at: string
}
type EntraAuthProviderListResponse = {
  data?: EntraAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type IruPostureProvider = {
  account_id: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  name: string
  region: 'us' | 'eu'
  subdomain: string
  synced_at: string | null
  type: 'iru'
  updated_at: string
}
type IruPostureProviderResponse = { data?: IruPostureProvider | undefined }
type IruPostureProviderUpdateRequest = {
  iru_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type Site = { id: string; name: string }
type SiteListResponse = { data?: Site[] | undefined; metadata?: PaginationMetadata | undefined }
type SiteCreateRequest = { site: { name: string } }
type SiteResponse = { data?: Site | undefined }
type SiteUpdateRequest = { site: { name?: string | undefined } }
type GoogleAuthProvider = {
  account_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  id: string
  inserted_at: string
  is_default: boolean
  is_disabled: boolean
  issuer: string
  name: string
  portal_session_lifetime_secs: number | null
  updated_at: string
  workspace_domains: string[]
}
type GoogleAuthProviderListResponse = {
  data?: GoogleAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type PolicyCondition = {
  operator:
    | 'is_in'
    | 'is_not_in'
    | 'is_in_cidr'
    | 'is_not_in_cidr'
    | 'is_in_day_of_week_time_ranges'
    | 'is'
  property:
    | 'remote_ip_location_region'
    | 'remote_ip'
    | 'auth_provider_id'
    | 'current_utc_datetime'
    | 'client_verified'
  values: string[]
}
type PolicyPostureAnd = { and: PolicyPostureNode[] }
type PolicyPostureOr = { or: PolicyPostureNode[] }
type PolicyPostureNot = { not: PolicyPostureNode }
type PolicyPostureLeaf =
  | {
      field:
        | 'defender.enrolled'
        | 'defender.entra_joined'
        | 'defender.is_excluded'
        | 'defender.is_potential_duplication'
        | 'defender.os_up_to_date'
        | 'intune.attestation_bit_locker_enabled'
        | 'intune.attestation_boot_debugging'
        | 'intune.attestation_code_integrity'
        | 'intune.attestation_data_execution_policy_enabled'
        | 'intune.attestation_early_launch_anti_malware_driver_protection'
        | 'intune.attestation_operating_system_kernel_debugging'
        | 'intune.attestation_safe_mode'
        | 'intune.attestation_secure_boot'
        | 'intune.attestation_supported'
        | 'intune.attestation_test_signing'
        | 'intune.attestation_virtual_secure_mode'
        | 'intune.attestation_windows_pe'
        | 'intune.config_manager_compliance_policy'
        | 'intune.config_manager_device_configuration'
        | 'intune.config_manager_inventory'
        | 'intune.config_manager_modern_apps'
        | 'intune.config_manager_resource_access'
        | 'intune.config_manager_windows_update_for_business'
        | 'intune.eas_activated'
        | 'intune.enrolled'
        | 'intune.entra_registered'
        | 'intune.is_encrypted'
        | 'intune.is_supervised'
        | 'intune.jail_broken'
        | 'intune.os_up_to_date'
        | 'intune.require_user_enrollment_approval'
        | 'iru.activation_lock_allowed_while_supervised'
        | 'iru.activation_lock_bypass_code_failed'
        | 'iru.activation_lock_supported'
        | 'iru.agent_installed'
        | 'iru.any_signed_os'
        | 'iru.apple_silicon'
        | 'iru.bootstrap_token_auth'
        | 'iru.bootstrap_token_escrowed'
        | 'iru.data_roaming'
        | 'iru.device_activation_lock_enabled'
        | 'iru.enrolled'
        | 'iru.filevault_enabled'
        | 'iru.filevault_key_escrowed'
        | 'iru.filevault_regeneration_needed'
        | 'iru.firewall_allow_signed_applications'
        | 'iru.firewall_block_all_incoming'
        | 'iru.firewall_enabled'
        | 'iru.firewall_logging'
        | 'iru.firewall_stealth_mode'
        | 'iru.firewall_unloading'
        | 'iru.gatekeeper_enabled'
        | 'iru.gatekeeper_trusted_developers'
        | 'iru.hotspot'
        | 'iru.is_missing'
        | 'iru.is_removed'
        | 'iru.kext_requires_bootstrap_token'
        | 'iru.mdm_enabled'
        | 'iru.mdm_manages_kext'
        | 'iru.os_up_to_date'
        | 'iru.shared_ipad'
        | 'iru.sip_enabled'
        | 'iru.software_update_requires_bootstrap_token'
        | 'iru.ssv_enabled'
        | 'iru.user_activation_lock_enabled'
        | 'iru.user_is_archived'
        | 'iru.user_manages_kext'
        | 'santa.enrolled'
        | 'santa.os_up_to_date'
        | 'sentinelone.allow_remote_shell'
        | 'sentinelone.encrypted_applications'
        | 'sentinelone.enrolled'
        | 'sentinelone.firewall_enabled'
        | 'sentinelone.has_containerized_workload'
        | 'sentinelone.in_remote_shell_session'
        | 'sentinelone.infected'
        | 'sentinelone.is_active'
        | 'sentinelone.is_ad_connector'
        | 'sentinelone.is_decommissioned'
        | 'sentinelone.is_hyper_automate'
        | 'sentinelone.is_pending_uninstall'
        | 'sentinelone.is_uninstalled'
        | 'sentinelone.is_up_to_date'
        | 'sentinelone.location_enabled'
        | 'sentinelone.network_quarantine_enabled'
        | 'sentinelone.os_up_to_date'
        | 'sentinelone.proxy_console'
        | 'sentinelone.proxy_deep_visibility'
        | 'sentinelone.proxy_pac_file_usage'
        | 'sentinelone.threat_reboot_required'
        | 'sophos.cloned'
        | 'sophos.enrolled'
        | 'sophos.isolation_admin_isolated'
        | 'sophos.isolation_self_isolated'
        | 'sophos.online'
        | 'sophos.os_is_server'
        | 'sophos.os_up_to_date'
        | 'sophos.tamper_protection_enabled'
        | 'sophos.tamper_protection_supported'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.enrolled'
        | 'defender.entra_joined'
        | 'defender.is_excluded'
        | 'defender.is_potential_duplication'
        | 'defender.os_up_to_date'
        | 'intune.attestation_bit_locker_enabled'
        | 'intune.attestation_boot_debugging'
        | 'intune.attestation_code_integrity'
        | 'intune.attestation_data_execution_policy_enabled'
        | 'intune.attestation_early_launch_anti_malware_driver_protection'
        | 'intune.attestation_operating_system_kernel_debugging'
        | 'intune.attestation_safe_mode'
        | 'intune.attestation_secure_boot'
        | 'intune.attestation_supported'
        | 'intune.attestation_test_signing'
        | 'intune.attestation_virtual_secure_mode'
        | 'intune.attestation_windows_pe'
        | 'intune.config_manager_compliance_policy'
        | 'intune.config_manager_device_configuration'
        | 'intune.config_manager_inventory'
        | 'intune.config_manager_modern_apps'
        | 'intune.config_manager_resource_access'
        | 'intune.config_manager_windows_update_for_business'
        | 'intune.eas_activated'
        | 'intune.enrolled'
        | 'intune.entra_registered'
        | 'intune.is_encrypted'
        | 'intune.is_supervised'
        | 'intune.jail_broken'
        | 'intune.os_up_to_date'
        | 'intune.require_user_enrollment_approval'
        | 'iru.activation_lock_allowed_while_supervised'
        | 'iru.activation_lock_bypass_code_failed'
        | 'iru.activation_lock_supported'
        | 'iru.agent_installed'
        | 'iru.any_signed_os'
        | 'iru.apple_silicon'
        | 'iru.bootstrap_token_auth'
        | 'iru.bootstrap_token_escrowed'
        | 'iru.data_roaming'
        | 'iru.device_activation_lock_enabled'
        | 'iru.enrolled'
        | 'iru.filevault_enabled'
        | 'iru.filevault_key_escrowed'
        | 'iru.filevault_regeneration_needed'
        | 'iru.firewall_allow_signed_applications'
        | 'iru.firewall_block_all_incoming'
        | 'iru.firewall_enabled'
        | 'iru.firewall_logging'
        | 'iru.firewall_stealth_mode'
        | 'iru.firewall_unloading'
        | 'iru.gatekeeper_enabled'
        | 'iru.gatekeeper_trusted_developers'
        | 'iru.hotspot'
        | 'iru.is_missing'
        | 'iru.is_removed'
        | 'iru.kext_requires_bootstrap_token'
        | 'iru.mdm_enabled'
        | 'iru.mdm_manages_kext'
        | 'iru.os_up_to_date'
        | 'iru.shared_ipad'
        | 'iru.sip_enabled'
        | 'iru.software_update_requires_bootstrap_token'
        | 'iru.ssv_enabled'
        | 'iru.user_activation_lock_enabled'
        | 'iru.user_is_archived'
        | 'iru.user_manages_kext'
        | 'santa.enrolled'
        | 'santa.os_up_to_date'
        | 'sentinelone.allow_remote_shell'
        | 'sentinelone.encrypted_applications'
        | 'sentinelone.enrolled'
        | 'sentinelone.firewall_enabled'
        | 'sentinelone.has_containerized_workload'
        | 'sentinelone.in_remote_shell_session'
        | 'sentinelone.infected'
        | 'sentinelone.is_active'
        | 'sentinelone.is_ad_connector'
        | 'sentinelone.is_decommissioned'
        | 'sentinelone.is_hyper_automate'
        | 'sentinelone.is_pending_uninstall'
        | 'sentinelone.is_uninstalled'
        | 'sentinelone.is_up_to_date'
        | 'sentinelone.location_enabled'
        | 'sentinelone.network_quarantine_enabled'
        | 'sentinelone.os_up_to_date'
        | 'sentinelone.proxy_console'
        | 'sentinelone.proxy_deep_visibility'
        | 'sentinelone.proxy_pac_file_usage'
        | 'sentinelone.threat_reboot_required'
        | 'sophos.cloned'
        | 'sophos.enrolled'
        | 'sophos.isolation_admin_isolated'
        | 'sophos.isolation_self_isolated'
        | 'sophos.online'
        | 'sophos.os_is_server'
        | 'sophos.os_up_to_date'
        | 'sophos.tamper_protection_enabled'
        | 'sophos.tamper_protection_supported'
      op: 'is'
      rows?: 'any' | 'all' | undefined
      value: boolean
    }
  | {
      field:
        | 'defender.first_seen_at'
        | 'defender.last_seen_at'
        | 'intune.android_security_patch_level'
        | 'intune.attestation_issued_at'
        | 'intune.compliance_grace_period_expiration_at'
        | 'intune.eas_activated_at'
        | 'intune.enrolled_at'
        | 'intune.exchange_last_successful_sync_at'
        | 'intune.last_sync_at'
        | 'intune.management_certificate_expires_at'
        | 'iru.activation_lock_collected_at'
        | 'iru.filevault_collected_at'
        | 'iru.filevault_key_rotation_scheduled_at'
        | 'iru.firewall_collected_at'
        | 'iru.first_enrolled_at'
        | 'iru.gatekeeper_collected_at'
        | 'iru.inventory_collected_at'
        | 'iru.last_check_in_at'
        | 'iru.last_enrolled_at'
        | 'iru.startup_settings_collected_at'
        | 'santa.first_seen_at'
        | 'santa.last_preflight_at'
        | 'santa.last_sync_at'
        | 'santa.rule_sync_at'
        | 'santa.temporary_admin_mode_ends_at'
        | 'santa.temporary_monitor_mode_ends_at'
        | 'sentinelone.first_full_mode_at'
        | 'sentinelone.full_disk_scan_updated_at'
        | 'sentinelone.last_active_at'
        | 'sentinelone.last_successful_scan_at'
        | 'sentinelone.operational_state_expires_at'
        | 'sentinelone.os_start_time'
        | 'sentinelone.registered_at'
        | 'sentinelone.remote_profiling_state_expires_at'
        | 'sentinelone.scan_aborted_at'
        | 'sentinelone.scan_finished_at'
        | 'sentinelone.scan_started_at'
        | 'sophos.last_agent_update_at'
        | 'sophos.last_os_update_at'
        | 'sophos.last_seen_at'
      op: 'within_last' | 'not_within_last'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field:
        | 'defender.first_seen_at'
        | 'defender.last_seen_at'
        | 'intune.android_security_patch_level'
        | 'intune.attestation_issued_at'
        | 'intune.compliance_grace_period_expiration_at'
        | 'intune.eas_activated_at'
        | 'intune.enrolled_at'
        | 'intune.exchange_last_successful_sync_at'
        | 'intune.last_sync_at'
        | 'intune.management_certificate_expires_at'
        | 'iru.activation_lock_collected_at'
        | 'iru.filevault_collected_at'
        | 'iru.filevault_key_rotation_scheduled_at'
        | 'iru.firewall_collected_at'
        | 'iru.first_enrolled_at'
        | 'iru.gatekeeper_collected_at'
        | 'iru.inventory_collected_at'
        | 'iru.last_check_in_at'
        | 'iru.last_enrolled_at'
        | 'iru.startup_settings_collected_at'
        | 'santa.first_seen_at'
        | 'santa.last_preflight_at'
        | 'santa.last_sync_at'
        | 'santa.rule_sync_at'
        | 'santa.temporary_admin_mode_ends_at'
        | 'santa.temporary_monitor_mode_ends_at'
        | 'sentinelone.first_full_mode_at'
        | 'sentinelone.full_disk_scan_updated_at'
        | 'sentinelone.last_active_at'
        | 'sentinelone.last_successful_scan_at'
        | 'sentinelone.operational_state_expires_at'
        | 'sentinelone.os_start_time'
        | 'sentinelone.registered_at'
        | 'sentinelone.remote_profiling_state_expires_at'
        | 'sentinelone.scan_aborted_at'
        | 'sentinelone.scan_finished_at'
        | 'sentinelone.scan_started_at'
        | 'sophos.last_agent_update_at'
        | 'sophos.last_os_update_at'
        | 'sophos.last_seen_at'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.first_seen_at'
        | 'defender.last_seen_at'
        | 'intune.android_security_patch_level'
        | 'intune.attestation_issued_at'
        | 'intune.compliance_grace_period_expiration_at'
        | 'intune.eas_activated_at'
        | 'intune.enrolled_at'
        | 'intune.exchange_last_successful_sync_at'
        | 'intune.last_sync_at'
        | 'intune.management_certificate_expires_at'
        | 'iru.activation_lock_collected_at'
        | 'iru.filevault_collected_at'
        | 'iru.filevault_key_rotation_scheduled_at'
        | 'iru.firewall_collected_at'
        | 'iru.first_enrolled_at'
        | 'iru.gatekeeper_collected_at'
        | 'iru.inventory_collected_at'
        | 'iru.last_check_in_at'
        | 'iru.last_enrolled_at'
        | 'iru.startup_settings_collected_at'
        | 'santa.first_seen_at'
        | 'santa.last_preflight_at'
        | 'santa.last_sync_at'
        | 'santa.rule_sync_at'
        | 'santa.temporary_admin_mode_ends_at'
        | 'santa.temporary_monitor_mode_ends_at'
        | 'sentinelone.first_full_mode_at'
        | 'sentinelone.full_disk_scan_updated_at'
        | 'sentinelone.last_active_at'
        | 'sentinelone.last_successful_scan_at'
        | 'sentinelone.operational_state_expires_at'
        | 'sentinelone.os_start_time'
        | 'sentinelone.registered_at'
        | 'sentinelone.remote_profiling_state_expires_at'
        | 'sentinelone.scan_aborted_at'
        | 'sentinelone.scan_finished_at'
        | 'sentinelone.scan_started_at'
        | 'sophos.last_agent_update_at'
        | 'sophos.last_os_update_at'
        | 'sophos.last_seen_at'
      op: 'before' | 'after'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | { field: 'firezone.last_attested_at'; op: 'within_last' | 'not_within_last'; value: string }
  | {
      field: 'firezone.last_attested_at'
      op: 'exists' | 'does_not_exist'
      value?: null | undefined
    }
  | { field: 'firezone.last_attested_at'; op: 'before' | 'after'; value: string }
  | {
      field:
        | 'defender.device_value'
        | 'defender.exclusion_reason'
        | 'defender.exposure_level'
        | 'defender.health_status'
        | 'defender.managed_by'
        | 'defender.managed_by_status'
        | 'defender.onboarding_status'
        | 'defender.os_architecture'
        | 'defender.os_platform'
        | 'defender.risk_score'
        | 'intune.attestation_status'
        | 'intune.compliance_state'
        | 'intune.device_enrollment_type'
        | 'intune.device_registration_state'
        | 'intune.exchange_access_state'
        | 'intune.exchange_access_state_reason'
        | 'intune.managed_device_owner_type'
        | 'intune.management_agent'
        | 'intune.management_state'
        | 'intune.partner_reported_threat_state'
        | 'iru.cellular_technology'
        | 'iru.device_family'
        | 'iru.external_boot_level'
        | 'iru.filevault_key_type'
        | 'iru.firewall_logging_option'
        | 'iru.lost_mode_status'
        | 'iru.platform'
        | 'iru.secure_boot_level'
        | 'santa.configured_client_mode'
        | 'santa.last_seen_client_mode'
        | 'santa.os_type'
        | 'sentinelone.apps_vulnerability_status'
        | 'sentinelone.console_migration_status'
        | 'sentinelone.detection_state'
        | 'sentinelone.installer_type'
        | 'sentinelone.location_type'
        | 'sentinelone.machine_type'
        | 'sentinelone.mitigation_mode'
        | 'sentinelone.mitigation_mode_suspicious'
        | 'sentinelone.network_status'
        | 'sentinelone.operational_state'
        | 'sentinelone.os_arch'
        | 'sentinelone.os_type'
        | 'sentinelone.proxy_method'
        | 'sentinelone.ranger_status'
        | 'sentinelone.remote_profiling_state'
        | 'sentinelone.scan_status'
        | 'sophos.cloud_provider'
        | 'sophos.encryption_overall_status'
        | 'sophos.health_overall'
        | 'sophos.health_services_status'
        | 'sophos.health_threats_status'
        | 'sophos.isolation_status'
        | 'sophos.lockdown_status'
        | 'sophos.os_platform'
        | 'sophos.type'
      op: 'is_in' | 'is_not_in'
      rows?: 'any' | 'all' | undefined
      value: string[]
    }
  | {
      field:
        | 'defender.device_value'
        | 'defender.exclusion_reason'
        | 'defender.exposure_level'
        | 'defender.health_status'
        | 'defender.managed_by'
        | 'defender.managed_by_status'
        | 'defender.onboarding_status'
        | 'defender.os_architecture'
        | 'defender.os_platform'
        | 'defender.risk_score'
        | 'intune.attestation_status'
        | 'intune.compliance_state'
        | 'intune.device_enrollment_type'
        | 'intune.device_registration_state'
        | 'intune.exchange_access_state'
        | 'intune.exchange_access_state_reason'
        | 'intune.managed_device_owner_type'
        | 'intune.management_agent'
        | 'intune.management_state'
        | 'intune.partner_reported_threat_state'
        | 'iru.cellular_technology'
        | 'iru.device_family'
        | 'iru.external_boot_level'
        | 'iru.filevault_key_type'
        | 'iru.firewall_logging_option'
        | 'iru.lost_mode_status'
        | 'iru.platform'
        | 'iru.secure_boot_level'
        | 'santa.configured_client_mode'
        | 'santa.last_seen_client_mode'
        | 'santa.os_type'
        | 'sentinelone.apps_vulnerability_status'
        | 'sentinelone.console_migration_status'
        | 'sentinelone.detection_state'
        | 'sentinelone.installer_type'
        | 'sentinelone.location_type'
        | 'sentinelone.machine_type'
        | 'sentinelone.mitigation_mode'
        | 'sentinelone.mitigation_mode_suspicious'
        | 'sentinelone.network_status'
        | 'sentinelone.operational_state'
        | 'sentinelone.os_arch'
        | 'sentinelone.os_type'
        | 'sentinelone.proxy_method'
        | 'sentinelone.ranger_status'
        | 'sentinelone.remote_profiling_state'
        | 'sentinelone.scan_status'
        | 'sophos.cloud_provider'
        | 'sophos.encryption_overall_status'
        | 'sophos.health_overall'
        | 'sophos.health_services_status'
        | 'sophos.health_threats_status'
        | 'sophos.isolation_status'
        | 'sophos.lockdown_status'
        | 'sophos.os_platform'
        | 'sophos.type'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.device_value'
        | 'defender.exclusion_reason'
        | 'defender.exposure_level'
        | 'defender.health_status'
        | 'defender.managed_by'
        | 'defender.managed_by_status'
        | 'defender.onboarding_status'
        | 'defender.os_architecture'
        | 'defender.os_platform'
        | 'defender.risk_score'
        | 'intune.attestation_status'
        | 'intune.compliance_state'
        | 'intune.device_enrollment_type'
        | 'intune.device_registration_state'
        | 'intune.exchange_access_state'
        | 'intune.exchange_access_state_reason'
        | 'intune.managed_device_owner_type'
        | 'intune.management_agent'
        | 'intune.management_state'
        | 'intune.partner_reported_threat_state'
        | 'iru.cellular_technology'
        | 'iru.device_family'
        | 'iru.external_boot_level'
        | 'iru.filevault_key_type'
        | 'iru.firewall_logging_option'
        | 'iru.lost_mode_status'
        | 'iru.platform'
        | 'iru.secure_boot_level'
        | 'santa.configured_client_mode'
        | 'santa.last_seen_client_mode'
        | 'santa.os_type'
        | 'sentinelone.apps_vulnerability_status'
        | 'sentinelone.console_migration_status'
        | 'sentinelone.detection_state'
        | 'sentinelone.installer_type'
        | 'sentinelone.location_type'
        | 'sentinelone.machine_type'
        | 'sentinelone.mitigation_mode'
        | 'sentinelone.mitigation_mode_suspicious'
        | 'sentinelone.network_status'
        | 'sentinelone.operational_state'
        | 'sentinelone.os_arch'
        | 'sentinelone.os_type'
        | 'sentinelone.proxy_method'
        | 'sentinelone.ranger_status'
        | 'sentinelone.remote_profiling_state'
        | 'sentinelone.scan_status'
        | 'sophos.cloud_provider'
        | 'sophos.encryption_overall_status'
        | 'sophos.health_overall'
        | 'sophos.health_services_status'
        | 'sophos.health_threats_status'
        | 'sophos.isolation_status'
        | 'sophos.lockdown_status'
        | 'sophos.os_platform'
        | 'sophos.type'
      op: 'matches' | 'does_not_match'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field:
        | 'defender.device_value'
        | 'defender.exclusion_reason'
        | 'defender.exposure_level'
        | 'defender.health_status'
        | 'defender.managed_by'
        | 'defender.managed_by_status'
        | 'defender.onboarding_status'
        | 'defender.os_architecture'
        | 'defender.os_platform'
        | 'defender.risk_score'
        | 'intune.attestation_status'
        | 'intune.compliance_state'
        | 'intune.device_enrollment_type'
        | 'intune.device_registration_state'
        | 'intune.exchange_access_state'
        | 'intune.exchange_access_state_reason'
        | 'intune.managed_device_owner_type'
        | 'intune.management_agent'
        | 'intune.management_state'
        | 'intune.partner_reported_threat_state'
        | 'iru.cellular_technology'
        | 'iru.device_family'
        | 'iru.external_boot_level'
        | 'iru.filevault_key_type'
        | 'iru.firewall_logging_option'
        | 'iru.lost_mode_status'
        | 'iru.platform'
        | 'iru.secure_boot_level'
        | 'santa.configured_client_mode'
        | 'santa.last_seen_client_mode'
        | 'santa.os_type'
        | 'sentinelone.apps_vulnerability_status'
        | 'sentinelone.console_migration_status'
        | 'sentinelone.detection_state'
        | 'sentinelone.installer_type'
        | 'sentinelone.location_type'
        | 'sentinelone.machine_type'
        | 'sentinelone.mitigation_mode'
        | 'sentinelone.mitigation_mode_suspicious'
        | 'sentinelone.network_status'
        | 'sentinelone.operational_state'
        | 'sentinelone.os_arch'
        | 'sentinelone.os_type'
        | 'sentinelone.proxy_method'
        | 'sentinelone.ranger_status'
        | 'sentinelone.remote_profiling_state'
        | 'sentinelone.scan_status'
        | 'sophos.cloud_provider'
        | 'sophos.encryption_overall_status'
        | 'sophos.health_overall'
        | 'sophos.health_services_status'
        | 'sophos.health_threats_status'
        | 'sophos.isolation_status'
        | 'sophos.lockdown_status'
        | 'sophos.os_platform'
        | 'sophos.type'
      op: 'is' | 'is_not' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field: 'iru.device_capacity_gb'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field: 'iru.device_capacity_gb'
      op: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte'
      rows?: 'any' | 'all' | undefined
      value: number
    }
  | {
      field:
        | 'defender.os_build'
        | 'defender.rbac_group_id'
        | 'intune.attestation_reset_count'
        | 'intune.attestation_restart_count'
        | 'intune.free_storage_space_bytes'
        | 'intune.physical_memory_bytes'
        | 'intune.total_storage_space_bytes'
        | 'santa.sip_status'
        | 'sentinelone.active_threats'
        | 'sentinelone.core_count'
        | 'sentinelone.cpu_count'
        | 'sentinelone.protected_containers_count'
        | 'sentinelone.protected_pods_count'
        | 'sentinelone.protected_tasks_count'
        | 'sentinelone.total_memory'
        | 'sophos.os_build'
        | 'sophos.os_major_version'
        | 'sophos.os_minor_version'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.os_build'
        | 'defender.rbac_group_id'
        | 'intune.attestation_reset_count'
        | 'intune.attestation_restart_count'
        | 'intune.free_storage_space_bytes'
        | 'intune.physical_memory_bytes'
        | 'intune.total_storage_space_bytes'
        | 'santa.sip_status'
        | 'sentinelone.active_threats'
        | 'sentinelone.core_count'
        | 'sentinelone.cpu_count'
        | 'sentinelone.protected_containers_count'
        | 'sentinelone.protected_pods_count'
        | 'sentinelone.protected_tasks_count'
        | 'sentinelone.total_memory'
        | 'sophos.os_build'
        | 'sophos.os_major_version'
        | 'sophos.os_minor_version'
      op: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte'
      rows?: 'any' | 'all' | undefined
      value: number
    }
  | {
      field:
        | 'defender.last_external_ip_address'
        | 'defender.last_ip_address'
        | 'santa.last_preflight_ip'
        | 'sentinelone.external_ip'
        | 'sentinelone.last_ip_to_management'
      op: 'is_in_cidr' | 'is_not_in_cidr'
      rows?: 'any' | 'all' | undefined
      value: string[]
    }
  | {
      field:
        | 'defender.last_external_ip_address'
        | 'defender.last_ip_address'
        | 'santa.last_preflight_ip'
        | 'sentinelone.external_ip'
        | 'sentinelone.last_ip_to_management'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | { field: 'firezone.ipv4'; op: 'is_in_cidr' | 'is_not_in_cidr'; value: string[] }
  | { field: 'firezone.ipv4'; op: 'exists' | 'does_not_exist'; value?: null | undefined }
  | { field: 'firezone.ipv6'; op: 'is_in_cidr' | 'is_not_in_cidr'; value: string[] }
  | { field: 'firezone.ipv6'; op: 'exists' | 'does_not_exist'; value?: null | undefined }
  | {
      field:
        | 'defender.ip_addresses'
        | 'sentinelone.cloud_providers'
        | 'sentinelone.locations'
        | 'sentinelone.network_interfaces'
        | 'sentinelone.tags'
        | 'sophos.assigned_products'
        | 'sophos.device_software'
        | 'sophos.encryption_volumes'
        | 'sophos.group_hierarchy'
        | 'sophos.health_service_details'
        | 'sophos.packages'
        | 'sophos.tags'
      op: 'is_empty' | 'is_not_empty' | 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.computer_dns_name'
        | 'defender.defender_id'
        | 'defender.entra_device_id'
        | 'defender.os_processor'
        | 'defender.rbac_group_name'
        | 'defender.version'
        | 'defender.vm_cloud_provider'
        | 'defender.vm_id'
        | 'defender.vm_resource_id'
        | 'defender.vm_subscription_id'
        | 'intune.attestation_boot_revision_list_info'
        | 'intune.attestation_code_integrity_policy'
        | 'intune.attestation_health_status_mismatch_info'
        | 'intune.attestation_identity_key'
        | 'intune.attestation_operating_system_rev_list_info'
        | 'intune.attestation_pcr0'
        | 'intune.attestation_pcr_hash_algorithm'
        | 'intune.attestation_secure_boot_config_policy_fingerprint'
        | 'intune.device_category_display_name'
        | 'intune.device_name'
        | 'intune.eas_device_id'
        | 'intune.email_address'
        | 'intune.enrollment_profile_name'
        | 'intune.entra_device_id'
        | 'intune.ethernet_mac_address'
        | 'intune.iccid'
        | 'intune.imei'
        | 'intune.intune_id'
        | 'intune.managed_device_name'
        | 'intune.manufacturer'
        | 'intune.meid'
        | 'intune.model'
        | 'intune.notes'
        | 'intune.operating_system'
        | 'intune.phone_number'
        | 'intune.serial_number'
        | 'intune.subscriber_carrier'
        | 'intune.udid'
        | 'intune.user_display_name'
        | 'intune.user_id'
        | 'intune.user_principal_name'
        | 'intune.wifi_mac_address'
        | 'iru.asset_tag'
        | 'iru.blueprint_id'
        | 'iru.blueprint_name'
        | 'iru.device_name'
        | 'iru.host_name'
        | 'iru.iru_id'
        | 'iru.local_hostname'
        | 'iru.model'
        | 'iru.model_identifier'
        | 'iru.model_name'
        | 'iru.os_build'
        | 'iru.os_name'
        | 'iru.serial_number'
        | 'iru.supplemental_build_version'
        | 'iru.user_email'
        | 'iru.user_id'
        | 'iru.user_name'
        | 'santa.hostname'
        | 'santa.machine_model'
        | 'santa.os_build'
        | 'santa.primary_user'
        | 'santa.santa_id'
        | 'santa.serial_number'
        | 'santa.temporary_admin_mode_user'
        | 'sentinelone.account_name'
        | 'sentinelone.ad_computer_distinguished_name'
        | 'sentinelone.ad_last_user_distinguished_name'
        | 'sentinelone.ad_mail'
        | 'sentinelone.ad_user_principal_name'
        | 'sentinelone.computer_name'
        | 'sentinelone.cpu_id'
        | 'sentinelone.domain'
        | 'sentinelone.external_id'
        | 'sentinelone.group_id'
        | 'sentinelone.group_ip'
        | 'sentinelone.group_name'
        | 'sentinelone.last_logged_in_user_name'
        | 'sentinelone.machine_sid'
        | 'sentinelone.model_name'
        | 'sentinelone.os_name'
        | 'sentinelone.os_username'
        | 'sentinelone.sentinelone_account_id'
        | 'sentinelone.sentinelone_id'
        | 'sentinelone.serial_number'
        | 'sentinelone.site_id'
        | 'sentinelone.site_name'
        | 'sentinelone.storage_name'
        | 'sentinelone.storage_type'
        | 'sentinelone.uuid'
        | 'sophos.associated_person_id'
        | 'sophos.associated_person_name'
        | 'sophos.associated_person_via_login'
        | 'sophos.cloud_instance_id'
        | 'sophos.group_id'
        | 'sophos.group_name'
        | 'sophos.hostname'
        | 'sophos.os_name'
        | 'sophos.serial_number'
        | 'sophos.sophos_id'
      op: 'is_in' | 'is_not_in'
      rows?: 'any' | 'all' | undefined
      value: string[]
    }
  | {
      field:
        | 'defender.computer_dns_name'
        | 'defender.defender_id'
        | 'defender.entra_device_id'
        | 'defender.os_processor'
        | 'defender.rbac_group_name'
        | 'defender.version'
        | 'defender.vm_cloud_provider'
        | 'defender.vm_id'
        | 'defender.vm_resource_id'
        | 'defender.vm_subscription_id'
        | 'intune.attestation_boot_revision_list_info'
        | 'intune.attestation_code_integrity_policy'
        | 'intune.attestation_health_status_mismatch_info'
        | 'intune.attestation_identity_key'
        | 'intune.attestation_operating_system_rev_list_info'
        | 'intune.attestation_pcr0'
        | 'intune.attestation_pcr_hash_algorithm'
        | 'intune.attestation_secure_boot_config_policy_fingerprint'
        | 'intune.device_category_display_name'
        | 'intune.device_name'
        | 'intune.eas_device_id'
        | 'intune.email_address'
        | 'intune.enrollment_profile_name'
        | 'intune.entra_device_id'
        | 'intune.ethernet_mac_address'
        | 'intune.iccid'
        | 'intune.imei'
        | 'intune.intune_id'
        | 'intune.managed_device_name'
        | 'intune.manufacturer'
        | 'intune.meid'
        | 'intune.model'
        | 'intune.notes'
        | 'intune.operating_system'
        | 'intune.phone_number'
        | 'intune.serial_number'
        | 'intune.subscriber_carrier'
        | 'intune.udid'
        | 'intune.user_display_name'
        | 'intune.user_id'
        | 'intune.user_principal_name'
        | 'intune.wifi_mac_address'
        | 'iru.asset_tag'
        | 'iru.blueprint_id'
        | 'iru.blueprint_name'
        | 'iru.device_name'
        | 'iru.host_name'
        | 'iru.iru_id'
        | 'iru.local_hostname'
        | 'iru.model'
        | 'iru.model_identifier'
        | 'iru.model_name'
        | 'iru.os_build'
        | 'iru.os_name'
        | 'iru.serial_number'
        | 'iru.supplemental_build_version'
        | 'iru.user_email'
        | 'iru.user_id'
        | 'iru.user_name'
        | 'santa.hostname'
        | 'santa.machine_model'
        | 'santa.os_build'
        | 'santa.primary_user'
        | 'santa.santa_id'
        | 'santa.serial_number'
        | 'santa.temporary_admin_mode_user'
        | 'sentinelone.account_name'
        | 'sentinelone.ad_computer_distinguished_name'
        | 'sentinelone.ad_last_user_distinguished_name'
        | 'sentinelone.ad_mail'
        | 'sentinelone.ad_user_principal_name'
        | 'sentinelone.computer_name'
        | 'sentinelone.cpu_id'
        | 'sentinelone.domain'
        | 'sentinelone.external_id'
        | 'sentinelone.group_id'
        | 'sentinelone.group_ip'
        | 'sentinelone.group_name'
        | 'sentinelone.last_logged_in_user_name'
        | 'sentinelone.machine_sid'
        | 'sentinelone.model_name'
        | 'sentinelone.os_name'
        | 'sentinelone.os_username'
        | 'sentinelone.sentinelone_account_id'
        | 'sentinelone.sentinelone_id'
        | 'sentinelone.serial_number'
        | 'sentinelone.site_id'
        | 'sentinelone.site_name'
        | 'sentinelone.storage_name'
        | 'sentinelone.storage_type'
        | 'sentinelone.uuid'
        | 'sophos.associated_person_id'
        | 'sophos.associated_person_name'
        | 'sophos.associated_person_via_login'
        | 'sophos.cloud_instance_id'
        | 'sophos.group_id'
        | 'sophos.group_name'
        | 'sophos.hostname'
        | 'sophos.os_name'
        | 'sophos.serial_number'
        | 'sophos.sophos_id'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.computer_dns_name'
        | 'defender.defender_id'
        | 'defender.entra_device_id'
        | 'defender.os_processor'
        | 'defender.rbac_group_name'
        | 'defender.version'
        | 'defender.vm_cloud_provider'
        | 'defender.vm_id'
        | 'defender.vm_resource_id'
        | 'defender.vm_subscription_id'
        | 'intune.attestation_boot_revision_list_info'
        | 'intune.attestation_code_integrity_policy'
        | 'intune.attestation_health_status_mismatch_info'
        | 'intune.attestation_identity_key'
        | 'intune.attestation_operating_system_rev_list_info'
        | 'intune.attestation_pcr0'
        | 'intune.attestation_pcr_hash_algorithm'
        | 'intune.attestation_secure_boot_config_policy_fingerprint'
        | 'intune.device_category_display_name'
        | 'intune.device_name'
        | 'intune.eas_device_id'
        | 'intune.email_address'
        | 'intune.enrollment_profile_name'
        | 'intune.entra_device_id'
        | 'intune.ethernet_mac_address'
        | 'intune.iccid'
        | 'intune.imei'
        | 'intune.intune_id'
        | 'intune.managed_device_name'
        | 'intune.manufacturer'
        | 'intune.meid'
        | 'intune.model'
        | 'intune.notes'
        | 'intune.operating_system'
        | 'intune.phone_number'
        | 'intune.serial_number'
        | 'intune.subscriber_carrier'
        | 'intune.udid'
        | 'intune.user_display_name'
        | 'intune.user_id'
        | 'intune.user_principal_name'
        | 'intune.wifi_mac_address'
        | 'iru.asset_tag'
        | 'iru.blueprint_id'
        | 'iru.blueprint_name'
        | 'iru.device_name'
        | 'iru.host_name'
        | 'iru.iru_id'
        | 'iru.local_hostname'
        | 'iru.model'
        | 'iru.model_identifier'
        | 'iru.model_name'
        | 'iru.os_build'
        | 'iru.os_name'
        | 'iru.serial_number'
        | 'iru.supplemental_build_version'
        | 'iru.user_email'
        | 'iru.user_id'
        | 'iru.user_name'
        | 'santa.hostname'
        | 'santa.machine_model'
        | 'santa.os_build'
        | 'santa.primary_user'
        | 'santa.santa_id'
        | 'santa.serial_number'
        | 'santa.temporary_admin_mode_user'
        | 'sentinelone.account_name'
        | 'sentinelone.ad_computer_distinguished_name'
        | 'sentinelone.ad_last_user_distinguished_name'
        | 'sentinelone.ad_mail'
        | 'sentinelone.ad_user_principal_name'
        | 'sentinelone.computer_name'
        | 'sentinelone.cpu_id'
        | 'sentinelone.domain'
        | 'sentinelone.external_id'
        | 'sentinelone.group_id'
        | 'sentinelone.group_ip'
        | 'sentinelone.group_name'
        | 'sentinelone.last_logged_in_user_name'
        | 'sentinelone.machine_sid'
        | 'sentinelone.model_name'
        | 'sentinelone.os_name'
        | 'sentinelone.os_username'
        | 'sentinelone.sentinelone_account_id'
        | 'sentinelone.sentinelone_id'
        | 'sentinelone.serial_number'
        | 'sentinelone.site_id'
        | 'sentinelone.site_name'
        | 'sentinelone.storage_name'
        | 'sentinelone.storage_type'
        | 'sentinelone.uuid'
        | 'sophos.associated_person_id'
        | 'sophos.associated_person_name'
        | 'sophos.associated_person_via_login'
        | 'sophos.cloud_instance_id'
        | 'sophos.group_id'
        | 'sophos.group_name'
        | 'sophos.hostname'
        | 'sophos.os_name'
        | 'sophos.serial_number'
        | 'sophos.sophos_id'
      op: 'matches' | 'does_not_match'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field:
        | 'defender.computer_dns_name'
        | 'defender.defender_id'
        | 'defender.entra_device_id'
        | 'defender.os_processor'
        | 'defender.rbac_group_name'
        | 'defender.version'
        | 'defender.vm_cloud_provider'
        | 'defender.vm_id'
        | 'defender.vm_resource_id'
        | 'defender.vm_subscription_id'
        | 'intune.attestation_boot_revision_list_info'
        | 'intune.attestation_code_integrity_policy'
        | 'intune.attestation_health_status_mismatch_info'
        | 'intune.attestation_identity_key'
        | 'intune.attestation_operating_system_rev_list_info'
        | 'intune.attestation_pcr0'
        | 'intune.attestation_pcr_hash_algorithm'
        | 'intune.attestation_secure_boot_config_policy_fingerprint'
        | 'intune.device_category_display_name'
        | 'intune.device_name'
        | 'intune.eas_device_id'
        | 'intune.email_address'
        | 'intune.enrollment_profile_name'
        | 'intune.entra_device_id'
        | 'intune.ethernet_mac_address'
        | 'intune.iccid'
        | 'intune.imei'
        | 'intune.intune_id'
        | 'intune.managed_device_name'
        | 'intune.manufacturer'
        | 'intune.meid'
        | 'intune.model'
        | 'intune.notes'
        | 'intune.operating_system'
        | 'intune.phone_number'
        | 'intune.serial_number'
        | 'intune.subscriber_carrier'
        | 'intune.udid'
        | 'intune.user_display_name'
        | 'intune.user_id'
        | 'intune.user_principal_name'
        | 'intune.wifi_mac_address'
        | 'iru.asset_tag'
        | 'iru.blueprint_id'
        | 'iru.blueprint_name'
        | 'iru.device_name'
        | 'iru.host_name'
        | 'iru.iru_id'
        | 'iru.local_hostname'
        | 'iru.model'
        | 'iru.model_identifier'
        | 'iru.model_name'
        | 'iru.os_build'
        | 'iru.os_name'
        | 'iru.serial_number'
        | 'iru.supplemental_build_version'
        | 'iru.user_email'
        | 'iru.user_id'
        | 'iru.user_name'
        | 'santa.hostname'
        | 'santa.machine_model'
        | 'santa.os_build'
        | 'santa.primary_user'
        | 'santa.santa_id'
        | 'santa.serial_number'
        | 'santa.temporary_admin_mode_user'
        | 'sentinelone.account_name'
        | 'sentinelone.ad_computer_distinguished_name'
        | 'sentinelone.ad_last_user_distinguished_name'
        | 'sentinelone.ad_mail'
        | 'sentinelone.ad_user_principal_name'
        | 'sentinelone.computer_name'
        | 'sentinelone.cpu_id'
        | 'sentinelone.domain'
        | 'sentinelone.external_id'
        | 'sentinelone.group_id'
        | 'sentinelone.group_ip'
        | 'sentinelone.group_name'
        | 'sentinelone.last_logged_in_user_name'
        | 'sentinelone.machine_sid'
        | 'sentinelone.model_name'
        | 'sentinelone.os_name'
        | 'sentinelone.os_username'
        | 'sentinelone.sentinelone_account_id'
        | 'sentinelone.sentinelone_id'
        | 'sentinelone.serial_number'
        | 'sentinelone.site_id'
        | 'sentinelone.site_name'
        | 'sentinelone.storage_name'
        | 'sentinelone.storage_type'
        | 'sentinelone.uuid'
        | 'sophos.associated_person_id'
        | 'sophos.associated_person_name'
        | 'sophos.associated_person_via_login'
        | 'sophos.cloud_instance_id'
        | 'sophos.group_id'
        | 'sophos.group_name'
        | 'sophos.hostname'
        | 'sophos.os_name'
        | 'sophos.serial_number'
        | 'sophos.sophos_id'
      op: 'is' | 'is_not' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field:
        | 'firezone.device_serial'
        | 'firezone.device_uuid'
        | 'firezone.hostname'
        | 'firezone.identifier_for_vendor'
        | 'firezone.last_attested_cert_fingerprint'
        | 'firezone.last_attested_cert_serial'
        | 'firezone.last_attested_device_serial'
        | 'firezone.last_attested_device_uuid'
        | 'firezone.last_attested_mdm_device_id'
        | 'firezone.last_seen_remote_ip_location_city'
        | 'firezone.last_seen_user_agent'
        | 'firezone.name'
      op: 'is_in' | 'is_not_in'
      value: string[]
    }
  | {
      field:
        | 'firezone.device_serial'
        | 'firezone.device_uuid'
        | 'firezone.hostname'
        | 'firezone.identifier_for_vendor'
        | 'firezone.last_attested_cert_fingerprint'
        | 'firezone.last_attested_cert_serial'
        | 'firezone.last_attested_device_serial'
        | 'firezone.last_attested_device_uuid'
        | 'firezone.last_attested_mdm_device_id'
        | 'firezone.last_seen_remote_ip_location_city'
        | 'firezone.last_seen_user_agent'
        | 'firezone.name'
      op: 'exists' | 'does_not_exist'
      value?: null | undefined
    }
  | {
      field:
        | 'firezone.device_serial'
        | 'firezone.device_uuid'
        | 'firezone.hostname'
        | 'firezone.identifier_for_vendor'
        | 'firezone.last_attested_cert_fingerprint'
        | 'firezone.last_attested_cert_serial'
        | 'firezone.last_attested_device_serial'
        | 'firezone.last_attested_device_uuid'
        | 'firezone.last_attested_mdm_device_id'
        | 'firezone.last_seen_remote_ip_location_city'
        | 'firezone.last_seen_user_agent'
        | 'firezone.name'
      op: 'matches' | 'does_not_match'
      value: string
    }
  | {
      field:
        | 'firezone.device_serial'
        | 'firezone.device_uuid'
        | 'firezone.hostname'
        | 'firezone.identifier_for_vendor'
        | 'firezone.last_attested_cert_fingerprint'
        | 'firezone.last_attested_cert_serial'
        | 'firezone.last_attested_device_serial'
        | 'firezone.last_attested_device_uuid'
        | 'firezone.last_attested_mdm_device_id'
        | 'firezone.last_seen_remote_ip_location_city'
        | 'firezone.last_seen_user_agent'
        | 'firezone.name'
      op: 'is' | 'is_not' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with'
      value: string
    }
  | {
      field:
        | 'defender.machine_tags'
        | 'iru.tags'
        | 'santa.primary_user_groups'
        | 'santa.tags'
        | 'sentinelone.active_protection'
        | 'sentinelone.ad_computer_member_of'
        | 'sentinelone.ad_last_user_member_of'
        | 'sentinelone.missing_permissions'
        | 'sentinelone.user_actions_needed'
        | 'sophos.ipv4_addresses'
        | 'sophos.ipv6_addresses'
        | 'sophos.mac_addresses'
      op: 'contains_any_of' | 'contains_all_of'
      rows?: 'any' | 'all' | undefined
      value: string[]
    }
  | {
      field:
        | 'defender.machine_tags'
        | 'iru.tags'
        | 'santa.primary_user_groups'
        | 'santa.tags'
        | 'sentinelone.active_protection'
        | 'sentinelone.ad_computer_member_of'
        | 'sentinelone.ad_last_user_member_of'
        | 'sentinelone.missing_permissions'
        | 'sentinelone.user_actions_needed'
        | 'sophos.ipv4_addresses'
        | 'sophos.ipv6_addresses'
        | 'sophos.mac_addresses'
      op: 'is_empty' | 'is_not_empty' | 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.machine_tags'
        | 'iru.tags'
        | 'santa.primary_user_groups'
        | 'santa.tags'
        | 'sentinelone.active_protection'
        | 'sentinelone.ad_computer_member_of'
        | 'sentinelone.ad_last_user_member_of'
        | 'sentinelone.missing_permissions'
        | 'sentinelone.user_actions_needed'
        | 'sophos.ipv4_addresses'
        | 'sophos.ipv6_addresses'
        | 'sophos.mac_addresses'
      op: 'contains' | 'does_not_contain'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field:
        | 'defender.agent_version'
        | 'intune.attestation_boot_app_security_version'
        | 'intune.attestation_boot_manager_security_version'
        | 'intune.attestation_boot_manager_version'
        | 'intune.attestation_code_integrity_check_version'
        | 'intune.attestation_content_version'
        | 'intune.attestation_tpm_version'
        | 'intune.os_version'
        | 'iru.agent_version'
        | 'iru.display_os_version'
        | 'iru.firewall_version'
        | 'iru.gatekeeper_opaque_version'
        | 'iru.gatekeeper_version'
        | 'iru.malware_removal_tool_version'
        | 'iru.os_version'
        | 'iru.supplemental_os_version_extra'
        | 'iru.xprotect_version'
        | 'santa.os_version'
        | 'santa.santa_version'
        | 'santa.santanetd_version'
        | 'sentinelone.agent_version'
        | 'sentinelone.os_revision'
        | 'sentinelone.ranger_version'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all' | undefined
      value?: null | undefined
    }
  | {
      field:
        | 'defender.agent_version'
        | 'intune.attestation_boot_app_security_version'
        | 'intune.attestation_boot_manager_security_version'
        | 'intune.attestation_boot_manager_version'
        | 'intune.attestation_code_integrity_check_version'
        | 'intune.attestation_content_version'
        | 'intune.attestation_tpm_version'
        | 'intune.os_version'
        | 'iru.agent_version'
        | 'iru.display_os_version'
        | 'iru.firewall_version'
        | 'iru.gatekeeper_opaque_version'
        | 'iru.gatekeeper_version'
        | 'iru.malware_removal_tool_version'
        | 'iru.os_version'
        | 'iru.supplemental_os_version_extra'
        | 'iru.xprotect_version'
        | 'santa.os_version'
        | 'santa.santa_version'
        | 'santa.santanetd_version'
        | 'sentinelone.agent_version'
        | 'sentinelone.os_revision'
        | 'sentinelone.ranger_version'
      op: 'is' | 'is_not' | 'gt' | 'gte' | 'lt' | 'lte'
      rows?: 'any' | 'all' | undefined
      value: string
    }
  | {
      field: 'firezone.last_seen_version'
      op: 'exists' | 'does_not_exist'
      value?: null | undefined
    }
  | {
      field: 'firezone.last_seen_version'
      op: 'is' | 'is_not' | 'gt' | 'gte' | 'lt' | 'lte'
      value: string
    }
type PolicyPostureNode = PolicyPostureAnd | PolicyPostureOr | PolicyPostureNot | PolicyPostureLeaf
type Policy = {
  conditions: PolicyCondition[]
  description: string | null
  flow_log_uploads_enabled: boolean
  group_id: string | null
  id: string
  is_disabled: boolean
  postures: PolicyPostureNode | null
  require_attestation: boolean
  resource_id: string
}
type PolicyResponse = { data?: Policy | undefined }
type PolicyUpdateParams = {
  conditions?: PolicyCondition[] | undefined
  description?: (string | null) | undefined
  flow_log_uploads_enabled?: boolean | undefined
  group_id?: string | undefined
  is_disabled?: boolean | undefined
  postures?: PolicyPostureNode | null | undefined
  require_attestation?: boolean | undefined
  resource_id?: string | undefined
}
type PolicyUpdateRequest = { policy: PolicyUpdateParams }
type IntunePostureProvider = {
  account_id: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  name: string
  synced_at: string | null
  tenant_id: string
  type: 'intune'
  updated_at: string
}
type IntunePostureProviderResponse = { data?: IntunePostureProvider | undefined }
type IntunePostureProviderUpdateRequest = {
  intune_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type X509AuthProvider = {
  account_id: string
  context: 'clients_only'
  id: string
  inserted_at: string
  is_disabled: boolean
  name: string
  updated_at: string
}
type X509AuthProviderResponse = { data?: X509AuthProvider | undefined }
type DeviceMembershipCriteria =
  | { device: { field: 'id'; op: 'in'; value: string[] } }
  | { device: { field: 'actor_id'; op: 'eq'; value: { subject: 'actor_id' } } }
  | { device: { field: 'account_id'; op: 'eq'; value: { subject: 'account_id' } } }
  | { actor_group: { field: 'id'; op: 'eq'; value: string } }
type ResourceFilter = { ports?: string[] | undefined; protocol: 'tcp' | 'udp' | 'icmp' }
type Resource = {
  address: string | null
  address_description: string | null
  device_membership_criteria?: DeviceMembershipCriteria | undefined
  filters: ResourceFilter[]
  id: string
  ip_stack?: 'ipv4_only' | 'ipv6_only' | 'dual' | undefined
  name: string
  site_id?: string | undefined
  type: 'cidr' | 'ip' | 'dns' | 'internet' | 'device_pool'
}
type ResourceListResponse = {
  data?: Resource[] | undefined
  metadata?: PaginationMetadata | undefined
}
type ResourceCreateRequest = {
  resource: {
    address?: (string | null) | undefined
    address_description?: (string | null) | undefined
    device_membership_criteria?: DeviceMembershipCriteria | undefined
    filters?: ResourceFilter[] | undefined
    ip_stack?: 'ipv4_only' | 'ipv6_only' | 'dual' | undefined
    name: string
    site_id?: (string | null) | undefined
    type: 'cidr' | 'ip' | 'dns' | 'internet' | 'device_pool'
  }
}
type ResourceResponse = { data?: Resource | undefined }
type ExternalIdentityResponse = { data?: ExternalIdentity | undefined }
type SentinelOneDevice = {
  last_logged_in_user_name: string | null
  sentinelone_id: string | null
  user_actions_needed: string[] | null
  operational_state: string | null
  os_name: string | null
  os_arch: string | null
  remote_profiling_state: string | null
  has_containerized_workload: boolean | null
  firewall_enabled: boolean | null
  proxy_console: boolean | null
  model_name: string | null
  infected: boolean | null
  proxy_deep_visibility: boolean | null
  console_migration_status: string | null
  is_hyper_automate: boolean | null
  network_quarantine_enabled: boolean | null
  scan_finished_at: string | null
  is_active: boolean | null
  external_id: string | null
  last_successful_scan_at: string | null
  updated_at: string | null
  os_username: string | null
  active_protection: string[] | null
  threat_reboot_required: boolean | null
  synced_at: string
  inserted_at: string | null
  location_enabled: boolean | null
  group_id: string | null
  site_id: string | null
  storage_name: string | null
  machine_sid: string | null
  remote_profiling_state_expires_at: string | null
  group_name: string | null
  allow_remote_shell: boolean | null
  tags: { [x: string]: unknown }[] | null
  protected_pods_count: number | null
  os_type: string | null
  proxy_pac_file_usage: boolean | null
  serial_number: string | null
  ad_computer_member_of: string[] | null
  locations: { [x: string]: unknown }[] | null
  installer_type: string | null
  last_active_at: string | null
  is_ad_connector: boolean | null
  ad_user_principal_name: string | null
  core_count: number | null
  detection_state: string | null
  active_threats: number | null
  is_decommissioned: boolean | null
  account_id: string
  cpu_count: number | null
  group_ip: string | null
  protected_tasks_count: number | null
  storage_type: string | null
  account_name: string | null
  ranger_status: string | null
  scan_status: string | null
  total_memory: number | null
  encrypted_applications: boolean | null
  ad_last_user_distinguished_name: string | null
  missing_permissions: string[] | null
  is_uninstalled: boolean | null
  computer_name: string | null
  scan_aborted_at: string | null
  in_remote_shell_session: boolean | null
  first_full_mode_at: string | null
  ad_last_user_member_of: string[] | null
  ad_mail: string | null
  external_ip: string | null
  is_pending_uninstall: boolean | null
  sentinelone_account_id: string | null
  last_ip_to_management: string | null
  proxy_method: string | null
  network_status: string | null
  os_revision: string | null
  agent_version: string | null
  registered_at: string | null
  is_up_to_date: boolean | null
  site_name: string | null
  apps_vulnerability_status: string | null
  domain: string | null
  ad_computer_distinguished_name: string | null
  os_start_time: string | null
  mitigation_mode_suspicious: string | null
  machine_type: string | null
  uuid: string
  ranger_version: string | null
  mitigation_mode: string | null
  operational_state_expires_at: string | null
  network_interfaces: { [x: string]: unknown }[] | null
  full_disk_scan_updated_at: string | null
  cloud_providers: { [x: string]: unknown } | null
  posture_provider_id: string
  scan_started_at: string | null
  protected_containers_count: number | null
  cpu_id: string | null
  location_type: string | null
}
type SentinelOneDeviceListResponse = {
  data?: SentinelOneDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type OktaAuthProvider = {
  account_id: string
  client_id: string
  client_session_lifetime_secs: number | null
  context: 'clients_and_portal' | 'clients_only' | 'portal_only'
  id: string
  inserted_at: string
  is_default: boolean
  is_disabled: boolean
  issuer: string
  name: string
  okta_domain: string
  portal_session_lifetime_secs: number | null
  updated_at: string
}
type OktaAuthProviderListResponse = {
  data?: OktaAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type IntuneDevice = {
  device_registration_state: string | null
  attestation_operating_system_rev_list_info: string | null
  entra_registered: boolean | null
  attestation_boot_app_security_version: string | null
  operating_system: string | null
  is_supervised: boolean | null
  notes: string | null
  free_storage_space_bytes: number | null
  attestation_issued_at: string | null
  config_manager_compliance_policy: boolean | null
  user_display_name: string | null
  config_manager_device_configuration: boolean | null
  config_manager_inventory: boolean | null
  updated_at: string | null
  enrolled_at: string | null
  total_storage_space_bytes: number | null
  attestation_operating_system_kernel_debugging: boolean | null
  attestation_data_execution_policy_enabled: boolean | null
  ethernet_mac_address: string | null
  synced_at: string
  inserted_at: string | null
  attestation_health_status_mismatch_info: string | null
  intune_id: string
  management_certificate_expires_at: string | null
  compliance_state: string | null
  require_user_enrollment_approval: boolean | null
  attestation_code_integrity_check_version: string | null
  attestation_pcr0: string | null
  attestation_boot_revision_list_info: string | null
  attestation_reset_count: number | null
  attestation_safe_mode: boolean | null
  managed_device_owner_type: string | null
  serial_number: string | null
  attestation_secure_boot: boolean | null
  device_category_display_name: string | null
  attestation_code_integrity_policy: string | null
  attestation_virtual_secure_mode: boolean | null
  last_sync_at: string | null
  is_encrypted: boolean | null
  eas_activated: boolean | null
  manufacturer: string | null
  eas_activated_at: string | null
  account_id: string
  attestation_early_launch_anti_malware_driver_protection: boolean | null
  management_agent: string | null
  attestation_tpm_version: string | null
  management_state: string | null
  wifi_mac_address: string | null
  attestation_code_integrity: boolean | null
  user_principal_name: string | null
  entra_device_id: string | null
  android_security_patch_level: string | null
  attestation_pcr_hash_algorithm: string | null
  device_enrollment_type: string | null
  subscriber_carrier: string | null
  enrollment_profile_name: string | null
  model: string | null
  attestation_boot_manager_version: string | null
  partner_reported_threat_state: string | null
  config_manager_modern_apps: boolean | null
  user_id: string | null
  jail_broken: boolean | null
  eas_device_id: string | null
  exchange_last_successful_sync_at: string | null
  attestation_bit_locker_enabled: boolean | null
  attestation_content_version: string | null
  exchange_access_state: string | null
  managed_device_name: string | null
  udid: string | null
  attestation_secure_boot_config_policy_fingerprint: string | null
  attestation_identity_key: string | null
  attestation_boot_manager_security_version: string | null
  compliance_grace_period_expiration_at: string | null
  exchange_access_state_reason: string | null
  attestation_windows_pe: boolean | null
  attestation_status: string | null
  iccid: string | null
  meid: string | null
  attestation_supported: boolean | null
  attestation_test_signing: boolean | null
  attestation_boot_debugging: boolean | null
  phone_number: string | null
  attestation_restart_count: number | null
  imei: string | null
  os_version: string | null
  physical_memory_bytes: number | null
  config_manager_windows_update_for_business: boolean | null
  email_address: string | null
  device_name: string | null
  posture_provider_id: string
  config_manager_resource_access: boolean | null
}
type IntuneDeviceResponse = { data?: IntuneDevice | undefined }
type SophosPostureProvider = {
  account_id: string
  client_id: string
  data_region_url: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  name: string
  synced_at: string | null
  tenant_id: string
  type: 'sophos'
  updated_at: string
}
type SophosPostureProviderListResponse = {
  data?: SophosPostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type DefenderPostureProvider = {
  account_id: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  is_verified: boolean
  name: string
  synced_at: string | null
  tenant_id: string
  type: 'defender'
  updated_at: string
}
type DefenderPostureProviderResponse = { data?: DefenderPostureProvider | undefined }
type DefenderPostureProviderUpdateRequest = {
  defender_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type IntunePostureProviderListResponse = {
  data?: IntunePostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type Membership = {
  email: string | null
  id: string
  name: string
  type: 'account_admin_user' | 'account_user' | 'api_client' | 'service_account'
}
type MembershipListResponse = {
  data?: Membership[] | undefined
  metadata?: PaginationMetadata | undefined
}
type MembershipPatchRequest = {
  memberships: { add?: string[] | undefined; remove?: string[] | undefined }
}
type MembershipResponse = { data?: { actor_ids?: string[] | undefined } | undefined }
type MembershipPutRequest = { memberships: { actor_id?: string | undefined }[] }
type GoogleDirectory = {
  account_id: string
  disabled_reason: string | null
  domain: string
  error_message: string | null
  errored_at: string | null
  group_sync_mode: 'all' | 'filtered' | 'disabled'
  id: string
  impersonation_email: string
  inserted_at: string
  is_disabled: boolean
  name: string
  orgunit_sync_enabled: boolean
  synced_at: string | null
  updated_at: string
}
type GoogleDirectoryListResponse = {
  data?: GoogleDirectory[] | undefined
  metadata?: PaginationMetadata | undefined
}
type SentinelOneDeviceResponse = { data?: SentinelOneDevice | undefined }
type SantaPostureProviderResponse = { data?: SantaPostureProvider | undefined }
type SantaPostureProviderUpdateRequest = {
  santa_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type GoogleDirectoryResponse = { data?: GoogleDirectory | undefined }
type SantaDevice = {
  account_id: string
  configured_client_mode: string | null
  first_seen_at: string | null
  hostname: string | null
  id: string
  inserted_at: string | null
  last_preflight_at: string | null
  last_preflight_ip: string | null
  last_seen_client_mode: string | null
  last_sync_at: string | null
  machine_model: string | null
  os_build: string | null
  os_type: string | null
  os_version: string | null
  posture_provider_id: string
  primary_user: string | null
  primary_user_groups: string[] | null
  rule_sync_at: string | null
  santa_id: string
  santa_version: string | null
  santanetd_version: string | null
  serial_number: string | null
  sip_status: number | null
  synced_at: string
  tags: string[] | null
  temporary_admin_mode_ends_at: string | null
  temporary_admin_mode_user: string | null
  temporary_monitor_mode_ends_at: string | null
  updated_at: string | null
}
type SantaDeviceListResponse = {
  data?: SantaDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type ResourceUpdateRequest = {
  resource: {
    address?: (string | null) | undefined
    address_description?: (string | null) | undefined
    device_membership_criteria?: DeviceMembershipCriteria | undefined
    filters?: ResourceFilter[] | undefined
    ip_stack?: 'ipv4_only' | 'ipv6_only' | 'dual' | undefined
    name?: string | undefined
    site_id?: (string | null) | undefined
    type?: 'cidr' | 'ip' | 'dns' | 'internet' | 'device_pool' | undefined
  }
}
type EntraDirectory = {
  account_id: string
  disabled_reason: string | null
  email_field: 'mail' | 'userPrincipalName'
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  name: string
  sync_all_groups: boolean
  synced_at: string | null
  tenant_id: string
  updated_at: string
}
type EntraDirectoryListResponse = {
  data?: EntraDirectory[] | undefined
  metadata?: PaginationMetadata | undefined
}
type EntraAuthProviderResponse = { data?: EntraAuthProvider | undefined }
type ClientsResponse = { data?: Client[] | undefined; metadata?: PaginationMetadata | undefined }
type AccountLimit = { available: number; total: number; used: number }
type AccountLimits = {
  account_admin_users?: AccountLimit | undefined
  adhoc_service_accounts?: AccountLimit | undefined
  monthly_active_users?: AccountLimit | undefined
  service_accounts?: AccountLimit | undefined
  sites?: AccountLimit | undefined
  users?: AccountLimit | undefined
}
type Account = {
  id: string
  key: string
  legal_name: string
  limits: AccountLimits
  name: string
  slug: string
}
type AccountResponse = { data: Account }
type SophosDevice = {
  mac_addresses: string[] | null
  os_name: string | null
  last_seen_at: string | null
  tamper_protection_supported: boolean | null
  last_agent_update_at: string | null
  os_minor_version: number | null
  associated_person_via_login: string | null
  updated_at: string | null
  os_platform: string | null
  synced_at: string
  inserted_at: string | null
  ipv6_addresses: string[] | null
  sophos_tenant_id: string | null
  group_id: string | null
  group_name: string | null
  tags: { [x: string]: unknown }[] | null
  serial_number: string | null
  isolation_admin_isolated: boolean | null
  group_hierarchy: { [x: string]: unknown }[] | null
  health_threats_status: string | null
  account_id: string
  encryption_volumes: { [x: string]: unknown }[] | null
  type: string | null
  cloud_instance_id: string | null
  associated_person_id: string | null
  last_os_update_at: string | null
  encryption_overall_status: string | null
  associated_person_name: string | null
  health_overall: string | null
  assigned_products: { [x: string]: unknown }[] | null
  cloud_provider: string | null
  packages: { [x: string]: unknown } | null
  os_build: number | null
  os_is_server: boolean | null
  health_services_status: string | null
  isolation_status: string | null
  device_software: { [x: string]: unknown } | null
  cloned: boolean | null
  lockdown_status: string | null
  ipv4_addresses: string[] | null
  health_service_details: { [x: string]: unknown }[] | null
  tamper_protection_enabled: boolean | null
  online: boolean | null
  sophos_id: string
  isolation_self_isolated: boolean | null
  os_major_version: number | null
  posture_provider_id: string
  hostname: string | null
}
type SophosDeviceResponse = { data?: SophosDevice | undefined }
type DeletedGatewayTokensResponse = { data?: { deleted_count: number } | undefined }
type GatewayToken = { id: string; token: string }
type GatewayTokenResponse = { data?: GatewayToken | undefined }
type IruDevice = {
  host_name: string | null
  gatekeeper_trusted_developers: boolean | null
  secure_boot_level: string | null
  os_name: string | null
  filevault_key_rotation_scheduled_at: string | null
  firewall_enabled: boolean | null
  model_name: string | null
  firewall_logging_option: string | null
  shared_ipad: boolean | null
  local_hostname: string | null
  activation_lock_allowed_while_supervised: boolean | null
  updated_at: string | null
  device_activation_lock_enabled: boolean | null
  gatekeeper_version: string | null
  bootstrap_token_escrowed: boolean | null
  iru_id: string
  synced_at: string
  asset_tag: string | null
  blueprint_name: string | null
  inserted_at: string | null
  data_roaming: boolean | null
  is_removed: boolean | null
  ssv_enabled: boolean | null
  filevault_key_type: string | null
  device_capacity_gb: number | null
  tags: string[] | null
  filevault_key_escrowed: boolean | null
  apple_silicon: boolean | null
  serial_number: string | null
  cellular_technology: string | null
  blueprint_id: string | null
  user_manages_kext: boolean | null
  hotspot: boolean | null
  account_id: string
  mdm_enabled: boolean | null
  user_email: string | null
  gatekeeper_opaque_version: string | null
  external_boot_level: string | null
  firewall_collected_at: string | null
  software_update_requires_bootstrap_token: boolean | null
  xprotect_version: string | null
  agent_installed: boolean | null
  mdm_manages_kext: boolean | null
  display_os_version: string | null
  filevault_regeneration_needed: boolean | null
  is_missing: boolean | null
  last_enrolled_at: string | null
  gatekeeper_enabled: boolean | null
  firewall_version: string | null
  first_enrolled_at: string | null
  firewall_logging: boolean | null
  model_identifier: string | null
  os_build: string | null
  user_activation_lock_enabled: boolean | null
  activation_lock_collected_at: string | null
  lost_mode_status: string | null
  startup_settings_collected_at: string | null
  platform: string | null
  filevault_enabled: boolean | null
  user_is_archived: boolean | null
  activation_lock_supported: boolean | null
  supplemental_build_version: string | null
  sip_enabled: boolean | null
  firewall_allow_signed_applications: boolean | null
  model: string | null
  supplemental_os_version_extra: string | null
  user_id: string | null
  bootstrap_token_auth: boolean | null
  firewall_block_all_incoming: boolean | null
  last_check_in_at: string | null
  firewall_stealth_mode: boolean | null
  kext_requires_bootstrap_token: boolean | null
  agent_version: string | null
  activation_lock_bypass_code_failed: boolean | null
  inventory_collected_at: string | null
  any_signed_os: boolean | null
  filevault_collected_at: string | null
  gatekeeper_collected_at: string | null
  firewall_unloading: boolean | null
  os_version: string | null
  malware_removal_tool_version: string | null
  device_family: string | null
  user_name: string | null
  device_name: string | null
  posture_provider_id: string
}
type IruDeviceResponse = { data?: IruDevice | undefined }
type IntuneDeviceListResponse = {
  data?: IntuneDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type PoolMember = { id: string; last_seen_at: string | null; name: string }
type PoolMemberListResponse = {
  data?: PoolMember[] | undefined
  metadata?: PaginationMetadata | undefined
}
type PoolMemberPatchRequest = {
  pool_members: { add?: string[] | undefined; remove?: string[] | undefined }
}
type PoolMemberResponse = { data?: { device_ids?: string[] | undefined } | undefined }
type PoolMemberPutRequest = { pool_members: { device_id: string }[] }
type GitHubAuthProviderListResponse = {
  data?: GitHubAuthProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type EntraDirectoryResponse = { data?: EntraDirectory | undefined }
type SentinelOnePostureProviderResponse = { data?: SentinelOnePostureProvider | undefined }
type SentinelOnePostureProviderUpdateRequest = {
  sentinelone_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type EmailOTPAuthProviderResponse = { data?: EmailOTPAuthProvider | undefined }
type OktaDirectory = {
  account_id: string
  client_id: string
  disabled_reason: string | null
  error_message: string | null
  errored_at: string | null
  id: string
  inserted_at: string
  is_disabled: boolean
  kid: string
  name: string
  okta_domain: string
  synced_at: string | null
  updated_at: string
}
type OktaDirectoryResponse = { data?: OktaDirectory | undefined }
type IruDeviceListResponse = {
  data?: IruDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type GroupUpdateRequest = { group: { name?: string | undefined } }
type Subject = {
  actor_email?: (string | null) | undefined
  actor_id?: string | undefined
  actor_name?: string | undefined
  actor_type?: 'account_user' | 'account_admin_user' | 'service_account' | 'api_client' | undefined
  attested_at?: string | undefined
  attested_cert_fingerprint?: string | undefined
  attested_cert_issuer?: string | undefined
  attested_cert_serial?: string | undefined
  attested_device_serial?: string | undefined
  attested_device_uuid?: string | undefined
  attested_mdm_device_id?: string | undefined
  auth_provider_id?: (string | null) | undefined
  ip?: (string | null) | undefined
  ip_city?: (string | null) | undefined
  ip_lat?: (number | null) | undefined
  ip_lon?: (number | null) | undefined
  ip_region?: (string | null) | undefined
  user_agent?: (string | null) | undefined
} | null
type ChangeLog = {
  after: { [x: string]: unknown } | null
  before: { [x: string]: unknown } | null
  log_id: string
  object: string
  operation: 'insert' | 'update' | 'delete'
  subject: Subject
  timestamp: string
  type: 'change'
}
type ClientSessionSubject = {
  actor_email: string | null
  actor_id: string
  actor_name: string
  actor_type: 'account_user' | 'account_admin_user' | 'service_account' | 'api_client'
  attested_at?: string | undefined
  attested_cert_fingerprint?: string | undefined
  attested_cert_issuer?: string | undefined
  attested_cert_serial?: string | undefined
  attested_device_serial?: string | undefined
  attested_device_uuid?: string | undefined
  attested_mdm_device_id?: string | undefined
  auth_provider_id: string | null
  device_id: string | null
  ip: string | null
  ip_city: string | null
  ip_lat: number | null
  ip_lon: number | null
  ip_region: string | null
  token_id: string | null
  user_agent: string | null
}
type GatewaySessionSubject = {
  gateway_id: string | null
  ip: string | null
  ip_city: string | null
  ip_lat: number | null
  ip_lon: number | null
  ip_region: string | null
  token_id: string | null
  user_agent: string | null
}
type SessionLog = {
  context: 'client' | 'gateway' | 'portal'
  log_id: string
  subject: ClientSessionSubject | GatewaySessionSubject | Subject
  timestamp: string
  type: 'session'
}
type FlowLog = {
  log_id: string
  initiator_device_id: string
  last_packet: string | null
  inner_dst_ip: string
  initiator_auth_provider_id: string | null
  initiator_device_uuid: string | null
  flow_end: string | null
  initiator_device_identifier_for_vendor: string | null
  policy_authorization_id: string
  tx_bytes: number | null
  initiator_client_version: string | null
  type: 'flow'
  rx_packets: number | null
  initiator_device_os_name: string | null
  timestamp: string
  role: 'initiator' | 'responder'
  tx_packets: number | null
  inner_dst_port: number
  initiator_device_firebase_installation_id: string | null
  inner_src_ip: string
  responder_device_id: string
  initiator_actor_email: string | null
  protocol: 'tcp' | 'udp'
  authorization_expires_at: string
  outers:
    | {
        dst_ip: string
        dst_port: number
        path_activated_at?: (string | null) | undefined
        src_ip?: (string | null) | undefined
        src_port?: (number | null) | undefined
      }[]
    | null
  resource_id: string
  inner_src_port: number
  rx_bytes: number | null
  authorized_at: string
  flow_start: string
  initiator_device_os_version: string | null
  inner_domain: string | null
  initiator_actor_id: string | null
  initiator_actor_name: string | null
  resource_address: string | null
  initiator_device_serial: string | null
  resource_name: string
  policy_id: string
}
type APIRequestLog = {
  actor_id: string
  api_token_id: string
  content_length: number | null
  ip: string
  ip_city: string | null
  ip_lat: number | null
  ip_lon: number | null
  ip_region: string | null
  log_id: string
  mcp: { [x: string]: unknown } | null
  method: string
  path: string
  request_id: string
  timestamp: string
  type: 'api_request'
  user_agent: string | null
}
type Log = ChangeLog | SessionLog | FlowLog | APIRequestLog
type LogResponse = { data?: Log | undefined }
type OIDCAuthProviderResponse = { data?: OIDCAuthProvider | undefined }
type GatewaysResponse = { data?: Gateway[] | undefined; metadata?: PaginationMetadata | undefined }
type GatewayCreate = { name?: string | undefined }
type GatewayCreateRequest = {
  gateway?: GatewayCreate | undefined
  issue_token?: boolean | undefined
}
type GatewayProvisionResponse = {
  data?:
    | {
        gateway_token_id: string | null
        id: string
        ipv4: string
        ipv6: string
        last_seen_at: string | null
        last_seen_remote_ip: string | null
        last_seen_remote_ip_location_city: string | null
        last_seen_remote_ip_location_lat: number | null
        last_seen_remote_ip_location_lon: number | null
        last_seen_remote_ip_location_region: string | null
        last_seen_user_agent: string | null
        last_seen_version: string | null
        name: string
        online: boolean
        public_key: string | null
        rotated_at: string | null
        token?: string | undefined
      }
    | undefined
}
type DefenderDevice = {
  last_seen_at: string | null
  machine_tags: string[] | null
  managed_by: string | null
  vm_resource_id: string | null
  updated_at: string | null
  os_platform: string | null
  synced_at: string
  last_ip_address: string | null
  device_value: string | null
  inserted_at: string | null
  os_architecture: string | null
  rbac_group_name: string | null
  exposure_level: string | null
  defender_id: string
  entra_joined: boolean | null
  exclusion_reason: string | null
  vm_id: string | null
  vm_cloud_provider: string | null
  os_processor: string | null
  account_id: string
  entra_device_id: string | null
  os_build: number | null
  managed_by_status: string | null
  is_excluded: boolean | null
  vm_subscription_id: string | null
  last_external_ip_address: string | null
  health_status: string | null
  risk_score: string | null
  is_potential_duplication: boolean | null
  agent_version: string | null
  rbac_group_id: number | null
  version: string | null
  ip_addresses: { [x: string]: unknown }[] | null
  onboarding_status: string | null
  computer_dns_name: string | null
  first_seen_at: string | null
  posture_provider_id: string
}
type DefenderDeviceListResponse = {
  data?: DefenderDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type PolicyListResponse = { data?: Policy[] | undefined; metadata?: PaginationMetadata | undefined }
type PolicyCreateParams = {
  conditions?: PolicyCondition[] | undefined
  description?: (string | null) | undefined
  flow_log_uploads_enabled?: boolean | undefined
  group_id: string
  is_disabled?: boolean | undefined
  postures?: PolicyPostureNode | null | undefined
  require_attestation?: boolean | undefined
  resource_id: string
}
type PolicyCreateRequest = { policy: PolicyCreateParams }
type LogsResponse = { data?: Log[] | undefined; metadata?: { [x: string]: unknown } | undefined }
type SophosDeviceListResponse = {
  data?: SophosDevice[] | undefined
  metadata?: PaginationMetadata | undefined
}
type ActorsResponse = { data?: Actor[] | undefined; metadata?: PaginationMetadata | undefined }
type ActorCreateRequest = {
  actor: {
    allow_email_otp_sign_in?: boolean | undefined
    email?: (string | null) | undefined
    name: string
    type: 'account_user' | 'service_account'
  }
}
type OktaDirectoryListResponse = {
  data?: OktaDirectory[] | undefined
  metadata?: PaginationMetadata | undefined
}
type SantaDeviceResponse = { data?: SantaDevice | undefined }
type IruPostureProviderListResponse = {
  data?: IruPostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type OktaAuthProviderResponse = { data?: OktaAuthProvider | undefined }
type DefenderDeviceResponse = { data?: DefenderDevice | undefined }
type SophosPostureProviderResponse = { data?: SophosPostureProvider | undefined }
type SophosPostureProviderUpdateRequest = {
  sophos_posture_provider: { is_disabled?: boolean | undefined; name?: string | undefined }
}
type DefenderPostureProviderListResponse = {
  data?: DefenderPostureProvider[] | undefined
  metadata?: PaginationMetadata | undefined
}
type GoogleAuthProviderResponse = { data?: GoogleAuthProvider | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                directory_id?: string | undefined
                entity_type?: string | undefined
              }
            }
            output: GroupListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                directory_id?: string | undefined
                entity_type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                directory_id?: string | undefined
                entity_type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                directory_id?: string | undefined
                entity_type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                directory_id?: string | undefined
                entity_type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: GroupCreateRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GroupCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GroupCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GroupCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GroupCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors/:actor_id/external_identities': {
      $get:
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ExternalIdentityListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/clients/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ClientPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateways/:id': {
      $delete:
        | {
            input: { param: { site_id: string; id: string } }
            output: GatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { site_id: string; id: string } }
            output: GatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: GatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: GatewayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { site_id: string; id: string } } & { json: GatewayUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/santa_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SantaPostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/github_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GitHubAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/posture_fields': {
      $get:
        | {
            input: {
              query: {
                provider?:
                  | 'firezone'
                  | 'intune'
                  | 'iru'
                  | 'defender'
                  | 'santa'
                  | 'sentinelone'
                  | 'sophos'
                  | undefined
              }
            }
            output: PostureFieldListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider?:
                  | 'firezone'
                  | 'intune'
                  | 'iru'
                  | 'defender'
                  | 'santa'
                  | 'sentinelone'
                  | 'sophos'
                  | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                provider?:
                  | 'firezone'
                  | 'intune'
                  | 'iru'
                  | 'defender'
                  | 'santa'
                  | 'sentinelone'
                  | 'sophos'
                  | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                provider?:
                  | 'firezone'
                  | 'intune'
                  | 'iru'
                  | 'defender'
                  | 'santa'
                  | 'sentinelone'
                  | 'sophos'
                  | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                provider?:
                  | 'firezone'
                  | 'intune'
                  | 'iru'
                  | 'defender'
                  | 'santa'
                  | 'sentinelone'
                  | 'sophos'
                  | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oidc_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: OIDCAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateway_tokens/:id': {
      $delete:
        | {
            input: { param: { site_id: string; id: string } }
            output: DeletedGatewayTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sentinelone_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SentinelOnePostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: ActorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ActorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ActorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ActorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ActorUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/clients/:id/verify': {
      $put:
        | {
            input: { param: { id: string } }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors/:actor_id/client_tokens': {
      $delete:
        | {
            input: { param: { actor_id: string } }
            output: DeletedClientTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ClientTokenListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ClientTokenCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { actor_id: string } } & { json: ClientTokenRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors/:actor_id/client_tokens/:id': {
      $delete:
        | {
            input: { param: { actor_id: string; id: string } }
            output: DeletedClientTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { actor_id: string; id: string } }
            output: ClientTokenShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/email_otp_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: EmailOTPAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/entra_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: EntraAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/iru_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: IruPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: IruPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: IruPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: IruPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IruPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: SiteListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: SiteCreateRequest }
            output: SiteResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SiteCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SiteCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SiteCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SiteCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SiteCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: SiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SiteUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/google_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: GoogleAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/policies/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: PolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: PolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: PolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: PolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PolicyUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/intune_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: IntunePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: IntunePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: IntunePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: IntunePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IntunePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/x509_auth_provider': {
      $get:
        | { input: {}; output: X509AuthProviderResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/resources': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                type?: string | undefined
                site_id?: string | undefined
                address?: string | undefined
                ip_stack?: string | undefined
              }
            }
            output: ResourceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                type?: string | undefined
                site_id?: string | undefined
                address?: string | undefined
                ip_stack?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                type?: string | undefined
                site_id?: string | undefined
                address?: string | undefined
                ip_stack?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                type?: string | undefined
                site_id?: string | undefined
                address?: string | undefined
                ip_stack?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                type?: string | undefined
                site_id?: string | undefined
                address?: string | undefined
                ip_stack?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: ResourceCreateRequest }
            output: ResourceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ResourceCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ResourceCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ResourceCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ResourceCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ResourceCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors/:actor_id/external_identities/:id': {
      $delete:
        | {
            input: { param: { actor_id: string; id: string } }
            output: ExternalIdentityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { actor_id: string; id: string } }
            output: ExternalIdentityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actor_id: string; id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sentinelone_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SentinelOneDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/okta_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: OktaAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/intune_devices/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IntuneDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sophos_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SophosPostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/defender_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DefenderPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: DefenderPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: DefenderPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: DefenderPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: DefenderPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/intune_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: IntunePostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups/:group_id/memberships': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: MembershipListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & { json: MembershipPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/google_directories': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: GoogleDirectoryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sentinelone_devices/:sentinelone_agent': {
      $get:
        | {
            input: { param: { sentinelone_agent: string } }
            output: SentinelOneDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sentinelone_agent: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sentinelone_agent: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sentinelone_agent: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sentinelone_agent: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sentinelone_agent: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/santa_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: SantaPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SantaPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: SantaPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: SantaPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SantaPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/google_directories/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GoogleDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/santa_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SantaDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/clients/:id/unverify': {
      $put:
        | {
            input: { param: { id: string } }
            output: ClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/resources/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: ResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ResourceUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/entra_directories': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: EntraDirectoryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/entra_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EntraAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/clients': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                firezone_id?: string | undefined
                actor_id?: string | undefined
                online?: boolean | undefined
                last_seen_before?: string | undefined
                last_seen_after?: string | undefined
                client_type?: 'headless' | 'gui' | 'apple' | 'android' | undefined
              }
            }
            output: ClientsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                firezone_id?: string | undefined
                actor_id?: string | undefined
                online?: boolean | undefined
                last_seen_before?: string | undefined
                last_seen_after?: string | undefined
                client_type?: 'headless' | 'gui' | 'apple' | 'android' | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                firezone_id?: string | undefined
                actor_id?: string | undefined
                online?: boolean | undefined
                last_seen_before?: string | undefined
                last_seen_after?: string | undefined
                client_type?: 'headless' | 'gui' | 'apple' | 'android' | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                firezone_id?: string | undefined
                actor_id?: string | undefined
                online?: boolean | undefined
                last_seen_before?: string | undefined
                last_seen_after?: string | undefined
                client_type?: 'headless' | 'gui' | 'apple' | 'android' | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                firezone_id?: string | undefined
                actor_id?: string | undefined
                online?: boolean | undefined
                last_seen_before?: string | undefined
                last_seen_after?: string | undefined
                client_type?: 'headless' | 'gui' | 'apple' | 'android' | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/account': {
      $get:
        | { input: {}; output: AccountResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/sophos_devices/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SophosDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateway_tokens': {
      $delete:
        | {
            input: { param: { site_id: string } }
            output: DeletedGatewayTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { site_id: string } }
            output: GatewayTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/iru_devices/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IruDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/intune_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: IntuneDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/resources/:resource_id/pool_members': {
      $get:
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: PoolMemberListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { limit?: number | undefined; page_cursor?: string | undefined }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: PoolMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPatchRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: PoolMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { resource_id: string } } & { json: PoolMemberPutRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/github_auth_providers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: GitHubAuthProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/entra_directories/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EntraDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sentinelone_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: SentinelOnePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SentinelOnePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: SentinelOnePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: SentinelOnePostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SentinelOnePostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/email_otp_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EmailOTPAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/okta_directories/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OktaDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/iru_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: IruDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/groups/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: GroupUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/logs/:log_id': {
      $get:
        | {
            input: { param: { log_id: string } }
            output: LogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { log_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { log_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { log_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { log_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { log_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oidc_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OIDCAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateways': {
      $get:
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: GatewaysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string } } & {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                ipv4?: string | undefined
                ipv6?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: GatewayProvisionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { site_id: string } } & { json: GatewayCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/defender_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: DefenderDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/policies': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                group_id?: string | undefined
                resource_id?: string | undefined
              }
            }
            output: PolicyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                group_id?: string | undefined
                resource_id?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                group_id?: string | undefined
                resource_id?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                group_id?: string | undefined
                resource_id?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                group_id?: string | undefined
                resource_id?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: PolicyCreateRequest }
            output: PolicyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PolicyCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/logs': {
      $get:
        | {
            input: {
              query: {
                type: string
                limit?: number | undefined
                page_cursor?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                actor_id?: string | undefined
                actor_email?: string | undefined
              }
            }
            output: LogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: string
                limit?: number | undefined
                page_cursor?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                actor_id?: string | undefined
                actor_email?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type: string
                limit?: number | undefined
                page_cursor?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                actor_id?: string | undefined
                actor_email?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                type: string
                limit?: number | undefined
                page_cursor?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                actor_id?: string | undefined
                actor_email?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                type: string
                limit?: number | undefined
                page_cursor?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                actor_id?: string | undefined
                actor_email?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sophos_devices': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: SophosDeviceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/actors': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                email?: string | undefined
                type?: string | undefined
              }
            }
            output: ActorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                email?: string | undefined
                type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                email?: string | undefined
                type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                email?: string | undefined
                type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
                email?: string | undefined
                type?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: ActorCreateRequest }
            output: ActorResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ActorCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ActorCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ActorCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ActorCreateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ActorCreateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/okta_directories': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: OktaDirectoryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_cursor?: string | undefined
                name?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/santa_devices/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SantaDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/iru_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: IruPostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/okta_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OktaAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/defender_devices/:defender_device': {
      $get:
        | {
            input: { param: { defender_device: string } }
            output: DefenderDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { defender_device: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { defender_device: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { defender_device: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { defender_device: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { defender_device: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sophos_posture_providers/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: SophosPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SophosPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: SophosPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: SophosPostureProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ValidationProblemDetails
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SophosPostureProviderUpdateRequest }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateways/:gateway_id/token/rotate': {
      $post:
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: GatewayTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sites/:site_id/gateways/:gateway_id/token': {
      $post:
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: GatewayTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { site_id: string; gateway_id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/defender_posture_providers': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: DefenderPostureProviderListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; page_cursor?: string | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/google_auth_providers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GoogleAuthProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
