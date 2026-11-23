type UserForAdmin = {
  active?: boolean | undefined
  agent_brand_ids?: bigint[] | undefined
  alias?: string | undefined
  chat_only?: boolean | undefined
  created_at?: string | undefined
  custom_role_id?: (bigint | null) | undefined
  default_group_id?: bigint | undefined
  details?: string | undefined
  email?: string | undefined
  external_id?: (string | null) | undefined
  iana_time_zone?: string | undefined
  id?: bigint | undefined
  last_login_at?: string | undefined
  locale?: string | undefined
  locale_id?: bigint | undefined
  moderator?: boolean | undefined
  name: string
  notes?: string | undefined
  only_private_comments?: boolean | undefined
  organization_id?: (bigint | null) | undefined
  phone?: (string | null) | undefined
  photo?: ({ [x: string]: unknown } | null) | undefined
  remote_photo_url?: string | undefined
  report_csv?: boolean | undefined
  restricted_agent?: boolean | undefined
  role?: string | undefined
  role_type?: (number | null) | undefined
  separation?: { brand_id?: bigint | undefined; scope: 'account' | 'brand' } | undefined
  shared?: boolean | undefined
  shared_agent?: boolean | undefined
  shared_phone_number?: (boolean | null) | undefined
  signature?: string | undefined
  suspended?: boolean | undefined
  suspension_details?: ({ channels: ('all' | 'messaging')[] } | null) | undefined
  tags?: string[] | undefined
  ticket_restriction?: (string | null) | undefined
  time_zone?: string | undefined
  two_factor_auth_enabled?: (boolean | null) | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_fields?: { [x: string]: unknown } | undefined
  verified?: boolean | undefined
}
type UserForEndUser = {
  created_at?: string | undefined
  email?: string | undefined
  iana_time_zone?: string | undefined
  id?: bigint | undefined
  locale?: string | undefined
  locale_id?: bigint | undefined
  name: string
  organization_id?: bigint | undefined
  phone?: string | undefined
  photo?: { [x: string]: unknown } | undefined
  role?: string | undefined
  shared_phone_number?: boolean | undefined
  time_zone?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  verified?: boolean | undefined
}
type UserObject = UserForAdmin | UserForEndUser
type UsersResponse = { users?: UserObject[] | undefined }
type ReverseLookupResponse = UsersResponse
type AccountSettingsEmailObject = {
  accept_wildcard_emails?: boolean | undefined
  custom_dkim_domain?: boolean | undefined
  email_category_outcome_overrides?:
    | {
        adult_content?: 'default' | 'accept' | 'suspend' | undefined
        blocklisted?: 'default' | 'accept' | 'suspend' | undefined
        marketing?: 'default' | 'accept' | 'suspend' | undefined
        phishing?: 'default' | 'accept' | 'suspend' | undefined
        scam?: 'default' | 'accept' | 'suspend' | undefined
        slightly_spam?: 'default' | 'accept' | 'suspend' | undefined
        spam?: 'default' | 'accept' | 'suspend' | undefined
      }
    | undefined
  email_hc_ai_agent_comments?: boolean | undefined
  email_sender_authentication?: boolean | undefined
  email_sender_authentication_profile?: 'default' | 'enhanced' | 'enhancedAllTraffic' | undefined
  email_status?: boolean | undefined
  email_template_photos?: boolean | undefined
  email_template_selection?: boolean | undefined
  email_voice_ai_agent_comments?: boolean | undefined
  gmail_actions?: boolean | undefined
  gmail_fallback_enabled?: boolean | undefined
  html_mail_template?: string | undefined
  mail_delimiter?: string | undefined
  modern_email_template?: boolean | undefined
  multi_recipient_email_tickets?: boolean | undefined
  no_mail_delimiter?: boolean | undefined
  personalized_replies?: boolean | undefined
  rich_content_in_emails?: boolean | undefined
  send_gmail_messages_via_gmail?: boolean | undefined
  text_mail_template?: string | undefined
}
type EmailSettingsResponse = {
  settings?: { email?: AccountSettingsEmailObject | undefined } | undefined
}
type UpdateEmailSettingsRequest = { settings: { email: AccountSettingsEmailObject } }
type AccountSettingsActiveFeaturesObject = {
  agent_forwarding?: boolean | undefined
  allow_ccs?: boolean | undefined
  allow_email_template_customization?: boolean | undefined
  automatic_answers?: boolean | undefined
  bcc_archiving?: boolean | undefined
  benchmark_opt_out?: boolean | undefined
  business_hours?: boolean | undefined
  chat?: boolean | undefined
  chat_about_my_ticket?: boolean | undefined
  csat_reason_code?: boolean | undefined
  custom_dkim_domain?: boolean | undefined
  customer_context_as_default?: boolean | undefined
  customer_satisfaction?: boolean | undefined
  customer_satisfaction_survey?: boolean | undefined
  dynamic_contents?: boolean | undefined
  explore?: boolean | undefined
  explore_on_support_ent_plan?: boolean | undefined
  explore_on_support_pro_plan?: boolean | undefined
  facebook?: boolean | undefined
  facebook_login?: boolean | undefined
  fallback_composer?: boolean | undefined
  forum_analytics?: boolean | undefined
  good_data_and_explore?: boolean | undefined
  google_login?: boolean | undefined
  is_abusive?: boolean | undefined
  light_agents?: boolean | undefined
  markdown?: boolean | undefined
  on_hold_status?: boolean | undefined
  organization_access_enabled?: boolean | undefined
  rich_content_in_emails?: boolean | undefined
  sandbox?: boolean | undefined
  satisfaction_prediction?: boolean | undefined
  suspended_ticket_notification?: boolean | undefined
  ticket_forms?: boolean | undefined
  ticket_tagging?: boolean | undefined
  topic_suggestion?: boolean | undefined
  twitter?: boolean | undefined
  twitter_login?: boolean | undefined
  user_org_fields?: boolean | undefined
  user_tagging?: boolean | undefined
  voice?: boolean | undefined
}
type AccountSettingsAgentObject = {
  agent_home?: boolean | undefined
  agent_workspace?: boolean | undefined
  aw_self_serve_migration_enabled?: boolean | undefined
  focus_mode?: boolean | undefined
  idle_timeout_enabled?: boolean | undefined
  unified_agent_statuses?: boolean | undefined
}
type AccountSettingsApiObject = {
  accepted_api_agreement?: boolean | undefined
  api_password_access_end_users?: boolean | undefined
  api_token_access?: string | undefined
}
type AccountSettingsAppsObject = {
  create_private?: boolean | undefined
  create_public?: boolean | undefined
  use?: boolean | undefined
}
type AccountSettingsBillingObject = { backend?: string | undefined }
type AccountSettingsBrandingObject = {
  favicon_url?: (string | null) | undefined
  header_color?: string | undefined
  header_logo_url?: (string | null) | undefined
  page_background_color?: string | undefined
  tab_background_color?: string | undefined
  text_color?: string | undefined
}
type AccountSettingsBrandsObject = {
  brand_user_separation_scope_query_default?: '0' | 'default_brand' | 'all' | 'error' | undefined
  default_brand_id?: bigint | undefined
  end_user_across_brand_requests?: boolean | undefined
  end_user_upgrade_brand_association_behavior?: string | undefined
  new_agent_brand_association_behavior?: string | undefined
  require_brand_on_new_tickets?: boolean | undefined
}
type AccountSettingsCdnObject = {
  cdn_provider?: string | undefined
  fallback_cdn_provider?: string | undefined
  hosts?: { name?: string | undefined; url?: string | undefined }[] | undefined
}
type AccountSettingsChatObject = {
  available?: boolean | undefined
  enabled?: boolean | undefined
  integrated?: boolean | undefined
  maximum_request_count?: number | undefined
  welcome_message?: string | undefined
}
type AccountSettingsCrossSellObject = {
  show_chat_tooltip?: boolean | undefined
  xsell_source?: (string | null) | undefined
}
type AccountSettingsDeviceObject = {
  enabled?: boolean | undefined
  hide_ip?: boolean | undefined
  hide_location?: boolean | undefined
}
type AccountSettingsGoogleAppsObject = {
  has_google_apps?: boolean | undefined
  has_google_apps_admin?: boolean | undefined
}
type AccountSettingsGroupObject = { check_group_name_uniqueness?: boolean | undefined }
type AccountSettingsKnowledgeObject = {
  default_search_filters_brands?: string | undefined
  default_search_filters_categories?: string | undefined
  default_search_filters_external_content_sources?: string | undefined
  default_search_filters_locales?: string | undefined
  default_search_filters_sections?: string | undefined
  generative_answers?: boolean | undefined
  require_article_templates?: boolean | undefined
  search_articles?: boolean | undefined
  search_community_posts?: boolean | undefined
  search_external_content?: boolean | undefined
}
type AccountSettingsLimitsObject = { attachment_size?: number | undefined }
type AccountSettingsLocalizationObject = { locale_ids?: bigint[] | undefined }
type AccountSettingsLotusObject = {
  pod_id?: bigint | undefined
  prefer_lotus?: boolean | undefined
  reporting?: boolean | undefined
}
type AccountSettingsMessageInactivityObject = {
  default_localized_messages?:
    | {
        pre_solved_message_1?: string | undefined
        pre_solved_message_2?: string | undefined
        solved_message?: string | undefined
      }
    | undefined
  enabled?: boolean | undefined
  end_session?: boolean | undefined
  reminders?:
    | {
        message: string
        tags?: string[] | undefined
        ticket_status_id?: (bigint | null) | undefined
        timeout?: (number | null) | undefined
      }[]
    | undefined
  ticket_status_id?: bigint | undefined
  timeout?: number | undefined
}
type AccountSettingsMetricsObject = { account_size?: string | undefined }
type AccountSettingsOnboardingObject = {
  checklist_onboarding_version?: number | undefined
  onboarding_segments?: (string | null) | undefined
  product_sign_up?: (string | null) | undefined
}
type AccountSettingsRoutingObject = {
  autorouting_tag?: string | undefined
  enabled?: boolean | undefined
  max_email_capacity?: number | undefined
  max_messaging_capacity?: number | undefined
  reassignment_messaging_enabled?: boolean | undefined
  reassignment_messaging_timeout?: number | undefined
  reassignment_talk_timeout?: number | undefined
}
type AccountSettingsRuleObject = {
  macro_most_used?: boolean | undefined
  macro_order?: string | undefined
  skill_based_filtered_views?: { [x: string]: unknown }[] | undefined
  using_skill_based_routing?: boolean | undefined
}
type AccountSettingsSideConversationsObject = {
  email_channel?: boolean | undefined
  msteams_channel?: boolean | undefined
  show_in_context_panel?: boolean | undefined
  slack_channel?: boolean | undefined
  tickets_channel?: boolean | undefined
}
type AccountSettingsStatisticsObject = {
  forum?: boolean | undefined
  rule_usage?: boolean | undefined
  search?: boolean | undefined
}
type AccountSettingsTicketFormObject = {
  raw_ticket_forms_instructions?: string | undefined
  ticket_forms_instructions?: string | undefined
}
type AccountSettingsTicketObject = {
  accepted_new_collaboration_tos?: boolean | undefined
  agent_collision?: boolean | undefined
  agent_invitation_enabled?: boolean | undefined
  agent_ticket_deletion?: boolean | undefined
  allow_group_reset?: boolean | undefined
  assign_default_organization?: boolean | undefined
  assign_tickets_upon_solve?: boolean | undefined
  auto_translation_enabled?: boolean | undefined
  auto_updated_ccs_followers_rules?: boolean | undefined
  chat_sla_enablement?: boolean | undefined
  collaboration?: boolean | undefined
  comments_public_by_default?: boolean | undefined
  default_solved_ticket_reassignment_strategy?: string | undefined
  default_to_draft_mode?: boolean | undefined
  email_attachments?: boolean | undefined
  email_redact_attachments_when_placeholders_disallow?: boolean | undefined
  emoji_autocompletion?: boolean | undefined
  follower_and_email_cc_collaborations?: boolean | undefined
  has_color_text?: boolean | undefined
  is_first_comment_private_enabled?: boolean | undefined
  light_agent_email_ccs_allowed?: boolean | undefined
  list_empty_views?: boolean | undefined
  list_newest_comments_first?: boolean | undefined
  markdown_ticket_comments?: boolean | undefined
  maximum_personal_views_to_list?: number | undefined
  modern_ticket_reassignment?: boolean | undefined
  private_attachments?: boolean | undefined
  rich_text_comments?: boolean | undefined
  show_modern_ticket_reassignment?: boolean | undefined
  status_hold?: boolean | undefined
  tagging?: boolean | undefined
  using_skill_based_routing?: boolean | undefined
}
type AccountSettingsTwitterObject = { shorten_url?: string | undefined }
type AccountSettingsUserObject = {
  agent_created_welcome_emails?: boolean | undefined
  end_user_phone_number_validation?: boolean | undefined
  have_gravatars_enabled?: boolean | undefined
  language_selection?: boolean | undefined
  multiple_organizations?: boolean | undefined
  tagging?: boolean | undefined
  time_zone_selection?: boolean | undefined
}
type AccountSettingsVoiceObject = {
  agent_confirmation_when_forwarding?: boolean | undefined
  agent_wrap_up_after_calls?: boolean | undefined
  enabled?: boolean | undefined
  logging?: boolean | undefined
  maximum_queue_size?: number | undefined
  maximum_queue_wait_time?: number | undefined
  only_during_business_hours?: boolean | undefined
  outbound_enabled?: boolean | undefined
  recordings_public?: boolean | undefined
  uk_mobile_forwarding?: boolean | undefined
}
type AccountSettingsObject = {
  active_features?: AccountSettingsActiveFeaturesObject | undefined
  agents?: AccountSettingsAgentObject | undefined
  api?: AccountSettingsApiObject | undefined
  apps?: AccountSettingsAppsObject | undefined
  billing?: AccountSettingsBillingObject | undefined
  branding?: AccountSettingsBrandingObject | undefined
  brands?: AccountSettingsBrandsObject | undefined
  cdn?: AccountSettingsCdnObject | undefined
  chat?: AccountSettingsChatObject | undefined
  cross_sell?: AccountSettingsCrossSellObject | undefined
  device_metadata?: AccountSettingsDeviceObject | undefined
  email?: AccountSettingsEmailObject | undefined
  google_apps?: AccountSettingsGoogleAppsObject | undefined
  groups?: AccountSettingsGroupObject | undefined
  knowledge?: AccountSettingsKnowledgeObject | undefined
  limits?: AccountSettingsLimitsObject | undefined
  localization?: AccountSettingsLocalizationObject | undefined
  lotus?: AccountSettingsLotusObject | undefined
  messaging_inactivity?: AccountSettingsMessageInactivityObject | undefined
  metrics?: AccountSettingsMetricsObject | undefined
  onboarding?: AccountSettingsOnboardingObject | undefined
  routing?: AccountSettingsRoutingObject | undefined
  rule?: AccountSettingsRuleObject | undefined
  side_conversations?: AccountSettingsSideConversationsObject | undefined
  statistics?: AccountSettingsStatisticsObject | undefined
  ticket_form?: AccountSettingsTicketFormObject | undefined
  tickets?: AccountSettingsTicketObject | undefined
  twitter?: AccountSettingsTwitterObject | undefined
  user?: AccountSettingsUserObject | undefined
  voice?: AccountSettingsVoiceObject | undefined
}
type AccountSettingsResponse = { settings?: AccountSettingsObject | undefined }
type AccountSettingsUpdateRequest = {
  settings: {
    active_features?:
      | {
          access_logs_enabled?: boolean | undefined
          agent_task_lists?: boolean | undefined
          allow_ccs?: boolean | undefined
          approvals_activated?: boolean | undefined
          approvers_as_end_users?: boolean | undefined
          audit_logs_gdpr?: boolean | undefined
          automatic_answers?: boolean | undefined
          business_hours?: boolean | undefined
          custom_objects_activated?: boolean | undefined
          customer_satisfaction?: boolean | undefined
          release_control_enabled?: boolean | undefined
          ticket_tagging?: boolean | undefined
          user_tagging?: boolean | undefined
        }
      | undefined
    agents?:
      | {
          agent_dashboard_enabled?: boolean | undefined
          agent_home?: boolean | undefined
          agent_workspace?: boolean | undefined
          ai_async_comment_translations_eap_enabled?: boolean | undefined
          ai_translation_disclosure_enabled?: boolean | undefined
          dark_mode_agent_workspace?: boolean | undefined
          dark_mode_terms_and_conditions_accepted?: boolean | undefined
          explore_zra_monitoring_assistant_enabled?: boolean | undefined
          focus_mode?: boolean | undefined
          idle_timeout_enabled?: boolean | undefined
          show_user_profile_page_toggle?: boolean | undefined
          spell_checker_enabled?: boolean | undefined
          split_view_enabled?: boolean | undefined
          split_view_tos_accepted?: boolean | undefined
          suggested_assignees_all_groups?: boolean | undefined
          suggested_assignees_eap_enabled?: boolean | undefined
          suggested_assignees_group_ids?: number[] | undefined
          unified_agent_statuses?: boolean | undefined
          unified_navigation_enabled?: boolean | undefined
          unified_navigation_terms_and_conditions_accepted?: boolean | undefined
        }
      | undefined
    ai?:
      | {
          admin_copilot_conversational_enabled?: boolean | undefined
          macro_content_suggestions_title_gen_enabled?: boolean | undefined
        }
      | undefined
    api?:
      | {
          accepted_api_agreement?: true | undefined
          api_password_access?: boolean | undefined
          api_password_access_end_users?: boolean | undefined
          api_token_access?: boolean | undefined
        }
      | undefined
    approvals?: { slack_workspace?: string | undefined } | undefined
    automatic_answers?: { threshold?: string | undefined } | undefined
    branding?:
      | {
          header_color?: string | undefined
          page_background_color?: string | undefined
          tab_background_color?: string | undefined
          text_color?: string | undefined
        }
      | undefined
    brands?:
      | {
          brand_user_separation_scope_query_default?: string | undefined
          default_brand_id?: bigint | undefined
          end_user_across_brand_requests?: boolean | undefined
          end_user_upgrade_brand_association_behavior?: string | undefined
          new_agent_brand_association_behavior?: string | undefined
          require_brand_on_new_tickets?: boolean | undefined
        }
      | undefined
    cross_sell?: { show_chat_tooltip?: boolean | undefined } | undefined
    device_metadata?:
      | {
          enabled?: boolean | undefined
          hide_ip?: boolean | undefined
          hide_location?: boolean | undefined
        }
      | undefined
    email?:
      | {
          accept_wildcard_emails?: boolean | undefined
          custom_dkim_domain?: boolean | undefined
          email_category_outcome_overrides?:
            | {
                adult_content?: 'default' | 'accept' | 'suspend' | undefined
                blocklisted?: 'default' | 'accept' | 'suspend' | undefined
                marketing?: 'default' | 'accept' | 'suspend' | undefined
                phishing?: 'default' | 'accept' | 'suspend' | undefined
                scam?: 'default' | 'accept' | 'suspend' | undefined
                slightly_spam?: 'default' | 'accept' | 'suspend' | undefined
                spam?: 'default' | 'accept' | 'suspend' | undefined
              }
            | undefined
          email_hc_ai_agent_comments?: boolean | undefined
          email_sender_authentication?: boolean | undefined
          email_sender_authentication_profile?:
            | 'default'
            | 'enhanced'
            | 'enhancedAllTraffic'
            | undefined
          email_status?: boolean | undefined
          email_template_photos?: boolean | undefined
          email_template_selection?: boolean | undefined
          email_voice_ai_agent_comments?: boolean | undefined
          gmail_actions?: boolean | undefined
          gmail_fallback_enabled?: boolean | undefined
          html_mail_template?: string | undefined
          mail_delimiter?: string | undefined
          modern_email_template?: boolean | undefined
          multi_recipient_email_tickets?: boolean | undefined
          no_mail_delimiter?: boolean | undefined
          personalized_replies?: boolean | undefined
          rich_content_in_emails?: boolean | undefined
          send_gmail_messages_via_gmail?: boolean | undefined
          text_mail_template?: string | undefined
        }
      | undefined
    google_apps?: { has_google_apps_admin?: boolean | undefined } | undefined
    groups?: { check_group_name_uniqueness?: boolean | undefined } | undefined
    it_asset_management?:
      | { enabled?: boolean | undefined; universal_import_enabled?: boolean | undefined }
      | undefined
    knowledge?:
      | {
          default_search_filters_brands?: string | undefined
          default_search_filters_categories?: string | undefined
          default_search_filters_external_content_sources?: string | undefined
          default_search_filters_locales?: string | undefined
          default_search_filters_sections?: string | undefined
          generative_answers?: boolean | undefined
          require_article_templates?: boolean | undefined
          search_articles?: boolean | undefined
          search_community_posts?: boolean | undefined
          search_external_content?: boolean | undefined
        }
      | undefined
    localization?:
      | {
          default_locale_identifier?: string | undefined
          locale_ids?: number[] | undefined
          time_zone?: string | undefined
          uses_12_hour_clock?: boolean | undefined
        }
      | undefined
    messaging?:
      | {
          messaging_end_session?: boolean | undefined
          messaging_end_user_presence?: boolean | undefined
          messaging_ticket_subject_template?: 'requester_name' | 'requester_id' | undefined
          messaging_trust_unverified_claim?: boolean | undefined
          messaging_use_unverified_email?: boolean | undefined
        }
      | undefined
    messaging_inactivity?:
      | {
          enabled?: boolean | undefined
          end_session?: boolean | undefined
          reminders?:
            | {
                message: string
                tags?: string[] | undefined
                ticket_status_id?: (number | null) | undefined
                timeout?: number | undefined
              }[]
            | undefined
          ticket_status_id?: number | undefined
          timeout?: number | undefined
        }
      | undefined
    messaging_routing?:
      | {
          agents_can_set_max_chats?: boolean | undefined
          auto_accept?: boolean | undefined
          distribution_method?: 'pull' | 'push' | undefined
          enable_pull_at_max?: boolean | undefined
          enabled?: boolean | undefined
          idle_reassignment?: boolean | undefined
          idle_timeout?: number | undefined
          limit_type?: 'account' | 'agent' | undefined
          max_concurrent_chats?: number | undefined
          pause_idle_agents?: boolean | undefined
          pause_idle_chats?: number | undefined
          pause_idle_status?: 'away' | 'invisible' | undefined
          pull?: { limit_concurrent_chats?: boolean | undefined } | undefined
          push?: { limit_concurrent_chats?: boolean | undefined } | undefined
        }
      | undefined
    notifications?: { notifications_preference_admin_setting?: boolean | undefined } | undefined
    onboarding?:
      | {
          checklist_onboarding_version?: number | undefined
          onboarding_segments?: string | undefined
        }
      | undefined
    qa?: { quality_score_opted_out?: boolean | undefined } | undefined
    realtime_insights?:
      | {
          anomaly_detection?: boolean | undefined
          enabled?: boolean | undefined
          trending_topics_summary?: boolean | undefined
        }
      | undefined
    routing?:
      | {
          assignment_method?:
            | 'highest_spare_capacity'
            | 'round_robin'
            | 'highest_percentage_spare_capacity'
            | undefined
          auto_accept_messaging_enabled?: boolean | undefined
          auto_open_email_enabled?: boolean | undefined
          autorouting_tag?: string | undefined
          enabled?: boolean | undefined
          focus_mode_enabled?: boolean | undefined
          max_email_capacity?: number | undefined
          max_messaging_capacity?: number | undefined
          messaging_activity_routing_enabled?: boolean | undefined
          missed_messaging_assignments?:
            | {
                agent_unified_status_id?: number | undefined
                enabled?: boolean | undefined
                limit?: number | undefined
              }
            | undefined
          missed_talk_assignments?:
            | {
                agent_unified_status_id?: number | undefined
                enabled?: boolean | undefined
                limit?: number | undefined
              }
            | undefined
          reassignment_agent_status_change_enabled?: boolean | undefined
          reassignment_agent_status_change_messaging_agent_statuses?: number[] | undefined
          reassignment_agent_status_change_messaging_enabled?: boolean | undefined
          reassignment_agent_status_change_messaging_ticket_priorities?: number[] | undefined
          reassignment_agent_status_change_support_agent_statuses?: number[] | undefined
          reassignment_agent_status_change_support_enabled?: boolean | undefined
          reassignment_agent_status_change_support_ticket_priorities?: number[] | undefined
          reassignment_messaging_enabled?: boolean | undefined
          reassignment_messaging_timeout?: number | undefined
          reassignment_reopened_tickets_enabled?: boolean | undefined
          reassignment_reopened_tickets_messaging_enabled?: boolean | undefined
          reassignment_reopened_tickets_messaging_statuses?: number[] | undefined
          reassignment_reopened_tickets_support_enabled?: boolean | undefined
          reassignment_reopened_tickets_support_statuses?: number[] | undefined
          reassignment_talk_timeout?: number | undefined
          reassignment_through_queues_enabled?: boolean | undefined
          skills_enabled?: boolean | undefined
          skills_timeout_enabled?: boolean | undefined
          skills_timeout_messaging?: number | undefined
          skills_timeout_support?: number | undefined
          skills_timeout_talk?: number | undefined
          throttle_cool_down_time?: number | undefined
          throttle_enabled_email?: boolean | undefined
          throttle_enabled_messaging?: boolean | undefined
          throttle_percentage_email?: number | undefined
          throttle_percentage_messaging?: number | undefined
          throttle_ramp_up_time_email?: number | undefined
          throttle_ramp_up_time_messaging?: number | undefined
          ticket_sorting_prioritize_sla?: boolean | undefined
          transform_to_email_enabled?: boolean | undefined
        }
      | undefined
    rule?:
      | {
          enable_macro_suggestions?: boolean | undefined
          macro_most_used?: boolean | undefined
          macro_order?: 'alphabetical' | 'position' | undefined
          skill_based_filtered_views?: number[] | number | undefined
        }
      | undefined
    saas_management_enabled?: boolean | undefined
    sandbox?: { creation_in_progress?: boolean | undefined } | undefined
    side_conversations?:
      | {
          email_channel?: boolean | undefined
          msteams_channel?: boolean | undefined
          show_in_context_panel?: boolean | undefined
          slack_channel?: boolean | undefined
          tickets_channel?: boolean | undefined
        }
      | undefined
    surveys?: { theming_integration_enabled?: boolean | undefined } | undefined
    ticket_form?: { ticket_forms_instructions?: string | undefined } | undefined
    tickets?:
      | {
          accepted_new_collaboration_tos?: boolean | undefined
          agent_can_change_requester?: boolean | undefined
          agent_email_ccs_become_followers?: boolean | undefined
          agent_invitation_enabled?: boolean | undefined
          agent_ticket_deletion?: boolean | undefined
          allow_group_reset?: boolean | undefined
          app_shortcuts_context_panel_enabled?: boolean | undefined
          assign_tickets_upon_solve?: boolean | undefined
          attachment_otp?: boolean | undefined
          attachment_otp_duration?: number | undefined
          attachment_public_duration?: number | undefined
          attachment_public_expiration?: boolean | undefined
          audio_recorder_enabled?: boolean | undefined
          auto_translation_enabled?: boolean | undefined
          auto_updated_ccs_followers_rules?: boolean | undefined
          bcc_archive_address?: string | undefined
          cc_blacklist?: string | undefined
          cc_email_template?: string | undefined
          cc_subject_template?: string | undefined
          ccs_followers_no_rollback?: boolean | undefined
          ccs_requester_excluded_public_comments?: boolean | undefined
          chat_sla_enablement?: boolean | undefined
          collaboration?: boolean | undefined
          collaborators_addable_only_by_agents?: boolean | undefined
          collaborators_settable_in_help_center?: boolean | undefined
          comment_email_ccs_allowed?: boolean | undefined
          comments_public_by_default?: boolean | undefined
          copy_original_assignee_and_group_to_followup?: boolean | undefined
          custom_allowed_attachment_file_types_list?: string | undefined
          custom_statuses_enabled?: boolean | undefined
          default_solved_ticket_reassignment_strategy?: string | undefined
          default_to_draft_mode?: boolean | undefined
          edit_ticket_skills_permission?: number | undefined
          email_attachments?: boolean | undefined
          email_ccs_addable_only_by_agents_via_email?: boolean | undefined
          email_comments_public?: boolean | undefined
          email_redact_attachments_when_placeholders_disallow?: boolean | undefined
          emoji_autocompletion?: boolean | undefined
          end_user_attachments?: boolean | undefined
          follower_and_email_cc_collaborations?: boolean | undefined
          follower_email_template?: string | undefined
          follower_subject_template?: string | undefined
          has_color_text?: boolean | undefined
          is_first_comment_private_enabled?: boolean | undefined
          light_agent_email_ccs_allowed?: boolean | undefined
          list_empty_views?: boolean | undefined
          list_newest_comments_first?: boolean | undefined
          markdown_ticket_comments?: boolean | undefined
          messaging_transcript_public?: boolean | undefined
          modern_ticket_reassignment?: boolean | undefined
          modify_closed_tickets_customer_setting?: boolean | undefined
          only_allowed_attachment_file_types?: string | boolean | undefined
          only_allowed_attachment_file_types_agreement?: string | undefined
          private_attachments?: boolean | undefined
          private_end_user_attachments?: boolean | undefined
          push_solved_ticket_reassignment_strategy_now?: boolean | undefined
          reengagement?: boolean | undefined
          render_custom_uri_hyperlinks?: string | undefined
          rich_text_comments?: boolean | undefined
          show_modern_ticket_reassignment?: boolean | undefined
          slack_reaction_ticket_creation?: boolean | undefined
          sunco_private_attachments_enabled?: boolean | undefined
          suspended_ticket_notification?:
            | { email_list?: string | undefined; frequency?: number | undefined }
            | undefined
          tagging?: boolean | undefined
          third_party_end_user_public_comments?: boolean | undefined
          ticket_auto_tagging?: boolean | undefined
          ticket_email_ccs_suspension_threshold?: number | undefined
          ticket_followers_allowed?: boolean | undefined
          ticket_id_sequence?: string | undefined
          ticket_tags_via_widget?: boolean | undefined
        }
      | undefined
    user?:
      | {
          agent_created_welcome_emails?: boolean | undefined
          end_user_phone_number_validation?: boolean | undefined
          have_gravatars_enabled?: boolean | undefined
          tagging?: boolean | undefined
        }
      | undefined
  }
}
type TrialAccountRemoteAuthenticationInput = {
  fingerprint?: (string | null) | undefined
  remote_login_url?: string | undefined
  remote_logout_url?: (string | null) | undefined
  type?: string | undefined
}
type TrialAccountAgentInput = {
  email?: string | undefined
  name?: string | undefined
  role?: string | undefined
}
type TrialAccountPartnerInput = { name?: string | undefined; url?: string | undefined }
type TrialAccountRequest = {
  account: {
    _zd_choose_shard_udupi?: (number | null) | undefined
    currency?: (string | null) | undefined
    employee_service_suite_trial?: (boolean | null) | string | number | undefined
    google_apps_domain?: (string | null) | undefined
    help_desk_size?: (string | null) | undefined
    language?: (string | null) | undefined
    multiproduct?: (boolean | null) | string | number | undefined
    name?: (string | null) | undefined
    remote_authentication?:
      | TrialAccountRemoteAuthenticationInput
      | ({ [x: string]: unknown } | null)
      | undefined
    remote_login_url?: (string | null) | undefined
    source?: (string | null) | undefined
    subdomain: string
    suite_trial?: (boolean | null) | string | number | undefined
    utc_offset?: (number | null) | string | undefined
    zendesk_suite_trial?: (boolean | null) | string | number | undefined
  }
  address: {
    city?: (string | null) | undefined
    phone: string | number
    province?: (string | null) | undefined
    street?: (string | null) | undefined
    zip?: (string | null) | undefined
  }
  agents?: (TrialAccountAgentInput[] | null) | undefined
  force_pod_id?: (string | null) | undefined
  owner: {
    email: string
    is_verified?: (string | null) | boolean | number | undefined
    name: string
    password?: (string | null) | undefined
  }
  partner?: TrialAccountPartnerInput | ({ [x: string]: unknown } | null) | undefined
  trial_extras?: ({ [x: string]: unknown } | null) | undefined
}
type TrialAccountObject = {
  name?: string | undefined
  subdomain?: string | undefined
  url?: string | undefined
}
type TrialAccountResponse = { account?: TrialAccountObject | undefined }
type ActivityObject = {
  actor?: {} | undefined
  actor_id?: bigint | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  object?: { [x: string]: unknown } | undefined
  target?: { [x: string]: unknown } | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user?: {} | undefined
  user_id?: bigint | undefined
  verb?: string | undefined
}
type ActivitiesResponse = {
  activities?: ActivityObject[] | undefined
  actors?: { [x: string]: unknown }[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  users?: { [x: string]: unknown }[] | undefined
}
type ActivityResponse = { activity?: ActivityObject | undefined }
type ActivitiesCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type ChannelFrameworkResultStatusObject = {
  code?: string | undefined
  description?: string | undefined
}
type ChannelFrameworkResultObject = {
  external_resource_id?: string | undefined
  status?: ChannelFrameworkResultStatusObject | undefined
}
type ChannelFrameworkPushResultsResponse = { results?: ChannelFrameworkResultObject[] | undefined }
type ApiTokenObject = {
  active?: boolean | undefined
  assigned_user_id?: bigint | undefined
  created_at?: string | undefined
  description?: (string | null) | undefined
  id?: bigint | undefined
  last_used?: (string | null) | undefined
  token?: string | undefined
  updated_at?: (string | null) | undefined
  user_email?: string | undefined
  user_id?: bigint | undefined
  user_name?: string | undefined
  visible_token?: string | undefined
}
type ApiTokensResponse = {
  api_tokens?: ApiTokenObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type ApiTokenErrorResponse = {
  error?: { message?: string | undefined; title?: string | undefined } | undefined
}
type CreateApiTokenRequest = {
  api_token?: { description?: string | undefined; user_id?: bigint | undefined } | undefined
}
type ApiTokenResponse = { api_token?: ApiTokenObject | undefined }
type ApiTokenValidationErrorResponse = {
  description?: string | undefined
  details?: { [x: string]: { description?: string | undefined }[] } | undefined
  error?: string | undefined
}
type UpdateApiTokenRequest = {
  api_token: { active?: boolean | undefined; description?: string | undefined }
}
type ApprovalClarificationFlowMessagesShowResponse = {
  approval_request_id?: string | undefined
  clarification_flow_messages?:
    | {
        author?:
          | ({
              avatar?: (string | null) | undefined
              id?: (bigint | null) | undefined
              name?: (string | null) | undefined
              role?: (string | null) | undefined
            } | null)
          | undefined
        created_at?: string | undefined
        id?: string | undefined
        message?: string | undefined
        via?: 'API' | 'EMAIL' | 'MSTEAMS' | 'SLACK' | 'SUPPORT' | undefined
      }[]
    | undefined
}
type ApprovalRequestsListResponse = {
  approval_requests?:
    | {
        approval_workflow_instance_id?: string | undefined
        assignee_group?: ({ id?: bigint | undefined; name?: string | undefined } | null) | undefined
        assignee_user?: ({ id?: bigint | undefined; name?: string | undefined } | null) | undefined
        clarification_flow_messages?:
          | {
              author?:
                | {
                    avatar?: string | undefined
                    email?: string | undefined
                    id?: bigint | undefined
                    name?: string | undefined
                    role?: string | undefined
                  }
                | undefined
              created_at?: string | undefined
              id?: string | undefined
              message?: string | undefined
            }[]
          | undefined
        created_at?: string | undefined
        created_by_user?:
          | {
              id?: bigint | undefined
              name?: string | undefined
              photo?: { content_url?: string | undefined } | undefined
            }
          | undefined
        decided_at?: (string | null) | undefined
        decisions?:
          | {
              decided_at?: string | undefined
              decided_by_user?:
                | ({
                    id?: bigint | undefined
                    name?: string | undefined
                    photo?: { content_url?: string | undefined } | undefined
                  } | null)
                | undefined
              decision_notes?: (string | null) | undefined
              origination_type?:
                | 'UI_ORIGINATION'
                | 'API_ORIGINATION'
                | 'SLACK_ORIGINATION'
                | 'ACTION_FLOW_ORIGINATION'
                | 'UNKNOWN_ORIGINATION'
                | undefined
              status?: string | undefined
            }[]
          | undefined
        deeplink?: (string | null) | undefined
        id?: string | undefined
        message?: string | undefined
        origination_type?:
          | 'API_ORIGINATION'
          | 'UI_ORIGINATION'
          | 'TRIGGER_ORIGINATION'
          | 'DATA_IMPORTER_ORIGINATION'
          | 'TEMPLATE_ORIGINATION'
          | 'ACTION_FLOW_ORIGINATION'
          | 'UNKNOWN_ORIGINATION'
          | undefined
        status?: string | undefined
        subject?: string | undefined
        ticket_id?: (bigint | null) | undefined
        withdrawn_reason?: (string | null) | undefined
      }[]
    | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
}
type ApprovalRequestError = { code: string; title: string }
type ApprovalRequestErrors = { errors?: ApprovalRequestError[] | undefined }
type ApprovalRequestCreateRequest = {
  approval_attachment_tokens?: string[] | undefined
  approval_requests?:
    | (
        | {
            assignee_group_id?: (bigint | null) | undefined
            assignee_user_id?: (bigint | null) | undefined
          }[]
        | null
      )
    | undefined
  assignee_group_id?: (bigint | null) | undefined
  assignee_user_id?: (bigint | null) | undefined
  message: string
  metadata?:
    | ({
        callback_info?: ({ token?: (string | null) | undefined } | null) | undefined
        workflow_id?: (string | null) | undefined
      } | null)
    | undefined
  subject: string
  ticket_id: bigint
}
type ApprovalRequestObject = {
  approval_workflow_instance_id?: string | undefined
  assignee_group_id?: (bigint | null) | undefined
  assignee_user_id?: (bigint | null) | undefined
  created_at?: string | undefined
  created_by_id?: bigint | undefined
  id?: string | undefined
  message?: string | undefined
  origination_type?:
    | 'API_ORIGINATION'
    | 'UI_ORIGINATION'
    | 'TRIGGER_ORIGINATION'
    | 'DATA_IMPORTER_ORIGINATION'
    | 'TEMPLATE_ORIGINATION'
    | 'ACTION_FLOW_ORIGINATION'
    | 'UNKNOWN_ORIGINATION'
    | undefined
  status?: string | undefined
  subject?: string | undefined
  ticket_id?: bigint | undefined
}
type ApprovalRequestCreateResponse = {
  approval_request?:
    | {
        approval_workflow_instance_id?: string | undefined
        assignee_group_id?: (bigint | null) | undefined
        assignee_user_id?: (bigint | null) | undefined
        created_at?: string | undefined
        created_by_id?: bigint | undefined
        id?: string | undefined
        message?: string | undefined
        origination_type?:
          | 'API_ORIGINATION'
          | 'UI_ORIGINATION'
          | 'TRIGGER_ORIGINATION'
          | 'DATA_IMPORTER_ORIGINATION'
          | 'TEMPLATE_ORIGINATION'
          | 'ACTION_FLOW_ORIGINATION'
          | 'UNKNOWN_ORIGINATION'
          | undefined
        status?: string | undefined
        subject?: string | undefined
        ticket_id?: bigint | undefined
      }
    | undefined
  approval_requests?: (ApprovalRequestObject[] | null) | undefined
}
type ApprovalRequestShowResponse = {
  approval_request?:
    | {
        approval_workflow_instance_id?: (string | null) | undefined
        assignee_group?: ({ id?: bigint | undefined; name?: string | undefined } | null) | undefined
        assignee_user?:
          | ({
              id?: bigint | undefined
              name?: string | undefined
              photo?: ({ content_url?: string | undefined } | null) | undefined
            } | null)
          | undefined
        clarification_flow_messages?:
          | {
              author?:
                | {
                    avatar?: string | undefined
                    id?: (bigint | null) | undefined
                    name?: (string | null) | undefined
                    role?: (string | null) | undefined
                  }
                | undefined
              created_at?: string | undefined
              id?: string | undefined
              message?: string | undefined
            }[]
          | undefined
        created_at?: string | undefined
        created_by_user?:
          | {
              id?: bigint | undefined
              name?: string | undefined
              photo?: ({ content_url?: string | undefined } | null) | undefined
            }
          | undefined
        decided_at?: (string | null) | undefined
        decisions?:
          | {
              decided_at?: string | undefined
              decided_by_user?:
                | ({
                    id?: bigint | undefined
                    name?: string | undefined
                    photo?: ({ content_url?: string | undefined } | null) | undefined
                  } | null)
                | undefined
              decision_notes?: (string | null) | undefined
              origination_type?:
                | 'UI_ORIGINATION'
                | 'API_ORIGINATION'
                | 'SLACK_ORIGINATION'
                | 'ACTION_FLOW_ORIGINATION'
                | 'UNKNOWN_ORIGINATION'
                | undefined
              status?: string | undefined
            }[]
          | undefined
        id?: string | undefined
        message?: string | undefined
        origination_type?:
          | 'API_ORIGINATION'
          | 'UI_ORIGINATION'
          | 'TRIGGER_ORIGINATION'
          | 'DATA_IMPORTER_ORIGINATION'
          | 'TEMPLATE_ORIGINATION'
          | 'ACTION_FLOW_ORIGINATION'
          | 'UNKNOWN_ORIGINATION'
          | undefined
        status?: string | undefined
        subject?: string | undefined
        ticket_details?:
          | {
              custom_fields?: { [x: string]: unknown }[] | undefined
              id?: bigint | undefined
              priority?: (string | null) | undefined
              requester?: { id?: bigint | undefined; name?: string | undefined } | undefined
              status?: string | undefined
            }
          | undefined
        withdrawn_reason?: (string | null) | undefined
      }
    | undefined
}
type ApprovalWorkflowInstanceWithdrawResponse = {
  approval_requests?:
    | {
        approval_workflow_instance_id?: (string | null) | undefined
        assignee_group?: ({ id?: bigint | undefined; name?: string | undefined } | null) | undefined
        assignee_user?: ({ id?: bigint | undefined; name?: string | undefined } | null) | undefined
        created_at?: string | undefined
        created_by_user?:
          | {
              id?: bigint | undefined
              name?: string | undefined
              photo?: ({ content_url?: string | undefined } | null) | undefined
            }
          | undefined
        decided_at?: (string | null) | undefined
        decisions?:
          | {
              decided_at?: string | undefined
              decided_by_user?:
                | ({
                    id?: bigint | undefined
                    name?: string | undefined
                    photo?: ({ content_url?: string | undefined } | null) | undefined
                  } | null)
                | undefined
              decision_notes?: (string | null) | undefined
              origination_type?:
                | 'UI_ORIGINATION'
                | 'API_ORIGINATION'
                | 'SLACK_ORIGINATION'
                | 'ACTION_FLOW_ORIGINATION'
                | 'UNKNOWN_ORIGINATION'
                | undefined
              status?: string | undefined
            }[]
          | undefined
        id?: string | undefined
        message?: string | undefined
        origination_type?:
          | 'API_ORIGINATION'
          | 'UI_ORIGINATION'
          | 'TRIGGER_ORIGINATION'
          | 'DATA_IMPORTER_ORIGINATION'
          | 'TEMPLATE_ORIGINATION'
          | 'ACTION_FLOW_ORIGINATION'
          | 'UNKNOWN_ORIGINATION'
          | undefined
        status?: string | undefined
        subject?: string | undefined
        ticket_id?: bigint | undefined
        withdrawn_reason?: (string | null) | undefined
      }[]
    | undefined
}
type AttachmentBaseObject = {
  content_type?: string | undefined
  content_url?: string | undefined
  deleted?: boolean | undefined
  file_name?: string | undefined
  height?: (number | null) | undefined
  id?: bigint | undefined
  inline?: boolean | undefined
  malware_access_override?: boolean | undefined
  malware_scan_result?: string | undefined
  mapped_content_url?: string | undefined
  size?: number | undefined
  url?: string | undefined
  width?: (number | null) | undefined
}
type AttachmentObject = {
  content_type?: string | undefined
  content_url?: string | undefined
  deleted?: boolean | undefined
  file_name?: string | undefined
  height?: (number | null) | undefined
  id?: bigint | undefined
  inline?: boolean | undefined
  malware_access_override?: boolean | undefined
  malware_scan_result?: string | undefined
  mapped_content_url?: string | undefined
  size?: number | undefined
  url?: string | undefined
  width?: (number | null) | undefined
  thumbnails?: AttachmentBaseObject[] | undefined
}
type AttachmentResponse = { attachment?: AttachmentObject | undefined }
type AttachmentUpdateInput = { malware_access_override?: boolean | undefined }
type AttachmentUpdateRequest = { attachment?: AttachmentUpdateInput | undefined }
type AuditLogObject = {
  action?: string | undefined
  action_label?: string | undefined
  actor_id?: bigint | undefined
  actor_name?: string | undefined
  change_description?: string | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  ip_address?: string | undefined
  source_id?: bigint | undefined
  source_label?: string | undefined
  source_type?: string | undefined
  url?: string | undefined
}
type AuditLogsResponse = { audit_logs?: AuditLogObject[] | undefined }
type AuditLogResponse = { audit_log?: AuditLogObject | undefined }
type TagsByObjectIdResponse = { tags: string[] }
type ActionObject = {
  field?: string | undefined
  value?: string | bigint | boolean | string[] | undefined
}
type ConditionObject = {
  field?: string | undefined
  operator?: string | undefined
  value?: string | undefined
}
type ConditionsObject = { all?: ConditionObject[] | undefined; any?: ConditionObject[] | undefined }
type AutomationObject = {
  actions?: ActionObject[] | undefined
  active?: boolean | undefined
  conditions?: ConditionsObject | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type AutomationsResponse = {
  automations?: AutomationObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type AutomationActionInput = {
  field?: string | undefined
  value?: string | number | (string | number)[] | undefined
}
type AutomationInput = {
  actions?: (AutomationActionInput[] | null) | undefined
  active?: (boolean | null) | undefined
  all?: (ConditionObject[] | null) | undefined
  any?: (ConditionObject[] | null) | undefined
  conditions?: ConditionsObject | ({ [x: string]: unknown } | null) | undefined
  position?: (number | null) | undefined
  restriction?: ({ id?: bigint | undefined; type?: string | undefined } | null) | undefined
  title: string
}
type AutomationRequest = { automation: AutomationInput }
type AutomationResponse = { automation?: AutomationObject | undefined }
type AutomationUpdateInput = {
  actions?: (AutomationActionInput[] | null) | undefined
  active?: (boolean | null) | undefined
  all?: (ConditionObject[] | null) | undefined
  any?: (ConditionObject[] | null) | undefined
  conditions?: ConditionsObject | ({ [x: string]: unknown } | null) | undefined
  position?: number | undefined
  restriction?: ({ id?: bigint | undefined; type?: string | undefined } | null) | undefined
  title?: string | undefined
}
type AutomationUpdateRequest = { automation: AutomationUpdateInput }
type AutomationBulkUpdateItem = {
  active?: (boolean | null) | undefined
  id: bigint
  position?: (number | null) | undefined
}
type AutomationsUpdateManyRequest = { automations: AutomationBulkUpdateItem[] }
type CollaboratorObject = bigint | string | { email: string; name?: string | undefined }
type TicketAuditViaObject = {
  channel?: string | undefined
  source?: { [x: string]: unknown } | undefined
}
type TicketCommentObject = {
  add_short_url?: boolean | undefined
  attachments?: AttachmentObject[] | undefined
  audit_id?: bigint | undefined
  author_id?: (bigint | null) | undefined
  body?: string | undefined
  channel_back?: string | undefined
  channel_source_id?: (string | null) | undefined
  created_at?: string | undefined
  html_body?: string | undefined
  id?: bigint | undefined
  metadata?: { [x: string]: unknown } | undefined
  plain_body?: string | undefined
  public?: boolean | undefined
  translate_to?: (string | null) | undefined
  type?: string | undefined
  uploads?: string[] | undefined
  via?: TicketAuditViaObject | undefined
}
type TicketFieldValueInput = {
  id: bigint | string
  value?: string | number | boolean | string[] | ({ [x: string]: unknown } | null) | undefined
}
type EmailCCObject = {
  action?: 'put' | 'delete' | undefined
  user_email?: string | undefined
  user_id?: bigint | string | undefined
  user_name?: string | undefined
}
type FollowerObject = {
  action?: 'put' | 'delete' | undefined
  user_email?: string | undefined
  user_id?: bigint | string | undefined
  user_name?: (string | null) | undefined
}
type SharingAgreementInput = {
  custom_fields?: TicketFieldValueInput[] | undefined
  id?: bigint | undefined
}
type ViaObject = {
  channel?: string | number | undefined
  source?:
    | {
        from?:
          | {
              address?: (string | null) | undefined
              id?: (bigint | null) | undefined
              name?: (string | null) | undefined
              title?: (string | null) | undefined
            }
          | undefined
        rel?: (string | null) | undefined
        to?: { address?: string | undefined; name?: string | undefined } | undefined
      }
    | undefined
}
type BookmarkObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  ticket?:
    | {
        additional_collaborators?: CollaboratorObject[] | undefined
        allow_attachments?: boolean | undefined
        allow_channelback?: boolean | undefined
        assignee_email?: string | undefined
        assignee_id?: (bigint | null) | undefined
        attribute_value_ids?: bigint[] | undefined
        brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
        collaborator_ids?: bigint[] | undefined
        collaborators?: CollaboratorObject[] | undefined
        comment?: TicketCommentObject | undefined
        created_at?: string | undefined
        custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        custom_status_id?: (bigint | null) | undefined
        description?: string | undefined
        due_at?: (string | null) | undefined
        email_cc_ids?: bigint[] | undefined
        email_ccs?: (EmailCCObject[] | null) | undefined
        encoded_id?: string | undefined
        external_id?: (string | null) | undefined
        fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        follower_ids?: bigint[] | undefined
        followers?: FollowerObject[] | undefined
        followup_ids?: bigint[] | undefined
        forum_topic_id?: bigint | undefined
        from_messaging_channel?: boolean | undefined
        generated_timestamp?: number | undefined
        group_id?: (bigint | null) | undefined
        has_incidents?: boolean | undefined
        id?: bigint | undefined
        is_public?: boolean | undefined
        macro_id?: bigint | undefined
        macro_ids?: (bigint | string)[] | undefined
        metadata?: { [x: string]: unknown } | undefined
        organization_id?: (bigint | null) | undefined
        origin_zrn?: string | undefined
        priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
        problem_id?: (bigint | null) | undefined
        raw_subject?: string | undefined
        recipient?:
          | string
          | string[]
          | { email?: string | undefined; name?: string | undefined }
          | undefined
        requester?:
          | string
          | number
          | {
              email?: string | undefined
              locale?: string | undefined
              locale_id?: bigint | undefined
              name?: string | undefined
              organization_id?: bigint | undefined
              role?: string | undefined
              verified?: boolean | undefined
            }
          | undefined
        requester_id?: (bigint | null) | undefined
        safe_update?: boolean | undefined
        satisfaction_probability?: number | undefined
        satisfaction_rating?: { [x: string]: unknown } | undefined
        sharing_agreement_ids?: bigint[] | undefined
        sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
        status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
        subject?: (string | null) | undefined
        submitter_id?: (bigint | null) | undefined
        support_type?: 'agent' | 'ai_agent' | undefined
        suspended_ticket_id?: bigint | undefined
        suspension_type_id?: bigint | undefined
        system_metadata?:
          | { client?: string | undefined; ip_address?: string | undefined }
          | undefined
        tags?: string[] | string | undefined
        tde_workspace?:
          | {
              previous_workspace?:
                | { id?: bigint | undefined; title?: string | undefined }
                | undefined
              type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
              workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
            }
          | undefined
        ticket_form_id?: (bigint | null) | undefined
        tpe_voice_comment?:
          | {
              agent_id?: (bigint | null) | undefined
              answering_machine_detection_status?: (string | null) | undefined
              app_id?: bigint | undefined
              app_name?: (string | null) | undefined
              author_id?: bigint | undefined
              call_connected_at?: (string | null) | undefined
              call_disposition?: (string | null) | undefined
              call_ended_at?: (string | null) | undefined
              call_id?: bigint | undefined
              call_recording_consent?: (string | null) | undefined
              call_recording_consent_action?: (string | null) | undefined
              call_recording_consent_keypress?: (string | null) | undefined
              call_started_at?: string | undefined
              call_type?: (string | null) | undefined
              callback_number?: (string | null) | undefined
              callback_requested_at?: (string | null) | undefined
              completion_status?: (string | null) | undefined
              connection_attempts?: (number | null) | undefined
              consultation_time?: (number | null) | undefined
              direction?: string | undefined
              disconnection_reason?: (string | null) | undefined
              dnis?: (string | null) | undefined
              duration?: (number | null) | undefined
              end_user_id?: (bigint | null) | undefined
              end_user_location?: (string | null) | undefined
              exceeded_queue_time?: (boolean | null) | undefined
              extension?: (string | null) | undefined
              external_id?: string | undefined
              from_line?: string | undefined
              from_line_nickname?: (string | null) | undefined
              hold_time?: (number | null) | undefined
              intent?: (string | null) | undefined
              ivr_destination_group_name?: (string | null) | undefined
              ivr_time_spent?: (number | null) | undefined
              language?: (string | null) | undefined
              line_type?: string | undefined
              longest_hold_time?: (number | null) | undefined
              number_of_holds?: (number | null) | undefined
              outside_business_hours?: (boolean | null) | undefined
              overflowed_to?: (string | null) | undefined
              phone_name?: (string | null) | undefined
              public?: boolean | undefined
              quality_score?: (number | null) | undefined
              queue_name?: (string | null) | undefined
              queue_time?: (number | null) | undefined
              recorded?: boolean | undefined
              recording_time?: (number | null) | undefined
              recording_type?: string | undefined
              recording_url?: (string | null) | undefined
              sentiment_agent?: (string | null) | undefined
              sentiment_call?: (string | null) | undefined
              sentiment_customer?: (string | null) | undefined
              sentiment_trend?: (string | null) | undefined
              short_summary?: (string | null) | undefined
              summary?: (string | null) | undefined
              talk_time?: (number | null) | undefined
              time_to_answer?: (number | null) | undefined
              title?: string | undefined
              to_line?: string | undefined
              to_line_nickname?: (string | null) | undefined
              transcript?: (string | null) | undefined
              via_id?: bigint | undefined
              video_recording_url?: (string | null) | undefined
              voicemail?: (boolean | null) | undefined
              voicemail_requested_at?: (string | null) | undefined
              wait_time?: (number | null) | undefined
            }
          | undefined
        type?: 'problem' | 'incident' | 'question' | 'task' | undefined
        updated_at?: string | undefined
        updated_stamp?: string | undefined
        url?: string | undefined
        via?: ViaObject | undefined
        via_followup_source_id?: bigint | undefined
        via_id?: bigint | undefined
        voice_comment?:
          | {
              answered_by_id?: (bigint | null) | undefined
              call_duration?: number | undefined
              from?: string | undefined
              location?: (string | null) | undefined
              recording_url?: (string | null) | undefined
              to?: string | undefined
              transcription_text?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  url?: string | undefined
}
type BookmarksResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  bookmarks?: BookmarkObject[] | undefined
}
type BookmarkInput = { ticket_id?: bigint | undefined }
type BookmarkCreateRequest = { bookmark?: BookmarkInput | undefined }
type BookmarkResponse = { bookmark?: BookmarkObject | undefined }
type BrandAgentObject = {
  brand_id: bigint
  created_at?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id: bigint
}
type BrandAgentsResponse = { brand_agents?: BrandAgentObject[] | undefined }
type BrandAgentCreateRequest = { brand_agent: { brand_id: bigint; user_id: bigint } }
type BrandAgentResponse = { brand_agent?: BrandAgentObject | undefined }
type BrandObject = {
  active?: boolean | undefined
  brand_url?: string | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  has_help_center?: boolean | undefined
  help_center_state?: 'enabled' | 'disabled' | 'restricted' | undefined
  host_mapping?: string | undefined
  id?: bigint | undefined
  is_deleted?: boolean | undefined
  logo?: AttachmentObject | undefined
  name: string
  signature_template?: string | undefined
  subdomain: string
  ticket_form_ids?: bigint[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_separation?: 'account' | 'brand' | undefined
}
type BrandPermissionsObject = { brand_id: bigint; can_delete: boolean; can_update: boolean }
type BrandsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  brands?: BrandObject[] | undefined
  permissions?: BrandPermissionsObject[] | undefined
}
type BrandCreateRequest = { brand?: BrandObject | undefined }
type BrandResponse = {
  brand?: BrandObject | undefined
  permissions?: BrandPermissionsObject[] | undefined
}
type BrandUpdateRequest = { brand?: BrandObject | undefined }
type HostMappingObject = {
  cname?: string | undefined
  expected_cnames?: string[] | undefined
  is_valid?: boolean | undefined
  reason?: string | undefined
}
type BrandUserMigrationDirection = {
  from: { scope: 'account' | 'brand' }
  to: { scope: 'account' | 'brand' }
}
type BrandUserMigration = {
  account_id?: number | undefined
  active?: boolean | undefined
  brand_id?: number | undefined
  completed_at?: (string | null) | undefined
  direction?: BrandUserMigrationDirection | undefined
  id?: string | undefined
  jobs?: { id?: string | undefined; type?: string | undefined }[] | undefined
  mode?: 'manual' | 'auto' | undefined
  status?: 'in_progress' | 'reconciling' | 'aborted' | 'completed' | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type BrandUserMigrationsResponse = { user_migrations?: BrandUserMigration[] | undefined }
type BrandUserMigrationCreateRequest = {
  user_migration: { direction: BrandUserMigrationDirection; mode: 'manual' | 'auto' }
}
type BrandUserMigrationResponse = { user_migration?: BrandUserMigration | undefined }
type TwitterChannelObject = {
  allow_reply?: boolean | undefined
  avatar_url?: string | undefined
  brand_id?: bigint | undefined
  can_reply?: boolean | undefined
  created_at?: string | undefined
  id: bigint
  name?: string | undefined
  screen_name: string
  twitter_user_id: bigint
  updated_at?: string | undefined
}
type TwitterChannelsResponse = { monitored_twitter_handles?: TwitterChannelObject[] | undefined }
type TwitterChannelResponse = { monitored_twitter_handle?: TwitterChannelObject | undefined }
type TwitterChannelTwicketStatusResponse = {
  statuses?:
    | {
        favorited?: boolean | undefined
        id?: bigint | undefined
        retweeted?: boolean | undefined
        user_followed?: boolean | undefined
      }[]
    | undefined
}
type TicketCreateVoicemailTicketVoiceCommentInput = {
  answered_by_id?: bigint | undefined
  call_duration?: number | undefined
  from?: string | undefined
  location?: string | undefined
  public?: boolean | undefined
  recording_type?: 'call' | 'voicemail' | 'ai' | undefined
  recording_url?: string | undefined
  started_at?: string | undefined
  to?: string | undefined
  transcription_text?: string | undefined
}
type TicketCreateVoicemailTicketRequest = {
  display_to_agent?: number | undefined
  ticket?:
    | {
        additional_collaborators?: CollaboratorObject[] | undefined
        allow_attachments?: boolean | undefined
        allow_channelback?: boolean | undefined
        assignee_email?: string | undefined
        assignee_id?: (bigint | null) | undefined
        attribute_value_ids?: bigint[] | undefined
        brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
        collaborator_ids?: bigint[] | undefined
        collaborators?: CollaboratorObject[] | undefined
        comment?: TicketCommentObject | undefined
        created_at?: string | undefined
        custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        custom_status_id?: (bigint | null) | undefined
        description?: string | undefined
        due_at?: (string | null) | undefined
        email_cc_ids?: bigint[] | undefined
        email_ccs?: (EmailCCObject[] | null) | undefined
        encoded_id?: string | undefined
        external_id?: (string | null) | undefined
        fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        follower_ids?: bigint[] | undefined
        followers?: FollowerObject[] | undefined
        followup_ids?: bigint[] | undefined
        forum_topic_id?: bigint | undefined
        from_messaging_channel?: boolean | undefined
        generated_timestamp?: number | undefined
        group_id?: (bigint | null) | undefined
        has_incidents?: boolean | undefined
        id?: bigint | undefined
        is_public?: boolean | undefined
        macro_id?: bigint | undefined
        macro_ids?: (bigint | string)[] | undefined
        metadata?: { [x: string]: unknown } | undefined
        organization_id?: (bigint | null) | undefined
        origin_zrn?: string | undefined
        priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
        problem_id?: (bigint | null) | undefined
        raw_subject?: string | undefined
        recipient?:
          | string
          | string[]
          | { email?: string | undefined; name?: string | undefined }
          | undefined
        requester?:
          | string
          | number
          | {
              email?: string | undefined
              locale?: string | undefined
              locale_id?: bigint | undefined
              name?: string | undefined
              organization_id?: bigint | undefined
              role?: string | undefined
              verified?: boolean | undefined
            }
          | undefined
        requester_id?: (bigint | null) | undefined
        safe_update?: boolean | undefined
        satisfaction_probability?: number | undefined
        satisfaction_rating?: { [x: string]: unknown } | undefined
        sharing_agreement_ids?: bigint[] | undefined
        sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
        status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
        subject?: (string | null) | undefined
        submitter_id?: (bigint | null) | undefined
        support_type?: 'agent' | 'ai_agent' | undefined
        suspended_ticket_id?: bigint | undefined
        suspension_type_id?: bigint | undefined
        system_metadata?:
          | { client?: string | undefined; ip_address?: string | undefined }
          | undefined
        tags?: string[] | string | undefined
        tde_workspace?:
          | {
              previous_workspace?:
                | { id?: bigint | undefined; title?: string | undefined }
                | undefined
              type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
              workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
            }
          | undefined
        ticket_form_id?: (bigint | null) | undefined
        tpe_voice_comment?:
          | {
              agent_id?: (bigint | null) | undefined
              answering_machine_detection_status?: (string | null) | undefined
              app_id?: bigint | undefined
              app_name?: (string | null) | undefined
              author_id?: bigint | undefined
              call_connected_at?: (string | null) | undefined
              call_disposition?: (string | null) | undefined
              call_ended_at?: (string | null) | undefined
              call_id?: bigint | undefined
              call_recording_consent?: (string | null) | undefined
              call_recording_consent_action?: (string | null) | undefined
              call_recording_consent_keypress?: (string | null) | undefined
              call_started_at?: string | undefined
              call_type?: (string | null) | undefined
              callback_number?: (string | null) | undefined
              callback_requested_at?: (string | null) | undefined
              completion_status?: (string | null) | undefined
              connection_attempts?: (number | null) | undefined
              consultation_time?: (number | null) | undefined
              direction?: string | undefined
              disconnection_reason?: (string | null) | undefined
              dnis?: (string | null) | undefined
              duration?: (number | null) | undefined
              end_user_id?: (bigint | null) | undefined
              end_user_location?: (string | null) | undefined
              exceeded_queue_time?: (boolean | null) | undefined
              extension?: (string | null) | undefined
              external_id?: string | undefined
              from_line?: string | undefined
              from_line_nickname?: (string | null) | undefined
              hold_time?: (number | null) | undefined
              intent?: (string | null) | undefined
              ivr_destination_group_name?: (string | null) | undefined
              ivr_time_spent?: (number | null) | undefined
              language?: (string | null) | undefined
              line_type?: string | undefined
              longest_hold_time?: (number | null) | undefined
              number_of_holds?: (number | null) | undefined
              outside_business_hours?: (boolean | null) | undefined
              overflowed_to?: (string | null) | undefined
              phone_name?: (string | null) | undefined
              public?: boolean | undefined
              quality_score?: (number | null) | undefined
              queue_name?: (string | null) | undefined
              queue_time?: (number | null) | undefined
              recorded?: boolean | undefined
              recording_time?: (number | null) | undefined
              recording_type?: string | undefined
              recording_url?: (string | null) | undefined
              sentiment_agent?: (string | null) | undefined
              sentiment_call?: (string | null) | undefined
              sentiment_customer?: (string | null) | undefined
              sentiment_trend?: (string | null) | undefined
              short_summary?: (string | null) | undefined
              summary?: (string | null) | undefined
              talk_time?: (number | null) | undefined
              time_to_answer?: (number | null) | undefined
              title?: string | undefined
              to_line?: string | undefined
              to_line_nickname?: (string | null) | undefined
              transcript?: (string | null) | undefined
              via_id?: bigint | undefined
              video_recording_url?: (string | null) | undefined
              voicemail?: (boolean | null) | undefined
              voicemail_requested_at?: (string | null) | undefined
              wait_time?: (number | null) | undefined
            }
          | undefined
        type?: 'problem' | 'incident' | 'question' | 'task' | undefined
        updated_at?: string | undefined
        updated_stamp?: string | undefined
        url?: string | undefined
        via?: ViaObject | undefined
        via_followup_source_id?: bigint | undefined
        via_id?: 44n | 45n | 46n | undefined
        voice_comment?: TicketCreateVoicemailTicketVoiceCommentInput | undefined
        additional_tags?: string[] | undefined
        remove_tags?: string[] | undefined
      }
    | undefined
}
type TicketObject = {
  additional_collaborators?: CollaboratorObject[] | undefined
  allow_attachments?: boolean | undefined
  allow_channelback?: boolean | undefined
  assignee_email?: string | undefined
  assignee_id?: (bigint | null) | undefined
  attribute_value_ids?: bigint[] | undefined
  brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
  collaborator_ids?: bigint[] | undefined
  collaborators?: CollaboratorObject[] | undefined
  comment?: TicketCommentObject | undefined
  created_at?: string | undefined
  custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
  custom_status_id?: (bigint | null) | undefined
  description?: string | undefined
  due_at?: (string | null) | undefined
  email_cc_ids?: bigint[] | undefined
  email_ccs?: (EmailCCObject[] | null) | undefined
  encoded_id?: string | undefined
  external_id?: (string | null) | undefined
  fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
  follower_ids?: bigint[] | undefined
  followers?: FollowerObject[] | undefined
  followup_ids?: bigint[] | undefined
  forum_topic_id?: bigint | undefined
  from_messaging_channel?: boolean | undefined
  generated_timestamp?: number | undefined
  group_id?: (bigint | null) | undefined
  has_incidents?: boolean | undefined
  id?: bigint | undefined
  is_public?: boolean | undefined
  macro_id?: bigint | undefined
  macro_ids?: (bigint | string)[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  organization_id?: (bigint | null) | undefined
  origin_zrn?: string | undefined
  priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
  problem_id?: (bigint | null) | undefined
  raw_subject?: string | undefined
  recipient?:
    | string
    | string[]
    | { email?: string | undefined; name?: string | undefined }
    | undefined
  requester?:
    | string
    | number
    | {
        email?: string | undefined
        locale?: string | undefined
        locale_id?: bigint | undefined
        name?: string | undefined
        organization_id?: bigint | undefined
        role?: string | undefined
        verified?: boolean | undefined
      }
    | undefined
  requester_id?: (bigint | null) | undefined
  safe_update?: boolean | undefined
  satisfaction_probability?: number | undefined
  satisfaction_rating?: { [x: string]: unknown } | undefined
  sharing_agreement_ids?: bigint[] | undefined
  sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
  status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
  subject?: (string | null) | undefined
  submitter_id?: (bigint | null) | undefined
  support_type?: 'agent' | 'ai_agent' | undefined
  suspended_ticket_id?: bigint | undefined
  suspension_type_id?: bigint | undefined
  system_metadata?: { client?: string | undefined; ip_address?: string | undefined } | undefined
  tags?: string[] | string | undefined
  tde_workspace?:
    | {
        previous_workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
        type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
        workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
      }
    | undefined
  ticket_form_id?: (bigint | null) | undefined
  tpe_voice_comment?:
    | {
        agent_id?: (bigint | null) | undefined
        answering_machine_detection_status?: (string | null) | undefined
        app_id?: bigint | undefined
        app_name?: (string | null) | undefined
        author_id?: bigint | undefined
        call_connected_at?: (string | null) | undefined
        call_disposition?: (string | null) | undefined
        call_ended_at?: (string | null) | undefined
        call_id?: bigint | undefined
        call_recording_consent?: (string | null) | undefined
        call_recording_consent_action?: (string | null) | undefined
        call_recording_consent_keypress?: (string | null) | undefined
        call_started_at?: string | undefined
        call_type?: (string | null) | undefined
        callback_number?: (string | null) | undefined
        callback_requested_at?: (string | null) | undefined
        completion_status?: (string | null) | undefined
        connection_attempts?: (number | null) | undefined
        consultation_time?: (number | null) | undefined
        direction?: string | undefined
        disconnection_reason?: (string | null) | undefined
        dnis?: (string | null) | undefined
        duration?: (number | null) | undefined
        end_user_id?: (bigint | null) | undefined
        end_user_location?: (string | null) | undefined
        exceeded_queue_time?: (boolean | null) | undefined
        extension?: (string | null) | undefined
        external_id?: string | undefined
        from_line?: string | undefined
        from_line_nickname?: (string | null) | undefined
        hold_time?: (number | null) | undefined
        intent?: (string | null) | undefined
        ivr_destination_group_name?: (string | null) | undefined
        ivr_time_spent?: (number | null) | undefined
        language?: (string | null) | undefined
        line_type?: string | undefined
        longest_hold_time?: (number | null) | undefined
        number_of_holds?: (number | null) | undefined
        outside_business_hours?: (boolean | null) | undefined
        overflowed_to?: (string | null) | undefined
        phone_name?: (string | null) | undefined
        public?: boolean | undefined
        quality_score?: (number | null) | undefined
        queue_name?: (string | null) | undefined
        queue_time?: (number | null) | undefined
        recorded?: boolean | undefined
        recording_time?: (number | null) | undefined
        recording_type?: string | undefined
        recording_url?: (string | null) | undefined
        sentiment_agent?: (string | null) | undefined
        sentiment_call?: (string | null) | undefined
        sentiment_customer?: (string | null) | undefined
        sentiment_trend?: (string | null) | undefined
        short_summary?: (string | null) | undefined
        summary?: (string | null) | undefined
        talk_time?: (number | null) | undefined
        time_to_answer?: (number | null) | undefined
        title?: string | undefined
        to_line?: string | undefined
        to_line_nickname?: (string | null) | undefined
        transcript?: (string | null) | undefined
        via_id?: bigint | undefined
        video_recording_url?: (string | null) | undefined
        voicemail?: (boolean | null) | undefined
        voicemail_requested_at?: (string | null) | undefined
        wait_time?: (number | null) | undefined
      }
    | undefined
  type?: 'problem' | 'incident' | 'question' | 'task' | undefined
  updated_at?: string | undefined
  updated_stamp?: string | undefined
  url?: string | undefined
  via?: ViaObject | undefined
  via_followup_source_id?: bigint | undefined
  via_id?: bigint | undefined
  voice_comment?:
    | {
        answered_by_id?: (bigint | null) | undefined
        call_duration?: number | undefined
        from?: string | undefined
        location?: (string | null) | undefined
        recording_url?: (string | null) | undefined
        to?: string | undefined
        transcription_text?: (string | null) | undefined
      }
    | undefined
}
type TicketResponse = { ticket?: TicketObject | undefined }
type WhatsappTemplateObject = {
  category?: (string | null) | undefined
  components?: ({ [x: string]: unknown }[] | null) | undefined
  created_at?: string | undefined
  id: string
  integrations: { id: string; name?: (string | null) | undefined }[]
  is_active: boolean
  language: string
  name: string
  status: 'approved'
  template_id: string
  updated_at?: string | undefined
}
type WhatsappTemplatesResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  syncing?: boolean | undefined
  whatsapp_templates?: WhatsappTemplateObject[] | undefined
}
type WhatsappTemplateLanguagesResponse = {
  integration_id?: (string | null) | undefined
  whatsapp_template_languages?: { code: string; label: string }[] | undefined
}
type TicketChatCommentRedactionResponse = {
  chat_event?:
    | {
        id?: bigint | undefined
        type?: string | undefined
        value?:
          | {
              chat_id?: string | undefined
              history?: { [x: string]: unknown }[] | undefined
              visitor_id?: string | undefined
            }
          | undefined
      }
    | undefined
}
type TicketRedactionConflictError = { description?: string | undefined; error?: string | undefined }
type TicketCommentResponse = { comment?: TicketCommentObject | undefined }
type CountryObject = {
  calling_code?: string | undefined
  code: string
  id: number
  name: string
  region?: string | undefined
}
type CustomObject = {
  allows_attachments?: boolean | undefined
  allows_photos?: boolean | undefined
  created_at?: string | undefined
  created_by_user_id?: string | undefined
  description?: string | undefined
  include_in_list_view: boolean
  key: string
  raw_description?: string | undefined
  raw_title?: string | undefined
  raw_title_pluralized?: string | undefined
  title: string
  title_pluralized: string
  updated_at?: string | undefined
  updated_by_user_id?: string | undefined
  url?: string | undefined
}
type CustomObjectsResponse = { custom_objects?: CustomObject[] | undefined }
type CustomObjectCreateInput = {
  allows_attachments?: boolean | undefined
  allows_photos?: boolean | undefined
  description?: string | undefined
  include_in_list_view?: boolean | undefined
  key?: string | undefined
  title?: string | undefined
  title_pluralized?: string | undefined
}
type CustomObjectsCreateRequest = { custom_object?: CustomObjectCreateInput | undefined }
type CustomObjectResponse = { custom_object?: CustomObject | undefined }
type CustomObjectUpdateInput = {
  allows_attachments?: boolean | undefined
  allows_photos?: boolean | undefined
  description?: string | undefined
  include_in_list_view?: boolean | undefined
  title?: string | undefined
  title_pluralized?: string | undefined
}
type CustomObjectsUpdateRequest = { custom_object?: CustomObjectUpdateInput | undefined }
type AccessRuleCondition = {
  field?: string | undefined
  operator?:
    | 'is'
    | 'is_not'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_equal'
    | 'less_than_equal'
    | 'includes'
    | 'not_includes'
    | 'matches'
    | 'present'
    | undefined
  value?: string | number | number | boolean | ({ [x: string]: unknown } | null) | undefined
}
type AccessRule = {
  conditions?:
    | { all?: AccessRuleCondition[] | undefined; any?: AccessRuleCondition[] | undefined }
    | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type AccessRulesResponse = { access_rules?: AccessRule[] | undefined }
type AccessRuleCreateRequest = {
  access_rule?:
    | {
        conditions?:
          | { all?: AccessRuleCondition[] | undefined; any?: AccessRuleCondition[] | undefined }
          | undefined
        description?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type AccessRuleResponse = { access_rule?: AccessRule | undefined }
type AccessRuleUpdateRequest = {
  access_rule?:
    | {
        conditions?:
          | { all?: AccessRuleCondition[] | undefined; any?: AccessRuleCondition[] | undefined }
          | undefined
        description?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type AccessRuleFieldDefinition = {
  group?: string | undefined
  metadata?:
    | {
        collection_key?: string | undefined
        field_id?: (bigint | null) | undefined
        item_key?: string | undefined
        source?: (string | null) | undefined
        url?: string | undefined
      }
    | undefined
  nullable?: boolean | undefined
  operators?:
    | {
        format?: string | undefined
        terminal?: boolean | undefined
        title?: string | undefined
        value?: string | undefined
      }[]
    | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | {
        dynamic?: boolean | undefined
        enabled?: boolean | undefined
        title?: string | undefined
        value?: string | undefined
      }[]
    | undefined
}
type AccessRuleDefinitionsResponse = {
  definitions?:
    | {
        conditions_all?: AccessRuleFieldDefinition[] | undefined
        conditions_any?: AccessRuleFieldDefinition[] | undefined
      }
    | undefined
}
type CustomFieldOptionObject = {
  allow_solving?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name: string
  position?: number | undefined
  raw_name?: string | undefined
  url?: string | undefined
  value: string
}
type CustomObjectFieldPropertiesObject = {
  allowed_currencies?: string[] | undefined
  autoincrement_enabled?: boolean | undefined
  autoincrement_next_sequence?: number | undefined
  autoincrement_padding?: number | undefined
  autoincrement_prefix?: string | undefined
  cascade_permissions_enabled?: boolean | undefined
  is_unique?: boolean | undefined
  rollup_aggregated_field?: (string | null) | undefined
  rollup_aggregated_field_title?: string | undefined
  rollup_aggregation_type?: 'COUNT' | 'SUM' | 'MIN' | 'MAX' | undefined
  rollup_child_object?: string | undefined
  rollup_filter_criteria?: ({ [x: string]: unknown } | null) | undefined
}
type CustomObjectField = {
  active?: boolean | undefined
  created_at?: string | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  description?: string | undefined
  id?: bigint | undefined
  key: string
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?: { [x: string]: unknown } | undefined
  system?: boolean | undefined
  tag?: string | undefined
  title: string
  type: string
  updated_at?: string | undefined
  url?: string | undefined
  properties?: CustomObjectFieldPropertiesObject | undefined
  readonly?: boolean | undefined
  relationship_target_type?: string | undefined
  required?: boolean | undefined
}
type CustomObjectFieldsResponse = { custom_object_fields?: CustomObjectField[] | undefined }
type CustomObjectFieldsCreateRequest = { custom_object_field?: CustomObjectField | undefined }
type CustomObjectFieldResponse = { custom_object_field?: CustomObjectField | undefined }
type CustomObjectFieldOptionInput = {
  id: bigint | (string | null)
  name?: string | undefined
  raw_name?: string | undefined
  value?: string | undefined
}
type CustomObjectFieldFilterConditionInput = {
  field?: string | undefined
  operator?: string | undefined
  value?: (string | null) | string[] | undefined
}
type CustomObjectFieldRelationshipFilterInput = {
  all?: CustomObjectFieldFilterConditionInput[] | undefined
  any?: CustomObjectFieldFilterConditionInput[] | undefined
}
type CustomObjectFieldUpdateInput = {
  active?: boolean | undefined
  custom_field_options?: (CustomObjectFieldOptionInput[] | null) | undefined
  description?: string | undefined
  position?: number | undefined
  properties?: CustomObjectFieldPropertiesObject | ({ [x: string]: unknown } | null) | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  regexp_for_validation?: string | undefined
  relationship_filter?:
    | CustomObjectFieldRelationshipFilterInput
    | ({ [x: string]: unknown } | null)
    | undefined
  required?: boolean | undefined
  tag?: string | undefined
  title?: string | undefined
}
type CustomObjectFieldsUpdateRequest = {
  custom_object_field?: CustomObjectFieldUpdateInput | undefined
}
type CustomObjectFieldsReorderRequest = { custom_object_field_ids: string[] }
type CustomObjectRecord = {
  created_at?: string | undefined
  created_by_user_id?: string | undefined
  custom_object_fields?: { [x: string]: unknown } | undefined
  custom_object_key?: string | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  name: string
  photo?: ({ [x: string]: unknown } | null) | undefined
  updated_at?: string | undefined
  updated_by_user_id?: string | undefined
  url?: string | undefined
}
type CustomObjectRecordsBulkCreateRequest = {
  job?:
    | {
        action?: string | undefined
        items?: (CustomObjectRecord | string)[] | undefined
        unique_field_key?: string | undefined
      }
    | undefined
}
type CustomObjectRecordsJobsResponse = {
  job_status?:
    | {
        id?: string | undefined
        message?: (string | null) | undefined
        progress?: (number | null) | undefined
        results?: (CustomObjectRecord[] | null) | undefined
        status?: string | undefined
        total?: number | undefined
        url?: string | undefined
      }
    | undefined
}
type CustomObjectLimitsResponse = { count?: number | undefined; limit?: number | undefined }
type PermissionAction = { allowed?: boolean | undefined; rule_id?: (bigint | null) | undefined }
type PermissionPolicy = {
  id?: string | undefined
  records?:
    | {
        create?: PermissionAction | undefined
        delete?: PermissionAction | undefined
        read?: PermissionAction | undefined
        update?: PermissionAction | undefined
      }
    | undefined
  role_name?: string | undefined
}
type PermissionPoliciesResponse = { policies?: PermissionPolicy[] | undefined }
type PermissionPolicyResponse = { policy?: PermissionPolicy | undefined }
type PermissionPolicyUpdateRequest = {
  policy?:
    | {
        records?:
          | {
              create?: PermissionAction | undefined
              delete?: PermissionAction | undefined
              read?: PermissionAction | undefined
              update?: PermissionAction | undefined
            }
          | undefined
      }
    | undefined
}
type CustomObjectRecordsResponse = {
  count?: number | undefined
  custom_object_records?: CustomObjectRecord[] | undefined
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
}
type CustomObjectRecordsCreateRequest = { custom_object_record?: CustomObjectRecord | undefined }
type CustomObjectRecordResponse = { custom_object_record?: CustomObjectRecord | undefined }
type CustomObjectRecordsUpsertRequest = { custom_object_record?: CustomObjectRecord | undefined }
type CustomObjectRecordUpdateInput = {
  custom_object_fields?: ({ [x: string]: unknown } | null) | undefined
  external_id?: (string | null) | undefined
  name?: (string | null) | undefined
  photo?: ({ uploaded_data?: string | undefined } | null) | undefined
}
type CustomObjectRecordsUpdateRequest = {
  custom_object_record?:
    | CustomObjectRecordUpdateInput
    | ({ [x: string]: unknown } | null)
    | undefined
}
type CustomObjectRecordAttachment = {
  content_type?: string | undefined
  content_url?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  custom_object_record_id?: string | undefined
  filename?: string | undefined
  id?: string | undefined
  malware_access_override?: boolean | undefined
  malware_scan_completed_at?: (string | null) | undefined
  malware_scan_status?:
    | 'malware_found'
    | 'malware_not_found'
    | 'failed_to_scan'
    | 'not_scanned'
    | undefined
  size?: number | undefined
}
type CustomObjectRecordAttachmentsResponse = {
  custom_object_record_attachments?: CustomObjectRecordAttachment[] | undefined
}
type CustomObjectRecordAttachmentResponse = {
  custom_object_record_attachment?: CustomObjectRecordAttachment | undefined
}
type CustomObjectRecordAttachmentUpdateRequest = {
  custom_object_record_attachment: { malware_access_override: boolean }
}
type CustomObjectRecordFilteredSearchCondition = {
  field_key?:
    | ({
        operator?: string | undefined
        value?: string | number | (string | number)[] | undefined
      } | null)
    | undefined
}
type CustomObjectRecordsFilteredSearchRequestBasic = {
  filter?: CustomObjectRecordFilteredSearchCondition | undefined
}
type CustomObjectRecordFilterExpressionLevel1 = {
  field_key?:
    | ({
        operator?: string | undefined
        value?: string | number | (string | number)[] | undefined
      } | null)
    | undefined
}
type CustomObjectRecordFilterExpressionLevel2 =
  | CustomObjectRecordFilterExpressionLevel1
  | { $and: CustomObjectRecordFilterExpressionLevel1[] }
  | { $or: CustomObjectRecordFilterExpressionLevel1[] }
type CustomObjectRecordFilterExpressionLevel3 =
  | CustomObjectRecordFilterExpressionLevel1
  | { $and: CustomObjectRecordFilterExpressionLevel2[] }
  | { $or: CustomObjectRecordFilterExpressionLevel2[] }
type CustomObjectRecordFilterExpressionLevel4 =
  | CustomObjectRecordFilterExpressionLevel1
  | { $and: CustomObjectRecordFilterExpressionLevel3[] }
  | { $or: CustomObjectRecordFilterExpressionLevel3[] }
type CustomObjectRecordFilterExpressionLevel5 =
  | CustomObjectRecordFilterExpressionLevel1
  | { $and: CustomObjectRecordFilterExpressionLevel4[] }
  | { $or: CustomObjectRecordFilterExpressionLevel4[] }
type CustomObjectRecordFilterExpression =
  | CustomObjectRecordFilterExpressionLevel1
  | { $and: CustomObjectRecordFilterExpressionLevel5[] }
  | { $or: CustomObjectRecordFilterExpressionLevel5[] }
type CustomObjectRecordsFilteredSearchRequestComplex = {
  filter?:
    | {
        $and?: CustomObjectRecordFilterExpression[] | undefined
        $or?: CustomObjectRecordFilterExpression[] | undefined
      }
    | undefined
}
type TriggerActionObject = {
  field?: string | undefined
  value?: string | number | (string | number)[] | undefined
}
type TriggerConditionObject = {
  field?: string | undefined
  operator?: string | undefined
  value?: string | number | (string | number)[] | undefined
}
type TriggerConditionsObject = {
  all?: (TriggerConditionObject[] | null) | undefined
  any?: (TriggerConditionObject[] | null) | undefined
}
type ObjectTriggerObject = {
  actions: TriggerActionObject[]
  active?: boolean | undefined
  conditions: TriggerConditionsObject
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  title: string
  updated_at?: string | undefined
  url?: string | undefined
}
type ObjectTriggersResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  triggers?: ObjectTriggerObject[] | undefined
}
type ObjectTriggerRequest = {
  trigger?:
    | {
        actions: TriggerActionObject[]
        active?: boolean | undefined
        conditions: TriggerConditionsObject
        created_at?: string | undefined
        default?: boolean | undefined
        description?: string | undefined
        id?: bigint | undefined
        position?: number | undefined
        raw_title?: string | undefined
        title: string
        updated_at?: string | undefined
        url?: string | undefined
      }
    | undefined
}
type ObjectTriggerResponse = { trigger?: ObjectTriggerObject | undefined }
type ObjectTriggerUpdateRequest = {
  trigger?:
    | {
        actions?: TriggerActionObject[] | undefined
        active?: boolean | undefined
        conditions?: TriggerConditionsObject | undefined
        created_at?: string | undefined
        default?: boolean | undefined
        description?: string | undefined
        id?: bigint | undefined
        position?: number | undefined
        raw_title?: string | undefined
        title?: string | undefined
        updated_at?: string | undefined
        url?: string | undefined
      }
    | undefined
}
type ObjectTriggerActionDefinitionObject = {
  group?: string | undefined
  nullable?: boolean | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | {
        enabled?: boolean | undefined
        format?: string | undefined
        title?: string | undefined
        value?: string | undefined
      }[]
    | undefined
}
type ObjectTriggerConditionDefinitionObjectAll = {
  group?: string | undefined
  nullable?: boolean | undefined
  operators?:
    | {
        format?: string | undefined
        terminal?: boolean | undefined
        title?: string | undefined
        value?: string | undefined
      }[]
    | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | { enabled?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
}
type ObjectTriggerConditionDefinitionObjectAny = {
  group?: string | undefined
  nullable?: boolean | undefined
  operators?:
    | {
        format?: string | undefined
        terminal?: boolean | undefined
        title?: string | undefined
        value?: string | undefined
      }[]
    | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | { enabled?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
}
type ObjectTriggerDefinitionObject = {
  actions?: ObjectTriggerActionDefinitionObject[] | undefined
  conditions_all?: ObjectTriggerConditionDefinitionObjectAll[] | undefined
  conditions_any?: ObjectTriggerConditionDefinitionObjectAny[] | undefined
}
type ObjectTriggerDefinitionResponse = { definitions?: ObjectTriggerDefinitionObject | undefined }
type ObjectTriggerBulkUpdateItem = {
  active?: boolean | undefined
  id: bigint
  position?: number | undefined
}
type ObjectTriggerBulkUpdateRequest = { triggers?: ObjectTriggerBulkUpdateItem[] | undefined }
type CustomRoleConfigurationObject = {
  actions_access?: string | undefined
  ai_agents?: { role?: string | undefined } | undefined
  analytics?:
    | {
        access?: string | undefined
        brands_ticket_access?: string | undefined
        export_analytics_data?: boolean | undefined
        groups_ticket_access?: string | undefined
        manage_custom_alerts?: boolean | undefined
        manage_custom_datasets?: boolean | undefined
        ticket_access_selected_brands?: string[] | undefined
        ticket_access_selected_groups?: string[] | undefined
        use_ai_dashboard_builder?: boolean | undefined
        use_ai_dataset_builder?: boolean | undefined
        use_analyst_copilot?: boolean | undefined
        use_conversational_assistant?: boolean | undefined
        use_deep_exploration?: boolean | undefined
        view_zra_anomaly_detection?: boolean | undefined
        view_zra_trending_topics?: boolean | undefined
      }
    | undefined
  assign_agent_statuses?: boolean | undefined
  assign_tickets_to_any_group?: boolean | undefined
  brands_ticket_access?: string | undefined
  capacity_rules_access?: string | undefined
  change_management_access?: string | undefined
  chat_access?: boolean | undefined
  delete_brands?: boolean | undefined
  end_user_list_access?: string | undefined
  end_user_profile_access?: string | undefined
  execute_it_asset_management_actions?: boolean | undefined
  explore_access?: string | undefined
  export_views?: boolean | undefined
  forum_access?: string | undefined
  forum_access_restricted_content?: boolean | undefined
  group_access?: boolean | undefined
  groups_ticket_access?: string | undefined
  it_asset_management_access?: boolean | undefined
  light_agent?: boolean | undefined
  macro_access?: string | undefined
  manage_api_credentials?: boolean | undefined
  manage_approval_requests?: boolean | undefined
  manage_brands?: string | undefined
  manage_business_rules?: boolean | undefined
  manage_change_management_configuration?: boolean | undefined
  manage_contextual_workspaces?: boolean | undefined
  manage_deletion_schedules?: string | undefined
  manage_dynamic_content?: boolean | undefined
  manage_end_user_settings?: boolean | undefined
  manage_extensions_and_channels?: boolean | undefined
  manage_facebook?: boolean | undefined
  manage_ip_bans?: boolean | undefined
  manage_it_asset_configuration?: boolean | undefined
  manage_macro_content_suggestions?: boolean | undefined
  manage_malicious_attachments?: boolean | undefined
  manage_organization_fields?: boolean | undefined
  manage_support_apps?: boolean | undefined
  manage_ticket_fields?: boolean | undefined
  manage_ticket_forms?: boolean | undefined
  manage_ticket_settings?: boolean | undefined
  manage_user_fields?: boolean | undefined
  manage_user_own_contacts?: boolean | undefined
  manage_user_own_forwarding_numbers?: boolean | undefined
  manage_user_own_photo?: boolean | undefined
  mask_end_user_email?: boolean | undefined
  mask_end_user_name?: boolean | undefined
  mask_end_user_phone?: boolean | undefined
  moderate_forums?: boolean | undefined
  modify_closed_tickets?: boolean | undefined
  organization_editing?: boolean | undefined
  organization_notes_editing?: boolean | undefined
  read_macro_content_suggestions?: boolean | undefined
  report_access?: string | undefined
  side_conversation_create?: boolean | undefined
  ticket_access?: string | undefined
  ticket_comment_access?: string | undefined
  ticket_deletion?: boolean | undefined
  ticket_editing?: boolean | undefined
  ticket_merge?: boolean | undefined
  ticket_tag_editing?: boolean | undefined
  twitter_search_access?: boolean | undefined
  update_user_own_alias?: boolean | undefined
  update_user_own_name?: boolean | undefined
  update_user_own_signature?: boolean | undefined
  use_conversational_assistance?: boolean | undefined
  user_view_access?: string | undefined
  view_access?: string | undefined
  view_access_logs?: boolean | undefined
  view_audit_logs?: boolean | undefined
  view_deleted_tickets?: boolean | undefined
  view_filter_tickets?: boolean | undefined
  view_reduced_count?: boolean | undefined
  voice_access?: boolean | undefined
  voice_dashboard_access?: boolean | undefined
}
type CustomRoleObject = {
  configuration?: CustomRoleConfigurationObject | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  name: string
  role_type: number
  team_member_count?: number | undefined
  updated_at?: string | undefined
}
type CustomRolesResponse = { custom_roles?: CustomRoleObject[] | undefined }
type CustomRoleResponse = { custom_role?: CustomRoleObject | undefined }
type BulkUpdateDefaultCustomStatusRequest = { ids?: string | undefined }
type BulkUpdateDefaultCustomStatusResponse = { [x: string]: unknown }
type CustomStatusObject = {
  active?: boolean | undefined
  agent_label: string
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  end_user_description?: string | undefined
  end_user_label?: string | undefined
  id?: bigint | undefined
  raw_agent_label?: string | undefined
  raw_description?: string | undefined
  raw_end_user_description?: string | undefined
  raw_end_user_label?: string | undefined
  status_category: 'new' | 'open' | 'pending' | 'hold' | 'solved'
  updated_at?: string | undefined
  url?: string | undefined
}
type CustomStatusesResponse = { custom_statuses?: CustomStatusObject[] | undefined }
type CustomStatusCreateInput = {
  active?: boolean | undefined
  agent_label?: string | undefined
  description?: string | undefined
  end_user_description?: string | undefined
  end_user_label?: string | undefined
  status_category: 'new' | 'open' | 'pending' | 'hold' | 'solved'
}
type CustomStatusCreateRequest = { custom_status: CustomStatusCreateInput }
type CustomStatusResponse = { custom_status?: CustomStatusObject | undefined }
type CustomStatusUpdateInput = {
  active?: boolean | undefined
  agent_label?: string | undefined
  description?: string | undefined
  end_user_description?: string | undefined
  end_user_label?: string | undefined
}
type CustomStatusUpdateRequest = { custom_status?: CustomStatusUpdateInput | undefined }
type TicketFormStatusObject = {
  custom_status_id?: bigint | undefined
  id?: string | undefined
  ticket_form_id?: bigint | undefined
}
type TicketFormStatusesResponse = { ticket_form_statuses?: TicketFormStatusObject[] | undefined }
type ListDeletedTicketsResponse = {
  deleted_tickets?:
    | {
        actor?: { id?: bigint | undefined; name?: string | undefined } | undefined
        deleted_at?: string | undefined
        description?: string | undefined
        id?: bigint | undefined
        previous_state?: string | undefined
        subject?: (string | null) | undefined
      }[]
    | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
}
type CreateResourceResult = { id: bigint; index: number }
type UpdateResourceResult = {
  action: string
  errors?: string | undefined
  id: bigint
  status: string
  success: boolean
  title?: string | undefined
}
type FailedResult = { action: string; details: string; error: string; id: bigint; success: boolean }
type JobStatusResultObject = CreateResourceResult | UpdateResourceResult | FailedResult
type JobStatusObject = {
  id?: string | undefined
  job_type?: string | undefined
  message?: (string | null) | undefined
  progress?: (number | null) | undefined
  results?: (JobStatusResultObject[] | null) | { success: boolean } | undefined
  status?: string | undefined
  total?: (number | null) | undefined
  url?: string | undefined
}
type JobStatusResponse = { job_status?: JobStatusObject | undefined }
type DeletedUserObject = {
  active: boolean
  created_at: string
  email: string | null
  id: bigint
  locale: string
  locale_id: bigint
  name: string
  organization_id: bigint | null
  phone: string | null
  photo: { [x: string]: unknown } | null
  role: string
  separation?:
    | ({ brand_id?: bigint | undefined; scope?: 'account' | 'brand' | undefined } | null)
    | undefined
  shared_phone_number: string | null
  time_zone: string
  updated_at: string
  url: string
}
type DeletedUsersResponse = { deleted_users?: DeletedUserObject[] | undefined }
type DeletedUserResponse = { deleted_user?: DeletedUserObject | undefined }
type CountResponse = {
  count?: { refreshed_at?: (string | null) | undefined; value?: number | undefined } | undefined
}
type DeletionSchedule = {
  active?: boolean | undefined
  conditions?: ConditionsObject | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  object?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type DynamicContentVariantObject = {
  active?: boolean | undefined
  content: string
  created_at?: string | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  locale_id: bigint
  outdated?: boolean | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type DynamicContentObject = {
  created_at?: string | undefined
  default_locale_id: bigint
  id?: bigint | undefined
  name: string
  outdated?: boolean | undefined
  placeholder?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  variants: DynamicContentVariantObject[]
}
type DynamicContentsResponse = { items?: DynamicContentObject[] | undefined }
type DynamicContentItemVariantInput = {
  content: string
  default?: (boolean | null) | undefined
  locale_id: bigint
}
type DynamicContentInput = {
  content?: string | undefined
  default_locale_id?: (bigint | null) | undefined
  name: string
  variants?: (DynamicContentItemVariantInput[] | null) | undefined
}
type DynamicContentRequest = { item: DynamicContentInput }
type DynamicContentResponse = { item?: DynamicContentObject | undefined }
type DynamicContentUpdateInput = { name?: string | undefined }
type DynamicContentUpdateRequest = { item: DynamicContentUpdateInput }
type DynamicContentVariantsResponse = { variants?: DynamicContentVariantObject[] | undefined }
type DynamicContentVariantInput = {
  active?: (boolean | null) | undefined
  content: string
  default?: (boolean | null) | undefined
  locale_id: bigint
}
type DynamicContentVariantRequest = { variant: DynamicContentVariantInput }
type DynamicContentVariantResponse = { variant?: DynamicContentVariantObject | undefined }
type DynamicContentVariantUpdateInput = {
  active?: (boolean | null) | undefined
  content?: string | undefined
  default?: (boolean | null) | undefined
}
type DynamicContentVariantUpdateRequest = {
  variant: DynamicContentVariantUpdateInput | ({ [x: string]: unknown } | null)
}
type DynamicContentVariantsCreateManyRequest = { variants: DynamicContentVariantInput[] }
type DynamicContentVariantBulkUpdateItem = {
  active?: (boolean | null) | undefined
  content?: string | undefined
  default?: (boolean | null) | undefined
  id: bigint
}
type DynamicContentVariantsUpdateManyRequest = { variants: DynamicContentVariantBulkUpdateItem[] }
type RecipientObject = {
  delivery_status?:
    | {
        code?: string | undefined
        id?: bigint | undefined
        message?: string | undefined
        name?: string | undefined
      }
    | undefined
  email_address?: string | undefined
  user_id?: bigint | undefined
}
type EmailNotificationObject = {
  comment_id?: bigint | undefined
  created_at?: string | undefined
  email_id?: string | undefined
  message_id?: string | undefined
  notification_id?: bigint | undefined
  recipients?: RecipientObject[] | undefined
  ticket_id?: bigint | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type EmailNotificationsResponse = { email_notifications?: EmailNotificationObject[] | undefined }
type EmailNotificationResponse = { email_notification?: EmailNotificationObject | undefined }
type UserIdentityObject = {
  brand_id?: bigint | undefined
  created_at?: string | undefined
  deliverable_state?: string | undefined
  id?: bigint | undefined
  ownership?: 'owned' | 'shared' | undefined
  primary?: boolean | undefined
  type:
    | 'email'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'phone_number'
    | 'agent_forwarding'
    | 'any_channel'
    | 'foreign'
    | 'sdk'
    | 'messaging'
  undeliverable_count?: number | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id: bigint
  value: string
  verification_method?: 'none' | 'low' | 'sso' | 'embed' | 'full' | undefined
  verified?: boolean | undefined
  verified_at?: (string | null) | undefined
}
type UserIdentitiesResponse = { identities?: UserIdentityObject[] | undefined }
type EndUserIdentityCreateInput = {
  auto_ownership?: (boolean | null) | undefined
  ownership?: 'owned' | 'shared' | null | undefined
  primary?: (boolean | null) | undefined
  type:
    | 'email'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'agent_forwarding'
    | 'phone_number'
    | 'messaging'
    | 'slack'
  value: string
  verification_method?: 'none' | 'low' | null | undefined
  verified?: (boolean | null) | undefined
}
type EndUserIdentityCreateRequest = { identity: EndUserIdentityCreateInput }
type UserIdentityResponse = { identity?: UserIdentityObject | undefined }
type GroupMembershipObject = {
  created_at?: string | undefined
  default?: boolean | undefined
  group_id: bigint
  id?: bigint | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id: bigint
}
type GroupMembershipsResponse = { group_memberships?: GroupMembershipObject[] | undefined }
type CreateGroupMembershipRequest = {
  group_membership: { default?: boolean | undefined; group_id: bigint; user_id: bigint }
}
type GroupMembershipResponse = { group_membership?: GroupMembershipObject | undefined }
type BulkCreateGroupMembershipsRequest = {
  group_memberships: { default?: boolean | undefined; group_id: bigint; user_id: bigint }[]
}
type GroupSLAPolicyFilterConditionObject = {
  field?: string | undefined
  operator?: string | undefined
  value?: (string | number)[] | undefined
}
type GroupSLAPolicyFilterObject = {
  all?: GroupSLAPolicyFilterConditionObject[] | undefined
  any?: GroupSLAPolicyFilterConditionObject[] | undefined
}
type GroupSLAPolicyMetricObject = {
  business_hours?: boolean | undefined
  metric?: string | undefined
  priority?: string | undefined
  target?: number | undefined
  target_in_seconds?: number | undefined
}
type GroupSLAPolicyObject = {
  created_at?: string | undefined
  description?: string | undefined
  filter: GroupSLAPolicyFilterObject
  id?: string | undefined
  policy_metrics?: GroupSLAPolicyMetricObject[] | undefined
  position?: number | undefined
  title: string
  updated_at?: string | undefined
  url?: string | undefined
}
type GroupSLAPoliciesResponse = {
  count?: number | undefined
  group_sla_policies?: GroupSLAPolicyObject[] | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type GroupSLAPolicyFilterConditionInput = {
  field?: (string | null) | undefined
  operator?: (string | null) | undefined
  value?: (string | null) | number | (string | number)[] | undefined
}
type GroupSLAPolicyFilterInput = {
  all?: (GroupSLAPolicyFilterConditionInput[] | null) | undefined
  any?: (GroupSLAPolicyFilterConditionInput[] | null) | undefined
}
type GroupSLAPolicyMetricInput = { [x: string]: unknown } | { [x: string]: unknown }
type GroupSLAPolicyInput = {
  description?: string | undefined
  filter: GroupSLAPolicyFilterInput
  policy_metrics?: (GroupSLAPolicyMetricInput[] | null) | undefined
  position?: (number | null) | undefined
  title: string
}
type GroupSLAPolicyRequest = { group_sla_policy: GroupSLAPolicyInput }
type GroupSLAPolicyResponse = { group_sla_policy?: GroupSLAPolicyObject | undefined }
type GroupSLAPolicyUpdateInput = {
  description?: (string | null) | undefined
  filter?: GroupSLAPolicyFilterInput | ({ [x: string]: unknown } | null) | undefined
  policy_metrics?: (GroupSLAPolicyMetricInput[] | null) | undefined
  position?: (number | null) | undefined
  title?: (string | null) | undefined
}
type GroupSLAPolicyUpdateRequest = { group_sla_policy: GroupSLAPolicyUpdateInput }
type GroupSLAPolicyFilterDefinitionResponse = {
  definitions?:
    | {
        all?:
          | {
              group?: string | undefined
              operators?: { title?: string | undefined; value?: string | undefined }[] | undefined
              output_key?: (string | null) | undefined
              target?: (string | null) | undefined
              title?: string | undefined
              title_for_field?: string | undefined
              value?: string | undefined
              values?:
                | {
                    list?:
                      | { title?: string | undefined; value?: string | number | undefined }[]
                      | undefined
                    type?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        any?:
          | {
              group?: string | undefined
              operators?: { title?: string | undefined; value?: string | undefined }[] | undefined
              output_key?: (string | null) | undefined
              target?: (string | null) | undefined
              title?: string | undefined
              title_for_field?: string | undefined
              value?: string | undefined
              values?:
                | {
                    list?:
                      | { title?: string | undefined; value?: string | number | undefined }[]
                      | undefined
                    type?: string | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type GroupSLAPolicyReorderRequest = { group_sla_policy_ids: string[] }
type GroupObject = {
  created_at?: string | undefined
  default?: boolean | undefined
  deleted?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  is_public?: boolean | undefined
  name: string
  updated_at?: string | undefined
  url?: string | undefined
}
type GroupsResponse = { groups?: GroupObject[] | undefined }
type CreateGroupRequest = {
  group: { description?: string | undefined; is_public?: boolean | undefined; name: string }
}
type GroupResponse = { group?: GroupObject | undefined }
type UpdateGroupRequest = {
  group: {
    description?: string | undefined
    is_public?: boolean | undefined
    name?: string | undefined
  }
}
type AvailableAgentsResponse = {
  users?:
    | {
        custom_role_id?: (bigint | null) | undefined
        email?: string | undefined
        entitlements?: (string[] | null) | undefined
        id?: bigint | undefined
        name?: string | undefined
        photo_url?: (string | null) | undefined
        role?: string | undefined
        role_type?: (number | null) | undefined
        suspended?: boolean | undefined
      }[]
    | undefined
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
}
type GroupsCountObject = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type TicketPriorityEnum = 'urgent' | 'high' | 'normal' | 'low'
type TicketImportInput = {
  assignee_id?: bigint | undefined
  brand_id?: (bigint | null) | undefined
  collaborators?: CollaboratorObject[] | undefined
  comment?:
    | {
        value?: string | undefined
        add_short_url?: boolean | undefined
        attachments?: AttachmentObject[] | undefined
        audit_id?: bigint | undefined
        author_id?: (bigint | null) | undefined
        body?: string | undefined
        channel_back?: string | undefined
        channel_source_id?: (string | null) | undefined
        created_at?: string | undefined
        html_body?: string | undefined
        id?: bigint | undefined
        metadata?: { [x: string]: unknown } | undefined
        plain_body?: string | undefined
        public?: boolean | undefined
        translate_to?: (string | null) | undefined
        type?: string | undefined
        uploads?: string[] | undefined
        via?: TicketAuditViaObject | undefined
      }
    | undefined
  comments?:
    | {
        author_id?: (bigint | null) | undefined
        body?: string | undefined
        created_at?: string | undefined
        html_body?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
        public?: boolean | undefined
        value?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  custom_fields?: TicketFieldValueInput[] | undefined
  custom_status_id?: bigint | undefined
  description?: string | undefined
  email_ccs?: (EmailCCObject[] | null) | undefined
  external_id?: string | undefined
  followers?: FollowerObject[] | undefined
  group_id?: bigint | undefined
  priority?: TicketPriorityEnum | undefined
  recipient?: string | undefined
  requester_id?: bigint | undefined
  solved_at?: string | undefined
  status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
  subject?: string | undefined
  submitter_id?: (bigint | null) | undefined
  tags?: string[] | undefined
  type?: 'question' | 'incident' | 'problem' | 'task' | undefined
  updated_at?: string | undefined
  via?: { channel?: string | undefined; source?: { [x: string]: unknown } | undefined } | undefined
}
type TicketImportRequest = { ticket?: TicketImportInput | undefined }
type TicketBulkImportRequest = { tickets?: TicketImportInput[] | undefined }
type TimeBasedExportIncrementalTicketsResponse = {
  count?: number | undefined
  end_of_stream?: boolean | undefined
  end_time?: number | undefined
  next_page?: (string | null) | undefined
  tickets?: TicketObject[] | undefined
}
type IncrementalCustomObjectRecordsResponse = {
  after_cursor?: (string | null) | undefined
  after_url?: (string | null) | undefined
  before_cursor?: (string | null) | undefined
  before_url?: (string | null) | undefined
  custom_object_records?:
    | {
        created_at?: string | undefined
        created_by_user_id?: string | undefined
        custom_object_fields?: { [x: string]: unknown } | undefined
        custom_object_key?: string | undefined
        external_id?: (string | null) | undefined
        id?: string | undefined
        name?: string | undefined
        updated_at?: string | undefined
        updated_by_user_id?: string | undefined
        url?: string | undefined
      }[]
    | undefined
  filter?: ({ exclude_deleted?: boolean | undefined } | null) | undefined
  meta?: { has_more?: boolean | undefined } | undefined
}
type OrganizationObject = {
  children_count?: number | undefined
  created_at?: string | undefined
  details?: (string | null) | undefined
  domain_names?: string[] | undefined
  external_id?: (string | null) | undefined
  group_id?: (bigint | null) | undefined
  id?: bigint | undefined
  name: string
  notes?: (string | null) | undefined
  organization_fields?:
    | ({
        [x: string]: string | number | boolean | string[] | ({ [x: string]: unknown } | null)
      } | null)
    | undefined
  shared_comments?: boolean | undefined
  shared_tickets?: boolean | undefined
  tags?: string[] | undefined
  ticket_restriction?: 'restricted' | 'organization' | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type ExportIncrementalOrganizationsResponse = {
  count?: number | undefined
  end_of_stream?: boolean | undefined
  end_time?: number | undefined
  next_page?: (string | null) | undefined
  organizations?: OrganizationObject[] | undefined
}
type IncrementalSkillBasedRoutingAttributeValue = {
  attribute_id?: string | undefined
  id?: string | undefined
  name?: string | undefined
  time?: string | undefined
  type?: string | undefined
}
type IncrementalSkillBasedRoutingAttribute = {
  id?: string | undefined
  name?: string | undefined
  time?: string | undefined
  type?: string | undefined
}
type IncrementalSkillBasedRoutingInstanceValue = {
  attribute_value_id?: string | undefined
  id?: string | undefined
  instance_id?: string | undefined
  time?: string | undefined
  type?: string | undefined
}
type IncrementalSkillBasedRouting = {
  attribute_values?: IncrementalSkillBasedRoutingAttributeValue[] | undefined
  attributes?: IncrementalSkillBasedRoutingAttribute[] | undefined
  count?: number | undefined
  end_time?: number | undefined
  instance_values?: IncrementalSkillBasedRoutingInstanceValue[] | undefined
  next_page?: string | undefined
}
type TicketMetricEventBaseObject = {
  deleted?: boolean | undefined
  group_sla?:
    | ({
        business_hours?: boolean | undefined
        policy?:
          | {
              description?: (string | null) | undefined
              id?: string | undefined
              title?: (string | null) | undefined
            }
          | undefined
        target?: number | undefined
      } | null)
    | undefined
  id?: bigint | undefined
  instance_id?: bigint | undefined
  metric?:
    | 'agent_work_time'
    | 'pausable_update_time'
    | 'periodic_update_time'
    | 'reply_time'
    | 'requester_wait_time'
    | 'resolution_time'
    | 'group_ownership_time'
    | undefined
  sla?:
    | ({
        business_hours?: boolean | undefined
        policy?:
          | {
              description?: (string | null) | undefined
              id?: bigint | undefined
              title?: (string | null) | undefined
            }
          | undefined
        target?: number | undefined
        target_in_seconds?: number | undefined
      } | null)
    | undefined
  status?: { [x: string]: unknown } | undefined
  ticket_id?: bigint | undefined
  time?: string | undefined
  type?:
    | 'activate'
    | 'pause'
    | 'fulfill'
    | 'apply_sla'
    | 'apply_group_sla'
    | 'breach'
    | 'update_status'
    | 'measure'
    | undefined
}
type ExportIncrementalTicketEventsResponse = {
  count?: number | undefined
  end_of_stream?: boolean | undefined
  end_time?: number | undefined
  next_page?: (string | null) | undefined
  ticket_events?: TicketMetricEventBaseObject[] | undefined
}
type TicketMetricEventsResponse = {
  ticket_metric_events?: TicketMetricEventBaseObject[] | undefined
  count?: number | undefined
  end_of_stream?: boolean | undefined
  end_time?: (number | null) | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
  next_page?: (string | null) | undefined
}
type CursorBasedExportIncrementalTicketsResponse = {
  after_cursor?: (string | null) | undefined
  after_url?: (string | null) | undefined
  before_cursor?: (string | null) | undefined
  before_url?: (string | null) | undefined
  end_of_stream?: boolean | undefined
  tickets?: TicketObject[] | undefined
}
type TimeBasedExportIncrementalUsersResponse = {
  count?: number | undefined
  end_of_stream?: boolean | undefined
  end_time?: number | undefined
  next_page?: (string | null) | undefined
  users?: UserObject[] | undefined
}
type CursorBasedExportIncrementalUsersResponse = {
  after_cursor?: (string | null) | undefined
  after_url?: (string | null) | undefined
  before_cursor?: (string | null) | undefined
  before_url?: (string | null) | undefined
  end_of_stream?: boolean | undefined
  users?: UserObject[] | undefined
}
type ItamAssetType = {
  created_by_user_id?: bigint | undefined
  description?: (string | null) | undefined
  display_icon_url?: (string | null) | undefined
  external_id?: (string | null) | undefined
  field_keys?: string[] | undefined
  hierarchy_depth?: number | undefined
  icon_url?: (string | null) | undefined
  id?: string | undefined
  is_standard?: boolean | undefined
  name: string
  parent_id?: (string | null) | undefined
  photo?: ({ [x: string]: unknown } | null) | undefined
  updated_by_user_id?: bigint | undefined
  url?: string | undefined
}
type ItamAssetTypesResponse = { asset_types?: ItamAssetType[] | undefined }
type ItamAssetTypeCreateRequest = { asset_type?: ItamAssetType | undefined }
type ItamAssetTypeResponse = { asset_type?: ItamAssetType | undefined }
type ItamRecordInvalidError = {
  description: string
  details: { [x: string]: { description?: string | undefined; error?: string | undefined }[] }
  error: string
}
type ItamAssetTypeUpdateRequest = {
  asset_type?:
    | {
        description?: (string | null) | undefined
        external_id?: (string | null) | undefined
        name?: string | undefined
        photo?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
}
type ItamAssetField = {
  active?: boolean | undefined
  created_at?: string | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  description?: string | undefined
  id?: bigint | undefined
  key: string
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?: { [x: string]: unknown } | undefined
  system?: boolean | undefined
  tag?: string | undefined
  title: string
  type: string
  updated_at?: string | undefined
  url?: string | undefined
  properties?: CustomObjectFieldPropertiesObject | undefined
  readonly?: boolean | undefined
  relationship_target_type?: string | undefined
  required?: boolean | undefined
}
type ItamAssetTypeFieldsResponse = { fields?: ItamAssetField[] | undefined }
type ItamAssetFieldResponse = { field?: ItamAssetField | undefined }
type ItamAsset = {
  asset_tag?: (string | null) | undefined
  asset_type_icon_url?: (string | null) | undefined
  asset_type_id: string
  created_at?: string | undefined
  created_by_user_id?: bigint | undefined
  custom_field_values?: { [x: string]: unknown } | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  location_id?: (string | null) | undefined
  manufacturer?: (string | null) | undefined
  model?: (string | null) | undefined
  name: string
  notes?: (string | null) | undefined
  organization_id?: (bigint | null) | undefined
  purchase_cost?: number | string | ({ [x: string]: unknown } | null) | undefined
  purchase_date?: (string | null) | undefined
  serial_number?: (string | null) | undefined
  status_id: string
  updated_at?: string | undefined
  updated_by_user_id?: bigint | undefined
  url?: string | undefined
  user_id?: (bigint | null) | undefined
  vendor?: (string | null) | undefined
  warranty_expiration?: (string | null) | undefined
}
type ItamAssetsResponse = {
  assets?: ItamAsset[] | undefined
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
}
type ItamAssetCreateRequest = { asset?: ItamAsset | undefined }
type ItamAssetResponse = { asset?: ItamAsset | undefined }
type ItamAssetUpdateRequest = {
  asset: {
    asset_tag?: (string | null) | undefined
    asset_type_id?: string | undefined
    custom_field_values?: ({ [x: string]: unknown } | null) | undefined
    external_id?: (string | null) | undefined
    location_id?: (string | null) | undefined
    manufacturer?: (string | null) | undefined
    model?: (string | null) | undefined
    name?: string | undefined
    notes?: (string | null) | undefined
    organization_id?: (bigint | null) | undefined
    purchase_cost?: (number | null) | undefined
    purchase_date?: (string | null) | undefined
    serial_number?: (string | null) | undefined
    status_id?: string | undefined
    user_id?: (bigint | null) | undefined
    vendor?: (string | null) | undefined
    warranty_expiration?: (string | null) | undefined
  }
}
type ItamAssetBulkJobRequest = {
  job?:
    | {
        action?: 'create' | 'update' | 'delete' | 'delete_by_external_id' | undefined
        items?: (ItamAsset | string)[] | undefined
      }
    | undefined
}
type ItamAssetBulkJobResponse = {
  job_status?:
    | {
        id?: string | undefined
        message?: (string | null) | undefined
        progress?: (number | null) | undefined
        results?: (ItamAsset[] | null) | undefined
        status?: string | undefined
        total?: number | undefined
        url?: string | undefined
      }
    | undefined
}
type ItamAssetFilteredSearchCondition = {
  field_key?:
    | ({
        operator?: string | undefined
        value?: string | number | (string | number)[] | undefined
      } | null)
    | undefined
}
type ItamAssetFilteredSearchRequestBasic = { filter?: ItamAssetFilteredSearchCondition | undefined }
type ItamAssetFilteredSearchRequestComplex = {
  filter?:
    | {
        $and?: ItamAssetFilteredSearchCondition[] | undefined
        $or?: ItamAssetFilteredSearchCondition[] | undefined
      }
    | undefined
}
type ItamAssetFieldsResponse = {
  fields?: ItamAssetField[] | undefined
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
}
type ItamAssetFieldGlobalCreateRequest = {
  asset_type_ids?: string[] | 'all' | 'none' | undefined
  field?: ItamAssetField | undefined
}
type ItamAssetFieldGlobalUpdateRequest = {
  asset_type_ids?: string[] | 'all' | 'none' | undefined
  field?: ItamAssetField | undefined
}
type ItamAssetLocation = {
  created_at?: string | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  name: string
  updated_at?: string | undefined
  url?: string | undefined
}
type ItamAssetLocationsResponse = {
  locations?: ItamAssetLocation[] | undefined
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
}
type ItamAssetLocationCreateRequest = { location?: ItamAssetLocation | undefined }
type ItamAssetLocationResponse = { location?: ItamAssetLocation | undefined }
type ItamAssetLocationUpdateRequest = {
  location?: { external_id?: (string | null) | undefined; name?: string | undefined } | undefined
}
type ItamAssetStatus = {
  category?: 'available' | 'in_use' | 'unavailable' | 'end_of_life' | undefined
  created_at?: string | undefined
  description?: (string | null) | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  is_standard?: boolean | undefined
  name: string
  updated_at?: string | undefined
  url?: string | undefined
}
type ItamAssetStatusesResponse = { statuses?: ItamAssetStatus[] | undefined }
type ItamAssetStatusCreateRequest = {
  status?:
    | {
        category: 'available' | 'in_use' | 'unavailable' | 'end_of_life'
        description?: (string | null) | undefined
        external_id?: (string | null) | undefined
        name: string
      }
    | undefined
}
type ItamAssetStatusResponse = { status?: ItamAssetStatus | undefined }
type ItamAssetStatusUpdateRequest = {
  status?:
    | {
        description?: (string | null) | undefined
        external_id?: (string | null) | undefined
        name?: string | undefined
      }
    | undefined
}
type JobStatusesResponse = {
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
  count?: number | undefined
  job_statuses: JobStatusObject[]
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type LocaleObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  locale?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type LocalesResponse = { locales?: LocaleObject[] | undefined }
type LocaleResponse = { locale?: LocaleObject | undefined }
type MacroObject = {
  actions: ActionObject[]
  active?: boolean | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: (string | null) | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  restriction?: ({ [x: string]: unknown } | null) | undefined
  title: string
  updated_at?: string | undefined
  url?: string | undefined
  app_installation?: (string | null) | undefined
  attachments?: bigint[] | undefined
  categories?: (string | null) | undefined
  permissions?: ({ can_edit?: boolean | undefined } | null) | undefined
  usage_1h?: number | undefined
  usage_7d?: number | undefined
  usage_24h?: number | undefined
  usage_30d?: number | undefined
  valid?: boolean | undefined
}
type MacrosResponse = {
  macros?: MacroObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
}
type MacroInput = {
  actions: ActionObject[]
  active?: boolean | undefined
  attachments?: bigint[] | undefined
  description?: (string | null) | undefined
  position?: number | undefined
  restriction?:
    | ({
        id?: bigint | string | undefined
        ids?: (bigint | string)[] | undefined
        type?: string | undefined
      } | null)
    | undefined
  title: string
}
type MacroResponse = { macro?: MacroObject | undefined }
type MacroApplyTicketResponse = {
  result?:
    | {
        ticket?:
          | {
              assignee_id?: bigint | undefined
              comment?:
                | {
                    body?: string | undefined
                    public?: boolean | undefined
                    scoped_body?: string[][] | undefined
                  }
                | undefined
              fields?:
                | {
                    id: bigint
                    value?: (string | null) | number | boolean | string[] | undefined
                  }[]
                | undefined
              group_id?: bigint | undefined
              id?: bigint | undefined
              url?: string | undefined
            }
          | undefined
      }
    | undefined
}
type MacroAttachmentObject = {
  content_type?: string | undefined
  content_url?: string | undefined
  created_at?: string | undefined
  filename?: string | undefined
  id?: bigint | undefined
  size?: number | undefined
}
type MacroAttachmentsResponse = { macro_attachments?: MacroAttachmentObject[] | undefined }
type MacroAttachmentResponse = { macro_attachment?: MacroAttachmentObject | undefined }
type MacroCategoriesResponse = { categories?: string[] | undefined }
type MostUsedMacroObject = {
  active?: boolean | undefined
  availability_type?: string | undefined
  created_at?: string | undefined
  description?: (string | null) | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type MostUsedMacrosResponse = { most_used_macros?: MostUsedMacroObject[] | undefined }
type MacroUpdateManyInput = {
  macros?: { active?: boolean | undefined; id: bigint; position?: number | undefined }[] | undefined
}
type OAuthClientObject = {
  company?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  global?: boolean | undefined
  id?: bigint | undefined
  identifier: string
  kind?: string | undefined
  logo_url?: string | undefined
  name: string
  redirect_uri?: string[] | undefined
  scope?: string | undefined
  secret?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id: bigint
}
type OAuthClientsResponse = { clients?: OAuthClientObject[] | undefined }
type OauthClientResponse = { client?: OAuthClientObject | undefined }
type GlobalClientObject = {
  company?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  identifier?: string | undefined
  kind?: string | undefined
  logo_url?: string | undefined
  name?: string | undefined
}
type GlobalClientsResponse = { global_clients?: GlobalClientObject[] | undefined }
type GlobalClientResponse = { global_client?: GlobalClientObject | undefined }
type GlobalClientTokenSummaryObject = {
  id?: bigint | undefined
  last_used_at?: string | undefined
  tokens_count?: number | undefined
}
type GlobalClientsTokenSummaryResponse = {
  global_clients?: GlobalClientTokenSummaryObject[] | undefined
}
type OauthTokenObject = {
  client_id?: bigint | undefined
  created_at?: string | undefined
  expires_at?: string | undefined
  id?: bigint | undefined
  refresh_token?: string | undefined
  refresh_token_expires_at?: string | undefined
  scopes?: string[] | undefined
  token?: string | undefined
  url?: string | undefined
  used_at?: string | undefined
  user_id?: bigint | undefined
}
type OAuthTokensResponse = { tokens?: OauthTokenObject[] | undefined }
type OAuthTokenResponse = { token?: OauthTokenObject | undefined }
type OAuthTokensDeleteManyRequest = { token_ids: bigint[] }
type OrganizationFieldObject = {
  active?: boolean | undefined
  created_at?: string | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  description?: string | undefined
  id?: bigint | undefined
  key: string
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?: { [x: string]: unknown } | undefined
  system?: boolean | undefined
  tag?: string | undefined
  title: string
  type: string
  updated_at?: string | undefined
  url?: string | undefined
  relationship_target_type?: string | undefined
}
type OrganizationFieldsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  organization_fields?: OrganizationFieldObject[] | undefined
  previous_page?: (string | null) | undefined
}
type OrganizationFieldOptionInput = {
  name?: string | undefined
  raw_name?: (string | null) | undefined
  value: string
}
type OrganizationFieldRelationshipFilterCondition = {
  field?: (string | null) | undefined
  operator?: (string | null) | undefined
  value?: (string | null) | string[] | undefined
}
type OrganizationFieldInput = {
  active?: (boolean | null) | undefined
  custom_field_options?: (OrganizationFieldOptionInput[] | null) | undefined
  description?: (string | null) | undefined
  key: string
  position?: (number | null) | undefined
  raw_description?: (string | null) | undefined
  raw_title?: (string | null) | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?:
    | ({
        all?: (OrganizationFieldRelationshipFilterCondition[] | null) | undefined
        any?: (OrganizationFieldRelationshipFilterCondition[] | null) | undefined
      } | null)
    | undefined
  relationship_target_type?: (string | null) | undefined
  tag?: (string | null) | undefined
  title?: string | undefined
  type?:
    | 'checkbox'
    | 'date'
    | 'decimal'
    | 'integer'
    | 'regexp'
    | 'text'
    | 'textarea'
    | 'tagger'
    | 'dropdown'
    | 'multiselect'
    | 'lookup'
    | null
    | undefined
}
type OrganizationFieldRequest = { organization_field: OrganizationFieldInput }
type OrganizationFieldResponse = { organization_field?: OrganizationFieldObject | undefined }
type OrganizationFieldOptionUpdateInput = {
  id: (bigint | null) | string
  name?: string | undefined
  raw_name?: (string | null) | undefined
  value?: string | undefined
}
type OrganizationFieldUpdateInput = {
  active?: (boolean | null) | undefined
  custom_field_options?: (OrganizationFieldOptionUpdateInput[] | null) | undefined
  description?: (string | null) | undefined
  position?: number | undefined
  raw_description?: (string | null) | undefined
  raw_title?: (string | null) | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?:
    | ({
        all?: (OrganizationFieldRelationshipFilterCondition[] | null) | undefined
        any?: (OrganizationFieldRelationshipFilterCondition[] | null) | undefined
      } | null)
    | undefined
  tag?: (string | null) | undefined
  title?: string | undefined
}
type OrganizationFieldUpdateRequest = {
  organization_field?: OrganizationFieldUpdateInput | undefined
}
type OrganizationFieldsReorderRequest = { organization_field_ids: (bigint | string)[] }
type OrganizationMembershipObject = {
  created_at?: string | undefined
  default: boolean | null
  id?: bigint | undefined
  organization_id: bigint
  organization_name?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user_id: bigint
  view_tickets?: boolean | undefined
}
type OrganizationMembershipsResponse = {
  organization_memberships?: OrganizationMembershipObject[] | undefined
}
type OrganizationMembershipInput = {
  organization_id?: bigint | undefined
  user_id?: bigint | undefined
}
type OrganizationMembershipRequest = {
  organization_id?: bigint | undefined
  organization_membership: OrganizationMembershipInput
  user_id?: bigint | undefined
}
type OrganizationMembershipResponse = {
  organization_membership?: OrganizationMembershipObject | undefined
}
type OrganizationMembershipCreateManyItemInput = {
  organization_id?: (bigint | null) | undefined
  user_id?: (bigint | null) | undefined
}
type OrganizationMembershipCreateManyRequest = {
  organization_memberships: OrganizationMembershipCreateManyItemInput[]
}
type OrganizationMergeResponse = {
  organization_merge?:
    | {
        id: string
        loser_id: bigint
        status: 'new' | 'in_progress' | 'error' | 'complete'
        url: string
        winner_id: bigint
      }
    | undefined
}
type OrganizationSubscriptionObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  organization_id?: bigint | undefined
  user_id?: bigint | undefined
}
type OrganizationSubscriptionsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  organization_subscriptions?: OrganizationSubscriptionObject[] | undefined
}
type OrganizationSubscriptionInput = {
  organization_id?: bigint | undefined
  user_id?: bigint | undefined
}
type OrganizationSubscriptionCreateRequest = {
  organization_subscription?: OrganizationSubscriptionInput | undefined
}
type OrganizationSubscriptionResponse = {
  organization_subscription?: OrganizationSubscriptionObject | undefined
}
type OrganizationsResponse = {
  count?: number | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
  next_page?: (string | null) | undefined
  organizations?: OrganizationObject[] | undefined
  previous_page?: (string | null) | undefined
}
type CreateOrganizationRequest = { organization: OrganizationObject }
type OrganizationResponse = { organization?: OrganizationObject | undefined }
type OrganizationUpdateInput = {
  details?: (string | null) | undefined
  domain_names?: (string[] | null) | string | undefined
  external_id?: (string | null) | number | undefined
  group_id?: (bigint | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  organization_fields?: ({ [x: string]: unknown } | null) | undefined
  shared_comments?: boolean | undefined
  shared_tickets?: boolean | undefined
  tags?: (string[] | null) | string | undefined
  ticket_restriction?: 'restricted' | 'organization' | 'organization_and_descendants' | undefined
} | null
type UpdateOrganizationRequest = { organization?: OrganizationUpdateInput | undefined }
type Error = {
  code: string
  detail?: string | undefined
  id?: string | undefined
  links?: { [x: string]: unknown } | undefined
  source?: { [x: string]: unknown } | undefined
  status?: string | undefined
  title: string
}
type Errors = { errors?: Error[] | undefined }
type OrganizationMergeRequest = {
  organization_merge?: { winner_id?: bigint | undefined } | undefined
}
type OrganizationMergeListResponse = {
  organization_merges?:
    | {
        id?: string | undefined
        loser_id?: bigint | undefined
        status?: 'new' | 'in_progress' | 'error' | 'complete' | undefined
        url?: string | undefined
        winner_id?: bigint | undefined
      }[]
    | undefined
}
type OrganizationMetadataObject = {
  tickets_count?: number | undefined
  users_count?: number | undefined
}
type OrganizationsRelatedResponse = {
  organization_related?: OrganizationMetadataObject | undefined
}
type RequestObject = {
  assignee_id?: (bigint | null) | undefined
  can_be_solved_by_me?: boolean | undefined
  can_comment?: boolean | undefined
  can_update_ccs?: boolean | undefined
  collaborator_ids?: bigint[] | undefined
  created_at?: string | undefined
  custom_fields?:
    | {
        id?: bigint | undefined
        value?: string | number | boolean | string[] | ({ [x: string]: unknown } | null) | undefined
      }[]
    | undefined
  custom_status_id?: bigint | undefined
  description?: string | undefined
  due_at?: (string | null) | undefined
  email_cc_ids?: bigint[] | undefined
  fields?:
    | {
        id?: bigint | undefined
        value?: string | number | boolean | string[] | ({ [x: string]: unknown } | null) | undefined
      }[]
    | undefined
  followup_source_id?: (bigint | null) | undefined
  group_id?: bigint | undefined
  id?: bigint | undefined
  is_public?: boolean | undefined
  organization_id?: bigint | undefined
  priority?: string | undefined
  recipient?: (string | null) | undefined
  requester_id?: bigint | undefined
  solved?: boolean | undefined
  status?: string | undefined
  subject: string
  ticket_form_id?: bigint | undefined
  type?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  via?: TicketAuditViaObject | undefined
}
type RequestsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  requests?: RequestObject[] | undefined
}
type TagsRequest = { tags?: (string[] | null) | string | undefined }
type TagsAddRequest = {
  safe_update?: (boolean | null) | undefined
  tags?: (string[] | null) | string | undefined
  updated_stamp?: (string | null) | undefined
  via?:
    | ({ author_zrn?: (string | null) | undefined; channel?: (string | null) | undefined } | null)
    | undefined
}
type TicketsResponse = { tickets?: TicketObject[] | undefined }
type CountOrganizationObject = { refreshed_at?: string | undefined; value?: number | undefined }
type CountOrganizationResponse = { count?: CountOrganizationObject | undefined }
type OrganizationCreateOrUpdateInput = {
  details?: (string | null) | undefined
  domain_names?: (string[] | null) | string | undefined
  external_id?: (string | null) | number | undefined
  group_id?: (bigint | null) | undefined
  id?: bigint | (string | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  organization_fields?: ({ [x: string]: unknown } | null) | undefined
  shared_comments?: boolean | undefined
  shared_tickets?: boolean | undefined
  tags?: (string[] | null) | string | undefined
  ticket_restriction?: 'restricted' | 'organization' | 'organization_and_descendants' | undefined
}
type CreateOrUpdateOrganizationRequest = { organization: OrganizationCreateOrUpdateInput }
type OrganizationBulkUpdateInput = {
  details?: (string | null) | undefined
  domain_names?: (string[] | null) | string | undefined
  external_id?: (string | null) | number | undefined
  group_id?: (bigint | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  organization_fields?: ({ [x: string]: unknown } | null) | undefined
  shared_comments?: boolean | undefined
  shared_tickets?: boolean | undefined
  tags?: (string[] | null) | string | undefined
  ticket_restriction?: 'restricted' | 'organization' | 'organization_and_descendants' | undefined
}
type OrganizationBulkUpdateRequest = { organization: OrganizationBulkUpdateInput }
type OrganizationBatchUpdateItemInput = {
  details?: (string | null) | undefined
  domain_names?: (string[] | null) | string | undefined
  external_id?: (string | null) | number | undefined
  group_id?: (bigint | null) | undefined
  id?: bigint | (string | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  organization_fields?: { [x: string]: unknown } | undefined
  shared_comments?: boolean | undefined
  shared_tickets?: boolean | undefined
  tags?: (string[] | null) | string | undefined
  ticket_restriction?: 'restricted' | 'organization' | 'organization_and_descendants' | undefined
}
type OrganizationBatchUpdateRequest = { organizations: OrganizationBatchUpdateItemInput[] }
type ListTicketProblemsResponse = { [x: string]: unknown }
type PushNotificationDevicesInput = string[]
type PushNotificationDevicesRequest = {
  push_notification_devices?: PushNotificationDevicesInput | undefined
}
type QueueObject = {
  created_at?: string | undefined
  definition?:
    | {
        all?:
          | {
              field?: string | undefined
              operator?: string | undefined
              value?: string | undefined
            }[]
          | undefined
        any?:
          | {
              field?: string | undefined
              operator?: string | undefined
              value?: string | undefined
            }[]
          | undefined
      }
    | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  order?: number | undefined
  primary_groups?:
    | {
        count?: number | undefined
        groups?: { id?: bigint | undefined; name?: string | undefined }[] | undefined
      }
    | undefined
  priority?: number | undefined
  secondary_groups?:
    | {
        count?: number | undefined
        groups?: { id?: bigint | undefined; name?: string | undefined }[] | undefined
      }
    | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type QueuesResponse = { queues?: QueueObject[] | undefined }
type QueueConditionInput = {
  field: string
  operator?: (string | null) | undefined
  value?: string | number | (string | number)[] | undefined
}
type QueueDefinitionInput = {
  all?: (QueueConditionInput[] | null) | undefined
  any?: (QueueConditionInput[] | null) | undefined
}
type QueueSubqueueInput = { [x: string]: unknown } | { [x: string]: unknown }
type QueueInput = {
  definition: QueueDefinitionInput
  description?: (string | null) | undefined
  name: string
  predictive_routing?: boolean | undefined
  primary_groups_id?: (bigint[] | null) | undefined
  priority?: (number | null) | undefined
  secondary_groups_id?: (bigint[] | null) | undefined
  subqueues?: (QueueSubqueueInput[] | null) | undefined
}
type QueueRequest = { queue: QueueInput }
type QueueResponse = { queue?: QueueObject | undefined }
type QueueUpdateInput = {
  definition?: QueueDefinitionInput | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: string | undefined
  predictive_routing?: boolean | undefined
  primary_groups_id?: (bigint[] | null) | undefined
  priority?: (number | null) | undefined
  secondary_groups_id?: (bigint[] | null) | undefined
  subqueues?: (QueueSubqueueInput[] | null) | undefined
}
type QueueUpdateRequest = { queue: QueueUpdateInput }
type DefinitionsResponse = {
  definitions?:
    | {
        conditions_all?:
          | {
              group?: string | undefined
              nullable?: boolean | undefined
              operators?:
                | {
                    terminal?: boolean | undefined
                    title?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              repeatable?: boolean | undefined
              subject?: string | undefined
              title?: string | undefined
              type?: string | undefined
              values?:
                | {
                    enabled?: boolean | undefined
                    title?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }[]
          | undefined
        conditions_any?:
          | {
              group?: string | undefined
              nullable?: boolean | undefined
              operators?:
                | {
                    terminal?: boolean | undefined
                    title?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              repeatable?: boolean | undefined
              subject?: string | undefined
              title?: string | undefined
              type?: string | undefined
              values?:
                | {
                    enabled?: boolean | undefined
                    title?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type QueuesReorderRequest = { queue_ids: string[] }
type SupportAddressObject = {
  brand_id?: bigint | undefined
  cname_status?: 'unknown' | 'verified' | 'failed' | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  dns_results?: 'verified' | 'failed' | undefined
  domain_verification_code?: string | undefined
  domain_verification_status?: 'unknown' | 'verified' | 'failed' | undefined
  email: string
  forwarding_status?: 'unknown' | 'waiting' | 'verified' | 'failed' | undefined
  id?: bigint | undefined
  name?: string | undefined
  spf_status?: 'unknown' | 'verified' | 'failed' | undefined
  updated_at?: string | undefined
}
type SupportAddressesResponse = { recipient_addresses?: SupportAddressObject[] | undefined }
type SupportAddressResponse = { recipient_address?: SupportAddressObject | undefined }
type TriggerConditionDefinitionObjectAll = {
  group?: string | undefined
  nullable?: boolean | undefined
  operators?:
    | { terminal?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | { enabled?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
}
type TriggerConditionDefinitionObjectAny = {
  group?: string | undefined
  nullable?: boolean | undefined
  operators?:
    | { terminal?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type RelationshipFilterDefinition = {
  conditions_all?: TriggerConditionDefinitionObjectAll[] | undefined
  conditions_any?: TriggerConditionDefinitionObjectAny[] | undefined
}
type RelationshipFilterDefinitionResponse = {
  definitions?: RelationshipFilterDefinition | undefined
}
type RemoteAuthenticationObject = {
  agent: boolean
  agent_primary: boolean
  auth_flow?: 'PKCE' | 'authorization_code' | undefined
  auth_mode: 2 | 3 | 4
  auth_mode_name?: 'saml' | 'jwt' | 'oidc' | undefined
  auth_url?: string | undefined
  auto_discovery?: boolean | undefined
  brand_id?: bigint | undefined
  can_display_button_to_end_users: boolean
  can_display_button_to_team_members: boolean
  client_id?: string | undefined
  end_user: boolean
  end_user_primary: boolean
  fingerprint?: string | undefined
  id?: bigint | undefined
  ip_ranges?: (string | null) | undefined
  is_active?: boolean | undefined
  issuer_url?: string | undefined
  jwks_url?: string | undefined
  label?: string | undefined
  masked_client_secret?: string | undefined
  masked_secret?: string | undefined
  name: string
  priority?: number | undefined
  remote_login_url: string
  remote_logout_url: string
  scope?: string | undefined
  token_url?: string | undefined
  update_external_ids?: boolean | undefined
  user_info_url?: string | undefined
}
type RemoteAuthenticationsResponse = {
  remote_authentications?: RemoteAuthenticationObject[] | undefined
}
type RequestEmailCCInput = {
  action?: (string | null) | number | undefined
  user_email?: (string | null) | undefined
  user_id?: (bigint | null) | string | undefined
  user_name?: (string | null) | undefined
}
type RequestViaInput = {
  channel?: (string | null) | number | undefined
  source?: (bigint | null) | string | { rel?: string | undefined } | undefined
}
type RequestInput = {
  collaborators?:
    | (bigint | string | { email?: string | undefined; name?: string | undefined } | string[])[]
    | string
    | bigint
    | ({ [x: string]: unknown } | null)
    | undefined
  comment: { [x: string]: unknown } | { [x: string]: unknown } | { [x: string]: unknown }
  custom_fields?:
    | (({ [x: string]: unknown } | string | number | boolean)[] | null)
    | { [x: string]: unknown }
    | string
    | number
    | boolean
    | undefined
  due_at?: (string | null) | undefined
  email_ccs?: (RequestEmailCCInput[] | null) | undefined
  fields?:
    | (({ [x: string]: unknown } | string | number | boolean)[] | null)
    | { [x: string]: unknown }
    | string
    | number
    | boolean
    | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  organization_id?: (bigint | null) | undefined
  priority?: 'low' | 'normal' | 'high' | 'urgent' | null | undefined
  recipient?: string | undefined
  requester?:
    | ({
        email?: string | undefined
        locale?: string | undefined
        locale_id?: number | undefined
        name?: string | undefined
      } | null)
    | undefined
  safe_update?: (boolean | null) | undefined
  solved?: (boolean | null) | undefined
  subject?: string | undefined
  system_metadata?:
    | ({ client?: (string | null) | undefined; ip_address?: (string | null) | undefined } | null)
    | undefined
  tags?: (string[] | null) | string | undefined
  ticket_form_id?: (bigint | null) | undefined
  type?: 'question' | 'incident' | 'problem' | 'task' | null | undefined
  updated_stamp?: (string | null) | undefined
  via?: RequestViaInput | ({ [x: string]: unknown } | null) | undefined
  via_followup_source_id?: (bigint | null) | undefined
  via_id?: (bigint | null) | undefined
}
type RequestCreateRequest = { request: RequestInput }
type RequestResponse = { request?: RequestObject | undefined }
type RequestCommentInput = {
  body?: (string | null) | undefined
  html_body?: (string | null) | undefined
  uploads?: (string[] | null) | string | undefined
  value?: (string | null) | undefined
}
type RequestUpdateInput = {
  additional_collaborators?:
    | (bigint | string | { email?: string | undefined; name?: string | undefined } | string[])[]
    | string
    | bigint
    | ({ [x: string]: unknown } | null)
    | undefined
  comment?: RequestCommentInput | ({ [x: string]: unknown } | null) | undefined
  email_ccs?: (RequestEmailCCInput[] | null) | undefined
  organization_id?: (bigint | null) | undefined
  safe_update?: (boolean | null) | undefined
  solved?: (boolean | null) | undefined
  system_metadata?:
    | ({ client?: (string | null) | undefined; ip_address?: (string | null) | undefined } | null)
    | undefined
  updated_stamp?: (string | null) | undefined
  via?: RequestViaInput | ({ [x: string]: unknown } | null) | undefined
}
type RequestUpdateRequest = { request?: RequestUpdateInput | undefined }
type TicketCommentsResponse = { comments?: TicketCommentObject[] | undefined }
type ResourceCollectionObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  resources?:
    | {
        deleted?: boolean | undefined
        identifier?: string | undefined
        resource_id?: bigint | undefined
        type?: string | undefined
      }[]
    | undefined
  updated_at?: string | undefined
}
type ResourceCollectionsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  resource_collections?: ResourceCollectionObject[] | undefined
}
type ResourceCollectionResponse = { resource_collection?: ResourceCollectionObject | undefined }
type SkillBasedRoutingAttributeValueObject = {
  agent_skill_priority?: 'NORMAL' | 'HIGH' | undefined
  attribute_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type SkillBasedRoutingAttributeValuesResponse = {
  attribute_values?: SkillBasedRoutingAttributeValueObject[] | undefined
}
type SkillBasedRoutingAttributeValueWithoutPriorityObject = {
  attribute_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type SkillBasedRoutingAttributeValuesWithoutPriorityResponse = {
  attribute_values?: SkillBasedRoutingAttributeValueWithoutPriorityObject[] | undefined
}
type ManySkillBasedRoutingAttributeValues = {
  agent_id?: bigint | undefined
  agent_skill_priority?: 'NORMAL' | 'HIGH' | undefined
  attribute_id?: string | undefined
  attribute_value_id?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type ManySkillBasedRoutingAttributeValuesResponse = {
  count?: number | undefined
  instance_values?: ManySkillBasedRoutingAttributeValues[] | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type SkillBasedRoutingAttributeValuesError = {
  error?: { message?: string | undefined; title?: string | undefined } | undefined
}
type BulkSkillBasedRoutingAttributeValueJob = {
  action: string
  attributes: { attribute_values?: SkillBasedRoutingAttributeValueObject[] | undefined }
  items: number[]
}
type BulkSkillBasedRoutingAttributeValuesRequest = {
  job?: BulkSkillBasedRoutingAttributeValueJob | undefined
}
type SkillBasedRoutingAttributeObject = {
  created_at?: string | undefined
  id?: string | undefined
  name: string
  updated_at?: string | undefined
  url?: string | undefined
}
type SkillBasedRoutingAttributesResponse = {
  attributes?: SkillBasedRoutingAttributeObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type SkillBasedRoutingAttributeResponse = {
  attribute?: SkillBasedRoutingAttributeObject | undefined
}
type SkillBasedRoutingAttributeValueResponse = {
  attribute_value?: SkillBasedRoutingAttributeValueObject | undefined
}
type SkillBasedRoutingAttributeDefinitions = {
  definitions?:
    | {
        conditions_all?: { subject?: string | undefined; title?: string | undefined }[] | undefined
        conditions_any?: { subject?: string | undefined; title?: string | undefined }[] | undefined
      }
    | undefined
}
type SkillBasedRoutingTicketFulfilledResponse = { fulfilled_ticket_ids?: bigint[] | undefined }
type SkillBasedRoutingAttributeValueIdsRequest = {
  attribute_value_ids?: (string[] | null) | undefined
}
type SatisfactionRatingObject = {
  assignee_id: bigint
  comment?: string | undefined
  created_at?: string | undefined
  group_id: bigint
  id?: bigint | undefined
  reason?: string | undefined
  reason_code?: number | undefined
  reason_id?: bigint | undefined
  requester_id: bigint
  score: string
  ticket_id: bigint
  updated_at?: string | undefined
  url?: string | undefined
}
type SatisfactionRatingsResponse = { satisfaction_ratings?: SatisfactionRatingObject[] | undefined }
type SatisfactionRatingResponse = { satisfaction_rating?: SatisfactionRatingObject | undefined }
type SatisfactionRatingsCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type SatisfactionReasonObject = {
  created_at?: string | undefined
  deleted_at?: string | undefined
  id?: bigint | undefined
  raw_value?: string | undefined
  reason_code?: number | undefined
  updated_at?: string | undefined
  url?: string | undefined
  value: string
}
type SatisfactionReasonsResponse = { satisfaction_reasons?: SatisfactionReasonObject[] | undefined }
type SatisfactionReasonResponse = { satisfaction_reason?: SatisfactionReasonObject | undefined }
type SavedSearchObject = {
  created_at: string
  filters?: string | undefined
  id: string
  name: string
  query: string
  type: 'ticket' | 'user' | 'organization' | 'side_conversation' | 'article'
  updated_at?: string | undefined
}
type SavedSearchesResponse = { saved_searches?: SavedSearchObject[] | undefined }
type SavedSearchInput = {
  filters?: string | undefined
  name: string
  query: string
  type: 'ticket' | 'user' | 'organization' | 'side_conversation' | 'article'
}
type SavedSearchResponse = { saved_search?: SavedSearchObject | undefined }
type SavedSearchError = { description?: string | undefined; error?: string | undefined }
type SavedSearchValidationError = {
  description?: string | undefined
  details?:
    | { [x: string]: { description?: string | undefined; error?: string | undefined }[] }
    | undefined
  error?: string | undefined
}
type SearchResultObject = {
  created_at?: string | undefined
  default?: boolean | undefined
  deleted?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  result_type?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type SearchResponse = {
  count?: number | undefined
  facets?: (string | null) | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  results?: SearchResultObject[] | undefined
}
type SearchCountResponse = { count?: number | undefined }
type SearchExportResponse = {
  facets?: (string | null) | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
  results?: SearchResultObject[] | undefined
}
type SecuritySettingsObject = {
  admins_can_set_user_passwords?: boolean | undefined
  agent_session_timeout?: number | undefined
  assumable?: boolean | undefined
  assumable_account_type?: boolean | undefined
  assumption_duration?: 'off' | 'day' | 'week' | 'month' | 'year' | 'always' | undefined
  assumption_expiration?: (string | null) | undefined
  authentication?:
    | {
        agent?:
          | {
              enforce_sso?: boolean | undefined
              google_login?: boolean | undefined
              office_365_login?: boolean | undefined
              primary_external_auth?: (string | null) | undefined
              remote_login?: boolean | undefined
              security_policy_id?: bigint | undefined
              security_policy_name?:
                | 'low'
                | 'medium'
                | 'high'
                | 'recommended'
                | 'custom'
                | undefined
              sso_auto_redirect?: boolean | undefined
              two_factor_enforce?: boolean | undefined
              zendesk_login?: boolean | undefined
              office_365_allowed_tids?: string | undefined
              office_365_enforce_tid?: boolean | undefined
              password?:
                | {
                    disallow_local_part_from_email?: boolean | undefined
                    failed_attempts_allowed?: number | undefined
                    is_available?: boolean | undefined
                    max_sequence?: (number | null) | undefined
                    password_complexity?: number | undefined
                    password_duration?: (number | null) | undefined
                    password_history_length?: (number | null) | undefined
                    password_in_mixed_case?: boolean | undefined
                    password_length?: number | undefined
                  }
                | undefined
              remote_bypass?: number | undefined
            }
          | undefined
        end_user?:
          | {
              enforce_sso?: boolean | undefined
              google_login?: boolean | undefined
              office_365_login?: boolean | undefined
              primary_external_auth?: (string | null) | undefined
              remote_login?: boolean | undefined
              security_policy_id?: bigint | undefined
              security_policy_name?:
                | 'low'
                | 'medium'
                | 'high'
                | 'recommended'
                | 'custom'
                | undefined
              sso_auto_redirect?: boolean | undefined
              two_factor_enforce?: boolean | undefined
              zendesk_login?: boolean | undefined
              facebook_login?: boolean | undefined
            }
          | undefined
      }
    | undefined
  csp_blocking_enabled?: boolean | undefined
  email_agent_when_sensitive_fields_changed?: boolean | undefined
  end_user_session_timeout?: number | undefined
  ip?:
    | {
        enable_agent_ip_restrictions?: boolean | undefined
        ip_ranges?: string | undefined
        ip_restriction_enabled?: boolean | undefined
      }
    | undefined
  maximum_session_duration?: number | undefined
  maximum_session_duration_enabled?: boolean | undefined
  mobile_app_access?: boolean | undefined
  mobile_app_session_timeout?: number | undefined
  two_factor_last_update?: string | undefined
}
type SecuritySettingsResponse = { security_settings?: SecuritySettingsObject | undefined }
type SessionObject = {
  authenticated_at?: (string | null) | undefined
  id: bigint
  last_seen_at?: (string | null) | undefined
  url?: (string | null) | undefined
  user_id?: (bigint | null) | undefined
}
type SessionsResponse = { sessions?: SessionObject[] | undefined }
type SharingAgreementObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  partner_name?: (string | null) | undefined
  remote_subdomain?: string | undefined
  status?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type SharingAgreementsResponse = { sharing_agreements?: SharingAgreementObject[] | undefined }
type SharingAgreementCreateInput = {
  allows_public_comments?: boolean | undefined
  remote_subdomain: string
  sync_custom_fields?: boolean | undefined
  sync_tags?: boolean | undefined
}
type SharingAgreementCreateRequest = { sharing_agreement: SharingAgreementCreateInput }
type SharingAgreementResponse = { sharing_agreement?: SharingAgreementObject | undefined }
type SharingAgreementUpdateInput = {
  status?:
    | 'pending'
    | 'accepted'
    | 'declined'
    | 'inactive'
    | 'failed'
    | 'ssl_error'
    | 'configuration_error'
    | ''
    | null
    | undefined
}
type SharingAgreementUpdateRequest = { sharing_agreement: SharingAgreementUpdateInput }
type TicketSkipObject = {
  created_at?: string | undefined
  id?: bigint | undefined
  reason?: string | undefined
  ticket?:
    | {
        additional_collaborators?: CollaboratorObject[] | undefined
        allow_attachments?: boolean | undefined
        allow_channelback?: boolean | undefined
        assignee_email?: string | undefined
        assignee_id?: (bigint | null) | undefined
        attribute_value_ids?: bigint[] | undefined
        brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
        collaborator_ids?: bigint[] | undefined
        collaborators?: CollaboratorObject[] | undefined
        comment?: TicketCommentObject | undefined
        created_at?: string | undefined
        custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        custom_status_id?: (bigint | null) | undefined
        description?: string | undefined
        due_at?: (string | null) | undefined
        email_cc_ids?: bigint[] | undefined
        email_ccs?: (EmailCCObject[] | null) | undefined
        encoded_id?: string | undefined
        external_id?: (string | null) | undefined
        fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        follower_ids?: bigint[] | undefined
        followers?: FollowerObject[] | undefined
        followup_ids?: bigint[] | undefined
        forum_topic_id?: bigint | undefined
        from_messaging_channel?: boolean | undefined
        generated_timestamp?: number | undefined
        group_id?: (bigint | null) | undefined
        has_incidents?: boolean | undefined
        id?: bigint | undefined
        is_public?: boolean | undefined
        macro_id?: bigint | undefined
        macro_ids?: (bigint | string)[] | undefined
        metadata?: { [x: string]: unknown } | undefined
        organization_id?: (bigint | null) | undefined
        origin_zrn?: string | undefined
        priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
        problem_id?: (bigint | null) | undefined
        raw_subject?: string | undefined
        recipient?:
          | string
          | string[]
          | { email?: string | undefined; name?: string | undefined }
          | undefined
        requester?:
          | string
          | number
          | {
              email?: string | undefined
              locale?: string | undefined
              locale_id?: bigint | undefined
              name?: string | undefined
              organization_id?: bigint | undefined
              role?: string | undefined
              verified?: boolean | undefined
            }
          | undefined
        requester_id?: (bigint | null) | undefined
        safe_update?: boolean | undefined
        satisfaction_probability?: number | undefined
        satisfaction_rating?: { [x: string]: unknown } | undefined
        sharing_agreement_ids?: bigint[] | undefined
        sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
        status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
        subject?: (string | null) | undefined
        submitter_id?: (bigint | null) | undefined
        support_type?: 'agent' | 'ai_agent' | undefined
        suspended_ticket_id?: bigint | undefined
        suspension_type_id?: bigint | undefined
        system_metadata?:
          | { client?: string | undefined; ip_address?: string | undefined }
          | undefined
        tags?: string[] | string | undefined
        tde_workspace?:
          | {
              previous_workspace?:
                | { id?: bigint | undefined; title?: string | undefined }
                | undefined
              type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
              workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
            }
          | undefined
        ticket_form_id?: (bigint | null) | undefined
        tpe_voice_comment?:
          | {
              agent_id?: (bigint | null) | undefined
              answering_machine_detection_status?: (string | null) | undefined
              app_id?: bigint | undefined
              app_name?: (string | null) | undefined
              author_id?: bigint | undefined
              call_connected_at?: (string | null) | undefined
              call_disposition?: (string | null) | undefined
              call_ended_at?: (string | null) | undefined
              call_id?: bigint | undefined
              call_recording_consent?: (string | null) | undefined
              call_recording_consent_action?: (string | null) | undefined
              call_recording_consent_keypress?: (string | null) | undefined
              call_started_at?: string | undefined
              call_type?: (string | null) | undefined
              callback_number?: (string | null) | undefined
              callback_requested_at?: (string | null) | undefined
              completion_status?: (string | null) | undefined
              connection_attempts?: (number | null) | undefined
              consultation_time?: (number | null) | undefined
              direction?: string | undefined
              disconnection_reason?: (string | null) | undefined
              dnis?: (string | null) | undefined
              duration?: (number | null) | undefined
              end_user_id?: (bigint | null) | undefined
              end_user_location?: (string | null) | undefined
              exceeded_queue_time?: (boolean | null) | undefined
              extension?: (string | null) | undefined
              external_id?: string | undefined
              from_line?: string | undefined
              from_line_nickname?: (string | null) | undefined
              hold_time?: (number | null) | undefined
              intent?: (string | null) | undefined
              ivr_destination_group_name?: (string | null) | undefined
              ivr_time_spent?: (number | null) | undefined
              language?: (string | null) | undefined
              line_type?: string | undefined
              longest_hold_time?: (number | null) | undefined
              number_of_holds?: (number | null) | undefined
              outside_business_hours?: (boolean | null) | undefined
              overflowed_to?: (string | null) | undefined
              phone_name?: (string | null) | undefined
              public?: boolean | undefined
              quality_score?: (number | null) | undefined
              queue_name?: (string | null) | undefined
              queue_time?: (number | null) | undefined
              recorded?: boolean | undefined
              recording_time?: (number | null) | undefined
              recording_type?: string | undefined
              recording_url?: (string | null) | undefined
              sentiment_agent?: (string | null) | undefined
              sentiment_call?: (string | null) | undefined
              sentiment_customer?: (string | null) | undefined
              sentiment_trend?: (string | null) | undefined
              short_summary?: (string | null) | undefined
              summary?: (string | null) | undefined
              talk_time?: (number | null) | undefined
              time_to_answer?: (number | null) | undefined
              title?: string | undefined
              to_line?: string | undefined
              to_line_nickname?: (string | null) | undefined
              transcript?: (string | null) | undefined
              via_id?: bigint | undefined
              video_recording_url?: (string | null) | undefined
              voicemail?: (boolean | null) | undefined
              voicemail_requested_at?: (string | null) | undefined
              wait_time?: (number | null) | undefined
            }
          | undefined
        type?: 'problem' | 'incident' | 'question' | 'task' | undefined
        updated_at?: string | undefined
        updated_stamp?: string | undefined
        url?: string | undefined
        via?: ViaObject | undefined
        via_followup_source_id?: bigint | undefined
        via_id?: bigint | undefined
        voice_comment?:
          | {
              answered_by_id?: (bigint | null) | undefined
              call_duration?: number | undefined
              from?: string | undefined
              location?: (string | null) | undefined
              recording_url?: (string | null) | undefined
              to?: string | undefined
              transcription_text?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  ticket_id?: bigint | undefined
  updated_at?: string | undefined
  user_id?: bigint | undefined
}
type TicketSkipsResponse = { skips?: TicketSkipObject[] | undefined }
type TicketSkipCreateInput = { skip: { reason?: string | undefined; ticket_id: bigint } }
type TicketSkipCreation = { skip?: TicketSkipObject | undefined }
type SLAPolicyFilterConditionObject = {
  field?: string | undefined
  operator?: string | undefined
  value?: string | (string | number)[] | undefined
}
type SLAPolicyFilterObject = {
  all?: SLAPolicyFilterConditionObject[] | undefined
  any?: SLAPolicyFilterConditionObject[] | undefined
}
type SLAPolicyMetricObject = {
  business_hours?: boolean | undefined
  metric?: string | undefined
  priority?: string | undefined
  target?: number | undefined
}
type SLAPolicyObject = {
  created_at?: string | undefined
  description?: string | undefined
  filter: SLAPolicyFilterObject
  id?: bigint | undefined
  policy_metrics?: SLAPolicyMetricObject[] | undefined
  position?: number | undefined
  title: string
  updated_at?: string | undefined
  url?: string | undefined
}
type SLAPoliciesResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  sla_policies?: SLAPolicyObject[] | undefined
}
type SLAPolicyFilterConditionInput = {
  field?: string | undefined
  operator?: string | undefined
  value?: (string | null) | number | (string | number)[] | undefined
}
type SLAPolicyFilterInput = {
  all?: (SLAPolicyFilterConditionInput[] | null) | undefined
  any?: (SLAPolicyFilterConditionInput[] | null) | undefined
}
type SLAPolicyMetricSettingsInput = {
  first_reply_time?:
    | {
        activate_on_agent_created_ticket_for_self?: boolean | undefined
        activate_on_agent_ticket_created_for_end_user_with_internal_note?: boolean | undefined
        activate_on_light_agent_on_email_forward_ticket_from_end_user?: boolean | undefined
        activate_on_ticket_created_for_end_user?: boolean | undefined
        fulfill_on_agent_internal_note?: boolean | undefined
      }
    | undefined
  next_reply_time?:
    | {
        activate_on_agent_requested_ticket_with_public_comment_or_internal_note?:
          | boolean
          | undefined
        activate_on_end_user_added_internal_note?: boolean | undefined
        activate_on_light_agent_internal_note?: boolean | undefined
        fulfill_on_non_requesting_agent_internal_note_after_activation?: boolean | undefined
      }
    | undefined
  periodic_update_time?: { activate_on_agent_internal_note?: boolean | undefined } | undefined
}
type SLAPolicyMetricInput = {
  business_hours?: boolean | undefined
  metric?: string | undefined
  priority?: string | undefined
  target?: number | undefined
  target_in_seconds?: number | undefined
}
type SLAPolicyTriggerInput = {
  actions?: { [x: string]: unknown }[] | undefined
  active?: boolean | undefined
  conditions: string
  description?: string | undefined
}
type SLAPolicyInput = {
  description?: (string | null) | undefined
  filter: SLAPolicyFilterInput
  metric_settings?: SLAPolicyMetricSettingsInput | ({ [x: string]: unknown } | null) | undefined
  policy_metrics?: (SLAPolicyMetricInput[] | null) | undefined
  policy_triggers?: (SLAPolicyTriggerInput[] | null) | undefined
  position?: (number | null) | undefined
  title: string
}
type SLAPolicyRequest = { sla_policy: SLAPolicyInput }
type SLAPolicyResponse = { sla_policy?: SLAPolicyObject | undefined }
type SLAPolicyUpdateInput = {
  description?: (string | null) | undefined
  filter?: SLAPolicyFilterInput | ({ [x: string]: unknown } | null) | undefined
  metric_settings?: SLAPolicyMetricSettingsInput | ({ [x: string]: unknown } | null) | undefined
  policy_metrics?: (SLAPolicyMetricInput[] | null) | undefined
  policy_triggers?: (SLAPolicyTriggerInput[] | null) | undefined
  position?: (number | null) | undefined
  title?: (string | null) | undefined
}
type SLAPolicyUpdateRequest = { sla_policy: SLAPolicyUpdateInput }
type SLAPolicyFilterDefinitionResponse = {
  definitions?:
    | {
        all?:
          | {
              group?: string | undefined
              operators?: { title?: string | undefined; value?: string | undefined }[] | undefined
              output_key?: (string | null) | undefined
              target?: (string | null) | undefined
              title?: string | undefined
              title_for_field?: string | undefined
              value?: string | undefined
              values?:
                | {
                    list?:
                      | { title?: string | undefined; value?: (string | null) | undefined }[]
                      | undefined
                    type?: string | undefined
                  }
                | undefined
            }[]
          | undefined
        any?:
          | {
              group?: string | undefined
              operators?: { title?: string | undefined; value?: string | undefined }[] | undefined
              output_key?: (string | null) | undefined
              target?: (string | null) | undefined
              title?: string | undefined
              title_for_field?: string | undefined
              value?: string | undefined
              values?:
                | {
                    list?:
                      | { title?: string | undefined; value?: (string | null) | undefined }[]
                      | undefined
                    type?: string | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type SLAPoliciesReorderRequest = { sla_policy_ids?: (bigint[] | null) | undefined }
type SuspendedTicketObject = {
  attachments?: (AttachmentObject[] | null) | undefined
  author?:
    | { email?: string | undefined; id?: bigint | undefined; name?: string | undefined }
    | undefined
  brand_id?: bigint | undefined
  cause?: string | undefined
  cause_id?: bigint | undefined
  content?: string | undefined
  content_html?: string | undefined
  created_at?: string | undefined
  error_messages?: ({ [x: string]: unknown }[] | null) | undefined
  id?: bigint | undefined
  message_id?: string | undefined
  recipient?: string | undefined
  subject?: string | undefined
  ticket_id?: bigint | undefined
  updated_at?: string | undefined
  url?: string | undefined
  via?: ViaObject | undefined
}
type SuspendedTicketsResponse = { suspended_tickets?: SuspendedTicketObject[] | undefined }
type SuspendedTicketResponse = { suspended_ticket?: SuspendedTicketObject | undefined }
type RecoverSuspendedTicketResponse = { ticket?: TicketObject | undefined }
type SuspendedTicketsAttachmentsResponse = {
  upload?: { attachments?: AttachmentObject[] | undefined; token?: string | undefined } | undefined
}
type SuspendedTicketsExportResponse = {
  export?: { status?: string | undefined; view_id?: string | undefined } | undefined
}
type RecoverSuspendedTicketsResponse = { tickets?: TicketObject[] | undefined }
type TagListTagObject = { count?: number | undefined; name?: string | undefined }
type TagsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  tags?: TagListTagObject[] | undefined
}
type TagCountObject = { refreshed_at?: string | undefined; value?: number | undefined }
type TagCountResponse = { count?: TagCountObject | undefined }
type TargetFailureObject = {
  consecutive_failure_count?: number | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  raw_request?: string | undefined
  raw_response?: string | undefined
  status_code?: number | undefined
  target_name?: string | undefined
  url?: string | undefined
}
type TargetFailuresResponse = { target_failures?: TargetFailureObject[] | undefined }
type TargetFailureResponse = { target_failure?: TargetFailureObject | undefined }
type TargetObject = {
  active?: boolean | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  title: string
  type: string
}
type TargetsResponse = { targets?: TargetObject[] | undefined }
type TargetResponse = { target?: TargetObject | undefined }
type TaskObject = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name: string
  position?: number | undefined
  required?: boolean | undefined
  updated_at?: string | undefined
}
type TaskListTemplateObject = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  is_required?: boolean | undefined
  name: string
  task_count?: number | undefined
  tasks?: TaskObject[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type TaskListTemplatesResponse = {
  links?: { next: string | null; prev: string | null } | undefined
  meta?:
    | { after_cursor: string | null; before_cursor: string | null; has_more: boolean }
    | undefined
  task_list_templates?: TaskListTemplateObject[] | undefined
}
type TaskListTemplateCreateRequest = { task_list_template?: TaskListTemplateObject | undefined }
type TaskListTemplateResponse = { task_list_template?: TaskListTemplateObject | undefined }
type TaskListTemplateUpdateRequest = {
  task_list_template: {
    description?: string | undefined
    is_active?: boolean | undefined
    is_required?: boolean | undefined
    name?: string | undefined
    tasks?:
      | (
          | { _destroy: true; id: string }
          | {
              description?: string | undefined
              id: string
              name?: string | undefined
              position?: number | undefined
              required?: boolean | undefined
            }
          | {
              description?: string | undefined
              name: string
              position?: number | undefined
              required?: boolean | undefined
            }
        )[]
      | undefined
  }
}
type TasksByTaskListTemplateIdResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  tasks?: TaskObject[] | undefined
}
type TaskListInstanceObject = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  is_completed?: boolean | undefined
  is_required?: boolean | undefined
  name?: string | undefined
  task_count?: number | undefined
  ticket_id?: string | undefined
  updated_at?: string | undefined
}
type TaskListInstanceResponse = { task_list?: TaskListInstanceObject | undefined }
type TaskListInstanceUpdateRequest = {
  task_list?: { description?: string | undefined; name?: string | undefined } | undefined
}
type TaskItemInstanceObject = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  is_completed?: boolean | undefined
  is_custom?: boolean | undefined
  name: string
  updated_at?: string | undefined
  url?: string | undefined
}
type TaskItemInstancesResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  task_items?: TaskItemInstanceObject[] | undefined
}
type TaskItemCreateRequest = {
  task_item?: { description?: string | undefined; name: string } | undefined
}
type TaskItemInstanceResponse = { task_item?: TaskItemInstanceObject | undefined }
type TaskItemUpdateRequest = {
  task_item?:
    | {
        completed?: boolean | undefined
        description?: string | undefined
        name?: string | undefined
      }
    | undefined
}
type TicketAuditObject = {
  author_id?: bigint | undefined
  created_at?: string | undefined
  events?: { [x: string]: unknown }[] | undefined
  id?: bigint | undefined
  metadata?: { [x: string]: unknown } | undefined
  ticket_id?: bigint | undefined
  via?: TicketAuditViaObject | undefined
}
type TicketAuditsResponse = {
  after_cursor?: string | undefined
  after_url?: string | undefined
  audits?: TicketAuditObject[] | undefined
  before_cursor?: string | undefined
  before_url?: string | undefined
}
type TicketContentPin = {
  account_id?: number | undefined
  content_id?: string | undefined
  content_type?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  locale?: (string | null) | undefined
  ticket_id?: number | undefined
  url?: string | undefined
}
type TicketFieldCustomStatusObject = {
  active?: boolean | undefined
  agent_label?: string | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  end_user_description?: string | undefined
  end_user_label?: string | undefined
  id?: bigint | undefined
  status_category?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type SystemFieldOptionObject = { name?: string | undefined; value?: string | undefined }
type TicketFieldObject = {
  active?: boolean | undefined
  active_forms_count?: number | undefined
  agent_can_edit?: boolean | undefined
  agent_description?: string | undefined
  collapsed_for_agents?: boolean | undefined
  created_at?: string | undefined
  creator_app_name?: string | undefined
  creator_user_id?: bigint | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  custom_statuses?: TicketFieldCustomStatusObject[] | undefined
  description?: string | undefined
  editable_in_portal?: boolean | undefined
  id?: bigint | undefined
  key?: (string | null) | undefined
  max_selections?: number | undefined
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  raw_title_in_portal?: string | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?: { [x: string]: unknown } | undefined
  relationship_target_publicly_listable?: boolean | undefined
  relationship_target_type?: string | undefined
  removable?: boolean | undefined
  required?: boolean | undefined
  required_in_portal?: boolean | undefined
  sub_type_id?: bigint | undefined
  system_field_options?: SystemFieldOptionObject[] | undefined
  tag?: (string | null) | undefined
  title: string
  title_in_portal?: string | undefined
  type: string
  updated_at?: string | undefined
  url?: string | undefined
  visible_in_portal?: boolean | undefined
}
type TicketFieldsResponse = { ticket_fields?: TicketFieldObject[] | undefined }
type TicketFieldOptionInput = {
  default?: boolean | undefined
  name?: string | undefined
  raw_name?: string | undefined
  value?: string | undefined
}
type TicketFieldRelationshipFilterCondition = {
  field?: string | undefined
  operator?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type TicketFieldInput = {
  active?: boolean | undefined
  agent_description?: string | undefined
  collapsed_for_agents?: boolean | undefined
  custom_field_options?: TicketFieldOptionInput[] | undefined
  description?: string | undefined
  editable_in_portal?: boolean | undefined
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  raw_title_in_portal?: string | undefined
  regexp_for_validation?: string | undefined
  relationship_filter?:
    | {
        all?: TicketFieldRelationshipFilterCondition[] | undefined
        any?: TicketFieldRelationshipFilterCondition[] | undefined
      }
    | undefined
  relationship_target_type?: string | undefined
  required?: boolean | undefined
  required_in_portal?: boolean | undefined
  sub_type_id?: number | undefined
  tag?: string | undefined
  title: string
  title_in_portal?: string | undefined
  type?:
    | 'checkbox'
    | 'partialcreditcard'
    | 'partial_credit_card'
    | 'date'
    | 'decimal'
    | 'integer'
    | 'regexp'
    | 'text'
    | 'textarea'
    | 'tagger'
    | 'multiselect'
    | 'lookup'
    | 'multi_lookup'
    | undefined
  visible_in_portal?: boolean | undefined
}
type TicketFieldRequest = { ticket_field: TicketFieldInput }
type TicketFieldResponse = { ticket_field?: TicketFieldObject | undefined }
type TicketFieldOptionUpdateInput = {
  default?: boolean | undefined
  id?: bigint | string | undefined
  name?: string | undefined
  raw_name?: string | undefined
  value?: string | undefined
}
type TicketFieldUpdateInput = {
  active?: boolean | undefined
  agent_description?: string | undefined
  collapsed_for_agents?: boolean | undefined
  custom_field_options?: TicketFieldOptionUpdateInput[] | undefined
  description?: string | undefined
  editable_in_portal?: boolean | undefined
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  raw_title_in_portal?: string | undefined
  regexp_for_validation?: string | undefined
  relationship_filter?:
    | {
        all?: TicketFieldRelationshipFilterCondition[] | undefined
        any?: TicketFieldRelationshipFilterCondition[] | undefined
      }
    | undefined
  required?: boolean | undefined
  required_in_portal?: boolean | undefined
  sub_type_id?: number | undefined
  tag?: string | undefined
  title?: string | undefined
  title_in_portal?: string | undefined
  visible_in_portal?: boolean | undefined
}
type TicketFieldUpdateRequest = { ticket_field: TicketFieldUpdateInput }
type CustomFieldOptionsResponse = {
  count?: number | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type CustomFieldOptionResponse = { custom_field_option?: CustomFieldOptionObject | undefined }
type TicketFieldCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type TicketFieldsShowManyResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  ticket_fields: TicketFieldObject[]
}
type TicketFormObject = {
  active?: boolean | undefined
  agent_conditions?: { [x: string]: unknown }[] | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  deleted_at?: string | undefined
  display_name?: string | undefined
  end_user_conditions?: { [x: string]: unknown }[] | undefined
  end_user_visible?: boolean | undefined
  form_type?: 'standard' | 'service_catalog' | undefined
  id?: bigint | undefined
  in_all_brands?: boolean | undefined
  name: string
  position?: number | undefined
  raw_display_name?: string | undefined
  raw_name?: string | undefined
  restricted_brand_ids?: bigint[] | undefined
  ticket_field_ids?: bigint[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type TicketFormsResponse = { ticket_forms?: TicketFormObject[] | undefined }
type TicketFormAgentConditionObject = {
  child_fields: {
    id: bigint
    is_required?: (boolean | null) | undefined
    required_on_statuses?:
      | ({
          custom_statuses?: bigint[] | undefined
          statuses?: (('new' | 'open' | 'pending' | 'hold' | 'solved')[] | null) | undefined
          type?: 'ALL_STATUSES' | 'SOME_STATUSES' | 'NO_STATUSES' | null | undefined
        } | null)
      | undefined
  }[]
  parent_field_id: bigint
  value: (string | null) | boolean
}
type TicketFormEndUserConditionObject = {
  child_fields: { id: bigint; is_required?: (boolean | null) | undefined }[]
  parent_field_id: bigint
  value: (string | null) | boolean
}
type TicketFormInput = {
  active?: boolean | undefined
  agent_conditions?: (TicketFormAgentConditionObject[] | null) | undefined
  default?: boolean | undefined
  display_name?: (string | null) | undefined
  end_user_conditions?: (TicketFormEndUserConditionObject[] | null) | undefined
  end_user_visible?: boolean | undefined
  form_type?: 'standard' | 'service_catalog' | null | undefined
  in_all_brands?: (boolean | null) | undefined
  name?: string | undefined
  position?: (number | null) | undefined
  raw_display_name?: (string | null) | undefined
  raw_name?: (string | null) | undefined
  restricted_brand_ids?: (bigint[] | null) | undefined
  ticket_field_ids?: (bigint[] | null) | undefined
}
type TicketFormRequest = { ticket_form: TicketFormInput }
type TicketFormResponse = { ticket_form?: TicketFormObject | undefined }
type TicketFormUpdateInput = {
  active?: boolean | undefined
  agent_conditions?: (TicketFormAgentConditionObject[] | null) | undefined
  default?: boolean | undefined
  display_name?: (string | null) | undefined
  end_user_conditions?: (TicketFormEndUserConditionObject[] | null) | undefined
  end_user_visible?: boolean | undefined
  in_all_brands?: (boolean | null) | undefined
  name?: string | undefined
  position?: number | undefined
  raw_display_name?: (string | null) | undefined
  raw_name?: (string | null) | undefined
  restricted_brand_ids?: (bigint[] | null) | undefined
  ticket_field_ids?: (bigint[] | null) | undefined
}
type TicketFormUpdateRequest = { ticket_form: TicketFormUpdateInput }
type CloneTicketFormRequest = { prepend_clone_title?: (boolean | null) | undefined }
type TicketFormStatusesCreateParams = { custom_status_id: bigint }
type TicketFormStatusesParams = { ticket_form_status: TicketFormStatusesCreateParams[] }
type TicketFormStatusesUpdateParams = {
  _destroy?: string | undefined
  custom_status_id?: bigint | undefined
  id?: string | undefined
}
type UpdateTicketFormStatusesParams = { ticket_form_status: TicketFormStatusesUpdateParams[] }
type ReorderTicketFormsRequest = { ticket_form_ids: bigint[] }
type TicketMetricObject = {
  agent_wait_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  assigned_at?: string | undefined
  assignee_stations?: number | undefined
  assignee_updated_at?: string | undefined
  created_at?: string | undefined
  custom_status_updated_at?: string | undefined
  first_resolution_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  full_resolution_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  group_stations?: number | undefined
  id?: bigint | undefined
  initially_assigned_at?: string | undefined
  latest_comment_added_at?: string | undefined
  on_hold_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  reopens?: number | undefined
  replies?: number | undefined
  reply_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  reply_time_in_seconds?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  requester_updated_at?: string | undefined
  requester_wait_time_in_minutes?:
    | { business?: number | undefined; calendar?: number | undefined }
    | undefined
  solved_at?: string | undefined
  status_updated_at?: string | undefined
  ticket_id?: bigint | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type TicketMetricsResponse = { ticket_metrics?: TicketMetricObject[] | undefined }
type TicketMetricsByTicketMetricIdResponse = { ticket_metric?: TicketMetricObject | undefined }
type TicketCreateRequest = {
  system_metadata?: { [x: string]: unknown } | undefined
  ticket: TicketObject
}
type TicketUpdateRequest = {
  system_metadata?: { [x: string]: unknown } | undefined
  ticket?: TicketObject | undefined
}
type AuditObject = {
  author_id?: bigint | undefined
  created_at?: string | undefined
  events?:
    | {
        body?: string | undefined
        field_name?: string | undefined
        id?: bigint | undefined
        type?: string | undefined
        value?: string | number | undefined
      }[]
    | undefined
  id?: bigint | undefined
  metadata?: { [x: string]: unknown } | undefined
  ticket_id?: bigint | undefined
  via?: ViaObject | undefined
}
type TicketUpdateResponse = { audit?: AuditObject | undefined; ticket?: TicketObject | undefined }
type TicketAuditsResponseNoneCursor = {
  audits?: TicketAuditObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type TicketAuditResponse = { audit?: TicketAuditObject | undefined }
type TicketAuditsCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type ListTicketCollaboratorsResponse = { [x: string]: unknown }
type TicketCommentsCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type ConversationLogObject = {
  attachments: AttachmentObject[]
  author: {
    type?: string | undefined
    'zen:sunco:user_id'?: (string | null) | undefined
    'zen:support:user_id'?: bigint | undefined
  }
  content: { [x: string]: unknown }
  created_at: string
  id: string
  metadata: { [x: string]: unknown }
  reference: string
  type: string
}
type ConversationLogResponse = {
  events?: ConversationLogObject[] | undefined
  links?: { next?: (string | null) | undefined; prev?: (string | null) | undefined } | undefined
  meta?:
    | {
        after_cursor?: (string | null) | undefined
        before_cursor?: (string | null) | undefined
        has_more?: boolean | undefined
      }
    | undefined
}
type ListTicketEmailCCsResponse = { [x: string]: unknown }
type ListTicketFollowersResponse = { [x: string]: unknown }
type ListTicketIncidentsResponse = { [x: string]: unknown }
type TicketMergeInput = {
  ids: number[]
  source_comment?: string | undefined
  source_comment_is_public?: boolean | undefined
  target_comment?: string | undefined
  target_comment_is_public?: boolean | undefined
}
type ParentTicketTaskItemObject = {
  description?: (string | null) | undefined
  name?: string | undefined
  task_item_id?: string | undefined
}
type ParentTicketTaskReferenceObject = {
  parent_ticket_id?: (number | null) | undefined
  private?: boolean | undefined
  status?: (string | null) | undefined
  task_items?: ParentTicketTaskItemObject[] | undefined
}
type ParentTicketTasksResponse = {
  parent_ticket_tasks?: ParentTicketTaskReferenceObject[] | undefined
}
type TicketRelatedInformation = {
  followup_source_ids?: string[] | undefined
  from_archive?: boolean | undefined
  incidents?: number | undefined
  jira_issue_ids?: string[] | undefined
  topic_id?: (string | null) | undefined
}
type SatisfactionRatingInput = {
  comment?: (string | null) | undefined
  reason_code?: (bigint | null) | undefined
  score: 'good' | 'bad'
}
type SatisfactionRatingRequest = { satisfaction_rating: SatisfactionRatingInput }
type SubticketCreateRequest = {
  subticket: {
    assignee_id?: bigint | undefined
    comment: { body: string; public?: boolean | undefined }
    requester_id?: bigint | undefined
    status?: 'new' | 'open' | 'pending' | 'hold' | undefined
    subject: string
  }
}
type TaskObjectLinkUserObject = { id?: bigint | undefined; name?: string | undefined }
type TaskObjectLinkObject = {
  created_at?: string | undefined
  created_by?: TaskObjectLinkUserObject | undefined
  id?: string | undefined
  linked_object_status?: (string | null) | undefined
  nice_id?: (number | null) | undefined
  object_type?: 'Ticket' | undefined
  private?: boolean | undefined
  task_item_instance_id?: string | undefined
  updated_at?: string | undefined
  updated_by?: TaskObjectLinkUserObject | undefined
}
type SubticketCreateResponse = {
  subticket?: { id?: number | undefined } | undefined
  task_object_link?: TaskObjectLinkObject | undefined
}
type TaskObjectLinksResponse = { task_object_links?: TaskObjectLinkObject[] | undefined }
type TaskObjectLinkCreateRequest = { link: { linked_object_id: string; object_type: 'Ticket' } }
type TaskObjectLinkResponse = { task_object_link?: TaskObjectLinkObject | undefined }
type TaskListObject = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  is_required?: boolean | undefined
  name?: string | undefined
  task_count?: number | undefined
  task_list_template_id?: (string | null) | undefined
  ticket_id?: string | undefined
  updated_at?: string | undefined
}
type TaskListByTicketIdResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  task_lists?: TaskListObject[] | undefined
}
type TaskListCreateRequest = {
  task_list?:
    | {
        description?: string | undefined
        name?: string | undefined
        task_list_template_id?: string | undefined
      }
    | undefined
}
type TaskListCreateResponse = { task_list?: TaskListObject | undefined }
type TaskListValidationErrorResponse = {
  description?: string | undefined
  details?: { [x: string]: { description?: string | undefined }[] } | undefined
  error?: string | undefined
}
type TicketsCreateRequest = { tickets?: TicketObject[] | undefined }
type TicketsUpdateRequest =
  | {
      ticket: {
        additional_collaborators?: CollaboratorObject[] | undefined
        allow_attachments?: boolean | undefined
        allow_channelback?: boolean | undefined
        assignee_email?: string | undefined
        assignee_id?: (bigint | null) | undefined
        attribute_value_ids?: bigint[] | undefined
        brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
        collaborator_ids?: bigint[] | undefined
        collaborators?: CollaboratorObject[] | undefined
        comment?: TicketCommentObject | undefined
        created_at?: string | undefined
        custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        custom_status_id?: (bigint | null) | undefined
        description?: string | undefined
        due_at?: (string | null) | undefined
        email_cc_ids?: bigint[] | undefined
        email_ccs?: (EmailCCObject[] | null) | undefined
        encoded_id?: string | undefined
        external_id?: (string | null) | undefined
        fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        follower_ids?: bigint[] | undefined
        followers?: FollowerObject[] | undefined
        followup_ids?: bigint[] | undefined
        forum_topic_id?: bigint | undefined
        from_messaging_channel?: boolean | undefined
        generated_timestamp?: number | undefined
        group_id?: (bigint | null) | undefined
        has_incidents?: boolean | undefined
        id?: bigint | undefined
        is_public?: boolean | undefined
        macro_id?: bigint | undefined
        macro_ids?: (bigint | string)[] | undefined
        metadata?: { [x: string]: unknown } | undefined
        organization_id?: (bigint | null) | undefined
        origin_zrn?: string | undefined
        priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
        problem_id?: (bigint | null) | undefined
        raw_subject?: string | undefined
        recipient?:
          | string
          | string[]
          | { email?: string | undefined; name?: string | undefined }
          | undefined
        requester?:
          | string
          | number
          | {
              email?: string | undefined
              locale?: string | undefined
              locale_id?: bigint | undefined
              name?: string | undefined
              organization_id?: bigint | undefined
              role?: string | undefined
              verified?: boolean | undefined
            }
          | undefined
        requester_id?: (bigint | null) | undefined
        safe_update?: boolean | undefined
        satisfaction_probability?: number | undefined
        satisfaction_rating?: { [x: string]: unknown } | undefined
        sharing_agreement_ids?: bigint[] | undefined
        sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
        status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
        subject?: (string | null) | undefined
        submitter_id?: (bigint | null) | undefined
        support_type?: 'agent' | 'ai_agent' | undefined
        suspended_ticket_id?: bigint | undefined
        suspension_type_id?: bigint | undefined
        system_metadata?:
          | { client?: string | undefined; ip_address?: string | undefined }
          | undefined
        tags?: string[] | string | undefined
        tde_workspace?:
          | {
              previous_workspace?:
                | { id?: bigint | undefined; title?: string | undefined }
                | undefined
              type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
              workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
            }
          | undefined
        ticket_form_id?: (bigint | null) | undefined
        tpe_voice_comment?:
          | {
              agent_id?: (bigint | null) | undefined
              answering_machine_detection_status?: (string | null) | undefined
              app_id?: bigint | undefined
              app_name?: (string | null) | undefined
              author_id?: bigint | undefined
              call_connected_at?: (string | null) | undefined
              call_disposition?: (string | null) | undefined
              call_ended_at?: (string | null) | undefined
              call_id?: bigint | undefined
              call_recording_consent?: (string | null) | undefined
              call_recording_consent_action?: (string | null) | undefined
              call_recording_consent_keypress?: (string | null) | undefined
              call_started_at?: string | undefined
              call_type?: (string | null) | undefined
              callback_number?: (string | null) | undefined
              callback_requested_at?: (string | null) | undefined
              completion_status?: (string | null) | undefined
              connection_attempts?: (number | null) | undefined
              consultation_time?: (number | null) | undefined
              direction?: string | undefined
              disconnection_reason?: (string | null) | undefined
              dnis?: (string | null) | undefined
              duration?: (number | null) | undefined
              end_user_id?: (bigint | null) | undefined
              end_user_location?: (string | null) | undefined
              exceeded_queue_time?: (boolean | null) | undefined
              extension?: (string | null) | undefined
              external_id?: string | undefined
              from_line?: string | undefined
              from_line_nickname?: (string | null) | undefined
              hold_time?: (number | null) | undefined
              intent?: (string | null) | undefined
              ivr_destination_group_name?: (string | null) | undefined
              ivr_time_spent?: (number | null) | undefined
              language?: (string | null) | undefined
              line_type?: string | undefined
              longest_hold_time?: (number | null) | undefined
              number_of_holds?: (number | null) | undefined
              outside_business_hours?: (boolean | null) | undefined
              overflowed_to?: (string | null) | undefined
              phone_name?: (string | null) | undefined
              public?: boolean | undefined
              quality_score?: (number | null) | undefined
              queue_name?: (string | null) | undefined
              queue_time?: (number | null) | undefined
              recorded?: boolean | undefined
              recording_time?: (number | null) | undefined
              recording_type?: string | undefined
              recording_url?: (string | null) | undefined
              sentiment_agent?: (string | null) | undefined
              sentiment_call?: (string | null) | undefined
              sentiment_customer?: (string | null) | undefined
              sentiment_trend?: (string | null) | undefined
              short_summary?: (string | null) | undefined
              summary?: (string | null) | undefined
              talk_time?: (number | null) | undefined
              time_to_answer?: (number | null) | undefined
              title?: string | undefined
              to_line?: string | undefined
              to_line_nickname?: (string | null) | undefined
              transcript?: (string | null) | undefined
              via_id?: bigint | undefined
              video_recording_url?: (string | null) | undefined
              voicemail?: (boolean | null) | undefined
              voicemail_requested_at?: (string | null) | undefined
              wait_time?: (number | null) | undefined
            }
          | undefined
        type?: 'problem' | 'incident' | 'question' | 'task' | undefined
        updated_at?: string | undefined
        updated_stamp?: string | undefined
        url?: string | undefined
        via?: ViaObject | undefined
        via_followup_source_id?: bigint | undefined
        via_id?: bigint | undefined
        voice_comment?:
          | {
              answered_by_id?: (bigint | null) | undefined
              call_duration?: number | undefined
              from?: string | undefined
              location?: (string | null) | undefined
              recording_url?: (string | null) | undefined
              to?: string | undefined
              transcription_text?: (string | null) | undefined
            }
          | undefined
        additional_tags?: string[] | undefined
        remove_tags?: string[] | undefined
      }
    }
  | {
      tickets: {
        additional_collaborators?: CollaboratorObject[] | undefined
        allow_attachments?: boolean | undefined
        allow_channelback?: boolean | undefined
        assignee_email?: string | undefined
        assignee_id?: (bigint | null) | undefined
        attribute_value_ids?: bigint[] | undefined
        brand_id?: bigint | string | ({ [x: string]: unknown } | null) | undefined
        collaborator_ids?: bigint[] | undefined
        collaborators?: CollaboratorObject[] | undefined
        comment?: TicketCommentObject | undefined
        created_at?: string | undefined
        custom_fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        custom_status_id?: (bigint | null) | undefined
        description?: string | undefined
        due_at?: (string | null) | undefined
        email_cc_ids?: bigint[] | undefined
        email_ccs?: (EmailCCObject[] | null) | undefined
        encoded_id?: string | undefined
        external_id?: (string | null) | undefined
        fields?: (TicketFieldValueInput | { [x: string]: unknown })[] | undefined
        follower_ids?: bigint[] | undefined
        followers?: FollowerObject[] | undefined
        followup_ids?: bigint[] | undefined
        forum_topic_id?: bigint | undefined
        from_messaging_channel?: boolean | undefined
        generated_timestamp?: number | undefined
        group_id?: (bigint | null) | undefined
        has_incidents?: boolean | undefined
        id: bigint
        is_public?: boolean | undefined
        macro_id?: bigint | undefined
        macro_ids?: (bigint | string)[] | undefined
        metadata?: { [x: string]: unknown } | undefined
        organization_id?: (bigint | null) | undefined
        origin_zrn?: string | undefined
        priority?: 'urgent' | 'high' | 'normal' | 'low' | undefined
        problem_id?: (bigint | null) | undefined
        raw_subject?: string | undefined
        recipient?:
          | string
          | string[]
          | { email?: string | undefined; name?: string | undefined }
          | undefined
        requester?:
          | string
          | number
          | {
              email?: string | undefined
              locale?: string | undefined
              locale_id?: bigint | undefined
              name?: string | undefined
              organization_id?: bigint | undefined
              role?: string | undefined
              verified?: boolean | undefined
            }
          | undefined
        requester_id?: (bigint | null) | undefined
        safe_update?: boolean | undefined
        satisfaction_probability?: number | undefined
        satisfaction_rating?: { [x: string]: unknown } | undefined
        sharing_agreement_ids?: bigint[] | undefined
        sharing_agreements?: SharingAgreementInput | SharingAgreementInput[] | undefined
        status?: 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | undefined
        subject?: (string | null) | undefined
        submitter_id?: (bigint | null) | undefined
        support_type?: 'agent' | 'ai_agent' | undefined
        suspended_ticket_id?: bigint | undefined
        suspension_type_id?: bigint | undefined
        system_metadata?:
          | { client?: string | undefined; ip_address?: string | undefined }
          | undefined
        tags?: string[] | string | undefined
        tde_workspace?:
          | {
              previous_workspace?:
                | { id?: bigint | undefined; title?: string | undefined }
                | undefined
              type?: 'ADD' | 'CHANGE' | 'DELETE' | undefined
              workspace?: { id?: bigint | undefined; title?: string | undefined } | undefined
            }
          | undefined
        ticket_form_id?: (bigint | null) | undefined
        tpe_voice_comment?:
          | {
              agent_id?: (bigint | null) | undefined
              answering_machine_detection_status?: (string | null) | undefined
              app_id?: bigint | undefined
              app_name?: (string | null) | undefined
              author_id?: bigint | undefined
              call_connected_at?: (string | null) | undefined
              call_disposition?: (string | null) | undefined
              call_ended_at?: (string | null) | undefined
              call_id?: bigint | undefined
              call_recording_consent?: (string | null) | undefined
              call_recording_consent_action?: (string | null) | undefined
              call_recording_consent_keypress?: (string | null) | undefined
              call_started_at?: string | undefined
              call_type?: (string | null) | undefined
              callback_number?: (string | null) | undefined
              callback_requested_at?: (string | null) | undefined
              completion_status?: (string | null) | undefined
              connection_attempts?: (number | null) | undefined
              consultation_time?: (number | null) | undefined
              direction?: string | undefined
              disconnection_reason?: (string | null) | undefined
              dnis?: (string | null) | undefined
              duration?: (number | null) | undefined
              end_user_id?: (bigint | null) | undefined
              end_user_location?: (string | null) | undefined
              exceeded_queue_time?: (boolean | null) | undefined
              extension?: (string | null) | undefined
              external_id?: string | undefined
              from_line?: string | undefined
              from_line_nickname?: (string | null) | undefined
              hold_time?: (number | null) | undefined
              intent?: (string | null) | undefined
              ivr_destination_group_name?: (string | null) | undefined
              ivr_time_spent?: (number | null) | undefined
              language?: (string | null) | undefined
              line_type?: string | undefined
              longest_hold_time?: (number | null) | undefined
              number_of_holds?: (number | null) | undefined
              outside_business_hours?: (boolean | null) | undefined
              overflowed_to?: (string | null) | undefined
              phone_name?: (string | null) | undefined
              public?: boolean | undefined
              quality_score?: (number | null) | undefined
              queue_name?: (string | null) | undefined
              queue_time?: (number | null) | undefined
              recorded?: boolean | undefined
              recording_time?: (number | null) | undefined
              recording_type?: string | undefined
              recording_url?: (string | null) | undefined
              sentiment_agent?: (string | null) | undefined
              sentiment_call?: (string | null) | undefined
              sentiment_customer?: (string | null) | undefined
              sentiment_trend?: (string | null) | undefined
              short_summary?: (string | null) | undefined
              summary?: (string | null) | undefined
              talk_time?: (number | null) | undefined
              time_to_answer?: (number | null) | undefined
              title?: string | undefined
              to_line?: string | undefined
              to_line_nickname?: (string | null) | undefined
              transcript?: (string | null) | undefined
              via_id?: bigint | undefined
              video_recording_url?: (string | null) | undefined
              voicemail?: (boolean | null) | undefined
              voicemail_requested_at?: (string | null) | undefined
              wait_time?: (number | null) | undefined
            }
          | undefined
        type?: 'problem' | 'incident' | 'question' | 'task' | undefined
        updated_at?: string | undefined
        updated_stamp?: string | undefined
        url?: string | undefined
        via?: ViaObject | undefined
        via_followup_source_id?: bigint | undefined
        via_id?: bigint | undefined
        voice_comment?:
          | {
              answered_by_id?: (bigint | null) | undefined
              call_duration?: number | undefined
              from?: string | undefined
              location?: (string | null) | undefined
              recording_url?: (string | null) | undefined
              to?: string | undefined
              transcription_text?: (string | null) | undefined
            }
          | undefined
        additional_tags?: string[] | undefined
        remove_tags?: string[] | undefined
      }[]
    }
type TriggerCategoryRuleCounts = {
  active_count?: bigint | undefined
  inactive_count?: bigint | undefined
}
type TriggerCategory = {
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  position?: bigint | undefined
  updated_at?: string | undefined
}
type TriggerCategoryResponse = { trigger_category?: TriggerCategory | undefined }
type TriggerCategoryRequest = { name?: string | undefined; position?: bigint | undefined }
type TriggerCategoryBatchRequest = { id: string; position: bigint }
type TriggerBatchRequest = {
  active?: boolean | undefined
  category_id?: string | undefined
  id: string
  position?: bigint | undefined
}
type BatchJobRequest = {
  job?:
    | {
        action?: 'patch' | undefined
        items?:
          | {
              trigger_categories?: TriggerCategoryBatchRequest[] | undefined
              triggers?: TriggerBatchRequest[] | undefined
            }
          | undefined
      }
    | undefined
}
type BatchErrorItem = {
  code: string
  detail?: string | undefined
  id?: string | undefined
  links?: { [x: string]: unknown } | undefined
  source?: { [x: string]: unknown } | undefined
  status?: string | undefined
  title: string
  trigger_id?: string | undefined
}
type TriggerObject = {
  actions: TriggerActionObject[]
  active?: boolean | undefined
  all?: TriggerConditionObject[] | undefined
  any?: TriggerConditionObject[] | undefined
  brand_id?: bigint | undefined
  category?: { name?: string | undefined; position?: number | undefined } | undefined
  category_id?: (string | null) | undefined
  conditions?: TriggerConditionsObject | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  restriction?: ({ [x: string]: unknown } | null) | undefined
  title: string
  updated_at?: string | undefined
  url?: string | undefined
}
type BatchJobResponse = {
  errors?: BatchErrorItem[] | undefined
  results?:
    | { trigger_categories?: TriggerCategory[] | undefined; triggers?: TriggerObject[] | undefined }
    | undefined
  status?: 'complete' | 'failed' | undefined
}
type TriggersResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  triggers?: TriggerObject[] | undefined
}
type TriggerWithCategoryRequest = { trigger?: TriggerObject | undefined }
type TriggerResponse = { trigger?: TriggerObject | undefined }
type TriggerUpdateObject = {
  actions?: TriggerActionObject[] | undefined
  active?: boolean | undefined
  all?: TriggerConditionObject[] | undefined
  any?: TriggerConditionObject[] | undefined
  brand_id?: bigint | undefined
  category?: { name?: string | undefined; position?: number | undefined } | undefined
  category_id?: (string | null) | undefined
  conditions?: TriggerConditionsObject | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  id?: bigint | undefined
  position?: number | undefined
  raw_title?: string | undefined
  restriction?: ({ [x: string]: unknown } | null) | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type TriggerUpdateRequest = { trigger?: TriggerUpdateObject | undefined }
type TriggerSnapshotObject = {
  actions?: TriggerActionObject[] | undefined
  active?: boolean | undefined
  category_name?: (string | null) | undefined
  conditions?: TriggerConditionsObject | undefined
  description?: (string | null) | undefined
  title?: string | undefined
}
type TriggerChangeObject = {
  change?: string | undefined
  content?: boolean | (string | null) | number | (string | number | boolean)[] | undefined
}
type TriggerActionDiffObject = {
  field?: TriggerChangeObject[] | undefined
  value?: TriggerChangeObject[] | undefined
}
type TriggerConditionDiffObject = {
  field?: TriggerChangeObject[] | undefined
  operator?: TriggerChangeObject[] | undefined
  value?: TriggerChangeObject[] | undefined
}
type TriggerConditionsDiffObject = {
  all?: (TriggerConditionDiffObject[] | null) | undefined
  any?: (TriggerConditionDiffObject[] | null) | undefined
}
type TriggerRevisionsResponse = {
  after_cursor?: (string | null) | undefined
  after_url?: (string | null) | undefined
  before_cursor?: (string | null) | undefined
  before_url?: (string | null) | undefined
  count?: number | undefined
  trigger_revisions?:
    | {
        author_id?: bigint | undefined
        created_at?: string | undefined
        id?: bigint | undefined
        snapshot?: TriggerSnapshotObject | undefined
        url?: string | undefined
        diff?:
          | {
              actions?: TriggerActionDiffObject[] | undefined
              active?: TriggerChangeObject[] | undefined
              category_name?: TriggerChangeObject[] | undefined
              conditions?: TriggerConditionsDiffObject | undefined
              description?: TriggerChangeObject[] | undefined
              source_id?: bigint | undefined
              target_id?: bigint | undefined
              title?: TriggerChangeObject[] | undefined
            }
          | undefined
      }[]
    | undefined
  users?: UserObject[] | undefined
}
type TriggerRevisionErrorResponse = {
  error?: { message?: string | undefined; title?: string | undefined } | undefined
}
type TriggerRevisionObject = {
  author_id?: bigint | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  snapshot?: TriggerSnapshotObject | undefined
  url?: string | undefined
}
type TriggerRevisionResponse = {
  trigger_revision?: TriggerRevisionObject | undefined
  users?: UserObject[] | undefined
}
type TriggerActionDefinitionObject = {
  group?: string | undefined
  nullable?: boolean | undefined
  repeatable?: boolean | undefined
  subject?: string | undefined
  title?: string | undefined
  type?: string | undefined
  values?:
    | { enabled?: boolean | undefined; title?: string | undefined; value?: string | undefined }[]
    | undefined
}
type TriggerDefinitionObject = {
  actions?: TriggerActionDefinitionObject[] | undefined
  conditions_all?: TriggerConditionDefinitionObjectAll[] | undefined
  conditions_any?: TriggerConditionDefinitionObjectAny[] | undefined
}
type TriggerDefinitionResponse = { definitions?: TriggerDefinitionObject | undefined }
type TriggerLimitsResponse = { count?: bigint | undefined; limit?: bigint | undefined }
type TriggerReorderRequest = { trigger_ids: bigint[] }
type TriggerBulkUpdateItem = {
  active?: boolean | undefined
  category_id?: string | undefined
  id: bigint
  position?: number | undefined
}
type TriggerBulkUpdateRequest = { triggers?: TriggerBulkUpdateItem[] | undefined }
type TriggerValidationResponse = {
  errors?:
    | { code?: string | undefined; field?: string | undefined; message?: string | undefined }[]
    | undefined
  valid?: boolean | undefined
}
type AttachmentUploadResponse = {
  upload?:
    | {
        attachment?: AttachmentObject | undefined
        attachments?: AttachmentObject[] | undefined
        token?: string | undefined
      }
    | undefined
}
type UserFieldObject = {
  active?: boolean | undefined
  created_at?: string | undefined
  custom_field_options?: CustomFieldOptionObject[] | undefined
  description?: string | undefined
  id?: bigint | undefined
  key: string
  position?: number | undefined
  raw_description?: string | undefined
  raw_title?: string | undefined
  regexp_for_validation?: (string | null) | undefined
  relationship_filter?: { [x: string]: unknown } | undefined
  system?: boolean | undefined
  tag?: string | undefined
  title: string
  type: string
  updated_at?: string | undefined
  url?: string | undefined
  relationship_target_type?: string | undefined
}
type UserFieldsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  user_fields?: UserFieldObject[] | undefined
}
type UserFieldOptionInput = { name: string; raw_name?: (string | null) | undefined; value: string }
type UserFieldPermissionsRoleInput = {
  role_id?: bigint | undefined
  scopes?: ('read' | 'update')[] | undefined
}
type UserFieldPermissionsInput = {
  restrict_access_by_role?: (boolean | null) | undefined
  roles?: (UserFieldPermissionsRoleInput[] | null) | undefined
} | null
type UserFieldRelationshipFilterCondition = {
  field?: (string | null) | undefined
  operator?: (string | null) | undefined
  value?: (string | null) | string[] | undefined
}
type UserFieldInput = {
  active?: (boolean | null) | undefined
  custom_field_options?: (UserFieldOptionInput[] | null) | undefined
  description?: (string | null) | undefined
  key: string
  permissions?: UserFieldPermissionsInput | undefined
  position?: (number | null) | undefined
  raw_description?: (string | null) | undefined
  raw_title?: (string | null) | undefined
  regexp_for_validation?: string | undefined
  relationship_filter?:
    | ({
        all?: (UserFieldRelationshipFilterCondition[] | null) | undefined
        any?: (UserFieldRelationshipFilterCondition[] | null) | undefined
      } | null)
    | undefined
  relationship_target_type?: (string | null) | undefined
  tag?: (string | null) | undefined
  title: string
  type?:
    | 'checkbox'
    | 'date'
    | 'decimal'
    | 'integer'
    | 'regexp'
    | 'text'
    | 'textarea'
    | 'dropdown'
    | 'tagger'
    | 'multiselect'
    | 'lookup'
    | undefined
}
type UserFieldRequest = { user_field: UserFieldInput }
type UserFieldResponse = { user_field?: UserFieldObject | undefined }
type UserFieldOptionUpdateInput = {
  id: bigint | (string | null)
  name?: string | undefined
  raw_name?: (string | null) | undefined
  value?: string | undefined
}
type UserFieldUpdateInput = {
  active?: (boolean | null) | undefined
  custom_field_options?: (UserFieldOptionUpdateInput[] | null) | undefined
  description?: (string | null) | undefined
  permissions?: UserFieldPermissionsInput | undefined
  position?: number | undefined
  raw_description?: (string | null) | undefined
  raw_title?: (string | null) | undefined
  regexp_for_validation?: string | undefined
  relationship_filter?:
    | ({
        all?: (UserFieldRelationshipFilterCondition[] | null) | undefined
        any?: (UserFieldRelationshipFilterCondition[] | null) | undefined
      } | null)
    | undefined
  tag?: (string | null) | undefined
  title?: string | undefined
}
type UserFieldUpdateRequest = { user_field: UserFieldUpdateInput }
type UserFieldOptionCreateOrUpdateInput = {
  id?: (bigint | null) | undefined
  name: string
  position?: number | undefined
  value?: string | undefined
}
type UserFieldOptionRequest = { custom_field_option: UserFieldOptionCreateOrUpdateInput }
type UserFieldsReorderRequest = { user_field_ids: bigint[] }
type UserIdentityInput = {
  auto_ownership?: boolean | undefined
  ownership?: 'owned' | 'shared' | undefined
  primary?: boolean | undefined
  type:
    | 'email'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'phone_number'
    | 'agent_forwarding'
    | 'any_channel'
    | 'foreign'
    | 'sdk'
    | 'messaging'
  value: string
  verification_method?: 'none' | 'low' | 'sso' | 'embed' | 'full' | undefined
  verified?: boolean | undefined
}
type UserCreateInput = {
  active_brand_id?: (bigint | null) | undefined
  agent_brand_ids?: bigint[] | undefined
  alias?: (string | null) | undefined
  auto_ownership?: boolean | undefined
  custom_role_id?: (bigint | null) | undefined
  default_group_id?: (bigint | null) | undefined
  details?: (string | null) | undefined
  email?: string | undefined
  external_id?: (string | null) | undefined
  group_id?: (bigint | null) | undefined
  group_ids?: bigint[] | undefined
  identities?: UserIdentityInput[] | undefined
  language?: (string | null) | undefined
  locale?: (string | null) | undefined
  locale_id?: (bigint | null) | undefined
  moderator?: (boolean | null) | undefined
  name: string
  notes?: (string | null) | undefined
  only_private_comments?: (boolean | null) | undefined
  organization?: { name: string } | undefined
  organization_id?: (bigint | null) | undefined
  organization_ids?: (bigint[] | null) | undefined
  organization_name?: (string | null) | undefined
  password?: string | undefined
  phone?: (string | null) | undefined
  remote_photo_url?: (string | null) | undefined
  role?: string | undefined
  separation?: { scope: 'account' } | { brand_id: bigint; scope: 'brand' } | undefined
  shared_phone_number?: (boolean | null) | undefined
  signature?: (string | null) | undefined
  skip_verify_email?: (boolean | null) | undefined
  suspended?: (boolean | null) | undefined
  tags?: (string[] | null) | undefined
  ticket_restriction?: (string | null) | undefined
  time_zone?: (string | null) | undefined
  user_fields?: ({ [x: string]: unknown } | null) | undefined
  verified?: (boolean | null) | undefined
}
type UserMergeInput = {
  active_brand_id?: (bigint | null) | undefined
  agent_brand_ids?: bigint[] | undefined
  alias?: (string | null) | undefined
  custom_role_id?: (bigint | null) | undefined
  default_group_id?: (bigint | null) | undefined
  details?: (string | null) | undefined
  email?: string | undefined
  external_id?: (string | null) | undefined
  group_id?: (bigint | null) | undefined
  group_ids?: bigint[] | undefined
  id?: bigint | undefined
  identities?: UserIdentityInput[] | undefined
  language?: (string | null) | undefined
  locale?: (string | null) | undefined
  locale_id?: (bigint | null) | undefined
  moderator?: (boolean | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  only_private_comments?: (boolean | null) | undefined
  organization?: { name: string } | undefined
  organization_id?: (bigint | null) | undefined
  organization_ids?: (bigint[] | null) | undefined
  organization_name?: (string | null) | undefined
  password?: string | undefined
  phone?: (string | null) | undefined
  remote_photo_url?: (string | null) | undefined
  role?: string | undefined
  shared_phone_number?: (boolean | null) | undefined
  signature?: (string | null) | undefined
  skip_verify_email?: (boolean | null) | undefined
  suspended?: (boolean | null) | undefined
  tags?: (string[] | null) | undefined
  ticket_restriction?: (string | null) | undefined
  time_zone?: (string | null) | undefined
  user_fields?: ({ [x: string]: unknown } | null) | undefined
  verified?: (boolean | null) | undefined
}
type UserInput = UserCreateInput | UserMergeInput
type UserRequest = { user: UserInput }
type UserResponse = { user?: UserObject | undefined }
type UserUpdateInput = {
  agent_brand_ids?: (bigint[] | null) | undefined
  alias?: (string | null) | undefined
  auto_ownership?: boolean | undefined
  custom_role_id?: (bigint | null) | undefined
  default_group_id?: (bigint | null) | undefined
  details?: (string | null) | undefined
  email?: string | undefined
  external_id?: (string | null) | undefined
  group_id?: (bigint | null) | undefined
  identities?: UserIdentityInput[] | undefined
  language?: (string | null) | undefined
  locale?: (string | null) | undefined
  locale_id?: (bigint | null) | undefined
  moderator?: (boolean | null) | undefined
  name?: string | undefined
  notes?: (string | null) | undefined
  only_private_comments?: (boolean | null) | undefined
  organization_id?: (bigint | null) | undefined
  organization_ids?: (bigint[] | null) | undefined
  phone?: (string | null) | undefined
  photo?: ({ [x: string]: unknown } | null) | undefined
  remote_photo_url?: (string | null) | undefined
  role?: string | undefined
  shared_phone_number?: (boolean | null) | undefined
  signature?: (string | null) | undefined
  skip_verify_email?: (boolean | null) | undefined
  suspended?: (boolean | null) | undefined
  tags?: (string[] | null) | undefined
  ticket_restriction?: (string | null) | undefined
  time_zone?: (string | null) | undefined
  user_fields?: ({ [x: string]: unknown } | null) | undefined
  verified?: (boolean | null) | undefined
}
type UserUpdateRequest = { user: UserUpdateInput }
type ComplianceDeletionStatusObject = {
  account_subdomain: string
  action: string
  application: string
  created_at: string
  executer_id: bigint | null
  user_id: bigint
}
type ComplianceDeletionStatusesResponse = {
  compliance_deletion_statuses?: ComplianceDeletionStatusObject[] | undefined
}
type UserEntitlementObject = { is_active?: boolean | undefined; name?: string | undefined }
type UserEntitlementsFullResponse = {
  entitlements?:
    | {
        chat?: UserEntitlementObject | undefined
        explore?: UserEntitlementObject | undefined
        guide?: UserEntitlementObject | undefined
        talk?: UserEntitlementObject | undefined
      }
    | undefined
}
type CreateUserGroupMembershipRequest = {
  group_membership: { default?: boolean | undefined; group_id: bigint }
}
type UserIdentityCreateInput = {
  auto_ownership?: (boolean | null) | undefined
  ownership?: 'owned' | 'shared' | null | undefined
  primary?: (boolean | null) | undefined
  skip_verify_email?: (boolean | null) | undefined
  type:
    | 'email'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'agent_forwarding'
    | 'phone_number'
    | 'messaging'
    | 'slack'
  value: string
  verification_method?: 'none' | 'low' | null | undefined
  verified?: (boolean | null) | undefined
}
type UserIdentityCreateRequest = { identity: UserIdentityCreateInput }
type UserIdentityUpdateInput = {
  auto_ownership?: (boolean | null) | undefined
  deliverable_state?: 'deliverable' | null | undefined
  ownership?: 'owned' | 'shared' | null | undefined
  value?: (string | null) | undefined
  verification_method?: 'none' | 'low' | null | undefined
  verified?: (boolean | null) | undefined
}
type UserIdentityUpdateRequest = { identity?: UserIdentityUpdateInput | null | undefined }
type UserOrganizationMembershipInput = { organization_id: bigint }
type UserOrganizationMembershipRequest = {
  organization_membership: UserOrganizationMembershipInput
}
type UserPasswordRequirementsResponse = { requirements?: string[] | undefined }
type UserRelatedObject = {
  assigned_tickets?: number | undefined
  ccd_tickets?: number | undefined
  organization_subscriptions?: number | undefined
  requested_tickets?: number | undefined
}
type UserRelatedResponse = { user_related?: UserRelatedObject | undefined }
type SessionResponse = { session?: SessionObject[] | undefined }
type SuspendedUserSummaryObject = {
  email?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type SuspensionObject = {
  additional_comments?: (string | null) | undefined
  id?: string | undefined
  reason?:
    | 'abusive_language'
    | 'uncooperative'
    | 'impersonating_others'
    | 'extended_leave'
    | 'parental_time_off'
    | 'sabbatical'
    | 'other_reason'
    | undefined
  suspended_at?: string | undefined
  suspended_by?: { id?: bigint | undefined; name?: string | undefined } | undefined
  suspended_by_actor?:
    | { id?: string | undefined; zrn_type?: 'agent' | 'messaging_trigger' | undefined }
    | undefined
  suspended_channels?: ('all' | 'messaging')[] | undefined
  suspended_user?: SuspendedUserSummaryObject | undefined
}
type SuspensionResponse = { suspension: SuspensionObject }
type SuspensionCreateRequest = {
  suspension: {
    additional_comments?: string | undefined
    reason?:
      | 'abusive_language'
      | 'uncooperative'
      | 'impersonating_others'
      | 'extended_leave'
      | 'parental_time_off'
      | 'sabbatical'
      | 'other_reason'
      | undefined
    suspended_by_actor_zrn?: string | undefined
    suspended_channels?: ('all' | 'messaging')[] | undefined
  }
}
type SuspensionUpdateRequest = {
  suspension: {
    additional_comments?: string | undefined
    reason?:
      | 'abusive_language'
      | 'uncooperative'
      | 'impersonating_others'
      | 'extended_leave'
      | 'parental_time_off'
      | 'sabbatical'
      | 'other_reason'
      | undefined
    suspended_channels?: ('all' | 'messaging')[] | undefined
  }
}
type UsersRequest = { users: UserInput[] }
type CurrentUserResponse = { user?: { authenticity_token?: string | undefined } | undefined }
type RenewSessionResponse = { authenticity_token?: string | undefined }
type UserSettingsResponse = {
  settings?:
    | {
        admin_center?: { has_admin_center_side_nav_open?: boolean | undefined } | undefined
        agent_home_pinned_views?: (number[] | null) | undefined
        lotus?:
          | {
              agent_workspace_theme_preference?: '0' | '1' | '2' | undefined
              agent_workspace_theme_preference_for_conversation_panel?: '0' | '1' | '2' | undefined
              keyboard_shortcuts_enabled?: boolean | undefined
              macro_shortcuts_enabled?: boolean | undefined
              show_onboarding_tooltips?: boolean | undefined
              two_factor_authentication?: boolean | undefined
            }
          | undefined
        shared_views_order?: (number[] | null) | undefined
      }
    | undefined
}
type UserSettingsUpdateRequest = {
  settings: {
    admin_center?: { has_admin_center_side_nav_open?: boolean | undefined } | undefined
    agent_home_pinned_views?: (number[] | null) | undefined
    lotus?:
      | {
          agent_workspace_theme_preference?: '0' | '1' | '2' | undefined
          agent_workspace_theme_preference_for_conversation_panel?: '0' | '1' | '2' | undefined
          keyboard_shortcuts_enabled?: boolean | undefined
          macro_shortcuts_enabled?: boolean | undefined
          show_onboarding_tooltips?: boolean | undefined
        }
      | undefined
    shared_views_order?: (number[] | null) | undefined
  }
}
type ViewObject = {
  active?: boolean | undefined
  conditions?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  default?: boolean | undefined
  description?: string | undefined
  execution?: { [x: string]: unknown } | undefined
  id?: bigint | undefined
  position?: number | undefined
  restriction?: { [x: string]: unknown } | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type ViewsResponse = {
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
  views?: ViewObject[] | undefined
}
type ViewResponse = {
  columns?: { [x: string]: unknown }[] | undefined
  groups?: { [x: string]: unknown }[] | undefined
  rows?: { [x: string]: unknown }[] | undefined
  view?: ViewObject | undefined
}
type ViewCountObject = {
  active?: boolean | undefined
  fresh?: boolean | undefined
  pretty?: string | undefined
  url?: string | undefined
  value?: (number | null) | undefined
  view_id?: bigint | undefined
}
type ViewCountResponse = { view_count?: ViewCountObject | undefined }
type ViewExportResponse = {
  export?: { status?: string | undefined; view_id?: bigint | undefined } | undefined
}
type ViewsCountResponse = {
  count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
}
type ViewCountsResponse = { view_counts?: ViewCountObject[] | undefined }
type ViewPreviewConditionInput = {
  field?: string | undefined
  operator?: string | undefined
  value?: (string | null) | bigint | (string | bigint)[] | undefined
}
type ViewPreviewInput = {
  all?: ViewPreviewConditionInput[] | undefined
  any?: ViewPreviewConditionInput[] | undefined
  conditions?:
    | {
        all?: ViewPreviewConditionInput[] | undefined
        any?: ViewPreviewConditionInput[] | undefined
      }
    | undefined
  id?: bigint | string | undefined
  output?:
    | {
        columns?: (string | bigint)[] | undefined
        group_by?: string | undefined
        group_order?: string | undefined
        sort_by?: string | undefined
        sort_order?: string | undefined
      }
    | undefined
}
type ViewPreviewRequest = {
  _include_archive?: boolean | undefined
  paginate?: boolean | undefined
  view: ViewPreviewInput
}
type WorkspaceObject = {
  activated?: boolean | undefined
  apps?: { [x: string]: unknown }[] | undefined
  conditions?: ConditionsObject | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  macro_ids?: bigint[] | undefined
  macros?: number[] | undefined
  position?: number | undefined
  prefer_workspace_app_order?: boolean | undefined
  selected_macros?: MacroObject[] | undefined
  ticket_form_id?: bigint | undefined
  title?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type WorkspaceResponse = {
  workspaces?: WorkspaceObject[] | undefined
  count?: number | undefined
  next_page?: (string | null) | undefined
  previous_page?: (string | null) | undefined
}
type WorkspaceInput = {
  conditions?: ConditionsObject | undefined
  description?: string | undefined
  macros?: number[] | undefined
  ticket_form_id?: number | undefined
  title?: string | undefined
}
type OAuthTokenForGrantTypesObject = {
  access_token?: string | undefined
  expires_in?: number | undefined
  refresh_token?: string | undefined
  refresh_token_expires_in?: number | undefined
  scope?: string | undefined
  token_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/:target_type/:target_id/relationship_fields/:field_id/:source_type': {
      $get: {
        input: {
          param: { target_type: string; target_id: bigint; field_id: bigint; source_type: string }
        }
        output: ReverseLookupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/account/email_settings': {
      $get: { input: {}; output: EmailSettingsResponse; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { json: UpdateEmailSettingsRequest }
            output: EmailSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateEmailSettingsRequest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/account/settings': {
      $get: {
        input: { query: { authenticity_token?: string | undefined } }
        output: AccountSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: AccountSettingsUpdateRequest }
        output: AccountSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/accounts': {
      $post: {
        input: { json: TrialAccountRequest } & { form: TrialAccountRequest }
        output: TrialAccountResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/accounts/available': {
      $get: {
        input: { query: { subdomain: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/activities': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
            per_page?: number | undefined
            include?: string | undefined
          }
        }
        output: ActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/activities/:activity_id': {
      $get: {
        input: { param: { activity_id: bigint } }
        output: ActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/activities/count': {
      $get: { input: {}; output: ActivitiesCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/any_channel/channelback/report_error': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/any_channel/push': {
      $post: {
        input: {}
        output: ChannelFrameworkPushResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/any_channel/validate_token': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/api_tokens': {
      $get:
        | {
            input: { query: { include_users?: boolean | undefined } }
            output: ApiTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_users?: boolean | undefined } }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include_users?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateApiTokenRequest }
            output: ApiTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateApiTokenRequest }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: CreateApiTokenRequest }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: CreateApiTokenRequest }
            output: ApiTokenValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/api_tokens/:id': {
      $put:
        | {
            input: { param: { id: bigint } } & { json: UpdateApiTokenRequest }
            output: ApiTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateApiTokenRequest }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateApiTokenRequest }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: UpdateApiTokenRequest }
            output: ApiTokenValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { id: bigint } }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } }
            output: ApiTokenErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/approval_clarification_flow_messages': {
      $post:
        | {
            input: {
              json: {
                approval_request_id: string
                message: string
                raw?: ({ [x: string]: unknown } | null) | undefined
                via?: 'SUPPORT' | 'SLACK' | '' | undefined
              }
            }
            output: ApprovalClarificationFlowMessagesShowResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                approval_request_id: string
                message: string
                raw?: ({ [x: string]: unknown } | null) | undefined
                via?: 'SUPPORT' | 'SLACK' | '' | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                approval_request_id: string
                message: string
                raw?: ({ [x: string]: unknown } | null) | undefined
                via?: 'SUPPORT' | 'SLACK' | '' | undefined
              }
            }
            output: { errors?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                approval_request_id: string
                message: string
                raw?: ({ [x: string]: unknown } | null) | undefined
                via?: 'SUPPORT' | 'SLACK' | '' | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                approval_request_id: string
                message: string
                raw?: ({ [x: string]: unknown } | null) | undefined
                via?: 'SUPPORT' | 'SLACK' | '' | undefined
              }
            }
            output: { error?: string | undefined; errors?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/approval_clarification_flow_messages/:approval_request_id': {
      $get:
        | {
            input: { param: { approval_request_id: string } }
            output: ApprovalClarificationFlowMessagesShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { approval_request_id: string } }
            output: { errors?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { approval_request_id: string } }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/approval_requests': {
      $get:
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[assignee_user_id]'?: string | undefined
                'filter[assignee_group_id]'?: string | undefined
                before_cursor?: string | undefined
                after_cursor?: string | undefined
                include?: string | undefined
              }
            }
            output: ApprovalRequestsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[status]'?: string | undefined
                'filter[assignee_user_id]'?: string | undefined
                'filter[assignee_group_id]'?: string | undefined
                before_cursor?: string | undefined
                after_cursor?: string | undefined
                include?: string | undefined
              }
            }
            output: ApprovalRequestErrors
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: ApprovalRequestCreateRequest }
            output: ApprovalRequestCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApprovalRequestCreateRequest }
            output: ApprovalRequestErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/approval_workflow_instances/:workflow_instance_id/approval_requests/:id': {
      $get:
        | {
            input: { param: { workflow_instance_id: string; id: string } }
            output: ApprovalRequestShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } }
            output: { errors?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/approval_workflow_instances/:workflow_instance_id/approval_requests/:id/decision': {
      $patch:
        | {
            input: { param: { workflow_instance_id: string; id: string } } & {
              json: { notes?: string | undefined; status: string }
            }
            output: ApprovalRequestShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } } & {
              json: { notes?: string | undefined; status: string }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } } & {
              json: { notes?: string | undefined; status: string }
            }
            output: { errors?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } } & {
              json: { notes?: string | undefined; status: string }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_instance_id: string; id: string } } & {
              json: { notes?: string | undefined; status: string }
            }
            output: { errors?: string[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/approval_workflow_instances/:workflow_instance_id/withdraw': {
      $patch:
        | {
            input: { param: { workflow_instance_id: string } } & {
              json: { withdrawn_reason: string }
            }
            output: ApprovalWorkflowInstanceWithdrawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_instance_id: string } } & {
              json: { withdrawn_reason: string }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow_instance_id: string } } & {
              json: { withdrawn_reason: string }
            }
            output: { errors?: string[] | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_instance_id: string } } & {
              json: { withdrawn_reason: string }
            }
            output: { errors?: string[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_instance_id: string } } & {
              json: { withdrawn_reason: string }
            }
            output: { errors?: string[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/attachments/:attachment_id': {
      $get: {
        input: { param: { attachment_id: bigint } }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { attachment_id: bigint } } & { json: AttachmentUpdateRequest }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { attachment_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/audit_logs': {
      $get: {
        input: {
          query: {
            'ids[]'?: bigint[] | undefined
            'filter[source_type]'?: string | undefined
            'filter[source_id]'?: bigint | undefined
            'filter[actor_id]'?: bigint | undefined
            'filter[ip_address]'?: string | undefined
            'filter[created_at]'?: string | undefined
            'filter[action]'?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            sort?: string | undefined
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: AuditLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/audit_logs/:audit_log_id': {
      $get: {
        input: { param: { audit_log_id: bigint } }
        output: AuditLogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/audit_logs/export': {
      $post: {
        input: {
          query: {
            'filter[source_type]'?: string | undefined
            'filter[source_id]'?: bigint | undefined
            'filter[actor_id]'?: bigint | undefined
            'filter[ip_address]'?: string | undefined
            'filter[created_at]'?: string | undefined
            'filter[action]'?: string | undefined
          }
        }
        output: string
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/v2/autocomplete/tags': {
      $get: {
        input: { query: { name?: string | undefined } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { per_page?: number | undefined; name?: string | undefined } } & {
          json: { name?: string | undefined }
        }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/automations': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            active?: boolean | undefined
            include?: string | undefined
          }
        }
        output: AutomationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AutomationRequest }
        output: AutomationResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/automations/:automation_id': {
      $get: {
        input: { param: { automation_id: bigint } }
        output: AutomationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { automation_id: bigint } } & { json: AutomationUpdateRequest }
        output: AutomationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { automation_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/automations/active': {
      $get: { input: {}; output: AutomationsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/automations/destroy_many': {
      $delete: {
        input: { query: { ids?: bigint[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/automations/search': {
      $get: {
        input: {
          query: {
            query: string
            active?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            include?: string | undefined
          }
        }
        output: AutomationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/automations/update_many': {
      $put: {
        input: { json: AutomationsUpdateManyRequest }
        output: AutomationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/bookmarks': {
      $get: { input: {}; output: BookmarksResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: BookmarkCreateRequest }
            output: BookmarkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BookmarkCreateRequest }
            output: BookmarkResponse
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/api/v2/bookmarks/:bookmark_id': {
      $delete: {
        input: { param: { bookmark_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/brand_agents': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: BrandAgentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BrandAgentCreateRequest }
        output: BrandAgentResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/brand_agents/:brand_agent_id': {
      $get: {
        input: { param: { brand_agent_id: string } }
        output: BrandAgentResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { brand_agent_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/brands': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            assignable_from?: bigint | undefined
            include_deleted?: boolean | undefined
            include?: 'permissions' | undefined
          }
        }
        output: BrandsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BrandCreateRequest }
        output: BrandResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/brands/:brand_id': {
      $get: {
        input: { param: { brand_id: bigint } } & { query: { include?: string | undefined } }
        output: BrandResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { brand_id: bigint } } & { json: BrandUpdateRequest }
        output: BrandResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { brand_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/brands/:brand_id/agents': {
      $get: {
        input: { param: { brand_id: bigint } }
        output: BrandAgentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/brands/:brand_id/check_host_mapping': {
      $get: {
        input: { param: { brand_id: bigint } }
        output: HostMappingObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/brands/:brand_id/logo': {
      $put: {
        input: { param: { brand_id: bigint } } & { form: { 'brand[logo][uploaded_data]': File } }
        output: BrandResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { brand_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/brands/:brand_id/user_migrations': {
      $get: {
        input: { param: { brand_id: bigint } }
        output: BrandUserMigrationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { brand_id: bigint } } & { json: BrandUserMigrationCreateRequest }
            output: BrandUserMigrationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { brand_id: bigint } } & { json: BrandUserMigrationCreateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { brand_id: bigint } } & { json: BrandUserMigrationCreateRequest }
            output: {
              description?: string | undefined
              details?: { [x: string]: { description?: string | undefined }[] } | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/brands/:brand_id/user_migrations/:migration_id': {
      $get: {
        input: { param: { brand_id: bigint; migration_id: string } }
        output: BrandUserMigrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/brands/check_host_mapping': {
      $get: {
        input: { query: { host_mapping: string; subdomain: string } }
        output: HostMappingObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/channels/twitter/monitored_twitter_handles': {
      $get: { input: {}; output: TwitterChannelsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/channels/twitter/monitored_twitter_handles/:monitored_twitter_handle_id': {
      $get: {
        input: { param: { monitored_twitter_handle_id: bigint } }
        output: TwitterChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/channels/twitter/tickets': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/channels/twitter/tickets/:comment_id/statuses': {
      $get: {
        input: { param: { comment_id: bigint } } & { query: { ids?: string | undefined } }
        output: TwitterChannelTwicketStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/channels/voice/agents/:agent_id/tickets/:ticket_id/display': {
      $post:
        | {
            input: { param: { agent_id: bigint; ticket_id: bigint } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: bigint; ticket_id: bigint } }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/channels/voice/agents/:agent_id/users/:user_id/display': {
      $post:
        | {
            input: { param: { agent_id: bigint; user_id: bigint } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: bigint; user_id: bigint } }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/channels/voice/tickets': {
      $post:
        | {
            input: { json: TicketCreateVoicemailTicketRequest } & {
              form: TicketCreateVoicemailTicketRequest
            }
            output: TicketResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TicketCreateVoicemailTicketRequest } & {
              form: TicketCreateVoicemailTicketRequest
            }
            output: string
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TicketCreateVoicemailTicketRequest } & {
              form: TicketCreateVoicemailTicketRequest
            }
            output: string
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/channels/whatsapp_templates': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                integration_id?: string | undefined
                is_active?: boolean | undefined
                category?: string | undefined
                language?: string | undefined
                name?: string | undefined
              }
            }
            output: WhatsappTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                integration_id?: string | undefined
                is_active?: boolean | undefined
                category?: string | undefined
                language?: string | undefined
                name?: string | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/channels/whatsapp_templates/:template_id/toggle': {
      $put:
        | {
            input: { param: { template_id: string } } & { json: { is_active: boolean } }
            output: { whatsapp_template?: WhatsappTemplateObject | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: { is_active: boolean } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & { json: { is_active: boolean } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } } & { json: { is_active: boolean } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/channels/whatsapp_templates/languages': {
      $get:
        | {
            input: { query: { integration_id?: string | undefined } }
            output: WhatsappTemplateLanguagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { integration_id?: string | undefined } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/channels/whatsapp_templates/toggle_many': {
      $put:
        | {
            input: { json: { is_active: boolean; template_ids: string[] } }
            output: WhatsappTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { is_active: boolean; template_ids: string[] } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { is_active: boolean; template_ids: string[] } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { is_active: boolean; template_ids: string[] } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { is_active: boolean; template_ids: string[] } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/v2/chat_file_redactions/:ticket_id': {
      $put: {
        input: { param: { ticket_id: bigint } } & {
          json: { [x: string]: unknown } | { [x: string]: unknown }
        }
        output: TicketChatCommentRedactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/chat_redactions/:ticket_id': {
      $put:
        | {
            input: { param: { ticket_id: bigint } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: TicketChatCommentRedactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: bigint } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: TicketRedactionConflictError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/v2/comment_redactions/:ticket_comment_id': {
      $put:
        | {
            input: { param: { ticket_comment_id: bigint } } & {
              json: {
                external_attachment_urls?: string[] | undefined
                html_body?: string | undefined
                ticket_id: bigint
              }
            }
            output: TicketCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_comment_id: bigint } } & {
              json: {
                external_attachment_urls?: string[] | undefined
                html_body?: string | undefined
                ticket_id: bigint
              }
            }
            output: TicketRedactionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { ticket_comment_id: bigint } } & {
              json: {
                external_attachment_urls?: string[] | undefined
                html_body?: string | undefined
                ticket_id: bigint
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/countries.json': {
      $get: {
        input: {}
        output: { countries?: CountryObject[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/countries/:id.json': {
      $get: {
        input: { param: { id: number } }
        output: { country?: CountryObject | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects': {
      $get: {
        input: { query: { include_ui_path?: boolean | undefined } }
        output: CustomObjectsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CustomObjectsCreateRequest }
        output: CustomObjectResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key': {
      $get: {
        input: { param: { custom_object_key: string } } & {
          query: {
            include_permissions_metadata?: boolean | undefined
            include_ui_path?: boolean | undefined
          }
        }
        output: CustomObjectResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { custom_object_key: string } } & { json: CustomObjectsUpdateRequest }
        output: CustomObjectResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/access_rules': {
      $get: {
        input: { param: { custom_object_key: string } }
        output: AccessRulesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { custom_object_key: string } } & { json: AccessRuleCreateRequest }
        output: AccessRuleResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/access_rules/:id': {
      $get: {
        input: { param: { custom_object_key: string; id: string } }
        output: AccessRuleResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { custom_object_key: string; id: string } } & {
          json: AccessRuleUpdateRequest
        }
        output: AccessRuleResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/access_rules/definitions': {
      $get: {
        input: { param: { custom_object_key: string } }
        output: AccessRuleDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/fields': {
      $get: {
        input: { param: { custom_object_key: string } } & {
          query: { include_standard_fields?: boolean | undefined }
        }
        output: CustomObjectFieldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { custom_object_key: string } } & { json: CustomObjectFieldsCreateRequest }
        output: CustomObjectFieldResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/fields/:custom_object_field_key_or_id': {
      $get: {
        input: { param: { custom_object_key: string; custom_object_field_key_or_id: string } } & {
          query: { include_standard_fields?: boolean | undefined }
        }
        output: CustomObjectFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { custom_object_key: string; custom_object_field_key_or_id: string } } & {
          json: CustomObjectFieldsUpdateRequest
        }
        output: CustomObjectFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string; custom_object_field_key_or_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/fields/reorder': {
      $put: {
        input: { param: { custom_object_key: string } } & { json: CustomObjectFieldsReorderRequest }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/jobs': {
      $post:
        | {
            input: { param: { custom_object_key: string } } & {
              json: CustomObjectRecordsBulkCreateRequest
            }
            output: CustomObjectRecordsJobsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { custom_object_key: string } } & {
              json: CustomObjectRecordsBulkCreateRequest
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/limits/field_limit': {
      $get: {
        input: { param: { custom_object_key: string } }
        output: CustomObjectLimitsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/permission_policies': {
      $get: {
        input: { param: { custom_object_key: string } }
        output: PermissionPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/permission_policies/:id': {
      $get: {
        input: { param: { custom_object_key: string; id: string } }
        output: PermissionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { custom_object_key: string; id: string } } & {
              json: PermissionPolicyUpdateRequest
            }
            output: PermissionPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; id: string } } & {
              json: PermissionPolicyUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { custom_object_key: string; id: string } } & {
              json: PermissionPolicyUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records': {
      $get:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                'filter[ids]'?: string | undefined
                'filter[external_ids]'?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: CustomObjectRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                'filter[ids]'?: string | undefined
                'filter[external_ids]'?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                'filter[ids]'?: string | undefined
                'filter[external_ids]'?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post: {
        input: { param: { custom_object_key: string } } & { json: CustomObjectRecordsCreateRequest }
        output: CustomObjectRecordResponse
        outputFormat: 'json'
        status: 201
      }
      $patch: {
        input: { param: { custom_object_key: string } } & {
          query: {
            external_id?: string | undefined
            name?: string | undefined
            unique_field_value?: { [x: string]: string } | undefined
          }
        } & { json: CustomObjectRecordsUpsertRequest }
        output: CustomObjectRecordResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string } } & {
          query: {
            external_id?: string | undefined
            name?: string | undefined
            unique_field_value?: { [x: string]: string } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/:custom_object_record_id': {
      $get:
        | {
            input: { param: { custom_object_key: string; custom_object_record_id: string } }
            output: CustomObjectRecordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; custom_object_record_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string; custom_object_record_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch: {
        input: { param: { custom_object_key: string; custom_object_record_id: string } } & {
          json: CustomObjectRecordsUpdateRequest
        }
        output: CustomObjectRecordResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string; custom_object_record_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/:record_id/attachments': {
      $get:
        | {
            input: { param: { custom_object_key: string; record_id: string } }
            output: CustomObjectRecordAttachmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; record_id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_object_key: string; record_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string; record_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { custom_object_key: string; record_id: string } } & {
              form: { uploaded_data: File }
            }
            output: CustomObjectRecordAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; record_id: string } } & {
              form: { uploaded_data: File }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/:record_id/attachments/:id': {
      $put:
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              json: CustomObjectRecordAttachmentUpdateRequest
            }
            output: CustomObjectRecordAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              json: CustomObjectRecordAttachmentUpdateRequest
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/:record_id/attachments/:id/download': {
      $get:
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              query: { inline?: boolean | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              query: { inline?: boolean | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              query: { inline?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string; record_id: string; id: string } } & {
              query: { inline?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/autocomplete': {
      $get:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                name?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
                field_id?: string | undefined
                source?: string | undefined
                'filter[dynamic_values]'?: { [x: string]: number } | undefined
                requester_id?: bigint | undefined
                assignee_id?: bigint | undefined
                organization_id?: bigint | undefined
              }
            }
            output: CustomObjectRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                name?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
                field_id?: string | undefined
                source?: string | undefined
                'filter[dynamic_values]'?: { [x: string]: number } | undefined
                requester_id?: bigint | undefined
                assignee_id?: bigint | undefined
                organization_id?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                name?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
                field_id?: string | undefined
                source?: string | undefined
                'filter[dynamic_values]'?: { [x: string]: number } | undefined
                requester_id?: bigint | undefined
                assignee_id?: bigint | undefined
                organization_id?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/count': {
      $get:
        | {
            input: { param: { custom_object_key: string } }
            output: {
              count?:
                | { [x: string]: { refreshed_at?: string | undefined; value?: number | undefined } }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/search': {
      $get:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: CustomObjectRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            } & {
              json:
                | CustomObjectRecordsFilteredSearchRequestBasic
                | CustomObjectRecordsFilteredSearchRequestComplex
            }
            output: CustomObjectRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            } & {
              json:
                | CustomObjectRecordsFilteredSearchRequestBasic
                | CustomObjectRecordsFilteredSearchRequestComplex
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                query?: string | undefined
                sort?: string | undefined
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            } & {
              json:
                | CustomObjectRecordsFilteredSearchRequestBasic
                | CustomObjectRecordsFilteredSearchRequestComplex
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/show_by_unique_identifier': {
      $get:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                external_id?: string | undefined
                name?: string | undefined
                unique_field_value?: { [x: string]: string } | undefined
              }
            }
            output: CustomObjectRecordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                external_id?: string | undefined
                name?: string | undefined
                unique_field_value?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                external_id?: string | undefined
                name?: string | undefined
                unique_field_value?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/records/update_by_unique_identifier': {
      $put: {
        input: { param: { custom_object_key: string } } & {
          query: {
            external_id?: string | undefined
            name?: string | undefined
            unique_field_value?: { [x: string]: string } | undefined
          }
        } & { json: CustomObjectRecordsUpsertRequest }
        output: CustomObjectRecordResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { custom_object_key: string } } & {
          query: {
            external_id?: string | undefined
            name?: string | undefined
            unique_field_value?: { [x: string]: string } | undefined
          }
        } & { json: CustomObjectRecordsUpsertRequest }
        output: CustomObjectRecordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers': {
      $get: {
        input: { param: { custom_object_key: string } } & {
          query: {
            active?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: ObjectTriggersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { custom_object_key: string } } & { json: ObjectTriggerRequest }
        output: ObjectTriggerResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/:trigger_id': {
      $get: {
        input: { param: { custom_object_key: string; trigger_id: bigint } }
        output: ObjectTriggerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { custom_object_key: string; trigger_id: bigint } } & {
          json: ObjectTriggerUpdateRequest
        }
        output: ObjectTriggerResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_object_key: string; trigger_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/active': {
      $get: {
        input: { param: { custom_object_key: string } } & {
          query: { sort_by?: string | undefined; sort_order?: string | undefined }
        }
        output: ObjectTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/definitions': {
      $get: {
        input: { param: { custom_object_key: string } }
        output: ObjectTriggerDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/destroy_many': {
      $delete: {
        input: { param: { custom_object_key: string } } & { query: { ids: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/search': {
      $get: {
        input: { param: { custom_object_key: string } } & {
          query: {
            query?: string | undefined
            filter?: string | undefined
            active?: boolean | undefined
            sort?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            include?: string | undefined
          }
        }
        output: ObjectTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/:custom_object_key/triggers/update_many': {
      $put: {
        input: { param: { custom_object_key: string } } & { json: ObjectTriggerBulkUpdateRequest }
        output: ObjectTriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_objects/limits/object_limit': {
      $get: { input: {}; output: CustomObjectLimitsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/custom_objects/limits/record_limit': {
      $get: { input: {}; output: CustomObjectLimitsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/custom_roles': {
      $get: { input: {}; output: CustomRolesResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: CustomRoleResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/custom_roles/:custom_role_id': {
      $get: {
        input: { param: { custom_role_id: bigint } }
        output: CustomRoleResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { custom_role_id: bigint } }
        output: CustomRoleResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_role_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_status/default': {
      $put: {
        input: { json: BulkUpdateDefaultCustomStatusRequest }
        output: BulkUpdateDefaultCustomStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_statuses': {
      $get: {
        input: {
          query: {
            status_categories?: string | undefined
            active?: boolean | undefined
            default?: boolean | undefined
          }
        }
        output: CustomStatusesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CustomStatusCreateRequest }
        output: CustomStatusResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/custom_statuses/:custom_status_id': {
      $get: {
        input: { param: { custom_status_id: bigint } }
        output: CustomStatusResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { custom_status_id: bigint } } & { json: CustomStatusUpdateRequest }
        output: CustomStatusResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { custom_status_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/custom_statuses/:custom_status_id/ticket_form_statuses': {
      $post: {
        input: { param: { custom_status_id: bigint } } & {
          json: { ticket_form_status?: { ticket_form_id?: bigint | undefined }[] | undefined }
        }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/custom_statuses/show_many': {
      $get: {
        input: { query: { ids?: string | undefined } }
        output: CustomStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_tickets': {
      $get: {
        input: {
          query: {
            sort_by?:
              | 'id'
              | 'subject'
              | 'deleted_at'
              | 'created_at'
              | 'updated_at'
              | 'status'
              | 'requester'
              | 'requester.name'
              | 'group'
              | 'assignee'
              | 'assignee.name'
              | undefined
            sort_order?: 'asc' | 'desc' | undefined
            support_type_scope?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: ListDeletedTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_tickets/:ticket_id': {
      $delete: {
        input: { param: { ticket_id: bigint } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_tickets/:ticket_id/restore': {
      $put: {
        input: { param: { ticket_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_tickets/destroy_many': {
      $delete: {
        input: { query: { ids: string } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_tickets/restore_many': {
      $put: { input: { query: { ids: string } }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/deleted_users': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            limit?: number | undefined
            order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
          }
        }
        output: DeletedUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_users/:deleted_user_id': {
      $get: {
        input: { param: { deleted_user_id: bigint } }
        output: DeletedUserResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { deleted_user_id: bigint } }
        output: DeletedUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/deleted_users/count': {
      $get: { input: {}; output: CountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/deletion_schedules': {
      $get: {
        input: {}
        output: { deletion_schedules?: DeletionSchedule[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { deletion_schedule?: DeletionSchedule | undefined } }
        output: { deletion_schedule?: DeletionSchedule | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/deletion_schedules/:deletion_schedule_id': {
      $get: {
        input: { param: { deletion_schedule_id: bigint } }
        output: { deletion_schedule?: DeletionSchedule | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { deletion_schedule_id: bigint } } & {
          json: { deletion_schedule?: DeletionSchedule | undefined }
        }
        output: { deletion_schedule?: DeletionSchedule | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { deletion_schedule_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/dynamic_content/items': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: DynamicContentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: DynamicContentRequest }
        output: DynamicContentResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/dynamic_content/items/:dynamic_content_item_id': {
      $get: {
        input: { param: { dynamic_content_item_id: bigint } }
        output: DynamicContentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { dynamic_content_item_id: bigint } } & {
          json: DynamicContentUpdateRequest
        }
        output: DynamicContentResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { dynamic_content_item_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/dynamic_content/items/:dynamic_content_item_id/variants': {
      $get: {
        input: { param: { dynamic_content_item_id: bigint } } & {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: DynamicContentVariantsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { dynamic_content_item_id: bigint } } & {
          json: DynamicContentVariantRequest
        }
        output: DynamicContentVariantResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/dynamic_content/items/:dynamic_content_item_id/variants/:dynamic_content_variant_id': {
      $get: {
        input: { param: { dynamic_content_item_id: bigint; dynamic_content_variant_id: bigint } }
        output: DynamicContentVariantResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { dynamic_content_item_id: bigint; dynamic_content_variant_id: bigint }
        } & { json: DynamicContentVariantUpdateRequest }
        output: DynamicContentVariantResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { dynamic_content_item_id: bigint; dynamic_content_variant_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/dynamic_content/items/:dynamic_content_item_id/variants/create_many': {
      $post: {
        input: { param: { dynamic_content_item_id: bigint } } & {
          json: DynamicContentVariantsCreateManyRequest
        }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/dynamic_content/items/:dynamic_content_item_id/variants/update_many': {
      $put: {
        input: { param: { dynamic_content_item_id: bigint } } & {
          json: DynamicContentVariantsUpdateManyRequest
        }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/dynamic_content/items/show_many': {
      $get: {
        input: { query: { identifiers?: string | undefined } }
        output: DynamicContentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/email_notifications': {
      $get: {
        input: {
          query: {
            filter: {
              comment_id?: bigint | undefined
              notification_id?: bigint | undefined
              ticket_id?: bigint | undefined
            }
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: EmailNotificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/email_notifications/:notification_id': {
      $get: {
        input: { param: { notification_id: bigint } }
        output: EmailNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/email_notifications/show_many': {
      $get: {
        input: {
          query: {
            ids?: string | undefined
            comment_ids?: string | undefined
            ticket_ids?: string | undefined
          }
        }
        output: EmailNotificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/end_users/:user_id/identities': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: { 'type[]'?: ('email' | 'phone_number')[] | undefined }
        }
        output: UserIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & {
          query: {
            brand_id?: bigint | undefined
            'type[]'?: ('email' | 'phone_number')[] | undefined
          }
        } & { json: EndUserIdentityCreateRequest }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/end_users/:user_id/identities/:user_identity_id': {
      $get: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/end_users/:user_id/identities/:user_identity_id/make_primary': {
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: UserIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/end_users/:user_id/identities/:user_identity_id/request_verification': {
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/group_memberships': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include?: string | undefined
          }
        }
        output: GroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateGroupMembershipRequest }
        output: GroupMembershipResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/group_memberships/:group_membership_id': {
      $get: {
        input: { param: { group_membership_id: bigint } }
        output: GroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { group_membership_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/group_memberships/assignable': {
      $get: { input: {}; output: GroupMembershipsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/group_memberships/create_many': {
      $post: {
        input: { json: BulkCreateGroupMembershipsRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/group_memberships/destroy_many': {
      $delete: {
        input: { query: { ids?: string | undefined } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/group_slas/policies': {
      $get:
        | { input: {}; output: GroupSLAPoliciesResponse; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post: {
        input: { json: GroupSLAPolicyRequest }
        output: GroupSLAPolicyResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/group_slas/policies/:group_sla_policy_id': {
      $get:
        | {
            input: { param: { group_sla_policy_id: string } }
            output: GroupSLAPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_sla_policy_id: string } }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_sla_policy_id: string } }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_sla_policy_id: string } }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { group_sla_policy_id: string } } & { json: GroupSLAPolicyUpdateRequest }
        output: GroupSLAPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { group_sla_policy_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/group_slas/policies/definitions': {
      $get: {
        input: {}
        output: GroupSLAPolicyFilterDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/group_slas/policies/reorder': {
      $put:
        | {
            input: { json: GroupSLAPolicyReorderRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: GroupSLAPolicyReorderRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: GroupSLAPolicyReorderRequest }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GroupSLAPolicyReorderRequest }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupSLAPolicyReorderRequest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/groups': {
      $get: {
        input: {
          query: {
            exclude_deleted?: boolean | undefined
            include?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: GroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateGroupRequest }
        output: GroupResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/groups/:group_id': {
      $get: {
        input: { param: { group_id: bigint } } & { query: { include?: string | undefined } }
        output: GroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { group_id: bigint } } & { json: UpdateGroupRequest }
        output: GroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { group_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/groups/:group_id/memberships': {
      $get: {
        input: { param: { group_id: bigint } }
        output: GroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/groups/:group_id/memberships/assignable': {
      $get: {
        input: { param: { group_id: bigint } }
        output: GroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/groups/:group_id/users': {
      $get: {
        input: { param: { group_id: bigint } } & {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
            external_id?: string | undefined
          }
        }
        output: UsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/groups/:group_id/users/count': {
      $get: {
        input: { param: { group_id: bigint } } & {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
          }
        }
        output: CountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/groups/assignable': {
      $get: { input: {}; output: GroupsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/groups/autocomplete': {
      $get: {
        input: { query: { name: string } }
        output: GroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/groups/available_agents': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                sort?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: AvailableAgentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                sort?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/groups/count': {
      $get: { input: {}; output: GroupsCountObject; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/groups/default': {
      $get: { input: {}; output: GroupResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/imports/tickets': {
      $post: {
        input: { query: { archive_immediately?: boolean | undefined } } & {
          json: TicketImportRequest
        }
        output: TicketResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/imports/tickets/create_many': {
      $post: {
        input: { query: { archive_immediately?: boolean | undefined } } & {
          json: TicketBulkImportRequest
        }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/:incremental_resource/sample': {
      $get: {
        input: { param: { incremental_resource: string } } & { query: { start_time: number } }
        output: TimeBasedExportIncrementalTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/custom_objects/:custom_object_key/cursor': {
      $get:
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: IncrementalCustomObjectRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_object_key: string } } & {
              query: {
                start_time?: number | undefined
                cursor?: string | undefined
                per_page?: number | undefined
                'filter[exclude_deleted]'?: boolean | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/incremental/organizations': {
      $get: {
        input: { query: { start_time: number; per_page?: number | undefined } }
        output: ExportIncrementalOrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/routing/attribute_values': {
      $get: { input: {}; output: IncrementalSkillBasedRouting; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/incremental/routing/attributes': {
      $get: { input: {}; output: IncrementalSkillBasedRouting; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/incremental/routing/instance_values': {
      $get: { input: {}; output: IncrementalSkillBasedRouting; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/incremental/ticket_events': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            start_time: number
            support_type_scope?: string | undefined
          }
        }
        output: ExportIncrementalTicketEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/ticket_metric_events': {
      $get:
        | {
            input: {
              query: {
                start_time: number
                include_changes?: boolean | undefined
                exclude_deleted?: boolean | undefined
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
              }
            }
            output: TicketMetricEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                include_changes?: boolean | undefined
                exclude_deleted?: boolean | undefined
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { code?: string | undefined; message: string; title: string } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/incremental/tickets': {
      $get: {
        input: { query: { start_time: number; support_type_scope?: string | undefined } }
        output: TimeBasedExportIncrementalTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/tickets/cursor': {
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            cursor?: string | undefined
            support_type_scope?: string | undefined
          }
        }
        output: CursorBasedExportIncrementalTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/users': {
      $get: {
        input: { query: { start_time: number; per_page?: number | undefined } }
        output: TimeBasedExportIncrementalUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/incremental/users/cursor': {
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            cursor?: string | undefined
            per_page?: number | undefined
          }
        }
        output: CursorBasedExportIncrementalUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/it_asset_management/asset_types': {
      $get: { input: {}; output: ItamAssetTypesResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ItamAssetTypeCreateRequest }
            output: ItamAssetTypeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ItamAssetTypeCreateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/asset_types/:asset_type_id': {
      $get: {
        input: { param: { asset_type_id: string } }
        output: ItamAssetTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { asset_type_id: string } } & { json: ItamAssetTypeUpdateRequest }
            output: ItamAssetTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_type_id: string } } & { json: ItamAssetTypeUpdateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { asset_type_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { asset_type_id: string } }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/asset_types/:asset_type_id/fields': {
      $get: {
        input: { param: { asset_type_id: string } }
        output: ItamAssetTypeFieldsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/it_asset_management/asset_types/:asset_type_id/fields/:asset_type_field_id': {
      $get: {
        input: { param: { asset_type_id: string; asset_type_field_id: bigint } }
        output: ItamAssetFieldResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/it_asset_management/assets': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                'filter[ids]'?: string | undefined
                'filter[external_ids]'?: string | undefined
              }
            }
            output: ItamAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                'filter[ids]'?: string | undefined
                'filter[external_ids]'?: string | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: ItamAssetCreateRequest }
            output: ItamAssetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ItamAssetCreateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/assets/:asset_id': {
      $get: {
        input: { param: { asset_id: string } }
        output: ItamAssetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { asset_id: string } } & { json: ItamAssetUpdateRequest }
            output: ItamAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: string } } & { json: ItamAssetUpdateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
      $delete: {
        input: { param: { asset_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/it_asset_management/assets/jobs': {
      $post: {
        input: { json: ItamAssetBulkJobRequest }
        output: ItamAssetBulkJobResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/it_asset_management/assets/search': {
      $get: {
        input: {
          query: {
            query: string
            sort?: string | undefined
            'page[before]'?: string | undefined
            'page[after]'?: string | undefined
            'page[size]'?: number | undefined
          }
        }
        output: ItamAssetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            query?: string | undefined
            sort?: string | undefined
            'page[before]'?: string | undefined
            'page[after]'?: string | undefined
            'page[size]'?: number | undefined
          }
        } & { json: ItamAssetFilteredSearchRequestBasic | ItamAssetFilteredSearchRequestComplex }
        output: ItamAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/it_asset_management/fields': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
          }
        }
        output: ItamAssetFieldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ItamAssetFieldGlobalCreateRequest }
        output: ItamAssetFieldResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/it_asset_management/fields/:id': {
      $get: {
        input: { param: { id: bigint } }
        output: ItamAssetFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { id: bigint } } & { json: ItamAssetFieldGlobalUpdateRequest }
            output: ItamAssetFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ItamAssetFieldGlobalUpdateRequest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: bigint } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/locations': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
              }
            }
            output: ItamAssetLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: ItamAssetLocationCreateRequest }
            output: ItamAssetLocationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ItamAssetLocationCreateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/locations/:location_id': {
      $get: {
        input: { param: { location_id: string } }
        output: ItamAssetLocationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { location_id: string } } & { json: ItamAssetLocationUpdateRequest }
            output: ItamAssetLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: string } } & { json: ItamAssetLocationUpdateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
      $delete: {
        input: { param: { location_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/it_asset_management/statuses': {
      $get: { input: {}; output: ItamAssetStatusesResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ItamAssetStatusCreateRequest }
            output: ItamAssetStatusResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ItamAssetStatusCreateRequest }
            output: ItamRecordInvalidError | { error: { message: string; title: string } }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/it_asset_management/statuses/:status_id': {
      $get: {
        input: { param: { status_id: string } }
        output: ItamAssetStatusResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { status_id: string } } & { json: ItamAssetStatusUpdateRequest }
            output: ItamAssetStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_id: string } } & { json: ItamAssetStatusUpdateRequest }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { status_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { status_id: string } }
            output: ItamRecordInvalidError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/job_statuses': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
          }
        }
        output: JobStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/job_statuses/:job_status_id': {
      $get: {
        input: { param: { job_status_id: string } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/job_statuses/show_many': {
      $get: {
        input: { query: { ids: string } }
        output: JobStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/locales': {
      $get: { input: {}; output: LocalesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/locales/:locale_id': {
      $get: {
        input: { param: { locale_id: string } }
        output: LocaleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/locales/agent': {
      $get: { input: {}; output: LocalesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/locales/current': {
      $get: { input: {}; output: LocaleResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/locales/detect_best_locale': {
      $get: { input: {}; output: LocaleResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/locales/public': {
      $get: { input: {}; output: LocalesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/macros': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            access?: string | undefined
            active?: boolean | undefined
            category?: number | undefined
            group_id?: bigint | undefined
            only_viewable?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            sort?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: MacrosResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { macro?: MacroInput | undefined } }
            output: { macro?: MacroObject | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { macro?: MacroInput | undefined } }
            output: { macro?: MacroObject | undefined }
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/api/v2/macros/:macro_id': {
      $get: {
        input: { param: { macro_id: bigint } }
        output: MacroResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { macro_id: bigint } } & { json: { macro?: MacroInput | undefined } }
        output: { macro?: MacroObject | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { macro_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/macros/:macro_id/apply': {
      $get: {
        input: { param: { macro_id: bigint } } & {
          query: { normalize_comment?: boolean | undefined }
        }
        output: MacroApplyTicketResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/:macro_id/attachments': {
      $get: {
        input: { param: { macro_id: bigint } }
        output: MacroAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { macro_id: bigint } }
        output: MacroAttachmentResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/macros/actions': {
      $get: {
        input: {}
        output: { actions?: { [x: string]: unknown }[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/active': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            access?: string | undefined
            category?: number | undefined
            group_id?: bigint | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: MacrosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/attachments': {
      $post: { input: {}; output: MacroAttachmentResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/macros/attachments/:attachment_id': {
      $get: {
        input: { param: { attachment_id: bigint } }
        output: MacroAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/attachments/:attachment_id/content': {
      $get: {
        input: { param: { attachment_id: bigint } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/categories': {
      $get: { input: {}; output: MacroCategoriesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/macros/definitions': {
      $get: {
        input: {}
        output: { definitions?: { actions?: { [x: string]: unknown }[] | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/destroy_many': {
      $delete: {
        input: { query: { ids: bigint[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/macros/groups': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: GroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/most_used': {
      $get: { input: {}; output: MostUsedMacrosResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/macros/new': {
      $get: {
        input: { query: { macro_id: bigint; ticket_id: bigint } }
        output: MacroResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/search': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            access?: string | undefined
            active?: boolean | undefined
            category?: number | undefined
            group_id?: bigint | undefined
            only_viewable?: boolean | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            query: string
          }
        }
        output: MacrosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/macros/update_many': {
      $put: {
        input: { json: MacroUpdateManyInput }
        output: MacrosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/clients': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
          }
        }
        output: OAuthClientsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: OauthClientResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/oauth/clients/:oauth_client_id': {
      $get: {
        input: { param: { oauth_client_id: bigint } }
        output: OauthClientResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { oauth_client_id: bigint } }
        output: OauthClientResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { oauth_client_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/oauth/clients/:oauth_client_id/generate_secret': {
      $put: {
        input: { param: { oauth_client_id: bigint } }
        output: OauthClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/global_clients': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
          }
        }
        output: GlobalClientsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/global_clients/:global_client_id': {
      $get: {
        input: { param: { global_client_id: bigint } }
        output: GlobalClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/global_clients/token_summary': {
      $get: {
        input: {
          query: { global_client_id?: bigint | undefined; include_expired?: boolean | undefined }
        }
        output: GlobalClientsTokenSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/tokens': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
            client_id?: bigint | undefined
            global_client_id?: bigint | undefined
            all?: boolean | undefined
          }
        }
        output: OAuthTokensResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/oauth/tokens/:oauth_token_id': {
      $get: {
        input: { param: { oauth_token_id: bigint } }
        output: OAuthTokenResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { oauth_token_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/oauth/tokens/current': {
      $get: { input: {}; output: OAuthTokenResponse; outputFormat: 'json'; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/oauth/tokens/delete_many': {
      $post: {
        input: { json: OAuthTokensDeleteManyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v2/organization_fields': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            resolve_dc?: boolean | undefined
          }
        }
        output: OrganizationFieldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: OrganizationFieldRequest }
        output: OrganizationFieldResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/organization_fields/:organization_field_id': {
      $get: {
        input: { param: { organization_field_id: bigint | string } }
        output: OrganizationFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organization_field_id: bigint | string } } & {
          json: OrganizationFieldUpdateRequest
        }
        output: OrganizationFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { organization_field_id: bigint | string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/organization_fields/reorder': {
      $put: {
        input: { json: OrganizationFieldsReorderRequest }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organization_memberships': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include?: string | undefined
          }
        }
        output: OrganizationMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: OrganizationMembershipRequest }
        output: OrganizationMembershipResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/organization_memberships/:organization_membership_id': {
      $get: {
        input: { param: { organization_membership_id: bigint } }
        output: OrganizationMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { organization_membership_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/organization_memberships/create_many': {
      $post: {
        input: { json: OrganizationMembershipCreateManyRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organization_memberships/destroy_many': {
      $delete: {
        input: { query: { ids?: bigint[] | undefined } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organization_merges/:organization_merge_id': {
      $get: {
        input: { param: { organization_merge_id: string } }
        output: OrganizationMergeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organization_subscriptions': {
      $get: {
        input: {}
        output: OrganizationSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: OrganizationSubscriptionCreateRequest }
        output: OrganizationSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organization_subscriptions/:organization_subscription_id': {
      $get: {
        input: { param: { organization_subscription_id: bigint } }
        output: OrganizationSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { organization_subscription_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/organizations': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: OrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateOrganizationRequest }
        output: OrganizationResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/organizations/:organization_id': {
      $get: {
        input: { param: { organization_id: bigint } } & {
          query: {
            include?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: OrganizationResponse
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { organization_id: bigint } } & { json: UpdateOrganizationRequest }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: bigint } } & { json: UpdateOrganizationRequest }
            output: Errors
            outputFormat: 'json'
            status: 429
          }
      $delete: {
        input: { param: { organization_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/merge': {
      $post: {
        input: { param: { organization_id: bigint } } & { json: OrganizationMergeRequest }
        output: OrganizationMergeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/merges': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: OrganizationMergeListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/organization_memberships': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: OrganizationMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/related': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: OrganizationsRelatedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/requests': {
      $get: {
        input: { param: { organization_id: bigint } } & {
          query: { sort_by?: string | undefined; sort_order?: string | undefined }
        }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/subscriptions': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: OrganizationSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/tags': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organization_id: bigint } } & { json: TagsRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { param: { organization_id: bigint } } & { json: TagsAddRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { organization_id: bigint } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/tickets': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/tickets/count': {
      $get: {
        input: { param: { organization_id: bigint } }
        output: {
          count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/users': {
      $get: {
        input: { param: { organization_id: bigint } } & {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
            external_id?: string | undefined
            sort_by?: 'id' | 'name' | 'created_at' | 'updated_at' | undefined
            sort_order?: 'asc' | 'desc' | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: UsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/:organization_id/users/count': {
      $get: {
        input: { param: { organization_id: bigint } } & {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
          }
        }
        output: CountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/autocomplete': {
      $get:
        | {
            input: {
              query: {
                name: string
                field_id?: string | undefined
                source?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: OrganizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                field_id?: string | undefined
                source?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name: string
                field_id?: string | undefined
                source?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/organizations/count': {
      $get: {
        input: {
          query: {
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: CountOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/create_many': {
      $post: { input: {}; output: JobStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/organizations/create_or_update': {
      $post:
        | {
            input: { json: CreateOrUpdateOrganizationRequest }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateOrUpdateOrganizationRequest }
            output: OrganizationResponse
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/api/v2/organizations/destroy_many': {
      $delete: {
        input: { query: { ids?: string | undefined; external_ids?: string | undefined } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/search': {
      $get: {
        input: { query: { external_id?: number | undefined; name?: string | undefined } }
        output: OrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/show_many': {
      $get: {
        input: { query: { ids?: string | undefined; external_ids?: string | undefined } }
        output: OrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/organizations/update_many': {
      $put: {
        input: { query: { ids?: string | undefined; external_ids?: string | undefined } } & {
          json: OrganizationBulkUpdateRequest | OrganizationBatchUpdateRequest
        }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/problems': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: ListTicketProblemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/problems/autocomplete': {
      $post: {
        input: { query: { text?: string | undefined } } & { json: { text?: string | undefined } }
        output: ListTicketProblemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/push_notification_devices/destroy_many': {
      $post: {
        input: { json: PushNotificationDevicesRequest }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/queues': {
      $get: { input: {}; output: QueuesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: QueueRequest }
        output: QueueResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/queues/:queue_id': {
      $get: {
        input: { param: { queue_id: string } }
        output: QueueResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { queue_id: string } } & { json: QueueUpdateRequest }
        output: QueueResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { queue_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/queues/definitions': {
      $get: { input: {}; output: DefinitionsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/queues/order': {
      $patch: {
        input: { json: QueuesReorderRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/recipient_addresses': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include?: string | undefined
          }
        }
        output: SupportAddressesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: SupportAddressResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/recipient_addresses/:support_address_id': {
      $get: {
        input: { param: { support_address_id: bigint } }
        output: SupportAddressResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { support_address_id: bigint } }
        output: SupportAddressResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { support_address_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/recipient_addresses/:support_address_id/verify': {
      $put: {
        input: { param: { support_address_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/relationships/definitions/:target_type': {
      $get: {
        input: { param: { target_type: string } } & { query: { source_type?: string | undefined } }
        output: RelationshipFilterDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/remote_authentications': {
      $get: {
        input: { query: { brand_id?: bigint | undefined } }
        output: RemoteAuthenticationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests': {
      $get: {
        input: {
          query: {
            sort_by?: string | undefined
            sort_order?: string | undefined
            status?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RequestCreateRequest }
        output: RequestResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/requests/:request_id': {
      $get: {
        input: { param: { request_id: bigint } }
        output: RequestResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { request_id: bigint } } & { json: RequestUpdateRequest }
        output: RequestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/:request_id/comments': {
      $get: {
        input: { param: { request_id: bigint } } & {
          query: { since?: string | undefined; role?: string | undefined }
        }
        output: TicketCommentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/:request_id/comments/:ticket_comment_id': {
      $get: {
        input: { param: { request_id: bigint; ticket_comment_id: bigint } }
        output: TicketCommentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/ccd': {
      $get: {
        input: { query: { sort_by?: string | undefined; sort_order?: string | undefined } }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/open': {
      $get: {
        input: { query: { sort_by?: string | undefined; sort_order?: string | undefined } }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/search': {
      $get: {
        input: { query: { query?: string | undefined } }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/requests/solved': {
      $get: {
        input: { query: { sort_by?: string | undefined; sort_order?: string | undefined } }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/resource_collections': {
      $get: {
        input: { query: { per_page?: number | undefined } }
        output: ResourceCollectionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: JobStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/resource_collections/:resource_collection_id': {
      $get: {
        input: { param: { resource_collection_id: bigint } }
        output: ResourceCollectionResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resource_collection_id: bigint } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { resource_collection_id: bigint } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/routing/agents/:user_id/instance_values': {
      $get: {
        input: { param: { user_id: bigint } }
        output: SkillBasedRoutingAttributeValuesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { json: { attribute_value_ids: string[] } }
        output: SkillBasedRoutingAttributeValuesWithoutPriorityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/routing/agents/instance_values': {
      $get:
        | {
            input: {
              query: {
                'filter[agent_ids]': string
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: ManySkillBasedRoutingAttributeValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[agent_ids]': string
                'page[before]'?: string | undefined
                'page[after]'?: string | undefined
                'page[size]'?: number | undefined
              }
            }
            output: SkillBasedRoutingAttributeValuesError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/routing/agents/instance_values/jobs': {
      $post:
        | {
            input: { json: BulkSkillBasedRoutingAttributeValuesRequest }
            output: JobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkSkillBasedRoutingAttributeValuesRequest }
            output: SkillBasedRoutingAttributeValuesError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/routing/attributes': {
      $get: {
        input: { query: { include?: string | undefined } }
        output: SkillBasedRoutingAttributesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {}
        output: SkillBasedRoutingAttributeResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/routing/attributes/:attribute_id': {
      $get: {
        input: { param: { attribute_id: string } }
        output: SkillBasedRoutingAttributeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { attribute_id: string } }
        output: SkillBasedRoutingAttributeResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { attribute_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/routing/attributes/:attribute_id/values': {
      $get: {
        input: { param: { attribute_id: string } }
        output: SkillBasedRoutingAttributeValuesWithoutPriorityResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { attribute_id: string } }
        output: SkillBasedRoutingAttributeValueResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/routing/attributes/:attribute_id/values/:attribute_value_id': {
      $get: {
        input: { param: { attribute_id: string; attribute_value_id: string } }
        output: SkillBasedRoutingAttributeValueResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { attribute_id: string; attribute_value_id: string } }
        output: SkillBasedRoutingAttributeValueResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { attribute_id: string; attribute_value_id: string } }
        output: SkillBasedRoutingAttributeValueResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { attribute_id: string; attribute_value_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/routing/attributes/definitions': {
      $get: {
        input: {}
        output: SkillBasedRoutingAttributeDefinitions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/routing/requirements/fulfilled': {
      $get: {
        input: { query: { ticket_ids: bigint } }
        output: SkillBasedRoutingTicketFulfilledResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/routing/tickets/:ticket_id/instance_values': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: SkillBasedRoutingAttributeValuesResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ticket_id: bigint } } & {
              json: SkillBasedRoutingAttributeValueIdsRequest
            }
            output: SkillBasedRoutingAttributeValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: bigint } } & {
              json: SkillBasedRoutingAttributeValueIdsRequest
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticket_id: bigint } } & {
              json: SkillBasedRoutingAttributeValueIdsRequest
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ticket_id: bigint } } & {
              json: SkillBasedRoutingAttributeValueIdsRequest
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ticket_id: bigint } } & {
              json: SkillBasedRoutingAttributeValueIdsRequest
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/satisfaction_ratings': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: SatisfactionRatingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/satisfaction_ratings/:satisfaction_rating_id': {
      $get: {
        input: { param: { satisfaction_rating_id: bigint } }
        output: SatisfactionRatingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/satisfaction_ratings/count': {
      $get: {
        input: {}
        output: SatisfactionRatingsCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/satisfaction_reasons': {
      $get: { input: {}; output: SatisfactionReasonsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/satisfaction_reasons/:satisfaction_reason_id': {
      $get: {
        input: { param: { satisfaction_reason_id: bigint } }
        output: SatisfactionReasonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/saved_searches': {
      $get: { input: {}; output: SavedSearchesResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: SavedSearchInput }
            output: SavedSearchResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SavedSearchInput }
            output: SavedSearchError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: SavedSearchInput }
            output: SavedSearchValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/saved_searches/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: SavedSearchInput }
            output: SavedSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SavedSearchInput }
            output: SavedSearchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SavedSearchInput }
            output: SavedSearchError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: SavedSearchInput }
            output: SavedSearchValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: SavedSearchError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: SavedSearchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: SavedSearchError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/v2/search': {
      $get: {
        input: {
          query: {
            query: string
            sort_by?: string | undefined
            sort_order?: string | undefined
            brand_id?: 'all' | bigint | undefined
            include?: string | undefined
          }
        }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/search/count': {
      $get: {
        input: { query: { query: string; brand_id?: 'all' | bigint | undefined } }
        output: SearchCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/search/export': {
      $get: {
        input: {
          query: {
            query: string
            'page[size]'?: number | undefined
            'page[after]'?: string | undefined
            'filter[type]': string
            include?: string | undefined
          }
        }
        output: SearchExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/security_settings': {
      $get: {
        input: { query: { brand_id?: bigint | undefined } }
        output: SecuritySettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/sessions': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
          }
        }
        output: SessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/sharing_agreements': {
      $get: { input: {}; output: SharingAgreementsResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SharingAgreementCreateRequest }
        output: SharingAgreementResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/sharing_agreements/:sharing_agreement_id': {
      $get: {
        input: { param: { sharing_agreement_id: bigint } }
        output: SharingAgreementResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sharing_agreement_id: bigint } } & { json: SharingAgreementUpdateRequest }
        output: SharingAgreementResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { sharing_agreement_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/skips': {
      $get: {
        input: { query: { sort_order?: 'asc' | 'desc' | undefined } }
        output: TicketSkipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { sort_order?: 'asc' | 'desc' | undefined } } & {
          json: TicketSkipCreateInput
        }
        output: TicketSkipCreation
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/slas/policies': {
      $get: { input: {}; output: SLAPoliciesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SLAPolicyRequest }
        output: SLAPolicyResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/slas/policies/:sla_policy_id': {
      $get: {
        input: { param: { sla_policy_id: bigint } }
        output: SLAPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sla_policy_id: bigint } } & { json: SLAPolicyUpdateRequest }
        output: SLAPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { sla_policy_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/slas/policies/definitions': {
      $get: {
        input: {}
        output: SLAPolicyFilterDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/slas/policies/reorder': {
      $put: {
        input: { json: SLAPoliciesReorderRequest }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/suspended_tickets': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: SuspendedTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/suspended_tickets/:id': {
      $get: {
        input: { param: { id: bigint } }
        output: SuspendedTicketResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/suspended_tickets/:id/recover': {
      $put:
        | {
            input: { param: { id: bigint } }
            output: RecoverSuspendedTicketResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/api/v2/suspended_tickets/attachments': {
      $post: {
        input: {}
        output: SuspendedTicketsAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/suspended_tickets/bulk_recover': {
      $put:
        | {
            input: { query: { ids: string } } & {
              json: { author?: { email?: string | undefined; id?: bigint | undefined } | undefined }
            }
            output: JobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } } & {
              json: { author?: { email?: string | undefined; id?: bigint | undefined } | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/suspended_tickets/destroy_many': {
      $delete: { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/suspended_tickets/export': {
      $post: {
        input: {}
        output: SuspendedTicketsExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/suspended_tickets/recover_many': {
      $put: {
        input: { query: { ids: string } }
        output: RecoverSuspendedTicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tags': {
      $get: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: TagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tags/count': {
      $get: { input: {}; output: TagCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/target_failures': {
      $get: { input: {}; output: TargetFailuresResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/target_failures/:target_failure_id': {
      $get: {
        input: { param: { target_failure_id: bigint } }
        output: TargetFailureResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/targets': {
      $get: { input: {}; output: TargetsResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: TargetResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/targets/:target_id': {
      $get: {
        input: { param: { target_id: bigint } }
        output: TargetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { target_id: bigint } }
        output: TargetResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { target_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/task_list_templates': {
      $get: { input: {}; output: TaskListTemplatesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: TaskListTemplateCreateRequest }
        output: TaskListTemplateResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/task_list_templates/:task_list_template_id': {
      $get: {
        input: { param: { task_list_template_id: string } }
        output: TaskListTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { task_list_template_id: string } } & {
          json: TaskListTemplateUpdateRequest
        }
        output: TaskListTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { task_list_template_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/task_list_templates/:task_list_template_id/tasks': {
      $get: {
        input: { param: { task_list_template_id: string } }
        output: TasksByTaskListTemplateIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/task_lists/:task_list_id': {
      $get: {
        input: { param: { task_list_id: string } }
        output: TaskListInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { task_list_id: string } } & { json: TaskListInstanceUpdateRequest }
        output: TaskListInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { task_list_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/task_lists/:task_list_id/task_items': {
      $get: {
        input: { param: { task_list_id: string } }
        output: TaskItemInstancesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { task_list_id: string } } & { json: TaskItemCreateRequest }
        output: TaskItemInstanceResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/task_lists/:task_list_id/task_items/:task_item_id': {
      $get: {
        input: { param: { task_list_id: string; task_item_id: string } }
        output: TaskItemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { task_list_id: string; task_item_id: string } } & {
          json: TaskItemUpdateRequest
        }
        output: TaskItemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { task_list_id: string; task_item_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_audits': {
      $get: {
        input: {
          query: {
            'page[before]'?: string | undefined
            'page[after]'?: string | undefined
            'page[size]'?: number | undefined
          }
        }
        output: TicketAuditsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_content_pins': {
      $get: {
        input: { query: { ticket_id?: string | undefined } }
        output: { count?: number | undefined; ticket_content_pins?: TicketContentPin[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                ticket_content_pin?:
                  | {
                      content_id: string
                      content_type: string
                      locale?: string | undefined
                      ticket_id: string
                    }
                  | undefined
              }
            }
            output: { ticket_content_pin?: TicketContentPin | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                ticket_content_pin?:
                  | {
                      content_id: string
                      content_type: string
                      locale?: string | undefined
                      ticket_id: string
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; title?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ticket_content_pin?:
                  | {
                      content_id: string
                      content_type: string
                      locale?: string | undefined
                      ticket_id: string
                    }
                  | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                ticket_content_pin?:
                  | {
                      content_id: string
                      content_type: string
                      locale?: string | undefined
                      ticket_id: string
                    }
                  | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/ticket_content_pins/:content_pin_id': {
      $delete:
        | {
            input: { param: { content_pin_id: string } }
            output: { ticket_content_pin?: TicketContentPin | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { content_pin_id: string } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/ticket_fields': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            creator?: boolean | undefined
            active_forms_count?: boolean | undefined
            only_system_fields?: boolean | undefined
            include_anonymous_availability?: boolean | undefined
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: TicketFieldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: TicketFieldRequest }
        output: TicketFieldResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/ticket_fields/:ticket_field_id': {
      $get: {
        input: { param: { ticket_field_id: bigint } } & { query: { creator?: boolean | undefined } }
        output: TicketFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ticket_field_id: bigint } } & {
          query: { creator?: boolean | undefined }
        } & { json: TicketFieldUpdateRequest }
        output: TicketFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_field_id: bigint } } & { query: { creator?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_fields/:ticket_field_id/options': {
      $get: {
        input: { param: { ticket_field_id: bigint } }
        output: CustomFieldOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ticket_field_id: bigint } } & {
              json: {
                custom_field_option: {
                  id?: (bigint | null) | undefined
                  name: string
                  position?: number | undefined
                  value?: string | undefined
                }
              }
            }
            output: CustomFieldOptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_field_id: bigint } } & {
              json: {
                custom_field_option: {
                  id?: (bigint | null) | undefined
                  name: string
                  position?: number | undefined
                  value?: string | undefined
                }
              }
            }
            output: CustomFieldOptionResponse
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/api/v2/ticket_fields/:ticket_field_id/options/:ticket_field_option_id': {
      $get: {
        input: { param: { ticket_field_id: bigint; ticket_field_option_id: bigint } }
        output: CustomFieldOptionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_field_id: bigint; ticket_field_option_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_fields/count': {
      $get: { input: {}; output: TicketFieldCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/ticket_fields/reorder': {
      $put: {
        input: { json: { ticket_field_ids: bigint[] } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_fields/show_many': {
      $get: {
        input: {
          query: {
            ids?: string | undefined
            keys?: string | undefined
            creator?: boolean | undefined
            exclude_sub_selection_options?: boolean | undefined
          }
        }
        output: TicketFieldsShowManyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_form_statuses': {
      $get: {
        input: {
          query: {
            ticket_form_id?: string | undefined
            filter?: { custom_status_id?: string | undefined; id?: string | undefined } | undefined
          }
        }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_form_statuses/show_many': {
      $get: {
        input: { query: { ids: string } }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_forms': {
      $get: {
        input: {
          query: {
            active?: boolean | undefined
            end_user_visible?: boolean | undefined
            fallback_to_default?: boolean | undefined
            form_type?: 'standard' | 'service_catalog' | 'all' | undefined
            associated_to_brand?: boolean | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
            locale?: string | undefined
          }
        }
        output: TicketFormsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: TicketFormRequest }
        output: TicketFormResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/ticket_forms/:ticket_form_id': {
      $get: {
        input: { param: { ticket_form_id: bigint } }
        output: TicketFormResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ticket_form_id: bigint } } & { json: TicketFormUpdateRequest }
        output: TicketFormResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_form_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_forms/:ticket_form_id/clone': {
      $post: {
        input: { param: { ticket_form_id: bigint } } & { json: CloneTicketFormRequest }
        output: TicketFormResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_forms/:ticket_form_id/ticket_form_statuses': {
      $get: {
        input: { param: { ticket_form_id: bigint } }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ticket_form_id: bigint } } & { json: TicketFormStatusesParams }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ticket_form_id: bigint } } & { json: UpdateTicketFormStatusesParams }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_form_id: bigint } } & { json: { id?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_forms/:ticket_form_id/ticket_form_statuses/:ticket_form_status_id': {
      $put: {
        input: { param: { ticket_form_id: bigint; ticket_form_status_id: string } } & {
          json: {
            ticket_form_status: {
              _destroy?: string | undefined
              custom_status_id?: bigint | undefined
            }
          }
        }
        output: TicketFormStatusesResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_form_id: bigint; ticket_form_status_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/ticket_forms/reorder': {
      $put: {
        input: { json: ReorderTicketFormsRequest }
        output: TicketFormsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_forms/show_many': {
      $get: {
        input: {
          query: {
            ids: string
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
            active?: boolean | undefined
            end_user_visible?: boolean | undefined
            fallback_to_default?: boolean | undefined
            associated_to_brand?: boolean | undefined
          }
        }
        output: TicketFormsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_metrics': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
          }
        }
        output: TicketMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ticket_metrics/:ticket_metric_id': {
      $get: {
        input: { param: { ticket_metric_id: string } }
        output: TicketMetricsByTicketMetricIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets': {
      $get: {
        input: {
          query: {
            external_id?: string | undefined
            sort_by?:
              | 'id'
              | 'subject'
              | 'deleted_at'
              | 'created_at'
              | 'updated_at'
              | 'status'
              | 'requester'
              | 'requester.name'
              | 'group'
              | 'assignee'
              | 'assignee.name'
              | undefined
            sort_order?: 'asc' | 'desc' | undefined
            support_type_scope?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include?: string | undefined
          }
        }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { include?: string | undefined } } & { json: TicketCreateRequest }
        output: TicketResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id': {
      $get: {
        input: { param: { ticket_id: bigint } } & {
          query: {
            include?: string | undefined
            reduced_payload_size?: boolean | undefined
            remove_duplicate_fields?: boolean | undefined
          }
        }
        output: TicketResponse
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { ticket_id: bigint } } & { json: TicketUpdateRequest }
            output: TicketUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticket_id: bigint } } & { json: TicketUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ticket_id: bigint } } & { json: TicketUpdateRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete: {
        input: { param: { ticket_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/audits': {
      $get: {
        input: { param: { ticket_id: bigint } } & {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
            include?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
            filter_events?: string[] | undefined
            sort_order?: 'asc' | 'desc' | undefined
          }
        }
        output: TicketAuditsResponseNoneCursor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/audits/:ticket_audit_id': {
      $get: {
        input: { param: { ticket_id: bigint; ticket_audit_id: bigint } }
        output: TicketAuditResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/audits/:ticket_audit_id/make_private': {
      $put: {
        input: { param: { ticket_id: bigint; ticket_audit_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/audits/count': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TicketAuditsCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/collaborators': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: ListTicketCollaboratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/comments': {
      $get: {
        input: { param: { ticket_id: bigint } } & {
          query: {
            include_inline_images?: boolean | undefined
            include?: string | undefined
            per_page?: number | undefined
            sort_order?: 'asc' | 'desc' | undefined
            sort?: 'created_at' | '-created_at' | undefined
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
          }
        }
        output: TicketCommentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/comments/:comment_id/attachments/:attachment_id/redact': {
      $put: {
        input: { param: { ticket_id: bigint; comment_id: bigint; attachment_id: bigint } }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/comments/:ticket_comment_id/make_private': {
      $put: {
        input: { param: { ticket_id: bigint; ticket_comment_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/comments/:ticket_comment_id/redact': {
      $put: {
        input: { param: { ticket_id: bigint; ticket_comment_id: bigint } } & {
          json: { text: string }
        }
        output: TicketCommentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/comments/count': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TicketCommentsCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/conversation_log': {
      $get: {
        input: { param: { ticket_id: bigint } } & {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
          }
        }
        output: ConversationLogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/email_ccs': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: ListTicketEmailCCsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/followers': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: ListTicketFollowersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/group_slas/policy_metrics': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: {
          policy_metrics?:
            | {
                breach_at?: (string | null) | undefined
                days?: number | undefined
                hours?: number | undefined
                metric?: string | undefined
                minutes?: number | undefined
                stage?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/incidents': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: ListTicketIncidentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/macros/:macro_id/apply': {
      $get: {
        input: { param: { macro_id: bigint; ticket_id: bigint } } & {
          query: { normalize_comment?: boolean | undefined }
        }
        output: MacroApplyTicketResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/mark_as_spam': {
      $put: {
        input: { param: { ticket_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/merge': {
      $post: {
        input: { param: { ticket_id: bigint } } & { json: TicketMergeInput }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/metric_events': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: {
          [x: string]: {
            id?: bigint | undefined
            instance_id?: bigint | undefined
            metric?: string | undefined
            ticket_id?: bigint | undefined
            time?: string | undefined
            type?: string | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/metrics': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TicketMetricsByTicketMetricIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/parent_ticket_tasks': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: ParentTicketTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/related': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TicketRelatedInformation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/satisfaction_rating': {
      $post: {
        input: { param: { ticket_id: bigint } } & { json: SatisfactionRatingRequest }
        output: SatisfactionRatingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/skips': {
      $get: {
        input: { param: { ticket_id: bigint } } & {
          query: { sort_order?: 'asc' | 'desc' | undefined }
        }
        output: TicketSkipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/slas/policy_metrics': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: {
          policy_metrics?:
            | {
                breach_at?: (string | null) | undefined
                days?: number | undefined
                hours?: number | undefined
                metric?: string | undefined
                minutes?: number | undefined
                stage?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/tags': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ticket_id: bigint } } & { json: TagsRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { param: { ticket_id: bigint } } & { json: TagsAddRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { ticket_id: bigint } } & { query: { tags?: string | undefined } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/task_items/:task_item_id/subticket': {
      $post: {
        input: { param: { ticket_id: bigint; task_item_id: string } } & {
          json: SubticketCreateRequest
        }
        output: SubticketCreateResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/task_items/:task_item_id/task_links': {
      $get: {
        input: { param: { ticket_id: bigint; task_item_id: string } }
        output: TaskObjectLinksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ticket_id: bigint; task_item_id: string } } & {
          json: TaskObjectLinkCreateRequest
        }
        output: TaskObjectLinkResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/task_items/:task_item_id/task_links/:task_object_link_id': {
      $delete: {
        input: { param: { ticket_id: bigint; task_item_id: string; task_object_link_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/tickets/:ticket_id/task_lists': {
      $get: {
        input: { param: { ticket_id: bigint } }
        output: TaskListByTicketIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ticket_id: bigint } } & { json: TaskListCreateRequest }
            output: TaskListCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ticket_id: bigint } } & { json: TaskListCreateRequest }
            output: TaskListValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v2/tickets/autocomplete': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            support_type_scope?: string | undefined
            field_id?: string | undefined
            source?: string | undefined
          }
        }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/count': {
      $get: {
        input: {}
        output: {
          count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/create_many': {
      $post: {
        input: { json: TicketsCreateRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/destroy_many': {
      $delete: {
        input: { query: { ids: string } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/mark_many_as_spam': {
      $put: {
        input: { query: { ids: string } }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/messaging/conversations/:conversation_id/ticket': {
      $get:
        | {
            input: { param: { conversation_id: string } }
            output: TicketResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v2/tickets/recent': {
      $get: { input: {}; output: TicketsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/tickets/show_many': {
      $get: {
        input: { query: { ids: string; include?: string | undefined } }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/tickets/update_many': {
      $put: {
        input: { query: { ids?: string | undefined } } & { json: TicketsUpdateRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/trigger_categories': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                sort?:
                  | 'position'
                  | '-position'
                  | 'name'
                  | '-name'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
                include?: 'rule_counts' | undefined
              }
            }
            output: {
              trigger_categories?: TriggerCategoryRuleCounts[] | undefined
              links?: { next?: string | undefined; prev?: string | undefined } | undefined
              meta?:
                | {
                    after_cursor?: string | undefined
                    before_cursor?: string | undefined
                    has_more?: boolean | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                sort?:
                  | 'position'
                  | '-position'
                  | 'name'
                  | '-name'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
                include?: 'rule_counts' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                sort?:
                  | 'position'
                  | '-position'
                  | 'name'
                  | '-name'
                  | 'created_at'
                  | '-created_at'
                  | 'updated_at'
                  | '-updated_at'
                  | undefined
                include?: 'rule_counts' | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              json: {
                trigger_category?: { name: string; position?: bigint | undefined } | undefined
              }
            }
            output: TriggerCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                trigger_category?: { name: string; position?: bigint | undefined } | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                trigger_category?: { name: string; position?: bigint | undefined } | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/trigger_categories/:trigger_category_id': {
      $get:
        | {
            input: { param: { trigger_category_id: string } }
            output: TriggerCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_category_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { trigger_category_id: string } } & {
              json: { trigger_category?: TriggerCategoryRequest | undefined }
            }
            output: TriggerCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_category_id: string } } & {
              json: { trigger_category?: TriggerCategoryRequest | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trigger_category_id: string } } & {
              json: { trigger_category?: TriggerCategoryRequest | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { trigger_category_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { trigger_category_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trigger_category_id: string } }
            output: Errors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/trigger_categories/jobs': {
      $post:
        | {
            input: { json: BatchJobRequest }
            output: BatchJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchJobRequest }
            output: BatchJobResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/triggers': {
      $get: {
        input: {
          query: {
            active?: boolean | undefined
            sort?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            category_id?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            include?: string | undefined
          }
        }
        output: TriggersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: TriggerWithCategoryRequest }
        output: TriggerResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/triggers/:trigger_id': {
      $get: {
        input: { param: { trigger_id: bigint } }
        output: TriggerResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { trigger_id: bigint } } & { json: TriggerUpdateRequest }
        output: TriggerResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { trigger_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/triggers/:trigger_id/revisions': {
      $get:
        | {
            input: { param: { trigger_id: bigint } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                order?: 'asc' | 'desc' | undefined
                include?: string | undefined
              }
            }
            output: TriggerRevisionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_id: bigint } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                order?: 'asc' | 'desc' | undefined
                include?: string | undefined
              }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { trigger_id: bigint } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                order?: 'asc' | 'desc' | undefined
                include?: string | undefined
              }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { trigger_id: bigint } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                order?: 'asc' | 'desc' | undefined
                include?: string | undefined
              }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/triggers/:trigger_id/revisions/:trigger_revision_id': {
      $get:
        | {
            input: { param: { trigger_id: bigint; trigger_revision_id: bigint } } & {
              query: { include?: string | undefined }
            }
            output: TriggerRevisionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_id: bigint; trigger_revision_id: bigint } } & {
              query: { include?: string | undefined }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { trigger_id: bigint; trigger_revision_id: bigint } } & {
              query: { include?: string | undefined }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { trigger_id: bigint; trigger_revision_id: bigint } } & {
              query: { include?: string | undefined }
            }
            output: TriggerRevisionErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/triggers/active': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            category_id?: string | undefined
          }
        }
        output: TriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/triggers/definitions': {
      $get: { input: {}; output: TriggerDefinitionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/triggers/destroy_many': {
      $delete: { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/triggers/limits': {
      $get: { input: {}; output: TriggerLimitsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/triggers/reorder': {
      $put: {
        input: { json: TriggerReorderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v2/triggers/search': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            filter?: string | undefined
            active?: boolean | undefined
            sort?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            include?: string | undefined
          }
        }
        output: TriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/triggers/update_many': {
      $put: {
        input: { json: TriggerBulkUpdateRequest }
        output: TriggersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/triggers/validate': {
      $post: {
        input: {
          json: { fail_on_validate?: boolean | undefined; trigger?: TriggerObject | undefined }
        }
        output: TriggerValidationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/uploads': {
      $post: {
        input: { query: { filename: string } }
        output: AttachmentUploadResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/uploads/:token': {
      $delete: {
        input: { param: { token: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/user_fields': {
      $get: {
        input: {
          query: {
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            resolve_dc?: boolean | undefined
          }
        }
        output: UserFieldsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: UserFieldRequest }
        output: UserFieldResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/user_fields/:user_field_id': {
      $get: {
        input: { param: { user_field_id: bigint | string } }
        output: UserFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_field_id: bigint | string } } & { json: UserFieldUpdateRequest }
        output: UserFieldResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_field_id: bigint | string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/user_fields/:user_field_id/options': {
      $get: {
        input: { param: { user_field_id: bigint | string } }
        output: CustomFieldOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { user_field_id: bigint | string } } & { json: UserFieldOptionRequest }
            output: CustomFieldOptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_field_id: bigint | string } } & { json: UserFieldOptionRequest }
            output: CustomFieldOptionResponse
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/api/v2/user_fields/:user_field_id/options/:user_field_option_id': {
      $get: {
        input: { param: { user_field_id: bigint | string; user_field_option_id: bigint } }
        output: CustomFieldOptionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_field_id: bigint | string; user_field_option_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/user_fields/reorder': {
      $put: {
        input: { json: UserFieldsReorderRequest }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/user_fields/show_many': {
      $get: {
        input: { query: { keys?: string | undefined } }
        output: UserFieldsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users': {
      $get: {
        input: {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
            external_id?: string | undefined
            include?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
            brand_id?: 'all' | bigint | undefined
          }
        }
        output: UsersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: UserRequest }
        output: UserResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/users/:user_id': {
      $get: {
        input: { param: { user_id: bigint } } & { query: { include?: string | undefined } }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: bigint } } & { json: UserUpdateRequest } & {
          form: { [x: string]: unknown }
        }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint } }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/brand_agents': {
      $get: {
        input: { param: { user_id: bigint } }
        output: BrandAgentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/brand_agents/:brand_agent_id': {
      $get: {
        input: { param: { user_id: bigint; brand_agent_id: string } }
        output: BrandAgentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/compliance_deletion_statuses': {
      $get: {
        input: { param: { user_id: bigint } } & { query: { application?: string | undefined } }
        output: ComplianceDeletionStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/entitlements/full': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: UserEntitlementsFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/users/:user_id/group_memberships': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            include?: string | undefined
            per_page?: number | undefined
          }
        }
        output: GroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { json: CreateUserGroupMembershipRequest }
        output: GroupMembershipResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/users/:user_id/group_memberships/:group_membership_id': {
      $get: {
        input: { param: { user_id: bigint; group_membership_id: bigint } }
        output: GroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint; group_membership_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/group_memberships/:group_membership_id/make_default': {
      $put: {
        input: { param: { user_id: bigint; group_membership_id: bigint } }
        output: GroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/groups': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
            exclude_deleted?: boolean | undefined
          }
        }
        output: GroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/groups/count': {
      $get: {
        input: { param: { user_id: bigint } }
        output: GroupsCountObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/identities': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            type?:
              | (
                  | 'agent_forwarding'
                  | 'any_channel'
                  | 'email'
                  | 'facebook'
                  | 'foreign'
                  | 'messaging'
                  | 'microsoft'
                  | 'phone_number'
                  | 'sdk'
                  | 'twitter'
                )[]
              | undefined
            page?:
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort?: string | undefined
            include_boundary_indicators?: boolean | undefined
            include_item_cursors?: boolean | undefined
          }
        }
        output: UserIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { query: { brand_id?: bigint | undefined } } & {
          json: UserIdentityCreateRequest
        }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/users/:user_id/identities/:user_identity_id': {
      $get: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } } & {
          json: UserIdentityUpdateRequest
        }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/identities/:user_identity_id/make_primary': {
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: UserIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/identities/:user_identity_id/request_verification': {
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } } & {
          query: { brand_id?: bigint | undefined }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/identities/:user_identity_id/verify': {
      $put: {
        input: { param: { user_id: bigint; user_identity_id: bigint } }
        output: UserIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/merge': {
      $put: {
        input: { param: { user_id: bigint } } & { json: UserRequest }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/organization_memberships': {
      $get: {
        input: { param: { user_id: bigint } } & { query: { include?: string | undefined } }
        output: OrganizationMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { json: UserOrganizationMembershipRequest }
        output: OrganizationMembershipResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/users/:user_id/organization_memberships/:organization_membership_id': {
      $get: {
        input: { param: { user_id: bigint; organization_membership_id: bigint } }
        output: OrganizationMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint; organization_membership_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/organization_memberships/:organization_membership_id/make_default': {
      $put: {
        input: { param: { user_id: bigint; organization_membership_id: bigint } }
        output: OrganizationMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/organization_subscriptions': {
      $get: {
        input: { param: { user_id: bigint } }
        output: OrganizationSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/organizations': {
      $get:
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                sort?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: OrganizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                sort?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: bigint } } & {
              query: {
                page?:
                  | number
                  | {
                      after?: string | undefined
                      before?: string | undefined
                      size?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                sort?: string | undefined
                include_boundary_indicators?: boolean | undefined
                include_item_cursors?: boolean | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/users/:user_id/organizations/:organization_id': {
      $delete: {
        input: { param: { organization_id: bigint; user_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/organizations/:organization_id/make_default': {
      $put: {
        input: { param: { user_id: bigint; organization_id: bigint } }
        output: OrganizationMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/organizations/count': {
      $get: {
        input: { param: { user_id: bigint } }
        output: CountOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/password': {
      $post: {
        input: { param: { user_id: bigint } }
        output: string
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: bigint } } & { query: { brand_id?: bigint | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/password/requirements': {
      $get: {
        input: { param: { user_id: bigint } }
        output: UserPasswordRequirementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/related': {
      $get: {
        input: { param: { user_id: bigint } }
        output: UserRelatedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/requests': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            sort_by?: string | undefined
            sort_order?: string | undefined
            status?: string | undefined
          }
        }
        output: RequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/sessions': {
      $get: {
        input: { param: { user_id: bigint } }
        output: SessionsResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/sessions/:session_id': {
      $get: {
        input: { param: { session_id: bigint; user_id: bigint } }
        output: SessionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { session_id: bigint; user_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/users/:user_id/skips': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: { sort_order?: 'asc' | 'desc' | undefined }
        }
        output: TicketSkipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/suspension': {
      $get:
        | {
            input: { param: { user_id: bigint } }
            output: SuspensionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionCreateRequest }
            output: SuspensionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionCreateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionCreateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionCreateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionUpdateRequest }
            output: SuspensionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionUpdateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionUpdateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: bigint } } & { json: SuspensionUpdateRequest }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { user_id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { user_id: bigint } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: bigint } }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/users/:user_id/tags': {
      $get: {
        input: { param: { user_id: bigint } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: bigint } } & { json: TagsRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { param: { user_id: bigint } } & { json: TagsAddRequest }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: bigint } }
        output: TagsByObjectIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/assigned': {
      $get: {
        input: { param: { user_id: bigint } }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/assigned/count': {
      $get: {
        input: { param: { user_id: bigint } }
        output: {
          count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/ccd': {
      $get: {
        input: { param: { user_id: bigint } }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/ccd/count': {
      $get: {
        input: { param: { user_id: bigint } }
        output: {
          count?: { refreshed_at?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/followed': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            sort_by?:
              | 'id'
              | 'subject'
              | 'deleted_at'
              | 'created_at'
              | 'updated_at'
              | 'status'
              | 'requester'
              | 'requester.name'
              | 'group'
              | 'assignee'
              | 'assignee.name'
              | undefined
            sort_order?: 'asc' | 'desc' | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            exclude_archived?: boolean | undefined
          }
        }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/:user_id/tickets/requested': {
      $get: {
        input: { param: { user_id: bigint } } & {
          query: {
            sort_by?:
              | 'id'
              | 'subject'
              | 'deleted_at'
              | 'created_at'
              | 'updated_at'
              | 'status'
              | 'requester'
              | 'requester.name'
              | 'group'
              | 'assignee'
              | 'assignee.name'
              | undefined
            sort_order?: 'asc' | 'desc' | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            include?: string | undefined
            exclude_archived?: boolean | undefined
            exclude_count?: boolean | undefined
          }
        }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/autocomplete': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                phone?: string | undefined
                filter?: 'assignable' | 'requester' | undefined
                field_id?: string | undefined
                source?: string | undefined
                include?: string | undefined
                per_page?: number | undefined
                brand_id?: 'all' | bigint | undefined
              }
            }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                phone?: string | undefined
                filter?: 'assignable' | 'requester' | undefined
                field_id?: string | undefined
                source?: string | undefined
                include?: string | undefined
                per_page?: number | undefined
                brand_id?: 'all' | bigint | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                include?: string | undefined
                filter?: string | undefined
                per_page?: number | undefined
              }
            } & {
              json: {
                brand_id?: 'all' | bigint | undefined
                field_id?: bigint | undefined
                filter?:
                  | 'assignable'
                  | 'requester'
                  | { dynamic_values?: { [x: string]: unknown } | undefined }
                  | undefined
                name?: string | undefined
                phone?: string | undefined
                source?: string | undefined
              }
            }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                filter?: string | undefined
                per_page?: number | undefined
              }
            } & {
              json: {
                brand_id?: 'all' | bigint | undefined
                field_id?: bigint | undefined
                filter?:
                  | 'assignable'
                  | 'requester'
                  | { dynamic_values?: { [x: string]: unknown } | undefined }
                  | undefined
                name?: string | undefined
                phone?: string | undefined
                source?: string | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include?: string | undefined
                filter?: string | undefined
                per_page?: number | undefined
              }
            } & {
              json: {
                brand_id?: 'all' | bigint | undefined
                field_id?: bigint | undefined
                filter?:
                  | 'assignable'
                  | 'requester'
                  | { dynamic_values?: { [x: string]: unknown } | undefined }
                  | undefined
                name?: string | undefined
                phone?: string | undefined
                source?: string | undefined
              }
            }
            output: { description?: string | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/users/count': {
      $get: {
        input: {
          query: {
            role?: string | undefined
            'role[]'?: string[] | undefined
            permission_set?: bigint | undefined
            brand_id?: 'all' | bigint | undefined
          }
        }
        output: CountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/create_many': {
      $post: {
        input: { json: UsersRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/create_or_update': {
      $post:
        | { input: { json: UserRequest }; output: UserResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: UserRequest }; output: UserResponse; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/v2/users/create_or_update_many': {
      $post: {
        input: { json: UsersRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/destroy_many': {
      $delete: {
        input: {
          query: {
            ids?: string | undefined
            external_ids?: string | undefined
            brand_id?: '0' | bigint | undefined
          }
        }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/logout_many': {
      $post: {
        input: { query: { ids?: string | undefined } }
        output: string
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/v2/users/me': {
      $get: {
        input: { query: { include?: string | undefined } }
        output: CurrentUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/me/logout': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/users/me/oauth/clients': {
      $get: { input: {}; output: OAuthClientsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/users/me/session': {
      $get: { input: {}; output: SessionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/users/me/session/renew': {
      $get: { input: {}; output: RenewSessionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/users/me/settings': {
      $get: { input: {}; output: UserSettingsResponse; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { json: UserSettingsUpdateRequest }
            output: UserSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserSettingsUpdateRequest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UserSettingsUpdateRequest }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v2/users/request_create': {
      $post: { input: { json: UserRequest }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/users/search': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            external_id?: string | undefined
            brand_id?: 'all' | bigint | undefined
            include?: string | undefined
          }
        }
        output: UsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/users/show_many': {
      $get:
        | {
            input: {
              query: {
                ids?: string | undefined
                external_ids?: string | undefined
                include_deleted?: boolean | undefined
                brand_id?: bigint | undefined
                include?: string | undefined
              }
            }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: string | undefined
                external_ids?: string | undefined
                include_deleted?: boolean | undefined
                brand_id?: bigint | undefined
                include?: string | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/users/update_many': {
      $put: {
        input: {
          query: {
            ids?: string | undefined
            external_ids?: string | undefined
            brand_id?: bigint | undefined
          }
        } & { json: UserUpdateRequest | UsersRequest }
        output: JobStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views': {
      $get: {
        input: {
          query: {
            access?: string | undefined
            active?: boolean | undefined
            group_id?: bigint | undefined
            sort?: string | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
          }
        }
        output: ViewsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: ViewResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/views/:view_id': {
      $get: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } } & {
          query: { include?: string | undefined }
        }
        output: ViewResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } }
        output: ViewResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/views/:view_id/count': {
      $get: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } }
        output: ViewCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/:view_id/execute': {
      $get: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } } & {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            include?: string | undefined
            exclude?: string | undefined
            group_by?: string | undefined
          }
        }
        output: ViewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/:view_id/export': {
      $get: {
        input: { param: { view_id: bigint } }
        output: ViewExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/:view_id/tickets': {
      $get: {
        input: { param: { view_id: bigint | 'incoming' | 'my' | 'my_groups' } } & {
          query: { sort_by?: string | undefined; sort_order?: string | undefined }
        }
        output: TicketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/active': {
      $get: {
        input: {
          query: {
            access?: string | undefined
            group_id?: bigint | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
          }
        }
        output: ViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/compact': {
      $get: { input: {}; output: ViewsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/views/count': {
      $get: { input: {}; output: ViewsCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/views/count_many': {
      $get:
        | {
            input: { query: { ids: string } }
            output: ViewCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { ids: string } }; output: Errors; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/views/definitions': {
      $get: {
        input: {}
        output: {
          definitions?:
            | {
                conditions_all?: { [x: string]: unknown }[] | undefined
                conditions_any?: { [x: string]: unknown }[] | undefined
                groupables?: { [x: string]: unknown }[] | undefined
                output?: { [x: string]: unknown }[] | undefined
                sortables?: { [x: string]: unknown }[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/destroy_many': {
      $delete: { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/views/preview': {
      $post: {
        input: {
          query: {
            page?:
              | number
              | {
                  after?: string | undefined
                  before?: string | undefined
                  size?: number | undefined
                }
              | undefined
            per_page?: number | undefined
            include?: string | undefined
            exclude?: string | undefined
          }
        } & { json: ViewPreviewRequest }
        output: ViewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/preview/count': {
      $post: { input: {}; output: ViewCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/views/search': {
      $get: {
        input: {
          query: {
            query: string
            access?: string | undefined
            active?: boolean | undefined
            group_id?: bigint | undefined
            sort_by?: string | undefined
            sort_order?: string | undefined
            include?: string | undefined
          }
        }
        output: ViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/show_many': {
      $get: {
        input: { query: { ids: string; active?: boolean | undefined } }
        output: ViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/views/update_many': {
      $put: { input: {}; output: ViewsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/workspaces': {
      $get: { input: {}; output: WorkspaceResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: { workspace?: WorkspaceInput | undefined } }
        output: { workspace?: WorkspaceObject | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/v2/workspaces/:workspace_id': {
      $get: {
        input: { param: { workspace_id: bigint } }
        output: { workspace?: WorkspaceObject | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { workspace_id: bigint } } & {
          json: { workspace?: WorkspaceInput | undefined }
        }
        output: { workspace?: WorkspaceObject | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workspace_id: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/workspaces/destroy_many': {
      $delete: {
        input: { query: { ids: bigint[] } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/workspaces/reorder': {
      $put: {
        input: { json: { ids?: number[] | undefined } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/tokens': {
      $post: { input: {}; output: OAuthTokenForGrantTypesObject; outputFormat: 'json'; status: 201 }
    }
  },
  '/'
>
export default routes
