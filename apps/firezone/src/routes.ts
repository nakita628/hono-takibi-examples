import { createRoute, z } from '@hono/zod-openapi'

type PolicyPostureLeafType =
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
      value: string
    }
  | { field: 'firezone.last_attested_at'; op: 'within_last' | 'not_within_last'; value: string }
  | { field: 'firezone.last_attested_at'; op: 'exists' | 'does_not_exist'; value?: null }
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value: string
    }
  | {
      field: 'iru.device_capacity_gb'
      op: 'exists' | 'does_not_exist'
      rows?: 'any' | 'all'
      value?: null
    }
  | {
      field: 'iru.device_capacity_gb'
      op: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte'
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
    }
  | { field: 'firezone.ipv4'; op: 'is_in_cidr' | 'is_not_in_cidr'; value: string[] }
  | { field: 'firezone.ipv4'; op: 'exists' | 'does_not_exist'; value?: null }
  | { field: 'firezone.ipv6'; op: 'is_in_cidr' | 'is_not_in_cidr'; value: string[] }
  | { field: 'firezone.ipv6'; op: 'exists' | 'does_not_exist'; value?: null }
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
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
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
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
      rows?: 'any' | 'all'
      value?: null
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
      rows?: 'any' | 'all'
      value: string
    }
  | { field: 'firezone.last_seen_version'; op: 'exists' | 'does_not_exist'; value?: null }
  | {
      field: 'firezone.last_seen_version'
      op: 'is' | 'is_not' | 'gt' | 'gte' | 'lt' | 'lte'
      value: string
    }

const PolicyPostureAndSchema: z.ZodType<PolicyPostureAndType> = z
  .lazy(() =>
    z
      .strictObject({ and: z.array(PolicyPostureNodeSchema).min(1).max(100) })
      .openapi({
        description: 'Every applicable child expression must hold. Contains no other keys.',
        required: ['and'],
        title: 'PolicyPostureAnd',
      }),
  )
  .openapi('PolicyPostureAnd')

const PolicyPostureOrSchema: z.ZodType<PolicyPostureOrType> = z
  .lazy(() =>
    z
      .strictObject({ or: z.array(PolicyPostureNodeSchema).min(1).max(100) })
      .openapi({
        description: 'At least one applicable child expression must hold. Contains no other keys.',
        required: ['or'],
        title: 'PolicyPostureOr',
      }),
  )
  .openapi('PolicyPostureOr')

const PolicyPostureNotSchema: z.ZodType<PolicyPostureNotType> = z
  .lazy(() =>
    z
      .strictObject({ not: PolicyPostureNodeSchema })
      .openapi({
        description: 'Negates one applicable expression. Contains no other keys.',
        required: ['not'],
        title: 'PolicyPostureNot',
      }),
  )
  .openapi('PolicyPostureNot')

const PolicyPostureLeafSchema: z.ZodType<PolicyPostureLeafType> = z
  .xor([
    z
      .strictObject({
        field: z
          .enum([
            'defender.enrolled',
            'defender.entra_joined',
            'defender.is_excluded',
            'defender.is_potential_duplication',
            'defender.os_up_to_date',
            'intune.attestation_bit_locker_enabled',
            'intune.attestation_boot_debugging',
            'intune.attestation_code_integrity',
            'intune.attestation_data_execution_policy_enabled',
            'intune.attestation_early_launch_anti_malware_driver_protection',
            'intune.attestation_operating_system_kernel_debugging',
            'intune.attestation_safe_mode',
            'intune.attestation_secure_boot',
            'intune.attestation_supported',
            'intune.attestation_test_signing',
            'intune.attestation_virtual_secure_mode',
            'intune.attestation_windows_pe',
            'intune.config_manager_compliance_policy',
            'intune.config_manager_device_configuration',
            'intune.config_manager_inventory',
            'intune.config_manager_modern_apps',
            'intune.config_manager_resource_access',
            'intune.config_manager_windows_update_for_business',
            'intune.eas_activated',
            'intune.enrolled',
            'intune.entra_registered',
            'intune.is_encrypted',
            'intune.is_supervised',
            'intune.jail_broken',
            'intune.os_up_to_date',
            'intune.require_user_enrollment_approval',
            'iru.activation_lock_allowed_while_supervised',
            'iru.activation_lock_bypass_code_failed',
            'iru.activation_lock_supported',
            'iru.agent_installed',
            'iru.any_signed_os',
            'iru.apple_silicon',
            'iru.bootstrap_token_auth',
            'iru.bootstrap_token_escrowed',
            'iru.data_roaming',
            'iru.device_activation_lock_enabled',
            'iru.enrolled',
            'iru.filevault_enabled',
            'iru.filevault_key_escrowed',
            'iru.filevault_regeneration_needed',
            'iru.firewall_allow_signed_applications',
            'iru.firewall_block_all_incoming',
            'iru.firewall_enabled',
            'iru.firewall_logging',
            'iru.firewall_stealth_mode',
            'iru.firewall_unloading',
            'iru.gatekeeper_enabled',
            'iru.gatekeeper_trusted_developers',
            'iru.hotspot',
            'iru.is_missing',
            'iru.is_removed',
            'iru.kext_requires_bootstrap_token',
            'iru.mdm_enabled',
            'iru.mdm_manages_kext',
            'iru.os_up_to_date',
            'iru.shared_ipad',
            'iru.sip_enabled',
            'iru.software_update_requires_bootstrap_token',
            'iru.ssv_enabled',
            'iru.user_activation_lock_enabled',
            'iru.user_is_archived',
            'iru.user_manages_kext',
            'santa.enrolled',
            'santa.os_up_to_date',
            'sentinelone.allow_remote_shell',
            'sentinelone.encrypted_applications',
            'sentinelone.enrolled',
            'sentinelone.firewall_enabled',
            'sentinelone.has_containerized_workload',
            'sentinelone.in_remote_shell_session',
            'sentinelone.infected',
            'sentinelone.is_active',
            'sentinelone.is_ad_connector',
            'sentinelone.is_decommissioned',
            'sentinelone.is_hyper_automate',
            'sentinelone.is_pending_uninstall',
            'sentinelone.is_uninstalled',
            'sentinelone.is_up_to_date',
            'sentinelone.location_enabled',
            'sentinelone.network_quarantine_enabled',
            'sentinelone.os_up_to_date',
            'sentinelone.proxy_console',
            'sentinelone.proxy_deep_visibility',
            'sentinelone.proxy_pac_file_usage',
            'sentinelone.threat_reboot_required',
            'sophos.cloned',
            'sophos.enrolled',
            'sophos.isolation_admin_isolated',
            'sophos.isolation_self_isolated',
            'sophos.online',
            'sophos.os_is_server',
            'sophos.os_up_to_date',
            'sophos.tamper_protection_enabled',
            'sophos.tamper_protection_supported',
          ])
          .openapi({
            description: 'boolean field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'boolean no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.enrolled',
            'defender.entra_joined',
            'defender.is_excluded',
            'defender.is_potential_duplication',
            'defender.os_up_to_date',
            'intune.attestation_bit_locker_enabled',
            'intune.attestation_boot_debugging',
            'intune.attestation_code_integrity',
            'intune.attestation_data_execution_policy_enabled',
            'intune.attestation_early_launch_anti_malware_driver_protection',
            'intune.attestation_operating_system_kernel_debugging',
            'intune.attestation_safe_mode',
            'intune.attestation_secure_boot',
            'intune.attestation_supported',
            'intune.attestation_test_signing',
            'intune.attestation_virtual_secure_mode',
            'intune.attestation_windows_pe',
            'intune.config_manager_compliance_policy',
            'intune.config_manager_device_configuration',
            'intune.config_manager_inventory',
            'intune.config_manager_modern_apps',
            'intune.config_manager_resource_access',
            'intune.config_manager_windows_update_for_business',
            'intune.eas_activated',
            'intune.enrolled',
            'intune.entra_registered',
            'intune.is_encrypted',
            'intune.is_supervised',
            'intune.jail_broken',
            'intune.os_up_to_date',
            'intune.require_user_enrollment_approval',
            'iru.activation_lock_allowed_while_supervised',
            'iru.activation_lock_bypass_code_failed',
            'iru.activation_lock_supported',
            'iru.agent_installed',
            'iru.any_signed_os',
            'iru.apple_silicon',
            'iru.bootstrap_token_auth',
            'iru.bootstrap_token_escrowed',
            'iru.data_roaming',
            'iru.device_activation_lock_enabled',
            'iru.enrolled',
            'iru.filevault_enabled',
            'iru.filevault_key_escrowed',
            'iru.filevault_regeneration_needed',
            'iru.firewall_allow_signed_applications',
            'iru.firewall_block_all_incoming',
            'iru.firewall_enabled',
            'iru.firewall_logging',
            'iru.firewall_stealth_mode',
            'iru.firewall_unloading',
            'iru.gatekeeper_enabled',
            'iru.gatekeeper_trusted_developers',
            'iru.hotspot',
            'iru.is_missing',
            'iru.is_removed',
            'iru.kext_requires_bootstrap_token',
            'iru.mdm_enabled',
            'iru.mdm_manages_kext',
            'iru.os_up_to_date',
            'iru.shared_ipad',
            'iru.sip_enabled',
            'iru.software_update_requires_bootstrap_token',
            'iru.ssv_enabled',
            'iru.user_activation_lock_enabled',
            'iru.user_is_archived',
            'iru.user_manages_kext',
            'santa.enrolled',
            'santa.os_up_to_date',
            'sentinelone.allow_remote_shell',
            'sentinelone.encrypted_applications',
            'sentinelone.enrolled',
            'sentinelone.firewall_enabled',
            'sentinelone.has_containerized_workload',
            'sentinelone.in_remote_shell_session',
            'sentinelone.infected',
            'sentinelone.is_active',
            'sentinelone.is_ad_connector',
            'sentinelone.is_decommissioned',
            'sentinelone.is_hyper_automate',
            'sentinelone.is_pending_uninstall',
            'sentinelone.is_uninstalled',
            'sentinelone.is_up_to_date',
            'sentinelone.location_enabled',
            'sentinelone.network_quarantine_enabled',
            'sentinelone.os_up_to_date',
            'sentinelone.proxy_console',
            'sentinelone.proxy_deep_visibility',
            'sentinelone.proxy_pac_file_usage',
            'sentinelone.threat_reboot_required',
            'sophos.cloned',
            'sophos.enrolled',
            'sophos.isolation_admin_isolated',
            'sophos.isolation_self_isolated',
            'sophos.online',
            'sophos.os_is_server',
            'sophos.os_up_to_date',
            'sophos.tamper_protection_enabled',
            'sophos.tamper_protection_supported',
          ])
          .openapi({
            description: 'boolean field; see PolicyPostureNode for platform applicability',
          }),
        op: z.literal('is'),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.boolean(),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'boolean scalar provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.first_seen_at',
            'defender.last_seen_at',
            'intune.android_security_patch_level',
            'intune.attestation_issued_at',
            'intune.compliance_grace_period_expiration_at',
            'intune.eas_activated_at',
            'intune.enrolled_at',
            'intune.exchange_last_successful_sync_at',
            'intune.last_sync_at',
            'intune.management_certificate_expires_at',
            'iru.activation_lock_collected_at',
            'iru.filevault_collected_at',
            'iru.filevault_key_rotation_scheduled_at',
            'iru.firewall_collected_at',
            'iru.first_enrolled_at',
            'iru.gatekeeper_collected_at',
            'iru.inventory_collected_at',
            'iru.last_check_in_at',
            'iru.last_enrolled_at',
            'iru.startup_settings_collected_at',
            'santa.first_seen_at',
            'santa.last_preflight_at',
            'santa.last_sync_at',
            'santa.rule_sync_at',
            'santa.temporary_admin_mode_ends_at',
            'santa.temporary_monitor_mode_ends_at',
            'sentinelone.first_full_mode_at',
            'sentinelone.full_disk_scan_updated_at',
            'sentinelone.last_active_at',
            'sentinelone.last_successful_scan_at',
            'sentinelone.operational_state_expires_at',
            'sentinelone.os_start_time',
            'sentinelone.registered_at',
            'sentinelone.remote_profiling_state_expires_at',
            'sentinelone.scan_aborted_at',
            'sentinelone.scan_finished_at',
            'sentinelone.scan_started_at',
            'sophos.last_agent_update_at',
            'sophos.last_os_update_at',
            'sophos.last_seen_at',
          ])
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['within_last', 'not_within_last']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .string()
          .max(1024)
          .openapi({ description: 'Positive ISO 8601 duration, such as PT24H or P30D' }),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'datetime duration provider comparison',
      }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.first_seen_at',
            'defender.last_seen_at',
            'intune.android_security_patch_level',
            'intune.attestation_issued_at',
            'intune.compliance_grace_period_expiration_at',
            'intune.eas_activated_at',
            'intune.enrolled_at',
            'intune.exchange_last_successful_sync_at',
            'intune.last_sync_at',
            'intune.management_certificate_expires_at',
            'iru.activation_lock_collected_at',
            'iru.filevault_collected_at',
            'iru.filevault_key_rotation_scheduled_at',
            'iru.firewall_collected_at',
            'iru.first_enrolled_at',
            'iru.gatekeeper_collected_at',
            'iru.inventory_collected_at',
            'iru.last_check_in_at',
            'iru.last_enrolled_at',
            'iru.startup_settings_collected_at',
            'santa.first_seen_at',
            'santa.last_preflight_at',
            'santa.last_sync_at',
            'santa.rule_sync_at',
            'santa.temporary_admin_mode_ends_at',
            'santa.temporary_monitor_mode_ends_at',
            'sentinelone.first_full_mode_at',
            'sentinelone.full_disk_scan_updated_at',
            'sentinelone.last_active_at',
            'sentinelone.last_successful_scan_at',
            'sentinelone.operational_state_expires_at',
            'sentinelone.os_start_time',
            'sentinelone.registered_at',
            'sentinelone.remote_profiling_state_expires_at',
            'sentinelone.scan_aborted_at',
            'sentinelone.scan_finished_at',
            'sentinelone.scan_started_at',
            'sophos.last_agent_update_at',
            'sophos.last_os_update_at',
            'sophos.last_seen_at',
          ])
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'datetime no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.first_seen_at',
            'defender.last_seen_at',
            'intune.android_security_patch_level',
            'intune.attestation_issued_at',
            'intune.compliance_grace_period_expiration_at',
            'intune.eas_activated_at',
            'intune.enrolled_at',
            'intune.exchange_last_successful_sync_at',
            'intune.last_sync_at',
            'intune.management_certificate_expires_at',
            'iru.activation_lock_collected_at',
            'iru.filevault_collected_at',
            'iru.filevault_key_rotation_scheduled_at',
            'iru.firewall_collected_at',
            'iru.first_enrolled_at',
            'iru.gatekeeper_collected_at',
            'iru.inventory_collected_at',
            'iru.last_check_in_at',
            'iru.last_enrolled_at',
            'iru.startup_settings_collected_at',
            'santa.first_seen_at',
            'santa.last_preflight_at',
            'santa.last_sync_at',
            'santa.rule_sync_at',
            'santa.temporary_admin_mode_ends_at',
            'santa.temporary_monitor_mode_ends_at',
            'sentinelone.first_full_mode_at',
            'sentinelone.full_disk_scan_updated_at',
            'sentinelone.last_active_at',
            'sentinelone.last_successful_scan_at',
            'sentinelone.operational_state_expires_at',
            'sentinelone.os_start_time',
            'sentinelone.registered_at',
            'sentinelone.remote_profiling_state_expires_at',
            'sentinelone.scan_aborted_at',
            'sentinelone.scan_finished_at',
            'sentinelone.scan_started_at',
            'sophos.last_agent_update_at',
            'sophos.last_os_update_at',
            'sophos.last_seen_at',
          ])
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['before', 'after']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.iso.datetime({ offset: true }).max(1024),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'datetime scalar provider comparison',
      }),
    z
      .strictObject({
        field: z
          .literal('firezone.last_attested_at')
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['within_last', 'not_within_last']),
        value: z
          .string()
          .max(1024)
          .openapi({ description: 'Positive ISO 8601 duration, such as PT24H or P30D' }),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'datetime duration device comparison',
      }),
    z
      .strictObject({
        field: z
          .literal('firezone.last_attested_at')
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'datetime no_value device comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.last_attested_at')
          .openapi({
            description: 'datetime field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['before', 'after']),
        value: z.iso.datetime({ offset: true }).max(1024),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'datetime scalar device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.device_value',
            'defender.exclusion_reason',
            'defender.exposure_level',
            'defender.health_status',
            'defender.managed_by',
            'defender.managed_by_status',
            'defender.onboarding_status',
            'defender.os_architecture',
            'defender.os_platform',
            'defender.risk_score',
            'intune.attestation_status',
            'intune.compliance_state',
            'intune.device_enrollment_type',
            'intune.device_registration_state',
            'intune.exchange_access_state',
            'intune.exchange_access_state_reason',
            'intune.managed_device_owner_type',
            'intune.management_agent',
            'intune.management_state',
            'intune.partner_reported_threat_state',
            'iru.cellular_technology',
            'iru.device_family',
            'iru.external_boot_level',
            'iru.filevault_key_type',
            'iru.firewall_logging_option',
            'iru.lost_mode_status',
            'iru.platform',
            'iru.secure_boot_level',
            'santa.configured_client_mode',
            'santa.last_seen_client_mode',
            'santa.os_type',
            'sentinelone.apps_vulnerability_status',
            'sentinelone.console_migration_status',
            'sentinelone.detection_state',
            'sentinelone.installer_type',
            'sentinelone.location_type',
            'sentinelone.machine_type',
            'sentinelone.mitigation_mode',
            'sentinelone.mitigation_mode_suspicious',
            'sentinelone.network_status',
            'sentinelone.operational_state',
            'sentinelone.os_arch',
            'sentinelone.os_type',
            'sentinelone.proxy_method',
            'sentinelone.ranger_status',
            'sentinelone.remote_profiling_state',
            'sentinelone.scan_status',
            'sophos.cloud_provider',
            'sophos.encryption_overall_status',
            'sophos.health_overall',
            'sophos.health_services_status',
            'sophos.health_threats_status',
            'sophos.isolation_status',
            'sophos.lockdown_status',
            'sophos.os_platform',
            'sophos.type',
          ])
          .openapi({
            description: 'enum_string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is_in', 'is_not_in']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'enum_string list provider comparison',
      }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.device_value',
            'defender.exclusion_reason',
            'defender.exposure_level',
            'defender.health_status',
            'defender.managed_by',
            'defender.managed_by_status',
            'defender.onboarding_status',
            'defender.os_architecture',
            'defender.os_platform',
            'defender.risk_score',
            'intune.attestation_status',
            'intune.compliance_state',
            'intune.device_enrollment_type',
            'intune.device_registration_state',
            'intune.exchange_access_state',
            'intune.exchange_access_state_reason',
            'intune.managed_device_owner_type',
            'intune.management_agent',
            'intune.management_state',
            'intune.partner_reported_threat_state',
            'iru.cellular_technology',
            'iru.device_family',
            'iru.external_boot_level',
            'iru.filevault_key_type',
            'iru.firewall_logging_option',
            'iru.lost_mode_status',
            'iru.platform',
            'iru.secure_boot_level',
            'santa.configured_client_mode',
            'santa.last_seen_client_mode',
            'santa.os_type',
            'sentinelone.apps_vulnerability_status',
            'sentinelone.console_migration_status',
            'sentinelone.detection_state',
            'sentinelone.installer_type',
            'sentinelone.location_type',
            'sentinelone.machine_type',
            'sentinelone.mitigation_mode',
            'sentinelone.mitigation_mode_suspicious',
            'sentinelone.network_status',
            'sentinelone.operational_state',
            'sentinelone.os_arch',
            'sentinelone.os_type',
            'sentinelone.proxy_method',
            'sentinelone.ranger_status',
            'sentinelone.remote_profiling_state',
            'sentinelone.scan_status',
            'sophos.cloud_provider',
            'sophos.encryption_overall_status',
            'sophos.health_overall',
            'sophos.health_services_status',
            'sophos.health_threats_status',
            'sophos.isolation_status',
            'sophos.lockdown_status',
            'sophos.os_platform',
            'sophos.type',
          ])
          .openapi({
            description: 'enum_string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'enum_string no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.device_value',
            'defender.exclusion_reason',
            'defender.exposure_level',
            'defender.health_status',
            'defender.managed_by',
            'defender.managed_by_status',
            'defender.onboarding_status',
            'defender.os_architecture',
            'defender.os_platform',
            'defender.risk_score',
            'intune.attestation_status',
            'intune.compliance_state',
            'intune.device_enrollment_type',
            'intune.device_registration_state',
            'intune.exchange_access_state',
            'intune.exchange_access_state_reason',
            'intune.managed_device_owner_type',
            'intune.management_agent',
            'intune.management_state',
            'intune.partner_reported_threat_state',
            'iru.cellular_technology',
            'iru.device_family',
            'iru.external_boot_level',
            'iru.filevault_key_type',
            'iru.firewall_logging_option',
            'iru.lost_mode_status',
            'iru.platform',
            'iru.secure_boot_level',
            'santa.configured_client_mode',
            'santa.last_seen_client_mode',
            'santa.os_type',
            'sentinelone.apps_vulnerability_status',
            'sentinelone.console_migration_status',
            'sentinelone.detection_state',
            'sentinelone.installer_type',
            'sentinelone.location_type',
            'sentinelone.machine_type',
            'sentinelone.mitigation_mode',
            'sentinelone.mitigation_mode_suspicious',
            'sentinelone.network_status',
            'sentinelone.operational_state',
            'sentinelone.os_arch',
            'sentinelone.os_type',
            'sentinelone.proxy_method',
            'sentinelone.ranger_status',
            'sentinelone.remote_profiling_state',
            'sentinelone.scan_status',
            'sophos.cloud_provider',
            'sophos.encryption_overall_status',
            'sophos.health_overall',
            'sophos.health_services_status',
            'sophos.health_threats_status',
            'sophos.isolation_status',
            'sophos.lockdown_status',
            'sophos.os_platform',
            'sophos.type',
          ])
          .openapi({
            description: 'enum_string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['matches', 'does_not_match']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .string()
          .max(256)
          .openapi({ description: 'Regular expression; at most 256 bytes' }),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'enum_string regex provider comparison',
      }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.device_value',
            'defender.exclusion_reason',
            'defender.exposure_level',
            'defender.health_status',
            'defender.managed_by',
            'defender.managed_by_status',
            'defender.onboarding_status',
            'defender.os_architecture',
            'defender.os_platform',
            'defender.risk_score',
            'intune.attestation_status',
            'intune.compliance_state',
            'intune.device_enrollment_type',
            'intune.device_registration_state',
            'intune.exchange_access_state',
            'intune.exchange_access_state_reason',
            'intune.managed_device_owner_type',
            'intune.management_agent',
            'intune.management_state',
            'intune.partner_reported_threat_state',
            'iru.cellular_technology',
            'iru.device_family',
            'iru.external_boot_level',
            'iru.filevault_key_type',
            'iru.firewall_logging_option',
            'iru.lost_mode_status',
            'iru.platform',
            'iru.secure_boot_level',
            'santa.configured_client_mode',
            'santa.last_seen_client_mode',
            'santa.os_type',
            'sentinelone.apps_vulnerability_status',
            'sentinelone.console_migration_status',
            'sentinelone.detection_state',
            'sentinelone.installer_type',
            'sentinelone.location_type',
            'sentinelone.machine_type',
            'sentinelone.mitigation_mode',
            'sentinelone.mitigation_mode_suspicious',
            'sentinelone.network_status',
            'sentinelone.operational_state',
            'sentinelone.os_arch',
            'sentinelone.os_type',
            'sentinelone.proxy_method',
            'sentinelone.ranger_status',
            'sentinelone.remote_profiling_state',
            'sentinelone.scan_status',
            'sophos.cloud_provider',
            'sophos.encryption_overall_status',
            'sophos.health_overall',
            'sophos.health_services_status',
            'sophos.health_threats_status',
            'sophos.isolation_status',
            'sophos.lockdown_status',
            'sophos.os_platform',
            'sophos.type',
          ])
          .openapi({
            description: 'enum_string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.string().max(1024),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'enum_string scalar provider comparison',
      }),
    z
      .strictObject({
        field: z
          .literal('iru.device_capacity_gb')
          .openapi({
            description: 'float field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'float no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .literal('iru.device_capacity_gb')
          .openapi({
            description: 'float field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['eq', 'ne', 'gt', 'gte', 'lt', 'lte']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.number(),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'float scalar provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.os_build',
            'defender.rbac_group_id',
            'intune.attestation_reset_count',
            'intune.attestation_restart_count',
            'intune.free_storage_space_bytes',
            'intune.physical_memory_bytes',
            'intune.total_storage_space_bytes',
            'santa.sip_status',
            'sentinelone.active_threats',
            'sentinelone.core_count',
            'sentinelone.cpu_count',
            'sentinelone.protected_containers_count',
            'sentinelone.protected_pods_count',
            'sentinelone.protected_tasks_count',
            'sentinelone.total_memory',
            'sophos.os_build',
            'sophos.os_major_version',
            'sophos.os_minor_version',
          ])
          .openapi({
            description: 'integer field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'integer no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.os_build',
            'defender.rbac_group_id',
            'intune.attestation_reset_count',
            'intune.attestation_restart_count',
            'intune.free_storage_space_bytes',
            'intune.physical_memory_bytes',
            'intune.total_storage_space_bytes',
            'santa.sip_status',
            'sentinelone.active_threats',
            'sentinelone.core_count',
            'sentinelone.cpu_count',
            'sentinelone.protected_containers_count',
            'sentinelone.protected_pods_count',
            'sentinelone.protected_tasks_count',
            'sentinelone.total_memory',
            'sophos.os_build',
            'sophos.os_major_version',
            'sophos.os_minor_version',
          ])
          .openapi({
            description: 'integer field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['eq', 'ne', 'gt', 'gte', 'lt', 'lte']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.int(),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'integer scalar provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.last_external_ip_address',
            'defender.last_ip_address',
            'santa.last_preflight_ip',
            'sentinelone.external_ip',
            'sentinelone.last_ip_to_management',
          ])
          .openapi({ description: 'ip field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'ip list provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.last_external_ip_address',
            'defender.last_ip_address',
            'santa.last_preflight_ip',
            'sentinelone.external_ip',
            'sentinelone.last_ip_to_management',
          ])
          .openapi({ description: 'ip field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'ip no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.ipv4')
          .openapi({ description: 'ipv4 field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'ipv4 list device comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.ipv4')
          .openapi({ description: 'ipv4 field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['exists', 'does_not_exist']),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'ipv4 no_value device comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.ipv6')
          .openapi({ description: 'ipv6 field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'ipv6 list device comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.ipv6')
          .openapi({ description: 'ipv6 field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['exists', 'does_not_exist']),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'ipv6 no_value device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.ip_addresses',
            'sentinelone.cloud_providers',
            'sentinelone.locations',
            'sentinelone.network_interfaces',
            'sentinelone.tags',
            'sophos.assigned_products',
            'sophos.device_software',
            'sophos.encryption_volumes',
            'sophos.group_hierarchy',
            'sophos.health_service_details',
            'sophos.packages',
            'sophos.tags',
          ])
          .openapi({ description: 'json field; see PolicyPostureNode for platform applicability' }),
        op: z.enum(['is_empty', 'is_not_empty', 'exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'json no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.computer_dns_name',
            'defender.defender_id',
            'defender.entra_device_id',
            'defender.os_processor',
            'defender.rbac_group_name',
            'defender.version',
            'defender.vm_cloud_provider',
            'defender.vm_id',
            'defender.vm_resource_id',
            'defender.vm_subscription_id',
            'intune.attestation_boot_revision_list_info',
            'intune.attestation_code_integrity_policy',
            'intune.attestation_health_status_mismatch_info',
            'intune.attestation_identity_key',
            'intune.attestation_operating_system_rev_list_info',
            'intune.attestation_pcr0',
            'intune.attestation_pcr_hash_algorithm',
            'intune.attestation_secure_boot_config_policy_fingerprint',
            'intune.device_category_display_name',
            'intune.device_name',
            'intune.eas_device_id',
            'intune.email_address',
            'intune.enrollment_profile_name',
            'intune.entra_device_id',
            'intune.ethernet_mac_address',
            'intune.iccid',
            'intune.imei',
            'intune.intune_id',
            'intune.managed_device_name',
            'intune.manufacturer',
            'intune.meid',
            'intune.model',
            'intune.notes',
            'intune.operating_system',
            'intune.phone_number',
            'intune.serial_number',
            'intune.subscriber_carrier',
            'intune.udid',
            'intune.user_display_name',
            'intune.user_id',
            'intune.user_principal_name',
            'intune.wifi_mac_address',
            'iru.asset_tag',
            'iru.blueprint_id',
            'iru.blueprint_name',
            'iru.device_name',
            'iru.host_name',
            'iru.iru_id',
            'iru.local_hostname',
            'iru.model',
            'iru.model_identifier',
            'iru.model_name',
            'iru.os_build',
            'iru.os_name',
            'iru.serial_number',
            'iru.supplemental_build_version',
            'iru.user_email',
            'iru.user_id',
            'iru.user_name',
            'santa.hostname',
            'santa.machine_model',
            'santa.os_build',
            'santa.primary_user',
            'santa.santa_id',
            'santa.serial_number',
            'santa.temporary_admin_mode_user',
            'sentinelone.account_name',
            'sentinelone.ad_computer_distinguished_name',
            'sentinelone.ad_last_user_distinguished_name',
            'sentinelone.ad_mail',
            'sentinelone.ad_user_principal_name',
            'sentinelone.computer_name',
            'sentinelone.cpu_id',
            'sentinelone.domain',
            'sentinelone.external_id',
            'sentinelone.group_id',
            'sentinelone.group_ip',
            'sentinelone.group_name',
            'sentinelone.last_logged_in_user_name',
            'sentinelone.machine_sid',
            'sentinelone.model_name',
            'sentinelone.os_name',
            'sentinelone.os_username',
            'sentinelone.sentinelone_account_id',
            'sentinelone.sentinelone_id',
            'sentinelone.serial_number',
            'sentinelone.site_id',
            'sentinelone.site_name',
            'sentinelone.storage_name',
            'sentinelone.storage_type',
            'sentinelone.uuid',
            'sophos.associated_person_id',
            'sophos.associated_person_name',
            'sophos.associated_person_via_login',
            'sophos.cloud_instance_id',
            'sophos.group_id',
            'sophos.group_name',
            'sophos.hostname',
            'sophos.os_name',
            'sophos.serial_number',
            'sophos.sophos_id',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is_in', 'is_not_in']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string list provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.computer_dns_name',
            'defender.defender_id',
            'defender.entra_device_id',
            'defender.os_processor',
            'defender.rbac_group_name',
            'defender.version',
            'defender.vm_cloud_provider',
            'defender.vm_id',
            'defender.vm_resource_id',
            'defender.vm_subscription_id',
            'intune.attestation_boot_revision_list_info',
            'intune.attestation_code_integrity_policy',
            'intune.attestation_health_status_mismatch_info',
            'intune.attestation_identity_key',
            'intune.attestation_operating_system_rev_list_info',
            'intune.attestation_pcr0',
            'intune.attestation_pcr_hash_algorithm',
            'intune.attestation_secure_boot_config_policy_fingerprint',
            'intune.device_category_display_name',
            'intune.device_name',
            'intune.eas_device_id',
            'intune.email_address',
            'intune.enrollment_profile_name',
            'intune.entra_device_id',
            'intune.ethernet_mac_address',
            'intune.iccid',
            'intune.imei',
            'intune.intune_id',
            'intune.managed_device_name',
            'intune.manufacturer',
            'intune.meid',
            'intune.model',
            'intune.notes',
            'intune.operating_system',
            'intune.phone_number',
            'intune.serial_number',
            'intune.subscriber_carrier',
            'intune.udid',
            'intune.user_display_name',
            'intune.user_id',
            'intune.user_principal_name',
            'intune.wifi_mac_address',
            'iru.asset_tag',
            'iru.blueprint_id',
            'iru.blueprint_name',
            'iru.device_name',
            'iru.host_name',
            'iru.iru_id',
            'iru.local_hostname',
            'iru.model',
            'iru.model_identifier',
            'iru.model_name',
            'iru.os_build',
            'iru.os_name',
            'iru.serial_number',
            'iru.supplemental_build_version',
            'iru.user_email',
            'iru.user_id',
            'iru.user_name',
            'santa.hostname',
            'santa.machine_model',
            'santa.os_build',
            'santa.primary_user',
            'santa.santa_id',
            'santa.serial_number',
            'santa.temporary_admin_mode_user',
            'sentinelone.account_name',
            'sentinelone.ad_computer_distinguished_name',
            'sentinelone.ad_last_user_distinguished_name',
            'sentinelone.ad_mail',
            'sentinelone.ad_user_principal_name',
            'sentinelone.computer_name',
            'sentinelone.cpu_id',
            'sentinelone.domain',
            'sentinelone.external_id',
            'sentinelone.group_id',
            'sentinelone.group_ip',
            'sentinelone.group_name',
            'sentinelone.last_logged_in_user_name',
            'sentinelone.machine_sid',
            'sentinelone.model_name',
            'sentinelone.os_name',
            'sentinelone.os_username',
            'sentinelone.sentinelone_account_id',
            'sentinelone.sentinelone_id',
            'sentinelone.serial_number',
            'sentinelone.site_id',
            'sentinelone.site_name',
            'sentinelone.storage_name',
            'sentinelone.storage_type',
            'sentinelone.uuid',
            'sophos.associated_person_id',
            'sophos.associated_person_name',
            'sophos.associated_person_via_login',
            'sophos.cloud_instance_id',
            'sophos.group_id',
            'sophos.group_name',
            'sophos.hostname',
            'sophos.os_name',
            'sophos.serial_number',
            'sophos.sophos_id',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'string no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.computer_dns_name',
            'defender.defender_id',
            'defender.entra_device_id',
            'defender.os_processor',
            'defender.rbac_group_name',
            'defender.version',
            'defender.vm_cloud_provider',
            'defender.vm_id',
            'defender.vm_resource_id',
            'defender.vm_subscription_id',
            'intune.attestation_boot_revision_list_info',
            'intune.attestation_code_integrity_policy',
            'intune.attestation_health_status_mismatch_info',
            'intune.attestation_identity_key',
            'intune.attestation_operating_system_rev_list_info',
            'intune.attestation_pcr0',
            'intune.attestation_pcr_hash_algorithm',
            'intune.attestation_secure_boot_config_policy_fingerprint',
            'intune.device_category_display_name',
            'intune.device_name',
            'intune.eas_device_id',
            'intune.email_address',
            'intune.enrollment_profile_name',
            'intune.entra_device_id',
            'intune.ethernet_mac_address',
            'intune.iccid',
            'intune.imei',
            'intune.intune_id',
            'intune.managed_device_name',
            'intune.manufacturer',
            'intune.meid',
            'intune.model',
            'intune.notes',
            'intune.operating_system',
            'intune.phone_number',
            'intune.serial_number',
            'intune.subscriber_carrier',
            'intune.udid',
            'intune.user_display_name',
            'intune.user_id',
            'intune.user_principal_name',
            'intune.wifi_mac_address',
            'iru.asset_tag',
            'iru.blueprint_id',
            'iru.blueprint_name',
            'iru.device_name',
            'iru.host_name',
            'iru.iru_id',
            'iru.local_hostname',
            'iru.model',
            'iru.model_identifier',
            'iru.model_name',
            'iru.os_build',
            'iru.os_name',
            'iru.serial_number',
            'iru.supplemental_build_version',
            'iru.user_email',
            'iru.user_id',
            'iru.user_name',
            'santa.hostname',
            'santa.machine_model',
            'santa.os_build',
            'santa.primary_user',
            'santa.santa_id',
            'santa.serial_number',
            'santa.temporary_admin_mode_user',
            'sentinelone.account_name',
            'sentinelone.ad_computer_distinguished_name',
            'sentinelone.ad_last_user_distinguished_name',
            'sentinelone.ad_mail',
            'sentinelone.ad_user_principal_name',
            'sentinelone.computer_name',
            'sentinelone.cpu_id',
            'sentinelone.domain',
            'sentinelone.external_id',
            'sentinelone.group_id',
            'sentinelone.group_ip',
            'sentinelone.group_name',
            'sentinelone.last_logged_in_user_name',
            'sentinelone.machine_sid',
            'sentinelone.model_name',
            'sentinelone.os_name',
            'sentinelone.os_username',
            'sentinelone.sentinelone_account_id',
            'sentinelone.sentinelone_id',
            'sentinelone.serial_number',
            'sentinelone.site_id',
            'sentinelone.site_name',
            'sentinelone.storage_name',
            'sentinelone.storage_type',
            'sentinelone.uuid',
            'sophos.associated_person_id',
            'sophos.associated_person_name',
            'sophos.associated_person_via_login',
            'sophos.cloud_instance_id',
            'sophos.group_id',
            'sophos.group_name',
            'sophos.hostname',
            'sophos.os_name',
            'sophos.serial_number',
            'sophos.sophos_id',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['matches', 'does_not_match']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .string()
          .max(256)
          .openapi({ description: 'Regular expression; at most 256 bytes' }),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string regex provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.computer_dns_name',
            'defender.defender_id',
            'defender.entra_device_id',
            'defender.os_processor',
            'defender.rbac_group_name',
            'defender.version',
            'defender.vm_cloud_provider',
            'defender.vm_id',
            'defender.vm_resource_id',
            'defender.vm_subscription_id',
            'intune.attestation_boot_revision_list_info',
            'intune.attestation_code_integrity_policy',
            'intune.attestation_health_status_mismatch_info',
            'intune.attestation_identity_key',
            'intune.attestation_operating_system_rev_list_info',
            'intune.attestation_pcr0',
            'intune.attestation_pcr_hash_algorithm',
            'intune.attestation_secure_boot_config_policy_fingerprint',
            'intune.device_category_display_name',
            'intune.device_name',
            'intune.eas_device_id',
            'intune.email_address',
            'intune.enrollment_profile_name',
            'intune.entra_device_id',
            'intune.ethernet_mac_address',
            'intune.iccid',
            'intune.imei',
            'intune.intune_id',
            'intune.managed_device_name',
            'intune.manufacturer',
            'intune.meid',
            'intune.model',
            'intune.notes',
            'intune.operating_system',
            'intune.phone_number',
            'intune.serial_number',
            'intune.subscriber_carrier',
            'intune.udid',
            'intune.user_display_name',
            'intune.user_id',
            'intune.user_principal_name',
            'intune.wifi_mac_address',
            'iru.asset_tag',
            'iru.blueprint_id',
            'iru.blueprint_name',
            'iru.device_name',
            'iru.host_name',
            'iru.iru_id',
            'iru.local_hostname',
            'iru.model',
            'iru.model_identifier',
            'iru.model_name',
            'iru.os_build',
            'iru.os_name',
            'iru.serial_number',
            'iru.supplemental_build_version',
            'iru.user_email',
            'iru.user_id',
            'iru.user_name',
            'santa.hostname',
            'santa.machine_model',
            'santa.os_build',
            'santa.primary_user',
            'santa.santa_id',
            'santa.serial_number',
            'santa.temporary_admin_mode_user',
            'sentinelone.account_name',
            'sentinelone.ad_computer_distinguished_name',
            'sentinelone.ad_last_user_distinguished_name',
            'sentinelone.ad_mail',
            'sentinelone.ad_user_principal_name',
            'sentinelone.computer_name',
            'sentinelone.cpu_id',
            'sentinelone.domain',
            'sentinelone.external_id',
            'sentinelone.group_id',
            'sentinelone.group_ip',
            'sentinelone.group_name',
            'sentinelone.last_logged_in_user_name',
            'sentinelone.machine_sid',
            'sentinelone.model_name',
            'sentinelone.os_name',
            'sentinelone.os_username',
            'sentinelone.sentinelone_account_id',
            'sentinelone.sentinelone_id',
            'sentinelone.serial_number',
            'sentinelone.site_id',
            'sentinelone.site_name',
            'sentinelone.storage_name',
            'sentinelone.storage_type',
            'sentinelone.uuid',
            'sophos.associated_person_id',
            'sophos.associated_person_name',
            'sophos.associated_person_via_login',
            'sophos.cloud_instance_id',
            'sophos.group_id',
            'sophos.group_name',
            'sophos.hostname',
            'sophos.os_name',
            'sophos.serial_number',
            'sophos.sophos_id',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.string().max(1024),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string scalar provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'firezone.device_serial',
            'firezone.device_uuid',
            'firezone.hostname',
            'firezone.identifier_for_vendor',
            'firezone.last_attested_cert_fingerprint',
            'firezone.last_attested_cert_serial',
            'firezone.last_attested_device_serial',
            'firezone.last_attested_device_uuid',
            'firezone.last_attested_mdm_device_id',
            'firezone.last_seen_remote_ip_location_city',
            'firezone.last_seen_user_agent',
            'firezone.name',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is_in', 'is_not_in']),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string list device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'firezone.device_serial',
            'firezone.device_uuid',
            'firezone.hostname',
            'firezone.identifier_for_vendor',
            'firezone.last_attested_cert_fingerprint',
            'firezone.last_attested_cert_serial',
            'firezone.last_attested_device_serial',
            'firezone.last_attested_device_uuid',
            'firezone.last_attested_mdm_device_id',
            'firezone.last_seen_remote_ip_location_city',
            'firezone.last_seen_user_agent',
            'firezone.name',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'string no_value device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'firezone.device_serial',
            'firezone.device_uuid',
            'firezone.hostname',
            'firezone.identifier_for_vendor',
            'firezone.last_attested_cert_fingerprint',
            'firezone.last_attested_cert_serial',
            'firezone.last_attested_device_serial',
            'firezone.last_attested_device_uuid',
            'firezone.last_attested_mdm_device_id',
            'firezone.last_seen_remote_ip_location_city',
            'firezone.last_seen_user_agent',
            'firezone.name',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['matches', 'does_not_match']),
        value: z
          .string()
          .max(256)
          .openapi({ description: 'Regular expression; at most 256 bytes' }),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string regex device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'firezone.device_serial',
            'firezone.device_uuid',
            'firezone.hostname',
            'firezone.identifier_for_vendor',
            'firezone.last_attested_cert_fingerprint',
            'firezone.last_attested_cert_serial',
            'firezone.last_attested_device_serial',
            'firezone.last_attested_device_uuid',
            'firezone.last_attested_mdm_device_id',
            'firezone.last_seen_remote_ip_location_city',
            'firezone.last_seen_user_agent',
            'firezone.name',
          ])
          .openapi({
            description: 'string field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
        value: z.string().max(1024),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'string scalar device comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.machine_tags',
            'iru.tags',
            'santa.primary_user_groups',
            'santa.tags',
            'sentinelone.active_protection',
            'sentinelone.ad_computer_member_of',
            'sentinelone.ad_last_user_member_of',
            'sentinelone.missing_permissions',
            'sentinelone.user_actions_needed',
            'sophos.ipv4_addresses',
            'sophos.ipv6_addresses',
            'sophos.mac_addresses',
          ])
          .openapi({
            description: 'string_array field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['contains_any_of', 'contains_all_of']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.array(z.string().max(1024)).min(1).max(100),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'string_array list provider comparison',
      }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.machine_tags',
            'iru.tags',
            'santa.primary_user_groups',
            'santa.tags',
            'sentinelone.active_protection',
            'sentinelone.ad_computer_member_of',
            'sentinelone.ad_last_user_member_of',
            'sentinelone.missing_permissions',
            'sentinelone.user_actions_needed',
            'sophos.ipv4_addresses',
            'sophos.ipv6_addresses',
            'sophos.mac_addresses',
          ])
          .openapi({
            description: 'string_array field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is_empty', 'is_not_empty', 'exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'string_array no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.machine_tags',
            'iru.tags',
            'santa.primary_user_groups',
            'santa.tags',
            'sentinelone.active_protection',
            'sentinelone.ad_computer_member_of',
            'sentinelone.ad_last_user_member_of',
            'sentinelone.missing_permissions',
            'sentinelone.user_actions_needed',
            'sophos.ipv4_addresses',
            'sophos.ipv6_addresses',
            'sophos.mac_addresses',
          ])
          .openapi({
            description: 'string_array field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['contains', 'does_not_contain']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z.string().max(1024),
      })
      .openapi({
        required: ['field', 'op', 'value'],
        title: 'string_array scalar provider comparison',
      }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.agent_version',
            'intune.attestation_boot_app_security_version',
            'intune.attestation_boot_manager_security_version',
            'intune.attestation_boot_manager_version',
            'intune.attestation_code_integrity_check_version',
            'intune.attestation_content_version',
            'intune.attestation_tpm_version',
            'intune.os_version',
            'iru.agent_version',
            'iru.display_os_version',
            'iru.firewall_version',
            'iru.gatekeeper_opaque_version',
            'iru.gatekeeper_version',
            'iru.malware_removal_tool_version',
            'iru.os_version',
            'iru.supplemental_os_version_extra',
            'iru.xprotect_version',
            'santa.os_version',
            'santa.santa_version',
            'santa.santanetd_version',
            'sentinelone.agent_version',
            'sentinelone.os_revision',
            'sentinelone.ranger_version',
          ])
          .openapi({
            description: 'version field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'version no_value provider comparison' }),
    z
      .strictObject({
        field: z
          .enum([
            'defender.agent_version',
            'intune.attestation_boot_app_security_version',
            'intune.attestation_boot_manager_security_version',
            'intune.attestation_boot_manager_version',
            'intune.attestation_code_integrity_check_version',
            'intune.attestation_content_version',
            'intune.attestation_tpm_version',
            'intune.os_version',
            'iru.agent_version',
            'iru.display_os_version',
            'iru.firewall_version',
            'iru.gatekeeper_opaque_version',
            'iru.gatekeeper_version',
            'iru.malware_removal_tool_version',
            'iru.os_version',
            'iru.supplemental_os_version_extra',
            'iru.xprotect_version',
            'santa.os_version',
            'santa.santa_version',
            'santa.santanetd_version',
            'sentinelone.agent_version',
            'sentinelone.os_revision',
            'sentinelone.ranger_version',
          ])
          .openapi({
            description: 'version field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is', 'is_not', 'gt', 'gte', 'lt', 'lte']),
        rows: z
          .enum(['any', 'all'])
          .default('any')
          .exactOptional()
          .openapi({
            description: 'Match any or every provider row; applies to this leaf independently',
          }),
        value: z
          .string()
          .max(1024)
          .openapi({
            description: 'Segment-wise version, or @latest for firezone.last_seen_version only',
          }),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'version scalar provider comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.last_seen_version')
          .openapi({
            description: 'version field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['exists', 'does_not_exist']),
        value: z
          .literal(null)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Omit value or use null for this operator' }),
      })
      .openapi({ required: ['field', 'op'], title: 'version no_value device comparison' }),
    z
      .strictObject({
        field: z
          .literal('firezone.last_seen_version')
          .openapi({
            description: 'version field; see PolicyPostureNode for platform applicability',
          }),
        op: z.enum(['is', 'is_not', 'gt', 'gte', 'lt', 'lte']),
        value: z
          .string()
          .max(1024)
          .openapi({
            description: 'Segment-wise version, or @latest for firezone.last_seen_version only',
          }),
      })
      .openapi({ required: ['field', 'op', 'value'], title: 'version scalar device comparison' }),
  ])
  .openapi({
    description:
      'One typed comparison. Each alternative enumerates valid fields, their\noperators, and the corresponding value type. All keys are explicit;\nunknown keys are rejected. Provider comparisons optionally accept `rows`;\nFirezone device comparisons do not.\n\nValue length limits are enforced in bytes by the policy parser, including\neach string in a list. The parser additionally checks regex syntax,\nversions, CIDR address families, positive durations, and the `@latest`\nmacro. See PolicyPostureNode for platform and missing-data semantics.\n',
    example: { field: 'intune.compliance_state', op: 'is', rows: 'all', value: 'compliant' },
    title: 'PolicyPostureLeaf',
  })
  .openapi('PolicyPostureLeaf')

type PolicyPostureNodeType =
  | z.infer<typeof PolicyPostureAndSchema>
  | z.infer<typeof PolicyPostureOrSchema>
  | z.infer<typeof PolicyPostureNotSchema>
  | z.infer<typeof PolicyPostureLeafSchema>

const PolicyPostureNodeSchema: z.ZodType<PolicyPostureNodeType> = z
  .lazy(() =>
    z
      .xor([
        PolicyPostureAndSchema,
        PolicyPostureOrSchema,
        PolicyPostureNotSchema,
        PolicyPostureLeafSchema,
      ])
      .openapi({
        description:
          "One node of a Policy's device posture expression. A node has exactly one\nof these shapes:\n\n* `and`: a non-empty list of nodes that must all hold.\n* `or`: a non-empty list of nodes of which at least one must hold.\n* `not`: a node that must not hold.\n* a leaf: a `field`, an `op`, and for most operators a `value`.\n\nA leaf's `field` is `<provider>.<attribute>`, such as\n`intune.compliance_state` or `firezone.last_seen_version`. The provider\nis one of `firezone` (the connecting device's own record), `intune`,\n`iru`, `defender`, `santa`, `sentinelone` or `sophos`. The attribute is\none of that provider's synced device attributes. Every synced provider also has a\nboolean `enrolled` that is true when the provider knows the device.\n\nThe attribute's type decides which operators apply and what `value`\nmust be:\n\n* strings: `is`, `is_not`, `is_in`, `is_not_in`, `contains`,\n  `does_not_contain`, `starts_with`, `ends_with`, `matches`,\n  `does_not_match`. Comparisons ignore case. `is_in` and `is_not_in`\n  take a list of strings. `matches` and `does_not_match` take a regular\n  expression.\n* booleans: `is` with `true` or `false`.\n* numbers: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.\n* versions: `is`, `is_not`, `gt`, `gte`, `lt`, `lte`, compared segment\n  by segment, so `14.4` equals `14.4.0`.\n* timestamps: `before` and `after` with an ISO 8601 datetime such as\n  `2026-01-01T00:00:00Z`; `within_last` and `not_within_last` with an\n  ISO 8601 duration such as `PT24H` or `P30D`. A date-only attribute\n  counts as the start of that day in UTC.\n* IP addresses: `is_in_cidr` and `is_not_in_cidr` with a list of CIDRs.\n  `firezone.ipv4` takes IPv4 CIDRs only and `firezone.ipv6` IPv6 only.\n* lists of strings: `contains`, `does_not_contain`, `contains_any_of`,\n  `contains_all_of`, `is_empty`, `is_not_empty`.\n* JSON attributes: `is_empty`, `is_not_empty`.\n\nThe value `@latest` on `firezone.last_seen_version` stands for the newest\nClient release for the device's platform.\n\n`enum_string` uses the string operators; `integer` and `float` use the\nnumeric operators. `string_array` values use a single string for `contains`\nand `does_not_contain`, or a non-empty string list for `contains_any_of`\nand `contains_all_of`.\n\nEvery attribute also accepts `exists` and `does_not_exist`. These and\n`is_empty` / `is_not_empty` take no value: omit `value` or set it to null.\nMissing attributes fail every operator except `does_not_exist`, including\nnegative operators such as `is_not`. A missing provider is evaluated as\none empty row. Its synthetic `enrolled` field is false, so `enrolled is\nfalse` can explicitly match an unenrolled device. `not` negates the\nresult and can also match missing data; use a positive `enrolled is true`\ncheck when enrollment is required.\n\nLeaves that do not apply to the device's platform are removed before\nevaluation, including inside `or` and `not`. An expression with no\napplicable leaves passes. If the platform is unknown, no leaves are\nremoved. Each field lists the platforms it applies to.\nProvider `os_up_to_date` fields are computed from known OS releases;\nthey are not raw provider attributes.\n\nWhen a device matches more than one record of a provider, a leaf holds\nwhen any record satisfies it. Set `rows` to `all` to require every\nrecord. Different leaves may match different provider rows; `and` does\nnot require one row to satisfy all leaves. `rows` is not allowed for\n`firezone`, which always describes exactly one connecting device.\n\nExpressions allow at most 10 nested boolean levels and 100 leaves.\nList values contain 1–100 items; strings are at most 1024 bytes and\nregular expressions at most 256 bytes. Unknown fields, incompatible\noperators, invalid values, and exceeded limits return HTTP 422 with\na path in `validation_errors.postures`.\n\n`GET /posture_fields` lists the same fields as structured data.\n\nSupported fields (generated from the same registry used for validation):\n\n### defender fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `defender.agent_version` | version | windows, macos, linux |\n| `defender.computer_dns_name` | string | windows, macos, linux |\n| `defender.defender_id` | string | windows, macos, linux |\n| `defender.device_value` | enum_string | windows, macos, linux |\n| `defender.enrolled` | boolean | windows, macos, linux |\n| `defender.entra_device_id` | string | windows, macos, linux |\n| `defender.entra_joined` | boolean | windows, macos, linux |\n| `defender.exclusion_reason` | enum_string | windows, macos, linux |\n| `defender.exposure_level` | enum_string | windows, macos, linux |\n| `defender.first_seen_at` | datetime | windows, macos, linux |\n| `defender.health_status` | enum_string | windows, macos, linux |\n| `defender.ip_addresses` | json | windows, macos, linux |\n| `defender.is_excluded` | boolean | windows, macos, linux |\n| `defender.is_potential_duplication` | boolean | windows, macos, linux |\n| `defender.last_external_ip_address` | ip | windows, macos, linux |\n| `defender.last_ip_address` | ip | windows, macos, linux |\n| `defender.last_seen_at` | datetime | windows, macos, linux |\n| `defender.machine_tags` | string_array | windows, macos, linux |\n| `defender.managed_by` | enum_string | windows, macos, linux |\n| `defender.managed_by_status` | enum_string | windows, macos, linux |\n| `defender.onboarding_status` | enum_string | windows, macos, linux |\n| `defender.os_architecture` | enum_string | windows, macos, linux |\n| `defender.os_build` | integer | windows, macos, linux |\n| `defender.os_platform` | enum_string | windows, macos, linux |\n| `defender.os_processor` | string | windows, macos, linux |\n| `defender.os_up_to_date` | boolean | macos |\n| `defender.rbac_group_id` | integer | windows, macos, linux |\n| `defender.rbac_group_name` | string | windows, macos, linux |\n| `defender.risk_score` | enum_string | windows, macos, linux |\n| `defender.version` | string | windows, macos, linux |\n| `defender.vm_cloud_provider` | string | windows, macos, linux |\n| `defender.vm_id` | string | windows, macos, linux |\n| `defender.vm_resource_id` | string | windows, macos, linux |\n| `defender.vm_subscription_id` | string | windows, macos, linux |\n\n### firezone fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `firezone.device_serial` | string | windows, macos, linux, ios, android |\n| `firezone.device_uuid` | string | windows, macos, linux, ios, android |\n| `firezone.hostname` | string | windows, macos, linux, ios, android |\n| `firezone.identifier_for_vendor` | string | windows, macos, linux, ios, android |\n| `firezone.ipv4` | ipv4 | windows, macos, linux, ios, android |\n| `firezone.ipv6` | ipv6 | windows, macos, linux, ios, android |\n| `firezone.last_attested_at` | datetime | windows, macos, linux, ios, android |\n| `firezone.last_attested_cert_fingerprint` | string | windows, macos, linux, ios, android |\n| `firezone.last_attested_cert_serial` | string | windows, macos, linux, ios, android |\n| `firezone.last_attested_device_serial` | string | windows, macos, linux, ios, android |\n| `firezone.last_attested_device_uuid` | string | windows, macos, linux, ios, android |\n| `firezone.last_attested_mdm_device_id` | string | windows, macos, linux, ios, android |\n| `firezone.last_seen_remote_ip_location_city` | string | windows, macos, linux, ios, android |\n| `firezone.last_seen_user_agent` | string | windows, macos, linux, ios, android |\n| `firezone.last_seen_version` | version | windows, macos, linux, ios, android |\n| `firezone.name` | string | windows, macos, linux, ios, android |\n\n### intune fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `intune.android_security_patch_level` | datetime | windows, macos, ios, android |\n| `intune.attestation_bit_locker_enabled` | boolean | windows |\n| `intune.attestation_boot_app_security_version` | version | windows |\n| `intune.attestation_boot_debugging` | boolean | windows |\n| `intune.attestation_boot_manager_security_version` | version | windows |\n| `intune.attestation_boot_manager_version` | version | windows |\n| `intune.attestation_boot_revision_list_info` | string | windows |\n| `intune.attestation_code_integrity` | boolean | windows |\n| `intune.attestation_code_integrity_check_version` | version | windows |\n| `intune.attestation_code_integrity_policy` | string | windows |\n| `intune.attestation_content_version` | version | windows |\n| `intune.attestation_data_execution_policy_enabled` | boolean | windows |\n| `intune.attestation_early_launch_anti_malware_driver_protection` | boolean | windows |\n| `intune.attestation_health_status_mismatch_info` | string | windows |\n| `intune.attestation_identity_key` | string | windows |\n| `intune.attestation_issued_at` | datetime | windows |\n| `intune.attestation_operating_system_kernel_debugging` | boolean | windows |\n| `intune.attestation_operating_system_rev_list_info` | string | windows |\n| `intune.attestation_pcr0` | string | windows |\n| `intune.attestation_pcr_hash_algorithm` | string | windows |\n| `intune.attestation_reset_count` | integer | windows |\n| `intune.attestation_restart_count` | integer | windows |\n| `intune.attestation_safe_mode` | boolean | windows |\n| `intune.attestation_secure_boot` | boolean | windows |\n| `intune.attestation_secure_boot_config_policy_fingerprint` | string | windows |\n| `intune.attestation_status` | enum_string | windows |\n| `intune.attestation_supported` | boolean | windows |\n| `intune.attestation_test_signing` | boolean | windows |\n| `intune.attestation_tpm_version` | version | windows |\n| `intune.attestation_virtual_secure_mode` | boolean | windows |\n| `intune.attestation_windows_pe` | boolean | windows |\n| `intune.compliance_grace_period_expiration_at` | datetime | windows, macos, ios, android |\n| `intune.compliance_state` | enum_string | windows, macos, ios, android |\n| `intune.config_manager_compliance_policy` | boolean | windows, macos, ios, android |\n| `intune.config_manager_device_configuration` | boolean | windows, macos, ios, android |\n| `intune.config_manager_inventory` | boolean | windows, macos, ios, android |\n| `intune.config_manager_modern_apps` | boolean | windows, macos, ios, android |\n| `intune.config_manager_resource_access` | boolean | windows, macos, ios, android |\n| `intune.config_manager_windows_update_for_business` | boolean | windows, macos, ios, android |\n| `intune.device_category_display_name` | string | windows, macos, ios, android |\n| `intune.device_enrollment_type` | enum_string | windows, macos, ios, android |\n| `intune.device_name` | string | windows, macos, ios, android |\n| `intune.device_registration_state` | enum_string | windows, macos, ios, android |\n| `intune.eas_activated` | boolean | windows, macos, ios, android |\n| `intune.eas_activated_at` | datetime | windows, macos, ios, android |\n| `intune.eas_device_id` | string | windows, macos, ios, android |\n| `intune.email_address` | string | windows, macos, ios, android |\n| `intune.enrolled` | boolean | windows, macos, ios, android |\n| `intune.enrolled_at` | datetime | windows, macos, ios, android |\n| `intune.enrollment_profile_name` | string | windows, macos, ios, android |\n| `intune.entra_device_id` | string | windows, macos, ios, android |\n| `intune.entra_registered` | boolean | windows, macos, ios, android |\n| `intune.ethernet_mac_address` | string | windows, macos, ios, android |\n| `intune.exchange_access_state` | enum_string | windows, macos, ios, android |\n| `intune.exchange_access_state_reason` | enum_string | windows, macos, ios, android |\n| `intune.exchange_last_successful_sync_at` | datetime | windows, macos, ios, android |\n| `intune.free_storage_space_bytes` | integer | windows, macos, ios, android |\n| `intune.iccid` | string | windows, macos, ios, android |\n| `intune.imei` | string | windows, macos, ios, android |\n| `intune.intune_id` | string | windows, macos, ios, android |\n| `intune.is_encrypted` | boolean | windows, macos, ios, android |\n| `intune.is_supervised` | boolean | macos, ios |\n| `intune.jail_broken` | boolean | ios, android |\n| `intune.last_sync_at` | datetime | windows, macos, ios, android |\n| `intune.managed_device_name` | string | windows, macos, ios, android |\n| `intune.managed_device_owner_type` | enum_string | windows, macos, ios, android |\n| `intune.management_agent` | enum_string | windows, macos, ios, android |\n| `intune.management_certificate_expires_at` | datetime | windows, macos, ios, android |\n| `intune.management_state` | enum_string | windows, macos, ios, android |\n| `intune.manufacturer` | string | windows, macos, ios, android |\n| `intune.meid` | string | windows, macos, ios, android |\n| `intune.model` | string | windows, macos, ios, android |\n| `intune.notes` | string | windows, macos, ios, android |\n| `intune.operating_system` | string | windows, macos, ios, android |\n| `intune.os_up_to_date` | boolean | windows, macos, ios, android |\n| `intune.os_version` | version | windows, macos, ios, android |\n| `intune.partner_reported_threat_state` | enum_string | windows, macos, ios, android |\n| `intune.phone_number` | string | windows, macos, ios, android |\n| `intune.physical_memory_bytes` | integer | windows, macos, ios, android |\n| `intune.require_user_enrollment_approval` | boolean | windows, macos, ios, android |\n| `intune.serial_number` | string | windows, macos, ios, android |\n| `intune.subscriber_carrier` | string | windows, macos, ios, android |\n| `intune.total_storage_space_bytes` | integer | windows, macos, ios, android |\n| `intune.udid` | string | windows, macos, ios, android |\n| `intune.user_display_name` | string | windows, macos, ios, android |\n| `intune.user_id` | string | windows, macos, ios, android |\n| `intune.user_principal_name` | string | windows, macos, ios, android |\n| `intune.wifi_mac_address` | string | windows, macos, ios, android |\n\n### iru fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `iru.activation_lock_allowed_while_supervised` | boolean | macos, ios |\n| `iru.activation_lock_bypass_code_failed` | boolean | macos, ios |\n| `iru.activation_lock_collected_at` | datetime | macos, ios |\n| `iru.activation_lock_supported` | boolean | macos, ios |\n| `iru.agent_installed` | boolean | macos, ios |\n| `iru.agent_version` | version | macos, ios |\n| `iru.any_signed_os` | boolean | macos, ios |\n| `iru.apple_silicon` | boolean | macos, ios |\n| `iru.asset_tag` | string | macos, ios |\n| `iru.blueprint_id` | string | macos, ios |\n| `iru.blueprint_name` | string | macos, ios |\n| `iru.bootstrap_token_auth` | boolean | macos, ios |\n| `iru.bootstrap_token_escrowed` | boolean | macos, ios |\n| `iru.cellular_technology` | enum_string | macos, ios |\n| `iru.data_roaming` | boolean | macos, ios |\n| `iru.device_activation_lock_enabled` | boolean | macos, ios |\n| `iru.device_capacity_gb` | float | macos, ios |\n| `iru.device_family` | enum_string | macos, ios |\n| `iru.device_name` | string | macos, ios |\n| `iru.display_os_version` | version | macos, ios |\n| `iru.enrolled` | boolean | macos, ios |\n| `iru.external_boot_level` | enum_string | macos |\n| `iru.filevault_collected_at` | datetime | macos, ios |\n| `iru.filevault_enabled` | boolean | macos |\n| `iru.filevault_key_escrowed` | boolean | macos, ios |\n| `iru.filevault_key_rotation_scheduled_at` | datetime | macos, ios |\n| `iru.filevault_key_type` | enum_string | macos |\n| `iru.filevault_regeneration_needed` | boolean | macos, ios |\n| `iru.firewall_allow_signed_applications` | boolean | macos, ios |\n| `iru.firewall_block_all_incoming` | boolean | macos, ios |\n| `iru.firewall_collected_at` | datetime | macos, ios |\n| `iru.firewall_enabled` | boolean | macos |\n| `iru.firewall_logging` | boolean | macos, ios |\n| `iru.firewall_logging_option` | enum_string | macos |\n| `iru.firewall_stealth_mode` | boolean | macos, ios |\n| `iru.firewall_unloading` | boolean | macos, ios |\n| `iru.firewall_version` | version | macos |\n| `iru.first_enrolled_at` | datetime | macos, ios |\n| `iru.gatekeeper_collected_at` | datetime | macos, ios |\n| `iru.gatekeeper_enabled` | boolean | macos |\n| `iru.gatekeeper_opaque_version` | version | macos |\n| `iru.gatekeeper_trusted_developers` | boolean | macos, ios |\n| `iru.gatekeeper_version` | version | macos |\n| `iru.host_name` | string | macos, ios |\n| `iru.hotspot` | boolean | macos, ios |\n| `iru.inventory_collected_at` | datetime | macos, ios |\n| `iru.iru_id` | string | macos, ios |\n| `iru.is_missing` | boolean | macos, ios |\n| `iru.is_removed` | boolean | macos, ios |\n| `iru.kext_requires_bootstrap_token` | boolean | macos, ios |\n| `iru.last_check_in_at` | datetime | macos, ios |\n| `iru.last_enrolled_at` | datetime | macos, ios |\n| `iru.local_hostname` | string | macos, ios |\n| `iru.lost_mode_status` | enum_string | macos, ios |\n| `iru.malware_removal_tool_version` | version | macos |\n| `iru.mdm_enabled` | boolean | macos, ios |\n| `iru.mdm_manages_kext` | boolean | macos, ios |\n| `iru.model` | string | macos, ios |\n| `iru.model_identifier` | string | macos, ios |\n| `iru.model_name` | string | macos, ios |\n| `iru.os_build` | string | macos, ios |\n| `iru.os_name` | string | macos, ios |\n| `iru.os_up_to_date` | boolean | macos, ios |\n| `iru.os_version` | version | macos, ios |\n| `iru.platform` | enum_string | macos, ios |\n| `iru.secure_boot_level` | enum_string | macos |\n| `iru.serial_number` | string | macos, ios |\n| `iru.shared_ipad` | boolean | macos, ios |\n| `iru.sip_enabled` | boolean | macos |\n| `iru.software_update_requires_bootstrap_token` | boolean | macos, ios |\n| `iru.ssv_enabled` | boolean | macos |\n| `iru.startup_settings_collected_at` | datetime | macos, ios |\n| `iru.supplemental_build_version` | string | macos, ios |\n| `iru.supplemental_os_version_extra` | version | macos, ios |\n| `iru.tags` | string_array | macos, ios |\n| `iru.user_activation_lock_enabled` | boolean | macos, ios |\n| `iru.user_email` | string | macos, ios |\n| `iru.user_id` | string | macos, ios |\n| `iru.user_is_archived` | boolean | macos, ios |\n| `iru.user_manages_kext` | boolean | macos, ios |\n| `iru.user_name` | string | macos, ios |\n| `iru.xprotect_version` | version | macos |\n\n### santa fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `santa.configured_client_mode` | enum_string | macos |\n| `santa.enrolled` | boolean | macos |\n| `santa.first_seen_at` | datetime | macos |\n| `santa.hostname` | string | macos |\n| `santa.last_preflight_at` | datetime | macos |\n| `santa.last_preflight_ip` | ip | macos |\n| `santa.last_seen_client_mode` | enum_string | macos |\n| `santa.last_sync_at` | datetime | macos |\n| `santa.machine_model` | string | macos |\n| `santa.os_build` | string | macos |\n| `santa.os_type` | enum_string | macos |\n| `santa.os_up_to_date` | boolean | macos |\n| `santa.os_version` | version | macos |\n| `santa.primary_user` | string | macos |\n| `santa.primary_user_groups` | string_array | macos |\n| `santa.rule_sync_at` | datetime | macos |\n| `santa.santa_id` | string | macos |\n| `santa.santa_version` | version | macos |\n| `santa.santanetd_version` | version | macos |\n| `santa.serial_number` | string | macos |\n| `santa.sip_status` | integer | macos |\n| `santa.tags` | string_array | macos |\n| `santa.temporary_admin_mode_ends_at` | datetime | macos |\n| `santa.temporary_admin_mode_user` | string | macos |\n| `santa.temporary_monitor_mode_ends_at` | datetime | macos |\n\n### sentinelone fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `sentinelone.account_name` | string | windows, macos, linux |\n| `sentinelone.active_protection` | string_array | windows, macos, linux |\n| `sentinelone.active_threats` | integer | windows, macos, linux |\n| `sentinelone.ad_computer_distinguished_name` | string | windows, macos, linux |\n| `sentinelone.ad_computer_member_of` | string_array | windows, macos, linux |\n| `sentinelone.ad_last_user_distinguished_name` | string | windows, macos, linux |\n| `sentinelone.ad_last_user_member_of` | string_array | windows, macos, linux |\n| `sentinelone.ad_mail` | string | windows, macos, linux |\n| `sentinelone.ad_user_principal_name` | string | windows, macos, linux |\n| `sentinelone.agent_version` | version | windows, macos, linux |\n| `sentinelone.allow_remote_shell` | boolean | windows, macos, linux |\n| `sentinelone.apps_vulnerability_status` | enum_string | windows, macos, linux |\n| `sentinelone.cloud_providers` | json | windows, macos, linux |\n| `sentinelone.computer_name` | string | windows, macos, linux |\n| `sentinelone.console_migration_status` | enum_string | windows, macos, linux |\n| `sentinelone.core_count` | integer | windows, macos, linux |\n| `sentinelone.cpu_count` | integer | windows, macos, linux |\n| `sentinelone.cpu_id` | string | windows, macos, linux |\n| `sentinelone.detection_state` | enum_string | windows, macos, linux |\n| `sentinelone.domain` | string | windows, macos, linux |\n| `sentinelone.encrypted_applications` | boolean | windows, macos, linux |\n| `sentinelone.enrolled` | boolean | windows, macos, linux |\n| `sentinelone.external_id` | string | windows, macos, linux |\n| `sentinelone.external_ip` | ip | windows, macos, linux |\n| `sentinelone.firewall_enabled` | boolean | windows, macos, linux |\n| `sentinelone.first_full_mode_at` | datetime | windows, macos, linux |\n| `sentinelone.full_disk_scan_updated_at` | datetime | windows, macos, linux |\n| `sentinelone.group_id` | string | windows, macos, linux |\n| `sentinelone.group_ip` | string | windows, macos, linux |\n| `sentinelone.group_name` | string | windows, macos, linux |\n| `sentinelone.has_containerized_workload` | boolean | windows, macos, linux |\n| `sentinelone.in_remote_shell_session` | boolean | windows, macos, linux |\n| `sentinelone.infected` | boolean | windows, macos, linux |\n| `sentinelone.installer_type` | enum_string | windows, macos, linux |\n| `sentinelone.is_active` | boolean | windows, macos, linux |\n| `sentinelone.is_ad_connector` | boolean | windows, macos, linux |\n| `sentinelone.is_decommissioned` | boolean | windows, macos, linux |\n| `sentinelone.is_hyper_automate` | boolean | windows, macos, linux |\n| `sentinelone.is_pending_uninstall` | boolean | windows, macos, linux |\n| `sentinelone.is_uninstalled` | boolean | windows, macos, linux |\n| `sentinelone.is_up_to_date` | boolean | windows, macos, linux |\n| `sentinelone.last_active_at` | datetime | windows, macos, linux |\n| `sentinelone.last_ip_to_management` | ip | windows, macos, linux |\n| `sentinelone.last_logged_in_user_name` | string | windows, macos, linux |\n| `sentinelone.last_successful_scan_at` | datetime | windows, macos, linux |\n| `sentinelone.location_enabled` | boolean | windows, macos, linux |\n| `sentinelone.location_type` | enum_string | windows, macos, linux |\n| `sentinelone.locations` | json | windows, macos, linux |\n| `sentinelone.machine_sid` | string | windows, macos, linux |\n| `sentinelone.machine_type` | enum_string | windows, macos, linux |\n| `sentinelone.missing_permissions` | string_array | windows, macos, linux |\n| `sentinelone.mitigation_mode` | enum_string | windows, macos, linux |\n| `sentinelone.mitigation_mode_suspicious` | enum_string | windows, macos, linux |\n| `sentinelone.model_name` | string | windows, macos, linux |\n| `sentinelone.network_interfaces` | json | windows, macos, linux |\n| `sentinelone.network_quarantine_enabled` | boolean | windows, macos, linux |\n| `sentinelone.network_status` | enum_string | windows, macos, linux |\n| `sentinelone.operational_state` | enum_string | windows, macos, linux |\n| `sentinelone.operational_state_expires_at` | datetime | windows, macos, linux |\n| `sentinelone.os_arch` | enum_string | windows, macos, linux |\n| `sentinelone.os_name` | string | windows, macos, linux |\n| `sentinelone.os_revision` | version | windows, macos, linux |\n| `sentinelone.os_start_time` | datetime | windows, macos, linux |\n| `sentinelone.os_type` | enum_string | windows, macos, linux |\n| `sentinelone.os_up_to_date` | boolean | windows, macos |\n| `sentinelone.os_username` | string | windows, macos, linux |\n| `sentinelone.protected_containers_count` | integer | windows, macos, linux |\n| `sentinelone.protected_pods_count` | integer | windows, macos, linux |\n| `sentinelone.protected_tasks_count` | integer | windows, macos, linux |\n| `sentinelone.proxy_console` | boolean | windows, macos, linux |\n| `sentinelone.proxy_deep_visibility` | boolean | windows, macos, linux |\n| `sentinelone.proxy_method` | enum_string | windows, macos, linux |\n| `sentinelone.proxy_pac_file_usage` | boolean | windows, macos, linux |\n| `sentinelone.ranger_status` | enum_string | windows, macos, linux |\n| `sentinelone.ranger_version` | version | windows, macos, linux |\n| `sentinelone.registered_at` | datetime | windows, macos, linux |\n| `sentinelone.remote_profiling_state` | enum_string | windows, macos, linux |\n| `sentinelone.remote_profiling_state_expires_at` | datetime | windows, macos, linux |\n| `sentinelone.scan_aborted_at` | datetime | windows, macos, linux |\n| `sentinelone.scan_finished_at` | datetime | windows, macos, linux |\n| `sentinelone.scan_started_at` | datetime | windows, macos, linux |\n| `sentinelone.scan_status` | enum_string | windows, macos, linux |\n| `sentinelone.sentinelone_account_id` | string | windows, macos, linux |\n| `sentinelone.sentinelone_id` | string | windows, macos, linux |\n| `sentinelone.serial_number` | string | windows, macos, linux |\n| `sentinelone.site_id` | string | windows, macos, linux |\n| `sentinelone.site_name` | string | windows, macos, linux |\n| `sentinelone.storage_name` | string | windows, macos, linux |\n| `sentinelone.storage_type` | string | windows, macos, linux |\n| `sentinelone.tags` | json | windows, macos, linux |\n| `sentinelone.threat_reboot_required` | boolean | windows, macos, linux |\n| `sentinelone.total_memory` | integer | windows, macos, linux |\n| `sentinelone.user_actions_needed` | string_array | windows, macos, linux |\n| `sentinelone.uuid` | string | windows, macos, linux |\n\n### sophos fields\n\n| Field | Type | Platforms |\n| --- | --- | --- |\n| `sophos.assigned_products` | json | windows, macos, linux |\n| `sophos.associated_person_id` | string | windows, macos, linux |\n| `sophos.associated_person_name` | string | windows, macos, linux |\n| `sophos.associated_person_via_login` | string | windows, macos, linux |\n| `sophos.cloned` | boolean | windows, macos, linux |\n| `sophos.cloud_instance_id` | string | windows, macos, linux |\n| `sophos.cloud_provider` | enum_string | windows, macos, linux |\n| `sophos.device_software` | json | windows, macos, linux |\n| `sophos.encryption_overall_status` | enum_string | windows, macos, linux |\n| `sophos.encryption_volumes` | json | windows, macos, linux |\n| `sophos.enrolled` | boolean | windows, macos, linux |\n| `sophos.group_hierarchy` | json | windows, macos, linux |\n| `sophos.group_id` | string | windows, macos, linux |\n| `sophos.group_name` | string | windows, macos, linux |\n| `sophos.health_overall` | enum_string | windows, macos, linux |\n| `sophos.health_service_details` | json | windows, macos, linux |\n| `sophos.health_services_status` | enum_string | windows, macos, linux |\n| `sophos.health_threats_status` | enum_string | windows, macos, linux |\n| `sophos.hostname` | string | windows, macos, linux |\n| `sophos.ipv4_addresses` | string_array | windows, macos, linux |\n| `sophos.ipv6_addresses` | string_array | windows, macos, linux |\n| `sophos.isolation_admin_isolated` | boolean | windows, macos, linux |\n| `sophos.isolation_self_isolated` | boolean | windows, macos, linux |\n| `sophos.isolation_status` | enum_string | windows, macos, linux |\n| `sophos.last_agent_update_at` | datetime | windows, macos, linux |\n| `sophos.last_os_update_at` | datetime | windows, macos, linux |\n| `sophos.last_seen_at` | datetime | windows, macos, linux |\n| `sophos.lockdown_status` | enum_string | windows, macos, linux |\n| `sophos.mac_addresses` | string_array | windows, macos, linux |\n| `sophos.online` | boolean | windows, macos, linux |\n| `sophos.os_build` | integer | windows, macos, linux |\n| `sophos.os_is_server` | boolean | windows, macos, linux |\n| `sophos.os_major_version` | integer | windows, macos, linux |\n| `sophos.os_minor_version` | integer | windows, macos, linux |\n| `sophos.os_name` | string | windows, macos, linux |\n| `sophos.os_platform` | enum_string | windows, macos, linux |\n| `sophos.os_up_to_date` | boolean | macos |\n| `sophos.packages` | json | windows, macos, linux |\n| `sophos.serial_number` | string | windows, macos, linux |\n| `sophos.sophos_id` | string | windows, macos, linux |\n| `sophos.tags` | json | windows, macos, linux |\n| `sophos.tamper_protection_enabled` | boolean | windows, macos, linux |\n| `sophos.tamper_protection_supported` | boolean | windows, macos, linux |\n| `sophos.type` | enum_string | windows, macos, linux |",
        example: {
          and: [
            { field: 'intune.enrolled', op: 'is', value: true },
            { field: 'intune.compliance_state', op: 'is', rows: 'all', value: 'compliant' },
            { field: 'intune.last_sync_at', op: 'within_last', value: 'PT24H' },
            {
              or: [
                { field: 'firezone.last_seen_version', op: 'gte', value: '@latest' },
                { not: { field: 'firezone.hostname', op: 'starts_with', value: 'test-' } },
              ],
            },
          ],
        },
        title: 'PolicyPostureNode',
      }),
  )
  .openapi('PolicyPostureNode')

type PolicyPostureNotType = { not: z.infer<typeof PolicyPostureNodeSchema> }

type PolicyPostureAndType = { and: z.infer<typeof PolicyPostureNodeSchema>[] }

type PolicyPostureOrType = { or: z.infer<typeof PolicyPostureNodeSchema>[] }

type ValidationErrorsType = {
  [key: string]: string[] | ValidationErrorsType[] | ValidationErrorsType
}

const EntraDirectorySchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    disabled_reason: z.string().nullable().openapi({ description: 'Reason for disabling' }),
    email_field: z
      .enum(['mail', 'userPrincipalName'])
      .openapi({
        description: 'Graph API user field to use as email',
        example: 'userPrincipalName',
      }),
    error_message: z.string().nullable().openapi({ description: 'Last error message' }),
    errored_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last error timestamp' }),
    id: z
      .uuid()
      .openapi({ description: 'Directory ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether directory is disabled', example: false }),
    name: z.string().openapi({ description: 'Directory name', example: 'Entra' }),
    sync_all_groups: z.boolean().openapi({ description: 'Sync all groups', example: false }),
    synced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last sync timestamp', example: '2025-01-15T10:30:00Z' }),
    tenant_id: z
      .string()
      .openapi({
        description: 'Microsoft Entra tenant ID',
        example: '12345678-1234-1234-1234-123456789012',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Entra Directory',
    required: [
      'account_id',
      'disabled_reason',
      'email_field',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'name',
      'sync_all_groups',
      'synced_at',
      'tenant_id',
      'updated_at',
    ],
    title: 'EntraDirectory',
  })
  .openapi('EntraDirectory')

const EntraDirectoryResponseSchema = z
  .object({ data: EntraDirectorySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Entra Directory',
    title: 'EntraDirectoryResponse',
    required: [],
  })
  .openapi('EntraDirectoryResponse')

const IruDeviceSchema = z
  .object({
    host_name: z.string().nullable(),
    gatekeeper_trusted_developers: z.boolean().nullable(),
    secure_boot_level: z.string().nullable(),
    os_name: z.string().nullable(),
    filevault_key_rotation_scheduled_at: z.iso.datetime({ offset: true }).nullable(),
    firewall_enabled: z.boolean().nullable(),
    model_name: z.string().nullable(),
    firewall_logging_option: z.string().nullable(),
    shared_ipad: z.boolean().nullable(),
    local_hostname: z.string().nullable(),
    activation_lock_allowed_while_supervised: z.boolean().nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    device_activation_lock_enabled: z.boolean().nullable(),
    gatekeeper_version: z.string().nullable(),
    bootstrap_token_escrowed: z.boolean().nullable(),
    iru_id: z.string(),
    synced_at: z.iso.datetime({ offset: true }),
    asset_tag: z.string().nullable(),
    blueprint_name: z.string().nullable(),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    data_roaming: z.boolean().nullable(),
    is_removed: z.boolean().nullable(),
    ssv_enabled: z.boolean().nullable(),
    filevault_key_type: z.string().nullable(),
    device_capacity_gb: z.float32().nullable(),
    tags: z.array(z.string()).nullable(),
    filevault_key_escrowed: z.boolean().nullable(),
    apple_silicon: z.boolean().nullable(),
    serial_number: z.string().nullable(),
    cellular_technology: z.string().nullable(),
    blueprint_id: z.string().nullable(),
    user_manages_kext: z.boolean().nullable(),
    hotspot: z.boolean().nullable(),
    account_id: z.uuid(),
    mdm_enabled: z.boolean().nullable(),
    user_email: z.string().nullable(),
    gatekeeper_opaque_version: z.string().nullable(),
    external_boot_level: z.string().nullable(),
    firewall_collected_at: z.iso.datetime({ offset: true }).nullable(),
    software_update_requires_bootstrap_token: z.boolean().nullable(),
    xprotect_version: z.string().nullable(),
    agent_installed: z.boolean().nullable(),
    mdm_manages_kext: z.boolean().nullable(),
    display_os_version: z.string().nullable(),
    filevault_regeneration_needed: z.boolean().nullable(),
    is_missing: z.boolean().nullable(),
    last_enrolled_at: z.iso.datetime({ offset: true }).nullable(),
    gatekeeper_enabled: z.boolean().nullable(),
    firewall_version: z.string().nullable(),
    first_enrolled_at: z.iso.datetime({ offset: true }).nullable(),
    firewall_logging: z.boolean().nullable(),
    model_identifier: z.string().nullable(),
    os_build: z.string().nullable(),
    user_activation_lock_enabled: z.boolean().nullable(),
    activation_lock_collected_at: z.iso.datetime({ offset: true }).nullable(),
    lost_mode_status: z.string().nullable(),
    startup_settings_collected_at: z.iso.datetime({ offset: true }).nullable(),
    platform: z.string().nullable(),
    filevault_enabled: z.boolean().nullable(),
    user_is_archived: z.boolean().nullable(),
    activation_lock_supported: z.boolean().nullable(),
    supplemental_build_version: z.string().nullable(),
    sip_enabled: z.boolean().nullable(),
    firewall_allow_signed_applications: z.boolean().nullable(),
    model: z.string().nullable(),
    supplemental_os_version_extra: z.string().nullable(),
    user_id: z.string().nullable(),
    bootstrap_token_auth: z.boolean().nullable(),
    firewall_block_all_incoming: z.boolean().nullable(),
    last_check_in_at: z.iso.datetime({ offset: true }).nullable(),
    firewall_stealth_mode: z.boolean().nullable(),
    kext_requires_bootstrap_token: z.boolean().nullable(),
    agent_version: z.string().nullable(),
    activation_lock_bypass_code_failed: z.boolean().nullable(),
    inventory_collected_at: z.iso.datetime({ offset: true }).nullable(),
    any_signed_os: z.boolean().nullable(),
    filevault_collected_at: z.iso.datetime({ offset: true }).nullable(),
    gatekeeper_collected_at: z.iso.datetime({ offset: true }).nullable(),
    firewall_unloading: z.boolean().nullable(),
    os_version: z.string().nullable(),
    malware_removal_tool_version: z.string().nullable(),
    device_family: z.string().nullable(),
    user_name: z.string().nullable(),
    device_name: z.string().nullable(),
    posture_provider_id: z.uuid(),
  })
  .openapi({
    description: 'Device synced from Iru (formerly Kandji)',
    required: [
      'account_id',
      'iru_id',
      'posture_provider_id',
      'device_name',
      'model',
      'serial_number',
      'platform',
      'os_version',
      'supplemental_build_version',
      'supplemental_os_version_extra',
      'last_check_in_at',
      'user_id',
      'user_name',
      'user_email',
      'user_is_archived',
      'asset_tag',
      'blueprint_id',
      'blueprint_name',
      'mdm_enabled',
      'agent_installed',
      'agent_version',
      'is_missing',
      'is_removed',
      'first_enrolled_at',
      'last_enrolled_at',
      'lost_mode_status',
      'tags',
      'device_family',
      'device_capacity_gb',
      'host_name',
      'local_hostname',
      'apple_silicon',
      'model_name',
      'model_identifier',
      'shared_ipad',
      'cellular_technology',
      'data_roaming',
      'hotspot',
      'os_build',
      'os_name',
      'display_os_version',
      'inventory_collected_at',
      'filevault_enabled',
      'filevault_key_type',
      'filevault_key_escrowed',
      'filevault_regeneration_needed',
      'filevault_key_rotation_scheduled_at',
      'filevault_collected_at',
      'firewall_enabled',
      'firewall_block_all_incoming',
      'firewall_logging',
      'firewall_logging_option',
      'firewall_stealth_mode',
      'firewall_version',
      'firewall_allow_signed_applications',
      'firewall_unloading',
      'firewall_collected_at',
      'gatekeeper_enabled',
      'gatekeeper_trusted_developers',
      'gatekeeper_version',
      'gatekeeper_opaque_version',
      'xprotect_version',
      'malware_removal_tool_version',
      'gatekeeper_collected_at',
      'sip_enabled',
      'ssv_enabled',
      'bootstrap_token_auth',
      'bootstrap_token_escrowed',
      'kext_requires_bootstrap_token',
      'software_update_requires_bootstrap_token',
      'external_boot_level',
      'secure_boot_level',
      'any_signed_os',
      'mdm_manages_kext',
      'user_manages_kext',
      'startup_settings_collected_at',
      'activation_lock_supported',
      'activation_lock_allowed_while_supervised',
      'device_activation_lock_enabled',
      'user_activation_lock_enabled',
      'activation_lock_bypass_code_failed',
      'activation_lock_collected_at',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'IruDevice',
  })
  .openapi('IruDevice')

const PaginationMetadataSchema = z
  .object({
    count: z.int().openapi({ description: 'Total number of matching records', example: 1 }),
    limit: z.int().openapi({ description: 'Page size', example: 10 }),
    next_page: z.string().nullable().openapi({ description: 'Cursor to fetch the next page' }),
    prev_page: z.string().nullable().openapi({ description: 'Cursor to fetch the previous page' }),
  })
  .openapi({
    description: 'Pagination metadata for paginated responses.',
    required: ['count', 'limit', 'next_page', 'prev_page'],
    title: 'PaginationMetadata',
  })
  .openapi('PaginationMetadata')

const IruDeviceListResponseSchema = z
  .object({
    data: z.array(IruDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'IruDeviceListResponse', required: [] })
  .openapi('IruDeviceListResponse')

const ActorSchema = z
  .object({
    allow_email_otp_sign_in: z
      .boolean()
      .default(false)
      .openapi({ description: 'Allow Email OTP Sign In', example: false }),
    created_by_directory_id: z
      .uuid()
      .nullable()
      .openapi({ description: 'Directory ID that created this actor' }),
    disabled_by_directory_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          'Directory ID that disabled this actor because its user is inactive at the identity provider. The directory re-enables the actor when the user is active again. Null when the actor is enabled or was disabled by an admin.',
        readOnly: true,
      }),
    email: z
      .string()
      .nullable()
      .openapi({ description: 'Actor Email', example: 'john.doe@example.com' }),
    id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the actor was created', example: '2024-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .default(false)
      .openapi({ description: 'Whether the actor is disabled', example: false }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'Latest time the Actor was active: a Client of theirs connected, they signed in to the admin portal, or one of their API or OAuth tokens was used. Null when none of these was recorded, and always null in a delete response.',
        example: '2024-01-15T10:30:00Z',
      }),
    name: z.string().openapi({ description: 'Actor Name', example: 'John Doe' }),
    type: z
      .enum(['account_admin_user', 'account_user', 'api_client', 'service_account'])
      .openapi({ description: 'Actor Type', example: 'account_admin_user' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the actor was last updated', example: '2024-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Actor',
    required: [
      'allow_email_otp_sign_in',
      'created_by_directory_id',
      'disabled_by_directory_id',
      'email',
      'id',
      'inserted_at',
      'is_disabled',
      'last_seen_at',
      'name',
      'type',
      'updated_at',
    ],
    title: 'Actor',
  })
  .openapi('Actor')

const ActorResponseSchema = z
  .object({ data: ActorSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Actor',
    title: 'ActorResponse',
    required: [],
  })
  .openapi('ActorResponse')

const GoogleAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_default: z.boolean().openapi({ description: 'Whether provider is default', example: true }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    issuer: z.string().openapi({ description: 'Issuer', example: 'https://accounts.google.com' }),
    name: z.string().openapi({ description: 'Provider name', example: 'Google' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
    workspace_domains: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description:
          'Verified Google Workspace domains allowed to sign in. Empty for personal-only providers and existing unrestricted providers.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Google Auth Provider',
    required: [
      'account_id',
      'client_session_lifetime_secs',
      'context',
      'id',
      'inserted_at',
      'is_default',
      'is_disabled',
      'issuer',
      'name',
      'portal_session_lifetime_secs',
      'updated_at',
      'workspace_domains',
    ],
    title: 'GoogleAuthProvider',
  })
  .openapi('GoogleAuthProvider')

const GoogleAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(GoogleAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'Google Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Google Auth Providers',
    title: 'GoogleAuthProviderListResponse',
    required: [],
  })
  .openapi('GoogleAuthProviderListResponse')

const GroupSchema = z
  .object({
    directory_id: z
      .uuid()
      .nullable()
      .openapi({ description: 'Directory ID this group belongs to' }),
    email: z.string().nullable().openapi({ description: 'Group email address for synced groups' }),
    entity_type: z
      .enum(['group', 'org_unit'])
      .openapi({ description: 'Entity type', example: 'group' }),
    id: z
      .uuid()
      .openapi({ description: 'Group ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    idp_id: z
      .string()
      .nullable()
      .openapi({ description: 'Identity provider ID for synced groups' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2024-01-15T10:30:00Z' }),
    name: z.string().openapi({ description: 'Group Name', example: 'Engineering' }),
    synced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last sync timestamp for synced groups' }),
    type: z
      .enum(['managed', 'static'])
      .openapi({
        description:
          '`managed` for the built-in Everyone Group, which includes every user and admin Actor implicitly, has no explicit memberships, and cannot be updated or deleted. `static` for every other Group.',
        example: 'static',
        readOnly: true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last update timestamp', example: '2024-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Group',
    required: [
      'directory_id',
      'email',
      'entity_type',
      'id',
      'idp_id',
      'inserted_at',
      'name',
      'synced_at',
      'type',
      'updated_at',
    ],
    title: 'Group',
  })
  .openapi('Group')

const GroupResponseSchema = z
  .object({ data: GroupSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Group',
    title: 'GroupResponse',
    required: [],
  })
  .openapi('GroupResponse')

const GoogleDirectorySchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    disabled_reason: z.string().nullable().openapi({ description: 'Reason for disabling' }),
    domain: z.string().openapi({ description: 'Google Workspace domain', example: 'example.com' }),
    error_message: z.string().nullable().openapi({ description: 'Last error message' }),
    errored_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last error timestamp' }),
    group_sync_mode: z
      .enum(['all', 'filtered', 'disabled'])
      .openapi({ description: 'Group sync mode', example: 'all' }),
    id: z
      .uuid()
      .openapi({ description: 'Directory ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    impersonation_email: z
      .string()
      .openapi({ description: 'Impersonation email', example: 'admin@example.com' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether directory is disabled', example: false }),
    name: z.string().openapi({ description: 'Directory name', example: 'Google' }),
    orgunit_sync_enabled: z
      .boolean()
      .openapi({ description: 'Whether org unit sync is enabled', example: true }),
    synced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last sync timestamp', example: '2025-01-15T10:30:00Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Google Directory',
    required: [
      'account_id',
      'disabled_reason',
      'domain',
      'error_message',
      'errored_at',
      'group_sync_mode',
      'id',
      'impersonation_email',
      'inserted_at',
      'is_disabled',
      'name',
      'orgunit_sync_enabled',
      'synced_at',
      'updated_at',
    ],
    title: 'GoogleDirectory',
  })
  .openapi('GoogleDirectory')

const GoogleDirectoryResponseSchema = z
  .object({ data: GoogleDirectorySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Google Directory',
    title: 'GoogleDirectoryResponse',
    required: [],
  })
  .openapi('GoogleDirectoryResponse')

const MembershipPutRequestSchema = z
  .object({
    memberships: z
      .array(
        z
          .object({ actor_id: z.uuid().exactOptional().openapi({ description: 'Actor ID' }) })
          .openapi({ required: [] }),
      )
      .openapi({
        example: [
          { actor_id: '4ddfa557-7dfc-484f-894c-2024ec3fe9f7' },
          { actor_id: '89d22f71-939d-442d-b148-897b730adfb4' },
        ],
      }),
  })
  .openapi({
    description: 'PUT body for updating Memberships',
    required: ['memberships'],
    title: 'MembershipPutRequest',
  })
  .openapi('MembershipPutRequest')

const Ipv6NoValueDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.ipv6')
      .openapi({ description: 'ipv6 field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'ipv6 no_value device comparison' })
  .openapi('Ipv6NoValueDeviceComparison')

const IruPostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    name: z.string(),
    region: z.enum(['us', 'eu']),
    subdomain: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    type: z.literal('iru'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Iru (formerly Kandji) posture provider',
    required: [
      'account_id',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'name',
      'region',
      'subdomain',
      'synced_at',
      'type',
      'updated_at',
    ],
    title: 'IruPostureProvider',
  })
  .openapi('IruPostureProvider')

const Ipv4NoValueDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.ipv4')
      .openapi({ description: 'ipv4 field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'ipv4 no_value device comparison' })
  .openapi('Ipv4NoValueDeviceComparison')

const IpListProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.last_external_ip_address',
        'defender.last_ip_address',
        'santa.last_preflight_ip',
        'sentinelone.external_ip',
        'sentinelone.last_ip_to_management',
      ])
      .openapi({ description: 'ip field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'ip list provider comparison' })
  .openapi('IpListProviderComparison')

const SentinelOneDeviceSchema = z
  .object({
    last_logged_in_user_name: z.string().nullable(),
    sentinelone_id: z.string().nullable(),
    user_actions_needed: z.array(z.string()).nullable(),
    operational_state: z.string().nullable(),
    os_name: z.string().nullable(),
    os_arch: z.string().nullable(),
    remote_profiling_state: z.string().nullable(),
    has_containerized_workload: z.boolean().nullable(),
    firewall_enabled: z.boolean().nullable(),
    proxy_console: z.boolean().nullable(),
    model_name: z.string().nullable(),
    infected: z.boolean().nullable(),
    proxy_deep_visibility: z.boolean().nullable(),
    console_migration_status: z.string().nullable(),
    is_hyper_automate: z.boolean().nullable(),
    network_quarantine_enabled: z.boolean().nullable(),
    scan_finished_at: z.iso.datetime({ offset: true }).nullable(),
    is_active: z.boolean().nullable(),
    external_id: z.string().nullable(),
    last_successful_scan_at: z.iso.datetime({ offset: true }).nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    os_username: z.string().nullable(),
    active_protection: z.array(z.string()).nullable(),
    threat_reboot_required: z.boolean().nullable(),
    synced_at: z.iso.datetime({ offset: true }),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    location_enabled: z.boolean().nullable(),
    group_id: z.string().nullable(),
    site_id: z.string().nullable(),
    storage_name: z.string().nullable(),
    machine_sid: z.string().nullable(),
    remote_profiling_state_expires_at: z.iso.datetime({ offset: true }).nullable(),
    group_name: z.string().nullable(),
    allow_remote_shell: z.boolean().nullable(),
    tags: z.array(z.looseObject({})).nullable(),
    protected_pods_count: z.int().nullable(),
    os_type: z.string().nullable(),
    proxy_pac_file_usage: z.boolean().nullable(),
    serial_number: z.string().nullable(),
    ad_computer_member_of: z.array(z.string()).nullable(),
    locations: z.array(z.looseObject({})).nullable(),
    installer_type: z.string().nullable(),
    last_active_at: z.iso.datetime({ offset: true }).nullable(),
    is_ad_connector: z.boolean().nullable(),
    ad_user_principal_name: z.string().nullable(),
    core_count: z.int().nullable(),
    detection_state: z.string().nullable(),
    active_threats: z.int().nullable(),
    is_decommissioned: z.boolean().nullable(),
    account_id: z.uuid(),
    cpu_count: z.int().nullable(),
    group_ip: z.string().nullable(),
    protected_tasks_count: z.int().nullable(),
    storage_type: z.string().nullable(),
    account_name: z.string().nullable(),
    ranger_status: z.string().nullable(),
    scan_status: z.string().nullable(),
    total_memory: z.int().nullable(),
    encrypted_applications: z.boolean().nullable(),
    ad_last_user_distinguished_name: z.string().nullable(),
    missing_permissions: z.array(z.string()).nullable(),
    is_uninstalled: z.boolean().nullable(),
    computer_name: z.string().nullable(),
    scan_aborted_at: z.iso.datetime({ offset: true }).nullable(),
    in_remote_shell_session: z.boolean().nullable(),
    first_full_mode_at: z.iso.datetime({ offset: true }).nullable(),
    ad_last_user_member_of: z.array(z.string()).nullable(),
    ad_mail: z.string().nullable(),
    external_ip: z.string().nullable(),
    is_pending_uninstall: z.boolean().nullable(),
    sentinelone_account_id: z.string().nullable(),
    last_ip_to_management: z.string().nullable(),
    proxy_method: z.string().nullable(),
    network_status: z.string().nullable(),
    os_revision: z.string().nullable(),
    agent_version: z.string().nullable(),
    registered_at: z.iso.datetime({ offset: true }).nullable(),
    is_up_to_date: z.boolean().nullable(),
    site_name: z.string().nullable(),
    apps_vulnerability_status: z.string().nullable(),
    domain: z.string().nullable(),
    ad_computer_distinguished_name: z.string().nullable(),
    os_start_time: z.iso.datetime({ offset: true }).nullable(),
    mitigation_mode_suspicious: z.string().nullable(),
    machine_type: z.string().nullable(),
    uuid: z.string(),
    ranger_version: z.string().nullable(),
    mitigation_mode: z.string().nullable(),
    operational_state_expires_at: z.iso.datetime({ offset: true }).nullable(),
    network_interfaces: z.array(z.looseObject({})).nullable(),
    full_disk_scan_updated_at: z.iso.datetime({ offset: true }).nullable(),
    cloud_providers: z.looseObject({}).nullable(),
    posture_provider_id: z.uuid(),
    scan_started_at: z.iso.datetime({ offset: true }).nullable(),
    protected_containers_count: z.int().nullable(),
    cpu_id: z.string().nullable(),
    location_type: z.string().nullable(),
  })
  .openapi({
    description: 'Endpoint agent synced from SentinelOne',
    required: [
      'account_id',
      'uuid',
      'posture_provider_id',
      'sentinelone_account_id',
      'account_name',
      'site_id',
      'site_name',
      'group_id',
      'group_name',
      'sentinelone_id',
      'agent_version',
      'network_interfaces',
      'domain',
      'computer_name',
      'os_name',
      'os_revision',
      'os_arch',
      'os_username',
      'os_start_time',
      'os_type',
      'total_memory',
      'model_name',
      'machine_type',
      'cpu_id',
      'cpu_count',
      'core_count',
      'external_ip',
      'group_ip',
      'active_threats',
      'infected',
      'threat_reboot_required',
      'last_active_at',
      'is_active',
      'is_up_to_date',
      'network_status',
      'registered_at',
      'is_pending_uninstall',
      'is_uninstalled',
      'is_decommissioned',
      'encrypted_applications',
      'last_logged_in_user_name',
      'ad_last_user_distinguished_name',
      'ad_last_user_member_of',
      'ad_computer_distinguished_name',
      'ad_computer_member_of',
      'ad_user_principal_name',
      'ad_mail',
      'scan_status',
      'scan_started_at',
      'scan_finished_at',
      'scan_aborted_at',
      'full_disk_scan_updated_at',
      'mitigation_mode',
      'mitigation_mode_suspicious',
      'user_actions_needed',
      'missing_permissions',
      'console_migration_status',
      'apps_vulnerability_status',
      'in_remote_shell_session',
      'allow_remote_shell',
      'locations',
      'location_type',
      'external_id',
      'serial_number',
      'machine_sid',
      'installer_type',
      'ranger_version',
      'ranger_status',
      'last_ip_to_management',
      'operational_state',
      'operational_state_expires_at',
      'remote_profiling_state',
      'remote_profiling_state_expires_at',
      'network_quarantine_enabled',
      'firewall_enabled',
      'location_enabled',
      'cloud_providers',
      'storage_type',
      'storage_name',
      'detection_state',
      'first_full_mode_at',
      'tags',
      'last_successful_scan_at',
      'proxy_console',
      'proxy_deep_visibility',
      'proxy_pac_file_usage',
      'proxy_method',
      'protected_pods_count',
      'protected_containers_count',
      'protected_tasks_count',
      'has_containerized_workload',
      'is_ad_connector',
      'is_hyper_automate',
      'active_protection',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'SentinelOneDevice',
  })
  .openapi('SentinelOneDevice')

const SentinelOneDeviceResponseSchema = z
  .object({ data: SentinelOneDeviceSchema.exactOptional() })
  .openapi({ title: 'SentinelOneDeviceResponse', required: [] })
  .openapi('SentinelOneDeviceResponse')

const BooleanNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.enrolled',
        'defender.entra_joined',
        'defender.is_excluded',
        'defender.is_potential_duplication',
        'defender.os_up_to_date',
        'intune.attestation_bit_locker_enabled',
        'intune.attestation_boot_debugging',
        'intune.attestation_code_integrity',
        'intune.attestation_data_execution_policy_enabled',
        'intune.attestation_early_launch_anti_malware_driver_protection',
        'intune.attestation_operating_system_kernel_debugging',
        'intune.attestation_safe_mode',
        'intune.attestation_secure_boot',
        'intune.attestation_supported',
        'intune.attestation_test_signing',
        'intune.attestation_virtual_secure_mode',
        'intune.attestation_windows_pe',
        'intune.config_manager_compliance_policy',
        'intune.config_manager_device_configuration',
        'intune.config_manager_inventory',
        'intune.config_manager_modern_apps',
        'intune.config_manager_resource_access',
        'intune.config_manager_windows_update_for_business',
        'intune.eas_activated',
        'intune.enrolled',
        'intune.entra_registered',
        'intune.is_encrypted',
        'intune.is_supervised',
        'intune.jail_broken',
        'intune.os_up_to_date',
        'intune.require_user_enrollment_approval',
        'iru.activation_lock_allowed_while_supervised',
        'iru.activation_lock_bypass_code_failed',
        'iru.activation_lock_supported',
        'iru.agent_installed',
        'iru.any_signed_os',
        'iru.apple_silicon',
        'iru.bootstrap_token_auth',
        'iru.bootstrap_token_escrowed',
        'iru.data_roaming',
        'iru.device_activation_lock_enabled',
        'iru.enrolled',
        'iru.filevault_enabled',
        'iru.filevault_key_escrowed',
        'iru.filevault_regeneration_needed',
        'iru.firewall_allow_signed_applications',
        'iru.firewall_block_all_incoming',
        'iru.firewall_enabled',
        'iru.firewall_logging',
        'iru.firewall_stealth_mode',
        'iru.firewall_unloading',
        'iru.gatekeeper_enabled',
        'iru.gatekeeper_trusted_developers',
        'iru.hotspot',
        'iru.is_missing',
        'iru.is_removed',
        'iru.kext_requires_bootstrap_token',
        'iru.mdm_enabled',
        'iru.mdm_manages_kext',
        'iru.os_up_to_date',
        'iru.shared_ipad',
        'iru.sip_enabled',
        'iru.software_update_requires_bootstrap_token',
        'iru.ssv_enabled',
        'iru.user_activation_lock_enabled',
        'iru.user_is_archived',
        'iru.user_manages_kext',
        'santa.enrolled',
        'santa.os_up_to_date',
        'sentinelone.allow_remote_shell',
        'sentinelone.encrypted_applications',
        'sentinelone.enrolled',
        'sentinelone.firewall_enabled',
        'sentinelone.has_containerized_workload',
        'sentinelone.in_remote_shell_session',
        'sentinelone.infected',
        'sentinelone.is_active',
        'sentinelone.is_ad_connector',
        'sentinelone.is_decommissioned',
        'sentinelone.is_hyper_automate',
        'sentinelone.is_pending_uninstall',
        'sentinelone.is_uninstalled',
        'sentinelone.is_up_to_date',
        'sentinelone.location_enabled',
        'sentinelone.network_quarantine_enabled',
        'sentinelone.os_up_to_date',
        'sentinelone.proxy_console',
        'sentinelone.proxy_deep_visibility',
        'sentinelone.proxy_pac_file_usage',
        'sentinelone.threat_reboot_required',
        'sophos.cloned',
        'sophos.enrolled',
        'sophos.isolation_admin_isolated',
        'sophos.isolation_self_isolated',
        'sophos.online',
        'sophos.os_is_server',
        'sophos.os_up_to_date',
        'sophos.tamper_protection_enabled',
        'sophos.tamper_protection_supported',
      ])
      .openapi({ description: 'boolean field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'boolean no_value provider comparison' })
  .openapi('BooleanNoValueProviderComparison')

const DeviceMembershipAllDevicesSchema = z
  .strictObject({
    device: z
      .strictObject({
        field: z.literal('account_id'),
        op: z.literal('eq'),
        value: z
          .strictObject({ subject: z.literal('account_id') })
          .openapi({ required: ['subject'] }),
      })
      .openapi({ required: ['field', 'op', 'value'] }),
  })
  .openapi({
    description: 'Every Client in the Account',
    example: { device: { field: 'account_id', op: 'eq', value: { subject: 'account_id' } } },
    required: ['device'],
    title: 'DeviceMembershipAllDevices',
  })
  .openapi('DeviceMembershipAllDevices')

const IntuneDeviceSchema = z
  .object({
    device_registration_state: z.string().nullable(),
    attestation_operating_system_rev_list_info: z.string().nullable(),
    entra_registered: z.boolean().nullable(),
    attestation_boot_app_security_version: z.string().nullable(),
    operating_system: z.string().nullable(),
    is_supervised: z.boolean().nullable(),
    notes: z.string().nullable(),
    free_storage_space_bytes: z.int().nullable(),
    attestation_issued_at: z.iso.datetime({ offset: true }).nullable(),
    config_manager_compliance_policy: z.boolean().nullable(),
    user_display_name: z.string().nullable(),
    config_manager_device_configuration: z.boolean().nullable(),
    config_manager_inventory: z.boolean().nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    enrolled_at: z.iso.datetime({ offset: true }).nullable(),
    total_storage_space_bytes: z.int().nullable(),
    attestation_operating_system_kernel_debugging: z.boolean().nullable(),
    attestation_data_execution_policy_enabled: z.boolean().nullable(),
    ethernet_mac_address: z.string().nullable(),
    synced_at: z.iso.datetime({ offset: true }),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    attestation_health_status_mismatch_info: z.string().nullable(),
    intune_id: z.string(),
    management_certificate_expires_at: z.iso.datetime({ offset: true }).nullable(),
    compliance_state: z.string().nullable(),
    require_user_enrollment_approval: z.boolean().nullable(),
    attestation_code_integrity_check_version: z.string().nullable(),
    attestation_pcr0: z.string().nullable(),
    attestation_boot_revision_list_info: z.string().nullable(),
    attestation_reset_count: z.int().nullable(),
    attestation_safe_mode: z.boolean().nullable(),
    managed_device_owner_type: z.string().nullable(),
    serial_number: z.string().nullable(),
    attestation_secure_boot: z.boolean().nullable(),
    device_category_display_name: z.string().nullable(),
    attestation_code_integrity_policy: z.string().nullable(),
    attestation_virtual_secure_mode: z.boolean().nullable(),
    last_sync_at: z.iso.datetime({ offset: true }).nullable(),
    is_encrypted: z.boolean().nullable(),
    eas_activated: z.boolean().nullable(),
    manufacturer: z.string().nullable(),
    eas_activated_at: z.iso.datetime({ offset: true }).nullable(),
    account_id: z.uuid(),
    attestation_early_launch_anti_malware_driver_protection: z.boolean().nullable(),
    management_agent: z.string().nullable(),
    attestation_tpm_version: z.string().nullable(),
    management_state: z.string().nullable(),
    wifi_mac_address: z.string().nullable(),
    attestation_code_integrity: z.boolean().nullable(),
    user_principal_name: z.string().nullable(),
    entra_device_id: z.string().nullable(),
    android_security_patch_level: z.iso.date().nullable(),
    attestation_pcr_hash_algorithm: z.string().nullable(),
    device_enrollment_type: z.string().nullable(),
    subscriber_carrier: z.string().nullable(),
    enrollment_profile_name: z.string().nullable(),
    model: z.string().nullable(),
    attestation_boot_manager_version: z.string().nullable(),
    partner_reported_threat_state: z.string().nullable(),
    config_manager_modern_apps: z.boolean().nullable(),
    user_id: z.string().nullable(),
    jail_broken: z.boolean().nullable(),
    eas_device_id: z.string().nullable(),
    exchange_last_successful_sync_at: z.iso.datetime({ offset: true }).nullable(),
    attestation_bit_locker_enabled: z.boolean().nullable(),
    attestation_content_version: z.string().nullable(),
    exchange_access_state: z.string().nullable(),
    managed_device_name: z.string().nullable(),
    udid: z.string().nullable(),
    attestation_secure_boot_config_policy_fingerprint: z.string().nullable(),
    attestation_identity_key: z.string().nullable(),
    attestation_boot_manager_security_version: z.string().nullable(),
    compliance_grace_period_expiration_at: z.iso.datetime({ offset: true }).nullable(),
    exchange_access_state_reason: z.string().nullable(),
    attestation_windows_pe: z.boolean().nullable(),
    attestation_status: z.string().nullable(),
    iccid: z.string().nullable(),
    meid: z.string().nullable(),
    attestation_supported: z.boolean().nullable(),
    attestation_test_signing: z.boolean().nullable(),
    attestation_boot_debugging: z.boolean().nullable(),
    phone_number: z.string().nullable(),
    attestation_restart_count: z.int().nullable(),
    imei: z.string().nullable(),
    os_version: z.string().nullable(),
    physical_memory_bytes: z.int().nullable(),
    config_manager_windows_update_for_business: z.boolean().nullable(),
    email_address: z.string().nullable(),
    device_name: z.string().nullable(),
    posture_provider_id: z.uuid(),
    config_manager_resource_access: z.boolean().nullable(),
  })
  .openapi({
    description: 'Device synced from Microsoft Intune',
    required: [
      'account_id',
      'intune_id',
      'posture_provider_id',
      'device_name',
      'managed_device_name',
      'serial_number',
      'entra_device_id',
      'enrollment_profile_name',
      'device_category_display_name',
      'user_id',
      'user_principal_name',
      'user_display_name',
      'email_address',
      'operating_system',
      'os_version',
      'model',
      'manufacturer',
      'imei',
      'meid',
      'iccid',
      'udid',
      'phone_number',
      'subscriber_carrier',
      'wifi_mac_address',
      'ethernet_mac_address',
      'android_security_patch_level',
      'total_storage_space_bytes',
      'free_storage_space_bytes',
      'physical_memory_bytes',
      'compliance_state',
      'management_state',
      'management_agent',
      'managed_device_owner_type',
      'device_enrollment_type',
      'device_registration_state',
      'partner_reported_threat_state',
      'jail_broken',
      'is_encrypted',
      'is_supervised',
      'entra_registered',
      'require_user_enrollment_approval',
      'notes',
      'eas_activated',
      'eas_device_id',
      'eas_activated_at',
      'exchange_access_state',
      'exchange_access_state_reason',
      'exchange_last_successful_sync_at',
      'config_manager_inventory',
      'config_manager_modern_apps',
      'config_manager_resource_access',
      'config_manager_device_configuration',
      'config_manager_compliance_policy',
      'config_manager_windows_update_for_business',
      'attestation_status',
      'attestation_content_version',
      'attestation_issued_at',
      'attestation_identity_key',
      'attestation_reset_count',
      'attestation_restart_count',
      'attestation_data_execution_policy_enabled',
      'attestation_bit_locker_enabled',
      'attestation_boot_manager_version',
      'attestation_code_integrity_check_version',
      'attestation_secure_boot',
      'attestation_boot_debugging',
      'attestation_operating_system_kernel_debugging',
      'attestation_code_integrity',
      'attestation_test_signing',
      'attestation_safe_mode',
      'attestation_windows_pe',
      'attestation_early_launch_anti_malware_driver_protection',
      'attestation_virtual_secure_mode',
      'attestation_pcr_hash_algorithm',
      'attestation_boot_app_security_version',
      'attestation_boot_manager_security_version',
      'attestation_tpm_version',
      'attestation_pcr0',
      'attestation_secure_boot_config_policy_fingerprint',
      'attestation_code_integrity_policy',
      'attestation_boot_revision_list_info',
      'attestation_operating_system_rev_list_info',
      'attestation_health_status_mismatch_info',
      'attestation_supported',
      'enrolled_at',
      'last_sync_at',
      'compliance_grace_period_expiration_at',
      'management_certificate_expires_at',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'IntuneDevice',
  })
  .openapi('IntuneDevice')

const IntuneDeviceListResponseSchema = z
  .object({
    data: z.array(IntuneDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'IntuneDeviceListResponse', required: [] })
  .openapi('IntuneDeviceListResponse')

const DeviceMembershipActorGroupSchema = z
  .strictObject({
    actor_group: z
      .strictObject({
        field: z.literal('id'),
        op: z.literal('eq'),
        value: z.uuid().openapi({ description: 'Group ID' }),
      })
      .openapi({ required: ['field', 'op', 'value'] }),
  })
  .openapi({
    description: 'The Clients of every Actor in one Group',
    example: {
      actor_group: { field: 'id', op: 'eq', value: 'b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c' },
    },
    required: ['actor_group'],
    title: 'DeviceMembershipActorGroup',
  })
  .openapi('DeviceMembershipActorGroup')

const PolicyConditionSchema = z
  .object({
    operator: z
      .enum([
        'is_in',
        'is_not_in',
        'is_in_cidr',
        'is_not_in_cidr',
        'is_in_day_of_week_time_ranges',
        'is',
      ])
      .openapi({
        description: 'How the values are compared against the property',
        example: 'is_in',
      }),
    property: z
      .enum([
        'remote_ip_location_region',
        'remote_ip',
        'auth_provider_id',
        'current_utc_datetime',
        'client_verified',
      ])
      .openapi({
        description: 'The attribute of the connection being matched against',
        example: 'remote_ip_location_region',
      }),
    values: z
      .array(z.string())
      .openapi({
        description: 'The values to compare against, interpreted per the property',
        example: ['US', 'CA'],
      }),
  })
  .openapi({
    description:
      'A condition that must be satisfied for the Policy to grant access.\n\nAll conditions on a Policy must evaluate to true for access to be\ngranted. A condition is made up of a `property`, an `operator`, and a\nlist of `values`. The valid operators and the meaning of `values`\ndepend on the `property`:\n\n* `remote_ip_location_region` with `is_in` / `is_not_in`: `values` are\n  ISO 3166-1 alpha-2 country codes, e.g. `["US", "CA"]`.\n* `remote_ip` with `is_in_cidr` / `is_not_in_cidr`: `values` are CIDR\n  ranges (IPv4 or IPv6), e.g. `["10.0.0.0/8", "2607:f8b0::/32"]`.\n* `auth_provider_id` with `is_in` / `is_not_in`: `values` are\n  authentication provider IDs (UUIDs).\n* `current_utc_datetime` with `is_in_day_of_week_time_ranges`: each\n  value is a `DAY/TIME_RANGES/TIMEZONE` string where `DAY` is one of\n  `M T W R F S U` (Monday through Sunday), `TIME_RANGES` is a\n  comma-separated list of `HH:MM-HH:MM` ranges, and `TIMEZONE` is an\n  IANA timezone name, e.g. `"M/09:00-17:00/America/New_York"`.\n* `client_verified` with `is`: `values` is a single-element list\n  containing `"true"` or `"false"`.\n',
    required: ['property', 'operator', 'values'],
    title: 'PolicyCondition',
  })
  .openapi('PolicyCondition')

const PolicyCreateParamsSchema = z
  .object({
    conditions: z
      .array(PolicyConditionSchema)
      .exactOptional()
      .openapi({
        description: 'Conditions that must be satisfied for the Policy to grant access',
        example: [
          { operator: 'is_in', property: 'remote_ip_location_region', values: ['US', 'CA'] },
        ],
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Policy Description', example: 'Policy to allow something' }),
    flow_log_uploads_enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether flow logs are reported for connections authorized by this Policy. Defaults to true. Always false for Internet Resource policies.',
        example: true,
      }),
    group_id: z
      .uuid()
      .openapi({ description: 'Group ID', example: '88eae9ce-9179-48c6-8430-770e38dd4775' }),
    is_disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained. Defaults to false.',
        example: false,
      }),
    postures: z
      .union([PolicyPostureNodeSchema, z.literal(null).nullable()])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Device posture expression required in addition to every entry in conditions. Omit or set to null for no posture requirement. A non-null expression requires the account's device_posture entitlement (Enterprise); otherwise returns HTTP 403. See PolicyPostureNode for fields, operators, platform behavior, and limits.",
        example: {
          and: [
            { field: 'intune.enrolled', op: 'is', value: true },
            { field: 'intune.compliance_state', op: 'is', rows: 'all', value: 'compliant' },
            { field: 'intune.last_sync_at', op: 'within_last', value: 'PT24H' },
            {
              or: [
                { field: 'firezone.last_seen_version', op: 'gte', value: '@latest' },
                { not: { field: 'firezone.hostname', op: 'starts_with', value: 'test-' } },
              ],
            },
          ],
        },
      }),
    require_attestation: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Whether the Client must present a valid X.509 certificate from one of the account's trust anchors on its current connection. Device posture checks then match only on the identifiers that certificate proves. Defaults to false. Setting it to true returns 422 when the account has no trust anchors.",
        example: false,
      }),
    resource_id: z
      .uuid()
      .openapi({ description: 'Resource ID', example: 'a9f60587-793c-46ae-8525-597f43ab2fb1' }),
  })
  .openapi({
    description: 'Policy attributes accepted when creating a Policy',
    required: ['group_id', 'resource_id'],
    title: 'PolicyCreateParams',
  })
  .openapi('PolicyCreateParams')

const StringListProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.computer_dns_name',
        'defender.defender_id',
        'defender.entra_device_id',
        'defender.os_processor',
        'defender.rbac_group_name',
        'defender.version',
        'defender.vm_cloud_provider',
        'defender.vm_id',
        'defender.vm_resource_id',
        'defender.vm_subscription_id',
        'intune.attestation_boot_revision_list_info',
        'intune.attestation_code_integrity_policy',
        'intune.attestation_health_status_mismatch_info',
        'intune.attestation_identity_key',
        'intune.attestation_operating_system_rev_list_info',
        'intune.attestation_pcr0',
        'intune.attestation_pcr_hash_algorithm',
        'intune.attestation_secure_boot_config_policy_fingerprint',
        'intune.device_category_display_name',
        'intune.device_name',
        'intune.eas_device_id',
        'intune.email_address',
        'intune.enrollment_profile_name',
        'intune.entra_device_id',
        'intune.ethernet_mac_address',
        'intune.iccid',
        'intune.imei',
        'intune.intune_id',
        'intune.managed_device_name',
        'intune.manufacturer',
        'intune.meid',
        'intune.model',
        'intune.notes',
        'intune.operating_system',
        'intune.phone_number',
        'intune.serial_number',
        'intune.subscriber_carrier',
        'intune.udid',
        'intune.user_display_name',
        'intune.user_id',
        'intune.user_principal_name',
        'intune.wifi_mac_address',
        'iru.asset_tag',
        'iru.blueprint_id',
        'iru.blueprint_name',
        'iru.device_name',
        'iru.host_name',
        'iru.iru_id',
        'iru.local_hostname',
        'iru.model',
        'iru.model_identifier',
        'iru.model_name',
        'iru.os_build',
        'iru.os_name',
        'iru.serial_number',
        'iru.supplemental_build_version',
        'iru.user_email',
        'iru.user_id',
        'iru.user_name',
        'santa.hostname',
        'santa.machine_model',
        'santa.os_build',
        'santa.primary_user',
        'santa.santa_id',
        'santa.serial_number',
        'santa.temporary_admin_mode_user',
        'sentinelone.account_name',
        'sentinelone.ad_computer_distinguished_name',
        'sentinelone.ad_last_user_distinguished_name',
        'sentinelone.ad_mail',
        'sentinelone.ad_user_principal_name',
        'sentinelone.computer_name',
        'sentinelone.cpu_id',
        'sentinelone.domain',
        'sentinelone.external_id',
        'sentinelone.group_id',
        'sentinelone.group_ip',
        'sentinelone.group_name',
        'sentinelone.last_logged_in_user_name',
        'sentinelone.machine_sid',
        'sentinelone.model_name',
        'sentinelone.os_name',
        'sentinelone.os_username',
        'sentinelone.sentinelone_account_id',
        'sentinelone.sentinelone_id',
        'sentinelone.serial_number',
        'sentinelone.site_id',
        'sentinelone.site_name',
        'sentinelone.storage_name',
        'sentinelone.storage_type',
        'sentinelone.uuid',
        'sophos.associated_person_id',
        'sophos.associated_person_name',
        'sophos.associated_person_via_login',
        'sophos.cloud_instance_id',
        'sophos.group_id',
        'sophos.group_name',
        'sophos.hostname',
        'sophos.os_name',
        'sophos.serial_number',
        'sophos.sophos_id',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_in', 'is_not_in']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string list provider comparison' })
  .openapi('StringListProviderComparison')

const SantaDeviceSchema = z
  .object({
    account_id: z.uuid(),
    configured_client_mode: z.string().nullable(),
    first_seen_at: z.iso.datetime({ offset: true }).nullable(),
    hostname: z.string().nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    last_preflight_at: z.iso.datetime({ offset: true }).nullable(),
    last_preflight_ip: z.string().nullable(),
    last_seen_client_mode: z.string().nullable(),
    last_sync_at: z.iso.datetime({ offset: true }).nullable(),
    machine_model: z.string().nullable(),
    os_build: z.string().nullable(),
    os_type: z.string().nullable(),
    os_version: z.string().nullable(),
    posture_provider_id: z.uuid(),
    primary_user: z.string().nullable(),
    primary_user_groups: z.array(z.string()).nullable(),
    rule_sync_at: z.iso.datetime({ offset: true }).nullable(),
    santa_id: z.string(),
    santa_version: z.string().nullable(),
    santanetd_version: z.string().nullable(),
    serial_number: z.string().nullable(),
    sip_status: z.int().nullable(),
    synced_at: z.iso.datetime({ offset: true }),
    tags: z.array(z.string()).nullable(),
    temporary_admin_mode_ends_at: z.iso.datetime({ offset: true }).nullable(),
    temporary_admin_mode_user: z.string().nullable(),
    temporary_monitor_mode_ends_at: z.iso.datetime({ offset: true }).nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
  })
  .openapi({
    description: 'Santa host synced from North Pole Security Workshop',
    required: [
      'account_id',
      'id',
      'santa_id',
      'posture_provider_id',
      'serial_number',
      'machine_model',
      'hostname',
      'os_version',
      'os_build',
      'os_type',
      'sip_status',
      'primary_user',
      'primary_user_groups',
      'santa_version',
      'santanetd_version',
      'last_seen_client_mode',
      'last_sync_at',
      'rule_sync_at',
      'last_preflight_at',
      'last_preflight_ip',
      'tags',
      'configured_client_mode',
      'temporary_monitor_mode_ends_at',
      'first_seen_at',
      'temporary_admin_mode_ends_at',
      'temporary_admin_mode_user',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'SantaDevice',
  })
  .openapi('SantaDevice')

const IntunePostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    name: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    tenant_id: z.string(),
    type: z.literal('intune'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Microsoft Intune posture provider',
    required: [
      'account_id',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'name',
      'synced_at',
      'tenant_id',
      'type',
      'updated_at',
    ],
    title: 'IntunePostureProvider',
  })
  .openapi('IntunePostureProvider')

const IntunePostureProviderListResponseSchema = z
  .object({
    data: z.array(IntunePostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'IntunePostureProviderListResponse', required: [] })
  .openapi('IntunePostureProviderListResponse')

const DatetimeScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.first_seen_at',
        'defender.last_seen_at',
        'intune.android_security_patch_level',
        'intune.attestation_issued_at',
        'intune.compliance_grace_period_expiration_at',
        'intune.eas_activated_at',
        'intune.enrolled_at',
        'intune.exchange_last_successful_sync_at',
        'intune.last_sync_at',
        'intune.management_certificate_expires_at',
        'iru.activation_lock_collected_at',
        'iru.filevault_collected_at',
        'iru.filevault_key_rotation_scheduled_at',
        'iru.firewall_collected_at',
        'iru.first_enrolled_at',
        'iru.gatekeeper_collected_at',
        'iru.inventory_collected_at',
        'iru.last_check_in_at',
        'iru.last_enrolled_at',
        'iru.startup_settings_collected_at',
        'santa.first_seen_at',
        'santa.last_preflight_at',
        'santa.last_sync_at',
        'santa.rule_sync_at',
        'santa.temporary_admin_mode_ends_at',
        'santa.temporary_monitor_mode_ends_at',
        'sentinelone.first_full_mode_at',
        'sentinelone.full_disk_scan_updated_at',
        'sentinelone.last_active_at',
        'sentinelone.last_successful_scan_at',
        'sentinelone.operational_state_expires_at',
        'sentinelone.os_start_time',
        'sentinelone.registered_at',
        'sentinelone.remote_profiling_state_expires_at',
        'sentinelone.scan_aborted_at',
        'sentinelone.scan_finished_at',
        'sentinelone.scan_started_at',
        'sophos.last_agent_update_at',
        'sophos.last_os_update_at',
        'sophos.last_seen_at',
      ])
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['before', 'after']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.iso.datetime({ offset: true }).max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'datetime scalar provider comparison' })
  .openapi('DatetimeScalarProviderComparison')

const SantaPostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    api_url: z.url(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    name: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    type: z.literal('santa'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Santa posture provider backed by North Pole Security Workshop',
    required: [
      'account_id',
      'api_url',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'name',
      'synced_at',
      'type',
      'updated_at',
    ],
    title: 'SantaPostureProvider',
  })
  .openapi('SantaPostureProvider')

const VersionScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.agent_version',
        'intune.attestation_boot_app_security_version',
        'intune.attestation_boot_manager_security_version',
        'intune.attestation_boot_manager_version',
        'intune.attestation_code_integrity_check_version',
        'intune.attestation_content_version',
        'intune.attestation_tpm_version',
        'intune.os_version',
        'iru.agent_version',
        'iru.display_os_version',
        'iru.firewall_version',
        'iru.gatekeeper_opaque_version',
        'iru.gatekeeper_version',
        'iru.malware_removal_tool_version',
        'iru.os_version',
        'iru.supplemental_os_version_extra',
        'iru.xprotect_version',
        'santa.os_version',
        'santa.santa_version',
        'santa.santanetd_version',
        'sentinelone.agent_version',
        'sentinelone.os_revision',
        'sentinelone.ranger_version',
      ])
      .openapi({ description: 'version field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is', 'is_not', 'gt', 'gte', 'lt', 'lte']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .string()
      .max(1024)
      .openapi({
        description: 'Segment-wise version, or @latest for firezone.last_seen_version only',
      }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'version scalar provider comparison' })
  .openapi('VersionScalarProviderComparison')

const BooleanScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.enrolled',
        'defender.entra_joined',
        'defender.is_excluded',
        'defender.is_potential_duplication',
        'defender.os_up_to_date',
        'intune.attestation_bit_locker_enabled',
        'intune.attestation_boot_debugging',
        'intune.attestation_code_integrity',
        'intune.attestation_data_execution_policy_enabled',
        'intune.attestation_early_launch_anti_malware_driver_protection',
        'intune.attestation_operating_system_kernel_debugging',
        'intune.attestation_safe_mode',
        'intune.attestation_secure_boot',
        'intune.attestation_supported',
        'intune.attestation_test_signing',
        'intune.attestation_virtual_secure_mode',
        'intune.attestation_windows_pe',
        'intune.config_manager_compliance_policy',
        'intune.config_manager_device_configuration',
        'intune.config_manager_inventory',
        'intune.config_manager_modern_apps',
        'intune.config_manager_resource_access',
        'intune.config_manager_windows_update_for_business',
        'intune.eas_activated',
        'intune.enrolled',
        'intune.entra_registered',
        'intune.is_encrypted',
        'intune.is_supervised',
        'intune.jail_broken',
        'intune.os_up_to_date',
        'intune.require_user_enrollment_approval',
        'iru.activation_lock_allowed_while_supervised',
        'iru.activation_lock_bypass_code_failed',
        'iru.activation_lock_supported',
        'iru.agent_installed',
        'iru.any_signed_os',
        'iru.apple_silicon',
        'iru.bootstrap_token_auth',
        'iru.bootstrap_token_escrowed',
        'iru.data_roaming',
        'iru.device_activation_lock_enabled',
        'iru.enrolled',
        'iru.filevault_enabled',
        'iru.filevault_key_escrowed',
        'iru.filevault_regeneration_needed',
        'iru.firewall_allow_signed_applications',
        'iru.firewall_block_all_incoming',
        'iru.firewall_enabled',
        'iru.firewall_logging',
        'iru.firewall_stealth_mode',
        'iru.firewall_unloading',
        'iru.gatekeeper_enabled',
        'iru.gatekeeper_trusted_developers',
        'iru.hotspot',
        'iru.is_missing',
        'iru.is_removed',
        'iru.kext_requires_bootstrap_token',
        'iru.mdm_enabled',
        'iru.mdm_manages_kext',
        'iru.os_up_to_date',
        'iru.shared_ipad',
        'iru.sip_enabled',
        'iru.software_update_requires_bootstrap_token',
        'iru.ssv_enabled',
        'iru.user_activation_lock_enabled',
        'iru.user_is_archived',
        'iru.user_manages_kext',
        'santa.enrolled',
        'santa.os_up_to_date',
        'sentinelone.allow_remote_shell',
        'sentinelone.encrypted_applications',
        'sentinelone.enrolled',
        'sentinelone.firewall_enabled',
        'sentinelone.has_containerized_workload',
        'sentinelone.in_remote_shell_session',
        'sentinelone.infected',
        'sentinelone.is_active',
        'sentinelone.is_ad_connector',
        'sentinelone.is_decommissioned',
        'sentinelone.is_hyper_automate',
        'sentinelone.is_pending_uninstall',
        'sentinelone.is_uninstalled',
        'sentinelone.is_up_to_date',
        'sentinelone.location_enabled',
        'sentinelone.network_quarantine_enabled',
        'sentinelone.os_up_to_date',
        'sentinelone.proxy_console',
        'sentinelone.proxy_deep_visibility',
        'sentinelone.proxy_pac_file_usage',
        'sentinelone.threat_reboot_required',
        'sophos.cloned',
        'sophos.enrolled',
        'sophos.isolation_admin_isolated',
        'sophos.isolation_self_isolated',
        'sophos.online',
        'sophos.os_is_server',
        'sophos.os_up_to_date',
        'sophos.tamper_protection_enabled',
        'sophos.tamper_protection_supported',
      ])
      .openapi({ description: 'boolean field; see PolicyPostureNode for platform applicability' }),
    op: z.literal('is'),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.boolean(),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'boolean scalar provider comparison' })
  .openapi('BooleanScalarProviderComparison')

const StringArrayScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.machine_tags',
        'iru.tags',
        'santa.primary_user_groups',
        'santa.tags',
        'sentinelone.active_protection',
        'sentinelone.ad_computer_member_of',
        'sentinelone.ad_last_user_member_of',
        'sentinelone.missing_permissions',
        'sentinelone.user_actions_needed',
        'sophos.ipv4_addresses',
        'sophos.ipv6_addresses',
        'sophos.mac_addresses',
      ])
      .openapi({
        description: 'string_array field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['contains', 'does_not_contain']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.string().max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string_array scalar provider comparison' })
  .openapi('StringArrayScalarProviderComparison')

const OktaAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_id: z.string().openapi({ description: 'Client ID', example: '0oa1b2c3d4e5EXAMPLE' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_default: z.boolean().openapi({ description: 'Whether provider is default', example: false }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    issuer: z.string().openapi({ description: 'Issuer', example: 'https://example.okta.com' }),
    name: z.string().openapi({ description: 'Provider name', example: 'Okta' }),
    okta_domain: z.string().openapi({ description: 'Okta domain', example: 'example.okta.com' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Okta Auth Provider',
    required: [
      'account_id',
      'client_id',
      'client_session_lifetime_secs',
      'context',
      'id',
      'inserted_at',
      'is_default',
      'is_disabled',
      'issuer',
      'name',
      'okta_domain',
      'portal_session_lifetime_secs',
      'updated_at',
    ],
    title: 'OktaAuthProvider',
  })
  .openapi('OktaAuthProvider')

const GatewaySchema = z
  .object({
    gateway_token_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          'ID of the token this Gateway last connected with. Null until the Gateway connects for the first time.',
        example: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
      }),
    id: z
      .uuid()
      .openapi({ description: 'Gateway ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    ipv4: z
      .string()
      .openapi({
        description: 'Tunnel IPv4 address (see last_seen_remote_ip for the public IP)',
        example: '100.64.0.1',
      }),
    ipv6: z
      .string()
      .openapi({
        description: 'Tunnel IPv6 address (see last_seen_remote_ip for the public IP)',
        example: 'fd00:2021:1111::1',
      }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description: 'Timestamp of the latest connection',
        example: '2025-01-01T00:00:00Z',
      }),
    last_seen_remote_ip: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP from the latest session', example: '198.51.100.10' }),
    last_seen_remote_ip_location_city: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP city from the latest session', example: 'San Francisco' }),
    last_seen_remote_ip_location_lat: z
      .number()
      .nullable()
      .openapi({ description: 'Remote IP latitude from the latest session', example: 37.7749 }),
    last_seen_remote_ip_location_lon: z
      .number()
      .nullable()
      .openapi({ description: 'Remote IP longitude from the latest session', example: -122.4194 }),
    last_seen_remote_ip_location_region: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP region from the latest session', example: 'US-CA' }),
    last_seen_user_agent: z
      .string()
      .nullable()
      .openapi({
        description: 'User agent from the latest session',
        example: 'Linux/6.1.0 connlib/1.5.0',
      }),
    last_seen_version: z
      .string()
      .nullable()
      .openapi({ description: 'Gateway version from the latest session', example: '1.5.0' }),
    name: z.string().openapi({ description: 'Gateway Name', example: 'vpc-us-east' }),
    online: z.boolean().openapi({ description: 'Online status of Gateway', example: true }),
    public_key: z
      .string()
      .nullable()
      .openapi({
        description: 'WireGuard public key from the latest session',
        example: 'WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=',
      }),
    rotated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'When the token identified by `gateway_token_id` was rotated out. Null in the normal case. When set, a replacement token has been minted and this one stays valid only until the Gateway connects with the replacement or 4 hours elapse from this timestamp, whichever comes first - so a non-null value means a rotation is pending and the Gateway has not picked it up yet.',
      }),
  })
  .openapi({
    description: 'Gateway',
    required: [
      'gateway_token_id',
      'id',
      'ipv4',
      'ipv6',
      'last_seen_at',
      'last_seen_remote_ip',
      'last_seen_remote_ip_location_city',
      'last_seen_remote_ip_location_lat',
      'last_seen_remote_ip_location_lon',
      'last_seen_remote_ip_location_region',
      'last_seen_user_agent',
      'last_seen_version',
      'name',
      'online',
      'public_key',
      'rotated_at',
    ],
    title: 'Gateway',
  })
  .openapi('Gateway')

const GatewayResponseSchema = z
  .object({ data: GatewaySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Gateway',
    title: 'GatewayResponse',
    required: [],
  })
  .openapi('GatewayResponse')

const DeviceMembershipCriteriaSchema = z
  .xor([
    z
      .strictObject({
        device: z
          .strictObject({
            field: z.literal('id'),
            op: z.literal('in'),
            value: z.array(z.uuid()).openapi({ description: 'Client IDs' }),
          })
          .openapi({ required: ['field', 'op', 'value'] }),
      })
      .openapi({
        description: 'Exactly the Clients named',
        example: {
          device: {
            field: 'id',
            op: 'in',
            value: ['7cb89288-1fb3-433e-a522-2d087e45988d', 'cc9f561a-444d-4083-ab38-0abc6cf2314c'],
          },
        },
        required: ['device'],
        title: 'DeviceMembershipListedDevices',
      }),
    z
      .strictObject({
        device: z
          .strictObject({
            field: z.literal('actor_id'),
            op: z.literal('eq'),
            value: z
              .strictObject({ subject: z.literal('actor_id') })
              .openapi({ required: ['subject'] }),
          })
          .openapi({ required: ['field', 'op', 'value'] }),
      })
      .openapi({
        description: 'The Clients of the Actor asking for access',
        example: { device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } } },
        required: ['device'],
        title: 'DeviceMembershipOwnDevices',
      }),
    z
      .strictObject({
        device: z
          .strictObject({
            field: z.literal('account_id'),
            op: z.literal('eq'),
            value: z
              .strictObject({ subject: z.literal('account_id') })
              .openapi({ required: ['subject'] }),
          })
          .openapi({ required: ['field', 'op', 'value'] }),
      })
      .openapi({
        description: 'Every Client in the Account',
        example: { device: { field: 'account_id', op: 'eq', value: { subject: 'account_id' } } },
        required: ['device'],
        title: 'DeviceMembershipAllDevices',
      }),
    z
      .strictObject({
        actor_group: z
          .strictObject({
            field: z.literal('id'),
            op: z.literal('eq'),
            value: z.uuid().openapi({ description: 'Group ID' }),
          })
          .openapi({ required: ['field', 'op', 'value'] }),
      })
      .openapi({
        description: 'The Clients of every Actor in one Group',
        example: {
          actor_group: { field: 'id', op: 'eq', value: 'b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c' },
        },
        required: ['actor_group'],
        title: 'DeviceMembershipActorGroup',
      }),
  ])
  .openapi({
    description:
      'Who a `device_pool` Resource holds. Required for a device pool, absent for every\nother Resource type.\n\nThe object has exactly one key, naming where the field lives: `device` is the\nClient row itself, and `actor_group` is a group the Client\'s owner belongs to.\nThe value is one rule comparing a field against either a literal or an attribute\nof the Actor asking for access. More sources can be added later without changing\nthe rules already stored.\n\nThe four rules the API accepts, and who each one holds:\n\n    {"device": {"field": "id", "op": "in", "value": ["<client id>", ...]}}\n    {"device": {"field": "actor_id", "op": "eq", "value": {"subject": "actor_id"}}}\n    {"device": {"field": "account_id", "op": "eq", "value": {"subject": "account_id"}}}\n    {"actor_group": {"field": "id", "op": "eq", "value": "<group id>"}}\n\nIn order: exactly the Clients named, the asking Actor\'s own Clients, every Client\nin the Account, and the Clients of every Actor in one Group.\n\nEditing the list of Clients the first rule names drops the connections to the\nClients removed and leaves every other connection through the pool alone.\n\nEvery other change to this field is a breaking update, because any Client can move\nin or out of the pool: every active connection through the pool is dropped, and\nClients reconnect to the members they may still reach.\n\nClients older than the device-pool protocol only understand a pool that names its\nmembers, so they are sent the first rule and never the other three.\n',
    example: { device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } } },
    title: 'DeviceMembershipCriteria',
  })
  .openapi('DeviceMembershipCriteria')

const ResourceFilterSchema = z
  .object({
    ports: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Port numbers or ranges (e.g. `80` or `8000 - 9000`) the filter allows. Not applicable to `icmp`.',
        example: ['80', '443', '8000 - 9000'],
      }),
    protocol: z
      .enum(['tcp', 'udp', 'icmp'])
      .openapi({ description: 'Transport protocol the filter applies to', example: 'tcp' }),
  })
  .openapi({
    description: 'Traffic filter restricting the protocols and ports the Resource exposes',
    required: ['protocol'],
    title: 'ResourceFilter',
  })
  .openapi('ResourceFilter')

const ResourceCreateRequestSchema = z
  .object({
    resource: z
      .object({
        address: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Resource address. Required for `cidr`, `ip` and `dns`. `device_pool` and `internet` Resources ignore it.',
            example: '10.0.0.10',
          }),
        address_description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Resource address description', example: 'Production Database' }),
        device_membership_criteria: DeviceMembershipCriteriaSchema.exactOptional(),
        filters: z
          .array(ResourceFilterSchema)
          .exactOptional()
          .openapi({
            description: 'Traffic filters restricting the protocols and ports the Resource exposes',
            example: [{ ports: ['5432'], protocol: 'tcp' }],
          }),
        ip_stack: z
          .enum(['ipv4_only', 'ipv6_only', 'dual'])
          .nullable()
          .exactOptional()
          .openapi({ description: 'IP stack type. Only supported for DNS resources.' }),
        name: z.string().openapi({ description: 'Resource name', example: 'Prod DB' }),
        site_id: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.',
            example: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
            title: 'SiteID',
          }),
        type: z
          .enum(['cidr', 'ip', 'dns', 'internet', 'device_pool'])
          .openapi({
            description:
              'Resource type. `internet` is accepted only in the Internet Site. `device_pool` takes no `site_id` and no `address`.',
            example: 'ip',
          }),
      })
      .openapi({ required: ['name', 'type'] }),
  })
  .openapi({
    description:
      'POST body for creating a Resource. `site_id` is required for every type except `device_pool`, which needs `device_membership_criteria` instead.',
    required: ['resource'],
    title: 'ResourceCreateRequest',
  })
  .openapi('ResourceCreateRequest')

const ClientTokenWithSecretSchema = z
  .object({
    actor_id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: '43a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Expiration', example: '2025-01-15T12:34:56.789Z' }),
    id: z
      .uuid()
      .openapi({ description: 'Client Token ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-15T12:34:56.789Z' }),
    token: z
      .string()
      .openapi({ description: 'Encoded token secret', example: 'secret-token-here' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T12:34:56.789Z' }),
  })
  .openapi({
    description:
      'Client Token as returned when it is created, including the encoded secret. The secret is shown once and cannot be retrieved later.',
    required: ['actor_id', 'expires_at', 'id', 'inserted_at', 'token', 'updated_at'],
    title: 'ClientTokenWithSecret',
  })
  .openapi('ClientTokenWithSecret')

const ClientTokenCreateResponseSchema = z
  .object({ data: ClientTokenWithSecretSchema.exactOptional() })
  .openapi({
    description: 'Response schema for a new Client Token',
    title: 'ClientTokenCreateResponse',
    required: [],
  })
  .openapi('ClientTokenCreateResponse')

const PostureFieldSchema = z
  .object({
    field: z
      .string()
      .openapi({
        description: "Value for a leaf's `field`, as `<provider>.<attribute>`",
        example: 'intune.compliance_state',
      }),
    operators: z
      .array(
        z.enum([
          'eq',
          'ne',
          'gt',
          'gte',
          'lt',
          'lte',
          'is',
          'is_not',
          'is_in',
          'is_not_in',
          'contains',
          'does_not_contain',
          'starts_with',
          'ends_with',
          'matches',
          'does_not_match',
          'is_in_cidr',
          'is_not_in_cidr',
          'is_empty',
          'is_not_empty',
          'before',
          'after',
          'within_last',
          'not_within_last',
          'contains_any_of',
          'contains_all_of',
          'exists',
          'does_not_exist',
        ]),
      )
      .openapi({
        description: "Values for a leaf's `op` that this field accepts",
        example: ['is', 'is_not', 'exists', 'does_not_exist'],
      }),
    platforms: z
      .array(z.enum(['windows', 'macos', 'linux', 'ios', 'android']))
      .openapi({
        description:
          'Platforms the field applies to. A leaf on this field is skipped for a device on any other platform.',
        example: ['windows', 'macos', 'ios', 'android'],
      }),
    provider: z
      .enum(['firezone', 'intune', 'iru', 'defender', 'santa', 'sentinelone', 'sophos'])
      .openapi({ description: 'Provider the field comes from', example: 'intune' }),
    rows_supported: z
      .boolean()
      .openapi({
        description:
          'Whether a leaf on this field accepts `rows`. False for `firezone` fields, which describe exactly one connecting device.',
        example: true,
      }),
    type: z
      .enum([
        'string',
        'enum_string',
        'boolean',
        'integer',
        'float',
        'version',
        'datetime',
        'ip',
        'ipv4',
        'ipv6',
        'string_array',
        'json',
      ])
      .openapi({
        description: 'Type of the field, which decides the operators and the value',
        example: 'enum_string',
      }),
  })
  .openapi({
    description: "A field a Policy's `postures` expression can test",
    required: ['field', 'provider', 'type', 'operators', 'platforms', 'rows_supported'],
    title: 'PostureField',
  })
  .openapi('PostureField')

const DefenderPostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    name: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    tenant_id: z.string(),
    type: z.literal('defender'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Microsoft Defender for Endpoint posture provider',
    required: [
      'account_id',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'name',
      'synced_at',
      'tenant_id',
      'type',
      'updated_at',
    ],
    title: 'DefenderPostureProvider',
  })
  .openapi('DefenderPostureProvider')

const GatewayCreateSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Gateway Name. Randomly generated when omitted.',
        example: 'vpc-us-east',
      }),
  })
  .openapi({
    description: 'Create schema for a single Gateway',
    title: 'GatewayCreate',
    required: [],
  })
  .openapi('GatewayCreate')

const GatewayCreateRequestSchema = z
  .object({
    gateway: GatewayCreateSchema.exactOptional(),
    issue_token: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Whether to mint the Gateway's token and return it in the response. Requires the `gateway_tokens:write` scope when true.\n",
      }),
  })
  .openapi({
    description: 'Request body for provisioning a Gateway',
    title: 'GatewayCreateRequest',
    required: [],
  })
  .openapi('GatewayCreateRequest')

const ClientTokenSchema = z
  .object({
    actor_id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: '43a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Expiration', example: '2025-01-15T12:34:56.789Z' }),
    id: z
      .uuid()
      .openapi({ description: 'Client Token ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-15T12:34:56.789Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T12:34:56.789Z' }),
  })
  .openapi({
    description: 'Client Token metadata',
    required: ['actor_id', 'expires_at', 'id', 'inserted_at', 'updated_at'],
    title: 'ClientToken',
  })
  .openapi('ClientToken')

const EntraAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    email_claim: z
      .enum(['email', 'upn', 'preferred_username'])
      .openapi({ description: 'OIDC claim to use as email', example: 'upn' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_default: z.boolean().openapi({ description: 'Whether provider is default', example: false }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    name: z.string().openapi({ description: 'Provider name', example: 'Entra' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    sign_in_tenant_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          'Verified tenant ID whose sign-in endpoint users authenticate through, so that B2B guest users of that tenant can sign in. Null when users authenticate through their home tenant.',
        example: '12345678-1234-1234-1234-123456789012',
        readOnly: true,
      }),
    tenant_ids: z
      .array(z.uuid())
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'Verified Entra tenant IDs allowed to authenticate through this provider',
        example: ['12345678-1234-1234-1234-123456789012'],
        readOnly: true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Entra Auth Provider',
    required: [
      'account_id',
      'client_session_lifetime_secs',
      'context',
      'email_claim',
      'id',
      'inserted_at',
      'is_default',
      'is_disabled',
      'tenant_ids',
      'name',
      'portal_session_lifetime_secs',
      'sign_in_tenant_id',
      'updated_at',
    ],
    title: 'EntraAuthProvider',
  })
  .openapi('EntraAuthProvider')

const StringArrayListProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.machine_tags',
        'iru.tags',
        'santa.primary_user_groups',
        'santa.tags',
        'sentinelone.active_protection',
        'sentinelone.ad_computer_member_of',
        'sentinelone.ad_last_user_member_of',
        'sentinelone.missing_permissions',
        'sentinelone.user_actions_needed',
        'sophos.ipv4_addresses',
        'sophos.ipv6_addresses',
        'sophos.mac_addresses',
      ])
      .openapi({
        description: 'string_array field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['contains_any_of', 'contains_all_of']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string_array list provider comparison' })
  .openapi('StringArrayListProviderComparison')

const StringNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.computer_dns_name',
        'defender.defender_id',
        'defender.entra_device_id',
        'defender.os_processor',
        'defender.rbac_group_name',
        'defender.version',
        'defender.vm_cloud_provider',
        'defender.vm_id',
        'defender.vm_resource_id',
        'defender.vm_subscription_id',
        'intune.attestation_boot_revision_list_info',
        'intune.attestation_code_integrity_policy',
        'intune.attestation_health_status_mismatch_info',
        'intune.attestation_identity_key',
        'intune.attestation_operating_system_rev_list_info',
        'intune.attestation_pcr0',
        'intune.attestation_pcr_hash_algorithm',
        'intune.attestation_secure_boot_config_policy_fingerprint',
        'intune.device_category_display_name',
        'intune.device_name',
        'intune.eas_device_id',
        'intune.email_address',
        'intune.enrollment_profile_name',
        'intune.entra_device_id',
        'intune.ethernet_mac_address',
        'intune.iccid',
        'intune.imei',
        'intune.intune_id',
        'intune.managed_device_name',
        'intune.manufacturer',
        'intune.meid',
        'intune.model',
        'intune.notes',
        'intune.operating_system',
        'intune.phone_number',
        'intune.serial_number',
        'intune.subscriber_carrier',
        'intune.udid',
        'intune.user_display_name',
        'intune.user_id',
        'intune.user_principal_name',
        'intune.wifi_mac_address',
        'iru.asset_tag',
        'iru.blueprint_id',
        'iru.blueprint_name',
        'iru.device_name',
        'iru.host_name',
        'iru.iru_id',
        'iru.local_hostname',
        'iru.model',
        'iru.model_identifier',
        'iru.model_name',
        'iru.os_build',
        'iru.os_name',
        'iru.serial_number',
        'iru.supplemental_build_version',
        'iru.user_email',
        'iru.user_id',
        'iru.user_name',
        'santa.hostname',
        'santa.machine_model',
        'santa.os_build',
        'santa.primary_user',
        'santa.santa_id',
        'santa.serial_number',
        'santa.temporary_admin_mode_user',
        'sentinelone.account_name',
        'sentinelone.ad_computer_distinguished_name',
        'sentinelone.ad_last_user_distinguished_name',
        'sentinelone.ad_mail',
        'sentinelone.ad_user_principal_name',
        'sentinelone.computer_name',
        'sentinelone.cpu_id',
        'sentinelone.domain',
        'sentinelone.external_id',
        'sentinelone.group_id',
        'sentinelone.group_ip',
        'sentinelone.group_name',
        'sentinelone.last_logged_in_user_name',
        'sentinelone.machine_sid',
        'sentinelone.model_name',
        'sentinelone.os_name',
        'sentinelone.os_username',
        'sentinelone.sentinelone_account_id',
        'sentinelone.sentinelone_id',
        'sentinelone.serial_number',
        'sentinelone.site_id',
        'sentinelone.site_name',
        'sentinelone.storage_name',
        'sentinelone.storage_type',
        'sentinelone.uuid',
        'sophos.associated_person_id',
        'sophos.associated_person_name',
        'sophos.associated_person_via_login',
        'sophos.cloud_instance_id',
        'sophos.group_id',
        'sophos.group_name',
        'sophos.hostname',
        'sophos.os_name',
        'sophos.serial_number',
        'sophos.sophos_id',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'string no_value provider comparison' })
  .openapi('StringNoValueProviderComparison')

const EntraAuthProviderResponseSchema = z
  .object({ data: EntraAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Entra Auth Provider',
    title: 'EntraAuthProviderResponse',
    required: [],
  })
  .openapi('EntraAuthProviderResponse')

const ClientTokenCreateSchema = z
  .object({
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Expiration', example: '2025-01-15T12:34:56.789Z' }),
  })
  .openapi({
    description: 'Client Token attributes',
    required: ['expires_at'],
    title: 'ClientTokenCreate',
  })
  .openapi('ClientTokenCreate')

const ClientTokenRequestSchema = z
  .object({ client_token: ClientTokenCreateSchema })
  .openapi({
    description: 'POST body for creating a Client Token',
    required: ['client_token'],
    title: 'ClientTokenRequest',
  })
  .openapi('ClientTokenRequest')

const DatetimeNoValueDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.last_attested_at')
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'datetime no_value device comparison' })
  .openapi('DatetimeNoValueDeviceComparison')

const ExternalIdentitySchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    actor_id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: 'cdfa97e6-cca1-41db-8fc7-864daedb46df' }),
    directory_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'Directory UUID reference',
        example: '9f8e7d6c-5b4a-3c2b-1a0e-9f8e7d6c5b4a',
      }),
    email: z
      .string()
      .openapi({
        description: 'Email address, falling back to the IdP identifier when unset',
        example: 'john.doe@example.com',
      }),
    family_name: z.string().nullable().openapi({ description: 'Family name', example: 'Doe' }),
    firezone_avatar_url: z
      .string()
      .nullable()
      .openapi({
        description: 'Firezone-hosted avatar URL',
        example: 'https://avatars.firezone.dev/u/2551705710219359.png',
      }),
    given_name: z.string().nullable().openapi({ description: 'Given name', example: 'John' }),
    id: z
      .uuid()
      .openapi({
        description: 'External Identity ID',
        example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    idp_id: z
      .string()
      .openapi({
        description: 'IDP-specific identifier for this identity',
        example: '2551705710219359',
      }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    issuer: z
      .string()
      .openapi({
        description:
          "Identity issuer URL (e.g., 'https://accounts.google.com', 'https://company.okta.com')",
        example: 'https://accounts.google.com',
      }),
    middle_name: z.string().nullable().openapi({ description: 'Middle name' }),
    name: z.string().nullable().openapi({ description: 'Full name', example: 'John Doe' }),
    nickname: z.string().nullable().openapi({ description: 'Nickname' }),
    picture: z
      .string()
      .nullable()
      .openapi({ description: 'Profile picture URL', example: 'https://example.com/avatar.jpg' }),
    preferred_username: z
      .string()
      .nullable()
      .openapi({ description: 'Preferred username', example: 'jdoe' }),
    profile: z.string().nullable().openapi({ description: 'Profile URL' }),
    synced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last sync timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'External Identity',
    required: [
      'account_id',
      'actor_id',
      'directory_id',
      'email',
      'family_name',
      'firezone_avatar_url',
      'given_name',
      'id',
      'idp_id',
      'inserted_at',
      'issuer',
      'middle_name',
      'name',
      'nickname',
      'picture',
      'preferred_username',
      'profile',
      'synced_at',
    ],
    title: 'ExternalIdentity',
  })
  .openapi('ExternalIdentity')

const IntuneDeviceResponseSchema = z
  .object({ data: IntuneDeviceSchema.exactOptional() })
  .openapi({ title: 'IntuneDeviceResponse', required: [] })
  .openapi('IntuneDeviceResponse')

const ClientPutSchema = z
  .object({
    name: z.string().openapi({ description: 'Client Name', example: "John's Macbook Air" }),
    slug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DNS label the Client is reached at under `firezone.network`, unique within the Account. One to 63 lowercase letters, digits or hyphens, starting and ending with a letter or digit. Left as it is when omitted.',
        example: 'johns-macbook-air',
      }),
  })
  .openapi({
    description: 'Put schema for updating a single Client',
    required: ['name'],
    title: 'ClientPut',
  })
  .openapi('ClientPut')

const ClientPutRequestSchema = z
  .object({ client: ClientPutSchema })
  .openapi({
    description: 'PUT body for updating a Client',
    required: ['client'],
    title: 'ClientPutRequest',
  })
  .openapi('ClientPutRequest')

const OktaDirectorySchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_id: z.string().openapi({ description: 'Client ID', example: '0oa1b2c3d4e5EXAMPLE' }),
    disabled_reason: z.string().nullable().openapi({ description: 'Reason for disabling' }),
    error_message: z.string().nullable().openapi({ description: 'Last error message' }),
    errored_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last error timestamp' }),
    id: z
      .uuid()
      .openapi({ description: 'Directory ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether directory is disabled', example: false }),
    kid: z.string().openapi({ description: 'Key ID', example: 'kid-2f8a1c9e' }),
    name: z.string().openapi({ description: 'Directory name', example: 'Okta' }),
    okta_domain: z.string().openapi({ description: 'Okta domain', example: 'example.okta.com' }),
    synced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last sync timestamp', example: '2025-01-15T10:30:00Z' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Okta Directory',
    required: [
      'account_id',
      'client_id',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'kid',
      'name',
      'okta_domain',
      'synced_at',
      'updated_at',
    ],
    title: 'OktaDirectory',
  })
  .openapi('OktaDirectory')

const OktaDirectoryResponseSchema = z
  .object({ data: OktaDirectorySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Okta Directory',
    title: 'OktaDirectoryResponse',
    required: [],
  })
  .openapi('OktaDirectoryResponse')

const GatewaySessionSubjectSchema = z
  .object({
    gateway_id: z
      .uuid()
      .nullable()
      .openapi({ description: 'Identifier of the Gateway the session was established from.' }),
    ip: z.string().nullable().openapi({ description: 'IP address the session came from.' }),
    ip_city: z.string().nullable().openapi({ description: 'Geo-located city for `ip`, if known.' }),
    ip_lat: z
      .number()
      .nullable()
      .openapi({ description: 'Geo-located latitude for `ip`, if known.' }),
    ip_lon: z
      .number()
      .nullable()
      .openapi({ description: 'Geo-located longitude for `ip`, if known.' }),
    ip_region: z
      .string()
      .nullable()
      .openapi({ description: 'Geo-located region for `ip`, if known.' }),
    token_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'Identifier of the Gateway token the session was established with.',
      }),
    user_agent: z
      .string()
      .nullable()
      .openapi({ description: 'User agent reported by the Gateway.' }),
  })
  .openapi({
    description:
      'Subject of a session created by a Gateway (`context: "gateway"`).\n\nA Gateway authenticates with a token rather than as an actor, so no actor\nfields are recorded.\n',
    required: [
      'gateway_id',
      'token_id',
      'ip',
      'ip_region',
      'ip_city',
      'ip_lat',
      'ip_lon',
      'user_agent',
    ],
    title: 'GatewaySessionSubject',
  })
  .openapi('GatewaySessionSubject')

const GatewayTokenSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'Gateway Token ID',
        example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    token: z.string().openapi({ description: 'Gateway Token', example: 'secret-token-here' }),
  })
  .openapi({ description: 'Gateway Token', required: ['id', 'token'], title: 'GatewayToken' })
  .openapi('GatewayToken')

const GatewayTokenResponseSchema = z
  .object({ data: GatewayTokenSchema.exactOptional() })
  .openapi({
    description: 'Response schema for a new Gateway Token',
    title: 'GatewayTokenResponse',
    required: [],
  })
  .openapi('GatewayTokenResponse')

const GatewayUpdateSchema = z
  .object({ name: z.string().openapi({ description: 'Gateway Name', example: 'vpc-us-east' }) })
  .openapi({
    description: 'Update schema for a single Gateway',
    required: ['name'],
    title: 'GatewayUpdate',
  })
  .openapi('GatewayUpdate')

const GatewayUpdateRequestSchema = z
  .object({ gateway: GatewayUpdateSchema })
  .openapi({
    description: 'Request body for updating a Gateway',
    required: ['gateway'],
    title: 'GatewayUpdateRequest',
  })
  .openapi('GatewayUpdateRequest')

const SophosPostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    client_id: z.string(),
    data_region_url: z.url(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    name: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    tenant_id: z.string(),
    type: z.literal('sophos'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'Sophos XDR posture provider',
    required: [
      'account_id',
      'client_id',
      'data_region_url',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'name',
      'synced_at',
      'tenant_id',
      'type',
      'updated_at',
    ],
    title: 'SophosPostureProvider',
  })
  .openapi('SophosPostureProvider')

const GroupCreateRequestSchema = z
  .object({
    group: z
      .object({ name: z.string().openapi({ description: 'Group Name', example: 'Engineering' }) })
      .openapi({ required: ['name'] }),
  })
  .openapi({
    description: 'POST body for creating a Group',
    required: ['group'],
    title: 'GroupCreateRequest',
  })
  .openapi('GroupCreateRequest')

const SubjectSchema = z
  .object({
    actor_email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Email address of the actor, if any.',
        example: 'admin@example.com',
      }),
    actor_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Identifier of the actor that initiated the action.',
        example: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    actor_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the actor.', example: 'Admin User' }),
    actor_type: z
      .enum(['account_user', 'account_admin_user', 'service_account', 'api_client'])
      .exactOptional()
      .openapi({ description: 'Type of the actor.', example: 'account_admin_user' }),
    attested_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the device last attested, snapshotted for this subject. Does not imply the current connection attested. Omitted when absent.',
      }),
    attested_cert_fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Certificate fingerprint from the device's last attestation. Omitted when absent.",
      }),
    attested_cert_issuer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Base64-encoded DER X.509 issuer Name from the device's last attestation. Omitted when absent.",
      }),
    attested_cert_serial: z
      .string()
      .exactOptional()
      .openapi({
        description: "Certificate serial from the device's last attestation. Omitted when absent.",
      }),
    attested_device_serial: z
      .string()
      .exactOptional()
      .openapi({
        description: "Device serial from the device's last attestation. Omitted when absent.",
      }),
    attested_device_uuid: z
      .string()
      .exactOptional()
      .openapi({
        description: "Device UUID from the device's last attestation. Omitted when absent.",
      }),
    attested_mdm_device_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "MDM device ID from the device's last attestation. Omitted when absent.",
      }),
    auth_provider_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identifier of the authentication provider that authenticated the actor.',
        example: '98776234-1234-5678-9012-345678901234',
      }),
    ip: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'IP address the action originated from.', example: '1.2.3.4' }),
    ip_city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Geo-located city for `ip`, if known.', example: 'San Francisco' }),
    ip_lat: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Geo-located latitude for `ip`, if known.', example: 37.7749 }),
    ip_lon: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Geo-located longitude for `ip`, if known.', example: -122.4194 }),
    ip_region: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Geo-located region for `ip`, if known.', example: 'California' }),
    user_agent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User agent of the client that initiated the action.',
        example: 'Mozilla/5.0',
      }),
  })
  .nullable()
  .openapi({
    description:
      'Identifies the actor and request context that initiated an action.\n\nUsed to describe the principal behind an audit log entry, an authorized\nflow, or any other event surfaced through the API. May be `null` when\nthe action originated outside the context of a Firezone session.\n',
    title: 'Subject',
    required: [],
  })
  .openapi('Subject')

const ChangeLogSchema = z
  .object({
    after: z
      .looseObject({})
      .nullable()
      .openapi({
        description:
          'The state of the object after the change. `null` for `delete`\nevents. Sensitive fields such as tokens, secrets, and password\nhashes are replaced with the literal string `"[redacted]"`.\n',
        example: { name: 'Jane Smith' },
      }),
    before: z
      .looseObject({})
      .nullable()
      .openapi({
        description:
          'The state of the object before the change. `null` for `insert`\nevents. Sensitive fields such as tokens, secrets, and password\nhashes are replaced with the literal string `"[redacted]"`.\n',
        example: { name: 'Jane Doe' },
      }),
    log_id: z
      .string()
      .openapi({
        description:
          'Opaque identifier for the audit log entry. A 24-character lowercase\nhexadecimal string starting with `c`, lexicographically sortable\nwithin an account and aligned with the order changes were committed.\n',
        example: 'c00060db0c2c8eb400000000',
      }),
    object: z
      .string()
      .openapi({ description: 'The kind of object that was changed.', example: 'actors' }),
    operation: z
      .enum(['insert', 'update', 'delete'])
      .openapi({ description: 'The kind of change that was applied.', example: 'update' }),
    subject: SubjectSchema,
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'RFC 3339 timestamp identifying when the change was committed.',
        example: '2026-05-26T12:34:56.789Z',
      }),
    type: z.literal('change').openapi({ example: 'change' }),
  })
  .openapi({
    description:
      'A single entry from the account audit log.\n\nEach entry records one create, update, or delete event against an\naccount-scoped object.\n',
    required: ['after', 'before', 'log_id', 'object', 'operation', 'subject', 'timestamp', 'type'],
    title: 'ChangeLog',
  })
  .openapi('ChangeLog')

const ClientSessionSubjectSchema = z
  .object({
    actor_email: z
      .string()
      .nullable()
      .openapi({
        description: 'Email address of the actor, if any.',
        example: 'admin@example.com',
      }),
    actor_id: z
      .uuid()
      .openapi({
        description: 'Identifier of the actor that initiated the action.',
        example: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    actor_name: z
      .string()
      .openapi({ description: 'Display name of the actor.', example: 'Admin User' }),
    actor_type: z
      .enum(['account_user', 'account_admin_user', 'service_account', 'api_client'])
      .openapi({ description: 'Type of the actor.', example: 'account_admin_user' }),
    attested_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the device last attested, snapshotted for this subject. Does not imply the current connection attested. Omitted when absent.',
      }),
    attested_cert_fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Certificate fingerprint from the device's last attestation. Omitted when absent.",
      }),
    attested_cert_issuer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Base64-encoded DER X.509 issuer Name from the device's last attestation. Omitted when absent.",
      }),
    attested_cert_serial: z
      .string()
      .exactOptional()
      .openapi({
        description: "Certificate serial from the device's last attestation. Omitted when absent.",
      }),
    attested_device_serial: z
      .string()
      .exactOptional()
      .openapi({
        description: "Device serial from the device's last attestation. Omitted when absent.",
      }),
    attested_device_uuid: z
      .string()
      .exactOptional()
      .openapi({
        description: "Device UUID from the device's last attestation. Omitted when absent.",
      }),
    attested_mdm_device_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "MDM device ID from the device's last attestation. Omitted when absent.",
      }),
    auth_provider_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'Identifier of the authentication provider that authenticated the actor.',
        example: '98776234-1234-5678-9012-345678901234',
      }),
    device_id: z
      .uuid()
      .nullable()
      .openapi({ description: 'Identifier of the Client the session was established from.' }),
    ip: z
      .string()
      .nullable()
      .openapi({ description: 'IP address the action originated from.', example: '1.2.3.4' }),
    ip_city: z
      .string()
      .nullable()
      .openapi({ description: 'Geo-located city for `ip`, if known.', example: 'San Francisco' }),
    ip_lat: z
      .number()
      .nullable()
      .openapi({ description: 'Geo-located latitude for `ip`, if known.', example: 37.7749 }),
    ip_lon: z
      .number()
      .nullable()
      .openapi({ description: 'Geo-located longitude for `ip`, if known.', example: -122.4194 }),
    ip_region: z
      .string()
      .nullable()
      .openapi({ description: 'Geo-located region for `ip`, if known.', example: 'California' }),
    token_id: z
      .uuid()
      .nullable()
      .openapi({ description: 'Identifier of the Client token the session was established with.' }),
    user_agent: z
      .string()
      .nullable()
      .openapi({
        description: 'User agent of the client that initiated the action.',
        example: 'Mozilla/5.0',
      }),
  })
  .openapi({
    description:
      'Subject of a session created by a Client (`context: "client"`).\n\nA `Subject` plus the Client and token the session was established with.\n',
    required: [
      'actor_id',
      'actor_name',
      'actor_email',
      'actor_type',
      'auth_provider_id',
      'device_id',
      'token_id',
      'ip',
      'ip_region',
      'ip_city',
      'ip_lat',
      'ip_lon',
      'user_agent',
    ],
    title: 'ClientSessionSubject',
  })
  .openapi('ClientSessionSubject')

const SessionLogSchema = z
  .object({
    context: z
      .enum(['client', 'gateway', 'portal'])
      .openapi({ description: 'The kind of session that was created.', example: 'client' }),
    log_id: z
      .string()
      .openapi({
        description:
          'Opaque identifier for the Session Log entry. A 24-character\nlowercase hexadecimal string starting with `5`.\n',
        example: '500060db0c2c8eb400000000',
      }),
    subject: z
      .xor([ClientSessionSubjectSchema, GatewaySessionSubjectSchema, SubjectSchema])
      .openapi({
        description:
          'Who established the session and from where. The shape depends on\n`context`:\n\n- `client`: a `ClientSessionSubject`, the actor plus the Client and\n  token the session was established with.\n- `gateway`: a `GatewaySessionSubject`, the Gateway and its token. A\n  Gateway authenticates as itself, so no actor fields are recorded.\n- `portal`: a plain `Subject`.\n',
        example: {
          actor_email: 'admin@example.com',
          actor_id: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
          actor_name: 'Admin User',
          actor_type: 'account_admin_user',
          auth_provider_id: '98776234-1234-5678-9012-345678901234',
          device_id: '11e7f82f-831a-4a9d-8f17-c66c2bb6e205',
          ip: '189.172.73.1',
          ip_city: 'Mexico City',
          ip_lat: 19.4326,
          ip_lon: -99.1332,
          ip_region: 'MX',
          token_id: '22e7f82f-831a-4a9d-8f17-c66c2bb6e205',
          user_agent: 'Linux/6.5.0 connlib/1.5.1',
        },
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'RFC 3339 timestamp identifying when the session was created.',
        example: '2026-05-26T12:34:56.789Z',
      }),
    type: z.literal('session').openapi({ example: 'session' }),
  })
  .openapi({
    description:
      'A single Session Log entry, recording one Client, Gateway, or Portal\nsession that was created, along with the auth context it was created\nwith.\n',
    required: ['context', 'log_id', 'subject', 'timestamp', 'type'],
    title: 'SessionLog',
  })
  .openapi('SessionLog')

const FlowLogSchema = z
  .object({
    log_id: z
      .string()
      .openapi({
        description:
          'Opaque identifier for the Flow Log entry. A 24-character lowercase\nhexadecimal string starting with `f`.\n',
        example: 'f00060db0c2c8eb400000000',
      }),
    initiator_device_id: z
      .uuid()
      .openapi({
        description: 'ID of the Client that opened the flow. Always a Client.',
        example: '11e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    last_packet: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description: 'When the last packet was seen. Null while the flow is open.',
        example: '2026-05-26T12:33:58.000Z',
      }),
    inner_dst_ip: z
      .string()
      .openapi({
        description: 'Tunnel IP of the responder, on both entries of the flow.',
        example: '10.0.0.5',
      }),
    initiator_auth_provider_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'ID of the Auth Provider the initiating Client authenticated with.\n',
        example: '7b2c1e40-9f3a-4d21-8c5e-1a2b3c4d5e6f',
      }),
    initiator_device_uuid: z
      .string()
      .nullable()
      .openapi({
        description: 'Device UUID reported by the initiating Client.',
        example: '0C4A8D24-FA9F-4E56-9B57-40D0D46A245E',
      }),
    flow_end: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description: 'RFC 3339 timestamp of when the flow ended. Null while the flow is open.',
        example: '2026-05-26T12:34:00.000Z',
      }),
    initiator_device_identifier_for_vendor: z
      .string()
      .nullable()
      .openapi({ description: 'Vendor identifier reported by the initiating Client.' }),
    policy_authorization_id: z
      .uuid()
      .openapi({
        description: 'ID of the Policy Authorization that permitted the flow.',
        example: '6fa1d58f-0289-42e6-a3ba-7edfa46ee2d5',
      }),
    tx_bytes: z
      .int()
      .nullable()
      .openapi({
        description:
          'Bytes sent initiator-to-responder, as counted by the reporting side. Null while the flow is open.',
        example: 20480,
      }),
    initiator_client_version: z
      .string()
      .nullable()
      .openapi({
        description: 'Firezone Client version reported by the initiating Client.',
        example: '1.5.1',
      }),
    type: z.literal('flow').openapi({ example: 'flow' }),
    rx_packets: z
      .int()
      .nullable()
      .openapi({
        description:
          'Packets sent responder-to-initiator, as counted by the reporting side. Null while the flow is open.',
        example: 100,
      }),
    initiator_device_os_name: z
      .string()
      .nullable()
      .openapi({
        description: 'Operating system reported by the initiating Client.',
        example: 'macOS',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'RFC 3339 timestamp identifying when the flow was ingested.',
        example: '2026-05-26T12:34:56.789Z',
      }),
    role: z
      .enum(['initiator', 'responder'])
      .openapi({
        description:
          'Which of the two endpoints reported this entry: `initiator` means\n`initiator_device_id` wrote it, `responder` means\n`responder_device_id` did. Gateways always report `responder`;\n  Clients report either role.\n',
        example: 'responder',
      }),
    tx_packets: z
      .int()
      .nullable()
      .openapi({
        description:
          'Packets sent initiator-to-responder, as counted by the reporting side. Null while the flow is open.',
        example: 80,
      }),
    inner_dst_port: z.int().openapi({ example: 443 }),
    initiator_device_firebase_installation_id: z
      .string()
      .nullable()
      .openapi({ description: 'Firebase installation ID reported by the initiating Client.' }),
    inner_src_ip: z
      .string()
      .openapi({
        description: 'Tunnel IP of the initiator, on both entries of the flow.',
        example: '100.64.0.1',
      }),
    responder_device_id: z
      .uuid()
      .openapi({
        description:
          'ID of the device the flow was opened to: the Gateway serving the\nResource, or the receiving Client for device-to-device flows.\n',
        example: '9d3a1c40-5f2b-4c8e-9a71-0b6d4e2f8c13',
      }),
    initiator_actor_email: z.string().nullable().openapi({ example: 'user@example.com' }),
    protocol: z
      .enum(['tcp', 'udp'])
      .openapi({ description: 'Transport protocol of the flow.', example: 'tcp' }),
    authorization_expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the Policy Authorization expires.',
        example: '2026-05-26T20:29:00.000Z',
      }),
    outers: z
      .array(
        z
          .object({
            dst_ip: z.string(),
            dst_port: z.int(),
            path_activated_at: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({ description: 'RFC 3339 timestamp of when the path was selected.' }),
            src_ip: z.string().nullable().exactOptional(),
            src_port: z.int().nullable().exactOptional(),
          })
          .openapi({ required: ['dst_ip', 'dst_port'] }),
      )
      .min(1)
      .nullable()
      .openapi({
        description:
          'Outer network paths in observation order. Null while the flow is open;\nthe close report replaces it with the complete array. Source IP and\nport must either both be populated or both be absent/null. The two\nentries of a flow can disagree whenever NAT or a relay sits between\nthe peers.\n',
        example: [
          { dst_ip: '198.51.100.5', dst_port: 51820, src_ip: '203.0.113.10', src_port: 51820 },
        ],
      }),
    resource_id: z
      .uuid()
      .openapi({
        description: 'ID of the Resource accessed.',
        example: '44e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    inner_src_port: z.int().openapi({ example: 54321 }),
    rx_bytes: z
      .int()
      .nullable()
      .openapi({
        description:
          'Bytes sent responder-to-initiator, as counted by the reporting side. Null while the flow is open.',
        example: 102400,
      }),
    authorized_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When access to the Resource was authorized.',
        example: '2026-05-26T12:29:00.000Z',
      }),
    flow_start: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'RFC 3339 timestamp of when the flow began. The `begin`/`end`\nwindow matches flows whose [`flow_start`, `flow_end`) range\noverlaps it.\n',
        example: '2026-05-26T12:30:00.000Z',
      }),
    initiator_device_os_version: z
      .string()
      .nullable()
      .openapi({
        description: 'Operating system version reported by the initiating Client.',
        example: '15.5',
      }),
    inner_domain: z
      .string()
      .nullable()
      .openapi({
        description: 'Domain name for flows to DNS Resources.',
        example: 'gitlab.company.com',
      }),
    initiator_actor_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          "ID of the Actor who opened the flow. This is always the initiating\nClient's Actor. A Gateway has no Actor, and for device-to-device\nflows the receiving Client's own Actor is not recorded here.\n",
        example: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    initiator_actor_name: z.string().nullable().openapi({ example: 'John Doe' }),
    resource_address: z
      .string()
      .nullable()
      .openapi({
        description: 'Resource address, when the Resource type has one.',
        example: 'gitlab.company.com',
      }),
    initiator_device_serial: z
      .string()
      .nullable()
      .openapi({
        description: 'Device serial number reported by the initiating Client.',
        example: 'C02ABC123',
      }),
    resource_name: z.string().openapi({ example: 'GitLab' }),
    policy_id: z
      .uuid()
      .openapi({
        description: 'ID of the Policy that permitted the flow.',
        example: '46f997d1-77c8-4936-8655-8f050dffbfa4',
      }),
  })
  .openapi({
    description:
      'A single Flow Log entry, recording one network flow as accounted by one\nof its two endpoints.\n\nBoth endpoints of a flow report it independently, so a flow yields up to\ntwo entries that differ only in `role` and in the counters each side\nobserved. Every other field is oriented from the initiator regardless of\nwhich side reported the entry: `inner_src_*` is always the initiator,\n`inner_dst_*` always the responder, and `tx_*` always counts\ninitiator-to-responder traffic. `outers` records each outer network path\nin the order it was observed. Comparing the two entries of a flow is how\nreported traffic is cross-checked.\n',
    required: [
      'authorization_expires_at',
      'authorized_at',
      'flow_end',
      'flow_start',
      'initiator_actor_email',
      'initiator_actor_id',
      'initiator_actor_name',
      'initiator_auth_provider_id',
      'initiator_client_version',
      'initiator_device_firebase_installation_id',
      'initiator_device_id',
      'initiator_device_identifier_for_vendor',
      'initiator_device_os_name',
      'initiator_device_os_version',
      'initiator_device_serial',
      'initiator_device_uuid',
      'inner_domain',
      'inner_dst_ip',
      'inner_dst_port',
      'inner_src_ip',
      'inner_src_port',
      'last_packet',
      'log_id',
      'outers',
      'policy_authorization_id',
      'policy_id',
      'protocol',
      'resource_address',
      'resource_id',
      'resource_name',
      'responder_device_id',
      'role',
      'rx_bytes',
      'rx_packets',
      'timestamp',
      'tx_bytes',
      'tx_packets',
      'type',
    ],
    title: 'FlowLog',
  })
  .openapi('FlowLog')

const APIRequestLogSchema = z
  .object({
    actor_id: z
      .uuid()
      .openapi({
        description: 'ID of the actor making the API or MCP request.',
        example: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    api_token_id: z
      .uuid()
      .openapi({
        description: 'ID of the API token or MCP OAuth access token used.',
        example: '44e7f82f-831a-4a9d-8f17-c66c2bb6e205',
      }),
    content_length: z
      .int()
      .nullable()
      .openapi({ description: 'Value of the Content-Length request header, when present.' }),
    ip: z.string().openapi({ example: '189.172.73.1' }),
    ip_city: z.string().nullable().openapi({ example: 'Mexico City' }),
    ip_lat: z.number().nullable().openapi({ example: 19.4326 }),
    ip_lon: z.number().nullable().openapi({ example: -99.1332 }),
    ip_region: z.string().nullable().openapi({ example: 'MX' }),
    log_id: z
      .string()
      .openapi({
        description:
          'Opaque identifier for the API Request Log entry. A 24-character\nlowercase hexadecimal string starting with `a`.\n',
        example: 'a00060db0c2c8eb400000000',
      }),
    mcp: z
      .looseObject({})
      .nullable()
      .openapi({
        description:
          'MCP execution metadata, null for REST requests. tool_name is the\nrequested tool, not proof of execution. outcome is received, rejected,\nignored, protocol_response, dispatched, succeeded, or failed. A\ndispatched outcome without completion has an unknown result. method\nand path identify the dispatched REST operation; rest_status is its\nstatus and http_status is the outer response status. No arguments or\nresponse bodies are logged. A succeeded result means the REST handler\nreturned 2xx, not necessarily that it changed data.\n',
      }),
    method: z.string().openapi({ description: 'HTTP request method.', example: 'GET' }),
    path: z.string().openapi({ description: 'HTTP request path.', example: '/clients' }),
    request_id: z
      .string()
      .openapi({
        description: 'Request ID assigned by the server, for correlating with server logs.',
        example: 'GBKkV1jUWuW2sJoAACkB',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'RFC 3339 timestamp identifying when the request was received.',
        example: '2026-05-26T12:34:56.789Z',
      }),
    type: z.literal('api_request').openapi({ example: 'api_request' }),
    user_agent: z.string().nullable().openapi({ example: 'curl/8.7.1' }),
  })
  .openapi({
    description: 'A single API Request Log entry, recording one authenticated REST API\nrequest.\n',
    required: [
      'actor_id',
      'api_token_id',
      'content_length',
      'ip',
      'ip_city',
      'ip_lat',
      'ip_lon',
      'ip_region',
      'log_id',
      'method',
      'mcp',
      'path',
      'request_id',
      'timestamp',
      'type',
      'user_agent',
    ],
    title: 'APIRequestLog',
  })
  .openapi('APIRequestLog')

const LogSchema = z
  .xor([ChangeLogSchema, SessionLogSchema, FlowLogSchema, APIRequestLogSchema])
  .openapi({
    description:
      'A single Log entry. The `type` field identifies the log stream the\nentry belongs to, which is also encoded in the first character of its\n`log_id` (`c` change, `5` session, `f` flow, `a` api_request).\n',
    title: 'Log',
  })
  .openapi('Log')

const DeletedClientTokenResponseSchema = z
  .object({
    data: z
      .object({
        id: z
          .uuid()
          .openapi({
            description: 'Client Token ID',
            example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
          }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
  })
  .openapi({
    description: 'Response schema for a deleted Client Token',
    title: 'DeletedClientTokenResponse',
    required: [],
  })
  .openapi('DeletedClientTokenResponse')

const EnumStringScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.device_value',
        'defender.exclusion_reason',
        'defender.exposure_level',
        'defender.health_status',
        'defender.managed_by',
        'defender.managed_by_status',
        'defender.onboarding_status',
        'defender.os_architecture',
        'defender.os_platform',
        'defender.risk_score',
        'intune.attestation_status',
        'intune.compliance_state',
        'intune.device_enrollment_type',
        'intune.device_registration_state',
        'intune.exchange_access_state',
        'intune.exchange_access_state_reason',
        'intune.managed_device_owner_type',
        'intune.management_agent',
        'intune.management_state',
        'intune.partner_reported_threat_state',
        'iru.cellular_technology',
        'iru.device_family',
        'iru.external_boot_level',
        'iru.filevault_key_type',
        'iru.firewall_logging_option',
        'iru.lost_mode_status',
        'iru.platform',
        'iru.secure_boot_level',
        'santa.configured_client_mode',
        'santa.last_seen_client_mode',
        'santa.os_type',
        'sentinelone.apps_vulnerability_status',
        'sentinelone.console_migration_status',
        'sentinelone.detection_state',
        'sentinelone.installer_type',
        'sentinelone.location_type',
        'sentinelone.machine_type',
        'sentinelone.mitigation_mode',
        'sentinelone.mitigation_mode_suspicious',
        'sentinelone.network_status',
        'sentinelone.operational_state',
        'sentinelone.os_arch',
        'sentinelone.os_type',
        'sentinelone.proxy_method',
        'sentinelone.ranger_status',
        'sentinelone.remote_profiling_state',
        'sentinelone.scan_status',
        'sophos.cloud_provider',
        'sophos.encryption_overall_status',
        'sophos.health_overall',
        'sophos.health_services_status',
        'sophos.health_threats_status',
        'sophos.isolation_status',
        'sophos.lockdown_status',
        'sophos.os_platform',
        'sophos.type',
      ])
      .openapi({
        description: 'enum_string field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.string().max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'enum_string scalar provider comparison' })
  .openapi('EnumStringScalarProviderComparison')

const FlowLogIngestRecordSchema = z
  .xor([
    z
      .any()
      .refine(
        (val) =>
          !z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'flow_end')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['flow_end'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'last_packet')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['last_packet'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'rx_packets')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['rx_packets'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'tx_packets')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['tx_packets'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'rx_bytes')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['rx_bytes'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'tx_bytes')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['tx_bytes'] }),
            ])
            .safeParse(val).success,
      )
      .openapi({
        description:
          'An open report may include paths known so far, but omits its end time and counters.',
      }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'outers')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'flow_end')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'last_packet')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'rx_packets')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'tx_packets')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'rx_bytes')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'tx_bytes')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({
        description: 'A close report includes outer paths, its end time, and all counters.',
        required: [
          'outers',
          'flow_end',
          'last_packet',
          'rx_packets',
          'tx_packets',
          'rx_bytes',
          'tx_bytes',
        ],
      }),
  ])
  .openapi({
    description:
      "One flow-log record reported by connlib. Attribution is supplied by the\nrequest's ingest token rather than by each record.\n",
    required: [
      'protocol',
      'inner_src_ip',
      'inner_src_port',
      'inner_dst_ip',
      'inner_dst_port',
      'flow_start',
    ],
    title: 'FlowLogIngestRecord',
  })
  .openapi('FlowLogIngestRecord')

const SiteSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ description: 'Site ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    name: z.string().openapi({ description: 'Site Name', example: 'vpc-us-east' }),
  })
  .openapi({ description: 'Site', required: ['id', 'name'], title: 'Site' })
  .openapi('Site')

const SiteResponseSchema = z
  .object({ data: SiteSchema.exactOptional() })
  .openapi({ description: 'Response schema for single Site', title: 'SiteResponse', required: [] })
  .openapi('SiteResponse')

const ClientTokenListResponseSchema = z
  .object({
    data: z
      .array(ClientTokenSchema)
      .exactOptional()
      .openapi({
        description: 'Client Token metadata',
        example: [
          {
            actor_id: '43a7f82f-831a-4a9d-8f17-c66c2bb6e205',
            expires_at: '2025-01-15T12:34:56.789Z',
            id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
            inserted_at: '2025-01-15T12:34:56.789Z',
            updated_at: '2025-01-15T12:34:56.789Z',
          },
        ],
      }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Client Tokens',
    title: 'ClientTokenListResponse',
    required: [],
  })
  .openapi('ClientTokenListResponse')

const IntunePostureProviderUpdateRequestSchema = z
  .object({
    intune_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'Microsoft Intune',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating an Intune posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['intune_posture_provider'],
    title: 'IntunePostureProviderUpdateRequest',
  })
  .openapi('IntunePostureProviderUpdateRequest')

const IruPostureProviderListResponseSchema = z
  .object({
    data: z.array(IruPostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'IruPostureProviderListResponse', required: [] })
  .openapi('IruPostureProviderListResponse')

const EnumStringListProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.device_value',
        'defender.exclusion_reason',
        'defender.exposure_level',
        'defender.health_status',
        'defender.managed_by',
        'defender.managed_by_status',
        'defender.onboarding_status',
        'defender.os_architecture',
        'defender.os_platform',
        'defender.risk_score',
        'intune.attestation_status',
        'intune.compliance_state',
        'intune.device_enrollment_type',
        'intune.device_registration_state',
        'intune.exchange_access_state',
        'intune.exchange_access_state_reason',
        'intune.managed_device_owner_type',
        'intune.management_agent',
        'intune.management_state',
        'intune.partner_reported_threat_state',
        'iru.cellular_technology',
        'iru.device_family',
        'iru.external_boot_level',
        'iru.filevault_key_type',
        'iru.firewall_logging_option',
        'iru.lost_mode_status',
        'iru.platform',
        'iru.secure_boot_level',
        'santa.configured_client_mode',
        'santa.last_seen_client_mode',
        'santa.os_type',
        'sentinelone.apps_vulnerability_status',
        'sentinelone.console_migration_status',
        'sentinelone.detection_state',
        'sentinelone.installer_type',
        'sentinelone.location_type',
        'sentinelone.machine_type',
        'sentinelone.mitigation_mode',
        'sentinelone.mitigation_mode_suspicious',
        'sentinelone.network_status',
        'sentinelone.operational_state',
        'sentinelone.os_arch',
        'sentinelone.os_type',
        'sentinelone.proxy_method',
        'sentinelone.ranger_status',
        'sentinelone.remote_profiling_state',
        'sentinelone.scan_status',
        'sophos.cloud_provider',
        'sophos.encryption_overall_status',
        'sophos.health_overall',
        'sophos.health_services_status',
        'sophos.health_threats_status',
        'sophos.isolation_status',
        'sophos.lockdown_status',
        'sophos.os_platform',
        'sophos.type',
      ])
      .openapi({
        description: 'enum_string field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['is_in', 'is_not_in']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'enum_string list provider comparison' })
  .openapi('EnumStringListProviderComparison')

const IruPostureProviderUpdateRequestSchema = z
  .object({
    iru_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'Iru',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating an Iru posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['iru_posture_provider'],
    title: 'IruPostureProviderUpdateRequest',
  })
  .openapi('IruPostureProviderUpdateRequest')

const PolicySchema = z
  .object({
    conditions: z
      .array(PolicyConditionSchema)
      .openapi({
        description: 'Conditions that must be satisfied for the Policy to grant access',
        example: [
          { operator: 'is_in', property: 'remote_ip_location_region', values: ['US', 'CA'] },
        ],
      }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Policy Description', example: 'Policy to allow something' }),
    flow_log_uploads_enabled: z
      .boolean()
      .openapi({
        description: 'Whether flow logs are reported for connections authorized by this Policy',
        example: true,
      }),
    group_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          'Group ID. Null if the Group was deleted during directory sync; it is relinked automatically if the Group reappears on a subsequent sync.',
        example: '88eae9ce-9179-48c6-8430-770e38dd4775',
      }),
    id: z
      .uuid()
      .openapi({ description: 'Policy ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    is_disabled: z
      .boolean()
      .openapi({
        description:
          'Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained.',
        example: false,
      }),
    postures: z
      .union([PolicyPostureNodeSchema, z.literal(null).nullable()])
      .nullable()
      .openapi({
        description:
          'The stored device posture expression, or null when none is required. The connecting device must satisfy this expression and every entry in conditions. Returned on create, update, show, and list, including after an account downgrade.',
        example: {
          and: [
            { field: 'intune.enrolled', op: 'is', value: true },
            { field: 'intune.compliance_state', op: 'is', rows: 'all', value: 'compliant' },
            { field: 'intune.last_sync_at', op: 'within_last', value: 'PT24H' },
            {
              or: [
                { field: 'firezone.last_seen_version', op: 'gte', value: '@latest' },
                { not: { field: 'firezone.hostname', op: 'starts_with', value: 'test-' } },
              ],
            },
          ],
        },
      }),
    require_attestation: z
      .boolean()
      .openapi({
        description:
          "Whether the Client must present a valid X.509 certificate from one of the account's trust anchors",
        example: false,
      }),
    resource_id: z
      .uuid()
      .openapi({ description: 'Resource ID', example: 'a9f60587-793c-46ae-8525-597f43ab2fb1' }),
  })
  .openapi({
    description: 'Policy',
    required: [
      'conditions',
      'description',
      'flow_log_uploads_enabled',
      'group_id',
      'id',
      'is_disabled',
      'postures',
      'require_attestation',
      'resource_id',
    ],
    title: 'Policy',
  })
  .openapi('Policy')

const PolicyResponseSchema = z
  .object({ data: PolicySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Policy',
    title: 'PolicyResponse',
    required: [],
  })
  .openapi('PolicyResponse')

const DeletedClientTokensResponseSchema = z
  .object({
    data: z
      .object({
        deleted_count: z
          .int()
          .openapi({ description: 'Number of tokens that were deleted', example: 3 }),
      })
      .exactOptional()
      .openapi({ required: ['deleted_count'] }),
  })
  .openapi({
    description: 'Response schema for deleted Client Tokens',
    title: 'DeletedClientTokensResponse',
    required: [],
  })
  .openapi('DeletedClientTokensResponse')

const GroupListResponseSchema = z
  .object({
    data: z.array(GroupSchema).exactOptional().openapi({ description: 'Group details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Groups',
    title: 'GroupListResponse',
    required: [],
  })
  .openapi('GroupListResponse')

const IntunePostureProviderResponseSchema = z
  .object({ data: IntunePostureProviderSchema.exactOptional() })
  .openapi({ title: 'IntunePostureProviderResponse', required: [] })
  .openapi('IntunePostureProviderResponse')

const OktaAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(OktaAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'Okta Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Okta Auth Providers',
    title: 'OktaAuthProviderListResponse',
    required: [],
  })
  .openapi('OktaAuthProviderListResponse')

const DeletedGatewayTokenResponseSchema = z
  .object({
    data: z
      .object({
        id: z
          .uuid()
          .openapi({
            description: 'Gateway Token ID',
            example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
          }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
  })
  .openapi({
    description: 'Response schema for a deleted Gateway Token',
    title: 'DeletedGatewayTokenResponse',
    required: [],
  })
  .openapi('DeletedGatewayTokenResponse')

const VersionNoValueDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.last_seen_version')
      .openapi({ description: 'version field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'version no_value device comparison' })
  .openapi('VersionNoValueDeviceComparison')

const EntraAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(EntraAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'Entra Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Entra Auth Providers',
    title: 'EntraAuthProviderListResponse',
    required: [],
  })
  .openapi('EntraAuthProviderListResponse')

const MembershipSchema = z
  .object({
    email: z
      .string()
      .nullable()
      .openapi({ description: 'Actor Email', example: 'john.doe@example.com' }),
    id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: '7cb89288-1fb3-433e-a522-2d087e45988d' }),
    name: z.string().openapi({ description: 'Actor Name', example: 'John Doe' }),
    type: z
      .enum(['account_admin_user', 'account_user', 'api_client', 'service_account'])
      .openapi({ description: 'Actor Type', example: 'account_user' }),
  })
  .openapi({
    description: 'Membership',
    required: ['email', 'id', 'name', 'type'],
    title: 'Membership',
  })
  .openapi('Membership')

const OIDCAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_id: z.string().openapi({ description: 'Client ID', example: 'my-client-id' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    discovery_document_uri: z
      .string()
      .openapi({
        description: 'Discovery document URI',
        example: 'https://idp.example.com/.well-known/openid-configuration',
      }),
    email_verification_method: z
      .enum(['none', 'claim', 'proof'])
      .openapi({ description: 'How sign-in verifies the email claim', example: 'claim' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_default: z.boolean().openapi({ description: 'Whether provider is default', example: false }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    issuer: z.string().openapi({ description: 'Issuer', example: 'https://idp.example.com' }),
    name: z.string().openapi({ description: 'Provider name', example: 'OIDC Provider' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'OIDC Auth Provider',
    required: [
      'account_id',
      'client_id',
      'client_session_lifetime_secs',
      'context',
      'discovery_document_uri',
      'email_verification_method',
      'id',
      'inserted_at',
      'is_default',
      'is_disabled',
      'issuer',
      'name',
      'portal_session_lifetime_secs',
      'updated_at',
    ],
    title: 'OIDCAuthProvider',
  })
  .openapi('OIDCAuthProvider')

const DefenderDeviceSchema = z
  .object({
    last_seen_at: z.iso.datetime({ offset: true }).nullable(),
    machine_tags: z.array(z.string()).nullable(),
    managed_by: z.string().nullable(),
    vm_resource_id: z.string().nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    os_platform: z.string().nullable(),
    synced_at: z.iso.datetime({ offset: true }),
    last_ip_address: z.string().nullable(),
    device_value: z.string().nullable(),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    os_architecture: z.string().nullable(),
    rbac_group_name: z.string().nullable(),
    exposure_level: z.string().nullable(),
    defender_id: z.string(),
    entra_joined: z.boolean().nullable(),
    exclusion_reason: z.string().nullable(),
    vm_id: z.string().nullable(),
    vm_cloud_provider: z.string().nullable(),
    os_processor: z.string().nullable(),
    account_id: z.uuid(),
    entra_device_id: z.string().nullable(),
    os_build: z.int().nullable(),
    managed_by_status: z.string().nullable(),
    is_excluded: z.boolean().nullable(),
    vm_subscription_id: z.string().nullable(),
    last_external_ip_address: z.string().nullable(),
    health_status: z.string().nullable(),
    risk_score: z.string().nullable(),
    is_potential_duplication: z.boolean().nullable(),
    agent_version: z.string().nullable(),
    rbac_group_id: z.int().nullable(),
    version: z.string().nullable(),
    ip_addresses: z.array(z.looseObject({})).nullable(),
    onboarding_status: z.string().nullable(),
    computer_dns_name: z.string().nullable(),
    first_seen_at: z.iso.datetime({ offset: true }).nullable(),
    posture_provider_id: z.uuid(),
  })
  .openapi({
    description: 'Device synced from Microsoft Defender for Endpoint',
    required: [
      'account_id',
      'defender_id',
      'posture_provider_id',
      'computer_dns_name',
      'entra_device_id',
      'entra_joined',
      'machine_tags',
      'os_platform',
      'version',
      'os_build',
      'os_processor',
      'os_architecture',
      'last_ip_address',
      'last_external_ip_address',
      'agent_version',
      'health_status',
      'onboarding_status',
      'managed_by',
      'managed_by_status',
      'risk_score',
      'exposure_level',
      'device_value',
      'rbac_group_id',
      'rbac_group_name',
      'is_potential_duplication',
      'is_excluded',
      'exclusion_reason',
      'vm_id',
      'vm_cloud_provider',
      'vm_resource_id',
      'vm_subscription_id',
      'ip_addresses',
      'first_seen_at',
      'last_seen_at',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'DefenderDevice',
  })
  .openapi('DefenderDevice')

const DefenderDeviceListResponseSchema = z
  .object({
    data: z.array(DefenderDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'DefenderDeviceListResponse', required: [] })
  .openapi('DefenderDeviceListResponse')

const ExternalIdentityListResponseSchema = z
  .object({
    data: z
      .array(ExternalIdentitySchema)
      .exactOptional()
      .openapi({ description: 'External Identity details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple External Identities',
    title: 'ExternalIdentityListResponse',
    required: [],
  })
  .openapi('ExternalIdentityListResponse')

const ClientSchema = z
  .object({
    actor_id: z
      .uuid()
      .openapi({ description: 'Actor ID', example: '6ecc106b-75c1-48a5-846c-14782180c1ff' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Client creation timestamp', example: '2025-01-01T00:00:00Z' }),
    device_serial: z
      .string()
      .nullable()
      .openapi({
        description: 'Device manufacturer serial number (unavailable for mobile devices)',
        example: 'GCCFX0DBQ6L5',
      }),
    device_uuid: z
      .string()
      .nullable()
      .openapi({
        description: 'Device manufacturer UUID (unavailable for mobile devices)',
        example: '7A461FF9-0BE2-64A9-A418-539D9A21827B',
      }),
    firebase_installation_id: z
      .string()
      .nullable()
      .openapi({ description: 'Firebase installation ID (Android only)' }),
    firezone_id: z
      .string()
      .nullable()
      .openapi({
        description:
          "Identifier the Client reports for itself. Null for a Client whose identity comes from an MDM-issued certificate, since a self-reported value could otherwise be used to claim another Client's record.",
        example: 'b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c',
      }),
    hostname: z
      .string()
      .nullable()
      .openapi({ description: 'Client hostname', example: 'johns-macbook.example.com' }),
    id: z
      .uuid()
      .openapi({ description: 'Client ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    identifier_for_vendor: z
      .string()
      .nullable()
      .openapi({ description: 'App installation ID (iOS only)' }),
    ipv4: z
      .string()
      .openapi({ description: 'Tunnel IPv4 Address of Client', example: '100.64.0.1' }),
    ipv6: z
      .string()
      .openapi({ description: 'Tunnel IPv6 Address of Client', example: 'fd00:2021:1111::1' }),
    last_attested_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'When the device last proved possession of an MDM-provisioned client certificate',
        example: '2025-01-01T00:00:00Z',
        readOnly: true,
      }),
    last_attested_cert_fingerprint: z
      .string()
      .nullable()
      .openapi({
        description: 'SHA-256 fingerprint of the client certificate used for device verification',
        example: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        readOnly: true,
      }),
    last_attested_cert_serial: z
      .string()
      .nullable()
      .openapi({
        description: 'Serial number of the client certificate used for device verification',
        example: '4A:2F:00:8C:11:03:9E:5B',
        readOnly: true,
      }),
    last_attested_device_serial: z
      .string()
      .nullable()
      .openapi({
        description: 'Device serial number attested by an MDM-provisioned client certificate',
        example: 'GCCFX0DBQ6L5',
        readOnly: true,
      }),
    last_attested_device_uuid: z
      .string()
      .nullable()
      .openapi({
        description: 'Device UUID attested by an MDM-provisioned client certificate',
        example: '7A461FF9-0BE2-64A9-A418-539D9A21827B',
        readOnly: true,
      }),
    last_attested_mdm_device_id: z
      .string()
      .nullable()
      .openapi({
        description: 'MDM device ID attested by an MDM-provisioned client certificate',
        example: '5f2e7b7a-9d54-4bd2-9d4f-8f6c2a01f9d3',
        readOnly: true,
      }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'When the latest connection started. It is not updated while the Client stays connected, so check `online` too. Every Client has connected at least once, when it was created. Null when the Client has not connected since this field started to be recorded in February 2026.',
        example: '2025-01-01T00:00:00Z',
      }),
    last_seen_remote_ip: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP from the latest session', example: '203.0.113.10' }),
    last_seen_remote_ip_location_city: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP city from the latest session', example: 'New York' }),
    last_seen_remote_ip_location_lat: z
      .number()
      .nullable()
      .openapi({ description: 'Remote IP latitude from the latest session', example: 40.7128 }),
    last_seen_remote_ip_location_lon: z
      .number()
      .nullable()
      .openapi({ description: 'Remote IP longitude from the latest session', example: -74.006 }),
    last_seen_remote_ip_location_region: z
      .string()
      .nullable()
      .openapi({ description: 'Remote IP region from the latest session', example: 'US' }),
    last_seen_user_agent: z
      .string()
      .nullable()
      .openapi({
        description: 'User agent from the latest session',
        example: 'macOS/14.0 apple-client/1.5.0',
      }),
    last_seen_version: z
      .string()
      .nullable()
      .openapi({ description: 'Client version from the latest session', example: '1.5.0' }),
    name: z.string().openapi({ description: 'Client Name', example: "John's Macbook Air" }),
    online: z.boolean().openapi({ description: 'Online status of Client', example: true }),
    public_key: z
      .string()
      .nullable()
      .openapi({
        description: 'WireGuard public key from the latest session',
        example: 'WdKAyoA45xJllRUYnFhI5+Y4EjSTs50MzYYHfrIhVAc=',
      }),
    slug: z
      .string()
      .nullable()
      .openapi({
        description:
          'DNS label the Client is reached at under `firezone.network`, unique within the Account. Null until the Client connects once.',
        example: 'johns-macbook-air',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Client update timestamp', example: '2025-01-01T00:00:00Z' }),
    verified_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Client verification timestamp', example: '2025-01-01T00:00:00Z' }),
  })
  .openapi({
    description: 'Client',
    required: [
      'actor_id',
      'created_at',
      'device_serial',
      'device_uuid',
      'firebase_installation_id',
      'firezone_id',
      'hostname',
      'id',
      'identifier_for_vendor',
      'slug',
      'ipv4',
      'ipv6',
      'last_attested_at',
      'last_attested_cert_fingerprint',
      'last_attested_cert_serial',
      'last_attested_device_serial',
      'last_attested_device_uuid',
      'last_attested_mdm_device_id',
      'last_seen_at',
      'last_seen_remote_ip',
      'last_seen_remote_ip_location_city',
      'last_seen_remote_ip_location_lat',
      'last_seen_remote_ip_location_lon',
      'last_seen_remote_ip_location_region',
      'last_seen_user_agent',
      'last_seen_version',
      'name',
      'online',
      'public_key',
      'updated_at',
      'verified_at',
    ],
    title: 'Client',
  })
  .openapi('Client')

const ClientsResponseSchema = z
  .object({
    data: z.array(ClientSchema).exactOptional().openapi({ description: 'Clients details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Clients',
    title: 'ClientsResponse',
    required: [],
  })
  .openapi('ClientsResponse')

const GoogleDirectoryListResponseSchema = z
  .object({
    data: z
      .array(GoogleDirectorySchema)
      .exactOptional()
      .openapi({ description: 'Google Directory details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Google Directories',
    title: 'GoogleDirectoryListResponse',
    required: [],
  })
  .openapi('GoogleDirectoryListResponse')

const GatewaysResponseSchema = z
  .object({
    data: z.array(GatewaySchema).exactOptional().openapi({ description: 'Gateways details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Gateways',
    title: 'GatewaysResponse',
    required: [],
  })
  .openapi('GatewaysResponse')

const PolicyCreateRequestSchema = z
  .object({ policy: PolicyCreateParamsSchema })
  .openapi({
    description: 'POST body for creating a Policy',
    required: ['policy'],
    title: 'PolicyCreateRequest',
  })
  .openapi('PolicyCreateRequest')

const ResourceSchema = z
  .object({
    address: z
      .string()
      .nullable()
      .openapi({
        description: 'Resource address. Null for `device_pool` Resources.',
        example: '10.0.0.10',
      }),
    address_description: z
      .string()
      .nullable()
      .openapi({ description: 'Resource address description', example: 'Production Database' }),
    device_membership_criteria: DeviceMembershipCriteriaSchema.exactOptional(),
    filters: z
      .array(ResourceFilterSchema)
      .openapi({
        description: 'Traffic filters restricting the protocols and ports the Resource exposes',
        example: [{ ports: ['5432'], protocol: 'tcp' }],
      }),
    id: z
      .uuid()
      .openapi({ description: 'Resource ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    ip_stack: z
      .enum(['ipv4_only', 'ipv6_only', 'dual'])
      .exactOptional()
      .openapi({ description: 'IP stack type. Only supported for DNS resources.' }),
    name: z.string().openapi({ description: 'Resource name', example: 'Prod DB' }),
    site_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Site to connect the Resource to. Required for all types except device pools.',
        example: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
        title: 'SiteID',
      }),
    type: z
      .enum(['cidr', 'ip', 'dns', 'internet', 'device_pool'])
      .openapi({
        description:
          'Resource type. A `device_pool` has no `address` and no `site_id`; who it holds is `device_membership_criteria`.',
        example: 'ip',
      }),
  })
  .openapi({
    description: 'Resource',
    required: ['address', 'address_description', 'filters', 'id', 'name', 'type'],
    title: 'Resource',
  })
  .openapi('Resource')

const ResourceResponseSchema = z
  .object({ data: ResourceSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Resource',
    title: 'ResourceResponse',
    required: [],
  })
  .openapi('ResourceResponse')

const VersionNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.agent_version',
        'intune.attestation_boot_app_security_version',
        'intune.attestation_boot_manager_security_version',
        'intune.attestation_boot_manager_version',
        'intune.attestation_code_integrity_check_version',
        'intune.attestation_content_version',
        'intune.attestation_tpm_version',
        'intune.os_version',
        'iru.agent_version',
        'iru.display_os_version',
        'iru.firewall_version',
        'iru.gatekeeper_opaque_version',
        'iru.gatekeeper_version',
        'iru.malware_removal_tool_version',
        'iru.os_version',
        'iru.supplemental_os_version_extra',
        'iru.xprotect_version',
        'santa.os_version',
        'santa.santa_version',
        'santa.santanetd_version',
        'sentinelone.agent_version',
        'sentinelone.os_revision',
        'sentinelone.ranger_version',
      ])
      .openapi({ description: 'version field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'version no_value provider comparison' })
  .openapi('VersionNoValueProviderComparison')

const ExternalIdentityResponseSchema = z
  .object({ data: ExternalIdentitySchema.exactOptional() })
  .openapi({
    description: 'Response schema for single External Identity',
    title: 'ExternalIdentityResponse',
    required: [],
  })
  .openapi('ExternalIdentityResponse')

const SantaDeviceResponseSchema = z
  .object({ data: SantaDeviceSchema.exactOptional() })
  .openapi({ title: 'SantaDeviceResponse', required: [] })
  .openapi('SantaDeviceResponse')

const SentinelOnePostureProviderUpdateRequestSchema = z
  .object({
    sentinelone_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'SentinelOne',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating a SentinelOne posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['sentinelone_posture_provider'],
    title: 'SentinelOnePostureProviderUpdateRequest',
  })
  .openapi('SentinelOnePostureProviderUpdateRequest')

const OktaDirectoryListResponseSchema = z
  .object({
    data: z
      .array(OktaDirectorySchema)
      .exactOptional()
      .openapi({ description: 'Okta Directory details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Okta Directories',
    title: 'OktaDirectoryListResponse',
    required: [],
  })
  .openapi('OktaDirectoryListResponse')

const SophosDeviceSchema = z
  .object({
    mac_addresses: z.array(z.string()).nullable(),
    os_name: z.string().nullable(),
    last_seen_at: z.iso.datetime({ offset: true }).nullable(),
    tamper_protection_supported: z.boolean().nullable(),
    last_agent_update_at: z.iso.datetime({ offset: true }).nullable(),
    os_minor_version: z.int().nullable(),
    associated_person_via_login: z.string().nullable(),
    updated_at: z.iso.datetime({ offset: true }).nullable(),
    os_platform: z.string().nullable(),
    synced_at: z.iso.datetime({ offset: true }),
    inserted_at: z.iso.datetime({ offset: true }).nullable(),
    ipv6_addresses: z.array(z.string()).nullable(),
    sophos_tenant_id: z.string().nullable(),
    group_id: z.string().nullable(),
    group_name: z.string().nullable(),
    tags: z.array(z.looseObject({})).nullable(),
    serial_number: z.string().nullable(),
    isolation_admin_isolated: z.boolean().nullable(),
    group_hierarchy: z.array(z.looseObject({})).nullable(),
    health_threats_status: z.string().nullable(),
    account_id: z.uuid(),
    encryption_volumes: z.array(z.looseObject({})).nullable(),
    type: z.string().nullable(),
    cloud_instance_id: z.string().nullable(),
    associated_person_id: z.string().nullable(),
    last_os_update_at: z.iso.datetime({ offset: true }).nullable(),
    encryption_overall_status: z.string().nullable(),
    associated_person_name: z.string().nullable(),
    health_overall: z.string().nullable(),
    assigned_products: z.array(z.looseObject({})).nullable(),
    cloud_provider: z.string().nullable(),
    packages: z.looseObject({}).nullable(),
    os_build: z.int().nullable(),
    os_is_server: z.boolean().nullable(),
    health_services_status: z.string().nullable(),
    isolation_status: z.string().nullable(),
    device_software: z.looseObject({}).nullable(),
    cloned: z.boolean().nullable(),
    lockdown_status: z.string().nullable(),
    ipv4_addresses: z.array(z.string()).nullable(),
    health_service_details: z.array(z.looseObject({})).nullable(),
    tamper_protection_enabled: z.boolean().nullable(),
    online: z.boolean().nullable(),
    sophos_id: z.string(),
    isolation_self_isolated: z.boolean().nullable(),
    os_major_version: z.int().nullable(),
    posture_provider_id: z.uuid(),
    hostname: z.string().nullable(),
  })
  .openapi({
    description: 'Endpoint synced from Sophos Central',
    required: [
      'account_id',
      'sophos_id',
      'posture_provider_id',
      'type',
      'sophos_tenant_id',
      'hostname',
      'health_overall',
      'health_threats_status',
      'health_services_status',
      'health_service_details',
      'os_is_server',
      'os_platform',
      'os_name',
      'os_major_version',
      'os_minor_version',
      'os_build',
      'ipv4_addresses',
      'ipv6_addresses',
      'mac_addresses',
      'group_id',
      'group_name',
      'group_hierarchy',
      'associated_person_id',
      'associated_person_name',
      'associated_person_via_login',
      'tamper_protection_supported',
      'tamper_protection_enabled',
      'assigned_products',
      'packages',
      'device_software',
      'last_seen_at',
      'last_os_update_at',
      'last_agent_update_at',
      'serial_number',
      'encryption_overall_status',
      'encryption_volumes',
      'lockdown_status',
      'tags',
      'online',
      'cloud_provider',
      'cloud_instance_id',
      'isolation_status',
      'isolation_admin_isolated',
      'isolation_self_isolated',
      'cloned',
      'synced_at',
      'inserted_at',
      'updated_at',
    ],
    title: 'SophosDevice',
  })
  .openapi('SophosDevice')

const DefenderPostureProviderResponseSchema = z
  .object({ data: DefenderPostureProviderSchema.exactOptional() })
  .openapi({ title: 'DefenderPostureProviderResponse', required: [] })
  .openapi('DefenderPostureProviderResponse')

const SentinelOnePostureProviderSchema = z
  .object({
    account_id: z.uuid(),
    disabled_reason: z.string().nullable(),
    error_message: z.string().nullable(),
    errored_at: z.iso.datetime({ offset: true }).nullable(),
    id: z.uuid(),
    inserted_at: z.iso.datetime({ offset: true }),
    is_disabled: z.boolean(),
    is_verified: z.boolean(),
    management_url: z.url(),
    name: z.string(),
    synced_at: z.iso.datetime({ offset: true }).nullable(),
    type: z.literal('sentinelone'),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'SentinelOne posture provider',
    required: [
      'account_id',
      'disabled_reason',
      'error_message',
      'errored_at',
      'id',
      'inserted_at',
      'is_disabled',
      'is_verified',
      'management_url',
      'name',
      'synced_at',
      'type',
      'updated_at',
    ],
    title: 'SentinelOnePostureProvider',
  })
  .openapi('SentinelOnePostureProvider')

const SentinelOnePostureProviderResponseSchema = z
  .object({ data: SentinelOnePostureProviderSchema.exactOptional() })
  .openapi({ title: 'SentinelOnePostureProviderResponse', required: [] })
  .openapi('SentinelOnePostureProviderResponse')

const OktaAuthProviderResponseSchema = z
  .object({ data: OktaAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Okta Auth Provider',
    title: 'OktaAuthProviderResponse',
    required: [],
  })
  .openapi('OktaAuthProviderResponse')

const SophosPostureProviderResponseSchema = z
  .object({ data: SophosPostureProviderSchema.exactOptional() })
  .openapi({ title: 'SophosPostureProviderResponse', required: [] })
  .openapi('SophosPostureProviderResponse')

const StringArrayNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.machine_tags',
        'iru.tags',
        'santa.primary_user_groups',
        'santa.tags',
        'sentinelone.active_protection',
        'sentinelone.ad_computer_member_of',
        'sentinelone.ad_last_user_member_of',
        'sentinelone.missing_permissions',
        'sentinelone.user_actions_needed',
        'sophos.ipv4_addresses',
        'sophos.ipv6_addresses',
        'sophos.mac_addresses',
      ])
      .openapi({
        description: 'string_array field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['is_empty', 'is_not_empty', 'exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'string_array no_value provider comparison' })
  .openapi('StringArrayNoValueProviderComparison')

const IruPostureProviderResponseSchema = z
  .object({ data: IruPostureProviderSchema.exactOptional() })
  .openapi({ title: 'IruPostureProviderResponse', required: [] })
  .openapi('IruPostureProviderResponse')

const GatewayProvisionResponseSchema = z
  .object({
    data: GatewaySchema.and(
      z
        .object({
          token: z
            .string()
            .exactOptional()
            .openapi({
              description: 'One-time Gateway token secret. Omitted when `issue_token` is false.',
            }),
        })
        .openapi({ required: [] }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Response schema for a newly provisioned Gateway. Includes the one-time token secret - it is not shown again - unless the request set `issue_token` to false.\n',
    title: 'GatewayProvisionResponse',
    required: [],
  })
  .openapi('GatewayProvisionResponse')

const StringScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.computer_dns_name',
        'defender.defender_id',
        'defender.entra_device_id',
        'defender.os_processor',
        'defender.rbac_group_name',
        'defender.version',
        'defender.vm_cloud_provider',
        'defender.vm_id',
        'defender.vm_resource_id',
        'defender.vm_subscription_id',
        'intune.attestation_boot_revision_list_info',
        'intune.attestation_code_integrity_policy',
        'intune.attestation_health_status_mismatch_info',
        'intune.attestation_identity_key',
        'intune.attestation_operating_system_rev_list_info',
        'intune.attestation_pcr0',
        'intune.attestation_pcr_hash_algorithm',
        'intune.attestation_secure_boot_config_policy_fingerprint',
        'intune.device_category_display_name',
        'intune.device_name',
        'intune.eas_device_id',
        'intune.email_address',
        'intune.enrollment_profile_name',
        'intune.entra_device_id',
        'intune.ethernet_mac_address',
        'intune.iccid',
        'intune.imei',
        'intune.intune_id',
        'intune.managed_device_name',
        'intune.manufacturer',
        'intune.meid',
        'intune.model',
        'intune.notes',
        'intune.operating_system',
        'intune.phone_number',
        'intune.serial_number',
        'intune.subscriber_carrier',
        'intune.udid',
        'intune.user_display_name',
        'intune.user_id',
        'intune.user_principal_name',
        'intune.wifi_mac_address',
        'iru.asset_tag',
        'iru.blueprint_id',
        'iru.blueprint_name',
        'iru.device_name',
        'iru.host_name',
        'iru.iru_id',
        'iru.local_hostname',
        'iru.model',
        'iru.model_identifier',
        'iru.model_name',
        'iru.os_build',
        'iru.os_name',
        'iru.serial_number',
        'iru.supplemental_build_version',
        'iru.user_email',
        'iru.user_id',
        'iru.user_name',
        'santa.hostname',
        'santa.machine_model',
        'santa.os_build',
        'santa.primary_user',
        'santa.santa_id',
        'santa.serial_number',
        'santa.temporary_admin_mode_user',
        'sentinelone.account_name',
        'sentinelone.ad_computer_distinguished_name',
        'sentinelone.ad_last_user_distinguished_name',
        'sentinelone.ad_mail',
        'sentinelone.ad_user_principal_name',
        'sentinelone.computer_name',
        'sentinelone.cpu_id',
        'sentinelone.domain',
        'sentinelone.external_id',
        'sentinelone.group_id',
        'sentinelone.group_ip',
        'sentinelone.group_name',
        'sentinelone.last_logged_in_user_name',
        'sentinelone.machine_sid',
        'sentinelone.model_name',
        'sentinelone.os_name',
        'sentinelone.os_username',
        'sentinelone.sentinelone_account_id',
        'sentinelone.sentinelone_id',
        'sentinelone.serial_number',
        'sentinelone.site_id',
        'sentinelone.site_name',
        'sentinelone.storage_name',
        'sentinelone.storage_type',
        'sentinelone.uuid',
        'sophos.associated_person_id',
        'sophos.associated_person_name',
        'sophos.associated_person_via_login',
        'sophos.cloud_instance_id',
        'sophos.group_id',
        'sophos.group_name',
        'sophos.hostname',
        'sophos.os_name',
        'sophos.serial_number',
        'sophos.sophos_id',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.string().max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string scalar provider comparison' })
  .openapi('StringScalarProviderComparison')

const X509AuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    context: z.literal('clients_only').openapi({ description: 'Context', example: 'clients_only' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: true }),
    name: z.string().openapi({ description: 'Provider name', example: 'X.509' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'X.509 Auth Provider',
    required: ['account_id', 'context', 'id', 'inserted_at', 'is_disabled', 'name', 'updated_at'],
    title: 'X509AuthProvider',
  })
  .openapi('X509AuthProvider')

const ActorsResponseSchema = z
  .object({
    data: z.array(ActorSchema).exactOptional().openapi({ description: 'Actors details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Actors',
    title: 'ActorsResponse',
    required: [],
  })
  .openapi('ActorsResponse')

const GoogleAuthProviderResponseSchema = z
  .object({ data: GoogleAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Google Auth Provider',
    title: 'GoogleAuthProviderResponse',
    required: [],
  })
  .openapi('GoogleAuthProviderResponse')

const ActorUpdateRequestSchema = z
  .object({
    actor: z
      .object({
        allow_email_otp_sign_in: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({ description: 'Allow Email OTP Sign In', example: false }),
        email: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Actor Email. Optional for service accounts.',
            example: 'joe.user@example.com',
          }),
        is_disabled: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              "Whether the Actor is disabled. Setting this to `true` immediately revokes the Actor's active Client tokens and portal sessions. An Actor cannot disable itself.",
            example: false,
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Actor Name', example: 'Joe User' }),
        type: z
          .enum(['account_user', 'service_account'])
          .exactOptional()
          .openapi({
            description: 'Actor Type. Users can only be promoted to admin in the portal.',
            example: 'account_user',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PATCH/PUT body for updating an Actor. All fields are optional; omitted fields keep their current value.',
    required: ['actor'],
    title: 'ActorUpdateRequest',
  })
  .openapi('ActorUpdateRequest')

const FloatScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .literal('iru.device_capacity_gb')
      .openapi({ description: 'float field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['eq', 'ne', 'gt', 'gte', 'lt', 'lte']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.number(),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'float scalar provider comparison' })
  .openapi('FloatScalarProviderComparison')

const StringScalarDeviceComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'firezone.device_serial',
        'firezone.device_uuid',
        'firezone.hostname',
        'firezone.identifier_for_vendor',
        'firezone.last_attested_cert_fingerprint',
        'firezone.last_attested_cert_serial',
        'firezone.last_attested_device_serial',
        'firezone.last_attested_device_uuid',
        'firezone.last_attested_mdm_device_id',
        'firezone.last_seen_remote_ip_location_city',
        'firezone.last_seen_user_agent',
        'firezone.name',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is', 'is_not', 'contains', 'does_not_contain', 'starts_with', 'ends_with']),
    value: z.string().max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string scalar device comparison' })
  .openapi('StringScalarDeviceComparison')

const MembershipResponseSchema = z
  .object({
    data: z
      .object({
        actor_ids: z
          .array(z.uuid().openapi({ description: 'Actor ID' }))
          .exactOptional()
          .openapi({
            description: 'Actor IDs',
            example: [
              '4ddfa557-7dfc-484f-894c-2024ec3fe9f7',
              '89d22f71-939d-442d-b148-897b730adfb4',
            ],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Memberships', required: [] }),
  })
  .openapi({
    description: 'Response schema for Membership Updates',
    title: 'MembershipResponse',
    required: [],
  })
  .openapi('MembershipResponse')

const IpNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.last_external_ip_address',
        'defender.last_ip_address',
        'santa.last_preflight_ip',
        'sentinelone.external_ip',
        'sentinelone.last_ip_to_management',
      ])
      .openapi({ description: 'ip field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'ip no_value provider comparison' })
  .openapi('IpNoValueProviderComparison')

const DatetimeNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.first_seen_at',
        'defender.last_seen_at',
        'intune.android_security_patch_level',
        'intune.attestation_issued_at',
        'intune.compliance_grace_period_expiration_at',
        'intune.eas_activated_at',
        'intune.enrolled_at',
        'intune.exchange_last_successful_sync_at',
        'intune.last_sync_at',
        'intune.management_certificate_expires_at',
        'iru.activation_lock_collected_at',
        'iru.filevault_collected_at',
        'iru.filevault_key_rotation_scheduled_at',
        'iru.firewall_collected_at',
        'iru.first_enrolled_at',
        'iru.gatekeeper_collected_at',
        'iru.inventory_collected_at',
        'iru.last_check_in_at',
        'iru.last_enrolled_at',
        'iru.startup_settings_collected_at',
        'santa.first_seen_at',
        'santa.last_preflight_at',
        'santa.last_sync_at',
        'santa.rule_sync_at',
        'santa.temporary_admin_mode_ends_at',
        'santa.temporary_monitor_mode_ends_at',
        'sentinelone.first_full_mode_at',
        'sentinelone.full_disk_scan_updated_at',
        'sentinelone.last_active_at',
        'sentinelone.last_successful_scan_at',
        'sentinelone.operational_state_expires_at',
        'sentinelone.os_start_time',
        'sentinelone.registered_at',
        'sentinelone.remote_profiling_state_expires_at',
        'sentinelone.scan_aborted_at',
        'sentinelone.scan_finished_at',
        'sentinelone.scan_started_at',
        'sophos.last_agent_update_at',
        'sophos.last_os_update_at',
        'sophos.last_seen_at',
      ])
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'datetime no_value provider comparison' })
  .openapi('DatetimeNoValueProviderComparison')

const MembershipListResponseSchema = z
  .object({
    data: z.array(MembershipSchema).exactOptional().openapi({ description: 'Membership details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for Memberships',
    title: 'MembershipListResponse',
    required: [],
  })
  .openapi('MembershipListResponse')

const DeletedGatewayTokensResponseSchema = z
  .object({
    data: z
      .object({
        deleted_count: z
          .int()
          .openapi({ description: 'Number of tokens that were deleted', example: 5 }),
      })
      .exactOptional()
      .openapi({ required: ['deleted_count'] }),
  })
  .openapi({
    description: 'Response schema for deleted Gateway Tokens',
    title: 'DeletedGatewayTokensResponse',
    required: [],
  })
  .openapi('DeletedGatewayTokensResponse')

const PolicyUpdateParamsSchema = z
  .object({
    conditions: z
      .array(PolicyConditionSchema)
      .exactOptional()
      .openapi({
        description: 'Conditions that must be satisfied for the Policy to grant access',
        example: [{ operator: 'is_in_cidr', property: 'remote_ip', values: ['10.0.0.0/8'] }],
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Policy Description', example: 'Updated description' }),
    flow_log_uploads_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether flow logs are reported for connections authorized by this Policy. Always false for Internet Resource policies.',
      }),
    group_id: z.uuid().exactOptional().openapi({ description: 'Group ID' }),
    is_disabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether the Policy is disabled. A disabled Policy grants no access but is otherwise retained.',
        example: false,
      }),
    postures: z
      .union([PolicyPostureNodeSchema, z.literal(null).nullable()])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Replaces the entire device posture expression; it is not merged. Omit to preserve existing postures, or set to null to remove them. A non-null expression requires the account's device_posture entitlement (Enterprise); otherwise returns HTTP 403. Clearing postures remains allowed after downgrade. Conditions and postures must both hold. Changing postures revokes this policy's active authorizations and interrupts affected connections until they are reauthorized. See PolicyPostureNode for fields, operators, platform behavior, and limits.",
        example: {
          and: [
            { field: 'intune.enrolled', op: 'is', value: true },
            { field: 'intune.compliance_state', op: 'is', rows: 'all', value: 'compliant' },
            { field: 'intune.last_sync_at', op: 'within_last', value: 'PT24H' },
            {
              or: [
                { field: 'firezone.last_seen_version', op: 'gte', value: '@latest' },
                { not: { field: 'firezone.hostname', op: 'starts_with', value: 'test-' } },
              ],
            },
          ],
        },
      }),
    require_attestation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the Client must present a valid X.509 certificate from one of the account's trust anchors on its current connection. Setting it to true returns 422 when the account has no trust anchors.",
      }),
    resource_id: z.uuid().exactOptional().openapi({ description: 'Resource ID' }),
  })
  .openapi({
    description:
      'Policy attributes accepted when updating a Policy. All fields are optional; omitted fields keep their current value.',
    title: 'PolicyUpdateParams',
    required: [],
  })
  .openapi('PolicyUpdateParams')

const ClientTokenShowResponseSchema = z
  .object({ data: ClientTokenSchema.exactOptional() })
  .openapi({
    description: 'Response schema for Client Token metadata',
    title: 'ClientTokenShowResponse',
    required: [],
  })
  .openapi('ClientTokenShowResponse')

const DatetimeScalarDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.last_attested_at')
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['before', 'after']),
    value: z.iso.datetime({ offset: true }).max(1024),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'datetime scalar device comparison' })
  .openapi('DatetimeScalarDeviceComparison')

const X509AuthProviderResponseSchema = z
  .object({ data: X509AuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for a single X.509 Auth Provider',
    title: 'X509AuthProviderResponse',
    required: [],
  })
  .openapi('X509AuthProviderResponse')

const DefenderPostureProviderListResponseSchema = z
  .object({
    data: z.array(DefenderPostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'DefenderPostureProviderListResponse', required: [] })
  .openapi('DefenderPostureProviderListResponse')

const DeviceMembershipListedDevicesSchema = z
  .strictObject({
    device: z
      .strictObject({
        field: z.literal('id'),
        op: z.literal('in'),
        value: z.array(z.uuid()).openapi({ description: 'Client IDs' }),
      })
      .openapi({ required: ['field', 'op', 'value'] }),
  })
  .openapi({
    description: 'Exactly the Clients named',
    example: {
      device: {
        field: 'id',
        op: 'in',
        value: ['7cb89288-1fb3-433e-a522-2d087e45988d', 'cc9f561a-444d-4083-ab38-0abc6cf2314c'],
      },
    },
    required: ['device'],
    title: 'DeviceMembershipListedDevices',
  })
  .openapi('DeviceMembershipListedDevices')

const LogsResponseSchema = z
  .object({
    data: z
      .array(LogSchema)
      .exactOptional()
      .openapi({
        description: 'Log entries for the requested window.',
        example: [
          {
            after: { name: 'Jane Smith' },
            before: { name: 'Jane Doe' },
            log_id: 'c00060db0c2c8eb400000000',
            object: 'actors',
            operation: 'update',
            subject: null,
            timestamp: '2026-05-26T12:34:56.789Z',
            type: 'change',
          },
        ],
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Pagination metadata',
        example: { count: 1, limit: 50, next_page: null, prev_page: null },
      }),
  })
  .openapi({
    description:
      'Response schema for a page of Log entries.\n\nEntries are returned most recent first. Each page contains at most 100\nentries (50 by default); use the `metadata.next_page` cursor to fetch\nthe following page.\n',
    title: 'LogsResponse',
    required: [],
  })
  .openapi('LogsResponse')

const EnumStringNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.device_value',
        'defender.exclusion_reason',
        'defender.exposure_level',
        'defender.health_status',
        'defender.managed_by',
        'defender.managed_by_status',
        'defender.onboarding_status',
        'defender.os_architecture',
        'defender.os_platform',
        'defender.risk_score',
        'intune.attestation_status',
        'intune.compliance_state',
        'intune.device_enrollment_type',
        'intune.device_registration_state',
        'intune.exchange_access_state',
        'intune.exchange_access_state_reason',
        'intune.managed_device_owner_type',
        'intune.management_agent',
        'intune.management_state',
        'intune.partner_reported_threat_state',
        'iru.cellular_technology',
        'iru.device_family',
        'iru.external_boot_level',
        'iru.filevault_key_type',
        'iru.firewall_logging_option',
        'iru.lost_mode_status',
        'iru.platform',
        'iru.secure_boot_level',
        'santa.configured_client_mode',
        'santa.last_seen_client_mode',
        'santa.os_type',
        'sentinelone.apps_vulnerability_status',
        'sentinelone.console_migration_status',
        'sentinelone.detection_state',
        'sentinelone.installer_type',
        'sentinelone.location_type',
        'sentinelone.machine_type',
        'sentinelone.mitigation_mode',
        'sentinelone.mitigation_mode_suspicious',
        'sentinelone.network_status',
        'sentinelone.operational_state',
        'sentinelone.os_arch',
        'sentinelone.os_type',
        'sentinelone.proxy_method',
        'sentinelone.ranger_status',
        'sentinelone.remote_profiling_state',
        'sentinelone.scan_status',
        'sophos.cloud_provider',
        'sophos.encryption_overall_status',
        'sophos.health_overall',
        'sophos.health_services_status',
        'sophos.health_threats_status',
        'sophos.isolation_status',
        'sophos.lockdown_status',
        'sophos.os_platform',
        'sophos.type',
      ])
      .openapi({
        description: 'enum_string field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'enum_string no_value provider comparison' })
  .openapi('EnumStringNoValueProviderComparison')

const SentinelOnePostureProviderListResponseSchema = z
  .object({
    data: z.array(SentinelOnePostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SentinelOnePostureProviderListResponse', required: [] })
  .openapi('SentinelOnePostureProviderListResponse')

const PoolMemberResponseSchema = z
  .object({
    data: z
      .object({
        device_ids: z
          .array(z.uuid().openapi({ description: 'Client ID' }))
          .exactOptional()
          .openapi({
            description: 'Client IDs currently in the pool',
            example: [
              '4ddfa557-7dfc-484f-894c-2024ec3fe9f7',
              '89d22f71-939d-442d-b148-897b730adfb4',
            ],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Pool members', required: [] }),
  })
  .openapi({
    description: 'Response schema for Pool Member updates',
    title: 'PoolMemberResponse',
    required: [],
  })
  .openapi('PoolMemberResponse')

const SantaDeviceListResponseSchema = z
  .object({
    data: z.array(SantaDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SantaDeviceListResponse', required: [] })
  .openapi('SantaDeviceListResponse')

const SophosDeviceResponseSchema = z
  .object({ data: SophosDeviceSchema.exactOptional() })
  .openapi({ title: 'SophosDeviceResponse', required: [] })
  .openapi('SophosDeviceResponse')

const SophosPostureProviderListResponseSchema = z
  .object({
    data: z.array(SophosPostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SophosPostureProviderListResponse', required: [] })
  .openapi('SophosPostureProviderListResponse')

const StringRegexDeviceComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'firezone.device_serial',
        'firezone.device_uuid',
        'firezone.hostname',
        'firezone.identifier_for_vendor',
        'firezone.last_attested_cert_fingerprint',
        'firezone.last_attested_cert_serial',
        'firezone.last_attested_device_serial',
        'firezone.last_attested_device_uuid',
        'firezone.last_attested_mdm_device_id',
        'firezone.last_seen_remote_ip_location_city',
        'firezone.last_seen_user_agent',
        'firezone.name',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['matches', 'does_not_match']),
    value: z.string().max(256).openapi({ description: 'Regular expression; at most 256 bytes' }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string regex device comparison' })
  .openapi('StringRegexDeviceComparison')

const DefenderDeviceResponseSchema = z
  .object({ data: DefenderDeviceSchema.exactOptional() })
  .openapi({ title: 'DefenderDeviceResponse', required: [] })
  .openapi('DefenderDeviceResponse')

const EmailOTPAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    issuer: z.string().openapi({ description: 'Issuer', example: 'firezone' }),
    name: z.string().openapi({ description: 'Provider name', example: 'Email OTP' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'Email OTP Auth Provider',
    required: [
      'account_id',
      'client_session_lifetime_secs',
      'context',
      'id',
      'inserted_at',
      'is_disabled',
      'issuer',
      'name',
      'portal_session_lifetime_secs',
      'updated_at',
    ],
    title: 'EmailOTPAuthProvider',
  })
  .openapi('EmailOTPAuthProvider')

const EmailOTPAuthProviderResponseSchema = z
  .object({ data: EmailOTPAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Email OTP Auth Provider',
    title: 'EmailOTPAuthProviderResponse',
    required: [],
  })
  .openapi('EmailOTPAuthProviderResponse')

const EntraDirectoryListResponseSchema = z
  .object({
    data: z
      .array(EntraDirectorySchema)
      .exactOptional()
      .openapi({ description: 'Entra Directory details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Entra Directories',
    title: 'EntraDirectoryListResponse',
    required: [],
  })
  .openapi('EntraDirectoryListResponse')

const PolicyUpdateRequestSchema = z
  .object({ policy: PolicyUpdateParamsSchema })
  .openapi({
    description: 'PUT/PATCH body for updating a Policy',
    required: ['policy'],
    title: 'PolicyUpdateRequest',
  })
  .openapi('PolicyUpdateRequest')

const ValidationErrorsSchema: z.ZodType<ValidationErrorsType> = z
  .lazy(() =>
    z
      .record(
        z.string(),
        z.union([z.array(z.string()), z.array(ValidationErrorsSchema), ValidationErrorsSchema]),
      )
      .openapi({
        description:
          'Map of field name to its errors: a list of messages, or the errors of a nested object or list of objects under the same shape.',
        example: { name: ["can't be blank"] },
        title: 'ValidationErrors',
      }),
  )
  .openapi('ValidationErrors')

const OIDCAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(OIDCAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'OIDC Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple OIDC Auth Providers',
    title: 'OIDCAuthProviderListResponse',
    required: [],
  })
  .openapi('OIDCAuthProviderListResponse')

const PoolMemberPutRequestSchema = z
  .object({
    pool_members: z
      .array(
        z
          .object({ device_id: z.uuid().openapi({ description: 'Client ID' }) })
          .openapi({ required: ['device_id'] }),
      )
      .openapi({
        example: [
          { device_id: '7cb89288-1fb3-433e-a522-2d087e45988d' },
          { device_id: 'cc9f561a-444d-4083-ab38-0abc6cf2314c' },
        ],
      }),
  })
  .openapi({
    deprecated: true,
    description:
      "PUT body replacing the pool's entire membership. Any Client not named\nhere is removed from the pool.\n",
    required: ['pool_members'],
    title: 'PoolMemberPutRequest',
  })
  .openapi('PoolMemberPutRequest')

const SiteIDSchema = z
  .uuid()
  .nullable()
  .openapi({
    description:
      'Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.',
    example: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
    title: 'SiteID',
  })
  .openapi('SiteID')

const StringNoValueDeviceComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'firezone.device_serial',
        'firezone.device_uuid',
        'firezone.hostname',
        'firezone.identifier_for_vendor',
        'firezone.last_attested_cert_fingerprint',
        'firezone.last_attested_cert_serial',
        'firezone.last_attested_device_serial',
        'firezone.last_attested_device_uuid',
        'firezone.last_attested_mdm_device_id',
        'firezone.last_seen_remote_ip_location_city',
        'firezone.last_seen_user_agent',
        'firezone.name',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'string no_value device comparison' })
  .openapi('StringNoValueDeviceComparison')

const JsonNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.ip_addresses',
        'sentinelone.cloud_providers',
        'sentinelone.locations',
        'sentinelone.network_interfaces',
        'sentinelone.tags',
        'sophos.assigned_products',
        'sophos.device_software',
        'sophos.encryption_volumes',
        'sophos.group_hierarchy',
        'sophos.health_service_details',
        'sophos.packages',
        'sophos.tags',
      ])
      .openapi({ description: 'json field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_empty', 'is_not_empty', 'exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'json no_value provider comparison' })
  .openapi('JsonNoValueProviderComparison')

const ProblemDetailsSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable explanation specific to this occurrence of the problem.',
        example: 'The requested resource could not be found.',
      }),
    status: z.int().openapi({ description: 'HTTP status code.', example: 404 }),
    title: z
      .string()
      .openapi({
        description: 'Short, human-readable summary of the problem type (the HTTP status phrase).',
        example: 'Not Found',
      }),
    type: z
      .string()
      .openapi({
        description: 'URI identifying the problem type. Always "about:blank" for now.',
        example: 'about:blank',
      }),
  })
  .openapi({
    description: 'RFC 9457 (Problem Details for HTTP APIs) error response.',
    required: ['type', 'title', 'status'],
    title: 'ProblemDetails',
  })
  .openapi('ProblemDetails')

const DatetimeDurationDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.last_attested_at')
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['within_last', 'not_within_last']),
    value: z
      .string()
      .max(1024)
      .openapi({ description: 'Positive ISO 8601 duration, such as PT24H or P30D' }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'datetime duration device comparison' })
  .openapi('DatetimeDurationDeviceComparison')

const SantaPostureProviderListResponseSchema = z
  .object({
    data: z.array(SantaPostureProviderSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SantaPostureProviderListResponse', required: [] })
  .openapi('SantaPostureProviderListResponse')

const ResourceUpdateRequestSchema = z
  .object({
    resource: z
      .object({
        address: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Resource address. Required for `cidr`, `ip` and `dns`. `device_pool` and `internet` Resources ignore it.',
            example: '10.0.0.10',
          }),
        address_description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Resource address description', example: 'Production Database' }),
        device_membership_criteria: DeviceMembershipCriteriaSchema.exactOptional(),
        filters: z
          .array(ResourceFilterSchema)
          .exactOptional()
          .openapi({
            description: 'Traffic filters restricting the protocols and ports the Resource exposes',
            example: [{ ports: ['5432'], protocol: 'tcp' }],
          }),
        ip_stack: z
          .enum(['ipv4_only', 'ipv6_only', 'dual'])
          .nullable()
          .exactOptional()
          .openapi({ description: 'IP stack type. Only supported for DNS resources.' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Resource name', example: 'Prod DB' }),
        site_id: z
          .uuid()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Site to connect the Resource to. Required for all types except `device_pool`, which takes none. The Internet Site is reserved for the Internet Resource and cannot be used.',
            example: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
            title: 'SiteID',
          }),
        type: z
          .enum(['cidr', 'ip', 'dns', 'internet', 'device_pool'])
          .exactOptional()
          .openapi({
            description:
              'Resource type. `internet` is accepted only in the Internet Site. `device_pool` takes no `site_id` and no `address`.',
            example: 'ip',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PATCH/PUT body for updating a Resource. All fields are optional; omitted fields keep their current value.',
    required: ['resource'],
    title: 'ResourceUpdateRequest',
  })
  .openapi('ResourceUpdateRequest')

const ActorCreateRequestSchema = z
  .object({
    actor: z
      .object({
        allow_email_otp_sign_in: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({ description: 'Allow Email OTP Sign In', example: false }),
        email: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Actor Email. Optional for service accounts.',
            example: 'joe.user@example.com',
          }),
        name: z.string().openapi({ description: 'Actor Name', example: 'Joe User' }),
        type: z
          .enum(['account_user', 'service_account'])
          .openapi({
            description: 'Actor Type. Admins can only be created in the portal.',
            example: 'account_user',
          }),
      })
      .openapi({ required: ['name', 'type'] }),
  })
  .openapi({
    description: 'POST body for creating an Actor',
    required: ['actor'],
    title: 'ActorCreateRequest',
  })
  .openapi('ActorCreateRequest')

const Ipv4ListDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.ipv4')
      .openapi({ description: 'ipv4 field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'ipv4 list device comparison' })
  .openapi('Ipv4ListDeviceComparison')

const SantaPostureProviderUpdateRequestSchema = z
  .object({
    santa_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'Santa',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating a Santa posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['santa_posture_provider'],
    title: 'SantaPostureProviderUpdateRequest',
  })
  .openapi('SantaPostureProviderUpdateRequest')

const MembershipPatchRequestSchema = z
  .object({
    memberships: z
      .object({
        add: z
          .array(z.uuid().openapi({ description: 'Actor ID' }))
          .exactOptional()
          .openapi({
            description: 'Array of Actor IDs',
            example: ['4ddfa557-7dfc-484f-894c-2024ec3fe9f7'],
          }),
        remove: z
          .array(z.uuid().openapi({ description: 'Actor ID' }))
          .exactOptional()
          .openapi({
            description: 'Array of Actor IDs',
            example: ['89d22f71-939d-442d-b148-897b730adfb4'],
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'PATCH body for updating Memberships',
    required: ['memberships'],
    title: 'MembershipPatchRequest',
  })
  .openapi('MembershipPatchRequest')

const LogResponseSchema = z
  .object({ data: LogSchema.exactOptional() })
  .openapi({
    description: 'Response schema for a single Log entry.',
    title: 'LogResponse',
    required: [],
  })
  .openapi('LogResponse')

const SantaPostureProviderResponseSchema = z
  .object({ data: SantaPostureProviderSchema.exactOptional() })
  .openapi({ title: 'SantaPostureProviderResponse', required: [] })
  .openapi('SantaPostureProviderResponse')

const EnumStringRegexProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.device_value',
        'defender.exclusion_reason',
        'defender.exposure_level',
        'defender.health_status',
        'defender.managed_by',
        'defender.managed_by_status',
        'defender.onboarding_status',
        'defender.os_architecture',
        'defender.os_platform',
        'defender.risk_score',
        'intune.attestation_status',
        'intune.compliance_state',
        'intune.device_enrollment_type',
        'intune.device_registration_state',
        'intune.exchange_access_state',
        'intune.exchange_access_state_reason',
        'intune.managed_device_owner_type',
        'intune.management_agent',
        'intune.management_state',
        'intune.partner_reported_threat_state',
        'iru.cellular_technology',
        'iru.device_family',
        'iru.external_boot_level',
        'iru.filevault_key_type',
        'iru.firewall_logging_option',
        'iru.lost_mode_status',
        'iru.platform',
        'iru.secure_boot_level',
        'santa.configured_client_mode',
        'santa.last_seen_client_mode',
        'santa.os_type',
        'sentinelone.apps_vulnerability_status',
        'sentinelone.console_migration_status',
        'sentinelone.detection_state',
        'sentinelone.installer_type',
        'sentinelone.location_type',
        'sentinelone.machine_type',
        'sentinelone.mitigation_mode',
        'sentinelone.mitigation_mode_suspicious',
        'sentinelone.network_status',
        'sentinelone.operational_state',
        'sentinelone.os_arch',
        'sentinelone.os_type',
        'sentinelone.proxy_method',
        'sentinelone.ranger_status',
        'sentinelone.remote_profiling_state',
        'sentinelone.scan_status',
        'sophos.cloud_provider',
        'sophos.encryption_overall_status',
        'sophos.health_overall',
        'sophos.health_services_status',
        'sophos.health_threats_status',
        'sophos.isolation_status',
        'sophos.lockdown_status',
        'sophos.os_platform',
        'sophos.type',
      ])
      .openapi({
        description: 'enum_string field; see PolicyPostureNode for platform applicability',
      }),
    op: z.enum(['matches', 'does_not_match']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.string().max(256).openapi({ description: 'Regular expression; at most 256 bytes' }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'enum_string regex provider comparison' })
  .openapi('EnumStringRegexProviderComparison')

const ClientResponseSchema = z
  .object({ data: ClientSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single Client',
    title: 'ClientResponse',
    required: [],
  })
  .openapi('ClientResponse')

const DefenderPostureProviderUpdateRequestSchema = z
  .object({
    defender_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'Microsoft Defender for Endpoint',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating a Defender posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['defender_posture_provider'],
    title: 'DefenderPostureProviderUpdateRequest',
  })
  .openapi('DefenderPostureProviderUpdateRequest')

const DatetimeDurationProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.first_seen_at',
        'defender.last_seen_at',
        'intune.android_security_patch_level',
        'intune.attestation_issued_at',
        'intune.compliance_grace_period_expiration_at',
        'intune.eas_activated_at',
        'intune.enrolled_at',
        'intune.exchange_last_successful_sync_at',
        'intune.last_sync_at',
        'intune.management_certificate_expires_at',
        'iru.activation_lock_collected_at',
        'iru.filevault_collected_at',
        'iru.filevault_key_rotation_scheduled_at',
        'iru.firewall_collected_at',
        'iru.first_enrolled_at',
        'iru.gatekeeper_collected_at',
        'iru.inventory_collected_at',
        'iru.last_check_in_at',
        'iru.last_enrolled_at',
        'iru.startup_settings_collected_at',
        'santa.first_seen_at',
        'santa.last_preflight_at',
        'santa.last_sync_at',
        'santa.rule_sync_at',
        'santa.temporary_admin_mode_ends_at',
        'santa.temporary_monitor_mode_ends_at',
        'sentinelone.first_full_mode_at',
        'sentinelone.full_disk_scan_updated_at',
        'sentinelone.last_active_at',
        'sentinelone.last_successful_scan_at',
        'sentinelone.operational_state_expires_at',
        'sentinelone.os_start_time',
        'sentinelone.registered_at',
        'sentinelone.remote_profiling_state_expires_at',
        'sentinelone.scan_aborted_at',
        'sentinelone.scan_finished_at',
        'sentinelone.scan_started_at',
        'sophos.last_agent_update_at',
        'sophos.last_os_update_at',
        'sophos.last_seen_at',
      ])
      .openapi({ description: 'datetime field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['within_last', 'not_within_last']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .string()
      .max(1024)
      .openapi({ description: 'Positive ISO 8601 duration, such as PT24H or P30D' }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'datetime duration provider comparison' })
  .openapi('DatetimeDurationProviderComparison')

const PoolMemberSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ description: 'Client ID', example: '7cb89288-1fb3-433e-a522-2d087e45988d' }),
    last_seen_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Last time the Client was seen', example: '2024-01-15T10:30:00Z' }),
    name: z.string().openapi({ description: 'Client Name', example: 'jane-laptop' }),
  })
  .openapi({
    deprecated: true,
    description: 'A Client a device pool Resource names as a member',
    required: ['id', 'last_seen_at', 'name'],
    title: 'PoolMember',
  })
  .openapi('PoolMember')

const IntegerScalarProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.os_build',
        'defender.rbac_group_id',
        'intune.attestation_reset_count',
        'intune.attestation_restart_count',
        'intune.free_storage_space_bytes',
        'intune.physical_memory_bytes',
        'intune.total_storage_space_bytes',
        'santa.sip_status',
        'sentinelone.active_threats',
        'sentinelone.core_count',
        'sentinelone.cpu_count',
        'sentinelone.protected_containers_count',
        'sentinelone.protected_pods_count',
        'sentinelone.protected_tasks_count',
        'sentinelone.total_memory',
        'sophos.os_build',
        'sophos.os_major_version',
        'sophos.os_minor_version',
      ])
      .openapi({ description: 'integer field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['eq', 'ne', 'gt', 'gte', 'lt', 'lte']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.int(),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'integer scalar provider comparison' })
  .openapi('IntegerScalarProviderComparison')

const AccountLimitSchema = z
  .object({
    available: z.int().openapi({ description: 'Remaining available count' }),
    total: z.int().openapi({ description: 'Total allowed count' }),
    used: z.int().openapi({ description: 'Current usage count' }),
  })
  .openapi({
    description: 'Account limit with usage information',
    required: ['used', 'available', 'total'],
    title: 'AccountLimit',
  })
  .openapi('AccountLimit')

const AccountLimitsSchema = z
  .object({
    account_admin_users: AccountLimitSchema.exactOptional(),
    adhoc_service_accounts: AccountLimitSchema.exactOptional(),
    monthly_active_users: AccountLimitSchema.exactOptional(),
    service_accounts: AccountLimitSchema.exactOptional(),
    sites: AccountLimitSchema.exactOptional(),
    users: AccountLimitSchema.exactOptional(),
  })
  .openapi({
    description: 'Account limits and usage information',
    title: 'AccountLimits',
    required: [],
  })
  .openapi('AccountLimits')

const AccountSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Account ID' }),
    key: z.string().length(6).openapi({ description: '6-character account key' }),
    legal_name: z.string().openapi({ description: 'Account legal name' }),
    limits: AccountLimitsSchema,
    name: z.string().openapi({ description: 'Account name' }),
    slug: z.string().openapi({ description: 'Account slug' }),
  })
  .openapi({
    description: 'Account schema',
    required: ['id', 'key', 'legal_name', 'limits', 'name', 'slug'],
    title: 'Account',
  })
  .openapi('Account')

const AccountResponseSchema = z
  .object({ data: AccountSchema })
  .openapi({
    description: 'Response schema for Account',
    required: ['data'],
    title: 'AccountResponse',
  })
  .openapi('AccountResponse')

const IntegerNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.os_build',
        'defender.rbac_group_id',
        'intune.attestation_reset_count',
        'intune.attestation_restart_count',
        'intune.free_storage_space_bytes',
        'intune.physical_memory_bytes',
        'intune.total_storage_space_bytes',
        'santa.sip_status',
        'sentinelone.active_threats',
        'sentinelone.core_count',
        'sentinelone.cpu_count',
        'sentinelone.protected_containers_count',
        'sentinelone.protected_pods_count',
        'sentinelone.protected_tasks_count',
        'sentinelone.total_memory',
        'sophos.os_build',
        'sophos.os_major_version',
        'sophos.os_minor_version',
      ])
      .openapi({ description: 'integer field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'integer no_value provider comparison' })
  .openapi('IntegerNoValueProviderComparison')

const DeviceMembershipOwnDevicesSchema = z
  .strictObject({
    device: z
      .strictObject({
        field: z.literal('actor_id'),
        op: z.literal('eq'),
        value: z
          .strictObject({ subject: z.literal('actor_id') })
          .openapi({ required: ['subject'] }),
      })
      .openapi({ required: ['field', 'op', 'value'] }),
  })
  .openapi({
    description: 'The Clients of the Actor asking for access',
    example: { device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } } },
    required: ['device'],
    title: 'DeviceMembershipOwnDevices',
  })
  .openapi('DeviceMembershipOwnDevices')

const ValidationProblemDetailsSchema = z
  .object({
    detail: z.string().exactOptional().openapi({ example: 'The request body failed validation.' }),
    status: z.int().openapi({ example: 422 }),
    title: z.string().openapi({ example: 'Unprocessable Content' }),
    type: z.string().openapi({ example: 'about:blank' }),
    validation_errors: ValidationErrorsSchema.exactOptional(),
  })
  .openapi({
    description:
      'RFC 9457 error response for request validation failures. The `validation_errors` member maps each invalid field to a list of human-readable messages. Errors on nested objects and on the items of a list are reported under the same shape, keyed by field name or list index. It is omitted when the failure is not attributable to individual fields.',
    required: ['type', 'title', 'status'],
    title: 'ValidationProblemDetails',
  })
  .openapi('ValidationProblemDetails')

const SophosPostureProviderUpdateRequestSchema = z
  .object({
    sophos_posture_provider: z
      .strictObject({
        is_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the provider is disabled. A provider can be enabled only while it is verified.',
            example: false,
          }),
        name: z
          .string()
          .min(1)
          .max(255)
          .exactOptional()
          .openapi({
            description: "Name shown to admins, unique across the account's posture providers",
            example: 'Sophos XDR',
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PUT/PATCH body for updating a Sophos posture provider. All fields are optional; omitted fields keep their current value.',
    required: ['sophos_posture_provider'],
    title: 'SophosPostureProviderUpdateRequest',
  })
  .openapi('SophosPostureProviderUpdateRequest')

const SentinelOneDeviceListResponseSchema = z
  .object({
    data: z.array(SentinelOneDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SentinelOneDeviceListResponse', required: [] })
  .openapi('SentinelOneDeviceListResponse')

const GroupUpdateRequestSchema = z
  .object({
    group: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Group Name', example: 'Engineering' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PATCH/PUT body for updating a Group. All fields are optional; omitted fields keep their current value.',
    required: ['group'],
    title: 'GroupUpdateRequest',
  })
  .openapi('GroupUpdateRequest')

const GitHubAuthProviderSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Account ID', example: '5e6f7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f' }),
    client_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Client session lifetime in seconds. Null when the account default applies.',
        example: 604800,
      }),
    context: z
      .enum(['clients_and_portal', 'clients_only', 'portal_only'])
      .openapi({ description: 'Context', example: 'clients_and_portal' }),
    email_verification_method: z
      .enum(['none', 'proof'])
      .openapi({
        description:
          'How a GitHub identity is first linked to an existing user by email: proof emails a one-time code first, none links on a GitHub-verified email',
        example: 'proof',
      }),
    id: z
      .uuid()
      .openapi({ description: 'Provider ID', example: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205' }),
    inserted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Creation timestamp', example: '2025-01-01T00:00:00Z' }),
    is_default: z.boolean().openapi({ description: 'Whether provider is default', example: true }),
    is_disabled: z
      .boolean()
      .openapi({ description: 'Whether provider is disabled', example: false }),
    issuer: z
      .string()
      .openapi({ description: 'Issuer', example: 'https://github.com/login/oauth' }),
    name: z.string().openapi({ description: 'Provider name', example: 'GitHub' }),
    portal_session_lifetime_secs: z
      .int()
      .nullable()
      .openapi({
        description: 'Portal session lifetime in seconds. Null when the account default applies.',
        example: 28800,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Update timestamp', example: '2025-01-15T10:30:00Z' }),
  })
  .openapi({
    description: 'GitHub Auth Provider',
    required: [
      'account_id',
      'client_session_lifetime_secs',
      'context',
      'email_verification_method',
      'id',
      'inserted_at',
      'is_default',
      'is_disabled',
      'issuer',
      'name',
      'portal_session_lifetime_secs',
      'updated_at',
    ],
    title: 'GitHubAuthProvider',
  })
  .openapi('GitHubAuthProvider')

const GitHubAuthProviderResponseSchema = z
  .object({ data: GitHubAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single GitHub Auth Provider',
    title: 'GitHubAuthProviderResponse',
    required: [],
  })
  .openapi('GitHubAuthProviderResponse')

const PoolMemberListResponseSchema = z
  .object({
    data: z.array(PoolMemberSchema).exactOptional().openapi({ description: 'Pool member details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for Pool Members',
    title: 'PoolMemberListResponse',
    required: [],
  })
  .openapi('PoolMemberListResponse')

const SophosDeviceListResponseSchema = z
  .object({
    data: z.array(SophosDeviceSchema).exactOptional(),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'SophosDeviceListResponse', required: [] })
  .openapi('SophosDeviceListResponse')

const VersionScalarDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.last_seen_version')
      .openapi({ description: 'version field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is', 'is_not', 'gt', 'gte', 'lt', 'lte']),
    value: z
      .string()
      .max(1024)
      .openapi({
        description: 'Segment-wise version, or @latest for firezone.last_seen_version only',
      }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'version scalar device comparison' })
  .openapi('VersionScalarDeviceComparison')

const SiteUpdateRequestSchema = z
  .object({
    site: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Site Name', example: 'vpc-us-east' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'PATCH/PUT body for updating a Site. All fields are optional; omitted fields keep their current value.',
    required: ['site'],
    title: 'SiteUpdateRequest',
  })
  .openapi('SiteUpdateRequest')

const PoolMemberPatchRequestSchema = z
  .object({
    pool_members: z
      .object({
        add: z
          .array(z.uuid().openapi({ description: 'Client ID' }))
          .exactOptional()
          .openapi({
            description: 'Client IDs to add to the pool',
            example: ['7cb89288-1fb3-433e-a522-2d087e45988d'],
          }),
        remove: z
          .array(z.uuid().openapi({ description: 'Client ID' }))
          .exactOptional()
          .openapi({
            description: 'Client IDs to remove from the pool',
            example: ['cc9f561a-444d-4083-ab38-0abc6cf2314c'],
          }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    deprecated: true,
    description:
      'PATCH body for adding and removing individual pool members. Both\noperations are idempotent, and `remove` is applied before `add`, so a\nClient named in both ends up in the pool.\n',
    required: ['pool_members'],
    title: 'PoolMemberPatchRequest',
  })
  .openapi('PoolMemberPatchRequest')

const SiteListResponseSchema = z
  .object({
    data: z.array(SiteSchema).exactOptional().openapi({ description: 'Site details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Sites',
    title: 'SiteListResponse',
    required: [],
  })
  .openapi('SiteListResponse')

const PolicyListResponseSchema = z
  .object({
    data: z.array(PolicySchema).exactOptional().openapi({ description: 'Policy details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Policies',
    title: 'PolicyListResponse',
    required: [],
  })
  .openapi('PolicyListResponse')

const EmailOTPAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(EmailOTPAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'Email OTP Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Email OTP Auth Providers',
    title: 'EmailOTPAuthProviderListResponse',
    required: [],
  })
  .openapi('EmailOTPAuthProviderListResponse')

const FloatNoValueProviderComparisonSchema = z
  .strictObject({
    field: z
      .literal('iru.device_capacity_gb')
      .openapi({ description: 'float field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['exists', 'does_not_exist']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Omit value or use null for this operator' }),
  })
  .openapi({ required: ['field', 'op'], title: 'float no_value provider comparison' })
  .openapi('FloatNoValueProviderComparison')

const SiteCreateRequestSchema = z
  .object({
    site: z
      .object({ name: z.string().openapi({ description: 'Site Name', example: 'vpc-us-east' }) })
      .openapi({ required: ['name'] }),
  })
  .openapi({
    description: 'POST body for creating a Site',
    required: ['site'],
    title: 'SiteCreateRequest',
  })
  .openapi('SiteCreateRequest')

const ResourceListResponseSchema = z
  .object({
    data: z.array(ResourceSchema).exactOptional().openapi({ description: 'Resource details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple Resources',
    title: 'ResourceListResponse',
    required: [],
  })
  .openapi('ResourceListResponse')

const StringListDeviceComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'firezone.device_serial',
        'firezone.device_uuid',
        'firezone.hostname',
        'firezone.identifier_for_vendor',
        'firezone.last_attested_cert_fingerprint',
        'firezone.last_attested_cert_serial',
        'firezone.last_attested_device_serial',
        'firezone.last_attested_device_uuid',
        'firezone.last_attested_mdm_device_id',
        'firezone.last_seen_remote_ip_location_city',
        'firezone.last_seen_user_agent',
        'firezone.name',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_in', 'is_not_in']),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string list device comparison' })
  .openapi('StringListDeviceComparison')

const StringRegexProviderComparisonSchema = z
  .strictObject({
    field: z
      .enum([
        'defender.computer_dns_name',
        'defender.defender_id',
        'defender.entra_device_id',
        'defender.os_processor',
        'defender.rbac_group_name',
        'defender.version',
        'defender.vm_cloud_provider',
        'defender.vm_id',
        'defender.vm_resource_id',
        'defender.vm_subscription_id',
        'intune.attestation_boot_revision_list_info',
        'intune.attestation_code_integrity_policy',
        'intune.attestation_health_status_mismatch_info',
        'intune.attestation_identity_key',
        'intune.attestation_operating_system_rev_list_info',
        'intune.attestation_pcr0',
        'intune.attestation_pcr_hash_algorithm',
        'intune.attestation_secure_boot_config_policy_fingerprint',
        'intune.device_category_display_name',
        'intune.device_name',
        'intune.eas_device_id',
        'intune.email_address',
        'intune.enrollment_profile_name',
        'intune.entra_device_id',
        'intune.ethernet_mac_address',
        'intune.iccid',
        'intune.imei',
        'intune.intune_id',
        'intune.managed_device_name',
        'intune.manufacturer',
        'intune.meid',
        'intune.model',
        'intune.notes',
        'intune.operating_system',
        'intune.phone_number',
        'intune.serial_number',
        'intune.subscriber_carrier',
        'intune.udid',
        'intune.user_display_name',
        'intune.user_id',
        'intune.user_principal_name',
        'intune.wifi_mac_address',
        'iru.asset_tag',
        'iru.blueprint_id',
        'iru.blueprint_name',
        'iru.device_name',
        'iru.host_name',
        'iru.iru_id',
        'iru.local_hostname',
        'iru.model',
        'iru.model_identifier',
        'iru.model_name',
        'iru.os_build',
        'iru.os_name',
        'iru.serial_number',
        'iru.supplemental_build_version',
        'iru.user_email',
        'iru.user_id',
        'iru.user_name',
        'santa.hostname',
        'santa.machine_model',
        'santa.os_build',
        'santa.primary_user',
        'santa.santa_id',
        'santa.serial_number',
        'santa.temporary_admin_mode_user',
        'sentinelone.account_name',
        'sentinelone.ad_computer_distinguished_name',
        'sentinelone.ad_last_user_distinguished_name',
        'sentinelone.ad_mail',
        'sentinelone.ad_user_principal_name',
        'sentinelone.computer_name',
        'sentinelone.cpu_id',
        'sentinelone.domain',
        'sentinelone.external_id',
        'sentinelone.group_id',
        'sentinelone.group_ip',
        'sentinelone.group_name',
        'sentinelone.last_logged_in_user_name',
        'sentinelone.machine_sid',
        'sentinelone.model_name',
        'sentinelone.os_name',
        'sentinelone.os_username',
        'sentinelone.sentinelone_account_id',
        'sentinelone.sentinelone_id',
        'sentinelone.serial_number',
        'sentinelone.site_id',
        'sentinelone.site_name',
        'sentinelone.storage_name',
        'sentinelone.storage_type',
        'sentinelone.uuid',
        'sophos.associated_person_id',
        'sophos.associated_person_name',
        'sophos.associated_person_via_login',
        'sophos.cloud_instance_id',
        'sophos.group_id',
        'sophos.group_name',
        'sophos.hostname',
        'sophos.os_name',
        'sophos.serial_number',
        'sophos.sophos_id',
      ])
      .openapi({ description: 'string field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['matches', 'does_not_match']),
    rows: z
      .enum(['any', 'all'])
      .default('any')
      .exactOptional()
      .openapi({
        description: 'Match any or every provider row; applies to this leaf independently',
      }),
    value: z.string().max(256).openapi({ description: 'Regular expression; at most 256 bytes' }),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'string regex provider comparison' })
  .openapi('StringRegexProviderComparison')

const Ipv6ListDeviceComparisonSchema = z
  .strictObject({
    field: z
      .literal('firezone.ipv6')
      .openapi({ description: 'ipv6 field; see PolicyPostureNode for platform applicability' }),
    op: z.enum(['is_in_cidr', 'is_not_in_cidr']),
    value: z.array(z.string().max(1024)).min(1).max(100),
  })
  .openapi({ required: ['field', 'op', 'value'], title: 'ipv6 list device comparison' })
  .openapi('Ipv6ListDeviceComparison')

const PostureFieldListResponseSchema = z
  .object({ data: z.array(PostureFieldSchema).openapi({ description: 'Posture Fields' }) })
  .openapi({
    description: 'Response schema for every Posture Field',
    required: ['data'],
    title: 'PostureFieldListResponse',
  })
  .openapi('PostureFieldListResponse')

const FlowLogIngestRequestSchema = z
  .strictObject({ flow_logs: z.array(FlowLogIngestRecordSchema).max(10000) })
  .openapi({
    description: 'A batch of flow-log records for one policy authorization.',
    required: ['flow_logs'],
    title: 'FlowLogIngestRequest',
  })
  .openapi('FlowLogIngestRequest')

const IruDeviceResponseSchema = z
  .object({ data: IruDeviceSchema.exactOptional() })
  .openapi({ title: 'IruDeviceResponse', required: [] })
  .openapi('IruDeviceResponse')

const OIDCAuthProviderResponseSchema = z
  .object({ data: OIDCAuthProviderSchema.exactOptional() })
  .openapi({
    description: 'Response schema for single OIDC Auth Provider',
    title: 'OIDCAuthProviderResponse',
    required: [],
  })
  .openapi('OIDCAuthProviderResponse')

const GitHubAuthProviderListResponseSchema = z
  .object({
    data: z
      .array(GitHubAuthProviderSchema)
      .exactOptional()
      .openapi({ description: 'GitHub Auth Provider details' }),
    metadata: PaginationMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'Response schema for multiple GitHub Auth Providers',
    title: 'GitHubAuthProviderListResponse',
    required: [],
  })
  .openapi('GitHubAuthProviderListResponse')

const AuthorizationSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'List Groups',
  operationId: 'PortalAPI.GroupController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Groups returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Groups with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      directory_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Groups synced from this Directory. Pass an empty string to filter to unsynced (native) Groups only.',
            in: 'query',
            name: 'directory_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entity_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Groups of this entity type',
            example: 'group',
            in: 'query',
            name: 'entity_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create Group',
  operationId: 'PortalAPI.GroupController.create',
  request: {
    body: {
      description: 'Group Attributes',
      content: { 'application/json': { schema: GroupCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsActorIdExternalIdentitiesRoute = createRoute({
  method: 'get',
  path: '/actors/{actor_id}/external_identities',
  tags: ['External Identities'],
  summary: 'List External Identities for an Actor',
  operationId: 'PortalAPI.ExternalIdentityController.index',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit External Identities returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ExternalIdentity List Response',
      content: { 'application/json': { schema: ExternalIdentityListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getClientsIdRoute = createRoute({
  method: 'get',
  path: '/clients/{id}',
  tags: ['Clients'],
  summary: 'Show Client',
  operationId: 'PortalAPI.ClientController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putClientsIdRoute = createRoute({
  method: 'put',
  path: '/clients/{id}',
  tags: ['Clients'],
  summary: 'Update Client',
  operationId: 'PortalAPI.ClientController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Client Attributes',
      content: { 'application/json': { schema: ClientPutRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteClientsIdRoute = createRoute({
  method: 'delete',
  path: '/clients/{id}',
  tags: ['Clients'],
  summary: 'Delete a Client',
  operationId: 'PortalAPI.ClientController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchClientsIdRoute = createRoute({
  method: 'patch',
  path: '/clients/{id}',
  tags: ['Clients'],
  summary: 'Update Client',
  operationId: 'PortalAPI.ClientController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Client Attributes',
      content: { 'application/json': { schema: ClientPutRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSitesSiteIdGatewaysIdRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/gateways/{id}',
  tags: ['Gateways'],
  summary: 'Show Gateway',
  operationId: 'PortalAPI.GatewayController.show',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gateway Response',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putSitesSiteIdGatewaysIdRoute = createRoute({
  method: 'put',
  path: '/sites/{site_id}/gateways/{id}',
  tags: ['Gateways'],
  summary: 'Update a Gateway (rename)',
  description:
    'Renames a Gateway. Gateways otherwise self-register their configuration (name, IP addresses) on first connect and can only be renamed, not fully edited, via this endpoint.\n',
  operationId: 'PortalAPI.GatewayController.update',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Gateway attributes',
      content: { 'application/json': { schema: GatewayUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Gateway Response',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSitesSiteIdGatewaysIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/gateways/{id}',
  tags: ['Gateways'],
  summary: 'Delete a Gateway',
  operationId: 'PortalAPI.GatewayController.delete',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gateway Response',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchSitesSiteIdGatewaysIdRoute = createRoute({
  method: 'patch',
  path: '/sites/{site_id}/gateways/{id}',
  tags: ['Gateways'],
  summary: 'Update a Gateway (rename)',
  description:
    'Renames a Gateway. Gateways otherwise self-register their configuration (name, IP addresses) on first connect and can only be renamed, not fully edited, via this endpoint.\n',
  operationId: 'PortalAPI.GatewayController.update (2)',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Gateway attributes',
      content: { 'application/json': { schema: GatewayUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Gateway Response',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSantaPostureProvidersRoute = createRoute({
  method: 'get',
  path: '/santa_posture_providers',
  tags: ['Santa Posture Providers'],
  summary: 'List Santa posture providers',
  operationId: 'PortalAPI.SantaPostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Santa posture provider response',
      content: { 'application/json': { schema: SantaPostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGithubAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/github_auth_providers/{id}',
  tags: ['GitHub Auth Providers'],
  summary: 'Show GitHub Auth Provider',
  operationId: 'PortalAPI.GitHubAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'GitHub Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'GitHub Auth Provider Response',
      content: { 'application/json': { schema: GitHubAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getPostureFieldsRoute = createRoute({
  method: 'get',
  path: '/posture_fields',
  tags: ['Policies'],
  summary: 'List Posture Fields',
  description:
    "Lists every field a Policy's `postures` expression can test, with its type, operators, and platforms. Filter by `provider` to keep the response small.\n\nOne node of a Policy's device posture expression. A node has exactly one\nof these shapes:\n\n* `and`: a non-empty list of nodes that must all hold.\n* `or`: a non-empty list of nodes of which at least one must hold.\n* `not`: a node that must not hold.\n* a leaf: a `field`, an `op`, and for most operators a `value`.\n\nA leaf's `field` is `<provider>.<attribute>`, such as\n`intune.compliance_state` or `firezone.last_seen_version`. The provider\nis one of `firezone` (the connecting device's own record), `intune`,\n`iru`, `defender`, `santa`, `sentinelone` or `sophos`. The attribute is\none of that provider's synced device attributes. Every synced provider also has a\nboolean `enrolled` that is true when the provider knows the device.\n\nThe attribute's type decides which operators apply and what `value`\nmust be:\n\n* strings: `is`, `is_not`, `is_in`, `is_not_in`, `contains`,\n  `does_not_contain`, `starts_with`, `ends_with`, `matches`,\n  `does_not_match`. Comparisons ignore case. `is_in` and `is_not_in`\n  take a list of strings. `matches` and `does_not_match` take a regular\n  expression.\n* booleans: `is` with `true` or `false`.\n* numbers: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.\n* versions: `is`, `is_not`, `gt`, `gte`, `lt`, `lte`, compared segment\n  by segment, so `14.4` equals `14.4.0`.\n* timestamps: `before` and `after` with an ISO 8601 datetime such as\n  `2026-01-01T00:00:00Z`; `within_last` and `not_within_last` with an\n  ISO 8601 duration such as `PT24H` or `P30D`. A date-only attribute\n  counts as the start of that day in UTC.\n* IP addresses: `is_in_cidr` and `is_not_in_cidr` with a list of CIDRs.\n  `firezone.ipv4` takes IPv4 CIDRs only and `firezone.ipv6` IPv6 only.\n* lists of strings: `contains`, `does_not_contain`, `contains_any_of`,\n  `contains_all_of`, `is_empty`, `is_not_empty`.\n* JSON attributes: `is_empty`, `is_not_empty`.\n\nThe value `@latest` on `firezone.last_seen_version` stands for the newest\nClient release for the device's platform.\n\n`enum_string` uses the string operators; `integer` and `float` use the\nnumeric operators. `string_array` values use a single string for `contains`\nand `does_not_contain`, or a non-empty string list for `contains_any_of`\nand `contains_all_of`.\n\nEvery attribute also accepts `exists` and `does_not_exist`. These and\n`is_empty` / `is_not_empty` take no value: omit `value` or set it to null.\nMissing attributes fail every operator except `does_not_exist`, including\nnegative operators such as `is_not`. A missing provider is evaluated as\none empty row. Its synthetic `enrolled` field is false, so `enrolled is\nfalse` can explicitly match an unenrolled device. `not` negates the\nresult and can also match missing data; use a positive `enrolled is true`\ncheck when enrollment is required.\n\nLeaves that do not apply to the device's platform are removed before\nevaluation, including inside `or` and `not`. An expression with no\napplicable leaves passes. If the platform is unknown, no leaves are\nremoved. Each field lists the platforms it applies to.\nProvider `os_up_to_date` fields are computed from known OS releases;\nthey are not raw provider attributes.\n\nWhen a device matches more than one record of a provider, a leaf holds\nwhen any record satisfies it. Set `rows` to `all` to require every\nrecord. Different leaves may match different provider rows; `and` does\nnot require one row to satisfy all leaves. `rows` is not allowed for\n`firezone`, which always describes exactly one connecting device.\n\nExpressions allow at most 10 nested boolean levels and 100 leaves.\nList values contain 1–100 items; strings are at most 1024 bytes and\nregular expressions at most 256 bytes. Unknown fields, incompatible\noperators, invalid values, and exceeded limits return HTTP 422 with\na path in `validation_errors.postures`.\n",
  operationId: 'PortalAPI.PostureFieldController.index',
  request: {
    query: z.object({
      provider: z
        .enum(['firezone', 'intune', 'iru', 'defender', 'santa', 'sentinelone', 'sophos'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the fields of this provider',
            in: 'query',
            name: 'provider',
            required: false,
            schema: {
              enum: ['firezone', 'intune', 'iru', 'defender', 'santa', 'sentinelone', 'sophos'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Posture Field Response',
      content: { 'application/json': { schema: PostureFieldListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOidcAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/oidc_auth_providers',
  tags: ['OIDC Auth Providers'],
  summary: 'List OIDC Auth Providers',
  operationId: 'PortalAPI.OIDCAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit OIDC Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to OIDC Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OIDC Auth Provider Response',
      content: { 'application/json': { schema: OIDCAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSitesSiteIdGatewayTokensIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/gateway_tokens/{id}',
  tags: ['Gateway Tokens'],
  summary: 'Delete a Gateway Token',
  operationId: 'PortalAPI.GatewayTokenController.delete',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Token ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted Token Response',
      content: { 'application/json': { schema: DeletedGatewayTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSentinelonePostureProvidersRoute = createRoute({
  method: 'get',
  path: '/sentinelone_posture_providers',
  tags: ['SentinelOne Posture Providers'],
  summary: 'List SentinelOne posture providers',
  operationId: 'PortalAPI.SentinelOnePostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SentinelOne posture provider response',
      content: { 'application/json': { schema: SentinelOnePostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsIdRoute = createRoute({
  method: 'get',
  path: '/actors/{id}',
  tags: ['Actors'],
  summary: 'Show Actor',
  operationId: 'PortalAPI.ActorController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ActorResponse',
      content: { 'application/json': { schema: ActorResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putActorsIdRoute = createRoute({
  method: 'put',
  path: '/actors/{id}',
  tags: ['Actors'],
  summary: 'Update an Actor',
  description:
    "Updates an Actor.\n\n**Warning: changing an Actor's email signs them out and unlinks their identity providers.**\n\nIf the `email` field is changed to a different address, Firezone will:\n\n- Unlink every identity provider (Google, Okta, Entra, etc.) connected to this Actor.\n- End all active sessions for this Actor, both in the admin portal and on\n  connected Client devices, no matter how the Actor signed in (identity\n  provider, email OTP, or username and password). The user will be signed\n  out immediately.\n\nThe Actor will need to sign in again through their identity provider, which\nre-links it under the new email.\n\nEmail comparison ignores case and surrounding whitespace, so changes like\n`User@Example.com` → `user@example.com` are not treated as a real change\nand will not unlink identities.\n\n**Setting `is_disabled` to `true` immediately revokes all of the Actor's\nactive Client tokens and portal sessions.** An Actor cannot disable itself.\n\nAdmins and API clients can only be changed in the portal, and users can only\nbe promoted to admin there.\n",
  operationId: 'PortalAPI.ActorController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Actor attributes',
      content: { 'application/json': { schema: ActorUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'ActorResponse',
      content: { 'application/json': { schema: ActorResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteActorsIdRoute = createRoute({
  method: 'delete',
  path: '/actors/{id}',
  tags: ['Actors'],
  summary: 'Delete an Actor',
  description: 'Deletes an Actor. Admins and API clients can only be deleted in the portal.',
  operationId: 'PortalAPI.ActorController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ActorResponse',
      content: { 'application/json': { schema: ActorResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchActorsIdRoute = createRoute({
  method: 'patch',
  path: '/actors/{id}',
  tags: ['Actors'],
  summary: 'Update an Actor',
  description:
    "Updates an Actor.\n\n**Warning: changing an Actor's email signs them out and unlinks their identity providers.**\n\nIf the `email` field is changed to a different address, Firezone will:\n\n- Unlink every identity provider (Google, Okta, Entra, etc.) connected to this Actor.\n- End all active sessions for this Actor, both in the admin portal and on\n  connected Client devices, no matter how the Actor signed in (identity\n  provider, email OTP, or username and password). The user will be signed\n  out immediately.\n\nThe Actor will need to sign in again through their identity provider, which\nre-links it under the new email.\n\nEmail comparison ignores case and surrounding whitespace, so changes like\n`User@Example.com` → `user@example.com` are not treated as a real change\nand will not unlink identities.\n\n**Setting `is_disabled` to `true` immediately revokes all of the Actor's\nactive Client tokens and portal sessions.** An Actor cannot disable itself.\n\nAdmins and API clients can only be changed in the portal, and users can only\nbe promoted to admin there.\n",
  operationId: 'PortalAPI.ActorController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Actor attributes',
      content: { 'application/json': { schema: ActorUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'ActorResponse',
      content: { 'application/json': { schema: ActorResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putClientsIdVerifyRoute = createRoute({
  method: 'put',
  path: '/clients/{id}/verify',
  tags: ['Clients'],
  summary: 'Verify Client',
  operationId: 'PortalAPI.ClientController.verify',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsActorIdClientTokensRoute = createRoute({
  method: 'get',
  path: '/actors/{actor_id}/client_tokens',
  tags: ['Client Tokens'],
  summary: 'List Client Tokens for service_account, account_user, or account_admin_user actors',
  operationId: 'PortalAPI.ClientTokenController.index',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Client Tokens returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Token List Response',
      content: { 'application/json': { schema: ClientTokenListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postActorsActorIdClientTokensRoute = createRoute({
  method: 'post',
  path: '/actors/{actor_id}/client_tokens',
  tags: ['Client Tokens'],
  summary: 'Create a Client Token for a Service Account',
  operationId: 'PortalAPI.ClientTokenController.create',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Client Token Attributes',
      content: { 'application/json': { schema: ClientTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Client Token Response',
      content: { 'application/json': { schema: ClientTokenCreateResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteActorsActorIdClientTokensRoute = createRoute({
  method: 'delete',
  path: '/actors/{actor_id}/client_tokens',
  tags: ['Client Tokens'],
  summary:
    'Delete all Client Tokens for service_account, account_user, or account_admin_user actors',
  operationId: 'PortalAPI.ClientTokenController.delete_all',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted Client Tokens Response',
      content: { 'application/json': { schema: DeletedClientTokensResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsActorIdClientTokensIdRoute = createRoute({
  method: 'get',
  path: '/actors/{actor_id}/client_tokens/{id}',
  tags: ['Client Tokens'],
  summary: 'Show a Client Token for service_account, account_user, or account_admin_user actors',
  operationId: 'PortalAPI.ClientTokenController.show',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client Token ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Token Response',
      content: { 'application/json': { schema: ClientTokenShowResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteActorsActorIdClientTokensIdRoute = createRoute({
  method: 'delete',
  path: '/actors/{actor_id}/client_tokens/{id}',
  tags: ['Client Tokens'],
  summary: 'Delete a Client Token',
  operationId: 'PortalAPI.ClientTokenController.delete',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client Token ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted Client Token Response',
      content: { 'application/json': { schema: DeletedClientTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEmailOtpAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/email_otp_auth_providers',
  tags: ['Email OTP Auth Providers'],
  summary: 'List Email OTP Auth Providers',
  operationId: 'PortalAPI.EmailOTPAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Email OTP Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Email OTP Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Email OTP Auth Provider Response',
      content: { 'application/json': { schema: EmailOTPAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEntraAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/entra_auth_providers',
  tags: ['Entra Auth Providers'],
  summary: 'List Entra Auth Providers',
  operationId: 'PortalAPI.EntraAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Entra Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Entra Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entra Auth Provider Response',
      content: { 'application/json': { schema: EntraAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIruPostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/iru_posture_providers/{id}',
  tags: ['Iru Posture Providers'],
  summary: 'Show an Iru posture provider',
  operationId: 'PortalAPI.IruPostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Iru posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Iru posture provider response',
      content: { 'application/json': { schema: IruPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putIruPostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/iru_posture_providers/{id}',
  tags: ['Iru Posture Providers'],
  summary: 'Update an Iru posture provider',
  description:
    'Renames, enables, or disables an Iru posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Iru provider is left, `iru.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.IruPostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Iru posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Iru posture provider attributes',
      content: { 'application/json': { schema: IruPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Iru posture provider response',
      content: { 'application/json': { schema: IruPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteIruPostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/iru_posture_providers/{id}',
  tags: ['Iru Posture Providers'],
  summary: 'Delete an Iru posture provider',
  description:
    'Deletes an Iru posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled Iru\nprovider is left, `iru.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.IruPostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Iru posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Iru posture provider response',
      content: { 'application/json': { schema: IruPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchIruPostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/iru_posture_providers/{id}',
  tags: ['Iru Posture Providers'],
  summary: 'Update an Iru posture provider',
  description:
    'Renames, enables, or disables an Iru posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Iru provider is left, `iru.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.IruPostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Iru posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Iru posture provider attributes',
      content: { 'application/json': { schema: IruPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Iru posture provider response',
      content: { 'application/json': { schema: IruPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSitesRoute = createRoute({
  method: 'get',
  path: '/sites',
  tags: ['Sites'],
  summary: 'List Sites',
  operationId: 'PortalAPI.SiteController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Sites returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the Site with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postSitesRoute = createRoute({
  method: 'post',
  path: '/sites',
  tags: ['Sites'],
  summary: 'Create Site',
  operationId: 'PortalAPI.SiteController.create',
  request: {
    body: {
      description: 'Site Attributes',
      content: { 'application/json': { schema: SiteCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSitesIdRoute = createRoute({
  method: 'get',
  path: '/sites/{id}',
  tags: ['Sites'],
  summary: 'Show Site',
  operationId: 'PortalAPI.SiteController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putSitesIdRoute = createRoute({
  method: 'put',
  path: '/sites/{id}',
  tags: ['Sites'],
  summary: 'Update a Site',
  operationId: 'PortalAPI.SiteController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Site Attributes',
      content: { 'application/json': { schema: SiteUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSitesIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{id}',
  tags: ['Sites'],
  summary: 'Delete a Site',
  description:
    "Deletes a Site. Deleting is not blocked when the Site still has Gateways or Resources.\n\nThe Site's Gateways, Gateway tokens, and Resources are deleted with it. Every Policy for those Resources is deleted too, and Clients lose access to them right away. The system-managed Internet Site cannot be deleted.\n",
  operationId: 'PortalAPI.SiteController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchSitesIdRoute = createRoute({
  method: 'patch',
  path: '/sites/{id}',
  tags: ['Sites'],
  summary: 'Update a Site',
  operationId: 'PortalAPI.SiteController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Site Attributes',
      content: { 'application/json': { schema: SiteUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Site Response',
      content: { 'application/json': { schema: SiteResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGoogleAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/google_auth_providers',
  tags: ['Google Auth Providers'],
  summary: 'List Google Auth Providers',
  operationId: 'PortalAPI.GoogleAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Google Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Google Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Google Auth Provider Response',
      content: { 'application/json': { schema: GoogleAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getPoliciesIdRoute = createRoute({
  method: 'get',
  path: '/policies/{id}',
  tags: ['Policies'],
  summary: 'Show Policy',
  operationId: 'PortalAPI.PolicyController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Policy ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putPoliciesIdRoute = createRoute({
  method: 'put',
  path: '/policies/{id}',
  tags: ['Policies'],
  summary: 'Update a Policy',
  description:
    'Updates a Policy.\n\nA Policy is enabled or disabled through the `is_disabled` field. Disabling a Policy stops it granting access without deleting it.\n\nSet `policy.postures` to replace the entire device posture expression.\nOmit it to preserve existing postures. Send `{"policy":{"postures":null}}`\nto remove the posture requirement; clearing is allowed even after an\naccount downgrade. Other policy attributes, including `conditions`, are\nunchanged when omitted. Conditions and postures must both hold.\n\nNon-empty `conditions` require the `policy_conditions` entitlement or\nreturn 403. Sending an empty list to remove them is allowed even after\nan account downgrade.\n\nNon-null postures require the `device_posture` entitlement (Enterprise)\nor return 403. Invalid expressions return 422 with a path in\n`validation_errors.postures`. See `PolicyPostureNode` for the expression\ngrammar, complete field catalog, operator types, platform behavior, and\nlimits. `GET /posture_fields` lists the same fields as structured data.\nChanging postures revokes this policy\'s active authorizations,\ninterrupting affected connections until they are reauthorized.\n',
  operationId: 'PortalAPI.PolicyController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Policy ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Policy Attributes',
      content: { 'application/json': { schema: PolicyUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deletePoliciesIdRoute = createRoute({
  method: 'delete',
  path: '/policies/{id}',
  tags: ['Policies'],
  summary: 'Delete a Policy',
  operationId: 'PortalAPI.PolicyController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Policy ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchPoliciesIdRoute = createRoute({
  method: 'patch',
  path: '/policies/{id}',
  tags: ['Policies'],
  summary: 'Update a Policy',
  description:
    'Updates a Policy.\n\nA Policy is enabled or disabled through the `is_disabled` field. Disabling a Policy stops it granting access without deleting it.\n\nSet `policy.postures` to replace the entire device posture expression.\nOmit it to preserve existing postures. Send `{"policy":{"postures":null}}`\nto remove the posture requirement; clearing is allowed even after an\naccount downgrade. Other policy attributes, including `conditions`, are\nunchanged when omitted. Conditions and postures must both hold.\n\nNon-empty `conditions` require the `policy_conditions` entitlement or\nreturn 403. Sending an empty list to remove them is allowed even after\nan account downgrade.\n\nNon-null postures require the `device_posture` entitlement (Enterprise)\nor return 403. Invalid expressions return 422 with a path in\n`validation_errors.postures`. See `PolicyPostureNode` for the expression\ngrammar, complete field catalog, operator types, platform behavior, and\nlimits. `GET /posture_fields` lists the same fields as structured data.\nChanging postures revokes this policy\'s active authorizations,\ninterrupting affected connections until they are reauthorized.\n',
  operationId: 'PortalAPI.PolicyController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Policy ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Policy Attributes',
      content: { 'application/json': { schema: PolicyUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIntunePostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/intune_posture_providers/{id}',
  tags: ['Intune Posture Providers'],
  summary: 'Show an Intune posture provider',
  operationId: 'PortalAPI.IntunePostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Intune posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Intune posture provider response',
      content: { 'application/json': { schema: IntunePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putIntunePostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/intune_posture_providers/{id}',
  tags: ['Intune Posture Providers'],
  summary: 'Update an Intune posture provider',
  description:
    'Renames, enables, or disables an Intune posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Intune provider is left, `intune.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.IntunePostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Intune posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Intune posture provider attributes',
      content: { 'application/json': { schema: IntunePostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Intune posture provider response',
      content: { 'application/json': { schema: IntunePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteIntunePostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/intune_posture_providers/{id}',
  tags: ['Intune Posture Providers'],
  summary: 'Delete an Intune posture provider',
  description:
    'Deletes an Intune posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled Intune\nprovider is left, `intune.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.IntunePostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Intune posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Intune posture provider response',
      content: { 'application/json': { schema: IntunePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchIntunePostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/intune_posture_providers/{id}',
  tags: ['Intune Posture Providers'],
  summary: 'Update an Intune posture provider',
  description:
    'Renames, enables, or disables an Intune posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Intune provider is left, `intune.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.IntunePostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Intune posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Intune posture provider attributes',
      content: { 'application/json': { schema: IntunePostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Intune posture provider response',
      content: { 'application/json': { schema: IntunePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getX509AuthProviderRoute = createRoute({
  method: 'get',
  path: '/x509_auth_provider',
  tags: ['X.509 Auth Providers'],
  summary: 'Show X.509 Auth Provider',
  operationId: 'PortalAPI.X509AuthProviderController.show',
  responses: {
    200: {
      description: 'X.509 Auth Provider Response',
      content: { 'application/json': { schema: X509AuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getResourcesRoute = createRoute({
  method: 'get',
  path: '/resources',
  tags: ['Resources'],
  summary: 'List Resources',
  operationId: 'PortalAPI.ResourceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Resources returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Resources with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Resources of this type: cidr, ip, dns, or device_pool.',
            example: 'dns',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      site_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Resources connected to this Site',
            in: 'query',
            name: 'site_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Resources with this exact address',
            in: 'query',
            name: 'address',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ip_stack: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Resources with this exact ip_stack',
            example: 'dual',
            in: 'query',
            name: 'ip_stack',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceListResponseSchema,
          examples: {
            resources: {
              summary: 'An IP Resource and a device pool',
              value: {
                data: [
                  {
                    address: '10.0.0.10',
                    address_description: 'Production Database',
                    filters: [{ ports: ['5432'], protocol: 'tcp' }],
                    id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                    name: 'Prod DB',
                    site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                    type: 'ip',
                  },
                  {
                    address: null,
                    address_description: null,
                    device_membership_criteria: {
                      device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                    },
                    filters: [],
                    id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                    name: 'My Devices',
                    type: 'device_pool',
                  },
                ],
                metadata: { count: 2, limit: 10, next_page: null, prev_page: null },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postResourcesRoute = createRoute({
  method: 'post',
  path: '/resources',
  tags: ['Resources'],
  summary: 'Create Resource',
  operationId: 'PortalAPI.ResourceController.create',
  request: {
    body: {
      description: 'Resource Attributes',
      content: {
        'application/json': {
          schema: ResourceCreateRequestSchema,
          examples: {
            actor_group: {
              summary: 'Device pool of the Clients of every Actor in one Group',
              value: {
                resource: {
                  device_membership_criteria: {
                    actor_group: {
                      field: 'id',
                      op: 'eq',
                      value: 'b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c',
                    },
                  },
                  name: 'Engineering Devices',
                  type: 'device_pool',
                },
              },
            },
            all_devices: {
              summary: 'Device pool of every Client in the Account',
              value: {
                resource: {
                  device_membership_criteria: {
                    device: { field: 'account_id', op: 'eq', value: { subject: 'account_id' } },
                  },
                  name: 'All Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                resource: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
            listed_devices: {
              summary: 'Device pool of the Clients named',
              value: {
                resource: {
                  device_membership_criteria: {
                    device: {
                      field: 'id',
                      op: 'in',
                      value: [
                        '7cb89288-1fb3-433e-a522-2d087e45988d',
                        'cc9f561a-444d-4083-ab38-0abc6cf2314c',
                      ],
                    },
                  },
                  name: 'Build Machines',
                  type: 'device_pool',
                },
              },
            },
            own_devices: {
              summary: "Device pool of the asking Actor's own Clients",
              value: {
                resource: {
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          examples: {
            device_pool: {
              summary: 'Device pool',
              value: {
                data: {
                  address: null,
                  address_description: null,
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  filters: [],
                  id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                data: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsActorIdExternalIdentitiesIdRoute = createRoute({
  method: 'get',
  path: '/actors/{actor_id}/external_identities/{id}',
  tags: ['External Identities'],
  summary: 'Show External Identity',
  operationId: 'PortalAPI.ExternalIdentityController.show',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'External Identity ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ExternalIdentity Response',
      content: { 'application/json': { schema: ExternalIdentityResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteActorsActorIdExternalIdentitiesIdRoute = createRoute({
  method: 'delete',
  path: '/actors/{actor_id}/external_identities/{id}',
  tags: ['External Identities'],
  summary: 'Delete an External Identity',
  description:
    'Deletes an External Identity. Identities of admins can only be deleted in the portal.',
  operationId: 'PortalAPI.ExternalIdentityController.delete',
  request: {
    params: z.object({
      actor_id: z
        .string()
        .openapi({
          param: {
            description: 'Actor ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'actor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'External Identity ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ExternalIdentity Response',
      content: { 'application/json': { schema: ExternalIdentityResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSentineloneDevicesRoute = createRoute({
  method: 'get',
  path: '/sentinelone_devices',
  tags: ['SentinelOne Devices'],
  summary: 'List synced SentinelOne devices',
  operationId: 'PortalAPI.SentinelOneDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SentinelOne device response',
      content: { 'application/json': { schema: SentinelOneDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOktaAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/okta_auth_providers',
  tags: ['Okta Auth Providers'],
  summary: 'List Okta Auth Providers',
  operationId: 'PortalAPI.OktaAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Okta Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Okta Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Okta Auth Provider Response',
      content: { 'application/json': { schema: OktaAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getDefenderDevicesIdRoute = createRoute({
  method: 'get',
  path: '/defender_devices/{id}',
  tags: ['Defender Devices'],
  summary: 'Show a synced Defender device',
  operationId: 'PortalAPI.DefenderDeviceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Synced Defender device ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Defender device response',
      content: { 'application/json': { schema: DefenderDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIntuneDevicesIdRoute = createRoute({
  method: 'get',
  path: '/intune_devices/{id}',
  tags: ['Intune Devices'],
  summary: 'Show a synced Intune device',
  operationId: 'PortalAPI.IntuneDeviceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Synced Intune device ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Intune device response',
      content: { 'application/json': { schema: IntuneDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSophosPostureProvidersRoute = createRoute({
  method: 'get',
  path: '/sophos_posture_providers',
  tags: ['Sophos Posture Providers'],
  summary: 'List Sophos posture providers',
  operationId: 'PortalAPI.SophosPostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sophos posture provider response',
      content: { 'application/json': { schema: SophosPostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getDefenderPostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/defender_posture_providers/{id}',
  tags: ['Defender Posture Providers'],
  summary: 'Show a Defender posture provider',
  operationId: 'PortalAPI.DefenderPostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defender posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Defender posture provider response',
      content: { 'application/json': { schema: DefenderPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putDefenderPostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/defender_posture_providers/{id}',
  tags: ['Defender Posture Providers'],
  summary: 'Update a Defender posture provider',
  description:
    'Renames, enables, or disables a Defender posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Defender provider is left, `defender.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.DefenderPostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defender posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Defender posture provider attributes',
      content: { 'application/json': { schema: DefenderPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Defender posture provider response',
      content: { 'application/json': { schema: DefenderPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteDefenderPostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/defender_posture_providers/{id}',
  tags: ['Defender Posture Providers'],
  summary: 'Delete a Defender posture provider',
  description:
    'Deletes a Defender posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled Defender\nprovider is left, `defender.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.DefenderPostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defender posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Defender posture provider response',
      content: { 'application/json': { schema: DefenderPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchDefenderPostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/defender_posture_providers/{id}',
  tags: ['Defender Posture Providers'],
  summary: 'Update a Defender posture provider',
  description:
    'Renames, enables, or disables a Defender posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Defender provider is left, `defender.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.DefenderPostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Defender posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Defender posture provider attributes',
      content: { 'application/json': { schema: DefenderPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Defender posture provider response',
      content: { 'application/json': { schema: DefenderPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIntunePostureProvidersRoute = createRoute({
  method: 'get',
  path: '/intune_posture_providers',
  tags: ['Intune Posture Providers'],
  summary: 'List Intune posture providers',
  operationId: 'PortalAPI.IntunePostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Intune posture provider response',
      content: { 'application/json': { schema: IntunePostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGroupsGroupIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/groups/{group_id}/memberships',
  tags: ['Memberships'],
  summary: 'List Memberships',
  description:
    'Lists the Actors in a Group.\n\nThe built-in Everyone Group has no explicit memberships. For it, this lists every user and admin Actor in the account, which is who the Group grants access to. Service accounts and API clients are never members of the Everyone Group.\n',
  operationId: 'PortalAPI.MembershipController.index',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Memberships returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Membership Response',
      content: { 'application/json': { schema: MembershipListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putGroupsGroupIdMembershipsRoute = createRoute({
  method: 'put',
  path: '/groups/{group_id}/memberships',
  tags: ['Memberships'],
  summary: 'Update Memberships',
  description:
    "Replaces the Group's entire membership list with the given Actors.\n\nAny Actor not named in the request is removed from the Group. To add or\nremove individual Actors without disturbing the rest, use `PATCH`.\n\nMembers that are not changing keep their membership rows, so a replace that\nleaves the list untouched is a no-op rather than a full rewrite.\n\nRepeating an Actor in the request body is not an error; the list is\ndeduplicated. `actor_ids` in the response is sorted, not returned in\nrequest order.\n",
  operationId: 'PortalAPI.MembershipController.update_put',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Membership Attributes',
      content: { 'application/json': { schema: MembershipPutRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Membership Response',
      content: { 'application/json': { schema: MembershipResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchGroupsGroupIdMembershipsRoute = createRoute({
  method: 'patch',
  path: '/groups/{group_id}/memberships',
  tags: ['Memberships'],
  summary: 'Update an Membership',
  description:
    "Adds and/or removes individual Actors, leaving every other member of the\nGroup untouched.\n\nBoth operations are idempotent: adding an Actor already in the Group and\nremoving one that isn't are both no-ops. `remove` is applied before `add`,\nso an Actor named in both ends up in the Group. Retrying a request that may\nalready have been applied is therefore safe.\n\nRepeating an Actor within `add` or `remove` is not an error; both lists are\ndeduplicated. `actor_ids` in the response is sorted.\n",
  operationId: 'PortalAPI.MembershipController.update_patch',
  request: {
    params: z.object({
      group_id: z
        .string()
        .openapi({
          param: {
            description: 'ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'group_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Membership Attributes',
      content: { 'application/json': { schema: MembershipPatchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Membership Response',
      content: { 'application/json': { schema: MembershipResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGoogleDirectoriesRoute = createRoute({
  method: 'get',
  path: '/google_directories',
  tags: ['Google Directories'],
  summary: 'List Google Directories',
  operationId: 'PortalAPI.GoogleDirectoryController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Google Directories returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Google Directories with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Google Directory Response',
      content: { 'application/json': { schema: GoogleDirectoryListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSentineloneDevicesSentineloneAgentRoute = createRoute({
  method: 'get',
  path: '/sentinelone_devices/{sentinelone_agent}',
  tags: ['SentinelOne Devices'],
  summary: 'Show a synced SentinelOne device',
  operationId: 'PortalAPI.SentinelOneDeviceController.show',
  request: {
    params: z.object({
      sentinelone_agent: z
        .string()
        .openapi({
          param: {
            description: 'Synced SentinelOne agent UUID',
            in: 'path',
            name: 'sentinelone_agent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SentinelOne device response',
      content: { 'application/json': { schema: SentinelOneDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSantaPostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/santa_posture_providers/{id}',
  tags: ['Santa Posture Providers'],
  summary: 'Show a Santa posture provider',
  operationId: 'PortalAPI.SantaPostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Santa posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Santa posture provider response',
      content: { 'application/json': { schema: SantaPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putSantaPostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/santa_posture_providers/{id}',
  tags: ['Santa Posture Providers'],
  summary: 'Update a Santa posture provider',
  description:
    'Renames, enables, or disables a Santa posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Santa provider is left, `santa.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SantaPostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Santa posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Santa posture provider attributes',
      content: { 'application/json': { schema: SantaPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Santa posture provider response',
      content: { 'application/json': { schema: SantaPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSantaPostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/santa_posture_providers/{id}',
  tags: ['Santa Posture Providers'],
  summary: 'Delete a Santa posture provider',
  description:
    'Deletes a Santa posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled Santa\nprovider is left, `santa.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.SantaPostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Santa posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Santa posture provider response',
      content: { 'application/json': { schema: SantaPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchSantaPostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/santa_posture_providers/{id}',
  tags: ['Santa Posture Providers'],
  summary: 'Update a Santa posture provider',
  description:
    'Renames, enables, or disables a Santa posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Santa provider is left, `santa.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SantaPostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Santa posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Santa posture provider attributes',
      content: { 'application/json': { schema: SantaPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Santa posture provider response',
      content: { 'application/json': { schema: SantaPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGoogleDirectoriesIdRoute = createRoute({
  method: 'get',
  path: '/google_directories/{id}',
  tags: ['Google Directories'],
  summary: 'Show Google Directory',
  operationId: 'PortalAPI.GoogleDirectoryController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Google Directory ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Google Directory Response',
      content: { 'application/json': { schema: GoogleDirectoryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSantaDevicesRoute = createRoute({
  method: 'get',
  path: '/santa_devices',
  tags: ['Santa Devices'],
  summary: 'List synced Santa devices',
  operationId: 'PortalAPI.SantaDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Santa device response',
      content: { 'application/json': { schema: SantaDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putClientsIdUnverifyRoute = createRoute({
  method: 'put',
  path: '/clients/{id}/unverify',
  tags: ['Clients'],
  summary: 'Unverify Client',
  operationId: 'PortalAPI.ClientController.unverify',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getResourcesIdRoute = createRoute({
  method: 'get',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Show Resource',
  operationId: 'PortalAPI.ResourceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          examples: {
            device_pool: {
              summary: 'Device pool',
              value: {
                data: {
                  address: null,
                  address_description: null,
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  filters: [],
                  id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                data: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putResourcesIdRoute = createRoute({
  method: 'put',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Update Resource',
  operationId: 'PortalAPI.ResourceController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Attributes',
      content: {
        'application/json': {
          schema: ResourceUpdateRequestSchema,
          examples: {
            convert_to_device_pool: {
              summary: 'Convert a Resource to a device pool',
              value: {
                resource: {
                  device_membership_criteria: {
                    actor_group: {
                      field: 'id',
                      op: 'eq',
                      value: 'b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c',
                    },
                  },
                  type: 'device_pool',
                },
              },
            },
            rename: {
              summary: 'Rename a Resource',
              value: { resource: { name: 'Prod DB (primary)' } },
            },
            set_pool_members: {
              summary: 'Replace the Clients a device pool names',
              value: {
                resource: {
                  device_membership_criteria: {
                    device: {
                      field: 'id',
                      op: 'in',
                      value: [
                        '7cb89288-1fb3-433e-a522-2d087e45988d',
                        'cc9f561a-444d-4083-ab38-0abc6cf2314c',
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          examples: {
            device_pool: {
              summary: 'Device pool',
              value: {
                data: {
                  address: null,
                  address_description: null,
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  filters: [],
                  id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                data: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteResourcesIdRoute = createRoute({
  method: 'delete',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Delete Resource',
  description:
    'Deletes a Resource. Deleting is not blocked when Policies still use the Resource.\n\nEvery Policy for the Resource is deleted with it, and Clients lose access to the Resource right away. Use `GET /policies?resource_id=...` first to see which Policies will be deleted. The Internet Resource cannot be deleted.\n',
  operationId: 'PortalAPI.ResourceController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          examples: {
            device_pool: {
              summary: 'Device pool',
              value: {
                data: {
                  address: null,
                  address_description: null,
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  filters: [],
                  id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                data: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchResourcesIdRoute = createRoute({
  method: 'patch',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Update Resource',
  operationId: 'PortalAPI.ResourceController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Resource Attributes',
      content: {
        'application/json': {
          schema: ResourceUpdateRequestSchema,
          examples: {
            convert_to_device_pool: {
              summary: 'Convert a Resource to a device pool',
              value: {
                resource: {
                  device_membership_criteria: {
                    actor_group: {
                      field: 'id',
                      op: 'eq',
                      value: 'b3a1c6e2-5f4d-4e7a-9c8b-1d2e3f4a5b6c',
                    },
                  },
                  type: 'device_pool',
                },
              },
            },
            rename: {
              summary: 'Rename a Resource',
              value: { resource: { name: 'Prod DB (primary)' } },
            },
            set_pool_members: {
              summary: 'Replace the Clients a device pool names',
              value: {
                resource: {
                  device_membership_criteria: {
                    device: {
                      field: 'id',
                      op: 'in',
                      value: [
                        '7cb89288-1fb3-433e-a522-2d087e45988d',
                        'cc9f561a-444d-4083-ab38-0abc6cf2314c',
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Resource Response',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          examples: {
            device_pool: {
              summary: 'Device pool',
              value: {
                data: {
                  address: null,
                  address_description: null,
                  device_membership_criteria: {
                    device: { field: 'actor_id', op: 'eq', value: { subject: 'actor_id' } },
                  },
                  filters: [],
                  id: '5f0d3c1a-8e2b-4b7d-9a6c-3e4f5a6b7c8d',
                  name: 'My Devices',
                  type: 'device_pool',
                },
              },
            },
            ip: {
              summary: 'IP Resource',
              value: {
                data: {
                  address: '10.0.0.10',
                  address_description: 'Production Database',
                  filters: [{ ports: ['5432'], protocol: 'tcp' }],
                  id: '42a7f82f-831a-4a9d-8f17-c66c2bb6e205',
                  name: 'Prod DB',
                  site_id: '0642e09d-b3a2-47e4-9cd1-c2195faeeb67',
                  type: 'ip',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEntraDirectoriesRoute = createRoute({
  method: 'get',
  path: '/entra_directories',
  tags: ['Entra Directories'],
  summary: 'List Entra Directories',
  operationId: 'PortalAPI.EntraDirectoryController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Entra Directories returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Entra Directories with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entra Directory Response',
      content: { 'application/json': { schema: EntraDirectoryListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEntraAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/entra_auth_providers/{id}',
  tags: ['Entra Auth Providers'],
  summary: 'Show Entra Auth Provider',
  operationId: 'PortalAPI.EntraAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entra Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entra Auth Provider Response',
      content: { 'application/json': { schema: EntraAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getClientsRoute = createRoute({
  method: 'get',
  path: '/clients',
  tags: ['Clients'],
  summary: 'List Clients',
  operationId: 'PortalAPI.ClientController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Clients returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Clients with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      firezone_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the Client with this exact Firezone ID',
            in: 'query',
            name: 'firezone_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actor_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Clients owned by this Actor',
            in: 'query',
            name: 'actor_id',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      online: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Clients that are connected (`true`) or not connected (`false`) right now',
            in: 'query',
            name: 'online',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      last_seen_before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Clients whose latest connection started before this RFC 3339 timestamp.\nA Client with no recorded `last_seen_at` counts as last seen when it was created.\n`last_seen_at` is set when a Client connects, so a Client that has stayed\nconnected since before this time also matches; add `online=false` to leave it out.\n',
            example: '2026-01-01T00:00:00Z',
            in: 'query',
            name: 'last_seen_before',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      last_seen_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Clients whose latest connection started at or after this RFC 3339\ntimestamp. A Client with no recorded `last_seen_at` counts as last seen when it\nwas created.\n',
            example: '2026-01-01T00:00:00Z',
            in: 'query',
            name: 'last_seen_after',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      client_type: z
        .enum(['headless', 'gui', 'apple', 'android'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Clients of this type, read from the user agent of the latest session:\n`headless` (Linux and Windows headless Clients), `gui` (Linux and Windows GUI\nClients), `apple` (macOS and iOS), or `android`. Clients with no recorded user\nagent match no type.\n',
            in: 'query',
            name: 'client_type',
            required: false,
            schema: { enum: ['headless', 'gui', 'apple', 'android'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client Response',
      content: { 'application/json': { schema: ClientsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Show Account',
  operationId: 'PortalAPI.AccountController.show',
  responses: {
    200: {
      description: 'AccountResponse',
      content: { 'application/json': { schema: AccountResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSophosDevicesIdRoute = createRoute({
  method: 'get',
  path: '/sophos_devices/{id}',
  tags: ['Sophos Devices'],
  summary: 'Show a synced Sophos device',
  operationId: 'PortalAPI.SophosDeviceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Synced Sophos endpoint ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sophos device response',
      content: { 'application/json': { schema: SophosDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postSitesSiteIdGatewayTokensRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/gateway_tokens',
  tags: ['Gateway Tokens'],
  summary: 'Create a Gateway Token',
  description:
    "Deprecated: creates a multi-owner Site token shared by all of a Site's gateways. Prefer creating a single-owner token for a specific gateway via `POST /sites/{site_id}/gateways/{gateway_id}/token`.",
  operationId: 'PortalAPI.GatewayTokenController.create',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'New Token Response',
      content: { 'application/json': { schema: GatewayTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
  deprecated: true,
})

export const deleteSitesSiteIdGatewayTokensRoute = createRoute({
  method: 'delete',
  path: '/sites/{site_id}/gateway_tokens',
  tags: ['Gateway Tokens'],
  summary: 'Delete all Gateway Tokens for a Site',
  operationId: 'PortalAPI.GatewayTokenController.delete_all',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted Tokens Response',
      content: { 'application/json': { schema: DeletedGatewayTokensResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIruDevicesIdRoute = createRoute({
  method: 'get',
  path: '/iru_devices/{id}',
  tags: ['Iru Devices'],
  summary: 'Show a synced Iru device',
  operationId: 'PortalAPI.IruDeviceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Synced Iru device ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Iru device response',
      content: { 'application/json': { schema: IruDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIntuneDevicesRoute = createRoute({
  method: 'get',
  path: '/intune_devices',
  tags: ['Intune Devices'],
  summary: 'List synced Intune devices',
  operationId: 'PortalAPI.IntuneDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Intune device response',
      content: { 'application/json': { schema: IntuneDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getResourcesResourceIdPoolMembersRoute = createRoute({
  method: 'get',
  path: '/resources/{resource_id}/pool_members',
  tags: ['Pool Members'],
  summary: 'List Pool Members',
  description:
    'Deprecated. Read `device_membership_criteria` on the Resource instead, which\nalso describes the pools that pick their members by a rule.\n\nLists the Clients a `device_pool` Resource names as its members.\n\nReturns 400 for any other Resource type, and for a device pool whose members are\npicked by a rule rather than named.\n',
  operationId: 'PortalAPI.PoolMemberController.index',
  request: {
    params: z.object({
      resource_id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'resource_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Pool Members returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pool Member Response',
      content: { 'application/json': { schema: PoolMemberListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
  deprecated: true,
})

export const putResourcesResourceIdPoolMembersRoute = createRoute({
  method: 'put',
  path: '/resources/{resource_id}/pool_members',
  tags: ['Pool Members'],
  summary: 'Replace Pool Members',
  description:
    "Deprecated. Write `device_membership_criteria` on the Resource instead.\n\nReplaces the Resource's entire membership list with the given Clients.\n\nAny Client not named in the request is removed from the pool. To add or\nremove individual Clients without disturbing the rest, use `PATCH`.\n\nRemoving a Client drops its connections through the pool. Every other connection\nthrough the pool is left alone.\n",
  operationId: 'PortalAPI.PoolMemberController.update_put',
  request: {
    params: z.object({
      resource_id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'resource_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Pool Member Attributes',
      content: { 'application/json': { schema: PoolMemberPutRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Pool Member Response',
      content: { 'application/json': { schema: PoolMemberResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
  deprecated: true,
})

export const patchResourcesResourceIdPoolMembersRoute = createRoute({
  method: 'patch',
  path: '/resources/{resource_id}/pool_members',
  tags: ['Pool Members'],
  summary: 'Add or Remove Pool Members',
  description:
    "Deprecated. Write `device_membership_criteria` on the Resource instead.\n\nAdds and/or removes individual Clients, leaving every other member of the\npool untouched.\n\nBoth operations are idempotent: adding a Client already in the pool and\nremoving one that isn't are both no-ops. `remove` is applied before `add`,\nso a Client named in both ends up in the pool.\n\nRemoving a Client drops its connections through the pool. Every other connection\nthrough the pool is left alone.\n",
  operationId: 'PortalAPI.PoolMemberController.update_patch',
  request: {
    params: z.object({
      resource_id: z
        .string()
        .openapi({
          param: {
            description: 'Resource ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'resource_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Pool Member Attributes',
      content: { 'application/json': { schema: PoolMemberPatchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Pool Member Response',
      content: { 'application/json': { schema: PoolMemberResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
  deprecated: true,
})

export const getGithubAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/github_auth_providers',
  tags: ['GitHub Auth Providers'],
  summary: 'List GitHub Auth Providers',
  operationId: 'PortalAPI.GitHubAuthProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit GitHub Auth Providers returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to GitHub Auth Providers with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'GitHub Auth Provider Response',
      content: { 'application/json': { schema: GitHubAuthProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEntraDirectoriesIdRoute = createRoute({
  method: 'get',
  path: '/entra_directories/{id}',
  tags: ['Entra Directories'],
  summary: 'Show Entra Directory',
  operationId: 'PortalAPI.EntraDirectoryController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Entra Directory ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entra Directory Response',
      content: { 'application/json': { schema: EntraDirectoryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSentinelonePostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/sentinelone_posture_providers/{id}',
  tags: ['SentinelOne Posture Providers'],
  summary: 'Show a SentinelOne posture provider',
  operationId: 'PortalAPI.SentinelOnePostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'SentinelOne posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SentinelOne posture provider response',
      content: { 'application/json': { schema: SentinelOnePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putSentinelonePostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/sentinelone_posture_providers/{id}',
  tags: ['SentinelOne Posture Providers'],
  summary: 'Update a SentinelOne posture provider',
  description:
    'Renames, enables, or disables a SentinelOne posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled SentinelOne provider is left, `sentinelone.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SentinelOnePostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'SentinelOne posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'SentinelOne posture provider attributes',
      content: { 'application/json': { schema: SentinelOnePostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SentinelOne posture provider response',
      content: { 'application/json': { schema: SentinelOnePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSentinelonePostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/sentinelone_posture_providers/{id}',
  tags: ['SentinelOne Posture Providers'],
  summary: 'Delete a SentinelOne posture provider',
  description:
    'Deletes a SentinelOne posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled SentinelOne\nprovider is left, `sentinelone.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.SentinelOnePostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'SentinelOne posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SentinelOne posture provider response',
      content: { 'application/json': { schema: SentinelOnePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchSentinelonePostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/sentinelone_posture_providers/{id}',
  tags: ['SentinelOne Posture Providers'],
  summary: 'Update a SentinelOne posture provider',
  description:
    'Renames, enables, or disables a SentinelOne posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled SentinelOne provider is left, `sentinelone.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SentinelOnePostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'SentinelOne posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'SentinelOne posture provider attributes',
      content: { 'application/json': { schema: SentinelOnePostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SentinelOne posture provider response',
      content: { 'application/json': { schema: SentinelOnePostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getEmailOtpAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/email_otp_auth_providers/{id}',
  tags: ['Email OTP Auth Providers'],
  summary: 'Show Email OTP Auth Provider',
  operationId: 'PortalAPI.EmailOTPAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Email OTP Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Email OTP Auth Provider Response',
      content: { 'application/json': { schema: EmailOTPAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOktaDirectoriesIdRoute = createRoute({
  method: 'get',
  path: '/okta_directories/{id}',
  tags: ['Okta Directories'],
  summary: 'Show Okta Directory',
  operationId: 'PortalAPI.OktaDirectoryController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Okta Directory ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Okta Directory Response',
      content: { 'application/json': { schema: OktaDirectoryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIruDevicesRoute = createRoute({
  method: 'get',
  path: '/iru_devices',
  tags: ['Iru Devices'],
  summary: 'List synced Iru devices',
  operationId: 'PortalAPI.IruDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Iru device response',
      content: { 'application/json': { schema: IruDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGroupsIdRoute = createRoute({
  method: 'get',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Show Group',
  operationId: 'PortalAPI.GroupController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Group ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putGroupsIdRoute = createRoute({
  method: 'put',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Update a Group',
  operationId: 'PortalAPI.GroupController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Group ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Group Attributes',
      content: { 'application/json': { schema: GroupUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Delete a Group',
  description:
    'Deletes a Group and its memberships.\n\nPolicies that grant the Group are kept, but their `group_id` becomes null and they grant no access. A Policy for a synced Group is linked again automatically if the Group reappears on a later directory sync. The built-in Everyone Group cannot be deleted.\n',
  operationId: 'PortalAPI.GroupController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Group ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchGroupsIdRoute = createRoute({
  method: 'patch',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Update a Group',
  operationId: 'PortalAPI.GroupController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Group ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Group Attributes',
      content: { 'application/json': { schema: GroupUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Group Response',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getLogsLogIdRoute = createRoute({
  method: 'get',
  path: '/logs/{log_id}',
  tags: ['Logs'],
  summary: 'Show Log',
  description:
    "Fetches a single Log entry by its `log_id`. The entry's type is\ndetermined from the `log_id` itself: its first character identifies\nthe log stream (`c` change, `5` session, `f` flow, `a` api_request).\n",
  operationId: 'PortalAPI.LogController.show',
  request: {
    params: z.object({
      log_id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the Log entry. A 24-character lowercase hexadecimal string.',
            example: 'c00060db0c2c8eb400000000',
            in: 'path',
            name: 'log_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Log Response',
      content: { 'application/json': { schema: LogResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOidcAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/oidc_auth_providers/{id}',
  tags: ['OIDC Auth Providers'],
  summary: 'Show OIDC Auth Provider',
  operationId: 'PortalAPI.OIDCAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OIDC Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OIDC Auth Provider Response',
      content: { 'application/json': { schema: OIDCAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSitesSiteIdGatewaysRoute = createRoute({
  method: 'get',
  path: '/sites/{site_id}/gateways',
  tags: ['Gateways'],
  summary: 'List Gateways',
  operationId: 'PortalAPI.GatewayController.index',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Gateways returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the Gateway with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ipv4: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the Gateway with this exact tunnel IPv4 address',
            in: 'query',
            name: 'ipv4',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ipv6: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to the Gateway with this exact tunnel IPv6 address',
            in: 'query',
            name: 'ipv6',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gateway Response',
      content: { 'application/json': { schema: GatewaysResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postSitesSiteIdGatewaysRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/gateways',
  tags: ['Gateways'],
  summary: 'Provision a Gateway',
  description:
    "Creates a Gateway and mints its single-owner token in one call. The token is returned once here - store it securely. If it's lost, rotate it via `POST /sites/{site_id}/gateways/{gateway_id}/token/rotate` once the Gateway has connected, or delete and re-provision it.\n\nReturning the token requires the `gateway_tokens:write` scope in addition to `gateways:write`. Set `issue_token` to `false` to create the Gateway without a token, which needs only `gateways:write`; mint its token later via `POST /sites/{site_id}/gateways/{gateway_id}/token`.\n\n`name` is optional; a random name is generated when omitted. `ipv4` and `ipv6` are the Gateway's tunnel addresses, allocated from the account's pool when the Gateway row is created - they are always present in this response, before the Gateway has ever connected.\n",
  operationId: 'PortalAPI.GatewayController.create',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Gateway attributes',
      content: { 'application/json': { schema: GatewayCreateRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Provisioned Gateway Response',
      content: { 'application/json': { schema: GatewayProvisionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getDefenderDevicesRoute = createRoute({
  method: 'get',
  path: '/defender_devices',
  tags: ['Defender Devices'],
  summary: 'List synced Defender devices',
  operationId: 'PortalAPI.DefenderDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Defender device response',
      content: { 'application/json': { schema: DefenderDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getPoliciesRoute = createRoute({
  method: 'get',
  path: '/policies',
  tags: ['Policies'],
  summary: 'List Policies',
  operationId: 'PortalAPI.PolicyController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Policies returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Policies granting this Group',
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Policies granting access to this Resource',
            in: 'query',
            name: 'resource_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postPoliciesRoute = createRoute({
  method: 'post',
  path: '/policies',
  tags: ['Policies'],
  summary: 'Create Policy',
  description:
    'Creates a Policy.\n\nA Policy is enabled by default. Pass `is_disabled: true` to create it disabled, so it grants no access until enabled.\n\nEnterprise accounts with the `device_posture` entitlement can include\n`policy.postures`, a boolean expression of `and`, `or`, `not`, and typed\nprovider-field comparisons. Postures and all `policy.conditions` must hold\ntogether. For example:\n\n```json\n{"policy": {"group_id": "00000000-0000-0000-0000-000000000001",\n  "resource_id": "00000000-0000-0000-0000-000000000002",\n  "postures": {"and": [\n    {"field": "intune.enrolled", "op": "is", "value": true},\n    {"field": "intune.compliance_state", "op": "is", "value": "compliant"}\n  ]}}}\n```\n\nNon-empty `conditions` without the `policy_conditions` entitlement return\n403. Omit `postures` or use null for no posture requirement. Non-null\npostures without the entitlement return 403. Invalid expressions return 422 with\ndetails in `validation_errors.postures`. See `PolicyPostureNode` for the\ncomplete field catalog, operator types, platform behavior, and limits.\n`GET /posture_fields` lists the same fields as structured data.\n',
  operationId: 'PortalAPI.PolicyController.create',
  request: {
    body: {
      description: 'Policy Attributes',
      content: { 'application/json': { schema: PolicyCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Policy Response',
      content: { 'application/json': { schema: PolicyResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  tags: ['Logs'],
  summary: 'List Logs',
  description:
    "Retrieves Firezone audit, session, network flow, or REST API request logs\nfor the authenticated account. Use this to investigate configuration\nchanges, review session activity, or troubleshoot network access and API\nrequests. Returns a page of log entries, most recent first.\n\n- `change`: audit entries recording each insert, update, or delete event\n  against an account-scoped object, most recent first.\n- `session`: one entry per Client, Gateway, or Portal session created,\n  most recent first.\n- `flow`: one entry per network flow reported by Clients and Gateways,\n  most recently started first.\n- `api_request`: one entry per authenticated REST API request, most\n  recent first.\n\nSelect one log stream with the required `type` argument. Narrow results\nwith `begin` and `end` RFC 3339 timestamps, for example\n`2026-05-26T00:00:00Z`. The inclusive window applies to the entry's\n`timestamp`, or `flow_start` for flows. Non-UTC offsets are converted\nto UTC. The default window is the last 90 days; `begin` must not be\nlater than `end`.\n\nResults can be further narrowed by `actor_id` (every type) or\n`actor_email` (`change`, `session`, and `flow`), which matches the\nemail recorded when the entry was created. API requests are made by\nAPI clients, which have no email, so `actor_email` is not supported\nfor `api_request`.\n\nReturns up to `limit` entries (default 50, maximum 100). Pass the\n`next_page` cursor from the response's `metadata` as `page_cursor`\nto retrieve the next page.\n",
  operationId: 'PortalAPI.LogController.index',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The log stream to list. One of `change`, `session`, `flow`, or `api_request`.',
            example: 'change',
            in: 'query',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of Logs to return per page, from 1 to 100. Defaults to 50.\n',
            example: 50,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor returned by a previous request.',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      begin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Inclusive start of the time window. RFC 3339 timestamp; non-UTC\noffsets are accepted and converted to UTC. Defaults to 90 days\nbefore the current time when omitted.\n\nFor `flow` entries the window applies to when the flow started.\n',
            example: '2026-02-25T00:00:00Z',
            in: 'query',
            name: 'begin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Inclusive end of the time window. RFC 3339 timestamp; non-UTC\noffsets are accepted and converted to UTC. Defaults to the current\ntime when omitted.\n\nFor `flow` entries the window applies to when the flow started.\n',
            example: '2026-05-26T00:00:00Z',
            in: 'query',
            name: 'end',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actor_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to entries whose actor matches.',
            example: '84e7f82f-831a-4a9d-8f17-c66c2bb6e205',
            in: 'query',
            name: 'actor_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actor_email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to entries whose actor email matches the email recorded\nwhen the entry was created. Supported for `change`, `session`, and\n`flow` types.\n',
            example: 'admin@example.com',
            in: 'query',
            name: 'actor_email',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Logs Response',
      content: { 'application/json': { schema: LogsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSophosDevicesRoute = createRoute({
  method: 'get',
  path: '/sophos_devices',
  tags: ['Sophos Devices'],
  summary: 'List synced Sophos devices',
  operationId: 'PortalAPI.SophosDeviceController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit devices returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sophos device response',
      content: { 'application/json': { schema: SophosDeviceListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getActorsRoute = createRoute({
  method: 'get',
  path: '/actors',
  tags: ['Actors'],
  summary: 'List Actors',
  operationId: 'PortalAPI.ActorController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Users returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Actors with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Actors with this exact email',
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to Actors of this type: account_user, account_admin_user, service_account, or api_client.',
            example: 'service_account',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ActorsResponse',
      content: { 'application/json': { schema: ActorsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postActorsRoute = createRoute({
  method: 'post',
  path: '/actors',
  tags: ['Actors'],
  summary: 'Create an Actor',
  description: 'Creates an Actor. Admins can only be created in the portal.',
  operationId: 'PortalAPI.ActorController.create',
  request: {
    body: {
      description: 'Actor attributes',
      content: { 'application/json': { schema: ActorCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'ActorResponse',
      content: { 'application/json': { schema: ActorResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOktaDirectoriesRoute = createRoute({
  method: 'get',
  path: '/okta_directories',
  tags: ['Okta Directories'],
  summary: 'List Okta Directories',
  operationId: 'PortalAPI.OktaDirectoryController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit Okta Directories returned',
            example: 10,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/Prev page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to Okta Directories with this exact name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Okta Directory Response',
      content: { 'application/json': { schema: OktaDirectoryListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSantaDevicesIdRoute = createRoute({
  method: 'get',
  path: '/santa_devices/{id}',
  tags: ['Santa Devices'],
  summary: 'Show a synced Santa device',
  operationId: 'PortalAPI.SantaDeviceController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Synced Santa device ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Santa device response',
      content: { 'application/json': { schema: SantaDeviceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getIruPostureProvidersRoute = createRoute({
  method: 'get',
  path: '/iru_posture_providers',
  tags: ['Iru Posture Providers'],
  summary: 'List Iru posture providers',
  operationId: 'PortalAPI.IruPostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Iru posture provider response',
      content: { 'application/json': { schema: IruPostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getOktaAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/okta_auth_providers/{id}',
  tags: ['Okta Auth Providers'],
  summary: 'Show Okta Auth Provider',
  operationId: 'PortalAPI.OktaAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Okta Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Okta Auth Provider Response',
      content: { 'application/json': { schema: OktaAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getSophosPostureProvidersIdRoute = createRoute({
  method: 'get',
  path: '/sophos_posture_providers/{id}',
  tags: ['Sophos Posture Providers'],
  summary: 'Show a Sophos posture provider',
  operationId: 'PortalAPI.SophosPostureProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Sophos posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sophos posture provider response',
      content: { 'application/json': { schema: SophosPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const putSophosPostureProvidersIdRoute = createRoute({
  method: 'put',
  path: '/sophos_posture_providers/{id}',
  tags: ['Sophos Posture Providers'],
  summary: 'Update a Sophos posture provider',
  description:
    'Renames, enables, or disables a Sophos posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Sophos provider is left, `sophos.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SophosPostureProviderController.update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Sophos posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Sophos posture provider attributes',
      content: { 'application/json': { schema: SophosPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Sophos posture provider response',
      content: { 'application/json': { schema: SophosPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const deleteSophosPostureProvidersIdRoute = createRoute({
  method: 'delete',
  path: '/sophos_posture_providers/{id}',
  tags: ['Sophos Posture Providers'],
  summary: 'Delete a Sophos posture provider',
  description:
    'Deletes a Sophos posture provider and every device synced from it. This\ncannot be undone. Policies keep their posture rules. Once no enabled Sophos\nprovider is left, `sophos.*` posture rules see every device as not\nenrolled. Returns the deleted provider.\n',
  operationId: 'PortalAPI.SophosPostureProviderController.delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Sophos posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sophos posture provider response',
      content: { 'application/json': { schema: SophosPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const patchSophosPostureProvidersIdRoute = createRoute({
  method: 'patch',
  path: '/sophos_posture_providers/{id}',
  tags: ['Sophos Posture Providers'],
  summary: 'Update a Sophos posture provider',
  description:
    'Renames, enables, or disables a Sophos posture provider. Connecting a\nprovider or changing its tenant happens in the web console.\n\nA disabled provider stops syncing, and policies stop trusting its devices.\nOnce no enabled Sophos provider is left, `sophos.*` posture rules see every\ndevice as not enrolled. Enabling requires a verified provider, clears any\nsync error, and queues a device sync.\n',
  operationId: 'PortalAPI.SophosPostureProviderController.update (2)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Sophos posture provider ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Sophos posture provider attributes',
      content: { 'application/json': { schema: SophosPostureProviderUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Sophos posture provider response',
      content: { 'application/json': { schema: SophosPostureProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: {
        'application/problem+json': {
          schema: ValidationProblemDetailsSchema,
          example: {
            detail: 'The request body failed validation.',
            status: 422,
            title: 'Unprocessable Content',
            type: 'about:blank',
            validation_errors: { name: ["can't be blank"] },
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postSitesSiteIdGatewaysGatewayIdTokenRotateRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/gateways/{gateway_id}/token/rotate',
  tags: ['Gateway Tokens'],
  summary: 'Rotate a single-owner Gateway Token',
  description:
    "Mints a replacement token for the gateway. A current token the gateway has connected with keeps working until the gateway first connects with the replacement or 4 hours elapse, whichever comes first; a token no gateway has ever connected with is replaced immediately. Rotating again before the gateway picks up the replacement replaces only the pending token and never invalidates the one in use. Once the replacement is confirmed the previous token is deleted - rolling the gateway's configuration back to it will strand the gateway.",
  operationId: 'PortalAPI.GatewayTokenController.rotate',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gateway_id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'gateway_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'New Token Response',
      content: { 'application/json': { schema: GatewayTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const postSitesSiteIdGatewaysGatewayIdTokenRoute = createRoute({
  method: 'post',
  path: '/sites/{site_id}/gateways/{gateway_id}/token',
  tags: ['Gateway Tokens'],
  summary: 'Create a single-owner Gateway Token',
  description:
    'Creates a token bound to a single gateway. At most one active token can exist per gateway; if one already exists, this returns 409 Conflict - rotate the token or delete it first instead.',
  operationId: 'PortalAPI.GatewayTokenController.create_for_gateway',
  request: {
    params: z.object({
      site_id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'site_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gateway_id: z
        .string()
        .openapi({
          param: {
            description: 'Gateway ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'gateway_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'New Token Response',
      content: { 'application/json': { schema: GatewayTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request conflicts with the current state of the resource.',
            status: 409,
            title: 'Conflict',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getDefenderPostureProvidersRoute = createRoute({
  method: 'get',
  path: '/defender_posture_providers',
  tags: ['Defender Posture Providers'],
  summary: 'List Defender posture providers',
  operationId: 'PortalAPI.DefenderPostureProviderController.index',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit providers returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      page_cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Next/previous page cursor',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Defender posture provider response',
      content: { 'application/json': { schema: DefenderPostureProviderListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})

export const getGoogleAuthProvidersIdRoute = createRoute({
  method: 'get',
  path: '/google_auth_providers/{id}',
  tags: ['Google Auth Providers'],
  summary: 'Show Google Auth Provider',
  operationId: 'PortalAPI.GoogleAuthProviderController.show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Google Auth Provider ID',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Google Auth Provider Response',
      content: { 'application/json': { schema: GoogleAuthProviderResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The request could not be processed.',
            status: 400,
            title: 'Bad Request',
            type: 'about:blank',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'Authentication credentials were missing or invalid.',
            status: 401,
            title: 'Unauthorized',
            type: 'about:blank',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'You do not have permission to perform this action.',
            status: 403,
            title: 'Forbidden',
            type: 'about:blank',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail: 'The requested resource could not be found.',
            status: 404,
            title: 'Not Found',
            type: 'about:blank',
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            detail:
              'Rate limit exceeded. Retry after the time indicated in the Retry-After header.',
            status: 429,
            title: 'Too Many Requests',
            type: 'about:blank',
          },
        },
      },
    },
  },
  callbacks: {},
})
