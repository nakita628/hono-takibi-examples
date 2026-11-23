type IntercomVersion =
  | '1.0'
  | '1.1'
  | '1.2'
  | '1.3'
  | '1.4'
  | '2.0'
  | '2.1'
  | '2.2'
  | '2.3'
  | '2.4'
  | '2.5'
  | '2.6'
  | '2.7'
  | '2.8'
  | '2.9'
  | '2.10'
  | '2.11'
  | '2.12'
  | '2.13'
  | '2.14'
  | '2.15'
  | '2.16'
  | '2.17'
type App = {
  type?: string | undefined
  id_code?: string | undefined
  name?: string | undefined
  region?: string | undefined
  timezone?: string | undefined
  created_at?: number | undefined
  identity_verification?: boolean | undefined
  secure?: boolean | undefined
} | null
type AdminWithApp = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  email?: string | undefined
  job_title?: string | undefined
  away_mode_enabled?: boolean | undefined
  away_mode_reassign?: boolean | undefined
  has_inbox_seat?: boolean | undefined
  team_ids?: number[] | undefined
  avatar?: { type?: string | undefined; image_url?: (string | null) | undefined } | undefined
  email_verified?: (boolean | null) | undefined
  role?:
    | ({ type?: string | undefined; id?: string | undefined; name?: string | undefined } | null)
    | undefined
  app?: App | undefined
} | null
type Error = {
  type: string
  request_id?: (string | null) | undefined
  errors: {
    code: string | number
    message?: (string | null) | undefined
    data?: ({ [x: string]: unknown } | null) | undefined
  }[]
}
type Macro = {
  type?: 'macro' | undefined
  id?: string | undefined
  name?: string | undefined
  body?: string | undefined
  body_text?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  visible_to?: 'everyone' | 'specific_teams' | undefined
  visible_to_team_ids?: string[] | undefined
  available_on?: ('inbox' | 'messenger')[] | undefined
} | null
type MacroList = {
  type?: 'list' | undefined
  data?: Macro[] | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        per_page?: number | undefined
        next?: ({ starting_after?: string | undefined } | null) | undefined
      }
    | undefined
}
type TeamPriorityLevel = {
  primary_team_ids?: (number[] | null) | undefined
  secondary_team_ids?: (number[] | null) | undefined
} | null
type Admin = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  email?: string | undefined
  job_title?: string | undefined
  away_mode_enabled?: boolean | undefined
  away_mode_reassign?: boolean | undefined
  away_status_reason_id?: (number | null) | undefined
  has_inbox_seat?: boolean | undefined
  team_ids?: number[] | undefined
  avatar?:
    | ({ type?: string | undefined; image_url?: (string | null) | undefined } | null)
    | undefined
  team_priority_level?: TeamPriorityLevel | undefined
  role?:
    | ({ type?: string | undefined; id?: string | undefined; name?: string | undefined } | null)
    | undefined
} | null
type PagesLink = {
  type?: 'pages' | undefined
  page?: number | undefined
  next?: (string | null) | undefined
  prev?: (string | null) | undefined
  per_page?: number | undefined
  total_pages?: number | undefined
}
type ActivityLogMetadata = {
  sign_in_method?: (string | null) | undefined
  external_id?: (string | null) | undefined
  away_mode?: (boolean | null) | undefined
  away_status_reason?: (string | null) | undefined
  reassign_conversations?: (boolean | null) | undefined
  source?: (string | null) | undefined
  auto_changed?: (string | null) | undefined
  update_by?: (number | null) | undefined
  update_by_name?: (string | null) | undefined
  previous_state?: (string | null) | undefined
  new_state?: (string | null) | undefined
  threshold_minutes?: (number | null) | undefined
  last_activity_at?: (number | null) | undefined
  auto?: (boolean | null) | undefined
  setting_type?: (string | null) | undefined
  changes?:
    | ({
        [x: string]: {
          before?: { [x: string]: unknown } | undefined
          after?: { [x: string]: unknown } | undefined
        }
      } | null)
    | undefined
  conversation_assignment_limit?: (number | null) | undefined
  ticket_assignment_limit?: (number | null) | undefined
  team?: ({ id?: number | undefined; name?: string | undefined } | null) | undefined
  team_assignment_limit?: (number | null) | undefined
  enabled?: (boolean | null) | undefined
  mode?: (string | null) | undefined
  consent_id?: (number | null) | undefined
  expired_at?: (string | null) | undefined
  before?: ({ [x: string]: unknown } | null) | undefined
  after?: ({ [x: string]: unknown } | null) | undefined
} | null
type ActivityLog = {
  type?: string | undefined
  id?: string | undefined
  performed_by?:
    | ({
        type?: string | undefined
        id?: string | undefined
        email?: string | undefined
        ip?: string | undefined
      } | null)
    | undefined
  metadata?: ActivityLogMetadata | undefined
  created_at?: number | undefined
  activity_type?:
    | 'admin_avatar_change'
    | 'admin_away_mode_change'
    | 'admin_occupancy_state_change'
    | 'admin_channel_change'
    | 'admin_deletion'
    | 'admin_deprovisioned'
    | 'intercom_teammate_removal'
    | 'admin_impersonation_consent_approved'
    | 'admin_impersonation_consent_revoked'
    | 'admin_impersonation_end'
    | 'admin_impersonation_start'
    | 'admin_invite_change'
    | 'admin_bulk_invite_creation'
    | 'admin_bulk_notification_settings_change'
    | 'admin_invite_creation'
    | 'admin_invite_deletion'
    | 'admin_unauthorized_sign_in_method'
    | 'admin_login_failure'
    | 'admin_login_success'
    | 'admin_logout'
    | 'admin_login_attempts_reset'
    | 'admin_mobile_login_failure'
    | 'admin_mobile_login_success'
    | 'admin_sign_in_method_expired'
    | 'admin_password_reset_request'
    | 'admin_password_reset_success'
    | 'admin_permission_change'
    | 'admin_provisioned'
    | 'admin_name_change'
    | 'admin_email_change'
    | 'admin_password_change'
    | 'admin_locale_change'
    | 'app_admin_join'
    | 'app_authentication_method_change'
    | 'app_data_deletion'
    | 'app_data_export'
    | 'request_log_export_requested'
    | 'workspace_deletion_request'
    | 'workspace_owner_designation_change'
    | 'app_google_sso_domain_change'
    | 'app_identity_verification_change'
    | 'app_identity_verification_reminder_disabled'
    | 'identity_verification_unmarked'
    | 'app_name_change'
    | 'app_outbound_address_change'
    | 'app_package_installation'
    | 'app_package_token_regeneration'
    | 'app_package_uninstallation'
    | 'developer_hub_secret_revealed'
    | 'developer_hub_secret_copied'
    | 'app_team_creation'
    | 'app_team_deletion'
    | 'app_team_membership_modification'
    | 'app_timezone_change'
    | 'app_webhook_creation'
    | 'app_webhook_deletion'
    | 'articles_in_messenger_enabled_change'
    | 'automatic_domain_authentication_started'
    | 'automatic_domain_authentication_complete'
    | 'messenger_api_secret_creation'
    | 'messenger_api_secret_deletion'
    | 'messenger_search_required_change'
    | 'messenger_spaces_change'
    | 'bulk_data_export_creation'
    | 'bulk_data_export_delete'
    | 'bulk_data_export_run'
    | 'bulk_data_export_settings_change'
    | 'bulk_delete'
    | 'bulk_export'
    | 'call_settings_change'
    | 'campaign_deletion'
    | 'campaign_state_change'
    | 'content_sync_pair_creation'
    | 'content_sync_pair_deletion'
    | 'content_sync_pair_run'
    | 'content_sync_pair_update'
    | 'conversation_attribute_archive'
    | 'conversation_deletion'
    | 'conversation_deletion_schedule_creation'
    | 'conversation_deletion_schedule_state_change'
    | 'conversation_deletion_schedule_update'
    | 'conversation_hard_deletion_enqueued'
    | 'conversation_part_deletion'
    | 'conversation_part_edited'
    | 'conversation_part_redaction'
    | 'conversation_pdf_export'
    | 'conversation_redaction_enqueued'
    | 'conversation_sla_change'
    | 'conversation_topic_change'
    | 'conversation_topic_creation'
    | 'conversation_topic_deletion'
    | 'csv_import_completion'
    | 'csv_import_creation'
    | 'taxonomy_upload_creation'
    | 'automation_roadmap_form_submission_creation'
    | 'data_connector_log_retention_setting_creation'
    | 'data_connector_log_retention_setting_update'
    | 'email_settings_change'
    | 'strip_inbound_email_links_change'
    | 'help_center_settings_change'
    | 'inbound_conversations_change'
    | 'inbox_access_change'
    | 'inbox_bulk_action'
    | 'internal_agent_proposal_applied'
    | 'message_deletion'
    | 'ruleset_activation'
    | 'ruleset_deletion'
    | 'ruleset_creation'
    | 'workflow_creation'
    | 'workflow_deletion'
    | 'workflow_update'
    | 'workflow_status_change'
    | 'workflow_participant_action_configured'
    | 'oauth_token_revocation'
    | 'article_creation'
    | 'article_deletion'
    | 'article_content_creation'
    | 'article_content_update'
    | 'article_content_deletion'
    | 'article_content_published'
    | 'article_content_unpublished'
    | 'article_content_audience_updated'
    | 'message_state_change'
    | 'messenger_look_and_feel_change'
    | 'office_hours_change'
    | 'office_hours_exception_change'
    | 'role_change'
    | 'role_creation'
    | 'role_deletion'
    | 'seat_change'
    | 'seat_revoke'
    | 'pre_migration_seat_expiration_date_change'
    | 'post_migration_seat_deletion'
    | 'post_migration_seat_update'
    | 'post_migration_seat_creation'
    | 'security_settings_change'
    | 'temporary_expectation_auto_expired'
    | 'temporary_expectation_change'
    | 'temporary_expectation_messages_change'
    | 'welcome_message_change'
    | 'start_conversation_button_text_change'
    | 'upfront_email_collection_change'
    | 'admin_assignment_limit_change'
    | 'admin_channel_limit_change'
    | 'admin_conversation_assignment_limit_change'
    | 'admin_ticket_assignment_limit_change'
    | 'admin_unassign_unsnoozed_at_capacity_change'
    | 'team_assignment_limit_change'
    | 'teammate_skills_synced'
    | 'skill_category_created'
    | 'skill_category_updated'
    | 'snooze_presets_change'
    | 'team_skill_categories_updated'
    | 'admin_two_factor_auth_change'
    | 'admin_two_factor_login_failure'
    | 'email_signature_change'
    | 'recovery_code_sent'
    | 'billing_addressees_change'
    | 'billing_addressees_bounced_and_removed'
    | 'billing_details_change'
    | 'broadcast_deletion'
    | 'fin_opt_in'
    | 'fin_free_usage_window_create'
    | 'fin_free_usage_window_extension'
    | 'fin_ingestion_consent'
    | 'ip_allowlist_setting_change'
    | 'rest_api_ip_allowlist_setting_change'
    | 'messenger_platform_availability_change'
    | 'messenger_platform_inactivity_disable_event'
    | 'custom_report_update'
    | 'custom_report_delete'
    | 'custom_report_create'
    | 'reporting_folder_create'
    | 'reporting_folder_delete'
    | 'teammate_office_hours_schedule_assign'
    | 'teammate_office_hours_schedule_unassign'
    | 'report_snapshot_create'
    | 'report_scheduled_share_create'
    | 'report_scheduled_share_update'
    | 'report_scheduled_share_delete'
    | 'reporting_folder_name_change'
    | 'reporting_folder_position_change'
    | 'reporting_folder_reports_change'
    | 'reporting_folder_pin_change'
    | 'reporting_csv_export'
    | 'pii_data_revealed'
    | 'privacy_policy_notice_change'
    | 'privacy_policy_notice_contents_change'
    | 'report_access_create'
    | 'report_access_delete'
    | 'report_access_update'
    | 'fin_persisted_data_context_attribute_change'
    | 'fin_sdr_connector_generated'
    | 'fin_sdr_connector_activated'
    | 'fin_sdr_marketo_connected'
    | 'fin_sdr_marketo_partition_selected'
    | 'fin_sdr_marketo_disconnected'
    | 'fin_sdr_playbook_updated'
    | 'generic_ecommerce_connector_creation'
    | 'ai_agent_customization_settings_change'
    | 'ai_agent_identity_settings_change'
    | 'ai_agent_multilingual_settings_change'
    | 'ai_agent_safety_guard_settings_change'
    | 'messenger_language_change'
    | 'ai_agent_guidance_change'
    | 'ai_category_change'
    | 'escalation_rule_change'
    | 'hitl_rule_change'
    | 'safety_response_category_config_change'
    | 'hitl_inbox_action'
    | 'brand_creation'
    | 'brand_update'
    | 'brand_deletion'
    | 'brand_settings_change'
    | 'action_created'
    | 'action_risk_accepted_change'
    | 'data_connector_security_warning_acknowledged'
    | 'action_published'
    | 'action_status_change'
    | 'action_update'
    | 'allowed_attachment_filetypes_setting_change'
    | 'ai_agent_fin_playground_change'
    | 'ai_agent_preview_token_generated'
    | 'selection_set_creation'
    | 'selection_set_archive'
    | 'series_creation'
    | 'series_deletion'
    | 'series_settings_update'
    | 'series_status_change'
    | 'series_update'
    | 'messenger_launch_to_conversation_change'
    | 'messenger_launcher_display_condition_change'
    | 'alias_mode_change'
    | 'alias_name_change'
    | 'hippa_compliance_settings_change'
    | 'ai_inbox_translation_setting_change'
    | 'slack_integration_auto_promoted'
    | 'slack_oauth_fresh_install'
    | 'slack_oauth_reinstall'
    | 'slack_oauth_reauthentication'
    | 'slack_integration_uninstalled'
    | 'telegram_identity_reset'
    | 'telegram_integration_installed'
    | 'telegram_integration_uninstalled'
    | 'slack_user_association_setting_change'
    | 'ms_teams_user_association_setting_change'
    | 'slack_integration_type_change'
    | 'slack_multi_conversational_changed'
    | 'whatsapp_direct_send_changed'
    | 'slack_user_token_creation'
    | 'standalone_channel_change'
    | 'standalone_connection_config_change'
    | 'standalone_schedule_sync_deletion'
    | 'skill_category_deleted'
    | 'skill_based_routing_toggled'
    | 'consent_banner_settings_change'
    | 'content_redaction_rule_creation'
    | 'content_redaction_rule_deletion'
    | 'content_redaction_rule_update'
    | 'content_suggestions_change'
    | 'suggestions_limiters_reset'
    | 'custom_authentication_token_creation'
    | 'custom_authentication_token_update'
    | 'custom_authentication_token_deletion'
    | 'device_token_deletion'
    | 'predictive_answers_settings_change'
    | 'custom_emoji_deletion'
    | 'customer_facing_name_change'
    | 'attach_uploads_inline_setting_change'
    | 'user_camera_attachments_setting_change'
    | 'user_media_attachments_setting_change'
    | 'user_file_attachments_setting_change'
    | 'file_upload_audience_predicates_setting_change'
    | 'user_gifs_setting_change'
    | 'user_emojis_setting_change'
    | 'user_voice_notes_setting_change'
    | 'user_conversation_attachments_setting_change'
    | 'teammate_gifs_setting_change'
    | 'scim_group_creation'
    | 'scim_group_update'
    | 'scim_groups_bulk_update'
    | 'scim_group_deletion'
    | 'scim_group_membership_change'
    | 'scim_admin_role_change'
    | 'scim_admin_bulk_role_assignment'
    | 'scim_admin_profile_update'
    | 'scim_admin_password_update'
    | 'scim_system_enabled'
    | 'scim_system_disabled'
    | 'scim_settings_change'
    | 'macro_content_export_run'
    | 'personal_macro_admin_read'
    | 'personal_macro_admin_convert'
    | 'personal_macro_admin_destroy'
    | 'macro_creation'
    | 'macro_deletion'
    | 'macro_update'
    | 'macro_usage_export'
    | 'mcp_server_created'
    | 'mcp_server_updated'
    | 'mcp_server_deleted'
    | 'mcp_server_enabled'
    | 'mcp_server_disabled'
    | 'mcp_server_oauth_connected'
    | 'mcp_server_oauth_disconnected'
    | 'mcp_server_reconnected'
    | 'mcp_action_added'
    | 'mcp_actions_batch_added'
    | 'mcp_action_updated'
    | 'mcp_action_removed'
    | 'fin_agent_api_settings_change'
    | 'fin_procedures_hitl_settings_change'
    | 'fin_procedures_hitl_access_token_rotated'
    | 'fin_agent_api_secret_revealed'
    | 'fin_agent_api_secret_copied'
    | 'a2a_agent_registered'
    | 'a2a_agent_oauth_connected'
    | 'automatic_away_mode_setting_change'
    | 'admin_occupancy_setting_change'
    | 'unassign_unsnoozed_at_capacity_setting_change'
    | 'unassign_unsnoozed_when_away_setting_change'
    | 'unassign_triggers_setting_change'
    | 'malicious_domains_setting_change'
    | 'trusted_domains_setting_change'
    | 'messenger_allowed_domains_change'
    | 'qa_monitor_creation'
    | 'qa_monitor_update'
    | 'qa_monitor_archive'
    | 'qa_monitor_restore'
    | 'qa_scorecard_creation'
    | 'qa_scorecard_update'
    | 'qa_scorecard_archive'
    | 'qa_review_plan_creation'
    | 'qa_review_plan_archive'
    | 'lead_to_user_merge'
    | 'user_to_user_merge'
    | 'sales_messenger_configuration_change'
    | 'shopify_refund_order'
    | 'shopify_replacement_order'
    | 'shopify_gift_card_compensation'
    | 'shopify_add_replacement_item'
    | 'shopify_disable_discount_code'
    | 'shopify_disable_gift_card'
    | 'shopify_create_discount_code'
    | 'shopify_update_shipping_address'
    | 'channel_identity_rule_change'
    | 'topic_curation_set_live'
    | 'hide_csat_from_agents_setting_change'
    | 'phone_purchase_diagnostic'
    | 'phone_number_purchase'
    | 'sip_domain_provisioned'
    | 'sip_domain_deleted'
    | 'sip_integration_stage_confirmed'
    | 'sip_header_mappings_updated'
    | 'phone_queue_call_pinned'
    | 'phone_queue_call_unpinned'
    | 'phone_queue_call_pin_cleared'
    | 'outbound_phone_campaign_creation'
    | 'outbound_phone_campaign_change'
    | 'outbound_phone_campaign_deletion'
    | 'outbound_phone_campaign_state_change'
    | 'outbound_phone_campaign_csv_upload'
    | 'outbound_phone_campaign_import'
    | 'outbound_phone_campaign_session_start'
    | 'channel_wrap_up_settings_change'
    | 'ticket_state_customer_notifications_change'
    | 'schedule_template_update'
    | 'schedule_template_creation'
    | 'schedule_template_deletion'
    | 'schedule_template_apply'
    | 'wfm_google_calendar_connected'
    | 'wfm_google_calendar_disconnected'
    | 'wfm_google_calendar_sync_setting_change'
    | 'github_sync_disconnected'
    | 'github_sync_cleanup_deleted_folder'
    | 'github_sync_installed'
    | 'github_sync_connector_cloned'
    | 'github_sync_pulled'
    | 'fallback_admin_alias_change'
    | 'spam_email_deletion'
    | 'snowflake_share_activated'
    | 'snowflake_share_torn_down'
    | 'calendar_mapping_rule_creation'
    | 'calendar_mapping_rule_deletion'
    | 'calendar_mapping_rule_update'
    | 'activity_type_creation'
    | 'masked_admin_avatar_change'
    | undefined
  activity_description?: (string | null) | undefined
} | null
type ActivityLogList = {
  type?: string | undefined
  pages?: PagesLink | undefined
  activity_logs?: ActivityLog[] | undefined
}
type ActivityLogEventTypeList = { type?: string | undefined; event_types?: string[] | undefined }
type AdminList = { type?: string | undefined; admins?: Admin[] | undefined }
type OfficeHoursTimeInterval = {
  start_minute?: number | undefined
  end_minute?: number | undefined
  day_of_week?: number | undefined
}
type OfficeHoursException = {
  type?: string | undefined
  id?: string | undefined
  office_hours_schedule_id?: string | undefined
  exception_date?: string | undefined
  exception_type?: 'closed' | 'custom_hours' | undefined
  name?: (string | null) | undefined
  time_intervals?: (OfficeHoursTimeInterval[] | null) | undefined
  recurring_annually?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type UpdateOfficeHoursExceptionRequest = {
  exception_date?: string | undefined
  exception_type?: 'closed' | 'custom_hours' | undefined
  name?: string | undefined
  time_intervals?: (OfficeHoursTimeInterval[] | null) | undefined
  recurring_annually?: boolean | undefined
}
type OfficeHoursExceptionList = {
  type?: string | undefined
  data?: OfficeHoursException[] | undefined
}
type CreateOfficeHoursExceptionRequest = {
  exception_date: string
  exception_type: 'closed' | 'custom_hours'
  name?: string | undefined
  time_intervals?: (OfficeHoursTimeInterval[] | null) | undefined
  recurring_annually?: boolean | undefined
}
type OfficeHoursSchedule = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  time_zone_name?: string | undefined
  time_intervals?: OfficeHoursTimeInterval[] | undefined
  twenty_four_seven?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type UpdateOfficeHoursScheduleRequest = {
  name?: string | undefined
  time_zone_name?: string | undefined
  time_intervals?: OfficeHoursTimeInterval[] | undefined
}
type OfficeHoursScheduleList = {
  type?: string | undefined
  data?: OfficeHoursSchedule[] | undefined
}
type CreateOfficeHoursScheduleRequest = {
  name: string
  time_zone_name?: string | undefined
  time_intervals: OfficeHoursTimeInterval[]
}
type ContentImportSource = {
  type: 'content_import_source'
  id: number
  last_synced_at: number
  sync_behavior: 'api' | 'automatic' | 'manual'
  status: 'active' | 'deactivated' | 'deletion_in_progress'
  url: string
  created_at: number
  updated_at: number
  audience_ids?: (number[] | null) | undefined
}
type ContentImportSourcesList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: ContentImportSource[] | undefined
}
type CreateContentImportSourceRequest = {
  sync_behavior: 'api'
  status?: 'active' | 'deactivated' | undefined
  url: string
  audience_ids?: number | number[] | undefined
}
type UpdateContentImportSourceRequest = {
  sync_behavior: 'api' | 'automatic' | 'manual'
  status?: 'active' | 'deactivated' | undefined
  url: string
  audience_ids?: number | number[] | undefined
  apply_audience_to_existing_content?: boolean | undefined
}
type Tag = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  applied_at?: (number | null) | undefined
  applied_by?: { type?: string | undefined; id?: (string | null) | undefined } | undefined
}
type ExternalPage = {
  type: 'external_page'
  id: string
  title: string
  html: string
  url?: string | undefined
  ai_agent_availability: boolean
  ai_copilot_availability: boolean
  ai_sales_agent_availability?: boolean | undefined
  fin_availability?: boolean | undefined
  locale: string
  source_id: number
  external_id: string
  audience_ids?: number[] | undefined
  created_at: number
  updated_at: number
  last_ingested_at: number
  tags?: { type?: 'tag.list' | undefined; tags?: Tag[] | undefined } | undefined
}
type ExternalPagesList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: ExternalPage[] | undefined
}
type CreateExternalPageRequest = {
  title: string
  html: string
  url?: string | undefined
  ai_agent_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  locale: string
  source_id: number
  external_id: string
  audience_ids?: (number[] | null) | undefined
}
type UpdateExternalPageRequest = {
  title: string
  html: string
  url?: string | undefined
  ai_agent_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  locale: string
  source_id: number
  external_id: string
  audience_ids?: (number[] | null) | undefined
}
type ArticleContent = {
  type?: null | 'article_content' | undefined
  content_id?: string | undefined
  title?: string | undefined
  description?: string | undefined
  body?: string | undefined
  body_markdown?: (string | null) | undefined
  author_id?: number | undefined
  state?: 'published' | 'draft' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  has_unpublished_changes?: boolean | undefined
  draft_updated_at?: (number | null) | undefined
  url?: string | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  created_by_id?: (number | null) | undefined
  updated_by_id?: (number | null) | undefined
} | null
type ArticleTranslatedContent = {
  type?: null | 'article_translated_content' | undefined
  ar?: ArticleContent | undefined
  bg?: ArticleContent | undefined
  bs?: ArticleContent | undefined
  ca?: ArticleContent | undefined
  cs?: ArticleContent | undefined
  da?: ArticleContent | undefined
  de?: ArticleContent | undefined
  el?: ArticleContent | undefined
  en?: ArticleContent | undefined
  es?: ArticleContent | undefined
  et?: ArticleContent | undefined
  fi?: ArticleContent | undefined
  fr?: ArticleContent | undefined
  he?: ArticleContent | undefined
  hr?: ArticleContent | undefined
  hu?: ArticleContent | undefined
  id?: ArticleContent | undefined
  it?: ArticleContent | undefined
  ja?: ArticleContent | undefined
  ko?: ArticleContent | undefined
  lt?: ArticleContent | undefined
  lv?: ArticleContent | undefined
  mn?: ArticleContent | undefined
  nb?: ArticleContent | undefined
  nl?: ArticleContent | undefined
  pl?: ArticleContent | undefined
  pt?: ArticleContent | undefined
  ro?: ArticleContent | undefined
  ru?: ArticleContent | undefined
  sl?: ArticleContent | undefined
  sr?: ArticleContent | undefined
  sv?: ArticleContent | undefined
  tr?: ArticleContent | undefined
  vi?: ArticleContent | undefined
  'pt-BR'?: ArticleContent | undefined
  'zh-CN'?: ArticleContent | undefined
  'zh-TW'?: ArticleContent | undefined
} | null
type Tags = { type?: 'tag.list' | undefined; tags?: Tag[] | undefined }
type ArticleListItem = {
  type?: 'article' | undefined
  id?: string | undefined
  workspace_id?: string | undefined
  content_id?: string | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  body?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  author_id?: number | undefined
  state?: 'published' | 'draft' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  has_unpublished_changes?: boolean | undefined
  draft_updated_at?: (number | null) | undefined
  url?: (string | null) | undefined
  parent_ids?: number[] | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  created_by_id?: (number | null) | undefined
  updated_by_id?: (number | null) | undefined
  exclude_from_article_suggestions?: boolean | undefined
  help_center_audience?:
    | 'everyone'
    | 'all_users'
    | 'all_visitors'
    | 'all_leads'
    | 'all_visitors_and_leads'
    | 'restricted'
    | undefined
  scheduled_publish_at?: (number | null) | undefined
  scheduled_unpublish_at?: (number | null) | undefined
  default_locale?: string | undefined
  translated_content?: ArticleTranslatedContent | undefined
  tags?: Tags | undefined
  folder_id?: (number | null) | undefined
}
type ArticleList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: ArticleListItem[] | undefined
}
type CreateArticleRequest = {
  title?: string | undefined
  description?: string | undefined
  body?: string | undefined
  body_markdown?: string | undefined
  author_id?: number | undefined
  state?: 'published' | 'draft' | undefined
  parent_id?: number | undefined
  parent_ids?: number[] | undefined
  locale?: string | undefined
  translated_content?: ArticleTranslatedContent | undefined
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  scheduled_publish_at?: (string | null) | undefined
  scheduled_unpublish_at?: (string | null) | undefined
} | null
type Article = {
  type?: 'article' | undefined
  id?: string | undefined
  workspace_id?: string | undefined
  content_id?: string | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  body?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  author_id?: number | undefined
  state?: 'published' | 'draft' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  has_unpublished_changes?: boolean | undefined
  draft_updated_at?: (number | null) | undefined
  url?: (string | null) | undefined
  parent_ids?: number[] | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  created_by_id?: (number | null) | undefined
  updated_by_id?: (number | null) | undefined
  exclude_from_article_suggestions?: boolean | undefined
  help_center_audience?:
    | 'everyone'
    | 'all_users'
    | 'all_visitors'
    | 'all_leads'
    | 'all_visitors_and_leads'
    | 'restricted'
    | undefined
  scheduled_publish_at?: (number | null) | undefined
  scheduled_unpublish_at?: (number | null) | undefined
  default_locale?: string | undefined
  translated_content?: ArticleTranslatedContent | undefined
  tags?: Tags | undefined
  folder_id?: (number | null) | undefined
}
type UpdateArticleRequest = {
  title?: string | undefined
  description?: string | undefined
  body?: string | undefined
  body_markdown?: string | undefined
  author_id?: number | undefined
  state?: 'published' | 'draft' | undefined
  parent_id?: (string | null) | undefined
  parent_ids?: number[] | undefined
  translated_content?: ArticleTranslatedContent | undefined
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  scheduled_publish_at?: (string | null) | undefined
  scheduled_unpublish_at?: (string | null) | undefined
} | null
type DeletedArticleObject = {
  id?: string | undefined
  object?: 'article' | undefined
  deleted?: boolean | undefined
}
type PublishArticleDraftRequest = {
  locales?: string[] | undefined
  author_id?: number | undefined
} | null
type ArticleVersionSummary = {
  type?: 'article_version' | undefined
  id?: string | undefined
  article_id?: string | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  author_id?: string | undefined
  created_by_id?: (string | null) | undefined
  created_via?: string | undefined
  from_version_id?: (string | null) | undefined
  state?: 'published' | 'draft' | undefined
  created_at?: number | undefined
}
type ArticleVersionList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: ArticleVersionSummary[] | undefined
}
type ArticleVersion = {
  type?: 'article_version' | undefined
  id?: string | undefined
  article_id?: string | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  body?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  author_id?: string | undefined
  created_by_id?: (string | null) | undefined
  created_via?: string | undefined
  from_version_id?: (string | null) | undefined
  state?: 'published' | 'draft' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type ArticleSearchHighlights = {
  article_id?: string | undefined
  highlighted_title?:
    | { type?: 'highlight' | 'plain' | undefined; text?: string | undefined }[]
    | undefined
  highlighted_summary?:
    | { type?: 'highlight' | 'plain' | undefined; text?: string | undefined }[][]
    | undefined
}
type ArticleSearchResponse = {
  type?: 'list' | undefined
  total_count?: number | undefined
  data?:
    | { articles?: Article[] | undefined; highlights?: ArticleSearchHighlights[] | undefined }
    | undefined
  pages?: PagesLink | undefined
}
type AwayStatusReason = {
  type?: string | undefined
  id?: string | undefined
  label?: string | undefined
  emoji?: string | undefined
  order?: number | undefined
  deleted?: boolean | undefined
  associated_to_phone_status?: 'wrap_up' | 'on_a_call' | 'coaching' | null | undefined
}
type AwayStatusReasonList = { type?: 'list' | undefined; data?: AwayStatusReason[] | undefined }
type Predicate = {
  attribute?: string | undefined
  type?: string | undefined
  comparison?: string | undefined
  value?: { [x: string]: unknown } | undefined
  predicates?: Predicate[] | undefined
}
type Audience = {
  type?: 'audience' | undefined
  id?: string | undefined
  name?: string | undefined
  predicates?: Predicate[] | undefined
  role_predicates?: Predicate[] | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type AudienceList = {
  type?: 'list' | undefined
  data?: Audience[] | undefined
  total_count?: number | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_pages?: number | undefined
}
type CreateAudienceRequest = {
  name: string
  predicates?: Predicate[] | undefined
  role_predicates?: Predicate[] | undefined
}
type UpdateAudienceRequest = {
  name?: string | undefined
  predicates?: Predicate[] | undefined
  role_predicates?: Predicate[] | undefined
}
type FinAgentMessage = {
  author: 'user' | 'agent' | 'fin'
  body: string
  timestamp?: string | undefined
  timestamp_ms?: string | undefined
}
type FinAgentUser = {
  id: string
  name?: string | undefined
  email?: string | undefined
  attributes?: { [x: string]: unknown } | undefined
}
type FinAgentAttachment = {
  type: 'url' | 'file'
  url?: string | undefined
  name?: string | undefined
  content_type?: string | undefined
  data?: string | undefined
}
type FinAgentConversationMetadata = {
  history?: FinAgentMessage[] | undefined
  attributes?: { [x: string]: unknown } | undefined
}
type FinAgentAttributeErrors = {
  user?: { attributes?: { [x: string]: string } | undefined } | undefined
  conversation?: { attributes?: { [x: string]: string } | undefined } | undefined
}
type HelpCenterRedirect = {
  id?: string | undefined
  type?: 'help_center_redirect' | undefined
  from_url?: string | undefined
  locale?: string | undefined
  help_center_id?: string | undefined
  target_type?: 'article' | 'collection' | undefined
  target_id?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type HelpCenterRedirectList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: HelpCenterRedirect[] | undefined
}
type CreateHelpCenterRedirectRequest = {
  from_url: string
  locale: string
  target_type: 'article' | 'collection'
  target_id: string
}
type DeletedHelpCenterRedirectObject = {
  id?: string | undefined
  object?: 'help_center_redirect' | undefined
  deleted?: boolean | undefined
}
type GroupContent = {
  type?: null | 'group_content' | undefined
  name?: string | undefined
  description?: string | undefined
} | null
type GroupTranslatedContent = {
  type?: null | 'group_translated_content' | undefined
  ar?: GroupContent | undefined
  bg?: GroupContent | undefined
  bs?: GroupContent | undefined
  ca?: GroupContent | undefined
  cs?: GroupContent | undefined
  da?: GroupContent | undefined
  de?: GroupContent | undefined
  el?: GroupContent | undefined
  en?: GroupContent | undefined
  es?: GroupContent | undefined
  et?: GroupContent | undefined
  fi?: GroupContent | undefined
  fr?: GroupContent | undefined
  he?: GroupContent | undefined
  hr?: GroupContent | undefined
  hu?: GroupContent | undefined
  id?: GroupContent | undefined
  it?: GroupContent | undefined
  ja?: GroupContent | undefined
  ko?: GroupContent | undefined
  lt?: GroupContent | undefined
  lv?: GroupContent | undefined
  mn?: GroupContent | undefined
  nb?: GroupContent | undefined
  nl?: GroupContent | undefined
  pl?: GroupContent | undefined
  pt?: GroupContent | undefined
  ro?: GroupContent | undefined
  ru?: GroupContent | undefined
  sl?: GroupContent | undefined
  sr?: GroupContent | undefined
  sv?: GroupContent | undefined
  tr?: GroupContent | undefined
  vi?: GroupContent | undefined
  'pt-BR'?: GroupContent | undefined
  'zh-CN'?: GroupContent | undefined
  'zh-TW'?: GroupContent | undefined
} | null
type Collection = {
  type?: 'collection' | undefined
  id?: string | undefined
  workspace_id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  url?: (string | null) | undefined
  icon?: (string | null) | undefined
  order?: number | undefined
  default_locale?: string | undefined
  translated_content?: GroupTranslatedContent | undefined
  parent_id?: (string | null) | undefined
  help_center_id?: (number | null) | undefined
}
type CollectionList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: Collection[] | undefined
}
type CreateCollectionRequest = {
  name?: string | undefined
  description?: string | undefined
  icon?: string | undefined
  translated_content?: GroupTranslatedContent | undefined
  parent_id?: (string | null) | undefined
  help_center_id?: (number | null) | undefined
}
type UpdateCollectionRequest = {
  name?: string | undefined
  description?: string | undefined
  icon?: string | undefined
  translated_content?: GroupTranslatedContent | undefined
  parent_id?: (string | null) | undefined
  help_center_id?: (number | null) | undefined
}
type DeletedCollectionObject = {
  id?: string | undefined
  object?: 'collection' | undefined
  deleted?: boolean | undefined
}
type HelpCenter = {
  id?: string | undefined
  workspace_id?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  identifier?: string | undefined
  website_turned_on?: boolean | undefined
  display_name?: string | undefined
  url?: string | undefined
  custom_domain?: (string | null) | undefined
  default?: boolean | undefined
  locales?: string[] | undefined
}
type HelpCenterList = { type?: 'list' | undefined; data?: HelpCenter[] | undefined }
type InternalArticleListItem = {
  id?: number | undefined
  title?: string | undefined
  body?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  owner_id?: number | undefined
  author_id?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  locale?: string | undefined
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  tags?: Tags | undefined
}
type InternalArticleList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: InternalArticleListItem[] | undefined
}
type CreateInternalArticleRequest = {
  title: string
  body?: string | undefined
  body_markdown?: string | undefined
  json_blocks?: { [x: string]: unknown }[] | undefined
  locale?: string | undefined
  author_id: number
  owner_id: number
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
} | null
type InternalArticle = {
  id?: number | undefined
  title?: string | undefined
  body?: (string | null) | undefined
  body_markdown?: (string | null) | undefined
  owner_id?: number | undefined
  author_id?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  locale?: string | undefined
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  tags?: Tags | undefined
}
type UpdateInternalArticleRequest = {
  title?: string | undefined
  body?: string | undefined
  body_markdown?: string | undefined
  json_blocks?: { [x: string]: unknown }[] | undefined
  locale?: string | undefined
  author_id?: number | undefined
  owner_id?: number | undefined
  folder_id?: (number | null) | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
} | null
type DeletedInternalArticleObject = {
  id?: string | undefined
  object?: 'internal_article' | undefined
  deleted?: boolean | undefined
}
type InternalArticleSearchResponse = {
  type?: 'list' | undefined
  total_count?: number | undefined
  internal_articles?: InternalArticle[] | undefined
  pages?: PagesLink | undefined
}
type Folder = {
  id?: number | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  emoji?: (string | null) | undefined
  parent_folder_id?: (number | null) | undefined
  content_count?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type DeletedFolderObject = {
  id?: string | undefined
  object?: 'folder' | undefined
  deleted?: boolean | undefined
}
type IpAllowlist = {
  type?: string | undefined
  enabled?: boolean | undefined
  ip_allowlist?: string[] | undefined
}
type CreateOrUpdateCompanyRequest = {
  name?: string | undefined
  company_id?: string | undefined
  id?: string | undefined
  plan?: string | undefined
  size?: number | undefined
  website?: string | undefined
  industry?: string | undefined
  custom_attributes?: { [x: string]: (string | null) | number | number | boolean } | undefined
  remote_created_at?: number | undefined
  update_last_request_at?: boolean | undefined
  monthly_spend?: number | undefined
} | null
type TagBasic = { type?: string | undefined; id?: string | undefined; name?: string | undefined }
type Segment = {
  type?: 'segment' | undefined
  id?: string | undefined
  name?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  person_type?: 'contact' | 'user' | undefined
  count?: (number | null) | undefined
}
type CompanyNote = {
  type?: string | undefined
  id?: string | undefined
  url?: string | undefined
  body?: string | undefined
}
type Company = {
  type?: 'company' | undefined
  id?: string | undefined
  name?: string | undefined
  app_id?: string | undefined
  plan?:
    | { type?: string | undefined; id?: string | undefined; name?: string | undefined }
    | undefined
  company_id?: string | undefined
  remote_created_at?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  last_request_at?: number | undefined
  size?: number | undefined
  website?: string | undefined
  industry?: string | undefined
  monthly_spend?: number | undefined
  session_count?: number | undefined
  user_count?: number | undefined
  custom_attributes?: { [x: string]: (string | null) | number | number | boolean } | undefined
  tags?: { type?: 'tag.list' | undefined; tags?: TagBasic[] | undefined } | undefined
  segments?: { type?: 'segment.list' | undefined; segments?: Segment[] | undefined } | undefined
  notes?:
    | {
        type?: 'note.list' | undefined
        data?: CompanyNote[] | undefined
        url?: string | undefined
        total_count?: number | undefined
        has_more?: boolean | undefined
      }
    | undefined
}
type CompanyList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: Company[] | undefined
}
type CompanyUserList = {
  type?: 'user.list' | undefined
  users?: { [x: string]: unknown }[] | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  limited?: boolean | undefined
}
type UpdateCompanyRequest = {
  name?: string | undefined
  update_last_request_at?: boolean | undefined
  plan?: string | undefined
  size?: number | undefined
  website?: string | undefined
  industry?: string | undefined
  custom_attributes?: { [x: string]: (string | null) | number | number | boolean } | undefined
  remote_created_at?: number | undefined
  monthly_spend?: number | undefined
} | null
type DeletedCompanyObject = {
  id?: string | undefined
  object?: 'company' | undefined
  deleted?: boolean | undefined
}
type AddressableList = {
  type?: string | undefined
  id?: string | undefined
  url?: string | undefined
}
type ContactTags = {
  data?: AddressableList[] | undefined
  url?: string | undefined
  total_count?: number | undefined
  has_more?: boolean | undefined
} | null
type ContactNotes = {
  data?: AddressableList[] | undefined
  url?: string | undefined
  total_count?: number | undefined
  has_more?: boolean | undefined
}
type CompanyData = {
  id?: string | undefined
  type?: 'company' | undefined
  url?: string | undefined
}
type ContactCompanies = {
  data?: CompanyData[] | undefined
  url?: string | undefined
  total_count?: number | undefined
  has_more?: boolean | undefined
}
type ContactLocation = {
  type?: (string | null) | undefined
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  country_code?: (string | null) | undefined
  continent_code?: (string | null) | undefined
}
type SocialProfile = {
  type?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type ContactSocialProfiles = { data?: SocialProfile[] | undefined }
type ContactSubscriptionTypes = {
  type?: 'list' | undefined
  data?: AddressableList[] | undefined
  url?: string | undefined
  total_count?: number | undefined
  has_more?: boolean | undefined
}
type MergeHistoryItem = {
  type?: string | undefined
  source_contact_id?: string | undefined
  source_contact_role?: 'lead' | 'user' | undefined
  merged_at?: (number | null) | undefined
}
type Contact = {
  type?: string | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
  workspace_id?: string | undefined
  role?: string | undefined
  email?: string | undefined
  email_domain?: string | undefined
  email_verified?: boolean | undefined
  phone?: (string | null) | undefined
  name?: (string | null) | undefined
  owner_id?: (string | null) | undefined
  has_hard_bounced?: boolean | undefined
  marked_email_as_spam?: boolean | undefined
  unsubscribed_from_emails?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  signed_up_at?: (number | null) | undefined
  last_seen_at?: (number | null) | undefined
  last_replied_at?: (number | null) | undefined
  last_contacted_at?: (number | null) | undefined
  last_email_opened_at?: (number | null) | undefined
  last_email_clicked_at?: (number | null) | undefined
  language_override?: (string | null) | undefined
  browser?: (string | null) | undefined
  browser_version?: (string | null) | undefined
  browser_language?: (string | null) | undefined
  os?: (string | null) | undefined
  android_app_name?: (string | null) | undefined
  android_app_version?: (string | null) | undefined
  android_device?: (string | null) | undefined
  android_os_version?: (string | null) | undefined
  android_sdk_version?: (string | null) | undefined
  android_last_seen_at?: (number | null) | undefined
  ios_app_name?: (string | null) | undefined
  ios_app_version?: (string | null) | undefined
  ios_device?: (string | null) | undefined
  ios_os_version?: (string | null) | undefined
  ios_sdk_version?: (string | null) | undefined
  ios_last_seen_at?: (number | null) | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  avatar?: (string | null) | undefined
  tags?: ContactTags | undefined
  notes?: ContactNotes | undefined
  companies?: ContactCompanies | undefined
  location?: ContactLocation | undefined
  social_profiles?: ContactSocialProfiles | undefined
  opted_out_subscription_types?: ContactSubscriptionTypes | undefined
  opted_in_subscription_types?: ContactSubscriptionTypes | undefined
  utm_campaign?: (string | null) | undefined
  utm_content?: (string | null) | undefined
  utm_medium?: (string | null) | undefined
  utm_source?: (string | null) | undefined
  utm_term?: (string | null) | undefined
  referrer?: (string | null) | undefined
  sms_consent?: boolean | undefined
  unsubscribed_from_sms?: boolean | undefined
  enabled_push_messaging?: (boolean | null) | undefined
  merge_history?: (MergeHistoryItem[] | null) | undefined
}
type CursorPages = {
  type?: 'pages' | undefined
  page?: number | undefined
  next?: ({ page?: number | undefined; starting_after?: string | undefined } | null) | undefined
  per_page?: number | undefined
  total_pages?: number | undefined
} | null
type CompanyAttachedContacts = {
  type?: 'list' | undefined
  data?: Contact[] | undefined
  total_count?: number | undefined
  pages?: CursorPages | undefined
}
type CompanyAttachedSegments = { type?: 'list' | undefined; data?: Segment[] | undefined }
type Note = {
  type?: string | undefined
  id?: string | undefined
  created_at?: number | undefined
  contact?: ({ type?: string | undefined; id?: string | undefined } | null) | undefined
  company?: ({ type?: string | undefined; id?: string | undefined } | null) | undefined
  author?:
    | {
        type?: string | undefined
        id?: string | undefined
        name?: string | undefined
        email?: string | undefined
        job_title?: string | undefined
        away_mode_enabled?: boolean | undefined
        away_mode_reassign?: boolean | undefined
        away_status_reason_id?: (number | null) | undefined
        has_inbox_seat?: boolean | undefined
        team_ids?: number[] | undefined
        avatar?:
          | ({ type?: string | undefined; image_url?: (string | null) | undefined } | null)
          | undefined
        team_priority_level?: TeamPriorityLevel | undefined
        role?:
          | ({
              type?: string | undefined
              id?: string | undefined
              name?: string | undefined
            } | null)
          | undefined
      }
    | undefined
  body?: string | undefined
}
type NoteList = {
  type?: string | undefined
  data?: Note[] | undefined
  total_count?: number | undefined
  pages?: PagesLink | undefined
}
type SingleFilterSearchRequest = {
  field?: string | undefined
  operator?:
    | '='
    | '!='
    | 'IN'
    | 'NIN'
    | '<'
    | '<='
    | '>'
    | '>='
    | '~'
    | '!~'
    | '^'
    | '$'
    | undefined
  value?: string | number | boolean | (string | number)[] | undefined
}
type MultipleFilterSearchRequest = {
  operator?: 'AND' | 'OR' | undefined
  value?: MultipleFilterSearchRequest[] | SingleFilterSearchRequest[] | undefined
}
type StartingAfterPaging = {
  per_page?: number | undefined
  starting_after?: (string | null) | undefined
} | null
type CompanySearchRequest = {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest
  pagination?: StartingAfterPaging | undefined
  sort?: { field?: string | undefined; order?: 'ascending' | 'descending' | undefined } | undefined
}
type CompanySearchResponse = {
  type?: 'list' | undefined
  pages?: CursorPages | undefined
  total_count?: number | undefined
  data?: Company[] | undefined
}
type CompanyScroll = {
  type?: 'list' | undefined
  data?: Company[] | undefined
  pages?: ({ [x: string]: unknown } | null) | undefined
  total_count?: (number | null) | undefined
  scroll_param?: string | undefined
} | null
type ContactAttachedCompanies = {
  type?: 'list' | undefined
  data?: Company[] | undefined
  total_count?: number | undefined
  pages?: PagesLink | undefined
}
type ContactSegments = { type?: 'list' | undefined; data?: Segment[] | undefined }
type Translation = {
  name?: string | undefined
  description?: string | undefined
  locale?: string | undefined
}
type SubscriptionType = {
  type?: string | undefined
  id?: string | undefined
  state?: 'live' | 'draft' | 'archived' | undefined
  default_translation?: Translation | undefined
  translations?: Translation[] | undefined
  consent_type?: 'opt_out' | 'opt_in' | undefined
  content_types?: ('email' | 'sms_message')[] | undefined
}
type SubscriptionTypeList = { type?: 'list' | undefined; data?: SubscriptionType[] | undefined }
type TagList = { type?: 'list' | undefined; data?: Tag[] | undefined }
type DeletedContact = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
  email?: (string | null) | undefined
  role?: 'user' | 'lead' | undefined
  status?:
    | 'archived'
    | 'blocked'
    | 'merged'
    | 'pending_deletion'
    | 'permanently_deleted'
    | undefined
  merged_into_id?: string | undefined
  updated_at?: number | undefined
}
type DeletedContactList = {
  type?: 'list' | undefined
  data?: DeletedContact[] | undefined
  total_count?: number | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        page?: number | undefined
        per_page?: number | undefined
        total_pages?: number | undefined
      }
    | undefined
}
type UpdateContactRequest = {
  role?: string | undefined
  external_id?: string | undefined
  email?: string | undefined
  email_verified?: (boolean | null) | undefined
  phone?: (string | null) | undefined
  name?: (string | null) | undefined
  avatar?: (string | null) | undefined
  signed_up_at?: (number | null) | undefined
  last_seen_at?: (number | null) | undefined
  owner_id?: (string | null) | undefined
  unsubscribed_from_emails?: (boolean | null) | undefined
  sms_consent?: boolean | undefined
  unsubscribed_from_sms?: boolean | undefined
  language_override?: (string | null) | undefined
  custom_attributes?: ({ [x: string]: unknown } | null) | undefined
}
type ContactDeleted = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
}
type MergeContactsRequest = {
  from: string
  into: string
  skip_duplicate_validation?: boolean | undefined
}
type MergePreviewRequest = {
  from: string
  into: string
  skip_duplicate_validation?: boolean | undefined
  custom_attribute_names?: string[] | undefined
}
type MergePreviewAttributeChange = {
  field?: string | undefined
  outcome?: 'adopted' | 'discarded' | 'merged' | undefined
  from_value?: ({ [x: string]: unknown } | null) | undefined
  into_value?: ({ [x: string]: unknown } | null) | undefined
  new_into_value?: ({ [x: string]: unknown } | null) | undefined
}
type MergePreviewAttributeChanges = {
  attributes?: MergePreviewAttributeChange[] | undefined
  total_count?: number | undefined
}
type MergePreviewReassignments = {
  conversations?: { from: number; into: number } | undefined
  tickets?: { from: number; into: number } | undefined
  phone_calls?: { from: number; into: number } | undefined
  tags?: { from: number; into: number } | undefined
  notes?: { from: number; into: number } | undefined
}
type MergePreviewSummary = {
  attribute_changes?: MergePreviewAttributeChanges | undefined
  reassignments?: MergePreviewReassignments | undefined
}
type MergePreviewAllowed = { allowed?: true | undefined; summary?: MergePreviewSummary | undefined }
type MergePreviewReason = {
  code?:
    | 'source_same_as_target'
    | 'invalid_merge_role_pair'
    | 'no_shared_identifier'
    | 'facebook_user'
    | 'external_lead_channel_not_allowed'
    | 'mailing_list'
    | 'whatsapp_data_cannot_be_merged'
    | 'telegram_data_cannot_be_merged'
    | 'ms_teams_data_cannot_be_merged'
    | 'phone_data_cannot_be_merged'
    | undefined
  message?: string | undefined
}
type MergePreviewBlocked = {
  allowed?: false | undefined
  reasons?: MergePreviewReason[] | undefined
}
type MergePreviewResponse = MergePreviewAllowed | MergePreviewBlocked
type ContactSearchRequest = {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest
  pagination?: StartingAfterPaging | undefined
  sort?: { field?: string | undefined; order?: 'ascending' | 'descending' | undefined } | undefined
}
type ContactList = {
  type?: 'list' | undefined
  data?: Contact[] | undefined
  total_count?: number | undefined
  pages?: CursorPages | undefined
}
type ContactActivity = {
  type?: 'contact_activity' | undefined
  id?: string | undefined
  event_type?:
    | 'contact.created'
    | 'contact.role_updated'
    | 'contact.deleted'
    | 'contact.merged'
    | 'contact.merge_failed'
    | undefined
  contact_id?: string | undefined
  external_id?: string | undefined
  role?: string | undefined
  merge_source_id?: string | undefined
  merge_target_id?: string | undefined
  failure_reason?: string | undefined
  created_at?: number | undefined
}
type ContactActivityList = {
  type?: 'list' | undefined
  data?: ContactActivity[] | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        per_page?: number | undefined
        next?: { starting_after?: string | undefined } | undefined
      }
    | undefined
}
type CreateContactRequest =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type ContactArchived = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
}
type ContactUnarchived = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
}
type Banner = {
  type?: string | undefined
  id?: string | undefined
  view_id?: string | undefined
  title?: (string | null) | undefined
  body?: (string | null) | undefined
  style?: string | undefined
  position?: string | undefined
  show_dismiss_button?: boolean | undefined
  action?:
    | ({
        type?: string | undefined
        label?: (string | null) | undefined
        target?: (string | null) | undefined
        reaction_set?:
          | { index?: number | undefined; unicode_emoticon?: string | undefined }[]
          | undefined
        tour_id?: (string | null) | undefined
        tour_url?: (string | null) | undefined
      } | null)
    | undefined
  client_targeting?: ({ [x: string]: unknown }[] | null) | undefined
  created_at?: number | undefined
}
type BannerList = { type?: string | undefined; data?: Banner[] | undefined }
type BannerDismiss = {
  type?: string | undefined
  view_id?: string | undefined
  dismissed?: boolean | undefined
}
type ContactBlocked = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
}
type MergeHistoryList = {
  type?: 'list' | undefined
  data?: MergeHistoryItem[] | undefined
  next_cursor?: (string | null) | undefined
  has_more?: boolean | undefined
}
type BulkCreateContactsRequest = {
  contacts: {
    external_id?: string | undefined
    email?: string | undefined
    email_verified?: (boolean | null) | undefined
    name?: string | undefined
    role?: string | undefined
    phone?: string | undefined
    avatar?: string | undefined
    language_override?: string | undefined
    custom_attributes?: { [x: string]: unknown } | undefined
    signed_up_at?: number | undefined
    last_seen_at?: number | undefined
    owner_id?: string | undefined
    unsubscribed_from_emails?: boolean | undefined
    companies?: { company_id: string; name?: string | undefined }[] | undefined
    tags?: { add?: { id: string }[] | undefined } | undefined
  }[]
  job?: { id?: string | undefined } | undefined
}
type ContactsBulkJob = {
  id?: string | undefined
  type?: 'contacts.bulk.job' | undefined
  state?: 'running' | 'completed' | 'completed_with_errors' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  completed_at?: (number | null) | undefined
  tasks?:
    | {
        id?: string | undefined
        item_count?: number | undefined
        state?: 'pending' | 'running' | 'completed' | 'completed_with_errors' | undefined
        created_at?: number | undefined
        started_at?: (number | null) | undefined
        completed_at?: (number | null) | undefined
      }[]
    | undefined
  url?: string | undefined
}
type BulkUpdateContactsRequest = {
  contacts: {
    id: string
    external_id?: string | undefined
    email?: string | undefined
    email_verified?: (boolean | null) | undefined
    name?: string | undefined
    phone?: string | undefined
    avatar?: string | undefined
    owner_id?: string | undefined
    unsubscribed_from_emails?: boolean | undefined
    language_override?: string | undefined
    custom_attributes?: { [x: string]: unknown } | undefined
    companies?:
      | { company_id: string; name?: string | undefined; remove?: boolean | undefined }[]
      | undefined
    tags?: { add?: { id: string }[] | undefined; remove?: { id: string }[] | undefined } | undefined
  }[]
  job?: { id?: string | undefined } | undefined
}
type BulkDeleteContactsRequest = {
  contacts: { id: string }[]
  job?: { id?: string | undefined } | undefined
}
type ContentBulkActionRequest = {
  action: 'publish' | 'unpublish' | 'delete' | 'set_availability' | 'set_audience' | 'update_tags'
  content_ids: {
    type:
      | 'article'
      | 'article_content'
      | 'content_snippet'
      | 'external_content'
      | 'file_source_content'
      | 'internal_article'
    id: string
  }[]
  availability?:
    | {
        ai_agent?: boolean | undefined
        copilot?: boolean | undefined
        sales_agent?: boolean | undefined
      }
    | undefined
  audience?:
    | {
        add_segment_ids?: number[] | undefined
        remove_segment_ids?: number[] | undefined
        remove_all?: boolean | undefined
      }
    | undefined
  tags?: { add_tag_ids?: number[] | undefined; remove_tag_ids?: number[] | undefined } | undefined
}
type ContentBulkActionResponse = { type?: string | undefined; status?: string | undefined }
type ContentSearchDefaultItem = {
  type: 'content_snippet' | 'external_content' | 'file_source_content' | 'internal_article'
  id?: string | undefined
  title?: string | undefined
}
type ContentSearchArticleContentItem = {
  type?: 'article_content' | undefined
  id?: string | undefined
  title?: string | undefined
  locale?: string | undefined
}
type ContentSearchArticleItem = {
  type: 'article'
  id?: string | undefined
  title?: string | undefined
  contents?: ContentSearchArticleContentItem[] | undefined
}
type ContentSearchResult = ContentSearchDefaultItem | ContentSearchArticleItem
type ContentSearchResponse = {
  type?: 'list' | undefined
  total_count?: number | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        page?: number | undefined
        per_page?: number | undefined
        total_pages?: number | undefined
        next?: string | undefined
        prev?: string | undefined
      }
    | undefined
  data?: ContentSearchResult[] | undefined
}
type ContentSnippet = {
  type?: string | undefined
  id?: string | undefined
  title?: (string | null) | undefined
  locale?: string | undefined
  json_blocks?: { [x: string]: unknown }[] | undefined
  body_markdown?: (string | null) | undefined
  chatbot_availability?: number | undefined
  copilot_availability?: number | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  audience_ids?: (number[] | null) | undefined
}
type ContentSnippetList = {
  type?: 'list' | undefined
  data?: ContentSnippet[] | undefined
  total_count?: number | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_pages?: number | undefined
}
type ContentSnippetCreateRequest = {
  title: string
  json_blocks?: { [x: string]: unknown }[] | undefined
  body_markdown?: string | undefined
  locale?: string | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
}
type ContentSnippetUpdateRequest = {
  title?: string | undefined
  json_blocks?: { [x: string]: unknown }[] | undefined
  body_markdown?: string | undefined
  locale?: string | undefined
  audience_ids?: (number[] | null) | undefined
  ai_chatbot_availability?: boolean | undefined
  ai_copilot_availability?: boolean | undefined
  ai_sales_agent_availability?: boolean | undefined
}
type DynamicContentVariation = {
  type?: string | undefined
  id?: string | undefined
  locale?: string | undefined
  brand_id?: (string | null) | undefined
  text_content?: (string | null) | undefined
  json_blocks?: ({ [x: string]: unknown }[] | null) | undefined
  intentionally_empty?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type DynamicContent = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  key?: string | undefined
  content_type?: 'inline' | 'block' | undefined
  default_locale?: string | undefined
  variations?: DynamicContentVariation[] | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type DynamicContentList = {
  type?: 'list' | undefined
  data?: DynamicContent[] | undefined
  total_count?: number | undefined
  page?: number | undefined
  per_page?: number | undefined
  total_pages?: number | undefined
}
type DynamicContentVariationRequest = {
  locale: string
  brand_id?: (string | null) | undefined
  text_content?: string | undefined
  body?: string | undefined
  intentionally_empty?: boolean | undefined
}
type DynamicContentCreateRequest = {
  name: string
  content_type: 'inline' | 'block'
  default_locale: string
  variations: DynamicContentVariationRequest[]
}
type DynamicContentUpdateRequest = {
  name?: string | undefined
  default_locale?: string | undefined
  variations?: DynamicContentVariationRequest[] | undefined
}
type ContactReference = {
  type?: 'contact' | undefined
  id?: string | undefined
  external_id?: (string | null) | undefined
}
type ConversationRating = {
  rating?: number | undefined
  remark?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  contact?: ContactReference | undefined
  teammate?:
    | ({ type?: 'admin' | 'team' | 'bot' | 'workflow' | undefined; id?: string | undefined } | null)
    | undefined
} | null
type ConversationSourceAuthor = {
  type?: string | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
}
type PartAttachment = {
  type?: string | undefined
  name?: string | undefined
  url?: string | undefined
  content_type?: string | undefined
  filesize?: number | undefined
  width?: number | undefined
  height?: number | undefined
}
type EmailAddressHeader = {
  type?: string | undefined
  email_address?: string | undefined
  name?: (string | null) | undefined
}
type SourceEmailMessageMetadata = {
  message_id?: (string | null) | undefined
  subject?: string | undefined
  email_address_headers?: EmailAddressHeader[] | undefined
  history?: string | undefined
}
type ConversationSource = {
  type?: string | undefined
  id?: (string | null) | undefined
  delivered_as?: string | undefined
  recipients?:
    | (
        | {
            type?: string | undefined
            email?: string | undefined
            drop_reason?: (string | null) | undefined
          }[]
        | null
      )
    | undefined
  reply_to?:
    | ({ email?: string | undefined; name?: (string | null) | undefined }[] | null)
    | undefined
  subject?: string | undefined
  body?: string | undefined
  author?: ConversationSourceAuthor | undefined
  attachments?: PartAttachment[] | undefined
  url?: (string | null) | undefined
  redacted?: boolean | undefined
  email_message_metadata?: SourceEmailMessageMetadata | undefined
}
type ConversationContacts = {
  type?: 'contact.list' | undefined
  contacts?: ContactReference[] | undefined
}
type Reference = { type?: string | undefined; id?: (string | null) | undefined }
type ConversationTeammates = { type?: string | undefined; admins?: Reference[] | undefined } | null
type AiTopicSubtopic = {
  topic_name?: string | undefined
  subtopic_name?: (string | null) | undefined
  id?: (number | null) | undefined
}
type CxScoreReason = { name?: string | undefined; value?: string | undefined }
type CustomAttributes = {
  'AI Topic and Subtopic'?: AiTopicSubtopic[] | undefined
  'CX Score reasons'?: CxScoreReason[] | undefined
}
type ConversationFirstContactReply = {
  created_at?: number | undefined
  type?: string | undefined
  url?: (string | null) | undefined
} | null
type SlaApplied = {
  type?: string | undefined
  sla_name?: string | undefined
  sla_status?: 'hit' | 'missed' | 'canceled' | 'active' | undefined
} | null
type ConversationResponseTime = {
  team_id?: number | undefined
  team_name?: string | undefined
  response_time?: number | undefined
}
type ConversationStatistics = {
  type?: string | undefined
  time_to_assignment?: number | undefined
  time_to_admin_reply?: number | undefined
  time_to_first_close?: number | undefined
  time_to_last_close?: number | undefined
  median_time_to_reply?: number | undefined
  first_contact_reply_at?: number | undefined
  first_assignment_at?: number | undefined
  first_admin_reply_at?: number | undefined
  first_close_at?: number | undefined
  last_assignment_at?: number | undefined
  last_assignment_admin_reply_at?: number | undefined
  last_contact_reply_at?: number | undefined
  last_admin_reply_at?: number | undefined
  last_close_at?: number | undefined
  last_closed_by_id?: string | undefined
  count_reopens?: number | undefined
  count_assignments?: number | undefined
  count_conversation_parts?: number | undefined
  assigned_team_first_response_time?: ConversationResponseTime[] | undefined
  assigned_team_first_response_time_in_office_hours?: ConversationResponseTime[] | undefined
  handling_time?: number | undefined
  adjusted_handling_time?: (number | null) | undefined
} | null
type LinkedObject = {
  type?: 'ticket' | 'conversation' | undefined
  id?: string | undefined
  category?: 'Customer' | 'Back-office' | 'Tracker' | null | undefined
}
type LinkedObjectList = {
  type?: 'list' | undefined
  total_count?: number | undefined
  has_more?: boolean | undefined
  data?: LinkedObject[] | undefined
}
type ContentSource = {
  content_type?:
    | 'file'
    | 'article'
    | 'external_content'
    | 'content_snippet'
    | 'workflow_connector_action'
    | 'internal_article'
    | undefined
  url?: string | undefined
  title?: string | undefined
  locale?: string | undefined
}
type ContentSourcesList = {
  type?: 'content_source.list' | undefined
  total_count?: number | undefined
  content_sources?: ContentSource[] | undefined
}
type AiAgent = {
  source_type?:
    | 'essentials_plan_setup'
    | 'profile'
    | 'workflow'
    | 'workflow_preview'
    | 'fin_preview'
    | undefined
  source_title?: (string | null) | undefined
  last_answer_type?: null | 'ai_answer' | 'custom_answer' | undefined
  resolution_state?:
    | 'assumed_resolution'
    | 'confirmed_resolution'
    | 'escalated'
    | 'negative_feedback'
    | 'procedure_handoff'
    | null
    | undefined
  rating?: (number | null) | undefined
  rating_remark?: (string | null) | undefined
  created_at?: (number | null) | undefined
  updated_at?: (number | null) | undefined
  content_sources?: ContentSourcesList | undefined
}
type SalesAgent = {
  outcome?:
    | 'qualified'
    | 'disqualified'
    | 'product_discovery'
    | 'escalated_to_support'
    | 'spam'
    | undefined
  routing_outcome?: (string | null) | undefined
  collected_data?: ({ [x: string]: string } | null) | undefined
}
type FileAttribute = {
  type?: string | undefined
  name?: string | undefined
  url?: string | undefined
  content_type?: string | undefined
  filesize?: number | undefined
  width?: number | undefined
  height?: number | undefined
}
type ConversationExternalReference = { type?: string | undefined; id?: string | undefined }
type ConversationMonitorEvaluation = {
  monitor_id?: string | undefined
  monitor_name?: (string | null) | undefined
  monitor_type?: (string | null) | undefined
  result?: string | undefined
  explanation?: (string | null) | undefined
  evaluated_at?: (number | null) | undefined
}
type ConversationScorecardReviewedTeammate = {
  type?: 'ai' | 'admin' | undefined
  admin_id?: (string | null) | undefined
}
type ConversationScorecardReviewer = {
  type?: 'ai' | 'admin' | undefined
  admin_id?: (string | null) | undefined
} | null
type ConversationScorecardSubmittedBy = {
  type?: 'ai' | 'admin' | undefined
  admin_id?: (string | null) | undefined
} | null
type ConversationScorecardRevisedBy = {
  type?: 'ai' | 'admin' | undefined
  admin_id?: (string | null) | undefined
} | null
type ConversationScorecardNoteAuthor = {
  type?: 'ai' | 'admin' | undefined
  admin_id?: (string | null) | undefined
} | null
type ConversationScorecardNote = {
  id?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  author?: ConversationScorecardNoteAuthor | undefined
  body?: string | undefined
}
type ConversationScorecardEvaluatorReason = { name?: (string | null) | undefined }
type ConversationScorecardEvaluator = {
  evaluator_id?: string | undefined
  name?: (string | null) | undefined
  result?:
    | {
        value?: (string | null) | undefined
        value_label?: string | undefined
        source?: (string | null) | undefined
        reasoning?: (string | null) | undefined
        reason_ids?: (string[] | null) | undefined
        reasons?: ConversationScorecardEvaluatorReason[] | undefined
        other_text?: (string | null) | undefined
      }
    | undefined
}
type ConversationScorecard = {
  scorecard_id?: string | undefined
  scorecard_version_id?: string | undefined
  name?: string | undefined
  scorecard_type?: string | undefined
  passed?: (boolean | null) | undefined
  score?: (number | null) | undefined
  ai_score?: (number | null) | undefined
  evaluated_at?: (number | null) | undefined
  reviewed_teammate?: ConversationScorecardReviewedTeammate | undefined
  reviewer?: ConversationScorecardReviewer | undefined
  review_status?:
    | 'unreviewed'
    | 'submitted'
    | 'passed_review'
    | 'needs_fix'
    | 'wont_fix'
    | 'fix_complete'
    | undefined
  submitted_by?: ConversationScorecardSubmittedBy | undefined
  revised_by?: ConversationScorecardRevisedBy | undefined
  notes?: ConversationScorecardNote[] | undefined
  evaluators?: ConversationScorecardEvaluator[] | undefined
}
type ConversationListItem = {
  type?: string | undefined
  id?: string | undefined
  title?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  waiting_since?: (number | null) | undefined
  snoozed_until?: (number | null) | undefined
  open?: boolean | undefined
  state?: 'open' | 'closed' | 'snoozed' | undefined
  read?: boolean | undefined
  priority?: 'none' | 'low' | 'medium' | 'high' | 'urgent' | undefined
  admin_assignee_id?: number | undefined
  team_assignee_id?: number | undefined
  company?: Company | undefined
  tags?: Tags | undefined
  conversation_rating?: ConversationRating | undefined
  source?: ConversationSource | undefined
  contacts?: ConversationContacts | undefined
  teammates?: ConversationTeammates | undefined
  custom_attributes?: CustomAttributes | undefined
  first_contact_reply?: ConversationFirstContactReply | undefined
  sla_applied?: SlaApplied | undefined
  statistics?: ConversationStatistics | undefined
  linked_objects?: LinkedObjectList | undefined
  ai_agent_participated?: boolean | undefined
  ai_agent?: AiAgent | undefined
  sales_agent_participated?: boolean | undefined
  sales_agent?: SalesAgent | undefined
  channel?:
    | { initial?: (string | null) | undefined; current?: (string | null) | undefined }
    | undefined
  topics?:
    | {
        type?: string | undefined
        topics?:
          | { type?: string | undefined; id?: number | undefined; name?: string | undefined }[]
          | undefined
        total_count?: number | undefined
      }
    | undefined
  ticket?:
    | ({
        type?: string | undefined
        id?: number | undefined
        url?: string | undefined
        custom_attributes?:
          | {
              [x: string]: {
                value?: (string | null) | number | boolean | number[] | FileAttribute | undefined
                type?: string | undefined
              }
            }
          | undefined
        state?: string | undefined
        ticket_type?: string | undefined
        ticket_type_description?: string | undefined
        ticket_type_emoji?: (string | null) | undefined
        ticket_custom_state_admin_label?: (string | null) | undefined
        ticket_custom_state_user_label?: (string | null) | undefined
      } | null)
    | undefined
  external_references?: ConversationExternalReference[] | undefined
  monitor_evaluations?: ConversationMonitorEvaluation[] | undefined
  scorecards?: ConversationScorecard[] | undefined
}
type ConversationList = {
  type?: 'conversation.list' | undefined
  conversations?: ConversationListItem[] | undefined
  total_count?: number | undefined
  pages?: CursorPages | undefined
}
type CreateConversationRequest = {
  from: {
    type: 'lead' | 'user'
    id?: string | undefined
    user_id?: string | undefined
    email?: string | undefined
  }
  body: string
  subject?: string | undefined
  attachment_urls?: string[] | undefined
  created_at?: number | undefined
  brand_id?: string | undefined
}
type ConversationPartAuthor = {
  type?: string | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  from_ai_agent?: boolean | undefined
  is_ai_answer?: boolean | undefined
}
type EmailMessageMetadata = {
  subject?: string | undefined
  email_address_headers?: EmailAddressHeader[] | undefined
  message_id?: (string | null) | undefined
}
type ConversationPartMetadata = {
  quick_reply_options?: { text: string; uuid: string }[] | undefined
  quick_reply_option_uuid?: string | undefined
}
type ConversationAttributeUpdatedByWorkflow = {
  workflow?: { name?: string | undefined } | undefined
  attribute?: { name?: string | undefined } | undefined
  value?: { name?: string | undefined } | undefined
}
type ConversationAttributeUpdatedByAdmin = {
  attribute?: { name?: string | undefined } | undefined
  value?: { name?: string | undefined; previous?: (string | null) | undefined } | undefined
}
type ConversationAttributeUpdatedByUser = {
  attribute?: { name?: string | undefined } | undefined
  value?: { name?: string | undefined; previous?: (string | null) | undefined } | undefined
}
type CustomActionStarted = { action?: { name?: string | undefined } | undefined }
type CustomActionFinished = {
  action?: { name?: string | undefined; result?: 'success' | 'failed' | undefined } | undefined
}
type OperatorWorkflowEvent = {
  workflow?: { name?: string | undefined } | undefined
  event?: { type?: string | undefined; result?: string | undefined } | undefined
}
type CallSummary = { call_id?: string | undefined }
type AiAgentEventOtpEmailVerificationFailed = {
  event?:
    | {
        type?: string | undefined
        value?: string | undefined
        data?:
          | { otp_email_verification_failed?: { reason?: string | undefined } | undefined }
          | undefined
      }
    | undefined
}
type EventDetails =
  | ConversationAttributeUpdatedByWorkflow
  | ConversationAttributeUpdatedByAdmin
  | ConversationAttributeUpdatedByUser
  | CustomActionStarted
  | CustomActionFinished
  | OperatorWorkflowEvent
  | CallSummary
  | AiAgentEventOtpEmailVerificationFailed
type ConversationPart = {
  type?: string | undefined
  id?: string | undefined
  part_type?: string | undefined
  body?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  notified_at?: number | undefined
  assigned_to?: Reference | undefined
  admin_assignee_id?: (number | null) | undefined
  team_assignee_id?: (number | null) | undefined
  author?: ConversationPartAuthor | undefined
  attachments?: PartAttachment[] | undefined
  external_id?: (string | null) | undefined
  redacted?: boolean | undefined
  email_message_metadata?: EmailMessageMetadata | undefined
  metadata?: ConversationPartMetadata | undefined
  state?: 'open' | 'closed' | 'snoozed' | undefined
  tags?: (TagBasic[] | null) | undefined
  event_details?: EventDetails | undefined
  app_package_code?: (string | null) | undefined
  translations?: ({ original?: string | undefined } | null) | undefined
}
type ConversationParts = {
  type?: 'conversation_part.list' | undefined
  conversation_parts?: ConversationPart[] | undefined
  total_count?: number | undefined
}
type Conversation = {
  type?: string | undefined
  id?: string | undefined
  title?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  waiting_since?: (number | null) | undefined
  snoozed_until?: (number | null) | undefined
  open?: boolean | undefined
  state?: 'open' | 'closed' | 'snoozed' | undefined
  read?: boolean | undefined
  priority?: 'none' | 'low' | 'medium' | 'high' | 'urgent' | undefined
  admin_assignee_id?: number | undefined
  team_assignee_id?: number | undefined
  company?: Company | undefined
  tags?: Tags | undefined
  conversation_rating?: ConversationRating | undefined
  source?: ConversationSource | undefined
  contacts?: ConversationContacts | undefined
  teammates?: ConversationTeammates | undefined
  custom_attributes?: CustomAttributes | undefined
  first_contact_reply?: ConversationFirstContactReply | undefined
  sla_applied?: SlaApplied | undefined
  statistics?: ConversationStatistics | undefined
  conversation_parts?: ConversationParts | undefined
  linked_objects?: LinkedObjectList | undefined
  ai_agent_participated?: boolean | undefined
  ai_agent?: AiAgent | undefined
  sales_agent_participated?: boolean | undefined
  sales_agent?: SalesAgent | undefined
  channel?:
    | { initial?: (string | null) | undefined; current?: (string | null) | undefined }
    | undefined
  external_references?: ConversationExternalReference[] | undefined
  monitor_evaluations?: ConversationMonitorEvaluation[] | undefined
  scorecards?: ConversationScorecard[] | undefined
}
type Datetime = string | number
type CustomObjectInstance = {
  id?: string | undefined
  external_id?: string | undefined
  external_created_at?: (number | null) | undefined
  external_updated_at?: (number | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  type?: string | undefined
  custom_attributes?:
    | { [x: string]: (string | null) | number | number | boolean | { [x: string]: unknown } }
    | undefined
} | null
type CustomObjectInstanceList = {
  type?: string | undefined
  instances?: CustomObjectInstance[] | undefined
}
type CustomAttributesRequest = {
  [x: string]: string | number | number | boolean | Datetime | CustomObjectInstanceList
}
type UpdateConversationRequest = {
  read?: boolean | undefined
  title?: string | undefined
  custom_attributes?: CustomAttributesRequest | undefined
  company_id?: string | undefined
}
type ConversationDeleted = {
  id?: string | undefined
  object?: 'conversation' | 'ticket' | undefined
  deleted?: boolean | undefined
}
type SearchRequest = {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest
  pagination?: StartingAfterPaging | undefined
  sort?: { field: string; order?: 'ascending' | 'descending' | undefined } | undefined
}
type ContactReplyIntercomUserIdRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyEmailRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyUserIdRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyConversationRequest =
  | ContactReplyIntercomUserIdRequest
  | ContactReplyEmailRequest
  | ContactReplyUserIdRequest
type QuickReplyOption = { text: string; uuid: string }
type ConversationAttachmentFiles = {
  content_type?: string | undefined
  data?: string | undefined
  name?: string | undefined
}
type AdminReplyConversationRequest = {
  message_type: 'comment' | 'note' | 'quick_reply'
  type: 'admin'
  body?: string | undefined
  admin_id: string
  created_at?: number | undefined
  reply_options?: QuickReplyOption[] | undefined
  attachment_urls?: string[] | undefined
  attachment_files?: ConversationAttachmentFiles[] | undefined
  skip_notifications?: boolean | undefined
  assignee_id?: string | undefined
  skip_reopen?: boolean | undefined
}
type BotReplyConversationRequest = {
  message_type: 'comment' | 'note' | 'quick_reply'
  type: 'bot'
  bot_id: string
  body?: string | undefined
  created_at?: number | undefined
  reply_options?: QuickReplyOption[] | undefined
  attachment_urls?: string[] | undefined
  skip_notifications?: boolean | undefined
}
type ReplyConversationRequest =
  | ContactReplyConversationRequest
  | AdminReplyConversationRequest
  | BotReplyConversationRequest
type CloseConversationRequest = {
  message_type: 'close'
  type: 'admin'
  admin_id: string
  body?: string | undefined
  assignee_id?: string | undefined
  skip_notifications?: boolean | undefined
}
type SnoozeConversationRequest = {
  message_type: 'snoozed'
  admin_id: string
  snoozed_until: number
}
type OpenConversationRequest = {
  message_type: 'open'
  admin_id: string
  assignee_id?: string | undefined
  skip_notifications?: boolean | undefined
}
type AssignConversationRequest = {
  message_type: 'assignment'
  type: 'admin' | 'team'
  admin_id: string
  assignee_id: string
  body?: string | undefined
  skip_reopen?: boolean | undefined
  skip_notifications?: boolean | undefined
}
type CustomerRequest = { intercom_user_id: string } | { user_id: string } | { email: string }
type AttachContactToConversationRequest = {
  admin_id?: string | undefined
  intercom_user_id?: string | undefined
  user_id?: string | undefined
  email?: string | undefined
  customer: CustomerRequest
}
type ConversationParticipantsResponse = { customers: { type: string; id: string }[] }
type DetachContactFromConversationRequest = { admin_id: string }
type TeammateReference = {
  type: 'admin' | 'team' | 'bot'
  id: number
  name: string
  email?: (string | null) | undefined
}
type HandlingEvent = {
  teammate: TeammateReference
  type: 'paused' | 'resumed'
  timestamp: string
  reason?: (string | null) | undefined
}
type HandlingEventList = { handling_events?: HandlingEvent[] | undefined }
type HitlEvent = {
  hitl_cycle_id?: string | undefined
  event_type?:
    | 'fin_consultation_started'
    | 'fin_draft_proposed'
    | 'fin_teammate_input_received'
    | 'fin_draft_revised'
    | 'fin_consultation_finished'
    | undefined
  conversation_part_id?: (string | null) | undefined
  rule_id?: (string | null) | undefined
  rule_name?: (string | null) | undefined
  created_at?: number | undefined
  data?:
    | {
        channel?: 'email' | 'chat' | 'voice' | 'unknown' | undefined
        rule_threshold_percent?: (number | null) | undefined
        confidence_percent?: (number | null) | undefined
        sharp_ask?: (string | null) | undefined
        ask_rationale?: (string | null) | undefined
        issue_summary?: (string | null) | undefined
        customer_question?: (string | null) | undefined
        draft?: (string | null) | undefined
        round_index?: number | undefined
        teammate_input?: (string | null) | undefined
        reviewer_admin_id?: (string | null) | undefined
        regeneration_outcome?: (string | null) | undefined
        revised_draft?: (string | null) | undefined
        outcome?:
          | 'approved'
          | 'taken_over'
          | 'timed_out_sent'
          | 'timed_out_escalated'
          | 'superseded'
          | undefined
        approved_draft_type?: 'original' | 'revised' | undefined
        final_draft?: (string | null) | undefined
        sent_text?: (string | null) | undefined
        duration_seconds?: (number | null) | undefined
        rounds_count?: number | undefined
        payload_truncated?: boolean | undefined
      }
    | undefined
}
type HitlEventList = { type?: 'list' | undefined; data?: HitlEvent[] | undefined }
type SideConversationSummary = {
  side_conversation_id?: string | undefined
  conversation_parts?: ConversationPart[] | undefined
  total_count?: number | undefined
}
type SideConversationList = {
  type?: 'side_conversation.list' | undefined
  side_conversations?: SideConversationSummary[] | undefined
  total_count?: number | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        page?: number | undefined
        per_page?: number | undefined
        total_pages?: number | undefined
      }
    | undefined
}
type RateConversationRequest = {
  intercom_user_id: string
  rating: number
  remark?: string | undefined
}
type RatedConversation = {
  type?: 'conversation_rating' | undefined
  conversation_id?: string | undefined
  rating?: number | undefined
  remark?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  customer?: { type?: 'user' | 'lead' | 'visitor' | undefined; id?: string | undefined } | undefined
  teammate?:
    | { type?: 'admin' | 'bot' | 'workflow' | undefined; id?: string | undefined }
    | undefined
}
type RedactConversationRequest =
  | { type: 'conversation_part'; conversation_id: string; conversation_part_id: string }
  | { type: 'source'; conversation_id: string; source_id: string }
type MergeConversationsRequest = { merge_into_conversation_id: number }
type TicketRequestCustomAttributes = {
  [x: string]: (string | null) | number | boolean | number[] | string[]
}
type ConvertConversationToTicketRequest = {
  ticket_type_id: string
  ticket_state_id?: string | undefined
  attributes?: TicketRequestCustomAttributes | undefined
}
type TicketCustomAttributes = {
  [x: string]: (string | null) | number | boolean | FileAttribute[] | FileAttribute
}
type TicketState = {
  type?: string | undefined
  id?: string | undefined
  category?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'resolved' | undefined
  internal_label?: string | undefined
  external_label?: string | undefined
} | null
type TicketTypeAttribute = {
  type?: string | undefined
  id?: string | undefined
  workspace_id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: string | undefined
  input_options?: ({ [x: string]: unknown } | null) | undefined
  order?: number | undefined
  required_to_create?: boolean | undefined
  required_to_create_for_contacts?: boolean | undefined
  visible_on_create?: boolean | undefined
  visible_to_contacts?: boolean | undefined
  default?: boolean | undefined
  ticket_type_id?: number | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
} | null
type TicketTypeAttributeList = {
  type?: string | undefined
  data?: TicketTypeAttribute[] | undefined
}
type TicketType = {
  type?: string | undefined
  id?: string | undefined
  category?: 'Customer' | 'Back-office' | 'Tracker' | undefined
  name?: string | undefined
  description?: string | undefined
  icon?: string | undefined
  workspace_id?: string | undefined
  ticket_type_attributes?: TicketTypeAttributeList | undefined
  ticket_states?: { type?: string | undefined; data?: TicketState[] | undefined } | undefined
  archived?: boolean | undefined
  is_internal?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
} | null
type TicketContacts = {
  type?: 'contact.list' | undefined
  contacts?: ContactReference[] | undefined
}
type TicketPartAuthor = {
  type?: 'admin' | 'bot' | 'team' | 'user' | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  email?: string | undefined
}
type TicketPart = {
  type?: string | undefined
  id?: string | undefined
  part_type?: string | undefined
  body?: (string | null) | undefined
  previous_ticket_state?:
    | 'submitted'
    | 'in_progress'
    | 'waiting_on_customer'
    | 'resolved'
    | undefined
  ticket_state?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'resolved' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  assigned_to?: Reference | undefined
  admin_assignee_id?: (number | null) | undefined
  team_assignee_id?: (number | null) | undefined
  author?: TicketPartAuthor | undefined
  attachments?: PartAttachment[] | undefined
  external_id?: (string | null) | undefined
  redacted?: boolean | undefined
  app_package_code?: string | undefined
  translations?: ({ original?: string | undefined } | null) | undefined
  updated_attribute_data?:
    | ({
        attribute: { type: 'attribute'; id: string; label: string }
        value: { type: 'value'; id: (string | null) | number[]; label: string | string[] }
      } | null)
    | undefined
}
type TicketParts = {
  type?: 'ticket_part.list' | undefined
  ticket_parts?: TicketPart[] | undefined
  total_count?: number | undefined
}
type Ticket = {
  type?: 'ticket' | undefined
  id?: string | undefined
  ticket_id?: string | undefined
  category?: 'Customer' | 'Back-office' | 'Tracker' | undefined
  channel?: (string | null) | undefined
  ticket_attributes?: TicketCustomAttributes | undefined
  ticket_state?: TicketState | undefined
  ticket_type?: TicketType | undefined
  contacts?: TicketContacts | undefined
  admin_assignee_id?: number | undefined
  team_assignee_id?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  open?: boolean | undefined
  snoozed_until?: number | undefined
  linked_objects?: LinkedObjectList | undefined
  ticket_parts?: TicketParts | undefined
  is_shared?: boolean | undefined
  company_id?: (string | null) | undefined
  previous_ticket_state_id?: (string | null) | undefined
} | null
type DeletedConversationItem = {
  type?: string | undefined
  id?: string | undefined
  metrics_retained?: boolean | undefined
  deleted_at?: number | undefined
}
type DeletedConversationList = {
  type?: string | undefined
  conversations?: DeletedConversationItem[] | undefined
  total_count?: number | undefined
  pages?: PagesLink | undefined
}
type CreateConversationStreamTokenRequest = { external_id: string }
type ConversationStreamToken = {
  type?: 'conversation_stream_token' | undefined
  expires_at?: number | undefined
  stream?:
    | {
        provider?: string | undefined
        url?: string | undefined
        channel?: string | undefined
        token?: string | undefined
      }
    | undefined
  links?:
    | {
        self?: { href?: string | undefined; method?: string | undefined } | undefined
        revoke?: { href?: string | undefined; method?: string | undefined } | undefined
      }
    | undefined
}
type ConversationAttributeStringType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'string' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
  multiline?: boolean | undefined
}
type ConversationAttributeIntegerType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'integer' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
}
type ConversationAttributeOption = {
  id?: string | undefined
  label?: string | undefined
  archived?: boolean | undefined
}
type ConversationAttributeListType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'list' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
  options?: ConversationAttributeOption[] | undefined
}
type ConversationAttributeDecimalType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'decimal' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
}
type ConversationAttributeBooleanType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'boolean' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
}
type ConversationAttributeDatetimeType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'datetime' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
}
type ConversationAttributeRelationshipType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'relationship' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
  reference?: { type?: 'one' | 'many' | undefined; object_type_id?: string | undefined } | undefined
}
type ConversationAttributeFilesType = {
  type?: 'conversation_attribute' | undefined
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  data_type?: 'files' | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: (string | null) | undefined
}
type ConversationAttribute =
  | ConversationAttributeStringType
  | ConversationAttributeIntegerType
  | ConversationAttributeListType
  | ConversationAttributeDecimalType
  | ConversationAttributeBooleanType
  | ConversationAttributeDatetimeType
  | ConversationAttributeRelationshipType
  | ConversationAttributeFilesType
type ConversationAttributeList = {
  type?: 'list' | undefined
  data?: ConversationAttribute[] | undefined
}
type CreateConversationAttributeStringRequest = {
  name: string
  description?: string | undefined
  data_type: 'string'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  multiline?: boolean | undefined
}
type CreateConversationAttributeIntegerRequest = {
  name: string
  description?: string | undefined
  data_type: 'integer'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
}
type CreateConversationAttributeOptionRequest = { label: string }
type CreateConversationAttributeListRequest = {
  name: string
  description?: string | undefined
  data_type: 'list'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  options: CreateConversationAttributeOptionRequest[]
}
type CreateConversationAttributeDecimalRequest = {
  name: string
  description?: string | undefined
  data_type: 'decimal'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
}
type CreateConversationAttributeBooleanRequest = {
  name: string
  description?: string | undefined
  data_type: 'boolean'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
}
type CreateConversationAttributeDatetimeRequest = {
  name: string
  description?: string | undefined
  data_type: 'datetime'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
}
type CreateConversationAttributeRelationshipRequest = {
  name: string
  description?: string | undefined
  data_type: 'relationship'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  reference: { type: 'one' | 'many'; object_type_id: string }
}
type CreateConversationAttributeFilesRequest = {
  name: string
  description?: string | undefined
  data_type: 'files'
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
}
type CreateConversationAttributeRequest =
  | CreateConversationAttributeStringRequest
  | CreateConversationAttributeIntegerRequest
  | CreateConversationAttributeListRequest
  | CreateConversationAttributeDecimalRequest
  | CreateConversationAttributeBooleanRequest
  | CreateConversationAttributeDatetimeRequest
  | CreateConversationAttributeRelationshipRequest
  | CreateConversationAttributeFilesRequest
type UpdateConversationAttributeRequest = {
  name?: string | undefined
  description?: string | undefined
  multiline?: boolean | undefined
  required?: boolean | undefined
  visible_to_team_ids?: string[] | undefined
  reference?: { type: 'one' | 'many'; object_type_id?: string | undefined } | undefined
}
type UpdateConversationAttributeOptionRequest = { label: string }
type CreateOrUpdateCustomObjectInstanceRequest = {
  external_id?: string | undefined
  external_created_at?: (number | null) | undefined
  external_updated_at?: (number | null) | undefined
  custom_attributes?:
    | ({ [x: string]: (string | null) | number | number | boolean | string[] } | null)
    | undefined
}
type CustomObjectInstancesPaginatedList = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: CustomObjectInstance[] | undefined
}
type CustomObjectInstanceNotFound = {
  found: boolean
  id?: (string | null) | undefined
  external_id?: (string | null) | undefined
  type?: string | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  external_created_at?: (number | null) | undefined
  external_updated_at?: (number | null) | undefined
  created_at?: (number | null) | undefined
  updated_at?: (number | null) | undefined
}
type CustomObjectInstanceDeleted = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type DataAttribute = {
  type?: 'data_attribute' | undefined
  id?: number | undefined
  model?: 'contact' | 'company' | undefined
  name?: string | undefined
  full_name?: string | undefined
  label?: string | undefined
  description?: string | undefined
  data_type?:
    | 'string'
    | 'integer'
    | 'float'
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'relationship'
    | undefined
  options?: string[] | undefined
  api_writable?: boolean | undefined
  messenger_writable?: boolean | undefined
  ui_writable?: boolean | undefined
  custom?: boolean | undefined
  archived?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  admin_id?: string | undefined
}
type DataAttributeList = { type?: 'list' | undefined; data?: DataAttribute[] | undefined }
type CreateDataAttributeRequest =
  | { data_type?: 'options' | undefined; options: { value?: string | undefined }[] }
  | { data_type?: 'string' | 'integer' | 'float' | 'boolean' | 'date' | undefined }
type UpdateDataAttributeRequest =
  | { options: { value?: string | undefined }[] }
  | { [x: string]: unknown }
type DataConnector = {
  type?: 'data_connector' | undefined
  id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  internal_description?: string | undefined
  state?: 'draft' | 'live' | undefined
  http_method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined
  enforce_auth?: boolean | undefined
  direct_fin_usage?: boolean | undefined
  created_by_admin_id?: string | undefined
  updated_by_admin_id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  execution_results_url?: string | undefined
}
type DataConnectorList = {
  type?: 'list' | undefined
  data?: DataConnector[] | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        per_page?: number | undefined
        next?: ({ starting_after?: string | undefined } | null) | undefined
      }
    | undefined
}
type CreateDataConnectorRequest = {
  name: string
  description?: string | undefined
  internal_description?: string | undefined
  http_method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined
  url?: string | undefined
  body?: string | undefined
  direct_fin_usage?: boolean | undefined
  audiences?: ('leads' | 'users' | 'visitors')[] | undefined
  headers?: { name: string; value: string }[] | undefined
  data_inputs?:
    | {
        name: string
        type: 'string' | 'integer' | 'decimal' | 'boolean'
        description: string
        required: boolean
        default_value?: string | undefined
      }[]
    | undefined
  customer_authentication?: boolean | undefined
  bypass_authentication?: boolean | undefined
  enforce_auth?: boolean | undefined
  validate_missing_attributes?: boolean | undefined
  mock_response?: { [x: string]: unknown } | undefined
  token_ids?: string[] | undefined
}
type DataConnectorDetail = {
  type?: 'data_connector' | undefined
  id?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  internal_description?: string | undefined
  state?: 'draft' | 'live' | undefined
  url?: (string | null) | undefined
  body?: string | undefined
  headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
  http_method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined
  direct_fin_usage?: boolean | undefined
  audiences?: ('users' | 'leads' | 'visitors')[] | undefined
  execution_type?: 'server_side' | 'client_side' | undefined
  configuration_response_type?: 'test_response_type' | 'mock_response_type' | undefined
  data_transformation_type?:
    | 'full_access'
    | 'redacted_access'
    | 'code_block_transformation'
    | undefined
  transform_code_block?: { code?: string | undefined; language?: string | undefined } | undefined
  client_function_name?: (string | null) | undefined
  client_function_timeout_ms?: (number | null) | undefined
  data_inputs?:
    | {
        name?: string | undefined
        type?: 'string' | 'integer' | 'decimal' | 'boolean' | undefined
        description?: (string | null) | undefined
        required?: boolean | undefined
        default_value?: string | undefined
      }[]
    | undefined
  response_fields?:
    | {
        path?: string | undefined
        type?: 'unknown' | 'string' | 'integer' | 'decimal' | 'datetime' | 'boolean' | undefined
        example_value?: ({ [x: string]: unknown } | null) | undefined
        redacted?: boolean | undefined
      }[]
    | undefined
  object_mappings?:
    | {
        response_object_path?: string | undefined
        intercom_object_type?: 'conversation' | 'user' | undefined
        attribute_mappings?:
          | {
              response_attribute_path?: string | undefined
              intercom_attribute_identifier?: string | undefined
              mapping_type?: 'primitive_mapping' | 'context_mapping' | undefined
            }[]
          | undefined
        reference_mappings?:
          | {
              intercom_object_type?: 'conversation' | 'user' | undefined
              intercom_attribute_identifier?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  token_ids?: string[] | undefined
  customer_authentication?: boolean | undefined
  bypass_authentication?: boolean | undefined
  enforce_auth?: boolean | undefined
  validate_missing_attributes?: (boolean | null) | undefined
  created_by_admin_id?: (string | null) | undefined
  updated_by_admin_id?: (string | null) | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  execution_results_url?: string | undefined
}
type DeletedDataConnectorObject = {
  id?: string | undefined
  object?: 'data_connector' | undefined
  deleted?: boolean | undefined
}
type UpdateDataConnectorRequest = {
  name?: string | undefined
  description?: string | undefined
  internal_description?: string | undefined
  state?: 'draft' | 'live' | undefined
  http_method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined
  url?: string | undefined
  body?: string | undefined
  direct_fin_usage?: boolean | undefined
  audiences?: ('leads' | 'users' | 'visitors')[] | undefined
  headers?: { name: string; value: string }[] | undefined
  data_inputs?:
    | {
        name: string
        type: 'string' | 'integer' | 'decimal' | 'boolean'
        description: string
        required: boolean
        default_value?: string | undefined
      }[]
    | undefined
  customer_authentication?: boolean | undefined
  bypass_authentication?: boolean | undefined
  enforce_auth?: boolean | undefined
  validate_missing_attributes?: boolean | undefined
  mock_response?: { [x: string]: unknown } | undefined
  token_ids?: string[] | undefined
}
type DataConnectorExecutionResult = {
  type?: 'data_connector.execution' | undefined
  id?: string | undefined
  data_connector_id?: string | undefined
  success?: boolean | undefined
  http_status?: (number | null) | undefined
  http_method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | undefined
  error_type?:
    | 'request_configuration_error'
    | 'faraday_error'
    | '3rd_party_error'
    | 'response_mapping_error'
    | 'token_refresh_error'
    | 'fin_action_response_formatting_error'
    | 'fin_action_identity_verification_error'
    | 'email_verification_error'
    | 'non_fin_standalone_action_identity_verification_error'
    | 'request_validation_error'
    | 'client_side_action_error'
    | 'code_block_transformation_error'
    | 'otp_preview_not_supported_error'
    | undefined
  error_message?: (string | null) | undefined
  execution_time_ms?: (number | null) | undefined
  source_type?:
    | 'custom_bot'
    | 'inbound_custom_bot'
    | 'button_custom_bot'
    | 'answer'
    | 'workflow'
    | 'saved_reply'
    | 'triggerable_custom_bot'
    | 'inbox'
    | 'fin'
    | 'synthetic_test'
    | undefined
  source_id?: (string | null) | undefined
  conversation_id?: (string | null) | undefined
  created_at?: string | undefined
  request_url?: (string | null) | undefined
  request_body?: (string | null) | undefined
  response_body?: (string | null) | undefined
  raw_response_body?: (string | null) | undefined
}
type DataConnectorExecutionResultList = {
  type?: 'list' | undefined
  data?: DataConnectorExecutionResult[] | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        per_page?: number | undefined
        next?: ({ starting_after?: string | undefined } | null) | undefined
      }
    | undefined
}
type DataConnectorVersion = {
  type?: 'data_connector_version' | undefined
  status?: 'live' | 'paused' | 'draft' | 'previously_live' | undefined
  note?: (string | null) | undefined
  author?: ({ id?: number | undefined; name?: string | undefined } | null) | undefined
  created_at?: string | undefined
  entity_version_id?: number | undefined
  definition?:
    | ({
        name?: string | undefined
        description?: (string | null) | undefined
        internal_description?: (string | null) | undefined
        state?: string | undefined
        url?: (string | null) | undefined
        body?: (string | null) | undefined
        headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
        http_method?: string | undefined
        direct_fin_usage?: boolean | undefined
        audiences?: string[] | undefined
        execution_type?: (string | null) | undefined
        configuration_response_type?: (string | null) | undefined
        data_transformation_type?: (string | null) | undefined
        client_function_name?: (string | null) | undefined
        client_function_timeout_ms?: (number | null) | undefined
        data_inputs?:
          | {
              name?: string | undefined
              type?: string | undefined
              description?: (string | null) | undefined
              required?: boolean | undefined
              default_value?: { [x: string]: unknown } | undefined
            }[]
          | undefined
        response_fields?:
          | {
              path?: string | undefined
              type?: string | undefined
              example_value?: { [x: string]: unknown } | undefined
              redacted?: boolean | undefined
            }[]
          | undefined
        object_mappings?:
          | {
              response_object_path?: string | undefined
              intercom_object_type?: string | undefined
              attribute_mappings?:
                | {
                    response_attribute_path?: string | undefined
                    intercom_attribute_identifier?: string | undefined
                    mapping_type?: string | undefined
                  }[]
                | undefined
              reference_mappings?:
                | {
                    intercom_object_type?: string | undefined
                    intercom_attribute_identifier?: string | undefined
                  }[]
                | undefined
            }[]
          | undefined
        token_ids?: string[] | undefined
        customer_authentication?: boolean | undefined
        bypass_authentication?: boolean | undefined
        enforce_auth?: (boolean | null) | undefined
        validate_missing_attributes?: (boolean | null) | undefined
      } | null)
    | undefined
}
type DataConnectorVersionList = {
  type?: 'list' | undefined
  data?: DataConnectorVersion[] | undefined
  pages?:
    | {
        type?: 'pages' | undefined
        per_page?: number | undefined
        next?: { starting_after?: string | undefined } | undefined
      }
    | undefined
}
type UpdateDataConnectorVersionRequest = { note: string | null }
type CreateDataEventRequest =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type DataEvent = {
  type?: 'event' | undefined
  event_name: string
  created_at: number
  user_id?: string | undefined
  id?: string | undefined
  intercom_user_id?: string | undefined
  email?: string | undefined
  metadata?:
    | { [x: string]: string | number | number | boolean | { [x: string]: unknown } }
    | undefined
}
type DataEventList = {
  type?: 'event.list' | undefined
  events?: DataEvent[] | undefined
  pages?: { next?: string | undefined; since?: string | undefined } | undefined
}
type DataEventSummaryItem = {
  name?: string | undefined
  first?: string | undefined
  last?: string | undefined
  count?: number | undefined
  description?: string | undefined
} | null
type DataEventSummary = {
  type?: 'event.summary' | undefined
  email?: string | undefined
  intercom_user_id?: string | undefined
  user_id?: string | undefined
  events?: DataEventSummaryItem[] | undefined
}
type CreateDataEventSummariesRequest =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type CreateDataExportsRequest = { created_at_after: number; created_at_before: number }
type DataExport = {
  job_identifier?: string | undefined
  status?: 'pending' | 'in_progress' | 'failed' | 'completed' | 'no_data' | 'canceled' | undefined
  download_expires_at?: string | undefined
  download_url?: string | undefined
}
type Jobs = {
  type?: 'job' | undefined
  id: string
  url?: string | undefined
  status?: 'pending' | 'success' | 'failed' | undefined
  resource_type?: string | undefined
  resource_id?: (string | null) | undefined
  resource_url?: (string | null) | undefined
}
type CreateMessageRequest =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type Message = {
  type: string
  id: string
  created_at: number
  subject?: string | undefined
  body: string
  message_type: 'email' | 'inapp' | 'facebook' | 'twitter' | 'whatsapp'
  conversation_id?: string | undefined
  owner?: Admin | undefined
  template?: string | undefined
  external_id?: string | undefined
  whatsapp_message_id?: string | undefined
}
type WhatsappMessageStatus = {
  conversation_id?: string | undefined
  status?: 'sent' | 'delivered' | 'read' | 'failed' | undefined
  type?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  template_name?: string | undefined
  message_id?: string | undefined
  error?: ({ message?: string | undefined; details?: string | undefined } | null) | undefined
}
type WhatsappMessageStatusList = {
  type: 'list'
  ruleset_id: string
  pages: {
    type: 'pages'
    per_page: number
    total_pages: number
    next?: ({ starting_after?: string | undefined } | null) | undefined
  }
  total_count: number
  events: {
    id: string
    conversation_id: string
    status: 'sent' | 'delivered' | 'read' | 'failed'
    type: 'broadcast_outbound'
    created_at: number
    updated_at: number
    whatsapp_message_id: string
    template_name?: string | undefined
  }[]
}
type NewsfeedAssignment = {
  newsfeed_id?: number | undefined
  published_at?: (number | null) | undefined
}
type NewsItem = {
  type?: 'news-item' | undefined
  id?: string | undefined
  workspace_id?: string | undefined
  title?: string | undefined
  body?: string | undefined
  sender_id?: number | undefined
  state?: 'draft' | 'live' | undefined
  newsfeed_assignments?: NewsfeedAssignment[] | undefined
  labels?: string[] | undefined
  cover_image_url?: (string | null) | undefined
  reactions?: string[] | undefined
  deliver_silently?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  published_at?: (number | null) | undefined
}
type Newsfeed = {
  id?: string | undefined
  type?: 'newsfeed' | undefined
  name?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type PaginatedResponse = {
  type?: 'list' | undefined
  pages?: PagesLink | undefined
  total_count?: number | undefined
  data?: (NewsItem | Newsfeed)[] | undefined
}
type NewsItemRequest = {
  title: string
  body?: string | undefined
  sender_id: number
  state?: 'draft' | 'live' | undefined
  deliver_silently?: boolean | undefined
  labels?: string[] | undefined
  cover_image_url?: string | undefined
  reactions?: string[] | undefined
  newsfeed_assignments?: NewsfeedAssignment[] | undefined
}
type UpdateNewsItemRequest = {
  title?: string | undefined
  body?: string | undefined
  sender_id: number
  state?: 'draft' | 'live' | undefined
  deliver_silently?: boolean | undefined
  labels?: string[] | undefined
  cover_image_url?: string | undefined
  reactions?: string[] | undefined
  newsfeed_assignments?: NewsfeedAssignment[] | undefined
}
type DeletedObject = {
  id?: string | undefined
  object?: 'news-item' | undefined
  deleted?: boolean | undefined
}
type DeletedNoteObject = {
  id?: string | undefined
  type?: 'note' | undefined
  deleted?: boolean | undefined
}
type SegmentList = { type?: 'segment.list' | undefined; segments?: Segment[] | undefined }
type CreatePhoneSwitchRequest = {
  phone: string
  custom_attributes?: { [x: string]: (string | null) | number | boolean } | undefined
  body?: string | undefined
  send_notification?: boolean | undefined
  user_input_phone?: (string | null) | undefined
  country?: (string | null) | undefined
} | null
type PhoneSwitch = { type?: 'phone_call_redirect' | undefined; url?: string | undefined } | null
type Call = {
  type?: string | undefined
  id?: string | undefined
  conversation_id?: (string | null) | undefined
  admin_id?: (string | null) | undefined
  contact_id?: (string | null) | undefined
  state?: string | undefined
  initiated_at?: Datetime | undefined
  answered_at?: Datetime | undefined
  ended_at?: Datetime | undefined
  created_at?: Datetime | undefined
  updated_at?: Datetime | undefined
  recording_url?: (string | null) | undefined
  transcription_url?: (string | null) | undefined
  call_type?: string | undefined
  direction?: string | undefined
  ended_reason?: (string | null) | undefined
  phone?: (string | null) | undefined
  fin_recording_url?: (string | null) | undefined
  fin_transcription_url?: (string | null) | undefined
  duration?: (number | null) | undefined
  talk_time?: (number | null) | undefined
  queue_time?: (number | null) | undefined
  hold_time?: (number | null) | undefined
}
type CallList = {
  type?: string | undefined
  data?: Call[] | undefined
  total_count?: number | undefined
  pages?: PagesLink | undefined
}
type CallTranscriptTurn = {
  start_time?: string | number | undefined
  end_time?: string | number | undefined
  speaker_label?: string | undefined
  speaker?: string | undefined
  content?: string | undefined
  speaker_type?: string | undefined
  speaker_id?: string | undefined
  article_sources?:
    | {
        title?: string | undefined
        entity_type?: number | undefined
        entity_id?: string | undefined
      }[]
    | undefined
  triggered_guidance?:
    | {
        match_type?: string | undefined
        rule_id?: string | undefined
        rule_text?: string | undefined
      }[]
    | undefined
}
type CreateOrUpdateTagRequest = {
  name: string
  id?: string | undefined
  ids_to_add?: string[] | undefined
  taggable_type?: 'user' | 'company' | undefined
}
type TagCompanyRequest = {
  name: string
  companies: {
    id?: string | undefined
    company_id?: string | undefined
    name?: string | undefined
  }[]
}
type UntagCompanyRequest = {
  name: string
  companies: {
    id?: string | undefined
    company_id?: string | undefined
    name?: string | undefined
    untag: boolean
  }[]
}
type TagMultipleUsersRequest = {
  name: string
  users: {
    id?: string | undefined
    user_id?: string | undefined
    email?: string | undefined
    untag?: boolean | undefined
  }[]
}
type TagCreateResponse = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  users?: ({ id?: string | undefined; tagged?: boolean | undefined }[] | null) | undefined
  companies?: ({ id?: string | undefined; tagged?: boolean | undefined }[] | null) | undefined
}
type AdminPriorityLevel = {
  primary_admin_ids?: (number[] | null) | undefined
  secondary_admin_ids?: (number[] | null) | undefined
} | null
type Team = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  admin_ids?: number[] | undefined
  admin_priority_level?: AdminPriorityLevel | undefined
  assignment_limit?: (number | null) | undefined
  distribution_method?: (string | null) | undefined
}
type TeamList = { type?: 'team.list' | undefined; teams?: Team[] | undefined }
type TeamMetric = {
  type?: string | undefined
  admin_id?: string | undefined
  open?: number | undefined
  idle?: number | undefined
  snoozed?: number | undefined
}
type TeamMetricList = { type?: string | undefined; data?: TeamMetric[] | undefined }
type TicketStateDetailed = {
  type?: string | undefined
  id?: string | undefined
  category?: 'submitted' | 'in_progress' | 'waiting_on_customer' | 'resolved' | undefined
  internal_label?: string | undefined
  external_label?: string | undefined
  archived?: boolean | undefined
  ticket_types?:
    | {
        type?: string | undefined
        data?:
          | {
              type?: string | undefined
              id?: string | undefined
              name?: string | undefined
              description?: string | undefined
              icon?: string | undefined
              archived?: boolean | undefined
              is_internal?: boolean | undefined
              category?: 'Customer' | 'Back-office' | 'Tracker' | undefined
            }[]
          | undefined
      }
    | undefined
} | null
type TicketStateList = { type?: string | undefined; data?: TicketStateDetailed[] | undefined }
type CreateTicketTypeAttributeRequest = {
  name: string
  description?: string | undefined
  data_type: 'string' | 'list' | 'integer' | 'decimal' | 'boolean' | 'datetime' | 'files'
  required_to_create?: boolean | undefined
  required_to_create_for_contacts?: boolean | undefined
  visible_on_create?: boolean | undefined
  visible_to_contacts?: boolean | undefined
  multiline?: boolean | undefined
  list_items?: string | undefined
  allow_multiple_values?: boolean | undefined
}
type UpdateTicketTypeAttributeRequest = {
  name?: string | undefined
  description?: string | undefined
  required_to_create?: boolean | undefined
  required_to_create_for_contacts?: boolean | undefined
  visible_on_create?: boolean | undefined
  visible_to_contacts?: boolean | undefined
  multiline?: boolean | undefined
  list_items?: string | undefined
  allow_multiple_values?: boolean | undefined
  archived?: boolean | undefined
}
type TicketTypeList = { type?: string | undefined; data?: TicketType[] | undefined }
type CreateTicketTypeRequest = {
  name: string
  description?: string | undefined
  category: 'Customer' | 'Back-office' | 'Tracker'
  icon?: string | undefined
  is_internal?: boolean | undefined
} | null
type UpdateTicketTypeRequest = {
  name?: string | undefined
  description?: string | undefined
  category?: 'Customer' | 'Back-office' | 'Tracker' | undefined
  icon?: string | undefined
  archived?: boolean | undefined
  is_internal?: boolean | undefined
} | null
type ContactReplyTicketIntercomUserIdRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyTicketUserIdRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyTicketEmailRequest = {
  message_type: 'comment'
  type: 'user'
  body?: string | undefined
  created_at?: number | undefined
  attachment_urls?: string[] | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
}
type ContactReplyTicketRequest =
  | ContactReplyTicketIntercomUserIdRequest
  | ContactReplyTicketUserIdRequest
  | ContactReplyTicketEmailRequest
type AdminReplyTicketRequest = {
  message_type: 'comment' | 'note' | 'quick_reply'
  type: 'admin'
  body?: string | undefined
  admin_id: string
  created_at?: number | undefined
  reply_options?: { text: string; uuid: string }[] | undefined
  attachment_urls?: string[] | undefined
  attachment_files?: ConversationAttachmentFiles[] | undefined
  cross_post?: boolean | undefined
}
type TicketReply = {
  type?: 'ticket_part' | undefined
  id?: string | undefined
  part_type?: 'note' | 'comment' | 'quick_reply' | undefined
  body?: (string | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  author?: TicketPartAuthor | undefined
  attachments?: PartAttachment[] | undefined
  redacted?: boolean | undefined
  app_package_code?: string | undefined
  translations?: ({ original?: string | undefined } | null) | undefined
}
type TicketDeleted = {
  id?: string | undefined
  object?: 'ticket' | undefined
  deleted?: boolean | undefined
}
type ChangeTicketTypeRequest = {
  ticket_type_id: string
  ticket_state_id: string
  ticket_attributes?: { [x: string]: unknown } | undefined
}
type TicketList = {
  type?: 'ticket.list' | undefined
  tickets?: Ticket[] | undefined
  total_count?: number | undefined
  pages?: CursorPages | undefined
}
type UpdateVisitorRequest = { [x: string]: unknown } | { [x: string]: unknown }
type Visitor = {
  type?: string | undefined
  id?: string | undefined
  user_id?: string | undefined
  anonymous?: boolean | undefined
  email?: string | undefined
  phone?: (string | null) | undefined
  name?: (string | null) | undefined
  pseudonym?: (string | null) | undefined
  avatar?: { type?: string | undefined; image_url?: (string | null) | undefined } | undefined
  app_id?: string | undefined
  companies?:
    | {
        type?: 'company.list' | undefined
        companies?:
          | {
              type?: 'company' | undefined
              company_id?: (string | null) | undefined
              id?: string | undefined
              name?: string | undefined
            }[]
          | undefined
      }
    | undefined
  location_data?:
    | {
        type?: string | undefined
        city_name?: string | undefined
        continent_code?: string | undefined
        country_code?: string | undefined
        country_name?: string | undefined
        postal_code?: string | undefined
        region_name?: string | undefined
        timezone?: string | undefined
      }
    | undefined
  last_request_at?: number | undefined
  created_at?: number | undefined
  remote_created_at?: number | undefined
  signed_up_at?: number | undefined
  updated_at?: number | undefined
  session_count?: number | undefined
  social_profiles?:
    | { type?: 'social_profile.list' | undefined; social_profiles?: string[] | undefined }
    | undefined
  owner_id?: (string | null) | undefined
  unsubscribed_from_emails?: boolean | undefined
  marked_email_as_spam?: boolean | undefined
  has_hard_bounced?: boolean | undefined
  tags?:
    | {
        type?: 'tag.list' | undefined
        tags?:
          | { type?: 'tag' | undefined; id?: string | undefined; name?: string | undefined }[]
          | undefined
      }
    | undefined
  segments?:
    | {
        type?: 'segment.list' | undefined
        segments?: { type?: 'segment' | undefined; id?: string | undefined }[] | undefined
      }
    | undefined
  custom_attributes?: { [x: string]: (string | null) | number | number | boolean } | undefined
  referrer?: (string | null) | undefined
  utm_campaign?: (string | null) | undefined
  utm_content?: (string | null) | undefined
  utm_medium?: (string | null) | undefined
  utm_source?: (string | null) | undefined
  utm_term?: (string | null) | undefined
  do_not_track?: (boolean | null) | undefined
} | null
type ConvertVisitorRequest = {
  type: string
  user?: { [x: string]: unknown } | { [x: string]: unknown } | { [x: string]: unknown } | undefined
  visitor: { [x: string]: unknown } | { [x: string]: unknown }
}
type Brand = {
  type?: string | undefined
  id?: string | undefined
  name?: string | undefined
  is_default?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  help_center_id?: string | undefined
  default_address_settings_id?: string | undefined
}
type BrandList = { type?: string | undefined; data?: Brand[] | undefined }
type EmailSetting = {
  type?: string | undefined
  id?: string | undefined
  email?: string | undefined
  verified?: boolean | undefined
  domain?: string | undefined
  brand_id?: string | undefined
  forwarding_enabled?: boolean | undefined
  forwarded_email_last_received_at?: (number | null) | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type EmailList = { type?: string | undefined; data?: EmailSetting[] | undefined }
type RegisterFinVoiceCallRequest = {
  phone_number: string
  call_id: string
  source?: 'five9' | 'zoom_phone' | 'nice_cxone' | 'dialpad' | 'generic' | 'aws_connect' | undefined
  vendor_internal_id?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
} | null
type AiCallResponse = {
  id?: number | undefined
  app_id?: number | undefined
  user_phone_number?: string | undefined
  status?: string | undefined
  intercom_call_id?: (string | null) | undefined
  external_call_id?: string | undefined
  vendor_internal_id?: (string | null) | undefined
  intercom_conversation_id?: (string | null) | undefined
  call_transcript?: { [x: string]: unknown }[] | undefined
  call_summary?: string | undefined
  intent?: { [x: string]: unknown }[] | undefined
  fin_call_duration?: (string | null) | undefined
  data?: { [x: string]: unknown } | undefined
  language?: (string | null) | undefined
}
type WorkflowExport = {
  export_version?: string | undefined
  exported_at?: string | undefined
  app_id?: number | undefined
  workflow?:
    | {
        id?: string | undefined
        title?: string | undefined
        description?: (string | null) | undefined
        trigger_type?: string | undefined
        state?: 'live' | 'draft' | 'paused' | undefined
        target_channels?: string[] | undefined
        preferred_devices?: string[] | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
        targeting?: ({ [x: string]: unknown } | null) | undefined
        snapshot?: ({ [x: string]: unknown } | null) | undefined
        attributes?: { [x: string]: unknown }[] | undefined
        embedded_rules?: { [x: string]: unknown }[] | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/me': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: AdminWithApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/macros/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Macro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/macros': {
      $get:
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                updated_since?: bigint | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: MacroList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                updated_since?: bigint | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                updated_since?: bigint | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                updated_since?: bigint | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admins/:admin_id/away': {
      $put:
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Admin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                away_mode_enabled: boolean
                away_mode_reassign: boolean
                away_status_reason_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/admins/activity_logs': {
      $get:
        | {
            input: {
              query: {
                created_at_after?: string | undefined
                created_at_before?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ActivityLogList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                created_at_after?: string | undefined
                created_at_before?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                created_at_after?: string | undefined
                created_at_before?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/admins/activity_logs/search': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                event_types?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ActivityLogList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                event_types?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                event_types?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/admins/activity_log_event_types': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ActivityLogEventTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/admins': {
      $get:
        | {
            input: { query: { display_avatar?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AdminList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { display_avatar?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions/:id': {
      $get:
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: OfficeHoursException
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursExceptionRequest }
            output: OfficeHoursException
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {
              id?: string | undefined
              object?: string | undefined
              deleted?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { office_hours_schedule_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/office_hours_schedules/:office_hours_schedule_id/office_hours_exceptions': {
      $get:
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: OfficeHoursExceptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOfficeHoursExceptionRequest }
            output: OfficeHoursException
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { office_hours_schedule_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOfficeHoursExceptionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/office_hours_schedules/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: OfficeHoursSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursScheduleRequest }
            output: OfficeHoursSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursScheduleRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursScheduleRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursScheduleRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateOfficeHoursScheduleRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {
              id?: string | undefined
              object?: string | undefined
              deleted?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/office_hours_schedules': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: OfficeHoursScheduleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOfficeHoursScheduleRequest
            }
            output: OfficeHoursSchedule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOfficeHoursScheduleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOfficeHoursScheduleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOfficeHoursScheduleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/admins/:admin_id': {
      $get:
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Admin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { admin_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admins/remove': {
      $delete:
        | {
            input: {
              query: {
                admin_id: number
                reassign_messages_admin_id: number
                reassign_owner_admin_id: number
                reassign_articles_author_id: number
                reassign_conversations_admin_id: number
                reassign_replies_teams?:
                  | { team_id?: number | undefined; assignee_id?: number | undefined }[]
                  | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: {
              id?: string | undefined
              object?: 'admin' | undefined
              removed?: 'true' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                admin_id: number
                reassign_messages_admin_id: number
                reassign_owner_admin_id: number
                reassign_articles_author_id: number
                reassign_conversations_admin_id: number
                reassign_replies_teams?:
                  | { team_id?: number | undefined; assignee_id?: number | undefined }[]
                  | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                admin_id: number
                reassign_messages_admin_id: number
                reassign_owner_admin_id: number
                reassign_articles_author_id: number
                reassign_conversations_admin_id: number
                reassign_replies_teams?:
                  | { team_id?: number | undefined; assignee_id?: number | undefined }[]
                  | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                admin_id: number
                reassign_messages_admin_id: number
                reassign_owner_admin_id: number
                reassign_articles_author_id: number
                reassign_conversations_admin_id: number
                reassign_replies_teams?:
                  | { team_id?: number | undefined; assignee_id?: number | undefined }[]
                  | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                admin_id: number
                reassign_messages_admin_id: number
                reassign_owner_admin_id: number
                reassign_articles_author_id: number
                reassign_conversations_admin_id: number
                reassign_replies_teams?:
                  | { team_id?: number | undefined; assignee_id?: number | undefined }[]
                  | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/ai/content_import_sources': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContentImportSourcesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContentImportSourceRequest
            }
            output: ContentImportSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContentImportSourceRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContentImportSourceRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ai/content_import_sources/:source_id': {
      $delete:
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContentImportSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateContentImportSourceRequest }
            output: ContentImportSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateContentImportSourceRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateContentImportSourceRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateContentImportSourceRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ai/external_pages': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ExternalPagesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateExternalPageRequest
            }
            output: ExternalPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateExternalPageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateExternalPageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateExternalPageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ai/external_pages/:page_id': {
      $delete:
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ExternalPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ExternalPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateExternalPageRequest }
            output: ExternalPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateExternalPageRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateExternalPageRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateExternalPageRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ai/external_pages/:external_page_id/tags': {
      $post:
        | {
            input: { param: { external_page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_page_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ai/external_pages/:external_page_id/tags/:id': {
      $delete:
        | {
            input: { param: { external_page_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_page_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_page_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_page_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/articles': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ArticleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateArticleRequest
            }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/articles/:article_id': {
      $get:
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedArticleObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/articles/:id/draft': {
      $get:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/articles/:id/draft/publish': {
      $post:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: PublishArticleDraftRequest }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: PublishArticleDraftRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: PublishArticleDraftRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: PublishArticleDraftRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/articles/:article_id/tags': {
      $post:
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/articles/:article_id/tags/:id': {
      $delete:
        | {
            input: { param: { article_id: number; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/articles/:article_id/versions': {
      $get:
        | {
            input: { param: { article_id: number } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                locale?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ArticleVersionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                locale?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { article_id: number } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                locale?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                locale?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/articles/:article_id/versions/:id': {
      $get:
        | {
            input: { param: { article_id: number; id: string } } & {
              query: { locale?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ArticleVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              query: { locale?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              query: { locale?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { article_id: number; id: string } } & {
              query: { locale?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/articles/search': {
      $get:
        | {
            input: {
              query: {
                phrase?: string | undefined
                state?: 'published' | 'draft' | 'all' | undefined
                help_center_id?: number | undefined
                highlight?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ArticleSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                phrase?: string | undefined
                state?: 'published' | 'draft' | 'all' | undefined
                help_center_id?: number | undefined
                highlight?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                phrase?: string | undefined
                state?: 'published' | 'draft' | 'all' | undefined
                help_center_id?: number | undefined
                highlight?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/away_status_reasons': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: AwayStatusReasonList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/audiences': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AudienceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateAudienceRequest
            }
            output: Audience
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateAudienceRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateAudienceRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audiences/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Audience
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateAudienceRequest }
            output: Audience
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateAudienceRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateAudienceRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateAudienceRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/export/reporting_data/enqueue': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                dataset_id: string
                attribute_ids: string[]
                start_time: bigint
                end_time: bigint
              }
            }
            output: {
              job_identifier?: string | undefined
              status?: string | undefined
              download_url?: string | undefined
              download_expires_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                dataset_id: string
                attribute_ids: string[]
                start_time: bigint
                end_time: bigint
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                dataset_id: string
                attribute_ids: string[]
                start_time: bigint
                end_time: bigint
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                dataset_id: string
                attribute_ids: string[]
                start_time: bigint
                end_time: bigint
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/export/reporting_data/:job_identifier': {
      $get:
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {
              job_identifier?: string | undefined
              status?: 'pending' | 'complete' | 'failed' | undefined
              download_url?: string | undefined
              download_expires_at?: bigint | string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/export/reporting_data/get_datasets': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: {
              type?: string | undefined
              data?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    description?: string | undefined
                    default_time_attribute_id?: string | undefined
                    attributes?:
                      | {
                          id?: string | undefined
                          qualified_id?: string | undefined
                          name?: string | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/download/reporting_data/:job_identifier': {
      $get:
        | {
            input: { param: { job_identifier: string } } & {
              header: {
                'Intercom-Version'?: IntercomVersion | undefined
                Accept: 'application/octet-stream'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: {
                'Intercom-Version'?: IntercomVersion | undefined
                Accept: 'application/octet-stream'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: {
                'Intercom-Version'?: IntercomVersion | undefined
                Accept: 'application/octet-stream'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: {
                'Intercom-Version'?: IntercomVersion | undefined
                Accept: 'application/octet-stream'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/fin/start': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                conversation_metadata?: FinAgentConversationMetadata | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: {
              conversation_id?: string | undefined
              intercom_conversation_id?: string | undefined
              user_id?: string | undefined
              status?:
                | 'thinking'
                | 'replying'
                | 'awaiting_user_reply'
                | 'escalated'
                | 'resolved'
                | 'complete'
                | undefined
              created_at_ms?: string | undefined
              errors?: FinAgentAttributeErrors | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                conversation_metadata?: FinAgentConversationMetadata | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                conversation_metadata?: FinAgentConversationMetadata | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                conversation_metadata?: FinAgentConversationMetadata | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                conversation_metadata?: FinAgentConversationMetadata | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/reply': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: {
              conversation_id?: string | undefined
              intercom_conversation_id?: string | undefined
              user_id?: string | undefined
              status?:
                | 'thinking'
                | 'replying'
                | 'awaiting_user_reply'
                | 'escalated'
                | 'resolved'
                | 'complete'
                | undefined
              created_at_ms?: string | undefined
              errors?: FinAgentAttributeErrors | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                attachments?: FinAgentAttachment[] | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/csat': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                rating: 'terrible' | 'bad' | 'ok' | 'good' | 'amazing'
                remark?: string | undefined
              }
            }
            output: {
              conversation_id?: string | undefined
              rating?: 'terrible' | 'bad' | 'ok' | 'good' | 'amazing' | undefined
              status?: 'rated' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                rating: 'terrible' | 'bad' | 'ok' | 'good' | 'amazing'
                remark?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                rating: 'terrible' | 'bad' | 'ok' | 'good' | 'amazing'
                remark?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                rating: 'terrible' | 'bad' | 'ok' | 'good' | 'amazing'
                remark?: string | undefined
              }
            }
            output: { errors?: { [x: string]: string } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/capabilities': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                user: {
                  id: string
                  name?: string | undefined
                  email?: string | undefined
                  attributes?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: {
              version?: string | undefined
              capabilities?:
                | {
                    name?: string | undefined
                    description?: (string | null) | undefined
                    inputSchema?: { [x: string]: unknown } | undefined
                    endpoint?: string | undefined
                    method?: string | undefined
                  }[]
                | undefined
              errors?: FinAgentAttributeErrors | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                user: {
                  id: string
                  name?: string | undefined
                  email?: string | undefined
                  attributes?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                user: {
                  id: string
                  name?: string | undefined
                  email?: string | undefined
                  attributes?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                user: {
                  id: string
                  name?: string | undefined
                  email?: string | undefined
                  attributes?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                user: {
                  id: string
                  name?: string | undefined
                  email?: string | undefined
                  attributes?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/ask': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                conversation_metadata?: FinAgentConversationMetadata | undefined
                attachments?: FinAgentAttachment[] | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: {
              conversation_id?: string | undefined
              intercom_conversation_id?: string | undefined
              user_id?: string | undefined
              status?: 'thinking' | 'replying' | 'resolved' | 'complete' | undefined
              created_at_ms?: string | undefined
              errors?: FinAgentAttributeErrors | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                conversation_metadata?: FinAgentConversationMetadata | undefined
                attachments?: FinAgentAttachment[] | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                conversation_metadata?: FinAgentConversationMetadata | undefined
                attachments?: FinAgentAttachment[] | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                conversation_metadata?: FinAgentConversationMetadata | undefined
                attachments?: FinAgentAttachment[] | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                conversation_id: string
                message: FinAgentMessage
                user: FinAgentUser
                conversation_metadata?: FinAgentConversationMetadata | undefined
                attachments?: FinAgentAttachment[] | undefined
                environment?: string | undefined
                response_format?: 'html' | 'markdown' | undefined
              }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/procedures/:procedure_id/run': {
      $post:
        | {
            input: { param: { procedure_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                conversation_id: string
                user: FinAgentUser
                message?:
                  | { body: string; author?: 'user' | 'agent' | 'fin' | undefined }
                  | undefined
                conversation_metadata?:
                  | { attributes?: { [x: string]: unknown } | undefined }
                  | undefined
                environment?: string | undefined
              }
            }
            output: {
              conversation_id?: string | undefined
              intercom_conversation_id?: string | undefined
              user_id?: string | undefined
              procedure_id?: string | undefined
              status?:
                | 'thinking'
                | 'replying'
                | 'awaiting_user_reply'
                | 'escalated'
                | 'resolved'
                | 'complete'
                | undefined
              created_at_ms?: string | undefined
              errors?: FinAgentAttributeErrors | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { procedure_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                conversation_id: string
                user: FinAgentUser
                message?:
                  | { body: string; author?: 'user' | 'agent' | 'fin' | undefined }
                  | undefined
                conversation_metadata?:
                  | { attributes?: { [x: string]: unknown } | undefined }
                  | undefined
                environment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { procedure_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                conversation_id: string
                user: FinAgentUser
                message?:
                  | { body: string; author?: 'user' | 'agent' | 'fin' | undefined }
                  | undefined
                conversation_metadata?:
                  | { attributes?: { [x: string]: unknown } | undefined }
                  | undefined
                environment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { procedure_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                conversation_id: string
                user: FinAgentUser
                message?:
                  | { body: string; author?: 'user' | 'agent' | 'fin' | undefined }
                  | undefined
                conversation_metadata?:
                  | { attributes?: { [x: string]: unknown } | undefined }
                  | undefined
                environment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { procedure_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                conversation_id: string
                user: FinAgentUser
                message?:
                  | { body: string; author?: 'user' | 'agent' | 'fin' | undefined }
                  | undefined
                conversation_metadata?:
                  | { attributes?: { [x: string]: unknown } | undefined }
                  | undefined
                environment?: string | undefined
              }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fin/escalate': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: {
              conversation_id?: string | undefined
              intercom_conversation_id?: string | undefined
              status?: 'escalated' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: { errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/help_center/help_centers/:help_center_id/redirects': {
      $get:
        | {
            input: { param: { help_center_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: HelpCenterRedirectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { help_center_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { help_center_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: HelpCenterRedirect
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { help_center_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateHelpCenterRedirectRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/help_center/help_centers/:help_center_id/redirects/:id': {
      $get:
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: HelpCenterRedirect
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedHelpCenterRedirectObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { help_center_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/help_center/collections': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                help_center_id?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CollectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                help_center_id?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                help_center_id?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateCollectionRequest
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateCollectionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateCollectionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/help_center/collections/:collection_id': {
      $get:
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCollectionRequest }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCollectionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCollectionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCollectionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedCollectionObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/help_center/help_centers/:help_center_id': {
      $get:
        | {
            input: { param: { help_center_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: HelpCenter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { help_center_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { help_center_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/help_center/help_centers': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: HelpCenterList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/internal_articles': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: InternalArticleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateInternalArticleRequest
            }
            output: InternalArticle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateInternalArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateInternalArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateInternalArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateInternalArticleRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/internal_articles/:internal_article_id': {
      $get:
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: InternalArticle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateInternalArticleRequest }
            output: InternalArticle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateInternalArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateInternalArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateInternalArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateInternalArticleRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedInternalArticleObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/internal_articles/:internal_article_id/tags': {
      $post:
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { internal_article_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/internal_articles/:internal_article_id/tags/:id': {
      $delete:
        | {
            input: { param: { internal_article_id: number; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_article_id: number; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_article_id: number; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { internal_article_id: number; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/internal_articles/search': {
      $get:
        | {
            input: {
              query: {
                folder_id?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: InternalArticleSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                folder_id?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                folder_id?: number | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/folders': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                parent_folder_id?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: {
              type?: 'list' | undefined
              data?: Folder[] | undefined
              total_count?: number | undefined
              pages?: PagesLink | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                parent_folder_id?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                folder: {
                  name: string
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                folder: {
                  name: string
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                folder: {
                  name: string
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/folders/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                folder: {
                  name?: string | undefined
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                folder: {
                  name?: string | undefined
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                folder: {
                  name?: string | undefined
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                folder: {
                  name?: string | undefined
                  description?: string | undefined
                  emoji?: string | undefined
                  parent_folder_id?: (number | null) | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedFolderObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ip_allowlist': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: IpAllowlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: IpAllowlist
            }
            output: IpAllowlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: IpAllowlist
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: IpAllowlist
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/companies': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOrUpdateCompanyRequest
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOrUpdateCompanyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOrUpdateCompanyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateOrUpdateCompanyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                company_id?: string | undefined
                tag_id?: string | undefined
                segment_id?: string | undefined
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Company | CompanyList | CompanyUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                company_id?: string | undefined
                tag_id?: string | undefined
                segment_id?: string | undefined
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                company_id?: string | undefined
                tag_id?: string | undefined
                segment_id?: string | undefined
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                company_id?: string | undefined
                tag_id?: string | undefined
                segment_id?: string | undefined
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string | undefined
                company_id?: string | undefined
                tag_id?: string | undefined
                segment_id?: string | undefined
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/:company_id': {
      $get:
        | {
            input: { param: { company_id: string } } & {
              query: {
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Company | CompanyUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                type?: 'user' | 'users' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCompanyRequest }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCompanyRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCompanyRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCompanyRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateCompanyRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedCompanyObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/companies/:company_id/contacts': {
      $get:
        | {
            input: { param: { company_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_merge_history?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CompanyAttachedContacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_merge_history?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_merge_history?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_merge_history?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/companies/:company_id/segments': {
      $get:
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: CompanyAttachedSegments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/companies/:company_id/notes': {
      $get:
        | {
            input: { param: { company_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: NoteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Note
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/companies/search': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CompanySearchRequest
            }
            output: CompanySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CompanySearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CompanySearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CompanySearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/companies/list': {
      $post:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CompanyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/companies/scroll': {
      $get:
        | {
            input: { query: { scroll_param?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: CompanyScroll
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scroll_param?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { scroll_param?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { scroll_param?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { scroll_param?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/contacts/:contact_id/companies': {
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ContactAttachedCompanies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/companies/:company_id': {
      $delete:
        | {
            input: { param: { contact_id: string; company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string; company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string; company_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/notes': {
      $get:
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: NoteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Note
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { body: string; admin_id?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/segments': {
      $get:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactSegments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/subscriptions': {
      $get:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: SubscriptionTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; consent_type?: string | undefined } }
            output: SubscriptionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; consent_type?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; consent_type?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/subscriptions/:subscription_id': {
      $delete:
        | {
            input: { param: { contact_id: string; subscription_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: SubscriptionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string; subscription_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string; subscription_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/tags': {
      $get:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: TagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/tags/:tag_id': {
      $delete:
        | {
            input: { param: { contact_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/deleted': {
      $get:
        | {
            input: {
              query: {
                per_page?: number | undefined
                page?: number | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DeletedContactList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                page?: number | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                page?: number | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contacts/:contact_id': {
      $put:
        | {
            input: { param: { contact_id: string } } & {
              query: { include_merge_history?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateContactRequest
            }
            output: {
              type?: string | undefined
              id?: string | undefined
              external_id?: (string | null) | undefined
              workspace_id?: string | undefined
              role?: string | undefined
              email?: string | undefined
              email_domain?: string | undefined
              email_verified?: boolean | undefined
              phone?: (string | null) | undefined
              name?: (string | null) | undefined
              owner_id?: (string | null) | undefined
              has_hard_bounced?: boolean | undefined
              marked_email_as_spam?: boolean | undefined
              unsubscribed_from_emails?: boolean | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              signed_up_at?: (number | null) | undefined
              last_seen_at?: (number | null) | undefined
              last_replied_at?: (number | null) | undefined
              last_contacted_at?: (number | null) | undefined
              last_email_opened_at?: (number | null) | undefined
              last_email_clicked_at?: (number | null) | undefined
              language_override?: (string | null) | undefined
              browser?: (string | null) | undefined
              browser_version?: (string | null) | undefined
              browser_language?: (string | null) | undefined
              os?: (string | null) | undefined
              android_app_name?: (string | null) | undefined
              android_app_version?: (string | null) | undefined
              android_device?: (string | null) | undefined
              android_os_version?: (string | null) | undefined
              android_sdk_version?: (string | null) | undefined
              android_last_seen_at?: (number | null) | undefined
              ios_app_name?: (string | null) | undefined
              ios_app_version?: (string | null) | undefined
              ios_device?: (string | null) | undefined
              ios_os_version?: (string | null) | undefined
              ios_sdk_version?: (string | null) | undefined
              ios_last_seen_at?: (number | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              avatar?: (string | null) | undefined
              tags?: ContactTags | undefined
              notes?: ContactNotes | undefined
              companies?: ContactCompanies | undefined
              location?: ContactLocation | undefined
              social_profiles?: ContactSocialProfiles | undefined
              opted_out_subscription_types?: ContactSubscriptionTypes | undefined
              opted_in_subscription_types?: ContactSubscriptionTypes | undefined
              utm_campaign?: (string | null) | undefined
              utm_content?: (string | null) | undefined
              utm_medium?: (string | null) | undefined
              utm_source?: (string | null) | undefined
              utm_term?: (string | null) | undefined
              referrer?: (string | null) | undefined
              sms_consent?: boolean | undefined
              unsubscribed_from_sms?: boolean | undefined
              enabled_push_messaging?: (boolean | null) | undefined
              merge_history?: (MergeHistoryItem[] | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              query: { include_merge_history?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              query: { include_merge_history?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              query: { include_merge_history?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { contact_id: string } } & {
              query: { include_merge_history?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { contact_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: {
              type?: string | undefined
              id?: string | undefined
              external_id?: (string | null) | undefined
              workspace_id?: string | undefined
              role?: string | undefined
              email?: string | undefined
              email_domain?: string | undefined
              email_verified?: boolean | undefined
              phone?: (string | null) | undefined
              name?: (string | null) | undefined
              owner_id?: (string | null) | undefined
              has_hard_bounced?: boolean | undefined
              marked_email_as_spam?: boolean | undefined
              unsubscribed_from_emails?: boolean | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              signed_up_at?: (number | null) | undefined
              last_seen_at?: (number | null) | undefined
              last_replied_at?: (number | null) | undefined
              last_contacted_at?: (number | null) | undefined
              last_email_opened_at?: (number | null) | undefined
              last_email_clicked_at?: (number | null) | undefined
              language_override?: (string | null) | undefined
              browser?: (string | null) | undefined
              browser_version?: (string | null) | undefined
              browser_language?: (string | null) | undefined
              os?: (string | null) | undefined
              android_app_name?: (string | null) | undefined
              android_app_version?: (string | null) | undefined
              android_device?: (string | null) | undefined
              android_os_version?: (string | null) | undefined
              android_sdk_version?: (string | null) | undefined
              android_last_seen_at?: (number | null) | undefined
              ios_app_name?: (string | null) | undefined
              ios_app_version?: (string | null) | undefined
              ios_device?: (string | null) | undefined
              ios_os_version?: (string | null) | undefined
              ios_sdk_version?: (string | null) | undefined
              ios_last_seen_at?: (number | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              avatar?: (string | null) | undefined
              tags?: ContactTags | undefined
              notes?: ContactNotes | undefined
              companies?: ContactCompanies | undefined
              location?: ContactLocation | undefined
              social_profiles?: ContactSocialProfiles | undefined
              opted_out_subscription_types?: ContactSubscriptionTypes | undefined
              opted_in_subscription_types?: ContactSubscriptionTypes | undefined
              utm_campaign?: (string | null) | undefined
              utm_content?: (string | null) | undefined
              utm_medium?: (string | null) | undefined
              utm_source?: (string | null) | undefined
              utm_term?: (string | null) | undefined
              referrer?: (string | null) | undefined
              sms_consent?: boolean | undefined
              unsubscribed_from_sms?: boolean | undefined
              enabled_push_messaging?: (boolean | null) | undefined
              merge_history?: (MergeHistoryItem[] | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { contact_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
      $delete:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/merge': {
      $post:
        | {
            input: { query: { include_merge_history?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeContactsRequest }
            output: {
              type?: string | undefined
              id?: string | undefined
              external_id?: (string | null) | undefined
              workspace_id?: string | undefined
              role?: string | undefined
              email?: string | undefined
              email_domain?: string | undefined
              email_verified?: boolean | undefined
              phone?: (string | null) | undefined
              name?: (string | null) | undefined
              owner_id?: (string | null) | undefined
              has_hard_bounced?: boolean | undefined
              marked_email_as_spam?: boolean | undefined
              unsubscribed_from_emails?: boolean | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              signed_up_at?: (number | null) | undefined
              last_seen_at?: (number | null) | undefined
              last_replied_at?: (number | null) | undefined
              last_contacted_at?: (number | null) | undefined
              last_email_opened_at?: (number | null) | undefined
              last_email_clicked_at?: (number | null) | undefined
              language_override?: (string | null) | undefined
              browser?: (string | null) | undefined
              browser_version?: (string | null) | undefined
              browser_language?: (string | null) | undefined
              os?: (string | null) | undefined
              android_app_name?: (string | null) | undefined
              android_app_version?: (string | null) | undefined
              android_device?: (string | null) | undefined
              android_os_version?: (string | null) | undefined
              android_sdk_version?: (string | null) | undefined
              android_last_seen_at?: (number | null) | undefined
              ios_app_name?: (string | null) | undefined
              ios_app_version?: (string | null) | undefined
              ios_device?: (string | null) | undefined
              ios_os_version?: (string | null) | undefined
              ios_sdk_version?: (string | null) | undefined
              ios_last_seen_at?: (number | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              avatar?: (string | null) | undefined
              tags?: ContactTags | undefined
              notes?: ContactNotes | undefined
              companies?: ContactCompanies | undefined
              location?: ContactLocation | undefined
              social_profiles?: ContactSocialProfiles | undefined
              opted_out_subscription_types?: ContactSubscriptionTypes | undefined
              opted_in_subscription_types?: ContactSubscriptionTypes | undefined
              utm_campaign?: (string | null) | undefined
              utm_content?: (string | null) | undefined
              utm_medium?: (string | null) | undefined
              utm_source?: (string | null) | undefined
              utm_term?: (string | null) | undefined
              referrer?: (string | null) | undefined
              sms_consent?: boolean | undefined
              unsubscribed_from_sms?: boolean | undefined
              enabled_push_messaging?: (boolean | null) | undefined
              merge_history?: (MergeHistoryItem[] | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_merge_history?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeContactsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { include_merge_history?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeContactsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include_merge_history?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeContactsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { include_merge_history?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeContactsRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/contacts/merge/preview': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: MergePreviewRequest
            }
            output: MergePreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: MergePreviewRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: MergePreviewRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/search': {
      $post:
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContactSearchRequest
            }
            output: ContactList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContactSearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContactSearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContactSearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/contacts/activities': {
      $get:
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ContactActivityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contacts': {
      $get:
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ContactList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContactRequest
            }
            output: {
              type?: string | undefined
              id?: string | undefined
              external_id?: (string | null) | undefined
              workspace_id?: string | undefined
              role?: string | undefined
              email?: string | undefined
              email_domain?: string | undefined
              email_verified?: boolean | undefined
              phone?: (string | null) | undefined
              name?: (string | null) | undefined
              owner_id?: (string | null) | undefined
              has_hard_bounced?: boolean | undefined
              marked_email_as_spam?: boolean | undefined
              unsubscribed_from_emails?: boolean | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              signed_up_at?: (number | null) | undefined
              last_seen_at?: (number | null) | undefined
              last_replied_at?: (number | null) | undefined
              last_contacted_at?: (number | null) | undefined
              last_email_opened_at?: (number | null) | undefined
              last_email_clicked_at?: (number | null) | undefined
              language_override?: (string | null) | undefined
              browser?: (string | null) | undefined
              browser_version?: (string | null) | undefined
              browser_language?: (string | null) | undefined
              os?: (string | null) | undefined
              android_app_name?: (string | null) | undefined
              android_app_version?: (string | null) | undefined
              android_device?: (string | null) | undefined
              android_os_version?: (string | null) | undefined
              android_sdk_version?: (string | null) | undefined
              android_last_seen_at?: (number | null) | undefined
              ios_app_name?: (string | null) | undefined
              ios_app_version?: (string | null) | undefined
              ios_device?: (string | null) | undefined
              ios_os_version?: (string | null) | undefined
              ios_sdk_version?: (string | null) | undefined
              ios_last_seen_at?: (number | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              avatar?: (string | null) | undefined
              tags?: ContactTags | undefined
              notes?: ContactNotes | undefined
              companies?: ContactCompanies | undefined
              location?: ContactLocation | undefined
              social_profiles?: ContactSocialProfiles | undefined
              opted_out_subscription_types?: ContactSubscriptionTypes | undefined
              opted_in_subscription_types?: ContactSubscriptionTypes | undefined
              utm_campaign?: (string | null) | undefined
              utm_content?: (string | null) | undefined
              utm_medium?: (string | null) | undefined
              utm_source?: (string | null) | undefined
              utm_term?: (string | null) | undefined
              referrer?: (string | null) | undefined
              sms_consent?: boolean | undefined
              unsubscribed_from_sms?: boolean | undefined
              enabled_push_messaging?: (boolean | null) | undefined
              merge_history?: (MergeHistoryItem[] | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateContactRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/contacts/find_by_external_id/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: {
              type?: string | undefined
              id?: string | undefined
              external_id?: (string | null) | undefined
              workspace_id?: string | undefined
              role?: string | undefined
              email?: string | undefined
              email_domain?: string | undefined
              email_verified?: boolean | undefined
              phone?: (string | null) | undefined
              name?: (string | null) | undefined
              owner_id?: (string | null) | undefined
              has_hard_bounced?: boolean | undefined
              marked_email_as_spam?: boolean | undefined
              unsubscribed_from_emails?: boolean | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              signed_up_at?: (number | null) | undefined
              last_seen_at?: (number | null) | undefined
              last_replied_at?: (number | null) | undefined
              last_contacted_at?: (number | null) | undefined
              last_email_opened_at?: (number | null) | undefined
              last_email_clicked_at?: (number | null) | undefined
              language_override?: (string | null) | undefined
              browser?: (string | null) | undefined
              browser_version?: (string | null) | undefined
              browser_language?: (string | null) | undefined
              os?: (string | null) | undefined
              android_app_name?: (string | null) | undefined
              android_app_version?: (string | null) | undefined
              android_device?: (string | null) | undefined
              android_os_version?: (string | null) | undefined
              android_sdk_version?: (string | null) | undefined
              android_last_seen_at?: (number | null) | undefined
              ios_app_name?: (string | null) | undefined
              ios_app_version?: (string | null) | undefined
              ios_device?: (string | null) | undefined
              ios_os_version?: (string | null) | undefined
              ios_sdk_version?: (string | null) | undefined
              ios_last_seen_at?: (number | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              avatar?: (string | null) | undefined
              tags?: ContactTags | undefined
              notes?: ContactNotes | undefined
              companies?: ContactCompanies | undefined
              location?: ContactLocation | undefined
              social_profiles?: ContactSocialProfiles | undefined
              opted_out_subscription_types?: ContactSubscriptionTypes | undefined
              opted_in_subscription_types?: ContactSubscriptionTypes | undefined
              utm_campaign?: (string | null) | undefined
              utm_content?: (string | null) | undefined
              utm_medium?: (string | null) | undefined
              utm_source?: (string | null) | undefined
              utm_term?: (string | null) | undefined
              referrer?: (string | null) | undefined
              sms_consent?: boolean | undefined
              unsubscribed_from_sms?: boolean | undefined
              enabled_push_messaging?: (boolean | null) | undefined
              merge_history?: (MergeHistoryItem[] | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                include_merge_history?: boolean | undefined
                escape_identity?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/contacts/:contact_id/archive': {
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactArchived
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/unarchive': {
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactUnarchived
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:id/banners': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: BannerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:id/banners/:view_id/dismiss': {
      $post:
        | {
            input: { param: { id: string; view_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: BannerDismiss
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; view_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; view_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts/:contact_id/block': {
      $post:
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactBlocked
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contacts/:id/merge_histories': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: MergeHistoryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | undefined
                per_page?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/contacts/bulk': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkCreateContactsRequest
            }
            output: ContactsBulkJob
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkCreateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkCreateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkCreateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkCreateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkUpdateContactsRequest
            }
            output: ContactsBulkJob
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkUpdateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkUpdateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkUpdateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkUpdateContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/contacts/bulk/delete': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkDeleteContactsRequest
            }
            output: ContactsBulkJob
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkDeleteContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkDeleteContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkDeleteContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: BulkDeleteContactsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/contacts/bulk/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContactsBulkJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/content/bulk_actions': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentBulkActionRequest
            }
            output: ContentBulkActionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentBulkActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentBulkActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/content/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                states?: ('published' | 'draft')[] | undefined
                locales?: string[] | undefined
                tag_ids?: number[] | undefined
                tag_operator?: 'IN' | 'NIN' | undefined
                any_tag_ids?: number[] | undefined
                folder_ids?: number[] | undefined
                folder_entity_type?: 'folder' | undefined
                content_types?:
                  | (
                      | 'snippet'
                      | 'external_content'
                      | 'file_source_content'
                      | 'internal_article'
                      | 'article'
                    )[]
                  | undefined
                copilot_state?: 'on' | 'off' | undefined
                fin_service_state?: 'on' | 'off' | undefined
                fin_sales_state?: 'on' | 'off' | undefined
                created_by_ids?: number[] | undefined
                last_updated_by_ids?: number[] | undefined
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                updated_at_after?: number | undefined
                updated_at_before?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ContentSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                states?: ('published' | 'draft')[] | undefined
                locales?: string[] | undefined
                tag_ids?: number[] | undefined
                tag_operator?: 'IN' | 'NIN' | undefined
                any_tag_ids?: number[] | undefined
                folder_ids?: number[] | undefined
                folder_entity_type?: 'folder' | undefined
                content_types?:
                  | (
                      | 'snippet'
                      | 'external_content'
                      | 'file_source_content'
                      | 'internal_article'
                      | 'article'
                    )[]
                  | undefined
                copilot_state?: 'on' | 'off' | undefined
                fin_service_state?: 'on' | 'off' | undefined
                fin_sales_state?: 'on' | 'off' | undefined
                created_by_ids?: number[] | undefined
                last_updated_by_ids?: number[] | undefined
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                updated_at_after?: number | undefined
                updated_at_before?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                states?: ('published' | 'draft')[] | undefined
                locales?: string[] | undefined
                tag_ids?: number[] | undefined
                tag_operator?: 'IN' | 'NIN' | undefined
                any_tag_ids?: number[] | undefined
                folder_ids?: number[] | undefined
                folder_entity_type?: 'folder' | undefined
                content_types?:
                  | (
                      | 'snippet'
                      | 'external_content'
                      | 'file_source_content'
                      | 'internal_article'
                      | 'article'
                    )[]
                  | undefined
                copilot_state?: 'on' | 'off' | undefined
                fin_service_state?: 'on' | 'off' | undefined
                fin_sales_state?: 'on' | 'off' | undefined
                created_by_ids?: number[] | undefined
                last_updated_by_ids?: number[] | undefined
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                updated_at_after?: number | undefined
                updated_at_before?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                states?: ('published' | 'draft')[] | undefined
                locales?: string[] | undefined
                tag_ids?: number[] | undefined
                tag_operator?: 'IN' | 'NIN' | undefined
                any_tag_ids?: number[] | undefined
                folder_ids?: number[] | undefined
                folder_entity_type?: 'folder' | undefined
                content_types?:
                  | (
                      | 'snippet'
                      | 'external_content'
                      | 'file_source_content'
                      | 'internal_article'
                      | 'article'
                    )[]
                  | undefined
                copilot_state?: 'on' | 'off' | undefined
                fin_service_state?: 'on' | 'off' | undefined
                fin_sales_state?: 'on' | 'off' | undefined
                created_by_ids?: number[] | undefined
                last_updated_by_ids?: number[] | undefined
                created_at_after?: number | undefined
                created_at_before?: number | undefined
                updated_at_after?: number | undefined
                updated_at_before?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/content_snippets': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContentSnippetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentSnippetCreateRequest
            }
            output: ContentSnippet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentSnippetCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentSnippetCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentSnippetCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ContentSnippetCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/content_snippets/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ContentSnippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContentSnippetUpdateRequest }
            output: ContentSnippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContentSnippetUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContentSnippetUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContentSnippetUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContentSnippetUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/content_snippets/:content_snippet_id/tags': {
      $post:
        | {
            input: { param: { content_snippet_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { content_snippet_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { content_snippet_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { content_snippet_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/content_snippets/:content_snippet_id/tags/:id': {
      $delete:
        | {
            input: { param: { content_snippet_id: string; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { content_snippet_id: string; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { content_snippet_id: string; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { content_snippet_id: string; id: string } } & {
              query: { admin_id?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dynamic_contents': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DynamicContentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: DynamicContentCreateRequest
            }
            output: DynamicContent
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: DynamicContentCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: DynamicContentCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: DynamicContentCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: DynamicContentCreateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/dynamic_contents/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DynamicContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: DynamicContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DynamicContentUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:conversation_id/tags': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/tags/:tag_id': {
      $delete:
        | {
            input: { param: { conversation_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations': {
      $get:
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: {
              type: string
              id: string
              created_at: number
              subject?: string | undefined
              body: string
              message_type: 'email' | 'inapp' | 'facebook' | 'twitter' | 'whatsapp'
              conversation_id?: string | undefined
              owner?: Admin | undefined
              template?: string | undefined
              external_id?: string | undefined
              whatsapp_message_id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:conversation_id': {
      $get:
        | {
            input: { param: { conversation_id: number } } & {
              query: {
                display_as?: string | undefined
                include_translations?: boolean | undefined
                include_email_history?: boolean | undefined
                parts_created_after?: number | undefined
                parts_created_before?: number | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: {
                display_as?: string | undefined
                include_translations?: boolean | undefined
                include_email_history?: boolean | undefined
                parts_created_after?: number | undefined
                parts_created_before?: number | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: {
                display_as?: string | undefined
                include_translations?: boolean | undefined
                include_email_history?: boolean | undefined
                parts_created_after?: number | undefined
                parts_created_before?: number | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: {
                display_as?: string | undefined
                include_translations?: boolean | undefined
                include_email_history?: boolean | undefined
                parts_created_after?: number | undefined
                parts_created_before?: number | undefined
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { conversation_id: number } } & {
              query: { display_as?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateConversationRequest
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { display_as?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { display_as?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { display_as?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { display_as?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { conversation_id: number } } & {
              query: { retain_metrics?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: ConversationDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { retain_metrics?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { retain_metrics?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: number } } & {
              query: { retain_metrics?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/conversations/search': {
      $post:
        | {
            input: {
              query: {
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: SearchRequest
            }
            output: ConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: SearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_monitors?: boolean | undefined
                include_scorecards?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: SearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/conversations/:conversation_id/reply': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ReplyConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:conversation_id/parts': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json:
                | CloseConversationRequest
                | SnoozeConversationRequest
                | OpenConversationRequest
                | AssignConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:conversation_id/customers': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: AttachContactToConversationRequest }
            output: ConversationParticipantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: AttachContactToConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: AttachContactToConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: AttachContactToConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: AttachContactToConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/customers/:contact_id': {
      $delete:
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: ConversationParticipantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string; contact_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: DetachContactFromConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:id/handling_events': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: HandlingEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:id/hitl_events': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: HitlEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:id/side_conversations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: SideConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/rating': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: RatedConversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: RateConversationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/redact': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RedactConversationRequest
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RedactConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RedactConversationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/:id/merge': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeConversationsRequest }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeConversationsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeConversationsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeConversationsRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: MergeConversationsRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/:conversation_id/convert': {
      $post:
        | {
            input: { param: { conversation_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ConvertConversationToTicketRequest }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ConvertConversationToTicketRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/conversations/deleted': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DeletedConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                order?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/conversations/stream/token': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationStreamTokenRequest
            }
            output: ConversationStreamToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationStreamTokenRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationStreamTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationStreamTokenRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationStreamTokenRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 502
          }
    }
  } & {
    '/conversations/attributes': {
      $get:
        | {
            input: { query: { include_archived?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ConversationAttributeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_archived?: boolean | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationAttributeRequest
            }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationAttributeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateConversationAttributeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/attributes/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeRequest }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/attributes/:id/options': {
      $post:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateConversationAttributeOptionRequest }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/conversations/attributes/:id/options/:option_id': {
      $put:
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeOptionRequest }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateConversationAttributeOptionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: ConversationAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number; option_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/custom_object_instances/:custom_object_type_identifier': {
      $post:
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOrUpdateCustomObjectInstanceRequest }
            output: CustomObjectInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOrUpdateCustomObjectInstanceRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOrUpdateCustomObjectInstanceRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateOrUpdateCustomObjectInstanceRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: {
                references_contact_id?: string | undefined
                references_conversation_id?: string | undefined
                external_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output:
              | CustomObjectInstancesPaginatedList
              | CustomObjectInstance
              | CustomObjectInstanceNotFound
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: {
                references_contact_id?: string | undefined
                references_conversation_id?: string | undefined
                external_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: {
                references_contact_id?: string | undefined
                references_conversation_id?: string | undefined
                external_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: {
                references_contact_id?: string | undefined
                references_conversation_id?: string | undefined
                external_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: { external_id: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CustomObjectInstanceDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: { external_id: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_object_type_identifier: string } } & {
              query: { external_id: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/custom_object_instances/:custom_object_type_identifier/:custom_object_instance_id': {
      $get:
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CustomObjectInstance | CustomObjectInstanceNotFound
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: CustomObjectInstanceDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { custom_object_instance_id: string; custom_object_type_identifier: string }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data_attributes': {
      $get:
        | {
            input: {
              query: {
                model?: 'contact' | 'company' | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataAttributeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                model?: 'contact' | 'company' | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                model?: 'contact' | 'company' | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataAttributeRequest
            }
            output: DataAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataAttributeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataAttributeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataAttributeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data_attributes/:data_attribute_id': {
      $put:
        | {
            input: { param: { data_attribute_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataAttributeRequest }
            output: DataAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { data_attribute_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { data_attribute_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { data_attribute_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { data_attribute_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data_connectors': {
      $get:
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataConnectorList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataConnectorRequest
            }
            output: DataConnectorDetail
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataConnectorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataConnectorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataConnectorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data_connectors/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { state_version?: 'draft' | 'live' | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataConnectorDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { state_version?: 'draft' | 'live' | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { state_version?: 'draft' | 'live' | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { state_version?: 'draft' | 'live' | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedDataConnectorObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: DataConnectorDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data_connectors/:data_connector_id/execution_results': {
      $get:
        | {
            input: { param: { data_connector_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                success?: 'true' | 'false' | undefined
                error_type?:
                  | 'request_configuration_error'
                  | 'faraday_error'
                  | '3rd_party_error'
                  | 'response_mapping_error'
                  | 'token_refresh_error'
                  | 'fin_action_response_formatting_error'
                  | 'fin_action_identity_verification_error'
                  | 'email_verification_error'
                  | 'non_fin_standalone_action_identity_verification_error'
                  | 'request_validation_error'
                  | 'client_side_action_error'
                  | 'code_block_transformation_error'
                  | 'otp_preview_not_supported_error'
                  | undefined
                start_ts?: number | undefined
                end_ts?: number | undefined
                include_bodies?: 'true' | 'false' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataConnectorExecutionResultList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { data_connector_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                success?: 'true' | 'false' | undefined
                error_type?:
                  | 'request_configuration_error'
                  | 'faraday_error'
                  | '3rd_party_error'
                  | 'response_mapping_error'
                  | 'token_refresh_error'
                  | 'fin_action_response_formatting_error'
                  | 'fin_action_identity_verification_error'
                  | 'email_verification_error'
                  | 'non_fin_standalone_action_identity_verification_error'
                  | 'request_validation_error'
                  | 'client_side_action_error'
                  | 'code_block_transformation_error'
                  | 'otp_preview_not_supported_error'
                  | undefined
                start_ts?: number | undefined
                end_ts?: number | undefined
                include_bodies?: 'true' | 'false' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { data_connector_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                success?: 'true' | 'false' | undefined
                error_type?:
                  | 'request_configuration_error'
                  | 'faraday_error'
                  | '3rd_party_error'
                  | 'response_mapping_error'
                  | 'token_refresh_error'
                  | 'fin_action_response_formatting_error'
                  | 'fin_action_identity_verification_error'
                  | 'email_verification_error'
                  | 'non_fin_standalone_action_identity_verification_error'
                  | 'request_validation_error'
                  | 'client_side_action_error'
                  | 'code_block_transformation_error'
                  | 'otp_preview_not_supported_error'
                  | undefined
                start_ts?: number | undefined
                end_ts?: number | undefined
                include_bodies?: 'true' | 'false' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { data_connector_id: string } } & {
              query: {
                per_page?: number | undefined
                starting_after?: string | undefined
                success?: 'true' | 'false' | undefined
                error_type?:
                  | 'request_configuration_error'
                  | 'faraday_error'
                  | '3rd_party_error'
                  | 'response_mapping_error'
                  | 'token_refresh_error'
                  | 'fin_action_response_formatting_error'
                  | 'fin_action_identity_verification_error'
                  | 'email_verification_error'
                  | 'non_fin_standalone_action_identity_verification_error'
                  | 'request_validation_error'
                  | 'client_side_action_error'
                  | 'code_block_transformation_error'
                  | 'otp_preview_not_supported_error'
                  | undefined
                start_ts?: number | undefined
                end_ts?: number | undefined
                include_bodies?: 'true' | 'false' | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data_connectors/:data_connector_id/execution_results/:id': {
      $get:
        | {
            input: { param: { data_connector_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DataConnectorExecutionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { data_connector_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { data_connector_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data_connectors/:id/versions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataConnectorVersionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { per_page?: number | undefined; starting_after?: string | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data_connectors/:id/versions/:version_id': {
      $get:
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DataConnectorVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorVersionRequest }
            output: DataConnectorVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorVersionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorVersionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; version_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateDataConnectorVersionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                filter:
                  | { user_id: string }
                  | { intercom_user_id: string }
                  | { email: string }
                  | { anonymous_id: string }
                type: 'user' | 'lead'
                per_page?: number | undefined
                since?: bigint | undefined
                before?: bigint | undefined
                summary?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: DataEventList | DataEventSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter:
                  | { user_id: string }
                  | { intercom_user_id: string }
                  | { email: string }
                  | { anonymous_id: string }
                type: 'user' | 'lead'
                per_page?: number | undefined
                since?: bigint | undefined
                before?: bigint | undefined
                summary?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter:
                  | { user_id: string }
                  | { intercom_user_id: string }
                  | { email: string }
                  | { anonymous_id: string }
                type: 'user' | 'lead'
                per_page?: number | undefined
                since?: bigint | undefined
                before?: bigint | undefined
                summary?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter:
                  | { user_id: string }
                  | { intercom_user_id: string }
                  | { email: string }
                  | { anonymous_id: string }
                type: 'user' | 'lead'
                per_page?: number | undefined
                since?: bigint | undefined
                before?: bigint | undefined
                summary?: boolean | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/summaries': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventSummariesRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventSummariesRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventSummariesRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataEventSummariesRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/export/content/data': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: DataExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateDataExportsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/export/content/data/:job_identifier': {
      $get:
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DataExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DataExport
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/export/cancel/:job_identifier': {
      $post:
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DataExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/download/content/data/:job_identifier': {
      $get:
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_identifier: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/jobs/status/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Jobs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/messages': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateMessageRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/whatsapp/status': {
      $get:
        | {
            input: { query: { message_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: WhatsappMessageStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { message_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { message_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { message_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { message_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/messages/status': {
      $get:
        | {
            input: {
              query: {
                ruleset_id: string
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: WhatsappMessageStatusList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ruleset_id: string
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ruleset_id: string
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ruleset_id: string
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ruleset_id: string
                per_page?: number | undefined
                starting_after?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/news/news_items': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: NewsItemRequest
            }
            output: NewsItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: NewsItemRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: NewsItemRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: NewsItemRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/news/news_items/:news_item_id': {
      $get:
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: NewsItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateNewsItemRequest }
            output: NewsItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateNewsItemRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateNewsItemRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateNewsItemRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { news_item_id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/news/newsfeeds/:newsfeed_id/items': {
      $get:
        | {
            input: { param: { newsfeed_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { newsfeed_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { newsfeed_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { newsfeed_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/news/newsfeeds': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: PaginatedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/news/newsfeeds/:newsfeed_id': {
      $get:
        | {
            input: { param: { newsfeed_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Newsfeed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { newsfeed_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { newsfeed_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/notes/:note_id': {
      $get:
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Note
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: DeletedNoteObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { note_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/segments': {
      $get:
        | {
            input: { query: { include_count?: boolean | undefined; type?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: SegmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_count?: boolean | undefined; type?: string | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/segments/:segment_id': {
      $get:
        | {
            input: { param: { segment_id: string } } & {
              query: { include_count?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Segment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { include_count?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { include_count?: boolean | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscription_types': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: SubscriptionTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/subscription_types/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: SubscriptionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/phone_call_redirects': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreatePhoneSwitchRequest
            }
            output: PhoneSwitch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreatePhoneSwitchRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreatePhoneSwitchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreatePhoneSwitchRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/calls': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: CallList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/calls/:call_id': {
      $get:
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Call
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/calls/:call_id/recording': {
      $get:
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { call_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/calls/:id/transcript': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: CallTranscriptTurn[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/calls/search': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { conversation_ids: string[] }
            }
            output: {
              type?: string | undefined
              data?:
                | {
                    type?: string | undefined
                    id?: string | undefined
                    conversation_id?: (string | null) | undefined
                    admin_id?: (string | null) | undefined
                    contact_id?: (string | null) | undefined
                    state?: string | undefined
                    initiated_at?: Datetime | undefined
                    answered_at?: Datetime | undefined
                    ended_at?: Datetime | undefined
                    created_at?: Datetime | undefined
                    updated_at?: Datetime | undefined
                    recording_url?: (string | null) | undefined
                    transcription_url?: (string | null) | undefined
                    call_type?: string | undefined
                    direction?: string | undefined
                    ended_reason?: (string | null) | undefined
                    phone?: (string | null) | undefined
                    fin_recording_url?: (string | null) | undefined
                    fin_transcription_url?: (string | null) | undefined
                    duration?: (number | null) | undefined
                    talk_time?: (number | null) | undefined
                    queue_time?: (number | null) | undefined
                    hold_time?: (number | null) | undefined
                    transcript?: { [x: string]: unknown }[] | undefined
                    transcript_status?: (string | null) | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { conversation_ids: string[] }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: { conversation_ids: string[] }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                id?: string | undefined
                taggable_type?: 'user' | 'company' | undefined
                taggable_id?: string | undefined
                user_id?: string | undefined
                email?: string | undefined
                company_id?: string | undefined
                name?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: TagList | TagBasic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | undefined
                taggable_type?: 'user' | 'company' | undefined
                taggable_id?: string | undefined
                user_id?: string | undefined
                email?: string | undefined
                company_id?: string | undefined
                name?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string | undefined
                taggable_type?: 'user' | 'company' | undefined
                taggable_id?: string | undefined
                user_id?: string | undefined
                email?: string | undefined
                company_id?: string | undefined
                name?: string | undefined
              }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json:
                | CreateOrUpdateTagRequest
                | TagCompanyRequest
                | UntagCompanyRequest
                | TagMultipleUsersRequest
            }
            output: TagCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json:
                | CreateOrUpdateTagRequest
                | TagCompanyRequest
                | UntagCompanyRequest
                | TagMultipleUsersRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json:
                | CreateOrUpdateTagRequest
                | TagCompanyRequest
                | UntagCompanyRequest
                | TagMultipleUsersRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json:
                | CreateOrUpdateTagRequest
                | TagCompanyRequest
                | UntagCompanyRequest
                | TagMultipleUsersRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tags/:tag_id': {
      $get:
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: TagBasic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teams': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: TeamList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/teams/:team_id': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teams/:team_id/metrics': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: { idle_threshold?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: TeamMetricList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: { idle_threshold?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id: string } } & {
              query: { idle_threshold?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id: string } } & {
              query: { idle_threshold?: number | undefined }
            } & { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ticket_states': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: TicketStateList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ticket_types/:ticket_type_id/attributes': {
      $post:
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateTicketTypeAttributeRequest }
            output: TicketTypeAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateTicketTypeAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: CreateTicketTypeAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ticket_types/:ticket_type_id/attributes/:attribute_id': {
      $put:
        | {
            input: { param: { ticket_type_id: string; attribute_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateTicketTypeAttributeRequest }
            output: TicketTypeAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_type_id: string; attribute_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateTicketTypeAttributeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ticket_types': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: TicketTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateTicketTypeRequest
            }
            output: TicketType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateTicketTypeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: CreateTicketTypeRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ticket_types/:ticket_type_id': {
      $get:
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: TicketType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateTicketTypeRequest }
            output: TicketType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_type_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: UpdateTicketTypeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/tickets/:ticket_id/reply': {
      $post:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContactReplyTicketRequest | AdminReplyTicketRequest }
            output: TicketReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContactReplyTicketRequest | AdminReplyTicketRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContactReplyTicketRequest | AdminReplyTicketRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ContactReplyTicketRequest | AdminReplyTicketRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets/:ticket_id/tags': {
      $post:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { id: string; admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets/:ticket_id/tags/:tag_id': {
      $delete:
        | {
            input: { param: { ticket_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string; tag_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { admin_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets/:ticket_id/linked_conversations': {
      $post:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { conversation_id: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { conversation_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { conversation_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: { conversation_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets/:ticket_id/linked_conversations/:id': {
      $delete:
        | {
            input: { param: { ticket_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string; id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tickets/enqueue': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Jobs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: {
                ticket_type_id: string
                contacts?:
                  | ({ id: string } | { external_id: string } | { email: string })[]
                  | undefined
                conversation_to_link_id?: string | undefined
                company_id?: string | undefined
                created_at?: number | undefined
                ticket_attributes?: TicketRequestCustomAttributes | undefined
                assignment?:
                  | {
                      admin_assignee_id?: string | undefined
                      team_assignee_id?: string | undefined
                    }
                  | undefined
                channel?: 'email' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tickets/:ticket_id': {
      $put:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                ticket_attributes?: { [x: string]: unknown } | undefined
                ticket_state_id?: string | undefined
                company_id?: string | undefined
                open?: boolean | undefined
                is_shared?: boolean | undefined
                snoozed_until?: number | undefined
                admin_id?: number | undefined
                assignee_id?: string | undefined
              }
            }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                ticket_attributes?: { [x: string]: unknown } | undefined
                ticket_state_id?: string | undefined
                company_id?: string | undefined
                open?: boolean | undefined
                is_shared?: boolean | undefined
                snoozed_until?: number | undefined
                admin_id?: number | undefined
                assignee_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                ticket_attributes?: { [x: string]: unknown } | undefined
                ticket_state_id?: string | undefined
                company_id?: string | undefined
                open?: boolean | undefined
                is_shared?: boolean | undefined
                snoozed_until?: number | undefined
                admin_id?: number | undefined
                assignee_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                ticket_attributes?: { [x: string]: unknown } | undefined
                ticket_state_id?: string | undefined
                company_id?: string | undefined
                open?: boolean | undefined
                is_shared?: boolean | undefined
                snoozed_until?: number | undefined
                admin_id?: number | undefined
                assignee_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & {
              json: {
                ticket_attributes?: { [x: string]: unknown } | undefined
                ticket_state_id?: string | undefined
                company_id?: string | undefined
                open?: boolean | undefined
                is_shared?: boolean | undefined
                snoozed_until?: number | undefined
                admin_id?: number | undefined
                assignee_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: TicketDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tickets/:ticket_id/change_type': {
      $post:
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ChangeTicketTypeRequest }
            output: Ticket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ChangeTicketTypeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ChangeTicketTypeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ticket_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            } & { json: ChangeTicketTypeRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets/search': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: SearchRequest
            }
            output: TicketList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: SearchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/visitors': {
      $put:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateVisitorRequest
            }
            output: Visitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: UpdateVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { user_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Visitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { user_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/visitors/convert': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ConvertVisitorRequest
            }
            output: Contact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ConvertVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ConvertVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: ConvertVisitorRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/brands': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: BrandList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/brands/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Brand
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emails': {
      $get:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: EmailList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/emails/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: EmailSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/fin_voice/register': {
      $post:
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RegisterFinVoiceCallRequest
            }
            output: AiCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RegisterFinVoiceCallRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RegisterFinVoiceCallRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Intercom-Version'?: IntercomVersion | undefined } } & {
              json: RegisterFinVoiceCallRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fin_voice/collect/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AiCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fin_voice/external_id/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AiCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fin_voice/phone_number/:phone_number': {
      $get:
        | {
            input: { param: { phone_number: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AiCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { phone_number: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fin_voice/conversation/:conversation_id': {
      $get:
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: AiCallResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conversation_id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/export/workflows/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: WorkflowExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Intercom-Version'?: IntercomVersion | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
