type AttachmentCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: string | undefined
}
type Error = {
  help?: string | undefined
  message?: string | undefined
  phrase?: string | undefined
}
type ErrorResponse = { errors?: Error[] | undefined }
type AttachmentRequest = {
  connect_to_app?: boolean | undefined
  file?: File | undefined
  name?: string | undefined
  parent?: string | undefined
  resource_subtype?:
    | 'asana'
    | 'dropbox'
    | 'gdrive'
    | 'onedrive'
    | 'box'
    | 'vimeo'
    | 'external'
    | undefined
  url?: string | undefined
}
type AttachmentResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: string | undefined
  connected_to_app?: boolean | undefined
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  host?: string | undefined
  parent?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
        resource_subtype?: (string | null) | undefined
      }
    | undefined
  permanent_url?: (string | null) | undefined
  size?: number | undefined
  view_url?: (string | null) | undefined
}
type EmptyResponse = { [x: string]: unknown }
type BatchRequestAction = {
  data?: { [x: string]: unknown } | undefined
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head'
  options?:
    | { fields?: string[] | undefined; limit?: number | undefined; offset?: number | undefined }
    | undefined
  relative_path: string
}
type BatchRequest = { actions?: BatchRequestAction[] | undefined }
type BatchResponse = {
  body?: { [x: string]: unknown } | undefined
  headers?: { [x: string]: unknown } | undefined
  status_code?: number | undefined
}
type EnumOption = {
  gid?: string | undefined
  resource_type?: string | undefined
  color?: string | undefined
  enabled?: boolean | undefined
  name?: string | undefined
}
type CustomFieldRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  date_value?: { date?: string | undefined; date_time?: string | undefined } | undefined
  display_value?: (string | null) | undefined
  enabled?: boolean | undefined
  enum_options?: EnumOption[] | undefined
  enum_value?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        color?: string | undefined
        enabled?: boolean | undefined
        name?: string | undefined
      }
    | undefined
  multi_enum_values?: EnumOption[] | undefined
  name?: string | undefined
  number_value?: number | undefined
  resource_subtype?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | undefined
  text_value?: string | undefined
  type?: 'text' | 'enum' | 'multi_enum' | 'number' | undefined
  asana_created_field?:
    | 'a_v_requirements'
    | 'account_name'
    | 'actionable'
    | 'align_shipping_link'
    | 'align_status'
    | 'allotted_time'
    | 'appointment'
    | 'approval_stage'
    | 'approved'
    | 'article_series'
    | 'board_committee'
    | 'browser'
    | 'campaign_audience'
    | 'campaign_project_status'
    | 'campaign_regions'
    | 'channel_primary'
    | 'client_topic_type'
    | 'complete_by'
    | 'contact'
    | 'contact_email_address'
    | 'content_channels'
    | 'content_channels_needed'
    | 'content_stage'
    | 'content_type'
    | 'contract'
    | 'contract_status'
    | 'cost'
    | 'creation_stage'
    | 'creative_channel'
    | 'creative_needed'
    | 'creative_needs'
    | 'data_sensitivity'
    | 'deal_size'
    | 'delivery_appt'
    | 'delivery_appt_date'
    | 'department'
    | 'department_responsible'
    | 'design_request_needed'
    | 'design_request_type'
    | 'discussion_category'
    | 'do_this_task'
    | 'editorial_content_status'
    | 'editorial_content_tag'
    | 'editorial_content_type'
    | 'effort'
    | 'effort_level'
    | 'est_completion_date'
    | 'estimated_time'
    | 'estimated_value'
    | 'expected_cost'
    | 'external_steps_needed'
    | 'favorite_idea'
    | 'feedback_type'
    | 'financial'
    | 'funding_amount'
    | 'grant_application_process'
    | 'hiring_candidate_status'
    | 'idea_status'
    | 'ids_link'
    | 'ids_patient_link'
    | 'implementation_stage'
    | 'insurance'
    | 'interview_area'
    | 'interview_question_score'
    | 'itero_scan_link'
    | 'job_s_applied_to'
    | 'lab'
    | 'launch_status'
    | 'lead_status'
    | 'localization_language'
    | 'localization_market_team'
    | 'localization_status'
    | 'meeting_minutes'
    | 'meeting_needed'
    | 'minutes'
    | 'mrr'
    | 'must_localize'
    | 'name_of_foundation'
    | 'need_to_follow_up'
    | 'next_appointment'
    | 'next_steps_sales'
    | 'num_people'
    | 'number_of_user_reports'
    | 'office_location'
    | 'onboarding_activity'
    | 'owner'
    | 'participants_needed'
    | 'patient_date_of_birth'
    | 'patient_email'
    | 'patient_phone'
    | 'patient_status'
    | 'phone_number'
    | 'planning_category'
    | 'point_of_contact'
    | 'position'
    | 'post_format'
    | 'prescription'
    | 'priority'
    | 'priority_level'
    | 'product'
    | 'product_stage'
    | 'progress'
    | 'project_size'
    | 'project_status'
    | 'proposed_budget'
    | 'publish_status'
    | 'reason_for_scan'
    | 'referral'
    | 'request_type'
    | 'research_status'
    | 'responsible_department'
    | 'responsible_team'
    | 'risk_assessment_status'
    | 'room_name'
    | 'sales_counterpart'
    | 'sentiment'
    | 'shipping_link'
    | 'social_channels'
    | 'stage'
    | 'status'
    | 'status_design'
    | 'status_of_initiative'
    | 'system_setup'
    | 'task_progress'
    | 'team'
    | 'team_marketing'
    | 'team_responsible'
    | 'time_it_takes_to_complete_tasks'
    | 'timeframe'
    | 'treatment_type'
    | 'type_work_requests_it'
    | 'use_agency'
    | 'user_name'
    | 'vendor_category'
    | 'vendor_type'
    | 'word_count'
    | undefined
  currency_code?: (string | null) | undefined
  custom_label?: (string | null) | undefined
  custom_label_position?: 'prefix' | 'suffix' | undefined
  description?: string | undefined
  format?: 'currency' | 'identifier' | 'percentage' | 'custom' | 'none' | undefined
  has_notifications_enabled?: boolean | undefined
  is_global_to_workspace?: boolean | undefined
  precision?: number | undefined
  people_value?: string[] | undefined
  workspace: string
}
type UserCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type CustomFieldResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  date_value?: { date?: string | undefined; date_time?: string | undefined } | undefined
  display_value?: (string | null) | undefined
  enabled?: boolean | undefined
  enum_options?: EnumOption[] | undefined
  enum_value?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        color?: string | undefined
        enabled?: boolean | undefined
        name?: string | undefined
      }
    | undefined
  multi_enum_values?: EnumOption[] | undefined
  name?: string | undefined
  number_value?: number | undefined
  resource_subtype?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | undefined
  text_value?: string | undefined
  type?: 'text' | 'enum' | 'multi_enum' | 'number' | undefined
  asana_created_field?:
    | 'a_v_requirements'
    | 'account_name'
    | 'actionable'
    | 'align_shipping_link'
    | 'align_status'
    | 'allotted_time'
    | 'appointment'
    | 'approval_stage'
    | 'approved'
    | 'article_series'
    | 'board_committee'
    | 'browser'
    | 'campaign_audience'
    | 'campaign_project_status'
    | 'campaign_regions'
    | 'channel_primary'
    | 'client_topic_type'
    | 'complete_by'
    | 'contact'
    | 'contact_email_address'
    | 'content_channels'
    | 'content_channels_needed'
    | 'content_stage'
    | 'content_type'
    | 'contract'
    | 'contract_status'
    | 'cost'
    | 'creation_stage'
    | 'creative_channel'
    | 'creative_needed'
    | 'creative_needs'
    | 'data_sensitivity'
    | 'deal_size'
    | 'delivery_appt'
    | 'delivery_appt_date'
    | 'department'
    | 'department_responsible'
    | 'design_request_needed'
    | 'design_request_type'
    | 'discussion_category'
    | 'do_this_task'
    | 'editorial_content_status'
    | 'editorial_content_tag'
    | 'editorial_content_type'
    | 'effort'
    | 'effort_level'
    | 'est_completion_date'
    | 'estimated_time'
    | 'estimated_value'
    | 'expected_cost'
    | 'external_steps_needed'
    | 'favorite_idea'
    | 'feedback_type'
    | 'financial'
    | 'funding_amount'
    | 'grant_application_process'
    | 'hiring_candidate_status'
    | 'idea_status'
    | 'ids_link'
    | 'ids_patient_link'
    | 'implementation_stage'
    | 'insurance'
    | 'interview_area'
    | 'interview_question_score'
    | 'itero_scan_link'
    | 'job_s_applied_to'
    | 'lab'
    | 'launch_status'
    | 'lead_status'
    | 'localization_language'
    | 'localization_market_team'
    | 'localization_status'
    | 'meeting_minutes'
    | 'meeting_needed'
    | 'minutes'
    | 'mrr'
    | 'must_localize'
    | 'name_of_foundation'
    | 'need_to_follow_up'
    | 'next_appointment'
    | 'next_steps_sales'
    | 'num_people'
    | 'number_of_user_reports'
    | 'office_location'
    | 'onboarding_activity'
    | 'owner'
    | 'participants_needed'
    | 'patient_date_of_birth'
    | 'patient_email'
    | 'patient_phone'
    | 'patient_status'
    | 'phone_number'
    | 'planning_category'
    | 'point_of_contact'
    | 'position'
    | 'post_format'
    | 'prescription'
    | 'priority'
    | 'priority_level'
    | 'product'
    | 'product_stage'
    | 'progress'
    | 'project_size'
    | 'project_status'
    | 'proposed_budget'
    | 'publish_status'
    | 'reason_for_scan'
    | 'referral'
    | 'request_type'
    | 'research_status'
    | 'responsible_department'
    | 'responsible_team'
    | 'risk_assessment_status'
    | 'room_name'
    | 'sales_counterpart'
    | 'sentiment'
    | 'shipping_link'
    | 'social_channels'
    | 'stage'
    | 'status'
    | 'status_design'
    | 'status_of_initiative'
    | 'system_setup'
    | 'task_progress'
    | 'team'
    | 'team_marketing'
    | 'team_responsible'
    | 'time_it_takes_to_complete_tasks'
    | 'timeframe'
    | 'treatment_type'
    | 'type_work_requests_it'
    | 'use_agency'
    | 'user_name'
    | 'vendor_category'
    | 'vendor_type'
    | 'word_count'
    | undefined
  currency_code?: (string | null) | undefined
  custom_label?: (string | null) | undefined
  custom_label_position?: 'prefix' | 'suffix' | undefined
  description?: string | undefined
  format?: 'currency' | 'identifier' | 'percentage' | 'custom' | 'none' | undefined
  has_notifications_enabled?: boolean | undefined
  is_global_to_workspace?: boolean | undefined
  precision?: number | undefined
  created_by?: UserCompact | undefined
  people_value?: UserCompact[] | undefined
}
type EnumOptionRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  color?: string | undefined
  enabled?: boolean | undefined
  name?: string | undefined
  insert_after?: string | undefined
  insert_before?: string | undefined
}
type EnumOptionInsertRequest = {
  after_enum_option?: string | undefined
  before_enum_option?: string | undefined
  enum_option: string
}
type EventResponse = {
  action?: string | undefined
  change?:
    | {
        action?: string | undefined
        added_value?: { [x: string]: unknown } | undefined
        field?: string | undefined
        new_value?: { [x: string]: unknown } | undefined
        removed_value?: { [x: string]: unknown } | undefined
      }
    | undefined
  created_at?: string | undefined
  parent?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  resource?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  type?: string | undefined
  user?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type GoalRelationshipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  contribution_weight?: number | undefined
  resource_subtype?: 'subgoal' | 'supporting_work' | undefined
  supporting_resource?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type GoalRelationshipResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  contribution_weight?: number | undefined
  resource_subtype?: 'subgoal' | 'supporting_work' | undefined
  supporting_resource?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  supported_goal?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
        owner?:
          | {
              gid?: string | undefined
              resource_type?: string | undefined
              name?: string | undefined
            }
          | undefined
      }
    | undefined
}
type GoalRelationshipRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  contribution_weight?: number | undefined
  resource_subtype?: 'subgoal' | 'supporting_work' | undefined
  supporting_resource?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  supported_goal?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
        owner?:
          | {
              gid?: string | undefined
              resource_type?: string | undefined
              name?: string | undefined
            }
          | undefined
      }
    | undefined
}
type GoalCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  owner?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type GoalRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  due_on?: (string | null) | undefined
  html_notes?: string | undefined
  is_workspace_level?: boolean | undefined
  liked?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  start_on?: (string | null) | undefined
  status?: (string | null) | undefined
  followers?: string[] | undefined
  owner?: (string | null) | undefined
  team?: (string | null) | undefined
  time_period?: (string | null) | undefined
  workspace?: string | undefined
}
type Like = { gid?: string | undefined; user?: UserCompact | undefined }
type GoalResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  due_on?: (string | null) | undefined
  html_notes?: string | undefined
  is_workspace_level?: boolean | undefined
  liked?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  start_on?: (string | null) | undefined
  status?: (string | null) | undefined
  current_status_update?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        resource_subtype?:
          | 'project_status_update'
          | 'portfolio_status_update'
          | 'goal_status_update'
          | undefined
        title?: string | undefined
      }
    | undefined
  followers?: UserCompact[] | undefined
  likes?: Like[] | undefined
  metric?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        currency_code?: (string | null) | undefined
        current_display_value?: string | undefined
        current_number_value?: number | undefined
        initial_number_value?: number | undefined
        precision?: number | undefined
        progress_source?:
          | 'manual'
          | 'subgoal_progress'
          | 'project_task_completion'
          | 'project_milestone_completion'
          | 'external'
          | undefined
        resource_subtype?: 'number' | undefined
        target_number_value?: number | undefined
        unit?: 'none' | 'currency' | 'percentage' | undefined
        can_manage?: boolean | undefined
      }
    | undefined
  num_likes?: number | undefined
  owner?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  team?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  time_period?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        display_name?: string | undefined
        end_on?: string | undefined
        period?: 'FY' | 'H1' | 'H2' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | undefined
        start_on?: string | undefined
      }
    | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type TaskAddFollowersRequest = { followers: string[] }
type GoalAddSupportingRelationshipRequest = {
  contribution_weight?: number | undefined
  insert_after?: string | undefined
  insert_before?: string | undefined
  supporting_resource: string
}
type GoalRemoveSupportingRelationshipRequest = { supporting_resource: string }
type GoalMetricBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  currency_code?: (string | null) | undefined
  current_display_value?: string | undefined
  current_number_value?: number | undefined
  initial_number_value?: number | undefined
  precision?: number | undefined
  progress_source?:
    | 'manual'
    | 'subgoal_progress'
    | 'project_task_completion'
    | 'project_milestone_completion'
    | 'external'
    | undefined
  resource_subtype?: 'number' | undefined
  target_number_value?: number | undefined
  unit?: 'none' | 'currency' | 'percentage' | undefined
}
type GoalMetricCurrentValueRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  current_number_value?: number | undefined
}
type ProjectCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type ProjectTemplateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type TaskCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_task' | 'milestone' | 'section' | 'approval' | undefined
}
type JobCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  new_project?: ProjectCompact | undefined
  new_project_template?: ProjectTemplateCompact | undefined
  new_task?: TaskCompact | undefined
  resource_subtype?: string | undefined
  status?: 'not_started' | 'in_progress' | 'succeeded' | 'failed' | undefined
}
type OrganizationExportRequest = { organization?: string | undefined }
type WorkspaceCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type OrganizationExportCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  organization?: WorkspaceCompact | undefined
  state?: 'pending' | 'started' | 'finished' | 'error' | undefined
}
type PortfolioCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type PortfolioMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  portfolio?: PortfolioCompact | undefined
  user?: UserCompact | undefined
}
type PortfolioRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  members?: string[] | undefined
  public?: boolean | undefined
  workspace?: string | undefined
}
type CustomFieldSettingResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  custom_field?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        date_value?: { date?: string | undefined; date_time?: string | undefined } | undefined
        display_value?: (string | null) | undefined
        enabled?: boolean | undefined
        enum_options?: EnumOption[] | undefined
        enum_value?:
          | {
              gid?: string | undefined
              resource_type?: string | undefined
              color?: string | undefined
              enabled?: boolean | undefined
              name?: string | undefined
            }
          | undefined
        multi_enum_values?: EnumOption[] | undefined
        name?: string | undefined
        number_value?: number | undefined
        resource_subtype?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | undefined
        text_value?: string | undefined
        type?: 'text' | 'enum' | 'multi_enum' | 'number' | undefined
        asana_created_field?:
          | 'a_v_requirements'
          | 'account_name'
          | 'actionable'
          | 'align_shipping_link'
          | 'align_status'
          | 'allotted_time'
          | 'appointment'
          | 'approval_stage'
          | 'approved'
          | 'article_series'
          | 'board_committee'
          | 'browser'
          | 'campaign_audience'
          | 'campaign_project_status'
          | 'campaign_regions'
          | 'channel_primary'
          | 'client_topic_type'
          | 'complete_by'
          | 'contact'
          | 'contact_email_address'
          | 'content_channels'
          | 'content_channels_needed'
          | 'content_stage'
          | 'content_type'
          | 'contract'
          | 'contract_status'
          | 'cost'
          | 'creation_stage'
          | 'creative_channel'
          | 'creative_needed'
          | 'creative_needs'
          | 'data_sensitivity'
          | 'deal_size'
          | 'delivery_appt'
          | 'delivery_appt_date'
          | 'department'
          | 'department_responsible'
          | 'design_request_needed'
          | 'design_request_type'
          | 'discussion_category'
          | 'do_this_task'
          | 'editorial_content_status'
          | 'editorial_content_tag'
          | 'editorial_content_type'
          | 'effort'
          | 'effort_level'
          | 'est_completion_date'
          | 'estimated_time'
          | 'estimated_value'
          | 'expected_cost'
          | 'external_steps_needed'
          | 'favorite_idea'
          | 'feedback_type'
          | 'financial'
          | 'funding_amount'
          | 'grant_application_process'
          | 'hiring_candidate_status'
          | 'idea_status'
          | 'ids_link'
          | 'ids_patient_link'
          | 'implementation_stage'
          | 'insurance'
          | 'interview_area'
          | 'interview_question_score'
          | 'itero_scan_link'
          | 'job_s_applied_to'
          | 'lab'
          | 'launch_status'
          | 'lead_status'
          | 'localization_language'
          | 'localization_market_team'
          | 'localization_status'
          | 'meeting_minutes'
          | 'meeting_needed'
          | 'minutes'
          | 'mrr'
          | 'must_localize'
          | 'name_of_foundation'
          | 'need_to_follow_up'
          | 'next_appointment'
          | 'next_steps_sales'
          | 'num_people'
          | 'number_of_user_reports'
          | 'office_location'
          | 'onboarding_activity'
          | 'owner'
          | 'participants_needed'
          | 'patient_date_of_birth'
          | 'patient_email'
          | 'patient_phone'
          | 'patient_status'
          | 'phone_number'
          | 'planning_category'
          | 'point_of_contact'
          | 'position'
          | 'post_format'
          | 'prescription'
          | 'priority'
          | 'priority_level'
          | 'product'
          | 'product_stage'
          | 'progress'
          | 'project_size'
          | 'project_status'
          | 'proposed_budget'
          | 'publish_status'
          | 'reason_for_scan'
          | 'referral'
          | 'request_type'
          | 'research_status'
          | 'responsible_department'
          | 'responsible_team'
          | 'risk_assessment_status'
          | 'room_name'
          | 'sales_counterpart'
          | 'sentiment'
          | 'shipping_link'
          | 'social_channels'
          | 'stage'
          | 'status'
          | 'status_design'
          | 'status_of_initiative'
          | 'system_setup'
          | 'task_progress'
          | 'team'
          | 'team_marketing'
          | 'team_responsible'
          | 'time_it_takes_to_complete_tasks'
          | 'timeframe'
          | 'treatment_type'
          | 'type_work_requests_it'
          | 'use_agency'
          | 'user_name'
          | 'vendor_category'
          | 'vendor_type'
          | 'word_count'
          | undefined
        currency_code?: (string | null) | undefined
        custom_label?: (string | null) | undefined
        custom_label_position?: 'prefix' | 'suffix' | undefined
        description?: string | undefined
        format?: 'currency' | 'identifier' | 'percentage' | 'custom' | 'none' | undefined
        has_notifications_enabled?: boolean | undefined
        is_global_to_workspace?: boolean | undefined
        precision?: number | undefined
        created_by?: UserCompact | undefined
        people_value?: UserCompact[] | undefined
      }
    | undefined
  is_important?: boolean | undefined
  parent?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  project?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type CustomFieldCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  date_value?: { date?: string | undefined; date_time?: string | undefined } | undefined
  display_value?: (string | null) | undefined
  enabled?: boolean | undefined
  enum_options?: EnumOption[] | undefined
  enum_value?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        color?: string | undefined
        enabled?: boolean | undefined
        name?: string | undefined
      }
    | undefined
  multi_enum_values?: EnumOption[] | undefined
  name?: string | undefined
  number_value?: number | undefined
  resource_subtype?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | undefined
  text_value?: string | undefined
  type?: 'text' | 'enum' | 'multi_enum' | 'number' | undefined
}
type PortfolioResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  current_status_update?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        resource_subtype?:
          | 'project_status_update'
          | 'portfolio_status_update'
          | 'goal_status_update'
          | undefined
        title?: string | undefined
      }
    | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
  custom_fields?: CustomFieldCompact[] | undefined
  due_on?: (string | null) | undefined
  members?: UserCompact[] | undefined
  owner?: UserCompact | undefined
  permalink_url?: string | undefined
  public?: boolean | undefined
  start_on?: (string | null) | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type AddCustomFieldSettingRequest = {
  custom_field: string
  insert_after?: string | undefined
  insert_before?: string | undefined
  is_important?: boolean | undefined
}
type PortfolioAddItemRequest = {
  insert_after?: string | undefined
  insert_before?: string | undefined
  item: string
}
type AddMembersRequest = { members: string }
type RemoveCustomFieldSettingRequest = { custom_field: string }
type PortfolioRemoveItemRequest = { item: string }
type RemoveMembersRequest = { members: string }
type ProjectBriefResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  html_text?: string | undefined
  title?: string | undefined
  permalink_url?: string | undefined
  project?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  text?: string | undefined
}
type ProjectBriefRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  html_text?: string | undefined
  title?: string | undefined
  text?: string | undefined
}
type ProjectMembershipResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
  project?: ProjectCompact | undefined
  write_access?: 'full_write' | 'comment_only' | undefined
}
type ProjectStatusResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  title?: string | undefined
  color: 'green' | 'yellow' | 'red' | 'blue'
  html_text?: string | undefined
  text: string
  author?: UserCompact | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  modified_at?: string | undefined
}
type DateVariableCompact = {
  description?: string | undefined
  gid?: string | undefined
  name?: string | undefined
}
type ProjectTemplateResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  description?: string | undefined
  html_description?: string | undefined
  owner?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  public?: boolean | undefined
  requested_dates?: DateVariableCompact[] | undefined
  team?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type DateVariableRequest = { gid?: string | undefined; value?: (string | null) | undefined }
type ProjectTemplateInstantiateProjectRequest = {
  is_strict?: boolean | undefined
  name: string
  public: boolean
  requested_dates?: DateVariableRequest[] | undefined
  team?: string | undefined
  workspace?: string | undefined
}
type ProjectRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  archived?: boolean | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  created_at?: string | undefined
  current_status?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        title?: string | undefined
        color: 'green' | 'yellow' | 'red' | 'blue'
        html_text?: string | undefined
        text: string
        author?: UserCompact | undefined
        created_at?: string | undefined
        created_by?: UserCompact | undefined
        modified_at?: string | undefined
      }
    | undefined
  current_status_update?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        resource_subtype?:
          | 'project_status_update'
          | 'portfolio_status_update'
          | 'goal_status_update'
          | undefined
        title?: string | undefined
      }
    | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
  default_view?: 'list' | 'board' | 'calendar' | 'timeline' | undefined
  due_date?: (string | null) | undefined
  due_on?: (string | null) | undefined
  html_notes?: string | undefined
  is_template?: boolean | undefined
  members?: UserCompact[] | undefined
  modified_at?: string | undefined
  notes?: string | undefined
  public?: boolean | undefined
  start_on?: (string | null) | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  custom_fields?: { [x: string]: string } | undefined
  followers?: string | undefined
  owner?: (string | null) | undefined
  team?: string | undefined
}
type ProjectResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  archived?: boolean | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  created_at?: string | undefined
  current_status?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        title?: string | undefined
        color: 'green' | 'yellow' | 'red' | 'blue'
        html_text?: string | undefined
        text: string
        author?: UserCompact | undefined
        created_at?: string | undefined
        created_by?: UserCompact | undefined
        modified_at?: string | undefined
      }
    | undefined
  current_status_update?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        resource_subtype?:
          | 'project_status_update'
          | 'portfolio_status_update'
          | 'goal_status_update'
          | undefined
        title?: string | undefined
      }
    | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
  default_view?: 'list' | 'board' | 'calendar' | 'timeline' | undefined
  due_date?: (string | null) | undefined
  due_on?: (string | null) | undefined
  html_notes?: string | undefined
  is_template?: boolean | undefined
  members?: UserCompact[] | undefined
  modified_at?: string | undefined
  notes?: string | undefined
  public?: boolean | undefined
  start_on?: (string | null) | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  completed?: boolean | undefined
  completed_at?: (string | null) | undefined
  completed_by?: UserCompact | undefined
  created_from_template?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  custom_fields?: CustomFieldCompact[] | undefined
  followers?: UserCompact[] | undefined
  icon?:
    | 'list'
    | 'board'
    | 'timeline'
    | 'calendar'
    | 'rocket'
    | 'people'
    | 'graph'
    | 'star'
    | 'bug'
    | 'light_bulb'
    | 'globe'
    | 'gear'
    | 'notebook'
    | 'computer'
    | 'check'
    | 'target'
    | 'html'
    | 'megaphone'
    | 'chat_bubbles'
    | 'briefcase'
    | 'page_layout'
    | 'mountain_flag'
    | 'puzzle'
    | 'presentation'
    | 'line_and_symbols'
    | 'speed_dial'
    | 'ribbon'
    | 'shoe'
    | 'shopping_basket'
    | 'map'
    | 'ticket'
    | 'coins'
    | undefined
  owner?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  permalink_url?: string | undefined
  project_brief?: { gid?: string | undefined; resource_type?: string | undefined } | undefined
  team?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type AddFollowersRequest = { followers: string }
type ProjectDuplicateRequest = {
  include?:
    | 'members'
    | 'notes'
    | 'forms'
    | 'task_notes'
    | 'task_assignee'
    | 'task_subtasks'
    | 'task_attachments'
    | 'task_dates'
    | 'task_dependencies'
    | 'task_followers'
    | 'task_tags'
    | 'task_projects'
    | undefined
  name: string
  schedule_dates?:
    | { due_on?: string | undefined; should_skip_weekends: boolean; start_on?: string | undefined }
    | undefined
  team?: string | undefined
}
type ProjectMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
}
type ProjectStatusCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  title?: string | undefined
}
type ProjectStatusBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  title?: string | undefined
  color: 'green' | 'yellow' | 'red' | 'blue'
  html_text?: string | undefined
  text: string
}
type RemoveFollowersRequest = { followers: string }
type ProjectSaveAsTemplateRequest = {
  name: string
  public: boolean
  team?: string | undefined
  workspace?: string | undefined
}
type SectionCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type SectionRequest = {
  insert_after?: string | undefined
  insert_before?: string | undefined
  name: string
}
type SectionResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  created_at?: string | undefined
  project?: ProjectCompact | undefined
  projects?: ProjectCompact[] | undefined
}
type ProjectSectionInsertRequest = {
  after_section?: string | undefined
  before_section?: string | undefined
  project: string
  section: string
}
type TaskCountResponse = {
  num_completed_milestones?: number | undefined
  num_completed_tasks?: number | undefined
  num_incomplete_milestones?: number | undefined
  num_incomplete_tasks?: number | undefined
  num_milestones?: number | undefined
  num_tasks?: number | undefined
}
type SectionTaskInsertRequest = {
  insert_after?: string | undefined
  insert_before?: string | undefined
  task: string
}
type StatusUpdateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?:
    | 'project_status_update'
    | 'portfolio_status_update'
    | 'goal_status_update'
    | undefined
  title?: string | undefined
}
type StatusUpdateRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?:
    | 'project_status_update'
    | 'portfolio_status_update'
    | 'goal_status_update'
    | undefined
  title?: string | undefined
  html_text?: string | undefined
  status_type:
    | 'on_track'
    | 'at_risk'
    | 'off_track'
    | 'on_hold'
    | 'complete'
    | 'achieved'
    | 'partial'
    | 'missed'
    | 'dropped'
  text: string
  parent: {}
}
type StatusUpdateResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?:
    | 'project_status_update'
    | 'portfolio_status_update'
    | 'goal_status_update'
    | undefined
  title?: string | undefined
  html_text?: string | undefined
  status_type:
    | 'on_track'
    | 'at_risk'
    | 'off_track'
    | 'on_hold'
    | 'complete'
    | 'achieved'
    | 'partial'
    | 'missed'
    | 'dropped'
  text: string
  author?: UserCompact | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  modified_at?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  parent?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type StoryResponseDates = {
  due_at?: (string | null) | undefined
  due_on?: string | undefined
  start_on?: (string | null) | undefined
}
type Preview = {
  fallback?: string | undefined
  footer?: string | undefined
  header?: string | undefined
  header_link?: string | undefined
  html_text?: string | undefined
  text?: string | undefined
  title?: string | undefined
  title_link?: string | undefined
}
type StoryCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  resource_subtype?: string | undefined
  text?: string | undefined
}
type TagCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type StoryResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  html_text?: string | undefined
  is_pinned?: boolean | undefined
  resource_subtype?: string | undefined
  sticker_name?:
    | 'green_checkmark'
    | 'people_dancing'
    | 'dancing_unicorn'
    | 'heart'
    | 'party_popper'
    | 'people_waving_flags'
    | 'splashing_narwhal'
    | 'trophy'
    | 'yeti_riding_unicorn'
    | 'celebrating_people'
    | 'determined_climbers'
    | 'phoenix_spreading_love'
    | undefined
  text?: string | undefined
  assignee?: UserCompact | undefined
  created_by?: UserCompact | undefined
  custom_field?: CustomFieldCompact | undefined
  dependency?: TaskCompact | undefined
  duplicate_of?: TaskCompact | undefined
  duplicated_from?: TaskCompact | undefined
  follower?: UserCompact | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  is_editable?: boolean | undefined
  is_edited?: boolean | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  new_approval_status?: string | undefined
  new_date_value?:
    | {
        due_at?: (string | null) | undefined
        due_on?: string | undefined
        start_on?: (string | null) | undefined
      }
    | undefined
  new_dates?: StoryResponseDates | undefined
  new_enum_value?: EnumOption | undefined
  new_multi_enum_values?: EnumOption[] | undefined
  new_name?: string | undefined
  new_number_value?: number | undefined
  new_people_value?: UserCompact[] | undefined
  new_resource_subtype?: string | undefined
  new_section?: SectionCompact | undefined
  new_text_value?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  old_approval_status?: string | undefined
  old_date_value?:
    | {
        due_at?: (string | null) | undefined
        due_on?: string | undefined
        start_on?: (string | null) | undefined
      }
    | undefined
  old_dates?: StoryResponseDates | undefined
  old_enum_value?: EnumOption | undefined
  old_multi_enum_values?: EnumOption[] | undefined
  old_name?: string | undefined
  old_number_value?: number | undefined
  old_people_value?: UserCompact[] | undefined
  old_resource_subtype?: string | undefined
  old_section?: SectionCompact | undefined
  old_text_value?: string | undefined
  previews?: Preview[] | undefined
  project?: ProjectCompact | undefined
  source?: 'web' | 'email' | 'mobile' | 'api' | 'unknown' | undefined
  story?: StoryCompact | undefined
  tag?: TagCompact | undefined
  target?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
        resource_subtype?: 'default_task' | 'milestone' | 'section' | 'approval' | undefined
      }
    | undefined
  task?: TaskCompact | undefined
  type?: 'comment' | 'system' | undefined
}
type StoryBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  html_text?: string | undefined
  is_pinned?: boolean | undefined
  resource_subtype?: string | undefined
  sticker_name?:
    | 'green_checkmark'
    | 'people_dancing'
    | 'dancing_unicorn'
    | 'heart'
    | 'party_popper'
    | 'people_waving_flags'
    | 'splashing_narwhal'
    | 'trophy'
    | 'yeti_riding_unicorn'
    | 'celebrating_people'
    | 'determined_climbers'
    | 'phoenix_spreading_love'
    | undefined
  text?: string | undefined
}
type TagRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  notes?: string | undefined
  followers?: string[] | undefined
  workspace?: string | undefined
}
type TagResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'dark-pink'
    | 'dark-green'
    | 'dark-blue'
    | 'dark-red'
    | 'dark-teal'
    | 'dark-brown'
    | 'dark-orange'
    | 'dark-purple'
    | 'dark-warm-gray'
    | 'light-pink'
    | 'light-green'
    | 'light-blue'
    | 'light-red'
    | 'light-teal'
    | 'light-brown'
    | 'light-orange'
    | 'light-purple'
    | 'light-warm-gray'
    | undefined
  notes?: string | undefined
  created_at?: string | undefined
  followers?: UserCompact[] | undefined
  permalink_url?: string | undefined
  workspace?: WorkspaceCompact | undefined
}
type AsanaResource = { gid?: string | undefined; resource_type?: string | undefined }
type TaskRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_task' | 'milestone' | 'section' | 'approval' | undefined
  actual_time_minutes?: (number | null) | undefined
  approval_status?: 'pending' | 'approved' | 'rejected' | 'changes_requested' | undefined
  assignee_status?: 'today' | 'upcoming' | 'later' | 'new' | 'inbox' | undefined
  completed?: boolean | undefined
  completed_at?: (string | null) | undefined
  completed_by?: UserCompact | undefined
  created_at?: string | undefined
  dependencies?: AsanaResource[] | undefined
  dependents?: AsanaResource[] | undefined
  due_at?: (string | null) | undefined
  due_on?: (string | null) | undefined
  external?: { data?: string | undefined; gid?: string | undefined } | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  html_notes?: string | undefined
  is_rendered_as_separator?: boolean | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  memberships?:
    | { project?: ProjectCompact | undefined; section?: SectionCompact | undefined }[]
    | undefined
  modified_at?: string | undefined
  notes?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  num_subtasks?: number | undefined
  start_at?: (string | null) | undefined
  start_on?: (string | null) | undefined
  assignee?: (string | null) | undefined
  assignee_section?: (string | null) | undefined
  custom_fields?: { [x: string]: string } | undefined
  followers?: string[] | undefined
  parent?: (string | null) | undefined
  projects?: string[] | undefined
  tags?: string[] | undefined
  workspace?: string | undefined
}
type TaskResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_task' | 'milestone' | 'section' | 'approval' | undefined
  actual_time_minutes?: (number | null) | undefined
  approval_status?: 'pending' | 'approved' | 'rejected' | 'changes_requested' | undefined
  assignee_status?: 'today' | 'upcoming' | 'later' | 'new' | 'inbox' | undefined
  completed?: boolean | undefined
  completed_at?: (string | null) | undefined
  completed_by?: UserCompact | undefined
  created_at?: string | undefined
  dependencies?: AsanaResource[] | undefined
  dependents?: AsanaResource[] | undefined
  due_at?: (string | null) | undefined
  due_on?: (string | null) | undefined
  external?: { data?: string | undefined; gid?: string | undefined } | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  html_notes?: string | undefined
  is_rendered_as_separator?: boolean | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  memberships?:
    | { project?: ProjectCompact | undefined; section?: SectionCompact | undefined }[]
    | undefined
  modified_at?: string | undefined
  notes?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  num_subtasks?: number | undefined
  start_at?: (string | null) | undefined
  start_on?: (string | null) | undefined
  assignee?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  assignee_section?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  custom_fields?: CustomFieldResponse[] | undefined
  followers?: UserCompact[] | undefined
  parent?:
    | {
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
        resource_subtype?: 'default_task' | 'milestone' | 'section' | 'approval' | undefined
      }
    | undefined
  permalink_url?: string | undefined
  projects?: ProjectCompact[] | undefined
  tags?: TagCompact[] | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type ModifyDependenciesRequest = { dependencies?: string[] | undefined }
type ModifyDependentsRequest = { dependents?: string[] | undefined }
type TaskAddProjectRequest = {
  insert_after?: (string | null) | undefined
  insert_before?: (string | null) | undefined
  project: string
  section?: (string | null) | undefined
}
type TaskAddTagRequest = { tag: string }
type TaskDuplicateRequest = {
  include?:
    | 'notes'
    | 'assignee'
    | 'subtasks'
    | 'attachments'
    | 'tags'
    | 'followers'
    | 'projects'
    | 'dates'
    | 'dependencies'
    | 'parent'
    | undefined
  name?: string | undefined
}
type TaskRemoveFollowersRequest = { followers: string[] }
type TaskRemoveProjectRequest = { project: string }
type TaskRemoveTagRequest = { tag: string }
type TaskSetParentRequest = {
  insert_after?: string | undefined
  insert_before?: string | undefined
  parent: string
}
type TeamCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type TeamMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  is_guest?: boolean | undefined
  team?: TeamCompact | undefined
  user?: UserCompact | undefined
}
type TeamRequest = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  description?: string | undefined
  html_description?: string | undefined
  organization?: string | undefined
  visibility?: 'secret' | 'request_to_join' | 'public' | undefined
}
type TeamResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  description?: string | undefined
  html_description?: string | undefined
  organization?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  permalink_url?: string | undefined
  visibility?: 'secret' | 'request_to_join' | 'public' | undefined
}
type TeamAddUserRequest = { user?: string | undefined }
type TeamRemoveUserRequest = { user?: string | undefined }
type TimePeriodCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  display_name?: string | undefined
  end_on?: string | undefined
  period?: 'FY' | 'H1' | 'H2' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | undefined
  start_on?: string | undefined
}
type TimePeriodResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  display_name?: string | undefined
  end_on?: string | undefined
  period?: 'FY' | 'H1' | 'H2' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | undefined
  start_on?: string | undefined
  parent?: TimePeriodCompact | undefined
}
type UserTaskListCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  owner?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
  workspace?:
    | { gid?: string | undefined; resource_type?: string | undefined; name?: string | undefined }
    | undefined
}
type UserResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  email?: string | undefined
  photo?:
    | ({
        image_1024x1024?: string | undefined
        image_128x128?: string | undefined
        image_21x21?: string | undefined
        image_27x27?: string | undefined
        image_36x36?: string | undefined
        image_60x60?: string | undefined
      } | null)
    | undefined
  workspaces?: WorkspaceCompact[] | undefined
}
type AsanaNamedResource = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type WorkspaceMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
  workspace?: WorkspaceCompact | undefined
}
type WebhookResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  active?: boolean | undefined
  resource?: AsanaNamedResource | undefined
  target?: string | undefined
  created_at?: string | undefined
  filters?:
    | {
        action?: string | undefined
        fields?: string[] | undefined
        resource_subtype?: string | undefined
        resource_type?: string | undefined
      }[]
    | undefined
  last_failure_at?: string | undefined
  last_failure_content?: string | undefined
  last_success_at?: string | undefined
}
type WebhookRequest = {
  filters?:
    | {
        action?: string | undefined
        fields?: string[] | undefined
        resource_subtype?: string | undefined
        resource_type?: string | undefined
      }[]
    | undefined
  resource: string
  target: string
}
type WebhookUpdateRequest = {
  filters?:
    | {
        action?: string | undefined
        fields?: string[] | undefined
        resource_subtype?: string | undefined
        resource_type?: string | undefined
      }[]
    | undefined
}
type WorkspaceMembershipResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
  workspace?: WorkspaceCompact | undefined
  is_active?: boolean | undefined
  is_admin?: boolean | undefined
  is_guest?: boolean | undefined
  user_task_list?: UserTaskListCompact | undefined
  vacation_dates?:
    | ({ end_on?: (string | null) | undefined; start_on?: string | undefined } | null)
    | undefined
}
type WorkspaceResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  email_domains?: string[] | undefined
  is_organization?: boolean | undefined
}
type WorkspaceAddUserRequest = { user?: string | undefined }
type UserBaseResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  email?: string | undefined
  photo?:
    | ({
        image_1024x1024?: string | undefined
        image_128x128?: string | undefined
        image_21x21?: string | undefined
        image_27x27?: string | undefined
        image_36x36?: string | undefined
        image_60x60?: string | undefined
      } | null)
    | undefined
}
type AuditLogEvent = {
  actor?:
    | {
        actor_type?:
          | 'user'
          | 'asana'
          | 'asana_support'
          | 'anonymous'
          | 'external_administrator'
          | undefined
        email?: string | undefined
        gid?: string | undefined
        name?: string | undefined
      }
    | undefined
  context?:
    | {
        api_authentication_method?:
          | 'cookie'
          | 'oauth'
          | 'personal_access_token'
          | 'service_account'
          | undefined
        client_ip_address?: string | undefined
        context_type?:
          | 'web'
          | 'desktop'
          | 'mobile'
          | 'asana_support'
          | 'asana'
          | 'email'
          | 'api'
          | undefined
        oauth_app_name?: string | undefined
        user_agent?: string | undefined
      }
    | undefined
  created_at?: string | undefined
  details?: {} | undefined
  event_category?: string | undefined
  event_type?: string | undefined
  gid?: string | undefined
  resource?:
    | {
        email?: string | undefined
        gid?: string | undefined
        name?: string | undefined
        resource_subtype?: string | undefined
        resource_type?: string | undefined
      }
    | undefined
}
type WorkspaceRemoveUserRequest = { user?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/attachments': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: AttachmentCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                parent: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: { data?: AttachmentResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { form: AttachmentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/attachments/:attachment_gid': {
      $delete:
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: AttachmentResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/batch': {
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: { data?: BatchResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: BatchRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields': {
      $post:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields/:custom_field_gid': {
      $delete:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: CustomFieldRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields/:custom_field_gid/enum_options': {
      $post:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields/:custom_field_gid/enum_options/insert': {
      $post:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/enum_options/:enum_option_gid': {
      $put:
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: EnumOptionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: {
              data?: EventResponse[] | undefined
              has_more?: boolean | undefined
              sync?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                resource: string
                sync?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goal_relationships': {
      $get:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: { data?: GoalRelationshipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                supported_goal: string
                resource_subtype?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goal_relationships/:goal_relationship_gid': {
      $get:
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals': {
      $get:
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: GoalCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                project?: string | undefined
                is_workspace_level?: boolean | undefined
                team?: string | undefined
                workspace?: string | undefined
                time_periods?: string[] | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid': {
      $delete:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/addFollowers': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/addSupportingRelationship': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalAddSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/parentGoals': {
      $get:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: GoalCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/removeFollowers': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/removeSupportingRelationship': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalRemoveSupportingRelationshipRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/setMetric': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/setMetricCurrentValue': {
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: GoalMetricCurrentValueRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/jobs/:job_gid': {
      $get:
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization_exports': {
      $post:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: { data?: OrganizationExportCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: OrganizationExportRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization_exports/:organization_export_gid': {
      $get:
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: OrganizationExportCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolio_memberships': {
      $get:
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: PortfolioMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                portfolio?: string | undefined
                workspace?: string | undefined
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolio_memberships/:portfolio_membership_gid': {
      $get:
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: PortfolioMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: PortfolioCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                owner: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid': {
      $delete:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/addCustomFieldSetting': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: { data?: CustomFieldSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/addItem': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioAddItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/addMembers': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/custom_field_settings': {
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: CustomFieldSettingResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/items': {
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/portfolio_memberships': {
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: PortfolioMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/removeCustomFieldSetting': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/removeItem': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: PortfolioRemoveItemRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/removeMembers': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_briefs/:project_brief_gid': {
      $delete:
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
      $put:
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_memberships/:project_membership_gid': {
      $get:
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: ProjectMembershipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_statuses/:project_status_gid': {
      $delete:
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: ProjectStatusResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_templates': {
      $get:
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: ProjectTemplateCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_templates/:project_template_gid': {
      $get:
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: ProjectTemplateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_templates/:project_template_gid/instantiateProject': {
      $post:
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                team?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid': {
      $delete:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/addCustomFieldSetting': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: { data?: CustomFieldSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: AddCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/addFollowers': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/addMembers': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: AddMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/custom_field_settings': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: CustomFieldSettingResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/duplicate': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/project_briefs': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectBriefRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/project_memberships': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: ProjectMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                user?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/project_statuses': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: ProjectStatusCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: { data?: ProjectStatusResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectStatusBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/removeCustomFieldSetting': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined }
            } & { json: { data?: RemoveCustomFieldSettingRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/removeFollowers': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/removeMembers': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: RemoveMembersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/saveAsTemplate': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSaveAsTemplateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/sections': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: SectionCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/sections/insert': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectSectionInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/task_counts': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCountResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/tasks': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sections/:section_gid': {
      $delete:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sections/:section_gid/addTask': {
      $post:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: SectionTaskInsertRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sections/:section_gid/tasks': {
      $get:
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/status_updates': {
      $get:
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: StatusUpdateCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent: string
                created_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: { data?: StatusUpdateResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: StatusUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/status_updates/:status_gid': {
      $delete:
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: StatusUpdateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { status_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stories/:story_gid': {
      $delete:
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: TagCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/:tag_gid': {
      $delete:
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/:tag_gid/tasks': {
      $get:
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                assignee?: string | undefined
                project?: string | undefined
                section?: string | undefined
                workspace?: string | undefined
                completed_since?: string | undefined
                modified_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid': {
      $delete:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addDependencies': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addDependents': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addFollowers': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addProject': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addTag': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskAddTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/dependencies': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/dependents': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/duplicate': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskDuplicateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/projects': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeDependencies': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependenciesRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeDependents': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ModifyDependentsRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeFollowers': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveFollowersRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeProject': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeTag': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRemoveTagRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/setParent': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskSetParentRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/stories': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: StoryBase | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/subtasks': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TaskRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/tags': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TagCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team_memberships': {
      $get:
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                team?: string | undefined
                user?: string | undefined
                workspace?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/team_memberships/:team_membership_gid': {
      $get:
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: TeamMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams': {
      $post:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            } & { json: { data?: TeamRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/addUser': {
      $post:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: { data?: TeamMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/project_templates': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: ProjectTemplateCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/projects': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/removeUser': {
      $post:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TeamRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/team_memberships': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/users': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: { data?: UserCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_periods': {
      $get:
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TimePeriodCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start_on?: string | undefined
                end_on?: string | undefined
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_periods/:time_period_gid': {
      $get:
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: TimePeriodResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user_task_lists/:user_task_list_gid': {
      $get:
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: UserTaskListCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user_task_lists/:user_task_list_gid/tasks': {
      $get:
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                completed_since?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: UserCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workspace?: string | undefined
                team?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: UserResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/favorites': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: { data?: AsanaNamedResource[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                resource_type:
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | 'project_template'
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/team_memberships': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/teams': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: { data?: TeamCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
                organization: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/user_task_list': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: { data?: UserTaskListCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                workspace: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/workspace_memberships': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: WorkspaceMembershipCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: WebhookResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                workspace: string
                resource?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: { data?: WebhookResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/:webhook_gid': {
      $delete:
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: WebhookResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: { data?: WebhookResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WebhookUpdateRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspace_memberships/:workspace_membership_gid': {
      $get:
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: WorkspaceMembershipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces': {
      $get:
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: WorkspaceCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: { data?: WorkspaceResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: { data?: WorkspaceResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceCompact | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/addUser': {
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: { data?: UserBaseResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceAddUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/audit_log_events': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: AuditLogEvent[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string | undefined
                end_at?: string | undefined
                event_type?: string | undefined
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                  | undefined
                actor_gid?: string | undefined
                resource_gid?: string | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/custom_fields': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: CustomFieldResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/projects': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                archived?: boolean | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: ProjectRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/removeUser': {
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: WorkspaceRemoveUserRequest | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/tags': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: TagCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: number | undefined
                offset?: string | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: boolean | undefined; opt_fields?: string[] | undefined }
            } & { json: { data?: TagResponse | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/tasks/search': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                text?: string | undefined
                resource_subtype?: 'default_task' | 'milestone' | undefined
                'assignee.any'?: string | undefined
                'assignee.not'?: string | undefined
                'portfolios.any'?: string | undefined
                'projects.any'?: string | undefined
                'projects.not'?: string | undefined
                'projects.all'?: string | undefined
                'sections.any'?: string | undefined
                'sections.not'?: string | undefined
                'sections.all'?: string | undefined
                'tags.any'?: string | undefined
                'tags.not'?: string | undefined
                'tags.all'?: string | undefined
                'teams.any'?: string | undefined
                'followers.not'?: string | undefined
                'created_by.any'?: string | undefined
                'created_by.not'?: string | undefined
                'assigned_by.any'?: string | undefined
                'assigned_by.not'?: string | undefined
                'liked_by.not'?: string | undefined
                'commented_on_by.not'?: string | undefined
                'due_on.before'?: string | undefined
                'due_on.after'?: string | undefined
                due_on?: (string | null) | undefined
                'due_at.before'?: string | undefined
                'due_at.after'?: string | undefined
                'start_on.before'?: string | undefined
                'start_on.after'?: string | undefined
                start_on?: (string | null) | undefined
                'created_on.before'?: string | undefined
                'created_on.after'?: string | undefined
                created_on?: (string | null) | undefined
                'created_at.before'?: string | undefined
                'created_at.after'?: string | undefined
                'completed_on.before'?: string | undefined
                'completed_on.after'?: string | undefined
                completed_on?: (string | null) | undefined
                'completed_at.before'?: string | undefined
                'completed_at.after'?: string | undefined
                'modified_on.before'?: string | undefined
                'modified_on.after'?: string | undefined
                modified_on?: (string | null) | undefined
                'modified_at.before'?: string | undefined
                'modified_at.after'?: string | undefined
                is_blocking?: boolean | undefined
                is_blocked?: boolean | undefined
                has_attachment?: boolean | undefined
                completed?: boolean | undefined
                is_subtask?: boolean | undefined
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | undefined
                sort_ascending?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/teams': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: { data?: TeamCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                limit?: number | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/typeahead': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: { data?: AsanaNamedResource[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                resource_type:
                  | 'custom_field'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'user'
                type?:
                  | 'custom_field'
                  | 'portfolio'
                  | 'project'
                  | 'tag'
                  | 'task'
                  | 'user'
                  | undefined
                query?: string | undefined
                count?: number | undefined
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/users': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: { data?: UserCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_pretty?: boolean | undefined
                opt_fields?: string[] | undefined
                offset?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/workspace_memberships': {
      $get: {
        input: { param: { workspace_gid: string } } & {
          query: {
            user?: string | undefined
            opt_pretty?: boolean | undefined
            opt_fields?: string[] | undefined
            limit?: number | undefined
            offset?: string | undefined
          }
        }
        output: { data?: WorkspaceMembershipCompact[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
